import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
    // Everything except: api routes, Next internals, files with an extension,
    // sitemap/robots, and the English-only admin panel.
    matcher: [
        "/((?!api|_next|admin|.*\\..*|sitemap.xml|robots.txt).*)",
    ],
};
