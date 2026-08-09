import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Lab Grown Diamond Cut Explained",
  description: "Lab Grown Diamond Cut Explained",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/",
  },
};

export const metadataEs: Metadata = {
  title: "Corte de diamante cultivado en laboratorio explicado",
  description: "Corte de diamante cultivado en laboratorio explicado - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-cut-explained/",
  },
};

export const metadataFr: Metadata = {
  title: "La taille du diamant cultivé en laboratoire expliquée",
  description: "La taille du diamant cultivé en laboratoire expliquée - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-cut-explained/",
  },
};

export const metadataNl: Metadata = {
  title: "Lab Grown Diamond Cut uitgelegd",
  description: "Lab Grown Diamond Cut uitgelegd - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-cut-explained/",
  },
};



export const metadataDe: Metadata = {
  title: "Im Labor gezüchteter Diamantschliff erklärt",
  description: "Im Labor gezüchteter Diamantschliff erklärt - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/lab-grown-diamond-cut-explained/",
  },
};


export const metadataIt: Metadata = {
  title: "Spiegazione del taglio del diamante creato in laboratorio",
  description: "Scopri perché il taglio è la C più importante nel determinare la brillantezza, il fuoco e la brillantezza del tuo diamante coltivato in laboratorio. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/lab-grown-diamond-cut-explained/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;
  const localeData = getBlogDataByLocale("lab-grown-diamond-cut-explained", locale);
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
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-cut-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Precision-cut lab-grown diamond showing balanced light return"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/",
      "name": "Lab-Grown Diamond Cut Explained",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#article",
      "headline": "Lab-Grown Diamond Cut Explained",
      "description": "Learn how lab-grown diamond cut affects sparkle, brightness and size, including cut grades, proportions, polish, symmetry and fancy shapes.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond cut explained",
        "lab-grown diamond cut grades",
        "best cut for lab-grown diamond",
        "diamond cut quality",
        "diamond proportions"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#breadcrumb",
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
          "name": "Lab-Grown Diamond Cut Explained",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is lab-grown diamond cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cut describes the diamond's craftsmanship, proportions, facet arrangement and interaction with light."
          }
        },
        {
          "@type": "Question",
          "name": "Is diamond cut the same as shape?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Shape refers to the outline, while cut quality describes how effectively the diamond has been faceted and proportioned."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best cut grade for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A high cut grade such as Excellent-Ideal, Excellent or Very Good is generally preferred, depending on the laboratory's grading system."
          }
        },
        {
          "@type": "Question",
          "name": "Does a better cut make a diamond sparkle more?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, because cut influences brightness, fire, scintillation and contrast."
          }
        },
        {
          "@type": "Question",
          "name": "Can two Excellent-cut diamonds look different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A cut-grade category can include different proportions, facet relationships and visual patterns."
          }
        },
        {
          "@type": "Question",
          "name": "Does cut affect visible diamond size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Deep or thick-girdled diamonds may hold weight without providing greater face-up dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Do oval diamonds receive cut grades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the laboratory and report. Some laboratories offer fancy-shape grading while others limit traditional cut grades to round brilliants."
          }
        },
        {
          "@type": "Question",
          "name": "Is a bow tie always bad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A slight bow tie can create contrast, but a large, dark and persistent bow tie may be distracting."
          }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT determine diamond cut quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. CVD and HPHT describe growth methods. Cut quality is determined during shaping and polishing."
          }
        },
        {
          "@type": "Question",
          "name": "Can a certificate tell me everything about diamond cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It provides grades and measurements but may not fully communicate bow ties, windowing, movement or personal visual preference."
          }
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
        src: "/images/blog/lab-grown-diamond-cut-explained/27 (1).jpg",
        alt: "Precision-cut lab-grown diamond showing balanced light return",
        title: "Precision Cut Lab Diamond",
        caption: "A precision-cut lab-grown diamond balances brightness, fire, and contrast to return light effectively.",
        priority: true,
      },
      {
        type: "paragraph",
        text: "Lab-grown diamond cut describes how successfully a diamond has been shaped and faceted to interact with light."
      },
      {
        type: "paragraph",
        text: "Cut influences brightness, fire, scintillation, contrast, visible size, facet pattern, symmetry, and overall visual appeal. A diamond may have exceptional colour and clarity grades but still look dull if it has weak proportions or poor light return."
      },
      {
        type: "paragraph",
        text: "For many buyers, cut is the most important of the 4Cs because it has a direct effect on what they see."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "A well-cut lab-grown diamond should: return light effectively, show a balanced mixture of brightness and contrast, produce visible flashes as it moves, avoid appearing consistently dark or glassy, use weight efficiently, and display good polish. The report’s cut grade is an important starting point, but videos, measurements and visual inspection are still needed—particularly for oval, pear, emerald, cushion and other fancy-shaped diamonds."
      }
    ]
  },
  {
    heading: "1. What Does Diamond Cut Mean?",
    content: [
      {
        type: "paragraph",
        text: "Diamond cut refers to the precise craftsmanship and geometric plan used to polish rough diamond crystal. It dictates table sizes, crown angles, pavilion depths, girdle thickness, and culet points. Cutters must balance carat yield from rough materials against light properties; deep stones hide carat weight without contributing to face-up diameters."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cut vs Shape: ", bold: true },
          { text: "Shape refers to outline (round, oval, pear, cushion, emerald). Cut quality evaluates how successfully that shape and its facets have been executed. Two oval stones can look entirely different based on cut execution." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-cut-explained/27 (2).jpg",
        alt: "Comparing diverse diamond outlines like round cushion and marquise",
        title: "Comparing Various Diamond Shapes",
        caption: "Diamond shape refers to outline silhouette; cut quality describes facet craftsmanship."
      }
    ]
  },
  {
    heading: "2. How Cut Creates Diamond Sparkle",
    content: [
      {
        type: "paragraph",
        text: "Sparkle relies on multiple physical light reflections:"
      },
      {
        type: "bullet-list",
        items: [
          "Brightness: The white light returned to the eye. Shallow cuts bleed light from bottoms.",
          "Fire: The dispersion of white light into bright spectral color flashes (reds, blues, yellows).",
          "Scintillation & Contrast: Flash patterns created during movement. Dark contrast lines are necessary to make bright flashes stand out."
        ],
        itemsParts: [
          [{ text: "Brightness: ", bold: true }, { text: "The white light returned to the eye. Shallow cuts bleed light from bottoms." }],
          [{ text: "Fire: ", bold: true }, { text: "The dispersion of white light into bright spectral color flashes (reds, blues, yellows)." }],
          [{ text: "Scintillation & Contrast: ", bold: true }, { text: "Flash patterns created during movement. Dark contrast lines are necessary to make bright flashes stand out." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-cut-explained/27 (3).jpg",
        alt: "Bright fire and light return dispersion through facets",
        title: "Light Fire and Dispersion",
        caption: "Fire separates white light into spectral colors, creating visible flashes as the stone moves."
      }
    ]
  },
  {
    heading: "3. Diamond Anatomy and Cut Grading",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "The Proportions: ", bold: true },
          { text: "Key zones include the flat top facet (table), upper slope (crown), middle dividing edge (girdle), lower facets (pavilion), and bottom culet tip." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Grading terminology: ", bold: true },
          { text: "Labs (IGI, GIA) evaluate parameters under Excellent, Very Good, Good, Fair, and Poor. IGI rounds round brilliant cuts with \"Excellent-Ideal\" classifications." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Polish and Symmetry: ", bold: true },
          { text: "Polish tracks surface facet blemishes (drag lines). Symmetry records geometric alignment. Excellent grades in both are desirable, but overall proportions must still be balanced." }
        ]
      }
    ]
  },
  {
    heading: "4. Bow Ties and Windowing in Fancy Shapes",
    content: [
      {
        type: "paragraph",
        text: "Fancy shapes require visual assessment beyond certificates:"
      },
      {
        type: "bullet-list",
        items: [
          "Bow Ties: Dark bow-shaped areas crossing ovals, marquises, or pears. Severe black bow ties look distracting.",
          "Windowing: Transparent central glassy sections in step-cut shapes (emerald, Asscher). Inactive areas let you see directly through the stone."
        ],
        itemsParts: [
          [{ text: "Bow Ties: ", bold: true }, { text: "Dark bow-shaped areas crossing ovals, marquises, or pears. Severe black bow ties look distracting." }],
          [{ text: "Windowing: ", bold: true }, { text: "Transparent central glassy sections in step-cut shapes (emerald, Asscher). Inactive areas let you see directly through the stone." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-cut-explained/27 (4).jpg",
        alt: "Checking oval diamond bow-tie pattern with magnification",
        title: "Oval Diamond Bow Tie Check",
        caption: "Elongated ovals or marquise stones must be inspected to ensure bow ties are not dark or distracting."
      }
    ]
  },
  {
    heading: "Choosing and Inspecting Cut Shapes",
    content: [
      {
        type: "table",
        headers: ["Shape", "Key Cut Parameters to Inspect"],
        rows: [
          ["Round Brilliant", "Table/depth ratios, culet sharpness, Hearts & Arrows optical symmetry."],
          ["Oval & Pear", "Even outline shoulders, bow-tie severity, point claw protection."],
          ["Emerald & Asscher", "Step facet corner alignments, windowing transparency check, visual clarity plots."],
          ["Cushion & Radiant", "Crushed-ice sparkle distribution vs larger facet pattern contrast, corner profiles."],
          ["Marquise & Princess", "Point alignments, curvature symmetries, prongs shielding vulnerable tips."]
        ]
      },
      {
        type: "table",
        headers: ["Diamond Cut Purchase Checklist"],
        rows: [
          ["Shape description aligns with your chosen setting frame."],
          ["Cut, polish, and symmetry grades are Excellent or Very Good."],
          ["Face-up millimetre measurements match expected carat weights."],
          ["The diamond shows a balanced pattern of light and dark contrast."],
          ["Step-cuts are checked for central transparency (windowing)."],
          ["Elongated stones are evaluated via rotating videos to log bow ties."],
          ["Vulnerable points (corners, tips) are shielded by setting prongs."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        text: "Lab-grown diamond cut determines how successfully the finished stone interacts with light. Proportions, polish, symmetry, and facet alignments shape brightness and fire. Start with the grading report but review high-resolution rotating videos to inspect bow ties and windowing before buying. Aurelia Royale hand-selects diamonds for ideal light return, providing rotating videos and complete GIA/IGI reports for all designs."
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is lab-grown diamond cut?",
            answer: "Cut describes the diamond's craftsmanship, proportions, facet arrangement and interaction with light."
          },
          {
            question: "Is diamond cut the same as shape?",
            answer: "No. Shape refers to the outline, such as round or oval. Cut quality describes how effectively the diamond has been faceted and proportioned."
          },
          {
            question: "What is the best cut grade for a lab-grown diamond?",
            answer: "A high cut grade such as Excellent-Ideal, Excellent or Very Good is generally preferred, depending on the laboratory's grading system."
          },
          {
            question: "Does a better cut make a diamond sparkle more?",
            answer: "Usually, because cut influences brightness, fire, scintillation and contrast. Lighting and cleanliness also affect visible sparkle."
          },
          {
            question: "Can two Excellent-cut diamonds look different?",
            answer: "Yes. A cut-grade category can include different proportions, facet relationships and visual patterns."
          },
          {
            question: "What is the difference between cut, polish and symmetry?",
            answer: "Cut is the overall assessment of design and light behaviour. Polish assesses facet surfaces, while symmetry assesses facet alignment and outline."
          },
          {
            question: "Does cut affect visible diamond size?",
            answer: "Yes. Deep or thick-girdled diamonds may hold weight without providing greater face-up dimensions."
          },
          {
            question: "Do oval diamonds receive cut grades?",
            answer: "It depends on the laboratory and report. Some laboratories offer fancy-shape cut grading, while others limit traditional cut grades to standard round brilliants."
          },
          {
            question: "Is a bow tie always bad?",
            answer: "No. A slight bow tie can create contrast, but a large, dark and persistent bow tie may be distracting."
          },
          {
            question: "What is windowing in a diamond?",
            answer: "Windowing is an area where light passes through rather than returning effectively, creating a transparent or glassy appearance."
          },
          {
            question: "Does CVD or HPHT determine diamond cut quality?",
            answer: "No. CVD and HPHT describe growth methods. Cut quality is determined during the later shaping and polishing process."
          },
          {
            question: "Can a certificate tell me everything about diamond cut?",
            answer: "No. It provides important grades and measurements but may not fully communicate bow ties, windowing, movement or personal visual preference."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Ideal Cut Brilliance",
        subtitle: "Meticulously planned facets, sharp symmetries, and verified certificate credentials. Shop our diamonds.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Blog27Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("lab-grown-diamond-cut-explained", locale);
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
