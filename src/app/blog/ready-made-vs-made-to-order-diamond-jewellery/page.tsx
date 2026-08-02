import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "Ready-Made vs Made-to-Order Diamond Jewellery",
  description: "Compare ready-made and made-to-order diamond jewellery by choice, sizing, inspection, production time, returns, price and event deadlines.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/ready-made-vs-made-to-order-diamond-jewellery/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/ready-made-vs-made-to-order-diamond-jewellery/#article",
      "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/ready-made-vs-made-to-order-diamond-jewellery/"},
      "headline": "Ready-Made vs Made-to-Order Diamond Jewellery: Which Should You Choose?",
      "description": "Compare ready-made and made-to-order diamond jewellery by choice, sizing, inspection, production time, returns, price and event deadlines.",
      "image": "https://www.aureliaroyale.com/images/blog/ready-made-vs-made-to-order-diamond-jewellery.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher": {"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage": "en-GB",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": ["ready-made vs made-to-order diamond jewellery","ready-made diamond jewellery","made-to-order diamond jewellery","made-to-order jewellery meaning"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/ready-made-vs-made-to-order-diamond-jewellery/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"Ready-Made vs Made-to-Order Diamond Jewellery","item":"https://www.aureliaroyale.com/blog/ready-made-vs-made-to-order-diamond-jewellery/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/ready-made-vs-made-to-order-diamond-jewellery/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What is ready-made diamond jewellery?","acceptedAnswer":{"@type":"Answer","text":"It is a finished piece produced before the customer's order. Final verification, alteration, engraving, packing and dispatch may remain."}},
        {"@type":"Question","name":"What does made-to-order jewellery mean?","acceptedAnswer":{"@type":"Answer","text":"It means some or all manufacture or assembly occurs after the customer confirms the order, usually from an existing design with defined options."}},
        {"@type":"Question","name":"Is made-to-order the same as bespoke?","acceptedAnswer":{"@type":"Answer","text":"No. Made-to-order can use an established design in a selected size or metal. Bespoke usually involves substantial design development."}},
        {"@type":"Question","name":"Is made-to-order jewellery handmade?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. It may combine digital design, casting, fabrication, hand assembly, stone setting and polishing."}},
        {"@type":"Question","name":"Is ready-made jewellery lower quality?","acceptedAnswer":{"@type":"Answer","text":"No. Quality depends on specification, materials, engineering, setting, finish and inspection—not inventory timing."}},
        {"@type":"Question","name":"Can made-to-order jewellery be returned?","acceptedAnswer":{"@type":"Answer","text":"It depends on the product, degree of personalisation, seller terms and applicable law. Confirm before production."}},
        {"@type":"Question","name":"Is made-to-order jewellery more expensive?","acceptedAnswer":{"@type":"Answer","text":"Not automatically. Compare diamonds, metal, labour, documentation, services and delivered price rather than the label."}},
        {"@type":"Question","name":"How long does made-to-order jewellery take?","acceptedAnswer":{"@type":"Answer","text":"There is no universal time. The seller should provide a range covering production, quality control, hallmarking and dispatch."}},
        {"@type":"Question","name":"Can ready-made jewellery be resized?","acceptedAnswer":{"@type":"Answer","text":"Sometimes. Resizability depends on design, setting, metal and required change. Confirm limits, cost and timing."}},
        {"@type":"Question","name":"Will made-to-order jewellery look exactly like the photograph?","acceptedAnswer":{"@type":"Answer","text":"It should match the approved specification, but representative imagery may allow stated variations in stones, dimensions or hand finishing."}},
        {"@type":"Question","name":"Which option is better for a wedding deadline?","acceptedAnswer":{"@type":"Answer","text":"Ready-made is generally safer when time is short. Obtain a written arrival commitment and include an inspection and resizing buffer."}},
        {"@type":"Question","name":"What should a made-to-order confirmation include?","acceptedAnswer":{"@type":"Answer","text":"It should include design, size, metal, diamonds, dimensions, engraving, tolerance, price, approvals, lead time, returns and warranty."}}
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
        src: "/images/blog/ready-made-vs-made-to-order-diamond-jewellery/53 (1).jpg",
        alt: "Ready-made vs made-to-order diamond jewellery comparison",
        title: "Ready-Made vs Made-to-Order",
        caption: "Understanding the difference between ready-made and made-to-order helps you choose the right option.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Ready-made and made-to-order diamond jewellery can use the same quality diamonds, precious metals and craftsmanship. The difference is primarily when the product becomes allocated or manufactured in relation to your order."
      },
      {
        type: "paragraph",
        text: "With ready-made jewellery, a finished piece already exists. With made-to-order jewellery, some or all production begins or is completed after you confirm the specification. That changes what you can inspect, how quickly it can arrive, which details you can choose and what may happen if you change your mind."
      },
      {
        type: "paragraph",
        text: "Neither model is automatically better. The right choice depends on your deadline, confidence in the specification, sizing needs, desired control and tolerance for variation."
      },
      {
        type: "callout",
        title: "Quick answer",
        parts: [
          { text: "Choose ", bold: true },
          { text: "ready-made diamond jewellery", bold: true },
          { text: " when you prioritise:\n\n", bold: true },
          { text: "• faster and more predictable dispatch\n• seeing the exact finished piece before purchase\n• simpler gifting under a fixed deadline\n• fewer design approvals\n• the possibility of a standard return, subject to policy and law\n\n" },
          { text: "Choose ", bold: true },
          { text: "made-to-order diamond jewellery", bold: true },
          { text: " when you prioritise:\n\n", bold: true },
          { text: "• a specific ring size, length or metal option\n• selecting a centre diamond or controlled grade\n• a variation of an established design\n• fresh production for your confirmed specification\n• details unavailable in existing inventory\n\nDo not assume that \"made to order\" means bespoke, handmade, unique or non-returnable. Ask the seller to define exactly what is being made or changed." }
        ]
      }
    ]
  },
  {
    heading: "What is ready-made diamond jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Ready-made jewellery is already manufactured as a finished piece before your order. It may be held by the retailer, workshop or fulfilment partner."
      },
      {
        type: "paragraph",
        text: "The exact item can potentially be:"
      },
      {
        type: "bullet-list",
        items: [
          "photographed and filmed;",
          "measured and weighed;",
          "inspected for stone setting and finish;",
          "matched to its report or inscription;",
          "hallmarked where required; and",
          "dispatched after final checks."
        ]
      },
      {
        type: "paragraph",
        text: "Ready-made does not necessarily mean same-day dispatch. Payment review, resizing, engraving, report verification, final polishing, packing and insured courier collection may remain."
      },
      {
        type: "paragraph",
        text: "It also does not mean mass-produced or lower quality. A one-off finished piece can be ready-made, while a standard collection design can be made after every order."
      }
    ]
  },
  {
    heading: "What is made-to-order diamond jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Made-to-order jewellery is manufactured, assembled or materially completed after the buyer confirms the order. The design may already exist, but the selected combination is produced for the buyer."
      },
      {
        type: "paragraph",
        text: "Made-to-order work can involve:"
      },
      {
        type: "bullet-list",
        items: [
          "producing a ring in a selected size;",
          "choosing metal type or colour;",
          "allocating a particular centre diamond;",
          "changing chain or bracelet length;",
          "setting stones into an existing mount design;",
          "adding engraving; or",
          "coordinating several pieces as a set."
        ]
      },
      {
        type: "paragraph",
        text: "The term does not reveal the manufacturing method. A made-to-order piece may combine computer-aided design, casting, hand assembly, stone setting, polishing and quality control. Ask what remains after payment and which features can actually be changed."
      }
    ]
  },
  {
    heading: "Made to order is not the same as bespoke",
    content: [
      {
        type: "paragraph",
        text: "These terms are frequently confused."
      },
      {
        type: "table",
        headers: ["Model", "Design starting point", "Buyer's control"],
        rows: [
          ["Ready-made", "Finished existing piece", "Usually selection from available inventory"],
          ["Made to order", "Existing design produced or completed after order", "Defined options such as size, metal or stone"],
          ["Customised", "Existing piece or design altered", "Specific approved modifications"],
          ["Bespoke", "Design developed substantially for the buyer", "Wider design process and approvals"]
        ]
      },
      {
        type: "image",
        src: "/images/blog/ready-made-vs-made-to-order-diamond-jewellery/53 (2).jpg",
        alt: "Comparison of ready-made, made-to-order, custom and bespoke jewellery",
        title: "Jewellery Production Models",
        caption: "Understanding the differences between ready-made, made-to-order, custom and bespoke helps set realistic expectations.",
        priority: false
      },
      {
        type: "paragraph",
        text: "A standard ring produced in size M is made to order but not necessarily bespoke. An existing pendant with an engraved date is personalised but not necessarily a custom design."
      },
      {
        type: "paragraph",
        text: "This distinction matters for price, timing, revision rights and returns."
      }
    ]
  },
  {
    heading: "Side-by-side comparison",
    content: [
      {
        type: "table",
        headers: ["Factor", "Ready-made", "Made to order"],
        rows: [
          ["Product existence", "Finished before order", "Completed after order"],
          ["Exact-item inspection", "Often possible", "Usually based on sample or render"],
          ["Dispatch", "Generally faster", "Follows production and checks"],
          ["Size and length options", "Limited to inventory or alteration", "Can be built to available options"],
          ["Diamond choice", "Existing stone or stated range", "May allow selection or allocation"],
          ["Variation", "Lower", "Normal within stated tolerances"],
          ["Approvals", "Usually none", "May require confirmation or design approval"],
          ["Cancellation", "Often simpler before dispatch", "May narrow once work or allocation begins"],
          ["Returns", "Depends on terms and law", "Depends on personalisation, terms and law"],
          ["Event planning", "Useful for short deadlines", "Requires production buffer"]
        ]
      },
      {
        type: "paragraph",
        text: "The table describes typical differences, not universal rules. The seller's written specification and terms control the actual purchase."
      }
    ]
  },
  {
    heading: "Advantage 1: certainty about the exact appearance",
    content: [
      {
        type: "paragraph",
        text: "A ready-made product can be photographed as the exact item. You may be able to inspect:"
      },
      {
        type: "bullet-list",
        items: [
          "diamond outline and pattern;",
          "colour matching across stones;",
          "prong alignment;",
          "finished proportions;",
          "hallmark and report number;",
          "product weight; and",
          "clasp or earring-back construction."
        ]
      },
      {
        type: "paragraph",
        text: "Ask whether the images and video show the exact item. Some ready-made listings still use representative collection imagery."
      },
      {
        type: "paragraph",
        text: "Made-to-order products usually rely on samples, renders or reference photography. The delivered piece should match the written specification, but minor variation can occur in stone dimensions, engraving placement, hand finishing or total weight. The permitted tolerance should be stated."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to check jewellery dimensions and weight", href: "/blog/check-jewellery-product-dimensions-weight/" },
          { text: " to compare the reference image with measurable specifications." }
        ]
      }
    ]
  },
  {
    heading: "Advantage 2: sizing and fit",
    content: [
      {
        type: "paragraph",
        text: "Made-to-order can be useful when the required ring size, bracelet length or necklace length is not held as finished stock. Producing the correct size from the start may preserve proportions better than altering a completed piece."
      },
      {
        type: "paragraph",
        text: "However, made-to-order sizing is only beneficial when the input is correct. Confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "sizing system;",
          "ring width and fit style;",
          "wrist measurement and comfort allowance;",
          "chain length and adjustment positions;",
          "resize range after delivery; and",
          "correction cost if the supplied size was wrong."
        ]
      },
      {
        type: "paragraph",
        text: "Ready-made jewellery can sometimes be resized or shortened, but not every setting, eternity ring, articulated bracelet or engraved piece allows easy alteration."
      }
    ]
  },
  {
    heading: "Advantage 3: diamond and metal choice",
    content: [
      {
        type: "paragraph",
        text: "A made-to-order model can offer combinations that would be inefficient to hold in inventory: several gold colours, platinum, multiple carat options or individually report-covered centre diamonds."
      },
      {
        type: "paragraph",
        text: "Before choosing, define whether you are selecting:"
      },
      {
        type: "bullet-list",
        items: [
          "an exact diamond with report number;",
          "a diamond meeting a minimum or range;",
          "a representative total carat weight;",
          "the centre stone only; or",
          "every principal stone in a matched design."
        ]
      },
      {
        type: "paragraph",
        text: "For metal, confirm type, fineness, colour, plating, approximate weight and hallmark arrangements."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: " before approving a variant." }
        ]
      },
      {
        type: "paragraph",
        text: "Choice is valuable only when the selected specification appears on the order confirmation."
      }
    ]
  },
  {
    heading: "Advantage 4: speed and event deadlines",
    content: [
      {
        type: "paragraph",
        text: "Ready-made usually wins when time is short because manufacturing is already complete. Yet alteration and dispatch still require time."
      },
      {
        type: "image",
        src: "/images/blog/ready-made-vs-made-to-order-diamond-jewellery/53 (3).jpg",
        alt: "Timeline comparison between ready-made and made-to-order jewellery production",
        title: "Production Timeline Comparison",
        caption: "Ready-made generally offers faster dispatch, while made-to-order requires production time.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Made-to-order timing can include material allocation, manufacture, stone setting, finishing, quality control, hallmarking, documentation and insured dispatch. Express delivery shortens carrier transit; it does not automatically shorten production."
      },
      {
        type: "paragraph",
        text: "For a wedding, proposal or anniversary:"
      },
      {
        type: "numbered-list",
        items: [
          "give the seller the essential date before ordering;",
          "ask whether the exact ready-made variant exists;",
          "obtain the latest dispatch and arrival dates in writing;",
          "allow time to inspect and correct sizing; and",
          "avoid treating an estimate as a guarantee."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use the worksheet in " },
          { text: "jewellery availability and production time", href: "/blog/jewellery-availability-production-time/" },
          { text: " to calculate the full timeline." }
        ]
      }
    ]
  },
  {
    heading: "Advantage 5: returns and cancellation",
    content: [
      {
        type: "paragraph",
        text: "Do not assume all made-to-order jewellery is automatically non-returnable or that every ready-made item can be returned without restriction."
      },
      {
        type: "paragraph",
        text: "The position depends on:"
      },
      {
        type: "bullet-list",
        items: [
          "seller location and buyer destination;",
          "whether the transaction is online or in person;",
          "whether the product is standard, made to order or clearly personalised;",
          "when production or diamond allocation begins;",
          "written cancellation and return terms; and",
          "applicable consumer law."
        ]
      },
      {
        type: "paragraph",
        text: "Current EU guidance provides a 14-day withdrawal period for many distance purchases but lists goods made to order or clearly personalised among exceptions. National application and the facts matter. UK distance-selling rules also contain exceptions for personalised or custom-made goods."
      },
      {
        type: "paragraph",
        text: "Before paying, ask:"
      },
      {
        type: "bullet-list",
        items: [
          "Can I cancel before production begins?",
          "At what milestone does the order become committed?",
          "Is choosing a standard size treated differently from engraving?",
          "Can the piece be returned if it matches the approved specification?",
          "What remedies apply if it is faulty or not as described?",
          "Who pays insured return shipping?"
        ]
      },
      {
        type: "paragraph",
        text: "Contractual return restrictions do not erase statutory remedies for faulty or misdescribed goods. Obtain legal guidance for a dispute."
      }
    ]
  },
  {
    heading: "Is made-to-order jewellery more expensive?",
    content: [
      {
        type: "paragraph",
        text: "Not necessarily. Price depends on diamonds, metal, design, labour, documentation, service and business model."
      },
      {
        type: "paragraph",
        text: "Made-to-order production can avoid holding every variant as inventory, but it can add sourcing, administration, setup or custom labour. Ready-made stock can benefit from repeat production, or it may carry inventory and financing costs."
      },
      {
        type: "paragraph",
        text: "Compare the final specification rather than the label. Ask whether the price includes:"
      },
      {
        type: "bullet-list",
        items: [
          "exact diamond or quality range;",
          "resizing and engraving;",
          "design revisions;",
          "independent reports;",
          "hallmarking;",
          "insured delivery; and",
          "aftercare."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "what determines the price of lab-grown diamond jewellery", href: "/blog/what-determines-price-lab-grown-diamond-jewellery/" },
          { text: " for the complete price stack." }
        ]
      }
    ]
  },
  {
    heading: "Does one model produce better quality?",
    content: [
      {
        type: "paragraph",
        text: "No. Quality depends on design, materials, manufacturing, setting, finishing and inspection."
      },
      {
        type: "paragraph",
        text: "A ready-made piece has the advantage of being inspectable before allocation. A made-to-order piece may receive quality control against a buyer-specific specification. Either can be excellent or poor."
      },
      {
        type: "paragraph",
        text: "Request evidence:"
      },
      {
        type: "bullet-list",
        items: [
          "complete product specifications;",
          "exact-item or representative-image statement;",
          "quality-control process;",
          "measurements and tolerances;",
          "report and hallmark scope;",
          "warranty; and",
          "procedure if the delivered item differs."
        ]
      },
      {
        type: "paragraph",
        text: "GIA's jewellery quality benchmarks address features such as workmanship and construction; they do not say that inventory timing determines quality."
      }
    ]
  },
  {
    heading: "Decision guide",
    content: [
      {
        type: "callout",
        title: "Choose ready-made when:",
        theme: "pine",
        parts: [
          { text: "• your deadline is close\n• you want to inspect the exact item\n• standard sizing works\n• you prefer fewer approval steps\n• the available specification already matches your priorities\n• flexibility to return a standard product is important, subject to terms" }
        ]
      },
      {
        type: "callout",
        title: "Choose made to order when:",
        theme: "cream",
        parts: [
          { text: "• your size or length is unavailable\n• you want a defined metal or diamond combination\n• the design is established but requires approved changes\n• you can accommodate production time\n• you understand the variation tolerance\n• you accept the stated cancellation and return position" }
        ]
      },
      {
        type: "callout",
        title: "Pause when:",
        theme: "gold-border",
        parts: [
          { text: "• the seller cannot define what \"made to order\" means\n• images are representative but no tolerance is given\n• payment is requested before the final specification\n• return restrictions appear only after checkout\n• the event date is acknowledged only verbally\n• the invoice does not list selected options" }
        ]
      }
    ]
  },
  {
    heading: "Pre-order comparison worksheet",
    content: [
      {
        type: "image",
        src: "/images/blog/ready-made-vs-made-to-order-diamond-jewellery/53 (4).jpg",
        alt: "Comparison worksheet for ready-made vs made-to-order jewellery",
        title: "Decision Worksheet",
        caption: "Use this worksheet to compare ready-made and made-to-order options before deciding.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Complete this before payment:"
      },
      {
        type: "table",
        headers: ["Question", "Ready-made option", "Made-to-order option"],
        rows: [
          ["Does the exact piece exist?", "", ""],
          ["Are images exact or representative?", "", ""],
          ["Which specifications can I choose?", "", ""],
          ["What variation is permitted?", "", ""],
          ["What work remains?", "", ""],
          ["Latest dispatch and arrival", "", ""],
          ["Can I cancel before dispatch?", "", ""],
          ["Return eligibility", "", ""],
          ["Resize or alteration options", "", ""],
          ["Documents and hallmark", "", ""],
          ["Warranty and aftercare", "", ""],
          ["Final delivered price", "", ""]
        ]
      },
      {
        type: "paragraph",
        text: "Complete both columns for the exact variants. A general store policy is not enough if the product page states a specific exception."
      }
    ]
  },
  {
    heading: "What Aurelia Royale should disclose",
    content: [
      {
        type: "paragraph",
        text: "Every Aurelia Royale product should be labelled ready-made, made to order or bespoke/customised using a published definition. The page should state:"
      },
      {
        type: "bullet-list",
        items: [
          "whether the exact item exists;",
          "exact versus representative imagery;",
          "configurable specifications;",
          "production stages and lead-time range;",
          "variation tolerance;",
          "approval milestones;",
          "cancellation and return position;",
          "latest dispatch estimate by variant; and",
          "what happens if a specification cannot be fulfilled."
        ]
      },
      {
        type: "paragraph",
        text: "The cart should repeat the model and selected options. A made-to-order customer should receive a final specification approval before non-recoverable work begins."
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
          { text: "Ready-made diamond jewellery offers greater exact-item certainty and generally faster fulfilment. Made-to-order jewellery offers more control over available sizes, metals and diamond options but requires production time, an approved specification and careful review of cancellation and return terms.\n\n" },
          { text: "Choose based on the factor that matters most: deadline, exact-item inspection, fit, configuration or contractual flexibility. Neither model proves quality or value by itself.\n\n" },
          { text: "The safest purchase is the one where the seller defines the model, records the complete specification and explains what happens before and after production begins." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is ready-made diamond jewellery?",
            answer: "It is a finished piece produced before the customer's order. Final verification, alteration, engraving, packing and dispatch may still remain."
          },
          {
            question: "What does made-to-order jewellery mean?",
            answer: "It means some or all manufacture or assembly occurs after the customer confirms the order, usually from an existing design with defined options."
          },
          {
            question: "Is made-to-order the same as bespoke?",
            answer: "No. Made-to-order can use an established design in a selected size or metal. Bespoke usually involves substantial design development for one client."
          },
          {
            question: "Is made-to-order jewellery handmade?",
            answer: "Not necessarily. It may combine digital design, casting, fabrication, hand assembly, stone setting and polishing. Ask which processes apply."
          },
          {
            question: "Is ready-made jewellery lower quality?",
            answer: "No. Quality depends on specification, materials, engineering, setting, finish and inspection—not whether the piece existed before the order."
          },
          {
            question: "Can made-to-order jewellery be returned?",
            answer: "It depends on the product, degree of personalisation, seller terms and applicable law. Confirm the exact position before production."
          },
          {
            question: "Is made-to-order jewellery more expensive?",
            answer: "Not automatically. Compare diamonds, metal, labour, documentation, services and final delivered price rather than the production label."
          },
          {
            question: "How long does made-to-order jewellery take?",
            answer: "There is no universal time. The seller should provide a range covering manufacture, setting, finishing, quality control, hallmarking and dispatch."
          },
          {
            question: "Can ready-made jewellery be resized?",
            answer: "Sometimes. Resizability depends on design, setting, metal and required change. Confirm limits, cost and effect on delivery and returns."
          },
          {
            question: "Will made-to-order jewellery look exactly like the photograph?",
            answer: "It should match the approved specification, but representative imagery may allow stated variations in stones, dimensions or hand finishing."
          },
          {
            question: "Which option is better for a wedding deadline?",
            answer: "Ready-made is generally safer when time is short. Whichever model you choose, obtain a written arrival commitment and include an inspection and resizing buffer."
          },
          {
            question: "What should a made-to-order confirmation include?",
            answer: "It should include product code, design, size, metal, diamonds, dimensions, engraving, tolerance, price, approvals, lead time, returns and warranty."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop with Confidence at Aurelia",
        subtitle: "Explore our collection with transparent ready-made and made-to-order options.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function ReadyMadeVsMadeToOrderPage() {
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
            Buying Lab-Grown Diamond Jewellery
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            Ready-Made vs Made-to-Order Diamond Jewellery
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
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
