import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/layout/Navbar";
import CursorDot from "@/components/ui/CursorDot";

export const metadata: Metadata = {
  title: {
    default: "Kritik Jain — Backend Engineer · AI · Research",
    template: "%s · Kritik Jain",
  },
  description:
    "Personal website of Kritik Jain — Backend engineer specialising in Node.js, Go, distributed systems, and applied AI/LLMs. Final-year B.Tech IT at IIIT Bhopal.",
  keywords: ["Kritik Jain", "Backend Engineer", "Node.js", "Go", "Distributed Systems", "Applied AI", "LLM", "Machine Learning", "IIIT Bhopal", "Research"],
  authors: [{ name: "Kritik Jain" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kritik Jain — Backend Engineer · AI · Research",
    description: "Building distributed systems, AI pipelines, and research-driven software.",
    siteName: "Kritik Jain",
    url: "https://kritikjain.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kritik Jain — Backend Engineer · AI · Research",
    description: "Building distributed systems, AI pipelines, and research-driven software.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <CursorDot />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
