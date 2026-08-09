import { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/assets/About-Hero.png";
import Vector1 from "@/assets/vector-1.png";
import Vector2 from "@/assets/vector-2.png";
import Vector3 from "@/assets/vector-3.png";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import nl from "@/locales/nl.json";
import de from "@/locales/de.json";
import it from "@/locales/it.json";

const translations: Record<string, any> = { en, es, fr, nl, de, it };

function getTranslation(keyPath: string, locale: string): string {
    const keys = keyPath.split(".");
    let current: any = translations[locale];
    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = current[key];
        } else {
            return keyPath;
        }
    }
    return typeof current === "string" ? current : keyPath;
}

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "About Us - Aurelia Royale",
  description: "Learn about Aurelia Royale's heritage of fine craft, ethical lab-grown diamond sourcing, and timeless jewellery design.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/about/",
  },
};

export const metadataEs: Metadata = {
  title: "Sobre Nosotros - Aurelia Royale",
  description: "Conozca el legado de artesanía de Aurelia Royale, el abastecimiento ético de diamantes y el diseño atemporal.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/about/",
  },
};

export const metadataFr: Metadata = {
  title: "À Propos de Nous - Aurelia Royale",
  description: "Découvrez notre histoire, notre artisanat d'art et notre engagement pour le luxe durable.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/about/",
  },
};

export const metadataNl: Metadata = {
  title: "Over Ons - Aurelia Royale",
  description: "Ontdek onze geschiedenis, ons vakmanschap en onze inzet voor duurzame luxe.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/about/",
  },
};

export const metadataDe: Metadata = {
  title: "Über Uns - Aurelia Royale",
  description: "Erfahren Sie mehr über Aurelia Royales Tradition feiner Handwerkskunst, ethische Beschaffung von Labordiamanten und zeitloses Schmuckdesign.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/about/",
  },
};

export const metadataIt: Metadata = {
  title: "Chi Siamo - Aurelia Royale",
  description: "Scopri l'eredità di Aurelia Royale nell'alta artigianalità, l'approvvigionamento etico di diamanti coltivati in laboratorio e il design di gioielli senza tempo.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/about/",
  },
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = params.locale;
  if (locale === "it") return metadataIt;
  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
}

export default async function AboutPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const locale = params.locale ?? "en";

    const stats = [
        { value: "5+", label: getTranslation("about.stat1Label", locale) },
        { value: "850+", label: getTranslation("about.stat2Label", locale) },
        { value: "1500+", label: getTranslation("about.stat3Label", locale) },
    ];

    const philosophyItems = [
        {
            no: "01",
            title: getTranslation("about.philo1Title", locale),
            body: getTranslation("about.philo1Body", locale),
            icon: Vector1,
        },
        {
            no: "02",
            title: getTranslation("about.philo2Title", locale),
            body: getTranslation("about.philo2Body", locale),
            icon: Vector2,
        },
        {
            no: "03",
            title: getTranslation("about.philo3Title", locale),
            body: getTranslation("about.philo3Body", locale),
            icon: Vector3,
        },
    ];

    return (
        <main className="min-h-screen overflow-x-clip bg-background">
            {/* Hero banner */}
            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc]">
                <div className="mx-auto flex h-[300px] max-w-7xl items-center justify-center px-6">
                    <h1 className="font-[family-name:var(--font-cormorant)] text-7xl font-semibold uppercase tracking-[0.04em] text-foreground sm:text-8xl">
                        {getTranslation("about.heroTitle", locale)}
                    </h1>
                </div>
            </section>

            {/* Legacy / intro */}
            <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-gold" />
                        <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                            {getTranslation("about.tag", locale)}
                        </p>
                    </div>

                    <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground sm:text-6xl">
                        {getTranslation("about.heading", locale)}
                    </h2>

                    <div className="mt-8 space-y-6 font-[family-name:var(--font-jost)] text-[1.05rem] font-light  text-[#3b3b3b]">
                        <p>{getTranslation("about.p1", locale)}</p>
                        <p>{getTranslation("about.p2", locale)}</p>
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
                        alt={
                          locale === "it" ? "Modella che indossa gioielli di alta gamma Aurelia Royale" :
                          locale === "de" ? "Model trägt Aurelia Royale Schmuck" :
                          locale === "nl" ? "Model dat Aurelia Royale-juwelen draagt" :
                          locale === "fr" ? "Mannequin portant de la haute joaillerie Aurelia Royale" :
                          locale === "es" ? "Modelo con joyas Aurelia Royale" :
                          "Model wearing Aurelia Royale jewellery"
                        }
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
                            {getTranslation("about.philosophyTag", locale)}
                        </p>
                    </div>

                    <h2 className="mt-7 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.12] text-[#f3f1e4] sm:text-6xl">
                        {getTranslation("about.philosophyHeading1", locale)}{" "}
                        <span className="text-gold">—</span> {getTranslation("about.philosophyHeading2", locale)}
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
