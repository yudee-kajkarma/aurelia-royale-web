import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Coloured Centre Stones Vs Colourless Diamonds",
  description: "Coloured Centre Stones Vs Colourless Diamonds",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/coloured-centre-stones-vs-colourless-diamonds/",
  },
};

export const metadataEs: Metadata = {
  title: "Piedras centrales de colores versus diamantes incoloros",
  description: "Piedras centrales de colores versus diamantes incoloros - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/coloured-centre-stones-vs-colourless-diamonds/",
  },
};

export const metadataFr: Metadata = {
  title: "Pierres centrales colorées vs diamants incolores",
  description: "Pierres centrales colorées vs diamants incolores - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/coloured-centre-stones-vs-colourless-diamonds/",
  },
};

export const metadataNl: Metadata = {
  title: "Gekleurde middenstenen versus kleurloze diamanten",
  description: "Gekleurde middenstenen versus kleurloze diamanten - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/coloured-centre-stones-vs-colourless-diamonds/",
  },
};



export const metadataDe: Metadata = {
  title: "Farbige Mittelsteine ​​im Vergleich zu farblosen Diamanten",
  description: "Farbige Mittelsteine ​​im Vergleich zu farblosen Diamanten - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/coloured-centre-stones-vs-colourless-diamonds/",
  },
};


