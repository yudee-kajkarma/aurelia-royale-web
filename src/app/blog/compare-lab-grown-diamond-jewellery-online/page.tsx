import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Compare Lab Grown Diamond Jewellery Online",
  description: "Compare Lab Grown Diamond Jewellery Online",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/",
  },
};

export const metadataEs: Metadata = {
  title: "Compare joyas de diamantes cultivados en laboratorio en línea",
  description: "Compare joyas de diamantes cultivados en laboratorio en línea - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-lab-grown-diamond-jewellery-online/",
  },
};

export const metadataFr: Metadata = {
  title: "Comparez les bijoux en diamants cultivés en laboratoire en ligne",
  description: "Comparez les bijoux en diamants cultivés en laboratoire en ligne - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-lab-grown-diamond-jewellery-online/",
  },
};

export const metadataNl: Metadata = {
  title: "Vergelijk Lab Grown diamanten sieraden online",
  description: "Vergelijk Lab Grown diamanten sieraden online - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-lab-grown-diamond-jewellery-online/",
  },
};



export const metadataDe: Metadata = {
  title: "Vergleichen Sie im Labor gezüchteten Diamantschmuck online",
  description: "Vergleichen Sie im Labor gezüchteten Diamantschmuck online - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/compare-lab-grown-diamond-jewellery-online/",
  },
};


