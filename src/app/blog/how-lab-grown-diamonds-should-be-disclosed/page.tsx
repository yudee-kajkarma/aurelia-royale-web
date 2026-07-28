import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Disclosure: A Clear Buyer’s Guide",
  description: "Learn how lab-grown diamonds should be disclosed on product pages, adverts, reports and invoices, including origin, treatment and certification details.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/",
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
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-disclosure-guide.webp",
      "width": 1600,
      "height": 900,
      "caption": "A guide to clear laboratory-grown diamond descriptions and disclosures"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#webpage",
      "url": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/",
      "name": "How Should Lab-Grown Diamonds Be Described and Disclosed?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#article",
      "headline": "How Should Lab-Grown Diamonds Be Described and Disclosed?",
      "description": "Learn how lab-grown diamonds should be disclosed on product pages, adverts, reports and invoices, including origin, treatment and certification details.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#webpage"
      },
      "articleSection": "Lab-Grown Diamond Fundamentals",
      "keywords": [
        "lab-grown diamond disclosure",
        "lab-grown diamond terminology",
        "laboratory-grown diamond description",
        "how to label lab-grown diamonds",
        "lab-grown diamond advertising"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#breadcrumb",
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
          "name": "Blog",
          "item": "https://www.aureliaroyale.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Lab-Grown Diamond Education",
          "item": "https://www.aureliaroyale.com/blog/category/lab-grown-diamond-education/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "How Should Lab-Grown Diamonds Be Described and Disclosed?",
          "item": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Must a lab-grown diamond be labelled as lab-grown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Its laboratory-grown origin should be disclosed prominently wherever it is advertised or sold."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lab-grown diamond be called a real diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds have the essential properties of diamond, but the phrase real diamond can be confusing unless the laboratory-grown origin is equally prominent."
          }
        },
        {
          "@type": "Question",
          "name": "Is laboratory-created diamond acceptable terminology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is clear terminology because it communicates the diamond's laboratory origin. Retailers should still check current requirements in each market."
          }
        },
        {
          "@type": "Question",
          "name": "Should CVD or HPHT be disclosed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The growth method should be provided when it is known and verified, although it does not determine diamond quality by itself."
          }
        },
        {
          "@type": "Question",
          "name": "Must post-growth treatment be disclosed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Known post-growth treatments should be disclosed accurately, particularly when stated in the grading report."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Total carat weight is the combined weight of all relevant diamonds in a jewellery piece."
          }
        },
        {
          "@type": "Question",
          "name": "Does a grading report certify the complete jewellery piece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. A grading report commonly evaluates an identifiable diamond and may not cover the metal, setting, craftsmanship or accent stones."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be described as sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only when the claim is properly defined, qualified and supported by evidence relevant to its stated scope."
          }
        },
        {
          "@type": "Question",
          "name": "Should lab-grown origin appear on an invoice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The laboratory-grown description should remain consistent on invoices, confirmations and accompanying documents."
          }
        },
        {
          "@type": "Question",
          "name": "Must laboratory-grown origin be disclosed during resale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Laboratory-grown origin remains material product information and should be disclosed clearly in a resale listing."
          }
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
        src: "/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (1).png",
        alt: "A guide to clear laboratory-grown diamond descriptions and disclosures",
        title: "Disclosures and Nomenclature Guide",
        caption: "Clear descriptions should accompany lab-grown diamond products from adverts to checkout pages.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds should always be described using clear language that identifies their laboratory-grown origin."
      },
      {
        type: "paragraph",
        text: "The disclosure should appear prominently wherever the jewellery is advertised or sold. It should not be hidden in a product specification, tooltip, FAQ page or terms and conditions."
      },
      {
        type: "paragraph",
        text: "A buyer should be able to understand that the diamond was created in a laboratory before clicking “Add to basket”."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "A transparent description should use wording such as: Laboratory-grown diamond, Laboratory-created diamond, or Lab-grown diamond. The word “diamond” should not appear by itself if the stone is laboratory-grown. Where the information is available, the retailer should also disclose CVD/HPHT growth methods, post-growth treatments, exact carat weights, colour/clarity grades, report verification numbers, metal alloy hallmarks, and coloured stone classifications."
      }
    ]
  },
  {
    heading: "Terminology Recommendations",
    content: [
      {
        type: "table",
        headers: ["Description", "Recommended use"],
        rows: [
          ["Laboratory-grown diamond", "Clear formal terminology suitable for product pages and documents"],
          ["Laboratory-created diamond", "Clear alternative that identifies the diamond’s origin"],
          ["Lab-grown diamond", "Widely understood consumer-facing terminology"],
          ["CVD laboratory-grown diamond", "Use when the growth method has been confirmed"],
          ["HPHT laboratory-grown diamond", "Use when the growth method has been confirmed"],
          ["Diamond", "Do not use alone when describing a laboratory-grown diamond"],
          ["Real diamond", "Potentially confusing when the laboratory-grown origin is not equally prominent"],
          ["Cultured diamond", "Avoid using without an immediate laboratory-grown qualifier"],
          ["Eco diamond", "Avoid unless the exact environmental claim is defined and evidenced"],
          ["Ethical diamond", "Avoid as an unsupported general claim"],
          ["Fake diamond", "Inaccurate description of a lab-grown diamond"],
          ["Diamond simulant", "Not an appropriate description of a lab-grown diamond"]
        ]
      }
    ]
  },
  {
    heading: "1. Why Lab-Grown Diamond Disclosure Matters",
    content: [
      {
        type: "paragraph",
        text: "Lab-grown diamonds share fundamental chemical and physical properties with natural diamonds, but their geological origin is completely different. This origin affects retail valuations, replacement insurance coverage, and the second-hand resale market."
      },
      {
        type: "paragraph",
        text: "CIBJO (World Jewellery Confederation) publishes internationally recognised jewellery nomenclature standards in its Blue Books. Voluntarily followed across the global supply chain, these rules are updated regularly. Sellers in the UK must also check CAP and ASA rules to ensure compliance under active advertising policies."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Are they fake or imitation? ", bold: true },
          { text: "No. Simulants like moissanite and cubic zirconia are different crystalline substances with unique compositions. A laboratory-grown diamond is genuine diamond crystal grew through CVD/HPHT methods, but its artificial origin must remain clear to prevent buyer confusion." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (2).png",
        alt: "Checking CIBJO Blue Books rules and guidelines",
        title: "Compliance and Standards Nomenclature",
        caption: "CIBJO standards require transparent terminology to distinguish lab-grown diamonds from natural ones."
      }
    ]
  },
  {
    heading: "2. Where Disclosures Must Appear",
    content: [
      {
        type: "paragraph",
        text: "Disclosure should follow the product throughout the entire customer journey:"
      },
      {
        type: "bullet-list",
        items: [
          "Search & Social Ads: Visible text, copy, or landing pages must clearly identify lab-grown origin rather than hiding behind generic tags.",
          "Product Pages & Titles: Titles like 1.00 ct Laboratory-Grown Diamond Pendant are accurate, whereas 1 Carat Real Diamond is misleading.",
          "Checkouts & Invoices: Baskets, email confirmations, receipts, and warranty logs must preserve full origin disclosures."
        ],
        itemsParts: [
          [{ text: "Search & Social Ads: ", bold: true }, { text: "Visible text, copy, or landing pages must clearly identify lab-grown origin rather than hiding behind generic tags." }],
          [{ text: "Product Pages & Titles: ", bold: true }, { text: "Titles like 1.00 ct Laboratory-Grown Diamond Pendant are accurate, whereas 1 Carat Real Diamond is misleading." }],
          [{ text: "Checkouts & Invoices: ", bold: true }, { text: "Baskets, email confirmations, receipts, and warranty logs must preserve full origin disclosures." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (3).png",
        alt: "Product title showing 1.00ct lab-grown diamond detail",
        title: "Transparent Product Title and Listing",
        caption: "Titles and descriptions must consistently state origin across catalogs, baskets, and receipts."
      }
    ]
  },
  {
    heading: "3. Environmental claims and grading nomenclature",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Carats & Settings: ", bold: true },
          { text: "Carat weights should clarify centre-stone mass versus total carat weights (TCW). Precious metals (gold fineness, platinum 950) should be explicitly detailed alongside coloured accents." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Certifications: ", bold: true },
          { text: "Clearly state which independent lab (GIA, IGI) issued grading reports. Make sure report numbers correspond directly to girdle laser inscriptions." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Green & Eco Claims: ", bold: true },
          { text: "General phrases like \"completely sustainable\" require complete lifecycle evidence. Precise claims (e.g. \"100% renewable electricity at the growth facility\") are preferred." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (4).png",
        alt: "Stating renewable energy and certificate terms clearly",
        title: "Grading Reports and Environmental Scope",
        caption: "A loose-stone grading report should match the girdle laser registration code exactly."
      }
    ]
  },
  {
    heading: "Product Page template for Aurelia Royale",
    content: [
      {
        type: "paragraph",
        text: "The following structure ensures compliance and visual elegance across our web pages:"
      },
      {
        type: "callout",
        title: "Template Structure",
        parts: [
          { text: "[Carat weight] Laboratory-Grown Diamond [Type] in [Metal]\n\n", bold: true },
          { text: "• Origin: Laboratory-grown\n• Growth Method: CVD / HPHT\n• Post-growth treatment: Stated if detected\n• Metal: Stated with fineness (e.g. 18 ct / Pt 950)" }
        ]
      }
    ]
  },
  {
    heading: "Lab-Grown Diamond Disclosure Checklist",
    content: [
      {
        type: "table",
        headers: ["Ensure transparent checkout details:"],
        rows: [
          ["Clear lab-grown descriptors are visible on titles, ads, and baskets."],
          ["Individual carat weights are separated clearly from total combined weights."],
          ["Metal types, purity levels, and hallmarking processes are specified."],
          ["Independent laboratory reports (GIA, IGI) are named and verifiable."],
          ["Any post-growth treatments are disclosed on invoices."],
          ["All environmental or ethical claims are precise and backed by evidence."]
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
          { text: "Lab-grown diamonds should be described clearly, prominently, and consistently as laboratory-grown or laboratory-created diamonds. Transparency does not diminish a piece of fine jewellery; it empowers customers to choose their diamonds with absolute confidence.\n\n" },
          { text: "At Aurelia Royale, we follow strict disclosure guidelines across all collections, providing full certificate numbers, metal hallmarks, and growth details." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Must a lab-grown diamond be labelled as lab-grown?",
            answer: "Yes. Its laboratory-grown origin should be disclosed prominently wherever it is advertised or sold. The word “diamond” should not be used in isolation in a way that could confuse buyers about origin."
          },
          {
            question: "Can a lab-grown diamond be called a real diamond?",
            answer: "Lab-grown diamonds have the essential properties of diamond, but “real diamond” can be confusing if the laboratory-grown origin is not equally prominent. “Laboratory-grown diamond” is clearer."
          },
          {
            question: "Is laboratory-created diamond acceptable terminology?",
            answer: "It is clear terminology because it directly communicates the diamond’s laboratory origin. Requirements can vary by country and advertising channel, so retailers should check current local guidance."
          },
          {
            question: "Is a lab-grown diamond a synthetic diamond?",
            answer: "“Synthetic diamond” is used in technical and regulatory contexts, but some consumers incorrectly interpret “synthetic” as meaning a simulant. Consumer descriptions should explain clearly that the product is a laboratory-grown diamond."
          },
          {
            question: "Can a lab-grown diamond be called a cultured diamond?",
            answer: "“Cultured diamond” should not be used by itself because its meaning may not be clear to every buyer. If used at all, it should be accompanied immediately by an unambiguous laboratory-grown description."
          },
          {
            question: "Should CVD or HPHT be disclosed?",
            answer: "The growth method should be provided when it is known and verified. It can help customers understand the product, although it does not determine the diamond’s quality by itself."
          },
          {
            question: "Must post-growth treatment be disclosed?",
            answer: "Known treatments should be disclosed accurately, particularly when they are stated in the grading report or materially affect how the diamond is represented."
          },
          {
            question: "What does total carat weight mean?",
            answer: "Total carat weight is the combined weight of all relevant diamonds in the piece. It is not necessarily the weight of each individual diamond."
          },
          {
            question: "Does a grading report certify the complete jewellery piece?",
            answer: "Usually not. A diamond grading report commonly evaluates a loose or identifiable diamond. It may not evaluate the setting, precious metal, craftsmanship or smaller accent stones."
          },
          {
            question: "Can lab-grown diamonds be described as sustainable?",
            answer: "Only when the claim is defined, qualified and supported with suitable evidence. A claim about renewable electricity at a growing facility does not automatically cover the entire jewellery lifecycle."
          },
          {
            question: "Should lab-grown origin appear on an invoice?",
            answer: "Yes. Consistent disclosure on invoices, confirmations and accompanying documents helps preserve accurate product information after purchase."
          },
          {
            question: "Must lab-grown origin be disclosed when jewellery is resold?",
            answer: "Yes. The laboratory-grown origin remains material information and should be stated clearly in a resale listing."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop Confidently at Aurelia Royale",
        subtitle: "Independent certifications, clear technical growth methods, and legal metal hallmarks are guaranteed on all purchases.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog20Page() {
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
            How Should Lab-Grown Diamonds Be Disclosed?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Compliance Guide • Published July 15, 2026
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
