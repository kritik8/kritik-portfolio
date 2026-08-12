import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kritik Jain — Software Engineer, AI Systems & Research",
  description:
    "Personal portfolio of Kritik Jain — Final-year B.Tech IT student at IIIT Bhopal. Building software, AI systems, and research-driven products.",
  keywords: [
    "Kritik Jain",
    "Software Engineer",
    "AI Engineer",
    "Backend Engineer",
    "Machine Learning",
    "IIIT Bhopal",
    "Portfolio",
    "Research",
  ],
  authors: [{ name: "Kritik Jain" }],
  creator: "Kritik Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kritik Jain — Software Engineer, AI Systems & Research",
    description:
      "Building software, AI systems, and research-driven products. Final-year B.Tech IT at IIIT Bhopal.",
    siteName: "Kritik Jain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kritik Jain — Software Engineer, AI Systems & Research",
    description: "Building software, AI systems, and research-driven products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