export const metadataIt: Metadata = {
  title: "Come confrontare gioielli con diamanti creati in laboratorio online",
  description: "Scopri come confrontare le offerte di prodotti di diverse gioiellerie. Valuta equamente la caratura totale, il peso del metallo e la qualità della pietra. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/compare-lab-grown-diamond-jewellery-online/",
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
      "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/compare-lab-grown-diamond-jewellery-online.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/compare-lab-grown-diamond-jewellery-online.webp",
      "width": 1600,
      "height": 900,
      "caption": "Structured online comparison of lab-grown diamond jewellery"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#webpage",
      "url": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/",
      "name": "How to Compare Lab-Grown Diamond Jewellery Online",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#primaryimage" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#article",
      "headline": "How to Compare Lab-Grown Diamond Jewellery Online",
      "description": "A structured method for comparing lab-grown diamond jewellery online by normalising variants, carat weight, grades, reports, metal, dimensions, construction, total price and service.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": [
        "compare lab-grown diamond jewellery online",
        "how to compare lab-grown diamond jewellery",
        "lab-grown diamond jewellery comparison",
        "compare lab-grown diamond jewellery prices",
        "lab-grown diamond comparison checklist"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Buying Lab-Grown Diamond Jewellery", "item": "https://www.aureliaroyale.com/blog/category/buying-lab-grown-diamond-jewellery/" },
        { "@type": "ListItem", "position": 4, "name": "How to Compare Lab-Grown Diamond Jewellery Online", "item": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/compare-lab-grown-diamond-jewellery-online/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I compare first in lab-grown diamond jewellery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Confirm that the products are the same category and lock each exact variant. Then compare stone origin, individual and total carat weight, measurements, grade scope, report type, metal and dimensions before comparing price." }
        },
        {
          "@type": "Question",
          "name": "Can I compare lab-grown diamond jewellery by price per carat?",
          "acceptedAnswer": { "@type": "Answer", "text": "Price per carat can reveal a weight mismatch, but it cannot rank finished jewellery alone. Metal, construction, setting count, components, documentation, taxes and service also contribute to price." }
        },
        {
          "@type": "Question",
          "name": "How do I compare total carat weight between earrings?",
          "acceptedAnswer": { "@type": "Answer", "text": "Record the weight per principal diamond, weight per earring and total for the sold pair. Confirm whether the advertised number refers to one earring or both." }
        },
        {
          "@type": "Question",
          "name": "Are two diamonds with the same 4Cs identical?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Similar grading results do not make diamonds visually identical. Measurements, proportions, inclusion pattern, transparency, contrast and light performance can differ." }
        },
        {
          "@type": "Question",
          "name": "Can I compare IGI and GIA laboratory-grown diamond reports directly?",
          "acceptedAnswer": { "@type": "Answer", "text": "Compare the information each report actually records, but do not invent a grade conversion. Laboratories may use different services, formats and terminology, particularly for laboratory-grown diamonds." }
        },
        {
          "@type": "Question",
          "name": "Is an exact grade always better than a colour and clarity range?",
          "acceptedAnswer": { "@type": "Answer", "text": "An exact independent grade provides greater precision for an individual diamond. A properly defined range can still be appropriate for small matched diamonds in multi-stone jewellery. Scope matters more than presentation alone." }
        },
        {
          "@type": "Question",
          "name": "Should I compare diamond measurements or carat weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "Compare both. Carat states weight, while measurements help explain face-up size and outline. Neither should be judged without cut and visual appearance." }
        },
        {
          "@type": "Question",
          "name": "How can I compare diamond sparkle from different websites?",
          "acceptedAnswer": { "@type": "Answer", "text": "Use actual videos with similar lighting, angle, magnification and speed. When evidence is not equivalent, score image confidence separately instead of assuming that the brighter video shows the better diamond." }
        },
        {
          "@type": "Question",
          "name": "How do I compare white gold and platinum jewellery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Compare metal type, fineness, finished weight, colour treatment, dimensions, maintenance, feel and price. Do not treat them as equivalent simply because both appear white." }
        },
        {
          "@type": "Question",
          "name": "What price should I use for a European cross-border comparison?",
          "acceptedAnswer": { "@type": "Answer", "text": "Use the total delivered price in one currency on the same date, including VAT, insured delivery, duties, clearance fees, currency conversion and required options." }
        },
        {
          "@type": "Question",
          "name": "Should a longer warranty make one jewellery product the winner?",
          "acceptedAnswer": { "@type": "Answer", "text": "Only if its coverage and cross-border use are genuinely better. Compare covered faults, exclusions, inspection requirements, shipping responsibility and available repair service, not the headline duration alone." }
        },
        {
          "@type": "Question",
          "name": "What should I do when a product page is missing a specification?",
          "acceptedAnswer": { "@type": "Answer", "text": "Mark it as not stated and ask the retailer for written confirmation. Do not assume the missing value is favourable. Remove the product if the unresolved information is material to the purchase." }
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
        src: "/images/blog/compare-lab-grown-diamond-jewellery-online/1.jpg",
        alt: "Comparing lab-grown diamond jewellery from different online retailers",
        title: "Comparison Standard Guide",
        caption: "Comparing similar categories and normalising specifications ensures a fair assessment.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Comparing lab-grown diamond jewellery online is difficult for a simple reason: product pages do not always describe the same unit."
      },
      {
        type: "paragraph",
        text: "One pair of earrings may advertise the weight of each centre diamond; another may advertise the total weight of both earrings. One ring may give an exact grade for an independently reported centre stone; another may give a colour and clarity range for every diamond combined. A lower-priced necklace may exclude the chain, use a different metal fineness or be much smaller than its magnified image suggests."
      },
      {
        type: "paragraph",
        text: "The solution is to normalise before you evaluate. Translate every shortlisted product into the same comparison fields, mark missing information and only then decide whether a price or quality difference is meaningful."
      }
    ]
  },
  {
    heading: "Quick answer: how do you compare lab-grown diamond jewellery online?",
    content: [
      {
        type: "paragraph",
        text: "Follow this order:"
      },
      {
        type: "numbered-list",
        items: [
          "Choose the exact product variant on every website.",
          "Confirm that every stone group is disclosed as laboratory-grown, natural or another material.",
          "Separate individual diamond weight from total carat weight.",
          "Compare measurements as well as carat weight.",
          "Identify which stones the colour, clarity and cut information covers.",
          "Record the laboratory, report type, report number and report scope.",
          "Compare actual or representative images under similar viewing conditions.",
          "Normalise metal type, fineness, coating and finished metal weight where available.",
          "Compare setting, chain, clasp, backs and other functional components.",
          "Compare dimensions, fit, total weight and wearability.",
          "Calculate the total delivered price in one currency and on one date.",
          "Add production time, returns, warranty and aftercare to the comparison.",
          "Score the differences using your own priorities rather than equal weighting.",
          "Eliminate any listing with unresolved material information."
        ]
      },
      {
        type: "paragraph",
        text: "Do not start with price. Price only becomes comparable after the products do."
      }
    ]
  },
  {
    heading: "Step 1: decide whether the products belong in the same comparison",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Compare items within identical categories (e.g. stud earrings with stud earrings). If you are still deciding what to buy, begin with " },
          { text: "the first-time buyer’s guide to lab-grown diamond jewellery", href: "/blog/first-time-buyers-guide-lab-grown-diamond-jewellery/" },
          { text: " rather than comparing unrelated designs." }
        ]
      }
    ]
  },
  {
    heading: "Step 2: lock the exact variant",
    content: [
      {
        type: "paragraph",
        text: "Before recording specs, select exact parameters (metal, size, carat weight options, engraving). Ensure selectors update specs, imagery, and pricing in sync."
      }
    ]
  },
  {
    heading: "Step 3: build one comparison card for every product",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-lab-grown-diamond-jewellery-online/2.jpg",
        alt: "Creating a technical comparison table for diamond jewelry",
        title: "Product Comparison Matrix",
        caption: "Structuring specifications side-by-side reveals hidden trade-offs and missing values."
      },
      {
        type: "table",
        headers: ["Field", "Product A", "Product B", "Product C"],
        rows: [
          ["Product reference", "", "", ""],
          ["Selected variant", "", "", ""],
          ["Stone origin", "", "", ""],
          ["Centre-stone weight", "", "", ""],
          ["Accent or additional weight", "", "", ""],
          ["Total carat weight", "", "", ""],
          ["Colour/clarity scope", "", "", ""],
          ["Cut or finish information", "", "", ""],
          ["Report issuer and type", "", "", ""],
          ["Metal and fineness", "", "", ""],
          ["Dimensions and finished weight", "", "", ""],
          ["Setting and fastening", "", "", ""],
          ["Production and delivery", "", "", ""],
          ["Returns and warranty", "", "", ""],
          ["Total delivered price", "", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Step 4: normalise diamond origin and stone count",
    content: [
      {
        type: "paragraph",
        text: "Determine gemstone identities (natural vs lab-grown) and roles (center vs accent). Record total stone counts to compare design intricacies fairly."
      }
    ]
  },
  {
    heading: "Step 5: convert carat claims to the same unit",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-lab-grown-diamond-jewellery-online/3.jpg",
        alt: "Differentiating individual stone carats from combined pair weights",
        title: "Carat Unit Normalisation",
        caption: "Normalising earring weight to per-ear values avoids false price-to-weight comparisons."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Ensure weight descriptions share identical baselines. Read " },
          { text: "what total carat weight means in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: " for full explanation." }
        ]
      },
      {
        type: "table",
        headers: ["Listing", "What 1.00 ct means", "Actual centre stone per ear"],
        rows: [
          ["Pair A", "1.00 ct total for the pair", "Approximately 0.50 ct each"],
          ["Pair B", "1.00 ct per earring", "Approximately 1.00 ct each; 2.00 ct total pair"]
        ]
      }
    ]
  },
  {
    heading: "Step 6: compare measurements, not carat alone",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Weight does not dictate visual size. Compare face-up dimensions and profiles. Refer to " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: " for measurement comparisons." }
        ]
      }
    ]
  },
  {
    heading: "Step 7: put colour and clarity on the same basis",
    content: [
      {
        type: "image",
        src: "/images/blog/compare-lab-grown-diamond-jewellery-online/4.jpg",
        alt: "Comparing the colour and clarity grades of accent and center stones",
        title: "Quality Grade Scope Check",
        caption: "Separating exact laboratory results from broad accent ranges ensures you know what you are buying."
      },
      {
        type: "table",
        headers: ["Quality field", "Centre/principal diamond", "Additional diamonds"],
        rows: [
          ["Colour", "", ""],
          ["Clarity", "", ""],
          ["Cut/finish", "", ""],
          ["Source of grade", "", ""]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Verify grading scopes before ranking items. Read " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for the grading framework." }
        ]
      }
    ]
  },
  {
    heading: "Step 8: compare cut and appearance from evidence",
    content: [
      {
        type: "paragraph",
        text: "Review outline symmetry, brightness patterns, contrast, and bow-tie effects using actual videos rather than generic sample clips."
      }
    ]
  },
  {
    heading: "Step 9: compare reports by scope, not by logo",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Loose diamond reports, mounted reports, and seller cards are not equivalent. Refer to " },
          { text: "how to compare two certified lab-grown diamonds", href: "/blog/how-to-compare-certified-lab-grown-diamonds/" },
          { text: " and " },
          { text: "how to verify an IGI report number", href: "/blog/how-to-verify-an-igi-certificate-number/" },
          { text: " for verification steps." }
        ]
      }
    ]
  },
  {
    heading: "Step 10: normalise the precious metal",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Note metal type, gold fineness, coatings, hallmark status, and weights. For metal-specific guidance, review " },
          { text: "checking the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Step 11: compare construction and functional components",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Rings: ", bold: true },
          { text: "Compare setting height, band widths, gallery designs, and resize limitations." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Earrings: ", bold: true },
          { text: "Compare posts, closures, drop length articulation, and weight per ear." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Necklaces and pendants: ", bold: true },
          { text: "Verify if chains are included, length adjustments, clasps, and bails." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bracelets: ", bold: true },
          { text: "Check wearable lengths, safety catches, link flexibility, and settings." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Jewellery sets: ", bold: true },
          { text: "Evaluate specs component-by-component rather than using single averages." }
        ]
      }
    ]
  },
  {
    heading: "Step 12: compare fit and real-life scale",
    content: [
      {
        type: "paragraph",
        text: "Draw dimensions on paper, check sizes against existing items, and verify that model references match the chosen scale."
      }
    ]
  },
  {
    heading: "Step 13: calculate one total delivered price",
    content: [
      {
        type: "paragraph",
        text: "Calculate base price, tax, shipping, duties, conversions, and sizing options in one currency on the same date."
      }
    ]
  },
  {
    heading: "Step 14: compare production, delivery and availability",
    content: [
      {
        type: "paragraph",
        text: "Compare stock statuses, production times, dispatch timing, and customs contingencies."
      }
    ]
  },
  {
    heading: "Step 15: compare returns, warranty and aftercare",
    content: [
      {
        type: "paragraph",
        text: "Verify return windows, return shipping insurance responsibilities, resizing, and covered defect terms."
      }
    ]
  },
  {
    heading: "Step 16: compare sustainability claims on equal scope",
    content: [
      {
        type: "paragraph",
        text: "Compare claims side-by-side, distinguishing loose statements from certified facility energy or carbon credits."
      }
    ]
  },
  {
    heading: "Step 17: weight the comparison according to use",
    content: [
      {
        type: "paragraph",
        text: "Weight characteristics based on use: give a score (1–5) for importance, multiply by the product's performance score, and check for essential failures."
      }
    ]
  },
  {
    heading: "A worked comparison example",
    content: [
      {
        type: "table",
        headers: ["Field", "Product A", "Product B", "What the difference means"],
        rows: [
          ["Earrings", "Stud pair", "Stud pair", "Comparable category"],
          ["Diamond weight", "1.00 ct total pair", "1.00 ct each", "B contains twice the principal weight"],
          ["Quality", "F/VS1 exact for each", "F–G/VS range", "Different precision and scope"],
          ["Report", "Two individual reports", "Jewellery report", "Different document types"],
          ["Metal", "18 ct white gold", "14 ct white gold", "Different fineness"],
          ["Dimensions", "5.1 mm each", "6.4 mm each", "B has greater visual spread"],
          ["Backs", "Screw backs", "Butterfly backs", "Security and convenience trade-off"],
          ["Production", "In stock", "Made to order, four weeks", "Timing difference"],
          ["Return", "Standard item returnable", "Made-to-order restrictions", "Flexibility difference"],
          ["Delivered price", "€1,200", "€1,650", "Not a like-for-like weight comparison"]
        ]
      }
    ]
  },
  {
    heading: "Comparison red flags",
    content: [
      {
        type: "bullet-list",
        items: [
          "Variant configurations changing silently during browsing.",
          "Stated carat weights without individual/total designations.",
          "Using center diamond grades to represent the entire piece.",
          "Mismatched report numbers, shapes, or weights.",
          "Lack of physical dimensions on close-up imagery.",
          "Taxes, custom clearance fees, or shipping costs added late at checkout."
        ]
      }
    ]
  },
  {
    heading: "Printable comparison worksheet",
    content: [
      {
        type: "table",
        headers: ["Comparison field", "Importance 1–5", "Product A", "Product B", "Product C"],
        rows: [
          ["Exact variant confirmed", "", "", "", ""],
          ["Stone origin and count", "", "", "", ""],
          ["Individual and total weight", "", "", "", ""],
          ["Measurements and visible scale", "", "", "", ""],
          ["Colour/clarity scope", "", "", "", ""],
          ["Cut and visual evidence", "", "", "", ""],
          ["Report type and verification", "", "", "", ""],
          ["Metal and fineness", "", "", "", ""],
          ["Construction and components", "", "", "", ""],
          ["Fit and comfort", "", "", "", ""],
          ["Total delivered price", "", "", "", ""],
          ["Production and delivery", "", "", "", ""],
          ["Returns and warranty", "", "", "", ""],
          ["Aftercare practicality", "", "", "", ""],
          ["Sustainability evidence", "", "", "", ""],
          ["Unresolved information", "—", "", "", ""]
        ]
      }
    ]
  },
  {
    heading: "How Blog 44 differs from the other buying guides",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "What to check before buying evaluates single products. This guide compares multiple shortlist products side-by-side. " },
          { text: "How to buy certified lab-grown diamond jewellery online", href: "/blog/buy-certified-lab-grown-diamond-jewellery-online/" },
          { text: " covers merchant transaction, payment, and shipping checks." }
        ]
      }
    ]
  },
  {
    heading: "Aurelia Royale’s comparison standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale structures specs cleanly to facilitate comparisons. Buyers can browse " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " and use the " },
          { text: "contact page", href: "/contact/" },
          { text: " to clarify specifications." }
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
            text: "The best way to compare lab-grown diamond jewellery online is to stop comparing product names and start comparing complete product records.\n\n"
          },
          {
            text: "Normalise the variant, diamond weight, measurements, grade scope, report, metal, dimensions and delivered price. Then compare construction, timing, returns and aftercare. Finally, weight those differences according to the way the jewellery will actually be worn."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What should I compare first in lab-grown diamond jewellery?",
            answer: "Confirm that the products are the same category and lock each exact variant. Then compare stone origin, individual and total carat weight, measurements, grade scope, report type, metal and dimensions before comparing price."
          },
          {
            question: "Can I compare lab-grown diamond jewellery by price per carat?",
            answer: "Price per carat can reveal a weight mismatch, but it cannot rank finished jewellery alone. Metal, construction, setting count, components, documentation, taxes and service also contribute to price."
          },
          {
            question: "How do I compare total carat weight between earrings?",
            answer: "Record the weight per principal diamond, weight per earring and total for the sold pair. Confirm whether the advertised number refers to one earring or both."
          },
          {
            question: "Are two diamonds with the same 4Cs identical?",
            answer: "No. Similar grading results do not make diamonds visually identical. Measurements, proportions, inclusion pattern, transparency, contrast and light performance can differ."
          },
          {
            question: "Can I compare IGI and GIA laboratory-grown diamond reports directly?",
            answer: "Compare the information each report actually records, but do not invent a grade conversion. Laboratories may use different services, formats and terminology, particularly for laboratory-grown diamonds."
          },
          {
            question: "Is an exact grade always better than a colour and clarity range?",
            answer: "An exact independent grade provides greater precision for an individual diamond. A properly defined range can still be appropriate for small matched diamonds in multi-stone jewellery. Scope matters more than presentation alone."
          },
          {
            question: "Should I compare diamond measurements or carat weight?",
            answer: "Compare both. Carat states weight, while measurements help explain face-up size and outline. Neither should be judged without cut and visual appearance."
          },
          {
            question: "How can I compare diamond sparkle from different websites?",
            answer: "Use actual videos with similar lighting, angle, magnification and speed. When evidence is not equivalent, score image confidence separately instead of assuming that the brighter video shows the better diamond."
          },
          {
            question: "How do I compare white gold and platinum jewellery?",
            answer: "Compare metal type, fineness, finished weight, colour treatment, dimensions, maintenance, feel and price. Do not treat them as equivalent simply because both appear white."
          },
          {
            question: "What price should I use for a European cross-border comparison?",
            answer: "Use the total delivered price in one currency on the same date, including VAT, insured delivery, duties, clearance fees, currency conversion and required options."
          },
          {
            question: "Should a longer warranty make one jewellery product the winner?",
            answer: "Only if its coverage and cross-border use are genuinely better. Compare covered faults, exclusions, inspection requirements, shipping responsibility and available repair service, not the headline duration alone."
          },
          {
            question: "What should I do when a product page is missing a specification?",
            answer: "Mark it as not stated and ask the retailer for written confirmation. Do not assume the missing value is favourable. Remove the product if the unresolved information is material to the purchase."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Compare with Precision",
        subtitle: "Aurelia Royale provides structured specifications, independent certification details, and clean metal disclosures on every product page to help you compare with confidence.",
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

  const localeData = getBlogDataByLocale("compare-lab-grown-diamond-jewellery-online", locale);
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
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Buying Lab-Grown Diamond Jewellery" : locale === "es" ? "Comprar joyas de diamantes cultivados en laboratorio" : "Buying Lab-Grown Diamond Jewellery"}
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
