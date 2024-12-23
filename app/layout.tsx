import type { Metadata } from "next";
import localFont from "next/font/local";
import { TwebProvider } from "@/contexts/thirdweb";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";

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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <TwebProvider>
          <div className="relative min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 container">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </TwebProvider>
      </body>
    </html>
  );
}
