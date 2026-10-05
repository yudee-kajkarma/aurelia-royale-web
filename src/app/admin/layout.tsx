import type { Metadata } from "next";
import { ArrowUp } from "lucide-react";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";
import { WishlistProvider } from "@/providers/WishlistProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { fontClassNames } from "../fonts";

/**
 * The admin panel stays English-only and outside `src/app/[locale]/`, so it
 * does not get the providers/chrome bundled into `[locale]/layout.tsx`
 * (AuthProvider, CartProvider, WishlistProvider, Header/Footer — all of
 * which `Header` needs via useAuth/useCart/useWishlist). Before the locale
 * split these came from the single shared `src/app/layout.tsx`; this layout
 * reproduces that same stack, with a static `lang="en"` instead of a
 * dynamic locale and no next-intl provider.
 */
export const metadata: Metadata = {
    title: {
        default: "Aurelia Royale | Luxury Lab-Grown Diamond Jewelry",
        template: "%s | Aurelia Royale",
    },
    description:
        "Aurelia Royale crafts fine lab-grown diamond jewelry — rings, earrings, necklaces, bracelets and more, designed for timeless elegance and sustainable luxury.",
};

export default function AdminLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${fontClassNames} h-full antialiased`}>
            <body
                id="top"
                className="min-h-full flex flex-col bg-background text-foreground"
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
