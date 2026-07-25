import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Account/transactional and admin areas add no SEO value and
            // shouldn't be crawled.
            disallow: [
                "/admin/",
                "/cart/",
                "/checkout/",
                "/wishlist/",
                "/orders/",
                "/payments/",
                "/profile/",
                "/login/",
                "/register/",
            ],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
