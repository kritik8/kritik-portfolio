import tls from "node:tls";

export interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export function sendEmailViaSMTP(options: MailOptions, auth: { user: string; pass: string }): Promise<void> {
  return new Promise((resolve, reject) => {
    // Gmail SMTP runs on port 465 using SSL/TLS
    const socket = tls.connect({
      host: "smtp.gmail.com",
      port: 465,
    });

    let buffer = "";
    let currentStep = 0;

    const write = (str: string) => {
      socket.write(str + "\r\n");
    };

    socket.on("data", (data) => {
      buffer += data.toString("utf-8");
      const lines = buffer.split("\r\n");
      // Keep last incomplete line in the buffer
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.trim()) continue;
        const code = parseInt(line.substring(0, 3));
        const isLastLineOfResponse = line.charAt(3) !== "-";

        if (isLastLineOfResponse) {
          handleResponse(code, line);
        }
      }
    });

    socket.on("error", (err) => {
      reject(err);
    });

    socket.on("close", () => {
      // Completed or socket closed
    });

    function handleResponse(code: number, line: string) {
      try {
        if (currentStep === 0) {
          // 220 Greeting received
          if (code !== 220) throw new Error("SMTP Greeting failed: " + line);
          currentStep++;
          write("EHLO localhost");
        } else if (currentStep === 1) {
          // EHLO response (250)
          if (code !== 250) throw new Error("SMTP EHLO failed: " + line);
          currentStep++;
          write("AUTH LOGIN");
        } else if (currentStep === 2) {
          // AUTH LOGIN response (334 Username prompt)
          if (code !== 334) throw new Error("SMTP AUTH LOGIN failed: " + line);
          currentStep++;
          write(Buffer.from(auth.user).toString("base64"));
        } else if (currentStep === 3) {
          // Username response (334 Password prompt)
          if (code !== 334) throw new Error("SMTP Username failed: " + line);
          currentStep++;
          write(Buffer.from(auth.pass).toString("base64"));
        } else if (currentStep === 4) {
          // Password response (235 Auth success)
          if (code !== 235) throw new Error("SMTP Auth failed: " + line);
          currentStep++;
          write(`MAIL FROM:<${options.from}>`);
        } else if (currentStep === 5) {
          // MAIL FROM response
          if (code !== 250) throw new Error("SMTP MAIL FROM failed: " + line);
          currentStep++;
          write(`RCPT TO:<${options.to}>`);
        } else if (currentStep === 6) {
          // RCPT TO response
          if (code !== 250) throw new Error("SMTP RCPT TO failed: " + line);
          currentStep++;
          write("DATA");
        } else if (currentStep === 7) {
          // DATA response (354 Go ahead)
          if (code !== 354) throw new Error("SMTP DATA command failed: " + line);
          currentStep++;

          const headers = [
            `From: ${options.from}`,
            `To: ${options.to}`,
            `Subject: ${options.subject}`,
            `MIME-Version: 1.0`,
            `Content-Type: text/plain; charset=utf-8`,
            "",
            options.text,
            "."
          ].join("\r\n");

          write(headers);
        } else if (currentStep === 8) {
          // Message accepted (250)
          if (code !== 250) throw new Error("SMTP Message Send failed: " + line);
          currentStep++;
          write("QUIT");
          resolve();
        }
      } catch (err) {
        socket.destroy();
        reject(err);
      }
    }
  });
}
