import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { ArrowUp } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dalila",
  description: "dalila - luxury jewelry storefront",
  keywords: ["dalila", "jewelry", "rings", "earrings", "bracelet", "watches"],
  authors: [{ name: "vecuro" }],
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col grain bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <a
          href="#top"
          className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--gold)] bg-[#d3b442] text-white shadow-xl transition hover:scale-105"
        >
          <ArrowUp size={18} />
        </a>
      </body>
    </html>
  );
}
