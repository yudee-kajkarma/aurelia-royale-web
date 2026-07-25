import { SITE_NAME, SITE_URL } from "@/config/site";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo/Aurelia-Royale-Embossed-Logo.png`,
    };
}

export function websiteSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
    };
}

export function breadcrumbSchema(
    items: Array<{ name: string; url: string }>,
): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
