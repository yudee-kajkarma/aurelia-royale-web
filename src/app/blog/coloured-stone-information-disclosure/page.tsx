import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Why Coloured-Stone Information Must Be Clear",
  description: "Learn why gemstone identity, natural or laboratory-created status, treatments, dimensions, care and report scope should be disclosed clearly.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/coloured-stone-information-disclosure/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/coloured-stone-information-disclosure/#article",
      "headline": "Why Coloured-Stone Information Should Be Disclosed",
      "description": "Learn why gemstone identity, natural or laboratory-created status, treatments, dimensions, care and report scope should be disclosed clearly.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/coloured-stone-information-disclosure/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/coloured-stone-information-disclosure.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/coloured-stone-information-disclosure/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Coloured Stones and Diamonds", "item": "https://www.aureliaroyale.com/blog/category/coloured-stones-and-diamonds/" },
        { "@type": "ListItem", "position": 4, "name": "Why Coloured-Stone Information Should Be Disclosed", "item": "https://www.aureliaroyale.com/blog/coloured-stone-information-disclosure/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/coloured-stone-information-disclosure/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Why must gemstone treatments be disclosed?", "acceptedAnswer": { "@type": "Answer", "text": "Treatments can affect appearance, price comparison, durability, cleaning and repair, and may not be visually detectable." } },
        { "@type": "Question", "name": "Does natural mean a coloured stone is untreated?", "acceptedAnswer": { "@type": "Answer", "text": "No. Natural describes geological formation; a natural stone may also have undergone treatment." } },
        { "@type": "Question", "name": "Is a laboratory-created gemstone an imitation?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. A laboratory-created counterpart can share the relevant identity of a natural material; an imitation is different material." } },
        { "@type": "Question", "name": "What coloured-stone details should appear before checkout?", "acceptedAnswer": { "@type": "Answer", "text": "Identity, origin category, known treatments, dimensions, weight, image status, report scope and care should be clear where applicable." } },
        { "@type": "Question", "name": "Is genuine gemstone enough information?", "acceptedAnswer": { "@type": "Answer", "text": "No. It does not identify the material, origin, treatment or composite construction." } },
        { "@type": "Question", "name": "Should gemstone information appear on the invoice?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The transaction record should preserve essential information for care, repair, gifting and verification." } },
        { "@type": "Question", "name": "Does every coloured stone need a laboratory report?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Reporting should be proportionate to value, risk and claims, but disclosure remains important." } },
        { "@type": "Question", "name": "Does a jewellery report cover every stone?", "acceptedAnswer": { "@type": "Answer", "text": "Only if its scope says so. Read which loose stone or finished item was examined and note mounted limitations." } },
        { "@type": "Question", "name": "Can treatment information be hidden in an FAQ?", "acceptedAnswer": { "@type": "Answer", "text": "Decision-critical information should be prominent and timely; a general FAQ should not replace product-specific disclosure." } },
        { "@type": "Question", "name": "How should naturally variable stones be disclosed?", "acceptedAnswer": { "@type": "Answer", "text": "State when images are representative and provide realistic colour, dimension or weight ranges where applicable." } },
        { "@type": "Question", "name": "Are disclosure rules identical across Europe and the UK?", "acceptedAnswer": { "@type": "Answer", "text": "No. Principles overlap, but businesses should obtain current advice for each market, language and sales channel." } },
        { "@type": "Question", "name": "What should Aurelia do when information is unconfirmed?", "acceptedAnswer": { "@type": "Answer", "text": "Label it unconfirmed, seek evidence and avoid making a positive origin, treatment or certification claim." } }
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
        src: "/images/blog/coloured-stone-information-disclosure/1.jpg",
        alt: "Gemstone disclosure information checklist document",
        title: "Disclosure Documentation",
        caption: "Clear gemstone disclosures clarify composite assemblies and treatment histories.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Colour is visible. Identity, origin category and treatment often are not."
      },
      {
        type: "paragraph",
        text: "A blue centre stone might be natural sapphire, treated natural sapphire, laboratory-created sapphire, a composite or an imitation material. Those categories can overlap in appearance while differing in rarity, price comparison, care, repair and documentation. Clear disclosure converts a beautiful image into an informed purchase."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Coloured-stone information should be disclosed because buyers cannot reliably establish identity, natural or laboratory-created origin, composite construction or treatment from appearance alone. These facts can materially affect price, durability, cleaning, repair and report interpretation. A useful product page should name each stone, state its origin category, disclose known treatments, separate stone weights, identify the exact report scope and provide care instructions before checkout—not hide essential details in vague language or post-purchase paperwork."
      }
    ]
  },
  {
    heading: "Disclosure is not a warning label",
    content: [
      {
        type: "paragraph",
        text: "Treatments and lab creations are legitimate jewelry options. Prominent and specific declarations allow buyers to select parameters confidently."
      }
    ]
  },
  {
    heading: "The information hierarchy buyers need",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-stone-information-disclosure/2.jpg",
        alt: "Gem identification hierarchy steps diagram",
        title: "Identity Hierarchy Layout",
        caption: "Verifying all layers of the information checklist secures buyer safety."
      },
      {
        type: "table",
        headers: ["Layer", "Essential question", "Example of clear information"],
        rows: [
          ["Identity", "What material is it?", "Sapphire; emerald; spinel"],
          ["Origin category", "Natural or manufactured?", "Natural sapphire; laboratory-created sapphire"],
          ["Construction", "One material or assembled?", "Composite stone; doublet; imitation glass"],
          ["Treatment", "Has appearance been altered?", "Heated; filled; coated; treatment not detected within report scope"],
          ["Physical specification", "What is its scale?", "Dimensions, weight and shape"],
          ["Documentation", "What was tested?", "Loose centre stone or finished jewellery"],
          ["Care", "What restrictions follow?", "Avoid heat, chemicals, ultrasonic cleaning or prolonged light as applicable"]
        ]
      }
    ]
  },
  {
    heading: "1. Identity affects the entire comparison",
    content: [
      {
        type: "paragraph",
        text: "Do not use color indicators alone. Mineral categories must be labeled explicitly to avoid price mismatches."
      }
    ]
  },
  {
    heading: "2. Natural, treated and laboratory-created are separate facts",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Separate geological origin from treatment status. For details on lab grading, see " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/lab-grown-diamond-description-disclosure/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "3. Treatments can affect care and repair",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-stone-information-disclosure/3.jpg",
        alt: "Gem treatment check in a studio workshop",
        title: "Workshop Treatment Checks",
        caption: "Declaring exact enhancement statuses avoids cleaning damages at local repair benches."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Identify porous coatings, fillings, or thermal treatments. Read care details at " },
          { text: "how to care for coloured stones and diamonds", href: "/blog/care-coloured-stones-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "4. Disclosure enables fair price comparison",
    content: [
      {
        type: "paragraph",
        text: "Compare specifications like for like. Transparent listings ensure value traits (clarity, origin) are measurable."
      }
    ]
  },
  {
    heading: "5. Disclosure preserves trust after purchase",
    content: [
      {
        type: "paragraph",
        text: "Keep purchase documents consistent with the product page to assist insurance updates and professional servicing."
      }
    ]
  },
  {
    heading: "6. European and UK consumer transparency matters",
    content: [
      {
        type: "paragraph",
        text: "Comply with consumer protection directives regarding manufacture type, components composition, and testing details."
      }
    ]
  },
  {
    heading: "7. Industry ethics reinforce the same principle",
    content: [
      {
        type: "paragraph",
        text: "Ethical trade mandates accurate reporting to guard buyers against synthetic substitutions sold under natural names."
      }
    ]
  },
  {
    heading: "What should appear on the product page?",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "For the coloured centre stone: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "exact gemstone species or variety;",
          "natural, laboratory-created, composite or imitation status;",
          "known or detected treatments;",
          "shape and cutting style;",
          "dimensions in millimetres;",
          "carat weight or clearly explained mounted estimate;",
          "colour description without unsupported origin implications;",
          "whether imagery shows the exact stone; and",
          "care restrictions."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "For lab-grown diamond accents: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "laboratory-grown origin;",
          "count and shapes;",
          "combined total carat weight;",
          "stated colour and clarity range and its scope; and",
          "report coverage where applicable."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "For the complete jewellery item: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "metal and fineness;",
          "overall dimensions and weight where relevant;",
          "setting and fastening information;",
          "report type and matching number;",
          "production variation;",
          "returns, warranty and repair information; and",
          "company and contact details."
        ]
      }
    ]
  },
  {
    heading: "Where disclosure should appear",
    content: [
      {
        type: "numbered-list",
        items: [
          "Product title: core material and design identity.",
          "Near the price and purchase button: natural/laboratory-created status and material treatment where decision-critical.",
          "Specifications: full stone, metal, dimension and weight breakdown.",
          "Report section: issuer, number, scope and verification route.",
          "Care section: treatment-specific restrictions.",
          "Basket and checkout: no conflicting shortened description.",
          "Invoice and care card: durable record of the essential facts."
        ]
      }
    ]
  },
  {
    heading: "Wording that creates confusion",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-stone-information-disclosure/4.jpg",
        alt: "A list of vague trade descriptions vs transparent labeling",
        title: "Description Wording Limits",
        caption: "Avoiding misleading words like 'genuine' keeps product listings clear."
      },
      {
        type: "table",
        headers: ["Unclear wording", "Why it is insufficient", "Better direction"],
        rows: [
          ["Genuine gemstone", "Does not identify the material or origin", "Name the gem and origin category"],
          ["Created stone", "Does not say what was created", "Laboratory-created sapphire"],
          ["Enhanced", "Does not identify the treatment", "State the known treatment"],
          ["Emerald look", "May describe style rather than material", "Name the actual material"],
          ["Certified jewellery", "Does not state document type or scope", "Name issuer, report and covered item"],
          ["Natural colour", "Can be mistaken for natural origin or untreated status", "Describe colour separately from origin and treatment"],
          ["Diamond accented", "Does not confirm origin, count or total weight", "Lab-grown diamond accents with specifications"]
        ]
      }
    ]
  },
  {
    heading: "How reports should be presented",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm if certificates relate to loose elements or complete mounted items. Check details at " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How to handle unknown or variable information",
    content: [
      {
        type: "paragraph",
        text: "Utilize clear statuses: Disclosed (manufacturer data), Verified (independent reports), or Unconfirmed (not tested: avoid claims)."
      }
    ]
  },
  {
    heading: "A disclosure audit for retailers",
    content: [
      {
        type: "numbered-list",
        items: [
          "Is every stone named separately?",
          "Is natural or laboratory-created status explicit?",
          "Are composites and imitations identified?",
          "Are known treatments specific and prominent?",
          "Are coloured-stone and diamond weights separated?",
          "Does the imagery represent the exact or expected product honestly?",
          "Does the report match the item and its description?",
          "Are report limits explained?",
          "Do care instructions reflect the most sensitive component?",
          "Do title, specifications, basket, invoice and translations agree?",
          "Can the customer save the information?",
          "Has current local compliance advice been applied?"
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
          { text: "Aurelia Royale itemizes all gemstone layers and provides direct verification options. View options at " },
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
            text: "Clear coloured-stone disclosure lets buyers understand what a piece contains, compare it fairly, care for it safely and verify the documents supplied.\n\n"
          },
          {
            text: "Insist on specific definitions (e.g. lab-created sapphire) rather than vague terms like 'genuine gemstone'. Ensure transaction records preserve these specifications."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Why must gemstone treatments be disclosed?",
            answer: "Treatments can affect appearance, price comparison, durability, cleaning and repair. Buyers cannot always detect them visually."
          },
          {
            question: "Does natural mean a coloured stone is untreated?",
            answer: "No. Natural describes geological formation; a natural stone may also have undergone treatment."
          },
          {
            question: "Is a laboratory-created gemstone an imitation?",
            answer: "Not necessarily. A laboratory-created gemstone shares the relevant chemical and optical properties of a natural material, while an imitation is a different material."
          },
          {
            question: "What coloured-stone details should appear before checkout?",
            answer: "Identity, origin category, known treatments, dimensions, weight, image status, report scope and care restrictions should be clear where applicable."
          },
          {
            question: "Is “genuine gemstone” enough information?",
            answer: "No. It does not identify the material, natural or manufactured origin, treatment or composite construction."
          },
          {
            question: "Should gemstone information appear on the invoice?",
            answer: "Yes. The transaction record should preserve the essential product description so it remains available for care, repair, gifting and later verification."
          },
          {
            question: "Does every coloured stone need a laboratory report?",
            answer: "Not necessarily. Reporting should be proportionate to value, risk and claims, but product disclosure remains important with or without a report."
          },
          {
            question: "Does a jewellery report cover every stone?",
            answer: "Only if its scope says so. Read which loose stone or finished item was examined and note mounted limitations."
          },
          {
            question: "Can treatment information be hidden in an FAQ?",
            answer: "Decision-critical information should be prominent and timely. A general FAQ should support, not replace, product-specific disclosure."
          },
          {
            question: "How should naturally variable stones be disclosed?",
            answer: "State that images may be representative and provide realistic colour, dimension or weight ranges where applicable."
          },
          {
            question: "Are disclosure rules identical across Europe and the UK?",
            answer: "No. Principles overlap, but businesses should obtain current advice for each market, language and sales channel."
          },
          {
            question: "What should Aurelia do when information is unconfirmed?",
            answer: "Label it unconfirmed, seek evidence and avoid making a positive natural-origin, treatment or certification claim."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Experience Pure Transparency",
        subtitle: "Aurelia Royale ensures all gemstone layers are declared clearly before purchase. Check our disclosure charter.",
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
            Why Coloured-Stone Information Should Be Disclosed
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
