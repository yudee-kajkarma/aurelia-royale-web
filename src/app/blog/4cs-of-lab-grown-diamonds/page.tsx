import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "The 4Cs of Lab-Grown Diamonds: A Buyer’s Guide",
  description: "Understand the 4Cs of lab-grown diamonds—cut, colour, clarity and carat—and learn how to balance the grades when choosing jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/",
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
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/4cs-of-lab-grown-diamonds.webp",
      "width": 1600,
      "height": 900,
      "caption": "Cut, colour, clarity and carat characteristics of lab-grown diamonds"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/",
      "name": "What Are the 4Cs of a Lab-Grown Diamond?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#article",
      "headline": "What Are the 4Cs of a Lab-Grown Diamond?",
      "description": "Understand the 4Cs of lab-grown diamonds—cut, colour, clarity and carat—and learn how to balance the grades when choosing jewellery.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "4Cs of lab-grown diamonds",
        "lab-grown diamond 4Cs",
        "lab diamond quality grades",
        "how to choose a lab-grown diamond",
        "diamond cut colour clarity carat"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#breadcrumb",
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
          "name": "What Are the 4Cs of a Lab-Grown Diamond?",
          "item": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the 4Cs of a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 4Cs are cut, colour, clarity and carat weight. They describe key quality characteristics used to evaluate and compare diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded using the same 4Cs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The same general quality principles apply, although laboratory report formats and current lab-grown grading services can differ."
          }
        },
        {
          "@type": "Question",
          "name": "Which of the 4Cs is most important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cut is often the first priority because it strongly influences brightness and sparkle, although the best choice balances all four factors."
          }
        },
        {
          "@type": "Question",
          "name": "Is diamond cut the same as diamond shape?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Shape describes the outline, while cut quality describes craftsmanship, proportions and light behaviour."
          }
        },
        {
          "@type": "Question",
          "name": "Is D the best diamond colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "D is at the colourless end of the scale, but near-colourless grades can also appear white once set."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds always flawless?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds can contain internal and external characteristics and receive a range of clarity grades."
          }
        },
        {
          "@type": "Question",
          "name": "Does one carat describe diamond size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carat describes weight. Millimetre measurements provide better information about visible dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Why do two diamonds with the same 4Cs look different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They may have different proportions, facet patterns, inclusion positions, measurements, fluorescence or light performance."
          }
        },
        {
          "@type": "Question",
          "name": "Do higher 4Cs always mean a better purchase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Higher grades can increase price without always creating a visible improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Are the 4Cs enough to choose diamond jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Buyers should also check origin, treatment, certification, metal, craftsmanship, images, warranty and returns."
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
        src: "/images/blog/4cs-of-lab-grown-diamonds/26 (1).jpg",
        alt: "Cut, colour, clarity and carat characteristics of lab-grown diamonds",
        title: "The 4Cs of Lab-Grown Diamonds",
        caption: "Cut, colour, clarity, and carat weight define the standard quality framework for lab-grown diamonds.",
        priority: true,
      },
      {
        type: "paragraph",
        text: "The 4Cs of a lab-grown diamond are cut, colour, clarity and carat weight."
      },
      {
        type: "paragraph",
        text: "Together, they provide a standard framework for describing and comparing diamond quality. The same four quality factors commonly associated with natural diamonds can also be used to assess laboratory-grown diamonds."
      },
      {
        type: "paragraph",
        text: "However, the 4Cs should not be treated as four independent numbers. They interact with one another, and the highest grades do not automatically produce the best-looking or best-value diamond for every buyer."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "The 4Cs are Cut, Colour, Clarity, and Carat. Cut refers to proportions and light behaviour. Colour refers to warmth or tint. Clarity measures inclusions. Carat measures weight. For many buyers, cut should be prioritised first, followed by an appropriate balance of visible size, colour and eye-clean clarity."
      },
      {
        type: "table",
        headers: ["C", "What it measures", "Why it matters"],
        rows: [
          ["Cut", "Craftsmanship, proportions and light behaviour", "Strongly influences sparkle and visual performance"],
          ["Colour", "The presence or absence of body colour", "Affects how white or warm the diamond appears"],
          ["Clarity", "Internal and external characteristics", "Influences visual cleanliness and rarity"],
          ["Carat", "Diamond weight", "Affects price and contributes to physical size"]
        ]
      }
    ]
  },
  {
    heading: "1. Diamond Cut",
    content: [
      {
        type: "paragraph",
        text: "Cut refers to the facet craftsmanship and angles regulating light behaviour, including brightness (white light reflection), fire (dispersion of spectral colors), and scintillation (flashes of light)."
      },
      {
        type: "paragraph",
        text: "Cut grade (Excellent down to Poor) is generally the most important of the 4Cs. A diamond with high color and clarity can still look lifeless if its cut proportions fail to return light."
      },
      {
        type: "image",
        src: "/images/blog/4cs-of-lab-grown-diamonds/26 (2).jpg",
        alt: "Grading diamond facets reflection under light machinery",
        title: "Proportion and Facet Cut Assessment",
        caption: "A diamond's cut regulates fire, brightness, and scintillation, making it the most critical C."
      }
    ]
  },
  {
    heading: "2. Diamond Colour",
    content: [
      {
        type: "paragraph",
        text: "Colour grades track the presence of body tints on a D-to-Z scale. Neighbouring grades are visually indistinguishable without comparison stones under laboratory lamps. Yellow or rose gold settings can soften slightly warm stones, making G or H colour options a balanced, cost-effective choice."
      },
      {
        type: "paragraph",
        text: "Fancy-coloured lab diamonds (blue, pink, yellow) bypass the D-to-Z scale entirely, using parameters like hue, tone, and saturation instead."
      },
      {
        type: "image",
        src: "/images/blog/4cs-of-lab-grown-diamonds/26 (3).jpg",
        alt: "Comparing yellow gold claws with white platinum settings",
        title: "Apparent Colour and Setting Selection",
        caption: "Warmer near-colourless diamonds are complemented beautifully by yellow or rose gold settings."
      }
    ]
  },
  {
    heading: "3. Diamond Clarity",
    content: [
      {
        type: "paragraph",
        text: "Clarity logs inclusions and blemishes mapped under 10× magnification from Flawless (FL) to Included (I3). Lab diamonds are not automatically flawless—they develop growth traits (carbon or metallic pinpoint zones) during manufacturing."
      },
      {
        type: "paragraph",
        text: "Choosing \"eye-clean\" VS1 or VS2 diamonds avoids paying premium prices for microscopic features that are invisible without magnification."
      },
      {
        type: "image",
        src: "/images/blog/4cs-of-lab-grown-diamonds/26 (4).jpg",
        alt: "Mapping inclusions under micro zoom magnification",
        title: "Clarity Inclusion Mapping under Magnification",
        caption: "Visual checks help verify whether clarity inclusions are eye-clean to the unaided eye."
      }
    ]
  },
  {
    heading: "4. Diamond Carat Weight",
    content: [
      {
        type: "paragraph",
        text: "Carat weight (0.20g) measures mass, not visible diameter. Poorly cut diamonds can hide weight in setting depth, making them look smaller face-up. Always cross-check carat weight against millimetre measurements."
      },
      {
        type: "paragraph",
        text: "Distinguish individual centre-stone weight from total carat weights (TCW) in multi-stone pieces like tennis bracelets or halo clusters."
      }
    ]
  },
  {
    heading: "Balancing and Choosing Your Diamond",
    content: [
      {
        type: "paragraph",
        text: "To get the best visual performance and value, it helps to understand how the 4Cs interact. The table below illustrates three different balancing strategies."
      },
      {
        type: "table",
        headers: ["Diamond", "Cut", "Colour", "Clarity", "Carat", "Possible result"],
        rows: [
          ["Diamond A", "Excellent", "D", "IF", "1.00 ct", "Very high paper grades, potentially higher price"],
          ["Diamond B", "Excellent", "G", "VS1", "1.00 ct", "Strong balance with differences difficult to see unaided"],
          ["Diamond C", "Good", "E", "VVS1", "1.00 ct", "High colour and clarity but potentially weaker light performance"]
        ]
      },
      {
        type: "table",
        headers: ["4Cs Purchase Checklist"],
        rows: [
          ["Laboratory-grown origin is clearly stated in product metadata."],
          ["Cut quality (brilliance and fire) is prioritised over perfect clarity."],
          ["Carat weights align with visual millimetre face-up measurements."],
          ["Colour grades are selected to match white or gold metal settings."],
          ["Inclusions are eye-clean, and cloudiness is absent."],
          ["You have matched IGI/GIA certificate details with registry numbers."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        text: "The 4Cs of a lab-grown diamond—cut, colour, clarity, and carat weight—provide a framework for describing quality, but they should be balanced rather than maximised blindly. Cut governs sparkle, colour affects warmth, clarity records inclusions, and carat measures weight. Aurelia Royale guides you through selecting the ideal balance, providing high-resolution videos and verified IGI/GIA reports for all solitaire designs."
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What are the 4Cs of a lab-grown diamond?",
            answer: "The 4Cs are cut, colour, clarity and carat weight. They describe key quality characteristics used to evaluate and compare diamonds."
          },
          {
            question: "Are lab-grown diamonds graded using the same 4Cs?",
            answer: "The same general quality principles apply, although laboratory report formats and current lab-grown grading services can differ."
          },
          {
            question: "Which of the 4Cs is most important?",
            answer: "Cut is often the first priority because it strongly influences brightness and sparkle. The best choice still balances all four factors."
          },
          {
            question: "Is diamond cut the same as diamond shape?",
            answer: "No. Shape describes the outline, such as round or oval. Cut quality describes craftsmanship, proportions and light behaviour."
          },
          {
            question: "Is D the best diamond colour?",
            answer: "D is at the colourless end of the D-to-Z scale, but it is not necessary for every buyer. Near-colourless grades can also appear white once set."
          },
          {
            question: "What clarity grade is eye-clean?",
            answer: "There is no universal eye-clean grade. Many VS diamonds and some SI diamonds may appear clean without magnification, depending on their inclusions and size."
          },
          {
            question: "Are lab-grown diamonds always flawless?",
            answer: "No. Lab-grown diamonds can contain internal and external characteristics and receive a range of clarity grades."
          },
          {
            question: "Does one carat describe diamond size?",
            answer: "Carat describes weight. Millimetre measurements provide better information about visible dimensions."
          },
          {
            question: "Why do two diamonds with the same 4Cs look different?",
            answer: "They may have different proportions, facet patterns, inclusion positions, measurements, fluorescence or light performance."
          },
          {
            question: "Do higher 4Cs always mean a better purchase?",
            answer: "No. Higher grades may increase the price without always creating a visible improvement. Balance and actual appearance matter."
          },
          {
            question: "Are small accent diamonds individually graded?",
            answer: "Usually not. Their origin, total carat weight and estimated quality range should still be disclosed."
          },
          {
            question: "Are the 4Cs enough to choose diamond jewellery?",
            answer: "No. Buyers should also check origin, treatment, certification, metal, craftsmanship, dimensions, images, warranty and returns."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Balance Quality and Value at Aurelia Royale",
        subtitle: "Beautifully cut to deliver maximum fire and scintillation. Discover our certified laboratory-grown diamond jewellery.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog26Page() {
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
            What Are the 4Cs of a Lab Diamond?
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

