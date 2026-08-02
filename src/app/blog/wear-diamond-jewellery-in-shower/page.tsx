import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Can You Wear Diamond Jewellery in the Shower?",
  description: "It is safer to remove diamond jewellery before showering. Learn how soap, products, slippery handling and mixed materials can affect the complete piece.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/wear-diamond-jewellery-in-shower/",
  },
};

// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/wear-diamond-jewellery-in-shower/#article",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/wear-diamond-jewellery-in-shower/" },
      "headline": "Can You Wear Diamond Jewellery in the Shower?",
      "description": "It is safer to remove diamond jewellery before showering. Learn how soap, products, slippery handling and mixed materials can affect the complete piece.",
      "image": "https://www.aureliaroyale.com/images/blog/wear-diamond-jewellery-in-shower.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" } },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["can you wear diamond jewellery in the shower", "shower with diamond ring", "shower with lab-grown diamonds", "does soap damage diamonds"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/wear-diamond-jewellery-in-shower/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Can You Wear Diamond Jewellery in the Shower?", "item": "https://www.aureliaroyale.com/blog/wear-diamond-jewellery-in-shower/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/wear-diamond-jewellery-in-shower/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can you wear a diamond ring in the shower?", "acceptedAnswer": { "@type": "Answer", "text": "It is safer to remove it. Soap film can dull the diamond, wet handling increases loss risk, and products or impact may affect the setting and metal." } },
        { "@type": "Question", "name": "Can you shower with lab-grown diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Lab-grown diamonds follow the same shower-care principle as natural diamonds. Remove the complete piece because its metal, setting and other materials still matter." } },
        { "@type": "Question", "name": "Does water damage diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Ordinary clean water does not normally damage an untreated diamond, but water exposure does not make a finished jewellery piece universally safe." } },
        { "@type": "Question", "name": "Does soap damage a diamond?", "acceptedAnswer": { "@type": "Answer", "text": "Many soaps will not chemically damage the diamond itself, but they can leave film. Abrasive or unsuitable products can harm metal or other materials." } },
        { "@type": "Question", "name": "Why does my diamond look cloudy after showering?", "acceptedAnswer": { "@type": "Answer", "text": "Soap, conditioner, oils or hard-water minerals may have coated the surface or collected beneath the setting." } },
        { "@type": "Question", "name": "Can you shower with diamond earrings?", "acceptedAnswer": { "@type": "Answer", "text": "Removal is recommended because hair products create residue, wet hair can pull the earrings and small backs may be lost near a drain." } },
        { "@type": "Question", "name": "Can you wear a diamond necklace in the shower?", "acceptedAnswer": { "@type": "Answer", "text": "It is better to remove it. Chains can tangle in wet hair and products may collect around links, clasps and the pendant." } },
        { "@type": "Question", "name": "Can hot shower water damage diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "The diamond itself is stable, but heat and temperature change may not suit every coloured stone, treatment, coating or adhesive." } },
        { "@type": "Question", "name": "Is showering safe for white-gold diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Removal is safer. Soap residue and abrasive products can affect appearance, while repeated rubbing may contribute to wear on a plated surface." } },
        { "@type": "Question", "name": "What should I do after accidentally showering with my ring?", "acceptedAnswer": { "@type": "Answer", "text": "Remove it over a safe surface, inspect the setting, rinse only if all materials permit, dry fully and use the approved cleaning method if residue remains." } },
        { "@type": "Question", "name": "Can showering loosen a diamond?", "acceptedAnswer": { "@type": "Answer", "text": "Water alone does not normally loosen a secure setting, but snagging, impact and pre-existing prong wear can compromise it." } },
        { "@type": "Question", "name": "Should I remove jewellery before bathing as well?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Bath products, oils, prolonged soaking, slippery handling and hard surfaces create similar avoidable risks." } }
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
        text: "It is safer to remove diamond jewellery before showering. A brief encounter with clean water is unlikely to alter an untreated diamond, whether it is lab-grown or natural. But a finished jewel includes much more than the diamond: metal alloys, settings, soldered joints, clasps, surface finishes and sometimes coloured stones or treatments."
      },
      {
        type: "paragraph",
        text: "Showering also exposes the piece to soap, shampoo, conditioner, body oils, hard-water minerals and slippery handling. These may leave film, affect vulnerable components or increase the chance of losing the jewellery near a drain."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Do not make showering in diamond jewellery a routine. Remove the piece before turning on the water and place it in a secure, padded location away from the sink and drain. The diamond itself is highly stable, but soap and hair products can leave a dulling film; abrasive products can mark metal; hot water and chemicals may not suit coloured stones, treatments, plating or adhesives; and slippery fingers can lead to loss or impact. If you accidentally shower with a compatible piece, rinse away residue only if its care instructions allow, dry it thoroughly, inspect the setting and use the approved cleaning method if film remains."
      }
    ]
  },
  {
    heading: "Why the answer is about the complete piece",
    content: [
      {
        type: "table",
        headers: ["Component", "Shower-related concern"],
        rows: [
          ["Diamond", "Soap, conditioner and oil film can reduce visible sparkle"],
          ["Prongs or bezel", "Residue can collect in recesses; existing wear may go unnoticed"],
          ["Gold or platinum alloy", "Harsh or abrasive products can affect the surface or alloy"],
          ["Plating or specialist finish", "Repeated abrasion and unsuitable products may shorten finish life"],
          ["Coloured stones", "Heat, chemicals and treatments require material-specific care"],
          ["Chain, clasp or earring back", "Slipperiness and hair contact increase snagging or loss risk"],
          ["Adhesive-set components", "Prolonged water and product exposure may be unsuitable"]
        ]
      }
    ]
  },
  {
    heading: "Does water damage a diamond?",
    content: [
      {
        type: "paragraph",
        text: "Water itself does not alter diamond facets, but hard-water minerals dry on surfaces, blocking light paths."
      }
    ]
  },
  {
    heading: "How shower products affect diamond sparkle",
    content: [
      {
        type: "paragraph",
        text: "Moisturizing shower gels leave films that reduce light refraction. Deeper cleaning may be needed if you notice:"
      },
      {
        type: "bullet-list",
        items: [
          "a greasy or cloudy-looking surface;",
          "reduced brightness under familiar lighting;",
          "build-up behind the stone; or",
          "product trapped around prongs or pavé."
        ]
      }
    ]
  },
  {
    heading: "Soap is not automatically a safe jewellery cleaner",
    content: [
      {
        type: "paragraph",
        text: "Avoid exfoliating soap. Many body soaps contain:"
      },
      {
        type: "bullet-list",
        items: [
          "exfoliating particles;",
          "oils and moisturisers;",
          "fragrances and colourants;",
          "strong surfactants; and",
          "ingredients unsuitable for a particular finish or gemstone."
        ]
      }
    ]
  },
  {
    heading: "The hidden loss and impact risk",
    content: [
      {
        type: "paragraph",
        text: "Wet skin is slippery, increasing dropping risks. Additionally:"
      },
      {
        type: "bullet-list",
        items: [
          "a towel can catch a prong;",
          "vigorous hair drying can pull an earring;",
          "a necklace can knot in wet hair; and",
          "a ring can slip while applying conditioner or lotion."
        ]
      }
    ]
  },
  {
    heading: "Can you shower with a diamond ring?",
    content: [
      {
        type: "paragraph",
        text: "Remove rings first. Soapy lather reduces finger sizes and causes rings to slip off into plumbing."
      }
    ]
  },
  {
    heading: "Can you shower with diamond earrings?",
    content: [
      {
        type: "paragraph",
        text: "Shampoos coat earring backings. Wet hair strands also tangle around posts easily."
      }
    ]
  },
  {
    heading: "Can you shower with a diamond necklace?",
    content: [
      {
        type: "paragraph",
        text: "Pendant galleries collect body washes. Do not hang necklaces over bathroom valves."
      }
    ]
  },
  {
    heading: "Can you shower with a diamond bracelet?",
    content: [
      {
        type: "paragraph",
        text: "Clasps can fail when scrubbed. Flexible links suffer if twisted while cleaning limbs."
      }
    ]
  },
  {
    heading: "Does the metal change the answer?",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Gold jewellery: ", bold: true }, { text: "Avoid bath chemicals that may react with alloying metals." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "White gold and rhodium plating: ", bold: true }, { text: "Frequent friction wear strips rhodium coatings over time." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Platinum jewellery: ", bold: true }, { text: "Platinum remains stable, but settings and diamonds still collect film." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Sterling silver or plated jewellery: ", bold: true }, { text: "Water minerals trigger oxidation on sterling silver. Remove before showering." }]
      }
    ]
  },
  {
    heading: "Coloured-stone and mixed-material jewellery needs extra caution",
    content: [
      {
        type: "paragraph",
        text: "Never shower with porous coloured center gems. Always confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "each gemstone identity;",
          "known treatments or coatings;",
          "whether adhesive is used;",
          "the metal and finish; and",
          "the maker’s care instructions."
        ]
      }
    ]
  },
  {
    heading: "What about hot showers and steam?",
    content: [
      {
        type: "paragraph",
        text: "Thermal shocks split included emeralds or opals. Keep mixed-stone pieces out of hot steam rooms."
      }
    ]
  },
  {
    heading: "What to do if you accidentally shower with diamond jewellery",
    content: [
      {
        type: "numbered-list",
        items: [
          "Move away from the open drain and handle the piece over a soft surface.",
          "Remove it carefully without pulling at a chain, post or clasp.",
          "Inspect for a loose stone, bent prong, open link or damaged back.",
          "If the complete piece permits rinsing, remove remaining product with clean lukewarm water in a secured basin—not over an open drain.",
          "Pat and air-dry it fully with the approved lint-free material.",
          "If residue remains, follow the maker-approved home-cleaning method.",
          "Arrange professional assessment if a stone moves, the piece snags or the material is sensitive or unknown."
        ]
      }
    ]
  },
  {
    heading: "A safer pre-shower routine",
    content: [
      {
        type: "numbered-list",
        items: [
          "Keep an individual padded box in the bedroom or dressing area—not beside the shower.",
          "Remove rings, bracelets, necklaces and earrings before entering the bathroom.",
          "Fasten chains and bracelets.",
          "Place each item in its own position.",
          "Shower, dry and apply body products.",
          "Let skincare and hair products dry.",
          "Put jewellery on last."
        ]
      }
    ]
  },
  {
    heading: "Showering is not the same as controlled cleaning",
    content: [
      {
        type: "table",
        headers: ["Shower exposure", "Approved home clean"],
        rows: [
          ["Products chosen for skin and hair", "Solution selected for all jewellery materials"],
          ["Uncontrolled quantity and duration", "Deliberate dilution and contact time"],
          ["Open drain and hard surfaces", "Secured, padded working area"],
          ["Hot water may vary", "Suitable lukewarm temperature"],
          ["Hair and towel snagging", "Careful supported handling"],
          ["Residue may remain", "Thorough safe rinse and complete drying"]
        ]
      }
    ]
  },
  {
    heading: "Common myths",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "“Diamonds are waterproof, so the whole ring is shower-safe”: ", bold: true }, { text: "Water does not harm the gem, but soaps corrode alloys or strip finishes." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“Soap makes diamonds cleaner every day”: ", bold: true }, { text: "Shower soaps leave film. Specific mild detergents are required." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“If it looks dull after a shower, it is damaged”: ", bold: true }, { text: "Film is the typical cause. Professional checks can verify security." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "“Lab-grown diamonds need different shower care”: ", bold: true }, { text: "They share physical traits with natural diamonds; mounting components dictate care." }]
      }
    ]
  },
  {
    heading: "The Aurelia Royale recommendation",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale advises removing jewelry prior to showering. Browse collection at " },
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
            text: "It is safer to remove diamond jewellery before showering.\n\n"
          },
          {
            text: "Water alone is not the issue—soap film, hair conditioner, hard water minerals, slipperiness, and mixed materials all justify removal. Keep a padded box outside the bathroom."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can you wear a diamond ring in the shower?",
            answer: "It is safer to remove it. Soap film can dull the diamond, wet handling increases loss risk, and products or impact may affect the setting and metal."
          },
          {
            question: "Can you shower with lab-grown diamonds?",
            answer: "Lab-grown diamonds follow the same shower-care principle as natural diamonds. Remove the complete piece because its metal, setting and other materials still matter."
          },
          {
            question: "Does water damage diamonds?",
            answer: "Ordinary clean water does not normally damage an untreated diamond, but water exposure does not make a finished jewellery piece universally safe."
          },
          {
            question: "Does soap damage a diamond?",
            answer: "Many soaps will not chemically damage the diamond itself, but they can leave film that reduces visible sparkle. Abrasive or unsuitable products can harm metal or other materials."
          },
          {
            question: "Why does my diamond look cloudy after showering?",
            answer: "Soap, conditioner, oils or hard-water minerals may have coated the surface or collected beneath the setting. Use the approved cleaning method if the setting is secure."
          },
          {
            question: "Can you shower with diamond earrings?",
            answer: "Removal is recommended because hair products create residue, wet hair can pull the earrings and small backs may be lost near a drain."
          },
          {
            question: "Can you wear a diamond necklace in the shower?",
            answer: "It is better to remove it. Chains can tangle in wet hair and products may collect around links, clasps and the pendant."
          },
          {
            question: "Can hot shower water damage diamond jewellery?",
            answer: "The diamond itself is stable, but heat and temperature change may not suit every coloured stone, treatment, coating or adhesive."
          },
          {
            question: "Is showering safe for white-gold diamond jewellery?",
            answer: "Removal is safer. Soap residue and abrasive products can affect appearance, while repeated rubbing may contribute to wear on a rhodium-plated surface."
          },
          {
            question: "What should I do after accidentally showering with my ring?",
            answer: "Remove it over a safe surface, inspect the setting, rinse only if all materials permit, dry fully and use the approved cleaning method if residue remains."
          },
          {
            question: "Can showering loosen a diamond?",
            answer: "Water alone does not normally loosen a secure setting, but snagging, impact and pre-existing prong wear can compromise it. Seek assessment if the stone moves or rattles."
          },
          {
            question: "Should I remove jewellery before bathing as well?",
            answer: "Yes. Bath products, oils, prolonged soaking, slippery handling and hard surfaces create similar avoidable risks."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Protect Stated Shine",
        subtitle: "Aurelia Royale builds durable gold and platinum shanks, but recommends pre-shower removals for all pieces. Speak to our support experts.",
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
            Can You Wear Diamond Jewellery in the Shower?
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
