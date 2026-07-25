import type { Metadata, Viewport } from "next";
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
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/config/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
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
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Aurelia Royale | Luxury Lab-Grown Diamond Jewelry",
        template: "%s | Aurelia Royale",
    },
    description:
        "Aurelia Royale crafts fine lab-grown diamond jewelry — rings, earrings, necklaces, bracelets and more, designed for timeless elegance and sustainable luxury.",
    alternates: {
        canonical: "/",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
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
            className={`${manrope.variable} ${playfair.variable} ${cormorant.variable} ${jost.variable} h-full antialiased`}
        >
            <body
                id="top"
                className="min-h-full flex flex-col  bg-background text-foreground"
            >
                <JsonLd data={[organizationSchema(), websiteSchema()]} />
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
                            <Header />
                            <main className="flex-1">
                                <PageTransition>{children}</PageTransition>
                            </main>
                            <Footer />
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
