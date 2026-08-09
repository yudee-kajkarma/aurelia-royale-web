import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Compare Diamond Earring Designs",
  description: "Compare Diamond Earring Designs",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/compare-diamond-earring-designs/",
  },
};

export const metadataEs: Metadata = {
  title: "Comparar diseños de aretes de diamantes",
  description: "Comparar diseños de aretes de diamantes - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-diamond-earring-designs/",
  },
};

export const metadataFr: Metadata = {
  title: "Comparez les modèles de boucles d'oreilles en diamant",
  description: "Comparez les modèles de boucles d'oreilles en diamant - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-diamond-earring-designs/",
  },
};

export const metadataNl: Metadata = {
  title: "Vergelijk diamanten oorbelontwerpen",
  description: "Vergelijk diamanten oorbelontwerpen - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-diamond-earring-designs/",
  },
};



export const metadataDe: Metadata = {
  title: "Vergleichen Sie Diamantohrring-Designs",
  description: "Vergleichen Sie Diamantohrring-Designs - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-diamond-earring-designs/",
  },
};


export const metadataIt: Metadata = {
  title: "Come confrontare i modelli di orecchini con diamanti online",
  description: "Scegli gli orecchini giusti per il tuo stile di vita. Confronta il comfort, la sicurezza e la lucentezza di borchie, cerchi e orecchini pendenti. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/compare-diamond-earring-designs/",
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
      "@id": "https://www.aureliaroyale.com/blog/compare-diamond-earring-designs/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/compare-diamond-earring-designs/"
      },
      "headline": "How to Compare Different Diamond Earring Designs",
      "description": "Compare diamond studs, drops, hoops, huggies, clusters and climbers by scale, movement, weight, fastening, carat allocation and everyday wear.",
      "image": "https://www.aureliaroyale.com/images/blog/compare-diamond-earring-designs.webp",
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
        "how to compare diamond earring designs",
        "diamond earring styles compared",
        "types of diamond earrings"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/compare-diamond-earring-designs/#breadcrumb",
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
          "name": "Compare Diamond Earring Designs",
          "item": "https://www.aureliaroyale.com/blog/compare-diamond-earring-designs/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/compare-diamond-earring-designs/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the main types of diamond earrings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common types include studs, drops, hoops, huggies, clusters and ear climbers."
          }
        },
        {
          "@type": "Question",
          "name": "Are diamond studs or drops better for everyday wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither automatically. Compare projection, movement, weight, fastening and the wearer routine."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a hoop and a huggie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A huggie is a small hoop designed to sit close around the lobe; larger hoops create more visible diameter and movement."
          }
        },
        {
          "@type": "Question",
          "name": "How are diamond earrings measured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Measurements vary by style and may include height, width, depth, drop, outer diameter and inner diameter."
          }
        },
        {
          "@type": "Question",
          "name": "Is earring weight stated per pair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be stated per earring or per pair. The listing should specify physical and diamond-weight conventions."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean for earrings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It commonly combines all diamonds in both earrings, but the product page should confirm the scope."
          }
        },
        {
          "@type": "Question",
          "name": "Why do two earrings with the same carat weight look different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diamond shape, stone count, setting, dimensions and weight distribution can create different visible outlines."
          }
        },
        {
          "@type": "Question",
          "name": "Which earring fastening is most secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No fastening is universally best. Security depends on construction, fit, condition and correct use."
          }
        },
        {
          "@type": "Question",
          "name": "Should diamond earrings match exactly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They should appear intentionally matched, although minor measurement differences may exist unless exact matching is promised."
          }
        },
        {
          "@type": "Question",
          "name": "Do heavy earrings damage earlobes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comfort and suitability vary. Stop wearing earrings that cause pain or pulling and seek appropriate professional advice."
          }
        },
        {
          "@type": "Question",
          "name": "Does one diamond certificate cover an earring pair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Check whether the report identifies one diamond, one earring or the finished pair."
          }
        },
        {
          "@type": "Question",
          "name": "What should I check when buying earrings online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check dimensions, physical weight, carat allocation, matching, metal, fastening, report scope, hygiene returns and warranty."
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
        src: "/images/blog/compare-diamond-earring-designs/1.jpg",
        alt: "Different diamond earring designs and styles compared",
        title: "Earring Design Scorecard",
        caption: "To compare diamond earring designs fairly, begin with how each pair behaves on the ear.",
        priority: true
      },
      {
        type: "paragraph",
        text: "To compare diamond earring designs fairly, begin with how each pair behaves on the ear. A stud sits close to the lobe, a drop introduces length and movement, and a hoop creates a visible circular or curved outline. Those structural differences affect comfort, security, diamond distribution and price."
      },
      {
        type: "paragraph",
        text: "Do not compare two pairs using carat weight alone. Compare position, dimensions, physical weight, fastening, setting, diamond quality and total delivered value."
      }
    ]
  },
  {
    heading: "Quick comparison",
    content: [
      {
        type: "table",
        headers: ["Design", "Position and movement", "Key measurement", "Main buying check"],
        rows: [
          ["Stud", "Close to the lobe; little movement", "Face-up height and width", "Post position, backing and forward tilt"],
          ["Drop", "Extends below the lobe; may move", "Piercing-to-tip drop", "Articulation, weight and hair contact"],
          ["Hoop", "Curves around or below the lobe", "Outer diameter and width", "Closure alignment and stone coverage"],
          ["Huggie", "Small hoop close to the lobe", "Inner diameter and thickness", "Fit around the individual lobe"],
          ["Cluster", "Several stones create one outline", "Complete motif dimensions", "Stone count and total-weight breakdown"],
          ["Ear climber", "Travels along the ear", "Complete length and anchoring", "Stability and ear compatibility"]
        ]
      }
    ]
  },
  {
    heading: "1. Compare where the earring sits",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-diamond-earring-designs/2.jpg",
        alt: "A close-up view of studs, hoops, and ear climbers on the ear",
        title: "Ear Position Comparisons",
        caption: "Stated millimetre specifications define where the design will sit on the ear better than zoom styling photos."
      },
      {
        type: "paragraph",
        text: "Check where design features concentrate: studs place visual detail at the piercing, drops sit below the lobe, hoops circle frames, and climbers travel upward. Verify on-body placement guides before checking out."
      }
    ]
  },
  {
    heading: "2. Compare movement",
    content: [
      {
        type: "paragraph",
        text: "Evaluate link joins, rotation potentials, layout symmetries, and catch risks. Coordinated occasion designs often feature high articulation, whereas daily options favour controlled stability."
      }
    ]
  },
  {
    heading: "3. Compare dimensions in millimetres",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-diamond-earring-designs/3.jpg",
        alt: "Measuring huggies and drop earrings drop dimensions",
        title: "Earring Dimension Rules",
        caption: "Cross-checking width, inner loop diameter, and drop thickness saves sizing disappointments."
      },
      {
        type: "table",
        headers: ["Design", "Measurements to request"],
        rows: [
          ["Stud or cluster", "Height, width, depth and setting projection"],
          ["Drop", "Total height, piercing-to-tip drop, widest point and depth"],
          ["Hoop", "Outer and inner diameter, hoop width and thickness"],
          ["Huggie", "Inner diameter, post-to-inner-edge space and width"],
          ["Climber", "Complete length, width and support position"]
        ]
      }
    ]
  },
  {
    heading: "4. Compare physical weight",
    content: [
      {
        type: "paragraph",
        text: "Understand per-earring vs pair totals. Large studs require balanced centers of mass to prevent tilting, while long drops require controlled weight targets for comfort."
      }
    ]
  },
  {
    heading: "5. Understand carat allocation",
    content: [
      {
        type: "table",
        headers: ["Question", "Why it matters"],
        rows: [
          ["Is the figure per earring or per pair?", "Prevents doubling or halving the expected weight"],
          ["Is there one diamond or a cluster?", "Changes visible outline and individual-stone size"],
          ["Are inside and outside hoop diamonds included?", "Explains coverage and total"],
          ["Are detachable charms included?", "Clarifies what the headline figure covers"],
          ["Is there a centre-and-accent breakdown?", "Enables like-for-like comparison"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Learn total carat scopes at " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "6. Compare diamond shape and arrangement",
    content: [
      {
        type: "paragraph",
        text: "Select configurations like uniform rows, geometric clusters, center halos, or solitaire points. Balance shape distributions across fancy cuts and round brilliants."
      }
    ]
  },
  {
    heading: "7. Compare setting exposure and protection",
    content: [
      {
        type: "paragraph",
        text: "Examine bezels, prong points, pavé patterns, and gallery protections. Settings intended for regular wear require secure structural protection at diamond tips."
      }
    ]
  },
  {
    heading: "8. Compare fastening types",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Post and butterfly: ", bold: true },
          { text: "Standard checks include post gauges, notch spots, and snug fit." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Screw back: ", bold: true },
          { text: "Threaded studs offer high security but require careful alignment." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Leverback or hinged closure: ", bold: true },
          { text: "Confirm click aligns without force." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Hook: ", bold: true },
          { text: "Validate wire lengths and whether silicone stoppers are supplied." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Huggie click closure: ", bold: true },
          { text: "Verify the receiving channel snaps securely." }
        ]
      }
    ]
  },
  {
    heading: "9. Compare studs, drops and hoops for regular wear",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-diamond-earring-designs/4.jpg",
        alt: "A side view comparing stud depth and drop earring attachments",
        title: "Comfort & Care Checks",
        caption: "Comparing back attachments and drop profiles defines wearable comfort for active schedules."
      },
      {
        type: "table",
        headers: ["Factor", "Studs", "Drops", "Hoops or huggies"],
        rows: [
          ["Movement", "Low", "Moderate to high", "Low to moderate"],
          ["Hair contact", "Usually limited", "Can be significant", "Depends on diameter"],
          ["Scale control", "Face-up motif", "Length and width", "Diameter and thickness"],
          ["Fastening focus", "Post and back", "Hook or leverback", "Hinge and closure"],
          ["Storage", "Pair separation risk", "Tangle/articulation care", "Hinge protection"]
        ]
      }
    ]
  },
  {
    heading: "10. Compare matching quality between the pair",
    content: [
      {
        type: "paragraph",
        text: "Compare outline dimensions, color tones, post alignment angles, and weight symmetry across both items."
      }
    ]
  },
  {
    heading: "11. Compare the 4Cs in context",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Check whether grading parameters describe center diamonds or cover accent rows. Review " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for full parameters." }
        ]
      }
    ]
  },
  {
    heading: "12. Compare metal and construction",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm metal fineness, weight ranges, coatings, and legal marking criteria. For metal checklists, consult " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "13. Compare reports correctly",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify that grading reports specify loose center stones or complete mounted jewelry. Check details at " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "14. Compare price using a scorecard",
    content: [
      {
        type: "table",
        headers: ["Comparison point", "Design A", "Design B"],
        rows: [
          ["Style and intended use", "", ""],
          ["Dimensions per earring", "", ""],
          ["Physical weight per earring", "", ""],
          ["Total diamond weight", "", ""],
          ["Diamond allocation and grades", "", ""],
          ["Metal and fineness", "", ""],
          ["Setting and fastening", "", ""],
          ["Report and scope", "", ""],
          ["Returns and warranty", "", ""],
          ["Delivered price", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Final comparison checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Both designs are shown on the ear at realistic scale.",
          "Position and movement suit the intended use.",
          "Dimensions are stated per earring in millimetres.",
          "Physical weight is distinct from diamond carat weight.",
          "Carat figures are labelled per stone, earring or pair.",
          "Diamond shapes, arrangement and grades are comparable.",
          "Settings are shown from front, side and back.",
          "Fastening mechanics and replacement backs are clear.",
          "The two earrings are intentionally matched.",
          "Metal, fineness and hallmark information are provided.",
          "Report issuer and exact coverage are verified.",
          "Returns, hygiene rules and warranty are acceptable."
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
          { text: "Aurelia Royale earring listings provide complete measurements, carat allocations, and back styling views. Explore " },
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
            text: "Compare diamond earrings by how they sit, move and fasten—not by style name alone.\n\n"
          },
          {
            text: "Evaluate position, dimensions, weight, fastening, setting, diamond quality and total price. Choose a design whose scale, movement, security and craftsmanship match the wearer."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What are the main types of diamond earrings?",
            answer: "Common types include studs, drops, hoops, huggies, clusters and ear climbers."
          },
          {
            question: "Are diamond studs or drops better for everyday wear?",
            answer: "Neither automatically. Compare projection, movement, weight, fastening and the wearer’s routine."
          },
          {
            question: "What is the difference between a hoop and a huggie?",
            answer: "A huggie is a small hoop designed to sit close around the lobe; larger hoops create more visible diameter and movement."
          },
          {
            question: "How are diamond earrings measured?",
            answer: "Measurements vary by style and may include height, width, depth, drop, outer diameter and inner diameter."
          },
          {
            question: "Is earring weight stated per pair?",
            answer: "It may be stated per earring or per pair. The listing should specify both physical and diamond-weight conventions."
          },
          {
            question: "What does total carat weight mean for earrings?",
            answer: "It commonly combines all diamonds in both earrings, but the product page should confirm the scope."
          },
          {
            question: "Why do two earrings with the same carat weight look different?",
            answer: "Diamond shape, stone count, setting, dimensions and weight distribution can create different visible outlines."
          },
          {
            question: "Which earring fastening is most secure?",
            answer: "No fastening is universally best. Security depends on construction, fit, condition and correct use."
          },
          {
            question: "Should diamond earrings match exactly?",
            answer: "They should appear intentionally matched, although minor measurement differences may exist unless exact matching is promised."
          },
          {
            question: "Do heavy earrings damage earlobes?",
            answer: "Comfort and suitability vary by wearer. Stop wearing earrings that cause pain or pulling and seek appropriate professional advice."
          },
          {
            question: "Does one diamond certificate cover an earring pair?",
            answer: "Not necessarily. Check whether the report identifies one diamond, one earring or the finished pair."
          },
          {
            question: "What should I check when buying earrings online?",
            answer: "Check dimensions, physical weight, carat allocation, matching, metal, fastening, report scope, hygiene returns and warranty."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Compare Elegant Earrings",
        subtitle: "Aurelia Royale designs diamond earrings in every category with meticulous pair matching and secure fastenings. Find your design.",
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

  const localeData = getBlogDataByLocale("compare-diamond-earring-designs", locale);
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
