import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How Often Should Diamond Jewellery Be Inspected?",
  description: "Learn when diamond jewellery needs professional inspection, what should be checked, and why impact, loose stones or changed clasps require urgent attention.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/",
  },
};

// 2. The exact JSON-LD Schema (Fixed dates)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/#article",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/" },
      "headline": "When Should Diamond Jewellery Be Professionally Inspected?",
      "description": "Learn when diamond jewellery needs professional inspection, what should be checked, and why impact, loose stones or changed clasps require urgent attention.",
      "image": "https://www.aureliaroyale.com/images/blog/professional-diamond-jewellery-inspection.webp",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "logo": { "@type": "ImageObject", "url": "https://www.aureliaroyale.com/images/logo.png" } },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "inLanguage": "en-GB",
      "articleSection": "Jewellery Care and Maintenance",
      "keywords": ["how often should diamond jewellery be inspected", "professional jewellery inspection", "diamond ring inspection", "check diamond prongs"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "When Should Diamond Jewellery Be Professionally Inspected?", "item": "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How often should diamond jewellery be professionally inspected?", "acceptedAnswer": { "@type": "Answer", "text": "Frequently worn pieces generally benefit from inspection every six to twelve months, subject to design, condition and specific requirements." } },
        { "@type": "Question", "name": "How often should a diamond ring be checked?", "acceptedAnswer": { "@type": "Answer", "text": "Six-monthly inspection is a sensible starting point for a daily-worn prong-set or pavé ring, with immediate assessment after impact." } },
        { "@type": "Question", "name": "Should unworn jewellery still be inspected?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, periodically and before important wear after long storage because storage does not correct pre-existing wear." } },
        { "@type": "Question", "name": "What does a professional jewellery inspection include?", "acceptedAnswer": { "@type": "Answer", "text": "It should assess every stone setting, structural metal, links, joints, clasps, hinges, posts, backs and material-specific concerns." } },
        { "@type": "Question", "name": "Is professional cleaning the same as inspection?", "acceptedAnswer": { "@type": "Answer", "text": "No. Cleaning removes residue; inspection evaluates security, wear and function." } },
        { "@type": "Question", "name": "Should jewellery be inspected after being dropped?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, after meaningful impact because setting or metal change may not be obvious from the top view." } },
        { "@type": "Question", "name": "Should jewellery be inspected after resizing?", "acceptedAnswer": { "@type": "Answer", "text": "The repairer should quality-check it before return, and the owner should follow the recommended post-service schedule." } },
        { "@type": "Question", "name": "Can a jeweller inspect pavé diamonds?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every small stone and shared bead or prong should be assessed, including adjacent areas." } },
        { "@type": "Question", "name": "Does an inspection include an updated valuation?", "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. Condition inspection, grading and valuation are different services." } },
        { "@type": "Question", "name": "Does a diamond report confirm the setting is secure?", "acceptedAnswer": { "@type": "Answer", "text": "No. A report documents characteristics within its scope at a point in time; it does not guarantee current condition." } },
        { "@type": "Question", "name": "Should I polish jewellery at every inspection?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Polishing is cosmetic and can remove surface material or affect plating." } },
        { "@type": "Question", "name": "What should I do before taking jewellery for inspection?", "acceptedAnswer": { "@type": "Answer", "text": "Stop wearing damaged jewellery, store it separately and bring product details, reports, repair history, photographs and requirements." } }
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
        text: "Diamond jewellery should be professionally inspected on a regular schedule and whenever its condition changes. For a frequently worn prong-set ring, six-monthly checks are a sensible starting point; for other pieces, an annual review may suit their design, wear and seller guidance. These are planning intervals—not guarantees."
      },
      {
        type: "paragraph",
        text: "Do not wait for the next appointment after an impact, visible stone movement, rattling, snagging, a bent setting or a changed clasp. Stop wearing the piece and arrange an urgent assessment."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Have frequently worn diamond rings and delicate multi-stone jewellery professionally inspected about every six months, or at the interval required by the maker, warranty or insurer. Annual inspection may be suitable for sturdy pieces worn less often. Arrange an immediate check after impact, resizing or repair; before important travel; or if a stone moves, a prong lifts, a clasp changes, the piece bends or jewellery repeatedly snags. A proper inspection should examine every stone setting, structural metal, links, hinges, posts, backs and clasps before any cleaning or cosmetic refinishing is approved."
      }
    ]
  },
  {
    heading: "Why professional inspection matters",
    content: [
      {
        type: "paragraph",
        text: "Gold alloy structures wear down over time. Metal-to-metal rubbing thins ring bands. Regular bench audits catch this wear."
      }
    ]
  },
  {
    heading: "A practical inspection schedule",
    content: [
      {
        type: "table",
        headers: ["Jewellery and use", "Starting interval", "Earlier inspection triggers"],
        rows: [
          ["Daily-worn prong-set ring", "About every 6 months", "Impact, snagging, movement, gap, resizing"],
          ["Pavé or multi-stone ring", "About every 6 months", "Missing alignment, roughness, repeated contact"],
          ["Diamond bracelet worn often", "6–12 months", "Changed articulation, clasp or safety catch"],
          ["Stud or drop earrings", "About annually", "Loose back, bent post, hinge change, impact"],
          ["Necklace or pendant", "About annually", "Open jump ring, worn bail, chain or clasp change"],
          ["Occasion jewellery", "Before important wear and periodically", "Long storage, travel, inherited or unknown history"]
        ]
      }
    ]
  },
  {
    heading: "When inspection is urgent",
    content: [
      {
        type: "paragraph",
        text: "Seek help immediately if you notice:"
      },
      {
        type: "bullet-list",
        items: [
          "a diamond moves, rattles or appears tilted;",
          "a prong looks raised, thin, uneven or missing;",
          "a gap appears between stone and setting;",
          "the piece starts snagging;",
          "a ring, bracelet or setting is bent;",
          "a clasp, hinge, post or earring back feels different;",
          "a pavé or channel line becomes irregular;",
          "a stone or metal surface appears chipped or cracked;",
          "the piece receives a hard impact; or",
          "an earlier repair area changes."
        ]
      }
    ]
  },
  {
    heading: "Inspect after impact even when nothing looks wrong",
    content: [
      {
        type: "paragraph",
        text: "Clashing settings against door frames can deform claws silently. After impact, follow this checklist:"
      },
      {
        type: "numbered-list",
        items: [
          "Remove the jewellery over a safe surface.",
          "Store it alone in a padded box.",
          "Photograph its condition without probing it.",
          "Arrange inspection before cleaning or wearing it again."
        ]
      }
    ]
  },
  {
    heading: "Inspect after resizing or repair",
    content: [
      {
        type: "paragraph",
        text: "Resizing stretches metal, changing prong angles. Ask your jeweler:"
      },
      {
        type: "bullet-list",
        items: [
          "what work was performed;",
          "which stones and settings were checked;",
          "whether the finish or plating changed;",
          "any new wearing restrictions; and",
          "when the next review is due."
        ]
      }
    ]
  },
  {
    heading: "Inspect before travel or an important event",
    content: [
      {
        type: "paragraph",
        text: "Audit clasps early to allow repair times. Do not wait until the day before boarding flights."
      }
    ]
  },
  {
    heading: "What should a professional jewellery inspection include?",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Stone security: ", bold: true }, { text: "Verify prongs, beads, channel walls, and accent grids." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Structural metal: ", bold: true }, { text: "Measure band thickness and review link connections." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Functional components: ", bold: true }, { text: "Check safety clasps, hinges, and earring post grooves." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Surface and material condition: ", bold: true }, { text: "Assess rhodium plating thicknesses and check for micro fractures." }]
      }
    ]
  },
  {
    heading: "Inspection is not the same as cleaning",
    content: [
      {
        type: "table",
        headers: ["Service", "Main purpose"],
        rows: [
          ["Inspection", "Assess security, wear, structure and function"],
          ["Cleaning", "Remove compatible residue safely"],
          ["Repair", "Correct identified structural or functional faults"],
          ["Refinishing", "Alter or restore surface appearance"],
          ["Grading report", "Document gemmological characteristics within report scope"],
          ["Valuation/appraisal", "Provide a value opinion for a stated purpose"]
        ]
      }
    ]
  },
  {
    heading: "Should jewellery be cleaned during inspection?",
    content: [
      {
        type: "paragraph",
        text: "Clean only after checking settings. Ask:"
      },
      {
        type: "bullet-list",
        items: [
          "Which cleaning method will be used?",
          "Is it safe for every material and treatment?",
          "Will stones be checked again after cleaning?",
          "Is refinishing included or separate?"
        ]
      }
    ]
  },
  {
    heading: "How to choose a qualified professional",
    content: [
      {
        type: "paragraph",
        text: "Find jewellers offering transparent records. Safe procedures should:"
      },
      {
        type: "bullet-list",
        items: [
          "describe and photograph the item;",
          "record visible damage and stone count where practical;",
          "note report or product numbers;",
          "confirm what work is authorised;",
          "explain custody and insurance terms; and",
          "provide a written estimate before additional repair."
        ]
      }
    ]
  },
  {
    heading: "What to bring to the appointment",
    content: [
      {
        type: "paragraph",
        text: "Bring background files to assist bench jewellers:"
      },
      {
        type: "bullet-list",
        items: [
          "the jewellery in a secure individual box;",
          "purchase receipt and product details;",
          "grading or jewellery report, if relevant;",
          "warranty and insurance requirements;",
          "previous repair invoices;",
          "baseline photographs; and",
          "notes describing impacts, snagging or observed changes."
        ]
      }
    ]
  },
  {
    heading: "Questions to ask after inspection",
    content: [
      {
        type: "numbered-list",
        items: [
          "Were all stones and connecting components checked?",
          "What wear was found, and where?",
          "Is the piece safe to wear now?",
          "Which work is urgent, preventative or cosmetic?",
          "Will repair affect finish, dimensions, hallmark or engraving?",
          "Are adjacent stones at risk?",
          "What cleaning method is safe?",
          "When should the next inspection occur?",
          "What records will I receive?"
        ]
      }
    ]
  },
  {
    heading: "Inspection frequency by lifestyle",
    content: [
      {
        type: "paragraph",
        text: "Active wearers, stacking enthusiasts, and regular travelers benefit from tighter 6-month checkup intervals."
      }
    ]
  },
  {
    heading: "Keep an inspection record",
    content: [
      {
        type: "paragraph",
        text: "Maintain a service log. Note:"
      },
      {
        type: "bullet-list",
        items: [
          "date and provider;",
          "condition findings;",
          "cleaning method;",
          "repairs or replaced components;",
          "updated photographs;",
          "next recommended review; and",
          "warranty or insurance communications."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale recommendation",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale schedules bench checks for GIA-certified pieces. Shop collections at " },
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
            text: "Frequently worn diamond jewellery commonly benefits from inspection every six to twelve months.\n\n"
          },
          {
            text: "Impact, movement, snagging or structural changes require immediate assessment. Do not clean loose stones ultrasonically; seek professional bench inspections."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "How often should diamond jewellery be professionally inspected?",
            answer: "Frequently worn pieces generally benefit from inspection every six to twelve months, subject to their design, condition and maker, warranty or insurer requirements."
          },
          {
            question: "How often should a diamond ring be checked?",
            answer: "Six-monthly inspection is a sensible starting point for a daily-worn prong-set or pavé ring, with immediate assessment after impact or warning signs."
          },
          {
            question: "Should unworn jewellery still be inspected?",
            answer: "Yes, periodically and before important wear after long storage. Storage does not correct pre-existing wear, damaged clasps or ageing components."
          },
          {
            question: "What does a professional jewellery inspection include?",
            answer: "It should assess every stone setting, structural metal, links, joints, clasps, hinges, posts, backs and material-specific surface concerns."
          },
          {
            question: "Is professional cleaning the same as inspection?",
            answer: "No. Cleaning removes residue; inspection evaluates security, wear and function. The piece should be assessed before the cleaning method is chosen."
          },
          {
            question: "Should jewellery be inspected after being dropped?",
            answer: "Yes, after a meaningful impact. Internal setting or metal change may not be obvious from the top view."
          },
          {
            question: "Should jewellery be inspected after resizing?",
            answer: "The repairer should quality-check it before return, and the owner should retain records and follow the recommended post-service inspection schedule."
          },
          {
            question: "Can a jeweller inspect pavé diamonds?",
            answer: "Yes. Every small stone and the shared beads or prongs should be assessed, including adjacent areas around any visible problem."
          },
          {
            question: "Does an inspection include an updated valuation?",
            answer: "Not automatically. Condition inspection, grading and valuation are different services. Request a separate valuation when required."
          },
          {
            question: "Does a diamond report confirm the setting is secure?",
            answer: "No. A grading or jewellery report documents characteristics within its scope at a point in time; it does not guarantee current setting condition."
          },
          {
            question: "Should I polish jewellery at every inspection?",
            answer: "Not necessarily. Polishing is cosmetic and can remove surface material or affect plating. Approve it only when appropriate for the design and finish."
          },
          {
            question: "What should I do before taking jewellery for inspection?",
            answer: "Stop wearing any damaged piece, store it separately and bring its product details, reports, repair history, photographs and warranty or insurance requirements."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Schedule a Bench Check",
        subtitle: "Aurelia Royale workshop jewellers test every solder point and tighten claws at our london center. Consult support.",
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
            When Should Diamond Jewellery Be Professionally Inspected?
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
      <RelatedArticles currentSlug="professional-diamond-jewellery-inspection" />
      <NewsletterSection />
    </main>
  );
}
