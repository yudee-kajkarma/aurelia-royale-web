import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Carat Weight Explained",
  description: "Learn what lab-grown diamond carat weight means, how points and total carat weight work, and why two diamonds of equal weight can look different in size.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/",
  },
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-carat-weight-explained.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-carat-weight-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond carat weight explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/",
      "name": "Lab-Grown Diamond Carat Weight Explained",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#article",
      "headline": "Lab-Grown Diamond Carat Weight Explained",
      "description": "Learn what lab-grown diamond carat weight means, how points and total carat weight work, and why two diamonds of equal weight can look different in size.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond carat weight",
        "diamond carat weight explained",
        "lab-grown diamond carat size",
        "carat weight vs diamond size",
        "diamond points",
        "total carat weight"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "Lab-Grown Diamond Carat Weight Explained", "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is one carat in a lab-grown diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "One metric carat equals 200 milligrams, or 0.2 grams. The measurement is the same for laboratory-grown and natural diamonds." }
        },
        {
          "@type": "Question",
          "name": "Does carat mean diamond size?",
          "acceptedAnswer": { "@type": "Answer", "text": "Carat measures weight, not physical size. Length, width and depth in millimetres describe the diamond’s dimensions." }
        },
        {
          "@type": "Question",
          "name": "What are diamond points?",
          "acceptedAnswer": { "@type": "Answer", "text": "One carat contains 100 points. A 0.50 ct diamond is a 50-point diamond, while 0.25 ct equals 25 points." }
        },
        {
          "@type": "Question",
          "name": "Is a one-carat lab-grown diamond the same size as a one-carat natural diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "If shape and proportions are comparable, their dimensions can be comparable because both weigh one metric carat. Origin does not change the carat definition." }
        },
        {
          "@type": "Question",
          "name": "Why do two one-carat diamonds look different in size?",
          "acceptedAnswer": { "@type": "Answer", "text": "They may have different shapes, depths, girdles and proportions. One may distribute more weight across its face-up area while another carries more below the girdle." }
        },
        {
          "@type": "Question",
          "name": "How wide is a one-carat round diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 millimetres in diameter, but actual measurements vary." }
        },
        {
          "@type": "Question",
          "name": "Is 0.90 carat noticeably smaller than one carat?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not always. A well-proportioned 0.90–0.99 ct diamond may look close in face-up size to some one-carat diamonds. Compare actual dimensions and cut." }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Total carat weight is the combined weight of multiple diamonds in an item or defined pair. It does not necessarily describe the centre stone." }
        },
        {
          "@type": "Question",
          "name": "Does one-carat total weight mean each earring is one carat?",
          "acceptedAnswer": { "@type": "Answer", "text": "Usually not. If one carat is the pair’s total weight, each evenly matched principal diamond would be approximately 0.50 ct." }
        },
        {
          "@type": "Question",
          "name": "Does a higher carat diamond sparkle more?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. A larger diamond provides more visible area, but cut quality and lighting primarily determine brightness, fire and scintillation." }
        },
        {
          "@type": "Question",
          "name": "Can a diamond lose carat weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "Normal wear does not reduce carat weight. Chipping, damage, recutting or repolishing can remove material and lower the recorded weight." }
        },
        {
          "@type": "Question",
          "name": "Is carat the same as karat?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Carat measures gemstone weight, while karat describes gold purity." }
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
        src: "/images/blog/lab-grown-diamond-carat-weight-explained/30 (1).jpg",
        alt: "Lab-grown diamond carat weight explained",
        title: "Diamond Carat Weight",
        caption: "Carat weight measures physical mass; visible size is determined by face-up dimensions.",
        priority: true,
      },
      {
        type: "paragraph",
        text: "Carat weight is one of the most familiar diamond specifications and one of the most frequently misunderstood. A carat measures how much a diamond weighs. It does not directly state how wide the diamond looks, how brightly it returns light or whether it is high quality."
      },
      {
        type: "paragraph",
        parts: [
          { text: "One metric carat equals " },
          { text: "200 milligrams", bold: true },
          { text: ", or 0.2 grams. Each carat is divided into 100 points, so 0.50 carat equals 50 points and 1.25 carats equals one carat and 25 points. These measurements apply to laboratory-grown and natural diamonds alike." }
        ]
      },
      {
        type: "paragraph",
        text: "The number is precise, but the visual result is not determined by weight alone. Two lab-grown diamonds can weigh exactly 1.00 carat yet look different from the top because their shapes, proportions and weight distribution differ. A useful buying decision therefore considers carat weight together with measurements, cut, shape, setting and the wearer’s preferences."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Carat is one of the " },
          { text: "4Cs of a lab-grown diamond", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: ", alongside cut, colour and clarity. It describes quantity of weight, not overall quality." }
        ]
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "A diamond carat is a unit of weight: 1.00 carat = 200 milligrams, 1.00 carat = 100 points, 0.75 carat = 75 points, 0.50 carat = 50 points, 0.25 carat = 25 points. The abbreviation for a single diamond’s carat weight is commonly ct. For jewellery containing several diamonds, sellers may use total carat weight, written as tcw, ctw or another abbreviation. Carat weight is not the same as millimetre size. To understand how large a diamond may appear, also check its length, width and depth."
      }
    ]
  },
  {
    heading: "What Are Diamond Points?",
    content: [
      {
        type: "paragraph",
        text: "\"Points\" provide a convenient way to describe diamonds weighing less than one carat. One point equals 0.01 carat."
      },
      {
        type: "table",
        headers: ["Carat weight", "Points", "Common description"],
        rows: [
          ["0.10 ct", "10", "Ten-pointer"],
          ["0.25 ct", "25", "Quarter carat or twenty-five points"],
          ["0.33 ct", "33", "Thirty-three points"],
          ["0.50 ct", "50", "Half carat or fifty points"],
          ["0.75 ct", "75", "Three-quarter carat or seventy-five points"],
          ["0.90 ct", "90", "Ninety points"],
          ["1.00 ct", "100", "One carat"]
        ]
      }
    ]
  },
  {
    heading: "1. Is Carat the Same as Karat?",
    content: [
      {
        type: "paragraph",
        text: "No. The similar spelling causes frequent confusion:"
      },
      {
        type: "bullet-list",
        items: [
          "Carat (ct): Measures the physical weight of diamonds and other gemstones.",
          "Karat (kt or K): Describes the proportion of pure gold in an alloy, such as 18ct gold (75% purity) or 9ct gold (37.5% purity)."
        ],
        itemsParts: [
          [{ text: "Carat (ct): ", bold: true }, { text: "Measures the physical weight of diamonds and other gemstones." }],
          [{ text: "Karat (kt or K): ", bold: true }, { text: "Describes the proportion of pure gold in an alloy, such as 18ct gold (75% purity) or 9ct gold (37.5% purity)." }]
        ]
      },
      {
        type: "paragraph",
        text: "A product may therefore contain a 1.00 ct lab-grown diamond set in 18K gold. The two figures describe entirely different parts of the jewellery."
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-carat-weight-explained/30 (2).jpg",
        alt: "Weighing loose diamonds on a precision scale balance",
        title: "Weighing loose diamonds",
        caption: "Loose diamonds are weighed on calibrated gemological scales to determine carat weight."
      }
    ]
  },
  {
    heading: "2. Carat Weight vs. Visible Diamond Size",
    content: [
      {
        type: "paragraph",
        text: "Carat is a three-dimensional weight measurement. The size a buyer sees from the top is usually described by the diamond’s face-up length and width, sometimes called its spread."
      },
      {
        type: "paragraph",
        text: "Two diamonds with the same weight can look different because one carries more material in its depth while another distributes more weight across its face-up area. Shape also matters. A one-carat oval and a one-carat round will not share the same outline or measurements, even though their weight is equal."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Check the millimetre measurements on the grading report. You can read our related guides detailing " },
          { text: "lab-grown diamond cut explained", href: "/blog/lab-grown-diamond-cut-explained/" },
          { text: " for proportion info." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-carat-weight-explained/30 (3).jpg",
        alt: "Comparing diameter widths of round brilliant cuts side by side",
        title: "Spread and Depth Comparison",
        caption: "Two diamonds sharing identical carat weights can look different due to depth and facet proportions."
      }
    ]
  },
  {
    heading: "3. Centre-Stone Weight vs. Total Carat Weight",
    content: [
      {
        type: "paragraph",
        text: "Total carat weight (tcw) refers to the combined weight of all diamonds in the piece, which is different from the weight of the largest individual diamond."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Earring Carats: ", bold: true },
          { text: "Stud descriptions require particular care because totals refer to the pair. A \"1.00 ct total weight\" pair of diamond studs commonly contains approximately 0.50 ct in each earring." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Necklaces and Bracelets: ", bold: true },
          { text: "A tennis bracelet containing fifty 0.02 ct diamonds has a total of 1.00 ct. This combined total weight should not be confused with the visual appearance of a single 1.00 ct solitaire diamond." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-carat-weight-explained/30 (4).jpg",
        alt: "Multi-stone diamond tennis bracelet layout",
        title: "Tennis Bracelet Total Carat Weight",
        caption: "Total carat weight represents the combined weight of all stones in multi-stone jewelry designs."
      }
    ]
  },
  {
    heading: "4. How to Read Carat Weight on a Grading Report",
    content: [
      {
        type: "paragraph",
        text: "Grading reports record weight to two decimal places on calibrated scales. Be sure to check the shape and cutting style, length-width measurements, and girdle profiles."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " and " },
          { text: "how to verify an IGI certificate number online", href: "/blog/verify-igi-certificate-number/" },
          { text: " for additional confirmation steps." }
        ]
      }
    ]
  },
  {
    heading: "Choosing and Verifying Carat Weight",
    content: [
      {
        type: "table",
        headers: ["Step", "Carat Weight Action Plan"],
        rows: [
          ["1. Establish complete budget", "Include settings and tax costs instead of spending the entire budget on carat weight alone."],
          ["2. Verify shape and outline", "Elongated shapes (ovals, marquises) spread weight differently than deep round cushions."],
          ["3. Check millimetre spread", "Compare millimetre diameter dimensions to ensure you are not buying a deep, small-looking stone."],
          ["4. Prioritise cut quality", "Do not choose a heavier stone if its poor cut makes it look dull and lifeless."],
          ["5. Separate center and accents", "Ensure center-stone carat weight is distinguished from combined total weights."]
        ]
      },
      {
        type: "table",
        headers: ["Carat Weight Verification Checklist"],
        rows: [
          ["Laboratory-grown origin is explicitly disclosed in the product titles."],
          ["Individual carat weights are separated from total carat weights (TCW)."],
          ["Earring specifications clarify if weights are per earring or for the pair."],
          ["Millimetre measurements are cross-checked against standard weight guides."],
          ["Girdle descriptions do not indicate hidden weight concentration."],
          ["The certificate registry matches laser inscriptions on girdles."],
          ["Coloured gemstones are listed separately from diamond carat weights."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        text: "Lab-grown diamond carat weight is an exact measurement of mass: one carat equals 200 milligrams and 100 points. It does not independently describe visible size, beauty or quality. Choose carat weight in harmony with cut quality, face-up millimetre spread, and intended settings. Aurelia Royale displays individual center-stone weights, accents, and physical measurements clearly to ensure a confident selection."
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is one carat in a lab-grown diamond?",
            answer: "One metric carat equals 200 milligrams, or 0.2 grams. The measurement is the same for laboratory-grown and natural diamonds."
          },
          {
            question: "Does carat mean diamond size?",
            answer: "Carat measures weight, not physical size. Length, width and depth in millimetres describe the diamond’s dimensions."
          },
          {
            question: "What are diamond points?",
            answer: "One carat contains 100 points. A 0.50 ct diamond is a 50-point diamond, while 0.25 ct equals 25 points."
          },
          {
            question: "Is a one-carat lab-grown diamond the same size as a one-carat natural diamond?",
            answer: "If shape and proportions are comparable, their dimensions can be comparable because both weigh one metric carat. Origin does not change the carat definition."
          },
          {
            question: "Why do two one-carat diamonds look different in size?",
            answer: "They may have different shapes, depths, girdles and proportions. One may distribute more weight across its face-up area while another carries more below the girdle."
          },
          {
            question: "How wide is a one-carat round diamond?",
            answer: "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 millimetres in diameter, but actual measurements vary."
          },
          {
            question: "Is 0.90 carat noticeably smaller than one carat?",
            answer: "Not always. A well-proportioned 0.90–0.99 ct diamond may look close in face-up size to some one-carat diamonds. Compare actual dimensions and cut."
          },
          {
            question: "What does total carat weight mean?",
            answer: "Total carat weight is the combined weight of multiple diamonds in an item or defined pair. It does not necessarily describe the centre stone."
          },
          {
            question: "Does one-carat total weight mean each earring is one carat?",
            answer: "Usually not. If one carat is the pair’s total weight, each evenly matched principal diamond would be approximately 0.50 ct."
          },
          {
            question: "Does a higher carat diamond sparkle more?",
            answer: "Not automatically. A larger diamond provides more visible area, but cut quality and lighting primarily determine brightness, fire and scintillation."
          },
          {
            question: "Can a diamond lose carat weight?",
            answer: "Normal wear does not reduce carat weight. Chipping, damage, recutting or repolishing can remove material and lower the recorded weight."
          },
          {
            question: "Is carat the same as karat?",
            answer: "No. Carat measures gemstone weight, while karat describes gold purity."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Compare Certified Carats Online",
        subtitle: "Choose exact millimetre diameters, balanced depths, and verified GIA/IGI carat specifications. Shop our collection.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog30Page() {
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
            Carat Weight Explained
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Educational Guide • Published July 15, 2026
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
