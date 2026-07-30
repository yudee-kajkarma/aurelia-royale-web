import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Store Diamond Jewellery Properly",
  description: "Learn how to store diamond rings, earrings, necklaces and bracelets safely using separate, padded spaces that prevent scratches and tangles.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/store-diamond-jewellery/",
  },
};

// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/store-diamond-jewellery/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/store-diamond-jewellery/"
      },
      "headline": "How to Store Diamond Jewellery Properly",
      "description": "Learn how to store diamond rings, earrings, necklaces and bracelets safely using separate, padded spaces that prevent scratches and tangles.",
      "image": "https://www.aureliaroyale.com/images/blog/store-diamond-jewellery-featured.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": {
        "@type": "Organization",
        "name": "Aurelia Royale",
        "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" }
      },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["how to store diamond jewellery properly", "diamond jewellery storage", "store diamond rings", "jewellery box for diamonds"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/store-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How to Store Diamond Jewellery Properly", "item": "https://www.aureliaroyale.com/blog/store-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/store-diamond-jewellery/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Should diamond jewellery be stored separately?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Give each piece its own padded compartment, fitted box or soft pouch so the diamond cannot scratch other gemstones, metal or another diamond." } },
        { "@type": "Question", "name": "Can diamonds scratch each other in a jewellery box?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Contact between diamonds can damage polished surfaces or vulnerable edges, so they should be physically separated." } },
        { "@type": "Question", "name": "Is the original jewellery box good for storage?", "acceptedAnswer": { "@type": "Answer", "text": "Usually, provided it is clean, undamaged and holds the piece securely without pressure." } },
        { "@type": "Question", "name": "Can I put several diamond pieces in one pouch?", "acceptedAnswer": { "@type": "Answer", "text": "No. Use one pouch per piece or separate fitted compartments because a shared pouch allows pieces to rub." } },
        { "@type": "Question", "name": "Should jewellery be cleaned before storage?", "acceptedAnswer": { "@type": "Answer", "text": "Remove residue using the approved method when needed and ensure the jewellery is completely dry before closing the box." } },
        { "@type": "Question", "name": "Can diamond rings be stored together?", "acceptedAnswer": { "@type": "Answer", "text": "They can share a box only when separate firm slots prevent all contact. Do not stack them loosely." } },
        { "@type": "Question", "name": "How should I store diamond stud earrings?", "acceptedAnswer": { "@type": "Answer", "text": "Place each stud in its own padded position and ensure its post cannot scratch another item." } },
        { "@type": "Question", "name": "Should necklaces be hung or laid flat?", "acceptedAnswer": { "@type": "Answer", "text": "Either can work when the necklace is supported and isolated; fine or heavy-pendant necklaces often suit a padded flat channel." } },
        { "@type": "Question", "name": "Can diamond jewellery be stored in a bathroom?", "acceptedAnswer": { "@type": "Answer", "text": "A stable indoor space away from persistent humidity, cosmetics, chemicals, sinks and drains is more suitable." } },
        { "@type": "Question", "name": "Should I store jewellery in an airtight bag?", "acceptedAnswer": { "@type": "Answer", "text": "Only if that packaging is recommended for every material in the piece, because different gemstones and metals have different needs." } },
        { "@type": "Question", "name": "Where should diamond certificates be stored?", "acceptedAnswer": { "@type": "Answer", "text": "Keep reports, receipts, photographs and insurance records securely, preferably separate from the jewellery." } },
        { "@type": "Question", "name": "How often should stored jewellery be checked?", "acceptedAnswer": { "@type": "Answer", "text": "Check stored pieces periodically and before wear for changes in the setting, clasp, surface and storage lining." } }
      ]
    }
  ]
};

