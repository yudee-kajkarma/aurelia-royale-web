import type { Metadata } from "next";
import { ArrowUp } from "lucide-react";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";
import { WishlistProvider } from "@/providers/WishlistProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { routing } from "@/i18n/routing";
import { assertLocale } from "@/i18n/locale-guard";
import { fontClassNames } from "../fonts";

export const metadata: Metadata = {
    title: {
        default: "Aurelia Royale | Luxury Lab-Grown Diamond Jewelry",
        template: "%s | Aurelia Royale",
    },
    description:
        "Aurelia Royale crafts fine lab-grown diamond jewelry — rings, earrings, necklaces, bracelets and more, designed for timeless elegance and sustainable luxury.",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);

    // Required for static rendering of this subtree.
    setRequestLocale(locale);

    return (
        <html lang={locale} className={`${fontClassNames} h-full antialiased`}>
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
                <NextIntlClientProvider>
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
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
