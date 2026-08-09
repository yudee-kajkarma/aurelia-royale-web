import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Buying Necklace Earring Set",
  description: "Buying Necklace Earring Set",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/buying-necklace-earring-set/",
  },
};

export const metadataEs: Metadata = {
  title: "Comprar juego de aretes y collar",
  description: "Comprar juego de aretes y collar - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/buying-necklace-earring-set/",
  },
};

export const metadataFr: Metadata = {
  title: "Acheter un ensemble de boucles d'oreilles et collier",
  description: "Acheter un ensemble de boucles d'oreilles et collier - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/buying-necklace-earring-set/",
  },
};

export const metadataNl: Metadata = {
  title: "Ketting-oorbellenset kopen",
  description: "Ketting-oorbellenset kopen - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/buying-necklace-earring-set/",
  },
};



export const metadataDe: Metadata = {
  title: "Halskette-Ohrring-Set kaufen",
  description: "Halskette-Ohrring-Set kaufen - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/buying-necklace-earring-set/",
  },
};


export const metadataIt: Metadata = {
  title: "Acquista un set con collana e orecchini di diamanti",
  description: "Trova il set coordinato ideale. Scopri come abbinare il tuo pendente e gli orecchini con diamanti per creare armonia visiva. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/buying-necklace-earring-set/",
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
      "@id": "https://www.aureliaroyale.com/blog/buying-necklace-earring-set/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/buying-necklace-earring-set/"
      },
      "headline": "What to Check When Buying a Necklace and Earring Set",
      "description": "Check set contents, necklace length, earring scale, diamond-weight allocation, matching quality, metal, fastenings and certification before buying.",
      "image": "https://www.aureliaroyale.com/images/blog/buying-necklace-earring-set.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {
        "@type": "Organization",
        "name": "Aurelia Royale",
        "url": "https://www.aureliaroyale.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Aurelia Royale",
        "url": "https://www.aureliaroyale.com/"
      },
      "inLanguage": "en-GB",
      "articleSection": "Product-Category Guides",
      "keywords": [
        "what to check when buying a necklace and earring set",
        "diamond necklace and earrings set",
        "matching necklace and earrings"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/buying-necklace-earring-set/#breadcrumb",
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
          "name": "Journal",
          "item": "https://www.aureliaroyale.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Buying a Necklace and Earring Set",
          "item": "https://www.aureliaroyale.com/blog/buying-necklace-earring-set/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/buying-necklace-earring-set/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should a necklace and earring set include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It should clearly state one complete necklace, one pair of earrings, all fastenings, documents and included accessories."
          }
        },
        {
          "@type": "Question",
          "name": "Does a pendant and earring set include the chain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Confirm chain inclusion in the written specification rather than relying on photographs."
          }
        },
        {
          "@type": "Question",
          "name": "Should matching necklace and earrings be identical?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They can coordinate through motif, shape, metal or proportion while using different scales."
          }
        },
        {
          "@type": "Question",
          "name": "How do I balance a necklace with drop earrings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare necklace position, pendant drop, earring drop and the open space between them on the wearer."
          }
        },
        {
          "@type": "Question",
          "name": "Is earring carat weight stated per pair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be per pair or per earring. The product page should state the convention explicitly."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean for the complete set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may combine every diamond in the necklace and both earrings. Request a component breakdown."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know whether the earrings match?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare their dimensions, outline, visible colour, brilliance, orientation, setting and physical weight."
          }
        },
        {
          "@type": "Question",
          "name": "Can I wear a matching necklace and earrings separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually. Assess each piece independently for scale, comfort and compatibility with the wearer wardrobe."
          }
        },
        {
          "@type": "Question",
          "name": "Does one certificate cover the whole set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. Check which stone or finished article each report identifies."
          }
        },
        {
          "@type": "Question",
          "name": "Should the necklace and earrings have separate hallmarks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Requirements depend on metal, weight and market. Check legal marking information for each piece and component."
          }
        },
        {
          "@type": "Question",
          "name": "Can I return only the earrings from a set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Policies vary, and hygiene restrictions may apply. Confirm whether the complete set must be returned."
          }
        },
        {
          "@type": "Question",
          "name": "Is a necklace and earring set better value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, but compare specifications, separate prices, versatility, documents and actual use before deciding."
          }
        }
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
        src: "/images/blog/buying-necklace-earring-set/1.jpg",
        alt: "A matching diamond necklace and earring set",
        title: "Necklace & Earring Set Guide",
        caption: "A necklace and earring set should coordinate in scale and setting style while remaining versatile.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A necklace and earring set should look intentional when worn together and remain useful when each piece is worn alone."
      },
      {
        type: "paragraph",
        text: "Before buying, confirm exactly what is included, how the necklace and earrings are measured, how diamond weight is divided, whether the earrings are matched as a pair, and which components the metal disclosures, report, warranty and return policy cover."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Check these ten points:"
      },
      {
        type: "numbered-list",
        items: [
          "The set includes one complete necklace and one pair of earrings.",
          "The chain is included and its length and adjustment range are stated.",
          "Pendant height and earring height are shown in millimetres.",
          "The pieces complement rather than compete with each other.",
          "Diamond carat weight is separated by necklace and earring pair.",
          "Earring weights and measurements are stated per pair or per earring.",
          "Diamond origin and quality ranges cover clearly identified stones.",
          "Metal, fineness and hallmark information are stated for both pieces.",
          "The necklace clasp and earring backs suit the intended wear.",
          "Reports, returns and warranty terms identify each covered component."
        ]
      }
    ]
  },
  {
    heading: "1. Verify the set contents",
    content: [
      {
        type: "paragraph",
        text: "Confirm package contents explicitly: identify pendant chain lengths, check earring counts (pair designation), and verify backing components. Do not rely on layered product styling imagery."
      }
    ]
  },
  {
    heading: "2. Decide how closely the pieces should match",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-necklace-earring-set/2.jpg",
        alt: "Coordinating necklace motifs and matching drop earrings",
        title: "Motif Harmony Styles",
        caption: "Balancing motif scales and shared diamond cuts creates cohesion without unnecessary visual monotony."
      },
      {
        type: "table",
        headers: ["Pairing approach", "Effect", "Best check"],
        rows: [
          ["Identical motif", "Strongly unified", "Whether repetition feels too formal for regular wear"],
          ["Graduated motif", "Necklace leads, earrings support", "Relative dimensions"],
          ["Shared shape", "Cohesive but flexible", "Shape proportions and orientation"],
          ["Shared metal only", "Subtle coordination", "Finish and metal-colour consistency"],
          ["Coloured stone plus diamond", "Colour-led set", "Origin, treatment and colour matching"]
        ]
      }
    ]
  },
  {
    heading: "3. Check the visual spacing",
    content: [
      {
        type: "paragraph",
        text: "Factor in earring drops, hair styles, and neckline drops. Avoid crowded detail zones around the jawline by balancing drop styles with simpler pendant scales."
      }
    ]
  },
  {
    heading: "4. Verify necklace length and pendant drop",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-necklace-earring-set/3.jpg",
        alt: "A white gold chain showing adjustment loops",
        title: "Necklace Length Settings",
        caption: "Confirming wearable chain length adjustability ensures the pendant sits at the correct position."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Confirm loop adjustment spots and separate motif drop heights from chains. For necklace lengths, refer to " },
          { text: "guide to selecting necklace length", href: "/blog/select-right-necklace-length/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "5. Check earring dimensions and weight",
    content: [
      {
        type: "paragraph",
        text: "Check drop lengths, post locations, and comfort weights. Visual scales require millimetre checking rather than close-up photography estimates."
      }
    ]
  },
  {
    heading: "6. Separate every diamond weight",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-necklace-earring-set/4.jpg",
        alt: "An breakdown matrix for diamond weight allocation",
        title: "Carat Weight Matrix",
        caption: "Separating the necklace diamond carats from the earring pair totals ensures transparency."
      },
      {
        type: "table",
        headers: ["Component", "Centre diamond(s)", "Accent diamonds", "Component total"],
        rows: [
          ["Necklace", "", "", ""],
          ["Earring pair", "", "", ""],
          ["Per earring, if stated", "", "", ""],
          ["Complete set", "", "", ""]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Separate principal carats from accent counts. For full explanations on total carats, see " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "7. Check the earrings as a matched pair",
    content: [
      {
        type: "paragraph",
        text: "Verify color matching, dimension tolerances, brightness consistency, and post placement symmetry across both items."
      }
    ]
  },
  {
    heading: "8. Compare diamond quality across both pieces",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Check whether cut grades, color ranges, and clarity scopes cover both center diamonds and accent stones. Refer to " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for details." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cut: ", bold: true },
          { text: "Cut quality determines light scintillation and facet contrast." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Colour and clarity: ", bold: true },
          { text: "Ensure clarity scopes are clean under regular viewing distances." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Shape and carat: ", bold: true },
          { text: "Confirm carat weights separate from visual face spreads." }
        ]
      }
    ]
  },
  {
    heading: "9. Confirm lab-grown origin and coloured-stone disclosure",
    content: [
      {
        type: "paragraph",
        text: "Disclose laboratory-grown origin for all diamonds. Note treatment disclosures and color matching details for any mixed-stone configurations."
      }
    ]
  },
  {
    heading: "10. Check both metal specifications",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify gold/platinum types, fineness targets, and surface coatings separately for both pieces. For detail checks, consult " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "11. Inspect clasps, posts and backs",
    content: [
      {
        type: "paragraph",
        text: "Check chain closures, post thickness comfort, earring back grips, and loop joins. Look for side and back profile photography before ordering."
      }
    ]
  },
  {
    heading: "12. Make sure each piece works alone",
    content: [
      {
        type: "paragraph",
        text: "Ensure the components look balanced when worn independently. Coordinating motifs are often easier to pair with daily wardrobes than rigid exact matches."
      }
    ]
  },
  {
    heading: "13. Understand certification and report scope",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify report numbers on laboratory verification platforms. Details are available at " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "14. Compare set price and separate prices",
    content: [
      {
        type: "paragraph",
        text: "Confirm component pricing against individual offerings. Value lies in purchasing pieces that will both be worn, not the package discount value alone."
      }
    ]
  },
  {
    heading: "15. Review set-specific returns and warranty",
    content: [
      {
        type: "paragraph",
        text: "Check split-return rules, hygiene restrictions on earring posts, custom engraving terms, and international return costs."
      }
    ]
  },
  {
    heading: "Final buying checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "One complete necklace and one earring pair are explicitly included.",
          "Chain length, adjustment and pendant dimensions are stated.",
          "Earring dimensions, drop and physical weight are clear.",
          "The scale and spacing work together on the body.",
          "Diamond weight is separated by necklace and earring pair.",
          "Per-earring versus pair figures are labelled.",
          "Diamond quality scope and lab-grown origin are clear.",
          "Every coloured stone’s origin and treatment are disclosed.",
          "Metal, fineness, weights and marks are provided for both pieces.",
          "Clasp, posts, backs and reverse construction are shown.",
          "Each piece is useful independently.",
          "Reports are mapped to covered items.",
          "Returns, replacement and warranty terms address both pieces.",
          "The complete delivered price is understood."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale approach",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale details sets piece-by-piece so you understand every component. Explore " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " for full specification lists." }
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
            text: "A necklace and earring set should coordinate in scale and quality while remaining practical as two separate purchases.\n\n"
          },
          {
            text: "Before buying, confirm exactly what is included, how the necklace and earrings are measured, how diamond weight is divided, whether the earrings are matched as a pair, and which components the metal disclosures, report, warranty and return policy cover."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What should a necklace and earring set include?",
            answer: "It should clearly state one complete necklace, one pair of earrings, all fastenings, documents and any included accessories."
          },
          {
            question: "Does a pendant and earring set include the chain?",
            answer: "Not necessarily. Confirm chain inclusion in the written specification rather than relying on photographs."
          },
          {
            question: "Should matching necklace and earrings be identical?",
            answer: "No. They can coordinate through motif, shape, metal or proportion while using different scales."
          },
          {
            question: "How do I balance a necklace with drop earrings?",
            answer: "Compare necklace position, pendant drop, earring drop and the open space between them on the wearer."
          },
          {
            question: "Is earring carat weight stated per pair?",
            answer: "It may be per pair or per earring. The product page should state the convention explicitly."
          },
          {
            question: "What does total carat weight mean for the complete set?",
            answer: "It may combine every diamond in the necklace and both earrings. Request a component breakdown."
          },
          {
            question: "How do I know whether the earrings match?",
            answer: "Compare their dimensions, outline, visible colour, brilliance, orientation, setting and physical weight."
          },
          {
            question: "Can I wear a matching necklace and earrings separately?",
            answer: "Usually. Assess each piece independently for scale, comfort and compatibility with the wearer’s wardrobe."
          },
          {
            question: "Does one certificate cover the whole set?",
            answer: "Usually not. Check which stone or finished article each report identifies."
          },
          {
            question: "Should the necklace and earrings have separate hallmarks?",
            answer: "Requirements depend on metal, weight and market. Check the legal marking information for each piece and detachable component."
          },
          {
            question: "Can I return only the earrings from a set?",
            answer: "Policies vary, and hygiene restrictions may apply. Confirm whether the complete set must be returned."
          },
          {
            question: "Is a necklace and earring set better value?",
            answer: "It can be, but compare specifications, separate prices, versatility, documents and actual use before deciding."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Exquisite Sets",
        subtitle: "Aurelia Royale designs coordinating necklace and earring sets with precise matching and secure mountings. Explore our collection.",
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

  const localeData = getBlogDataByLocale("buying-necklace-earring-set", locale);
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
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Product-Category Guides" : locale === "es" ? "Guías de categorías de productos" : "Product-Category Guides"}
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
