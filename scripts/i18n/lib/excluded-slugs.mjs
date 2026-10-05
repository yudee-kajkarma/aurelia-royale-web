// scripts/i18n/lib/excluded-slugs.mjs

/**
 * Blog slugs that are redirect SOURCES in next.config.ts, and so are not
 * servable. Must stay equal to REDIRECTED_AWAY_SLUGS in
 * src/lib/i18n/blogRedirects.ts — Task 14 adds a test that enforces it.
 */
export const EXCLUDED_SLUGS = ["advantages-of-lab-grown-diamonds"];
