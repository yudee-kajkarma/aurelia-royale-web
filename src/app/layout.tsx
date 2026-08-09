import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
    Manrope,
    Playfair_Display,
    Cormorant_Garamond,
    Jost,
} from "next/font/google";
import { ArrowUp } from "lucide-react";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";
import { WishlistProvider } from "@/providers/WishlistProvider";
import { headers } from "next/headers";
import { LocaleProvider } from "@/utils/i18n";
import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Aurelia Royale - Luxury Jewelry Store",
    description:
        "Aurelia Royale is a luxury jewelry store that offers a wide range of exquisite jewelry pieces, including rings, earrings, bracelets, and more. Discover our collection of fine jewelry crafted with precision and elegance.",
    keywords: ["aurelia", "royale", "jewelry", "rings", "earrings", "bracelet"],
    authors: [{ name: "yudee.dev" }],

    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersList = await headers();
    const locale = headersList.get("x-locale") || "en";

    return (
        <html
            lang={locale}
            className={`${manrope.variable} ${playfair.variable} ${cormorant.variable} ${jost.variable} h-full antialiased`}
        >
            <body
                id="top"
                className="min-h-full flex flex-col  bg-background text-foreground"
            >
                <Script
                    id="suppress-extension-errors"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.addEventListener('error', (event) => {
                                if (event.filename && (event.filename.includes('chrome-extension://') || event.filename.includes('moz-extension://'))) {
                                    event.stopImmediatePropagation();
                                }
                            });
                            window.addEventListener('unhandledrejection', (event) => {
                                if (event.reason && event.reason.stack && (event.reason.stack.includes('chrome-extension://') || event.reason.stack.includes('moz-extension://'))) {
                                    event.stopImmediatePropagation();
                                }
                            });
                        `
                    }}
                />
                <Toaster
                    position="bottom-right"
                    theme="dark"
                    closeButton
                    expand
                    gap={10}
                    offset={20}
                />
                <AuthProvider>
                    <WishlistProvider>
                        <CartProvider>
                            <LocaleProvider locale={locale}>
                                <Header />
                                <main className="flex-1">
                                    <PageTransition>{children}</PageTransition>
                                </main>
                                <Footer />
                            </LocaleProvider>
                            <a
                                href="#top"
                                className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-gold bg-[#d3b442] text-white shadow-xl transition hover:scale-105"
                            >
                                <ArrowUp size={18} />
                            </a>
                        </CartProvider>
                    </WishlistProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
