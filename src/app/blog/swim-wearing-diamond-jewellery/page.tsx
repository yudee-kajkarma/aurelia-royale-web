import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Swim Wearing Diamond Jewellery",
  description: "Swim Wearing Diamond Jewellery",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/",
  },
};

export const metadataEs: Metadata = {
  title: "Nadar con joyas de diamantes",
  description: "Nadar con joyas de diamantes - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/swim-wearing-diamond-jewellery/",
  },
};

export const metadataFr: Metadata = {
  title: "Nager avec des bijoux en diamant",
  description: "Nager avec des bijoux en diamant - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/swim-wearing-diamond-jewellery/",
  },
};

export const metadataNl: Metadata = {
  title: "Zwem met diamanten sieraden",
  description: "Zwem met diamanten sieraden - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/swim-wearing-diamond-jewellery/",
  },
};



export const metadataDe: Metadata = {
  title: "Schwimmen mit Diamantschmuck",
  description: "Schwimmen mit Diamantschmuck - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/swim-wearing-diamond-jewellery/",
  },
};


export const metadataIt: Metadata = {
  title: "Si possono indossare gioielli con diamanti mentre si nuota? Rischi e consigli",
  description: "Evita perdite tragiche. Scopri perché l'acqua fredda restringe le dita, rendendo più facile la perdita degli anelli, e come il cloro danneggia il metallo della montatura. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/swim-wearing-diamond-jewellery/",
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




// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/#article",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/" },
      "headline": "Can You Swim While Wearing Diamond Jewellery?",
      "description": "Remove diamond jewellery before swimming. Learn how chlorine, salt water, sand, cold water, sunscreen and loss can affect rings, settings and stones.",
      "image": "https://www.aureliaroyale.com/images/blog/swim-wearing-diamond-jewellery.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" } },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["can you swim with diamond jewellery", "swim with diamond ring", "chlorine diamond jewellery", "diamond jewellery salt water"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Can You Swim While Wearing Diamond Jewellery?", "item": "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can you swim with a diamond ring?", "acceptedAnswer": { "@type": "Answer", "text": "It is safer to remove it. Chlorine may affect setting alloys, while cold water, sunscreen and movement increase the chance of loss." } },
        { "@type": "Question", "name": "Does chlorine damage diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Chlorine is not expected to damage an untreated diamond, but it can affect some metal alloys used in diamond settings." } },
        { "@type": "Question", "name": "Can you wear lab-grown diamonds in a pool?", "acceptedAnswer": { "@type": "Answer", "text": "No. Lab-grown and natural diamond jewellery follow the same rule because the setting, metal and loss risk matter more than growth origin." } },
        { "@type": "Question", "name": "Can you swim in the sea with a diamond ring?", "acceptedAnswer": { "@type": "Answer", "text": "Do not. Cold water, waves, sunscreen, sand and poor underwater visibility make permanent loss or damage more likely." } },
        { "@type": "Question", "name": "Does salt water damage diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "The diamond is stable, but salt residue, sand, sunscreen, settings, finishes and other stones remain concerns. Loss is the largest risk." } },
        { "@type": "Question", "name": "Can I wear diamond earrings while swimming?", "acceptedAnswer": { "@type": "Answer", "text": "Removal is recommended because caps, goggles, towels and wet hair can catch earrings, which are difficult to recover underwater." } },
        { "@type": "Question", "name": "Can I wear a diamond bracelet in a pool?", "acceptedAnswer": { "@type": "Answer", "text": "No. Chemicals, impact, sunscreen and snagging can affect its links, settings and clasp even with a safety catch." } },
        { "@type": "Question", "name": "Is a hot tub safe for diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "No. Hot tubs combine sanitising chemicals, heat, jets and prolonged soaking, which can be unsuitable for metals, settings and mixed materials." } },
        { "@type": "Question", "name": "Can cold water make a ring fall off?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fingers may temporarily reduce in size in cold water, and sunscreen or motion can make the ring easier to lose." } },
        { "@type": "Question", "name": "What should I do after swimming with diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Remove and inspect it, rinse only if all materials permit, dry fully and seek assessment if the setting, clasp or surface has changed." } },
        { "@type": "Question", "name": "Can sand scratch a diamond ring?", "acceptedAnswer": { "@type": "Answer", "text": "Sand is unlikely to scratch the diamond, but it can abrade jewellery metals and softer gemstones, especially when rubbed." } },
        { "@type": "Question", "name": "Where should I keep jewellery while swimming?", "acceptedAnswer": { "@type": "Answer", "text": "Secure storage at home or in suitable accommodation is best. If it travels, use an individual padded case and proportionate security." } }
      ]
    }
  ]
};

