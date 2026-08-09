import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "How Often Clean Diamond Jewellery",
  description: "How Often Clean Diamond Jewellery",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-often-clean-diamond-jewellery/",
  },
};

export const metadataEs: Metadata = {
  title: "¿Con qué frecuencia se limpian las joyas de diamantes?",
  description: "¿Con qué frecuencia se limpian las joyas de diamantes? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-often-clean-diamond-jewellery/",
  },
};

export const metadataFr: Metadata = {
  title: "À quelle fréquence nettoyer les bijoux en diamant",
  description: "À quelle fréquence nettoyer les bijoux en diamant - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-often-clean-diamond-jewellery/",
  },
};

export const metadataNl: Metadata = {
  title: "Hoe vaak maak je diamanten sieraden schoon?",
  description: "Hoe vaak maak je diamanten sieraden schoon? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-often-clean-diamond-jewellery/",
  },
};



export const metadataDe: Metadata = {
  title: "Wie oft Diamantschmuck reinigen?",
  description: "Wie oft Diamantschmuck reinigen? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-often-clean-diamond-jewellery/",
  },
};


export const metadataIt: Metadata = {
  title: "Quanto spesso dovresti pulire i tuoi gioielli con diamanti?",
  description: "Stabilisci una routine di cura adeguata. Scopri quanto spesso eseguire pulizie rapide a casa e quando portare i tuoi pezzi per un'ispezione professionale. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/how-often-clean-diamond-jewellery/",
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




// 2. The exact JSON-LD Schema (Fixed syntax)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-often-clean-diamond-jewellery/#article",
      "headline": "How Often Should Diamond Jewellery Be Cleaned?",
      "description": "Build the right diamond-jewellery cleaning schedule based on wear, residue, setting and materials, with guidance for home and professional care.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/how-often-clean-diamond-jewellery/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/how-often-clean-diamond-jewellery.webp"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Jewellery Care and Maintenance", "item": "https://www.aureliaroyale.com/blog/category/jewellery-care-maintenance/" },
        { "@type": "ListItem", "position": 4, "name": "How Often Should Diamond Jewellery Be Cleaned?", "item": "https://www.aureliaroyale.com/blog/how-often-clean-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Should I clean my diamond ring every week?", "acceptedAnswer": { "@type": "Answer", "text": "Weekly cleaning may suit a compatible daily-worn ring with film, subject to the maker's instructions." } },
        { "@type": "Question", "name": "Is monthly cleaning enough for diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Often for frequent wear with moderate exposure, but the interval depends on residue, setting and materials." } },
        { "@type": "Question", "name": "How often should lab-grown diamond jewellery be cleaned?", "acceptedAnswer": { "@type": "Answer", "text": "Use the same material-based approach as natural-diamond jewellery; growth origin alone does not determine frequency." } },
        { "@type": "Question", "name": "How often should diamond earrings be cleaned?", "acceptedAnswer": { "@type": "Answer", "text": "Frequently worn earrings may need approved cleaning every one to four weeks or when residue appears." } },
        { "@type": "Question", "name": "How often should a diamond bracelet be cleaned?", "acceptedAnswer": { "@type": "Answer", "text": "Monthly may be a starting point for frequent wear, with earlier cleaning after visible residue." } },
        { "@type": "Question", "name": "How often should diamond jewellery be professionally cleaned?", "acceptedAnswer": { "@type": "Answer", "text": "Professional cleaning commonly accompanies condition checks every six to twelve months, adjusted for wear and setting." } },
        { "@type": "Question", "name": "Does dullness mean a diamond is damaged?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Oil or soap film often reduces brightness, but persistent change should be assessed." } },
        { "@type": "Question", "name": "Can I clean diamond jewellery too often?", "acceptedAnswer": { "@type": "Answer", "text": "Poor technique or unsuitable products can harm settings, finishes and other materials." } },
        { "@type": "Question", "name": "Should I clean jewellery before storing it?", "acceptedAnswer": { "@type": "Answer", "text": "Remove compatible surface residue before long storage if permitted, then dry fully and store separately." } },
        { "@type": "Question", "name": "Does pavé jewellery need cleaning more often?", "acceptedAnswer": { "@type": "Answer", "text": "It may collect more residue, but it also needs gentle handling and frequent security checks." } },
        { "@type": "Question", "name": "Should cleaning and professional inspection happen together?", "acceptedAnswer": { "@type": "Answer", "text": "They can, but they serve different purposes; inspection should assess security and condition." } },
        { "@type": "Question", "name": "What if my jewellery contains coloured stones?", "acceptedAnswer": { "@type": "Answer", "text": "Use the schedule and method required by the most sensitive stone, treatment or component." } }
      ]
    }
  ]
};

