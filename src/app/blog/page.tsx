import { Metadata } from "next";
import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

type PageProps = {
  searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "Guides & Insights - Aurelia Royale",
  description: "Explore our collection of articles, expert guides, and sizing tips to help you select and care for your lab-grown diamond jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/",
  },
};

export const metadataEs: Metadata = {
  title: "Guías y Consejos - Aurelia Royale",
  description: "Explore nuestra colección de artículos, guías de expertos y consejos de tamaño para ayudarle a seleccionar y cuidar sus joyas de diamantes cultivados en laboratorio.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/blog/",
  },
};

export const metadataFr: Metadata = {
  title: "Guides & Conseils - Aurelia Royale",
  description: "Explorez notre collection d'articles, de guides d'experts et de conseils de taille pour vous aider à choisir et entretenir vos bijoux en diamants de laboratoire.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/blog/",
  },
};

export const metadataDe: Metadata = {
  title: "Ratgeber & Einblicke - Aurelia Royale",
  description: "Entdecken Sie unsere Artikel, Experten-Ratgeber und Größentipps zur Auswahl und Pflege Ihrer laborgezüchteten Diamanten.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/",
  },
};

export const metadataIt: Metadata = {
  title: "Guide e Approfondimenti - Aurelia Royale",
  description: "Esplora la nostra collezione di articoli, guide esperte e consigli sulle taglie per aiutarti a scegliere e prenderti cura dei tuoi gioielli con diamanti coltivati in laboratorio.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/",
  },
};

export const metadataNl: Metadata = {
  title: "Gidsen & Inzichten - Aurelia Royale",
  description: "Verken onze collectie artikelen, gidsen van experts en maattips om uw laboratoriumdiamanten te kiezen en te onderhouden.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/blog/",
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

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = params.locale ?? "en";
  return <BlogIndexContent initialLocale={locale} />;
}
