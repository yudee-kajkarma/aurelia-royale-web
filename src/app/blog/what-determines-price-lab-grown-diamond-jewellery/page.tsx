import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "What Determines Lab-Grown Diamond Jewellery Prices?",
  description: "Learn how diamonds, metal, design, setting, certification, quality control, service, taxes and delivery determine lab-grown diamond jewellery prices.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/",
  },
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
      "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/what-determines-price-lab-grown-diamond-jewellery.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/what-determines-price-lab-grown-diamond-jewellery.webp",
      "width": 1600,
      "height": 900,
      "caption": "Factors that determine the price of lab-grown diamond jewellery"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#webpage",
      "url": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/",
      "name": "What Determines the Price of Lab-Grown Diamond Jewellery?",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#primaryimage" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#article",
      "headline": "What Determines the Price of Lab-Grown Diamond Jewellery?",
      "description": "A complete explanation of the diamond, metal, design, setting, documentation, quality-control, service, delivery and tax factors behind lab-grown diamond jewellery prices.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": [
        "what determines the price of lab-grown diamond jewellery",
        "lab-grown diamond jewellery price factors",
        "why lab-grown diamond jewellery prices vary",
        "lab-grown diamond jewellery cost",
        "lab-grown diamond jewellery pricing explained"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Buying Lab-Grown Diamond Jewellery", "item": "https://www.aureliaroyale.com/blog/category/buying-lab-grown-diamond-jewellery/" },
        { "@type": "ListItem", "position": 4, "name": "What Determines the Price of Lab-Grown Diamond Jewellery?", "item": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/what-determines-price-lab-grown-diamond-jewellery/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does lab-grown diamond jewellery vary so much in price?",
          "acceptedAnswer": { "@type": "Answer", "text": "Prices combine different diamond sizes and grades, metal type and weight, design, stone count, setting labour, documentation, quality control, service, delivery and tax. Similar product names can hide different specifications." }
        },
        {
          "@type": "Question",
          "name": "Is carat weight the main factor in lab-grown diamond jewellery price?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is important, but not sufficient. Individual stone size, total weight, cut, colour, clarity, shape, matching, metal and craftsmanship all affect the complete product price." }
        },
        {
          "@type": "Question",
          "name": "Why can one large diamond cost differently from many small diamonds of the same total weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "Individual sizes and qualities differ, while multi-stone jewellery adds sorting and repeated setting work. Equal combined weight does not mean equal material or manufacturing input." }
        },
        {
          "@type": "Question",
          "name": "Does better diamond cut increase price?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cut quality can influence value because proportions, polish and symmetry affect appearance, weight distribution and craftsmanship. Compare applicable grades, measurements and actual visual performance." }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT determine the jewellery price?",
          "acceptedAnswer": { "@type": "Answer", "text": "Growth method alone does not create a fixed price tier. The finished diamond's quality, treatment, documentation, source, traceability and appearance matter more than the acronym by itself." }
        },
        {
          "@type": "Question",
          "name": "Why does precious metal affect diamond jewellery price?",
          "acceptedAnswer": { "@type": "Answer", "text": "Metal type, fineness, market input cost, finished weight, construction and manufacturing behaviour affect price. Two similar-looking white-metal pieces may use different materials and amounts." }
        },
        {
          "@type": "Question",
          "name": "Why is pavé jewellery sometimes expensive despite using small diamonds?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pavé can require careful sorting, many individual setting operations, precise metal work and repeated inspection. Small diamond size does not remove skilled labour." }
        },
        {
          "@type": "Question",
          "name": "Does a diamond certificate increase jewellery price?",
          "acceptedAnswer": { "@type": "Answer", "text": "Independent reporting, screening, inscription and data reconciliation can add cost. The amount and value depend on the document type and which diamond or item it covers." }
        },
        {
          "@type": "Question",
          "name": "Is handmade jewellery always more expensive or better?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. Price depends on actual design, labour, skill, materials and result. Both hand and technology-assisted processes can produce excellent or poor work." }
        },
        {
          "@type": "Question",
          "name": "Why are two retailers' prices different for similar jewellery?",
          "acceptedAnswer": { "@type": "Answer", "text": "The products may differ in hidden specifications, services or cost structure. Compare exact variant, diamond scope, metal, dimensions, components, documentation, returns, warranty and delivered total." }
        },
        {
          "@type": "Question",
          "name": "Does free shipping mean delivery adds nothing to the price?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. It means there is no separate customer charge for that line item. Secure packaging, handling, insurance and carrier service still have operational cost." }
        },
        {
          "@type": "Question",
          "name": "Is the most expensive lab-grown diamond jewellery the highest quality?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Price can reflect quality, design and service, but also distribution, marketing and brand costs. Verify the complete product rather than using price as the quality test." }
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
        src: "/images/blog/what-determines-price-lab-grown-diamond-jewellery/1.jpg",
        alt: "What determines the price of lab-grown diamond jewellery",
        title: "Pricing Structure Guide",
        caption: "A finished item's price balances diamond costs, metal weights, design parameters, bench labor, and delivery charges.",
        priority: true
      },
      {
        type: "paragraph",
        text: "The price of lab-grown diamond jewellery is the price of a complete product—not simply the price of laboratory-grown diamond material."
      },
      {
        type: "paragraph",
        text: "A finished ring, bracelet, necklace or earring pair combines: one or more diamonds; precious metal; design and engineering; manufacturing and setting labour; clasps, backs, chains and other components; testing and documentation; quality control; packaging, insured fulfilment and service; business and distribution costs; and applicable taxes and cross-border charges."
      },
      {
        type: "paragraph",
        text: "This explains why two pieces with the same total carat weight can have very different prices and why changes in loose lab-grown diamond prices do not translate mechanically into the same percentage change in finished jewellery."
      }
    ]
  },
  {
    heading: "Quick answer: what affects the price of lab-grown diamond jewellery?",
    content: [
      {
        type: "paragraph",
        text: "The main factors are:"
      },
      {
        type: "numbered-list",
        items: [
          "Individual diamond sizes and total carat weight.",
          "How diamond weight is distributed across the design.",
          "Cut, colour, clarity, shape and visible performance.",
          "Matching and sorting across multiple diamonds.",
          "Report type, screening and traceability.",
          "Precious-metal type and fineness.",
          "Finished metal weight and construction.",
          "Design complexity and development.",
          "Number and difficulty of stone settings.",
          "Manufacturing, assembly and finishing labour.",
          "Clasps, chains, backs and functional components.",
          "Customisation and made-to-order production.",
          "Quality control and rejected or reworked pieces.",
          "Warranty, returns and aftercare.",
          "Insured delivery, packaging and fulfilment.",
          "Retail operations, distribution and brand service.",
          "VAT, customs, currency and payment costs."
        ]
      },
      {
        type: "paragraph",
        text: "No single factor explains the final figure. Meaningful price comparison requires the complete specification."
      }
    ]
  },
  {
    heading: "The finished-jewellery price stack",
    content: [
      {
        type: "paragraph",
        text: "Final customer price = diamond component + metal and components + design and labour + testing and quality control + service and fulfilment + business costs + tax"
      },
      {
        type: "paragraph",
        text: "The proportions vary by product. A solitaire ring may place more of its material value in one centre diamond. A tennis bracelet can contain many smaller diamonds but require repeated setting, matching, articulation and a secure clasp. A jewellery set adds coordination across several finished pieces."
      }
    ]
  },
  {
    heading: "1. Individual diamond size and total carat weight",
    content: [
      {
        type: "image",
        src: "/images/blog/what-determines-price-lab-grown-diamond-jewellery/2.jpg",
        alt: "Loose diamond selection comparing center carats to accent counts",
        title: "Diamond Size Distribution",
        caption: "Comparing individual stone weights and accent allocations explains why raw carat weights do not dictate prices."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Separate centre-stone weights from accent-diamond totals. For full details on weight parameters, see " },
          { text: "what total carat weight means", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "2. Carat distribution across the design",
    content: [
      {
        type: "image",
        src: "/images/blog/what-determines-price-lab-grown-diamond-jewellery/3.jpg",
        alt: "A three-stone ring alongside a solitaire ring and a pave ring",
        title: "Carat Distribution Layouts",
        caption: "Varying stone count configurations alters setting labor and individual stone values for identical carat totals."
      },
      {
        type: "table",
        headers: ["Design", "Illustrative distribution", "Price implications"],
        rows: [
          ["Solitaire ring", "One 1.00 ct diamond", "One significant stone, simpler stone count"],
          ["Three-stone ring", "0.50 ct centre plus 0.50 ct sides", "Matching and three settings"],
          ["Pavé ring", "Many small diamonds totalling 1.00 ct", "Sorting and many individual settings"]
        ]
      }
    ]
  },
  {
    heading: "3. The 4Cs and diamond quality",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Cut (symmetry/proportions/polish), Colour, Clarity, and Carat determine baseline diamond inputs. Refer to " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: " for full framework details." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Cut: ", bold: true },
          { text: "Affects light output and outline footprint balance." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Colour: ", bold: true },
          { text: "Lower grades may represent value depending on setting metal choices." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Clarity: ", bold: true },
          { text: "Eye-clean parameters normally matter more than microscopic grades." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Carat: ", bold: true },
          { text: "Weight does not directly map to face size width." }
        ]
      }
    ]
  },
  {
    heading: "4. Shape, measurements and cutting yield",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Shape affects rough yield rates and cutting times. Compare width/length ratios alongside carats. Read " },
          { text: "carat weight versus visible size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: " for measurement comparisons." }
        ]
      }
    ]
  },
  {
    heading: "5. Growth method, treatment and traceability",
    content: [
      {
        type: "paragraph",
        text: "CVD or HPHT growth method selectability does not establish a superior diamond tier. Price varies by manufacturer sorting, post-growth treatments, and certified green-energy facility claims."
      }
    ]
  },
  {
    heading: "6. Matching and sorting labour",
    content: [
      {
        type: "paragraph",
        text: "Sorting accents to match colour, clarity, and dimensions in studs or line bracelets represents significant manual work."
      }
    ]
  },
  {
    heading: "7. Reports, screening and documentation",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Reports provide verification. For details on report types and coverage boundaries, consult " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "8. Precious-metal type and fineness",
    content: [
      {
        type: "image",
        src: "/images/blog/what-determines-price-lab-grown-diamond-jewellery/4.jpg",
        alt: "Gold casting grains and platinum wire stock",
        title: "Precious Metal Inputs",
        caption: "Comparing 18ct, 14ct, and platinum 950 densities determines base material costs prior to setting work."
      },
      {
        type: "paragraph",
        text: "White gold and platinum require different alloy ratios, fineness checks (750 vs 950), density inputs, and hallmarking processes."
      }
    ]
  },
  {
    heading: "9. Finished metal weight and structural dimensions",
    content: [
      {
        type: "paragraph",
        text: "Compare shank thickness, profiles, earring backs, and solid structures. Heavier builds naturally consume more raw gold or platinum material."
      }
    ]
  },
  {
    heading: "10. Design development and engineering",
    content: [
      {
        type: "paragraph",
        text: "Bespoke setups and custom layout rendering allocate development costs differently than standardized cast production lines."
      }
    ]
  },
  {
    heading: "11. Manufacturing method and assembly",
    content: [
      {
        type: "paragraph",
        text: "Fabrication complexity, assembly methods, weld margins, and finishing polish durations shift baseline production costs."
      }
    ]
  },
  {
    heading: "12. Number and difficulty of stone settings",
    content: [
      {
        type: "paragraph",
        text: "Each prong, bezel, and pavé layout requires individual bench setter time. Multiple stone settings drive assembly costs."
      }
    ]
  },
  {
    heading: "13. Finishing quality",
    content: [
      {
        type: "paragraph",
        text: "Pre-setting polish, clean joins, soften inner bands, and even rhodium plating require meticulous detail work."
      }
    ]
  },
  {
    heading: "14. Chains, clasps, backs and mechanisms",
    content: [
      {
        type: "paragraph",
        text: "Compare box clasp mechanisms, earring post lockings, and chain gauges. Components must match the weight and value of the diamonds."
      }
    ]
  },
  {
    heading: "15. Quality control, rejection and rework",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "QC checking limits defective pieces. For full workmanship parameters, see " },
          { text: "what makes lab-grown diamond jewellery high quality", href: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "16. Ready-made, made-to-order and bespoke production",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Ready-made: ", bold: true },
          { text: "Inventory holdings add storage costs, but casting is efficient." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Made-to-order: ", bold: true },
          { text: "Production coordinates individual variants only after purchase." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bespoke: ", bold: true },
          { text: "Individual design approvals, unique stone allocations, and revisions increase base price." }
        ]
      }
    ]
  },
  {
    heading: "17. Packaging, insured fulfilment and delivery",
    content: [
      {
        type: "paragraph",
        text: "Insured transit carriers, tracked deliveries, and safe storage requirements require operational allocation."
      }
    ]
  },
  {
    heading: "18. Returns, warranty and aftercare",
    content: [
      {
        type: "paragraph",
        text: "Post-purchase sizing, inspection checkups, and return insurance exposures contribute to merchant cost structures."
      }
    ]
  },
  {
    heading: "19. Retail operations, distribution and brand experience",
    content: [
      {
        type: "paragraph",
        text: "Direct-to-consumer, showroom operations, compliance, support staff, and checkout systems dictate pricing structures."
      }
    ]
  },
  {
    heading: "20. VAT, duties, currency and payment",
    content: [
      {
        type: "paragraph",
        text: "Import taxes, regional VAT thresholds, customs duties, and payment gateway conversion rates alter delivered checkout totals."
      }
    ]
  },
  {
    heading: "Why falling loose-diamond prices do not reduce every jewellery price equally",
    content: [
      {
        type: "paragraph",
        text: "A drop in raw diamond costs does not affect metal, setting labor, reports, shipping, or VAT percentages. If diamonds form only a fraction of finished costs, pricing changes will be smaller."
      }
    ]
  },
  {
    heading: "Why price per carat can mislead",
    content: [
      {
        type: "paragraph",
        text: "Price per carat ignores metal purity, setting count, components, tax, and labor complexity. It is an incomplete measure for comparing finished jewelry."
      }
    ]
  },
  {
    heading: "A transparent price-comparison worksheet",
    content: [
      {
        type: "table",
        headers: ["Price factor", "Product A", "Product B", "Verified?"],
        rows: [
          ["Individual diamond weights", "", "", ""],
          ["Total carat weight", "", "", ""],
          ["Diamond shape and measurements", "", "", ""],
          ["Cut, colour and clarity scope", "", "", ""],
          ["Matching and stone count", "", "", ""],
          ["Report and screening", "", "", ""],
          ["Metal and fineness", "", "", ""],
          ["Finished weight and dimensions", "", "", ""],
          ["Setting and design complexity", "", "", ""],
          ["Chain, clasp or backs", "", "", ""],
          ["Ready-made, made-to-order or bespoke", "", "", ""],
          ["Returns, warranty and aftercare", "", "", ""],
          ["Insured delivery", "", "", ""],
          ["VAT, duty and conversion", "", "", ""],
          ["Final delivered price", "", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Price explanations that are not sufficient",
    content: [
      {
        type: "bullet-list",
        items: [
          "Premium quality.",
          "Certified.",
          "Luxury grade.",
          "Ethical diamond.",
          "Handcrafted.",
          "Direct pricing.",
          "Investment piece.",
          "Lifetime jewellery.",
          "Exclusive design.",
          "Best value."
        ]
      }
    ]
  },
  {
    heading: "How Blog 48 differs from the neighbouring articles",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "This guide explains the inputs that shape prices. For personal budget planning, refer to " },
          { text: "How to set a budget for lab-grown diamond jewellery", href: "/blog/set-budget-lab-grown-diamond-jewellery/" },
          { text: ". For product-specific comparison checklists, see Blog 49." }
        ]
      }
    ]
  },
  {
    heading: "Aurelia Royale’s price-transparency standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale provides complete specifications behind prices. Buyers can browse " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " for full pricing scope details." }
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
            text: "The price of lab-grown diamond jewellery is built from the entire finished piece and the service that supports it.\n\n"
          },
          {
            text: "Diamond size, quality and matching matter, but so do precious metal, structure, stone count, setting labour, finishing, documentation, quality control, components, fulfilment, returns, warranty and tax."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Why does lab-grown diamond jewellery vary so much in price?",
            answer: "Prices combine different diamond sizes and grades, metal type and weight, design, stone count, setting labour, documentation, quality control, service, delivery and tax. Similar product names can hide different specifications."
          },
          {
            question: "Is carat weight the main factor in lab-grown diamond jewellery price?",
            answer: "It is important, but not sufficient. Individual stone size, total weight, cut, colour, clarity, shape, matching, metal and craftsmanship all affect the complete product price."
          },
          {
            question: "Why can one large diamond cost differently from many small diamonds of the same total weight?",
            answer: "Individual sizes and qualities differ, while multi-stone jewellery adds sorting and repeated setting work. Equal combined weight does not mean equal material or manufacturing input."
          },
          {
            question: "Does better diamond cut increase price?",
            answer: "Cut quality can influence value because proportions, polish and symmetry affect appearance, weight distribution and craftsmanship. Compare applicable grades, measurements and actual visual performance."
          },
          {
            question: "Does CVD or HPHT determine the jewellery price?",
            answer: "Growth method alone does not create a fixed price tier. The finished diamond’s quality, treatment, documentation, source, traceability and appearance matter more than the acronym by itself."
          },
          {
            question: "Why does precious metal affect diamond jewellery price?",
            answer: "Metal type, fineness, market input cost, finished weight, construction and manufacturing behaviour affect price. Two similar-looking white-metal pieces may use different materials and amounts."
          },
          {
            question: "Why is pavé jewellery sometimes expensive despite using small diamonds?",
            answer: "Pavé can require careful sorting, many individual setting operations, precise metal work and repeated inspection. Small diamond size does not remove skilled labour."
          },
          {
            question: "Does a diamond certificate increase jewellery price?",
            answer: "Independent reporting, screening, inscription and data reconciliation can add cost. The amount and value depend on the document type and which diamond or item it covers."
          },
          {
            question: "Is handmade jewellery always more expensive or better?",
            answer: "Not automatically. Price depends on actual design, labour, skill, materials and result. Both hand and technology-assisted processes can produce excellent or poor work."
          },
          {
            question: "Why are two retailers’ prices different for similar jewellery?",
            answer: "The products may differ in hidden specifications, services or cost structure. Compare exact variant, diamond scope, metal, dimensions, components, documentation, returns, warranty and delivered total."
          },
          {
            question: "Does free shipping mean delivery adds nothing to the price?",
            answer: "No. It means there is no separate customer charge for that line item. Secure packaging, handling, insurance and carrier service still have operational cost."
          },
          {
            question: "Is the most expensive lab-grown diamond jewellery the highest quality?",
            answer: "Not necessarily. Price can reflect quality, design and service, but also distribution, marketing and brand costs. Verify the complete product rather than using price as the quality test."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Understand Fine Jewellery Pricing",
        subtitle: "Aurelia Royale operates with complete price transparency, offering detailed breakdown specifications on all diamond and metal features. Discover our collection.",
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
            Buying Lab-Grown Diamond Jewellery
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Determines the Price of Lab-Grown Diamond Jewellery?
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
