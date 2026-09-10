import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Choose a Lab-Grown Diamond Pendant",
  description: "Learn how to choose a lab-grown diamond pendant by design, size, setting, chain compatibility, diamond quality, metal, certification and price.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/"},
      "headline":"How to Choose a Lab-Grown Diamond Pendant",
      "description":"Learn how to choose a lab-grown diamond pendant by design, size, setting, chain compatibility, diamond quality, metal, certification and price.",
      "image":"https://www.aureliaroyale.com/images/blog/how-to-choose-lab-grown-diamond-pendant.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["how to choose a lab-grown diamond pendant","lab-grown diamond pendant buying guide","diamond pendant size guide"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How to Choose a Lab-Grown Diamond Pendant","item":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/#faq",
      "mainEntity":[
        {"@type":"Question","name":"Are lab-grown diamonds real diamonds?","acceptedAnswer":{"@type":"Answer","text":"Yes. Lab-grown diamonds have the same crystal material as diamonds formed in the Earth, but their laboratory-grown origin must be clearly disclosed."}},
        {"@type":"Question","name":"Is a lab-grown diamond pendant suitable for everyday wear?","acceptedAnswer":{"@type":"Answer","text":"It can be. Suitability depends on the setting, chain strength, bail, clasp, profile and wearer activities."}},
        {"@type":"Question","name":"Does a diamond pendant normally include a chain?","acceptedAnswer":{"@type":"Answer","text":"Not always. Confirm package contents and chain specifications on the product page."}},
        {"@type":"Question","name":"What is the best size for a diamond pendant?","acceptedAnswer":{"@type":"Answer","text":"There is no universal best size. Compare pendant dimensions with your preferred scale, chain position and intended use."}},
        {"@type":"Question","name":"Is carat weight the same as pendant size?","acceptedAnswer":{"@type":"Answer","text":"No. Carat measures diamond weight; visible size depends on dimensions, shape, stone count and setting."}},
        {"@type":"Question","name":"What does total carat weight mean on a pendant?","acceptedAnswer":{"@type":"Answer","text":"It normally means the combined weight of all diamonds included in the stated total. Ask for the centre-and-accent breakdown."}},
        {"@type":"Question","name":"Which diamond shape is best for a pendant?","acceptedAnswer":{"@type":"Answer","text":"The best shape is the one that suits the design and personal preference. Compare outline, cut information, orientation and dimensions."}},
        {"@type":"Question","name":"Should a lab-grown diamond pendant be certified?","acceptedAnswer":{"@type":"Answer","text":"Independent documentation can support identification and quality claims. Check the issuing laboratory and exact report scope."}},
        {"@type":"Question","name":"Can I put a pendant on another chain?","acceptedAnswer":{"@type":"Answer","text":"Only if it is removable and the new chain clasp or end tag fits through the bail while safely supporting the pendant."}},
        {"@type":"Question","name":"How do I choose a chain length for a pendant?","acceptedAnswer":{"@type":"Answer","text":"Use a necklace you already like as a reference, then account for pendant drop and adjustment loops."}},
        {"@type":"Question","name":"Should the chain and pendant be the same metal?","acceptedAnswer":{"@type":"Answer","text":"They do not have to be, but differences can affect colour, wear and hallmarking. Specify each component accurately."}},
        {"@type":"Question","name":"What should I check when buying a pendant online in Europe?","acceptedAnswer":{"@type":"Answer","text":"Check seller identity, specifications, VAT and duties, insured delivery, returns, warranty, hallmark information and report verification."}}
      ]
    }
  ]
};

