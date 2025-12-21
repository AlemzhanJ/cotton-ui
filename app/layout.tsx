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
  title: "Cotton UI",
  description: "Soft fabric-inspired component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#aed2e6' }}>
      <head>
        <meta name="theme-color" content="#aed2e6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#aed2e6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#aed2e6' }}
      >
        {children}
      </body>
    </html>
  );
}
