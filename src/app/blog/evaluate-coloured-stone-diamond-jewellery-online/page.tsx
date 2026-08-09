import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Evaluating Coloured-Stone & Diamond Jewellery Online",
  description: "Learn how to evaluate mixed coloured-stone and diamond jewellery online using specifications, HD visual layouts, and lab report checks.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};

export const metadataEs: Metadata = {
  title: "Evaluación de joyas de diamantes y piedras de colores en línea",
  description: "Evaluación de joyas de diamantes y piedras de colores en línea - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};

export const metadataFr: Metadata = {
  title: "Évaluation en ligne de bijoux en pierres colorées et en diamants",
  description: "Évaluation en ligne de bijoux en pierres colorées et en diamants - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};

export const metadataNl: Metadata = {
  title: "Gekleurde steen- en diamantjuwelen online beoordelen",
  description: "Gekleurde steen- en diamantjuwelen online beoordelen - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};



export const metadataDe: Metadata = {
  title: "Online-Bewertung von Schmuck aus farbigen Steinen und Diamanten",
  description: "Online-Bewertung von Schmuck aus farbigen Steinen und Diamanten - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};


export const metadataIt: Metadata = {
  title: "Come valutare gioielli con pietre colorate e diamanti online",
  description: "Valuta le pietre preziose colorate con sicurezza. Impara a identificare le inclusioni visibili e a giudicare la consistenza del colore sotto luci diverse. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;
  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};

// 2. Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aureliaroyale.com/#organization",
      "name": "Aurelia Royale",
      "url": "https://www.aureliaroyale.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aureliaroyale.com/#website",
      "url": "https://www.aureliaroyale.com/",
      "name": "Aurelia Royale",
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/evaluate-coloured-stone-diamond-jewellery-online/1.jpg",
      "width": 1600,
      "height": 900,
      "caption": "Evaluating coloured stone and diamond jewelry layouts online"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/#article",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/"
      },
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "headline": "Evaluating Coloured-Stone & Diamond Jewellery Online: Specifications, Imagery & Audit Steps",
      "datePublished": "2026-07-16T09:00:00+00:00",
      "dateModified": "2026-07-16T09:00:00+00:00",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/",
      "wordCount": 1850,
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/#primaryimage"
      },
      "articleSection": "Coloured Stones and Diamonds",
      "inLanguage": "en-GB"
    }
  ]
};

