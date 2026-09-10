import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Buying Coloured-Stone Diamond Jewellery: Checklist",
  description: "Check gemstone identity, natural or laboratory-created status, treatments, colour, dimensions, diamond accents, metal, reports and care before buying.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/buying-coloured-stone-diamond-jewellery/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/buying-coloured-stone-diamond-jewellery/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/buying-coloured-stone-diamond-jewellery/"
      },
      "headline": "What to Check When Buying Coloured-Stone Diamond Jewellery",
      "description": "Check gemstone identity, natural or laboratory-created status, treatments, colour, dimensions, diamond accents, metal, reports and care before buying.",
      "image": "https://www.aureliaroyale.com/images/blog/buying-coloured-stone-diamond-jewellery.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {
        "@type": "Organization",
        "name": "Aurelia Royale",
        "url": "https://www.aureliaroyale.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Aurelia Royale",
        "url": "https://www.aureliaroyale.com/"
      },
      "inLanguage": "en-GB",
      "articleSection": "Coloured Stones and Diamonds",
      "keywords": [
        "buying coloured-stone diamond jewellery",
        "coloured gemstone jewellery buying guide",
        "treated gemstone disclosure"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/buying-coloured-stone-diamond-jewellery/#breadcrumb",
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
          "name": "Journal",
          "item": "https://www.aureliaroyale.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Buying Coloured-Stone Diamond Jewellery",
          "item": "https://www.aureliaroyale.com/blog/buying-coloured-stone-diamond-jewellery/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/buying-coloured-stone-diamond-jewellery/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should a coloured-stone jewellery listing disclose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It should disclose gemstone identity, origin category, known treatments, dimensions, weight, setting, care and report scope."
          }
        },
        {
          "@type": "Question",
          "name": "Does lab-grown diamond jewellery mean the coloured stone is lab-created?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The origin of the coloured stone must be stated separately."
          }
        },
        {
          "@type": "Question",
          "name": "Are treated gemstones genuine gemstones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment does not automatically change a gem identity, but the type, extent and disclosure matter."
          }
        },
        {
          "@type": "Question",
          "name": "Why do coloured stones look different online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lighting, camera processing, screens, pleochroism, cutting and natural variation can change perceived colour."
          }
        },
        {
          "@type": "Question",
          "name": "Is gemstone carat weight the same as visible size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Carat is weight, and different materials and proportions produce different dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "What are diamond accents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are smaller diamonds used to frame, support or extend a design rather than act as its primary centre."
          }
        },
        {
          "@type": "Question",
          "name": "Are coloured stones graded with the diamond 4Cs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not through one identical universal system. Coloured stones require material-specific evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "How can I tell whether a coloured stone is natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not rely on appearance alone. Check explicit seller disclosure and appropriate independent documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Is a gemstone report the same as a jewellery certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A gemstone report may cover one stone; a jewellery report may describe the mounted article and multiple components."
          }
        },
        {
          "@type": "Question",
          "name": "Can all coloured-stone jewellery be ultrasonically cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Some materials and treatments may be damaged, so use item-specific care guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Is untreated always better than treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Compare appearance, treatment type, stability, disclosure, rarity, care and price."
          }
        },
        {
          "@type": "Question",
          "name": "What should European buyers check online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check seller identity, gemstone and treatment disclosure, hallmark information, VAT and duties, delivery, returns and report verification."
          }
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
        src: "/images/blog/buying-coloured-stone-diamond-jewellery/1.jpg",
        alt: "A coloured sapphire and diamond accents jewellery checklist",
        title: "Buying Checklist Guide",
        caption: "A trustworthy product page should separately specify the colored stone origin and treatment history.",
        priority: true
      },
      {
        type: "paragraph",
        text: "The first question is not “How many carats?” It is “What is every stone?”"
      },
      {
        type: "paragraph",
        text: "A trustworthy product page should identify the coloured centre, state whether it is natural or laboratory-created, disclose known treatments, and describe the lab-grown diamond accents separately. Only then can you compare colour, scale, setting, durability, documentation and price."
      }
    ]
  },
  {
    heading: "Quick buying checklist",
    content: [
      {
        type: "paragraph",
        text: "Before ordering, confirm:"
      },
      {
        type: "numbered-list",
        items: [
          "The coloured stone’s species or variety is named.",
          "Its natural, laboratory-created or other origin category is explicit.",
          "Known treatments are disclosed.",
          "Colour is shown realistically in more than one image or video.",
          "Stone dimensions are provided in millimetres.",
          "Coloured-stone and diamond carat weights are separated.",
          "Lab-grown diamond origin and grades state their exact scope.",
          "The setting protects the actual gemstone and its shape.",
          "Metal, fineness, weight and hallmark information are clear.",
          "Reports identify the stone or finished article they cover.",
          "Care instructions reflect the most sensitive component.",
          "Returns and warranty account for colour variation and treatments."
        ]
      }
    ]
  },
  {
    heading: "1. Identify the coloured stone precisely",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-coloured-stone-diamond-jewellery/2.jpg",
        alt: "A close-up verification of sapphire variety labels",
        title: "Stone Variety Verifications",
        caption: "Demanding accurate mineral species and variety definitions avoids vague color category traps."
      },
      {
        type: "paragraph",
        text: "Ensure listings name the precise gemstone species or variety (e.g. corundum sapphire). Stated identities must align with shipping orders and invoice lines."
      }
    ]
  },
  {
    heading: "2. Confirm whether it is natural or laboratory-created",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm if the gem is natural or lab-created. For disclosure details, consult " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "3. Ask about treatments",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-coloured-stone-diamond-jewellery/3.jpg",
        alt: "A lab certificate denoting heat treatments on a red ruby ring",
        title: "Treatment Disclosures",
        caption: "Verifying the stability of heat treatments or oil fillings ensures clear value comparisons."
      },
      {
        type: "paragraph",
        text: "Identify treatments like heat treatment, oiling, glass-filling, or dye coatings. Treatments must be documented on grading reports and invoice records."
      }
    ]
  },
  {
    heading: "4. Understand colour beyond a single word",
    content: [
      {
        type: "paragraph",
        text: "Evaluate hue (base color), tone (relative darkness), and saturation (intensity). Note pleochroism features and visual color-zoning profiles."
      }
    ]
  },
  {
    heading: "5. Review images for colour accuracy",
    content: [
      {
        type: "paragraph",
        text: "Verify look on skin, hand scales, and multiple ambient lighting angles. Be cautious of high saturation editing."
      }
    ]
  },
  {
    heading: "6. Compare dimensions, not carat alone",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Varying densities mean equal carats look different: check length, width, and setting height in millimetres. Consult " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: " for visual scale examples." }
        ]
      }
    ]
  },
  {
    heading: "7. Separate every carat figure",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-coloured-stone-diamond-jewellery/4.jpg",
        alt: "A digital scale weighing center gemstone and accent weights",
        title: "Gem Carat Breakdowns",
        caption: "Separating main colored stone carats from diamond accent totals ensures like-for-like comparison."
      },
      {
        type: "table",
        headers: ["Component", "Weight to disclose"],
        rows: [
          ["Coloured centre stone", "Individual carat weight or explained estimate"],
          ["Coloured side stones", "Individual or combined weight"],
          ["Lab-grown diamond centre/side stones", "Individual weights where significant"],
          ["Lab-grown diamond accents", "Total carat weight and count"],
          ["Complete gemstone total", "Optional only when the breakdown remains visible"]
        ]
      }
    ]
  },
  {
    heading: "8. Check the lab-grown diamond accents",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm diamond counts, shapes, weights, and color/clarity grades. See " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for grade ranges." }
        ]
      }
    ]
  },
  {
    heading: "9. Evaluate the coloured-stone cut",
    content: [
      {
        type: "paragraph",
        text: "Check for windowing (empty center light leaks), symmetry ratios, and polish quality. Coloured gem cuts prioritize weight retention and hue depth."
      }
    ]
  },
  {
    heading: "10. Match the setting to the gemstone",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Prongs: ", bold: true },
          { text: "Should shield pointed tips and corners smoothly." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bezel: ", bold: true },
          { text: "Encloses edges for maximum protection." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Halo: ", bold: true },
          { text: "Provides a protective boundary of smaller diamonds." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Pavé: ", bold: true },
          { text: "Check tiny prongs and bead settings for catches." }
        ]
      }
    ]
  },
  {
    heading: "11. Consider durability and intended wear",
    content: [
      {
        type: "paragraph",
        text: "Compare scratch hardness (Mohs) with cleavage vulnerability. Set softer gemstones (emeralds) in protective bezel shanks for active schedules."
      }
    ]
  },
  {
    heading: "12. Check metal and hallmark information",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify metal fineness and legal hallmark credentials. For details, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "13. Read reports by scope",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Map report scopes to specific mounted elements. See " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: " for full parameters." }
        ]
      }
    ]
  },
  {
    heading: "14. Check care before purchase",
    content: [
      {
        type: "numbered-list",
        items: [
          "Identify every gemstone and known treatment.",
          "Check the jeweller’s written instructions.",
          "Inspect for loose stones or damaged settings.",
          "Use only a method suitable for the most sensitive component.",
          "Seek professional care when identity or treatment is uncertain."
        ]
      }
    ]
  },
  {
    heading: "15. Compare price like for like",
    content: [
      {
        type: "table",
        headers: ["Comparison point", "Product A", "Product B"],
        rows: [
          ["Coloured stone identity and origin", "", ""],
          ["Treatment disclosure", "", ""],
          ["Colour and dimensions", "", ""],
          ["Coloured-stone weight", "", ""],
          ["Diamond count, weight and grades", "", ""],
          ["Metal and jewellery weight", "", ""],
          ["Report and scope", "", ""],
          ["Care, returns and warranty", "", ""],
          ["Delivered price", "", ""]
        ]
      }
    ]
  },
  {
    heading: "16. Review returns and warranty",
    content: [
      {
        type: "paragraph",
        text: "Confirm return rules for custom resizing, custom settings, hygiene-restricted earring posts, and international return ship coverages."
      }
    ]
  },
  {
    heading: "Final purchase checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Every gemstone is identified precisely.",
          "Natural, laboratory-created or other origin is explicit.",
          "Known treatments and special care are disclosed.",
          "The exact stone or expected colour variation is explained.",
          "Neutral images, video and on-body scale are available.",
          "Centre and complete dimensions are stated.",
          "Coloured-stone and diamond weights are separated.",
          "Lab-grown diamond grades state their scope.",
          "Setting protection suits the actual stone.",
          "Metal, fineness, weight and hallmark details are clear.",
          "Reports are mapped to the stones or article covered.",
          "Care, returns, warranty and delivered price are acceptable."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale approach",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale itemizes coloured gemstones and lab-grown diamonds separately. Explore " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " for individual stone specifications." }
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
            text: "Before buying coloured-stone diamond jewellery, identify every gemstone separately and verify origin, treatment, dimensions, setting, documentation and care.\n\n"
          },
          {
            text: "Ensure the coloured centre's origin status is explicitly declared, and diamond accents are detailed independently. Match the setting protection to the center stone durability needs."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What should a coloured-stone jewellery listing disclose?",
            answer: "It should disclose gemstone identity, origin category, known treatments, dimensions, weight, setting, care and report scope."
          },
          {
            question: "Does lab-grown diamond jewellery mean the coloured stone is lab-created?",
            answer: "No. The origin of the coloured stone must be stated separately."
          },
          {
            question: "Are treated gemstones genuine gemstones?",
            answer: "Treatment does not automatically change a gem’s identity, but the type, extent and disclosure matter."
          },
          {
            question: "Why do coloured stones look different online?",
            answer: "Lighting, camera processing, screens, pleochroism, cutting and natural variation can change perceived colour."
          },
          {
            question: "Is gemstone carat weight the same as visible size?",
            answer: "No. Carat is weight, and different materials and proportions produce different dimensions."
          },
          {
            question: "What are diamond accents?",
            answer: "They are smaller diamonds used to frame, support or extend a design rather than act as its primary centre."
          },
          {
            question: "Are coloured stones graded with the diamond 4Cs?",
            answer: "Not through one identical universal system. Coloured stones require material-specific evaluation."
          },
          {
            question: "How can I tell whether a coloured stone is natural?",
            answer: "Do not rely on appearance alone. Check explicit seller disclosure and appropriate independent documentation."
          },
          {
            question: "Is a gemstone report the same as a jewellery certificate?",
            answer: "No. A gemstone report may cover one stone; a jewellery report may describe the mounted article and multiple components."
          },
          {
            question: "Can all coloured-stone jewellery be ultrasonically cleaned?",
            answer: "No. Some materials and treatments may be damaged, so use item-specific care guidance."
          },
          {
            question: "Is untreated always better than treated?",
            answer: "Not automatically. Compare appearance, treatment type, stability, disclosure, rarity, care and price."
          },
          {
            question: "What should European buyers check online?",
            answer: "Check seller identity, gemstone and treatment disclosure, hallmark information, VAT and duties, delivery, returns and report verification."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Colorful Brilliance",
        subtitle: "Aurelia Royale accents vivid coloured stones with GIA-graded lab-grown diamonds in premium settings. View our collection.",
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
            What to Check When Buying Coloured-Stone Diamond Jewellery
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
      <RelatedArticles currentSlug="buying-coloured-stone-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}
