import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "How Lab Grown Diamonds Are Graded",
  description: "How Lab Grown Diamonds Are Graded",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/",
  },
};

export const metadataEs: Metadata = {
  title: "Cómo se clasifican los diamantes cultivados en laboratorio",
  description: "Cómo se clasifican los diamantes cultivados en laboratorio - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-lab-grown-diamonds-are-graded/",
  },
};

export const metadataFr: Metadata = {
  title: "Comment les diamants cultivés en laboratoire sont classés",
  description: "Comment les diamants cultivés en laboratoire sont classés - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-lab-grown-diamonds-are-graded/",
  },
};

export const metadataNl: Metadata = {
  title: "Hoe in het laboratorium gekweekte diamanten worden beoordeeld",
  description: "Hoe in het laboratorium gekweekte diamanten worden beoordeeld - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-lab-grown-diamonds-are-graded/",
  },
};



export const metadataDe: Metadata = {
  title: "Wie im Labor gezüchtete Diamanten bewertet werden",
  description: "Wie im Labor gezüchtete Diamanten bewertet werden - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/how-lab-grown-diamonds-are-graded/",
  },
};


export const metadataIt: Metadata = {
  title: "Come vengono classificati i diamanti creati in laboratorio?",
  description: "Scopri come le istituzioni gemmologiche internazionali applicano gli stessi standard di classificazione di taglio, colore e purezza delle pietre naturali. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/how-lab-grown-diamonds-are-graded/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;

  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};




