import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Check Jewellery Dimensions and Weight Online",
  description: "Learn how to read jewellery dimensions, wearable length and finished weight for rings, earrings, necklaces, pendants, bracelets and sets.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#article",
      "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/"},
      "headline": "How to Check a Jewellery Product’s Dimensions and Weight",
      "description": "Learn how to read jewellery dimensions, wearable length and finished weight for rings, earrings, necklaces, pendants, bracelets and sets.",
      "image": "https://www.aureliaroyale.com/images/blog/check-jewellery-product-dimensions-weight.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "publisher": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "inLanguage": "en-GB",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": ["jewellery dimensions and weight", "jewellery product measurements", "finished jewellery weight", "how to read jewellery dimensions"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/"},
        {"@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/"},
        {"@type": "ListItem", "position": 3, "name": "How to Check Jewellery Dimensions and Weight", "item": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#faq",
      "mainEntity": [
        {"@type": "Question", "name": "What do jewellery dimensions mean?", "acceptedAnswer": {"@type": "Answer", "text": "They describe physical length, width, height, depth or thickness, usually in millimetres or centimetres. The listing should show each measurement's endpoints."}},
        {"@type": "Question", "name": "Is jewellery weight the same as diamond carat weight?", "acceptedAnswer": {"@type": "Answer", "text": "No. Diamond weight is measured in carats. Finished jewellery weight is usually measured in grams and can include metal, stones and components."}},
        {"@type": "Question", "name": "What does approximate jewellery weight include?", "acceptedAnswer": {"@type": "Answer", "text": "It commonly means the complete finished piece, but scope varies. Confirm included detachable parts, gemstones and the size weighed."}},
        {"@type": "Question", "name": "Can two rings in the same design have different weights?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Ring size, stone dimensions, polishing and manufacturing tolerance can change weight. Different metals also have different densities."}},
        {"@type": "Question", "name": "How do I know how large a pendant will look?", "acceptedAnswer": {"@type": "Answer", "text": "Check height with and without the bail, maximum width and depth. Draw the outline at actual size and compare it with a pendant you own."}},
        {"@type": "Question", "name": "Does necklace length include the pendant?", "acceptedAnswer": {"@type": "Answer", "text": "Chain length and pendant drop should be stated separately, but listings vary. Confirm end-to-end chain length and total hanging drop."}},
        {"@type": "Question", "name": "Is bracelet length the same as wrist size?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. Flat length, inner circumference and recommended wrist size differ, particularly for thick settings. Ask for wearable inner length."}},
        {"@type": "Question", "name": "What ring dimensions matter besides ring size?", "acceptedAnswer": {"@type": "Answer", "text": "Check ring-head size, setting height, shank width, shank thickness and clearance for stacking."}},
        {"@type": "Question", "name": "Should earring weight be listed per pair or per earring?", "acceptedAnswer": {"@type": "Answer", "text": "The scope should be explicit. Weight per earring is most useful for comfort, while total pair weight can support inventory information."}},
        {"@type": "Question", "name": "Can I measure jewellery from a website image?", "acceptedAnswer": {"@type": "Answer", "text": "No, unless the image contains a calibrated scale and displays at its intended size. Responsive images, cropping and perspective alter apparent dimensions."}},
        {"@type": "Question", "name": "Does heavier jewellery mean better quality?", "acceptedAnswer": {"@type": "Answer", "text": "No. Weight may indicate more material but does not prove alloy fineness, engineering, setting quality or finish."}},
        {"@type": "Question", "name": "What should I ask if dimensions are missing?", "acceptedAnswer": {"@type": "Answer", "text": "Request a labelled height by width by depth diagram, wearable length, finished-weight scope, represented variant and permitted tolerance."}}
      ]
    }
  ]
};

