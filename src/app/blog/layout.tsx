import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

// ---------------------------------------------------------------------------
// Blog section layout — Server Component
// ---------------------------------------------------------------------------


export const metadata: Metadata = {
  title: "Lab-Grown Diamond Jewellery Guides | Aurelia Royale",
  description:
    "Explore expert guides on lab-grown diamonds covering education, buying advice, sizing, certification, care and maintenance. Written for buyers of fine diamond jewellery.",
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lab-Grown Diamond Jewellery Guides | Aurelia Royale",
    description:
      "Explore expert guides on lab-grown diamonds covering education, buying advice, sizing, certification, care and maintenance.",
    url: `${SITE_URL}/blog/`,
    siteName: "Aurelia Royale",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
