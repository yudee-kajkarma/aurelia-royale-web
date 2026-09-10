import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Evaluate Coloured-Stone Jewellery Online",
  description: "Learn how to assess coloured-stone and diamond jewellery online using specifications, accurate images, reports, scale, returns and seller checks.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/#article",
      "headline": "How to Evaluate Coloured-Stone and Diamond Jewellery Online",
      "description": "Learn how to assess coloured-stone and diamond jewellery online using specifications, accurate images, reports, scale, returns and seller checks.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/evaluate-coloured-stone-diamond-jewellery-online.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How to Evaluate Coloured-Stone and Diamond Jewellery Online", "item": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/evaluate-coloured-stone-diamond-jewellery-online/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Can I judge a coloured gemstone accurately from a photograph?", "acceptedAnswer": { "@type": "Answer", "text": "You can assess aspects of appearance, but lighting, editing and screens affect colour, and photos cannot prove identity or treatment." } },
        { "@type": "Question", "name": "Should the seller show the exact coloured stone?", "acceptedAnswer": { "@type": "Answer", "text": "Exact-stone images are preferable for unique items; representative imagery should clearly explain expected variation." } },
        { "@type": "Question", "name": "Which jewellery photographs are essential?", "acceptedAnswer": { "@type": "Answer", "text": "Look for front, side, back, macro and on-body images plus slow movement video and a neutral-background view." } },
        { "@type": "Question", "name": "How do I understand gemstone size online?", "acceptedAnswer": { "@type": "Answer", "text": "Use stone and complete jewellery dimensions in millimetres alongside carat weight and on-body scale." } },
        { "@type": "Question", "name": "Can video prove that a stone is natural?", "acceptedAnswer": { "@type": "Answer", "text": "No. Video shows appearance and movement; origin requires proper disclosure and testing." } },
        { "@type": "Question", "name": "How do I verify a jewellery report online?", "acceptedAnswer": { "@type": "Answer", "text": "Use the issuing laboratory's official service and match the number, item, identity, dimensions, photograph and comments." } },
        { "@type": "Question", "name": "Why does a mounted report show grade ranges?", "acceptedAnswer": { "@type": "Answer", "text": "The setting can restrict observation and measurement, so characteristics may be reported conservatively as mounting permits." } },
        { "@type": "Question", "name": "Should coloured-stone and diamond weights be separate?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Centre, coloured side stones and diamond accents should have a visible breakdown." } },
        { "@type": "Question", "name": "What does a representative product image mean?", "acceptedAnswer": { "@type": "Answer", "text": "It shows the expected design rather than the exact supplied stone; realistic variation should be explained." } },
        { "@type": "Question", "name": "Can made-to-order jewellery be returned?", "acceptedAnswer": { "@type": "Answer", "text": "Policies and legal exceptions vary; personalised or made-to-order goods may be excluded from standard withdrawal rights." } },
        { "@type": "Question", "name": "What should I save before checkout?", "acceptedAnswer": { "@type": "Answer", "text": "Save specifications, images, choices, reports, written answers, delivered price, return terms, warranty and confirmation." } },
        { "@type": "Question", "name": "What should I check immediately after delivery?", "acceptedAnswer": { "@type": "Answer", "text": "Compare the item and documents with the saved listing and report discrepancies before altering or extensively wearing it." } }
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
        src: "/images/blog/evaluate-coloured-stone-diamond-jewellery-online/1.jpg",
        alt: "Assessing a colored stone and diamond jewelry layout online",
        title: "Online Gem Valuation",
        caption: "Evaluate online jewelry using specifications, reports, scale metrics, and transaction terms.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Buying online removes the opportunity to hold a piece under different lights before paying. It should not remove the information needed to assess it."
      },
      {
        type: "paragraph",
        text: "A reliable evaluation combines three forms of evidence: complete product specifications, honest visual presentation and verifiable commercial terms. No photograph, certificate or return policy is enough on its own."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Evaluate coloured-stone and diamond jewellery online in three passes. First, confirm every stone’s identity, natural or laboratory-created status, treatments, dimensions and separate weights. Second, inspect neutral, macro, side, back, movement and on-body imagery, checking whether the exact stone or a representative sample is shown. Third, match any laboratory report to the item, verify the seller, read delivery, return, warranty and customisation terms, and save the product description. After delivery, inspect the piece within the return period under neutral and everyday lighting."
      }
    ]
  },
  {
    heading: "The three-pass online method",
    content: [
      {
        type: "table",
        headers: ["Pass", "Main question", "Evidence required"],
        rows: [
          ["1. Identity", "What exactly am I buying?", "Stone, treatment, origin, dimensions, weights, metal"],
          ["2. Appearance", "What can I reasonably expect it to look like?", "Accurate multi-angle images, video, scale, variation policy"],
          ["3. Transaction", "Can I verify and resolve a mismatch?", "Seller identity, report, delivery, returns, warranty, saved records"]
        ]
      }
    ]
  },
  {
    heading: "Pass one: establish what the piece contains",
    content: [
      {
        type: "image",
        src: "/images/blog/evaluate-coloured-stone-diamond-jewellery-online/2.jpg",
        alt: "Checking exact gemstone metrics in specification charts",
        title: "Pass One Auditing",
        caption: "Core stone details, treatments, and weights must be separated explicitly."
      },
      {
        type: "paragraph",
        parts: [{ text: "1. Identify every stone separately: ", bold: true }, { text: "Verify gemstone species, lab-created or natural origin, and treatment. Ensure accents are named separately." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "2. Separate every carat figure: ", bold: true }]
      },
      {
        type: "table",
        headers: ["Figure", "Meaning"],
        rows: [
          ["Centre-stone carat weight", "Weight of the focal coloured stone or diamond"],
          ["Diamond accent total", "Combined weight of supporting diamonds"],
          ["Coloured side-stone total", "Combined weight of additional coloured stones"],
          ["Complete gemstone total", "Optional combined figure only when the breakdown remains visible"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For more details on diamond totals, see " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "3. Use millimetres to understand scale: ", bold: true }],
        text: "Compare width and depth settings in millimetres. Densities vary: carat is weight, not visible footprint."
      },
      {
        type: "paragraph",
        parts: [{ text: "4. Check the metal and construction: ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Verify metal fineness and alloy composition. For checklists, see " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Pass two: evaluate what the imagery proves",
    content: [
      {
        type: "image",
        src: "/images/blog/evaluate-coloured-stone-diamond-jewellery-online/3.jpg",
        alt: "Multi-angle photo view of a setting profile",
        title: "Pass Two Inspection",
        caption: "Inspecting back profiles and setting links in videos reveals manufacturing flaws."
      },
      {
        type: "paragraph",
        parts: [{ text: "5. Ask whether you are seeing the exact stone: ", bold: true }, { text: "Confirm if images show unique stock or representative styling layouts." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "6. Require a complete image set: ", bold: true }]
      },
      {
        type: "numbered-list",
        items: [
          "Straight-on view.",
          "Side or profile view.",
          "Back and underside view.",
          "Macro setting detail.",
          "On-body scale.",
          "Video showing movement.",
          "Neutral-background image.",
          "Packaging or included-document view where relevant."
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "7. Judge colour across several conditions: ", bold: true }, { text: "Watch for color variations under warm vs daylight setups. Spot exaggerated saturation editing." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "8. Inspect the cut and setting visually: ", bold: true }, { text: "Audit symmetry and look for window light leaks under zoom." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "9. Evaluate diamond accents as a group: ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Confirm accent grades and origins. For grades, see " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "10. Use video to test movement and proportion: ", bold: true }, { text: "Videos must show slow rotation and realistic hanging profiles." }]
      }
    ]
  },
  {
    heading: "Pass three: verify the evidence and transaction",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "11. Match the laboratory report to the item: ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cross-check report parameters (measurements, weights, dates). See " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "12. Verify the seller, not only the product: ", bold: true }, { text: "Check business registry name, physical contacts, and ship location details." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "13. Read delivery, returns and warranty before paying: ", bold: true }, { text: "Confirm return windows and check if customized sizing exclusions apply." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "14. Save the evidence: ", bold: true }, { text: "Export specifications, transaction details, and order confirmations to email archives." }]
      }
    ]
  },
  {
    heading: "Compare two products with a scorecard",
    content: [
      {
        type: "image",
        src: "/images/blog/evaluate-coloured-stone-diamond-jewellery-online/4.jpg",
        alt: "Comparing two listings side-by-side using the scorecard table",
        title: "Product Scorecards",
        caption: "Comparing listings itemized by layers reveals hidden quality gaps."
      },
      {
        type: "table",
        headers: ["Field", "Product A", "Product B"],
        rows: [
          ["Exact stone identity", "", ""],
          ["Natural/laboratory-created status", "", ""],
          ["Treatments", "", ""],
          ["Centre dimensions and weight", "", ""],
          ["Diamond accent breakdown", "", ""],
          ["Metal and complete dimensions", "", ""],
          ["Exact or representative imagery", "", ""],
          ["Multi-angle images and video", "", ""],
          ["Verified report and scope", "", ""],
          ["Seller identity", "", ""],
          ["Delivered price", "", ""],
          ["Return and warranty terms", "", ""]
        ]
      }
    ]
  },
  {
    heading: "What to do when the jewellery arrives",
    content: [
      {
        type: "numbered-list",
        items: [
          "Film or photograph the unopened parcel if damage is visible.",
          "Check packaging, item and documents against the order.",
          "Examine under neutral daylight-style and normal indoor lighting.",
          "Compare identity, dimensions and weight labels with the saved listing.",
          "Check prongs, clasps and stone alignment without forcing them.",
          "Verify the report again and match any item photograph or inscription professionally where appropriate.",
          "Try on over a soft surface without removing tags until the return policy permits.",
          "Contact the seller immediately about discrepancies."
        ]
      }
    ]
  },
  {
    heading: "Online red flags",
    content: [
      {
        type: "bullet-list",
        items: [
          "No exact gemstone identity.",
          "“Natural” used without treatment information.",
          "Every stone described by one generic certificate.",
          "No millimetre dimensions or on-body scale.",
          "Only one front-facing rendered image.",
          "Dramatically different colour across images.",
          "Combined carat figure without breakdown.",
          "Report number that does not verify or match.",
          "No legal seller identity or return address.",
          "Personalised-item terms introduced only after payment.",
          "Countdown timers or pressure claims replacing product information."
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
          { text: "Aurelia Royale structures listings to describe gemstone parameters, diamond grades, and metals itemized by layer. View options at " },
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
            text: "Evaluate online jewellery in three passes: confirm what it contains, inspect what the imagery proves, then verify the report, seller and purchase terms.\n\n"
          },
          {
            text: "Do not guess identity or parameters. Utilize scorecards to isolate specification points and check shipment files promptly before custom resizing alterations."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Can I judge a coloured gemstone accurately from a photograph?",
            answer: "You can assess aspects of appearance, but lighting, editing and screens affect colour. Photos cannot reliably prove identity, origin or treatment."
          },
          {
            question: "Should the seller show the exact coloured stone?",
            answer: "For unique items, exact-stone images are preferable. For repeat-stock designs, natural colour and inclusion variation may mean the image is representative."
          },
          {
            question: "Which jewellery photographs are essential?",
            answer: "Look for front, side, back, macro and on-body images plus a slow movement video and neutral-background view."
          },
          {
            question: "How do I understand gemstone size online?",
            answer: "Use stone and complete jewellery dimensions in millimetres alongside carat weight and on-body scale."
          },
          {
            question: "Can video prove that a stone is natural?",
            answer: "No. Video can show appearance and movement, but natural or laboratory-created origin requires proper disclosure and testing."
          },
          {
            question: "How do I verify a jewellery report online?",
            answer: "Use the issuing laboratory’s official service and match the number, item type, identity, dimensions, photograph and comments."
          },
          {
            question: "Why does a mounted report show grade ranges?",
            answer: "The setting can restrict observation and measurement, so some laboratories report characteristics conservatively as mounting permits."
          },
          {
            question: "Should coloured-stone and diamond weights be separate?",
            answer: "Yes. Centre, coloured side stones and diamond accents should have a visible breakdown rather than one ambiguous total."
          },
          {
            question: "What does a representative product image mean?",
            answer: "It shows the expected design rather than the exact supplied stone. The seller should explain realistic colour, inclusion, size or weight variation."
          },
          {
            question: "Can made-to-order jewellery be returned?",
            answer: "Policies and legal exceptions vary. Check the applicable terms before ordering; personalised or made-to-order goods may be excluded from standard withdrawal rights."
          },
          {
            question: "What should I save before checkout?",
            answer: "Save specifications, images, variation choices, reports, written answers, delivered price, return terms, warranty and order confirmation."
          },
          {
            question: "What should I check immediately after delivery?",
            answer: "Compare the item and documents with the saved listing, inspect under different normal lights and report discrepancies before altering or extensively wearing it."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Secure Your Selection",
        subtitle: "Aurelia Royale pairs detailed specification sheets and HD visual layouts for every mixed design. Shop with confidence.",
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
            How to Evaluate Coloured-Stone and Diamond Jewellery Online
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
      <RelatedArticles currentSlug="evaluate-coloured-stone-diamond-jewellery-online" />
      <NewsletterSection />
    </main>
  );
}
