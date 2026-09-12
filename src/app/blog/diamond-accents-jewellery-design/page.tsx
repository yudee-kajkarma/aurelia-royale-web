import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How Diamond Accents Affect Jewellery Design",
  description: "See how halos, side accents, pavé and diamond lines change brightness, contrast, outline, movement and the apparent scale of jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-accents-jewellery-design/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/diamond-accents-jewellery-design/#article",
      "headline": "How Diamond Accents Affect a Jewellery Design",
      "description": "See how halos, side accents, pavé and diamond lines change brightness, contrast, outline, movement and the apparent scale of jewellery.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/diamond-accents-jewellery-design/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/how-diamond-accents-affect-jewellery-design.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/diamond-accents-jewellery-design/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How Diamond Accents Affect a Jewellery Design", "item": "https://www.aureliaroyale.com/blog/diamond-accents-jewellery-design/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-accents-jewellery-design/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Do diamond accents make a centre stone look bigger?", "acceptedAnswer": { "@type": "Answer", "text": "They can make the complete outline appear broader or brighter, but they do not change the centre stone's actual dimensions or weight." } },
        { "@type": "Question", "name": "Does a halo always increase sparkle?", "acceptedAnswer": { "@type": "Answer", "text": "A halo adds diamond-set area, but the result depends on cut, lighting, setting, cleanliness, spacing and design." } },
        { "@type": "Question", "name": "What is the difference between a halo and side accents?", "acceptedAnswer": { "@type": "Answer", "text": "A halo surrounds the centre, while side accents extend away from it and direct the eye along the setting." } },
        { "@type": "Question", "name": "Is more accent carat weight always better?", "acceptedAnswer": { "@type": "Answer", "text": "No. Distribution, count, cut, matching, setting and proportion determine the design result." } },
        { "@type": "Question", "name": "How do accents affect a coloured centre stone?", "acceptedAnswer": { "@type": "Answer", "text": "They can create a bright contrasting frame, strengthen its outline and separate its colour from the metal." } },
        { "@type": "Question", "name": "Do pavé diamonds hide the metal?", "acceptedAnswer": { "@type": "Answer", "text": "Dense pavé can reduce visible metal from the face-up view, although metal remains essential to the structure." } },
        { "@type": "Question", "name": "Which accent layout creates the most movement?", "acceptedAnswer": { "@type": "Answer", "text": "Articulated lines and drops generally produce more physical movement than fixed halos, depending on construction." } },
        { "@type": "Question", "name": "Can sparse diamond accents look luxurious?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Deliberate spacing, precise setting and effective negative space can create a refined design." } },
        { "@type": "Question", "name": "Why do equal accent weights look different?", "acceptedAnswer": { "@type": "Answer", "text": "The same total weight may be divided across different numbers, sizes, shapes, positions and settings." } },
        { "@type": "Question", "name": "Does metal colour affect diamond accents?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. White-coloured metal may visually merge with them, while yellow or rose-coloured metal creates a warmer boundary." } },
        { "@type": "Question", "name": "What photographs should I check online?", "acceptedAnswer": { "@type": "Answer", "text": "Use front, side, back, macro and on-body views plus video in controlled and everyday-style lighting." } },
        { "@type": "Question", "name": "How should I choose an accent design?", "acceptedAnswer": { "@type": "Answer", "text": "Choose the focal hierarchy, outline, movement, metal visibility and contrast you prefer, then verify specifications." } }
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
        src: "/images/blog/diamond-accents-jewellery-design/1.jpg",
        alt: "Visual effects of different diamond accent layouts",
        title: "Accent Layout Choices",
        caption: "Accent placement, scale, spacing, and setting affect visual outcomes as much as total weights.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Diamond accents are small supporting stones, but their visual influence can be substantial. A fine halo can sharpen a coloured centre stone’s outline. A line of diamonds can draw the eye vertically. Sparse accents can preserve visible metal and negative space, while dense pavé can create a continuous surface of light."
      },
      {
        type: "paragraph",
        text: "The important point is that accent placement, scale, spacing and setting affect the result as much as total carat weight. More diamonds do not automatically create the more successful design."
      }
    ]
  },
  {
    heading: "Seven design effects at a glance",
    content: [
      {
        type: "table",
        headers: ["Accent choice", "Main visual effect", "Important limitation"],
        rows: [
          ["Fine halo", "Brighter outer frame", "Does not enlarge the centre stone itself"],
          ["Double halo", "Larger, denser outline", "Can reduce colour or metal visibility"],
          ["Side accents", "Width and directional flow", "Balance depends on proportion"],
          ["Pavé", "Continuous surface shimmer", "Small settings need inspection and cleaning"],
          ["Diamond line", "Length and movement", "Flexibility and spacing affect rhythm"],
          ["Scattered accents", "Controlled points of light", "Uneven placement can look accidental"],
          ["Sparse border", "Contrast with negative space", "Lower density does not mean lower design quality"]
        ]
      }
    ]
  },
  {
    heading: "1. Accents introduce a second light language",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Examine brightness (reflected light), fire (spectral flashes), and scintillation (facet contrast) metrics in motion. Consult " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "2. A halo changes the complete outline",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-accents-jewellery-design/2.jpg",
        alt: "Contrasting round halo framing an oval center ruby",
        title: "Halo Shape Options",
        caption: "Comparing shape combinations shows how halos alter overall outlines without changing center sizes."
      },
      {
        type: "paragraph",
        text: "Analyze how outer boundaries frame center gems. Stated specifications must list separate face diameters for both center stones and outer halos."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Matching versus contrasting halos: ", bold: true },
          { text: "A halo can follow center outlines directly or contrast them geometrically." }
        ]
      }
    ]
  },
  {
    heading: "3. Side accents direct the eye",
    content: [
      {
        type: "paragraph",
        text: "Graduate stone scales to direct focus cleanly toward the center mount. Examine side, front, and on-body perspectives to verify symmetry balance."
      }
    ]
  },
  {
    heading: "4. Pavé changes the metal-to-diamond balance",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-accents-jewellery-design/3.jpg",
        alt: "Fine details of micro pavé set on gold shanks",
        title: "Pavé Setting Details",
        caption: "Inspecting prongs and bead alignments under macro views confirms setting quality."
      },
      {
        type: "paragraph",
        text: "Compare dense pave settings with metal-led designs. Small setting locks require clean, even spacing without snag borders."
      }
    ]
  },
  {
    heading: "5. Accents can strengthen coloured-stone contrast",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Confirm contrast thresholds across gold and platinum shanks. For metal check details, consult " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "6. Accents alter apparent scale—not actual centre size",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-accents-jewellery-design/4.jpg",
        alt: "A scale guide measuring center dimensions vs complete frame diameters",
        title: "Scale Measurement Rules",
        caption: "Differentiating center sizes from total cluster footprints prevents sizing errors."
      },
      {
        type: "table",
        headers: ["Measurement", "What it tells you"],
        rows: [
          ["Centre dimensions", "Actual face-up length and width of the focal stone"],
          ["Accent total carat weight", "Combined weight of the supporting diamonds"],
          ["Complete design dimensions", "Overall face-up outline including setting and accents"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Learn more about visible dimensions at " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "7. Lines and drops create rhythm and movement",
    content: [
      {
        type: "paragraph",
        text: "Verify link configurations and drop alignments in motion. Articulated chains must rotate smoothly without catching hair."
      }
    ]
  },
  {
    heading: "8. Negative space is part of the design",
    content: [
      {
        type: "paragraph",
        text: "Evaluate open shanks and unset metal lines. Negative spaces frame center gemstones to emphasize silhouette geometry."
      }
    ]
  },
  {
    heading: "9. Accent shape changes the character",
    content: [
      {
        type: "paragraph",
        text: "Round cuts distribute fine flickers; baguette cuts frame geometric lines. Mixed arrangements require precise matching."
      }
    ]
  },
  {
    heading: "10. Metal colour changes the boundary",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Alloy tones affect light boundaries. White golds blend with colorless stones, rose golds provide warm frames. See " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "11. Total carat weight cannot predict the design result",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Verify stone distribution patterns separately from the headline totals. Consult details at " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "12. Setting quality affects visual continuity",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Examine prong alignments and setting level depths. Mounting reports are detailed at " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Choosing an accent layout by product category",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Earrings: ", bold: true }, { text: "Verify drop lengths and pair matching symmetry." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Necklaces and pendants: ", bold: true }, { text: "Verify fixed bail hooks vs sliding pendant loops." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Bracelets: ", bold: true }, { text: "Check link draping profiles and clasp matches." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Rings: ", bold: true }, { text: "Check band compatibility heights and profile depths." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Jewellery sets: ", bold: true }, { text: "Ensure matching accent spacings create visual flow across pieces." }]
      }
    ]
  },
  {
    heading: "Online comparison checklist",
    content: [
      {
        type: "numbered-list",
        items: [
          "The focal point at normal viewing distance.",
          "Centre dimensions and complete dimensions separately.",
          "Accent placement, count, shapes and total weight.",
          "Brightness in video under more than one light.",
          "Colour contrast with the centre stone and metal.",
          "Amount of visible metal and negative space.",
          "Symmetry, spacing and setting height.",
          "Front, side, back and on-body views.",
          "Diamond origin and stated quality range.",
          "Care, inspection, repair and warranty terms."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale details accent layouts with complete specification tables. Explore options at " },
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
            text: "Diamond accents can brighten an outline, frame colour, create movement or alter apparent scale.\n\n"
          },
          {
            text: "Their placement matters as much as their total weight. Compare focus hierarchies, outline dimensions, setting designs, metal exposures, and documentation scopes before ordering."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Do diamond accents make a centre stone look bigger?",
            answer: "They can make the complete outline appear broader or brighter, but they do not change the centre stone's actual dimensions or weight."
          },
          {
            question: "Does a halo always increase sparkle?",
            answer: "A halo adds diamond-set area, but the result depends on cut, lighting, setting, cleanliness, spacing and design."
          },
          {
            question: "What is the difference between a halo and side accents?",
            answer: "A halo surrounds the centre, while side accents extend away from it and direct the eye along the setting."
          },
          {
            question: "Is more accent carat weight always better?",
            answer: "No. Distribution, count, cut, matching, setting and proportion determine the design result."
          },
          {
            question: "How do accents affect a coloured centre stone?",
            answer: "They can create a bright contrasting frame, strengthen its outline and separate its colour from the metal."
          },
          {
            question: "Do pavé diamonds hide the metal?",
            answer: "Dense pavé can reduce visible metal from the face-up view, although metal remains essential to the structure."
          },
          {
            question: "Which accent layout creates the most movement?",
            answer: "Articulated lines and drops generally produce more physical movement than fixed halos, depending on construction."
          },
          {
            question: "Can sparse diamond accents look luxurious?",
            answer: "Yes. Deliberate spacing, precise setting and effective negative space can create a refined design."
          },
          {
            question: "Why do two equal accent weights look different?",
            answer: "The same total weight may be divided across different numbers, sizes, shapes, positions and settings."
          },
          {
            question: "Does metal colour affect diamond accents?",
            answer: "Yes. White-coloured metal may visually merge with them, while yellow or rose-coloured metal creates a warmer boundary."
          },
          {
            question: "What photographs should I check online?",
            answer: "Use front, side, back, macro and on-body views plus video in controlled and everyday-style lighting."
          },
          {
            question: "How should I choose an accent design?",
            answer: "Choose the focal hierarchy, outline, movement, metal visibility and contrast you prefer, then verify specifications."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Discover Accent Designs",
        subtitle: "Aurelia Royale arranges lab-grown diamond halos, pavé fields, and articulated lines to enhance every design. Explore our collections.",
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
            Coloured Stones and Diamonds
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How Diamond Accents Affect a Jewellery Design
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="diamond-accents-jewellery-design" />
      <NewsletterSection />
    </main>
  );
}

