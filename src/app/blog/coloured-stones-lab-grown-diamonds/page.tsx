import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Coloured Stones and Lab-Grown Diamonds Together",
  description: "Learn how coloured centre stones and lab-grown diamond accents work together through contrast, proportion, setting, disclosure, durability and care.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/coloured-stones-lab-grown-diamonds/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/coloured-stones-lab-grown-diamonds/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.aureliaroyale.com/blog/coloured-stones-lab-grown-diamonds/"
      },
      "headline": "How Coloured Stones and Lab-Grown Diamonds Work Together",
      "description": "Learn how coloured centre stones and lab-grown diamond accents work together through contrast, proportion, setting, disclosure, durability and care.",
      "image": "https://www.aureliaroyale.com/images/blog/coloured-stones-lab-grown-diamonds.webp",
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
        "coloured stones and lab-grown diamonds",
        "coloured gemstone and diamond jewellery",
        "lab-grown diamond accents"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/coloured-stones-lab-grown-diamonds/#breadcrumb",
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
          "name": "Coloured Stones and Lab-Grown Diamonds",
          "item": "https://www.aureliaroyale.com/blog/coloured-stones-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/coloured-stones-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why are diamonds used around coloured stones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can add brightness, define an outline, create contrast and support the visual hierarchy of the design."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds work with natural coloured stones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Their different origins can coexist in one design when every gemstone is described accurately."
          }
        },
        {
          "@type": "Question",
          "name": "Does lab-grown diamond mean the coloured stone is lab-created too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The origin category of each gemstone must be disclosed separately."
          }
        },
        {
          "@type": "Question",
          "name": "What are diamond accents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are smaller diamonds used to support, frame or extend the main design rather than act as the primary centre."
          }
        },
        {
          "@type": "Question",
          "name": "Does a diamond halo make a coloured stone look larger?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It increases the complete visible outline, but it does not change the centre stone actual dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Are coloured stones graded with the diamond 4Cs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not in the same universal way. Coloured stones require material-specific evaluation and disclosure."
          }
        },
        {
          "@type": "Question",
          "name": "Are treated coloured stones lower quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment alone does not answer quality. Its type, extent, stability, disclosure and effect on value and care all matter."
          }
        },
        {
          "@type": "Question",
          "name": "Are coloured stones as durable as diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Durability varies by material, treatment, cut and setting. Do not assume all gemstones behave like diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Can mixed-stone jewellery go in an ultrasonic cleaner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. The coloured stone or treatment may be unsuitable, so follow item-specific professional guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Should coloured-stone jewellery have a certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Independent documentation can be useful, but check which stone or finished item the report covers."
          }
        },
        {
          "@type": "Question",
          "name": "Can diamond and coloured-stone carat weights be added together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be mathematically totalled, but the product page should keep gemstone categories separate to avoid confusion."
          }
        },
        {
          "@type": "Question",
          "name": "What should I check before buying online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check gemstone identity, origin, treatments, dimensions, diamond breakdown, metal, report scope, care, returns and warranty."
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
        src: "/images/blog/coloured-stones-lab-grown-diamonds/1.jpg",
        alt: "A coloured center gemstone framed with diamond accents",
        title: "Mixed Gemstone Styling",
        caption: "Coloured stones create the chromatic focal point while lab-grown diamonds add contrast and light.",
        priority: true
      },
      {
        type: "paragraph",
        text: "In coloured-stone jewellery, the coloured gem usually provides the main hue and visual identity. Lab-grown diamonds can frame it, separate it from the metal, extend its outline or introduce points of brightness."
      },
      {
        type: "paragraph",
        text: "The combination works best when colour, proportion and setting are intentional. It must also be described accurately: the coloured stone’s identity, origin and treatments are separate disclosures from the laboratory-grown origin and quality of the diamonds."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Coloured stones and lab-grown diamonds work together in five main ways:"
      },
      {
        type: "numbered-list",
        items: [
          "Contrast: colourless diamonds intensify the visual distinction around a coloured centre.",
          "Light: diamond accents create brightness, fire and scintillation around a more colour-led gem.",
          "Scale: halos and side stones can enlarge the complete outline without changing the centre stone.",
          "Structure: diamonds can define edges, symmetry and directional lines within a design.",
          "Hierarchy: one coloured centre can lead while smaller diamonds support it."
        ]
      }
    ]
  },
  {
    heading: "The coloured stone and diamonds have different roles",
    content: [
      {
        type: "table",
        headers: ["Element", "Typical visual role", "Information to verify"],
        rows: [
          ["Coloured centre stone", "Primary hue and focal identity", "Species/variety, origin category, treatments, measurements"],
          ["Lab-grown diamond halo", "Bright frame and larger outline", "Stone count, total weight, grades and setting"],
          ["Lab-grown diamond side stones", "Balance or direction", "Shape, individual or combined weights, matching"],
          ["Diamond pavé", "Surface brilliance and connection", "Coverage, total weight, quality range"],
          ["Precious metal", "Colour frame and structure", "Metal, fineness, finish, plating and hallmark"]
        ]
      }
    ]
  },
  {
    heading: "1. Colour contrast",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-stones-lab-grown-diamonds/2.jpg",
        alt: "A green emerald center stone with diamond halo accents",
        title: "Gem Color Contrast",
        caption: "Comparing gemstone hue saturation under uniform lighting shows true color contrast."
      },
      {
        type: "paragraph",
        text: "Contrast colourless diamonds with deep saturated tones (blues, greens, reds) of the focal centre stone. Metal frames and prong settings influence face-up color reflections."
      }
    ]
  },
  {
    heading: "2. Brightness and optical contrast",
    content: [
      {
        type: "paragraph",
        text: "Understand the visual interplay between brilliant facet sparkle (diamonds) and the broad flashes or pleochroism of coloured gemstone cuts."
      }
    ]
  },
  {
    heading: "3. Proportion and visual hierarchy",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-stones-lab-grown-diamonds/3.jpg",
        alt: "A yellow sapphire ring showing balanced proportions",
        title: "Proportional Spacings",
        caption: "Deciding on clear structural leaders (large center vs accent pavé fields) creates clean layouts."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Coloured centre with diamond halo: ", bold: true },
          { text: "Verify final width measurements. Halos significantly expand the overall layout presence." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Coloured centre with diamond side stones: ", bold: true },
          { text: "Confirm side stone shapes complement the center proportions without overpowering them." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Alternating coloured stones and diamonds: ", bold: true },
          { text: "Ensure layout repeat intervals are symmetrical." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Diamond pavé around a coloured motif: ", bold: true },
          { text: "Examine pavé seatings and edges for metal snags." }
        ]
      }
    ]
  },
  {
    heading: "4. Shape combinations",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Identify individual stone shapes (ovals, pear cuts, emerald cut steps). For fancy shape guides, see " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "5. Metal colour changes the composition",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Gold alloy color frames influence how both diamonds and gemstones sit. For metal checklists, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/how-to-check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "6. Understand hue, tone and saturation",
    content: [
      {
        type: "paragraph",
        text: "Compare gem hue (main color), tone (light/dark values), and saturation (intensity) under natural lighting conditions to verify consistency."
      }
    ]
  },
  {
    heading: "7. Origin categories must be separated",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Keep lab-grown diamond designations distinct from coloured stone origin types. Terminology guidelines are detailed at " },
          { text: "lab-grown diamond description and disclosure", href: "/blog/lab-grown-diamond-description-disclosure/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "8. Treatments matter",
    content: [
      {
        type: "paragraph",
        text: "Confirm heat treatments, oil fillings, and color enhancement disclosures. Ensure treatments are noted on laboratory paperwork."
      }
    ]
  },
  {
    heading: "9. Durability is not one number",
    content: [
      {
        type: "paragraph",
        text: "Respect hardness scales (Mohs) along with toughness risks (cleavage lines). Care instructions should reflect the most sensitive gem in the mounting."
      }
    ]
  },
  {
    heading: "10. Setting choices must protect both materials",
    content: [
      {
        type: "image",
        src: "/images/blog/coloured-stones-lab-grown-diamonds/4.jpg",
        alt: "Bezel and prong settings holding a mixed gem arrangement",
        title: "Setting Protection Styles",
        caption: "Ensuring custom bezels or prongs shield pointed gem tips from impacts secures wearability."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Prongs: ", bold: true },
          { text: "Should feel smooth and secure all stone corners." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bezel: ", bold: true },
          { text: "Frames boundaries securely to guard softer gemstones." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Halo: ", bold: true },
          { text: "Verify layout alignment transitions and clean galleries." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Pavé: ", bold: true },
          { text: "Verify bead mountings are smooth to the touch." }
        ]
      }
    ]
  },
  {
    heading: "11. Understand carat and dimensions separately",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Density changes stone volumes: separate gemstone carats from diamond totals. Refer to " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "12. Compare quality using separate systems",
    content: [
      {
        type: "paragraph",
        text: "Grade systems for diamonds (the 4Cs) differ from color-intensity metrics used for emeralds, rubies, and sapphires."
      }
    ]
  },
  {
    heading: "13. Check report scope",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify which stones are covered by loose vs mounted certificates. For report types, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "14. Care for the complete piece",
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
    heading: "A product-page disclosure checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Coloured stone species or variety is identified.",
          "Natural, laboratory-created or other origin category is explicit.",
          "Known treatments are disclosed.",
          "Lab-grown diamond origin is stated separately.",
          "Centre, side and accent stones are itemised.",
          "Carat weights are broken down by gemstone type.",
          "Millimetre dimensions are provided.",
          "Diamond grades state which stones they cover.",
          "Metal, fineness, weight and hallmark details are clear.",
          "Front, side, back and on-body images are available.",
          "Report issuer, number and scope are explained.",
          "Care instructions reflect every gemstone and treatment."
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
          { text: "Aurelia Royale lists gemstones and diamonds separately with full origin disclosures. Browse our collection at " },
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
            text: "Coloured stones create the chromatic focal point while lab-grown diamonds add contrast, light and structure.\n\n"
          },
          {
            text: "Evaluate colour, proportion, and setting style. Ensure the coloured stone's origin and treatments are separate disclosures from the laboratory-grown origin and quality of the diamonds."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Why are diamonds used around coloured stones?",
            answer: "They can add brightness, define an outline, create contrast and support the visual hierarchy of the design."
          },
          {
            question: "Do lab-grown diamonds work with natural coloured stones?",
            answer: "Yes. Their different origins can coexist in one design when every gemstone is described accurately."
          },
          {
            question: "Does lab-grown diamond mean the coloured stone is lab-created too?",
            answer: "No. The origin category of each gemstone must be disclosed separately."
          },
          {
            question: "What are diamond accents?",
            answer: "They are smaller diamonds used to support, frame or extend the main design rather than act as the primary centre."
          },
          {
            question: "Does a diamond halo make a coloured stone look larger?",
            answer: "It increases the complete visible outline, but it does not change the centre stone’s actual dimensions."
          },
          {
            question: "Are coloured stones graded with the diamond 4Cs?",
            answer: "Not in the same universal way. Coloured stones require material-specific evaluation and disclosure."
          },
          {
            question: "Are treated coloured stones lower quality?",
            answer: "Treatment alone does not answer quality. Its type, extent, stability, disclosure and effect on value and care all matter."
          },
          {
            question: "Are coloured stones as durable as diamonds?",
            answer: "Durability varies by material, treatment, cut and setting. Do not assume all gemstones behave like diamonds."
          },
          {
            question: "Can mixed-stone jewellery go in an ultrasonic cleaner?",
            answer: "Not automatically. The coloured stone or treatment may be unsuitable, so follow item-specific professional guidance."
          },
          {
            question: "Should coloured-stone jewellery have a certificate?",
            answer: "Independent documentation can be useful, but check which stone or finished item the report covers."
          },
          {
            question: "Can diamond and coloured-stone carat weights be added together?",
            answer: "They can be mathematically totalled, but the product page should keep gemstone categories separate to avoid confusion."
          },
          {
            question: "What should I check before buying online?",
            answer: "Check gemstone identity, origin, treatments, dimensions, diamond breakdown, metal, report scope, care, returns and warranty."
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
            How Coloured Stones and Lab-Grown Diamonds Work Together
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
