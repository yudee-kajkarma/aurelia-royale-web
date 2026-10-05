import { defineRouting } from "next-intl/routing";

/**
 * Single source of truth for locales. `localePrefix: "as-needed"` keeps English
 * on its existing unprefixed URLs (/blog/x/) and serves every other locale
 * under a prefix (/es/blog/x/).
 *
 * `localeDetection: false` is deliberate: with detection on, a German-browser
 * visitor hitting / is silently redirected to /de/, which changes what existing
 * English traffic and crawlers see. Language changes only via the switcher.
 */
export const routing = defineRouting({
    locales: ["en", "fr", "it", "de", "nl", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