// 3. Article content sections
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (1).jpg",
        alt: "How to choose a lab-grown diamond pendant - complete buying guide",
        title: "How to Choose a Lab-Grown Diamond Pendant",
        caption: "Choose a lab-grown diamond pendant by design, size, setting, chain compatibility, diamond quality, metal and certification.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A lab-grown diamond pendant should be chosen as a complete piece of jewellery—not as a diamond specification attached to an afterthought of a chain."
      },
      {
        type: "paragraph",
        text: "Begin with the design and scale you will actually wear. Then check the setting, pendant dimensions, chain inclusion, chain length, metal and clasp. Only after that should you compare diamond quality, total carat weight, certification and price."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "To choose a lab-grown diamond pendant:"
      },
      {
        type: "numbered-list",
        items: [
          "Decide whether you want a solitaire, halo, cluster, motif or coloured-stone design.",
          "Check whether the chain is included and whether the pendant is fixed or removable.",
          "Compare pendant height and width in millimetres, not carat weight alone.",
          "Choose a secure setting and a chain strong enough for the pendant.",
          "Review the diamond's origin, shape, cut, colour, clarity and carat disclosure.",
          "Confirm the metal, fineness, hallmark information and total item weight.",
          "Identify exactly what any grading or jewellery report covers.",
          "Compare the full specification, warranty, delivery and returns—not only the headline price."
        ]
      }
    ]
  },
  {
    heading: "1. Choose the pendant style first",
    content: [
      {
        type: "paragraph",
        text: "The design determines how the pendant looks, moves and fits into a wardrobe."
      },
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (2).jpg",
        alt: "Lab-grown diamond pendant styles - solitaire, halo, cluster, drop, motif and coloured stone",
        title: "Pendant Styles Compared",
        caption: "Different pendant styles offer different visual effects and wearing experiences.",
        priority: false
      },
      {
        type: "table",
        headers: ["Pendant style", "Visual effect", "Useful consideration"],
        rows: [
          ["Solitaire", "One diamond as the focal point", "Makes the centre diamond's shape and cut prominent"],
          ["Halo", "Centre stone surrounded by smaller diamonds", "Creates a larger overall outline; check total carat disclosure"],
          ["Cluster", "Several stones forming one composition", "Compare complete dimensions and stone count"],
          ["Drop", "Elongated or articulated design", "Check total drop and movement"],
          ["Motif", "Geometric, symbolic or nature-led form", "Judge craftsmanship, scale and orientation"],
          ["Coloured centre stone with diamond accents", "Strong colour contrast", "Confirm the origin and treatment of every stone type"]
        ]
      },
      {
        type: "paragraph",
        text: "Choose according to the effect you want rather than a trend label. A simple solitaire can be versatile; a sculptural motif may carry more visual identity at the same diamond weight."
      }
    ]
  },
  {
    heading: "2. Confirm what the product includes",
    content: [
      {
        type: "paragraph",
        text: "\"Pendant\" can mean the focal element alone or a complete pendant-and-chain set. Styled photographs do not prove that the displayed chain is supplied."
      },
      {
        type: "paragraph",
        text: "The product page should state:"
      },
      {
        type: "bullet-list",
        items: [
          "pendant only or pendant with chain;",
          "whether the pendant is removable, captive or fixed;",
          "chain metal, style, gauge and length;",
          "clasp type and adjustment points; and",
          "which components are included in the price, warranty and report."
        ]
      },
      {
        type: "paragraph",
        text: "If the chain is not included, add the cost of a suitable chain before comparing the product with complete necklaces."
      }
    ]
  },
  {
    heading: "3. Select the right visible size",
    content: [
      {
        type: "paragraph",
        text: "Carat is a measure of diamond weight, not pendant dimensions. Two pendants with equal total carat weight can look different because of diamond shape, stone count, setting, halo, metal border and bail."
      },
      {
        type: "paragraph",
        text: "Compare these measurements in millimetres:"
      },
      {
        type: "bullet-list",
        items: [
          "pendant height, including and excluding the bail;",
          "pendant width at its widest point;",
          "depth or profile from the side;",
          "total drop when worn; and",
          "centre-diamond measurements when relevant."
        ]
      },
      {
        type: "paragraph",
        text: "Use an on-body photograph for context, but do not rely on it alone. Model proportions, image cropping and screen size can distort scale. A dimensioned drawing or life-size printable guide provides a more reliable comparison."
      }
    ]
  },
  {
    heading: "4. Choose a diamond shape that suits the design",
    content: [
      {
        type: "paragraph",
        text: "Round brilliant diamonds often prioritise a balanced outline and strong light return. Oval, pear, marquise and emerald-cut shapes create different proportions and personalities."
      },
      {
        type: "paragraph",
        text: "Consider how the outline works with the setting:"
      },
      {
        type: "bullet-list",
        items: [
          "round and cushion shapes can feel balanced and compact;",
          "oval and marquise shapes can create an elongated appearance;",
          "pear shapes introduce a clear direction and orientation;",
          "emerald cuts show broad flashes and make clarity more visually relevant; and",
          "mixed-shape designs should be assessed as a complete composition."
        ]
      },
      {
        type: "paragraph",
        text: "Shape is personal. Cut quality is different from shape: it concerns how effectively the facets and proportions handle light. For a prominent centre diamond, request enough cut information to make a meaningful comparison."
      }
    ]
  },
  {
    heading: "5. Read the 4Cs in context",
    content: [
      {
        type: "paragraph",
        text: "For a solitaire pendant, the centre diamond's 4Cs may be individually stated. In a multi-stone pendant, the listing may instead disclose combined or minimum grades."
      },
      {
        type: "paragraph",
        text: "Cut:"
      },
      {
        type: "paragraph",
        text: "Cut influences brightness, fire and scintillation. Do not treat carat as the only driver of visible impact. Ask how cut is graded for the stated shape and whether the grade refers to the centre diamond."
      },
      {
        type: "paragraph",
        text: "Colour:"
      },
      {
        type: "paragraph",
        text: "Colour should be assessed alongside metal colour, setting style and stone size. A stated range should make clear which diamonds it covers."
      },
      {
        type: "paragraph",
        text: "Clarity:"
      },
      {
        type: "paragraph",
        text: "Clarity grades describe internal and surface characteristics under standard assessment. For jewellery, also inspect high-resolution imagery for the appearance that matters to you."
      },
      {
        type: "paragraph",
        text: "Carat:"
      },
      {
        type: "paragraph",
        text: "Establish whether the number means one diamond's weight or the total weight of all diamonds. Never assume that \"1 ct\" means a one-carat centre stone."
      }
    ]
  },
  {
    heading: "6. Understand total carat weight",
    content: [
      {
        type: "paragraph",
        text: "Total carat weight—often abbreviated as tcw or ctw—is the combined weight of the diamonds included in the stated total. It does not communicate the weight of each diamond unless the breakdown is provided."
      },
      {
        type: "paragraph",
        text: "For a halo or cluster pendant, request:"
      },
      {
        type: "bullet-list",
        items: [
          "centre-diamond carat weight;",
          "accent-diamond total carat weight;",
          "number of diamonds;",
          "relevant grade ranges; and",
          "overall pendant dimensions."
        ]
      },
      {
        type: "paragraph",
        text: "This prevents two visually different products from being compared using one headline total."
      }
    ]
  },
  {
    heading: "7. Examine the setting and construction",
    content: [
      {
        type: "paragraph",
        text: "A secure setting should hold the diamonds while allowing the intended amount of light, movement and wearability."
      },
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (3).jpg",
        alt: "Diamond pendant setting and construction guide",
        title: "Pendant Setting and Construction",
        caption: "Examine prongs, bezels, pavé and galleries to ensure secure construction.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Check:"
      },
      {
        type: "bullet-list",
        items: [
          "prongs are even and do not appear lifted;",
          "bezel edges are smooth and continuous where used;",
          "pavé or accent stones sit consistently;",
          "open galleries do not expose vulnerable points unnecessarily;",
          "articulated parts move without catching; and",
          "the pendant hangs in its intended orientation."
        ]
      },
      {
        type: "paragraph",
        text: "A very fine, low-profile design may feel delicate; a larger setting may need greater chain strength. Product images should show the front, side and back rather than only the most flattering angle."
      }
    ]
  },
  {
    heading: "8. Check the bail and chain compatibility",
    content: [
      {
        type: "paragraph",
        text: "The bail is the loop or component through which a chain passes. For a removable pendant, its opening must accommodate the chain's largest relevant part—not merely a chain link."
      },
      {
        type: "paragraph",
        text: "Compatibility checklist:"
      },
      {
        type: "bullet-list",
        items: [
          "Is the bail's internal height and width stated?",
          "Can the clasp or end tag pass through it?",
          "Is the chain strong enough for the pendant's weight?",
          "Does the chain sit freely without twisting the pendant?",
          "Will the chain abrade a narrow or decorative bail?",
          "Is the bail fixed, hinged or hidden?"
        ]
      },
      {
        type: "paragraph",
        text: "Do not force a clasp through a bail. If compatibility is uncertain, ask the jeweller to confirm the exact chain reference in writing."
      }
    ]
  },
  {
    heading: "9. Choose a practical chain length",
    content: [
      {
        type: "paragraph",
        text: "Chain length determines where the pendant sits; pendant drop extends below that point. Neck size, neckline, clothing, layering and adjustability all influence the result."
      },
      {
        type: "paragraph",
        text: "A shorter chain can place a small pendant near the collarbone. A longer chain may give a larger motif more space, but it can also increase movement. An extender or multiple adjustment loops adds flexibility, provided the clasp remains secure."
      },
      {
        type: "paragraph",
        text: "Check whether the advertised length includes the clasp and whether the pendant can be moved to another chain. Use your own well-fitting necklace as the most reliable reference."
      }
    ]
  },
  {
    heading: "10. Match the metal to wear and appearance",
    content: [
      {
        type: "paragraph",
        text: "Metal colour changes the visual frame around a diamond. White-coloured metal can create a continuous cool-toned look; yellow or rose tones provide contrast."
      },
      {
        type: "paragraph",
        text: "The listing should identify:"
      },
      {
        type: "bullet-list",
        items: [
          "metal type and fineness;",
          "whether the colour comes from the underlying alloy or plating;",
          "pendant and chain metal separately;",
          "total item weight; and",
          "hallmark or legal marking information where applicable."
        ]
      },
      {
        type: "paragraph",
        text: "In the UK, items described as gold, silver, platinum or palladium are subject to hallmarking rules, with statutory weight exemptions. European rules vary by country, so the seller should provide market-appropriate information rather than one vague global claim."
      }
    ]
  },
  {
    heading: "11. Know what certification covers",
    content: [
      {
        type: "paragraph",
        text: "A loose-diamond grading report and a finished-jewellery report are not interchangeable."
      },
      {
        type: "paragraph",
        text: "An individual diamond report can identify and grade a particular stone. A jewellery report can describe the finished article, mounted gemstones, metal content and purity marks where present. Mounted assessments may be limited by the setting and stated as such."
      },
      {
        type: "paragraph",
        text: "Before buying, ask:"
      },
      {
        type: "bullet-list",
        items: [
          "Is there an independent report?",
          "What is the report number?",
          "Can it be verified on the laboratory's official website?",
          "Does it cover the centre diamond, all diamonds or the finished pendant?",
          "Is the chain included in the reported article?",
          "Are any grades estimated or given as ranges because the stones are mounted?"
        ]
      },
      {
        type: "paragraph",
        text: "\"Certified pendant\" is incomplete language unless the page explains the issuing laboratory and exact scope."
      }
    ]
  },
  {
    heading: "12. Compare price using the full specification",
    content: [
      {
        type: "paragraph",
        text: "Lab-grown diamond pendants with similar photographs can differ in price because of diamond size and quality, number of stones, metal weight, chain, setting complexity, craftsmanship, report type and aftercare."
      },
      {
        type: "paragraph",
        text: "Build a like-for-like comparison table with:"
      },
      {
        type: "table",
        headers: ["Comparison point", "Product A", "Product B"],
        rows: [
          ["Pendant dimensions", "", ""],
          ["Centre-diamond weight", "", ""],
          ["Total diamond weight", "", ""],
          ["Diamond grades", "", ""],
          ["Metal and fineness", "", ""],
          ["Chain included", "", ""],
          ["Chain specification", "", ""],
          ["Report and scope", "", ""],
          ["Warranty and returns", "", ""],
          ["Delivered price", "", ""]
        ]
      },
      {
        type: "paragraph",
        text: "For cross-border European purchases, include VAT, duties where applicable, insured delivery and return costs."
      }
    ]
  },
  {
    heading: "13. Review wearability and aftercare",
    content: [
      {
        type: "paragraph",
        text: "The best pendant is one you can wear confidently. Consider whether the setting catches on clothing, whether the chain tangles, whether the clasp is easy to operate and whether the pendant flips during movement."
      },
      {
        type: "image",
        src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (4).jpg",
        alt: "Lab-grown diamond pendant buying checklist",
        title: "Pendant Buying Checklist",
        caption: "Use this checklist to verify every aspect of a lab-grown diamond pendant before ordering.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Ask how to clean the specific metal, stones and setting. Inspect the bail, clasp and stone security periodically, and arrange professional inspection if the piece receives frequent wear or suffers an impact."
      }
    ]
  },
  {
    heading: "A final buying checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "the pendant style suits the intended use;",
          "complete height, width and depth are stated;",
          "chain inclusion is explicit;",
          "attachment type and bail dimensions are clear;",
          "chain length, gauge, metal and clasp are specified;",
          "lab-grown origin is disclosed;",
          "centre and total carat weights are separated where relevant;",
          "diamond grades and their scope are clear;",
          "metal, fineness, weight and hallmark information are provided;",
          "the report number, issuer and coverage are identified;",
          "photographs show front, side and back;",
          "production time, insured delivery, returns and warranty are acceptable; and",
          "the final price includes any applicable tax and cross-border charges."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale approach",
    content: [
      {
        type: "paragraph",
        text: "A strong pendant product page should let a buyer understand the entire piece without filling gaps from imagery. Aurelia Royale should disclose lab-grown diamond origin, diamond breakdown, pendant dimensions, metal specification, chain inclusion, report scope and fulfilment terms beside each relevant design."
      },
      {
        type: "paragraph",
        text: "The goal is not to present the largest headline number. It is to make scale, construction, quality and ownership clear enough for a confident comparison."
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
          { text: "Choose a lab-grown diamond pendant as a complete piece. Start with design and scale, then evaluate the setting, chain, metal and documentation.\n\n" },
          { text: "The diamond may be the centre of attention, but the pendant succeeds only when every component works together. When the specification is complete, the decision becomes much clearer." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Are lab-grown diamonds real diamonds?",
            answer: "Yes. Lab-grown diamonds have the same crystal material as diamonds formed in the Earth, but their laboratory-grown origin must be clearly disclosed."
          },
          {
            question: "Is a lab-grown diamond pendant suitable for everyday wear?",
            answer: "It can be. Suitability depends on the setting, chain strength, bail, clasp, profile and the wearer's activities—not diamond origin alone."
          },
          {
            question: "Does a diamond pendant normally include a chain?",
            answer: "Not always. Confirm package contents and chain specifications on the product page."
          },
          {
            question: "What is the best size for a diamond pendant?",
            answer: "There is no universal best size. Compare pendant dimensions with your preferred visual scale, chain position and intended use."
          },
          {
            question: "Is carat weight the same as pendant size?",
            answer: "No. Carat measures diamond weight; the pendant's visible size depends on dimensions, shape, stone count and setting."
          },
          {
            question: "What does total carat weight mean on a pendant?",
            answer: "It normally means the combined weight of all diamonds included in the stated total. Ask for the centre-and-accent breakdown."
          },
          {
            question: "Which diamond shape is best for a pendant?",
            answer: "The best shape is the one that suits the design and your preference. Compare outline, cut information, orientation and visible dimensions."
          },
          {
            question: "Should a lab-grown diamond pendant be certified?",
            answer: "Independent documentation can support identification and quality claims, especially for a significant centre diamond. Check what the report actually covers."
          },
          {
            question: "Can I put a pendant on another chain?",
            answer: "Only if it is removable and the new chain's clasp or end tag fits through the bail while safely supporting the pendant."
          },
          {
            question: "How do I choose a chain length for a pendant?",
            answer: "Use a necklace you already like as a reference, then account for the pendant's additional drop and any adjustment loops."
          },
          {
            question: "Should the chain and pendant be the same metal?",
            answer: "They do not have to be, but differences can affect colour, wear and hallmarking. Each component should be accurately specified."
          },
          {
            question: "What should I check when buying a pendant online in Europe?",
            answer: "Check seller identity, complete specifications, VAT and duties, insured delivery, returns, warranty, hallmark information and report verification."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop Lab-Grown Diamond Pendants at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond pendants with complete specifications, detailed chain information and transparent documentation.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function HowToChooseLabGrownDiamondPendantPage() {
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
            Product-Category Guides
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Choose a Lab-Grown Diamond Pendant
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="how-to-choose-lab-grown-diamond-pendant" />
      <NewsletterSection />
    </main>
  );
}