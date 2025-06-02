import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "Harsh Singh | Portfolio",
  description: "Hi, I'm Harsh Singh. A software developer specializing in building exceptional digital experiences.",
  keywords: ["Harsh Singh", "portfolio", "web developer","full-stack developer","competitive programmer", "nextjs", "react"],
  authors: [{ name: "Harsh Singh", url: "www.linkedin.com/in/harshsingh1104" }],
  openGraph: {
    title: "Harsh Singh | Portfolio",
    description: "Creative developer passionate about modern, accessible web apps.",
    siteName: "Harsh Singh's Portfolio",
    images: [
      {
        url: "/site-preview.png",
        width: 1200,
        height: 630,
        alt: "Harsh Singh's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Singh's | Portfolio",
    description: "Check out my work as a web developer.",
    images: ["/site-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
