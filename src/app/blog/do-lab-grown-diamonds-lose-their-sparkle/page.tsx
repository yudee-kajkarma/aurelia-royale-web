import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Do Lab Grown Diamonds Lose Their Sparkle",
  description: "Do Lab Grown Diamonds Lose Their Sparkle",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/",
  },
};

export const metadataEs: Metadata = {
  title: "¿Los diamantes cultivados en laboratorio pierden su brillo?",
  description: "¿Los diamantes cultivados en laboratorio pierden su brillo? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/do-lab-grown-diamonds-lose-their-sparkle/",
  },
};

export const metadataFr: Metadata = {
  title: "Les diamants cultivés en laboratoire perdent-ils leur éclat ?",
  description: "Les diamants cultivés en laboratoire perdent-ils leur éclat ? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/do-lab-grown-diamonds-lose-their-sparkle/",
  },
};

export const metadataNl: Metadata = {
  title: "Verliezen in het laboratorium gekweekte diamanten hun glans?",
  description: "Verliezen in het laboratorium gekweekte diamanten hun glans? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/do-lab-grown-diamonds-lose-their-sparkle/",
  },
};



export const metadataDe: Metadata = {
  title: "Verlieren im Labor gezüchtete Diamanten ihren Glanz?",
  description: "Verlieren im Labor gezüchtete Diamanten ihren Glanz? - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/do-lab-grown-diamonds-lose-their-sparkle/",
  },
};


export const metadataIt: Metadata = {
  title: "I diamanti creati in laboratorio perdono la loro lucentezza?",
  description: "Scopri perché un diamante creato in laboratorio non perderà mai la sua brillantezza intrinseca e come mantenere la sua brillantezza originale attraverso una pulizia regolare. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/do-lab-grown-diamonds-lose-their-sparkle/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;
  const localeData = getBlogDataByLocale("do-lab-grown-diamonds-lose-their-sparkle", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};




// 2. The exact JSON-LD Schema you provided
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aureliaroyale.com/#organization",
      "name": "Aurelia Royale",
      "url": "https://www.aureliaroyale.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aureliaroyale.com/images/aurelia-royale-logo.png"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aureliaroyale.com/#website",
      "url": "https://www.aureliaroyale.com/",
      "name": "Aurelia Royale",
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#webpage",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/",
      "name": "Do Lab-Grown Diamonds Lose Their Sparkle?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-lose-sparkle.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-lose-sparkle.webp",
      "width": 1600,
      "height": 900,
      "caption": "Clean and dull-looking laboratory-grown diamonds compared"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#webpage"
      },
      "headline": "Do Lab-Grown Diamonds Lose Their Sparkle?",
      "description": "Learn why lab-grown diamonds can look dull, whether they permanently lose brilliance and how cleaning, cut, lighting and maintenance restore sparkle.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "do lab-grown diamonds lose their sparkle",
        "why does my lab-grown diamond look dull",
        "how to make a lab-grown diamond sparkle",
        "do lab-grown diamonds lose brilliance",
        "clean lab-grown diamond jewellery",
        "diamond sparkle"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aureliaroyale.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.aureliaroyale.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Lab-Grown Diamond Education",
          "item": "https://www.aureliaroyale.com/blog/category/lab-grown-diamond-education/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Do Lab-Grown Diamonds Lose Their Sparkle?",
          "item": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds lose their sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They do not permanently lose their ability to reflect light merely because they are laboratory-grown."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my lab-grown diamond look dull?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common causes are finger oils, soap, skincare products, dirt beneath the setting or different lighting."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds sparkle like natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both display diamond's characteristic brilliance, fire and scintillation when well cut."
          }
        },
        {
          "@type": "Question",
          "name": "Can cleaning restore diamond sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cleaning can restore sparkle when surface dirt or oil is responsible. It cannot correct poor cut or internal inclusions."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my diamond look oily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diamonds attract grease, allowing oils from fingers, lotion and cosmetics to adhere to their surfaces."
          }
        },
        {
          "@type": "Question",
          "name": "Does cut affect sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cut proportions, symmetry and polish strongly influence how effectively a diamond interacts with light."
          }
        },
        {
          "@type": "Question",
          "name": "Is toothpaste safe for cleaning diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Toothpaste can scratch precious metal and damage the jewellery's finish."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an ultrasonic cleaner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only with caution. Ultrasonic vibration can loosen stones or affect vulnerable jewellery and should not be used without checking the piece."
          }
        },
        {
          "@type": "Question",
          "name": "Does perfume reduce sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perfume and skincare products can create a film that reduces visible brilliance."
          }
        },
        {
          "@type": "Question",
          "name": "What if my diamond remains dull after cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Have it professionally inspected for trapped dirt, weak cut, inclusions, loose settings, damage or incorrect material identification."
          }
        }
      ]
    }
  ]
};

