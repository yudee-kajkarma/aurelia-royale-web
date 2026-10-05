import { ArrowUp } from "lucide-react";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageTransition } from "./PageTransition";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";
import { WishlistProvider } from "@/providers/WishlistProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { fontClassNames } from "@/app/fonts";

/**
 * Document shell and global chrome shared by the only two layouts that render a
 * document: `[locale]/layout.tsx` (storefront, six locales) and
 * `admin/layout.tsx` (English-only, outside the locale tree).
 *
 * `lang` is the only thing that differs between them. Keeping the shell here
 * means a new global provider cannot reach one layout and silently miss the
 * other. NextIntlClientProvider is included for BOTH callers because `Header`
 * uses translations, so admin needs the context too.
 */
export function SiteShell({
    lang,
    children,
}: {
    lang: string;
    children: React.ReactNode;
}) {
    return (
        <html lang={lang} className={`${fontClassNames} h-full antialiased`}>
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
