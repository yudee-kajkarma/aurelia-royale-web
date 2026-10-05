import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import logo from "../../../public/logo/Logo-1.png";

export async function Footer() {
    const t = await getTranslations("Footer");
    const common = await getTranslations("Common");

    const footerLinks = [
        { href: "/", label: t("home") },
        { href: "/about", label: t("about") },
        { href: "/shop", label: t("shop") },
        { href: "/blog", label: t("blog") },
        { href: "/contact", label: t("contact") },
    ];

    return (
        <footer className="bg-[#0A362E] px-6 py-14 text-white sm:px-10 md:py-20">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 md:items-center md:text-center">
                <Link
                    href="/"
                    aria-label={common("siteName")}
                    className="flex items-center md:justify-center"
                >
                    <Image
                        src={logo}
                        alt={common("siteName")}
                        sizes="(max-width: 640px) 180px, 240px"
                        className="h-auto w-28 sm:w-44 lg:w-52.5"
                    />
                </Link>

                <p className="font-jost max-w-2xl text-[0.78rem] italic text-gold/90 sm:text-sm md:text-center">
                    {t("tagline")}
                </p>

                <nav
                    aria-label={t("navLabel")}
                    className="flex flex-col gap-5 text-[0.78rem] font-semibold uppercase tracking-[0.28em] sm:text-sm md:flex-row md:gap-12"
                >
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-gold"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="w-full border-t border-white/15 pt-6 md:pt-8">
                    <p className="font-jost text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-xs md:text-center">
                        {t("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
