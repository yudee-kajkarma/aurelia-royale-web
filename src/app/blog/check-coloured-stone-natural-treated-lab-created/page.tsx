import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Check Coloured Stone Natural Treated Lab Created",
  description: "Check Coloured Stone Natural Treated Lab Created",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/check-coloured-stone-natural-treated-lab-created/",
  },
};

export const metadataEs: Metadata = {
  title: "Piedra coloreada a cuadros con tratamiento natural creada en laboratorio",
  description: "Piedra coloreada a cuadros con tratamiento natural creada en laboratorio - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/check-coloured-stone-natural-treated-lab-created/",
  },
};

export const metadataFr: Metadata = {
  title: "Vérifiez le laboratoire de traitement naturel de pierre colorée créé",
  description: "Vérifiez le laboratoire de traitement naturel de pierre colorée créé - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/check-coloured-stone-natural-treated-lab-created/",
  },
};

export const metadataNl: Metadata = {
  title: "Controleer of er een natuurlijk behandeld laboratorium met gekleurde steen is gemaakt",
  description: "Controleer of er een natuurlijk behandeld laboratorium met gekleurde steen is gemaakt - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/check-coloured-stone-natural-treated-lab-created/",
  },
};



export const metadataDe: Metadata = {
  title: "So prüfen Sie, ob ein Farbstein natürlich, behandelt oder im Labor hergestellt wurde",
  description: "So prüfen Sie, ob ein Farbstein natürlich, behandelt oder im Labor hergestellt wurde - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/check-coloured-stone-natural-treated-lab-created/",
  },
};


