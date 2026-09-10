import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Colour Grades Explained",
  description: "Understand lab-grown diamond colour grades from D to Z, what buyers can actually see, and how metal, shape, size and lighting affect appearance.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/",
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-colour-grades-explained.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-colour-grades-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond colour grades explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/",
      "name": "Lab-Grown Diamond Colour Grades Explained",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#article",
      "headline": "Lab-Grown Diamond Colour Grades Explained",
      "description": "Understand lab-grown diamond colour grades from D to Z, what buyers can actually see, and how metal, shape, size and lighting affect appearance.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond colour grades",
        "diamond colour grades explained",
        "lab-grown diamond colour scale",
        "best colour for lab-grown diamond",
        "D vs E vs F diamond colour",
        "G vs H diamond colour"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#breadcrumb",
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
          "name": "Lab-Grown Diamond Colour Grades Explained",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded for colour in the same way as natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an individual D–Z grade is assigned, the same colour scale and grading principles apply. Report formats and current services vary by laboratory, so buyers should read the specific report."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best colour for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single best grade. The right choice depends on the desired appearance, cut, shape, size, metal, setting and the buyer’s preferences."
          }
        },
        {
          "@type": "Question",
          "name": "Is G colour good for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "G is at the upper end of the near-colourless category and often appears white face-up, especially with good cutting. Its appearance should still be checked in the intended shape, size and setting."
          }
        },
        {
          "@type": "Question",
          "name": "Can you see the difference between D and F colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The difference is usually subtle for an untrained viewer and is most readily assessed with loose stones placed side by side under controlled lighting."
          }
        },
        {
          "@type": "Question",
          "name": "Does a higher colour grade sparkle more?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Colour describes body colour, while cut quality and lighting strongly influence brightness, fire and scintillation."
          }
        },
        {
          "@type": "Question",
          "name": "Does yellow gold make a diamond look yellow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yellow metal can reflect warmth into a diamond, although the result depends on the design and prong colour. It can also make a warmer diamond look visually harmonious."
          }
        },
        {
          "@type": "Question",
          "name": "Which diamond shapes show more colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Colour perception varies by stone. Step-cut shapes and some elongated shapes may make warmth easier to notice than certain brilliant-cut designs, so the actual diamond should be evaluated."
          }
        },
        {
          "@type": "Question",
          "name": "Do larger diamonds show more colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Colour may be easier to observe across a larger visible area, so buyers choosing larger centre stones may compare grades more carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Is fluorescence the same as colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Colour grades describe body colour under controlled conditions. Fluorescence describes a reaction to ultraviolet radiation and is reported separately."
          }
        },
        {
          "@type": "Question",
          "name": "Are fancy-coloured lab-grown diamonds graded D to Z?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Distinct fancy colours are evaluated using descriptions that consider hue, tone, saturation and distribution rather than being treated as simply lower D–Z grades."
          }
        },
        {
          "@type": "Question",
          "name": "Can jewellery be colour graded after the diamond is set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be assessed if the setting permits, but metal and mounting can limit examination. A laboratory may give a range or qualified result rather than the precision possible for a loose diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Can CVD and HPHT diamonds have the same colour grade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CVD and HPHT describe growth processes, not predetermined colour levels. Diamonds produced by either method can receive a range of colour grades."
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
        src: "/images/blog/lab-grown-diamond-colour-grades-explained/28 (1).jpg",
        alt: "Lab-grown diamond colour grades explained",
        title: "Diamond Colour Grades",
        caption: "Laboratory colour assessments compare loose diamonds face-down against calibrated master stones.",
        priority: true,
      },
      {
        type: "paragraph",
        parts: [
          { text: "Colour is one of the " },
          { text: "4Cs used to describe diamond quality", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: ". In a colourless or near-colourless lab-grown diamond, the grade describes the absence or presence of a yellow, brown or grey body colour under controlled grading conditions. It does not describe coloured flashes of light, sparkle or fire." }
        ]
      },
      {
        type: "paragraph",
        text: "Lab-grown and natural diamonds use the same basic D–Z colour scale when a laboratory assigns an individual letter grade. D represents the least observable body colour on that scale, while colour becomes progressively more apparent towards Z. However, the difference between neighbouring grades is subtle, and the highest letter grade is not automatically the best choice for every piece of jewellery."
      },
      {
        type: "paragraph",
        text: "The way a diamond appears once worn also depends on its cut, shape, size, setting and surrounding metal. That is why a useful buying decision considers both the laboratory information and the complete jewel."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "For diamonds in the normal colour range, the scale runs from D to Z: D–F (colourless), G–J (near-colourless), K–M (faint colour), N–R (very light colour), S–Z (light colour). A higher colour grade means less visible body colour—not more sparkle. Cut quality has a major influence on brightness and light return, so colour should never be assessed in isolation."
      },
      {
        type: "table",
        headers: ["Grade range", "Laboratory category", "What a buyer may notice"],
        rows: [
          ["D–F", "Colourless", "Very little body colour. Differences between adjacent grades are usually subtle and are easiest to identify in controlled comparison."],
          ["G–J", "Near-colourless", "G and H often appear white face-up. I and J may show gentle warmth, particularly in larger stones, certain shapes or white-metal settings."],
          ["K–M", "Faint colour", "Warmth is more readily noticeable and may be chosen deliberately for a softer appearance or to complement yellow or rose-toned metal."],
          ["N–R", "Very light colour", "A distinct tint is usually apparent, although its appearance still changes with the setting and lighting."],
          ["S–Z", "Light colour", "Yellow, brown or grey body colour is clearly present, but the diamond remains within the normal colour scale."]
        ]
      }
    ]
  },
  {
    heading: "1. How is a Lab-Grown Diamond’s Colour Graded?",
    content: [
      {
        type: "paragraph",
        text: "For a loose diamond receiving a D–Z grade, trained graders examine it in a standardised viewing environment and compare it with calibrated master stones. The diamond is normally positioned face-down and viewed through its side. This reduces the visual influence of its shape and face-up light performance, helping the grader focus on body colour."
      },
      {
        type: "paragraph",
        text: "Not every laboratory report currently presents lab-grown diamond colour in the same way. GIA’s current service for eligible colourless-to-near-colourless loose laboratory-grown diamonds classifies overall quality as Premium or Standard, rather than always presenting the traditional individual colour and clarity grades. IGI reports commonly provide a letter colour grade for eligible stones."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Our guides explain " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " and " },
          { text: "what an IGI certificate means", href: "/blog/igi-certificate-for-lab-grown-diamond/" },
          { text: "." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-colour-grades-explained/28 (2).jpg",
        alt: "Inspecting loose diamond side profile under grading lamp",
        title: "Loose Diamond Grading Environment",
        caption: "Loose diamonds are viewed from the side under daylight-equivalent lighting to isolate body colour."
      }
    ]
  },
  {
    heading: "2. Are D-Colour Lab-Grown Diamonds the Best?",
    content: [
      {
        type: "paragraph",
        text: "D is the highest grade on the normal colour scale, but \"best\" depends on what the wearer values. A buyer who wants the most colourless specification may prefer D–F. Another may see little practical difference between an F and a G once the diamond is set and choose to place more of the budget into cut, size or craftsmanship."
      },
      {
        type: "bullet-list",
        items: [
          "D vs E vs F: All belong to the colourless group. Differences are highly subtle and require direct side-by-side loose comparison to distinguish.",
          "G vs H colour: Sitting at the upper near-colourless tier, they look bright white face-up and represent a popular balance of value and appearance.",
          "I vs J colour: Display a soft, warm tone that harmonises beautifully with yellow or rose gold setting mounts, avoiding white metal contrasts."
        ],
        itemsParts: [
          [{ text: "D vs E vs F: ", bold: true }, { text: "All belong to the colourless group. Differences are highly subtle and require direct side-by-side loose comparison to distinguish." }],
          [{ text: "G vs H colour: ", bold: true }, { text: "Sitting at the upper near-colourless tier, they look bright white face-up and represent a popular balance of value and appearance." }],
          [{ text: "I vs J colour: ", bold: true }, { text: "Display a soft, warm tone that harmonises beautifully with yellow or rose gold setting mounts, avoiding white metal contrasts." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-colour-grades-explained/28 (3).jpg",
        alt: "Comparing colourless brilliant diamonds side by side",
        title: "Colourless Diamond Comparison",
        caption: "Colourless D, E, and F diamonds appear bright white face-up, with differences indistinguishable once set."
      }
    ]
  },
  {
    heading: "3. What Affects Apparent Colour in Jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Perceived colour in real-world wear conditions is shaped by multiple physical variables:"
      },
      {
        type: "bullet-list",
        items: [
          "Diamond cut and light return: Excellent cutting produces bright reflections that help mask slight body color.",
          "Diamond shape: Step cuts (emerald, Asscher) hold less light reflection, revealing color more than brilliant cuts. Elongated ovals can concentrate color tips.",
          "Carat weight and size: Body color is easier to see across larger stones than in small accents.",
          "Metal colour: White gold and platinum emphasize warmth, whereas yellow and rose golds harmonize with warmer grades.",
          "Side stone matching: Harmony across rings is critical. Center stones can look warmer if paired with much whiter side diamonds."
        ],
        itemsParts: [
          [{ text: "Diamond cut and light return: ", bold: true }, { text: "Excellent cutting produces bright reflections that help mask slight body color." }],
          [{ text: "Diamond shape: ", bold: true }, { text: "Step cuts (emerald, Asscher) hold less light reflection, revealing color more than brilliant cuts. Elongated ovals can concentrate color tips." }],
          [{ text: "Carat weight and size: ", bold: true }, { text: "Body color is easier to see across larger stones than in small accents." }],
          [{ text: "Metal colour: ", bold: true }, { text: "White gold and platinum emphasize warmth, whereas yellow and rose golds harmonize with warmer grades." }],
          [{ text: "Side stone matching: ", bold: true }, { text: "Harmony across rings is critical. Center stones can look warmer if paired with much whiter side diamonds." }]
        ]
      },
      {
        type: "image",
        src: "/images/blog/lab-grown-diamond-colour-grades-explained/28 (4).jpg",
        alt: "Warm near-colourless diamond in yellow gold shank setting",
        title: "Warm Diamonds in Yellow Gold Settings",
        caption: "Yellow or rose gold settings complement warmer, near-colourless diamonds beautifully."
      }
    ]
  },
  {
    heading: "4. Fluorescence, CVD/HPHT, and Fancy Colours",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Fluorescence: ", bold: true },
          { text: "Fluorescence describes a diamond’s reaction to UV radiation. It is noted separately on reports and does not automatically reduce beauty or quality." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "CVD vs HPHT: ", bold: true },
          { text: "Growth method does not determine colour. Diamonds grown by either CVD or HPHT can achieve the full D-to-Z color scale. Review " },
          { text: "CVD vs HPHT comparison", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" },
          { text: " for details." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Fancy Colours: ", bold: true },
          { text: "Blue, pink, or yellow lab diamonds use a separate scale evaluating hue, tone, and saturation rather than colourlessness." }
        ]
      }
    ]
  },
  {
    heading: "How to Choose and Verify Colour",
    content: [
      {
        type: "table",
        headers: ["Step", "Action Plan"],
        rows: [
          ["1. Desired appearance", "Decide if you want icy-white reflection, soft warmth, or fancy colour tints."],
          ["2. Setting metal selection", "Select setting metal (white gold, platinum, rose, or yellow gold) first."],
          ["3. Shape and dimensions", "Inspect step cuts and elongated shapes more closely, since they display colour tints more easily."],
          ["4. Prioritise cut quality", "Do not compromise cut proportions just to pay for an invisible paper color grade."],
          ["5. Verify side-stone harmony", "Ensure side accents or halo borders are matched to within one colour group of the center stone."]
        ]
      },
      {
        type: "table",
        headers: ["Colour Grade Verification Checklist"],
        rows: [
          ["Laboratory-grown origin is explicitly disclosed in the listing copy."],
          ["Grading document is issued by a reputable laboratory like IGI or GIA."],
          ["Individual center-stone grades are separate from accent ranges."],
          ["Cut performance remains high to ensure optimal light reflection."],
          ["The tone matches settings (white gold vs yellow/rose gold mounts)."],
          ["Any post-growth treatment comments are reviewed on the certificate."],
          ["Photographs and videos are recorded under neutral lighting."]
        ]
      },
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        text: "Lab-grown diamond colour grades provide a consistent way to describe body colour, but the grade is only one part of the finished jewel. D–F diamonds carry a colourless specification, G–J are near-colourless, and warmer colour becomes progressively more visible further down the scale. Aurelia Royale lists complete diamond parameters, matching premium center-stone grades, gold hallmarks, and detailed accent specifications."
      },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Are lab-grown diamonds graded for colour in the same way as natural diamonds?",
            answer: "When an individual D–Z grade is assigned, the same colour scale and grading principles apply. Report formats and current services vary by laboratory, so buyers should read the specific report."
          },
          {
            question: "What is the best colour for a lab-grown diamond?",
            answer: "There is no single best grade. The right choice depends on the desired appearance, cut, shape, size, metal, setting and the buyer’s preferences."
          },
          {
            question: "Is G colour good for a lab-grown diamond?",
            answer: "G is at the upper end of the near-colourless category and often appears white face-up, especially with good cutting. Its appearance should still be checked in the intended shape, size and setting."
          },
          {
            question: "Can you see the difference between D and F colour?",
            answer: "The difference is usually subtle for an untrained viewer and is most readily assessed with loose stones placed side by side under controlled lighting."
          },
          {
            question: "Does a higher colour grade sparkle more?",
            answer: "No. Colour describes body colour, while cut quality and lighting strongly influence brightness, fire and scintillation."
          },
          {
            question: "Does yellow gold make a diamond look yellow?",
            answer: "Yellow metal can reflect warmth into a diamond, although the result depends on the design and prong colour. It can also make a warmer diamond look visually harmonious."
          },
          {
            question: "Which diamond shapes show more colour?",
            answer: "Colour perception varies by stone. Step-cut shapes and some elongated shapes may make warmth easier to notice than certain brilliant-cut designs, so the actual diamond should be evaluated."
          },
          {
            question: "Do larger diamonds show more colour?",
            answer: "Colour may be easier to observe across a larger visible area, so buyers choosing larger centre stones may compare grades more carefully."
          },
          {
            question: "Is fluorescence the same as colour?",
            answer: "No. Colour grades describe body colour under controlled conditions. Fluorescence describes a reaction to ultraviolet radiation and is reported separately."
          },
          {
            question: "Are fancy-coloured lab-grown diamonds graded D to Z?",
            answer: "Distinct fancy colours are evaluated using descriptions that consider hue, tone, saturation and distribution rather than being treated as simply lower D–Z grades."
          },
          {
            question: "Can jewellery be colour graded after the diamond is set?",
            answer: "It may be assessed if the setting permits, but metal and mounting can limit examination. A laboratory may give a range or qualified result rather than the precision possible for a loose diamond."
          },
          {
            question: "Can CVD and HPHT diamonds have the same colour grade?",
            answer: "Yes. CVD and HPHT describe growth processes, not predetermined colour levels. Diamonds produced by either method can receive a range of colour grades."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Ideal Diamond Tone",
        subtitle: "Harmonious gold mounts, matched side accents, and verified laboratory D-to-Z color gradings. Shop now.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog28Page() {
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
            Diamond Colour Grades Explained
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
      <RelatedArticles currentSlug="lab-grown-diamond-colour-grades-explained" />
      <NewsletterSection />
    </main>
  );
}
