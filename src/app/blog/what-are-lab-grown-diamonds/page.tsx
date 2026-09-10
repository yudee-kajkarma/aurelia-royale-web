import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "What Are Lab-Grown Diamonds? Complete Buyer’s Guide",
  description: "Discover what lab-grown diamonds are, how CVD and HPHT create them, whether they are real, how they are graded and what buyers should check.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/",
  },
};

// 2. The exact SEO Schema you shared
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
      },
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/",
      "name": "What Are Lab-Grown Diamonds? Complete Buyer’s Guide",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#webpage"
      },
      "headline": "What Are Lab-Grown Diamonds?",
      "description": "Discover what lab-grown diamonds are, how CVD and HPHT create them, whether they are real, how they are graded and what buyers should check.",
      "image": [
        "https://www.aureliaroyale.com/images/blog/what-are-lab-grown-diamonds.webp"
      ],
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "what are lab-grown diamonds",
        "are lab-grown diamonds real",
        "how are lab-grown diamonds made",
        "CVD diamonds",
        "HPHT diamonds",
        "lab-grown diamond jewellery",
        "certified lab-grown diamonds"
      ],
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#breadcrumb",
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
          "name": "What Are Lab-Grown Diamonds?",
          "item": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lab-grown diamond is a diamond created in a controlled technological environment rather than formed through geological processes beneath the Earth."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds are real diamonds made from crystallised carbon and possess the essential physical and optical properties associated with diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds are not fake diamonds, although their laboratory-grown origin must always be clearly disclosed."
          }
        },
        {
          "@type": "Question",
          "name": "How are lab-grown diamonds made?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds are primarily produced using Chemical Vapour Deposition or High Pressure High Temperature technology."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as cubic zirconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cubic zirconia is a diamond simulant with a different chemical composition and physical properties."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as moissanite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Moissanite is a different gemstone with its own composition, optical properties and appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds have the hardness and durability expected of diamond, although the surrounding jewellery must still be maintained properly."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lab-grown diamond does not normally become permanently cloudy through ordinary wear. Oil, soap and cosmetic residue can make its surface appear dull until cleaned."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gemmological laboratories provide reports for qualifying laboratory-grown diamonds and certain finished jewellery pieces."
          }
        },
        {
          "@type": "Question",
          "name": "Are all lab-grown diamonds high quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cut, colour, clarity and craftsmanship vary, so each diamond and jewellery piece should be evaluated individually."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds may have resale value, but their secondary market is less established and resale prices can be significantly lower than original retail prices."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Their environmental impact depends partly on production efficiency and the energy source used by the manufacturing facility."
          }
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
        src: "/images/blog/what-are-lab-grown-diamonds/featured.jpg",
        alt: "Laboratory-grown diamond and finished fine jewellery",
        title: "What Are Lab-Grown Diamonds?",
        caption: "Laboratory-grown diamonds have the essential properties associated with diamond but are created through a controlled technological process.",
        priority: true
      },
      {
        type: "paragraph",
        text: "For generations, the diamond has stood as the ultimate symbol of endurance, beauty, and refined status. In recent years, a remarkable technological milestone has reshaped the landscape of fine jewellery: the rise of laboratory-grown diamonds."
      },
      {
        type: "paragraph",
        text: "Unlike historic diamond simulants, which only mimic the superficial appearance of diamond, laboratory-grown diamonds represent a true revolution. They are actual diamonds, formed through human ingenuity and highly sophisticated technology. But what exactly are they, how do they compare to earth-mined stones, and what should you check before selecting one for your personal collection? Let us explore."
      }
    ]
  },
  {
    heading: "How Are Lab-Grown Diamonds Made?",
    content: [
      {
        type: "paragraph",
        text: "Earth-mined diamonds require billions of years of extreme pressure and intense thermal activity deep within the mantle of the earth to crystallise carbon. In the laboratory, scientists replicate these precise conditions using two cutting-edge methods:"
      },
      {
        type: "callout",
        title: "CVD (Chemical Vapour Deposition)",
        text: "In a vacuum chamber, a microscopic diamond slice (or \"seed\") is exposed to a carbon-rich gas mixture (such as methane). Plasma energy breaks down the gas molecules, causing pure carbon atoms to rain down and crystallise layer-by-layer onto the seed, slowly growing a flawless raw crystal."
      },
      {
        type: "callout",
        title: "HPHT (High Pressure High Temperature)",
        text: "This process subjects the carbon seed to immense forces (exceeding 1.5 million pounds of pressure per square inch) and temperatures upwards of 1,500°C. Under these colossal conditions, the carbon melts and recrystallises around the diamond seed in a format identical to geological diamond formation."
      },
      {
        type: "image",
        src: "/images/blog/what-are-lab-grown-diamonds/cvd-hpht-process.jpg",
        alt: "CVD and HPHT lab-grown diamond creation methods compared",
        title: "How Lab-Grown Diamonds Are Made",
        caption: "CVD and HPHT use different controlled environments to grow a diamond crystal from a seed."
      }
    ]
  },
  {
    heading: "Lab-Grown vs Natural Origin: The Essential Distinction",
    content: [
      {
        type: "paragraph",
        text: "It is critical to clarify that origin is the only separating factor between the two types of diamonds. Physically, chemically, and optically, they are identical. They both register a 10 on the Mohs hardness scale (making them the hardest known substances) and exhibit the exact same high refraction of light, which produces their trademark sparkle."
      },
      {
        type: "paragraph",
        text: "Because of their structural identity, it is impossible to distinguish between a laboratory-grown and a natural diamond with a standard magnifying loupe or simple visual inspection. Only highly specialized gemmological machinery can detect trace growth elements that identify their unique origin pathway."
      },
      {
        type: "image",
        src: "/images/blog/what-are-lab-grown-diamonds/lab-vs-natural.jpg",
        alt: "Lab-grown and natural diamond origins compared",
        title: "Lab-Grown vs Natural Diamonds",
        caption: "Lab-grown and natural diamonds share essential diamond properties but have different origins."
      },
      {
        type: "table",
        headers: ["Characteristic", "Laboratory-Grown Diamond", "Natural Earth-Mined Diamond"],
        rows: [
          ["Chemical Composition", "Crystallised Carbon (C)", "Crystallised Carbon (C)"],
          ["Refractive Index", "2.417 (Identical Brilliance)", "2.417 (Identical Brilliance)"],
          ["Hardness (Mohs Scale)", "10 (Extreme Durability)", "10 (Extreme Durability)"],
          ["Time to Form", "Weeks to Months", "1 to 3.3 Billion Years"],
          ["Value Proposition", "Premium look at an accessible price point", "High investment value linked to scarcity"]
        ]
      }
    ]
  },
  {
    heading: "What Does Certification Mean?",
    content: [
      {
        type: "paragraph",
        text: "Just like natural diamonds, laboratory-grown diamonds undergo rigorous grading by global gemmological laboratories. Independent authorities like the International Gemological Institute (IGI) and the Gemological Institute of America (GIA) assess each diamond according to the classic 4Cs: Carat, Cut, Color, and Clarity."
      },
      {
        type: "paragraph",
        text: "When a laboratory grades a diamond, they issue an official certificate documenting its exact physical characteristics. Furthermore, reputable growers laser-inscribe a microscopic report number onto the diamond's girdle. This number allows you to verify the origin and quality details online, protecting you from misrepresentation and ensuring absolute buying transparency."
      },
      {
        type: "image",
        src: "/images/blog/what-are-lab-grown-diamonds/certification.jpg",
        alt: "Laboratory-grown diamond grading and certificate verification",
        title: "Lab-Grown Diamond Certification",
        caption: "Certification can confirm laboratory-grown origin and document relevant quality characteristics."
      }
    ]
  },
  {
    heading: "What to Check Before Buying Lab-Grown Jewellery",
    content: [
      {
        type: "paragraph",
        text: "When choosing laboratory-grown diamond jewellery, you should proceed with the same care as buying a traditional diamond. A structured checklist will help you buy with total confidence:"
      },
      {
        type: "table",
        headers: ["Product Authenticity Checklist"],
        rows: [
          ["Verify the Certificate: Ensure the diamond comes with an IGI or GIA grading report specifically stating it is \"Laboratory-Grown.\""],
          ["Check the Cut Grade: The quality of the cut determines how much light the diamond reflects. Always look for a cut grade of \"Excellent\" or \"Ideal.\""],
          ["Examine the Metal & Craftsmanship: A premium diamond deserves a premium setting. Ensure the metal is certified 18k Gold or Platinum, with prongs set to offer long-term security."],
          ["Clear Sourcing & Delivery: Verify that the retailer offers fully insured shipping, proper product specifications, and a clear return policy."]
        ]
      },
      {
        type: "image",
        src: "/images/blog/what-are-lab-grown-diamonds/buyer-checklist.jpg",
        alt: "Lab-grown diamond jewellery buying checklist",
        title: "What to Check Before Buying Lab-Grown Diamond Jewellery",
        caption: "Origin, quality, metal, certification, availability and delivery information should be reviewed before ordering."
      },
      {
        type: "faq",
        items: [
          {
            question: "What is a lab-grown diamond?",
            answer: "A lab-grown diamond is a diamond created in a controlled technological environment rather than formed through geological processes beneath the Earth."
          },
          {
            question: "Are lab-grown diamonds real?",
            answer: "Yes. Lab-grown diamonds are real diamonds made from crystallised carbon and possess the essential physical and optical properties associated with diamond."
          },
          {
            question: "Are lab-grown diamonds fake?",
            answer: "No. Lab-grown diamonds are not fake diamonds, although their laboratory-grown origin must always be clearly disclosed."
          },
          {
            question: "How are lab-grown diamonds made?",
            answer: "Lab-grown diamonds are primarily produced using Chemical Vapour Deposition (CVD) or High Pressure High Temperature (HPHT) technology."
          },
          {
            question: "Are lab-grown diamonds the same as cubic zirconia?",
            answer: "No. Cubic zirconia is a diamond simulant with a completely different chemical composition and physical properties."
          },
          {
            question: "Are lab-grown diamonds the same as moissanite?",
            answer: "No. Moissanite is a different gemstone with its own composition, optical properties and appearance."
          },
          {
            question: "Do lab-grown diamonds last?",
            answer: "Yes. Lab-grown diamonds have the hardness and durability expected of diamond, although the surrounding jewellery must still be maintained properly."
          },
          {
            question: "Can lab-grown diamonds become cloudy?",
            answer: "A lab-grown diamond does not normally become permanently cloudy through ordinary wear. Oil, soap and cosmetic residue can make its surface appear dull until cleaned."
          },
          {
            question: "Can lab-grown diamonds be certified?",
            answer: "Yes. Gemmological laboratories provide reports for qualifying laboratory-grown diamonds and certain finished jewellery pieces."
          },
          {
            question: "Are all lab-grown diamonds high quality?",
            answer: "No. Cut, colour, clarity and craftsmanship vary, so each diamond and jewellery piece should be evaluated individually."
          },
          {
            question: "Do lab-grown diamonds have resale value?",
            answer: "Lab-grown diamonds may have resale value, but their secondary market is less established and resale prices can be significantly lower than original retail prices."
          },
          {
            question: "Are lab-grown diamonds sustainable?",
            answer: "Not automatically. Their environmental impact depends partly on production efficiency and the energy source used by the manufacturing facility."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover the Brilliance of Aurelia Royale",
        subtitle: "From meticulously crafted solitaire rings to custom-designed masterworks, explore our collection of certified laboratory-grown diamond jewellery.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {/* Injecting the JSON-LD Script into the page for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Header Banner */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Lab-Grown Diamond Education
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Are Lab-Grown Diamonds?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Published July 14, 2026 • 8 Min Read
          </p>
        </div>
      </section>

      {/* Render Dynamic Article */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="what-are-lab-grown-diamonds" />
      <NewsletterSection />
    </main>
  );
}