import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Grey Platforms",
  description: "OneTkt: A OneTKT Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="squares-background"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