// 3. The Article Content Sections
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (1).jpg",
        alt: "Clean and dull-looking laboratory-grown diamonds compared",
        title: "Do Lab-Grown Diamonds Lose Their Sparkle?",
        caption: "A lab-grown diamond does not permanently lose brilliance; surface build-up is the most common cause of dullness.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds do not permanently lose their natural ability to reflect and disperse light merely because they were created in a laboratory."
      },
      {
        type: "paragraph",
        text: "If a laboratory-grown diamond looks less brilliant than before, the most common explanation is a film of oil, soap, lotion or other residue on its surface. Lighting, cut quality, a dirty underside, a loose setting or physical damage may also affect its appearance."
      },
      {
        type: "paragraph",
        text: "Cleaning can restore brilliance when surface build-up is responsible. However, cleaning cannot correct poor cut quality, significant inclusions or damage."
      },
      {
        type: "callout",
        title: "Quick Answer",
        theme: "cream",
        parts: [
          { text: "A lab-grown diamond does not normally lose its sparkle with age. It may look dull because of:\n\n" },
          { text: "• Finger oils, soap residue, cosmetics, and skincare lotions.\n" },
          { text: "• Hard-water deposits or dust gathered under the open-back setting.\n" },
          { text: "• Weak cut proportions or change in surrounding lighting environments.\n" },
          { text: "• Loose settings or physical chips on the facets.\n\n" },
          { text: "Start with gentle cleaning and neutral lighting. If the diamond still appears noticeably different, have the jewellery professionally inspected." }
        ]
      }
    ]
  },
  {
    heading: "Why a Diamond May Look Less Sparkly",
    content: [
      {
        type: "table",
        headers: ["Possible Cause", "Is it usually temporary?", "What to do"],
        rows: [
          ["Finger oils", "Yes", "Clean gently"],
          ["Soap or lotion", "Yes", "Remove surface residue"],
          ["Hard-water deposits", "Usually", "Professional cleaning may help"],
          ["Dirt beneath the diamond", "Yes", "Clean the back of the setting"],
          ["Different lighting", "Yes", "Compare in several environments"],
          ["Poor cut quality", "No", "Evaluate original light performance"],
          ["Dense inclusions / graining", "No", "Review the grading report"],
          ["Loose diamond", "Requires repair", "Stop wearing and inspect settings"],
          ["Chipped facet or girdle", "No", "Seek professional assessment"],
          ["Scratched surrounding metal", "Metal issue", "Refinish the setting if appropriate"],
          ["Rhodium plating wear", "Metal issue", "Consider replating white gold"],
          ["Stone is not diamond", "No", "Verify report and material identity"]
        ]
      }
    ]
  },
  {
    heading: "What Does \"Sparkle\" Actually Mean?",
    content: [
      {
        type: "paragraph",
        text: "Sparkle is a general consumer term covering three main aspects of light performance:"
      },
      {
        type: "bullet-list",
        items: [
          "Brightness: The white light reflected internally and externally from the diamond.",
          "Fire: The flashes of spectral color created when light separates into rainbow hues.",
          "Scintillation: The pattern of light and dark areas and the sharp flashes seen when the stone, light source, or observer moves."
        ],
        itemsParts: [
          [
            { text: "Brightness: ", bold: true },
            { text: "The white light reflected internally and externally from the diamond." }
          ],
          [
            { text: "Fire: ", bold: true },
            { text: "The flashes of spectral color created when light separates into rainbow hues." }
          ],
          [
            { text: "Scintillation: ", bold: true },
            { text: "The pattern of light and dark areas and the sharp flashes seen when the stone, light source, or observer moves." }
          ]
        ]
      },
      {
        type: "paragraph",
        text: "GIA explains that these characteristics depend heavily on the diamond's cut and facet proportions. A well-cut laboratory-grown diamond can display identical brilliance, fire, and scintillation to a natural diamond because they share the same carbon structure."
      },
      {
        type: "image",
        src: "/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (2).jpg",
        alt: "Light paths reflecting through pavilion facets of a round brilliant diamond",
        title: "Understanding Diamond Light Performance",
        caption: "Optically precise cuts ensure white brilliance, spectral fire, and lively scintillation."
      }
    ]
  },
  {
    heading: "Why Do Diamonds Attract Oil and Dullness?",
    content: [
      {
        type: "paragraph",
        text: "Diamonds have a natural affinity for grease and oils. Normal handling transfers oils from fingers, while skincare products, soaps, and cosmetics build up a surface film. This issue is particularly visible on large table facets, rings handled frequently, and open-back settings where dirt gets trapped underneath."
      },
      {
        type: "paragraph",
        text: "The lower portion of the diamond (the pavilion) often collects more residue than the visible top. Light enters the top, reflects off the pavilion facets, and returns. If the pavilion is coated in dust or oil, the light escapes rather than reflecting, making the stone appear flat and lifeless."
      },
      {
        type: "image",
        src: "/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (3).jpg",
        alt: "Cleaning the undersides and basket mounts of diamond rings",
        title: "Cleaning the Underside",
        caption: "Oils and makeup collect behind the setting, blocking light from reflecting back through the table."
      }
    ]
  },
  {
    heading: "Permanent Dullness Factors and Shop Spotlights",
    content: [
      {
        type: "paragraph",
        text: "A diamond cannot permanently lose its sparkle from normal aging, but permanent optical issues can be caused by a poor original cut (light leakage), surface chips/abrasions from impacts, or dense clouds and growth graining."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Why does my diamond sparkle in the shop but not at home? ", bold: true },
          { text: "Jewellery stores use multiple bright spotlights to maximize scintillation and fire. At home, lighting is often warmer, more diffused, or lower in contrast. This is normal optical behaviour and does not mean the diamond has changed quality." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Metal and Settings: ", bold: true },
          { text: "Surrounding precious metal color (yellow or rose gold) reflects warm hues into the diamond. As white gold rhodium plating wears down, the warm under-gold is exposed, changing the overall visual contrast. Furthermore, a loose diamond may sit at a tilted angle, preventing optimal reflection and risking stone loss." }
        ]
      }
    ]
  },
  {
    heading: "How to Make a Lab-Grown Diamond Sparkle Again",
    content: [
      {
        type: "paragraph",
        text: "For safe home cleaning, follow these steps:"
      },
      {
        type: "numbered-list",
        items: [
          "Inspect: Ensure no prongs are bent, clasps are loose, or accent stones are missing before cleaning.",
          "Soak: Use a warm (not boiling) solution of water and mild washing-up liquid. Soften build-up for a few minutes.",
          "Brush: Use a very soft, clean toothbrush to brush the underside, gallery, prongs, and link crevices gently.",
          "Rinse and Dry: Rinse in clean water (block the sink drain!) and dry with a lint-free microfibre cloth."
        ],
        itemsParts: [
          [
            { text: "Inspect: ", bold: true },
            { text: "Ensure no prongs are bent, clasps are loose, or accent stones are missing before cleaning." }
          ],
          [
            { text: "Soak: ", bold: true },
            { text: "Use a warm (not boiling) solution of water and mild washing-up liquid. Soften build-up for a few minutes." }
          ],
          [
            { text: "Brush: ", bold: true },
            { text: "Use a very soft, clean toothbrush to brush the underside, gallery, prongs, and link crevices gently." }
          ],
          [
            { text: "Rinse and Dry: ", bold: true },
            { text: "Rinse in clean water (block the sink drain!) and dry with a lint-free microfibre cloth." }
          ]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Avoid: ", bold: true },
          { text: "Toothpaste, baking soda, bleach, and chlorine. These contain abrasives or harsh agents that can scratch gold/platinum alloys or erode rhodium plating." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (4).jpg",
        alt: "Brushing diamond jewellery gently with warm soapy water solution",
        title: "Safe Cleaning Routine",
        caption: "Brushing with a soft-bristled brush loosens dirt from prongs and links without scratching the precious metals."
      }
    ]
  },
  {
    heading: "Cleaning Considerations by Jewellery Type",
    content: [
      {
        type: "table",
        headers: ["Jewellery Type", "Likely Exposure", "Cleaning Consideration"],
        rows: [
          ["Rings", "Hand cream, soap, cooking oils", "Requires frequent gentle cleaning due to daily contact."],
          ["Earrings", "Hair sprays, makeup, skin sebum", "Focus on posts, backing mechanisms, and basket mounts."],
          ["Necklaces", "Perfumes, body lotions, perspiration", "Brush pendant backs and link junctions gently."],
          ["Bracelets", "Lotions, dust from desks, clothing lint", "Inspect latch stability and articulation links before cleaning."]
        ]
      },
      {
        type: "callout",
        title: "A Note on Ultrasonic Cleaners",
        theme: "gold-border",
        text: "Ultrasonic cleaners use high-frequency vibration to loosen dirt, but they can easily dislodge small melee diamonds or crack stones with existing fracture lines. Avoid ultrasonic cleaning if prongs are worn, settings contain emeralds or pearls, or the diamond has significant inclusions. Request professional inspections and steaming when in doubt."
      }
    ]
  },
  {
    heading: "Sparkle Verification Checklist",
    content: [
      {
        type: "table",
        headers: ["Sparkle Checklist"],
        rows: [
          ["Visual/video assets show the diamond in multiple lighting conditions."],
          ["Cut proportions (table, depth, polish, symmetry) are fully documented."],
          ["The grading report (IGI/GIA) can be verified on the official website."],
          ["The setting allows reasonable access to the underside of the stone for cleaning."],
          ["Precious-metal content and fineness are clearly stated."],
          ["The seller provides detailed care instructions for normal use."]
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Do lab-grown diamonds lose their sparkle?",
            answer: "No. They do not permanently lose their ability to reflect light merely because they are laboratory-grown."
          },
          {
            question: "Why does my lab-grown diamond look dull?",
            answer: "The most common causes are finger oils, soap, skincare products, dirt beneath the setting or different lighting."
          },
          {
            question: "Do lab-grown diamonds sparkle like natural diamonds?",
            answer: "Yes. Both display diamond's characteristic brilliance, fire and scintillation when well cut."
          },
          {
            question: "Can cleaning restore diamond sparkle?",
            answer: "Cleaning can restore sparkle when surface dirt or oil is responsible. It cannot correct poor cut or internal inclusions."
          },
          {
            question: "Why does my diamond look oily?",
            answer: "Diamonds attract grease, allowing oils from fingers, lotion and cosmetics to adhere to their surfaces."
          },
          {
            question: "Does cut affect sparkle?",
            answer: "Yes. Cut proportions, symmetry and polish strongly influence how effectively a diamond interacts with light."
          },
          {
            question: "Is toothpaste safe for cleaning diamonds?",
            answer: "No. Toothpaste can scratch precious metal and damage the jewellery's finish."
          },
          {
            question: "Can I use an ultrasonic cleaner?",
            answer: "Only with caution. Ultrasonic vibration can loosen stones or affect vulnerable jewellery and should not be used without checking the piece."
          },
          {
            question: "Does perfume reduce sparkle?",
            answer: "Perfume and skincare products can create a film that reduces visible brilliance."
          },
          {
            question: "What if my diamond remains dull after cleaning?",
            answer: "Have it professionally inspected for trapped dirt, weak cut, inclusions, loose settings, damage or incorrect material identification."
          }
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        parts: [
          {
            text: "Laboratory-grown diamonds do not naturally lose their sparkle because of age or origin. When a diamond looks dull, the cause is almost always surface residue—especially finger oils, makeup, and soaps. Gentle cleaning and inspection can restore the stone's original premium fire and brilliance.\n\n"
          },
          {
            text: "Explore Aurelia Royale's certified laboratory-grown diamond collection, designed for lasting brightness and fire."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Lifetime Sparkle at Aurelia Royale",
        subtitle: "Beautifully cut to deliver maximum fire and scintillation. Explore our certified laboratory-grown diamond jewellery.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Blog11Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("do-lab-grown-diamonds-lose-their-sparkle", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  const schema = locale === "es" ? schemaMarkup : schemaMarkup;

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
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Éducation sur les diamants" : locale === "es" ? "Educación sobre diamantes cultivados en laboratorio" : "Lab-Grown Diamond Education"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Optical Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Render Dynamic Article */}
      <DynamicArticle sections={sections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
