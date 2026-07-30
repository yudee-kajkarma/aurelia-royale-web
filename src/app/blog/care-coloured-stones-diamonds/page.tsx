import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Care for Coloured Stones and Diamonds",
  description: "Learn how to clean, wear and store coloured-stone and diamond jewellery safely by following the needs of its most sensitive component.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/care-coloured-stones-diamonds/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/care-coloured-stones-diamonds/#article",
      "headline": "How to Care for Coloured Stones and Diamonds Together",
      "description": "Learn how to clean, wear and store coloured-stone and diamond jewellery safely by following the needs of its most sensitive component.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/care-coloured-stones-diamonds/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/care-coloured-stones-diamonds.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/care-coloured-stones-diamonds/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Coloured Stones and Diamonds", "item": "https://www.aureliaroyale.com/blog/category/coloured-stones-and-diamonds/" },
        { "@type": "ListItem", "position": 4, "name": "How to Care for Coloured Stones and Diamonds Together", "item": "https://www.aureliaroyale.com/blog/care-coloured-stones-diamonds/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/care-coloured-stones-diamonds/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can coloured stones and diamonds be cleaned together?", "acceptedAnswer": { "@type": "Answer", "text": "Only when one method is confirmed safe for every stone, treatment, metal and setting in the piece. Follow the most sensitive component." } },
        { "@type": "Question", "name": "Can I soak gemstone and diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Do not soak it unless the seller confirms that the exact materials, treatments and construction tolerate soaking." } },
        { "@type": "Question", "name": "Can I use an ultrasonic cleaner?", "acceptedAnswer": { "@type": "Answer", "text": "Only with explicit professional approval for the exact piece. Vibration can be unsuitable for some stones, treatments and settings." } },
        { "@type": "Question", "name": "Is steam cleaning safe for mixed-stone jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Not universally. Heat and pressure may affect vulnerable gems, treatments, inclusions or construction." } },
        { "@type": "Question", "name": "Can diamonds scratch coloured gemstones?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Diamonds can scratch many coloured stones, so separate storage is important." } },
        { "@type": "Question", "name": "Is mild washing-up liquid always safe?", "acceptedAnswer": { "@type": "Answer", "text": "No universal cleanser is safe for every gemstone, treatment and finish. Use only what the seller or qualified professional recommends." } },
        { "@type": "Question", "name": "Can I clean jewellery with toothpaste or baking soda?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid abrasive household remedies because they may scratch metal, finishes or softer materials and lodge in settings." } },
        { "@type": "Question", "name": "Why does gemstone treatment affect care?", "acceptedAnswer": { "@type": "Answer", "text": "Some coatings, fillings, dyes and impregnations respond differently to heat, chemicals, abrasion, light or pressure." } },
        { "@type": "Question", "name": "How often should mixed-stone jewellery be inspected?", "acceptedAnswer": { "@type": "Answer", "text": "Inspect it before wear and cleaning. Professional-check frequency should reflect use, setting and the jeweller's advice." } },
        { "@type": "Question", "name": "What should I do if a stone moves?", "acceptedAnswer": { "@type": "Answer", "text": "Stop wearing and cleaning the piece, store it safely and have the setting inspected professionally." } },
        { "@type": "Question", "name": "How should I store a coloured-stone diamond ring?","acceptedAnswer": { "@type": "Answer", "text": "Place it in its own soft-lined compartment so the diamond and metal cannot rub against other jewellery or the coloured stone." } },
        { "@type": "Question", "name": "What information should I give a repair jeweller?", "acceptedAnswer": { "@type": "Answer", "text": "Provide known gemstone identities, treatments, reports, care restrictions and previous repair details before work begins." } }
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
        src: "/images/blog/care-coloured-stones-diamonds/1.jpg",
        alt: "Caring for coloured stones and diamonds together",
        title: "Mixed Gemstone Care Guide",
        caption: "Mixed-stone jewellery should be cared for according to its most sensitive gemstone, treatment and setting.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Diamonds may be exceptionally hard, but a piece of jewellery is only as care-resistant as its most sensitive component. A coloured centre stone may be softer, less tough, heat-sensitive or treated; its setting may also need gentler handling."
      },
      {
        type: "paragraph",
        text: "The safest approach is therefore simple: identify every material and known treatment, inspect the whole piece, and follow the care limit of the most sensitive stone or component."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Before cleaning coloured-stone and diamond jewellery, check the product record or ask the jeweller to identify every stone, treatment and metal. Do not automatically soak it or use an ultrasonic, steam cleaner, alcohol or household chemical. If the seller confirms that a gentle home clean is compatible, use lukewarm water, the specified mild cleanser and a very soft brush or lint-free cloth. Rinse only as advised, dry thoroughly and inspect the setting. Store the piece separately so its diamonds cannot scratch softer gems."
      }
    ]
  },
  {
    heading: "Why mixed-stone jewellery needs a different routine",
    content: [
      {
        type: "table",
        headers: ["Property", "What it means", "Why it matters"],
        rows: [
          ["Hardness", "Resistance to scratching", "A diamond can scratch many coloured stones"],
          ["Toughness", "Resistance to chipping or breaking", "A hard gem can still fracture after an impact"],
          ["Stability", "Response to heat, light and chemicals", "Some gems or treatments can change during cleaning or repair"]
        ]
      },
      {
        type: "paragraph",
        text: "Mohs hardness is not a complete care guide. It does not predict cleavage, inclusions, filling, coatings, porosity or how safely a mounted stone will tolerate vibration and heat."
      }
    ]
  },
  {
    heading: "1. Build an identity and treatment record",
    content: [
      {
        type: "image",
        src: "/images/blog/care-coloured-stones-diamonds/2.jpg",
        alt: "A folder documenting jewelry reports and invoice care specifications",
        title: "Jewelry Care Logs",
        caption: "Documenting exact treatment histories prevents cleaning agent incompatibility errors."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Record gemstone varieties, treatment categories, metal fineness levels, and seller cleaning constraints. For metal details, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "2. Inspect before adding water",
    content: [
      {
        type: "paragraph",
        text: "Confirm prongs are secure, look for chips on facet borders, check hinges, and verify setting gaps. Do not clean pieces with loose stones at home."
      }
    ]
  },
  {
    heading: "3. Use the gentlest confirmed cleaning method",
    content: [
      {
        type: "image",
        src: "/images/blog/care-coloured-stones-diamonds/3.jpg",
        alt: "Wiping behind gemstones with a lint-free soft cloth",
        title: "Gentle Cleaning Steps",
        caption: "Soaking unknown gemstones or using aggressive brushes can damage delicate fillings."
      },
      {
        type: "numbered-list",
        items: [
          "Close the drain or use a separate bowl.",
          "Prepare lukewarm—not hot—water and only the cleanser specified by the seller.",
          "Wipe or lightly brush with a clean, very soft tool, supporting the piece rather than pulling on its setting.",
          "Clean behind the stones gently; residue often collects there.",
          "Rinse only if the care instructions permit it.",
          "Pat dry with a lint-free cloth and allow hidden areas to dry fully.",
          "Reinspect the stones and setting before wearing."
        ]
      }
    ]
  },
  {
    heading: "4. Treat ultrasonic cleaning as professional-only unless approved",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Ultrasonic vibration frequencies can propagate fracture lines or dislodge settings. For certificate checks, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "5. Do not assume steam is safe",
    content: [
      {
        type: "paragraph",
        text: "Rapid thermal expansions (steam pressure) can cause cleavages in sensitive gemstone structures. Always declare treatment details before repair works."
      }
    ]
  },
  {
    heading: "6. Keep household chemicals and cosmetics away",
    content: [
      {
        type: "paragraph",
        text: "Avoid chlorine, bleaches, Sunscreens, perfumes, and abrasive pastes like baking soda. Wear jewelry only after skincare formulas dry."
      }
    ]
  },
  {
    heading: "7. Wear it after the activity, not through it",
    content: [
      {
        type: "paragraph",
        text: "Remove jewelry before intense exercise, manual tasks, and household cleaning. Even diamonds can chip if struck at cleavage points."
      }
    ]
  },
  {
    heading: "8. Store diamonds away from softer stones",
    content: [
      {
        type: "image",
        src: "/images/blog/care-coloured-stones-diamonds/4.jpg",
        alt: "Storing rings separately in padded slots",
        title: "Safe Storage Layout",
        caption: "Keeping diamonds separated from softer materials avoids surface scratching."
      },
      {
        type: "paragraph",
        text: "Utilize separate soft-lined slots, prevent articulated sections from rubbing, and keep chains clear of prongs."
      }
    ]
  },
  {
    heading: "9. Check settings regularly",
    content: [
      {
        type: "paragraph",
        text: "Audit clasps, check for rattling sounds, inspect prong tips, and watch for catches in fabrics. Do not use metal pins to test stone seating."
      }
    ]
  },
  {
    heading: "10. Prepare the piece for professional service",
    content: [
      {
        type: "paragraph",
        text: "Detail stone treatments, origin categories, and previous settings modifications to the servicing goldsmith in writing."
      }
    ]
  },
  {
    heading: "11. Travel with a small care system",
    content: [
      {
        type: "paragraph",
        text: "Pack mixed-stone jewelry in rigid travel organizers with padded dividers. Avoid using general hotel cleaners."
      }
    ]
  },
  {
    heading: "Common mistakes to avoid",
    content: [
      {
        type: "bullet-list",
        items: [
          "Cleaning the piece as though every stone were a diamond.",
          "Assuming natural and laboratory-created versions always have identical care needs.",
          "Using an ultrasonic because one gemstone appears on a generic “safe” list.",
          "Applying boiling water or moving a piece rapidly between temperatures.",
          "Scrubbing with a hard brush or abrasive paste.",
          "Soaking jewellery when treatments, adhesives or construction are unknown.",
          "Storing diamonds in contact with coloured stones.",
          "Hiding treatment information from a repair jeweller.",
          "Continuing to wear a piece after a stone begins to move."
        ]
      }
    ]
  },
  {
    heading: "A practical care checklist",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Before cleaning: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "Identify all stones, treatments, metal and construction.",
          "Read the exact seller instructions.",
          "Inspect the setting and clasp.",
          "Stop if anything is loose, chipped or unknown."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "During cleaning: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "Use only the confirmed method.",
          "Work in a secure bowl or over a closed drain.",
          "Avoid excessive force, heat and prolonged soaking.",
          "Keep ultrasonic and steam cleaning off-limits unless specifically approved."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "After cleaning: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "Dry hidden areas fully.",
          "Recheck every setting.",
          "Store the piece separately.",
          "Record professional cleaning or repair."
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
          { text: "Aurelia Royale provides complete care protocols detailing treatments and cleaning scopes for all pieces. Explore " },
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
            text: "Mixed-stone jewellery should be cared for according to its most sensitive gemstone, treatment and setting.\n\n"
          },
          {
            text: "Identify all gemstones, treatments, and metals first. Avoid boiling temperatures, chemicals, and ultrasonic vibrations. Store pieces separately to prevent diamond-induced scratching."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can coloured stones and diamonds be cleaned together?",
            answer: "Only when one method is confirmed safe for every stone, treatment, metal and setting in the piece. Follow the most sensitive component."
          },
          {
            question: "Can I soak gemstone and diamond jewellery?",
            answer: "Do not soak it unless the seller confirms that the exact materials, treatments and construction tolerate soaking."
          },
          {
            question: "Can I use an ultrasonic cleaner?",
            answer: "Only with explicit professional approval for the exact piece. Vibration can be unsuitable for some stones, treatments and settings."
          },
          {
            question: "Is steam cleaning safe for mixed-stone jewellery?",
            answer: "Not universally. Heat and pressure may affect vulnerable gems, treatments, inclusions or construction."
          },
          {
            question: "Can diamonds scratch coloured gemstones?",
            answer: "Yes. Diamonds are extremely hard and can scratch many coloured stones, so separate storage is important."
          },
          {
            question: "Is mild washing-up liquid always safe?",
            answer: "No universal cleanser is safe for every gemstone, treatment and finish. Use only what the seller or qualified professional recommends."
          },
          {
            question: "Can I clean jewellery with toothpaste or baking soda?",
            answer: "Avoid abrasive household remedies. They may scratch metal, finishes or softer materials and lodge in settings."
          },
          {
            question: "Why does gemstone treatment affect care?",
            answer: "Some coatings, fillings, dyes and impregnations may respond differently to heat, chemicals, abrasion, light or pressure."
          },
          {
            question: "How often should mixed-stone jewellery be inspected?",
            answer: "Inspect it before wear and cleaning. Professional-check frequency should reflect how often it is worn, its setting and the jeweller’s advice."
          },
          {
            question: "What should I do if a stone moves?",
            answer: "Stop wearing and cleaning the piece. Store it safely and have the setting inspected professionally."
          },
          {
            question: "How should I store a coloured-stone diamond ring?",
            answer: "Place it in its own soft-lined compartment so the diamond and metal cannot rub against other jewellery or the coloured stone."
          },
          {
            question: "What information should I give a repair jeweller?",
            answer: "Provide all known gemstone identities, treatments, reports, care restrictions and previous repair details before work begins."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Maintain Lifetime Luxury",
        subtitle: "Aurelia Royale provides custom cleaning kits and professional maintenance schedules tailored for mixed gemstones. Contact our care team.",
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
            How to Care for Coloured Stones and Diamonds Together
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
