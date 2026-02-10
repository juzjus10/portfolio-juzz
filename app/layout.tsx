import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juzz's Portfolio",
  description: "A showcase of my projects, skills, and experience as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-brand-dark text-gray-300 antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-rose-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
