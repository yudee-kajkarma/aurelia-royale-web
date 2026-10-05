import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "What Are Diamond Accents in Jewellery?",
  description: "Learn what diamond accents are, how they differ from centre and side stones, and which origin, carat-weight and quality details to check.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-accents-meaning/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/diamond-accents-meaning/#article",
      "headline": "What Does “Diamond Accents” Mean in Jewellery?",
      "description": "Learn what diamond accents are, how they differ from centre and side stones, and which origin, carat-weight and quality details to check.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/diamond-accents-meaning/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/what-are-diamond-accents.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/diamond-accents-meaning/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "What Does Diamond Accents Mean in Jewellery?", "item": "https://www.aureliaroyale.com/blog/diamond-accents-meaning/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-accents-meaning/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What does diamond accent mean?", "acceptedAnswer": { "@type": "Answer", "text": "It means a diamond used in a supporting design role to add light, contrast, outline or detail." } },
        { "@type": "Question", "name": "Are diamond accents real diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "They may be natural or laboratory-grown diamonds. The listing should state their origin explicitly." } },
        { "@type": "Question", "name": "Are diamond accents the same as side stones?", "acceptedAnswer": { "@type": "Answer", "text": "Not always. Side stones are prominent stones beside a centre, while accents are usually smaller supporting elements." } },
        { "@type": "Question", "name": "Are accent diamonds valuable?", "acceptedAnswer": { "@type": "Answer", "text": "Value depends on origin, quality, total weight, count, matching, craftsmanship and the complete piece." } },
        { "@type": "Question", "name": "What is diamond accent total carat weight?", "acceptedAnswer": { "@type": "Answer", "text": "It is the combined weight of all diamonds identified as accents, not the weight of one diamond." } },
        { "@type": "Question", "name": "Does a halo make the centre stone larger?", "acceptedAnswer": { "@type": "Answer", "text": "No. A halo enlarges the complete bright outline, but the centre stone retains its dimensions and weight." } },
        { "@type": "Question", "name": "Do accent diamonds have individual certificates?", "acceptedAnswer": { "@type": "Answer", "text": "Usually not. A finished-jewellery report may describe mounted accents, while a centre report may cover only the centre." } },
        { "@type": "Question", "name": "Can lab-grown diamonds be used as accents?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Lab-grown diamonds can be used in halos, rows, borders, pavé and other supporting positions." } },
        { "@type": "Question", "name": "Is pavé the same as diamond accents?", "acceptedAnswer": { "@type": "Answer", "text": "Pavé is a setting appearance using closely placed small stones. Those stones may serve as accents, but the terms differ." } },
        { "@type": "Question", "name": "Why do two equal accent totals look different?", "acceptedAnswer": { "@type": "Answer", "text": "The weight may be divided across different stone counts, sizes, layouts and setting styles." } },
        { "@type": "Question", "name": "How can I tell whether an accent is loose?", "acceptedAnswer": { "@type": "Answer", "text": "Stop wearing the piece if you notice movement, rattling, snagging, a bent setting or an empty space." } },
        { "@type": "Question", "name": "What should an Aurelia product page state about accents?", "acceptedAnswer": { "@type": "Answer", "text": "It should state lab-grown origin, count or estimate, shapes, total weight, quality range, setting and report scope." } }
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
        src: "/images/blog/diamond-accents-meaning/1.jpg",
        alt: "A diamond accents explanation guide",
        title: "Diamond Accent Details",
        caption: "Diamond accents play supporting roles to frame center elements or detail jewelry bands.",
        priority: true
      },
      {
        type: "paragraph",
        text: "“Diamond accents” are diamonds that play a supporting role in a jewellery design. They may frame a coloured centre stone, line a band, edge a pendant or add small points of light to earrings and bracelets."
      },
      {
        type: "paragraph",
        text: "The word accent describes design function. It does not tell you whether the diamonds are natural or laboratory-grown, their exact size, their quality grades, their total weight or whether a laboratory report covers them. Those details must be stated separately."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Diamond accents are usually smaller diamonds arranged to support the main visual feature of a piece. They can appear in halos, pavé surfaces, borders, rows or scattered details. Before buying, check whether they are natural or lab-grown diamonds, their number and shapes, combined total carat weight, stated colour and clarity range, setting style and report scope. Do not mistake the accent total for the weight of the centre stone."
      }
    ]
  },
  {
    heading: "Accent is a role, not a gemstone category",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-accents-meaning/2.jpg",
        alt: "Side stones and center diamonds layout on a ring mount",
        title: "Layout Spacing Hierarchy",
        caption: "Different mount allocations define the role of center stones, side gems, and accent rows."
      },
      {
        type: "table",
        headers: ["Term", "Typical role", "What the term does not guarantee"],
        rows: [
          ["Centre stone", "Principal focal stone", "Largest weight in every design"],
          ["Side stone", "Significant stone beside the centre", "A specific shape, size or grade"],
          ["Accent diamond", "Supporting light or detail", "Origin, quality, certification or weight"],
          ["Halo diamond", "Accent arranged around a centre", "Larger centre-stone dimensions"]
        ]
      }
    ]
  },
  {
    heading: "Where diamond accents appear",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Halos: ", bold: true }, { text: "Frames centers to visually expand outlines without altering actual center stone weights." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Pavé and micro-set surfaces: ", bold: true }, { text: "Closely spaced rows that generate surface shimmers." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Borders and frames: ", bold: true }, { text: "Trace boundaries or provide geometry limits around colored centers." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Lines and drops: ", bold: true }, { text: "Articulated sequences that create length and movement." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Scattered details: ", bold: true }, { text: "Low stone count punctuations set across plain metal shanks." }]
      }
    ]
  },
  {
    heading: "Are diamond accents real diamonds?",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-accents-meaning/3.jpg",
        alt: "Accents under magnification showing facet symmetry",
        title: "Accent Magnification Checks",
        caption: "Transparent specifications state whether accents represent lab-grown or natural origins."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Confirm if accents are natural, lab-grown, or simulated. For disclosure terminology, see " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Are accent diamonds always small?",
    content: [
      {
        type: "paragraph",
        text: "Melee trade sizes refer to small weights, but final footprints depend on actual millimetre dimensions and layout layouts."
      }
    ]
  },
  {
    heading: "How accent diamond carat weight works",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-accents-meaning/4.jpg",
        alt: "Checking total carat weight breakdowns across accents",
        title: "Carat Weight Matrix",
        caption: "Separating main weights from combined accent totals ensures clear specifications."
      },
      {
        type: "table",
        headers: ["Component", "Transparent description"],
        rows: [
          ["Coloured centre", "1 stone; identity, dimensions and 1.20 ct weight"],
          ["Diamond halo", "20 lab-grown round diamonds; 0.30 ct total"],
          ["Additional shoulder accents", "10 lab-grown round diamonds; 0.10 ct total"],
          ["Complete diamond accent total", "30 diamonds; 0.40 ct total"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Compare individual count sizes rather than the combined total carats. Review details at " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Does total carat weight tell you visible size?",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Carat is mass: verify face dimensions and layout coverage maps separately. Consult " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "What quality information should be provided",
    content: [
      {
        type: "numbered-list",
        items: [
          "Diamond origin: laboratory-grown or natural.",
          "Stone count and shape or cutting style.",
          "Combined accent total carat weight.",
          "Colour and clarity grades or ranges, where claimed.",
          "Whether weights or grades are estimated after mounting.",
          "The setting type and metal.",
          "The exact stones covered by any report."
        ]
      }
    ]
  },
  {
    heading: "Do diamond accents come with certificates?",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Identify if certificates describe loose center diamonds or finished mounted jewelry. For details, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How accents work with coloured centre stones",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Diamond accents can separate center color tones from metal outlines. For styling combinations, see " },
          { text: "how coloured stones and diamonds work together", href: "/blog/coloured-stones-lab-grown-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "What affects the price of accented jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Setting work, matching consistency, metal fineness weight, and design complex layouts all determine finished price."
      }
    ]
  },
  {
    heading: "How to inspect diamond accents online",
    content: [
      {
        type: "paragraph",
        text: "Inspect prongs, check layout alignments, and seek side-profile photographs to spot insecure mountings."
      }
    ]
  },
  {
    heading: "How to care for jewellery with diamond accents",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Check mount locks before water soaking: do not clean with ultrasonics if center gems are heat-sensitive. Read care details at " },
          { text: "how to care for coloured stones and diamonds", href: "/blog/care-coloured-stones-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Buying checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "what “accent” refers to in the exact piece;",
          "laboratory-grown or natural diamond origin;",
          "number and shapes of accents;",
          "accent total carat weight;",
          "centre-stone weight shown separately;",
          "pair weight versus per-item weight;",
          "stated colour and clarity scope;",
          "complete jewellery dimensions;",
          "metal and setting type;",
          "report type and coverage;",
          "accurate product imagery; and",
          "care, warranty and repair terms."
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
          { text: "Aurelia Royale lists accent stone counts, shapes, total carats, and lab-grown origins on every page. View details at " },
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
            text: "Diamond accents are supporting stones used to add light, contrast or detail around a focal stone or across a jewellery design.\n\n"
          },
          {
            text: "The name alone does not specify their quality. Prior to ordering, check the origin, total weight, grade ranges, mount security, and documentation details."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What does diamond accent mean?",
            answer: "It means a diamond used in a supporting design role to add light, contrast, outline or detail around a focal element."
          },
          {
            question: "Are diamond accents real diamonds?",
            answer: "They may be natural or laboratory-grown diamonds. The listing should state their origin explicitly; the word “accent” alone does not confirm it."
          },
          {
            question: "Are diamond accents the same as side stones?",
            answer: "Not always. Side stones are prominent stones beside a centre, while accents are usually smaller supporting elements."
          },
          {
            question: "Are accent diamonds valuable?",
            answer: "They contribute material and setting value, but value depends on origin, quality, total weight, count, matching, craftsmanship and the complete piece."
          },
          {
            question: "What is diamond accent total carat weight?",
            answer: "It is the combined weight of all diamonds identified as accents, not the weight of one diamond."
          },
          {
            question: "Does a halo make the centre stone larger?",
            answer: "No. A halo enlarges the complete bright outline, but the centre stone retains its own dimensions and weight."
          },
          {
            question: "Do accent diamonds have individual certificates?",
            answer: "Usually not. A finished-jewellery report may describe mounted accents, while a centre-stone report may cover only the centre."
          },
          {
            question: "Can lab-grown diamonds be used as accents?",
            answer: "Yes. Lab-grown diamonds can be used in halos, rows, borders, pavé and other supporting positions."
          },
          {
            question: "Is pavé the same as diamond accents?",
            answer: "Pavé is a setting appearance using closely placed small stones. Those stones may serve as accents, but the terms do not mean exactly the same thing."
          },
          {
            question: "Why do two equal accent totals look different?",
            answer: "The weight may be divided across different stone counts, sizes, layouts and setting styles, creating different face-up appearances."
          },
          {
            question: "How can I tell whether an accent is loose?",
            answer: "Stop wearing the piece if you notice movement, rattling, snagging, a bent setting or an empty space, and arrange professional inspection."
          },
          {
            question: "What should an Aurelia product page state about accents?",
            answer: "It should state lab-grown origin, stone count or explained estimate, shapes, total carat weight, relevant quality range, setting and report scope."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Exquisite Accents",
        subtitle: "Aurelia Royale details every accent group and halo outline with full material transparency. Explore our collections.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Page() {
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
            Coloured Stones and Diamonds
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Does “Diamond Accents” Mean in Jewellery?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="diamond-accents-meaning" />
      <NewsletterSection />
    </main>
  );
}

