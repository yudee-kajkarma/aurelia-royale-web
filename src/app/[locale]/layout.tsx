import { setRequestLocale } from "next-intl/server";
import { SiteShell } from "@/components/layout/SiteShell";
import { routing } from "@/i18n/routing";
import { assertLocale } from "@/i18n/locale-guard";
import { siteMetadata } from "@/app/siteMetadata";

export const metadata = siteMetadata;

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

    return <SiteShell lang={locale}>{children}</SiteShell>;
}