export const metadataIt: Metadata = {
  title: "Pietre centrali colorate contro diamanti incolori",
  description: "Confronta gli stili per il tuo anello di fidanzamento o la tua gioielleria. Scopri i vantaggi estetici, di prezzo e di durabilità delle pietre preziose colorate e dei diamanti incolori. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/coloured-centre-stones-vs-colourless-diamonds/",
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
      "@id": "https://www.aureliaroyale.com/blog/coloured-centre-stones-vs-colourless-diamonds/#article",
      "headline": "Coloured Centre Stones vs Colourless Diamond Designs",
      "description": "Compare coloured centre stones and colourless diamond designs by colour, light, scale, metal, versatility, care and product transparency.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/coloured-centre-stones-vs-colourless-diamonds/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/coloured-centre-stones-vs-colourless-diamonds.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/coloured-centre-stones-vs-colourless-diamonds/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Coloured Stones and Diamonds", "item": "https://www.aureliaroyale.com/blog/category/coloured-stones-and-diamonds/" },
        { "@type": "ListItem", "position": 4, "name": "Coloured Centre Stones vs Colourless Diamond Designs", "item": "https://www.aureliaroyale.com/blog/coloured-centre-stones-vs-colourless-diamonds/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/coloured-centre-stones-vs-colourless-diamonds/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Is a coloured centre stone better than a colourless diamond?", "acceptedAnswer": { "@type": "Answer", "text": "Neither is universally better. A coloured stone creates a colour-led focal point; a colourless diamond creates a light-led one. Compare the exact stones and complete designs." } },
        { "@type": "Question", "name": "Does a coloured gemstone look larger than a diamond?", "acceptedAnswer": { "@type": "Answer", "text": "It may, but carat is weight rather than visible size. Compare millimetre dimensions, cut, depth and setting outline." } },
        { "@type": "Question", "name": "Are coloured centre stones less durable than diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Durability depends on the particular material, treatments, inclusions and setting. Do not infer it from colour alone." } },
        { "@type": "Question", "name": "Do colourless diamonds have no colour at all?", "acceptedAnswer": { "@type": "Answer", "text": "D-to-Z grading measures degrees of colourlessness, while fancy-colour diamonds use a different system." } },
        { "@type": "Question", "name": "Why add lab-grown diamond accents to a coloured stone?", "acceptedAnswer": { "@type": "Answer", "text": "Accents can add brightness, contrast, movement and a larger outer outline while leaving colour as the focal point." } },
        { "@type": "Question", "name": "Which metal is best for a coloured centre stone?", "acceptedAnswer": { "@type": "Answer", "text": "There is no universal best metal colour. Compare how white, yellow and rose-coloured metals interact with the exact stone and complete design." } },
        { "@type": "Question", "name": "Is a colourless diamond design more versatile?", "acceptedAnswer": { "@type": "Answer", "text": "Its neutral appearance may coordinate easily, but scale, shape and personal wardrobe matter. A regularly worn coloured piece can be equally versatile for its owner." } },
        { "@type": "Question", "name": "Can coloured stones be certified like diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Laboratories may issue identification reports for coloured stones, but their content differs from diamond grading reports. Check the report type and scope." } },
        { "@type": "Question", "name": "Should I compare coloured stones by the diamond 4Cs?", "acceptedAnswer": { "@type": "Answer", "text": "Not mechanically. Colour, cut, clarity and weight matter in different ways across gem materials, and diamond-specific cut grades do not apply universally." } },
        { "@type": "Question", "name": "Are coloured centre stones always natural?", "acceptedAnswer": { "@type": "Answer", "text": "No. They may be natural, laboratory-created, composite or imitation, and may be treated. The listing should state the correct category." } },
        { "@type": "Question", "name": "Which design photographs best online?", "acceptedAnswer": { "@type": "Answer", "text": "Both can photograph well, but accurate colour, controlled exposure, multiple lighting contexts, movement and on-body scale are essential for a fair comparison." } },
        { "@type": "Question", "name": "How do I make the final choice?", "acceptedAnswer": { "@type": "Answer", "text": "Compare both at normal viewing distance, confirm every specification and choose whether you want colour or light to lead the design." } }
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
        src: "/images/blog/coloured-centre-stones-vs-colourless-diamonds/1.jpg",
        alt: "A side-by-side comparison of a coloured sapphire and a colourless diamond",
        title: "Center Stone Contrasts",
        caption: "Coloured centre stones lead with hue and contrast while colourless diamonds lead with brightness.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A coloured centre stone and a colourless diamond can occupy the same position in a piece of jewellery while creating very different visual experiences."
      },
      {
        type: "paragraph",
        text: "The coloured stone leads with hue and contrast. The colourless diamond leads with brightness, fire and scintillation. Neither is automatically more beautiful, versatile or valuable. The right choice depends on the exact stone, complete design, how you plan to wear it and whether the product information is complete."
      }
    ]
  },
  {
    heading: "Quick comparison",
    content: [
      {
        type: "table",
        headers: ["Design factor", "Coloured centre stone", "Colourless diamond centre"],
        rows: [
          ["First impression", "Colour-led focal point", "Light-led focal point"],
          ["Visual variation", "Hue, tone, saturation and zoning can vary", "Facet pattern, brightness, fire and scintillation vary"],
          ["Contrast", "Often distinct from diamond accents", "Usually a continuous diamond-led look"],
          ["Metal interaction", "Metal can strengthen or soften perceived colour", "Metal can influence perceived warmth and outline"],
          ["Matching", "Exact colour matches may be difficult", "Diamond grades and dimensions support structured comparison"],
          ["Care", "Depends strongly on gem identity and treatment", "Depends on diamond, setting and metal"],
          ["Best for", "Buyers wanting expressive colour", "Buyers wanting a neutral, luminous design"]
        ]
      }
    ]
  },
  {
    heading: "The essential distinction: colour-led or light-led",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Understand hue, saturation, and tone values for coloured options. Contrast these with the light brilliance and scintillation metrics of colorless cuts. For the 4Cs, see " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "1. Decide what should attract the eye first",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-centre-stones-vs-colourless-diamonds/2.jpg",
        alt: "A red ruby ring seen from normal viewing distance",
        title: "Focal Eye Direction",
        caption: "Comparing solitaire styles against surrounding accent frames defines visual emphasis."
      },
      {
        type: "paragraph",
        text: "Determine if the styling aims for colorless light interaction or bold chromatic focus. Evaluate visual outlines at normal viewing distance."
      }
    ]
  },
  {
    heading: "2. Compare colour under more than one light",
    content: [
      {
        type: "paragraph",
        text: "Observe how daylight, warm indoors, and showroom lighting alter gem body hues. Verify actual stock colors in movement video captures."
      }
    ]
  },
  {
    heading: "3. Do not compare carat weight as visible size",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-centre-stones-vs-colourless-diamonds/3.jpg",
        alt: "Comparing the face-up millimetre sizes of equal-weight sapphire and diamond",
        title: "Density Size Differences",
        caption: "Density variations mean equal carats look different: check length and width dimensions."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Varying densities alter gem volumes: always record millimetre widths, setting projection depths, and heights. Consult " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "4. Understand what diamond accents contribute",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-centre-stones-vs-colourless-diamonds/4.jpg",
        alt: "A halo accent ring layout",
        title: "Accent Layout Impact",
        caption: "Accents frame coloured centers with brightness; separate carat totals specify exact distributions."
      },
      {
        type: "table",
        headers: ["Accent layout", "Effect on a coloured centre"],
        rows: [
          ["Halo", "Expands the bright outer outline"],
          ["Side stones", "Draws the eye horizontally"],
          ["Pavé surround", "Adds fine surface shimmer"],
          ["Drop or line", "Creates movement and length"],
          ["Sparse accents", "Preserves more visual emphasis on colour"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Verify center weight separate from accent counts. For totals, see " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "5. Let metal colour participate deliberately",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "White-coloured metal creates cooler boundaries; rose/yellow alloys generate warm contrast. For checklists, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "6. Compare outline and cut—not just material",
    content: [
      {
        type: "paragraph",
        text: "Select face outlines (oval, round, emerald cuts) and facet alignments. Coloured stones favor color retention cuts over pure light returns."
      }
    ]
  },
  {
    heading: "7. Consider wardrobe versatility realistically",
    content: [
      {
        type: "paragraph",
        text: "Ensure colors work with regular outfit shades. Base versatility on real frequency of wear rather than trade labels."
      }
    ]
  },
  {
    heading: "8. Treat durability and care as separate from appearance",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Hardness is separate from cleavage and heat sensitivities: check exact gem identity first. Read care protocols at " },
          { text: "how to care for coloured stones and diamonds", href: "/blog/care-coloured-stones-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "9. Compare price only after matching specifications",
    content: [
      {
        type: "numbered-list",
        items: [
          "Exact gemstone identities and origins.",
          "Treatments and their disclosure.",
          "Centre-stone dimensions and weight.",
          "Diamond origin, grades and report scope.",
          "Accent count and total carat weight.",
          "Metal, fineness and weight.",
          "Setting construction and workmanship.",
          "Documentation, returns, warranty and aftercare."
        ]
      }
    ]
  },
  {
    heading: "10. Check documentation appropriate to each stone",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify report coverage limits. For certificate types, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "11. Use this decision framework",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "A coloured centre stone may suit you if: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "colour is the reason you noticed the piece;",
          "you appreciate natural or expected visual variation;",
          "you are comfortable checking identity, treatments and care;",
          "you want clear contrast with diamond accents; and",
          "the hue works with how you actually dress."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "A colourless diamond design may suit you if: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "brightness and movement attract you more than body colour;",
          "you prefer a neutral focal point;",
          "comparing established diamond specifications is useful to you;",
          "you want a continuous diamond-led composition; and",
          "the exact cut and silhouette perform well in person."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "A mixed design may be the answer if: ", bold: true }],
        text: "You want colour to lead and diamonds to add light, outline or movement. Judge the balance at normal viewing distance: accents should support the centre rather than obscure its colour."
      }
    ]
  },
  {
    heading: "Product-page checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "the exact centre-stone identity;",
          "natural or laboratory-created origin;",
          "treatments;",
          "centre dimensions and carat weight;",
          "diamond specifications and their scope;",
          "separate accent total carat weight;",
          "metal and fineness;",
          "complete jewellery dimensions;",
          "accurate images and video;",
          "report coverage;",
          "care instructions; and",
          "returns, warranty and production time."
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
          { text: "Aurelia Royale structures listings to describe gemstone parameters, diamond grades, and metals itemized by layer. Browse options at " },
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
            text: "A coloured centre stone creates a colour-led focal point; a colourless diamond creates a light-led one.\n\n"
          },
          {
            text: "Compare the complete designs before choosing. Decide whether hue/contrast or brightness/movement should lead, and check gemstone details, dimensions, settings, care needs, and documentation scopes."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Is a coloured centre stone better than a colourless diamond?",
            answer: "Neither is universally better. A coloured stone creates a colour-led focal point; a colourless diamond creates a light-led one. Compare the exact stones and complete designs."
          },
          {
            question: "Does a coloured gemstone look larger than a diamond?",
            answer: "It may, but carat is weight rather than visible size. Compare millimetre dimensions, cut, depth and setting outline."
          },
          {
            question: "Are coloured centre stones less durable than diamonds?",
            answer: "Durability depends on the particular material, treatments, inclusions and setting. Do not infer it from colour alone."
          },
          {
            question: "Do colourless diamonds have no colour at all?",
            answer: "D-to-Z grading measures degrees of colourlessness. Subtle colour distinctions may be difficult for an untrained observer to see, and fancy-colour diamonds use a different system."
          },
          {
            question: "Why add lab-grown diamond accents to a coloured stone?",
            answer: "Accents can add brightness, contrast, movement and a larger outer outline while leaving colour as the focal point."
          },
          {
            question: "Which metal is best for a coloured centre stone?",
            answer: "There is no universal best metal colour. Compare how white, yellow and rose-coloured metals interact with the exact stone and complete design."
          },
          {
            question: "Is a colourless diamond design more versatile?",
            answer: "Its neutral appearance may coordinate easily, but scale, shape and personal wardrobe matter. A regularly worn coloured piece can be equally versatile for its owner."
          },
          {
            question: "Can coloured stones be certified like diamonds?",
            answer: "Laboratories may issue identification reports for coloured stones, but their content differs from diamond grading reports. Check the report type and scope."
          },
          {
            question: "Should I compare coloured stones by the diamond 4Cs?",
            answer: "Not mechanically. Colour, cut, clarity and weight matter in different ways across gem materials, and diamond-specific cut grades do not apply universally."
          },
          {
            question: "Are coloured centre stones always natural?",
            answer: "No. They may be natural, laboratory-created, composite or imitation, and may be treated. The listing should state the correct category."
          },
          {
            question: "Which design photographs best online?",
            answer: "Both can photograph well, but accurate colour, controlled exposure, multiple lighting contexts, movement and on-body scale are essential for a fair comparison."
          },
          {
            question: "How do I make the final choice?",
            answer: "Compare both at normal viewing distance, confirm every specification and choose whether you want colour or light to lead the design."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Center",
        subtitle: "Aurelia Royale showcases both premium colored stones and colorless lab-grown diamonds in signature settings. Consult our design experts.",
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

  const localeData = getBlogDataByLocale("coloured-centre-stones-vs-colourless-diamonds", locale);
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
