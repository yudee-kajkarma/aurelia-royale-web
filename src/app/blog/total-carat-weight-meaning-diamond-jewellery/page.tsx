import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Total Carat Weight Meaning in Diamond Jewellery",
  description: "Learn what total carat weight means, how it differs from centre-stone weight, and how to read diamond weights for rings, earrings and bracelets.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/",
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
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/total-carat-weight-meaning-diamond-jewellery.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/total-carat-weight-meaning-diamond-jewellery.webp",
      "width": 1600,
      "height": 900,
      "caption": "Total carat weight in diamond jewellery explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#webpage",
      "url": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/",
      "name": "What Does Total Carat Weight Mean in Diamond Jewellery?",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#article",
      "headline": "What Does Total Carat Weight Mean in Diamond Jewellery?",
      "description": "Learn what total carat weight means, how it differs from centre-stone weight, and how to read diamond weights for rings, earrings and bracelets.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "total carat weight meaning",
        "what is total carat weight",
        "total diamond weight",
        "carat vs total carat weight",
        "centre stone vs total carat weight",
        "total carat weight earrings"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "What Does Total Carat Weight Mean in Diamond Jewellery?", "item": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "It means the combined weight of all diamonds included within the stated total. The listing should define exactly what the total covers." }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight the same as centre-stone weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Centre-stone weight refers to one principal diamond. Total carat weight may include the centre, side stones, halo and accents." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between ct and ctw?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ct commonly describes an individual stone’s carat weight. Ctw commonly describes the combined carat weight of multiple diamonds, although sellers should define their abbreviations." }
        },
        {
          "@type": "Question",
          "name": "Does 1.00 ct total mean a one-carat centre diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. The total may be divided among a smaller centre diamond and multiple accents. Check the weight breakdown." }
        },
        {
          "@type": "Question",
          "name": "What does one-carat total weight mean for earrings?",
          "acceptedAnswer": { "@type": "Answer", "text": "If the figure applies to the pair, the two earrings together contain approximately one carat. Matched solitaire studs may contain about 0.50 ct per earring." }
        },
        {
          "@type": "Question",
          "name": "Does total carat weight include accent diamonds?",
          "acceptedAnswer": { "@type": "Answer", "text": "It should include the accents when they fall within the stated total. The product page should say which diamonds are included." }
        },
        {
          "@type": "Question",
          "name": "Is one large diamond worth the same as several small diamonds of equal total weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Individual size, quality, matching, reports, setting and market conditions all affect value." }
        },
        {
          "@type": "Question",
          "name": "Does total carat weight show how large jewellery will look?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Stone count, dimensions, shape, setting and distribution determine visible coverage." }
        },
        {
          "@type": "Question",
          "name": "Can total carat weight include coloured gemstones?",
          "acceptedAnswer": { "@type": "Answer", "text": "A combined total gemstone weight can include different gems if clearly stated, but it should not be labelled total diamond weight. Each gemstone type should be broken down separately." }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight exact?",
          "acceptedAnswer": { "@type": "Answer", "text": "It may be exact, approximate within a manufacturing tolerance or estimated for mounted stones. The seller should state which applies." }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight shown on an individual diamond certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "An individual loose-diamond report records that diamond’s own weight. A jewellery report or product specification is needed to describe the complete jewel’s total." }
        },
        {
          "@type": "Question",
          "name": "What should a transparent product page show?",
          "acceptedAnswer": { "@type": "Answer", "text": "It should show centre weight, accent weight, total diamond weight, stone count, the scope of the total, whether the figure is exact or approximate, and report details where applicable." }
        }
      ]
    }
  ]
};

