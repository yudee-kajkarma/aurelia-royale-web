import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
// Relative import, not the `@/` alias: next.config.ts is evaluated before the
// app's module graph (and its path aliases) exist.
import { withLocaleVariants } from "./src/lib/i18n/localeRedirects";
import { BLOG_REDIRECTS } from "./src/lib/i18n/blogRedirects";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	trailingSlash: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ecommerce-application-kajkarma.s3.us-east-1.amazonaws.com",
			},
		],
	},
	// ---------------------------------------------------------------------------
	// Permanent redirects for broken alias URLs confirmed to return HTTP 404.
	// Each source is a wrong slug that was used in inbound links or old content.
	// The destination is the canonical slug that has an actual page.tsx route.
	// Next.js returns HTTP 308 (permanent) for these at the edge — no JS needed.
	// The rule table lives in src/lib/i18n/blogRedirects.ts; withLocaleVariants
	// expands each English rule into its five locale-prefixed siblings so a
	// locale-prefixed inbound link (e.g. /es/blog/old-slug/) redirects within
	// its own locale instead of 404ing.
	// ---------------------------------------------------------------------------
	async redirects() {
		return withLocaleVariants(BLOG_REDIRECTS);
	},
};

export default withNextIntl(nextConfig);