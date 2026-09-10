import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Check If a Diamond Is Loose",
  description: "Learn the safe warning signs of a loose diamond—movement, rattling, gaps and damaged prongs—and what to do before the stone is lost.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/",
  },
};

// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/#article",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/" },
      "headline": "How to Check Diamond Jewellery for Loose Stones",
      "description": "Learn the safe warning signs of a loose diamond—movement, rattling, gaps and damaged prongs—and what to do before the stone is lost.",
      "image": "https://www.aureliaroyale.com/images/blog/check-diamond-jewellery-loose-stones.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" } },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["how to check if a diamond is loose", "loose diamond ring", "signs of loose stone", "check jewellery prongs"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How to Check Diamond Jewellery for Loose Stones", "item": "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How can I tell if my diamond is loose?", "acceptedAnswer": { "@type": "Answer", "text": "Warning signs include visible movement, rattling during normal handling, a new gap, changed prongs, tilting or repeated snagging." } },
        { "@type": "Question", "name": "Should I shake my ring to check the diamond?", "acceptedAnswer": { "@type": "Answer", "text": "No. Repeated shaking can worsen movement. If it rattles in ordinary handling, box it and arrange inspection." } },
        { "@type": "Question", "name": "Can I push a diamond to see if it moves?", "acceptedAnswer": { "@type": "Answer", "text": "Do not push, twist or probe it. Visual warning signs and professional assessment are safer." } },
        { "@type": "Question", "name": "What does a loose diamond sound like?", "acceptedAnswer": { "@type": "Answer", "text": "It may produce a faint rattle or click during ordinary handling, but not every loose stone makes a sound." } },
        { "@type": "Question", "name": "Can a loose diamond fall out suddenly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once secure contact is lost, normal movement or a small snag may release the stone." } },
        { "@type": "Question", "name": "Can I tighten a loose prong at home?", "acceptedAnswer": { "@type": "Answer", "text": "No. Correct tightening requires setting knowledge and appropriate bench tools." } },
        { "@type": "Question", "name": "Is snagging a sign of a loose diamond?", "acceptedAnswer": { "@type": "Answer", "text": "New snagging can indicate a lifted, worn or damaged prong. Stop wearing the piece until inspected." } },
        { "@type": "Question", "name": "How do I check pavé diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Look for interrupted spacing, a tilted stone, a dark empty point or raised metal. Do not rub, press or probe the row." } },
        { "@type": "Question", "name": "Can I clean jewellery with a loose stone?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid cleaning it because brushing, rinsing or machine vibration may release the stone. Arrange inspection first." } },
        { "@type": "Question", "name": "How often should diamond settings be professionally checked?", "acceptedAnswer": { "@type": "Answer", "text": "Follow seller and insurer guidance; six-monthly checks are commonly recommended for frequently worn prong-set jewellery." } },
        { "@type": "Question", "name": "What should I do with a diamond that has fallen out?", "acceptedAnswer": { "@type": "Answer", "text": "Place it in a small sealed inner container, store it separately from the jewellery and take both to a qualified professional." } },
        { "@type": "Question", "name": "Are lab-grown diamonds more likely to become loose?", "acceptedAnswer": { "@type": "Answer", "text": "No. Security depends on setting design, workmanship, metal condition and wear—not growth origin." } }
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
        text: "A loose diamond is a condition problem, not a home-repair project. The aim of an owner’s check is to notice warning signs early and stop wearing the jewellery before the stone or setting suffers further damage."
      },
      {
        type: "paragraph",
        text: "Use bright, diffuse light, clean hands and—if available—a simple loupe. Look for changes in prongs, bezels, pavé rows, channels and clasps. Do not push the diamond, bend metal, insert a pin around the setting or repeatedly shake the piece to prove that it moves."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Check diamond jewellery over a soft, clean surface under bright diffuse light. Compare the stone and setting from the top and sides. Warning signs include visible movement, a faint rattle during ordinary handling, a new gap between stone and setting, uneven or lifted prongs, snagging, a tilted stone, missing metal, or a changed pavé or channel line. If you notice any sign, remove the piece immediately, isolate it in a padded box and arrange inspection by a qualified jeweller. Do not wear, clean, polish or attempt to tighten it yourself."
      }
    ]
  },
  {
    heading: "Stop immediately if the stone moves or rattles",
    content: [
      {
        type: "paragraph",
        text: "Stop handling immediately if stones rattle. For tool details on setting checks, see " },
      {
        type: "paragraph",
        parts: [
          { text: "what certified lab-grown diamond jewellery means" },
          { text: "certified lab-grown diamond jewellery meaning", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "What causes a diamond to become loose?",
    content: [
      {
        type: "paragraph",
        text: "Common causes of loose diamonds include:"
      },
      {
        type: "bullet-list",
        items: [
          "A prong may thin through repeated contact.",
          "Impact can move a prong or distort a setting.",
          "Two rings may rub at the same contact point.",
          "A bracelet or necklace link may twist.",
          "A piece may snag on fabric or hair.",
          "Resizing, repair or previous polishing may alter nearby metal.",
          "An original setting may have insufficient or uneven contact.",
          "Dirt can hide a developing gap until cleaning exposes it."
        ]
      }
    ]
  },
  {
    heading: "Prepare a safe inspection area",
    content: [
      {
        type: "numbered-list",
        items: [
          "Choose a table away from sinks, drains and floor gaps.",
          "Cover it with a clean, pale, lint-free padded surface.",
          "Close doors and keep children and pets away.",
          "Use bright, diffuse light rather than harsh glare.",
          "Wash and dry your hands.",
          "Have the original product photographs available for comparison."
        ]
      }
    ]
  },
  {
    heading: "A safe visual check in five steps",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "1. Establish the normal view: ", bold: true }, { text: "Look straight down at the gem. Check if centre tables look tilted." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "2. Inspect from above: ", bold: true }, { text: "Verify prong symmetry and check bead alignments." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "3. Inspect from the side: ", bold: true }, { text: "Look for gaps between facet tables and seating walls. Do not probe." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "4. Use magnification carefully: ", bold: true }, { text: "Audit claw wear using simple 10x lenses over towels." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "5. Compare with the other side or matching piece: ", bold: true }, { text: "For earrings, compare left with right sides to spot changes." }]
      }
    ]
  },
  {
    heading: "Warning signs of a loose diamond",
    content: [
      {
        type: "table",
        headers: ["Warning sign", "What it may indicate", "Action"],
        rows: [
          ["Visible stone movement", "Loss of secure metal contact", "Stop wearing immediately"],
          ["Rattle during ordinary handling", "Stone moving within setting", "Box and arrange inspection"],
          ["New gap beside stone", "Worn, bent or inadequate setting contact", "Do not probe the gap"],
          ["Uneven, raised or missing prong", "Impact or progressive wear", "Avoid cleaning and wear"],
          ["Stone sits tilted", "Displacement or setting distortion", "Isolate the piece"],
          ["New snagging on fabric", "Lifted prong or rough damaged edge", "Stop wearing it"],
          ["Broken pavé pattern", "Missing or displaced small stone", "Inspect entire row professionally"],
          ["Changed channel line", "Bent rail or displaced stone", "Avoid pressing the stones"]
        ]
      }
    ]
  },
  {
    heading: "Prong-set diamonds",
    content: [
      {
        type: "paragraph",
        text: "Inspect prongs covering pear or marquise corners. Do not use toothpicks to test."
      }
    ]
  },
  {
    heading: "Bezel-set diamonds",
    content: [
      {
        type: "paragraph",
        text: "Look for dented metal or gaps along bezels. Never slide sharp blades under rims."
      }
    ]
  },
  {
    heading: "Pavé and micro-pavé",
    content: [
      {
        type: "paragraph",
        text: "If beads fail, small stones fall out. Look for:"
      },
      {
        type: "bullet-list",
        items: [
          "a dark empty point;",
          "a stone sitting at a different angle;",
          "interrupted spacing;",
          "a raised bead;",
          "new roughness; or",
          "repeated snagging."
        ]
      }
    ]
  },
  {
    heading: "Channel-set diamonds",
    content: [
      {
        type: "paragraph",
        text: "Ensure rails remain parallel. Never push channel gems down manually."
      }
    ]
  },
  {
    heading: "How to check rings, earrings, necklaces and bracelets",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Rings: ", bold: true }, { text: "Verify prongs where rings strike adjacent bands." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Earrings: ", bold: true }, { text: "Check back clips and posts alongside diamonds." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Necklaces and pendants: ", bold: true }, { text: "Audit connecting bail loops and pendant links." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Bracelets: ", bold: true }, { text: "Compare clasp safety locks and joint links flat." }]
      }
    ]
  },
  {
    heading: "What not to do",
    content: [
      {
        type: "bullet-list",
        items: [
          "Do not shake jewellery beside your ear.",
          "Do not push or rotate the diamond.",
          "Do not use tweezers, pins, needles or blades.",
          "Do not squeeze prongs with household pliers.",
          "Do not glue a stone or setting.",
          "Do not clean a suspected loose stone ultrasonically.",
          "Do not wear it “one last time”.",
          "Do not ship it loose in an envelope or shared pouch."
        ]
      }
    ]
  },
  {
    heading: "What to do when a diamond is loose",
    content: [
      {
        type: "numbered-list",
        items: [
          "Stop wearing the jewellery.",
          "Place it flat in a fitted or padded box.",
          "If a stone has detached, place it in a separate sealed inner container and label it; do not let it rub against the jewellery.",
          "Photograph the piece without excessive handling.",
          "Find the product details, report, receipt and previous repair records.",
          "Contact the seller or a qualified bench jeweller.",
          "Ask for the setting and adjacent stones to be inspected—not only the visibly loose diamond."
        ]
      }
    ]
  },
  {
    heading: "How often should settings be checked?",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify claws before weekly home cleans. See scheduling at " },
          { text: "how often diamond jewellery should be cleaned", href: "/blog/how-often-clean-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "After professional repair",
    content: [
      {
        type: "paragraph",
        text: "Verify repair details on invoices and recheck baselines before wearing items again."
      }
    ]
  },
  {
    heading: "The Aurelia Royale recommendation",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale provides lifetime checkup services at our workshop. Shop options at " },
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
            text: "Inspect diamond jewellery under bright diffuse light without pushing, twisting or probing the stone.\n\n"
          },
          {
            text: "Movement, rattling, gaps, snagging or changed prongs mean stop wearing it immediately. Isolate the piece in a padded box and contact a bench jeweler."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "How can I tell if my diamond is loose?",
            answer: "Warning signs include visible movement, rattling during normal handling, a new gap, changed prongs, tilting or repeated snagging. Stop wearing the piece if any appears."
          },
          {
            question: "Should I shake my ring to check the diamond?",
            answer: "No. Repeated shaking can worsen movement. If it already rattles in ordinary handling, box it and arrange professional inspection."
          },
          {
            question: "Can I push a diamond to see if it moves?",
            answer: "Do not push, twist or probe it. Visual warning signs and professional assessment are safer than deliberately stressing the setting."
          },
          {
            question: "What does a loose diamond sound like?",
            answer: "It may produce a faint rattle or click during ordinary handling, but not every loose stone makes a sound. Do not shake the jewellery to test it."
          },
          {
            question: "Can a loose diamond fall out suddenly?",
            answer: "Yes. Once secure contact is lost, normal movement or a small snag may release the stone. Stop wearing the jewellery immediately."
          },
          {
            question: "Can I tighten a loose prong at home?",
            answer: "No. Correct tightening requires setting knowledge and appropriate bench tools. Improvised pressure may damage the metal or stone."
          },
          {
            question: "Is snagging a sign of a loose diamond?",
            answer: "New snagging can indicate a lifted, worn or damaged prong. Stop wearing the piece until it has been inspected."
          },
          {
            question: "How do I check pavé diamonds?",
            answer: "Look for interrupted spacing, a tilted stone, a dark empty point or raised metal. Do not rub, press or probe the row."
          },
          {
            question: "Can I clean jewellery with a loose stone?",
            answer: "Avoid cleaning it. Brushing, rinsing or machine vibration may release the stone. Arrange inspection first."
          },
          {
            question: "How often should diamond settings be professionally checked?",
            answer: "Follow the seller’s and insurer’s guidance; six-monthly checks are commonly recommended for frequently worn prong-set jewellery, with earlier checks after impact or warning signs."
          },
          {
            question: "What should I do with a diamond that has fallen out?",
            answer: "Place the loose diamond in a small sealed inner container, store it separately from the jewellery and take both to a qualified professional."
          },
          {
            question: "Are lab-grown diamonds more likely to become loose?",
            answer: "No. Stone security depends on setting design, workmanship, metal condition and wear—not whether the diamond is lab-grown or natural."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Restore Setting Security",
        subtitle: "Aurelia Royale offers complimentary claw inspections and prong retightenings for all purchases. Contact our workshop.",
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
            How to Check Diamond Jewellery for Loose Stones
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
      <RelatedArticles currentSlug="check-diamond-jewellery-loose-stones" />
      <NewsletterSection />
    </main>
  );
}
