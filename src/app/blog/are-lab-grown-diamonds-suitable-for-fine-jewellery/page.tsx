import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
  description: "Discover whether lab-grown diamonds are suitable for fine jewellery and how diamond quality, precious metals, craftsmanship and certification affect a piece.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/",
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
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-fine-jewellery.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-fine-jewellery.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond earrings, necklace and bracelet as fine jewellery"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/",
      "name": "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#article",
      "headline": "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
      "description": "Discover whether lab-grown diamonds are suitable for fine jewellery and how diamond quality, precious metals, craftsmanship and certification affect a piece.",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#primaryimage"
      },
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "are lab-grown diamonds suitable for fine jewellery",
        "lab-grown diamond fine jewellery",
        "lab-grown diamond jewellery quality",
        "luxury lab-grown diamond jewellery",
        "are lab diamonds durable"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#breadcrumb",
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
          "name": "Lab-Grown Diamond Education",
          "item": "https://www.aureliaroyale.com/blog/category/lab-grown-diamond-education/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds considered fine jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds can be used in fine jewellery because they are genuine diamonds. The finished piece must also use appropriate metals, secure construction and accurate disclosure."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds durable enough for jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds have the same fundamental hardness as mined diamonds, although any diamond can chip after a sufficiently strong impact."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be set in real gold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds can be set in yellow, white or rose gold, platinum and other suitable jewellery metals."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds look luxurious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A well-cut, transparent lab-grown diamond can display excellent brightness, fire and scintillation. The finished appearance also depends on design, metal quality and craftsmanship."
          }
        },
        {
          "@type": "Question",
          "name": "Is lab-grown diamond jewellery fashion jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Lab-grown diamonds can be used in fine, demi-fine or fashion jewellery. The classification depends on the entire piece."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds need certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not every small diamond needs an individual report. A significant centre diamond is more likely to benefit from independent grading or quality-assessment documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Does a diamond certificate cover the whole jewellery piece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. A loose-diamond report evaluates the submitted diamond and does not necessarily verify the metal, setting, accent stones or workmanship."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamond jewellery become an heirloom?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be passed between generations when thoughtfully designed, properly constructed and maintained."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamond jewellery be repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most properly constructed pieces can be professionally cleaned, resized or repaired, depending on their design, metal and setting."
          }
        },
        {
          "@type": "Question",
          "name": "Is all lab-grown diamond jewellery sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No single origin label proves sustainability. Environmental impact depends on energy, manufacturing, metal sourcing, cutting, packaging and transport."
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
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (1).png",
        alt: "Lab-grown diamond earrings, necklace and bracelet as fine jewellery",
        title: "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
        caption: "Laboratory-grown diamonds possess the physical properties and visual brilliance suitable for premium fine jewellery designs.",
        priority: true,
      },
      {
        type: "paragraph",
        text: "Fine jewellery is expected to offer more than an attractive appearance. Its materials, construction and finishing should be suitable for lasting use, professional maintenance and, when necessary, repair."
      },
      {
        type: "paragraph",
        text: "Can a lab-grown diamond meet those expectations?"
      },
      {
        type: "paragraph",
        text: "Yes. A high-quality lab-grown diamond is suitable for fine jewellery because it is a genuine diamond with essentially the same chemical, physical and optical properties as a mined diamond. Its laboratory origin does not prevent it from being set in gold, platinum or other precious metals or used in expertly constructed earrings, necklaces, bracelets and rings."
      },
      {
        type: "paragraph",
        text: "However, the presence of a lab-grown diamond does not automatically make a piece fine jewellery. The quality of the diamond, metal, setting, clasp, construction, disclosure and aftercare all matter."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "Lab-grown diamonds are suitable for fine jewellery. They are crystallised carbon, have the hardness and optical properties associated with diamond, and can be cut and set using established jewellery-making techniques. Whether the finished piece qualifies as high-quality fine jewellery depends on the entire design—not just the origin or carat weight of its diamonds."
      },
      {
        type: "callout",
        title: "What is Fine Jewellery?",
        parts: [
          { text: "There is no single universal definition applied identically by every jeweller and country. In practical terms, fine jewellery usually refers to pieces made using precious metals, gemstones and construction methods intended to provide lasting quality.\n\nFine jewellery is generally distinguished by:\n\n" },
          { text: "• Precious metals such as gold, platinum, palladium or sterling silver.\n• Genuine gemstones rather than decorative glass.\n• Secure stone-setting and carefully finished surfaces and edges.\n• Serviceable clasps, links and mountings.\n\n", italic: true },
          { text: "Price alone does not establish whether a piece is fine jewellery. A costly design can still be poorly constructed, while a more accessible piece can be thoughtfully made from properly disclosed materials." }
        ]
      },
      {
        type: "table",
        headers: ["Material", "Is it diamond?", "Typical hardness", "Suitable for fine jewellery?"],
        rows: [
          ["Lab-grown diamond", "Yes", "10 on the Mohs scale", "Yes"],
          ["Mined diamond", "Yes", "10", "Yes"],
          ["Moissanite", "No", "Approximately 9.25", "Can be used in fine jewellery"],
          ["Cubic zirconia", "No", "Approximately 8–8.5", "More commonly used in fashion jewellery"],
          ["Glass crystal", "No", "Varies, generally much softer", "Primarily fashion jewellery"]
        ]
      }
    ]
  },
  {
    heading: "Why Are Lab-Grown Diamonds Suitable?",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "1. They Have Diamond's Hardness: ", bold: true },
          { text: "Diamond ranks 10 on the Mohs scale, making it highly resistant to scratching. Polished facet surfaces need to remain smooth to reflect light effectively, and a softer material can accumulate scratches more readily, reducing brilliance." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "2. They Retain Their Optical Properties: ", bold: true },
          { text: "A lab-grown diamond does not lose its optical identity simply because it becomes older. Sparle may temporarily appear reduced when oils collect, but cleanings easily restore original brightness, fire, and scintillation." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "3. Cut, Metals and Settings: ", bold: true },
          { text: "Lab diamond rough can be cut into round, oval, pear, marquise, and fancy shapes, and set securely using gold, platinum, and other precious metals in prong, bezel, channel, or flush mounts." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (2).png",
        alt: "Cut and polished loose lab-grown diamonds in various shapes",
        title: "Faceted Diamond Cuts",
        caption: "Faceted and polished lab diamond crystals perform identically to mined diamonds under optical assessment."
      }
    ]
  },
  {
    heading: "What Makes Lab-Grown Diamond Jewellery High Quality?",
    content: [
      {
        type: "paragraph",
        text: "A piece must be judged as a complete object:"
      },
      {
        type: "bullet-list",
        items: [
          "Diamond Selection: Transparent, eye-clean, and well-cut. For multi-stone pieces, proper matching in colour and brilliance is essential.",
          "Precious Metal: Explicit identification of metal composition (e.g. 18-carat gold, Platinum 950) and presence of a legal hallmark verifying fineness.",
          "Secure Setting: Evenly positioned prongs, flat stone seats, protected corners, and good cleaning access.",
          "Construction: Smooth interior surfaces, secure solder joints, safety clasps, and strong links."
        ],
        itemsParts: [
          [{ text: "Diamond Selection: ", bold: true }, { text: "Transparent, eye-clean, and well-cut. For multi-stone pieces, proper matching in colour and brilliance is essential." }],
          [{ text: "Precious Metal: ", bold: true }, { text: "Explicit identification of metal composition (e.g. 18-carat gold, Platinum 950) and presence of a legal hallmark verifying fineness." }],
          [{ text: "Secure Setting: ", bold: true }, { text: "Evenly positioned prongs, flat stone seats, protected corners, and good cleaning access." }],
          [{ text: "Construction: ", bold: true }, { text: "Smooth interior surfaces, secure solder joints, safety clases, and strong links." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (3).png",
        alt: "Securing lab-grown diamonds in premium solid gold and platinum settings",
        title: "Craftsmanship and Setting Security",
        caption: "Fine jewellery requires secure stone-setting, thick prongs, and legal hallmarks for precious metal verification."
      }
    ]
  },
  {
    heading: "Certification and Jewellery Categories",
    content: [
      {
        type: "paragraph",
        text: "While small melee diamonds are rarely certified individually, a significant centre stone benefits from independent grading (GIA/IGI) confirming origin, carat weight, clarity, cut, and treatments."
      },
      {
        type: "paragraph",
        text: "Note that a loose-diamond grading report evaluates the submitted gemstone, not the finished setting, metal purity, or clasp workmanship."
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds are suitable across all major fine categories:"
      },
      {
        type: "bullet-list",
        items: [
          "Earrings: Studs, drops, and hoops with secure post and backing mounts.",
          "Necklaces & Pendants: Designs utilizing strong chains and closed bail loops.",
          "Bracelets: Tennis line bracelets and bangles requiring flexible connections and secondary safety clasps.",
          "Rings: Solitaires and cocktail settings designed with bands thick enough to withstand impact."
        ],
        itemsParts: [
          [{ text: "Earrings: ", bold: true }, { text: "Studs, drops, and hoops with secure post and backing mounts." }],
          [{ text: "Necklaces & Pendants: ", bold: true }, { text: "Designs utilizing strong chains and closed bail loops." }],
          [{ text: "Bracelets: ", bold: true }, { text: "Tennis line bracelets and bangles requiring flexible connections and secondary safety clasps." }],
          [{ text: "Rings: ", bold: true }, { text: "Solitaires and cocktail settings designed with bands thick enough to withstand impact." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (4).png",
        alt: "Matching lab-grown diamond line bracelets and anniversary rings",
        title: "Anniversary Rings and Tennis Bracelets",
        caption: "Careful diamond matching in colour, cut, and size ensures a cohesive, high-quality finished design."
      }
    ]
  },
  {
    heading: "Value, Rarity, and Sustainability Considerations",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Value expectations: ", bold: true },
          { text: "Lab-grown diamond prices can change as supply and growth technology develop. They should not be purchased with the expectation of strong resale value or capital appreciation." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Sustainability: ", bold: true },
          { text: "The origin label does not automatically prove sustainability. Environmental performance depends on verifiable energy sourcing, manufacturing, and transport practices." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Longevity: ", bold: true },
          { text: "While the diamond lasts indefinitely, the setting metal will experience normal wear over decades, requiring periodic prong tightening, rhodium replating, or clasp repairs." }
        ]
      },
      {
        type: "table",
        headers: ["Before Ordering Fine Jewellery"],
        rows: [
          ["Every diamond is clearly disclosed as laboratory-grown."],
          ["Precious-metal composition (e.g. solid 18k gold or platinum) is explicitly stated."],
          ["A legal hallmark is present or described for verification."],
          ["Individual carat weight and dimensions are fully specified."],
          ["Center stones over 0.50ct include independent grading reports."],
          ["The seller details workmanship warranties and return guidelines."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        parts: [
          { text: "Lab-grown diamonds are entirely suitable for fine jewellery. Their origin does not reduce their fundamental hardness, brilliance, or capability to be mounted securely. However, diamond selection, metal quality, craftsmanship, and aftercare determine whether the finished design meets a truly premium standard.\n\nExplore Aurelia Royale's signature collections for certified lab-grown diamond jewellery crafted for lifetime beauty." }
        ]
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Are lab-grown diamonds considered fine jewellery?",
            answer: "Lab-grown diamonds can be used in fine jewellery because they are genuine diamonds. The finished piece must also use appropriate metals, secure construction and accurate disclosure."
          },
          {
            question: "Are lab-grown diamonds durable enough for jewellery?",
            answer: "Yes. Lab-grown diamonds have the same fundamental hardness as mined diamonds, although any diamond can chip after a sufficiently strong impact."
          },
          {
            question: "Can lab-grown diamonds be set in real gold?",
            answer: "Yes. Lab-grown diamonds can be set in yellow, white or rose gold, platinum and other suitable jewellery metals."
          },
          {
            question: "Do lab-grown diamonds look luxurious?",
            answer: "A well-cut, transparent lab-grown diamond can display excellent brightness, fire and scintillation. The finished appearance also depends on design, metal quality and craftsmanship."
          },
          {
            question: "Is lab-grown diamond jewellery fashion jewellery?",
            answer: "Not automatically. Lab-grown diamonds can be used in fine, demi-fine or fashion jewellery. The classification depends on the entire piece."
          },
          {
            question: "Do lab-grown diamonds need certification?",
            answer: "Not every small diamond needs an individual report. A significant centre diamond is more likely to benefit from independent grading or quality-assessment documentation."
          },
          {
            question: "Does a diamond certificate cover the whole jewellery piece?",
            answer: "Usually not. A loose-diamond report evaluates the submitted diamond and does not necessarily verify the metal, setting, accent stones or workmanship."
          },
          {
            question: "Can lab-grown diamond jewellery become an heirloom?",
            answer: "It can be passed between generations when thoughtfully designed, properly constructed and maintained."
          },
          {
            question: "Can lab-grown diamond jewellery be repaired?",
            answer: "Most properly constructed pieces can be professionally cleaned, resized or repaired, depending on their design, metal and setting."
          },
          {
            question: "Is all lab-grown diamond jewellery sustainable?",
            answer: "No single origin label proves sustainability. Environmental impact depends on energy, manufacturing, metal sourcing, cutting, packaging and transport."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Certified Quality at Aurelia Royale",
        subtitle: "Beautifully crafted settings in gold and platinum. Explore our fine laboratory-grown diamond jewellery.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog13Page() {
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
            Are Lab-Grown Diamonds Suitable for Fine Jewellery?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Quality Guide • Published July 15, 2026
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

