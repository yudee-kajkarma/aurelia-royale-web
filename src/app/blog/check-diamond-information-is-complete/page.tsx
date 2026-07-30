import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Diamond Information Checklist: Is Anything Missing?",
  description: "Use this diamond information checklist to find missing details, compare a product page with its grading report and resolve contradictions before buying.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/",
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
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/check-diamond-information-complete.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/check-diamond-information-complete.webp",
      "width": 1600,
      "height": 900,
      "caption": "How to check whether diamond information is complete"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#webpage",
      "url": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/",
      "name": "How to Check Whether Diamond Information Is Complete",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#primaryimage" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#article",
      "headline": "How to Check Whether Diamond Information Is Complete",
      "description": "Use this diamond information checklist to find missing details, compare a product page with its grading report and resolve contradictions before buying.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "diamond information checklist",
        "check diamond information",
        "diamond details checklist",
        "lab-grown diamond buying checklist",
        "complete diamond specifications"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "Diamond Information Checklist", "item": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-information-is-complete/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What diamond information should always be provided?",
          "acceptedAnswer": { "@type": "Answer", "text": "At minimum, buyers should understand diamond origin, shape, carat-weight scope, relevant quality description, certification scope where claimed, metal, dimensions, price and fulfilment conditions." }
        },
        {
          "@type": "Question",
          "name": "Does complete information mean every diamond needs a certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Small accent diamonds may be described through tested origin, total weight and quality ranges. The page should clearly state which stones have individual reports." }
        },
        {
          "@type": "Question",
          "name": "How do I know whether a carat weight is complete?",
          "acceptedAnswer": { "@type": "Answer", "text": "It should state whether the figure applies to a centre stone, each diamond, each earring, accent stones or the whole piece, and whether it is exact or approximate." }
        },
        {
          "@type": "Question",
          "name": "What if the product page and grading report disagree?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pause the purchase and ask the retailer to identify the correct information in writing. Do not assume that the more favourable specification is accurate." }
        },
        {
          "@type": "Question",
          "name": "Is a verified report number enough?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. It confirms that a report record exists. You must also match the report's shape, weight, measurements and inscription to the physical diamond where applicable." }
        },
        {
          "@type": "Question",
          "name": "Are missing diamond proportions always a red flag?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Detailed proportions may be important for a selectable loose diamond but unnecessary for every small mounted accent stone. Their relevance depends on the item and report." }
        },
        {
          "@type": "Question",
          "name": "Are colour and clarity ranges acceptable?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not when ranges are appropriate, accurately defined and attached to the correct stone group. They should not be presented as exact individual grades." }
        },
        {
          "@type": "Question",
          "name": "What does not applicable mean in a diamond checklist?",
          "acceptedAnswer": { "@type": "Answer", "text": "It means a field genuinely does not apply to the product or report, such as a centre-stone grade for jewellery without a centre stone. It is different from missing information." }
        },
        {
          "@type": "Question",
          "name": "Should the image match the selected diamond size?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ideally yes. If representative imagery shows another size or variant, the page should identify what is shown and provide accurate dimensions for the selection." }
        },
        {
          "@type": "Question",
          "name": "Should production time be included with diamond information?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, when it affects the purchase. Made-to-order production time should be distinguished from carrier delivery time." }
        },
        {
          "@type": "Question",
          "name": "What are the most serious missing details?",
          "acceptedAnswer": { "@type": "Answer", "text": "Unclear diamond origin, unverifiable report identity, ambiguous carat scope, conflicting metal information, unexplained product changes and hidden total-price or return conditions are high risk." }
        },
        {
          "@type": "Question",
          "name": "Should I save the product specifications after ordering?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Keep the product page or quotation, report details, policy terms and order confirmation so the agreed specifications can be checked against delivery." }
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
        src: "/images/blog/check-diamond-information-is-complete/1.jpg",
        alt: "How to check whether diamond information is complete and thorough",
        title: "How to Check Diamond Information",
        caption: "Comparing product spec sheets with independent grading reports ensures you are buying exactly what is described.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Diamond information is complete when a buyer can identify the exact item, understand its important characteristics, connect material claims to suitable evidence and know the essential purchase conditions. A page with many technical terms may still be incomplete if the carat-weight scope is unclear, the report belongs to another diamond or the selected variant changes without updating its details."
      },
      {
        type: "paragraph",
        text: "The right audit asks three questions: Presence (is it available?), Consistency (does it agree?), and Support (is it verified?)."
      },
      {
        type: "paragraph",
        text: "This method prevents two opposite mistakes. It avoids rejecting a product because an irrelevant field is absent, and it avoids accepting vague marketing merely because the page looks detailed."
      }
    ]
  },
  {
    heading: "Quick answer: how do you check whether diamond information is complete?",
    content: [
      {
        type: "paragraph",
        text: "Use this sequence:"
      },
      {
        type: "numbered-list",
        items: [
          "Fix the exact product variant you are evaluating.",
          "List the information required for that jewellery type.",
          "Mark each field as verified, disclosed, not applicable or unconfirmed.",
          "Match the product page to the grading report where one applies.",
          "Reconcile centre-stone weight, accent weight and total weight.",
          "Compare metal, dimensions and imagery with the selected variant.",
          "Confirm price, availability, production time, delivery and returns.",
          "Resolve every contradiction in writing.",
          "Separate minor gaps from purchase-stopping omissions.",
          "Save the final specifications and order confirmation."
        ]
      },
      {
        type: "paragraph",
        text: "Information is not complete merely because the seller can answer later. Material details should be recorded clearly before payment so that both parties know what has been ordered."
      }
    ]
  },
  {
    heading: "First, define “complete” correctly",
    content: [
      {
        type: "paragraph",
        text: "Complete does not mean that every possible gemmological field appears on every jewellery listing. The required information depends on the product and document."
      },
      {
        type: "table",
        headers: ["Field type", "Meaning", "Example"],
        rows: [
          ["Required", "Needed to identify or evaluate this product", "Laboratory-grown origin and total carat-weight scope"],
          ["Conditional", "Required only when a claim, feature or document applies", "Report number when an individual grading report is advertised"],
          ["Not applicable", "Does not apply to this item or report type", "Centre-stone cut grade on a design without a centre stone"]
        ]
      },
      {
        type: "paragraph",
        text: "A blank field should never silently stand in for “not applicable”. The retailer should omit irrelevant fields cleanly or label them when their absence could confuse a buyer."
      }
    ]
  },
  {
    heading: "Use four evidence statuses",
    content: [
      {
        type: "paragraph",
        text: "Every material fact should have one of four statuses:"
      },
      {
        type: "paragraph",
        parts: [
          { text: "Verified: ", bold: true },
          { text: "Supported by an appropriate independent record, such as a gemmological report or recognised hallmark." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Disclosed: ", bold: true },
          { text: "Stated by the retailer, manufacturer or supplier but not necessarily independently tested." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Not applicable: ", bold: true },
          { text: "Genuinely irrelevant to the product, selected option or report. This is a valid result." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Unconfirmed: ", bold: true },
          { text: "Absent, contradictory, unclear or unsupported." }
        ]
      },
      {
        type: "paragraph",
        text: "Do not upgrade “disclosed” to “verified” because the seller sounds confident. The purpose is to label evidence honestly."
      }
    ]
  },
  {
    heading: "Step 1: lock the exact product variant",
    content: [
      {
        type: "paragraph",
        text: "Information cannot be complete if the product itself keeps changing during the review. Record the selected product name, metal, ring size, carat weight, centre shape, earring type, ready-made status, and engraving."
      },
      {
        type: "paragraph",
        text: "A common information failure occurs when the image shows a 2.00 ct ring, the selected option is 1.00 ct and the description never identifies which version is pictured."
      }
    ]
  },
  {
    heading: "Step 2: audit diamond identity and origin",
    content: [
      {
        type: "paragraph",
        text: "The buyer should be able to determine whether the stones are laboratory-grown or natural, whether coloured stones or simulants are present, shape/cutting styles, and whether origin wording covers every diamond."
      },
      {
        type: "paragraph",
        parts: [
          { text: "“Diamond jewellery” is incomplete if origin is unclear. Read " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: " for the terminology standard." }
        ]
      }
    ]
  },
  {
    heading: "Step 3: reconcile every carat figure",
    content: [
      {
        type: "paragraph",
        text: "Carat weight is only complete when its scope is unmistakable. Reconcile centre carat weight, pair distribution, accent total weights, and tolerances."
      },
      {
        type: "paragraph",
        parts: [
          { text: "For multi-stone or handmade pieces, small tolerances may be reasonable. Read " },
          { text: "what total carat weight means in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: " and " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Step 4: check the quality statement’s scope",
    content: [
      {
        type: "paragraph",
        text: "Colour, clarity and cut information can be present yet misleading because it is attached to the wrong group of stones. Ensure grades specify which diamonds they cover."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " to interpret the fields, but preserve the exact terminology of the applicable report." }
        ]
      }
    ]
  },
  {
    heading: "Step 5: match the grading report to the product",
    content: [
      {
        type: "image",
        src: "/images/blog/check-diamond-information-is-complete/2.jpg",
        alt: "Matching diamond report numbers and specs to the certificate database",
        title: "Report Database Verification",
        caption: "Entering the unique report number in the laboratory database verifies the recorded specs."
      },
      {
        type: "paragraph",
        text: "When a report is supplied, compare it field by field rather than only checking the laboratory logo."
      },
      {
        type: "table",
        headers: ["Check", "Product page", "Laboratory record", "Result"],
        rows: [
          ["Report issuer and number", "", "", ""],
          ["Laboratory-grown description", "", "", ""],
          ["Shape and cutting style", "", "", ""],
          ["Carat weight", "", "", ""],
          ["Measurements", "", "", ""],
          ["Colour or quality result", "", "", ""],
          ["Clarity or quality result", "", "", ""],
          ["Cut information", "", "", ""],
          ["Inscription", "", "", ""],
          ["Growth or treatment comments", "", "", ""]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to verify an IGI certificate number", href: "/blog/how-to-verify-an-igi-certificate-number/" },
          { text: " and " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: " to ensure database records and reports match." }
        ]
      }
    ]
  },
  {
    heading: "Step 6: check measurements and physical scale",
    content: [
      {
        type: "paragraph",
        text: "For a principal diamond, compare millimetre measurements with carat weight. For finished jewellery, confirm categories: earrings (drop length/fastening), necklaces (chain length/drop), bracelets (wearable length), and rings (width/setting height)."
      }
    ]
  },
  {
    heading: "Step 7: verify metal and construction information",
    content: [
      {
        type: "image",
        src: "/images/blog/check-diamond-information-is-complete/3.jpg",
        alt: "Checking the hallmark stamp on fine platinum jewellery",
        title: "Hallmark Fineness Inspection",
        caption: "An Assay Office hallmark verifies precious metal content and fineness, separate from the diamond certificate."
      },
      {
        type: "paragraph",
        text: "A diamond report does not complete the description of the jewellery. Check metal type, fineness, colour, plating, hallmark details, finished weight, setting structure, chain, and clasps."
      }
    ]
  },
  {
    heading: "Step 8: test imagery against the written specification",
    content: [
      {
        type: "paragraph",
        text: "Ensure the selected metal variant matches the image, check stone count, and verify settings. If stock or representative photography is used, the page must disclose this."
      }
    ]
  },
  {
    heading: "Step 9: check price, timing and policy consistency",
    content: [
      {
        type: "image",
        src: "/images/blog/check-diamond-information-is-complete/4.jpg",
        alt: "Reviewing delivery terms, taxes and return policies at checkout",
        title: "Transaction and Policy Audit",
        caption: "Inspecting prices, estimated delivery dates, and return windows prevents post-checkout surprises."
      },
      {
        type: "paragraph",
        text: "Before payment, confirm prices, VAT or taxes, shipping terms, stock status, production estimates, return windows, personalization exclusions, and included documentation."
      }
    ]
  },
  {
    heading: "Step 10: distinguish omissions from contradictions",
    content: [
      {
        type: "paragraph",
        text: "An omission is a field that is absent. A contradiction is more serious because two sources make different claims (e.g., page says 1.00 ct, report says 0.90 ct; page says ready-made, checkout says made-to-order). Keep the corrected details in writing."
      }
    ]
  },
  {
    heading: "Score each gap by purchase risk",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Red: stop until resolved — ", bold: true },
          { text: "unclear origin, unverified reports, metal fineness conflicts, hidden transaction prices or return policies." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Amber: clarification strongly recommended — ", bold: true },
          { text: "unlabeled representative imagery, vague sizing details, unclear quality grade scope." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Green: minor or non-material gap — ", bold: true },
          { text: "nonessential styling measurements, approximate handmade tolerances." }
        ]
      }
    ]
  },
  {
    heading: "Complete-information worksheet",
    content: [
      {
        type: "table",
        headers: ["Area", "Field", "Status", "Source", "Action needed"],
        rows: [
          ["Identity", "Product reference and selected variant", "", "", ""],
          ["Diamond", "Origin and component mapping", "", "", ""],
          ["Weight", "Centre, accent and total carat weights", "", "", ""],
          ["Quality", "Colour, clarity and cut scope", "", "", ""],
          ["Report", "Issuer, type, number and coverage", "", "", ""],
          ["Match", "Shape, weight, measurements and inscription", "", "", ""],
          ["Jewellery", "Metal, fineness, dimensions and construction", "", "", ""],
          ["Images", "Actual or representative; variant shown", "", "", ""],
          ["Price", "Currency, tax and additional charges", "", "", ""],
          ["Fulfilment", "Stock, production and delivery", "", "", ""],
          ["Policies", "Returns, warranty and aftercare", "", "", ""],
          ["Delivery set", "Reports, invoice, packaging and care information", "", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Questions to send the retailer",
    content: [
      {
        type: "numbered-list",
        items: [
          "Please confirm the exact product reference and selected variant.",
          "Does the carat figure apply to the centre stone, each item or all diamonds combined?",
          "Are the stated grades exact, minimum or ranges, and which stones do they cover?",
          "Which report will I receive, and which diamond or item does it cover?",
          "Will the delivered diamond match the displayed report number?",
          "Are the images actual or representative, and which option is shown?",
          "What are the finished dimensions and metal fineness?",
          "Is the item ready to dispatch or made to order?",
          "What is the complete price for delivery to my country?",
          "Do sizing, engraving or other choices change return eligibility?"
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For a broader pre-purchase audit, use " },
          { text: "the diamond product-page details checklist", href: "/blog/diamond-details-product-page/" },
          { text: ", then confirm " },
          { text: "how lab-grown diamonds are graded", href: "/blog/how-lab-grown-diamonds-are-graded/" },
          { text: ". The next checks are whether the seller demonstrates " },
          { text: "transparency when buying diamond jewellery", href: "/blog/transparency-buying-diamond-jewellery/" },
          { text: " and read the complete guide to " },
          { text: "buying certified lab-grown diamond jewellery online", href: "/blog/buy-certified-lab-grown-diamond-jewellery-online/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Aurelia Royale’s completeness standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale should manage completeness at the data level, not only in product prose. Buyers can review " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " to resolve a product-specific information gap." }
        ]
      }
    ]
  },
  {
    heading: "Final pre-purchase checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Which exact variant am I buying?",
          "Is diamond origin clear for every stone group?",
          "Do centre, accent and total carat figures reconcile?",
          "Are quality statements attached to the correct stones?",
          "Is the report type and coverage clear?",
          "Does the verified report match the product?",
          "Are metal, dimensions and construction complete?",
          "Do the images represent the selected option honestly?",
          "Is the total price understandable?",
          "Are production, delivery and returns consistent across the site?",
          "Have all red-risk gaps been resolved in writing?",
          "Will the final order confirmation preserve the agreed specifications?"
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
            text: "Complete diamond information is not measured by word count. It is measured by whether the exact product can be identified, material claims are properly labelled, evidence matches the item and the purchase conditions remain consistent through checkout.\n\n"
          },
          {
            text: "Use required, conditional and not-applicable fields to decide what belongs. Then label each answer verified, disclosed, not applicable or unconfirmed. Resolve contradictions before minor omissions, and stop when origin, report identity, weight, metal or price cannot be established confidently."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What diamond information should always be provided?",
            answer: "At minimum, buyers should understand diamond origin, shape, carat-weight scope, relevant quality description, certification scope where claimed, metal, dimensions, price and fulfilment conditions."
          },
          {
            question: "Does complete information mean every diamond needs a certificate?",
            answer: "No. Small accent diamonds may be described through tested origin, total weight and quality ranges. The page should clearly state which stones have individual reports."
          },
          {
            question: "How do I know whether a carat weight is complete?",
            answer: "It should state whether the figure applies to a centre stone, each diamond, each earring, accent stones or the whole piece, and whether it is exact or approximate."
          },
          {
            question: "What if the product page and grading report disagree?",
            answer: "Pause the purchase and ask the retailer to identify the correct information in writing. Do not assume that the more favourable specification is accurate."
          },
          {
            question: "Is a verified report number enough?",
            answer: "No. It confirms that a report record exists. You must also match the report's shape, weight, measurements and inscription to the physical diamond where applicable."
          },
          {
            question: "Are missing diamond proportions always a red flag?",
            answer: "No. Detailed proportions may be important for a selectable loose diamond but unnecessary for every small mounted accent stone. Their relevance depends on the item and report."
          },
          {
            question: "Are colour and clarity ranges incomplete information?",
            answer: "Not when ranges are appropriate, accurately defined and attached to the correct stone group. They should not be presented as exact individual grades."
          },
          {
            question: "What does not applicable mean in a diamond checklist?",
            answer: "It means a field genuinely does not apply to the product or report, such as a centre-stone grade for jewellery without a centre stone. It is different from missing information."
          },
          {
            question: "Should the image match the selected diamond size?",
            answer: "Ideally yes. If representative imagery shows another size or variant, the page should identify what is shown and provide accurate dimensions for the selection."
          },
          {
            question: "Should production time be included with diamond information?",
            answer: "Yes, when it affects the purchase. Made-to-order production time should be distinguished from carrier delivery time."
          },
          {
            question: "What are the most serious missing details?",
            answer: "Unclear diamond origin, unverifiable report identity, ambiguous carat scope, conflicting metal information, unexplained product changes and hidden total-price or return conditions are high risk."
          },
          {
            question: "Should I save the product specifications after ordering?",
            answer: "Yes. Keep the product page or quotation, report details, policy terms and order confirmation so the agreed specifications can be checked against delivery."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Explore Fully Disclosed Quality",
        subtitle: "Aurelia Royale verifies every diamond parameter and presents independent verification details openly. Explore our collection.",
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
            Certification and Diamond Quality
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Check Whether Diamond Information Is Complete
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
