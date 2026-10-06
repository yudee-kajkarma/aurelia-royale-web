import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutHero from "@/assets/About-Hero.png";
import Vector1 from "@/assets/vector-1.png";
import Vector2 from "@/assets/vector-2.png";
import Vector3 from "@/assets/vector-3.png";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { assertLocale } from "@/i18n/locale-guard";
import { localeAlternates, localeUrl } from "@/lib/i18n/paths";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);
    const t = await getTranslations({ locale, namespace: "AboutPage" });

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
        alternates: {
            canonical: localeUrl(locale, "/about"),
            languages: localeAlternates("/about"),
        },
        robots: { index: true, follow: true },
    };
}

export default async function AboutPage() {
    const t = await getTranslations("AboutPage");

    const stats = [
        { value: "5+", label: t("statYearsLabel") },
        { value: "850+", label: t("statDesignsLabel") },
        { value: "1500+", label: t("statLoversLabel") },
    ];

    const philosophyItems = [
        {
            no: "01",
            title: t("qualityTitle"),
            body: t("qualityBody"),
            icon: Vector1,
        },
        {
            no: "02",
            title: t("ethicalTitle"),
            body: t("ethicalBody"),
            icon: Vector2,
        },
        {
            no: "03",
            title: t("timelessTitle"),
            body: t("timelessBody"),
            icon: Vector3,
        },
    ];

    return (
        <main className="min-h-screen overflow-x-clip bg-background">
            {/* Hero banner */}
            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc]">
                <div className="mx-auto flex h-[300px] max-w-7xl items-center justify-center px-6">
                    <h1 className="font-[family-name:var(--font-cormorant)] text-7xl font-semibold uppercase tracking-[0.04em] text-foreground sm:text-8xl">
                        {t("heroTitle")}
                    </h1>
                </div>
            </section>

            {/* Legacy / intro */}
            <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-gold" />
                        <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                            {t("introEyebrow")}
                        </p>
                    </div>

                    <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground sm:text-6xl">
                        {t("introHeading")}
                    </h2>

                    <div className="mt-8 space-y-6 font-[family-name:var(--font-jost)] text-[1.05rem] font-light  text-[#3b3b3b]">
                        <p>{t("introParagraph1")}</p>
                        <p>{t("introParagraph2")}</p>
                    </div>

                    <div className="mt-11 flex justify-between  gap-x-7 gap-y-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="font-[family-name:var(--font-cormorant)] text-6xl font-semibold leading-none text-gold">
                                    {stat.value}
                                </p>
                                <p className="mt-3 font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#5a5a5a]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-140 w-full">
                    <Image
                        src={AboutHero}
                        alt={t("heroImageAlt")}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </section>

            {/* Our philosophy */}
            <section className="relative left-1/2 w-screen -translate-x-1/2 [background:radial-gradient(ellipse_115%_85%_at_50%_16%,#2e5a48_0%,#173f31_52%,#0a261c_100%)]">
                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-gold" />
                        <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                            {t("philosophyEyebrow")}
                        </p>
                    </div>

                    <h2 className="mt-7 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.12] text-[#f3f1e4] sm:text-6xl">
                        {t("philosophyHeadingPart1")}{" "}
                        <span className="text-gold">—</span> {t("philosophyHeadingPart2")}
                    </h2>

                    <div className="mt-20 grid gap-14 sm:grid-cols-3 sm:gap-10">
                        {philosophyItems.map((item) => (
                            <div key={item.no}>
                                <div className="flex items-center justify-between md: gap-10">
                                    <span className="font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-none text-white/30">
                                        {item.no}
                                    </span>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={44}
                                        height={44}
                                        className="h-11 w-11 object-contain"
                                    />
                                </div>

                                <h3 className="mt-7 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#f3f1e4]">
                                    {item.title}
                                </h3>
                                <p className="mt-4 font-[family-name:var(--font-jost)] text-lg font-light leading-[1.8] text-[#FAE9BD]">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialSlider />

            <NewsletterSection />
        </main>
    );
}
