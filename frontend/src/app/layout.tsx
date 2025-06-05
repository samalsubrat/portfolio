import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/landingpage/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subrat Samal",
  description: "Full Stack Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
