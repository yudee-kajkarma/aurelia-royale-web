import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "Diamond Necklace vs Pendant: What Is Different?",
  description: "Compare a diamond necklace and diamond pendant by construction, chain inclusion, removability, measurements, compatibility, price and certification.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/"},
      "headline":"Diamond Necklace vs Diamond Pendant: What Is the Difference?",
      "description":"Compare a diamond necklace and diamond pendant by construction, chain inclusion, removability, measurements, compatibility, price and certification.",
      "image":"https://www.aureliaroyale.com/images/blog/diamond-necklace-vs-diamond-pendant.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["diamond necklace vs diamond pendant","necklace and pendant difference","does a pendant include a chain"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"Diamond Necklace vs Diamond Pendant","item":"https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What is the difference between a diamond necklace and a diamond pendant?","acceptedAnswer":{"@type":"Answer","text":"A necklace is the complete wearable piece, while a pendant is the suspended focal element that may be part of it."}},
        {"@type":"Question","name":"Does a diamond pendant come with a chain?","acceptedAnswer":{"@type":"Answer","text":"Not always. Check the product description and package contents rather than assuming from photographs."}},
        {"@type":"Question","name":"Is a pendant necklace a necklace or a pendant?","acceptedAnswer":{"@type":"Answer","text":"It is a complete necklace whose focal design is a pendant. Both terms describe aspects of the same item."}},
        {"@type":"Question","name":"Can every pendant be removed from its chain?","acceptedAnswer":{"@type":"Answer","text":"No. Pendants can be removable, captive-sliding or fixed into the necklace."}},
        {"@type":"Question","name":"How do I know whether a chain fits a pendant?","acceptedAnswer":{"@type":"Answer","text":"Compare bail opening with chain, clasp and end-tag dimensions, and confirm the chain supports the pendant."}},
        {"@type":"Question","name":"Is a necklace more expensive than a pendant?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. Price depends on diamonds, metal, chain, construction and documentation."}},
        {"@type":"Question","name":"Which is better for everyday wear?","acceptedAnswer":{"@type":"Answer","text":"Either can work. Choose by chain strength, setting profile, clasp, scale and intended flexibility."}},
        {"@type":"Question","name":"Which is better for layering?","acceptedAnswer":{"@type":"Answer","text":"Neither automatically. Length, pendant drop, chain gauge and movement determine layering behaviour."}},
        {"@type":"Question","name":"Is a pendant-only item a complete gift?","acceptedAnswer":{"@type":"Answer","text":"It can be, but the recipient needs a compatible chain. A supplied chain removes that uncertainty."}},
        {"@type":"Question","name":"Does a diamond report cover the chain?","acceptedAnswer":{"@type":"Answer","text":"Usually not when it is a loose-diamond report. A finished-jewellery report may cover more under its description."}},
        {"@type":"Question","name":"Can the pendant and chain have different hallmarks?","acceptedAnswer":{"@type":"Answer","text":"Yes, detachable components may be marked separately. Confirm metal and fineness for each."}},
        {"@type":"Question","name":"What measurements should a pendant listing include?","acceptedAnswer":{"@type":"Answer","text":"It should include height, width, depth, bail opening, weight and separate chain details if supplied."}}
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
        src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (1).jpg",
        alt: "Diamond necklace vs diamond pendant comparison guide",
        title: "Diamond Necklace vs Diamond Pendant",
        caption: "Understand the difference between a complete diamond necklace and a suspended diamond pendant.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A diamond necklace is the complete piece worn around the neck. It can include a pendant, but it can also be a station, line, cluster, chain-led or other integrated design."
      },
      {
        type: "paragraph",
        text: "A diamond pendant is a focal jewellery element designed to hang or be suspended, usually from a chain. It may be sold alone, supplied with a chain or fixed permanently into a necklace."
      },
      {
        type: "paragraph",
        text: "Retailers sometimes use \"diamond pendant\" and \"diamond pendant necklace\" for the same product. The safest approach is to check exactly what is included and how it is constructed."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "table",
        headers: ["Question", "Diamond necklace", "Diamond pendant"],
        rows: [
          ["What is it?", "The complete neck jewellery piece", "The suspended focal element"],
          ["Is a chain included?", "Normally, because the chain is part of the necklace", "Not always—confirm before purchase"],
          ["Can the focal element be removed?", "Depends on the design", "Often possible, but not guaranteed"],
          ["What length is stated?", "Complete wearable necklace length", "Chain length only if a chain is included"],
          ["What dimensions matter?", "Full length, chain, focal section and clasp", "Pendant height, width, depth and bail"],
          ["What may a report cover?", "A diamond, focal section or finished necklace", "A diamond, pendant or pendant-and-chain item"]
        ]
      },
      {
        type: "paragraph",
        text: "Neither term is a quality grade. A pendant is not automatically smaller, less valuable or less formal than a necklace."
      }
    ]
  },
  {
    heading: "What counts as a diamond necklace?",
    content: [
      {
        type: "paragraph",
        text: "\"Diamond necklace\" is an umbrella product term. It can describe:"
      },
      {
        type: "bullet-list",
        items: [
          "a solitaire pendant on a chain;",
          "a fixed diamond at the chain centre;",
          "several diamond stations;",
          "a continuous or graduated line necklace;",
          "a diamond cluster or motif necklace;",
          "a coloured-stone necklace with diamond accents; or",
          "an integrated collar-style design."
        ]
      },
      {
        type: "paragraph",
        text: "The defining point is that the listing offers the complete wearable piece, including the components needed to close it around the neck."
      }
    ]
  },
  {
    heading: "What counts as a diamond pendant?",
    content: [
      {
        type: "paragraph",
        text: "A pendant is the focal component that hangs from or is suspended by a necklace, chain, cord or another support."
      },
      {
        type: "image",
        src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (2).jpg",
        alt: "Diamond pendant types - removable, sliding and fixed",
        title: "Pendant Construction Types",
        caption: "Pendants can be removable, sliding or fixed into the necklace.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Its construction may be:"
      },
      {
        type: "bullet-list",
        items: [
          "removable: a chain passes through a bail and can be withdrawn;",
          "sliding: the pendant moves along the chain but may not pass over the clasp;",
          "fixed: side loops or soldered connections integrate it into the necklace; or",
          "concealed: a hidden bail or attachment creates the suspended effect."
        ]
      },
      {
        type: "paragraph",
        text: "The word \"pendant\" alone does not prove a chain is included. Read the product title, specification, package contents and images."
      }
    ]
  },
  {
    heading: "Why retail terminology overlaps",
    content: [
      {
        type: "paragraph",
        text: "A complete product consisting of a pendant plus chain can accurately be called both a pendant necklace and a necklace. Catalogues also group \"necklaces and pendants\" together because shoppers browse them as one category."
      },
      {
        type: "paragraph",
        text: "This overlap is not necessarily misleading. It becomes a problem when the page fails to state:"
      },
      {
        type: "bullet-list",
        items: [
          "whether the chain is included;",
          "whether the pendant is removable;",
          "which dimensions belong to which component; or",
          "which component is covered by certification or warranty."
        ]
      }
    ]
  },
  {
    heading: "The biggest practical difference: chain inclusion",
    content: [
      {
        type: "paragraph",
        text: "If a product is sold as a complete necklace, the chain and clasp should be part of the item unless clearly stated otherwise. A pendant may be sold without a chain."
      },
      {
        type: "paragraph",
        text: "Before purchasing a pendant-only item, check the additional cost and suitability of a chain. The chain must support the pendant and fit through the bail where removal is intended."
      },
      {
        type: "paragraph",
        text: "Do not infer inclusion from styled photography. Images may show a display chain for scale."
      }
    ]
  },
  {
    heading: "Fixed pendant versus removable pendant",
    content: [
      {
        type: "paragraph",
        text: "Fixed pendant necklace:"
      },
      {
        type: "paragraph",
        text: "A fixed pendant connects to the chain at one or more points. It is designed as one composition and may remain centred more consistently."
      },
      {
        type: "paragraph",
        text: "Advantages can include an integrated look and controlled orientation. The trade-off is reduced chain interchangeability."
      },
      {
        type: "paragraph",
        text: "Removable pendant:"
      },
      {
        type: "paragraph",
        text: "A removable pendant can offer more styling flexibility, provided replacement chains are compatible."
      },
      {
        type: "paragraph",
        text: "Check that the chain's clasp and end tag pass through the bail. A chain may be thin enough through its links but too large at the clasp."
      },
      {
        type: "paragraph",
        text: "Sliding pendant:"
      },
      {
        type: "paragraph",
        text: "A sliding setting moves along the chain but may still be captive because neither chain end passes through it. Confirm whether the product is intended to be disassembled."
      },
      {
        type: "paragraph",
        text: "Never force a pendant over a clasp or open a bail without professional advice."
      }
    ]
  },
  {
    heading: "Chain compatibility checklist",
    content: [
      {
        type: "paragraph",
        text: "For a removable pendant, compare:"
      },
      {
        type: "bullet-list",
        items: [
          "bail internal height and width;",
          "chain width and thickness;",
          "clasp and end-tag dimensions;",
          "chain metal and fineness;",
          "chain strength and construction;",
          "pendant weight; and",
          "warranty requirements."
        ]
      },
      {
        type: "paragraph",
        text: "A bail measurement of 3 × 2 mm does not mean every nominally 2 mm chain will pass, because shape and clasp geometry matter."
      },
      {
        type: "paragraph",
        text: "Ask the pendant maker for a maximum compatible chain dimension or approved options."
      }
    ]
  },
  {
    heading: "Measurements: what should be stated?",
    content: [
      {
        type: "paragraph",
        text: "Complete necklace:"
      },
      {
        type: "bullet-list",
        items: [
          "total wearable length;",
          "adjustable fastening positions;",
          "focal-section dimensions;",
          "chain gauge;",
          "clasp dimensions; and",
          "complete product weight."
        ]
      },
      {
        type: "paragraph",
        text: "Pendant:"
      },
      {
        type: "bullet-list",
        items: [
          "complete height including bail;",
          "motif or setting height excluding bail;",
          "maximum width;",
          "depth;",
          "bail internal dimensions; and",
          "pendant weight."
        ]
      },
      {
        type: "paragraph",
        text: "If a chain is included, its specifications should appear separately."
      }
    ]
  },
  {
    heading: "Carat weight and visible size",
    content: [
      {
        type: "paragraph",
        text: "The distinction between necklace and pendant does not determine diamond size. A solitaire pendant may contain one significant diamond; a line necklace may distribute a much larger total across many stones."
      },
      {
        type: "paragraph",
        text: "Confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "principal-diamond weight;",
          "accent-diamond combined weight;",
          "total carat weight;",
          "stone count; and",
          "diamond measurements."
        ]
      },
      {
        type: "paragraph",
        text: "Do not assume the headline total belongs to the pendant's centre stone.",
        parts: [
          { text: "Read " },
          { text: "what total carat weight means", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Which option is more versatile?",
    content: [
      {
        type: "paragraph",
        text: "A removable pendant can move between compatible chains and lengths. A complete integrated necklace removes compatibility guesswork and presents the design in its intended proportions."
      },
      {
        type: "paragraph",
        text: "Versatility depends on use:"
      },
      {
        type: "bullet-list",
        items: [
          "choose a removable pendant if chain changes are genuinely planned and approved;",
          "choose an integrated necklace if centring, fixed placement or a continuous design matters; and",
          "choose pendant plus supplied chain when you want a complete product with some future flexibility."
        ]
      }
    ]
  },
  {
    heading: "Which option is better for layering?",
    content: [
      {
        type: "paragraph",
        text: "Neither is automatically better. Layering depends on complete length, pendant drop, chain gauge, focal width and movement."
      },
      {
        type: "paragraph",
        text: "A fixed pendant may stay near the chain centre; a sliding or removable pendant may move more. A line necklace can create an even band of diamonds rather than a single focal drop."
      },
      {
        type: "image",
        src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (3).jpg",
        alt: "Necklace vs pendant comparison for layering",
        title: "Layering with Necklaces and Pendants",
        caption: "Consider complete length, pendant drop, chain gauge and movement when layering.",
        priority: false
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "the necklace length guide", href: "/blog/select-right-necklace-length/" },
          { text: " to plan measured separation." }
        ]
      }
    ]
  },
  {
    heading: "Which is easier to gift?",
    content: [
      {
        type: "paragraph",
        text: "A complete necklace is usually clearer because all wearable components are included. A pendant-only gift requires confidence that the recipient owns a compatible chain."
      },
      {
        type: "paragraph",
        text: "For either option, confirm metal preference, desired length, clasp usability, package contents and returns. Do not present a pendant-only item as a complete necklace."
      }
    ]
  },
  {
    heading: "How price comparison changes",
    content: [
      {
        type: "paragraph",
        text: "Compare the complete purchase, not only the focal diamond."
      },
      {
        type: "paragraph",
        text: "For a necklace, price may include chain, clasp, additional diamonds, metal weight and integrated workmanship. For a pendant-only item, add the cost of a suitable chain."
      },
      {
        type: "paragraph",
        text: "Two visually similar listings can differ because one includes a substantial precious-metal chain and the other does not."
      }
    ]
  },
  {
    heading: "Certification and report scope",
    content: [
      {
        type: "paragraph",
        text: "An independent report might cover:"
      },
      {
        type: "bullet-list",
        items: [
          "one loose-graded centre diamond;",
          "the mounted pendant;",
          "the complete pendant necklace; or",
          "a finished multi-stone necklace."
        ]
      },
      {
        type: "paragraph",
        text: "IGI explains that its jewellery reports can describe the article, mounted gemstones and precious-metal content or purity stamps when present. Mounted grading may be limited by the setting."
      },
      {
        type: "paragraph",
        text: "Check the item description on the report. A report for one diamond does not certify the chain, clasp, bail or complete necklace workmanship."
      }
    ]
  },
  {
    heading: "Hallmark and metal scope",
    content: [
      {
        type: "paragraph",
        text: "A pendant and chain may carry separate marks, especially when detachable or made by different manufacturers. Confirm the metal and fineness of each component."
      },
      {
        type: "paragraph",
        text: "UK hallmarking rules apply to precious-metal articles above relevant exemption weights. A hallmark concerns metal fineness, not diamond origin or grade."
      }
    ]
  },
  {
    heading: "Product-page checklist",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (4).jpg",
        alt: "Necklace vs pendant product page checklist",
        title: "Necklace vs Pendant Checklist",
        caption: "Use this checklist to verify necklace and pendant product details before ordering.",
        priority: false
      },
      {
        type: "bullet-list",
        items: [
          "Is this a complete necklace, pendant-only item or pendant with chain?",
          "Is the pendant fixed, sliding or removable?",
          "Are chain and pendant specifications separated?",
          "Are bail dimensions provided?",
          "Are total length and adjustment points clear?",
          "Are centre and total carat weights distinguished?",
          "Are metal and fineness stated for every component?",
          "Does the report scope match the advertised item?",
          "Are package contents explicit?",
          "Are returns and warranty terms saved?"
        ]
      }
    ]
  },
  {
    heading: "Common mistakes",
    content: [
      {
        type: "paragraph",
        text: "Avoid assuming the chain is included, forcing an incompatible chain through a bail, treating a loose-diamond report as certification of the complete necklace, comparing pendant-only and necklace prices directly, ignoring pendant drop, or assuming every pendant is removable."
      }
    ]
  },
  {
    heading: "What Aurelia Royale should disclose",
    content: [
      {
        type: "paragraph",
        text: "Aurelia should label products as complete necklace, pendant with chain or pendant only; state removability; provide bail, pendant and chain dimensions separately; list every included component; identify report coverage; and explain chain-change or warranty restrictions."
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
          { text: "A diamond necklace is the complete worn piece. A diamond pendant is the focal element that hangs or is suspended within that piece. Because the terms can overlap in retail naming, the specification must settle the practical questions.\n\n" },
          { text: "Before buying, confirm chain inclusion, removability, bail compatibility, separate dimensions and report scope. The label starts the comparison; the construction completes it." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is the difference between a diamond necklace and a diamond pendant?",
            answer: "A necklace is the complete wearable piece, while a pendant is the suspended focal element that may be part of it."
          },
          {
            question: "Does a diamond pendant come with a chain?",
            answer: "Not always. Check the product description and package contents rather than assuming from photographs."
          },
          {
            question: "Is a pendant necklace a necklace or a pendant?",
            answer: "It is a complete necklace whose focal design is a pendant. Both terms can describe different aspects of the same item."
          },
          {
            question: "Can every pendant be removed from its chain?",
            answer: "No. Pendants can be removable, captive-sliding or fixed into the necklace."
          },
          {
            question: "How do I know whether a chain fits a pendant?",
            answer: "Compare bail opening with chain, clasp and end-tag dimensions, and confirm the chain can support the pendant."
          },
          {
            question: "Is a necklace more expensive than a pendant?",
            answer: "Not necessarily. Price depends on diamonds, metal, chain, construction and documentation. Compare complete specifications."
          },
          {
            question: "Which is better for everyday wear?",
            answer: "Either can work. Choose based on chain strength, setting profile, clasp, scale and intended flexibility."
          },
          {
            question: "Which is better for layering?",
            answer: "Neither automatically. Length, pendant drop, chain gauge and movement determine layering behaviour."
          },
          {
            question: "Is a pendant-only item a complete gift?",
            answer: "It can be, but the recipient needs a compatible chain. A pendant with supplied chain removes that uncertainty."
          },
          {
            question: "Does a diamond report cover the chain?",
            answer: "Usually not when it is a loose-diamond report. A finished-jewellery report may cover more, according to its item description."
          },
          {
            question: "Can the pendant and chain have different hallmarks?",
            answer: "Yes, detachable components may be marked separately. Confirm metal and fineness for each."
          },
          {
            question: "What measurements should a pendant listing include?",
            answer: "It should include complete height, width, depth, bail opening, weight and separate chain details if a chain is supplied."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop Diamond Necklaces and Pendants at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond necklaces and pendants with complete specifications, transparent documentation and detailed product information.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function DiamondNecklaceVsDiamondPendantPage() {
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
            Product-Category Guides
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            Diamond Necklace vs Diamond Pendant: What Is the Difference?
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
      <RelatedArticles currentSlug="diamond-necklace-vs-diamond-pendant" />
      <NewsletterSection />
    </main>
  );
}
