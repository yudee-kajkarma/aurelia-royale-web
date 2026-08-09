import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Lab Grown Diamond Clarity Grades Explained",
  description: "Lab Grown Diamond Clarity Grades Explained",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/",
  },
};

export const metadataEs: Metadata = {
  title: "Explicación de los grados de claridad de los diamantes cultivados en laboratorio",
  description: "Explicación de los grados de claridad de los diamantes cultivados en laboratorio - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-clarity-grades-explained/",
  },
};

export const metadataFr: Metadata = {
  title: "Explication des degrés de clarté des diamants cultivés en laboratoire",
  description: "Explication des degrés de clarté des diamants cultivés en laboratoire - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-clarity-grades-explained/",
  },
};

export const metadataNl: Metadata = {
  title: "In het laboratorium gekweekte diamanthelderheidsgraden uitgelegd",
  description: "In het laboratorium gekweekte diamanthelderheidsgraden uitgelegd - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-clarity-grades-explained/",
  },
};



export const metadataDe: Metadata = {
  title: "Erklärung der Reinheitsgrade von im Labor gezüchteten Diamanten",
  description: "Erklärung der Reinheitsgrade von im Labor gezüchteten Diamanten - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-clarity-grades-explained/",
  },
};


export const metadataIt: Metadata = {
  title: "Spiegazione dei gradi di purezza del diamante coltivato in laboratorio",
  description: "Esplora la scala di purezza del diamante. Scopri cosa sono le inclusioni, come vengono identificati i gradi VS1, VS2 o SI1 e cosa cercare al momento dell'acquisto. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/lab-grown-diamond-clarity-grades-explained/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;
  const localeData = getBlogDataByLocale("lab-grown-diamond-clarity-grades-explained", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};




// 2. The exact JSON-LD Schema you provided
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aureliaroyale.com/#organization",
      "name": "Aurelia Royale",
      "url": "https://www.aureliaroyale.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aureliaroyale.com/#website",
      "url": "https://www.aureliaroyale.com/",
      "name": "Aurelia Royale",
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-clarity-grades-explained.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-clarity-grades-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond clarity grades explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/",
      "name": "Lab-Grown Diamond Clarity Grades Explained",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#article",
      "headline": "Lab-Grown Diamond Clarity Grades Explained",
      "description": "Understand lab-grown diamond clarity grades from FL to I3, what eye-clean means, how inclusions are assessed and which clarity may suit your jewellery.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond clarity grades",
        "diamond clarity grades explained",
        "lab-grown diamond clarity scale",
        "best clarity for a lab-grown diamond",
        "VS1 vs VS2 lab-grown diamond",
        "eye-clean diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#breadcrumb",
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
          "name": "Blog",
          "item": "https://www.aureliaroyale.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Certification and Diamond Quality",
          "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Lab-Grown Diamond Clarity Grades Explained",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded for clarity?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Eligible lab-grown diamonds can be assessed for clarity. Report terminology and current services vary by laboratory." }
        },
        {
          "@type": "Question",
          "name": "What is the best clarity for a lab-grown diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "There is no universal best. VS grades often provide an eye-clean appearance, while VVS, IF and FL suit buyers who value higher technical grades." }
        },
        {
          "@type": "Question",
          "name": "Is VS1 better than VS2?",
          "acceptedAnswer": { "@type": "Answer", "text": "VS1 is a higher clarity grade because its inclusions are generally more difficult to detect at 10×, although the two grades may look identical without magnification." }
        },
        {
          "@type": "Question",
          "name": "Is VVS clarity worth paying for?",
          "acceptedAnswer": { "@type": "Answer", "text": "It can be worthwhile if the rare specification matters to the buyer. If visible appearance is the priority, an eye-clean VS diamond may offer a similar unaided view." }
        },
        {
          "@type": "Question",
          "name": "Can an SI1 lab-grown diamond be eye-clean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, some SI1 diamonds appear eye-clean, but others have visible inclusions. Size, shape, inclusion position and viewing conditions all matter." }
        },
        {
          "@type": "Question",
          "name": "What does eye-clean mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eye-clean generally means inclusions are not readily visible without magnification under defined viewing conditions. It is not an official laboratory grade." }
        },
        {
          "@type": "Question",
          "name": "Do inclusions affect diamond sparkle?",
          "acceptedAnswer": { "@type": "Answer", "text": "Small inclusions often have little visible effect. Extensive clouds or prominent features can reduce transparency, while cut remains the main driver of sparkle." }
        },
        {
          "@type": "Question",
          "name": "Can inclusions make a diamond break?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most minor inclusions do not create a practical problem. Large or surface-reaching features near a girdle, point or corner can require professional assessment." }
        },
        {
          "@type": "Question",
          "name": "Can a setting hide an inclusion?",
          "acceptedAnswer": { "@type": "Answer", "text": "A setting may make an edge inclusion less visible and protect vulnerable areas, but it should not be used to conceal a serious structural concern." }
        },
        {
          "@type": "Question",
          "name": "Is a clarity plot a photograph of the inclusion?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. It is a diagram showing the approximate type and location of selected characteristics. Symbol size does not directly show real size or severity." }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT determine clarity?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Either growth method can produce diamonds across a range of clarity outcomes. The individual stone must be examined." }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have inclusions?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Lab-grown diamonds can contain growth-related internal features and characteristics introduced or revealed during cutting and polishing." }
        }
      ]
    }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-clarity-grades-explained/29 (1).jpg",
        alt: "Lab-grown diamond clarity grades explained",
        title: "Diamond Clarity Grades",
        caption: "Clarity grading checks loose diamonds under 10× magnification for internal inclusions and surface blemishes.",
        priority: true,
      },
      {
        type: "paragraph",
        parts: [
          { text: "Clarity describes a diamond’s relative freedom from internal characteristics called " },
          { text: "inclusions", bold: true },
          { text: " and surface characteristics called " },
          { text: "blemishes", bold: true },
          { text: ". When a laboratory assigns a traditional clarity grade, trained graders examine the diamond under controlled conditions, normally using 10× magnification." }
        ]
      },
      {
        type: "paragraph",
        text: "The scale runs from Flawless at the top to Included at the lower end. However, a higher clarity grade does not automatically mean a visibly more beautiful jewel. Many clarity characteristics are difficult or impossible to see without magnification, and a diamond with a lower paper grade can still look clean to the unaided eye."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Clarity is one of the " },
          { text: "4Cs of a lab-grown diamond", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: ", alongside cut, colour and carat weight. It should be considered as part of the complete diamond rather than used as a standalone ranking." }
        ]
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "When the traditional clarity scale is used, it contains 11 grades: FL (Flawless), IF (Internally Flawless), VVS1 & VVS2 (Very, Very Slightly Included), VS1 & VS2 (Very Slightly Included), SI1 & SI2 (Slightly Included), I1, I2 & I3 (Included). An “eye-clean” diamond is one whose inclusions are not readily visible without magnification under stated viewing conditions. Eye-clean is useful retail language, but it is not an official clarity grade and should always be defined by the seller."
      },
      {
        type: "table",
        headers: ["Grade", "Official category", "Practical meaning"],
        rows: [
          ["FL", "Flawless", "No inclusions or blemishes visible to a skilled grader at 10× magnification. Extremely uncommon."],
          ["IF", "Internally Flawless", "No inclusions visible at 10×, although minor surface blemishes may be present."],
          ["VVS1–VVS2", "Very, Very Slightly Included", "Minute inclusions that are extremely difficult or very difficult for a skilled grader to see at 10×."],
          ["VS1–VS2", "Very Slightly Included", "Minor inclusions ranging from difficult to somewhat easy for a skilled grader to see at 10×. Often not visible without magnification."],
          ["SI1–SI2", "Slightly Included", "Noticeable inclusions at 10×. Some stones may appear eye-clean; others may have inclusions visible without magnification."],
          ["I1–I3", "Included", "Obvious inclusions at 10× that may affect appearance, transparency or durability to increasing degrees. Careful individual assessment is important."]
        ]
      }
    ]
  },
  {
    heading: "1. How is Diamond Clarity Graded?",
    content: [
      {
        type: "paragraph",
        text: "Clarity grading evaluates five factors under 10× magnification:"
      },
      {
        type: "bullet-list",
        items: [
          "Size: Larger inclusions lower the grade relative to the diamond’s size.",
          "Number: Graders assess the visual impact of multiple features rather than simply counting them.",
          "Position: Inclusions positioned under the table facet are most easily noticed. Features at girdles or corners affect durability.",
          "Nature: Refers to the type (crystal, cloud, needle, feather).",
          "Relief: High-contrast or dark inclusions are graded more severely than transparent ones."
        ],
        itemsParts: [
          [{ text: "Size: ", bold: true }, { text: "Larger inclusions lower the grade relative to the diamond’s size." }],
          [{ text: "Number: ", bold: true }, { text: "Graders assess the visual impact of multiple features rather than simply counting them." }],
          [{ text: "Position: ", bold: true }, { text: "Inclusions positioned under the table facet are most easily noticed. Features at girdles or corners affect durability." }],
          [{ text: "Nature: ", bold: true }, { text: "Refers to the type (crystal, cloud, needle, feather)." }],
          [{ text: "Relief: ", bold: true }, { text: "High-contrast or dark inclusions are graded more severely than transparent ones." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-clarity-grades-explained/29 (2).jpg",
        alt: "Inspecting inclusions under microscopes and magnification lenses",
        title: "Magnified Inclusions Check",
        caption: "Trained graders evaluate the size, number, position, and relief of inclusions using microscopes."
      }
    ]
  },
  {
    heading: "2. Do Lab-Grown Diamonds Have Inclusions?",
    content: [
      {
        type: "paragraph",
        text: "Yes. A controlled growth environment does not guarantee a perfectly flawless crystal. Lab-grown diamonds can contain internal features related to growth, and they can acquire additional characteristics during cutting and polishing."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Common traits include: metallic remnants (from HPHT flux growth), pinpoints, needles, internal grain lines, clouds, and surface blemishes. Review our " },
          { text: "CVD vs HPHT comparison", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" },
          { text: " for growth details." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Inclusions vs Blemishes: ", bold: true },
          { text: "Inclusions represent internal characteristics extending into the stone. Blemishes are surface-only features (scratches, pits, polish lines). IF diamonds allow surface blemishes but forbid internal inclusions." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-clarity-grades-explained/29 (3).jpg",
        alt: "HPHT diamond metallic remnants showing flux structures",
        title: "Metallic Flux remnants",
        caption: "Growth traits like metallic flux remnants can occur in controlled growth chambers."
      }
    ]
  },
  {
    heading: "3. What Does “Eye-Clean” Really Mean?",
    content: [
      {
        type: "paragraph",
        text: "Eye-clean is retail description, not a universal laboratory grade. It means inclusions are invisible to the unaided eye face-up under normal viewing distances (about 20–25 cm)."
      },
      {
        type: "paragraph",
        parts: [
          { text: "VS vs VVS Grades: ", bold: true },
          { text: "VVS inclusions are extremely difficult to locate at 10×. VS inclusions are minor but easier to spot under magnification. For many buyers, a well-selected VS1 or VS2 offers the visual outcome of an Internally Flawless stone without the premium price." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Shape and Size Effects: ", bold: true },
          { text: "Step cuts like ovals, marquises, and step-faceted emerald shapes reveal inclusions more easily than brilliant round cuts. Points and corners in princess and pear shapes require close checking for feather inclusions near prongs." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-clarity-grades-explained/29 (4).jpg",
        alt: "Looking at a clean diamond face-up at close distance",
        title: "Eye-Clean Solitaire Diamond",
        caption: "A carefully selected VS grade diamond looks completely eye-clean without magnification."
      }
    ]
  },
  {
    heading: "4. How to Read a Clarity Plot",
    content: [
      {
        type: "paragraph",
        text: "A clarity plot is a map, not a photograph. Symbols indicate feature position, relief, and nature, but their printed scale does not dictate physical sizes."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Be aware that GIA changed its eligible color/clarity lab-grown service on October 1, 2025 to Premium or Standard classifications, whereas IGI commonly continues to provide specific FL-to-I3 grades. Check our guides on " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " and " },
          { text: "what an IGI certificate means", href: "/blog/igi-certificate-for-lab-grown-diamond/" },
          { text: " to cross-reference registry details." }
        ]
      }
    ]
  },
  {
    heading: "Choosing and Verifying Clarity",
    content: [
      {
        type: "table",
        headers: ["Step", "Recommended Action"],
        rows: [
          ["1. Visual targets", "Determine if you require eye-clean visual beauty or exceptional technical rarity (FL/IF)."],
          ["2. Prioritise cut quality", "Invest budget in Excellent cut proportions first, as cut masks slight inclusions."],
          ["3. Check shape/facet style", "Examine step cuts (emerald/Asscher) at VS1/VS2 levels, since their broad facets reveal marks."],
          ["4. Locate inclusions on plots", "Ensure grade-setting inclusions are not dark carbon spots directly under the table."],
          ["5. Evaluate prong protection", "Make sure edge feathers are protected by setting claws to avoid impact damage."]
        ]
      },
      {
        type: "table",
        headers: ["Clarity Verification Checklist"],
        rows: [
          ["Laboratory-grown origin is explicitly disclosed in writing."],
          ["Clarity grade is verified online via GIA or IGI registry check."],
          ["Inclusions are eye-clean at 20-25 cm face-up viewing distances."],
          ["Feathers do not reach pointed tips where prongs exert pressure."],
          ["Clouds do not create hazy, cloudy, or milky overall transparency."],
          ["The seller's video shows the exact report-matched diamond."],
          ["Return margins are clear to allow post-delivery physical inspections."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        text: "Lab-grown diamond clarity grades describe how readily inclusions and blemishes can be detected under standard examination. FL and IF sit at the top of the traditional scale, followed by VVS, VS, SI and Included grades. Yet the highest grade is not necessary for every beautiful piece of jewellery. Aurelia Royale defines all quality ranges transparently, matching solitaire certificates and supplying eye-clean accent ranges on all product designs."
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Are lab-grown diamonds graded for clarity?",
            answer: "Yes. Eligible lab-grown diamonds can be assessed for clarity. Report terminology and current services vary by laboratory, so buyers should read the specific report."
          },
          {
            question: "What is the best clarity for a lab-grown diamond?",
            answer: "There is no universal best. VS grades often provide an eye-clean appearance, while VVS, IF and FL suit buyers who value higher technical grades."
          },
          {
            question: "Is VS1 better than VS2?",
            answer: "VS1 is a higher clarity grade because its inclusions are generally more difficult to detect at 10×, although the two grades may look identical without magnification."
          },
          {
            question: "Is VVS clarity worth paying for?",
            answer: "It can be worthwhile if the rare specification matters to the buyer. If visible appearance is the priority, an eye-clean VS diamond may offer a similar unaided view."
          },
          {
            question: "Can an SI1 lab-grown diamond be eye-clean?",
            answer: "Yes, some SI1 diamonds appear eye-clean, but others have visible inclusions. Size, shape, inclusion position and viewing conditions all matter."
          },
          {
            question: "What does eye-clean mean?",
            answer: "Eye-clean generally means inclusions are not readily visible without magnification under defined viewing conditions. It is not an official laboratory grade."
          },
          {
            question: "Do inclusions affect diamond sparkle?",
            answer: "Small inclusions often have little visible effect. Extensive clouds or prominent features can reduce transparency, while cut remains the main driver of sparkle."
          },
          {
            question: "Can inclusions make a diamond break?",
            answer: "Most minor inclusions do not create a practical problem. Large or surface-reaching features near a girdle, point or corner can require professional assessment."
          },
          {
            question: "Can a setting hide an inclusion?",
            answer: "A setting may make an edge inclusion less visible and protect vulnerable areas, but it should not be used to conceal a serious structural concern."
          },
          {
            question: "Is a clarity plot a photograph of the inclusion?",
            answer: "No. It is a diagram showing the approximate type and location of selected characteristics. Symbol size does not directly show real size or severity."
          },
          {
            question: "Does CVD or HPHT determine clarity?",
            answer: "No. Either growth method can produce diamonds across a range of clarity outcomes. The individual stone must be examined."
          },
          {
            question: "Do lab-grown diamonds have inclusions?",
            answer: "Yes. Lab-grown diamonds can contain growth-related internal features and characteristics introduced or revealed during cutting and polishing."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Verify Eye-Clean Perfection",
        subtitle: "Beautifully sorted clarities, micro-mapped plots, and certified laboratory validation checks. Explore our range.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Blog29Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("lab-grown-diamond-clarity-grades-explained", locale);
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
            {locale === "it" ? "Guida ai Diamanti" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Éducation sur les diamants" : locale === "es" ? "Educación sobre diamantes cultivados en laboratorio" : "Lab-Grown Diamond Education"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {locale === "it" ? "Journal • Pubblicato il 15 luglio 2026" : locale === "fr" ? "Guide Éducatif • Publié le 16. Juli 2026" : locale === "es" ? "Guía Educativa • Publicado el 16 de julio de 2026" : "Educational Guide • Published July 16, 2026"}
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
