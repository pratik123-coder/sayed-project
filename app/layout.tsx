import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/Navbar";
import ReadyToGetStarted from "@/components/GetStarted";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneTKT",
  description: "A RangeQi product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrelineScript />
        <Navbar />
        {children}
        <ReadyToGetStarted />
      </body>
    </html>
  );
}
