import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return children;
}
