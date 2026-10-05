import { setRequestLocale } from "next-intl/server";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteMetadata } from "@/app/siteMetadata";

/**
 * The admin panel stays English-only and outside `src/app/[locale]/`, so it
 * does not get the providers/chrome bundled into `[locale]/layout.tsx`
 * (AuthProvider, CartProvider, WishlistProvider, Header/Footer — all of
 * which `Header` needs via useAuth/useCart/useWishlist, and now also
 * NextIntlClientProvider, since `Header` calls useTranslations). Before the
 * locale split these came from the single shared `src/app/layout.tsx`; this
 * layout renders the same shared `SiteShell` as `[locale]/layout.tsx`, with
 * a static `lang="en"` instead of a dynamic locale.
 *
 * `setRequestLocale("en")` is called explicitly (rather than leaving it to
 * `src/i18n/request.ts`'s fallback-to-defaultLocale) for the same reason
 * `[locale]/layout.tsx` calls it: it avoids ever reading the locale from
 * request headers, which otherwise opts the route into dynamic rendering
 * and would prevent `/admin` from being statically prerendered.
 */
export const metadata = siteMetadata;

export default function AdminLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    setRequestLocale("en");

    return (
        <SiteShell lang="en" localeSwitcher={false}>
            {children}
        </SiteShell>
    );
}
