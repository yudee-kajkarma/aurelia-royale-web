import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";
import Link from "next/link";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Suitable for Regular Wear?",
  description: "Can you wear lab-grown diamonds regularly? Learn about durability, secure settings, daily activities, cleaning and protecting diamond jewellery from damage.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/",
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
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-regular-wear.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-regular-wear.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond jewellery suitable for regular wear"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/",
      "name": "Are Lab-Grown Diamonds Suitable for Regular Wear?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#article",
      "headline": "Are Lab-Grown Diamonds Suitable for Regular Wear?",
      "description": "Can you wear lab-grown diamonds regularly? Learn about durability, secure settings, daily activities, cleaning and protecting diamond jewellery from damage.",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#primaryimage"
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
        "are lab-grown diamonds suitable for regular wear",
        "can you wear lab-grown diamonds every day",
        "lab-grown diamonds for everyday wear",
        "are lab-grown diamonds durable",
        "everyday lab-grown diamond jewellery"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#breadcrumb",
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
          "name": "Are Lab-Grown Diamonds Suitable for Regular Wear?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/"
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
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (1).jpg",
        alt: "Lab-grown diamond jewellery suitable for regular wear",
        title: "Are Lab-Grown Diamonds Suitable for Regular Wear?",
        caption: "Laboratory-grown diamonds are highly resilient, making them well-suited for everyday styles when properly cared for.",
        priority: true,
      },
      {
        type: "paragraph",
        text: "Lab-grown diamond jewellery does not have to remain inside a jewellery box until a special occasion. A properly made piece can be worn regularly, whether it is a pair of diamond earrings, a necklace, a bracelet or a favourite ring."
      },
      {
        type: "paragraph",
        text: "Lab-grown diamonds are genuine diamonds with the hardness and stability associated with diamond. They do not become less durable because they were grown using CVD or HPHT technology."
      },
      {
        type: "paragraph",
        text: "However, \"suitable for regular wear\" does not mean indestructible or appropriate for every activity. The diamond, precious metal, setting, clasp and overall construction experience different forms of wear."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "Yes, lab-grown diamonds are suitable for regular wear. They have essentially the same chemical, physical and optical properties as mined diamonds and rank 10 on the Mohs hardness scale. Nevertheless, any diamond can chip following a hard impact. Settings can loosen, precious metals can scratch and clasps can wear. Remove diamond jewellery before swimming, exercise, gardening, household cleaning and other activities that expose it to impact, chemicals or loss."
      }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Durable?",
    content: [
      {
        type: "paragraph",
        text: "Lab-grown diamonds are made from crystallised carbon. Their laboratory origin does not make them a softer omission of diamond."
      },
      {
        type: "paragraph",
        text: "GIA explains that laboratory-grown diamonds possess essentially the same chemical, physical and optical properties as mined diamonds. The differences associated with their origin generally require professional equipment to detect."
      },
      {
        type: "table",
        headers: ["Property", "What it means", "Why it matters for jewellery"],
        rows: [
          ["Hardness", "Resistance to scratching and abrasion", "Helps polished diamond facets retain their finish"],
          ["Toughness", "Resistance to breaking and chipping", "Determines how the stone responds to impact"],
          ["Stability", "Resistance to heat, chemicals and environmental changes", "Affects how the stone handles normal conditions"]
        ]
      },
      {
        type: "paragraph",
        text: "Diamond ranks at the top of the Mohs hardness scale. This makes it exceptionally resistant to scratches, but hardness is not the same as toughness. A sufficiently strong impact at a vulnerable angle can still chip a lab-grown or mined diamond. GIA specifically notes that any diamond can break when struck hard enough in the right place."
      },
      {
        type: "image",
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (2).jpg",
        alt: "Stunning round brilliant lab-grown diamond ring in clean daylight",
        title: "Everyday Diamond Rings",
        caption: "Diamonds resist scratching from daily activities but remain vulnerable to sharp corner impacts."
      }
    ]
  },
  {
    heading: "Can You Wear Lab-Grown Diamonds Every Day?",
    content: [
      {
        type: "paragraph",
        text: "You can wear well-designed lab-grown diamond jewellery frequently, but \"every day\" should not mean 24 hours a day. Ordinary activities such as office work, dining, walking and social occasions generally present limited risk. Jewellery should be removed when an activity could expose it to hard impacts, sustained pressure, chemicals, chlorine, heavy sweat, or snagging hazards."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Earrings: ", bold: true },
          { text: "Studs and hoops are highly practical, but drop settings should be checked for loose posts or hinge loops. Sleeping in large earrings can bend posts or strain prongs against pillows." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Necklaces: ", bold: true },
          { text: "Pendant chains must be proportionate to stone weight. Remove fine necklaces before exercise or sleep to prevent tangles and breaks." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Bracelets & Rings: ", bold: true },
          { text: "Bracelets and rings experience the most contact with hard surfaces (desks, bag hardware, handles). Lower-profile settings, bezel designs, and substantial prongs are more practical for active wear than highly exposed solitaires." }
        ]
      }
    ]
  },
  {
    heading: "How Setting Style Affects Everyday Durability",
    content: [
      {
        type: "paragraph",
        text: "The diamond may be exceptionally hard, but it depends on the setting to remain secure."
      },
      {
        type: "bullet-list",
        items: [
          "Prong Settings: Open look, but can catch on knitwear or bend. Inspect regularly for gaps, clicks, or uneven heights.",
          "Bezel Settings: Surrounds the girdle in a metal collar, shielding it from impact. Recommended for active lifestyles.",
          "Pavé & Micro-set: Tiny accent prongs require gentle care. Avoid aggressive ultrasonic cleaning or heavy direct impact.",
          "Vulnerable Shapes: Pear, marquise, princess, and heart cuts contain sharp tips that need protective prongs (like V-prongs) to prevent chipping."
        ],
        itemsParts: [
          [{ text: "Prong Settings: ", bold: true }, { text: "Open look, but can catch on knitwear or bend. Inspect regularly for gaps, clicks, or uneven heights." }],
          [{ text: "Bezel Settings: ", bold: true }, { text: "Surrounds the girdle in a metal collar, shielding it from impact. Recommended for active lifestyles." }],
          [{ text: "Pavé & Micro-set: ", bold: true }, { text: "Tiny accent prongs require gentle care. Avoid aggressive ultrasonic cleaning or heavy direct impact." }],
          [{ text: "Vulnerable Shapes: ", bold: true }, { text: "Pear, marquise, princess, and heart cuts contain sharp tips that need protective prongs (like V-prongs) to prevent chipping." }]
        ]
      },

      {
        type: "paragraph",
        parts: [
          { text: "The Metal Matters: ", bold: true },
          { text: "Precious metals like gold, platinum, and silver are softer than diamonds and will develop surface scratches. Rhodium plating on white gold naturally thins with contact, requiring periodic replating. Check whether the piece is solid, vermeil, or plated, as plated surfaces wear off much faster under daily contact." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (3).jpg",
        alt: "Checking gold bezel and prong settings for stability",
        title: "Bezel and Prong Setting Styles",
        caption: "Prongs should be checked regularly for catching, while bezel mounts provide protective metal walls."
      }
    ]
  },
  {
    heading: "When to Remove Diamond Jewellery",
    content: [
      {
        type: "paragraph",
        text: "Adopt a proactive routine: put jewellery on last when dressing (after perfumes and creams) and take it off first before chores or exercise."
      },
      {
        type: "table",
        headers: ["Activity", "Wear or remove?", "Main reason"],
        rows: [
          ["Office work", "Usually suitable", "Low impact, but avoid repeated desk contact"],
          ["Dining or social events", "Usually suitable", "Limited physical risk"],
          ["Walking", "Usually suitable", "Low impact"],
          ["Sleeping", "Preferably remove", "Pressure, snagging and bent components"],
          ["Showering", "Remove", "Soap film, snagging and unnecessary exposure"],
          ["Swimming", "Remove", "Chlorine, loss and cold-water finger shrinkage"],
          ["Gym or weight training", "Remove", "Impact and pressure against metal equipment"],
          ["Contact sport", "Remove", "Injury, impact and stone loss"],
          ["Gardening", "Remove", "Dirt, impact and pressure"],
          ["Household cleaning", "Remove", "Chemicals and abrasion"],
          ["Cooking or baking", "Preferably remove", "Grease, dough and contamination under settings"],
          ["Applying cosmetics", "Put jewellery on afterwards", "Lotion, perfume and hairspray residue"],
          ["Hair styling", "Remove or protect", "Heat, chemicals and snagging"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Showering and Swimming Risks: ", bold: true },
          { text: "Water doesn't damage diamonds, but soaps build up dull films. Swimming pools introduce chlorine, which can pit and discolour gold alloys. Cold seawater can also cause fingers to shrink slightly, leading to rings slipping off unnoticed." }
        ]
      }
    ]
  },
  {
    heading: "Cleaning, Inspections, and Storage",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Clean Regularly: ", bold: true },
          { text: "Use warm soapy water and a soft toothbrush to clean underneath settings where oils collect. Dry completely with a microfibre cloth. Avoid abrasive toothpastes, baking soda, and bleach." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Periodic Inspections: ", bold: true },
          { text: "Check prongs, clasps, and links every few months at home. Many jewellers recommend professional check-ups every six months to verify prong stability and setting structure, especially for rings and tennis bracelets." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Separate Storage: ", bold: true },
          { text: "Diamonds scratch other metals, gemstones, and other diamonds. Store each piece in a separate fabric-lined compartment, padded slot, or pouch when not in use." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (4).jpg",
        alt: "Applying hand lotions away from precious diamond settings",
        title: "Avoiding residues and impact damage",
        caption: "Remove jewellery before chores or workouts to prevent build-ups, scratches, or clasp loss."
      },
      {
        type: "table",
        headers: ["Daily Wear Routine"],
        rows: [
          ["Verify that the diamond does not move in the setting."],
          ["Close clasps and safety latches completely."],
          ["Apply perfume, makeup, and hairsprays before putting jewellery on."],
          ["Remove rings and bracelets before washing up, gardening, or cleaning."],
          ["Store pieces separately in lined compartments to prevent scratches."],
          ["Arrange professional cleaning when the stone loses its sparkle."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        parts: [
          { text: "Lab-grown diamonds are entirely suitable for regular wear. The primary risks are physical impacts on vulnerable tips, metal scratches, and setting wear rather than any limitations of the diamond crystal itself. By choosing secure settings and following safe daily habits, you can enjoy your diamond jewellery for decades.\n\nExplore Aurelia Royale's collections of securely set, high-transparency laboratory-grown diamond rings, earrings, and pendants designed for regular wear." }
        ]
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can lab-grown diamonds be worn every day?",
            answer: "Yes. Lab-grown diamonds are sufficiently durable for frequent wear, although jewellery should be removed for activities involving impact, chemicals, pressure or a high risk of loss."
          },
          {
            question: "Are lab-grown diamonds as durable as mined diamonds?",
            answer: "Lab-grown and mined diamonds have essentially the same fundamental material properties. Both resist scratching exceptionally well, and both can chip after a strong impact."
          },
          {
            question: "Can I shower with lab-grown diamond jewellery?",
            answer: "It is better to remove it. Soap and hair products can build up around the diamond, while wet handling and towel snagging increase the risk of damage or loss."
          },
          {
            question: "Can I swim with a lab-grown diamond ring?",
            answer: "No. Chlorinated water can affect jewellery metals, and cold water can make a ring easier to lose."
          },
          {
            question: "Can I exercise while wearing lab-grown diamonds?",
            answer: "Diamond jewellery should normally be removed before exercise because equipment, impact, pressure and repeated movement can damage the setting or cause loss."
          },
          {
            question: "Will regular wear make a lab-grown diamond cloudy?",
            answer: "Regular wear may allow oil, soap and cosmetics to collect on the surface. This temporary film can reduce brilliance, but the diamond does not naturally become cloudy through ageing."
          },
          {
            question: "Which diamond setting is best for active wear?",
            answer: "A secure, lower-profile bezel or protected prong setting can reduce snagging and protect vulnerable diamond edges."
          },
          {
            question: "How often should regularly worn diamond jewellery be cleaned?",
            answer: "Clean it when visible residue begins to reduce its brilliance. Frequently worn pieces may require gentle home cleaning regularly."
          },
          {
            question: "How often should the setting be professionally inspected?",
            answer: "Many jewellers recommend inspection approximately every six months for frequently worn pieces, or sooner after an impact or visible change."
          },
          {
            question: "Can lab-grown diamonds scratch other jewellery?",
            answer: "Yes. Diamond can scratch precious metals, gemstones and other diamonds, so jewellery pieces should be stored separately."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Secure Craftsmanship at Aurelia Royale",
        subtitle: "Settings designed to maximize diamond security without compromising optical brilliance. Explore our regular-wear collections.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog14Page() {
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
            Are Lab-Grown Diamonds Suitable for Regular Wear?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Wear Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="are-lab-grown-diamonds-suitable-for-regular-wear" />
      <NewsletterSection />
    </main>
  );
}
