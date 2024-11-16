import type { Metadata } from "next";
import localFont from "next/font/local";
import { TwebProvider } from "@/contexts/thirdweb";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vote for Center",
  description: "Moo Deng Fan - Vote for Center Position",
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
        <TwebProvider>
          {children}
        </TwebProvider>
      </body>
    </html>
  );
}
