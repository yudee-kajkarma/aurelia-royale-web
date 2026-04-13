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
};

export default nextConfig;