// 3. Article content sections structured for DynamicArticle
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/how-often-clean-diamond-jewellery/1.jpg",
        alt: "Clean diamond jewelry sparkling on display",
        title: "Clean Diamond Brilliance",
        caption: "Daily-worn diamond jewelry needs visual audits before every home cleaning.",
        priority: true
      },
      {
        type: "paragraph",
        text: "There is no correct calendar interval for every diamond ring, earring, necklace and bracelet. A daily-worn ring exposed to hand cream may collect film quickly; a pendant worn twice a month may remain clean for much longer."
      },
      {
        type: "paragraph",
        text: "Use a three-part schedule: inspect often, clean when residue or reduced brightness appears within the maker’s guidance, and arrange professional condition checks at the interval appropriate to the setting, wear and warranty."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "For compatible modern diamond jewellery worn daily, a gentle home clean every one to four weeks is a practical starting range, with a soft lint-free wipe after wear where approved. Clean sooner after heavy exposure to oils, lotion or soap film. Occasionally worn pieces can be cleaned when visible residue appears and before storage. Inspect settings before every clean. Professional cleaning and condition checks commonly fall every six to twelve months, but follow the maker, jeweller, warranty and insurer—especially for pavé, frequently worn rings, vintage pieces or jewellery with coloured stones."
      }
    ]
  },
  {
    heading: "A practical starting schedule",
    content: [
      {
        type: "image",
        src: "/images/blog/how-often-clean-diamond-jewellery/2.jpg",
        alt: "A planner tracking visual check intervals",
        title: "Visual Check Calendars",
        caption: "Comparing schedules across different categories prevents setting stress."
      },
      {
        type: "table",
        headers: ["Wear pattern", "Visual check", "Gentle home clean, if approved", "Professional condition check"],
        rows: [
          ["Daily-worn ring", "Before wear and cleaning", "About weekly to monthly, based on residue", "Often every 6–12 months"],
          ["Frequently worn earrings", "Before insertion", "About every 1–4 weeks, plus hygiene needs", "Around annually or sooner if damaged"],
          ["Frequently worn pendant", "Before wear", "Monthly or when film appears", "Around annually"],
          ["Diamond bracelet", "Before wear; check clasp and links", "Monthly or after residue exposure", "Every 6–12 months for frequent wear"],
          ["Occasional jewellery", "Before and after each wear", "When residue appears; before long storage", "Before important wear or as maker advises"],
          ["Mixed-stone or treated piece", "Before every clean", "Only by component-specific instructions", "At specialist-recommended interval"]
        ]
      }
    ]
  },
  {
    heading: "Cleaning and inspection are different",
    content: [
      {
        type: "numbered-list",
        items: [
          "Quick condition check: frequent and before cleaning.",
          "Approved home cleaning: driven by residue and use.",
          "Professional condition check: driven by setting, wear and documented requirements."
        ]
      },
      {
        type: "paragraph",
        text: "Always check settings prior to water contact. Brushing can dislodge stones held in weakened settings."
      }
    ]
  },
  {
    heading: "What makes jewellery need cleaning sooner?",
    content: [
      {
        type: "image",
        src: "/images/blog/how-often-clean-diamond-jewellery/3.jpg",
        alt: "Applying hand lotions near gold diamond rings",
        title: "Lotion Residue Build-ups",
        caption: "Oils, skincare chemicals, and cooking fats quickly coat pavilion facets."
      },
      {
        type: "paragraph",
        parts: [{ text: "Skin oils and handling: ", bold: true }, { text: "Skin contact transfers grease, reducing face brilliance." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Skincare and cosmetics: ", bold: true }, { text: "Creams and sprays trap dust. Wear jewelry only after skincare dry downs." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Soap and hard-water residue: ", bold: true }, { text: "Shower steam leaves mineral soap films in gallery channels." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Cooking and household work: ", bold: true }, { text: "Fat drops coat gems quickly: remove rings before kitchen tasks." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Setting complexity: ", bold: true }, { text: "Halos and pavé create multiple recesses that trap soaps." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Wear environment: ", bold: true }, { text: "High humidity and dust accelerate residue accumulations." }]
      }
    ]
  },
  {
    heading: "Signs it is time for a gentle clean",
    content: [
      {
        type: "bullet-list",
        items: [
          "reduced brightness compared with its clean baseline;",
          "fingerprints or oily film;",
          "residue behind the diamond;",
          "lotion or soap around the gallery;",
          "dull-looking pavé areas;",
          "debris around an earring post or backing; or",
          "visible surface dirt after wear."
        ]
      }
    ]
  },
  {
    heading: "Signs to skip cleaning and seek professional help",
    content: [
      {
        type: "bullet-list",
        items: [
          "a moving or rattling stone;",
          "a missing accent;",
          "bent, worn or lifted prongs;",
          "a gap around a bezel;",
          "a damaged clasp, hinge or link;",
          "a chip or crack;",
          "snagging that has recently appeared;",
          "unexplained colour or finish change; or",
          "heavy compacted dirt that does not respond to one gentle clean."
        ]
      }
    ]
  },
  {
    heading: "Frequency by jewellery category",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Diamond rings: ", bold: true }, { text: "Weekly or monthly gentle washes suit compatible rings. Audits help protect high profiles." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Diamond earrings: ", bold: true }, { text: "Clean every 1-4 weeks to clear skin oils. Do not soak with harsh disinfectants." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Diamond necklaces and pendants: ", bold: true }, { text: "Monthly checks protect bails and clasps from fragrance sprays." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Diamond bracelets: ", bold: true }, { text: "Audit clasps before every wear. Do not twist flexible tennis chains." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Jewellery with coloured stones: ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Gem components dictate cleaning methods: follow the most sensitive stone. Check guidelines at " },
          { text: "how to care for coloured stones and diamonds", href: "/blog/care-coloured-stones-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How professional guidance fits together",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Official GIA recommendations suggest 6-month checks, while IGI advises annual checkups. Read details at " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Can jewellery be cleaned too often?",
    content: [
      {
        type: "paragraph",
        text: "The diamonds tolerate care, but gold mountings suffer if brushed aggressively. Minimize handling to protect delicate claws."
      }
    ]
  },
  {
    heading: "Mixed-stone jewellery needs its own schedule",
    content: [
      {
        type: "paragraph",
        text: "Porous or treated center gemstones require material-specific routines: do not soak them with general diamond solutions."
      }
    ]
  },
  {
    heading: "Build a personal cleaning calendar",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Step 1: Record the baseline: ", bold: true }, { text: "Photograph the clean layout as reference." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Step 2: Track wear and exposure: ", bold: true }, { text: "Note lotion exposure or event frequency." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Step 3: Start conservatively: ", bold: true }, { text: "Wash only when visible build-ups affect facet scintillation." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Step 4: Separate professional reminders: ", bold: true }, { text: "Separate condition checks from home clean calendars." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Step 5: Reassess after repair: ", bold: true }, { text: "Update care records after ring resizing or prong updates." }]
      }
    ]
  },
  {
    heading: "Example schedules",
    content: [
      {
        type: "image",
        src: "/images/blog/how-often-clean-diamond-jewellery/4.jpg",
        alt: "Organizing professional check records in a storage case",
        title: "Record Organizing",
        caption: "Documenting professional checks protects manufacturer warranty benefits."
      },
      {
        type: "table",
        headers: ["Owner profile", "Suggested starting routine"],
        rows: [
          ["Daily ring wearer using hand cream", "Inspect often; approved gentle clean weekly or when film appears; professional check about every 6 months"],
          ["Office pendant worn three days weekly", "Wipe after wear if approved; gentle clean monthly or as needed; annual check"],
          ["Earrings worn at weekends", "Inspect before use; clean every few wears or when residue appears; annual condition check"],
          ["Bracelet worn only for events", "Inspect before and after; clean before storage if needed; professional check before a major event if long unused"],
          ["Coloured-stone diamond piece", "Follow material-specific method and specialist interval; never default to the diamond-only schedule"]
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale care schedules reflect gemstone characteristics and settings layouts. Browse options at " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " to request specific specifications." }
        ]
      }
    ]
  },
  {
    content: [
      {
        type: "callout",
        title: "Final verdict",
        theme: "gold-border",
        parts: [
          {
            text: "Daily-worn diamond jewellery may need gentle cleaning weekly or every few weeks, while occasional pieces can be cleaned when residue appears—if the complete item permits it.\n\n"
          },
          {
            text: "Separate structural inspection from cleaning. Follow component-specific rules if colored accents are present, and seek regular professional checks."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Should I clean my diamond ring every week?",
            answer: "Weekly cleaning may suit a compatible daily-worn ring that accumulates film, but clean only as needed and according to the maker’s instructions."
          },
          {
            question: "Is monthly cleaning enough for diamond jewellery?",
            answer: "Often for frequently worn pieces with moderate exposure, but the right interval depends on residue, setting and materials."
          },
          {
            question: "How often should lab-grown diamond jewellery be cleaned?",
            answer: "Use the same material-based approach as natural-diamond jewellery. Growth origin alone does not determine frequency."
          },
          {
            question: "How often should diamond earrings be cleaned?",
            answer: "Frequently worn earrings may need approved cleaning every one to four weeks or when residue appears around stones, posts or backs."
          },
          {
            question: "How often should a diamond bracelet be cleaned?",
            answer: "Monthly may be a starting point for frequent wear, with earlier cleaning after visible residue and regular link and clasp checks."
          },
          {
            question: "How often should diamond jewellery be professionally cleaned?",
            answer: "Professional cleaning commonly accompanies condition checks every six to twelve months, adjusted for wear, setting, warranty and jeweller advice."
          },
          {
            question: "Does dullness mean a diamond is damaged?",
            answer: "Not necessarily. Oil or soap film often reduces brightness, but persistent change should be professionally assessed."
          },
          {
            question: "Can I clean diamond jewellery too often?",
            answer: "Poor technique or unsuitable products can harm settings, finishes and other materials. Use the least intensive effective schedule."
          },
          {
            question: "Should I clean jewellery before storing it?",
            answer: "Remove compatible surface residue before long storage if the maker permits, then dry fully and store separately."
          },
          {
            question: "Does pavé jewellery need cleaning more often?",
            answer: "It may collect residue across many small settings, but it also needs gentler handling and more frequent security checks."
          },
          {
            question: "Should cleaning and professional inspection happen together?",
            answer: "They can, but they serve different purposes. A professional check should assess settings and condition, not only appearance."
          },
          {
            question: "What if my jewellery contains coloured stones?",
            answer: "Use the schedule and method required by the most sensitive stone, treatment or component."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Track Your Schedule",
        subtitle: "Aurelia Royale helps you set up professional check reminders and replacement parts coverages. Consult our care experts.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const schema = locale === "es" ? schemaMarkup : schemaMarkup;

  const localeData = getBlogDataByLocale("how-often-clean-diamond-jewellery", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {/* Script injection for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Entretien & Soin des bijoux" : locale === "es" ? "Cuidado y mantenimiento de joyas" : "Jewellery Care and Maintenance"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {locale === "it" ? "Journal • Pubblicato il 15 luglio 2026" : locale === "de" ? "Journal • Veröffentlicht am 16. Juli 2026" : locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026" : locale === "fr" ? "Journal • Publié le 16. Juli 2026" : locale === "es" ? "Diario • Publicado el 16 de julio de 2026" : "Journal • Published July 16, 2026"}
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
