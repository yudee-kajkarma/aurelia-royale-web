import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadataEn: Metadata = {
  title: "How To Choose Lab Grown Diamond Necklace",
  description: "How To Choose Lab Grown Diamond Necklace",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-necklace/",
  },
};

export const metadataEs: Metadata = {
  title: "Cómo elegir un collar de diamantes cultivados en laboratorio",
  description: "Cómo elegir un collar de diamantes cultivados en laboratorio - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-to-choose-lab-grown-diamond-necklace/",
  },
};

export const metadataFr: Metadata = {
  title: "Comment choisir un collier de diamants cultivés en laboratoire",
  description: "Comment choisir un collier de diamants cultivés en laboratoire - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-to-choose-lab-grown-diamond-necklace/",
  },
};

export const metadataNl: Metadata = {
  title: "Hoe kies je een Lab Grown diamanten halsketting",
  description: "Hoe kies je een Lab Grown diamanten halsketting - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-to-choose-lab-grown-diamond-necklace/",
  },
};



export const metadataDe: Metadata = {
  title: "So wählen Sie eine Halskette mit im Labor gezüchteten Diamanten aus",
  description: "So wählen Sie eine Halskette mit im Labor gezüchteten Diamanten aus - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-to-choose-lab-grown-diamond-necklace/",
  },
};


