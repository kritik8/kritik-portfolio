import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/layout/Navbar";
import CursorDot from "@/components/ui/CursorDot";

export const metadata: Metadata = {
  title: {
    default: "Kritik Jain — Software Engineer · AI · Research",
    template: "%s · Kritik Jain",
  },
  description:
    "Personal website of Kritik Jain — Software engineer, AI systems builder and researcher. Final-year B.Tech IT at IIIT Bhopal.",
  keywords: ["Kritik Jain", "Software Engineer", "AI Engineer", "Backend", "Machine Learning", "IIIT Bhopal", "Research"],
  authors: [{ name: "Kritik Jain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kritik Jain — Software Engineer · AI · Research",
    description: "Building software systems, AI products, and research-driven experiences.",
    siteName: "Kritik Jain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kritik Jain — Software Engineer · AI · Research",
    description: "Building software systems, AI products, and research-driven experiences.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <CursorDot />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
