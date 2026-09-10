import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Diamond Jewellery Product Specifications Checklist",
  description: "Check the essential diamond, metal, size, construction, certification and order details every jewellery product page should provide before checkout.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/",
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
      "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/diamond-jewellery-product-specifications-checklist.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/diamond-jewellery-product-specifications-checklist.webp",
      "width": 1600,
      "height": 900,
      "caption": "Checklist for verifying diamond jewelry specifications"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#webpage",
      "url": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/",
      "name": "Diamond Jewellery Product Specifications Checklist",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#primaryimage" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#article",
      "headline": "What Product Specifications Should You Check Before Ordering Diamond Jewellery?",
      "description": "Check the essential diamond, metal, size, construction, certification and order details every jewellery product page should provide before checkout.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": [
        "diamond jewellery product specifications",
        "jewellery product details checklist",
        "lab-grown diamond jewellery specifications",
        "what to check before ordering diamond jewellery"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Diamond Jewellery Product Specifications Checklist", "item": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-jewellery-product-specifications-checklist/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the most important diamond jewellery specifications?",
          "acceptedAnswer": { "@type": "Answer", "text": "Confirm diamond origin, stone count, individual and total carat weights, the 4Cs, measurements, report coverage, metal and fineness, product dimensions, selected size and included components." }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean on a jewellery product page?",
          "acceptedAnswer": { "@type": "Answer", "text": "Total carat weight is the combined weight of the diamonds covered by the stated scope. Check whether it applies to one item, an earring pair or an entire set." }
        },
        {
          "@type": "Question",
          "name": "Should every lab-grown diamond have an individual certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Individual reporting may suit significant diamonds, while small accents may be described through ranges or a jewellery report. The documentation strategy should be clear." }
        },
        {
          "@type": "Question",
          "name": "How can I tell whether a certificate covers my jewellery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Check the issuer, report type, number, measurements and any laser inscription. Confirm whether it covers one loose diamond, a matched pair or the mounted piece." }
        },
        {
          "@type": "Question",
          "name": "Is a hallmark the same as a jewellery certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. A hallmark provides precious-metal fineness information within its legal framework. It does not grade diamonds, value jewellery or certify workmanship." }
        },
        {
          "@type": "Question",
          "name": "Why should finished jewellery dimensions be listed?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dimensions show scale, setting height, drop, width and wearable length. Photographs can magnify jewellery and carat weight does not reveal every visible measurement." }
        },
        {
          "@type": "Question",
          "name": "Should jewellery weight be exact?",
          "acceptedAnswer": { "@type": "Answer", "text": "Finished weight is often approximate and may vary by ring size, chain length or manufacturing tolerance. It should be labelled accordingly." }
        },
        {
          "@type": "Question",
          "name": "What should I check when ordering diamond earrings?",
          "acceptedAnswer": { "@type": "Answer", "text": "Confirm single or pair, carat per diamond and per pair, dimensions, fastening, post or drop length, metal, backs and whether the pieces are matched." }
        },
        {
          "@type": "Question",
          "name": "What should I check when ordering a diamond necklace?",
          "acceptedAnswer": { "@type": "Answer", "text": "Confirm whether the chain is included, its style and length, pendant and bail dimensions, clasp, adjustability, total carat scope and whether the pendant detaches." }
        },
        {
          "@type": "Question",
          "name": "What should I check when ordering a diamond bracelet?",
          "acceptedAnswer": { "@type": "Answer", "text": "Confirm wearable length, wrist allowance, width, stone count, total carat weight, articulation, clasp, safety mechanism and resizing options." }
        },
        {
          "@type": "Question",
          "name": "Are product photographs part of the specification?",
          "acceptedAnswer": { "@type": "Answer", "text": "They support the specification but should not replace written details. Confirm whether they show the exact item or a representative sample and which variant is pictured." }
        },
        {
          "@type": "Question",
          "name": "What should I save after ordering jewellery online?",
          "acceptedAnswer": { "@type": "Answer", "text": "Save the selected product page, specification checklist, seller answers, report details, order confirmation, invoice and delivery or return terms." }
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
        src: "/images/blog/diamond-jewellery-product-specifications-checklist/1.jpg",
        alt: "Diamond jewellery product specifications checklist",
        title: "Specifications Checklist",
        caption: "Confirming identity, weights, metals, dimensions, settings, reports, and transaction details ensures product matches.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A beautiful photograph can help you imagine wearing a piece of jewellery. It cannot tell you everything you are ordering."
      },
      {
        type: "paragraph",
        text: "Before paying for lab-grown diamond jewellery online, you should be able to identify the exact sold item, diamond specification, precious metal, measurements, construction, included components, documentation and selected variant. You should also understand which details are exact, approximate, minimum or representative."
      },
      {
        type: "paragraph",
        text: "This is not paperwork for its own sake. Product specifications determine whether a ring fits, whether earrings are sold as a pair, whether a pendant includes its chain and whether a stated carat weight belongs to one diamond or the entire design."
      },
      {
        type: "paragraph",
        text: "Use this guide as a final pre-checkout inspection."
      }
    ]
  },
  {
    heading: "Quick answer: the essential specifications to check",
    content: [
      {
        type: "paragraph",
        text: "Before ordering, confirm these 15 details:"
      },
      {
        type: "numbered-list",
        items: [
          "Exact product name, code and selected variant.",
          "What the price includes: one item, pair, chain or complete set.",
          "Diamond origin: laboratory-grown, with treatment disclosure where relevant.",
          "Diamond shape and number of stones.",
          "Individual and total carat weights, with their scope.",
          "Cut, colour and clarity specifications.",
          "Diamond dimensions and visible size where important.",
          "Report issuer, number, type and coverage.",
          "Metal type, fineness, colour and construction.",
          "Product dimensions and approximate finished weight.",
          "Ring size, bracelet length or necklace length.",
          "Setting, clasp, chain, earring-back and other functional details.",
          "Whether images show the exact piece or a representative sample.",
          "Production, dispatch and delivery estimate.",
          "Final price, VAT, delivery, returns, warranty and aftercare."
        ]
      },
      {
        type: "paragraph",
        text: "If an important field is absent, mark it as unknown and ask the seller before ordering. Do not silently give an ambiguous description its most favourable meaning."
      }
    ]
  },
  {
    heading: "Use three levels: must know, useful to know and confirm before payment",
    content: [
      {
        type: "table",
        headers: ["Level", "Meaning", "Examples"],
        rows: [
          ["Must know", "Defines what you are buying or materially affects fit and expectations", "Sold unit, diamond origin, carat scope, metal fineness, key dimensions, selected size"],
          ["Useful to know", "Improves comparison, confidence or care", "Finished weight, setting height, chain gauge, report details, plating information"],
          ["Confirm before payment", "Can change the final transaction or delivery", "VAT, duties, lead time, return eligibility, resizing and warranty exclusions"]
        ]
      },
      {
        type: "paragraph",
        text: "A store should not hide a “must know” fact inside an FAQ or reveal it only after payment."
      }
    ]
  },
  {
    heading: "1. Product identity and sold unit",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-jewellery-product-specifications-checklist/2.jpg",
        alt: "Registering exact product details and variant metrics in the order cart",
        title: "Cart Variant Selection",
        caption: "Confirming included chains, post fastening configurations, and engraving limits locks the order baseline."
      },
      {
        type: "paragraph",
        text: "Verify code references, selected variants, and check what is included (earrings sold as single or pair, removable chains). Basket descriptions must match selections exactly."
      }
    ]
  },
  {
    heading: "2. Laboratory-grown diamond identity and disclosure",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm explicit laboratory-grown terminology. For terminology guidelines, refer to " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "3. Diamond count, shape and arrangement",
    content: [
      {
        type: "paragraph",
        text: "Record center shapes, accent cuts, stone counts, and layout matches. Shapes (oval, round) do not dictate laboratory cut performance grades."
      }
    ]
  },
  {
    heading: "4. Individual carat weight and total carat weight",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Distinguish center stones, accents, and pair totals. Learn details at " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "5. The diamond-quality specification",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Evaluate Cut/Finish, Colour, Clarity, and Fluorescence records together. Consult " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " to balance grades." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cut and finish: ", bold: true },
          { text: "Round brilliant cut grades support comparison; fancy shapes require video inspections." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Colour: ", bold: true },
          { text: "Ranges are appropriate for accents; exact grades match centre stones." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Clarity: ", bold: true },
          { text: "A clean eye appearance is more important than unnoticeable microscopic inclusions." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Fluorescence and other details: ", bold: true },
          { text: "Verification markings help reconcile diamonds with grading reports." }
        ]
      }
    ]
  },
  {
    heading: "6. Exact grade, range, minimum or approximate value",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-jewellery-product-specifications-checklist/3.jpg",
        alt: "A digital spreadsheet classifying jewelry data precision categories",
        title: "Technical Spec Definitions",
        caption: "Identifying exact center stone grades separately from accent quality ranges ensures clear product expectations."
      },
      {
        type: "table",
        headers: ["Label", "How to interpret it"],
        rows: [
          ["Exact", "One stated value applies to the relevant delivered item"],
          ["Range", "The delivered value can fall anywhere inside the limits"],
          ["Minimum", "The delivered item should meet or exceed the stated floor"],
          ["Approximate", "A disclosed manufacturing or measurement tolerance applies"],
          ["Representative", "The photograph or specification describes a typical piece, not necessarily the exact item"]
        ]
      }
    ]
  },
  {
    heading: "7. Diamond measurements and face-up appearance",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify stone length, width, and setting height in millimetres. Refer to " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "8. Report, certificate and laser inscription",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm issuer verification, matches, and inscriptions. Read " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " and " },
          { text: "how to verify an IGI report number", href: "/blog/verify-igi-certificate-number/" },
          { text: " for full instruction." }
        ]
      }
    ]
  },
  {
    heading: "9. Precious metal, fineness and construction",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Note metal type, gold karat fineness, coatings, and hallmark details. For metal checklists, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "10. Finished dimensions and weight",
    content: [
      {
        type: "paragraph",
        text: "Compare heights, profile thicknesses, post spacing, and finished weight in grams to understand physical comfort."
      }
    ]
  },
  {
    heading: "11. Setting and functional components",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Setting: ", bold: true },
          { text: "Verify prong count, bezels, channels, and layout profiles." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Clasps and safety features: ", bold: true },
          { text: "Confirm box catches, lobster clasps, and mechanical safety wires." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Earring backs: ", bold: true },
          { text: "Verify screw-backs, friction butterfly backs, or lever-hooks." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Chains and bails: ", bold: true },
          { text: "Validate chain type, adjusters, link gauge, and bail openings." }
        ]
      }
    ]
  },
  {
    heading: "Category-specific specification checklist",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-jewellery-product-specifications-checklist/4.jpg",
        alt: "A ring sizing mandrel measuring a yellow gold shank width",
        title: "Ring Size Verification",
        caption: "Cross-checking size references and resize limits is an essential check before checkout."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Rings: ", bold: true },
          { text: "Confirm selected ring size, resize limits, shank thickness, and engraving implications. For sizing help, see " },
          { text: "how to measure your ring size", href: "/blog/how-to-measure-ring-size/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Earrings: ", bold: true },
          { text: "Verify single vs pair, carat per ear, drop length, and back weights." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Necklaces and pendants: ", bold: true },
          { text: "Verify chain style, pendant heights, and clasp limits. Refer to " },
          { text: "guide to selecting necklace length", href: "/blog/select-right-necklace-length/" },
          { text: " for placement." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bracelets: ", bold: true },
          { text: "Confirm wearable inner length, link width, stone count, and clasp. Read " },
          { text: "how to measure your wrist for a bracelet", href: "/blog/measure-wrist-for-bracelet/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Jewellery sets: ", bold: true },
          { text: "Check set components, matched quality ranges, and separate return rules." }
        ]
      }
    ]
  },
  {
    heading: "Photographs and video: what should they prove?",
    content: [
      {
        type: "paragraph",
        text: "Images should back up the specs: look for side and back details, dimension models, and 360-videos. Stated metal, stone grades, and certifications override photographic perceptions."
      }
    ]
  },
  {
    heading: "Specifications are not store policies",
    content: [
      {
        type: "paragraph",
        text: "Separately confirm manufacturing times, signature logistics, destination customs duties, cancellations, returns windows, warranties, and aftercare repair processes."
      }
    ]
  },
  {
    heading: "The final pre-order specification sheet",
    content: [
      {
        type: "table",
        headers: ["Field", "Confirmed specification", "Source or question"],
        rows: [
          ["Product name / code", "", ""],
          ["Selected variant", "", ""],
          ["Sold unit and inclusions", "", ""],
          ["Lab-grown diamond disclosure", "", ""],
          ["Stone count and shapes", "", ""],
          ["Centre / individual carat weight", "", ""],
          ["Accent / total carat weight", "", ""],
          ["Cut, colour and clarity", "", ""],
          ["Exact, range, minimum or approximate", "", ""],
          ["Diamond measurements", "", ""],
          ["Report issuer / number / coverage", "", ""],
          ["Metal / fineness / construction", "", ""],
          ["Hallmark information", "", ""],
          ["Product dimensions / finished weight", "", ""],
          ["Size / length selected", "", ""],
          ["Setting / clasp / chain / backs", "", ""],
          ["Exact or representative imagery", "", ""],
          ["Production and dispatch estimate", "", ""],
          ["VAT / delivery / duties", "", ""],
          ["Returns / warranty / aftercare", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Product-page red flags",
    content: [
      {
        type: "bullet-list",
        items: [
          "“Diamond” labels without clear natural or laboratory-grown disclosure.",
          "Stated carat weights without center or total designations.",
          "Using “certified” without stating the laboratory or report details.",
          "Metal colour descriptions (white/yellow) without fineness (14K/18K).",
          "Earring descriptions lacking single or pair designation.",
          "Taxes, custom clearance fees, or shipping costs added late at final payment."
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale product pages should publish",
    content: [
      {
        type: "numbered-list",
        items: [
          "Product identity and selected variant.",
          "What is included.",
          "Diamond origin, count, shapes and carat distribution.",
          "Quality grades with exact/range/minimum labels.",
          "Report and inscription coverage.",
          "Metal, fineness, construction and hallmark information.",
          "Dimensions, finished weight and category-specific sizing.",
          "Setting and functional components.",
          "Image-representation statement.",
          "Production, delivery, returns, warranty and destination costs."
        ]
      }
    ]
  },
  {
    heading: "How This Guide Differs from Related Buying Guides",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "This guide focuses on product specifications. For merchant evaluation checks, see " },
          { text: "How to Choose a Trustworthy Online Diamond Jeweller", href: "/blog/choose-trustworthy-online-diamond-jeweller/" },
          { text: ". For product parameter validation, see " },
          { text: "what to check before buying lab-grown diamond jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Aurelia Royale’s trust standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale provides complete specifications on every page. Buyers can browse " },
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
            text: "The best product page lets you describe exactly what will arrive without guessing.\n\n"
          },
          {
            text: "Before ordering diamond jewellery, confirm the sold unit, laboratory-grown origin, stone count, carat scope, 4Cs, measurements, report coverage, precious metal, construction, size and functional components. Then confirm the transaction: timing, final cost, returns and warranty."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What are the most important diamond jewellery specifications?",
            answer: "Confirm diamond origin, stone count, individual and total carat weights, the 4Cs, measurements, report coverage, metal and fineness, product dimensions, selected size and included components."
          },
          {
            question: "What does total carat weight mean on a jewellery product page?",
            answer: "Total carat weight is the combined weight of the diamonds covered by the stated scope. Check whether it applies to one item, an earring pair or an entire set."
          },
          {
            question: "Should every lab-grown diamond have an individual certificate?",
            answer: "Not necessarily. Individual reporting may suit significant diamonds, while small accents may be described through ranges or a jewellery report. The documentation strategy should be clear."
          },
          {
            question: "How can I tell whether a certificate covers my jewellery?",
            answer: "Check the issuer, report type, number, measurements and any laser inscription. Confirm whether it covers one loose diamond, a matched pair or the mounted piece."
          },
          {
            question: "Is a hallmark the same as a jewellery certificate?",
            answer: "No. A hallmark provides precious-metal fineness information within its legal framework. It does not grade diamonds, value jewellery or certify workmanship."
          },
          {
            question: "Why should finished jewellery dimensions be listed?",
            answer: "Dimensions show scale, setting height, drop, width and wearable length. Photographs can magnify jewellery and carat weight does not reveal every visible measurement."
          },
          {
            question: "Should jewellery weight be exact?",
            answer: "Finished weight is often approximate and may vary by ring size, chain length or manufacturing tolerance. It should be labelled accordingly."
          },
          {
            question: "What should I check when ordering diamond earrings?",
            answer: "Confirm single or pair, carat per diamond and per pair, dimensions, fastening, post or drop length, metal, backs and whether the pieces are matched."
          },
          {
            question: "What should I check when ordering a diamond necklace?",
            answer: "Confirm whether the chain is included, its style and length, pendant and bail dimensions, clasp, adjustability, total carat scope and whether the pendant detaches."
          },
          {
            question: "What should I check when ordering a diamond bracelet?",
            answer: "Confirm wearable length, wrist allowance, width, stone count, total carat weight, articulation, clasp, safety mechanism and resizing options."
          },
          {
            question: "Are product photographs part of the specification?",
            answer: "They support the specification but should not replace written details. Confirm whether they show the exact item or a representative sample and which variant is pictured."
          },
          {
            question: "What should I save after ordering jewellery online?",
            answer: "Save the selected product page, specification checklist, seller answers, report details, order confirmation, invoice and delivery or return terms."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Inspect the Specifications",
        subtitle: "Aurelia Royale details every material component, setting parameter, and grading report on our product pages. Explore our collection.",
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
            Buying Lab-Grown Diamond Jewellery
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Product Specifications Should You Check Before Ordering Diamond Jewellery?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="diamond-jewellery-product-specifications-checklist" />
      <NewsletterSection />
    </main>
  );
}
