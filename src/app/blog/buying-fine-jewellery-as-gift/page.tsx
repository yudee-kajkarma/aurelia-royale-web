import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "Buying Fine Jewellery as a Gift: Complete Checklist",
  description: "Choose fine jewellery as a gift with confidence. Check the recipient's style, size, metal, returns, personalisation, delivery, documents and aftercare.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/buying-fine-jewellery-as-gift/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/buying-fine-jewellery-as-gift/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/buying-fine-jewellery-as-gift/"},
      "headline":"What to Know Before Purchasing Fine Jewellery as a Gift",
      "description":"Choose fine jewellery as a gift with confidence. Check the recipient's style, size, metal, returns, personalisation, delivery, documents and aftercare.",
      "image":"https://www.aureliaroyale.com/images/blog/buying-fine-jewellery-as-gift.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Buying Lab-Grown Diamond Jewellery",
      "keywords":["buying fine jewellery as a gift","fine jewellery gift guide","diamond jewellery gift checklist","lab-grown diamond jewellery gift"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/buying-fine-jewellery-as-gift/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"Buying Fine Jewellery as a Gift","item":"https://www.aureliaroyale.com/blog/buying-fine-jewellery-as-gift/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/buying-fine-jewellery-as-gift/#faq",
      "mainEntity":[
        {"@type":"Question","name":"Is fine jewellery a good gift?","acceptedAnswer":{"@type":"Answer","text":"It can be a lasting gift when design, metal, size and symbolism suit the recipient and exchange or aftercare options are clear."}},
        {"@type":"Question","name":"What jewellery is safest when I do not know the size?","acceptedAnswer":{"@type":"Answer","text":"An adjustable necklace or known earring style is often lower risk than a fitted ring or rigid bangle, but preferences still matter."}},
        {"@type":"Question","name":"How can I find someone's ring size secretly?","acceptedAnswer":{"@type":"Answer","text":"Borrow a ring worn on the intended finger and have it measured, or ask a trusted person. Do not estimate from clothing size."}},
        {"@type":"Question","name":"Should I engrave jewellery before gifting it?","acceptedAnswer":{"@type":"Answer","text":"Only when wording, fit and preference are certain. Engraving can add time and restrict cancellation or returns."}},
        {"@type":"Question","name":"Can the recipient return jewellery with a gift receipt?","acceptedAnswer":{"@type":"Answer","text":"It depends on policy. A gift receipt may allow exchange while refunds remain tied to the original purchaser and payment method."}},
        {"@type":"Question","name":"When does the jewellery return window begin?","acceptedAnswer":{"@type":"Answer","text":"For many online purchases it begins when goods are delivered, not when the gift is opened. Confirm the final date."}},
        {"@type":"Question","name":"Can made-to-order jewellery be returned if it is a gift?","acceptedAnswer":{"@type":"Answer","text":"Rights depend on personalisation, seller terms and applicable law. Gift status does not automatically create a separate return right."}},
        {"@type":"Question","name":"How early should I order a jewellery gift?","acceptedAnswer":{"@type":"Answer","text":"Work backwards from the occasion, adding production, quality control, dispatch, transit, customs and time for inspection or sizing."}},
        {"@type":"Question","name":"Should a jewellery gift include its diamond report?","acceptedAnswer":{"@type":"Answer","text":"Yes, where a report applies. Keep a private copy of the report number and invoice."}},
        {"@type":"Question","name":"How do I keep jewellery delivery a surprise?","acceptedAnswer":{"@type":"Answer","text":"Use discreet outer packaging, your contact details and a secure address while retaining tracking, insurance and signature protection."}},
        {"@type":"Question","name":"What if the recipient prefers another metal colour?","acceptedAnswer":{"@type":"Answer","text":"Check exchange terms before buying. When uncertain, avoid engraving and preserve metal-choice flexibility."}},
        {"@type":"Question","name":"What documents should I keep after gifting jewellery?","acceptedAnswer":{"@type":"Answer","text":"Keep the invoice, order confirmation, payment record, report-number copy, delivery evidence and insurance or valuation documents."}}
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
        src: "/images/blog/buying-fine-jewellery-as-gift/54 (1).jpg",
        alt: "Fine jewellery gift selection and presentation",
        title: "Buying Fine Jewellery as a Gift",
        caption: "Fine jewellery can be a meaningful gift when chosen with the recipient's style and preferences in mind.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Fine jewellery can mark an anniversary, birthday, graduation or personal milestone for years. It can also be difficult to choose for someone else because the most important information—size, preferred metal, comfort and styling habits—belongs to the recipient."
      },
      {
        type: "paragraph",
        text: "The safest gift is not automatically the most expensive or elaborate. It is a well-specified piece that suits the person, arrives on time and can be exchanged, resized or serviced if expectations differ."
      },
      {
        type: "paragraph",
        text: "This guide helps you reduce uncertainty without turning the gift into an interrogation."
      },
      {
        type: "callout",
        title: "Quick answer: what should you check before gifting fine jewellery?",
        parts: [
          { text: "Confirm these 12 points:\n\n", bold: true },
          { text: "1. The recipient's jewellery style and typical scale.\n2. Preferred metal colour, metal type and any sensitivity.\n3. Whether the category requires an exact size.\n4. Diamond origin and complete product specification.\n5. Dimensions and finished weight for comfort.\n6. What is included: pair, chain, backs, box and documents.\n7. Whether the item is ready-made or made to order.\n8. Latest safe arrival date before the occasion.\n9. Gift receipt and whether the recipient can exchange directly.\n10. Return-window start date and condition requirements.\n11. Whether engraving or personalisation restricts cancellation or returns.\n12. Warranty, resizing, repair and aftercare.\n\nWhen preference or fit is uncertain, preserve flexibility: choose an adjustable or non-sized category, avoid irreversible personalisation and confirm exchange terms in writing." }
        ]
      }
    ]
  },
  {
    heading: "Start with the person, not the occasion",
    content: [
      {
        type: "paragraph",
        text: "\"Anniversary jewellery\" or \"graduation jewellery\" is not a style. Observe what the recipient actually wears."
      },
      {
        type: "paragraph",
        text: "Look for:"
      },
      {
        type: "bullet-list",
        items: [
          "yellow, white or rose-coloured metal;",
          "studs, drops, hoops, pendants, chains, rings or bracelets;",
          "minimal or more decorative scale;",
          "symmetrical or asymmetrical designs;",
          "colourless diamonds or coloured stones;",
          "one signature piece or several layered pieces;",
          "casual daily wear or occasional dressing; and",
          "preferred fastening types."
        ]
      },
      {
        type: "paragraph",
        text: "Photographs can help, but do not assume that a piece worn once is a favourite. A trusted friend or family member may know whether the recipient has mentioned a particular category."
      },
      {
        type: "paragraph",
        text: "The goal is not to copy what they own. It is to stay within their visual and practical comfort zone."
      }
    ]
  },
  {
    heading: "Choose the safest jewellery category for the information you have",
    content: [
      {
        type: "table",
        headers: ["What you know", "Lower-risk gift choice", "Higher-risk choice"],
        rows: [
          ["Style, but not size", "Adjustable necklace or pendant", "Fitted ring"],
          ["Wrist measurement", "Bracelet with appropriate adjustment", "Rigid bangle without confirmed fit"],
          ["Pierced ears and fastening preference", "Studs or known earring style", "Heavy drops or unfamiliar fastening"],
          ["Exact ring size and lifestyle", "Ring suited to intended wear", "Wide or non-resizable ring without fitting"],
          ["Very little", "Gift consultation, exchangeable classic piece or store credit", "Personalised, non-returnable design"]
        ]
      },
      {
        type: "image",
        src: "/images/blog/buying-fine-jewellery-as-gift/54 (2).jpg",
        alt: "Comparison of lower-risk and higher-risk fine jewellery gifts",
        title: "Choosing the Right Jewellery Gift",
        caption: "Different jewellery categories carry different levels of sizing and gifting risk.",
        priority: false
      },
      {
        type: "paragraph",
        text: "\"Lower risk\" does not mean universally suitable. Necklace length, earring weight and bracelet fit still matter."
      }
    ]
  },
  {
    heading: "How to choose without knowing ring size",
    content: [
      {
        type: "paragraph",
        text: "Ring sizing is the most difficult gifting variable. Guessing from height, clothing size or photographs is unreliable."
      },
      {
        type: "paragraph",
        text: "Safer options include:"
      },
      {
        type: "bullet-list",
        items: [
          "discreetly borrowing a ring worn on the intended finger;",
          "tracing its inside circumference or asking a jeweller to measure it;",
          "involving someone who knows the size;",
          "proposing with a temporary presentation ring; or",
          "choosing another jewellery category and selecting a ring together later."
        ]
      },
      {
        type: "paragraph",
        text: "Finger size varies between hands and fingers. A ring taken from the right ring finger may not fit the left. Wide bands can feel tighter than narrow bands in the same nominal size."
      },
      {
        type: "paragraph",
        text: "Before buying, confirm whether the design can be resized, by how much, at what cost and whether resizing affects returns or warranty."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to measure your ring size", href: "/blog/how-to-measure-ring-size/" },
          { text: " only when the recipient can participate accurately." }
        ]
      }
    ]
  },
  {
    heading: "Check metal preference and sensitivity",
    content: [
      {
        type: "paragraph",
        text: "Metal colour is visible; alloy composition is technical. Confirm both."
      },
      {
        type: "paragraph",
        text: "Look at the recipient's existing collection and check:"
      },
      {
        type: "bullet-list",
        items: [
          "yellow, white or rose appearance;",
          "gold, platinum or another disclosed metal;",
          "fineness;",
          "solid or plated construction;",
          "plating maintenance;",
          "earring post and back materials; and",
          "known sensitivities."
        ]
      },
      {
        type: "paragraph",
        text: "Do not infer metal from colour alone. White gold, platinum, silver and plated jewellery can look similar. \"Hypoallergenic\" should not replace a complete material description or medical advice."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to check the metal used in diamond jewellery", href: "/blog/check-metal-used-diamond-jewellery/" },
          { text: " before selecting the variant." }
        ]
      }
    ]
  },
  {
    heading: "Decide whether laboratory-grown diamonds suit the recipient",
    content: [
      {
        type: "paragraph",
        text: "Lab-grown diamonds are real diamonds with essentially the same crystal structure and optical properties as natural diamonds, but their origin should be disclosed clearly."
      },
      {
        type: "paragraph",
        text: "Some recipients actively prefer laboratory-grown diamonds; others may have a strong expectation about origin. A surprise gift should not depend on hiding that distinction."
      },
      {
        type: "paragraph",
        text: "The product page and documents should state:"
      },
      {
        type: "bullet-list",
        items: [
          "laboratory-grown origin;",
          "individual and total carat weights;",
          "cut, colour and clarity information;",
          "report issuer and coverage where relevant;",
          "precious metal and fineness; and",
          "whether coloured stones are natural, treated or laboratory-created."
        ]
      },
      {
        type: "paragraph",
        text: "If you are unsure about the recipient's view, discuss the value and design openly or select the piece together."
      }
    ]
  },
  {
    heading: "Check dimensions, weight and comfort",
    content: [
      {
        type: "paragraph",
        text: "Macro photography makes jewellery appear larger. Use millimetres and grams to anticipate the real scale."
      },
      {
        type: "paragraph",
        text: "For earrings, check face-up dimensions, drop and weight per earring. For necklaces, check chain length, adjustment points, pendant size and whether the chain is included. For bracelets, check wearable inner length rather than only flat length. For rings, check head width, setting height and shank width."
      },
      {
        type: "paragraph",
        text: "Compare the measurements with a piece the recipient wears comfortably."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to check jewellery dimensions and weight", href: "/blog/check-jewellery-product-dimensions-weight/" },
          { text: " before relying on \"delicate\", \"substantial\" or \"lightweight\"." }
        ]
      }
    ]
  },
  {
    heading: "Confirm exactly what arrives",
    content: [
      {
        type: "paragraph",
        text: "An elegant image may contain components that are not included."
      },
      {
        type: "paragraph",
        text: "Check:"
      },
      {
        type: "bullet-list",
        items: [
          "single earring or pair;",
          "pendant alone or pendant with chain;",
          "chain length and adjuster;",
          "earring backs;",
          "report and authenticity documents;",
          "hallmark information;",
          "care instructions;",
          "warranty information;",
          "presentation box; and",
          "gift note or receipt."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use the complete " },
          { text: "diamond jewellery product-specification checklist", href: "/blog/diamond-jewellery-product-specifications-checklist/" },
          { text: " before payment." }
        ]
      }
    ]
  },
  {
    heading: "Ready-made or made to order for a gift?",
    content: [
      {
        type: "paragraph",
        text: "Ready-made jewellery is generally safer for a close deadline because the finished piece exists and may be inspected. Made-to-order jewellery can provide the correct size, metal or diamond option but requires production time and may have different cancellation or return conditions."
      },
      {
        type: "paragraph",
        text: "Choose ready-made when:"
      },
      {
        type: "bullet-list",
        items: [
          "the event is close;",
          "the exact item is suitable;",
          "inspection and predictable dispatch matter; or",
          "recipient preference is uncertain and flexibility matters."
        ]
      },
      {
        type: "paragraph",
        text: "Choose made to order when:"
      },
      {
        type: "bullet-list",
        items: [
          "the exact size or configuration is known;",
          "the recipient has requested the specification;",
          "production time is available; and",
          "cancellation, variation and returns are understood."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Compare the two models in " },
          { text: "ready-made vs made-to-order diamond jewellery", href: "/blog/ready-made-vs-made-to-order-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Plan backwards from the gift date",
    content: [
      {
        type: "paragraph",
        text: "The jewellery should arrive early enough to inspect, not on the morning of the occasion."
      },
      {
        type: "image",
        src: "/images/blog/buying-fine-jewellery-as-gift/54 (3).jpg",
        alt: "Timeline for ordering fine jewellery before a special occasion",
        title: "Gift Planning Timeline",
        caption: "Order early enough to allow for production, inspection and any necessary adjustments.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Allow time for:"
      },
      {
        type: "bullet-list",
        items: [
          "payment review;",
          "production or resizing;",
          "hallmarking and documentation;",
          "quality control;",
          "insured dispatch;",
          "carrier transit and customs;",
          "missed delivery attempts;",
          "inspection; and",
          "a sizing correction or exchange."
        ]
      },
      {
        type: "paragraph",
        text: "Tell the seller if the date is essential and obtain the latest agreed arrival date in writing. Express shipping does not shorten workshop production unless priority manufacture is separately confirmed."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "jewellery availability and production time", href: "/blog/jewellery-availability-production-time/" },
          { text: " to calculate a realistic schedule." }
        ]
      }
    ]
  },
  {
    heading: "Protect the surprise during delivery",
    content: [
      {
        type: "paragraph",
        text: "Fine jewellery often travels with tracking, insurance and signature requirements. A parcel sent to the recipient's home can reveal the surprise through alerts, branded packaging or a required signature."
      },
      {
        type: "paragraph",
        text: "Ask:"
      },
      {
        type: "bullet-list",
        items: [
          "whether the outer packaging is discreet;",
          "what sender name appears on the label;",
          "whether order values appear externally;",
          "which phone number and email receive alerts;",
          "whether a signature or identification is required;",
          "whether workplace or collection-point delivery is permitted; and",
          "who is responsible after a nominated third party accepts it."
        ]
      },
      {
        type: "paragraph",
        text: "Never ask a seller or carrier to weaken security simply to preserve the surprise."
      }
    ]
  },
  {
    heading: "Understand gift receipts, invoices and ownership of the return",
    content: [
      {
        type: "paragraph",
        text: "A gift receipt may hide the price, but it does not necessarily allow the recipient to receive a cash refund. The original purchaser may remain the contracting customer and refunds may return to the original payment method."
      },
      {
        type: "paragraph",
        text: "Confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "whether the recipient can exchange without the buyer present;",
          "whether proof of purchase is required;",
          "whether price is hidden on included documents;",
          "whether reports and warranties must stay with the piece;",
          "which payment method receives a refund; and",
          "whether an exchange changes warranty or return timing."
        ]
      },
      {
        type: "paragraph",
        text: "Keep the invoice privately, but do not separate the jewellery permanently from its report, care and warranty documents."
      }
    ]
  },
  {
    heading: "Check when the return window begins",
    content: [
      {
        type: "paragraph",
        text: "This is a major gifting risk. A product may be delivered weeks before the occasion, while the return period begins on delivery—not when the recipient opens it."
      },
      {
        type: "paragraph",
        text: "EU guidance currently provides a 14-day withdrawal period for many distance purchases, generally beginning when goods are delivered, with exceptions including goods made to order or clearly personalised. UK rules have their own requirements and exceptions. Store policies may offer longer seasonal windows."
      },
      {
        type: "paragraph",
        text: "Ask for the exact final return date based on your delivery and gift dates. Also confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "required condition and security tags;",
          "whether trying on is allowed;",
          "insured return method;",
          "return shipping cost;",
          "treatment of resized or engraved pieces; and",
          "remedies for goods that are faulty or not as described."
        ]
      },
      {
        type: "paragraph",
        text: "Commercial return restrictions do not remove applicable statutory rights for faulty goods. Obtain country-specific advice where necessary."
      }
    ]
  },
  {
    heading: "Personalise only when you are certain",
    content: [
      {
        type: "paragraph",
        text: "Engraving can make a gift meaningful, but it can introduce spelling risk, add production time and restrict cancellation or withdrawal."
      },
      {
        type: "paragraph",
        text: "Before approving personalisation:"
      },
      {
        type: "bullet-list",
        items: [
          "verify spelling, accents, punctuation and date format;",
          "check capitalisation and font;",
          "review placement and size;",
          "approve a written proof where possible;",
          "confirm revised dispatch date;",
          "confirm return and resize consequences; and",
          "save the final approval."
        ]
      },
      {
        type: "paragraph",
        text: "When preference or fit is uncertain, present the piece first and arrange engraving afterward."
      }
    ]
  },
  {
    heading: "Documentation to give—and documentation to keep",
    content: [
      {
        type: "paragraph",
        text: "Give the recipient:"
      },
      {
        type: "bullet-list",
        items: [
          "relevant diamond or jewellery report;",
          "product specification;",
          "care instructions;",
          "warranty and aftercare process;",
          "gift receipt or exchange instructions; and",
          "seller contact information."
        ]
      },
      {
        type: "paragraph",
        text: "Keep securely:"
      },
      {
        type: "bullet-list",
        items: [
          "price invoice;",
          "payment record;",
          "order confirmation;",
          "report-number copy;",
          "delivery evidence; and",
          "insurer or valuation documents where applicable."
        ]
      },
      {
        type: "paragraph",
        text: "Documentation is part of the gift's long-term care, not packaging to discard."
      }
    ]
  },
  {
    heading: "Fine-jewellery gift checklist",
    content: [
      {
        type: "image",
        src: "/images/blog/buying-fine-jewellery-as-gift/54 (4).jpg",
        alt: "Fine jewellery gift buying checklist",
        title: "Fine Jewellery Gift Checklist",
        caption: "Use this checklist to confirm every important detail before placing your order.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Complete this for the selected variant, not the default product page."
      },
      {
        type: "table",
        headers: ["Check", "Confirmed?", "Notes"],
        rows: [
          ["Recipient's style and metal preference", "", ""],
          ["Category and correct size/length", "", ""],
          ["Diamond and metal specification", "", ""],
          ["Dimensions and comfortable weight", "", ""],
          ["Pair, chain and accessories included", "", ""],
          ["Ready-made or made to order", "", ""],
          ["Arrival date with buffer", "", ""],
          ["Discreet insured delivery", "", ""],
          ["Gift receipt and exchange method", "", ""],
          ["Return-window final date", "", ""],
          ["Personalisation consequences", "", ""],
          ["Report, warranty and aftercare", "", ""]
        ]
      }
    ]
  },
  {
    heading: "Red flags",
    content: [
      {
        type: "paragraph",
        text: "Pause when:"
      },
      {
        type: "bullet-list",
        items: [
          "size is guessed with no resize plan;",
          "the metal is described only by colour;",
          "diamond origin is unclear;",
          "the chain or earring pair is not explicitly included;",
          "\"giftable\" is used without a return date;",
          "engraving is added before its consequences are shown;",
          "the parcel cannot be insured or tracked;",
          "the product is expected to arrive immediately before the event;",
          "the recipient cannot exchange without the buyer; or",
          "warranty and reports are omitted from the gift."
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale should offer gift buyers",
    content: [
      {
        type: "paragraph",
        text: "Aurelia Royale should provide:"
      },
      {
        type: "bullet-list",
        items: [
          "a gift-mode checkout with discreet packaging choices;",
          "a clear gift-receipt explanation;",
          "recipient exchange procedure;",
          "event-date and dispatch confirmation;",
          "extended seasonal return dates where commercially offered;",
          "personalisation proof and warning;",
          "size and length guides;",
          "document wallet with report and care information; and",
          "optional post-gift resizing or engraving."
        ]
      },
      {
        type: "paragraph",
        text: "Product pages should never use \"perfect gift\" as a substitute for dimensions, fit and return information."
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
          { text: "Buying fine jewellery as a gift requires two decisions: choosing a piece the recipient is likely to love and protecting their ability to wear or exchange it.\n\n" },
          { text: "Start with observed style, metal preference and practical comfort. Avoid guessing a fitted size when a safer category or later selection is available. Confirm the complete specification, arrival date, discreet delivery, gift receipt, final return date and personalisation consequences before payment.\n\n" },
          { text: "The most thoughtful choice is one that preserves the recipient's agency while still carrying the meaning you intended." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Is fine jewellery a good gift?",
            answer: "It can be a lasting gift when the design, metal, size and symbolism suit the recipient and practical exchange or aftercare options are clear."
          },
          {
            question: "What jewellery is safest when I do not know the size?",
            answer: "An adjustable necklace or a known earring style is often lower risk than a fitted ring or rigid bangle, but dimensions and preferences still matter."
          },
          {
            question: "How can I find someone's ring size secretly?",
            answer: "Borrow a ring worn on the intended finger and have it measured, or ask a trusted person. Do not estimate from clothing size or appearance."
          },
          {
            question: "Should I engrave jewellery before gifting it?",
            answer: "Only when the wording, fit and recipient preference are certain. Engraving can add time and restrict cancellation or returns."
          },
          {
            question: "Can the recipient return jewellery with a gift receipt?",
            answer: "It depends on the seller's policy. A gift receipt may allow exchange while refunds remain tied to the original purchaser and payment method."
          },
          {
            question: "When does the jewellery return window begin?",
            answer: "For many online purchases it begins when goods are delivered, not when the gift is opened. Confirm the precise final return date with the seller."
          },
          {
            question: "Can made-to-order jewellery be returned if it is a gift?",
            answer: "Rights depend on the degree of personalisation, seller terms and applicable law. Do not assume gift status creates a separate return right."
          },
          {
            question: "How early should I order a jewellery gift?",
            answer: "Work backwards from the occasion, adding production, quality control, dispatch, transit, customs and time for inspection or sizing correction."
          },
          {
            question: "Should a jewellery gift include its diamond report?",
            answer: "Yes, where a report applies. It helps the recipient understand and care for the piece. Keep a private copy of the report number and invoice."
          },
          {
            question: "How do I keep jewellery delivery a surprise?",
            answer: "Use discreet outer packaging, your own contact details and a secure delivery address while retaining tracking, insurance and signature protection."
          },
          {
            question: "What if the recipient prefers another metal colour?",
            answer: "Check exchange terms before buying. When uncertain, avoid engraving and choose a product or consultation that preserves metal-choice flexibility."
          },
          {
            question: "What documents should I keep after gifting jewellery?",
            answer: "Keep the invoice, order confirmation, payment record, report-number copy, delivery evidence and any insurance or valuation documents."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find the Perfect Gift at Aurelia",
        subtitle: "Explore our collection of lab-grown diamond jewellery with transparent specifications and gift-friendly options.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function BuyingFineJewelleryAsGiftPage() {
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
            What to Know Before Purchasing Fine Jewellery as a Gift
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
      <RelatedArticles currentSlug="buying-fine-jewellery-as-gift" />
      <NewsletterSection />
    </main>
  );
}