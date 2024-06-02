import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MetaDataJSON from "@/data/meta.json";

const opensans = Open_Sans({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-opensans" 
});

const versina = localFont({
  src: [{
    path: "../public/assets/fonts/Versina-ExtraBold.woff2",
    weight: "700"
  }],
  variable: "--font-versina"
})

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
    <html lang="en" className={`${versina.variable} ${opensans.className}`}>
      <body>{children}</body>
    </html>
  );
}
