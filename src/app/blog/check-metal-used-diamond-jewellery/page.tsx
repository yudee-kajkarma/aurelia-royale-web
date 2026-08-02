import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Check the Metal Used in Diamond Jewellery",
  description: "Learn how to identify gold, platinum, silver and plated jewellery using product details, fineness marks, hallmarks, weight and professional testing.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#article",
      "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/"},
      "headline": "How to Check the Metal Used in Diamond Jewellery",
      "description": "Learn how to identify gold, platinum, silver and plated jewellery using product details, fineness marks, hallmarks, weight and professional testing.",
      "image": "https://www.aureliaroyale.com/images/blog/check-metal-used-diamond-jewellery.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "publisher": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "inLanguage": "en-GB",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": ["how to check the metal used in diamond jewellery", "identify jewellery metal", "jewellery hallmark guide UK", "white gold vs platinum identification"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/"},
        {"@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/"},
        {"@type": "ListItem", "position": 3, "name": "How to Check the Metal Used in Diamond Jewellery", "item": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#faq",
      "mainEntity": [
        {"@type": "Question", "name": "How can I tell what metal my diamond ring is made from?", "acceptedAnswer": {"@type": "Answer", "text": "Check product documents and the inner shank for grouped hallmark or fineness marks. If evidence is missing or conflicting, request professional non-destructive testing."}},
        {"@type": "Question", "name": "What does 750 mean on jewellery?", "acceptedAnswer": {"@type": "Answer", "text": "750 commonly expresses 750 parts gold per thousand, equivalent to 18K gold. Interpret it with surrounding marks and legal context."}},
        {"@type": "Question", "name": "What does 585 mean on jewellery?", "acceptedAnswer": {"@type": "Answer", "text": "585 commonly indicates 585 parts gold per thousand, generally associated with 14K gold. Confirm the complete hallmark or product documentation."}},
        {"@type": "Question", "name": "Is a 925 stamp a hallmark?", "acceptedAnswer": {"@type": "Answer", "text": "925 commonly indicates sterling-silver fineness, but a lone number is not necessarily a complete recognised hallmark. Check the applicable country's rules."}},
        {"@type": "Question", "name": "Can I identify white gold and platinum by colour?", "acceptedAnswer": {"@type": "Answer", "text": "No. White gold, platinum, silver and plated metals can look similar. Check fineness and hallmark information or obtain professional testing."}},
        {"@type": "Question", "name": "Does a hallmark prove that the diamonds are real?", "acceptedAnswer": {"@type": "Answer", "text": "No. Hallmarks concern precious-metal content. Diamond identity and quality require separate disclosure, testing or a relevant laboratory report."}},
        {"@type": "Question", "name": "Does a sponsor's mark identify the jewellery maker?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. In the UK, it identifies the registered party responsible for submitting the article for hallmarking; that party may not have manufactured it."}},
        {"@type": "Question", "name": "Is unhallmarked gold jewellery always fake?", "acceptedAnswer": {"@type": "Answer", "text": "No. A lawful weight exemption may apply, or the item may come from a jurisdiction with different rules. Its description still needs appropriate evidence."}},
        {"@type": "Question", "name": "What is the difference between solid gold and gold-plated jewellery?", "acceptedAnswer": {"@type": "Answer", "text": "Solid gold uses the stated gold alloy through the relevant structure. Gold-plated jewellery has a gold surface layer over another metal."}},
        {"@type": "Question", "name": "Can a jeweller test metal without damaging the jewellery?", "acceptedAnswer": {"@type": "Answer", "text": "Often, yes. X-ray fluorescence and other screening methods may be non-destructive, though plating and mixed construction can limit results."}},
        {"@type": "Question", "name": "Does heavier jewellery mean higher-purity gold?", "acceptedAnswer": {"@type": "Answer", "text": "No. Weight depends on dimensions, construction, stones and alloy density. Purity requires fineness evidence, hallmarking or testing."}},
        {"@type": "Question", "name": "What metal details should an online jewellery page provide?", "acceptedAnswer": {"@type": "Answer", "text": "It should state metal type, fineness, colour, solid or plated construction, base metal, hallmark information, approximate finished weight and component-level differences."}}
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
        src: "/images/blog/check-metal-used-diamond-jewellery/50 (1).jpg",
        alt: "Checking metal hallmark stamps inside a diamond ring shank",
        title: "Checking Jewellery Metal",
        caption: "To identify the metal in diamond jewellery, check the product details and look for hallmark and fineness stamps.",
        priority: true
      },
      {
        type: "paragraph",
        text: "White diamond jewellery may be platinum, white gold, silver or a plated base metal. Yellow jewellery may be solid gold, gold vermeil or gold-plated metal. Rose colour can come from a gold alloy or a surface coating."
      },
      {
        type: "paragraph",
        text: "Appearance alone does not identify the material."
      },
      {
        type: "paragraph",
        text: "To check the metal used in diamond jewellery, begin with the written product specification. Then inspect any fineness and hallmark marks, confirm whether the construction is solid, hollow or plated, compare the information with the invoice and—when uncertainty matters—ask an assay office or qualified jewellery professional to test it."
      },
      {
        type: "paragraph",
        text: "No single shortcut works in every country or on every piece. This guide explains the evidence in the order you should use it."
      },
      {
        type: "callout",
        title: "Quick answer: how do you identify jewellery metal?",
        parts: [
          { text: "Use this seven-step check:\n\n", bold: true },
          { text: "1. Read the complete metal description, not only the colour.\n2. Find the fineness value, such as 585 or 750 gold or 950 platinum.\n3. Inspect the complete hallmark where one is legally required.\n4. Distinguish a sponsor, maker or brand stamp from a hallmark.\n5. Confirm whether the piece is solid, hollow, plated, filled or vermeil.\n6. Match the marks to the product page, invoice and selected variant.\n7. Obtain non-destructive professional testing if the evidence conflicts or the piece is unmarked.\n\nA stamp by itself can be incomplete, counterfeit or misunderstood. Use the whole evidence chain." }
        ]
      }
    ]
  },
  {
    heading: "Start with the product description",
    content: [
      {
        type: "paragraph",
        text: "A complete metal specification should state:"
      },
      {
        type: "bullet-list",
        items: [
          "metal type: gold, platinum, silver, palladium or another material;",
          "fineness: for example, 14K, 18K or a millesimal number;",
          "colour: white, yellow or rose where relevant;",
          "construction: solid, hollow, plated, filled or vermeil;",
          "plating metal and underlying metal;",
          "hallmark information where applicable;",
          "approximate finished metal or product weight; and",
          "mixed-metal components, if used."
        ]
      },
      {
        type: "paragraph",
        text: "“Gold colour”, “white metal”, “gold finish” and “platinum tone” describe appearance. They do not promise precious-metal content. Likewise, “18K gold plated” does not mean the whole object is 18K gold: it describes the surface layer."
      },
      {
        type: "paragraph",
        text: "The selected variant matters. A product may be offered in 14K yellow gold, 18K white gold and platinum from one page. Ensure the basket and invoice repeat the variant you chose."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use the broader " },
          { text: "diamond jewellery product-specification checklist", href: "/blog/diamond-jewellery-product-specifications-checklist/" },
          { text: " to record the diamond, measurements and order terms alongside the metal." }
        ]
      }
    ]
  },
  {
    heading: "Metal type and fineness are different facts",
    content: [
      {
        type: "paragraph",
        text: "The metal type identifies the precious metal. Fineness states the proportion of that precious metal within the alloy."
      },
      {
        type: "paragraph",
        text: "Pure gold is soft, so jewellery gold is commonly alloyed with other metals to alter strength, colour and working properties. Platinum, silver and palladium jewellery also use defined fineness standards."
      },
      {
        type: "paragraph",
        text: "Millesimal fineness expresses precious-metal content in parts per thousand. Common descriptions include:"
      },
      {
        type: "table",
        headers: ["Commercial description", "Common millesimal expression", "Meaning"],
        rows: [
          ["9K gold", "375", "375 parts gold per thousand"],
          ["14K gold", "585", "585 parts gold per thousand"],
          ["18K gold", "750", "750 parts gold per thousand"],
          ["Sterling silver", "925", "925 parts silver per thousand"],
          ["Platinum 950", "950", "950 parts platinum per thousand"]
        ]
      },
      {
        type: "paragraph",
        text: "These examples help interpret a specification; recognition rules and permitted standards vary by jurisdiction. A number outside its hallmark context should not be treated as conclusive proof."
      }
    ]
  },
  {
    heading: "What a UK hallmark tells you",
    content: [
      {
        type: "image",
        src: "/images/blog/check-metal-used-diamond-jewellery/50 (2).jpg",
        alt: "Close-up of a UK hallmark showing sponsor, assay office, and fineness marks",
        title: "UK Hallmark Stamps",
        caption: "A legal UK hallmark contains a sponsor's mark, a fineness mark, and the assay office logo."
      },
      {
        type: "paragraph",
        text: "In the UK, articles described as gold, silver, platinum or palladium generally require hallmarking when they exceed the applicable statutory exemption weight. Online sales remain within the hallmarking framework."
      },
      {
        type: "paragraph",
        text: "The minimum compulsory UK hallmark contains three components:"
      },
      {
        type: "numbered-list",
        items: [
          "Sponsor’s mark: identifies the person or business registered with the assay office that accepts responsibility for submitting the article. It is not necessarily the manufacturer.",
          "Millesimal fineness mark: identifies the precious metal and guaranteed fineness through its number and surrounding shield shape.",
          "Assay office mark: identifies the UK assay office that tested and marked the article."
        ]
      },
      {
        type: "paragraph",
        text: "Optional elements can include a traditional fineness symbol and date letter. The date letter is not required for a valid minimum hallmark."
      },
      {
        type: "paragraph",
        text: "This matters because a single “750” stamp or brand initials are not the same as a complete UK hallmark. When buying online, look for hallmark information and the statutory Dealer’s Notice where required."
      }
    ]
  },
  {
    heading: "What a hallmark does—and does not—prove",
    content: [
      {
        type: "paragraph",
        text: "A recognised hallmark supports precious-metal type and minimum fineness within its legal system. It does not establish:"
      },
      {
        type: "bullet-list",
        items: [
          "whether a diamond is natural or laboratory-grown;",
          "diamond carat weight, colour, clarity or cut;",
          "gemstone identity or treatment;",
          "setting quality;",
          "retail value;",
          "country of jewellery manufacture; or",
          "who physically made the piece."
        ]
      },
      {
        type: "paragraph",
        text: "The sponsor’s mark establishes responsibility for hallmarking, not necessarily authorship. The assay office mark shows where the article was tested and marked, not where it was designed or manufactured."
      },
      {
        type: "paragraph",
        parts: [
          { text: "For diamond evidence, inspect the relevant grading or jewellery report separately. Our guide to " },
          { text: "what certified lab-grown diamond jewellery means", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" },
          { text: " explains the difference." }
        ]
      }
    ]
  },
  {
    heading: "Hallmarks across Europe",
    content: [
      {
        type: "paragraph",
        text: "Europe does not use one identical domestic hallmarking system for every country. National requirements, accepted marks, compulsory rules and exemptions can differ."
      },
      {
        type: "paragraph",
        text: "The Convention on the Control and Marking of Articles of Precious Metals provides the Common Control Mark framework between contracting states. A qualifying Convention hallmark combines responsibility, fineness, assay-office and Common Control Mark information, supporting cross-border recognition among member states."
      },
      {
        type: "paragraph",
        text: "For a European purchase:"
      },
      {
        type: "bullet-list",
        items: [
          "identify the seller’s country;",
          "ask which hallmarking system applies;",
          "request a clear photograph or written description of the marks;",
          "check whether the piece is below a legal exemption weight; and",
          "use the relevant national assay or hallmarking authority to interpret unfamiliar symbols."
        ]
      },
      {
        type: "paragraph",
        text: "Do not apply UK rules automatically to every EU product or assume that the absence of a UK hallmark makes a lawful foreign item counterfeit."
      }
    ]
  },
  {
    heading: "How to inspect a hallmark safely",
    content: [
      {
        type: "paragraph",
        text: "Hallmarks are often small. Look in places that protect the mark without disrupting appearance:"
      },
      {
        type: "bullet-list",
        items: [
          "inside a ring shank;",
          "near a bracelet or necklace clasp;",
          "on a pendant bail;",
          "on the back of an earring or its post; or",
          "on a small hallmark tag attached to a chain."
        ]
      },
      {
        type: "paragraph",
        text: "Use bright diffuse light and a jeweller’s loupe or phone macro lens. Photograph the mark from several angles. Do not scratch, file or chemically test the jewellery yourself; these methods can damage plating, metal, settings or stones."
      },
      {
        type: "paragraph",
        text: "Read the group of symbols in context. Decorative engraving, serial numbers, model codes and diamond laser inscriptions may sit near metal marks but serve different purposes."
      }
    ]
  },
  {
    heading: "Stamp, hallmark, maker’s mark and report: know the difference",
    content: [
      {
        type: "table",
        headers: ["Evidence", "What it may show", "What it cannot prove alone"],
        rows: [
          ["Fineness stamp", "Claimed alloy fineness", "Independent testing or complete legal hallmark"],
          ["Sponsor’s mark", "Registered party responsible for submission", "Physical manufacturer"],
          ["Brand or maker’s mark", "Brand, workshop or ownership identifier", "Precious-metal fineness"],
          ["Full recognised hallmark", "Tested metal and fineness within its system", "Diamond quality or jewellery value"],
          ["Diamond laser inscription", "Link to a report-covered diamond when matched", "Metal identity"],
          ["Jewellery or diamond report", "Characteristics within the report’s scope", "Every metal component unless stated"],
          ["Invoice", "The seller’s contractual description", "Independent verification by itself"]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Strong verification comes from agreement between these sources. This same principle applies across the listing: " },
          { text: "check whether the diamond information is complete", href: "/blog/check-diamond-information-complete/" },
          { text: " rather than allowing one document to stand in for the entire product." }
        ]
      }
    ]
  },
  {
    heading: "How to distinguish white gold, platinum and silver",
    content: [
      {
        type: "image",
        src: "/images/blog/check-metal-used-diamond-jewellery/50 (3).jpg",
        alt: "Comparing white gold, platinum, and sterling silver metal bands side by side",
        title: "Comparing White Metals",
        caption: "Visual checks are unreliable for distinguishing white gold, platinum, and silver; check the hallmarks instead."
      },
      {
        type: "paragraph",
        parts: [{ text: "White gold: ", bold: true }, { text: "White gold is a gold alloy formulated for a pale appearance and frequently finished with rhodium plating. The product should state gold fineness and disclose plating where relevant. Over time, wear can reveal a warmer underlying tone, but that is not a reliable home test." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Platinum: ", bold: true }, { text: "Platinum jewellery should carry a platinum fineness description, such as 950 where applicable. Platinum often feels substantial relative to an identical-volume design, but weight varies with construction, so heft cannot authenticate it." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Silver: ", bold: true }, { text: "Sterling silver is commonly described by 925 fineness. It may be rhodium plated and can be visually similar to white gold. Tarnish can occur, but absence or presence of tarnish does not conclusively identify the metal." }]
      },
      {
        type: "paragraph",
        text: "The correct order is: read the mark, confirm the specification, then test professionally if needed."
      }
    ]
  },
  {
    heading: "Yellow and rose gold: colour does not reveal karat",
    content: [
      {
        type: "paragraph",
        text: "Gold alloy colour depends on composition and surface finishing. Two 18K yellow-gold pieces can have different hues, while 14K and 18K pieces can look similar in photographs."
      },
      {
        type: "paragraph",
        text: "Rose gold contains alloying metals that create its pink-to-red tone. The exact colour can vary by formulation. You cannot determine gold fineness from how yellow, pale or pink a piece appears."
      },
      {
        type: "paragraph",
        text: "Lighting, white balance, reflections and screen settings further distort colour online. Use metal type and fineness as the specification; treat photography as an appearance guide."
      }
    ]
  },
  {
    heading: "Solid, hollow, plated, filled and vermeil",
    content: [
      {
        type: "image",
        src: "/images/blog/check-metal-used-diamond-jewellery/50 (4).jpg",
        alt: "Cross-section showing layers of gold plating over a base metal",
        title: "Plating and Solid Construction",
        caption: "Plated and vermeil jewellery apply a surface layer of gold over silver or base metals, which is different from solid gold."
      },
      {
        type: "paragraph",
        parts: [{ text: "Solid precious metal: ", bold: true }, { text: "“Solid 18K gold” normally means the relevant structure is made from the stated gold alloy rather than merely coated with it. Solid does not mean pure, heavy or without internal space in every design; the product must still disclose hollow construction where relevant." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Hollow construction: ", bold: true }, { text: "Hollow precious-metal components can reduce weight while preserving visible scale. They are not automatically defective, but care, repairability and dent resistance may differ. The listing should not create the impression of solid construction when major components are hollow." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Plated jewellery: ", bold: true }, { text: "Plating applies a surface layer over another metal. Check coating metal, base metal, coating thickness, expected care, replating services, and whether posts, clasps and chains share the same construction." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Gold-filled and rolled gold: ", bold: true }, { text: "These terms refer to mechanically bonded gold layers under definitions that can vary by market. They are not equivalent to solid gold or ordinary flash plating. Ask for the legal or technical specification used by the seller." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Vermeil: ", bold: true }, { text: "Vermeil generally refers to gold plating over silver under jurisdiction-specific rules. It is not solid gold. Confirm silver fineness, gold fineness and coating specification rather than relying on the word alone." }]
      }
    ]
  },
  {
    heading: "Mixed-metal diamond jewellery",
    content: [
      {
        type: "paragraph",
        text: "A piece may intentionally combine metals—for example, a platinum setting with a gold shank, or a gold pendant on a different-metal chain."
      },
      {
        type: "paragraph",
        text: "Ask the seller to identify:"
      },
      {
        type: "bullet-list",
        items: [
          "every structural metal;",
          "which parts each metal forms;",
          "the fineness of each precious metal;",
          "plating applied to any component;",
          "how mixed-metal hallmark rules are satisfied; and",
          "whether solder, springs or functional components are excluded from the main description."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "The description should not use the highest-value component to imply that the entire piece is made from it. Component-level differences are also one reason " },
          { text: "similar diamond jewellery pieces can have different prices", href: "/blog/similar-diamond-jewellery-different-prices/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Metal weight and product weight",
    content: [
      {
        type: "paragraph",
        text: "Approximate finished weight can help compare construction, but it is not a purity test. The figure may include diamonds, coloured stones, solder, clasps and all components. Ring size and chain length can change it."
      },
      {
        type: "paragraph",
        text: "Record:"
      },
      {
        type: "bullet-list",
        items: [
          "whether the figure is metal-only or total finished weight;",
          "which size or length it represents;",
          "whether it is exact or approximate; and",
          "the stated tolerance."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Never estimate gold purity by weighing a stone-set piece. For a fuller explanation of how metal input interacts with diamonds, setting and service, read " },
          { text: "what determines the price of lab-grown diamond jewellery", href: "/blog/what-determines-price-lab-grown-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "What about nickel and metal sensitivity?",
    content: [
      {
        type: "paragraph",
        text: "“Hypoallergenic” has no single meaning unless the seller defines the metal, testing standard and scope. If sensitivity matters, ask:"
      },
      {
        type: "bullet-list",
        items: [
          "complete alloy information where available;",
          "whether nickel is intentionally present;",
          "which regulatory testing standard applies;",
          "whether earring posts and backs use the stated metal;",
          "whether rhodium or another coating separates skin from the alloy; and",
          "what happens as plating wears."
        ]
      },
      {
        type: "paragraph",
        text: "Do not use a blog or hallmark as medical advice. A hallmark concerns precious-metal fineness, not individual allergy suitability."
      }
    ]
  },
  {
    heading: "Professional ways to test jewellery metal",
    content: [
      {
        type: "paragraph",
        text: "If documentation and marks are absent, unclear or inconsistent, use a qualified professional. Depending on the piece and purpose, they may use:"
      },
      {
        type: "bullet-list",
        items: [
          "X-ray fluorescence screening;",
          "electronic testing;",
          "density-based assessment on suitable unmounted objects;",
          "controlled acid testing; or",
          "formal assay methods."
        ]
      },
      {
        type: "paragraph",
        text: "Every method has limitations. For valuable, inherited or disputed jewellery, an assay office or appropriately qualified independent professional is more reliable than a home kit."
      }
    ]
  },
  {
    heading: "Home tests that should not decide a purchase",
    content: [
      {
        type: "paragraph",
        text: "Common internet tests are weak or risky:"
      },
      {
        type: "bullet-list",
        items: [
          "Magnet test: many genuine precious-metal alloys are non-magnetic, but non-magnetic does not mean precious metal; clasps can contain magnetic springs.",
          "Skin-colour test: reactions depend on chemistry, coatings and wear, not simply purity.",
          "Ceramic scratch test: can damage jewellery and produce ambiguous streaks.",
          "Acid test: risks metal, plating, stones and the user.",
          "Bite or bend test: destructive and meaningless for finished jewellery.",
          "Weight in the hand: construction and gemstone mass make this unreliable."
        ]
      }
    ]
  },
  {
    heading: "Metal checklist for each jewellery category",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Rings: ", bold: true }, { text: "Check the shank and setting metal, fineness, hallmark location, plating, finished weight for the selected size and whether resizing could disturb plating or mixed-metal construction." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Earrings: ", bold: true }, { text: "Check the decorative body, post, hinge and back separately. Confirm whether earrings are sold as a pair and whether the included backs use the same precious metal." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Necklaces and pendants: ", bold: true }, { text: "Check pendant, bail, chain, clasp and extension links. A pendant described as gold does not automatically make an included chain gold unless stated." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Bracelets: ", bold: true }, { text: "Check links, clasp, safety catches, hinges and springs. Confirm whether length changes affect approximate metal weight." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Jewellery sets: ", bold: true }, { text: "Ask for the metal specification and hallmark information for every piece. Do not assume that all components share the same alloy because they match visually." }]
      }
    ]
  },
  {
    heading: "Pre-purchase metal verification worksheet",
    content: [
      {
        type: "table",
        headers: ["Question", "Product-page answer", "Evidence or seller confirmation"],
        rows: [
          ["What is the metal type?", "", ""],
          ["What is the fineness?", "", ""],
          ["Is the construction solid, hollow or plated?", "", ""],
          ["What is the base metal beneath plating?", "", ""],
          ["Are different components made from different metals?", "", ""],
          ["What marks are present?", "", ""],
          ["Which hallmarking system applies?", "", ""],
          ["Is a legal weight exemption relevant?", "", ""],
          ["What does the approximate weight include?", "", ""],
          ["Is alloy or sensitivity information available?", "", ""],
          ["Does the basket repeat the selected metal?", "", ""],
          ["Does the invoice match the description?", "", ""]
        ]
      },
      {
        type: "paragraph",
        text: "Save screenshots of the selected product, hallmark information and written answers with the invoice."
      }
    ]
  },
  {
    heading: "Red flags in a jewellery metal description",
    content: [
      {
        type: "paragraph",
        text: "Pause when you see red flags such as gold with no fineness, gold colour instead of gold content, white metal or platinum finish without composition, a single stamp described as a full UK hallmark, or gold pendants without chain metal specs."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Clear metal evidence is part of " },
          { text: "why transparency matters when buying diamond jewellery", href: "/blog/transparency-buying-diamond-jewellery/" },
          { text: " and should be available before checkout." }
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale should disclose",
    content: [
      {
        type: "paragraph",
        text: "Each Aurelia Royale product page states precious-metal type/colour, karat/millesimal fineness, solid/plated/mixed construction, base metal, approximate weight, hallmarking details, and sensitivity information."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Metal identity is necessary but not sufficient: " },
          { text: "high-quality lab-grown diamond jewellery", href: "/blog/high-quality-lab-grown-diamond-jewellery/" },
          { text: " also depends on diamond selection, engineering, setting, finish and quality control." }
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
          { text: "To check the metal used in diamond jewellery, rely on an evidence chain: complete product description, fineness, recognised hallmark where applicable, component-level construction, invoice and professional testing when needed.\n\n" },
          { text: "Colour, weight in the hand and a lone number cannot authenticate metal. A hallmark verifies precious-metal fineness within its scope; it says nothing about whether the diamond is laboratory-grown, its quality or the jewellery’s value." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "How can I tell what metal my diamond ring is made from?",
            answer: "Check the product documents and inspect the inner shank for grouped hallmark or fineness marks. If the evidence is missing or conflicting, request professional non-destructive testing."
          },
          {
            question: "What does 750 mean on jewellery?",
            answer: "750 commonly expresses 750 parts gold per thousand, equivalent to 18K gold. The number should be interpreted with its surrounding marks and legal context, not alone."
          },
          {
            question: "What does 585 mean on jewellery?",
            answer: "585 commonly indicates 585 parts gold per thousand, generally associated with 14K gold. Confirm the complete hallmark or reliable product documentation."
          },
          {
            question: "Is a 925 stamp a hallmark?",
            answer: "925 commonly indicates sterling-silver fineness, but a lone number is not necessarily a complete recognised hallmark. Check the applicable country’s required marks."
          },
          {
            question: "Can I identify white gold and platinum by colour?",
            answer: "No. White gold, platinum, silver and plated metals can look similar. Check fineness and hallmark information or obtain professional testing."
          },
          {
            question: "Does a hallmark prove that the diamonds are real?",
            answer: "No. Hallmarks concern precious-metal content. Diamond identity and quality require separate product disclosure, testing or a relevant laboratory report."
          },
          {
            question: "Does a sponsor’s mark identify the jewellery maker?",
            answer: "Not necessarily. In the UK, it identifies the registered party responsible for submitting the article for hallmarking; that party may not have manufactured it."
          },
          {
            question: "Is unhallmarked gold jewellery always fake?",
            answer: "No. A lawful weight exemption may apply, or the item may come from a jurisdiction with different rules. Its description still needs evidence appropriate to the transaction."
          },
          {
            question: "What is the difference between solid gold and gold-plated jewellery?",
            answer: "Solid gold uses the stated gold alloy through the relevant structure. Gold-plated jewellery has a gold surface layer over another metal, which should be identified."
          },
          {
            question: "Can a jeweller test metal without damaging the jewellery?",
            answer: "Often, yes. X-ray fluorescence and other screening methods may be non-destructive, though plating and mixed construction can limit results. Ask about method and limitations first."
          },
          {
            question: "Does heavier jewellery mean higher-purity gold?",
            answer: "No. Weight depends on dimensions, construction, stones and alloy density. Purity must be established through fineness evidence, hallmarking or testing."
          },
          {
            question: "What metal details should an online jewellery page provide?",
            answer: "It should state metal type, fineness, colour, solid or plated construction, base metal, hallmark information, approximate finished weight and component-level differences."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Metal Variant",
        subtitle: "Explore our collection of 18K gold and 950 platinum lab-grown diamond jewellery.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function CheckMetalUsedPage() {
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
            How to Check the Metal Used in Diamond Jewellery
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Educational Guide • Published July 16, 2026
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
