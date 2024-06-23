import type { Metadata } from "next";
import { Public_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MetaDataJSON from "@/data/meta.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PUBLIC_SANS = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans"
});

const IBM_PLEX_MONO = IBM_Plex_Mono({
  weight: ['400', '600'],
  subsets: ["latin"],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: MetaDataJSON.title,
  description: MetaDataJSON.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${PUBLIC_SANS.variable} ${IBM_PLEX_MONO.variable}`}>
      <body className="dark">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