// 3. Article content sections
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (1).jpg",
        alt: "Measuring diamond jewellery dimensions using a digital gauge",
        title: "Measuring Jewellery Scale",
        caption: "Online photos can make jewellery appear larger than it is; check physical dimensions and weight to determine accurate scale.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Online jewellery photographs are designed to reveal fine detail. That same magnification can make a small pendant look substantial, a low-profile ring look tall or delicate earrings look heavier than they are."
      },
      {
        type: "paragraph",
        text: "Dimensions and weight bring the image back to scale."
      },
      {
        type: "paragraph",
        text: "Before ordering, identify exactly what each number measures, which variant it represents and whether it is exact or approximate. A useful specification should tell you more than “small”, “delicate” or “lightweight”. It should help you predict how the piece will occupy space, sit on the body and feel in wear."
      },
      {
        type: "paragraph",
        text: "This guide shows how to interpret those measurements without confusing diamond carat weight, finished jewellery weight and visible size."
      },
      {
        type: "callout",
        title: "Quick answer: what dimensions should a jewellery page provide?",
        parts: [
          { text: "Depending on the category, check:\n\n", bold: true },
          { text: "1. Overall height, width and depth in millimetres.\n2. Diamond or gemstone dimensions separately from the setting.\n3. Ring head width, setting height, shank width and shank thickness.\n4. Earring face-up size, drop length, post length and weight per earring.\n5. Pendant height, width, depth and bail opening.\n6. Necklace chain length, adjustment positions, gauge and pendant dimensions.\n7. Bracelet wearable inner length, width, thickness and clasp dimensions.\n8. Approximate finished weight in grams and the variant it represents.\n9. Individual and total diamond weight in carats, clearly labelled.\n10. Measurement and manufacturing tolerances.\n\nNever assume that a single “length” figure means wearable length or that one “weight” figure means metal weight." }
        ]
      }
    ]
  },
  {
    heading: "Learn the four different kinds of size information",
    content: [
      {
        type: "paragraph",
        text: "Jewellery listings often place unlike measurements beside each other."
      },
      {
        type: "table",
        headers: ["Information", "Typical unit", "What it describes"],
        rows: [
          ["Finished dimensions", "mm or cm", "Physical height, width, depth, length or thickness"],
          ["Ring or wearable size", "National size, circumference or diameter", "Fit around a finger, wrist or neck"],
          ["Diamond weight", "ct", "Mass of diamonds, not finished-jewellery weight"],
          ["Finished product weight", "g", "Approximate mass of metal, stones and components together"]
        ]
      },
      {
        type: "paragraph",
        text: "One metric carat equals 0.2 grams, but converting the total diamond carats into grams does not reveal the metal weight or construction. Keep every figure in its own column."
      }
    ]
  },
  {
    heading: "Millimetres are small—but visually important",
    content: [
      {
        type: "paragraph",
        text: "Ten millimetres equal one centimetre. On a jewellery drawing, a difference of one or two millimetres can materially change appearance or comfort."
      },
      {
        type: "paragraph",
        text: "To visualise a listing:"
      },
      {
        type: "bullet-list",
        items: [
          "mark the stated size on a ruler;",
          "draw the outline on paper at actual scale;",
          "compare it with a piece you already own;",
          "use a printable guide only at 100% scale; and",
          "check that your screen tool has a calibration reference."
        ]
      },
      {
        type: "paragraph",
        text: "Do not measure the jewellery directly from a webpage image unless the seller explicitly provides a calibrated scale. Responsive images change size across screens."
      }
    ]
  },
  {
    heading: "Length, width, height, depth and thickness",
    content: [
      {
        type: "paragraph",
        text: "Sellers do not always use these terms identically, so diagrams matter."
      },
      {
        type: "bullet-list",
        items: [
          "Length usually describes the longest direction, but on a necklace it may mean chain length, while on an earring it may mean total drop.",
          "Width usually describes the side-to-side face-up measurement.",
          "Height may mean top-to-bottom face-up length or how far a setting rises from the body.",
          "Depth often means front-to-back thickness or setting projection.",
          "Thickness describes the cross-section of a shank, chain, link or component."
        ]
      },
      {
        type: "paragraph",
        text: "If a page lists “10 × 8 mm” without a diagram, ask which number is height and which is width. For three values, confirm their order."
      }
    ]
  },
  {
    heading: "Diamond measurements are not finished-jewellery dimensions",
    content: [
      {
        type: "paragraph",
        text: "A diamond grading report can state the stone’s length, width and depth. Those numbers describe the diamond, not the halo, prongs, bezel or entire ring head."
      },
      {
        type: "paragraph",
        text: "Similarly, carat measures diamond mass. Two equal-carat diamonds can have different face-up measurements because shape and proportions distribute weight differently. A setting then changes the apparent outline again."
      },
      {
        type: "paragraph",
        text: "For a centre-stone design, record three separate facts: diamond carat weight, diamond measurements, and complete setting or ring-head dimensions."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: " for the diamond-specific comparison and " },
          { text: "what total carat weight means", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: " for multi-stone pieces." }
        ]
      }
    ]
  },
  {
    heading: "What does finished jewellery weight include?",
    content: [
      {
        type: "paragraph",
        text: "Finished weight normally refers to the complete piece as weighed: metal, diamonds, coloured stones, solder, clasp, springs and other components. It is not automatically the weight of precious metal alone."
      },
      {
        type: "paragraph",
        text: "Before comparing wedding or engagement ring weights, ask:"
      },
      {
        type: "bullet-list",
        items: [
          "Is the value finished product weight or metal weight?",
          "Does it include the chain, earring backs or detachable parts?",
          "Is it per earring or per pair?",
          "Which ring size, bracelet length or chain length was weighed?",
          "Is it exact, average, minimum or approximate?",
          "What manufacturing tolerance applies?"
        ]
      },
      {
        type: "paragraph",
        text: "A ring in a larger size normally requires more material than the same design in a smaller size. A longer necklace or bracelet may also weigh more. Made-to-order pieces can vary slightly while remaining within specification."
      }
    ]
  },
  {
    heading: "Weight can suggest construction—but does not prove quality",
    content: [
      {
        type: "paragraph",
        text: "When two pieces share the same dimensions and alloy, a large weight difference may indicate different shank thickness, link construction or hollow areas. However, weight alone cannot show workmanship, durability or value."
      },
      {
        type: "paragraph",
        text: "A lightweight design may be intentionally refined and comfortable. A substantial design may feel secure but be unsuitable for someone who prefers minimal weight. Hollow construction can create volume with less material, but should be disclosed because dent resistance and repair options may differ."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Metal density also differs. Identically shaped pieces made in different alloys will not necessarily weigh the same. Use " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: " before treating grams as a direct purity or value test." }
        ]
      }
    ]
  },
  {
    heading: "How to read ring dimensions",
    content: [
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (2).jpg",
        alt: "Measuring ring shank width, setting height, and band thickness",
        title: "Measuring Ring Head & Setting Height",
        caption: "Check shank width, thickness, and setting height separately from the ring size to understand the scale."
      },
      {
        type: "paragraph",
        text: "Ring size describes the inside fit. It does not describe the visible scale or structure. Check:"
      },
      {
        type: "bullet-list",
        items: [
          "inside size: stated in a named sizing system;",
          "ring-head width and length: complete face-up setting dimensions;",
          "setting height: distance the highest point projects above the finger;",
          "shank width: visible band width across the finger;",
          "shank thickness: material depth, ideally at the base and shoulders;",
          "gallery or under-bezel clearance: relevant to stacking; and",
          "approximate finished weight: for the selected or reference size."
        ]
      },
      {
        type: "paragraph",
        text: "A tall setting may allow another band to sit closer but can catch more readily. A wide shank can fit more snugly than a narrow band in the same nominal size. Decorative shoulders can also change perceived width."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to measure your ring size", href: "/blog/how-to-measure-ring-size/" },
          { text: " for fit; do not infer fit from outside diameter." }
        ]
      }
    ]
  },
  {
    heading: "How to read earring dimensions and weight",
    content: [
      {
        type: "paragraph",
        text: "For studs, check the full face-up diameter or height and width—not only the diamond dimensions. A halo or bezel can make the finished earring significantly larger."
      },
      {
        type: "paragraph",
        text: "For drops, check: total drop from the piercing, decorative element height and width, distance between articulated sections, post/hook/wire length, front-to-back depth, and finished weight per earring."
      },
      {
        type: "paragraph",
        text: "“Pair weight” can conceal how much each ear carries. If comfort matters, request grams per earring and compare them with a pair you already wear comfortably. Also confirm the weight and type of backs because substantial backs can improve balance but add mass."
      }
    ]
  },
  {
    heading: "How to read necklace and pendant dimensions",
    content: [
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (3).jpg",
        alt: "Measuring necklace chain length and pendant drop size",
        title: "Pendant and Chain Scale Check",
        caption: "Confirm the chain length and pendant body specs separately from the bail opening size."
      },
      {
        type: "paragraph",
        parts: [{ text: "Chain specs: ", bold: true }, { text: "Record end-to-end length, wearable length when fastened, adjustment points, chain width or gauge, clasp dimensions, and chain-only weight where available." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Pendant specs: ", bold: true }, { text: "Record pendant height excluding and including the bail, maximum width, depth or projection, bail internal opening, and whether the pendant detaches from the chain." }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "A “20 mm pendant” could include the bail or describe only the decorative body. That difference affects both visible drop and compatibility with another chain. Use " },
          { text: "how to select the right necklace length", href: "/blog/select-right-necklace-length/" },
          { text: " for approximate placement, remembering that neck circumference, clothing and pendant weight change where it sits." }
        ]
      }
    ]
  },
  {
    heading: "How to read bracelet dimensions",
    content: [
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (4).jpg",
        alt: "Measuring bracelet inner circumference and tennis link size",
        title: "Bracelet Wearable Length Verification",
        caption: "Confirm the usable inner circumference when fastened, as thick links can reduce fit compared to laying flat."
      },
      {
        type: "paragraph",
        text: "Bracelet length is particularly easy to misunderstand. The listed figure may be end-to-end length laid flat, wearable inner circumference when fastened, nominal marketed size, or the wrist size it is intended to fit."
      },
      {
        type: "paragraph",
        text: "Thick tennis settings and large links occupy internal space, so check:"
      },
      {
        type: "bullet-list",
        items: [
          "bracelet width and thickness;",
          "link dimensions and articulation;",
          "clasp length and safety catch projection;",
          "finished weight; and",
          "whether links can be added or removed."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Follow " },
          { text: "how to measure your wrist for a bracelet", href: "/blog/measure-wrist-for-bracelet/" },
          { text: " and add the seller’s recommended comfort allowance rather than inventing one universal number." }
        ]
      }
    ]
  },
  {
    heading: "How to check dimensions for a jewellery set",
    content: [
      {
        type: "paragraph",
        text: "A set needs specifications for every component. One combined dimension or weight is rarely enough. Record separately:"
      },
      {
        type: "bullet-list",
        items: [
          "each earring’s dimensions and weight;",
          "pendant dimensions;",
          "chain length and weight;",
          "bracelet wearable length;",
          "ring size and setting height, if included; and",
          "combined total carat weight versus per-piece carat weight."
        ]
      },
      {
        type: "paragraph",
        text: "The pieces should coordinate visually, but they do not need identical scale. Category-level measurements explain the intended balance."
      }
    ]
  },
  {
    heading: "Exact, approximate and representative figures",
    content: [
      {
        type: "paragraph",
        text: "Finished jewellery measurements may vary because of polishing, stone dimensions, hand finishing, size variants and made-to-order production. The listing should label values as:"
      },
      {
        type: "bullet-list",
        items: [
          "exact: applies to the delivered item;",
          "approximate: centred on a stated value with reasonable tolerance;",
          "range: delivered value can fall within limits;",
          "minimum: should not fall below the value; or",
          "representative: based on a sample or reference variant."
        ]
      },
      {
        type: "paragraph",
        text: "Ask for the tolerance when the difference would affect fit, stacking or chain compatibility. A 0.1 mm variation may be irrelevant in one field and important in a tight mechanical fit."
      }
    ]
  },
  {
    heading: "How to verify scale from product images",
    content: [
      {
        type: "paragraph",
        text: "Use images as supporting evidence, not as the ruler. A useful listing includes:"
      },
      {
        type: "bullet-list",
        items: [
          "front, profile and reverse views;",
          "a dimension diagram with arrow endpoints;",
          "a photograph beside a ruler or scale object;",
          "on-body image labelled with the model’s relevant measurement;",
          "the exact or representative variant statement; and",
          "360-degree video for setting height and articulation."
        ]
      },
      {
        type: "paragraph",
        text: "Macro photography, perspective and wide-angle lenses can distort proportions. Cropped model images can also hide where a necklace ends or how far an earring drops. Written measurements should control."
      }
    ]
  },
  {
    heading: "A like-for-like comparison method",
    content: [
      {
        type: "paragraph",
        text: "When comparing two products, create a detailed comparison worksheet mapping selected sizes, diamond measurements, wearable length, and finished weight."
      },
      {
        type: "table",
        headers: ["Measurement", "Product A", "Product B", "Same scope?"],
        rows: [
          ["Selected size or length", "", "", ""],
          ["Overall dimensions", "", "", ""],
          ["Diamond measurements", "", "", ""],
          ["Setting or decorative dimensions", "", "", ""],
          ["Structural thickness", "", "", ""],
          ["Wearable length", "", "", ""],
          ["Finished weight", "", "", ""],
          ["Included detachable parts", "", "", ""],
          ["Exact or approximate", "", "", ""],
          ["Tolerance", "", "", ""]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Do not compare a ring weighed in size J with one weighed in size R, or one earring with an entire pair. If scopes differ, ask for aligned data. This is one of the hidden checks behind " },
          { text: "why similar diamond jewellery can have different prices", href: "/blog/what-determines-price-lab-grown-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Measurement red flags",
    content: [
      {
        type: "paragraph",
        text: "Pause when a listing provides only terms like petite or lightweight, has unlabeled size figures, confuses diamond measurements with finished settings, or gives finished weight without showing the reference variant."
      },
      {
        type: "bullet-list",
        items: [
          "“petite”, “large” or “lightweight” without numbers;",
          "one unlabeled “size” value;",
          "a diamond measurement presented as the finished setting size;",
          "total carat weight presented as product weight;",
          "pair weight without saying it covers both earrings;",
          "finished weight without the represented variant."
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale product pages should show",
    content: [
      {
        type: "paragraph",
        text: "Every Aurelia Royale product page includes a category-specific dimension diagram and a short measurement table. It states measurement names, units, reference variants, and weight scopes."
      },
      {
        type: "paragraph",
        parts: [
          { text: "The broader " },
          { text: "product-specification checklist", href: "/blog/diamond-jewellery-product-specifications-checklist/" },
          { text: " should be linked beside this information, not used to hide it." }
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
          { text: "Dimensions tell you how much space jewellery occupies. Ring or wearable size tells you whether it fits. Carat tells you diamond weight. Grams usually tell you the approximate weight of the finished piece. These numbers are related, but they are not interchangeable.\n\n" },
          { text: "Before ordering, check the measurement endpoints, unit, scope, variant and tolerance. Compare the figures with jewellery you already own and use diagrams or actual-size drawings rather than judging from close-up photography." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What do jewellery dimensions mean?",
            answer: "They describe physical length, width, height, depth or thickness, usually in millimetres or centimetres. The listing should show exactly where each measurement begins and ends."
          },
          {
            question: "Is jewellery weight the same as diamond carat weight?",
            answer: "No. Diamond weight is measured in carats. Finished jewellery weight is usually measured in grams and can include metal, stones, solder, clasp and other components."
          },
          {
            question: "What does approximate jewellery weight include?",
            answer: "It commonly means the complete finished piece, but scope varies. Ask whether it includes chains, backs, detachable parts and gemstones and which size was weighed."
          },
          {
            question: "Can two rings in the same design have different weights?",
            answer: "Yes. Ring size, stone dimensions, polishing and manufacturing tolerance can change finished weight. Different metals also have different densities."
          },
          {
            question: "How do I know how large a pendant will look?",
            answer: "Check height both with and without the bail, maximum width and depth. Draw the outline at actual size and compare it with a pendant you own."
          },
          {
            question: "Does necklace length include the pendant?",
            answer: "Usually chain length and pendant drop should be stated separately, but listings vary. Confirm end-to-end chain length and total hanging drop."
          },
          {
            question: "Is bracelet length the same as wrist size?",
            answer: "Not necessarily. Flat length, inner circumference and recommended wrist size differ, particularly for thick settings. Ask for wearable inner length."
          },
          {
            question: "What ring dimensions matter besides ring size?",
            answer: "Check ring-head size, setting height, shank width, shank thickness and clearance for stacking. These influence appearance and comfort."
          },
          {
            question: "Should earring weight be listed per pair or per earring?",
            answer: "The scope should be explicit. For comfort, weight per earring is most useful, while total pair weight can support inventory information."
          },
          {
            question: "Can I measure jewellery from a website image?",
            answer: "No, unless the image contains a calibrated scale and displays at its intended size. Responsive images, cropping and perspective alter apparent dimensions."
          },
          {
            question: "Does heavier jewellery mean better quality?",
            answer: "No. Weight may indicate more material but does not prove alloy fineness, engineering, setting quality or finish. Judge construction and intended use together."
          },
          {
            question: "What should I ask if dimensions are missing?",
            answer: "Request a labelled height × width × depth diagram, wearable length, finished-weight scope, represented variant and permitted tolerance in writing."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Fit with Aurelia",
        subtitle: "Explore our collection of lab-grown diamond jewellery with transparent dimensions and weights.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function CheckJewelleryDimensionsWeightPage() {
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
            Buying Lab-Grown Diamond Jewellery
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Check Jewellery Dimensions and Weight Online
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
      <RelatedArticles currentSlug="check-jewellery-product-dimensions-weight" />
      <NewsletterSection />
    </main>
  );
}
