import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Prevent Jewellery from Scratching",
  description: "Prevent scratches on diamond, gold and coloured-stone jewellery with safer wearing, cleaning and storage habits—and learn when to seek repair.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/",
  },
};

// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/#article",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/" },
      "headline": "How to Prevent Jewellery from Scratching",
      "description": "Prevent scratches on diamond, gold and coloured-stone jewellery with safer wearing, cleaning and storage habits—and learn when to seek repair.",
      "image": "https://www.aureliaroyale.com/images/blog/prevent-jewellery-scratches.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" } },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["how to prevent jewellery from scratching", "prevent jewellery scratches", "protect diamond jewellery", "stop rings scratching"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How to Prevent Jewellery from Scratching", "item": "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can diamond jewellery get scratched?", "acceptedAnswer": { "@type": "Answer", "text": "The diamond is highly scratch resistant, but another diamond can scratch it. Its metal, setting and any softer gemstones can be marked more easily." } },
        { "@type": "Question", "name": "Can diamonds scratch gold or platinum?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Diamond is harder than jewellery metals and can mark them when the surfaces rub." } },
        { "@type": "Question", "name": "How do I stop rings from scratching each other?", "acceptedAnswer": { "@type": "Answer", "text": "Check where stones, prongs and bands meet. Separate incompatible rings or ask a jeweller whether a suitable fitted spacer is appropriate." } },
        { "@type": "Question", "name": "Does stacking rings cause scratches?", "acceptedAnswer": { "@type": "Answer", "text": "It can. Repeated contact may mark metal and wear settings, especially when diamonds or prongs touch a neighbouring band." } },
        { "@type": "Question", "name": "Should I wear a diamond bracelet beside a watch?", "acceptedAnswer": { "@type": "Answer", "text": "Only if the pieces do not collide. A hard watch case or clasp may repeatedly contact the bracelet, so separate wrists are often safer." } },
        { "@type": "Question", "name": "Can a polishing cloth remove jewellery scratches?", "acceptedAnswer": { "@type": "Answer", "text": "A standard clean cloth removes residue, not structural scratches. Treated cloths should be used only when approved for the specific finish." } },
        { "@type": "Question", "name": "Does toothpaste remove scratches from jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Do not use it. Toothpaste can be abrasive and may damage metal, coatings, gemstones and settings." } },
        { "@type": "Question", "name": "Is scratched gold jewellery normal?", "acceptedAnswer": { "@type": "Answer", "text": "Fine surface marks can develop through normal wear. Deep grooves, deformation or scratches near settings require assessment." } },
        { "@type": "Question", "name": "Can scratched jewellery be polished repeatedly?", "acceptedAnswer": { "@type": "Answer", "text": "Repeated refinishing can change contours and remove surface material or plating, so a jeweller should decide when it is appropriate." } },
        { "@type": "Question", "name": "How should jewellery be stored to prevent scratches?", "acceptedAnswer": { "@type": "Answer", "text": "Keep each piece in its own clean, padded compartment, fitted box or individual soft pouch so pieces cannot touch." } },
        { "@type": "Question", "name": "Can dust scratch jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Dust or grit may contain hard mineral particles. Use clean tools and storage lining, and do not rub a visibly gritty surface." } },
        { "@type": "Question", "name": "When should a scratched piece go to a jeweller?", "acceptedAnswer": { "@type": "Answer", "text": "Seek assessment when a mark is deep, affects a setting or clasp, accompanies deformation, or appears beside a loose or chipped stone." } }
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
        text: "Fine jewellery is made to be worn, so a completely mark-free surface is not a realistic lifetime promise. Polished metals gradually develop signs of wear, while gemstones differ greatly in their resistance to scratching. The useful goal is to prevent avoidable damage without treating every minor surface mark as a defect."
      },
      {
        type: "paragraph",
        text: "The biggest improvements come from controlling contact: choose jewellery suited to the activity, prevent pieces from rubbing, keep grit away from cleaning cloths and give every item its own padded storage space."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Prevent jewellery from scratching by removing it before exercise, gardening, cleaning, swimming and hands-on work; avoiding contact between rings and bracelets; handling pieces over a soft, clean surface; cleaning only with material-approved tools; and storing every item separately in a padded compartment or individual pouch. Diamonds can scratch metals, coloured stones and other diamonds, so never place diamond jewellery loose with other pieces. If a scratch is deep, catches a fingernail, affects a setting or accompanies a loose stone, ask a qualified jeweller to inspect it rather than polishing it at home."
      }
    ]
  },
  {
    heading: "Why jewellery scratches",
    content: [
      {
        type: "paragraph",
        text: "Common causes of scratching include:"
      },
      {
        type: "bullet-list",
        items: [
          "rings rubbing against neighbouring rings;",
          "bracelets contacting desks and watch cases;",
          "diamonds touching gold, platinum or softer gemstones;",
          "jewellery being dropped together in a dish or pouch;",
          "grit trapped in cloths, brushes or storage lining;",
          "abrasive household cleaners and improvised polishing methods; and",
          "wearing delicate pieces during high-contact activities."
        ]
      }
    ]
  },
  {
    heading: "Hardness is not the same as toughness",
    content: [
      {
        type: "table",
        headers: ["Term", "What it means", "Why it matters"],
        rows: [
          ["Hardness", "Resistance to scratching and abrasion", "A harder gem can scratch a softer one"],
          ["Toughness", "Resistance to breaking and chipping", "A hard stone may still be vulnerable to impact"],
          ["Stability", "Response to heat, light and chemicals", "Care methods must suit the complete material set"]
        ]
      }
    ]
  },
  {
    heading: "Can diamonds scratch other jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Diamonds can scratch other diamonds, metals and coloured gems. Keep exposed edges isolated."
      }
    ]
  },
  {
    heading: "1. Match the jewellery to the activity",
    content: [
      {
        type: "paragraph",
        text: "Remove fine jewellery before:"
      },
      {
        type: "bullet-list",
        items: [
          "strength training, sport and exercise;",
          "gardening and DIY;",
          "moving furniture or luggage;",
          "household cleaning;",
          "cooking that involves hard tools, grease or dough;",
          "showering, swimming and hot tubs; and",
          "sleeping when the design can catch or rub."
        ]
      }
    ]
  },
  {
    heading: "2. Prevent jewellery from rubbing against jewellery",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Ring stacks: ", bold: true }, { text: "Verify that bands or stone seats do not collide sideways when stacked." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Bracelets and watches: ", bold: true }, { text: "Avoid stacks that let links rub watch cases or clasps." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Necklaces: ", bold: true }, { text: "Keep layered chains separated to avoid knots or pendant rubbing." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Earrings: ", bold: true }, { text: "Audit layouts to ensure backs or ear cuffs do not touch adjacent settings." }]
      }
    ]
  },
  {
    heading: "3. Handle jewellery over a soft, clean surface",
    content: [
      {
        type: "paragraph",
        text: "Put on and remove items over dresser trays or soft towels. Avoid dropping on hard stone tiles."
      }
    ]
  },
  {
    heading: "4. Keep grit away from cleaning tools",
    content: [
      {
        type: "numbered-list",
        items: [
          "Inspect the piece for loose stones or lifted prongs.",
          "Confirm the cloth and method suit every material.",
          "Use a genuinely clean, lint-free or microfibre cloth.",
          "Apply light pressure rather than repeated hard rubbing.",
          "Stop if the cloth catches or the surface contains visible grit."
        ]
      }
    ]
  },
  {
    heading: "5. Put jewellery on last and remove it first",
    content: [
      {
        type: "paragraph",
        text: "Apply skincare lotions and fragrances first. Put jewelry on last to avoid snagging threads."
      }
    ]
  },
  {
    heading: "6. Store every piece separately",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Use individual slotted sections or anti-tarnish rolls. See guidelines at " },
          { text: "how to store diamond jewellery properly", href: "/blog/store-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "7. Protect jewellery while travelling",
    content: [
      {
        type: "paragraph",
        text: "Use structured travel compartments. Before closing bags, ensure:"
      },
      {
        type: "bullet-list",
        items: [
          "chains and bracelets are fastened;",
          "exposed earring posts are covered;",
          "raised settings are supported;",
          "dividers cannot shift; and",
          "the case is kept in carry-on baggage."
        ]
      }
    ]
  },
  {
    heading: "Scratch prevention by material",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Gold jewellery: ", bold: true }, { text: "Alloys protect gold, but scratches still occur. Limit excessive polishing." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Platinum jewellery: ", bold: true }, { text: "Platinum moves rather than wearing away, forming patinas. Seek professional polishing when desired." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Plated or coated jewellery: ", bold: true }, { text: "Avoid abrasive chemical cleansers to keep rhodium plating thick." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Diamond jewellery: ", bold: true }, { text: "Prevent diamonds from scraping adjacent stones or bands." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Coloured-stone jewellery: ", bold: true }, { text: "Sapphires, pearls, and opals are softer than diamonds. Protect them accordingly." }]
      }
    ]
  },
  {
    heading: "Are small surface marks normal?",
    content: [
      {
        type: "paragraph",
        text: "Fine lines on shanks develop through daily wear. A tiny light mark is not a structural fault."
      }
    ]
  },
  {
    heading: "Can scratches be removed at home?",
    content: [
      {
        type: "paragraph",
        text: "Avoid toothpaste or rotary wheels. A professional jeweller should decide whether to:"
      },
      {
        type: "bullet-list",
        items: [
          "take no action;",
          "clean only;",
          "perform controlled polishing or refinishing;",
          "replate rhodium layerings;",
          "conduct laser repair fillings;",
          "assess stones; or",
          "repair settings before cosmetic work."
        ]
      }
    ]
  },
  {
    heading: "When a scratch needs professional assessment",
    content: [
      {
        type: "paragraph",
        text: "Seek inspection immediately if:"
      },
      {
        type: "bullet-list",
        items: [
          "the mark catches a fingernail;",
          "it crosses a prong, bezel, hinge or clasp;",
          "a stone moves or rattles;",
          "a diamond or coloured stone appears chipped;",
          "plating has visibly broken;",
          "the ring or bracelet has changed shape;",
          "the piece snags after the incident; or",
          "the material or treatment is unknown."
        ]
      }
    ]
  },
  {
    heading: "Common scratch-prevention mistakes",
    content: [
      {
        type: "bullet-list",
        items: [
          "Believing diamond jewellery cannot be damaged.",
          "Wearing rings for weights, gardening or cleaning.",
          "Letting a diamond ring rub against another band.",
          "Stacking a bracelet beside a hard watch case.",
          "Using one pouch for several pieces.",
          "Wiping jewellery with a dusty cloth or clothing.",
          "Using toothpaste or abrasive DIY remedies.",
          "Over-polishing normal signs of wear.",
          "Applying one care method to every coloured stone.",
          "Ignoring a scratch near a setting or clasp."
        ]
      }
    ]
  },
  {
    heading: "Daily scratch-prevention checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Choose jewellery suitable for today’s activity.",
          "Check that stacked pieces do not touch destructively.",
          "Put jewellery on after products have dried.",
          "Remove it before physical, wet or chemical-heavy work.",
          "Handle it over a clean, soft surface.",
          "Use only clean, approved care tools.",
          "Inspect settings before storage.",
          "Give every piece its own padded space.",
          "Seek professional advice for deep or structural marks."
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
          { text: "Aurelia Royale specifies alloy structures and stone varieties clearly. Browse catalog at " },
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
            text: "Most jewellery scratches arise from repeated contact—with other pieces, hard surfaces, grit or unsuitable cleaning materials.\n\n"
          },
          {
            text: "These practical habits reduce avoidable wear. Match jewelry to physical tasks, avoid stack collisions, use clean microfibre cloths, and seek professional polishing."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can diamond jewellery get scratched?",
            answer: "The diamond is highly scratch resistant, but another diamond can scratch it. Its metal, setting and any softer gemstones can be marked more easily."
          },
          {
            question: "Can diamonds scratch gold or platinum?",
            answer: "Yes. Diamond is harder than jewellery metals and can mark them when the surfaces rub."
          },
          {
            question: "How do I stop rings from scratching each other?",
            answer: "Check where stones, prongs and bands meet. Separate incompatible rings or ask a jeweller whether a suitable fitted spacer is appropriate."
          },
          {
            question: "Does stacking rings cause scratches?",
            answer: "It can. Repeated contact may mark metal and wear settings, especially when diamonds or prongs touch a neighbouring band."
          },
          {
            question: "Should I wear a diamond bracelet beside a watch?",
            answer: "Only if the pieces do not collide. A hard watch case or clasp may repeatedly contact the bracelet, so separate wrists are often safer."
          },
          {
            question: "Can a polishing cloth remove jewellery scratches?",
            answer: "A standard clean cloth removes residue, not structural scratches. Treated cloths should be used only when approved for the specific finish."
          },
          {
            question: "Does toothpaste remove scratches from jewellery?",
            answer: "Do not use it. Toothpaste can be abrasive and may damage metal, coatings, gemstones and settings."
          },
          {
            question: "Is scratched gold jewellery normal?",
            answer: "Fine surface marks can develop through normal wear. Deep grooves, deformation or scratches near settings require assessment."
          },
          {
            question: "Can scratched jewellery be polished repeatedly?",
            answer: "Repeated refinishing can change contours and remove surface material or plating, so a jeweller should decide when it is appropriate."
          },
          {
            question: "How should jewellery be stored to prevent scratches?",
            answer: "Keep each piece in its own clean, padded compartment, fitted box or individual soft pouch so pieces cannot touch."
          },
          {
            question: "Can dust scratch jewellery?",
            answer: "Dust or grit may contain hard mineral particles. Use clean tools and storage lining, and do not rub a visibly gritty surface."
          },
          {
            question: "When should a scratched piece go to a jeweller?",
            answer: "Seek assessment when a mark is deep, affects a setting or clasp, accompanies deformation, or appears beside a loose or chipped stone."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Restore Polished Finishes",
        subtitle: "Aurelia Royale offers rhodium replating and structural claw tightenings at our london workshop. Contact our specialists.",
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
            How to Prevent Jewellery from Scratching
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
      <RelatedArticles currentSlug="prevent-jewellery-scratches" />
      <NewsletterSection />
    </main>
  );
}
