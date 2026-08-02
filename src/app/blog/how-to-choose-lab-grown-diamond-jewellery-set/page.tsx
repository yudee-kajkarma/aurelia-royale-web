import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Choose a Lab-Grown Diamond Jewellery Set",
  description: "Choose a lab-grown diamond jewellery set by checking every included piece, diamond-weight allocation, matching quality, dimensions, metal and certification.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-jewellery-set/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-jewellery-set/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-jewellery-set/"
      },
      "headline": "How to Choose a Lab-Grown Diamond Jewellery Set",
      "description": "Choose a lab-grown diamond jewellery set by checking every included piece, diamond-weight allocation, matching quality, dimensions, metal and certification.",
      "image": "https://www.aureliaroyale.com/images/blog/how-to-choose-lab-grown-diamond-jewellery-set.webp",
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
        "how to choose a lab-grown diamond jewellery set",
        "lab-grown diamond jewellery set",
        "matching diamond jewellery set"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-jewellery-set/#breadcrumb",
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
          "name": "How to Choose a Lab-Grown Diamond Jewellery Set",
          "item": "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-jewellery-set/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-jewellery-set/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in a diamond jewellery set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies. Confirm every included item, quantity, chain, fastening, accessory and document in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Do matching jewellery pieces need to be identical?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They can share a motif, diamond shape, metal or proportion while varying in scale and function."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean for a jewellery set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may combine all diamonds across all included pieces. Request a component-by-component breakdown."
          }
        },
        {
          "@type": "Question",
          "name": "Is an earring carat weight per earring or per pair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Either convention may appear. The product page should explicitly state which one it uses."
          }
        },
        {
          "@type": "Question",
          "name": "Should diamonds match across a jewellery set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They should appear intentionally coordinated. Check shape, visible colour, brilliance, dimensions and grade ranges."
          }
        },
        {
          "@type": "Question",
          "name": "Can I wear the pieces separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, but evaluate each item scale, fastening and design independently before buying."
          }
        },
        {
          "@type": "Question",
          "name": "Does one diamond report cover a complete jewellery set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normally not. A report covers the item or stone identified in that document; map every report to its scope."
          }
        },
        {
          "@type": "Question",
          "name": "Should every item in a set be hallmarked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Requirements depend on metal, item weight and market. Check legal marking information for each component."
          }
        },
        {
          "@type": "Question",
          "name": "Is buying a jewellery set cheaper than buying separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, but compare identical specifications, flexibility, documentation and actual use rather than price alone."
          }
        },
        {
          "@type": "Question",
          "name": "What measurements should a jewellery set listing provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It should provide piece-specific lengths, dimensions, weights, fitting ranges and ring size where relevant."
          }
        },
        {
          "@type": "Question",
          "name": "Can I return one piece from a jewellery set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Policies vary. Some sellers require the complete set, while hygiene, sizing or customisation rules may affect individual items."
          }
        },
        {
          "@type": "Question",
          "name": "What should European buyers check before ordering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check seller identity, VAT and duties, hallmark information, insured delivery, returns, warranty and report verification."
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
        src: "/images/blog/how-to-choose-lab-grown-diamond-jewellery-set/1.jpg",
        alt: "A lab-grown diamond jewellery set matching details",
        title: "Diamond Jewellery Set Guide",
        caption: "A coordinated diamond set should be evaluated across both shared motifs and individual component specs.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A lab-grown diamond jewellery set should be assessed as a collection of complete pieces—not as one photograph, one carat figure or one broad quality claim."
      },
      {
        type: "paragraph",
        text: "First confirm exactly what the set contains. Then decide whether its shared design language suits the wearer. Compare each piece’s dimensions, diamond allocation, metal, fastening and documentation before judging value."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "To choose a lab-grown diamond jewellery set:"
      },
      {
        type: "numbered-list",
        items: [
          "List every included item and component.",
          "Decide whether the pieces should match exactly or coordinate more subtly.",
          "Check each piece at a realistic scale on the body.",
          "Separate total diamond weight by necklace, earrings, bracelet and ring.",
          "Confirm whether earring carat figures refer to one earring or the pair.",
          "Review diamond origin, shape and quality across all pieces.",
          "Verify metal, fineness, weight and hallmark information for each item.",
          "Test lengths, fit, clasps, posts and practical wearability.",
          "Map every report and warranty to the component it covers.",
          "Compare the set price with the cost and flexibility of buying pieces separately."
        ]
      }
    ]
  },
  {
    heading: "1. Confirm exactly what is included",
    content: [
      {
        type: "paragraph",
        text: "Verify the order summary for: necklace and pendant setups, chains, earring pairs, bracelets, and rings. Ensure styled display props are not confused with items shipped."
      }
    ]
  },
  {
    heading: "2. Choose exact matching or coordinated design",
    content: [
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-jewellery-set/2.jpg",
        alt: "A display of exact-match and coordinated diamond jewelry designs",
        title: "Set Matching Styles",
        caption: "Deciding between exact motif repetition and subtle variety influences wearability styles."
      },
      {
        type: "table",
        headers: ["Approach", "Best for", "Check carefully"],
        rows: [
          ["Exact motif", "Formal, unified appearance", "Repetition may feel visually strong when all pieces are worn"],
          ["Shared diamond shape", "Cohesion with variety", "Shape proportions and orientation"],
          ["Shared metal and setting", "Flexible coordination", "Finish and metal colour consistency"],
          ["Graduated scale", "Necklace leads, earrings support", "Relative dimensions on the body"],
          ["Coloured centre stones with diamond accents", "Colour-led identity", "Stone origin, treatment and colour matching"]
        ]
      }
    ]
  },
  {
    heading: "3. Decide which piece should lead",
    content: [
      {
        type: "paragraph",
        text: "Avoid crowded visual effects by establishing a clear hierarchy (e.g. pairing a larger necklace motif with smaller supporting earrings). Focus spending on the primary focal piece."
      }
    ]
  },
  {
    heading: "4. Compare scale in millimetres",
    content: [
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-jewellery-set/3.jpg",
        alt: "Measuring the pendant drop length against scale guides",
        title: "Component Dimension Checks",
        caption: "Relying on millimetre dimensions rather than model crops avoids unexpected visual surprises."
      },
      {
        type: "table",
        headers: ["Piece", "Essential dimensions"],
        rows: [
          ["Necklace or pendant", "Chain length, adjustment points, motif height, width, depth and total drop"],
          ["Earrings", "Height, width, depth and drop per earring"],
          ["Bracelet", "Wearable length, adjustment range, motif dimensions and chain or link width"],
          ["Ring", "Ring size, band width, thickness and setting height"]
        ]
      }
    ]
  },
  {
    heading: "5. Understand diamond-weight allocation",
    content: [
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-jewellery-set/4.jpg",
        alt: "A diamond weight allocation overview across a set",
        title: "Carat Allocation Table",
        caption: "Understanding how total carats are distributed separates centre stones from accent counts."
      },
      {
        type: "table",
        headers: ["Component", "Centre diamond", "Accent diamonds", "Component total"],
        rows: [
          ["Necklace", "", "", ""],
          ["Earring pair", "", "", ""],
          ["Bracelet", "", "", ""],
          ["Ring", "", "", ""],
          ["Complete set", "", "", ""]
        ]
      }
    ]
  },
  {
    heading: "6. Check matching between earrings",
    content: [
      {
        type: "paragraph",
        text: "Verify matching shape symmetry, color tones, post placements, and setting heights. Cohesive pairs should sit comfortably without tilting."
      }
    ]
  },
  {
    heading: "7. Review the 4Cs across the set",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Check whether cut grades, clarity parameters, and colour ranges cover all stones or centre diamonds only. Read " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for full framework details." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cut: ", bold: true },
          { text: "Identify if cut grades cover centre diamonds exactly." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Colour and clarity: ", bold: true },
          { text: "Ensure grade ranges are narrow enough to maintain visual consistency." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Carat: ", bold: true },
          { text: "Verify stone carat breakdowns rather than a single set total." }
        ]
      }
    ]
  },
  {
    heading: "8. Verify every gemstone origin",
    content: [
      {
        type: "paragraph",
        text: "Disclose laboratory-grown origin for all stone groups. Identify treatment variables for both diamonds and accent coloured stones before comparing sets."
      }
    ]
  },
  {
    heading: "9. Check metal consistency piece by piece",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify metal fineness and colour consistency under uniform lighting. For UK/European legal hallmark info, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "10. Assess every fastening",
    content: [
      {
        type: "paragraph",
        text: "Confirm safety clasps on bracelets, lobster locks on chains, post thicknesses, and ring resizing scopes. The reverse of the gallery often reveals assembly quality."
      }
    ]
  },
  {
    heading: "11. Test wearability together and separately",
    content: [
      {
        type: "paragraph",
        text: "Test if drop pieces capture necklaces, bracelets move without rotating, and individual components can style with existing jewelry."
      }
    ]
  },
  {
    heading: "12. Know what certification covers",
    content: [
      {
        type: "table",
        headers: ["Document", "Report number", "Covered piece", "Covered stones", "Metal included"],
        rows: [
          ["Report 1", "", "", "", ""],
          ["Report 2", "", "", "", ""],
          ["Report 3", "", "", "", ""]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Map every report number to the exact component it describes. Check " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: " for full report details." }
        ]
      }
    ]
  },
  {
    heading: "13. Compare set price with separate-piece value",
    content: [
      {
        type: "paragraph",
        text: "Compare package pricing to buying separate components. A set of three pieces you will wear regularly offers more value than four with unused items."
      }
    ]
  },
  {
    heading: "14. Review returns, warranty and replacement terms",
    content: [
      {
        type: "paragraph",
        text: "Verify split-return eligibility, hygiene rules for earring posts, custom resizing exclusions, and warranty coverages across the set."
      }
    ]
  },
  {
    heading: "Final buying checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Every included piece and accessory is listed in writing.",
          "The set has a clear focal hierarchy and works with the wearer’s style.",
          "Each piece’s dimensions are stated in millimetres.",
          "Earring measurements and weights are identified per pair or per item.",
          "Diamond weights are broken down by component.",
          "Quality grades and their scope are clear.",
          "Every gemstone’s origin and treatment are disclosed.",
          "Metal, fineness, weight and hallmark details are stated per piece.",
          "Clasps, posts, backs and adjustment systems are shown.",
          "Each piece works alone as well as within the set.",
          "Every report is mapped to the item it covers.",
          "Returns, repairs, replacement and warranty terms cover set-specific issues.",
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
          { text: "Aurelia Royale structures set pages to list every specification itemized by component. Explore " },
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
            text: "Evaluate a lab-grown diamond set component-by-component.\n\n"
          },
          {
            text: "List every included item. Confirm matching cohesion, measurements, and carat allocation. Assess metal fineness, setting structures, and fastenings. Ensure every report matches its covered stone, and verify the set price against the flexibility of buying separately."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is included in a diamond jewellery set?",
            answer: "It varies. Confirm every included item, quantity, chain, fastening, accessory and document in writing."
          },
          {
            question: "Do matching jewellery pieces need to be identical?",
            answer: "No. They can share a motif, diamond shape, metal or proportion while varying in scale and function."
          },
          {
            question: "What does total carat weight mean for a jewellery set?",
            answer: "It may combine all diamonds across all included pieces. Request a component-by-component breakdown."
          },
          {
            question: "Is an earring carat weight per earring or per pair?",
            answer: "Either convention may appear. The product page should explicitly state which one it uses."
          },
          {
            question: "Should diamonds match across a jewellery set?",
            answer: "They should appear intentionally coordinated. Check shape, visible colour, brilliance, dimensions and grade ranges."
          },
          {
            question: "Can I wear the pieces separately?",
            answer: "Usually, but evaluate each item’s scale, fastening and design independently before buying."
          },
          {
            question: "Does one diamond report cover a complete jewellery set?",
            answer: "Normally not. A report covers the item or stone identified in that document; map every report to its scope."
          },
          {
            question: "Should every item in a set be hallmarked?",
            answer: "Requirements depend on metal, item weight and market. Check the legal marking information for each component."
          },
          {
            question: "Is buying a jewellery set cheaper than buying separately?",
            answer: "It can be, but compare identical specifications, flexibility, documentation and actual use—not price alone."
          },
          {
            question: "What measurements should a jewellery set listing provide?",
            answer: "It should provide piece-specific lengths, dimensions, weights, fitting ranges and ring size where relevant."
          },
          {
            question: "Can I return one piece from a jewellery set?",
            answer: "Policies vary. Some sellers require the complete set, while hygiene, sizing or customisation rules may affect individual items."
          },
          {
            question: "What should European buyers check before ordering?",
            answer: "Check seller identity, VAT and duties, hallmark information, insured delivery, returns, warranty and report verification."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Choose the Perfect Set",
        subtitle: "Aurelia Royale structures specification details piece-by-piece so you can choose coordinating luxury with absolute confidence. Explore our sets.",
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
            How to Choose a Lab-Grown Diamond Jewellery Set
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
