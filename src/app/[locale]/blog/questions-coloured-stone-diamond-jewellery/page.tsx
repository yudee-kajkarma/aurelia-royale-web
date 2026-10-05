import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "25 Questions Before Buying Gemstone Jewellery",
  description: "Ask these 25 questions about gemstone identity, treatments, diamonds, dimensions, reports, images, care, delivery, returns and warranty.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/questions-coloured-stone-diamond-jewellery/",
  },
};

// 2. The exact JSON-LD Schema (Fixed syntax)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/questions-coloured-stone-diamond-jewellery/#article",
      "headline": "Questions to Ask Before Buying Coloured-Stone Diamond Jewellery",
      "description": "Ask these 25 questions about gemstone identity, treatments, diamonds, dimensions, reports, images, care, delivery, returns and warranty.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/questions-coloured-stone-diamond-jewellery/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/questions-before-buying-coloured-stone-diamond-jewellery.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/questions-coloured-stone-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Questions to Ask Before Buying Coloured-Stone Diamond Jewellery", "item": "https://www.aureliaroyale.com/blog/questions-coloured-stone-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/questions-coloured-stone-diamond-jewellery/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the first question to ask about a coloured stone?", "acceptedAnswer": { "@type": "Answer", "text": "Ask for the exact material identity and whether it is natural, laboratory-created, composite or an imitation." } },
        { "@type": "Question", "name": "Does natural mean the gemstone is untreated?", "acceptedAnswer": { "@type": "Answer", "text": "No. Natural formation and treatment status are separate facts, so ask about both." } },
        { "@type": "Question", "name": "Should a jeweller disclose gemstone treatments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Treatments can affect comparison, durability, cleaning and repair and may not be visually apparent." } },
        { "@type": "Question", "name": "Why should I ask for gemstone dimensions?", "acceptedAnswer": { "@type": "Answer", "text": "Carat measures weight rather than visible size. Millimetre dimensions clarify face-up scale." } },
        { "@type": "Question", "name": "What should I ask about diamond accents?", "acceptedAnswer": { "@type": "Answer", "text": "Ask origin, count, shapes, combined total weight, quality range and report scope." } },
        { "@type": "Question", "name": "Does one certificate cover the entire jewellery piece?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Check whether it covers a loose centre stone, finished item or specific components." } },
        { "@type": "Question", "name": "Can mounted gemstones receive reports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but the setting may restrict observation or measurement, and the report should state limitations." } },
        { "@type": "Question", "name": "Should seller answers be in writing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Save item-specific answers and ask for the essential description to appear on supplied documents." } },
        { "@type": "Question", "name": "What should I ask about product photographs?", "acceptedAnswer": { "@type": "Answer", "text": "Ask whether they show the exact stone and request front, side, back, macro, on-body and movement views." } },
        { "@type": "Question", "name": "What should I ask about made-to-order jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "Confirm production time, variation, approval stages, cancellation point, return exclusions and warranty." } },
        { "@type": "Question", "name": "What is a warning sign in a seller's answer?", "acceptedAnswer": { "@type": "Answer", "text": "Vague language, conflicting documents, unverifiable reports, missing dimensions or refusal to provide facts in writing." } },
        { "@type": "Question", "name": "Do I need to ask all 25 questions?", "acceptedAnswer": { "@type": "Answer", "text": "No. Ask what the page does not answer, but always resolve identity, treatment, size, report scope and terms." } }
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
        src: "/images/blog/questions-coloured-stone-diamond-jewellery/1.jpg",
        alt: "A list of questions for gemstone jewelry buying",
        title: "Buying Questions Guide",
        caption: "Save written replies with order transaction documents to confirm specification levels.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A good question does more than produce a reassuring answer. It reveals whether the seller knows the exact piece, distinguishes evidence from assumption and is willing to put important details in writing."
      },
      {
        type: "paragraph",
        text: "The following 25 questions cover the coloured stone, lab-grown diamond accents, construction, imagery, reports and purchase terms. Ask only those not already answered clearly on the product page—and save the replies with your order."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Before buying, ask for the coloured stone’s exact identity, natural or laboratory-created status, treatments, dimensions and weight; the diamonds’ origin, count, total weight and quality range; the metal, complete dimensions and setting; whether images show the exact item; what any report covers; and the delivered-price, production, return, warranty and care terms. A complete answer should be specific, item-matched and supported by the invoice, laboratory report or written policy—not vague terms such as “genuine”, “premium” or “certified”."
      }
    ]
  },
  {
    heading: "The five-question shortlist",
    content: [
      {
        type: "paragraph",
        text: "If you ask only five questions, use these:"
      },
      {
        type: "numbered-list",
        items: [
          "What is every gemstone, and is each natural, laboratory-created, composite or an imitation?",
          "What treatments are known or detected, and how do they change care?",
          "What are the centre-stone dimensions and weight, and what is the separate diamond accent total?",
          "Does a verifiable report match this exact stone or finished piece, and what does it cover?",
          "What is the final delivered price, return position and warranty for my country and selected configuration?"
        ]
      }
    ]
  },
  {
    heading: "Questions about the coloured stone",
    content: [
      {
        type: "image",
        src: "/images/blog/questions-coloured-stone-diamond-jewellery/2.jpg",
        alt: "Detailing gemstone variety and origin under microscope lighting",
        title: "Gem Identity Verification",
        caption: "Verifying exact species and variety definitions keeps purchase records accurate."
      },
      {
        type: "paragraph",
        parts: [{ text: "1. What is the exact gemstone species or variety? ", bold: true }, { text: "Look for mineral varieties (e.g. sapphire, emerald). Avoid marketing color titles." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "2. Is the stone natural, laboratory-created, composite or an imitation? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Confirm the exact category. For lab-grown details, see " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "3. Has the coloured stone been treated? ", bold: true }, { text: "Identify treat names like heat, filling, coatings, or dyeing rather than a general 'enhanced'." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "4. What does the treatment change about care or repair? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Obtain clean limits before cleaning. See care steps at " },
          { text: "how to care for coloured stones and diamonds", href: "/blog/care-coloured-stones-diamonds/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "5. Are the photographs of the exact stone? ", bold: true }, { text: "Identify unique listing items vs stock design variation allowances." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "6. How is the colour described beyond one word? ", bold: true }, { text: "Verify hue saturation properties under daylight environments." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "7. What are the stone’s millimetre dimensions? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Verify millimetre outlines separately. Consult size charts at " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "8. Is the carat weight measured or estimated? ", bold: true }, { text: "Confirm if weights represent loose scales or mounted math estimates." }]
      }
    ]
  },
  {
    heading: "Questions about the diamond accents",
    content: [
      {
        type: "image",
        src: "/images/blog/questions-coloured-stone-diamond-jewellery/3.jpg",
        alt: "Counting micro diamond accents around a halo ring",
        title: "Accent Allocations",
        caption: "Confirming individual accent shapes and weights clarifies size footprints."
      },
      {
        type: "paragraph",
        parts: [{ text: "9. Are the diamonds laboratory-grown or natural? ", bold: true }, { text: "Verify origin directly. Accents describe design roles, not material." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "10. How many diamond accents are there, and what shapes are they? ", bold: true }, { text: "Record stone counts to check setting density." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "11. What is the combined diamond accent total carat weight? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Separate accent totals from center weights. Review guides at " },
          { text: "total carat weight in diamond jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "12. What colour and clarity range is stated for the accents? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Audit stated group parameters. For grading guides, see " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "13. Are the accents matched in visible appearance? ", bold: true }, { text: "Ask if sorting steps ensure uniform layout colors and sizes." }]
      }
    ]
  },
  {
    heading: "Questions about construction and wear",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "14. What metal and fineness are used? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Check alloy percentages and hallmark stamps. Read metal guides at " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "15. What are the complete jewellery dimensions and weight? ", bold: true }, { text: "Measure band widths, heights, chain drops, and total item weights." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "16. How is the coloured stone protected by the setting? ", bold: true }, { text: "Check if bezels protect gem tips from daily impact paths." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "17. Which parts move, open or detach? ", bold: true }, { text: "Verify bail connections, clasp security links, and hinge points." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "18. Is this piece suitable for how I plan to wear it? ", bold: true }, { text: "Match gem durability to daily wear schedules." }]
      }
    ]
  },
  {
    heading: "Questions about images and documents",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "19. Can I see front, side, back, macro, on-body and movement views? ", bold: true }, { text: "Request multi-angle captures under neutral lighting environments." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "20. What type of report is supplied? ", bold: true }, { text: "Confirm if documents represent loose gems or finished items." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "21. Which exact components does the report cover? ", bold: true }]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Mounted reports are limited by settings. For details, see " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [{ text: "22. Can I verify the report independently? ", bold: true }, { text: "Enter report numbers directly into official laboratory lookups." }]
      }
    ]
  },
  {
    heading: "Questions about the transaction",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "23. What exactly is included in the delivered price? ", bold: true }, { text: "Confirm VAT, duties, shipping fees, and local customs responsibilities." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "24. Is the item ready-made, made-to-order or personalised? ", bold: true }, { text: "Confirm timeline durations and cancellation boundaries before paying." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "25. What are the return, warranty and repair terms for this exact order? ", bold: true }, { text: "Confirm return windows, return postage coverage, and sizing limitations." }]
      }
    ]
  },
  {
    heading: "The answer-quality test",
    content: [
      {
        type: "image",
        src: "/images/blog/questions-coloured-stone-diamond-jewellery/4.jpg",
        alt: "Testing the quality of written seller answers",
        title: "Answer Verification Matrix",
        caption: "Scoring answer specificity confirms seller credibility."
      },
      {
        type: "table",
        headers: ["Test", "Strong answer", "Weak answer"],
        rows: [
          ["Specific", "Names the material, status and treatment", "Uses “genuine” or “premium”"],
          ["Item-matched", "Refers to the exact SKU, stone or configuration", "Gives a collection-wide promise"],
          ["Evidenced", "Links to report, specification or policy", "Says “trust us”"],
          ["Durable", "Appears on invoice or saved written reply", "Exists only in a disappearing chat"]
        ]
      }
    ]
  },
  {
    heading: "Copy-and-send message for the seller",
    content: [
      {
        type: "callout",
        title: "Template query",
        theme: "gold-border",
        parts: [
          {
            text: "Hello, I am considering [product name/SKU]. Please confirm in writing: the exact coloured-stone identity, natural/laboratory-created/composite status, known treatments and care restrictions; centre dimensions and weight; lab-grown diamond count, shapes, total weight and stated quality range; metal and complete dimensions; whether the images show the exact item; the report type, number and scope; and the delivered-price, production, return and warranty terms for delivery to [country]. Please also confirm that these details will appear on the invoice or supplied product documentation."
          }
        ]
      }
    ]
  },
  {
    heading: "Keep a pre-purchase evidence file",
    content: [
      {
        type: "bullet-list",
        items: [
          "the product page and selected options;",
          "original images and video links;",
          "seller answers;",
          "report and official verification result;",
          "delivered-price calculation;",
          "return and warranty policy;",
          "expected production and delivery date; and",
          "order confirmation and invoice."
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
          { text: "Aurelia Royale resolves specification details on product pages directly. Browse collection at " },
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
            text: "Use these 25 questions to turn a jewellery listing into a documented purchase decision.\n\n"
          },
          {
            text: "Ask for clear answers on stones, reports, care, and transaction terms. Keep written evidence records alongside invoice lines to secure return eligibility."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is the first question to ask about a coloured stone?",
            answer: "Ask for the exact material identity and whether it is natural, laboratory-created, composite or an imitation."
          },
          {
            question: "Does natural mean the gemstone is untreated?",
            answer: "No. Natural formation and treatment status are separate facts, so ask about both."
          },
          {
            question: "Should a jeweller disclose gemstone treatments?",
            answer: "Yes. Treatments can affect comparison, durability, cleaning and repair and may not be visually apparent."
          },
          {
            question: "Why should I ask for gemstone dimensions?",
            answer: "Carat measures weight rather than visible size. Millimetre dimensions clarify face-up scale."
          },
          {
            question: "What should I ask about diamond accents?",
            answer: "Ask origin, count, shapes, combined total weight, quality range and report scope."
          },
          {
            question: "Does one certificate cover the entire jewellery piece?",
            answer: "Not necessarily. Check whether it covers a loose centre stone, finished item or specific components."
          },
          {
            question: "Can mounted gemstones receive reports?",
            answer: "Yes, but the setting may restrict observation or measurement, and the report should state limitations."
          },
          {
            question: "Should seller answers be in writing?",
            answer: "Yes. Save item-specific answers and ask for the essential description to appear on supplied documents."
          },
          {
            question: "What should I ask about product photographs?",
            answer: "Ask whether they show the exact stone and request front, side, back, macro, on-body and movement views."
          },
          {
            question: "What should I ask about made-to-order jewellery?",
            answer: "Confirm production time, variation, approval stages, cancellation point, return exclusions and warranty."
          },
          {
            question: "What is a warning sign in a seller's answer?",
            answer: "Vague language, conflicting documents, unverifiable reports, missing dimensions or refusal to provide facts in writing."
          },
          {
            question: "Do I need to ask all 25 questions?",
            answer: "No. Ask what the page does not answer, but always resolve identity, treatment, size, report scope and terms."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Consult Our Experts",
        subtitle: "Aurelia Royale details every design spec and report parameter directly. Contact our support team for documentation.",
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
            Questions to Ask Before Buying Coloured-Stone Diamond Jewellery
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="questions-coloured-stone-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}

