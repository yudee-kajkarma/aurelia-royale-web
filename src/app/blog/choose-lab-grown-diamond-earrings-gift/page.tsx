import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Choose Diamond Earrings as a Gift",
  description: "Choose lab-grown diamond earrings as a gift using the recipient's style, piercing, preferred size, metal, fastening and your return deadline.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/choose-lab-grown-diamond-earrings-gift/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/choose-lab-grown-diamond-earrings-gift/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/choose-lab-grown-diamond-earrings-gift/"},
      "headline":"How to Choose Lab-Grown Diamond Earrings as a Gift",
      "description":"Choose lab-grown diamond earrings as a gift using the recipient's style, piercing, preferred size, metal, fastening and your return deadline.",
      "image":"https://www.aureliaroyale.com/images/blog/choose-lab-grown-diamond-earrings-gift.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["how to choose lab-grown diamond earrings as a gift","lab-grown diamond earrings gift","diamond earrings gift guide"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/choose-lab-grown-diamond-earrings-gift/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How to Choose Lab-Grown Diamond Earrings as a Gift","item":"https://www.aureliaroyale.com/blog/choose-lab-grown-diamond-earrings-gift/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/choose-lab-grown-diamond-earrings-gift/#faq",
      "mainEntity":[
        {"@type":"Question","name":"Are lab-grown diamond earrings a good gift?","acceptedAnswer":{"@type":"Answer","text":"They can be when the recipient likes diamond jewellery and the style, scale, metal and fastening reflect their preferences."}},
        {"@type":"Question","name":"Are stud earrings the safest diamond earring gift?","acceptedAnswer":{"@type":"Answer","text":"Studs are often versatile, but only when the recipient has suitable piercings and wears a similar scale and fastening."}},
        {"@type":"Question","name":"How do I choose diamond earring size as a gift?","acceptedAnswer":{"@type":"Answer","text":"Measure or compare a favourite pair and use finished millimetre dimensions rather than carat weight alone."}},
        {"@type":"Question","name":"Is earring carat weight for one ear or the pair?","acceptedAnswer":{"@type":"Answer","text":"It is often the pair total. Confirm per-ear, principal-stone and accent-stone weights separately."}},
        {"@type":"Question","name":"Which metal colour should I choose?","acceptedAnswer":{"@type":"Answer","text":"Use the colour the recipient wears most often, then verify the actual metal, fineness, plating and component composition."}},
        {"@type":"Question","name":"What if I do not know whether their ears are pierced?","acceptedAnswer":{"@type":"Answer","text":"Do not guess. Ask discreetly, consult someone reliable or choose the gift together."}},
        {"@type":"Question","name":"Are screw backs best for a gift?","acceptedAnswer":{"@type":"Answer","text":"Not universally. Choose a fastening the recipient already uses comfortably; dexterity and preference matter."}},
        {"@type":"Question","name":"Should gift earrings have diamond certificates?","acceptedAnswer":{"@type":"Answer","text":"Use the documentation promised for that product. It may cover principal stones, a matched pair or the finished jewellery."}},
        {"@type":"Question","name":"Can I personalise diamond earrings?","acceptedAnswer":{"@type":"Answer","text":"You can where offered, but personalisation may affect returns. Confirm the terms and the recipient's preference first."}},
        {"@type":"Question","name":"How early should I order diamond earrings for a gift?","acceptedAnswer":{"@type":"Answer","text":"Work backwards from the date and include production, quality control, dispatch, insured transit and customs time plus a buffer."}},
        {"@type":"Question","name":"Should I include the invoice with the gift?","acceptedAnswer":{"@type":"Answer","text":"Keep price presentation discreet, but ensure the recipient has the documents needed for exchange, warranty, service and insurance."}},
        {"@type":"Question","name":"What if the recipient does not like the earrings?","acceptedAnswer":{"@type":"Answer","text":"Follow the saved gift-return procedure promptly, keeping the earrings unworn, tags attached and packaging and documents complete."}}
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
        src: "/images/blog/choose-lab-grown-diamond-earrings-gift/64 (1).jpg",
        alt: "How to choose lab-grown diamond earrings as a gift - complete gift buying guide",
        title: "How to Choose Lab-Grown Diamond Earrings as a Gift",
        caption: "Choose lab-grown diamond earrings as a gift using the recipient's style, piercing, size, metal and fastening preferences.",
        priority: true
      },
      {
        type: "paragraph",
        text: "Lab-grown diamond earrings can mark a birthday, anniversary, graduation or personal milestone without requiring a ring size. Yet earrings are not automatically an easy gift. The wearer still has preferences about scale, metal, movement, fastening and comfort."
      },
      {
        type: "paragraph",
        text: "The safest approach is to treat what the recipient already wears as evidence. Choose the closest confident match, preserve the option to exchange it and make the presentation personal rather than making the jewellery irreversible."
      }
    ]
  },
  {
    heading: "Quick answer: how do you choose diamond earrings for someone else?",
    content: [
      {
        type: "paragraph",
        text: "Choose in this order:"
      },
      {
        type: "numbered-list",
        items: [
          "Confirm that the recipient has pierced ears and identify which piercings they use.",
          "Observe whether they wear studs, drops, hoops or a mixture.",
          "Measure or compare a favourite pair for visible size.",
          "Identify their usual metal colour and, if possible, alloy preference.",
          "Choose a familiar fastening they can operate comfortably.",
          "Check pair-total versus per-ear carat weight.",
          "Verify diamond origin, quality and report scope.",
          "Confirm production and insured-delivery timing.",
          "Read gift-return conditions before personalising anything.",
          "Include the documents while keeping price presentation discreet."
        ]
      },
      {
        type: "paragraph",
        text: "When you have little evidence, choose versatility and exchangeability rather than guessing a bold style."
      }
    ]
  },
  {
    heading: "Start with a five-minute jewellery audit",
    content: [
      {
        type: "paragraph",
        text: "Look at photographs or the recipient's jewellery collection without invading private storage. Record patterns rather than one exceptional piece."
      },
      {
        type: "image",
        src: "/images/blog/choose-lab-grown-diamond-earrings-gift/64 (2).jpg",
        alt: "Jewellery audit guide for choosing diamond earrings as a gift",
        title: "Five-Minute Jewellery Audit",
        caption: "Observe what the recipient already wears to make a confident earring gift choice.",
        priority: false
      },
      {
        type: "table",
        headers: ["Observe", "What it may tell you", "What not to assume"],
        rows: [
          ["Mostly small studs", "They may prefer compact, low-movement earrings", "That they dislike every larger design"],
          ["Frequent drops", "They may enjoy length and movement", "That any drop length will be comfortable"],
          ["Consistent metal colour", "Useful colour preference", "Exact alloy or skin compatibility"],
          ["Simple shapes", "Preference for restrained design", "A specific diamond grade"],
          ["Multiple piercings", "Need for a small footprint or coordinated stack", "Available space without measurements"],
          ["Same backs repeatedly", "Familiar fastening preference", "That worn backs remain secure"]
        ]
      },
      {
        type: "paragraph",
        text: "If possible, ask a trusted person who knows their jewellery habits. Avoid revealing a high-value surprise to several people unnecessarily."
      }
    ]
  },
  {
    heading: "1. Confirm piercing type and position",
    content: [
      {
        type: "paragraph",
        text: "Do not assume pierced ears. Clip-on or other non-pierced fittings require purpose-designed construction; a standard post is not suitable."
      },
      {
        type: "paragraph",
        text: "For pierced ears, notice whether the gift is intended for:"
      },
      {
        type: "bullet-list",
        items: [
          "the main lobe piercing;",
          "a second or third lobe piercing;",
          "cartilage; or",
          "an established earring stack."
        ]
      },
      {
        type: "paragraph",
        text: "The product must be designed for that placement. Piercing healing, gauge and medical suitability are matters for a qualified piercer or healthcare professional, not a jewellery gift guide."
      }
    ]
  },
  {
    heading: "2. Choose between studs, drops and hoops",
    content: [
      {
        type: "paragraph",
        text: "Studs: the lower-risk surprise"
      },
      {
        type: "paragraph",
        text: "Studs have a compact profile and limited movement. They are often the most adaptable option when the recipient already wears studs regularly."
      },
      {
        type: "paragraph",
        text: "Check setting height, post length and back type. A visually simple stud can still feel wrong if it tips or the post is uncomfortable."
      },
      {
        type: "paragraph",
        text: "Drop earrings: choose only with evidence"
      },
      {
        type: "paragraph",
        text: "Drops create length and movement. They can feel more occasion-led and expressive, but comfort depends on full length, weight and fastening."
      },
      {
        type: "paragraph",
        text: "Choose them when the recipient already wears comparable drops or has clearly admired a particular design."
      },
      {
        type: "paragraph",
        text: "Hoops and huggie-style earrings"
      },
      {
        type: "paragraph",
        text: "These can be versatile, but fit depends on internal opening and piercing position. Do not rely only on external diameter."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to choose lab-grown diamond earrings", href: "/blog/how-to-choose-lab-grown-diamond-earrings/" },
          { text: " for the category comparison." }
        ]
      }
    ]
  },
  {
    heading: "3. Match their usual scale",
    content: [
      {
        type: "paragraph",
        text: "Photographs can make earrings difficult to size. If you can safely access a frequently worn pair, measure its finished width, length or hoop diameter with a ruler without altering it."
      },
      {
        type: "paragraph",
        text: "Compare:"
      },
      {
        type: "bullet-list",
        items: [
          "finished front-facing footprint;",
          "setting depth;",
          "full drop length;",
          "product weight where known; and",
          "post and back proportions."
        ]
      },
      {
        type: "paragraph",
        text: "Carat weight is not the same as visible size. It measures diamond weight, and the listing may state a combined total for both ears.",
        parts: [
          { text: "Use " },
          { text: "the diamond earring size guide", href: "/blog/select-right-size-diamond-earrings/" },
          { text: " before choosing a larger or smaller look." }
        ]
      }
    ]
  },
  {
    heading: "4. Understand the carat description",
    content: [
      {
        type: "paragraph",
        text: "A pair described as 1.00 carat total weight may contain approximately 0.50 carat per ear when it uses two diamonds. A halo, cluster or drop can distribute the total across many stones."
      },
      {
        type: "paragraph",
        text: "The page should separate:"
      },
      {
        type: "bullet-list",
        items: [
          "pair-total carat weight;",
          "per-ear weight;",
          "each principal diamond;",
          "accent-diamond total; and",
          "stone count."
        ]
      },
      {
        type: "paragraph",
        text: "For a gift, visible dimensions are easier to compare with what the recipient already owns than an unfamiliar carat figure."
      }
    ]
  },
  {
    heading: "5. Choose metal from evidence",
    content: [
      {
        type: "paragraph",
        text: "Observe whether the recipient usually wears white-, yellow- or rose-coloured metal. Then verify the actual product metal and fineness; colour alone does not identify alloy composition."
      },
      {
        type: "paragraph",
        text: "Check:"
      },
      {
        type: "bullet-list",
        items: [
          "gold, platinum or other stated metal;",
          "fineness;",
          "plating or finish;",
          "post and back composition; and",
          "hallmark information where applicable."
        ]
      },
      {
        type: "paragraph",
        text: "In the UK, hallmarking rules apply to precious-metal articles above relevant exemption weights. A hallmark concerns metal fineness, not the diamonds."
      },
      {
        type: "paragraph",
        text: "If the recipient has mentioned sensitivity, do not guess that a colour or marketing term is safe. Ask discreetly or choose the gift together."
      }
    ]
  },
  {
    heading: "6. Match a familiar fastening",
    content: [
      {
        type: "paragraph",
        text: "Friction or butterfly backs are familiar and quick. Screw backs take longer to align. Lever backs integrate a closing mechanism, while hooks may use separate stoppers."
      },
      {
        type: "paragraph",
        text: "Consider dexterity, long nails and what the recipient already manages comfortably. No fastening is loss-proof, and unfamiliar hardware can make an otherwise thoughtful gift frustrating."
      }
    ]
  },
  {
    heading: "7. Assess diamond quality as a pair",
    content: [
      {
        type: "paragraph",
        text: "The 4Cs describe cut, colour, clarity and carat weight, but earrings also need visual matching. Principal diamonds should have compatible outline, measurements, colour, clarity and light response."
      },
      {
        type: "paragraph",
        text: "Avoid selecting solely by the highest colour or clarity grade. A balanced, well-matched pair at the intended visible size is the more relevant goal."
      },
      {
        type: "paragraph",
        text: "For multi-stone earrings, check alignment and consistency across corresponding areas. For coloured-centre designs, confirm the identity, origin and treatment disclosure of every stone type."
      }
    ]
  },
  {
    heading: "8. Verify certification without overselling it",
    content: [
      {
        type: "paragraph",
        text: "Earrings may have separate reports for principal diamonds, matched-pair documentation, a finished-jewellery report or retailer specifications for smaller stones."
      },
      {
        type: "paragraph",
        text: "IGI states that its finished laboratory-grown diamond jewellery reports can identify mounted gemstones and precious-metal information, with centre-stone assessment supplied as the mounting permits."
      },
      {
        type: "paragraph",
        text: "Confirm the issuer, report type, report number and exact scope. Verify it through the issuer's official service. A grading report is not a warranty, valuation or promise of future value."
      },
      {
        type: "paragraph",
        text: "Include the promised documents with the gift.",
        parts: [
          { text: "Read " },
          { text: "what should come with certified diamond jewellery", href: "/blog/what-included-certified-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "9. Set a budget around the complete gift",
    content: [
      {
        type: "paragraph",
        text: "Budget for more than the headline diamond weight:"
      },
      {
        type: "bullet-list",
        items: [
          "stones and quality;",
          "precious metal and construction;",
          "documentation;",
          "insured delivery;",
          "VAT, duty and currency costs where applicable;",
          "possible exchange shipping; and",
          "insurance after gifting where appropriate."
        ]
      },
      {
        type: "paragraph",
        text: "Do not present lab-grown diamond earrings as an investment. Buy them for design, wear and meaning."
      }
    ]
  },
  {
    heading: "10. Protect the surprise without harming flexibility",
    content: [
      {
        type: "paragraph",
        text: "Read the return and exchange policy before checkout. Check the deadline, whether it runs from delivery, condition and tag requirements, return insurance, refund route and any gift-receipt option."
      },
      {
        type: "paragraph",
        text: "Online buyers in the UK and EU may have statutory cancellation and faulty-goods rights, subject to applicable law and exceptions. Personalised goods can be treated differently. Do not engrave, alter or make a non-standard specification unless you are confident and understand the consequences."
      },
      {
        type: "paragraph",
        text: "A personal note is safer than irreversible personalisation."
      }
    ]
  },
  {
    heading: "11. Plan production and delivery backwards",
    content: [
      {
        type: "paragraph",
        text: "Separate:"
      },
      {
        type: "numbered-list",
        items: [
          "manufacture or preparation;",
          "quality control and hallmarking where required;",
          "dispatch;",
          "insured transit; and",
          "customs processing where applicable."
        ]
      },
      {
        type: "paragraph",
        text: "Order with a buffer. \"Available\" does not always mean ready to dispatch. If the date is essential, obtain a written delivery commitment rather than relying on a generic estimate."
      },
      {
        type: "paragraph",
        text: "For a surprise, use a secure address where an adult can receive the parcel without revealing its contents. Never request insecure unattended delivery for high-value jewellery."
      }
    ]
  },
  {
    heading: "12. Present the gift with useful information",
    content: [
      {
        type: "paragraph",
        text: "The recipient should receive:"
      },
      {
        type: "bullet-list",
        items: [
          "the earrings and correct backs;",
          "grading or jewellery report access where promised;",
          "product specification;",
          "metal and hallmark information;",
          "care guidance;",
          "warranty details; and",
          "gift receipt or exchange instructions."
        ]
      },
      {
        type: "paragraph",
        text: "Keep the full invoice separately if the price should remain private, but do not withhold information needed for service, return, warranty or insurance."
      }
    ]
  },
  {
    heading: "Low-information gift strategy",
    content: [
      {
        type: "image",
        src: "/images/blog/choose-lab-grown-diamond-earrings-gift/64 (4).jpg",
        alt: "Low-information gift strategy for choosing diamond earrings",
        title: "Low-Information Gift Strategy",
        caption: "When you have limited information, prioritize versatility and exchangeability over guessing a bold style.",
        priority: false
      },
      {
        type: "paragraph",
        text: "If you know little about the recipient's preferences:"
      },
      {
        type: "numbered-list",
        items: [
          "Do not guess about pierced ears or sensitivities.",
          "Choose together, or offer a private selection appointment.",
          "If a physical surprise matters, use a clearly exchangeable pair close to what they already wear.",
          "Avoid engraving and non-returnable customisation.",
          "Preserve every tag, document and deadline."
        ]
      },
      {
        type: "paragraph",
        text: "The surprise can be the gesture; the final design does not have to be a secret."
      }
    ]
  },
  {
    heading: "Gift-buying checklist",
    content: [
      {
        type: "image",
        src: "/images/blog/choose-lab-grown-diamond-earrings-gift/64 (3).jpg",
        alt: "Diamond earring gift buying checklist",
        title: "Gift-Buying Checklist",
        caption: "Use this checklist to choose lab-grown diamond earrings as a gift with confidence.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Recipient:"
      },
      {
        type: "bullet-list",
        items: [
          "Piercing type and intended position are known.",
          "Preferred category, scale and metal colour are evidenced.",
          "Familiar fastening is identified.",
          "No unsupported sensitivity assumption is being made."
        ]
      },
      {
        type: "paragraph",
        text: "Product:"
      },
      {
        type: "bullet-list",
        items: [
          "Dimensions and per-ear weight are clear.",
          "Pair-total and individual carat weights are separated.",
          "Diamonds are matched and origin is disclosed.",
          "Metal, fineness and hallmark information are stated.",
          "Report issuer and scope are verifiable."
        ]
      },
      {
        type: "paragraph",
        text: "Order:"
      },
      {
        type: "bullet-list",
        items: [
          "Production and transit fit the gift date.",
          "Delivery is insured and discreet.",
          "Gift return and exchange terms are saved.",
          "Personalisation does not remove needed flexibility.",
          "Documents and care guidance will accompany the gift."
        ]
      }
    ]
  },
  {
    heading: "Mistakes to avoid",
    content: [
      {
        type: "paragraph",
        text: "Avoid choosing by carat alone, assuming pierced ears, treating metal colour as composition, guessing a bold drop length, buying unfamiliar backs, personalising too early, confusing a report with a warranty, or scheduling delivery with no buffer."
      }
    ]
  },
  {
    heading: "What Aurelia Royale should offer gift buyers",
    content: [
      {
        type: "paragraph",
        text: "Aurelia should provide exact dimensions, pair and per-ear weights, fastening details, metal and report scope, neutral outer packaging, gift messages, gift receipts, clear exchange instructions, delivery-date visibility and an explicit list of package contents."
      },
      {
        type: "paragraph",
        text: "Gift pages should never hide information to preserve romance. Confidence is part of the experience."
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
          { text: "The best lab-grown diamond earring gift reflects the recipient's established taste. Observe what they wear, match the scale and metal, choose familiar hardware and verify every specification.\n\n" },
          { text: "Then protect the gesture with realistic delivery timing and a usable exchange route. Thoughtful evidence beats a generic \"perfect gift\" label every time." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Are lab-grown diamond earrings a good gift?",
            answer: "They can be when the recipient likes diamond jewellery and the style, scale, metal and fastening reflect their preferences."
          },
          {
            question: "Are stud earrings the safest diamond earring gift?",
            answer: "Studs are often versatile, but only when the recipient has suitable piercings and wears a similar scale and fastening."
          },
          {
            question: "How do I choose diamond earring size as a gift?",
            answer: "Measure or compare a favourite pair and use finished millimetre dimensions rather than carat weight alone."
          },
          {
            question: "Is earring carat weight for one ear or the pair?",
            answer: "It is often the pair total. Confirm per-ear, principal-stone and accent-stone weights separately."
          },
          {
            question: "Which metal colour should I choose?",
            answer: "Use the colour the recipient wears most often, then verify the actual metal, fineness, plating and component composition."
          },
          {
            question: "What if I do not know whether their ears are pierced?",
            answer: "Do not guess. Ask discreetly, consult someone reliable or choose the gift together."
          },
          {
            question: "Are screw backs best for a gift?",
            answer: "Not universally. Choose a fastening the recipient already uses comfortably; dexterity and preference matter."
          },
          {
            question: "Should gift earrings have diamond certificates?",
            answer: "Use the documentation promised for that product. It may cover principal stones, a matched pair or the finished jewellery."
          },
          {
            question: "Can I personalise diamond earrings?",
            answer: "You can where offered, but personalisation may affect returns. Confirm the terms and the recipient's preference first."
          },
          {
            question: "How early should I order diamond earrings for a gift?",
            answer: "Work backwards from the date and include production, quality control, dispatch, insured transit and customs time plus a buffer."
          },
          {
            question: "Should I include the invoice with the gift?",
            answer: "Keep price presentation discreet, but ensure the recipient has the documents needed for exchange, warranty, service and insurance."
          },
          {
            question: "What if the recipient does not like the earrings?",
            answer: "Follow the saved gift-return procedure promptly, keeping the earrings unworn, tags attached and packaging and documents complete."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find the Perfect Diamond Earring Gift at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond earrings with complete specifications, transparent documentation and gift-friendly options.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function ChooseLabGrownDiamondEarringsGiftPage() {
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
            How to Choose Lab-Grown Diamond Earrings as a Gift
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
      <RelatedArticles currentSlug="choose-lab-grown-diamond-earrings-gift" />
      <NewsletterSection />
    </main>
  );
}