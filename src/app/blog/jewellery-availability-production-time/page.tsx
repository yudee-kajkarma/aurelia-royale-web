import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "Jewellery Availability and Production Time Explained",
  description: "Understand in-stock, ready-to-ship and made-to-order jewellery timelines, then calculate production, dispatch and delivery before ordering.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/jewellery-availability-production-time/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/jewellery-availability-production-time/#article",
      "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/jewellery-availability-production-time/"},
      "headline": "How to Understand Jewellery Availability and Production Time",
      "description": "Understand in-stock, ready-to-ship and made-to-order jewellery timelines, then calculate production, dispatch and delivery before ordering.",
      "image": "https://www.aureliaroyale.com/images/blog/jewellery-availability-production-time.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "publisher": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "inLanguage": "en-GB",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": ["jewellery production time", "jewellery availability explained", "made-to-order jewellery lead time", "jewellery dispatch time"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/jewellery-availability-production-time/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/"},
        {"@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/"},
        {"@type": "ListItem", "position": 3, "name": "Jewellery Availability and Production Time", "item": "https://www.aureliaroyale.com/blog/jewellery-availability-production-time/"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/jewellery-availability-production-time/#faq",
      "mainEntity": [
        {"@type":"Question","name":"What does 'in stock' mean for jewellery?","acceptedAnswer":{"@type":"Answer","text":"It should mean relevant inventory is physically held, but your exact size or selected diamond may not be finished. Confirm the selected variant and remaining work."}},
        {"@type":"Question","name":"What does 'ready to ship' mean?","acceptedAnswer":{"@type":"Answer","text":"It generally means production is complete, although payment review, verification, engraving, packing and courier scheduling may remain."}},
        {"@type":"Question","name":"How long does made-to-order jewellery take?","acceptedAnswer":{"@type":"Answer","text":"There is no universal period. Design, materials, setting complexity, sizing, hallmarking, quality control and workshop capacity determine the range."}},
        {"@type":"Question","name":"Does production time include delivery?","acceptedAnswer":{"@type":"Answer","text":"Usually not unless explicitly stated. Add dispatch handling, carrier transit and any customs clearance to production time."}},
        {"@type":"Question","name":"What is the difference between dispatch and delivery?","acceptedAnswer":{"@type":"Answer","text":"Dispatch occurs when the seller hands the parcel to the carrier. Delivery occurs when the parcel reaches the recipient."}},
        {"@type":"Question","name":"Do weekends count in a jewellery lead time?","acceptedAnswer":{"@type":"Answer","text":"Only if the seller uses calendar days. Business-day estimates normally exclude weekends and may exclude local public holidays."}},
        {"@type":"Question","name":"Can express shipping make jewellery production faster?","acceptedAnswer":{"@type":"Answer","text":"Not automatically. Express shipping shortens carrier transit. Production changes only if priority manufacture is separately confirmed."}},
        {"@type":"Question","name":"Does ring sizing add production time?","acceptedAnswer":{"@type":"Answer","text":"It can. A ready-made ring may need alteration, while some designs must be produced in the selected size."}},
        {"@type":"Question","name":"Does jewellery hallmarking add time?","acceptedAnswer":{"@type":"Answer","text":"It can when the finished article must be sent to an external assay office. Confirm whether hallmarking is included in the lead time."}},
        {"@type":"Question","name":"What should I do if I need jewellery for a wedding?","acceptedAnswer":{"@type":"Answer","text":"State the essential date before ordering, request the latest arrival in writing and include time to inspect or resize the jewellery."}},
        {"@type":"Question","name":"Can made-to-order jewellery be returned?","acceptedAnswer":{"@type":"Answer","text":"Rights depend on the product, degree of personalisation, seller terms and applicable law. Read the specific policy before production."}},
        {"@type":"Question","name":"What records should I keep for a delayed order?","acceptedAnswer":{"@type":"Answer","text":"Keep the product page, availability message, promised dates, event-date disclosure, order confirmation, correspondence and tracking."}}
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
        src: "/images/blog/jewellery-availability-production-time/52 (1).jpg",
        alt: "Jewellery production timeline and availability stages",
        title: "Jewellery Production Timeline",
        caption: "Understanding the full journey from order to delivery helps set realistic expectations.",
        priority: true
      },
      {
        type: "paragraph",
        text: "An online jewellery page may say \"available\" while the piece still needs to be sized, assembled, set, hallmarked or made. Another product may be physically ready but require several days for verification and insured dispatch."
      },
      {
        type: "paragraph",
        text: "The useful question is therefore not only \"Is it available?\" It is \"What work remains, when will it be dispatched and when should it arrive at my address?\""
      },
      {
        type: "paragraph",
        text: "Production time, dispatch time and delivery time are separate. Understanding each stage is essential when jewellery is intended for a proposal, wedding, anniversary, journey or gift date."
      },
      {
        type: "callout",
        title: "Quick answer: how do you calculate a jewellery delivery date?",
        parts: [
          { text: "Use this formula:\n\n" },
          { text: "Estimated arrival = order processing + sourcing + production or alteration + quality control and documentation + dispatch handling + carrier transit + customs contingency\n\n" },
          { text: "Before ordering, confirm:\n\n", bold: true },
          { text: "1. The availability status of your exact variant.\n2. Whether the stated timeline uses calendar or business days.\n3. When the clock begins: order, cleared payment or approved design.\n4. Whether sizing, engraving or stone selection adds time.\n5. Whether quality control, reporting or hallmarking is included.\n6. The estimated dispatch date—not only \"ships in\" wording.\n7. Carrier transit time for your destination.\n8. Customs or import processing for cross-border orders.\n9. Whether the date is an estimate or guarantee.\n10. What happens if the seller misses an agreed essential deadline.\n\nFor an important event, obtain the delivery commitment in writing and leave a sensible buffer." }
        ]
      }
    ]
  },
  {
    heading: "Availability terms are not interchangeable",
    content: [
      {
        type: "paragraph",
        text: "Retailers use availability labels differently. Read the definition on the product page or policy."
      },
      {
        type: "table",
        headers: ["Label", "What it should mean", "What to confirm"],
        rows: [
          ["In stock", "A relevant item or component is physically held", "Is my exact size, metal and diamond option complete?"],
          ["Ready to ship", "The finished selected item requires no production", "What verification and dispatch handling remain?"],
          ["Ready-made", "The design already exists as finished inventory", "Is resizing or alteration required?"],
          ["Made to order", "Production starts or is completed for the order", "What stages and lead-time range apply?"],
          ["Back-order", "Item is temporarily unavailable but expected again", "Is the replenishment date confirmed?"],
          ["Pre-order", "Order is accepted before release or completed supply", "Is the date fixed, estimated or dependent on demand?"],
          ["Bespoke", "Design or specifications are created for the client", "When does timing begin and how many approvals are required?"],
          ["Available on request", "Seller must check supplier or workshop availability", "When will availability and price be confirmed?"]
        ]
      },
      {
        type: "paragraph",
        text: "\"Available\" can mean purchasable, not physically finished. \"In stock\" can refer to a mount without its selected centre diamond. Always check the exact variant."
      }
    ]
  },
  {
    heading: "Check the selected variant, not the default product",
    content: [
      {
        type: "paragraph",
        text: "A ring page may display \"ready to ship\", while only one size and metal combination is ready. Changing to another ring size, gold colour, chain length or diamond specification can change the lead time."
      },
      {
        type: "paragraph",
        text: "Before adding to the basket, record:"
      },
      {
        type: "bullet-list",
        items: [
          "product code;",
          "chosen metal and fineness;",
          "ring size or wearable length;",
          "selected diamond specification;",
          "engraving or personalisation;",
          "report requirements; and",
          "the availability message after all selections are made."
        ]
      },
      {
        type: "paragraph",
        text: "The cart and confirmation email should repeat both the variant and expected dispatch window."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use the " },
          { text: "diamond jewellery product-specification checklist", href: "/blog/diamond-jewellery-product-specifications-checklist/" },
          { text: " to preserve the complete order record." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "If a seller will not define availability or provide written timing, revisit " },
          { text: "how to choose a trustworthy online diamond jeweller", href: "/blog/choose-trustworthy-online-diamond-jeweller/" },
          { text: " before paying." }
        ]
      }
    ]
  },
  {
    heading: "The stages inside jewellery production time",
    content: [
      {
        type: "image",
        src: "/images/blog/jewellery-availability-production-time/52 (2).jpg",
        alt: "Step-by-step jewellery production stages from order to dispatch",
        title: "Production Stages Breakdown",
        caption: "Made-to-order jewellery passes through multiple stages before reaching your doorstep.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Made-to-order jewellery does not spend the entire lead time at a workbench. A realistic schedule may contain several dependencies."
      },
      {
        type: "bullet-list",
        items: [
          "Order review and payment clearance — The seller confirms the specification, fraud checks, payment and delivery information.",
          "Diamond and material allocation — The selected diamond, accent stones, precious metal and components must be available.",
          "Design confirmation or adaptation — Bespoke work requires drawings, renders and written approval.",
          "Manufacturing and assembly — Casting, fabrication, cleaning, component production and preliminary finishing.",
          "Stone setting — Diamonds are matched, placed and secured.",
          "Finishing and plating — Polishing, texturing, engraving or plating.",
          "Quality control — The workshop inspects stone security, alignment, polish, dimensions and clasps.",
          "Hallmarking and documentation — Hallmarking and independent laboratory reporting.",
          "Packing and insured dispatch — Final photography, packaging and courier booking."
        ]
      },
      {
        type: "paragraph",
        text: "This sequence explains why \"manufactured\" and \"dispatched\" are not the same milestone."
      },
      {
        type: "paragraph",
        parts: [
          { text: "These production and control stages are also part of " },
          { text: "what makes lab-grown diamond jewellery high quality", href: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/" },
          { text: "; speed should not erase necessary inspection." }
        ]
      }
    ]
  },
  {
    heading: "Production time, dispatch time and delivery time",
    content: [
      {
        type: "paragraph",
        text: "These three phrases should never be merged:"
      },
      {
        type: "bullet-list",
        items: [
          "Production time: time required to prepare or make the jewellery.",
          "Dispatch time: time until the completed parcel leaves the seller.",
          "Delivery or transit time: time the carrier takes after collection."
        ]
      },
      {
        type: "paragraph",
        text: "If production is quoted as 10 business days and delivery as 2–4 business days, the arrival estimate is not 10 days. It is production plus any dispatch handling plus transit."
      },
      {
        type: "paragraph",
        text: "For international delivery, add possible customs clearance. Paying for express carriage does not necessarily accelerate production."
      }
    ]
  },
  {
    heading: "Calendar days versus business days",
    content: [
      {
        type: "paragraph",
        text: "Ten business days can span two full working weeks and longer when public holidays intervene. Confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "which days the workshop treats as business days;",
          "the seller's country and holiday calendar;",
          "order cut-off time and time zone;",
          "whether the order day counts as day one;",
          "seasonal closures; and",
          "whether carrier weekends are included."
        ]
      },
      {
        type: "paragraph",
        text: "For example, an order placed after Friday's cut-off may enter processing on Monday. If Monday is a local holiday, counting may start Tuesday. Avoid calculating from the marketing banner alone."
      }
    ]
  },
  {
    heading: "Estimated date, dispatch window and guaranteed date",
    content: [
      {
        type: "paragraph",
        text: "An estimate is a forecast, not necessarily a contractual guarantee. A range such as \"dispatches in 10–15 business days\" acknowledges uncertainty but should still have a defined starting point."
      },
      {
        type: "paragraph",
        text: "Ask which of these the seller is offering:"
      },
      {
        type: "bullet-list",
        items: [
          "expected production completion;",
          "estimated dispatch window;",
          "estimated carrier delivery;",
          "latest agreed delivery date; or",
          "guaranteed event delivery."
        ]
      },
      {
        type: "paragraph",
        text: "If timing is essential, tell the seller the event date before ordering and ask them to confirm the latest delivery date in writing. Do not rely on a customer-service phrase such as \"should be fine\"."
      }
    ]
  },
  {
    heading: "Why personalised and bespoke orders need extra care",
    content: [
      {
        type: "paragraph",
        text: "Engraving, unusual sizing, design changes or a client-selected diamond can affect both production and cancellation terms."
      },
      {
        type: "paragraph",
        text: "Before approving the work, confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "final specification and spelling;",
          "drawing or render approval deadline;",
          "number of included revisions;",
          "when the order becomes non-cancellable;",
          "whether returns are restricted;",
          "what happens if materials become unavailable;",
          "price consequences of changes; and",
          "revised delivery date after any amendment."
        ]
      },
      {
        type: "paragraph",
        text: "Consumer cancellation rights and exceptions vary with jurisdiction and the actual degree of personalisation. A \"made to order\" label does not, by itself, explain the legal position."
      }
    ]
  },
  {
    heading: "Ready-to-ship does not mean same-day arrival",
    content: [
      {
        type: "paragraph",
        text: "Even completed jewellery may require:"
      },
      {
        type: "bullet-list",
        items: [
          "payment and fraud review;",
          "report-number matching;",
          "stone-security inspection;",
          "final polishing;",
          "engraving requested at checkout;",
          "address validation;",
          "courier collection scheduling; and",
          "signature or secure-delivery arrangements."
        ]
      },
      {
        type: "paragraph",
        text: "Check the daily dispatch cut-off and whether high-value orders ship on Fridays or before public holidays. Some sellers avoid parcels remaining in courier networks over weekends."
      }
    ]
  },
  {
    heading: "Cross-border orders in Europe and the UK",
    content: [
      {
        type: "image",
        src: "/images/blog/jewellery-availability-production-time/52 (3).jpg",
        alt: "International jewellery delivery and customs processing",
        title: "Cross-Border Delivery Considerations",
        caption: "International orders involve additional steps like customs clearance and VAT handling.",
        priority: false
      },
      {
        type: "paragraph",
        text: "For a cross-border order, establish:"
      },
      {
        type: "bullet-list",
        items: [
          "where the jewellery dispatches from;",
          "whether it crosses a customs border;",
          "which party is importer of record;",
          "whether VAT and duties are prepaid;",
          "documents required by the carrier;",
          "whether customs delays fall outside the quoted transit time; and",
          "who contacts the carrier if clearance stalls."
        ]
      },
      {
        type: "paragraph",
        text: "EU consumer guidance states that, unless a different time is specifically agreed, traders should generally deliver within 30 days. UK distance-selling rules have their own framework."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to buy lab-grown diamond jewellery online in Europe", href: "/blog/buy-certified-lab-grown-diamond-jewellery-online/" },
          { text: " for the wider cross-border checklist." }
        ]
      }
    ]
  },
  {
    heading: "A realistic arrival-date worksheet",
    content: [
      {
        type: "image",
        src: "/images/blog/jewellery-availability-production-time/52 (4).jpg",
        alt: "Delivery date planning worksheet for jewellery orders",
        title: "Arrival Date Planning Worksheet",
        caption: "Use this worksheet to track each stage and calculate a realistic delivery date.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Complete this before payment:"
      },
      {
        type: "table",
        headers: ["Stage", "Seller's estimate", "Earliest date", "Latest date"],
        rows: [
          ["Order/payment clearance", "", "", ""],
          ["Diamond/material allocation", "", "", ""],
          ["Production or alteration", "", "", ""],
          ["Engraving/personalisation", "", "", ""],
          ["Quality control", "", "", ""],
          ["Hallmark/report documentation", "", "", ""],
          ["Dispatch handling", "", "", ""],
          ["Carrier transit", "", "", ""],
          ["Customs contingency", "", "", ""],
          ["Expected arrival", "", "", ""],
          ["Event buffer", "", "", ""]
        ]
      },
      {
        type: "paragraph",
        text: "Use the latest date, not the earliest, when deciding whether the order is suitable for an event. Add a buffer for sizing corrections, missed delivery attempts or inspection after arrival."
      }
    ]
  },
  {
    heading: "Questions to ask before placing a time-sensitive order",
    content: [
      {
        type: "paragraph",
        text: "Send the seller these questions in one message:"
      },
      {
        type: "numbered-list",
        items: [
          "Is my exact selected variant physically finished?",
          "Which stages remain before dispatch?",
          "When does the quoted lead time begin?",
          "Are the days calendar or business days?",
          "Does sizing or engraving change the estimate?",
          "Are hallmarking and reports already complete?",
          "What is the earliest and latest dispatch date?",
          "Which carrier service will be used?",
          "Is customs clearance included in the estimate?",
          "Can you commit in writing to arrival by my essential date?",
          "What happens if that date is missed?",
          "Can I cancel before production begins?"
        ]
      },
      {
        type: "paragraph",
        text: "Keep the response with the order confirmation."
      }
    ]
  },
  {
    heading: "What to do when an order is delayed",
    content: [
      {
        type: "paragraph",
        text: "First identify the milestone that moved: sourcing, production, external documentation, dispatch, carrier transit or customs."
      },
      {
        type: "paragraph",
        text: "Then:"
      },
      {
        type: "bullet-list",
        items: [
          "request the revised date and reason in writing;",
          "ask whether work has begun and whether cancellation is available;",
          "preserve the original promised date;",
          "clarify whether the event deadline was accepted as essential;",
          "avoid approving changes without a revised schedule; and",
          "use the seller's formal complaint route if necessary."
        ]
      },
      {
        type: "paragraph",
        text: "EU guidance generally asks consumers to give an additional reasonable delivery period when the agreed date is missed. UK rights depend on the contract and circumstances."
      }
    ]
  },
  {
    heading: "Availability and timing red flags",
    content: [
      {
        type: "paragraph",
        text: "Pause when a product page shows:"
      },
      {
        type: "bullet-list",
        items: [
          "\"available\" with no defined status;",
          "one lead time for every size and custom option;",
          "\"ships in 10 days\" without business/calendar wording;",
          "production time presented as arrival time;",
          "no starting event for the lead-time clock;",
          "\"express shipping\" used to imply faster manufacturing;",
          "a guaranteed event date only given verbally;",
          "pre-order stock with no release basis;",
          "back-order dates repeatedly moving without notice;",
          "personalisation added without revised timing or return terms; or",
          "no process for delays."
        ]
      },
      {
        type: "paragraph",
        text: "A realistic range is more useful than an impossibly precise promise with no operational basis."
      }
    ]
  },
  {
    heading: "What Aurelia Royale should show",
    content: [
      {
        type: "paragraph",
        text: "Each Aurelia Royale variant should display one controlled availability label with a definition. The page and cart should show:"
      },
      {
        type: "bullet-list",
        items: [
          "exact variant status;",
          "remaining production stages;",
          "lead-time range;",
          "business or calendar days;",
          "timing start point and order cut-off;",
          "estimated dispatch date by destination;",
          "separate carrier transit range;",
          "personalisation impact;",
          "cross-border customs note; and",
          "delay, cancellation and return route."
        ]
      },
      {
        type: "paragraph",
        text: "Order-status emails should identify milestones such as confirmed, in production, quality control, ready for dispatch and dispatched."
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
          { text: "Jewellery availability is meaningful only when it applies to your exact variant. Production time tells you how long preparation or manufacture may take; dispatch time tells you when the seller expects to release the parcel; delivery time begins with the carrier.\n\n" },
          { text: "Separate these periods, confirm business-day rules and calculate a latest realistic arrival date. For proposals, weddings and gifts, communicate the essential date before ordering and obtain a written commitment or choose an already finished piece with enough buffer." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What does 'in stock' mean for jewellery?",
            answer: "It should mean relevant inventory is physically held, but your exact size or selected diamond may not be finished. Confirm the selected variant and remaining work."
          },
          {
            question: "What does 'ready to ship' mean?",
            answer: "It generally means production is complete, although payment review, verification, engraving, packing and courier scheduling may remain. Ask for the dispatch date."
          },
          {
            question: "How long does made-to-order jewellery take?",
            answer: "There is no universal period. Design, materials, setting complexity, sizing, hallmarking, quality control and workshop capacity determine the stated range."
          },
          {
            question: "Does production time include delivery?",
            answer: "Usually not unless explicitly stated. Add dispatch handling, carrier transit and any customs clearance to the production period."
          },
          {
            question: "What is the difference between dispatch and delivery?",
            answer: "Dispatch occurs when the seller hands the parcel to the carrier. Delivery occurs when the parcel reaches the recipient under the carrier's process."
          },
          {
            question: "Do weekends count in a jewellery lead time?",
            answer: "Only if the seller uses calendar days. Business-day estimates normally exclude weekends and may exclude local public holidays."
          },
          {
            question: "Can express shipping make jewellery production faster?",
            answer: "Not automatically. Express shipping shortens carrier transit. Production changes only if the workshop separately offers and confirms priority manufacture."
          },
          {
            question: "Does ring sizing add production time?",
            answer: "It can. A ready-made ring may need alteration, while some designs must be produced directly in the selected size. Ask for the revised dispatch window."
          },
          {
            question: "Does jewellery hallmarking add time?",
            answer: "It can when the finished article must be sent to an external assay office. Confirm whether hallmarking is complete or included in the quoted lead time."
          },
          {
            question: "What should I do if I need jewellery for a wedding?",
            answer: "State the essential date before ordering, request the latest guaranteed arrival in writing and include time to inspect, resize or resolve delivery problems."
          },
          {
            question: "Can made-to-order jewellery be returned?",
            answer: "Return and cancellation rights depend on the product, degree of personalisation, seller terms and applicable law. Read the specific policy before approving production."
          },
          {
            question: "What records should I keep for a delayed order?",
            answer: "Keep the selected product page, availability message, promised dates, event-date disclosure, order confirmation, seller correspondence and carrier tracking."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop with Confidence at Aurelia",
        subtitle: "Explore our collection with transparent availability timelines and reliable delivery tracking.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function JewelleryAvailabilityProductionTimePage() {
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
            How to Understand Jewellery Availability and Production Time
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
      <RelatedArticles currentSlug="jewellery-availability-production-time" />
      <NewsletterSection />
    </main>
  );
}
