import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
        locale,
        messages,

        // A single absent key must never 500 a page. Log it and render a
        // visible marker so `check-i18n` and the crawl can find it.
        onError(error) {
            if (error.code === "MISSING_MESSAGE") {
                console.error(`[i18n] missing translation: ${error.message}`);
            } else {
                throw error;
            }
        },

        getMessageFallback({ namespace, key }) {
            return `[MISSING: ${[namespace, key].filter(Boolean).join(".")}]`;
        },
    };
});