// 3. Article content sections structured for DynamicArticle (Without images)
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "paragraph",
        text: "Remove diamond jewellery before swimming. The diamond itself is highly stable, but the complete piece includes metal alloys, settings, clasps, finishes and sometimes coloured stones or treatments. Chlorine may affect some alloys, cold water can make rings easier to lose, sand can abrade jewellery, and open water makes recovery exceptionally difficult."
      },
      {
        type: "paragraph",
        text: "The safest routine is to decide before leaving home whether a valuable piece should travel at all. If it does, store it securely before applying sunscreen or entering the water—not loose in a towel, shoe or beach bag."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Do not swim in diamond rings, earrings, necklaces or bracelets. GIA advises removing diamond jewellery before chlorinated pools and hot tubs because chlorine can erode some metal alloys used in settings and may contribute to damaged or loosened prongs. In the sea or a lake, cold water, movement, reduced visibility and depth create serious loss risks; salt, sunscreen and sand can leave residue or abrade vulnerable surfaces. Lab-grown and natural diamonds follow the same rule because the risk belongs mainly to the finished jewel and the environment, not its growth origin."
      }
    ]
  },
  {
    heading: "The risk depends on where you swim",
    content: [
      {
        type: "table",
        headers: ["Environment", "Principal risks", "Recommendation"],
        rows: [
          ["Chlorinated pool", "Alloy damage, residue, impact, loss", "Remove before entry"],
          ["Hot tub or spa", "Chlorine/bromine, heat, jets, snagging", "Remove before entry"],
          ["Sea", "Cold-water fit changes, waves, salt, sand, permanent loss", "Leave securely on land"],
          ["Lake or river", "Cold water, current, poor visibility, rocks, loss", "Leave securely on land"],
          ["Water park", "Chemicals, high movement, impact, ride restrictions", "Do not wear fine jewellery"]
        ]
      }
    ]
  },
  {
    heading: "Can chlorine damage diamond jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Chlorine pitting targets gold alloys, potentially causing settings to fracture. Do not swim with gold rings in pools."
      }
    ]
  },
  {
    heading: "Can you wear a diamond ring in a swimming pool?",
    content: [
      {
        type: "paragraph",
        text: "Pool water cools skin, making fingers shrink temporarily. Rings slide off easily into deep filter paths."
      }
    ]
  },
  {
    heading: "Can you wear diamond earrings while swimming?",
    content: [
      {
        type: "paragraph",
        text: "Swim cap bands snag ear hoops. Tiny studs are impossible to locate when lost in busy pool basins."
      }
    ]
  },
  {
    heading: "Can you swim with a diamond necklace or bracelet?",
    content: [
      {
        type: "paragraph",
        text: "Chains catch on steps or lane ropes. Fasten clasps flat in travel cases before entering pool zones."
      }
    ]
  },
  {
    heading: "Are hot tubs worse for jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Hot tubs mix high chlorine doses, strong jets, and elevated temperatures. This accelerates setting wear."
      }
    ]
  },
  {
    heading: "Can you wear diamond jewellery in the sea?",
    content: [
      {
        type: "paragraph",
        text: "Salt residues leave thick films, and waves pull rings from fingers. Keep fine jewelry locked in safes."
      }
    ]
  },
  {
    heading: "What about lakes, rivers and natural springs?",
    content: [
      {
        type: "paragraph",
        text: "River currents wash loose pieces away instantly. Rocks also chip gold bands on impact."
      }
    ]
  },
  {
    heading: "Sunscreen creates a separate problem",
    content: [
      {
        type: "paragraph",
        text: "Always follow this product order to avoid coating stones:"
      },
      {
        type: "numbered-list",
        items: [
          "Remove and secure jewellery.",
          "Apply sunscreen as directed.",
          "Enter the water without jewellery.",
          "Shower and dry after swimming.",
          "Reapply required skincare.",
          "Put jewellery back on only when skin is clean and dry."
        ]
      }
    ]
  },
  {
    heading: "Sand can scratch the rest of the piece",
    content: [
      {
        type: "paragraph",
        text: "Sand quartz particles scratch gold alloys and rhodium plating. Never scrub sandy bands with dry towels."
      }
    ]
  },
  {
    heading: "Lab-grown versus natural diamonds in water",
    content: [
      {
        type: "paragraph",
        text: "The origin label does not change water risks. Concerns focus on:"
      },
      {
        type: "bullet-list",
        items: [
          "the metal alloy;",
          "setting condition;",
          "plating or coating;",
          "coloured stones and treatments;",
          "adhesives or speciality components; and",
          "the swimming environment."
        ]
      }
    ]
  },
  {
    heading: "Jewellery that combines diamonds and coloured stones",
    content: [
      {
        type: "paragraph",
        text: "Porous stones absorb sea salts and chemicals. Always confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "each gemstone identity;",
          "known treatments or coatings;",
          "whether adhesive is used;",
          "the metal and finish; and",
          "the maker’s care instructions."
        ]
      }
    ]
  },
  {
    heading: "Where should jewellery be kept while swimming?",
    content: [
      {
        type: "paragraph",
        text: "Leave valuable items in room safes. Do not:"
      },
      {
        type: "bullet-list",
        items: [
          "leave cases visible in vehicles;",
          "wrap in beach towels or hide in shoes; or",
          "leave bags unmonitored on beach chairs."
        ]
      }
    ]
  },
  {
    heading: "What to do if you accidentally swam with jewellery",
    content: [
      {
        type: "numbered-list",
        items: [
          "Remove the piece over a soft, secure surface.",
          "Inspect the clasp, links, prongs, posts and stones.",
          "If all materials permit, rinse pool chemicals, salt or sand using clean lukewarm water in a secured container—not over an open drain.",
          "Pat and air-dry fully with the approved lint-free material.",
          "Follow the maker-approved cleaning process if sunscreen or film remains.",
          "Arrange professional inspection if a stone moves, the metal has changed, a clasp feels different or the piece received an impact."
        ]
      }
    ]
  },
  {
    heading: "What if a ring is lost in water?",
    content: [
      {
        type: "paragraph",
        text: "If loss occurs, document details immediately:"
      },
      {
        type: "bullet-list",
        items: [
          "Stop unnecessary movement around the likely location.",
          "Note the exact position, time and water conditions.",
          "Notify pool or venue staff immediately.",
          "Do not enter unsafe water or filtration areas.",
          "For open water, use a qualified local recovery or metal-detecting service where permitted.",
          "Report the loss to the appropriate authority and insurer as required.",
          "Keep grading reports, photographs and identifying numbers available separately."
        ]
      }
    ]
  },
  {
    heading: "Common swimming-jewellery myths",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "“Diamond is the hardest material, so the ring is safe”: ", bold: true }, { text: "Hardness prevents scratches, but does not secure mount claws or prevent loss." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“Salt water cleans a diamond”: ", bold: true }, { text: "Salt leaves cloudy residues on stones. Safe rinses are required." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“A tight ring cannot fall off”: ", bold: true }, { text: "Cold water reduces blood flow, shrinking finger diameters." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“A safety clasp makes a bracelet pool-safe”: ", bold: true }, { text: "Clasps can snag on lane dividers or suit straps." }]
      }
    ]
  },
  {
    heading: "Pre-swim checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Leave valuable jewellery securely at home when possible.",
          "Remove rings, earrings, necklaces and bracelets before changing.",
          "Store each item in its own padded position.",
          "Use appropriate secure storage—not a towel or shoe.",
          "Apply sunscreen only after jewellery is removed.",
          "Put jewellery back on after swimming, showering and drying.",
          "Inspect any accidentally exposed piece before wearing it again."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale recommendation",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale mandates pre-swim removals for all designs. Browse collections at " },
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
            text: "Pools, hot tubs, seas and lakes create different risks, but the recommendation is the same.\n\n"
          },
          {
            text: "Store fine jewellery securely before entering the water. Chlorine erodes setting alloys, seawater shrinks fingers, and open depths make recovery impossible."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can you swim with a diamond ring?",
            answer: "It is safer to remove it. Chlorine may affect setting alloys, while cold water, sunscreen and movement increase the chance of loss."
          },
          {
            question: "Does chlorine damage diamonds?",
            answer: "Chlorine is not expected to damage an untreated diamond, but it can affect some metal alloys used in diamond settings and may contribute to weakened prongs."
          },
          {
            question: "Can you wear lab-grown diamonds in a pool?",
            answer: "No. Lab-grown and natural diamond jewellery follow the same pool-care rule because the setting, metal and loss risk matter more than growth origin."
          },
          {
            question: "Can you swim in the sea with a diamond ring?",
            answer: "Do not. Cold water, waves, sunscreen, sand and poor underwater visibility make permanent loss or damage more likely."
          },
          {
            question: "Does salt water damage diamond jewellery?",
            answer: "The diamond is stable, but salt residue, sand, sunscreen, settings, finishes and other stones remain concerns. Loss is the largest risk."
          },
          {
            question: "Can I wear diamond earrings while swimming?",
            answer: "Removal is recommended. Caps, goggles, towels and wet hair can catch earrings, and a small stud or back is difficult to recover underwater."
          },
          {
            question: "Can I wear a diamond bracelet in a pool?",
            answer: "No. Chemicals, impact, sunscreen and snagging can affect its links, settings and clasp even when it has a safety catch."
          },
          {
            question: "Is a hot tub safe for diamond jewellery?",
            answer: "No. Hot tubs combine sanitising chemicals, heat, jets and prolonged soaking, which can be unsuitable for metals, settings and mixed materials."
          },
          {
            question: "Can cold water make a ring fall off?",
            answer: "Yes. Fingers may temporarily reduce in size in cold water, and sunscreen or motion can make the ring easier to lose."
          },
          {
            question: "What should I do after swimming with diamond jewellery?",
            answer: "Remove and inspect it, rinse only if all materials permit, dry fully and arrange professional assessment if the setting, clasp or surface has changed."
          },
          {
            question: "Can sand scratch a diamond ring?",
            answer: "Sand is unlikely to scratch the diamond, but it can abrade jewellery metals and softer gemstones, especially when rubbed with a towel."
          },
          {
            question: "Where should I keep jewellery while swimming?",
            answer: "Secure storage at home or in suitable accommodation is best. If it travels, use an individual padded case and security appropriate to its value."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Secure Holiday Styles",
        subtitle: "Aurelia Royale helps you register replacement insurance values for international travels. Contact our client support.",
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

  const localeData = getBlogDataByLocale("swim-wearing-diamond-jewellery", locale);
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
