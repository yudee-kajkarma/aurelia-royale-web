import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Can Perfume or Skincare Damage Diamond Jewellery?",
  description: "Perfume, lotion, sunscreen and hairspray can dull diamonds or affect sensitive jewellery materials. Learn the correct order for products and jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/perfume-skincare-diamond-jewellery/",
  },
};

// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/perfume-skincare-diamond-jewellery/#article",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/perfume-skincare-diamond-jewellery/" },
      "headline": "Can Perfume or Skincare Products Damage Diamond Jewellery?",
      "description": "Perfume, lotion, sunscreen and hairspray can dull diamonds or affect sensitive jewellery materials. Learn the correct order for products and jewellery.",
      "image": "https://www.aureliaroyale.com/images/blog/perfume-skincare-diamond-jewellery.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" } },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["can perfume damage diamond jewellery", "skincare damage jewellery", "lotion diamond ring", "sunscreen diamond jewellery"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/perfume-skincare-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Can Perfume or Skincare Products Damage Diamond Jewellery?", "item": "https://www.aureliaroyale.com/blog/perfume-skincare-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/perfume-skincare-diamond-jewellery/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can perfume damage diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Perfume is unlikely to harm an untreated diamond directly, but it can leave film and may damage pearls, porous stones, treatments, plating or other components." } },
        { "@type": "Question", "name": "Does lotion make diamonds look dull?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Oils and creams can coat diamond facets and collect beneath settings, reducing visible sparkle until correctly cleaned." } },
        { "@type": "Question", "name": "Should jewellery go on before or after perfume?", "acceptedAnswer": { "@type": "Answer", "text": "After. Apply perfume first, allow it to dry fully and then put jewellery on." } },
        { "@type": "Question", "name": "Can sunscreen damage diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Sunscreen commonly creates residue and can make jewellery slippery. Other materials may have additional sensitivities, so remove jewellery during application." } },
        { "@type": "Question", "name": "Can hairspray damage diamond earrings?", "acceptedAnswer": { "@type": "Answer", "text": "Hairspray may leave film on diamonds and metal, and it can harm sensitive materials such as pearls. Style hair before adding earrings." } },
        { "@type": "Question", "name": "Does hand cream damage a diamond ring?", "acceptedAnswer": { "@type": "Answer", "text": "It usually coats the diamond rather than damaging it, but residue can pack into the setting and the complete piece may contain vulnerable materials." } },
        { "@type": "Question", "name": "Can make-up damage jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Make-up can leave residue, while some delicate or porous stones and finishes may be affected. Complete make-up before jewellery." } },
        { "@type": "Question", "name": "Is hand sanitiser safe for diamond rings?", "acceptedAnswer": { "@type": "Answer", "text": "Formulations and jewellery materials vary. Avoid direct exposure where secure removal is practical, but never compromise necessary hand hygiene." } },
        { "@type": "Question", "name": "Can perfume damage gold or platinum?", "acceptedAnswer": { "@type": "Answer", "text": "The response depends on the alloy, finish and formulation. Avoid direct spray and seek advice if the surface changes." } },
        { "@type": "Question", "name": "How do I remove lotion from diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Inspect the setting and use only the cleaning method approved for every material. Do not use toothpaste, strong solvents or sharp tools." } },
        { "@type": "Question", "name": "Are lab-grown diamonds affected by skincare differently?", "acceptedAnswer": { "@type": "Answer", "text": "No. Lab-grown and natural diamonds share the relevant properties. The complete jewellery construction determines care." } },
        { "@type": "Question", "name": "What should I do if perfume gets on pearl-and-diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Blot gently without rubbing and seek material-specific advice. Do not soak or use alcohol because pearl surfaces are chemically sensitive." } }
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
        text: "Perfume, moisturiser, sunscreen, make-up and hairspray can affect jewellery—but not always in the same way. On an untreated diamond, the most common result is a film that reduces visible sparkle. On pearls, porous coloured stones, treated gems, plating or specialist finishes, chemical exposure may cause more serious or lasting change."
      },
      {
        type: "paragraph",
        text: "The safest daily habit is simple: apply products first, allow them to dry, then put jewellery on last. At the end of the day, remove jewellery before cleansing or applying night-time skincare."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Avoid spraying perfume, hairspray or cosmetics directly onto diamond jewellery, and remove rings and bracelets before applying lotion, hand cream or sunscreen. These products can coat a diamond and make it look dull; repeated residue may gather beneath stones and around prongs. The diamond itself is chemically resistant, but the complete piece may include alloyed metal, plating, coatings, adhesives, pearls or coloured stones that react differently. Apply products first, let them dry, put jewellery on last and clean only by the method approved for every material in the design."
      }
    ]
  },
  {
    heading: "Temporary film versus actual material damage",
    content: [
      {
        type: "table",
        headers: ["Outcome", "Typical sign", "Appropriate response"],
        rows: [
          ["Surface residue", "Dullness, greasy film, build-up behind stone", "Approved gentle cleaning after setting inspection"],
          ["Material change", "Discolouration, etched or worn surface, altered pearl lustre, damaged coating", "Stop DIY cleaning and seek professional advice"]
        ]
      }
    ]
  },
  {
    heading: "Why lotion makes diamonds look dull",
    content: [
      {
        type: "paragraph",
        text: "Creams form greasy films that block facet scintillation. Common collection points include:"
      },
      {
        type: "bullet-list",
        items: [
          "the table and crown of rings touched during application;",
          "the pavilion and gallery beneath a centre stone;",
          "pavé recesses;",
          "earring backs and posts;",
          "pendant surfaces resting against moisturised skin; and",
          "bracelet links exposed to hand cream or sunscreen."
        ]
      }
    ]
  },
  {
    heading: "Can perfume damage diamond jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Fragrance alcohols degrade backing foils or adhesive mounts. Spray perfumes on skin before dressing."
      }
    ]
  },
  {
    heading: "Can skincare damage a diamond ring?",
    content: [
      {
        type: "paragraph",
        text: "Lotion buildup blocks claw prongs. Skincare exposure risks include:"
      },
      {
        type: "bullet-list",
        items: [
          "cream can pack beneath a raised setting;",
          "abrasive particles in some products may mark metal finishes;",
          "active or acidic formulations may be unsuitable for certain gemstones;",
          "repeated rubbing may affect plating or coatings; and",
          "a greasy ring can slip during removal or handwashing."
        ]
      }
    ]
  },
  {
    heading: "What about sunscreen?",
    content: [
      {
        type: "paragraph",
        text: "Sunscreen oils create heavy clouds on diamond crowns. Apply sunscreen first and remove rings during application."
      }
    ]
  },
  {
    heading: "Can hairspray damage earrings or necklaces?",
    content: [
      {
        type: "paragraph",
        text: "Aerosols coat earring details. Complete hair styling before adding ear studs or necklaces."
      }
    ]
  },
  {
    heading: "Make-up and jewellery",
    content: [
      {
        type: "paragraph",
        text: "Face powders mix with oils, packing prongs. Put on necklaces only after makeup dries."
      }
    ]
  },
  {
    heading: "Hand sanitiser and hand cream",
    content: [
      {
        type: "paragraph",
        text: "When sanitizing hand areas, adopt this procedure:"
      },
      {
        type: "numbered-list",
        items: [
          "Remove the ring if a secure storage point is available.",
          "Use the hygiene product as directed.",
          "Allow hands to dry completely.",
          "Put the ring back on without touching the diamond."
        ]
      }
    ]
  },
  {
    heading: "The correct order: products first, jewellery last",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Morning: ", bold: true }]
      },
      {
        type: "numbered-list",
        items: [
          "Shower and dry.",
          "Apply skincare and sunscreen.",
          "Complete make-up and hair styling.",
          "Apply perfume.",
          "Allow products to dry or settle.",
          "Wash and dry hands if needed.",
          "Put on jewellery last."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "Evening: ", bold: true }]
      },
      {
        type: "numbered-list",
        items: [
          "Remove jewellery first over a soft, secure surface.",
          "Inspect and wipe compatible pieces with an approved clean cloth.",
          "Store each piece separately.",
          "Remove make-up and apply evening skincare."
        ]
      }
    ]
  },
  {
    heading: "Risk by jewellery category",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Rings: ", bold: true }, { text: "Rings meet lotions directly. Keep shanks clear by removing rings before cosmetic use." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Earrings: ", bold: true }, { text: "Ear posts collect hairspray droplets. Put earrings on last." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Necklaces and pendants: ", bold: true }, { text: "Let neck lotions dry fully before resting pendants against skin." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Bracelets: ", bold: true }, { text: "Sunscreen accumulates between flexible bracelet links." }]
      }
    ]
  },
  {
    heading: "Metals, finishes and plating",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Avoid harsh alcohol pads on rhodium overlays. Check checklist points at " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Coloured stones, pearls and mixed designs",
    content: [
      {
        type: "paragraph",
        text: "Organic pearls suffer chemical erosion from perfume. Before applying products near mixed designs, check:"
      },
      {
        type: "bullet-list",
        items: [
          "every gemstone;",
          "treatments, dye or coating;",
          "metal and finish;",
          "pearl, enamel or organic components; and",
          "any adhesive-set decoration."
        ]
      }
    ]
  },
  {
    heading: "What to do after accidental product exposure",
    content: [
      {
        type: "numbered-list",
        items: [
          "Remove the jewellery over a soft, secure surface.",
          "Blot—do not rub—any visible liquid with the approved lint-free material.",
          "Inspect for loose stones, surface changes or damaged components.",
          "Check care instructions for every material.",
          "Use the approved cleaning method only if the piece is structurally secure.",
          "Dry fully before storage.",
          "Seek professional advice for perfume exposure on pearls, porous stones, coatings or unknown treatments."
        ]
      }
    ]
  },
  {
    heading: "When residue needs professional cleaning",
    content: [
      {
        type: "paragraph",
        text: "Seek jeweler checks if:"
      },
      {
        type: "bullet-list",
        items: [
          "build-up is packed beneath inaccessible stones;",
          "one approved gentle clean does not restore the baseline;",
          "the piece contains pearls or sensitive coloured stones;",
          "a treatment or finish is unknown;",
          "the metal changes colour or texture;",
          "a prong, clasp or link is damaged; or",
          "a stone moves or rattles."
        ]
      }
    ]
  },
  {
    heading: "Common myths",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "“Perfume dissolves diamonds”: ", bold: true }, { text: "Alcohols cannot harm diamonds, but they dissolve mounting adhesives." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“Only cheap jewellery reacts to cosmetics”: ", bold: true }, { text: "Gold alloys react to chemical exposures; pearls dissolve in perfumes." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“Hand cream permanently clouds a diamond”: ", bold: true }, { text: "Dullness is temporary film; simple cleanings restore scintillation." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“Putting jewellery on first is more convenient”: ", bold: true }, { text: "Convenient but risky; sprays settle directly on facet tables." }]
      }
    ]
  },
  {
    heading: "Daily prevention checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Remove jewellery before lotions, creams and sunscreen.",
          "Apply perfume and hairspray before jewellery.",
          "Allow products to dry fully.",
          "Put jewellery on last and remove it first.",
          "Handle pieces by the metal rather than the stones.",
          "Wipe only with a clean, approved cloth.",
          "Store exposed pieces separately after they are fully dry.",
          "Seek advice for sensitive materials or visible change."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale recommendation",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale recommends applying cosmetics prior to jewelry wear. View options at " },
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
            text: "Most skincare creates removable film on an untreated diamond, but perfume and cosmetics can pose greater risks.\n\n"
          },
          {
            text: "Apply products first, let them dry, and put on jewelry last. Protect rhodium plating from hand cream exposure, and avoid spraying perfume on pearls or gemstones."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can perfume damage diamond jewellery?",
            answer: "Perfume is unlikely to harm an untreated diamond directly, but it can leave film and may damage pearls, porous stones, treatments, plating or other components."
          },
          {
            question: "Does lotion make diamonds look dull?",
            answer: "Yes. Oils and creams can coat diamond facets and collect beneath settings, reducing visible sparkle until correctly cleaned."
          },
          {
            question: "Should jewellery go on before or after perfume?",
            answer: "After. Apply perfume first, allow it to dry fully and then put jewellery on."
          },
          {
            question: "Can sunscreen damage diamond jewellery?",
            answer: "Sunscreen commonly creates residue and can make jewellery slippery. Other materials may have additional sensitivities, so remove jewellery during application."
          },
          {
            question: "Can hairspray damage diamond earrings?",
            answer: "Hairspray may leave film on diamonds and metal, and it can harm sensitive materials such as pearls. Style hair before adding earrings."
          },
          {
            question: "Does hand cream damage a diamond ring?",
            answer: "It usually coats the diamond rather than damaging it, but residue can pack into the setting and the complete piece may contain vulnerable materials."
          },
          {
            question: "Can make-up damage jewellery?",
            answer: "Make-up can leave residue, while some delicate or porous stones and finishes may be affected. Complete make-up before jewellery."
          },
          {
            question: "Is hand sanitiser safe for diamond rings?",
            answer: "Formulations and jewellery materials vary. Avoid direct exposure where secure removal is practical, but never compromise necessary hand hygiene."
          },
          {
            question: "Can perfume damage gold or platinum?",
            answer: "The response depends on the alloy, finish and formulation. Avoid direct spray and seek advice if the surface changes."
          },
          {
            question: "How do I remove lotion from diamond jewellery?",
            answer: "Inspect the setting and use only the cleaning method approved for every material. Do not use toothpaste, strong solvents or sharp tools."
          },
          {
            question: "Are lab-grown diamonds affected by skincare differently?",
            answer: "No. Lab-grown and natural diamonds share the relevant properties. The complete jewellery construction determines care."
          },
          {
            question: "What should I do if perfume gets on pearl-and-diamond jewellery?",
            answer: "Blot gently without rubbing and seek material-specific advice. Do not soak or use alcohol because pearl surfaces are chemically sensitive."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Maintain Pristine Surfaces",
        subtitle: "Aurelia Royale designs all settings to facilitate easy dry-cloth wipes between cosmetics applications. Consult our specialists.",
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
            Can You Wear Perfume with Diamond Jewellery?
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
