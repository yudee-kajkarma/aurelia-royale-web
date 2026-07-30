import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Clean Lab-Grown Diamond Jewellery",
  description: "Clean compatible lab-grown diamond jewellery safely using lukewarm water, mild soap, a soft brush and proper inspection—plus know when to stop.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/clean-lab-grown-diamond-jewellery/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/clean-lab-grown-diamond-jewellery/#article",
      "headline": "How to Clean Lab-Grown Diamond Jewellery at Home",
      "description": "Clean compatible lab-grown diamond jewellery safely using lukewarm water, mild soap, a soft brush and proper inspection—plus know when to stop.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/clean-lab-grown-diamond-jewellery/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/clean-lab-grown-diamond-jewellery-at-home.webp"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Jewellery Care and Maintenance", "item": "https://www.aureliaroyale.com/blog/category/jewellery-care-maintenance/" },
        { "@type": "ListItem", "position": 4, "name": "How to Clean Lab-Grown Diamond Jewellery at Home", "item": "https://www.aureliaroyale.com/blog/clean-lab-grown-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are lab-grown diamonds cleaned differently from natural diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "No because of growth origin alone. The setting, metal, treatments and other materials determine the safe method." } },
        { "@type": "Question", "name": "Can I use washing-up liquid on lab-grown diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "A few drops of mild non-abrasive liquid may suit compatible pieces, subject to the manufacturer's instructions." } },
        { "@type": "Question", "name": "Can I soak lab-grown diamond jewellery overnight?", "acceptedAnswer": { "@type": "Answer", "text": "Do not leave jewellery soaking unattended. Use only the brief period approved for the complete piece." } },
        { "@type": "Question", "name": "Can I clean lab-grown diamonds with toothpaste?", "acceptedAnswer": { "@type": "Answer", "text": "No. Toothpaste is abrasive and can scratch metal or finishes and lodge in settings." } },
        { "@type": "Question", "name": "Can lab-grown diamonds go in an ultrasonic cleaner?", "acceptedAnswer": { "@type": "Answer", "text": "Only when a professional has inspected and approved the exact piece." } },
        { "@type": "Question", "name": "Is steam cleaning safe for lab-grown diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Not universally. Heat and pressure may be unsuitable for other materials, treatments, adhesives or damaged settings." } },
        { "@type": "Question", "name": "Why does my lab-grown diamond look cloudy after washing?", "acceptedAnswer": { "@type": "Answer", "text": "Soap film, incomplete rinsing, trapped residue or lighting may be responsible; seek inspection if gentle rinsing does not help." } },
        { "@type": "Question", "name": "How should I clean behind a diamond?", "acceptedAnswer": { "@type": "Answer", "text": "Use an approved mild solution and very soft brush with light pressure, never pins or sharp tools." } },
        { "@type": "Question", "name": "Can I clean diamond jewellery over the sink?", "acceptedAnswer": { "@type": "Answer", "text": "Use separate bowls over a covered surface. If working near a sink, close the drain securely." } },
        { "@type": "Question", "name": "How should I dry diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Pat with a lint-free cloth and allow hidden areas to air-dry completely without external heat." } },
        { "@type": "Question", "name": "What if a stone moves during cleaning?", "acceptedAnswer": { "@type": "Answer", "text": "Stop immediately, store the piece safely and arrange professional inspection before wearing it." } },
        { "@type": "Question", "name": "Can I use this method on coloured-stone diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Only if every gemstone, treatment, metal and setting is confirmed compatible. Follow the most sensitive component." } }
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
        src: "/images/blog/clean-lab-grown-diamond-jewellery/1.jpg",
        alt: "Lukewarm water bowl and soft brush cleaning setup",
        title: "Cleaning Setups",
        caption: "Skin oils and lotion films quickly build up, making diamonds look cloudy.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds attract skin oils, skincare residue, soap film and dust just as natural diamonds do. That surface build-up can reduce visible brightness without changing the diamond itself."
      },
      {
        type: "paragraph",
        text: "The safest home-cleaning method depends on the complete jewellery item—not only the diamond. Check the metal, setting, other gemstones, treatments and manufacturer’s instructions before adding water or cleanser."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "For modern, undamaged lab-grown diamond jewellery that the seller confirms is compatible with water and mild soap, prepare a small bowl of lukewarm water with a few drops of mild, non-abrasive washing-up liquid. Briefly soak if permitted, clean gently with a new very soft brush—especially behind the diamond—then rinse in a separate bowl, pat dry with a lint-free cloth and inspect again. Stop if a stone moves, the setting is damaged, the piece contains sensitive materials or its treatment history is unknown. Avoid bleach, chlorine, toothpaste, abrasive powders and unapproved ultrasonic or steam cleaning."
      }
    ]
  },
  {
    heading: "First: decide whether home cleaning is appropriate",
    content: [
      {
        type: "image",
        src: "/images/blog/clean-lab-grown-diamond-jewellery/2.jpg",
        alt: "Checking ring prongs prior to soaking",
        title: "Prong Audits",
        caption: "Never use cleaning routines to verify if setting prongs are loose."
      },
      {
        type: "table",
        headers: ["Condition", "Home clean?", "Best next step"],
        rows: [
          ["Modern diamond-only piece, secure setting, compatible metal", "Usually, following seller instructions", "Use the gentle routine below"],
          ["Loose, rattling or missing stone", "No", "Stop wearing; professional inspection"],
          ["Damaged prong, clasp, hinge or thread", "No", "Repair before cleaning"],
          ["Coloured stones, pearls, enamel, glued elements or coatings", "Not without confirmation", "Follow material-specific guidance"],
          ["Vintage, antique or unknown construction", "Avoid general soaking and brushing", "Ask a qualified jeweller"],
          ["Fracture-filled or otherwise treated diamond", "Not with a generic routine", "Follow laboratory/seller care advice"]
        ]
      }
    ]
  },
  {
    heading: "What you need",
    content: [
      {
        type: "bullet-list",
        items: [
          "Two small clean bowls: one for cleaning and one for rinsing.",
          "Lukewarm water—not hot or boiling.",
          "A few drops of mild, non-abrasive washing-up liquid confirmed compatible with the piece.",
          "A new, very soft toothbrush or jewellery brush reserved for cleaning.",
          "A soft, lint-free cloth.",
          "A clean towel to cover the work surface.",
          "Bright, neutral light for inspection."
        ]
      },
      {
        type: "paragraph",
        text: "Avoid working over an open drain. A bowl gives you more control and prevents a loose stone from disappearing into plumbing."
      }
    ]
  },
  {
    heading: "The seven-step home-cleaning method",
    content: [
      {
        type: "image",
        src: "/images/blog/clean-lab-grown-diamond-jewellery/3.jpg",
        alt: "Brushing behind the diamond facet settings",
        title: "Behind-Stone Cleaning",
        caption: "Brushing pavilion facets removes the skin oils that block light entry."
      },
      {
        type: "paragraph",
        parts: [{ text: "1. Inspect the dry piece: ", bold: true }, { text: "Audit prongs, check for rattling sounds under neutral light. Stop if loose." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "2. Prepare a mild solution: ", bold: true }, { text: "Fill bowl with warm water and mild cleanser. Avoid ammonia or moisturisers." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "3. Soak briefly—only if permitted: ", bold: true }, { text: "Follow seller limits. Skip if glued or vintage parts are present." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "4. Brush gently, including behind the diamond: ", bold: true }, { text: "Brush pavilions lightly without forcing tips beneath prongs." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "5. Rinse in a separate bowl: ", bold: true }, { text: "Rinse in a bowl to prevent drops down plumbing lines. Do not alter water temp quickly." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "6. Dry without rubbing the setting: ", bold: true }, { text: "Pat dry with lint-free towels. Avoid hair dryers or hot vents." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "7. Inspect again before wearing: ", bold: true }, { text: "Re-check stone alignments before putting the jewelry back on." }]
      }
    ]
  },
  {
    heading: "Why cleaning behind the diamond matters",
    content: [
      {
        type: "paragraph",
        text: "Diamonds collect grease quickly. Resides behind pavilions block refraction lines, making clean diamonds look dull. Never use metal pins to clean."
      }
    ]
  },
  {
    heading: "Can you use an ultrasonic cleaner?",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Vibrations can shake prongs loose or fracture treated inclusions. For certificate parameters, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Can you steam-clean lab-grown diamonds?",
    content: [
      {
        type: "paragraph",
        text: "Steam changes thermal levels rapidly, presenting fracture risks. Avoid home steam setups unless approved."
      }
    ]
  },
  {
    heading: "Products and methods to avoid",
    content: [
      {
        type: "image",
        src: "/images/blog/clean-lab-grown-diamond-jewellery/4.jpg",
        alt: "Unsuitable abrasive cleaning products showing warnings",
        title: "Product Warnings",
        caption: "Abrasives like baking soda and chemicals like bleach scratch gold alloys."
      },
      {
        type: "paragraph",
        parts: [{ text: "Toothpaste and abrasive powders: ", bold: true }, { text: "Can scratch gold surfaces and clog gallery details." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Chlorine bleach and pool chemicals: ", bold: true }, { text: "Chlorine attacks gold alloy structures. Remove jewelry before swimming." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Baking soda pastes: ", bold: true }, { text: "Abrasive scratch risk for highly polished shanks." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Boiling water: ", bold: true }, { text: "Extreme thermal shock risk for gemstone inclusions." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Alcohol, sanitiser and household sprays: ", bold: true }, { text: "Contains additives that corrode custom finishes." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Sharp tools: ", bold: true }, { text: "Pins scratch metal seats and dislodge claws." }]
      }
    ]
  },
  {
    heading: "Cleaning different jewellery categories",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Lab-grown diamond rings: ", bold: true }, { text: "Remove rings prior to using skin creams or washing dishes." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Lab-grown diamond earrings: ", bold: true }, { text: "Clean posts and backing elements. Wash backings in separate cups." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Lab-grown diamond necklaces and pendants: ", bold: true }, { text: "Support chain links. Ensure bail settings dry completely." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Lab-grown diamond bracelets: ", bold: true }, { text: "Inspect connections. Lay flat on dry towels to prevent link stresses." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Jewellery with coloured stones: ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Follow the most sensitive component. See mixed-stone guidelines at " },
          { text: "how to care for coloured stones and diamonds", href: "/blog/care-coloured-stones-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How often should you clean at home?",
    content: [
      {
        type: "paragraph",
        text: "Clean when film build-ups occur. Routine wiping with lint-free cloths helps limit soap buildup."
      }
    ]
  },
  {
    heading: "When professional cleaning is the better choice",
    content: [
      {
        type: "paragraph",
        text: "Seek jeweller checks if dirt remains after washing, if mount damage is observed, or if stones show movement."
      }
    ]
  },
  {
    heading: "A two-minute cleaning checklist",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Before: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "Read the exact care instructions.",
          "Identify every material and treatment.",
          "Inspect settings, links and clasps.",
          "Cover the surface and close the drain."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "During: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "Use lukewarm water and only an approved mild cleanser.",
          "Brush gently, especially behind the diamond.",
          "Rinse in a bowl.",
          "Avoid heat, abrasives and unapproved machines."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "After: ", bold: true }]
      },
      {
        type: "bullet-list",
        items: [
          "Pat and air-dry completely.",
          "Inspect the setting again.",
          "Store separately in a soft compartment.",
          "Stop wearing if anything moves or catches."
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
          { text: "Aurelia Royale lists metal types and gem parameters on every care card. Browse collections at " },
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
            text: "Use this conservative seven-step routine for compatible lab-grown diamond jewellery.\n\n"
          },
          {
            text: "Ensure prongs are secure before brushing. Stop if stones rattle, contain delicate treatments, or sit alongside sensitive colored gems. Avoid abrasives like toothpaste."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Are lab-grown diamonds cleaned differently from natural diamonds?",
            answer: "No because of growth origin alone. Both are diamond; the setting, metal, treatments and other materials determine the safe method."
          },
          {
            question: "Can I use washing-up liquid on lab-grown diamond jewellery?",
            answer: "A few drops of mild, non-abrasive liquid may suit compatible modern pieces, but follow the manufacturer’s instructions for the exact item."
          },
          {
            question: "Can I soak lab-grown diamond jewellery overnight?",
            answer: "Do not leave jewellery soaking unattended. Use only the brief period approved for the complete piece."
          },
          {
            question: "Can I clean lab-grown diamonds with toothpaste?",
            answer: "No. Toothpaste is abrasive and can scratch metal or finishes and lodge in settings."
          },
          {
            question: "Can lab-grown diamonds go in an ultrasonic cleaner?",
            answer: "Only when a professional has inspected and approved the exact piece. Vibration can affect settings, treatments and other gemstones."
          },
          {
            question: "Is steam cleaning safe for lab-grown diamond jewellery?",
            answer: "Not universally. Heat and pressure may be unsuitable for other materials, treatments, adhesives or damaged settings."
          },
          {
            question: "Why does my lab-grown diamond look cloudy after washing?",
            answer: "Soap film, incomplete rinsing, trapped residue or lighting may be responsible. If one gentle re-rinse does not help, seek professional inspection."
          },
          {
            question: "How should I clean behind a diamond?",
            answer: "Use an approved mild solution and very soft brush with light pressure. Never insert pins or sharp tools into the setting."
          },
          {
            question: "Can I clean diamond jewellery over the sink?",
            answer: "Use separate bowls over a covered surface. If working near a sink, close the drain securely."
          },
          {
            question: "How should I dry diamond jewellery?",
            answer: "Pat with a lint-free cloth and allow hidden areas to air-dry completely without external heat."
          },
          {
            question: "What if a stone moves during cleaning?",
            answer: "Stop immediately, store the piece safely and arrange professional inspection before wearing it again."
          },
          {
            question: "Can I use this method on coloured-stone diamond jewellery?",
            answer: "Only if every gemstone, treatment, metal and setting is confirmed compatible. Follow the most sensitive component."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Restore Original Brilliance",
        subtitle: "Aurelia Royale provides organic jewelry cleansers and replacement backings custom-fitted for lab-grown jewelry. Contact support.",
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
            How to Clean Lab-Grown Diamond Jewellery at Home
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