// 3. Fallback English Article Sections
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/evaluate-coloured-stone-diamond-jewellery-online/1.jpg",
        alt: "Assessing a colored stone and diamond jewelry layout online",
        title: "Online Gem Valuation",
        caption: "Evaluate online jewelry using specifications, reports, scale metrics, and transaction terms.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Buying online removes the opportunity to hold a piece under different lights before paying. It should not remove the information needed to assess it."
      },
      {
        type: "paragraph",
        text: "A reliable evaluation combines three forms of evidence: complete product specifications, honest visual presentation, and verifiable commercial terms. No single photograph, certificate, or return policy is sufficient on its own."
      }
    ]
  },
  {
    heading: "Quick Answer",
    content: [
      {
        type: "paragraph",
        text: "Evaluate coloured-stone and diamond jewellery online in three passes. First, confirm every stone’s identity, natural or lab-created status, treatments, dimensions, and separate weights. Second, inspect neutral, macro, side, back, movement, and on-body imagery. Third, match any laboratory report to the item, verify the seller, read delivery, return, warranty, and customisation terms, and save the product description."
      }
    ]
  },
  {
    heading: "The Three-Pass Online Method",
    content: [
      {
        type: "table",
        headers: ["Pass", "Main Question", "Evidence Required"],
        rows: [
          ["1. Identity", "What exactly am I buying?", "Stone, treatment, origin, dimensions, weights, metal"],
          ["2. Appearance", "What can I reasonably expect it to look like?", "Accurate multi-angle images, video, scale, variation policy"],
          ["3. Transaction", "Can I verify and resolve a mismatch?", "Seller identity, report, delivery, returns, warranty, saved records"]
        ]
      }
    ]
  },
  {
    heading: "Pass One: Establish What the Piece Contains",
    content: [
      {
        type: "image",
        src: "/images/blog/evaluate-coloured-stone-diamond-jewellery-online/2.jpg",
        alt: "Checking exact gemstone metrics in specification charts",
        title: "Pass One Auditing",
        caption: "Core stone details, treatments, and weights must be separated explicitly."
      },
      {
        type: "paragraph",
        parts: [{ text: "1. Identify every stone separately: ", bold: true }, { text: "Verify gemstone species, lab-created or natural origin, and treatment. Ensure accents are named separately." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "2. Separate every carat figure: ", bold: true }]
      },
      {
        type: "table",
        headers: ["Figure", "Meaning"],
        rows: [
          ["Centre-stone carat weight", "Weight of the focal coloured stone or diamond"],
          ["Total side-stone weight", "Combined weight of accompanying gemstones"],
          ["Total carat weight (CTW / TCW)", "Sum of all stones on the piece. Do not confuse total weight with centre-stone weight."]
        ]
      }
    ]
  },
  {
    heading: "Pass Two: Evaluate Imagery and Visual Representation",
    content: [
      {
        type: "paragraph",
        text: "Inspect the item under multiple angles and lighting conditions. Ensure you have access to high-definition macro photos, rear mounting views, and movement videos."
      }
    ]
  },
  {
    heading: "Pass Three: Check the Laboratory Report and Seller Terms",
    content: [
      {
        type: "paragraph",
        text: "Examine the certification report (IGI, GIA or equivalent) carefully and verify the certificate number directly on the issuing laboratory's online verification service."
      }
    ]
  },
  {
    heading: "What to Do When the Jewellery Arrives",
    content: [
      {
        type: "paragraph",
        text: "Upon delivery, check the packaging, compare the piece with saved photos and the certificate, and inspect the stone under everyday lighting before altering or wearing the item."
      }
    ]
  },
  {
    heading: "Online Red Flags",
    content: [
      {
        type: "bullet-list",
        items: [
          "Lack of clear distinction between centre stone weight and total carat weight.",
          "Missing disclosure regarding stone origin or treatments.",
          "Overly retouched photos or CGI renders without real product footage.",
          "Inability to verify the certificate with the issuing laboratory."
        ]
      }
    ]
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      {
        type: "faq",
        items: [
          { question: "Can video prove that a stone is natural?", answer: "No. Video shows appearance and movement; origin requires proper disclosure and testing." },
          { question: "How do I verify a jewellery report online?", answer: "Use the issuing laboratory's official service and match the number, item, identity, dimensions, photograph and comments." },
          { question: "Why does a mounted report show grade ranges?", answer: "The setting can restrict observation and measurement, so characteristics may be reported conservatively as mounting permits." },
          { question: "Should coloured-stone and diamond weights be separate?", answer: "Yes. Centre, coloured side stones and diamond accents should have a visible breakdown." },
          { question: "What does a representative product image mean?", answer: "It shows the expected design rather than the exact supplied stone; realistic variation should be explained." },
          { question: "Can made-to-order jewellery be returned?", answer: "Policies and legal exceptions vary; personalised or made-to-order goods may be excluded from standard withdrawal rights." },
          { question: "What should I save before checkout?", answer: "Save specifications, images, choices, reports, written answers, delivered price, return terms, warranty and confirmation." },
          { question: "What should I check immediately after delivery?", answer: "Compare the item and documents with the saved listing and report discrepancies before altering or extensively wearing it." }
        ]
      },
      {
        type: "cta-banner",
        title: "Secure Your Selection",
        subtitle: "Aurelia Royale pairs detailed specification sheets and HD visual layouts for every mixed design. Shop with confidence.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("evaluate-coloured-stone-diamond-jewellery-online", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {/* Script injection for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Header */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {locale === "it" ? "Guida ai Diamanti" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Pierres de Couleur et Diamants" : locale === "es" ? "Piedras de Colores y Diamantes" : "Coloured Stones and Diamonds"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {locale === "it" ? "Journal • Pubblicato il 16 luglio 2026" : locale === "de" ? "Journal • Veröffentlicht am 16. Juli 2026" : locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026" : locale === "fr" ? "Journal • Publié le 16. Juli 2026" : locale === "es" ? "Diario • Publicado el 16 de julio de 2026" : "Journal • Published July 16, 2026"}
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={sections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