export const metadataIt: Metadata = {
  title: "Come scegliere una collana di diamanti creata in laboratorio",
  description: "Trova la collana di diamanti perfetta. Confronta collane tennis intere e catene con pendenti, valutando la lunghezza e la tipologia del metallo. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/how-to-choose-lab-grown-diamond-necklace/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;
  const localeData = getBlogDataByLocale("how-to-choose-lab-grown-diamond-necklace", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};




// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-necklace/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-necklace/"},
      "headline":"How to Choose a Lab-Grown Diamond Necklace",
      "description":"Choose a lab-grown diamond necklace by design, length, diamond quality, carat distribution, chain, clasp, metal and certification.",
      "image":"https://www.aureliaroyale.com/images/blog/how-to-choose-lab-grown-diamond-necklace.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["how to choose a lab-grown diamond necklace","lab-grown diamond necklace buying guide","lab diamond necklace"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-necklace/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How to Choose a Lab-Grown Diamond Necklace","item":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-necklace/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-necklace/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What should I look for in a lab-grown diamond necklace?","acceptedAnswer":{"@type":"Answer","text":"Check construction, length, dimensions, carat distribution, diamond quality, chain, attachment points, clasp, metal and report scope."}},
        {"@type":"Question","name":"Are lab-grown diamonds suitable for necklaces?","acceptedAnswer":{"@type":"Answer","text":"Yes. The diamonds are durable, while the chain, setting and clasp still require care and inspection."}},
        {"@type":"Question","name":"What necklace length should I choose?","acceptedAnswer":{"@type":"Answer","text":"Choose by desired placement, neck measurement, pendant drop, clothing and layering plan rather than a universal label."}},
        {"@type":"Question","name":"Is a diamond necklace the same as a diamond pendant?","acceptedAnswer":{"@type":"Answer","text":"Not always. A pendant is a suspended focal element; necklace covers pendant, station, line and other constructions."}},
        {"@type":"Question","name":"What does total carat weight mean for a necklace?","acceptedAnswer":{"@type":"Answer","text":"It is the combined weight of all diamonds. Confirm centre, accent and total weights separately."}},
        {"@type":"Question","name":"Should every necklace diamond have a certificate?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. A centre stone may have a report, while smaller stones may use a jewellery report or retailer specifications."}},
        {"@type":"Question","name":"How do I know how large a diamond necklace will look?","acceptedAnswer":{"@type":"Answer","text":"Use pendant or diamond-section dimensions with credible on-body imagery, not carat weight alone."}},
        {"@type":"Question","name":"Should a pendant be removable from its chain?","acceptedAnswer":{"@type":"Answer","text":"It depends on the design. Confirm bail dimensions, clasp passage and whether removal is intended."}},
        {"@type":"Question","name":"Why does my pendant move off-centre?","acceptedAnswer":{"@type":"Answer","text":"Body movement, chain length, bail shape, pendant and clasp weight can cause shifting."}},
        {"@type":"Question","name":"What clasp is best for a diamond necklace?","acceptedAnswer":{"@type":"Answer","text":"There is no universal best. It should suit the weight, engage positively and be manageable for the wearer."}},
        {"@type":"Question","name":"Does a hallmark certify the necklace diamonds?","acceptedAnswer":{"@type":"Answer","text":"No. It concerns precious-metal fineness; diamond origin and quality need separate disclosure or reporting."}},
        {"@type":"Question","name":"How should I store a diamond necklace?","acceptedAnswer":{"@type":"Answer","text":"Fasten it and store it separately, laid flat or gently supported, to reduce tangling, kinking and contact."}}
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
        src: "/images/blog/how-to-choose-lab-grown-diamond-necklace/68 (1).jpg",
        alt: "How to choose a lab-grown diamond necklace - complete buying guide",
        title: "How to Choose a Lab-Grown Diamond Necklace",
        caption: "The right diamond necklace balances the stones with its chain, length, clasp and scale.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A lab-grown diamond necklace is more than its centre stone. Chain length determines placement, pendant dimensions determine visible scale, and the clasp and attachment points support the entire piece."
      },
      {
        type: "paragraph",
        text: "Choose the design as a complete system. A strong product page should explain where the diamonds sit, how their carat weight is distributed, how the necklace fastens and exactly what any laboratory report covers."
      }
    ]
  },
  {
    heading: "Quick answer: how should you choose a diamond necklace?",
    content: [
      {
        type: "paragraph",
        text: "Choose in this order:"
      },
      {
        type: "numbered-list",
        items: [
          "Choose the construction: pendant, station, line, cluster or coloured-stone design.",
          "Decide where the necklace should sit.",
          "Check total length and every adjustable position.",
          "Compare pendant or diamond-set-section dimensions in millimetres.",
          "Separate centre-stone weight from total carat weight.",
          "Assess diamond quality and consistency.",
          "Review chain style, gauge, bail and connection points.",
          "Inspect the clasp and any safety details.",
          "Confirm metal, fineness and hallmark information.",
          "Identify report type, issuer and exact coverage."
        ]
      },
      {
        type: "paragraph",
        text: "Do not buy from a close-up alone. Online images can communicate detail but not reliable scale or placement."
      }
    ]
  },
  {
    heading: "1. Choose the necklace construction",
    content: [
      {
        type: "paragraph",
        text: "Different necklace styles offer different looks and wearing experiences."
      },
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-necklace/68 (2).jpg",
        alt: "Lab-grown diamond necklace styles - pendant, solitaire, station, line, cluster and coloured-stone",
        title: "Diamond Necklace Styles Compared",
        caption: "Different necklace constructions offer different diamond distribution, visibility and wearing experiences.",
        priority: false
      },
      {
        type: "table",
        headers: ["Style", "Construction", "Main buying question"],
        rows: [
          ["Pendant necklace", "One focal element suspended or fixed to a chain", "Is the pendant removable, fixed or sliding?"],
          ["Solitaire necklace", "One principal diamond, often in a minimal setting", "Are centre weight and dimensions clear?"],
          ["Station necklace", "Diamonds spaced along a chain", "Do stations remain oriented and evenly spaced?"],
          ["Line or rivière-style necklace", "Continuous or graduated diamond-set links", "Does it articulate and lie flat?"],
          ["Cluster or motif necklace", "Several stones form a focal shape", "Is the headline weight distributed across many stones?"],
          ["Coloured-stone necklace", "Coloured gems with diamond accents", "Are every stone's identity and treatment disclosed?"]
        ]
      },
      {
        type: "paragraph",
        text: "Product names vary. Depend on construction details, not the label."
      }
    ]
  },
  {
    heading: "2. Select placement before length",
    content: [
      {
        type: "paragraph",
        text: "The same chain length sits differently depending on neck circumference, body proportions, pendant weight, clothing and the chain's structure."
      },
      {
        type: "paragraph",
        text: "Decide whether the necklace should sit:"
      },
      {
        type: "bullet-list",
        items: [
          "close to the base of the neck;",
          "around the collarbone;",
          "on the upper chest; or",
          "lower for layering or a longer pendant effect."
        ]
      },
      {
        type: "paragraph",
        text: "Measure an existing necklace that reaches the desired point, or use a non-stretch cord at the proposed length. Look in a mirror with the neckline you expect to wear."
      },
      {
        type: "paragraph",
        parts: [
          { text: "The dedicated " },
          { text: "necklace length guide", href: "/blog/select-right-necklace-length/" },
          { text: " should own detailed measurement and placement guidance." }
        ]
      }
    ]
  },
  {
    heading: "3. Check total and adjustable length",
    content: [
      {
        type: "paragraph",
        text: "The page should state:"
      },
      {
        type: "bullet-list",
        items: [
          "maximum closed length;",
          "every shorter fastening position;",
          "extension-chain length;",
          "whether the pendant slides or is fixed;",
          "drop below the chain where relevant; and",
          "how length is measured."
        ]
      },
      {
        type: "paragraph",
        text: "An \"adjustable 40–45 cm\" necklace should identify the exact fastening points, not merely the possible range. A sliding adjuster needs appropriate instructions and limits."
      }
    ]
  },
  {
    heading: "4. Compare visible dimensions",
    content: [
      {
        type: "paragraph",
        text: "Carat weight does not tell you how large the complete necklace looks. Check:"
      },
      {
        type: "bullet-list",
        items: [
          "pendant height and width;",
          "whether height includes the bail;",
          "setting depth;",
          "diameter of a round solitaire setting;",
          "length and width of the diamond-set section;",
          "chain gauge; and",
          "complete product weight."
        ]
      },
      {
        type: "paragraph",
        text: "Use millimetres and on-body imagery together. A macro photograph can make a delicate pendant fill the screen."
      }
    ]
  },
  {
    heading: "5. Understand total carat weight",
    content: [
      {
        type: "paragraph",
        text: "For a solitaire, the centre-stone weight may form most or all of the total. For a halo, cluster, station or line necklace, the headline figure may combine many diamonds."
      },
      {
        type: "paragraph",
        text: "Confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "centre or principal-diamond weight;",
          "accent-diamond combined weight;",
          "total carat weight;",
          "diamond count;",
          "size or weight range; and",
          "whether values are exact, minimum or approximate."
        ]
      },
      {
        type: "paragraph",
        text: "A longer line can distribute the same total across more, smaller stones.",
        parts: [
          { text: "Read " },
          { text: "what total carat weight means", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "6. Assess diamond quality in context",
    content: [
      {
        type: "paragraph",
        text: "Cut, colour, clarity and carat weight describe different diamond qualities. For a principal diamond, compare the full report and face-up appearance. For a multi-stone design, consistency and matching across the necklace also matter."
      },
      {
        type: "paragraph",
        text: "Look for:"
      },
      {
        type: "bullet-list",
        items: [
          "compatible shape and measurements;",
          "intentional graduation;",
          "even colour appearance;",
          "face-up clarity appropriate to the design;",
          "balanced brightness; and",
          "aligned settings."
        ]
      },
      {
        type: "paragraph",
        text: "The highest individual grade is not automatically the best allocation of budget if the chain, construction or matching is weak."
      }
    ]
  },
  {
    heading: "7. Inspect the setting",
    content: [
      {
        type: "paragraph",
        text: "Prongs expose more of the diamond's outline; bezels create a defined metal border; halos and clusters enlarge the finished footprint through additional stones."
      },
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-necklace/68 (3).jpg",
        alt: "Diamond necklace setting types - prong, bezel, halo and cluster",
        title: "Necklace Setting Types",
        caption: "Different settings affect diamond visibility, protection and the overall necklace appearance.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Review front, side and back views. Check that prongs are even, bezels are symmetrical, galleries are finished cleanly and settings do not present obvious sharp areas against skin or clothing."
      },
      {
        type: "paragraph",
        text: "For line necklaces, links should articulate smoothly and return to a natural curve without twisting."
      }
    ]
  },
  {
    heading: "8. Evaluate the chain",
    content: [
      {
        type: "paragraph",
        text: "The chain carries the focal design and should be specified with equal care."
      },
      {
        type: "paragraph",
        text: "Check:"
      },
      {
        type: "bullet-list",
        items: [
          "chain style;",
          "approximate gauge or width;",
          "solid or otherwise disclosed construction where relevant;",
          "metal and fineness;",
          "adjustability;",
          "attachment points; and",
          "whether the pendant is removable."
        ]
      },
      {
        type: "paragraph",
        text: "A heavy pendant on a visually fine chain is not automatically defective, but the maker should have engineered the proportions. Ask whether a replacement chain must match a minimum gauge and whether changing it affects warranty coverage."
      }
    ]
  },
  {
    heading: "9. Check bail and attachment points",
    content: [
      {
        type: "paragraph",
        text: "A bail is the component through which a pendant chain passes. Some pendants use hidden loops, fixed side connections or sliding settings instead."
      },
      {
        type: "paragraph",
        text: "Confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "internal bail dimensions;",
          "whether the pendant can be removed;",
          "whether the clasp passes through the bail;",
          "soldered or articulated connections; and",
          "whether a fixed pendant remains centred."
        ]
      },
      {
        type: "paragraph",
        text: "Do not assume a removable-looking pendant will fit another chain."
      }
    ]
  },
  {
    heading: "10. Inspect the clasp",
    content: [
      {
        type: "paragraph",
        text: "Common necklace closures include spring-ring, lobster-style, box and other integrated clasps. The closure should engage positively and suit the necklace's weight."
      },
      {
        type: "paragraph",
        text: "Check clasp dimensions, operating method, end tags and any secondary safety used on substantial line necklaces. Consider dexterity: a small clasp can be difficult to operate behind the neck."
      },
      {
        type: "paragraph",
        text: "No clasp is loss-proof. Inspect it regularly and stop wearing the necklace if closing action changes."
      }
    ]
  },
  {
    heading: "11. Consider balance and rotation",
    content: [
      {
        type: "paragraph",
        text: "Pendant weight, chain gauge, bail shape and clasp weight influence whether the piece remains centred. Station settings can turn; line necklaces can roll if links, fit or weight distribution are unsuitable."
      },
      {
        type: "paragraph",
        text: "Ask for video showing the necklace on a person during gentle movement. No retailer should guarantee that a pendant never shifts, but the design should return to a natural position and not remain persistently inverted."
      }
    ]
  },
  {
    heading: "12. Confirm precious-metal details",
    content: [
      {
        type: "paragraph",
        text: "Check metal type, fineness, plating, finish and whether chain, clasp and pendant use the same alloy. Metal colour alone is not a complete specification."
      },
      {
        type: "paragraph",
        text: "UK hallmarking rules apply to precious-metal articles above relevant exemption weights; other European markets have their own systems. A hallmark concerns metal fineness, not diamond grading."
      }
    ]
  },
  {
    heading: "13. Understand certification",
    content: [
      {
        type: "paragraph",
        text: "A necklace may have an individual report for a significant centre diamond, a finished-jewellery report or retailer specifications for smaller stones."
      },
      {
        type: "paragraph",
        text: "IGI states that its finished jewellery reports can describe mounted gemstones and precious-metal content or purity stamps when present. Mounted centre-stone assessments may be limited by the setting."
      },
      {
        type: "paragraph",
        text: "Confirm issuer, report number, scope, laboratory-grown identification, grades or ranges, total weight and official verification. A report does not automatically certify the chain's durability, provide a valuation or act as a warranty."
      }
    ]
  },
  {
    heading: "14. Compare online images correctly",
    content: [
      {
        type: "paragraph",
        text: "A useful image set includes:"
      },
      {
        type: "bullet-list",
        items: [
          "full necklace laid flat;",
          "close-up of the focal section;",
          "side and back views;",
          "chain and connections;",
          "clasp open and closed;",
          "on-body views at each length; and",
          "video showing movement."
        ]
      },
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-necklace/68 (4).jpg",
        alt: "Lab-grown diamond necklace buying checklist",
        title: "Diamond Necklace Buying Checklist",
        caption: "Use this checklist to verify every component of a lab-grown diamond necklace before ordering.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Confirm whether imagery shows the exact item or a representative product."
      }
    ]
  },
  {
    heading: "15. Plan layering and use",
    content: [
      {
        type: "paragraph",
        text: "For layering, compare actual lengths, pendant drops and chain thickness. Leave enough separation to reduce tangling and repeated contact between diamonds and metal."
      },
      {
        type: "paragraph",
        text: "For frequent wear, prioritise a workable clasp, suitable chain and manageable setting profile. For occasions, a longer or more diamond-intensive design may be practical if clothing and movement are considered."
      }
    ]
  },
  {
    heading: "Necklace buying checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Construction and pendant removability are clear.",
          "Total and adjustable lengths are stated.",
          "Pendant or diamond-section dimensions are provided.",
          "Centre, accent and total carat weights are separated.",
          "Diamond count, grades and matching are disclosed.",
          "Chain style, gauge and attachment points are shown.",
          "Clasp is visible in operation.",
          "Metal, fineness, plating and hallmark details are stated.",
          "Report issuer and scope are verifiable.",
          "Returns, warranty, care and delivery terms are saved."
        ]
      }
    ]
  },
  {
    heading: "Red flags",
    content: [
      {
        type: "paragraph",
        text: "Pause if the listing omits length or pendant dimensions, hides the chain and clasp, uses total weight as though it were the centre stone, describes metal only by colour, cannot explain whether the pendant is removable, or calls the whole necklace \"certified\" without defining report scope."
      }
    ]
  },
  {
    heading: "What Aurelia Royale should disclose",
    content: [
      {
        type: "paragraph",
        text: "Every necklace page should provide construction, all lengths, complete dimensions, carat distribution, diamond count and grades, chain gauge, bail and connections, clasp, product weight, metal and hallmark information, report scope, real on-body scale, production time, returns, warranty, care and package contents."
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
          { text: "Choose a lab-grown diamond necklace from the whole silhouette inward. First decide construction and placement; then compare length, dimensions, carat distribution, diamond quality, chain, clasp and documentation.\n\n" },
          { text: "The diamond may be the focal point, but the necklace succeeds only when every component carries, centres and presents it properly." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What should I look for in a lab-grown diamond necklace?",
            answer: "Check construction, length, dimensions, carat distribution, diamond quality, chain, attachment points, clasp, metal and report scope."
          },
          {
            question: "Are lab-grown diamonds suitable for necklaces?",
            answer: "Yes. The diamonds are durable, while the chain, setting and clasp still require appropriate wear, care and inspection."
          },
          {
            question: "What necklace length should I choose?",
            answer: "Choose by desired placement, neck measurement, pendant drop, clothing and layering plan rather than a universal label."
          },
          {
            question: "Is a diamond necklace the same as a diamond pendant?",
            answer: "Not always. A pendant is a suspended focal element; \"necklace\" covers pendant, station, line and other constructions."
          },
          {
            question: "What does total carat weight mean for a necklace?",
            answer: "It is the combined weight of all diamonds. Confirm centre, accent and total weights separately."
          },
          {
            question: "Should every necklace diamond have a certificate?",
            answer: "Not necessarily. A significant centre stone may have a report, while smaller stones may use a jewellery report or retailer specifications."
          },
          {
            question: "How do I know how large a diamond necklace will look?",
            answer: "Use pendant or diamond-section dimensions in millimetres together with credible on-body imagery, not carat weight alone."
          },
          {
            question: "Should a pendant be removable from its chain?",
            answer: "It depends on the design. Confirm bail dimensions, clasp passage and whether removal is intended before changing chains."
          },
          {
            question: "Why does my pendant move off-centre?",
            answer: "Body movement, chain length, bail shape, pendant and clasp weight can cause shifting. Persistent imbalance may need adjustment."
          },
          {
            question: "What clasp is best for a diamond necklace?",
            answer: "There is no universal best. It should suit the necklace weight, engage positively and be manageable for the wearer."
          },
          {
            question: "Does a hallmark certify the necklace diamonds?",
            answer: "No. A hallmark concerns precious-metal fineness; diamond origin and quality require separate disclosure or reporting."
          },
          {
            question: "How should I store a diamond necklace?",
            answer: "Fasten it and store it separately, laid flat or gently supported, to reduce tangling, kinking and contact with other jewellery."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop Lab-Grown Diamond Necklaces at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond necklaces with complete specifications, detailed chain information and transparent documentation.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function HowToChooseLabGrownDiamondNecklacePage({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("how-to-choose-lab-grown-diamond-necklace", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  const schema = locale === "es" ? schemaMarkup : schemaMarkup;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {/* Script injection for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Product-Category Guides" : locale === "es" ? "Guías de categorías de productos" : "Product-Category Guides"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {locale === "it" ? "Journal • Pubblicato il 15 luglio 2026" : locale === "de" ? "Journal • Veröffentlicht am 16. Juli 2026" : locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026" : locale === "fr" ? "Journal • Publié le 16. Juli 2026" : locale === "es" ? "Diario • Publicado el 16 de julio de 2026" : "Journal • Published July 16, 2026"}
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={sections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}