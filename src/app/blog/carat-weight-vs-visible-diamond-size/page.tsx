import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Carat Weight vs Diamond Size: What Buyers See",
  description: "Learn why equal-carat diamonds can look different in size and how shape, depth, dimensions, spread, setting and finger coverage affect appearance.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/",
  },
};

// 2. The exact JSON-LD Schema
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
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/carat-weight-vs-visible-diamond-size.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/carat-weight-vs-visible-diamond-size.webp",
      "width": 1600,
      "height": 900,
      "caption": "Carat weight compared with visible diamond size"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#webpage",
      "url": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/",
      "name": "Carat Weight vs the Visible Size of a Diamond",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#article",
      "headline": "Carat Weight vs the Visible Size of a Diamond",
      "description": "Learn why equal-carat diamonds can look different in size and how shape, depth, dimensions, spread, setting and finger coverage affect appearance.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "carat weight vs diamond size",
        "diamond carat vs size",
        "diamond size in millimetres",
        "diamond face-up size",
        "diamond spread",
        "length-to-width ratio diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Carat Weight vs the Visible Size of a Diamond", "item": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is carat weight the same as diamond size?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Carat measures weight. Diamond size is described by physical measurements such as diameter, length, width and depth." }
        },
        {
          "@type": "Question",
          "name": "Why can two one-carat diamonds look different in size?",
          "acceptedAnswer": { "@type": "Answer", "text": "Their shapes, depths, girdle thicknesses and proportions may distribute weight differently. One can show more face-up area while the other carries more weight vertically." }
        },
        {
          "@type": "Question",
          "name": "What does diamond spread mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Spread is an informal term for the diamond’s visible face-up area or dimensions. It is not an official 4C grade." }
        },
        {
          "@type": "Question",
          "name": "How wide is a one-carat round diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 mm in diameter, although actual measurements vary." }
        },
        {
          "@type": "Question",
          "name": "Which diamond shape looks largest?",
          "acceptedAnswer": { "@type": "Answer", "text": "Elongated marquise, oval and pear shapes often create a larger visual impression for their weight. The individual stone’s depth, width, outline and cut still matter." }
        },
        {
          "@type": "Question",
          "name": "Does a shallow diamond look larger?",
          "acceptedAnswer": { "@type": "Answer", "text": "It may have a wider face-up spread, but overly shallow proportions can reduce light performance or create undesirable visual effects." }
        },
        {
          "@type": "Question",
          "name": "What is length-to-width ratio?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is the diamond’s length divided by its width. The figure describes whether a fancy shape appears  compact, broad or elongated." }
        },
        {
          "@type": "Question",
          "name": "Does a thick girdle make a diamond look smaller?",
          "acceptedAnswer": { "@type": "Answer", "text": "A very thick girdle can retain weight without adding an equivalent amount of visible diameter, causing some diamonds to face up smaller for their carat weight." }
        },
        {
          "@type": "Question",
          "name": "Can a setting make a diamond look bigger?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Halos, bezels, slim bands and side stones can increase perceived size or overall finger coverage without changing the centre diamond’s dimensions." }
        },
        {
          "@type": "Question",
          "name": "Does a diamond look different on different ring sizes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Its dimensions stay the same, but proportional coverage changes. The same stone can appear more prominent on a narrower finger." }
        },
        {
          "@type": "Question",
          "name": "Should I buy the diamond with the largest millimetre measurements?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. Confirm that the extra spread does not come at the expense of brightness, symmetry, durability or an attractive outline." }
        },
        {
          "@type": "Question",
          "name": "Are online diamond size charts accurate?",
          "acceptedAnswer": { "@type": "Answer", "text": "They are useful as approximate references, but the grading report provides the actual measurements of the individual diamond." }
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
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (1).jpg",
        alt: "Carat weight compared with visible diamond size",
        title: "Carat Weight and Size",
        caption: "Two diamonds carrying identical carat weights can display different visual sizes.",
        priority: true
      },
      {
        type: "paragraph",
        parts: [
          { text: "Two diamonds can carry the same carat weight and still look noticeably different when viewed from above. The reason is simple: " },
          { text: "carat measures weight, while visible size describes dimensions and visual coverage", bold: true },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        text: "A one-carat diamond always weighs 200 milligrams. It does not always measure the same number of millimetres. Shape, depth, girdle thickness, facet arrangement and cutting decisions determine how that weight is distributed throughout the stone. Some weight contributes to the visible outline; some can be held below the girdle where the wearer sees less of it."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Carat weight is one of the " },
          { text: "4Cs of a lab-grown diamond", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: ", but none of the 4Cs independently describes face-up size." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For the measurement basics, read " },
          { text: "lab-grown diamond carat weight explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" },
          { text: ". This guide focuses on what the wearer sees." }
        ]
      },
      {
        type: "callout",
        title: "Quick Answer",
        parts: [
          { text: "No. " },
          { text: "Carat is weight; size is physical dimension.", bold: true },
          { text: "\n\n" },
          { text: "• Round-diamond measurements are generally listed as minimum diameter–maximum diameter × depth.\n• Fancy-shape measurements are generally listed as length × width × depth.\n• Face-up spread refers to the visible area or outline when the diamond is viewed from above.\n• Two equal-weight diamonds can have different spreads because their proportions and shapes differ.\n\nA wider diamond is not automatically better. If extra spread comes from overly shallow proportions, the stone may lose brightness or show undesirable visual effects. Visible size must be balanced with cut quality, appearance and durability." }
        ]
      }
    ]
  },
  {
    heading: "Weight vs Millimetre Dimensions",
    content: [
      {
        type: "table",
        headers: ["Diamond", "Weight", "Measurements", "Face-up impression"],
        rows: [
          ["Diamond A", "1.00 ct", "6.45–6.48 × 3.92 mm", "Balanced diameter for its weight"],
          ["Diamond B", "1.00 ct", "6.15–6.19 × 4.10 mm", "More weight held in depth; smaller visible diameter"]
        ]
      }
    ]
  },
  {
    heading: "Indicative 1.00ct Diamond Dimensions by Shape",
    content: [
      {
        type: "table",
        headers: ["Shape", "Indicative measurements near 1.00 ct", "Visual tendency"],
        rows: [
          ["Round", "About 6.3–6.5 mm diameter", "Balanced, symmetrical coverage"],
          ["Oval", "About 7.7–8.3 × 5.5–6.0 mm", "Elongated appearance"],
          ["Pear", "About 8.0–8.7 × 5.2–5.8 mm", "Length with a tapered point"],
          ["Marquise", "About 9.5–10.5 × 4.8–5.3 mm", "Strong length and finger coverage"],
          ["Emerald", "About 6.7–7.2 × 4.7–5.1 mm", "Rectangular, open outline"],
          ["Radiant", "About 6.2–6.8 × 5.2–5.8 mm", "Rectangular or square brilliant outline"],
          ["Cushion", "About 5.8–6.3 × 5.8–6.3 mm", "Compact soft-square outline"],
          ["Princess", "About 5.4–5.7 × 5.4–5.7 mm", "Compact square outline"],
          ["Asscher", "About 5.4–5.7 × 5.4–5.7 mm", "Compact square step-cut outline"]
        ]
      }
    ]
  },
  {
    heading: "Approximate Round-Diamond Diameter by Carat Weight",
    content: [
      {
        type: "table",
        headers: ["Carat weight", "Indicative diameter"],
        rows: [
          ["0.25 ct", "About 4.0 mm"],
          ["0.50 ct", "About 5.0–5.2 mm"],
          ["0.75 ct", "About 5.7–5.9 mm"],
          ["1.00 ct", "About 6.3–6.5 mm"],
          ["1.50 ct", "About 7.2–7.4 mm"],
          ["2.00 ct", "About 8.0–8.2 mm"]
        ]
      }
    ]
  },
  {
    heading: "1. Why Equal-Carat Diamonds Can Have Different Dimensions",
    content: [
      {
        type: "paragraph",
        text: "Several physical variables govern the face-up spread of a stone:"
      },
      {
        type: "bullet-list",
        items: [
          "Shape silhouette: Elongated shapes draw the eye outward; compact outlines concentrate weight in a smaller outline footprint.",
          "Total depth: Deep cutting hides weight beneath girdles, making stones face up smaller. Shallow cutting spreads wide but leaks light.",
          "Girdle thickness: Thick girdles hold weight around borders without adding visible diameter.",
          "Proportions and crown heights: Crowns, tables, and pavilion angles regulate how weight behaves."
        ],
        itemsParts: [
          [{ text: "Shape silhouette: ", bold: true }, { text: "Elongated shapes draw the eye outward; compact outlines concentrate weight in a smaller outline footprint." }],
          [{ text: "Total depth: ", bold: true }, { text: "Deep cutting hides weight beneath girdles, making stones face up smaller. Shallow cutting spreads wide but leaks light." }],
          [{ text: "Girdle thickness: ", bold: true }, { text: "Thick girdles hold weight around borders without adding visible diameter." }],
          [{ text: "Proportions and crown heights: ", bold: true }, { text: "Crowns, tables, and pavilion angles regulate how weight behaves." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (2).jpg",
        alt: "Comparing loose diamond depth profiles and facet cuts",
        title: "Diamond Depth and Silhouette Profiles",
        caption: "Total depth, girdle thickness, and crowns govern how much weight is distributed to the visible face-up outline."
      }
    ]
  },
  {
    heading: "2. How Settings and Finger Coverage Affect Perceived Size",
    content: [
      {
        type: "paragraph",
        text: "Perceived size is also contextual:"
      },
      {
        type: "bullet-list",
        items: [
          "Halo borders: Surround the center stone with accent diamonds to create a larger field of brilliance.",
          "Bezel borders: Visually frame the outline silhouette, making it look broader.",
          "Slim bands: Narrow bands increase design contrast to emphasize solitaire prominence.",
          "Finger size proportions: A 6.4 mm round looks prominent on slim fingers but restrained on wider shanks."
        ],
        itemsParts: [
          [{ text: "Halo borders: ", bold: true }, { text: "Surround the center stone with accent diamonds to create a larger field of brilliance." }],
          [{ text: "Bezel borders: ", bold: true }, { text: "Visually frame the outline silhouette, making it look broader." }],
          [{ text: "Slim bands: ", bold: true }, { text: "Narrow bands increase design contrast to emphasize solitaire prominence." }],
          [{ text: "Finger size proportions: ", bold: true }, { text: "A 6.4 mm round looks prominent on slim fingers but restrained on wider shanks." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (3).jpg",
        alt: "Stunning halo diamond ring on model finger",
        title: "Halo Setting Ring Coverage",
        caption: "Settings like halos or slim shank bands change the perceived scale and finger coverage."
      }
    ]
  },
  {
    heading: "3. How to Compare Visible Size Online",
    content: [
      {
        type: "paragraph",
        text: "When shopping online, look for: physical report measurements, printable scale templates, and unmagnified realistic photographs."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Our related guides outline " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " and " },
          { text: "how to verify an IGI certificate number online", href: "/blog/verify-igi-certificate-number/" },
          { text: " for step-by-step registry instructions." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (4).jpg",
        alt: "Measuring round brilliant diameter spread using millimeter caliper",
        title: "Caliper Spread Measurement",
        caption: "Verify the actual length, width, and diameter measurements on the grading report before buying."
      }
    ]
  },
  {
    heading: "Visible Size Purchase Checklist",
    content: [
      {
        type: "table",
        headers: ["Before buying, verify:"],
        rows: [
          ["Carat weights are compared against actual millimetre dimensions."],
          ["Length-to-width ratios for fancy shapes match visual outline preferences."],
          ["Total depth percentage falls within appropriate parameters for the shape."],
          ["The girdle description does not list 'extremely thick' weight retention."],
          ["Cut grades are verified to ensure light return is bright across borders."],
          ["Model hand photographs disclose both ring size and diamond millimetres."],
          ["The seller's return policies permit viewing designs at real scale."]
        ]
      }
    ]
  },
  {
    content: [
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        parts: [
          { text: "Carat weight and visible diamond size are connected, but they are not the same. Carat measures mass; length, width, diameter and depth describe physical dimensions. Shape, cut proportions and setting determine how that weight appears when worn.\n\n" },
          { text: "Aurelia Royale lists complete diamond parameters, matching premium center-stone grades, gold hallmarks, and detailed accent specifications." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Is carat weight the same as diamond size?",
            answer: "No. Carat measures weight. Diamond size is described by physical measurements such as diameter, length, width and depth."
          },
          {
            question: "Why can two one-carat diamonds look different in size?",
            answer: "Their shapes, depths, girdle thicknesses and proportions may distribute weight differently. One can show more face-up area while the other carries more weight vertically."
          },
          {
            question: "What does diamond spread mean?",
            answer: "Spread is an informal term for the diamond’s visible face-up area or dimensions. It is not an official 4C grade."
          },
          {
            question: "How wide is a one-carat round diamond?",
            answer: "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 mm in diameter, although actual measurements vary."
          },
          {
            question: "Which diamond shape looks largest?",
            answer: "Elongated marquise, oval and pear shapes often create a larger visual impression for their weight. The individual stone’s depth, width, outline and cut still matter."
          },
          {
            question: "Does a shallow diamond look larger?",
            answer: "It may have a wider face-up spread, but overly shallow proportions can reduce light performance or create undesirable visual effects."
          },
          {
            question: "What is length-to-width ratio?",
            answer: "It is the diamond’s length divided by its width. The figure describes whether a fancy shape appears compact, broad or elongated."
          },
          {
            question: "Does a thick girdle make a diamond look smaller?",
            answer: "A very thick girdle can retain weight without adding an equivalent amount of visible diameter, causing some diamonds to face up smaller for their carat weight."
          },
          {
            question: "Can a setting make a diamond look bigger?",
            answer: "Yes. Halos, bezels, slim bands and side stones can increase perceived size or overall finger coverage without changing the centre diamond’s dimensions."
          },
          {
            question: "Does a diamond look different on different ring sizes?",
            answer: "Its dimensions stay the same, but proportional coverage changes. The same stone can appear more prominent on a narrower finger."
          },
          {
            question: "Should I buy the diamond with the largest millimetre measurements?",
            answer: "Not automatically. Confirm that the extra spread does not come at the expense of brightness, symmetry, durability or an attractive outline."
          },
          {
            question: "Are online diamond size charts accurate?",
            answer: "They are useful as approximate references, but the grading report provides the actual measurements of the individual diamond."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Balance Spread and Performance at Aurelia Royale",
        subtitle: "Meticulously planned angles, symmetrical outlines, and verified certificate credentials. Shop our collection.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog31Page() {
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
            Lab-Grown Diamond Education
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            Carat Weight vs Diamond Size
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Educational Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="carat-weight-vs-visible-diamond-size" />
      <NewsletterSection />
    </main>
  );
}
