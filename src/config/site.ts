// Canonical site origin used for SEO (robots, sitemap, canonical tags, OG URLs).
// Override per-environment with NEXT_PUBLIC_SITE_URL; defaults to the www host
// (the non-www host is not the canonical one).
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aureliaroyale.com"
).replace(/\/$/, "");

export const SITE_NAME = "Aurelia Royale";