// 3. The Article Content Sections
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/total-carat-weight-meaning-diamond-jewellery/32 (1).jpg",
        alt: "Total carat weight in diamond jewellery explained",
        title: "Total Carat Weight",
        caption: "Total carat weight adds together all diamonds in a piece, which differs from single center-stone weights.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Total carat weight is the combined weight of multiple diamonds in a piece of jewellery—or, when clearly stated, across a matching pair such as earrings. It does not necessarily tell you the weight of the centre diamond, the size of each stone or how the jewellery will look when worn."
      },
      {
        type: "paragraph",
        text: "A ring containing one 0.60 ct centre diamond and twenty 0.02 ct accent diamonds has 1.00 ct total diamond weight. A pair of stud earrings containing one 0.50 ct diamond in each ear also has 1.00 ct total weight. A bracelet containing fifty 0.02 ct diamonds can carry the same total. The numbers add to one carat in every example, but the designs, visible scale and value structure are very different."
      },
      {
        type: "paragraph",
        text: "Understanding this distinction prevents a common online-shopping mistake: reading “1.00 ct” in a product title and assuming it refers to one one-carat diamond."
      },
      {
        type: "paragraph",
        parts: [
          { text: "For the definition of an individual carat, points and milligrams, read " },
          { text: "lab-grown diamond carat weight explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" },
          { text: "." }
        ]
      },
      {
        type: "callout",
        title: "Quick Answer",
        parts: [
          { text: "Total carat weight is the sum of the weights of all diamonds included within the stated total.", bold: true },
          { text: "\n\n• " },
          { text: "ct:", bold: true },
          { text: " carat weight, often used for one individual stone;\n• " },
          { text: "tcw:", bold: true },
          { text: " total carat weight;\n• " },
          { text: "ctw:", bold: true },
          { text: " carat total weight or total carat weight;\n• " },
          { text: "tdw:", bold: true },
          { text: " total diamond weight; and\n• " },
          { text: "tw:", bold: true },
          { text: " total weight, which must be clearly defined.\n\nAbbreviations are not applied identically by every retailer. The product page should explain what the figure includes rather than expecting buyers to interpret initials." }
        ]
      }
    ]
  },
  {
    heading: "Carat vs. Total Carat Weight Terms",
    content: [
      {
        type: "table",
        headers: ["Term", "What it usually describes", "Example"],
        rows: [
          ["Carat weight (ct)", "The weight of one individual diamond", "Centre diamond: 0.75 ct"],
          ["Total carat weight (tcw or ctw)", "The combined weight of multiple diamonds", "Centre and accents combined: 1.00 tcw"],
          ["Total diamond weight (tdw)", "The combined weight of diamonds in the described item or pair", "Bracelet: 2.00 tdw"],
          ["Total gemstone weight", "A combined gemstone figure that must identify which gem types are included", "Sapphire and diamond total: must be broken down clearly"]
        ]
      }
    ]
  },
  {
    heading: "1. Understanding Weight Distribution",
    content: [
      {
        type: "paragraph",
        text: "One metric carat equals 200 milligrams, whether it belongs to one stone or is divided among many. The difference is distribution."
      },
      {
        type: "paragraph",
        text: "A single one-carat diamond is not equivalent to four quarter-carat diamonds merely because the total mass matches. The individual stones have different dimensions, uses and market characteristics. Larger individual diamonds are also evaluated separately for cut, colour, clarity and documentation where applicable."
      }
    ]
  },
  {
    heading: "2. Total Carat Weight in Diamond Rings",
    content: [
      {
        type: "paragraph",
        text: "Rings distribute diamond weight in multiple ways:"
      },
      {
        type: "bullet-list",
        items: [
          "Solitaire with hidden halos: Principal stones account for most weight; tiny hidden diamonds under bases add minor points.",
          "Halo rings: Surrounding halos expand total weight face-up without physical centre enlargement.",
          "Three-stone rings: Sums up the main centre and two adjacent side diamonds.",
          "Pavé or diamond-set bands: Multiple tiny diamonds inset along the metal shank profile."
        ],
        itemsParts: [
          [{ text: "Solitaire with hidden halos: ", bold: true }, { text: "Principal stones account for most weight; tiny hidden diamonds under bases add minor points." }],
          [{ text: "Halo rings: ", bold: true }, { text: "Surrounding halos expand total weight face-up without physical centre enlargement." }],
          [{ text: "Three-stone rings: ", bold: true }, { text: "Sums up the main centre and two adjacent side diamonds." }],
          [{ text: "Pavé or diamond-set bands: ", bold: true }, { text: "Multiple tiny diamonds inset along the metal shank profile." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/total-carat-weight-meaning-diamond-jewellery/32 (2).jpg",
        alt: "Stunning diamond engagement ring styles showing settings",
        title: "Engagement Ring Setting Styles",
        caption: "Halo, pavé, and three-stone rings distribute their total carat weights across multiple diamonds."
      }
    ]
  },
  {
    heading: "3. Total Carat Weight in Earrings and Bracelets",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Earrings: ", bold: true },
          { text: "Stud descriptions apply to the matching pair. A \"1.00 ct total weight\" pair of stud earrings commonly contains approximately 0.50 ct in each earring." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bracelets: ", bold: true },
          { text: "Tennis designs distribute weight along the clasp length. A 3.00 ct total bracelet containing 60 diamonds uses smaller stones than a 3.00 ct bracelet containing 40 stones, changing visual density." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: " to compare face-up spreads." }
        ]
      }
    ]
  },
  {
    heading: "4. How to Read Coloured Stone Combinations",
    content: [
      {
        type: "paragraph",
        text: "Stones of equal carat weight can have different dimensions because their densities differ. For a sapphire-centre ring with lab-grown diamond accents, verify separate gem parameters:"
      },
      {
        type: "bullet-list",
        items: [
          "Centre sapphire: 1.20 ct",
          "Lab-grown diamond accents: 0.35 ct total",
          "Total gemstone weight: 1.55 ct total"
        ],
        itemsParts: [
          [{ text: "Centre sapphire: ", bold: true }, { text: "1.20 ct" }],
          [{ text: "Lab-grown diamond accents: ", bold: true }, { text: "0.35 ct total" }],
          [{ text: "Total gemstone weight: ", bold: true }, { text: "1.55 ct total" }]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "diamond certification versus jewellery certification", href: "/blog/diamond-certification-vs-jewellery-certification/" },
          { text: " and " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " for additional documentation guidelines." }
        ]
      }
    ]
  },
  {
    heading: "Example Coordinated Set Weight Breakdown",
    content: [
      {
        type: "table",
        headers: ["Component", "Diamond weight"],
        rows: [
          ["Necklace and pendant", "1.20 ct total"],
          ["Earring pair", "0.80 ct total"],
          ["Complete set", "2.00 ct total"]
        ]
      }
    ]
  },
  {
    heading: "Transparent Disclosure Guide",
    content: [
      {
        type: "table",
        headers: ["Recommended Format", "Application Scenario"],
        rows: [
          ["Centre: 0.75 ct | Accents: 0.25 ct total | TDW: 1.00 ct", "Engagement ring with pavé side diamonds"],
          ["Sold as pair | TDW: 1.00 ct | Principal: 0.50 ct per earring", "Matched solitaire stud earrings"],
          ["Centre sapphire: 1.20 ct | Diamond accents: 0.35 ct total", "Coloured gemstone solitaire with diamond accents"]
        ]
      }
    ]
  },
  {
    heading: "Total Carat Weight Verification Checklist",
    content: [
      {
        type: "table",
        headers: ["Before buying, verify:"],
        rows: [
          ["Product titles separate centre solitaire weight from total weight."],
          ["Earring specifications confirm pair weight totals vs single unit weights."],
          ["Jewellery sets show a clear breakdown of each component item."],
          ["Coloured gemstones are listed separately from diamond totals in carats."],
          ["Accent stone quality ranges (colour/clarity) are documented in specifications."],
          ["Individually reported centre diamonds include report check registry numbers."],
          ["Finished jewel weights state whether figures are exact or estimated."]
        ]
      }
    ]
  },
  {
    content: [
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        parts: [
          { text: "Total carat weight adds together the diamonds included in a stated item, pair or set. It does not automatically describe the centre diamond, individual-stone size or visible appearance. Look for transparent weight breakdowns to compare jewelry accurately.\n\n" },
          { text: "Aurelia Royale maintains a strict transparency standard, separating principal stone carats, accent totals, and gold fineness stamps." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What does total carat weight mean?",
            answer: "It means the combined weight of all diamonds included within the stated total. The listing should define exactly what the total covers."
          },
          {
            question: "Is total carat weight the same as centre-stone weight?",
            answer: "No. Centre-stone weight refers to one principal diamond. Total carat weight may include the centre, side stones, halo and accents."
          },
          {
            question: "What is the difference between ct and ctw?",
            answer: "Ct commonly describes an individual stone’s carat weight. Ctw commonly describes the combined carat weight of multiple diamonds, although sellers should define their abbreviations."
          },
          {
            question: "Does 1.00 ct total mean a one-carat centre diamond?",
            answer: "Not necessarily. The total may be divided among a smaller centre diamond and multiple accents. Check the weight breakdown."
          },
          {
            question: "What does one-carat total weight mean for earrings?",
            answer: "If the figure applies to the pair, the two earrings together contain approximately one carat. Matched solitaire studs may contain about 0.50 ct per earring."
          },
          {
            question: "Does total carat weight include accent diamonds?",
            answer: "It should include the accents when they fall within the stated total. The product page should say which diamonds are included."
          },
          {
            question: "Is one large diamond worth the same as several small diamonds of equal total weight?",
            answer: "No. Individual size, quality, matching, reports, setting and market conditions all affect value."
          },
          {
            question: "Does total carat weight show how large jewellery will look?",
            answer: "No. Stone count, dimensions, shape, setting and distribution determine visible coverage."
          },
          {
            question: "Can total carat weight include coloured gemstones?",
            answer: "A combined total gemstone weight can include different gems if clearly stated, but it should not be labelled total diamond weight. Each gemstone type should be broken down separately."
          },
          {
            question: "Is total carat weight exact?",
            answer: "It may be exact, approximate within a manufacturing tolerance or estimated for mounted stones. The seller should state which applies."
          },
          {
            question: "Is total carat weight shown on an individual diamond certificate?",
            answer: "An individual loose-diamond report records that diamond’s own weight. A jewellery report or product specification is needed to describe the complete jewel’s total."
          },
          {
            question: "What should a transparent product page show?",
            answer: "It should show centre weight, accent weight, total diamond weight, stone count, the scope of the total, whether the figure is exact or approximate, and report details where applicable."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Evaluate Exact Diamond Weights Online",
        subtitle: "Choose certified solitaire centers, micro-matched pavé accents, and hand-selected tennis links. Shop our range.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog32Page() {
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
            Lab-Grown Diamond Education
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            Total Carat Weight Meaning
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Educational Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="total-carat-weight-meaning-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}
