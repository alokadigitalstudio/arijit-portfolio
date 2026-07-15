import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Arijit Sanki | Full Stack Web Developer",
  description:
    "Modern portfolio of Arijit Sanki, Full Stack Web Developer specializing in responsive websites and web applications.",
  keywords: [
    "Arijit Sanki",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Arijit Sanki" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}