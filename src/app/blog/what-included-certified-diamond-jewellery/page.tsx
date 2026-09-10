import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "What Comes with Certified Diamond Jewellery?",
  description: "Check which report, specification, hallmark details, invoice, warranty, care guidance and return information should accompany certified diamond jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/"},
      "headline":"What Should Be Included with Certified Diamond Jewellery?",
      "description":"Check which report, specification, hallmark details, invoice, warranty, care guidance and return information should accompany certified diamond jewellery.",
      "image":"https://www.aureliaroyale.com/images/blog/what-included-certified-diamond-jewellery.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Buying Lab-Grown Diamond Jewellery",
      "keywords":["what should be included with certified diamond jewellery","certified diamond jewellery documents","diamond jewellery certificate included","jewellery documentation checklist"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"What Comes with Certified Diamond Jewellery?","item":"https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/#faq",
      "mainEntity":[
        {"@type":"Question","name":"Should certified diamond jewellery come with a certificate?","acceptedAnswer":{"@type":"Answer","text":"It should include the report or official digital access promised before purchase, with issuer, format and coverage stated."}},
        {"@type":"Question","name":"Does one diamond report cover the entire jewellery piece?","acceptedAnswer":{"@type":"Answer","text":"Usually not. A loose-diamond report covers one stated stone. A mounted-jewellery report has its own defined scope."}},
        {"@type":"Question","name":"Should every small diamond have its own report?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. Small accents may be documented through retailer specifications, ranges or a jewellery report."}},
        {"@type":"Question","name":"How do I verify an IGI jewellery report?","acceptedAnswer":{"@type":"Answer","text":"Enter its number on IGI's official verification page and compare the returned details with the document and jewellery."}},
        {"@type":"Question","name":"Should the report number match a laser inscription?","acceptedAnswer":{"@type":"Answer","text":"Yes when a report-number inscription was promised. It may require magnification and be difficult to view after mounting."}},
        {"@type":"Question","name":"Is a hallmark the same as a diamond certificate?","acceptedAnswer":{"@type":"Answer","text":"No. A hallmark concerns precious-metal fineness. A diamond report addresses diamond characteristics within its scope."}},
        {"@type":"Question","name":"Is an appraisal included with certified jewellery?","acceptedAnswer":{"@type":"Answer","text":"Not automatically. A valuation or appraisal is a separate document with its own purpose, date and methodology."}},
        {"@type":"Question","name":"Does a diamond certificate act as a warranty?","acceptedAnswer":{"@type":"Answer","text":"No. A grading report documents examined characteristics. Warranty coverage is a separate agreement."}},
        {"@type":"Question","name":"Can a certified jewellery report be digital only?","acceptedAnswer":{"@type":"Answer","text":"Yes, if that format was disclosed and official access is available. Save a permitted copy and verification details."}},
        {"@type":"Question","name":"What if the report is missing from my parcel?","acceptedAnswer":{"@type":"Answer","text":"Do not wear or alter the jewellery. Check digital delivery and contact the seller promptly in writing."}},
        {"@type":"Question","name":"What if the report details do not match the jewellery?","acceptedAnswer":{"@type":"Answer","text":"Preserve tags and packaging, document the discrepancy and contact the seller immediately."}},
        {"@type":"Question","name":"How should I store diamond jewellery documents?","acceptedAnswer":{"@type":"Answer","text":"Store originals securely away from the jewellery and keep encrypted digital copies of reports, invoice, specification and warranty."}}
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
        src: "/images/blog/what-included-certified-diamond-jewellery/58 (1).jpg",
        alt: "Certified diamond jewellery package with report, invoice and documentation",
        title: "What Comes with Certified Diamond Jewellery?",
        caption: "Certified diamond jewellery should arrive with a laboratory report, specification sheet, invoice, warranty and care guidance.",
        priority: true
      },
      {
        type: "paragraph",
        text: "When jewellery is advertised as \"certified\", buyers often expect a certificate in the box. That expectation is incomplete because diamond jewellery can be documented in different ways."
      },
      {
        type: "paragraph",
        text: "A significant centre diamond may have its own grading report. A pair may have separate or matched documentation. A finished multi-stone piece may have a mounted-jewellery report. Small accents may be covered only by the retailer's stated specification."
      },
      {
        type: "paragraph",
        text: "The correct delivery package should therefore answer three questions:"
      },
      {
        type: "numbered-list",
        items: [
          "What laboratory document was promised, and what does it cover?",
          "Does the delivered jewellery match that document and the order?",
          "Which retailer and transaction records govern the complete piece?"
        ]
      }
    ]
  },
  {
    heading: "Quick answer: what should arrive with certified diamond jewellery?",
    content: [
      {
        type: "paragraph",
        text: "Where applicable, the package should include or provide secure digital access to:"
      },
      {
        type: "numbered-list",
        items: [
          "The promised independent diamond or jewellery report.",
          "Report number and official verification route.",
          "Laser-inscription information for report-linked diamonds.",
          "A final product specification sheet.",
          "Diamond origin, carat and quality disclosures.",
          "Metal type, fineness and hallmark information.",
          "Itemised invoice and payment record.",
          "Product identifier or serial number.",
          "Warranty terms and registration instructions.",
          "Care, cleaning and inspection guidance.",
          "Return, exchange and repair procedure.",
          "Seller contact and insured-shipping records."
        ]
      },
      {
        type: "paragraph",
        text: "Not every small diamond needs an individual report. What matters is that the seller states the documentation model before purchase and delivers exactly what was promised."
      }
    ]
  },
  {
    heading: "Start by identifying the report type",
    content: [
      {
        type: "paragraph",
        text: "The word \"certificate\" does not tell you which object was examined."
      },
      {
        type: "image",
        src: "/images/blog/what-included-certified-diamond-jewellery/58 (2).jpg",
        alt: "Comparison of different diamond jewellery report types and their coverage",
        title: "Diamond Jewellery Report Types Compared",
        caption: "Different report types cover different aspects of certified diamond jewellery.",
        priority: false
      },
      {
        type: "table",
        headers: ["Document", "Usually covers", "Does not automatically cover"],
        rows: [
          ["Loose-diamond grading report", "One diamond examined loose", "Metal, setting, accents, workmanship or retail value"],
          ["Matched-pair report", "Two stated diamonds under the issuer's format", "Complete earrings and their metal unless stated"],
          ["Mounted-jewellery report", "The described finished item and mounted stones within scope", "Matters not examined or grades blocked by mounting"],
          ["Retailer specification card", "Seller's description of the complete product", "Independent laboratory assessment"],
          ["Valuation or appraisal", "Value opinion under its stated purpose and date", "A grading report unless grading is explicitly included"],
          ["Warranty document", "Contractual aftercare or repair coverage", "Diamond grading or product value"]
        ]
      },
      {
        type: "paragraph",
        text: "These documents complement rather than replace one another."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "what certified lab-grown diamond jewellery actually means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: " before assuming the entire piece was independently certified." }
        ]
      }
    ]
  },
  {
    heading: "1. The promised laboratory report",
    content: [
      {
        type: "paragraph",
        text: "The seller should deliver the exact report type described on the product page or order confirmation. It may be:"
      },
      {
        type: "bullet-list",
        items: [
          "an original printed report;",
          "a tamper-resistant report card;",
          "a secure digital report;",
          "an official downloadable copy; or",
          "a report number with authorised online access."
        ]
      },
      {
        type: "paragraph",
        text: "Confirm the issuing organisation, format and replacement process before purchase. Do not assume a retailer-created card is the independent report."
      },
      {
        type: "paragraph",
        text: "The report should be legible, complete and free from unexplained alteration. If only digital access is provided, save a local copy where the issuer allows it and preserve the verification URL."
      }
    ]
  },
  {
    heading: "2. Report number and official verification",
    content: [
      {
        type: "paragraph",
        text: "Enter the number on the issuing laboratory's official verification page—not a search result, seller screenshot or unrelated QR destination."
      },
      {
        type: "paragraph",
        text: "Compare:"
      },
      {
        type: "bullet-list",
        items: [
          "report number;",
          "report date;",
          "laboratory-grown identification;",
          "shape and cutting style;",
          "carat weight;",
          "measurements;",
          "colour and clarity;",
          "comments and treatment disclosure;",
          "photograph where included; and",
          "inscription information."
        ]
      },
      {
        type: "paragraph",
        text: "The verified record should agree with the delivered document and order. Minor formatting differences may occur between print and digital formats, but material facts should not conflict."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to verify an IGI certificate number", href: "/blog/verify-igi-certificate-number/" },
          { text: " for a step-by-step check." }
        ]
      }
    ]
  },
  {
    heading: "3. Laser-inscription information",
    content: [
      {
        type: "paragraph",
        text: "Some report-covered diamonds carry a microscopic report number on the girdle. The inscription can link the diamond with its report when examined under suitable magnification."
      },
      {
        type: "paragraph",
        text: "If an inscription was promised, the documentation should state:"
      },
      {
        type: "bullet-list",
        items: [
          "inscription text or number;",
          "which diamond it belongs to;",
          "where it is located; and",
          "whether mounting may make it difficult to view."
        ]
      },
      {
        type: "paragraph",
        text: "An inscription is not a substitute for verifying the report. A lack of inscription does not automatically make a report invalid unless inscription was part of the promised specification."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "what a diamond laser inscription is", href: "/blog/diamond-laser-inscription/" },
          { text: " before attempting to locate it." }
        ]
      }
    ]
  },
  {
    heading: "4. Final jewellery specification sheet",
    content: [
      {
        type: "paragraph",
        text: "The laboratory report may cover only one stone. The retailer's final specification should describe the whole product."
      },
      {
        type: "paragraph",
        text: "It should record:"
      },
      {
        type: "bullet-list",
        items: [
          "product name and code;",
          "sold unit: single, pair or set;",
          "selected size, length and metal variant;",
          "principal and accent stone count;",
          "individual and total carat weights with scope;",
          "grade, range or minimum status;",
          "laboratory-grown origin;",
          "metal, fineness, colour and construction;",
          "dimensions and approximate finished weight;",
          "chain, clasp, backs and included components; and",
          "engraving or personalisation."
        ]
      },
      {
        type: "paragraph",
        text: "This sheet should match the basket and invoice. It is especially important where small accents do not have individual reports."
      }
    ]
  },
  {
    heading: "5. Hallmark and precious-metal information",
    content: [
      {
        type: "paragraph",
        text: "A diamond report does not necessarily authenticate precious-metal fineness. In the UK, qualifying precious-metal articles are subject to hallmarking requirements, with statutory weight exemptions. Other European systems differ."
      },
      {
        type: "image",
        src: "/images/blog/what-included-certified-diamond-jewellery/58 (3).jpg",
        alt: "Hallmark and precious-metal information for certified diamond jewellery",
        title: "Hallmark and Precious-Metal Details",
        caption: "Hallmark information should be included with certified diamond jewellery to verify metal fineness.",
        priority: false
      },
      {
        type: "paragraph",
        text: "The delivered paperwork should identify:"
      },
      {
        type: "bullet-list",
        items: [
          "metal type and fineness;",
          "hallmarking system where applicable;",
          "any relevant exemption;",
          "plating or mixed-metal construction; and",
          "approximate finished weight."
        ]
      },
      {
        type: "paragraph",
        text: "Inspect the piece for the expected mark without damaging it. A hallmark addresses metal within its scope; it does not grade the diamonds."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: " to reconcile the marks." }
        ]
      }
    ]
  },
  {
    heading: "6. An itemised invoice",
    content: [
      {
        type: "paragraph",
        text: "The invoice is the transaction record. It should identify:"
      },
      {
        type: "bullet-list",
        items: [
          "legal seller name and contact details;",
          "invoice and order number;",
          "purchase and tax date;",
          "exact product and selected variant;",
          "report number where practical;",
          "price, discount and currency;",
          "VAT or other tax treatment;",
          "delivery charges; and",
          "billing and delivery information."
        ]
      },
      {
        type: "paragraph",
        text: "For a gift, keep the price invoice privately and provide the recipient with any permitted gift receipt, exchange instructions and product documents."
      }
    ]
  },
  {
    heading: "7. Warranty and aftercare terms",
    content: [
      {
        type: "paragraph",
        text: "A laboratory report is not a warranty. Warranty documentation should explain:"
      },
      {
        type: "bullet-list",
        items: [
          "coverage period;",
          "manufacturing faults covered;",
          "exclusions for wear, impact or loss;",
          "inspection and maintenance requirements;",
          "resizing or third-party repair consequences;",
          "shipping responsibility;",
          "claim procedure; and",
          "whether registration is required."
        ]
      },
      {
        type: "paragraph",
        text: "Separate legal rights from any voluntary commercial warranty. EU consumers have minimum legal-guarantee protections for qualifying goods, while exact remedies depend on circumstances and national rules."
      }
    ]
  },
  {
    heading: "8. Care and inspection guidance",
    content: [
      {
        type: "paragraph",
        text: "Care instructions should match the delivered materials and construction."
      },
      {
        type: "paragraph",
        text: "They may include:"
      },
      {
        type: "bullet-list",
        items: [
          "safe at-home cleaning method;",
          "products or chemicals to avoid;",
          "storage guidance;",
          "clasp and prong inspection frequency;",
          "plating care;",
          "professional cleaning advice; and",
          "steps after impact or a loose-stone concern."
        ]
      },
      {
        type: "paragraph",
        text: "Generic \"avoid all water\" cards are less useful than instructions tied to the actual metal, stones and setting."
      }
    ]
  },
  {
    heading: "9. Return, exchange and discrepancy procedure",
    content: [
      {
        type: "paragraph",
        text: "The package or digital account should provide the current process for:"
      },
      {
        type: "bullet-list",
        items: [
          "reporting transit damage;",
          "reporting missing documents;",
          "resolving report or specification mismatch;",
          "requesting a return authorisation;",
          "insured return shipping;",
          "security tags and condition rules;",
          "exchange or resizing; and",
          "refund timing."
        ]
      },
      {
        type: "paragraph",
        text: "Save the policy that applied at purchase. A warranty does not replace a return route, and a grading report does not resolve a delivery discrepancy by itself."
      }
    ]
  },
  {
    heading: "What may reasonably not be included?",
    content: [
      {
        type: "paragraph",
        text: "A complete package does not necessarily contain:"
      },
      {
        type: "bullet-list",
        items: [
          "individual reports for every tiny accent;",
          "a valuation or insurance appraisal;",
          "a laboratory guarantee of retail price;",
          "a certificate of workmanship from the grading laboratory;",
          "a physical report when official digital delivery was disclosed; or",
          "a laser inscription on every diamond."
        ]
      },
      {
        type: "paragraph",
        text: "The absence of these items is not a defect unless they were promised or required. Transparency before checkout is the standard."
      }
    ]
  },
  {
    heading: "How to inspect the package on arrival",
    content: [
      {
        type: "paragraph",
        text: "Before removing security tags or wearing the piece:"
      },
      {
        type: "numbered-list",
        items: [
          "record the parcel condition;",
          "compare the product code and selected variant;",
          "inventory all promised documents and components;",
          "verify the report through the issuer;",
          "match report details and inscription information;",
          "inspect hallmark and metal description;",
          "check dimensions and included chain, backs or clasp;",
          "photograph any discrepancy; and",
          "contact the seller promptly in writing."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to choose diamond jewellery without seeing it in person", href: "/blog/choose-diamond-jewellery-without-seeing-in-person/" },
          { text: " for the full delivery-day inspection." }
        ]
      }
    ]
  },
  {
    heading: "Certified jewellery delivery checklist",
    content: [
      {
        type: "image",
        src: "/images/blog/what-included-certified-diamond-jewellery/58 (4).jpg",
        alt: "Certified diamond jewellery delivery checklist",
        title: "Certified Jewellery Delivery Checklist",
        caption: "Use this checklist to verify every document and component when certified diamond jewellery arrives.",
        priority: false
      },
      {
        type: "table",
        headers: ["Item", "Promised", "Received", "Verified"],
        rows: [
          ["Exact jewellery and variant", "", "", ""],
          ["Laboratory report", "", "", ""],
          ["Official digital verification", "", "", ""],
          ["Inscription information", "", "", ""],
          ["Final specification sheet", "", "", ""],
          ["Hallmark/metal information", "", "", ""],
          ["Itemised invoice", "", "", ""],
          ["Warranty", "", "", ""],
          ["Care guidance", "", "", ""],
          ["Return/exchange instructions", "", "", ""],
          ["Chain, backs and accessories", "", "", ""],
          ["Insured-delivery record", "", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Document red flags",
    content: [
      {
        type: "paragraph",
        text: "Pause when:"
      },
      {
        type: "bullet-list",
        items: [
          "\"certified\" appears without an issuer or report type;",
          "the report number cannot be verified officially;",
          "the report covers a different weight or shape;",
          "a retailer card is presented as independent grading;",
          "one diamond report is implied to cover all accents and metal;",
          "the inscription number conflicts with the report;",
          "the invoice omits the selected variant;",
          "hallmark information conflicts with the metal description;",
          "warranty terms are unavailable after payment; or",
          "the seller asks you to discard reports or tags before inspection."
        ]
      }
    ]
  },
  {
    heading: "How to store the records",
    content: [
      {
        type: "paragraph",
        text: "Keep the original report dry, flat and separate from the jewellery. Store encrypted digital copies of:"
      },
      {
        type: "bullet-list",
        items: [
          "report and verification result;",
          "invoice;",
          "product specification;",
          "warranty;",
          "order confirmation;",
          "seller correspondence;",
          "delivery evidence; and",
          "photographs of the jewellery and inscription where available."
        ]
      },
      {
        type: "paragraph",
        text: "Do not publish a full report number, home address or high-value delivery details publicly. Give documents to a future insurer, repairer or owner only as appropriate."
      }
    ]
  },
  {
    heading: "What Aurelia Royale should include",
    content: [
      {
        type: "paragraph",
        text: "Each applicable Aurelia Royale order should include a document manifest stating:"
      },
      {
        type: "bullet-list",
        items: [
          "report type, issuer, number and covered item;",
          "official verification link;",
          "final complete specification;",
          "metal and hallmark details;",
          "itemised invoice;",
          "warranty and registration;",
          "care and inspection guidance;",
          "return and repair procedure; and",
          "list of physical accessories included."
        ]
      },
      {
        type: "paragraph",
        text: "A QR code may make access convenient, but the printed or emailed text should remain usable if the code fails."
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
          { text: "Certified diamond jewellery should arrive with more than an unexplained card. The buyer needs the promised laboratory document, an official verification route and a clear statement of what the report covers. The complete piece also needs a retailer specification, metal information, invoice, warranty, care and return procedure.\n\n" },
          { text: "Reconcile every record with the delivered item before wearing or altering it. A report describes its scope; the rest of the package establishes the full purchase." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Should certified diamond jewellery come with a certificate?",
            answer: "It should include the report or official digital access promised before purchase. The seller should state the issuer, format and coverage."
          },
          {
            question: "Does one diamond report cover the entire jewellery piece?",
            answer: "Usually not. A loose-diamond report covers the stated stone. A mounted-jewellery report has a broader but explicitly defined scope."
          },
          {
            question: "Should every small diamond have its own report?",
            answer: "Not necessarily. Small accents may be documented through retailer specifications, grade ranges or a jewellery report."
          },
          {
            question: "How do I verify an IGI jewellery report?",
            answer: "Enter its number on IGI's official verification page and compare the returned details with the document and jewellery."
          },
          {
            question: "Should the report number match a laser inscription?",
            answer: "Yes when a report-number inscription was promised. The inscription may require magnification and can be hard to view after mounting."
          },
          {
            question: "Is a hallmark the same as a diamond certificate?",
            answer: "No. A hallmark concerns precious-metal fineness within its system. A diamond report addresses the diamond characteristics within its scope."
          },
          {
            question: "Is an appraisal included with certified jewellery?",
            answer: "Not automatically. A valuation or appraisal is a separate document with its own purpose, date, issuer and methodology."
          },
          {
            question: "Does a diamond certificate act as a warranty?",
            answer: "No. A grading report documents examined characteristics. Warranty coverage is a separate agreement from the retailer or manufacturer."
          },
          {
            question: "Can a certified jewellery report be digital only?",
            answer: "Yes, if that format was disclosed and official access is available. Save a permitted copy and the verification details."
          },
          {
            question: "What if the report is missing from my parcel?",
            answer: "Do not wear or alter the jewellery. Check digital delivery and contact the seller promptly in writing with the order details."
          },
          {
            question: "What if the report details do not match the jewellery?",
            answer: "Preserve tags and packaging, document the discrepancy and contact the seller immediately. Do not attempt modification or destructive testing."
          },
          {
            question: "How should I store diamond jewellery documents?",
            answer: "Store originals securely away from the jewellery and keep encrypted digital copies of reports, invoice, specification, warranty and photographs."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop Certified Jewellery at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond jewellery with complete documentation, verified reports and transparent specifications.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function WhatIncludedCertifiedDiamondJewelleryPage() {
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
            What Should Be Included with Certified Diamond Jewellery?
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
      <RelatedArticles currentSlug="what-included-certified-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}