// 3. Article content sections structured for DynamicArticle (Without images)
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "paragraph",
        text: "Diamond is exceptionally hard, but diamond jewellery is not indestructible. A loose pile in a drawer allows hard stones, polished metal, delicate settings and chains to rub against one another. The result may be scratched jewellery, tangled chains, bent prongs or missing earring backs."
      },
      {
        type: "paragraph",
        text: "Correct storage is simple: inspect the piece, remove compatible surface residue, let it dry fully and place it in its own clean, soft-lined space. The exact arrangement should suit the jewellery type and every material in the design—not only the diamond."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Store diamond jewellery separately in its original box, an individual soft pouch or a jewellery box with padded compartments. Do not let diamonds touch other diamonds, coloured stones, pearls or metal surfaces. Fasten chains and bracelets, place rings in individual slots, secure earring backs and keep every piece clean and completely dry before storage. Choose a stable indoor location away from bathrooms, direct sunlight, heat and household chemicals. Keep certificates, photographs and purchase records securely, preferably apart from the jewellery."
      }
    ]
  },
  {
    heading: "Why diamond jewellery needs separate storage",
    content: [
      {
        type: "paragraph",
        text: "Avoid dumping jewelry into shared trays. Physical separation protects settings from damage:"
      },
      {
        type: "bullet-list",
        items: [
          "prongs and bezels can bend or catch;",
          "polished metal can acquire surface marks;",
          "a diamond can scratch a softer coloured stone;",
          "two diamonds can abrade vulnerable edges when they move together;",
          "chains can knot around settings and clasps; and",
          "posts can mark nearby jewellery or pierce a soft pouch."
        ]
      }
    ]
  },
  {
    heading: "The five-step storage routine",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "1. Inspect before putting jewellery away: ", bold: true }, { text: "Verify prong positions under bright lights. Isolate the item if stones rattle." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "2. Remove light surface residue safely: ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Wipe with microfibre cloths. See routine parameters at " },
          { text: "how to clean lab-grown diamond jewellery", href: "/blog/clean-lab-grown-diamond-jewellery/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "3. Let it dry completely: ", bold: true }, { text: "Never store damp parts. Closed moisture creates mildew risks." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "4. Fasten and support the design: ", bold: true }, { text: "Link chains flat in long paths. Do not fold flexible lines sharply." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "5. Give it an individual padded space: ", bold: true }, { text: "Place in original boxes or lined pouches. Avoid overlapping layouts." }]
      }
    ]
  },
  {
    heading: "Choosing a jewellery box for diamonds",
    content: [
      {
        type: "table",
        headers: ["Feature", "Why it matters"],
        rows: [
          ["Individual padded compartments", "Prevents stone-to-stone and stone-to-metal contact"],
          ["Firm ring rolls", "Holds rings upright without loose stacking"],
          ["Separate earring positions", "Keeps posts, backs and settings from rubbing"],
          ["Necklace hooks or flat channels", "Reduces tangles and protects pendants"],
          ["Soft, clean lining", "Cushions polished surfaces and settings"],
          ["Secure closure", "Limits dust and accidental spills"],
          ["Enough space", "Avoids compression and overcrowding"]
        ]
      }
    ]
  },
  {
    heading: "How to store diamond rings",
    content: [
      {
        type: "paragraph",
        text: "Store shanks vertically in rolls. Do not:"
      },
      {
        type: "bullet-list",
        items: [
          "stack several diamond rings loosely;",
          "force a wide band into a narrow roll;",
          "store a ring beneath heavier jewellery; or",
          "leave it beside a sink as a temporary habit."
        ]
      }
    ]
  },
  {
    heading: "How to store diamond earrings",
    content: [
      {
        type: "paragraph",
        text: "Mount in slotted grids or cards. Isolate left and right components from contact while storing."
      }
    ]
  },
  {
    heading: "How to store diamond necklaces and pendants",
    content: [
      {
        type: "numbered-list",
        items: [
          "Close the clasp.",
          "Lay the chain in a gentle line or curve.",
          "Keep the pendant centred and supported.",
          "Ensure no chain crosses the divider or lid hinge."
        ]
      }
    ]
  },
  {
    heading: "How to store diamond bracelets",
    content: [
      {
        type: "paragraph",
        text: "Lay bracelets flat in individual long boxes. Avoid wrapping rigid bangles together without partitions."
      }
    ]
  },
  {
    heading: "What about jewellery sets?",
    content: [
      {
        type: "paragraph",
        text: "Keep pieces together in organizational trays, but separate necklaces from earrings physically to protect settings."
      }
    ]
  },
  {
    heading: "Choose a stable storage location",
    content: [
      {
        type: "paragraph",
        text: "Keep wardrobes dry. Avoid humid bathrooms, hot lofts, direct sun lines, and chemical cupboards."
      }
    ]
  },
  {
    heading: "Storage advice for coloured-stone diamond jewellery",
    content: [
      {
        type: "paragraph",
        text: "Store items matching the requirements of the most sensitive gem component. Check:"
      },
      {
        type: "bullet-list",
        items: [
          "the identity of every gemstone;",
          "whether any stone is treated or coated;",
          "the metal and surface finish;",
          "the recommended cleaning method; and",
          "any temperature, light or humidity precautions."
        ]
      }
    ]
  },
  {
    heading: "Keep records separate and organised",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Keep laboratory reports separate from jewelry safes. For report scopes, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Everyday storage versus long-term storage",
    content: [
      {
        type: "table",
        headers: ["Situation", "Recommended approach"],
        rows: [
          ["Overnight", "Individual padded compartment in a secure, consistent location"],
          ["Between occasional wears", "Clean, fully dry, covered and separated"],
          ["Long-term", "Inspect first; use material-appropriate packaging; schedule periodic checks"],
          ["Travel", "Purpose-made padded travel case; each piece isolated"],
          ["Damaged piece", "Label, isolate and arrange professional assessment"]
        ]
      }
    ]
  },
  {
    heading: "Common diamond jewellery storage mistakes",
    content: [
      {
        type: "bullet-list",
        items: [
          "Dropping several pieces into one pouch.",
          "Stacking diamond rings in a dish.",
          "Leaving jewellery uncovered on a bedside table.",
          "Storing damp pieces after cleaning.",
          "Hanging a heavy pendant from a delicate chain.",
          "Folding a flexible bracelet sharply.",
          "Using cotton wool or fibrous material around exposed prongs.",
          "Keeping jewellery beside perfume or cleaning products.",
          "Assuming every gemstone likes an extremely dry environment.",
          "Packing certificates in the same case as the jewellery.",
          "Hiding jewellery so effectively that records and insurance are never updated."
        ]
      }
    ]
  },
  {
    heading: "Diamond jewellery storage checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "No obvious loose stone or damaged component.",
          "Compatible surface residue has been removed.",
          "The jewellery is completely dry.",
          "Chains and bracelets are fastened.",
          "Every item has its own padded space.",
          "No diamond touches another jewel or metal surface.",
          "The box is clean, uncrowded and securely closed.",
          "The location is stable and away from chemicals, heat and direct light.",
          "Reports and ownership records are stored securely elsewhere."
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
          { text: "Aurelia Royale structures packaging elements to keep settings isolated. Review options at " },
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
            text: "Give every diamond jewellery piece its own clean, padded space.\n\n"
          },
          {
            text: "Correct storage is simple: inspect the piece, remove residue, let it dry fully, and isolate it from contact. Protect chains from tangling and store certificates elsewhere."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Should diamond jewellery be stored separately?",
            answer: "Yes. Each piece should have its own padded compartment, fitted box or soft pouch so the diamond cannot scratch other gemstones, metal or another diamond."
          },
          {
            question: "Can diamonds scratch each other in a jewellery box?",
            answer: "Yes. Although diamond is extremely scratch resistant, contact between diamonds can damage polished surfaces or vulnerable edges. Keep them physically separated."
          },
          {
            question: "Is the original jewellery box good for storage?",
            answer: "Usually, if it is clean, undamaged and holds the piece securely without pressure. Replace it if the lining deteriorates or the jewellery no longer fits after alteration."
          },
          {
            question: "Can I put several diamond pieces in one pouch?",
            answer: "No. A single pouch does not prevent the pieces from rubbing. Use one pouch per piece or separate fitted compartments."
          },
          {
            question: "Should jewellery be cleaned before storage?",
            answer: "Remove light residue using the method approved for the complete piece. For longer storage, clean when needed and make certain the jewellery is fully dry before closing the box."
          },
          {
            question: "Can diamond rings be stored together?",
            answer: "They may sit in the same jewellery box only when separate firm slots prevent contact. Do not stack them loosely."
          },
          {
            question: "How should I store diamond stud earrings?",
            answer: "Place each stud in its own padded position, keep the correct backs nearby and ensure the exposed posts cannot scratch another item."
          },
          {
            question: "Should necklaces be hung or laid flat?",
            answer: "Either can work when the design is supported and isolated. Fine or heavy-pendant necklaces often benefit from a padded flat channel; suitable lighter chains may use dedicated hooks."
          },
          {
            question: "Can diamond jewellery be stored in a bathroom?",
            answer: "It is better to use a stable indoor location away from persistent humidity, cosmetics and cleaning products. Bathrooms also create a higher risk of loss near sinks and drains."
          },
          {
            question: "Should I store jewellery in an airtight bag?",
            answer: "Only when the packaging is recommended for every material in the piece. Some metals benefit from anti-tarnish storage, while pearls, opals and other materials can have different environmental needs."
          },
          {
            question: "Where should diamond certificates be stored?",
            answer: "Keep grading reports, receipts, photographs and insurance records securely, preferably in a location separate from the jewellery. Maintain protected digital copies as well."
          },
          {
            question: "How often should stored jewellery be checked?",
            answer: "Check occasion and long-term stored pieces periodically and before wearing them. Look for changes in the setting, clasp, stringing, surface and storage lining."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Secure Your Keepsakes",
        subtitle: "Aurelia Royale ships every design in premium travel pouches and presentation cases lined with anti-tarnish fabrics. Shop now.",
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
            Jewellery Care and Maintenance
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Store Diamond Jewellery Properly
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