// 2. The exact JSON-LD Schema
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
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/how-lab-grown-diamonds-are-graded.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/how-lab-grown-diamonds-are-graded.webp",
      "width": 1600,
      "height": 900,
      "caption": "How lab-grown diamonds are graded"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#webpage",
      "url": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/",
      "name": "How Are Lab-Grown Diamonds Graded?",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#article",
      "headline": "How Are Lab-Grown Diamonds Graded?",
      "description": "Follow the lab-grown diamond grading process from origin screening and the 4Cs to fluorescence, treatments, inscription and the final report.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "how are lab-grown diamonds graded",
        "lab-grown diamond grading process",
        "lab diamond grading",
        "lab-grown diamond quality assessment",
        "IGI lab-grown diamond grading",
        "GIA lab-grown diamond grading"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "How Are Lab-Grown Diamonds Graded?", "item": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-are-graded/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Laboratories can identify laboratory-grown origin and assess quality characteristics such as carat, colour, clarity, cut, polish, symmetry and fluorescence." }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded the same as natural diamonds?",
          "acceptedAnswer": { "@type": "Answer", "text": "The same fundamental quality factors can be assessed, but laboratories may use different report formats and terminology for laboratory-grown diamonds." }
        },
        {
          "@type": "Question",
          "name": "Who grades lab-grown diamonds?",
          "acceptedAnswer": { "@type": "Answer", "text": "Independent gemmological laboratories such as IGI and GIA provide lab-grown diamond reports or quality assessments under their available services." }
        },
        {
          "@type": "Question",
          "name": "How does a laboratory know a diamond is lab-grown?",
          "acceptedAnswer": { "@type": "Answer", "text": "It uses gemmological observation and advanced techniques such as spectroscopy and growth-pattern imaging to distinguish natural and laboratory-grown origin." }
        },
        {
          "@type": "Question",
          "name": "What are the 4Cs of lab-grown diamonds?",
          "acceptedAnswer": { "@type": "Answer", "text": "They are carat weight, colour, clarity and cut. Together they provide a structured description of diamond quality." }
        },
        {
          "@type": "Question",
          "name": "Does IGI grade lab-grown diamonds using the 4Cs?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. IGI commonly provides individual 4C assessments for eligible loose lab-grown diamonds." }
        },
        {
          "@type": "Question",
          "name": "Does GIA give D–Z and FL–I3 grades to lab-grown diamonds in 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "GIA’s current qualifying colourless-to-near-colourless lab-grown service uses Premium or Standard overall classifications. Separate coloured-diamond services use different reporting formats." }
        },
        {
          "@type": "Question",
          "name": "Are fancy-shaped lab-grown diamonds cut graded?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cut information varies by laboratory and report service. Fancy shapes do not always receive the same overall cut grade used for eligible round brilliants." }
        },
        {
          "@type": "Question",
          "name": "Can mounted lab-grown jewellery be graded?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, but the setting can limit examination. Results may be estimated or expressed as ranges and described as graded as mounting permits." }
        },
        {
          "@type": "Question",
          "name": "Does a grading report tell me the diamond’s value?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. It describes identity and quality. A separate valuation or appraisal considers market price and the complete jewellery item." }
        },
        {
          "@type": "Question",
          "name": "Can two laboratories give different grades?",
          "acceptedAnswer": { "@type": "Answer", "text": "Small differences can occur because of report systems, borderline characteristics and laboratory procedures. Compare the exact services and terminology." }
        },
        {
          "@type": "Question",
          "name": "How do I verify a lab-grown diamond report?",
          "acceptedAnswer": { "@type": "Answer", "text": "Use the issuing laboratory’s official database and match the report number, origin, shape, weight, measurements and inscription to the diamond." }
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
        src: "/images/blog/how-lab-grown-diamonds-are-graded/1.jpg",
        alt: "How lab-grown diamonds are graded - complete process",
        title: "How Are Lab-Grown Diamonds Graded?",
        caption: "Independent gemological laboratories evaluate lab-grown diamonds through precise scientific grading.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds are evaluated through a combination of scientific identification, precision measurement and quality assessment. A laboratory first determines that the submitted stone is a diamond and establishes whether it is laboratory-grown. It then assesses characteristics such as carat weight, colour, clarity, cut, polish, symmetry and fluorescence according to the chosen report service."
      },
      {
        type: "paragraph",
        parts: [
          { text: "The familiar framework is the " },
          { text: "4Cs of a lab-grown diamond", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: ": carat weight, colour, clarity and cut. However, the final document does not look identical across every laboratory. IGI commonly reports individual 4C grades for eligible lab-grown diamonds. GIA’s current 2026 service for qualifying colourless-to-near-colourless loose laboratory-grown diamonds uses overall " },
          { text: "Premium", bold: true },
          { text: " or " },
          { text: "Standard", bold: true },
          { text: " quality classifications, while its coloured laboratory-grown services use different reporting formats." }
        ]
      },
      {
        type: "paragraph",
        text: "That distinction matters. “Graded” does not always mean that every lab uses the same terminology or gives a separate letter and number for every characteristic. Buyers must read the actual report and understand the service behind it."
      }
    ]
  },
  {
    heading: "Quick answer: how does lab-grown diamond grading work?",
    content: [
      {
        type: "paragraph",
        text: "A typical grading journey includes:"
      },
      {
        type: "numbered-list",
        items: [
          "Secure intake and identification",
          "Cleaning, weighing and measurement",
          "Diamond and origin screening",
          "Carat-weight recording",
          "Colour assessment",
          "Clarity examination",
          "Cut, polish, symmetry and fluorescence assessment",
          "Quality control, inscription and report issuance"
        ]
      },
      {
        type: "paragraph",
        text: "Some laboratories also determine or comment on the growth method and post-growth treatment, depending on the report type. The exact sequence, instruments and output vary, but the purpose is consistent: describe the examined diamond accurately and connect the result to a verifiable record."
      }
    ]
  },
  {
    heading: "Are lab-grown diamonds graded like natural diamonds?",
    content: [
      {
        type: "paragraph",
        text: "The same fundamental quality characteristics can be evaluated because laboratory-grown and natural diamonds share the essential physical, chemical and optical properties of diamond. A carat remains 200 milligrams, colour still describes body colour, clarity still evaluates internal and surface characteristics, and cut still concerns proportions, appearance and craftsmanship."
      },
      {
        type: "paragraph",
        parts: [
          { text: "The important difference is " },
          { text: "origin identification and report terminology", bold: true },
          { text: ". A laboratory must distinguish laboratory-grown from natural origin using scientific testing. It may also use a report design, inscription or grading vocabulary specifically intended for lab-grown diamonds." }
        ]
      },
      {
        type: "paragraph",
        text: "IGI has reaffirmed its use of the 4Cs for both natural and laboratory-grown diamonds. GIA changed its colourless-to-near-colourless laboratory-grown service in October 2025 and now uses overall Premium or Standard classifications rather than always publishing the traditional natural-diamond nomenclature."
      },
      {
        type: "paragraph",
        text: "Neither approach should be inferred from a retailer’s generic phrase such as “certified diamond.” Check the named laboratory, report date, service and recorded results."
      }
    ]
  },
  {
    heading: "The lab-grown diamond grading process step by step",
    content: [
      {
        type: "paragraph",
        text: "The grading process is conducted in a series of scientific stages, starting at intake and moving all the way through verification and reporting:"
      }
    ]
  },
  {
    heading: "Stage 1: Secure intake and stone identification",
    content: [
      {
        type: "paragraph",
        text: "When a loose diamond reaches the laboratory, it is entered into a controlled workflow and associated with a unique tracking reference. Packaging, client information and requested services are recorded according to laboratory procedures."
      },
      {
        type: "paragraph",
        text: "Professional laboratories separate client identity from grading decisions where their process requires it, reducing the possibility that commercial information influences quality assessment. The stone remains tracked as it moves among instruments and graders."
      },
      {
        type: "paragraph",
        text: "At intake, staff may also confirm whether the item is loose, clean enough to examine and eligible for the requested report based on weight, colour range or other service limits."
      }
    ]
  },
  {
    heading: "Stage 2: Cleaning, weighing and measurement",
    content: [
      {
        type: "paragraph",
        text: "Oil, dust and polishing residue can affect visual examination, so the diamond is cleaned before detailed assessment."
      },
      {
        type: "paragraph",
        text: "A calibrated precision balance records carat weight. One metric carat equals 200 milligrams, and the laboratory normally reports the result to two decimal places under its applicable rounding rules."
      },
      {
        type: "paragraph",
        text: "The diamond is also measured:"
      },
      {
        type: "bullet-list",
        items: [
          "round diamonds: minimum diameter–maximum diameter × depth;",
          "fancy shapes: length × width × depth."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "These measurements help identify the stone and explain its proportions and face-up dimensions. Learn more in " },
          { text: "lab-grown diamond carat weight explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" },
          { text: " and " },
          { text: "carat weight versus visible size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Stage 3: Diamond verification and origin screening",
    content: [
      {
        type: "image",
        src: "/images/blog/how-lab-grown-diamonds-are-graded/2.jpg",
        alt: "Lab-grown diamond verification and origin screening",
        title: "Origin Verification Screening",
        caption: "Laboratories use advanced spectroscopy and photoluminescence testing to screen for origin and authenticity."
      },
      {
        type: "paragraph",
        text: "Before quality grades are meaningful, the laboratory establishes what the material is and whether the diamond is natural or laboratory-grown. This cannot reliably be decided by appearance alone."
      },
      {
        type: "paragraph",
        text: "Laboratories use combinations of:"
      },
      {
        type: "bullet-list",
        items: [
          "microscopic examination;",
          "ultraviolet fluorescence and phosphorescence observations;",
          "imaging of growth patterns;",
          "infrared absorption spectroscopy;",
          "ultraviolet-visible absorption spectroscopy;",
          "photoluminescence spectroscopy; and",
          "other proprietary or advanced screening systems."
        ]
      },
      {
        type: "paragraph",
        text: "Different growth processes leave features at atomic, structural or growth-pattern levels. A trained gemmologist may notice indications associated with HPHT or CVD growth, but conclusive identification can require advanced instruments and comparison with research databases."
      },
      {
        type: "paragraph",
        text: "This stage also separates diamond from simulants such as moissanite or cubic zirconia. A simulant does not proceed as though it were a lower-quality diamond; it is a different material."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "CVD vs HPHT lab-grown diamonds", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" },
          { text: " for an explanation of the two principal growth processes." }
        ]
      }
    ]
  },
  {
    heading: "Stage 4: Carat-weight assessment",
    content: [
      {
        type: "paragraph",
        text: "Carat is the most objective of the 4Cs because it is measured on a calibrated balance. The result describes mass rather than visible diameter or beauty."
      },
      {
        type: "paragraph",
        text: "Graders also consider the measurements and proportion data, but these do not change the weight. Two diamonds can weigh 1.00 ct while showing different face-up sizes because weight is distributed differently through their shapes, depths and girdles."
      },
      {
        type: "paragraph",
        text: "For finished jewellery, direct weighing of an individual mounted diamond is usually not possible. A jewellery report may use production information, pre-setting grades or an estimate based on measurements, depending on what the mounting permits."
      }
    ]
  },
  {
    heading: "Stage 5: Colour grading",
    content: [
      {
        type: "paragraph",
        text: "When a D–Z colour grade is assigned, the loose diamond is assessed in a standardised viewing environment and compared with calibrated master stones. It is generally positioned face-down and viewed through the side to reduce the influence of shape, cut, fluorescence and face-up reflections."
      },
      {
        type: "paragraph",
        text: "Multiple graders may provide opinions before the laboratory finalises the result. Small differences between neighbouring grades can be difficult for an untrained observer to see outside controlled comparison."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Colourless-to-near-colourless stones and fancy-coloured diamonds require different assessment approaches. Fancy colour considers hue, tone, saturation and distribution rather than simply placing a vivid pink, blue or yellow diamond farther down the D–Z scale. Read " },
          { text: "lab-grown diamond colour grades explained", href: "/blog/lab-grown-diamond-colour-grades-explained/" },
          { text: " for the full D–Z and fancy-colour distinction." }
        ]
      }
    ]
  },
  {
    heading: "Stage 6: Clarity grading",
    content: [
      {
        type: "paragraph",
        text: "Clarity evaluates a diamond’s relative freedom from internal inclusions and surface blemishes. When a traditional clarity grade is assigned, trained graders examine the loose diamond from several directions, normally using 10× magnification."
      },
      {
        type: "paragraph",
        text: "The grade considers:"
      },
      {
        type: "bullet-list",
        items: [
          "size of the characteristics;",
          "number;",
          "position;",
          "nature or type; and",
          "relief or contrast against the diamond."
        ]
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds can contain growth-related features, including pinpoints, needles, metallic remnants, graphitic features, clouds, feathers or internal graining. The name of an inclusion does not determine the grade by itself. Its combined visual and structural effect matters."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Some reports include a clarity plot showing the approximate type and location of selected characteristics. A plot is a map, not a photograph, and the printed symbol size does not directly represent real-world severity. See " },
          { text: "lab-grown diamond clarity grades explained", href: "/blog/lab-grown-diamond-clarity-grades-explained/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Stage 7: Cut, polish, symmetry and fluorescence",
    content: [
      {
        type: "image",
        src: "/images/blog/how-lab-grown-diamonds-are-graded/3.jpg",
        alt: "Diamond cut symmetry polish and fluorescence grading",
        title: "Proportions and Facet Symmetry Assessment",
        caption: "Gemologists analyze proportions, facet alignment, and light return to determine overall cut quality."
      },
      {
        type: "paragraph",
        text: "Cut assessment considers how well the diamond has been designed and fashioned. For eligible round brilliant diamonds, an overall cut grade may assess elements such as brightness, fire, scintillation, proportions, weight ratio and durability according to the laboratory’s system."
      },
      {
        type: "paragraph",
        text: "Fancy shapes do not necessarily receive the same overall cut grade under every report service. Their proportions, outline, bow-tie visibility, polish, symmetry and real appearance require careful review."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Polish: ", bold: true },
          { text: "Polish describes the quality of facet surfaces and the presence of polishing features. It is graded separately from clarity." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Symmetry: ", bold: true },
          { text: "Symmetry evaluates the precision of the diamond’s shape, facet alignment and relationships. A diamond can have high polish but weaker symmetry, or the reverse." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Fluorescence: ", bold: true },
          { text: "Fluorescence describes the diamond’s response to ultraviolet radiation. Its colour and strength may be recorded separately. Fluorescence is not the same as body colour and is not automatically negative." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cut quality strongly influences visible brightness and movement. Read " },
          { text: "lab-grown diamond cut explained", href: "/blog/lab-grown-diamond-cut-explained/" },
          { text: " before comparing diamonds through carat, colour and clarity alone." }
        ]
      }
    ]
  },
  {
    heading: "Stage 8: Treatment assessment, quality control, inscription and report",
    content: [
      {
        type: "image",
        src: "/images/blog/how-lab-grown-diamonds-are-graded/4.jpg",
        alt: "Finished diamond report verification and inscription details",
        title: "Report Issuance and Laser Inscription",
        caption: "After passing quality control, a microscopic inscription is applied to the girdle and the final report is generated."
      },
      {
        type: "paragraph",
        text: "Laboratory-grown diamonds can undergo post-growth treatment, particularly to alter colour. Depending on the report service, the laboratory may assess growth type and whether treatment evidence is detected, then record the finding in the report or comments."
      },
      {
        type: "paragraph",
        text: "Before issue, results go through quality-control procedures. Additional graders or reviewers may reconcile borderline observations and confirm that identification, measurements and recorded data are internally consistent."
      },
      {
        type: "paragraph",
        text: "The laboratory may then apply a microscopic girdle inscription containing the report or assessment number and laboratory-grown wording. Current GIA laboratory-grown services include a “Laboratory-Grown” inscription and the applicable GIA number. IGI also offers report-number inscription and records inscriptions where relevant."
      },
      {
        type: "paragraph",
        parts: [
          { text: "The final report becomes available in print, digital form or both, depending on the laboratory and service. Buyers should verify it through the issuing laboratory’s official database. Read " },
          { text: "what a diamond laser inscription is", href: "/blog/diamond-laser-inscription/" },
          { text: " and " },
          { text: "how to verify an IGI certificate number", href: "/blog/how-to-verify-an-igi-certificate-number/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "What do the 4Cs mean during grading?",
    content: [
      {
        type: "table",
        headers: ["Characteristic", "What the laboratory assesses", "What it does not tell you alone"],
        rows: [
          ["Carat", "Exact weight of the loose diamond", "Face-up size or quality"],
          ["Colour", "Absence, presence or character of body colour", "Sparkle or cut performance"],
          ["Clarity", "Inclusions and blemishes under standard examination", "Whether every buyer can see a feature unaided"],
          ["Cut", "Proportions, appearance and craftsmanship under the applicable system", "Personal preference for shape or design"]
        ]
      },
      {
        type: "paragraph",
        text: "The 4Cs are related in the finished appearance, but they remain separate measurements. A high colour grade does not correct poor cut, and a high clarity grade does not guarantee strong light return."
      }
    ]
  },
  {
    heading: "How IGI grades lab-grown diamonds",
    content: [
      {
        type: "paragraph",
        text: "IGI loose laboratory-grown diamond reports commonly:"
      },
      {
        type: "bullet-list",
        items: [
          "identify the stone as laboratory-grown;",
          "state shape, cutting style and measurements;",
          "record carat weight;",
          "provide colour and clarity grades;",
          "report cut information where applicable;",
          "list polish and symmetry;",
          "record fluorescence;",
          "include proportions or clarity diagrams depending on report format;",
          "state inscriptions and comments; and",
          "provide a report number for verification."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "IGI has publicly reaffirmed its continued use of individual 4C grading for laboratory-grown diamonds. Buyers should still inspect the actual current sample report because features can vary by service and region. See " },
          { text: "what an IGI certificate means for a lab-grown diamond", href: "/blog/igi-certificate-for-lab-grown-diamond/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How GIA currently assesses lab-grown diamonds",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "GIA’s current quality assessment for qualifying loose, colourless-to-near-colourless laboratory-grown diamonds weighing at least 0.15 ct classifies each accepted stone as " },
          { text: "Premium", bold: true },
          { text: " or " },
          { text: "Standard", bold: true },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        text: "Under GIA’s published current criteria:"
      },
      {
        type: "paragraph",
        parts: [
          { text: "Premium: ", bold: true },
          { text: "clarity: VVS or higher; colour: D; polish: Excellent; symmetry: Excellent; and cut: Excellent for round brilliants." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Standard: ", bold: true },
          { text: "The diamond can combine Premium characteristics with these stated minimums: clarity: VS; colour: E–J; polish: Very Good; symmetry: Very Good, or Good for fancy shapes; and cut: Very Good for round brilliants." }
        ]
      },
      {
        type: "paragraph",
        text: "A submitted stone that does not meet all minimum Standard criteria does not receive one of these classifications. GIA offers separate services for coloured laboratory-grown diamonds, including growth-type and post-growth-treatment assessment under the applicable report."
      },
      {
        type: "paragraph",
        text: "Because services can change, Aurelia Royale should recheck GIA’s official criteria whenever this article is materially updated."
      }
    ]
  },
  {
    heading: "Does every laboratory use the same grading system?",
    content: [
      {
        type: "paragraph",
        text: "No. Laboratories can differ in terminology, service scope, cut grading, report design and eligibility limits. Even when two labs use familiar 4C scales, grading contains expert judgement, especially near boundaries."
      },
      {
        type: "paragraph",
        text: "Small variations can occur because of:"
      },
      {
        type: "bullet-list",
        items: [
          "laboratory standards and master sets;",
          "equipment and procedures;",
          "graders’ conclusions on borderline characteristics;",
          "report type;",
          "whether the stone is loose or mounted;",
          "changes after repolishing or damage; and",
          "evolving services or nomenclature."
        ]
      },
      {
        type: "paragraph",
        text: "Compare like with like. A GIA Premium classification and an IGI D/VVS1/Excellent-style result are not interchangeable labels, even if both describe a high-quality lab-grown diamond."
      }
    ]
  },
  {
    heading: "Are diamonds graded by machines or people?",
    content: [
      {
        type: "paragraph",
        text: "Both. Instruments perform precise weighing, measurement, imaging, spectroscopy and screening. Automated systems can assist with consistency and data collection. Trained gemmologists interpret observations, compare grades and make or review decisions that require expert judgement."
      },
      {
        type: "paragraph",
        text: "Modern grading is neither purely subjective visual opinion nor entirely automated scoring. It combines calibrated technology, controlled environments, documented standards and human review."
      }
    ]
  },
  {
    heading: "Loose-diamond grading versus mounted-jewellery grading",
    content: [
      {
        type: "paragraph",
        text: "Loose diamonds allow the most complete examination. Graders can clean, weigh and view the stone from every direction without metal reflections or covered areas."
      },
      {
        type: "paragraph",
        text: "In finished jewellery:"
      },
      {
        type: "bullet-list",
        items: [
          "individual stone weight may be estimated;",
          "metal can affect colour perception;",
          "prongs or bezels can hide inclusions and inscriptions;",
          "pavilion access may be limited;",
          "cut assessment may be restricted; and",
          "colour and clarity may be expressed as ranges."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "IGI uses wording such as “graded as mounting permits” for relevant jewellery assessments. A jewellery report can be valuable, but it should not be presented as identical to a complete pre-setting loose-diamond report. Read " },
          { text: "diamond certification versus jewellery certification", href: "/blog/diamond-certification-vs-jewellery-certification/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Does grading establish a diamond’s value?",
    content: [
      {
        type: "paragraph",
        text: "No. A grading report describes identity and quality characteristics under the laboratory’s service. It is not automatically a retail valuation, resale offer, insurance appraisal or warranty."
      },
      {
        type: "paragraph",
        text: "Price also depends on:"
      },
      {
        type: "bullet-list",
        items: [
          "current lab-grown diamond supply;",
          "shape and market demand;",
          "exact proportions and appearance;",
          "report issuer;",
          "jewellery design and craftsmanship;",
          "metal and accent stones;",
          "seller services; and",
          "market conditions at the time of purchase or resale."
        ]
      },
      {
        type: "paragraph",
        text: "A higher grade can influence comparison, but the report does not prescribe what a buyer must pay."
      }
    ]
  },
  {
    heading: "Can the grade change if the diamond is resubmitted?",
    content: [
      {
        type: "paragraph",
        text: "A diamond’s inherent characteristics do not change simply because it is examined again, but a borderline result can differ slightly between laboratories or assessments. A grade can also change if the stone has been chipped, repolished, recut, treated or damaged since the original examination."
      },
      {
        type: "paragraph",
        text: "If a report and current diamond no longer align, obtain a re-examination rather than assuming the old document remains accurate. A changed weight or measurement is especially important."
      }
    ]
  },
  {
    heading: "How long does lab-grown diamond grading take?",
    content: [
      {
        type: "paragraph",
        text: "Turnaround is not universal. It depends on the laboratory, location, service, stone type, volume, shipping, security procedures and whether additional testing or review is required."
      },
      {
        type: "paragraph",
        text: "Retailers should not promise a fixed grading time unless confirmed for the specific submission. Buyers ordering made-to-order jewellery should separate laboratory turnaround from design, setting, quality control and delivery time."
      }
    ]
  },
  {
    heading: "Common grading misunderstandings",
    content: [
      {
        type: "paragraph",
        text: "Avoid these common errors when evaluating diamond grading reports:"
      },
      {
        type: "bullet-list",
        items: [
          "“Certified” means the laboratory guarantees value: A grading report is not a valuation or price guarantee.",
          "Every laboratory uses identical grades: Current terminology and services differ, particularly between IGI and GIA for lab-grown diamonds.",
          "Origin can be confirmed by eyesight: Conclusive separation can require advanced gemmological and spectroscopic testing.",
          "A high carat weight means a high grade: Carat is weight only. Colour, clarity and cut are assessed independently.",
          "Fancy shapes receive the same cut grade everywhere: Overall cut grading coverage varies by laboratory and report service.",
          "Mounted grading is identical to loose grading: The setting can restrict weight, colour, clarity and cut assessment.",
          "A laser inscription proves everything: The number must match the official database and the physical diamond.",
          "A report never needs updating: Damage, recutting, treatment or significant repolishing can make old data incomplete."
        ],
        itemsParts: [
          [
            { text: "“Certified” means the laboratory guarantees value: ", bold: true },
            { text: "A grading report is not a valuation or price guarantee." }
          ],
          [
            { text: "Every laboratory uses identical grades: ", bold: true },
            { text: "Current terminology and services differ, particularly between IGI and GIA for lab-grown diamonds." }
          ],
          [
            { text: "Origin can be confirmed by eyesight: ", bold: true },
            { text: "Conclusive separation can require advanced gemmological and spectroscopic testing." }
          ],
          [
            { text: "A high carat weight means a high grade: ", bold: true },
            { text: "Carat is weight only. Colour, clarity and cut are assessed independently." }
          ],
          [
            { text: "Fancy shapes receive the same cut grade everywhere: ", bold: true },
            { text: "Overall cut grading coverage varies by laboratory and report service." }
          ],
          [
            { text: "Mounted grading is identical to loose grading: ", bold: true },
            { text: "The setting can restrict weight, colour, clarity and cut assessment." }
          ],
          [
            { text: "A laser inscription proves everything: ", bold: true },
            { text: "The number must match the official database and the physical diamond." }
          ],
          [
            { text: "A report never needs updating: ", bold: true },
            { text: "Damage, recutting, treatment or significant repolishing can make old data incomplete." }
          ]
        ]
      }
    ]
  },
  {
    heading: "How buyers should compare grading reports",
    content: [
      {
        type: "numbered-list",
        items: [
          "Identify the issuing laboratory.",
          "Check the report date and service name.",
          "Confirm laboratory-grown origin.",
          "Verify the report number in the official database.",
          "Match shape, weight and exact measurements.",
          "Understand whether results are individual grades or an overall classification.",
          "Read comments, growth and treatment disclosures.",
          "Review cut, polish, symmetry and fluorescence.",
          "Check the girdle inscription where applicable.",
          "Compare the actual diamond’s photographs and video.",
          "Distinguish loose-diamond reports from jewellery reports.",
          "Obtain professional help for mismatches or important secondary-market purchases."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Our detailed guide explains " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Aurelia Royale’s transparency standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "For individually reported principal diamonds in " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: ", the product page should identify the laboratory, report service, report number, laboratory-grown origin and applicable quality results." }
        ]
      },
      {
        type: "paragraph",
        text: "Product copy should reproduce the report’s terminology accurately. An overall Premium or Standard assessment should not be rewritten as an invented D colour or VVS clarity grade. Likewise, an IGI individual 4C result should be stated as the report presents it."
      },
      {
        type: "paragraph",
        text: "For small accent diamonds without individual reports, Aurelia should disclose laboratory-grown origin, total weight and applicable colour and clarity ranges. If the finished piece was graded only as mounting permits, that limitation should remain visible."
      },
      {
        type: "paragraph",
        parts: [
          { text: "If any grading detail is unclear, " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " before ordering." }
        ]
      }
    ]
  },
  {
    heading: "Buyer checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Who issued the report?",
          "What is the exact report service and date?",
          "Does it identify the stone as laboratory-grown?",
          "Was the diamond examined loose or mounted?",
          "Are the results individual 4C grades or an overall classification?",
          "Do weight and measurements match the product?",
          "Is growth method stated where applicable?",
          "Is post-growth treatment information provided?",
          "Are polish, symmetry and fluorescence recorded?",
          "Does the inscription match the official database?",
          "Does the seller reproduce the report terminology accurately?",
          "Are accent-diamond ranges disclosed separately?",
          "Has the stone been altered since grading?",
          "Are return, warranty and aftercare terms clear?"
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
            text: "Lab-grown diamond grading begins with scientific identification and continues through precise measurement and quality assessment. Laboratories examine the 4Cs, finish, fluorescence, growth or treatment indicators and other characteristics before completing quality control, inscription and report issuance.\n\n"
          },
          {
            text: "The underlying quality factors are familiar, but report systems are not identical. IGI commonly provides individual 4C grades, while GIA’s current colourless-to-near-colourless service uses Premium or Standard overall classifications. The best buyer reads the actual document, verifies it through the laboratory and compares the result with the physical diamond and finished jewellery."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Are lab-grown diamonds graded?",
            answer: "Yes. Laboratories can identify laboratory-grown origin and assess quality characteristics such as carat, colour, clarity, cut, polish, symmetry and fluorescence."
          },
          {
            question: "Are lab-grown diamonds graded the same as natural diamonds?",
            answer: "The same fundamental quality factors can be assessed, but laboratories may use different report formats and terminology for laboratory-grown diamonds."
          },
          {
            question: "Who grades lab-grown diamonds?",
            answer: "Independent gemmological laboratories such as IGI and GIA provide lab-grown diamond reports or quality assessments under their available services."
          },
          {
            question: "How does a laboratory know a diamond is lab-grown?",
            answer: "It uses gemmological observation and advanced techniques such as spectroscopy and growth-pattern imaging to distinguish natural and laboratory-grown origin."
          },
          {
            question: "What are the 4Cs of lab-grown diamonds?",
            answer: "They are carat weight, colour, clarity and cut. Together they provide a structured description of diamond quality."
          },
          {
            question: "Does IGI grade lab-grown diamonds using the 4Cs?",
            answer: "Yes. IGI commonly provides individual 4C assessments for eligible loose lab-grown diamonds."
          },
          {
            question: "Does GIA give D–Z and FL–I3 grades to lab-grown diamonds in 2026?",
            answer: "GIA’s current qualifying colourless-to-near-colourless lab-grown service uses Premium or Standard overall classifications. Separate coloured-diamond services use different reporting formats."
          },
          {
            question: "Are fancy-shaped lab-grown diamonds cut graded?",
            answer: "Cut information varies by laboratory and report service. Fancy shapes do not always receive the same overall cut grade used for eligible round brilliants."
          },
          {
            question: "Can mounted lab-grown jewellery be graded?",
            answer: "Yes, but the setting can limit examination. Results may be estimated or expressed as ranges and described as graded as mounting permits."
          },
          {
            question: "Does a grading report tell me the diamond’s value?",
            answer: "No. It documents the diamond's gemological characteristics and does not prescribe what a buyer must pay."
          },
          {
            question: "Can two laboratories give different grades?",
            answer: "Small differences can occur because of report systems, borderline characteristics and laboratory procedures. Compare the exact services and terminology."
          },
          {
            question: "How do I verify a lab-grown diamond report?",
            answer: "Use the issuing laboratory’s official database and match the report number, origin, shape, weight, measurements and inscription to the diamond."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Explore Certified Quality at Aurelia Royale",
        subtitle: "Beautifully cut to deliver maximum fire and scintillation. Explore our certified laboratory-grown diamond jewellery.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const schema = locale === "es" ? schemaMarkup : schemaMarkup;

  const localeData = getBlogDataByLocale("how-lab-grown-diamonds-are-graded", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

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
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Certification & Qualité" : locale === "es" ? "Certificación y Calidad del Diamante" : "Certification and Diamond Quality"}
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
