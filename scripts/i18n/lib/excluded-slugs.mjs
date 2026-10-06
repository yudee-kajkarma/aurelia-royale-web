// scripts/i18n/lib/excluded-slugs.mjs

/**
 * Blog slugs that are redirect SOURCES in next.config.ts (via
 * src/lib/i18n/blogRedirects.ts), and so are not servable. This is a plain-JS
 * mirror of BLOG_REDIRECTS there — kept as a separate literal because this
 * file is consumed by extract-blogs.mjs under plain Node ESM, which cannot
 * import the .ts module directly. Must stay equal to REDIRECTED_AWAY_SLUGS;
 * a test in src/lib/i18n/localeRedirects.test.ts enforces it.
 */
export const EXCLUDED_SLUGS = [
    "advantages-of-lab-grown-diamonds",
    "total-carat-weight-diamond-jewellery",
    "lab-grown-diamond-description-disclosure",
    "how-to-check-metal-used-diamond-jewellery",
    "how-to-verify-an-igi-certificate-number",
    "carat-weight-vs-visible-size-diamond",
    "buy-lab-grown-diamond-jewellery-online-europe",
    "check-diamond-information-complete",
    "does-every-lab-grown-diamond-need-certification",
    "high-quality-lab-grown-diamond-jewellery",
    "how-to-measure-wrist-for-bracelet",
    "how-to-select-necklace-length",
    "lab-grown-diamonds-vs-moissanite",
    "prevent-necklaces-tangling",
    "read-lab-grown-diamond-certificate",
    "similar-diamond-jewellery-different-prices",
];