export const metadataIt: Metadata = {
  title: "Come verificare se una pietra colorata è naturale, trattata o creata in laboratorio",
  description: "Impara come leggere descrizioni e rapporti per identificare se una pietra preziosa colorata è presente in natura, ha ricevuto trattamenti o è un cristallo sintetico creato in laboratorio. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/check-coloured-stone-natural-treated-lab-created/",
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




// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/check-coloured-stone-natural-treated-lab-created/#article",
      "headline": "How to Check Whether a Coloured Stone Is Natural, Treated or Laboratory-Created",
      "description": "Learn how to verify whether a coloured stone is natural, treated, laboratory-created or an imitation using disclosures and laboratory reports.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/check-coloured-stone-natural-treated-lab-created/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/check-coloured-stone-natural-treated-lab-created.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/check-coloured-stone-natural-treated-lab-created/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Coloured Stones and Diamonds", "item": "https://www.aureliaroyale.com/blog/category/coloured-stones-and-diamonds/" },
        { "@type": "ListItem", "position": 4, "name": "How to Check Whether a Coloured Stone Is Natural, Treated or Laboratory-Created", "item": "https://www.aureliaroyale.com/blog/check-coloured-stone-natural-treated-lab-created/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/check-coloured-stone-natural-treated-lab-created/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can I tell if a gemstone is natural by looking at it?", "acceptedAnswer": { "@type": "Answer", "text": "Usually not reliably. Professional testing may require magnification, optical tests and advanced instruments." } },
        { "@type": "Question", "name": "Does natural gemstone mean untreated?", "acceptedAnswer": { "@type": "Answer", "text": "No. Natural describes geological origin. A natural gemstone may also have been treated." } },
        { "@type": "Question", "name": "Is a laboratory-created gemstone fake?", "acceptedAnswer": { "@type": "Answer", "text": "It is manufactured, but may share essentially the relevant properties of its natural counterpart. It must be disclosed clearly." } },
        { "@type": "Question", "name": "Is an imitation the same as a lab-created gemstone?", "acceptedAnswer": { "@type": "Answer", "text": "No. An imitation is a different material that resembles another gem; a laboratory-created counterpart shares its relevant identity." } },
        { "@type": "Question", "name": "Can inclusions prove that a stone is natural?", "acceptedAnswer": { "@type": "Answer", "text": "Not by themselves. Internal features require expert interpretation and sometimes laboratory instruments." } },
        { "@type": "Question", "name": "Can a jeweller identify gemstone treatment?", "acceptedAnswer": { "@type": "Answer", "text": "Some features can be recognised by specialists, but many treatment conclusions require a qualified laboratory." } },
        { "@type": "Question", "name": "What report should I request for a coloured stone?", "acceptedAnswer": { "@type": "Answer", "text": "Request an independent identification report appropriate to the loose or mounted item, covering identity, origin category and detectable treatments." } },
        { "@type": "Question", "name": "How do I verify a coloured-stone report?", "acceptedAnswer": { "@type": "Answer", "text": "Use the issuing laboratory's official report-check service and match the number, identity, dimensions, photograph and comments." } },
        { "@type": "Question", "name": "Does a report always identify every treatment?", "acceptedAnswer": { "@type": "Answer", "text": "Reports state findings within their methods and scope. Read the exact wording and limitations." } },
        { "@type": "Question", "name": "Can a mounted gemstone be tested?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes, but the setting may restrict observation or measurement. The report should state the limitations." } },
        { "@type": "Question", "name": "Does country of origin prove a gemstone is natural?", "acceptedAnswer": { "@type": "Answer", "text": "A supported geographic-origin opinion is a separate conclusion; an unsupported seller country claim is not proof." } },
        { "@type": "Question", "name": "What should I do if the invoice and report disagree?", "acceptedAnswer": { "@type": "Answer", "text": "Contact the seller within the return period, request correction and consider independent re-testing." } }
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
        src: "/images/blog/check-coloured-stone-natural-treated-lab-created/1.jpg",
        alt: "Gemological testing methods to verify gemstone origins",
        title: "Testing Origins Guide",
        caption: "Appearance alone cannot reliably prove origin or treatment. Use precise product disclosures.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A coloured stone can be natural and untreated, natural and treated, laboratory-created, composite or an imitation. These categories are not interchangeable, and colour alone cannot tell you which one you are viewing."
      },
      {
        type: "paragraph",
        text: "The reliable method is documentary and gemmological: require precise product language, match it across the invoice and report, verify the report with its issuing laboratory, and commission independent testing when the value or uncertainty justifies it."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "You usually cannot confirm natural origin or treatment from a photograph, price, loupe or home test. First, require the exact gemstone species or variety, natural or laboratory-created status and all known treatments in writing. Then check whether an independent coloured-stone identification report matches the stone or mounted piece and states detectable treatments. Verify the report number directly with the issuing laboratory. If the stone is valuable, undocumented or the descriptions conflict, ask a qualified independent gemmologist or laboratory to test it."
      }
    ]
  },
  {
    heading: "Understand the five categories first",
    content: [
      {
        type: "image",
        src: "/images/blog/check-coloured-stone-natural-treated-lab-created/2.jpg",
        alt: "A display comparing natural, treated, and lab-created gems under uniform lighting",
        title: "Gem Category Comparison",
        caption: "Chemical properties overlap between natural and lab-created counterparts, requiring clear disclosures."
      },
      {
        type: "table",
        headers: ["Category", "Meaning", "Key disclosure needed"],
        rows: [
          ["Natural, untreated", "Formed naturally; no treatment detected or stated beyond cutting and polishing", "Exact identity and report wording"],
          ["Natural, treated", "Formed naturally, then altered to affect colour, clarity or another property", "Identity, treatment and care implications"],
          ["Laboratory-created", "Grown by a manufacturing process and sharing essentially the relevant properties of its natural counterpart", "Clear non-natural origin wording"],
          ["Composite or assembled", "Made from two or more joined components", "Construction and component identities"],
          ["Imitation or simulant", "Resembles another gem without being that material", "Actual material and what it imitates"]
        ]
      }
    ]
  },
  {
    heading: "Natural does not automatically mean untreated",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm exact treatment and origin statuses. For details on lab designations, see " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/lab-grown-diamond-description-disclosure/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Why appearance cannot prove the answer",
    content: [
      {
        type: "paragraph",
        text: "Internal inclusions exist in both natural and lab-grown stones: visual assessments are not proof. Expert spectroscopic analyses are needed."
      }
    ]
  },
  {
    heading: "Use this five-level evidence ladder",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Level 1: Precise product-page disclosure", bold: true }]
      },
      {
        type: "numbered-list",
        items: [
          "Accepted gemstone species or variety.",
          "Natural or laboratory-created origin.",
          "Composite or imitation status where applicable.",
          "Known or detected treatments.",
          "Stone dimensions and weight.",
          "Whether the pictured stone is the exact stone.",
          "Care restrictions connected to material or treatment."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "Level 2: Matching transaction documents", bold: true }],
        text: "Ensure invoice descriptors specify exact gemstone types and materials instead of general collection titles."
      },
      {
        type: "paragraph",
        parts: [{ text: "Level 3: An appropriate laboratory report", bold: true }]
      },
      {
        type: "image",
        src: "/images/blog/check-coloured-stone-natural-treated-lab-created/3.jpg",
        alt: "Verifying report scopes for mounted gemstone pieces",
        title: "Report Scope Verifications",
        caption: "Understanding finished jewellery report limits compared to loose gemstone certificates is essential."
      },
      {
        type: "table",
        headers: ["Document", "What it may establish", "What it does not automatically establish"],
        rows: [
          ["Coloured-stone identification report", "Material identity, natural/lab-created status and detectable treatments within scope", "Retail value or universal quality grade"],
          ["Origin report", "Identification plus supported geographic origin for eligible stones", "Mine, ownership history or ethical provenance"],
          ["Finished-jewellery report", "Mounted stones and mounting details as examination permits", "Same precision as every stone tested loose"],
          ["Appraisal", "Stated value for a defined purpose", "Independent gem identity unless testing is included"],
          ["Seller certificate", "Seller’s own description or guarantee", "Independent laboratory testing"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Verify certificate scope parameters. For report validations, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "Level 4: Verify the report directly", bold: true }],
        text: "Cross-check report parameters (measurements, weights, dates) on the official laboratory database to block fake certificates."
      },
      {
        type: "paragraph",
        parts: [{ text: "Level 5: Independent re-testing", bold: true }],
        text: "For vintage pieces or high-value items, seek testing from neutral gem laboratories without transaction incentives."
      }
    ]
  },
  {
    heading: "What treatment wording should tell you",
    content: [
      {
        type: "numbered-list",
        items: [
          "What was detected or disclosed? Request the actual treatment name.",
          "How certain is the conclusion? Some reports use careful wording when detection has limits.",
          "Is it stable? Treatments can vary in permanence.",
          "What care changes? Heat, chemicals, light, abrasion, ultrasonic cleaning or steam may be unsuitable."
        ]
      }
    ]
  },
  {
    heading: "What “no indications of treatment” means",
    content: [
      {
        type: "paragraph",
        text: "This specifies that no treatment traces were detected under laboratory conditions: it does not mean untreated in all possible ways."
      }
    ]
  },
  {
    heading: "Mounted stones have testing limitations",
    content: [
      {
        type: "paragraph",
        text: "Metal settings block girdle and inclusion observations. Keep stones in their mounts; do not risk damage with loose home testing."
      }
    ]
  },
  {
    heading: "Geographic origin is a different question",
    content: [
      {
        type: "paragraph",
        text: "Country assignments are expert opinions based on chemical traces in natural stones. Origin alone is not a quality grade."
      }
    ]
  },
  {
    heading: "Home tests to avoid",
    content: [
      {
        type: "paragraph",
        text: "Avoid heat burning, ultraviolet exposure, scratch tests, or density calculations at home. These can fracture the gemstone setting."
      }
    ]
  },
  {
    heading: "Red flags on a product page",
    content: [
      {
        type: "bullet-list",
        items: [
          "only a colour name instead of a gemstone identity;",
          "“natural-looking”, “created”, “genuine” or “precious” without definition;",
          "treatment information hidden in generic terms;",
          "one certificate claimed to cover an entire collection;",
          "no report number or issuing laboratory;",
          "mismatched dimensions or photographs;",
          "geographic origin used without laboratory support;",
          "a “certificate” that is actually an appraisal or warranty;",
          "pressure to waive returns before verification; or",
          "care instructions that ignore treatment sensitivity."
        ]
      }
    ]
  },
  {
    heading: "A buyer’s verification worksheet",
    content: [
      {
        type: "image",
        src: "/images/blog/check-coloured-stone-natural-treated-lab-created/4.jpg",
        alt: "Filling out a purchase verification worksheet",
        title: "Worksheet Audits",
        caption: "Cross-checking report numbers against invoice lines secures transaction safety."
      },
      {
        type: "table",
        headers: ["Question", "Seller’s answer", "Document that confirms it"],
        rows: [
          ["What is the exact material?", "", "Product specification/report"],
          ["Natural or laboratory-created?", "", "Invoice/report"],
          ["Composite or imitation?", "", "Disclosure/report"],
          ["What treatments are known or detected?", "", "Report/comments"],
          ["Loose or mounted when tested?", "", "Report description"],
          ["Does the report number verify?", "", "Official laboratory database"],
          ["Does the item match the report?", "", "Dimensions/photo/weight"],
          ["What care restrictions apply?", "", "Treatment-specific care card"]
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
          { text: "Aurelia Royale separates gemstone types, detailing origins and treatment scopes with report numbers. Browse options at " },
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
            text: "Appearance alone cannot reliably prove a coloured stone's origin or treatment.\n\n"
          },
          {
            text: "Verify the parameters through precise product disclosure, matching invoices, and official report checks. Do not utilize home scratch or thermal test methods."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can I tell if a gemstone is natural by looking at it?",
            answer: "Usually not reliably. Natural, treated and laboratory-created stones can overlap in appearance, and professional testing may require advanced instruments."
          },
          {
            question: "Does “natural gemstone” mean untreated?",
            answer: "No. Natural describes geological origin. A natural gemstone may also have been treated."
          },
          {
            question: "Is a laboratory-created gemstone fake?",
            answer: "It is manufactured rather than naturally formed, but it may share essentially the relevant properties of its natural counterpart. It must be disclosed clearly."
          },
          {
            question: "Is an imitation the same as a lab-created gemstone?",
            answer: "No. An imitation resembles another gem but is a different material; a laboratory-created counterpart shares the relevant identity and properties."
          },
          {
            question: "Can inclusions prove that a stone is natural?",
            answer: "Not by themselves. Natural, treated and laboratory-created stones can all show internal features. Interpretation requires expertise and sometimes instruments."
          },
          {
            question: "Can a jeweller identify gemstone treatment?",
            answer: "Some jewellers and gemmologists can recognise certain features, but many treatment conclusions require a qualified laboratory."
          },
          {
            question: "What report should I request for a coloured stone?",
            answer: "Request an independent identification report appropriate to the loose or mounted item, stating identity, origin category and detectable treatments."
          },
          {
            question: "How do I verify a coloured-stone report?",
            answer: "Use the issuing laboratory’s official report-check service and match the number, identity, dimensions, photograph and comments to the item."
          },
          {
            question: "Does a report always identify every treatment?",
            answer: "Reports state findings within their methods and scope. Read the exact wording and limitations; detection can vary by treatment and material."
          },
          {
            question: "Can a mounted gemstone be tested?",
            answer: "Often yes, but the setting may restrict observation or measurement. The report should identify mounted status and relevant limitations."
          },
          {
            question: "Does country of origin prove a gemstone is natural?",
            answer: "Geographic-origin opinions apply to eligible natural stones, but verify the complete report. A seller’s unsupported country claim is not proof."
          },
          {
            question: "What should I do if the invoice and report disagree?",
            answer: "Stop the purchase or contact the seller within the return period. Request correction and, where appropriate, independent re-testing."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop with Confidence",
        subtitle: "Aurelia Royale provides verified GIA/IGI reports and full treatment disclosures for every colored stone design. View our guarantee.",
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

  const localeData = getBlogDataByLocale("check-coloured-stone-natural-treated-lab-created", locale);
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
            {locale === "it" ? "Guida ai Diamanti" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Pierres de couleur et diamants" : locale === "es" ? "Piedras de colores y diamantes" : "Coloured Stones and Diamonds"}
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
