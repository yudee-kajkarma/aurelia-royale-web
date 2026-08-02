import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Compare Diamond Necklace Designs",
  description: "Compare pendant, station, line, cluster and collar diamond necklaces by focal placement, coverage, movement, length, carat allocation and certification.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/compare-diamond-necklace-designs/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/compare-diamond-necklace-designs/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/compare-diamond-necklace-designs/"
      },
      "headline": "How to Compare Different Diamond Necklace Designs",
      "description": "Compare pendant, station, line, cluster and collar diamond necklaces by focal placement, coverage, movement, length, carat allocation and certification.",
      "image": "https://www.aureliaroyale.com/images/blog/compare-diamond-necklace-designs.webp",
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
        "how to compare diamond necklace designs",
        "diamond necklace styles compared",
        "pendant vs station necklace"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/compare-diamond-necklace-designs/#breadcrumb",
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
          "name": "Compare Diamond Necklace Designs",
          "item": "https://www.aureliaroyale.com/blog/compare-diamond-necklace-designs/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/compare-diamond-necklace-designs/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the main types of diamond necklaces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common types include pendant, station, line, cluster or motif, and collar-style necklaces."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a pendant and station necklace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pendant concentrates a focal element, while a station necklace spaces diamonds or motifs along the chain."
          }
        },
        {
          "@type": "Question",
          "name": "What is a diamond line necklace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It uses an articulated row of diamond-set links to create continuous or near-continuous coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How is a diamond necklace measured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Measurements may include wearable length, pendant drop, motif dimensions, station spacing, line width and setting depth."
          }
        },
        {
          "@type": "Question",
          "name": "What does diamond coverage mean in a necklace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It describes how much of the visible necklace length carries diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean in a necklace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is the combined weight of the included diamonds, not necessarily one centre diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Why do necklaces with the same carat weight look different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stone count, shape, setting, distribution, dimensions and coverage create different appearances."
          }
        },
        {
          "@type": "Question",
          "name": "Is a fixed pendant better than a removable pendant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither automatically. Fixed designs can remain centred; removable designs can offer flexibility when chains are compatible."
          }
        },
        {
          "@type": "Question",
          "name": "Why does a diamond necklace keep flipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The focal setting may be unbalanced, the chain may twist, or the necklace may not suit wearer movement and fit."
          }
        },
        {
          "@type": "Question",
          "name": "Which necklace design is best for layering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No style is universally best. Compare length, drop, width, movement and interaction with other chains."
          }
        },
        {
          "@type": "Question",
          "name": "Does one diamond report cover the complete necklace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Confirm whether it identifies one diamond or the finished necklace including its chain."
          }
        },
        {
          "@type": "Question",
          "name": "Which diamond necklace is best for regular wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose according to profile, chain or link strength, clasp security, movement and wearer routine."
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
        src: "/images/blog/compare-diamond-necklace-designs/1.jpg",
        alt: "A variety of diamond necklace designs and chain styles",
        title: "Necklace Design Guide",
        caption: "Comparing necklace designs depends on understanding focal placement, coverage, and chain integration.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Diamond necklace designs differ most in where they place visual weight. A pendant concentrates attention at one focal point. A station necklace distributes diamonds with open chain between them. A line necklace creates broader or continuous coverage."
      },
      {
        type: "paragraph",
        text: "Compare that architecture first. Then assess length, scale, movement, diamond allocation, chain or link construction, fastening, metal and documentation."
      }
    ]
  },
  {
    heading: "Quick comparison",
    content: [
      {
        type: "table",
        headers: ["Design", "Diamond placement", "Essential measurement", "Main buying check"],
        rows: [
          ["Pendant necklace", "One suspended focal area", "Chain length and complete pendant drop", "Fixed, sliding or removable construction"],
          ["Station necklace", "Spaced diamonds or motifs", "Length and station spacing", "Rotation and chain strength"],
          ["Line necklace", "Continuous or near-continuous line", "Wearable length, width and articulation", "Link movement, clasp and coverage"],
          ["Cluster or motif necklace", "Diamonds create a larger form", "Complete motif height, width and depth", "Stone allocation and orientation"],
          ["Collar or bib design", "Broad area around the lower neck", "Internal length, width and curvature", "Body fit and flexibility"]
        ]
      }
    ]
  },
  {
    heading: "1. Compare focal placement",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-diamond-necklace-designs/2.jpg",
        alt: "A diamond solitaire pendant necklace worn on a model",
        title: "Pendant Layout Spacing",
        caption: "A solitaire pendant concentrates focus at the center while line designs spread brilliance."
      },
      {
        type: "paragraph",
        text: "Determine if the design concentrates attention at a single focal point (solitaires or halos) or spaces light across station tracks or continuous lines. Map the hierarchy of your layering necklace choices."
      }
    ]
  },
  {
    heading: "2. Compare fixed, sliding and removable focal elements",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Fixed: ", bold: true },
          { text: "Connected directly to the chain at one or more spots to keep elements centered." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Sliding: ", bold: true },
          { text: "Motifs glide along the chain but are not easily detached." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Removable: ", bold: true },
          { text: "Can slip past the clasp end to allow alternative chain substitutions." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Integrated: ", bold: true },
          { text: "Built directly into the core frame of the collar layout." }
        ]
      }
    ]
  },
  {
    heading: "3. Compare diamond coverage",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-diamond-necklace-designs/3.jpg",
        alt: "A laid flat view of a line necklace showing full coverage",
        title: "Visible Coverage Mapping",
        caption: "Laying a line necklace flat verifies whether stones continue symmetrically past the neck sides."
      },
      {
        type: "paragraph",
        text: "Measure total diamond-set lengths, accent spacing intervals, clasp interruptions, and tail chain lengths. Avoid photographic zoom distortion by requesting laid-flat layout checks."
      }
    ]
  },
  {
    heading: "4. Use design-specific measurements",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Pendant necklace: ", bold: true },
          { text: "Record chain length, loop steps, and pendant dimensions (with and without bails)." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Station necklace: ", bold: true },
          { text: "Confirm station counts, motif diameters, and loop spacings." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Line necklace: ", bold: true },
          { text: "Measure articulated width, lock heights, and stone-set span lengths." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Collar or bib: ", bold: true },
          { text: "Verify internal diameter curvature and contour width guides." }
        ]
      }
    ]
  },
  {
    heading: "5. Compare movement and orientation",
    content: [
      {
        type: "paragraph",
        text: "Observe if pendants flip forward, stations rotate during walking, or line joins kink. Line layouts should wrap the neck contour without tilting."
      }
    ]
  },
  {
    heading: "6. Understand total carat allocation",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-diamond-necklace-designs/4.jpg",
        alt: "A carat allocation table comparing pendant and line styles",
        title: "Carat Breakdown Matrix",
        caption: "Understanding if carat totals belong to one center diamond or multiple line links keeps comparisons fair."
      },
      {
        type: "table",
        headers: ["Same total weight could mean", "Result"],
        rows: [
          ["One larger centre diamond", "Concentrated focal presence"],
          ["Centre plus halo accents", "Larger overall motif"],
          ["Several station diamonds", "Distributed points of light"],
          ["Many smaller line diamonds", "Continuous coverage effect"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Compare weight concentrations against visual footprints. Read more at " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "7. Compare diamond shapes and patterns",
    content: [
      {
        type: "paragraph",
        text: "Check patterns across round loops, fancy shapes (pear, emerald cuts), and graduated designs. Note mixed-stone treatment details."
      }
    ]
  },
  {
    heading: "8. Compare settings and support structure",
    content: [
      {
        type: "paragraph",
        text: "Verify prong counts, bezel margins, solder points, and join links. Line necklace link structures require high articulation precision."
      }
    ]
  },
  {
    heading: "9. Compare chain integration",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm styles, gauge thicknesses, and loop adjustment options. For necklace selection guidelines, consult " },
          { text: "how to select the right necklace length", href: "/blog/select-right-necklace-length/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "10. Compare clasps and security",
    content: [
      {
        type: "paragraph",
        text: "Assess lobster claws on chains, spring rings, box locks on collars, and safety chain hooks."
      }
    ]
  },
  {
    heading: "11. Compare length and neckline compatibility",
    content: [
      {
        type: "paragraph",
        text: "Determine target chest drops based on neck shapes and outfit preferences. Solitaire drops sit differently from rigid line arcs."
      }
    ]
  },
  {
    heading: "12. Compare physical weight and balance",
    content: [
      {
        type: "paragraph",
        text: "Heavier pendant motifs can drag fine chains forward. Confirm balance weights to prevent rear clasps from migrating down."
      }
    ]
  },
  {
    heading: "13. Compare the 4Cs in context",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Check whether grading parameters belong to center stones or represent group averages. Review " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for full guidelines." }
        ]
      }
    ]
  },
  {
    heading: "14. Compare metal and hallmark information",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify gold/platinum types, fineness targets, and hallmarks. For metal verification steps, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "15. Compare certification scope",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Ensure reports cover both pendants and chains where relevant. Read " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "16. Compare price with a scorecard",
    content: [
      {
        type: "table",
        headers: ["Comparison point", "Design A", "Design B"],
        rows: [
          ["Architecture and intended use", "", ""],
          ["Length and complete dimensions", "", ""],
          ["Diamond coverage", "", ""],
          ["Stone count and carat allocation", "", ""],
          ["Diamond quality", "", ""],
          ["Chain or link construction", "", ""],
          ["Metal and physical weight", "", ""],
          ["Clasp and safety", "", ""],
          ["Report and scope", "", ""],
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
          "Focal placement and intended visual role are clear.",
          "Pendant, station, line or collar construction is identified.",
          "Design-specific measurements are provided.",
          "Diamond coverage and distribution are visible.",
          "Movement is demonstrated on the body.",
          "Centre, accent and total weights are separated.",
          "Settings, chain, links and reverse are shown.",
          "Clasp and safety construction are clear.",
          "Physical weight is separate from diamond weight.",
          "Metal, fineness and hallmark details are stated.",
          "Report issuer and exact coverage are verified.",
          "Returns, warranty and final delivered price are acceptable."
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
          { text: "Aurelia Royale necklace specifications detail drop metrics, chain styles, and clasp mechanisms. Discover " },
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
            text: "Compare diamond necklaces by how diamonds are positioned, supported and distributed—not by carat weight alone.\n\n"
          },
          {
            text: "Evaluate architecture, length, coverage, movement, diamond allocation, settings, clasps, metal and documentation to choose a design that suits your style."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What are the main types of diamond necklaces?",
            answer: "Common types include pendant, station, line, cluster or motif, and collar-style necklaces."
          },
          {
            question: "What is the difference between a pendant and station necklace?",
            answer: "A pendant concentrates a focal element, while a station necklace spaces diamonds or motifs along the chain."
          },
          {
            question: "What is a diamond line necklace?",
            answer: "It uses an articulated row of diamond-set links to create continuous or near-continuous coverage."
          },
          {
            question: "How is a diamond necklace measured?",
            answer: "Measurements may include wearable length, pendant drop, motif dimensions, station spacing, line width and setting depth."
          },
          {
            question: "What does diamond coverage mean in a necklace?",
            answer: "It describes how much of the visible necklace length carries diamonds."
          },
          {
            question: "What does total carat weight mean in a necklace?",
            answer: "It is the combined weight of the included diamonds, not necessarily one centre diamond."
          },
          {
            question: "Why do necklaces with the same carat weight look different?",
            answer: "Stone count, shape, setting, distribution, dimensions and coverage create different appearances."
          },
          {
            question: "Is a fixed pendant better than a removable pendant?",
            answer: "Neither automatically. Fixed designs can remain centred; removable designs can offer flexibility when chains are compatible."
          },
          {
            question: "Why does a diamond necklace keep flipping?",
            answer: "The focal setting may be unbalanced, the chain may twist, or the necklace may not suit the wearer’s movement and fit."
          },
          {
            question: "Which necklace design is best for layering?",
            answer: "No style is universally best. Compare length, drop, width, movement and interaction with other chains."
          },
          {
            question: "Does one diamond report cover the complete necklace?",
            answer: "Not automatically. Confirm whether it identifies one diamond or the finished necklace including its chain."
          },
          {
            question: "Which diamond necklace is best for regular wear?",
            answer: "Choose according to profile, chain or link strength, clasp security, movement and the wearer’s routine."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Explore Statement Necklaces",
        subtitle: "Aurelia Royale designs premium diamond pendants, station necklaces, and statement collars with custom lengths and secure bails. Shop our neckwear.",
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
            Product-Category Guides
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Compare Different Diamond Necklace Designs
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
