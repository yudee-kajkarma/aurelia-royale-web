import type { NextConfig } from "next";

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
	// ---------------------------------------------------------------------------
	async redirects() {
		return [
			// --- Batch 1: confirmed broken aliases from audit ---
			{
				source: "/blog/total-carat-weight-diamond-jewellery/",
				destination: "/blog/total-carat-weight-meaning-diamond-jewellery/",
				permanent: true,
			},
			{
				source: "/blog/lab-grown-diamond-description-disclosure/",
				destination: "/blog/how-lab-grown-diamonds-should-be-disclosed/",
				permanent: true,
			},
			{
				source: "/blog/how-to-check-metal-used-diamond-jewellery/",
				destination: "/blog/check-metal-used-diamond-jewellery/",
				permanent: true,
			},
			{
				source: "/blog/how-to-verify-an-igi-certificate-number/",
				destination: "/blog/verify-igi-certificate-number/",
				permanent: true,
			},
			{
				source: "/blog/carat-weight-vs-visible-size-diamond/",
				destination: "/blog/carat-weight-vs-visible-diamond-size/",
				permanent: true,
			},
			// --- Batch 2: additional broken links found by full codebase scan ---
			{
				source: "/blog/buy-lab-grown-diamond-jewellery-online-europe/",
				destination: "/blog/buy-certified-lab-grown-diamond-jewellery-online/",
				permanent: true,
			},
			{
				source: "/blog/check-diamond-information-complete/",
				destination: "/blog/check-diamond-information-is-complete/",
				permanent: true,
			},
			{
				source: "/blog/does-every-lab-grown-diamond-need-certification/",
				destination: "/blog/do-lab-grown-diamonds-need-certification/",
				permanent: true,
			},
			{
				source: "/blog/high-quality-lab-grown-diamond-jewellery/",
				destination: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/",
				permanent: true,
			},
			{
				source: "/blog/how-to-measure-wrist-for-bracelet/",
				destination: "/blog/measure-wrist-for-bracelet/",
				permanent: true,
			},
			{
				source: "/blog/how-to-select-necklace-length/",
				destination: "/blog/select-right-necklace-length/",
				permanent: true,
			},
			{
				source: "/blog/lab-grown-diamonds-vs-moissanite/",
				destination: "/blog/lab-grown-diamond-vs-moissanite/",
				permanent: true,
			},
			{
				source: "/blog/prevent-necklaces-tangling/",
				destination: "/blog/store-diamond-jewellery/",
				permanent: true,
			},
			{
				source: "/blog/read-lab-grown-diamond-certificate/",
				destination: "/blog/how-to-read-lab-grown-diamond-certificate/",
				permanent: true,
			},
			{
				source: "/blog/similar-diamond-jewellery-different-prices/",
				destination: "/blog/what-determines-price-lab-grown-diamond-jewellery/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;