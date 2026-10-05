import type { Locale } from "./routing";

/**
 * Each language's name in its own language — NOT a translatable message.
 * A switcher listing "German" in English is useless to the German speaker
 * looking for it.
 */
export const LOCALE_LABELS: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    it: "Italiano",
    de: "Deutsch",
    nl: "Nederlands",
    es: "Español",
};
