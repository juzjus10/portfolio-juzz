import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital Realities",
  description: "Crafting digital realities through innovative web development",
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
