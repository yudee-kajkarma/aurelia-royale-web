import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Check the Metal Used in Diamond Jewellery",
  description: "Learn how to identify gold, silver and platinum in diamond jewellery, read UK hallmarks and fineness marks, and distinguish solid, hollow and plated construction.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aureliaroyale.com/#organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
    { "@type": "WebSite", "@id": "https://www.aureliaroyale.com/#website", "url": "https://www.aureliaroyale.com/", "name": "Aurelia Royale", "publisher": { "@id": "https://www.aureliaroyale.com/#organization" } },
    { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#webpage", "url": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/", "name": "How to Check the Metal Used in Diamond Jewellery: Hallmarks, Fineness and Plating Explained", "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" }, "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#breadcrumb" }, "datePublished": "2026-09-10", "dateModified": "2026-09-10" },
    { "@type": "BlogPosting", "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#article", "headline": "How to Check the Metal Used in Diamond Jewellery: Hallmarks, Fineness and Plating Explained", "description": "Learn how to identify gold, silver and platinum in diamond jewellery, read UK hallmarks and fineness marks, and distinguish solid, hollow and plated construction.", "datePublished": "2026-09-10", "dateModified": "2026-09-10", "author": { "@id": "https://www.aureliaroyale.com/#organization" }, "publisher": { "@id": "https://www.aureliaroyale.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#webpage" }, "articleSection": "Lab-Grown Diamond Education", "keywords": ["diamond jewellery metal check", "UK hallmark gold silver platinum", "750 585 375 925 jewellery mark", "gold plated hollow solid jewellery"] },
    { "@type": "BreadcrumbList", "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" }, { "@type": "ListItem", "position": 3, "name": "How to Check the Metal Used in Diamond Jewellery", "item": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/" }] },
    { "@type": "FAQPage", "@id": "https://www.aureliaroyale.com/blog/check-metal-used-diamond-jewellery/#faq", "mainEntity": [{ "@type": "Question", "name": "What does 750 mean on jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "750 indicates 18ct gold fineness—at least 750 parts gold per thousand." } }, { "@type": "Question", "name": "Is hollow gold fake gold?", "acceptedAnswer": { "@type": "Answer", "text": "No. Hollow describes construction. The metal can still genuinely be the stated gold alloy." } }, { "@type": "Question", "name": "Does a hallmark prove the diamond is genuine?", "acceptedAnswer": { "@type": "Answer", "text": "No. It verifies applicable precious-metal fineness, not diamond identity." } }] }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "When buying diamond jewellery, it is easy to focus almost entirely on the diamond and overlook the metal holding it. But the metal is a major part of the finished piece. It affects colour, weight, wear, maintenance, construction and how the jewellery is described. A diamond grading report may tell you a great deal about the gemstone while telling you little or nothing about the ring, pendant, earring or bracelet metal surrounding it." },
      { type: "paragraph", text: "That is why metal should be checked independently. The first question is: What precious metal is this jewellery made from? The second is: What is its fineness? And there is a third question that buyers often miss: Is that metal used throughout the relevant component, is the component hollow, or is another metal merely plated with it?" },
      { type: "paragraph", text: "Those questions are related, but they are not the same." }
    ]
  },
  {
    heading: "Quick Answer: How Do You Check What Metal Jewellery Is Made From?",
    content: [
      { type: "paragraph", text: "Start with the product description. Look for a specific metal and fineness such as 18ct gold, 14ct gold, sterling silver or platinum, rather than relying on colour alone." },
      { type: "paragraph", text: "For qualifying precious-metal articles sold in the UK, check the hallmark. A full UK hallmark normally contains three compulsory elements: the sponsor's or maker's mark, the metal-and-fineness mark and the Assay Office mark. The date letter is optional." },
      { type: "paragraph", text: "Then check construction separately. For example: 18ct gold describes metal fineness. hollow 18ct gold tells you something additional about construction. silver with 18ct gold plating describes a silver article carrying a surface layer of gold. Those descriptions should never be treated as interchangeable." }
    ]
  },
  {
    heading: "Why You Cannot Identify Jewellery Metal From Colour Alone",
    content: [
      { type: "paragraph", text: "Colour is not reliable proof of metal composition. Yellow-coloured jewellery could be solid gold alloy, gold-plated silver, gold-plated base metal or another alloy with a similar appearance. White-coloured jewellery could be platinum, white gold, silver or another material. Rose-coloured jewellery can also come from different metal combinations or surface finishes." },
      { type: "paragraph", text: "Precious metals themselves are normally alloyed with other metals to achieve practical colour and strength. The British Hallmarking Council notes that gold, silver, platinum and palladium are rarely used in their purest form and that visual inspection alone cannot reliably establish their precious-metal content. That is precisely why metal descriptions and hallmarking matter." }
    ]
  },
  {
    heading: "Metal Type and Metal Fineness Are Different",
    content: [
      { type: "paragraph", text: "A description such as gold identifies a metal category. A description such as 18ct gold tells you more: it describes the proportion of gold within the alloy. UK hallmarking commonly expresses fineness in parts per thousand. For example: 375 = 9ct gold; 585 = 14ct gold; 750 = 18ct gold." },
      { type: "paragraph", text: "The fineness mark tells you the minimum proportion of the stated precious metal in the alloy. Official British Hallmarking Council guidance gives 750 as the millesimal fineness corresponding to 18ct gold, 585 for 14ct and 375 for 9ct." },
      { type: "paragraph", text: "So if you see: 750 that is a fineness reference. It does not, by itself, tell you whether the jewellery component is hollow or solid in construction." }
    ]
  },
  {
    heading: "What Does 750 Mean on Jewellery?",
    content: [
      { type: "paragraph", text: "A 750 fineness mark means the gold alloy contains at least 750 parts gold per 1,000, corresponding to 18-carat gold. It does not mean the item is 75% of some vague \"gold colour\". It is a metal-content specification." },
      { type: "paragraph", text: "However, a standalone 750 stamp should not automatically be described as a complete UK hallmark. A full UK hallmark has three compulsory components: the sponsor/maker mark, fineness mark and Assay Office mark. That distinction is important when checking jewellery online." }
    ]
  },
  {
    heading: "What Does 585 Mean?",
    content: [
      { type: "paragraph", text: "585 corresponds to 14ct gold under recognised UK fineness descriptions. It means at least 585 parts per thousand of the alloy are gold." },
      { type: "paragraph", text: "Again, the number concerns fineness. It does not tell you: whether the item is hollow; its total gram weight; its diamond quality; or whether it has been plated with another colour of metal." }
    ]
  },
  {
    heading: "What Does 375 Mean?",
    content: [
      { type: "paragraph", text: "375 corresponds to 9ct gold, meaning at least 375 parts per thousand are gold. This is one reason the phrase simply \"gold jewellery\" is much less informative than a proper fineness description." }
    ]
  },
  {
    heading: "What Does 925 Mean on Jewellery?",
    content: [
      { type: "paragraph", text: "925 is commonly associated with sterling silver and indicates 925 parts silver per 1,000. But, particularly in a UK buying context, do not automatically treat a solitary 925 number as equivalent to a complete statutory hallmark." },
      { type: "paragraph", text: "Qualifying silver articles above the hallmarking exemption weight require an appropriate recognised hallmark. For underweight items, a 925 fineness stamp may appear without the full hallmark requirement applying. Official UK guidance specifically distinguishes a silver hallmark from a 925 stamp on underweight gold-plated silver articles." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/check-metal-used-diamond-jewellery/50 (2).jpg", alt: "UK hallmark gold silver platinum fineness marks 750 585 375 925 jewellery", title: "How UK Hallmarks Work", caption: "A full UK hallmark has three compulsory elements — the fineness number alone is not the complete hallmark.", priority: false }
    ]
  },
  {
    heading: "How UK Hallmarks Work",
    content: [
      { type: "paragraph", text: "UK hallmarking exists to independently verify the precious-metal fineness of qualifying articles. The current official guidance says precious-metal items described as gold, silver, platinum or palladium must be hallmarked when they exceed the applicable exemption weight." },
      { type: "paragraph", text: "The current thresholds are:" },
      { type: "table", headers: ["Metal", "UK hallmarking exemption weight"], rows: [["Gold", "1 gram"], ["Silver", "7.78 grams"], ["Platinum", "0.5 gram"], ["Palladium", "1 gram"]] },
      { type: "paragraph", text: "An item below the relevant threshold can be exempt from the physical hallmarking requirement. That exemption does not give a seller permission to describe the metal inaccurately." }
    ]
  },
  {
    heading: "What Are the Three Compulsory UK Hallmark Marks?",
    content: [
      { type: "paragraph", text: "A complete UK hallmark normally contains three compulsory elements. The sponsor's or maker's mark identifies the registered person or company that submitted the article for hallmarking. The metal-and-fineness mark identifies the precious metal and its purity in parts per thousand. The Assay Office mark identifies which UK Assay Office tested and hallmarked the item. A date letter can also appear, but it is optional." },
      { type: "paragraph", text: "This means a single number such as: 750 or: 925 should not automatically be described as \"the full hallmark\". It may be a fineness mark or stamp, but the full UK hallmark contains the complete compulsory set." }
    ]
  },
  {
    heading: "What Does a Hallmark Actually Prove?",
    content: [
      { type: "paragraph", text: "A recognised hallmark provides independent evidence about precious-metal fineness. That is valuable. But its scope should remain clear. A hallmark does not independently tell you: the diamond's carat weight; colour; clarity; cut; natural or laboratory-grown origin; report number; setting quality; future durability; or retail value." },
      { type: "paragraph", text: "Those questions need different evidence. A hallmark is a metal verification system—not a diamond grading report." }
    ]
  },
  {
    heading: "Does a Hallmark Tell You the Jewellery Is Solid?",
    content: [
      { type: "paragraph", text: "Not necessarily in the sense of construction. This is a very important distinction. Hallmarking verifies the precious-metal fineness of the article according to the applicable rules. It does not mean every part of the article is necessarily a thick, solid block of metal." },
      { type: "paragraph", text: "Jewellery can be made using hollow construction while still using an alloy of the stated precious-metal fineness. Therefore: 18ct gold and: solid-construction 18ct gold are not automatically synonymous. Likewise: hallmarked 18ct gold does not by itself tell you the physical thickness or internal construction of the piece." }
    ]
  },
  {
    heading: "Solid, Hollow and Plated: Three Different Questions",
    content: [
      { type: "paragraph", text: "This should be the central construction framework for this article." },
      { type: "paragraph", text: "Solid-Throughout Precious Metal: When jewellery is made from a precious-metal alloy throughout the relevant component, the underlying body is that alloy rather than a base material carrying only a surface coating. However, \"solid\" can also be used in some markets specifically to distinguish a non-hollow construction. Because terminology can be misunderstood, a precise product description should state the metal fineness and, where construction is material, whether the article is hollow or non-hollow." },
      { type: "paragraph", text: "Hollow Precious-Metal Construction: Hollow jewellery can still genuinely be made from the stated precious metal. The difference is that the component contains an internal void instead of being metal all the way through its entire cross-section. Hollow does not automatically mean plated. For example: hollow 18ct gold is fundamentally different from: gold-plated base metal. The first describes the construction of an 18ct gold article. The second describes a surface layer of gold over another metal." },
      { type: "paragraph", text: "Plated Construction: Plated jewellery uses a layer of one metal over a different underlying metal. For example: 18ct gold-plated sterling silver means the underlying precious-metal article is silver and the gold is a surface layer. The British Hallmarking Council's UK guidance specifically says gold-plated silver is hallmarked as silver, not as a solid gold article." },
      { type: "paragraph", text: "These three concepts must remain separate." }
    ]
  },
  {
    heading: "Solid Gold Does Not Mean Pure Gold",
    content: [
      { type: "paragraph", text: "Another common misconception is: solid gold = 24ct pure gold. That is incorrect. An item can be made throughout from 18ct gold alloy and therefore legitimately be an 18ct gold article. The 18ct tells you its fineness. The construction description tells you whether the relevant body is hollow or otherwise constructed. Those are separate characteristics." }
    ]
  },
  {
    heading: "What Is Gold-Plated Jewellery?",
    content: [
      { type: "paragraph", text: "Gold-plated jewellery has a layer of gold or gold alloy applied over another material. The underlying article might be sterling silver or base metal. The gold layer is therefore not the entire structural body of the piece." },
      { type: "paragraph", text: "US FTC consumer guidance likewise distinguishes solid gold from plated jewellery and notes that plating can wear away over time depending on use and coating thickness. For UK-facing copy, the underlying metal should be identified accurately rather than allowing a gold-coloured surface to imply that the entire piece is gold." }
    ]
  },
  {
    heading: "How Should Gold-Plated Silver Be Described in the UK?",
    content: [
      { type: "paragraph", text: "This is one of the most useful official rules for Aurelia to follow. British Hallmarking Council guidance says a gold-plated silver article is hallmarked as silver. It also warns against descriptions that make consumers think they are buying gold when the actual article underneath is silver." },
      { type: "paragraph", text: "A permitted form of description can state, for example: 925 & 18ct gold plated provided the article is accurately described as silver with gold plating. The gold fineness refers to the plating alloy. The silver fineness describes the underlying precious-metal article. Those should never be reversed." }
    ]
  },
  {
    heading: "Can Gold-Plated Silver Carry an 18ct Gold Hallmark?",
    content: [
      { type: "paragraph", text: "Not as though the article itself were 18ct gold. Official UK guidance says gold-plated silver articles are hallmarked as silver. It also says separate gold fineness marks such as 9k, 14k, 18k, 375, 585 or 750 should not be placed on the article in a way that could mislead buyers into believing the jewellery itself is gold." },
      { type: "paragraph", text: "The description can explain the fineness of the plating when it makes the silver base clear. That distinction should be preserved on every product page." }
    ]
  },
  {
    heading: "Can Gold-Plated Base Metal Be Hallmarked as Gold?",
    content: [
      { type: "paragraph", text: "No. British Hallmarking Council guidance states that gold-plated base-metal articles cannot be hallmarked as gold. It specifically includes plated, bonded and rolled-gold constructions over base metal within that restriction. Again, a gold-coloured surface does not convert the underlying material into a solid gold article." }
    ]
  },
  {
    heading: "Is Gold Vermeil the Same as Solid Gold?",
    content: [
      { type: "paragraph", text: "No. Vermeil is a plated construction, not solid gold throughout. Terminology and minimum plating requirements can vary by market, so a buyer should look beyond the word vermeil and determine: the underlying metal; the plating metal and fineness; and where supplied, plating thickness." },
      { type: "paragraph", text: "A retailer should not use vermeil as though it meant the jewellery body itself were solid gold." }
    ]
  },
  {
    heading: "Is Gold-Filled the Same as Solid Gold?",
    content: [
      { type: "paragraph", text: "No. Gold-filled, gold-overlay and rolled-gold constructions involve a gold-alloy layer applied over another underlying metal. They are different from a jewellery component made from gold alloy throughout. US FTC guidance expressly distinguishes gold-filled, gold overlay and rolled gold plate from solid gold jewellery. When shopping internationally, do not assume every market uses identical terminology or thresholds. Read the complete metal description." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/check-metal-used-diamond-jewellery/50 (3).jpg", alt: "Gold plated hollow solid construction jewellery metal white gold rhodium platinum", title: "Plating, Hollow Construction and Common Misconceptions", caption: "Gold plating, hollow construction and solid precious-metal alloy are three different things — always identify the underlying metal first.", priority: false }
    ]
  },
  {
    heading: "Can You Tell Solid Gold From Plated Jewellery by Looking?",
    content: [
      { type: "paragraph", text: "Not reliably. Fresh plating can visually resemble a gold-alloy surface. Colour can also vary significantly between different gold alloys. Visual inspection can sometimes reveal worn plating, exposed base metal or colour differences at high-wear areas, but the absence of visible wear does not prove that a piece is solid-throughout gold." },
      { type: "paragraph", text: "Use: the product description; applicable hallmarking; manufacturer information; and professional testing where necessary. Do not determine metal composition solely from a photograph." }
    ]
  },
  {
    heading: "Can a Magnet Tell You Whether Jewellery Is Gold?",
    content: [
      { type: "paragraph", text: "A simple magnet test is not conclusive. Some base metals may react to a magnet while many precious-metal alloys do not. But absence of magnetic attraction does not prove that an item is gold. Likewise, jewellery contains multiple components: clasps, springs, findings or internal mechanisms may use different materials. A magnet can occasionally provide a clue. It is not a substitute for hallmarking, reliable documentation or professional metal testing." }
    ]
  },
  {
    heading: "Can Colour Tell You Whether Jewellery Is 14ct or 18ct Gold?",
    content: [
      { type: "paragraph", text: "No. The colour of a gold alloy depends partly on the other metals used in the alloy. Different 18ct alloys can also have different colour tones. White gold may additionally use surface treatment such as rhodium plating. Therefore, you cannot reliably look at two yellow rings and conclude: this one is 18ct and that one is 14ct from colour alone. Use verified fineness information." }
    ]
  },
  {
    heading: "What Is White Gold?",
    content: [
      { type: "paragraph", text: "White gold is a gold alloy designed to have a pale or white appearance. It is not the same metal as platinum. A white-gold piece can also receive a surface plating such as rhodium to create a particular finish. That means a white appearance alone does not establish whether the piece is: white gold; platinum; silver; or another metal. Check the product description and relevant fineness evidence." }
    ]
  },
  {
    heading: "Is Rhodium-Plated White Gold Still Gold?",
    content: [
      { type: "paragraph", text: "Yes, if the underlying article genuinely consists of the stated gold alloy. The rhodium is a surface layer. This gives the piece two separate material characteristics: underlying precious metal: white gold; surface finish: rhodium plating." },
      { type: "paragraph", text: "The existence of a surface plating does not necessarily mean the entire piece should be categorised in the same way as base-metal jewellery with gold plating. Always identify both the underlying article and the surface finish." }
    ]
  },
  {
    heading: "What Is Platinum Jewellery?",
    content: [
      { type: "paragraph", text: "Platinum is a distinct precious metal, not another form of white gold. UK hallmarking recognises platinum separately and provides its own fineness standards. British Hallmarking Council guidance includes recognised platinum finenesses such as 850, 900, 950 and 999. A common 950 platinum fineness therefore indicates at least 950 parts platinum per thousand in the relevant alloy. The hallmark shape and accompanying marks help distinguish platinum from other precious metals." }
    ]
  },
  {
    heading: "Is Platinum Automatically Better Than Gold?",
    content: [
      { type: "paragraph", text: "No. \"Better\" depends on what characteristic matters. Platinum and gold alloys differ in density, colour, composition, working characteristics, cost and maintenance. Metal preference should therefore be based on the particular jewellery design and wearer rather than a universal hierarchy. This page should explain identity and construction rather than declare one precious metal superior." }
    ]
  },
  {
    heading: "How Does Metal Affect Jewellery Weight?",
    content: [
      { type: "paragraph", text: "Metal contributes significantly to the finished item's gram weight. Different precious metals also have different densities, and construction can change weight dramatically. A hollow piece may weigh less than a physically similar non-hollow design. A substantial platinum ring can feel different from a visually similar gold ring." },
      { type: "paragraph", text: "But jewellery weight should not be used by itself to determine metal identity. A heavy item is not automatically platinum. A lightweight item is not automatically plated. Use the metal documentation as the primary evidence." }
    ]
  },
  {
    heading: "Jewellery Weight Is Not Diamond Carat Weight",
    content: [
      { type: "paragraph", text: "This distinction is particularly important for diamond jewellery. Diamond carat is a gemstone weight measurement. Finished jewellery weight normally includes the metal and other components and is commonly expressed in grams. One metric diamond carat equals 0.20 grams. Therefore: 1 ct diamond and: 5 g ring are not competing descriptions of the same measurement." },
      { type: "paragraph", parts: [{ text: "For finished dimensions and weight, read " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
      { type: "paragraph", parts: [{ text: "For diamond carat specifically, use " }, { text: "Lab-Grown Diamond Carat Weight Explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" }, { text: "." }] }
    ]
  },
  {
    heading: "Does Heavier Gold Mean Higher Fineness?",
    content: [
      { type: "paragraph", text: "No. Weight and fineness are independent. A heavy 9ct gold item may contain more total gold by mass than a very lightweight 18ct piece, even though the 18ct alloy has a greater proportion of gold. The hallmark communicates fineness. The gram weight communicates mass. You need both if total material quantity matters." }
    ]
  },
  {
    heading: "What Metal Information Should a Diamond-Jewellery Product Page Show?",
    content: [
      { type: "paragraph", text: "The product description should make the underlying material understandable without requiring the buyer to infer it from colour. For example: 18ct yellow gold is clearer than: gold-tone if the article truly is 18ct gold." },
      { type: "paragraph", text: "If plated: sterling silver with 18ct gold plating is clearer than: 18ct gold jewellery if only the surface layer is gold. If a hollow construction materially affects buyer expectations, it should not be described in a way that suggests a non-hollow construction." },
      { type: "paragraph", text: "The fundamental rule is: describe the underlying metal first, then its fineness, then any relevant plating or construction information." }
    ]
  },
  {
    heading: "A Practical Metal-Description Framework",
    content: [
      { type: "paragraph", text: "Use this order when reading jewellery specifications:" },
      { type: "table", headers: ["Question", "Example", "What It Tells You"], rows: [["What is the underlying metal?", "Gold / silver / platinum", "Metal family"], ["What is its fineness?", "750 / 925 / 950", "Precious-metal proportion"], ["Is it plated?", "18ct gold-plated silver", "Surface treatment"], ["Is construction hollow?", "Hollow 18ct gold", "Physical construction"], ["Is there a UK hallmark?", "Sponsor + fineness + Assay Office", "Independent fineness verification where applicable"], ["What is the item's weight?", "4.8 g", "Finished-item mass"], ["What metal is used in individual components?", "Main body / clasp / spring", "Component composition where relevant"]] },
      { type: "paragraph", text: "Do not collapse those questions into one vague field labelled Material." }
    ]
  },
  {
    heading: "Product Description vs Hallmark",
    content: [
      { type: "paragraph", text: "Both matter. The hallmark verifies applicable precious-metal fineness. The product description can provide information beyond the hallmark, including: metal colour; construction; plating; component information; and design details." },
      { type: "paragraph", text: "For example, the hallmark may establish that the qualifying underlying article is sterling silver. The product description may additionally state that its surface is plated with 18ct gold. Those pieces of information complement one another." }
    ]
  },
  {
    heading: "What If the Product Page Says 18ct Gold but the Hallmark Says 925?",
    content: [
      { type: "paragraph", text: "That needs careful interpretation. If the item is accurately described as 925 silver with 18ct gold plating, a silver hallmark can be entirely appropriate because UK guidance says gold-plated silver is hallmarked as silver." },
      { type: "paragraph", text: "But if the product is being represented as an article made from 18ct gold throughout while the applicable hallmark establishes silver, that would be a serious inconsistency. The wording around plating determines whether the information agrees or conflicts." }
    ]
  },
  {
    heading: "What If the Jewellery Has No Hallmark?",
    content: [
      { type: "paragraph", text: "First check whether it is subject to the UK hallmarking requirement. Current exemption thresholds are: gold — below 1 g; silver — below 7.78 g; platinum — below 0.5 g; palladium — below 1 g. An underweight article may legitimately fall outside compulsory physical hallmarking. That does not mean its metal can be described inaccurately." },
      { type: "paragraph", text: "If an article is above the relevant threshold, offered in the UK and described as one of the regulated precious metals, the absence of a recognised hallmark deserves investigation." }
    ]
  },
  {
    heading: "Does a 925 Stamp Prove Sterling Silver?",
    content: [
      { type: "paragraph", text: "A 925 stamp is useful information, but context matters. On an underweight silver article it may be used without the full hallmark requirement. On a larger article that should legally be hallmarked, a single 925 stamp is not a substitute for the complete recognised hallmark. A buyer should therefore distinguish: fineness stamp from: full hallmark." }
    ]
  },
  {
    heading: "Does a 750 Stamp Prove 18ct Gold?",
    content: [
      { type: "paragraph", text: "750 is the recognised fineness associated with 18ct gold. But, again, a single number is not necessarily a complete statutory UK hallmark. Check whether the item should carry a full hallmark and whether the accompanying sponsor and Assay Office marks are present." }
    ]
  },
  {
    heading: "What If a Hallmark Is Too Small to Read?",
    content: [
      { type: "paragraph", text: "Hallmarks are often tiny. A jeweller's loupe or magnification can help. If buying online, clear hallmark information in the product description may be more useful than attempting to interpret an unclear photograph yourself. For a significant purchase, ask the seller to identify the hallmark and fineness rather than guessing from an unreadable image." }
    ]
  },
  {
    heading: "Does the Hallmark Need to Be Visible in Product Photography?",
    content: [
      { type: "paragraph", text: "Not necessarily. A hallmark can be positioned discreetly and may be difficult to photograph clearly without high magnification. Its absence from a normal product image is therefore not proof that no hallmark exists." },
      { type: "paragraph", text: "The better question is whether the retailer can accurately state the applicable hallmarking information for the product." }
    ]
  },
  {
    heading: "Can Different Parts of Jewellery Use Different Metals?",
    content: [
      { type: "paragraph", text: "Yes. Complex jewellery can contain different components or functional parts. A clasp mechanism, spring or soldered component may not always have exactly the same composition as the visible body. UK hallmarking rules contain detailed provisions covering mixed-metal and component situations." },
      { type: "paragraph", text: "Where component composition materially affects the product, check the manufacturer's or retailer's verified specification." }
    ]
  },
  {
    heading: "Does a Diamond Report Tell You the Metal?",
    content: [
      { type: "paragraph", text: "Not necessarily. A report issued for an individual loose diamond concerns the gemstone. It does not automatically verify the ring, pendant or earrings into which the stone is later mounted. Some laboratories also offer finished-jewellery reporting services, but the scope should be read carefully." },
      { type: "paragraph", text: "Do not use: IGI reported diamond as proof that the ring is 18ct gold. Those are separate claims." },
      { type: "paragraph", parts: [{ text: "For the distinction, read " }, { text: "Diamond Certification vs Jewellery Certification", href: "/blog/diamond-certification-vs-jewellery-certification/" }, { text: "." }] }
    ]
  },
  {
    heading: "Does a UK Hallmark Verify a Lab-Grown Diamond?",
    content: [
      { type: "paragraph", text: "No. The hallmark concerns precious metal. It does not establish whether the gemstone is: natural diamond; laboratory-grown diamond; moissanite; cubic zirconia; or another material. Diamond origin requires gemmological evidence. Do not combine a metal hallmark and a diamond report into one vague claim that the \"whole item is certified\"." }
    ]
  },
  {
    heading: "What If the Product Uses Lab-Grown Diamonds?",
    content: [
      { type: "paragraph", text: "The metal-verification process does not change. A lab-grown diamond can be set in: gold; platinum; silver; or other appropriate jewellery materials. The fact that the diamond is laboratory-grown tells you nothing by itself about the surrounding metal. Check both independently." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/check-metal-used-diamond-jewellery/50 (4).jpg", alt: "Jewellery metal testing professional acid test magnet hallmark verification", title: "Professional Testing and What to Check When Buying Online", caption: "For significant purchases, professional metal testing is more reliable than home tests — and the product description remains the primary evidence.", priority: false }
    ]
  },
  {
    heading: "Can a Jeweller Test the Metal?",
    content: [
      { type: "paragraph", text: "Yes. Professional precious-metal testing can be used when identity or fineness remains uncertain. Methods can include controlled chemical or instrumental analysis depending on the situation. For UK hallmarking, Assay Offices independently test qualifying precious-metal articles before applying the recognised hallmark." },
      { type: "paragraph", text: "For a consumer, professional testing is generally more appropriate than attempting potentially damaging home acid or scratch tests on finished fine jewellery." }
    ]
  },
  {
    heading: "Should You Use an Acid Test at Home?",
    content: [
      { type: "paragraph", text: "For valuable finished jewellery, avoid potentially damaging DIY testing when reliable documentation or professional examination is available. Acid testing can involve scratching or exposing metal to chemicals. It also requires interpretation. If the issue matters enough to test, use an appropriately qualified professional rather than damaging a piece merely to satisfy curiosity." }
    ]
  },
  {
    heading: "What Does \"Gold Tone\" Mean?",
    content: [
      { type: "paragraph", text: "Do not treat terms such as: gold-tone; gold-coloured; or: gold finish as equivalent to: 18ct gold. Those descriptions may refer only to appearance. If a product genuinely contains regulated precious metal, look for a proper metal and fineness description." }
    ]
  },
  {
    heading: "What Does \"White Metal\" Mean?",
    content: [
      { type: "paragraph", text: "It is not sufficiently specific for a fine-jewellery metal claim. The phrase might describe appearance but does not tell you whether the material is: white gold; platinum; silver; or another alloy. A buyer should seek the actual underlying metal." }
    ]
  },
  {
    heading: "What Should You Check When Buying Metal Online?",
    content: [
      { type: "paragraph", text: "Start with the written specification. Then compare it with any available hallmark information. If the jewellery is plated, identify both the underlying material and the plating. If weight or construction is important, determine whether the item is hollow or non-hollow rather than assuming from appearance. If the information conflicts, ask for clarification before proceeding." },
      { type: "paragraph", text: "The same evidence framework used elsewhere in Aurelia's buyer guides applies here: Verified — supported by appropriate evidence. Disclosed — clearly stated by the seller. Unconfirmed — not yet adequately established. And distinguish: omission from: contradiction. A missing gram weight is not the same as a product described as 18ct solid-throughout gold while its verified metal information shows plated silver." },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "How can I tell what metal my jewellery is made from?", answer: "Check the product description, fineness information and applicable hallmark. For uncertainty, use professional precious-metal testing rather than relying on colour alone." },
          { question: "What does a jewellery hallmark mean?", answer: "A recognised hallmark provides independent verification of precious-metal fineness." },
          { question: "What are the compulsory marks in a UK hallmark?", answer: "The sponsor/maker mark, metal-and-fineness mark and Assay Office mark are compulsory. The date letter is optional." },
          { question: "What does 750 mean on jewellery?", answer: "750 indicates 18ct gold fineness—at least 750 parts gold per thousand." },
          { question: "What does 585 mean?", answer: "585 corresponds to 14ct gold." },
          { question: "What does 375 mean?", answer: "375 corresponds to 9ct gold." },
          { question: "What does 925 mean?", answer: "925 indicates sterling-silver fineness." },
          { question: "What does 950 mean?", answer: "950 is a recognised fineness used for platinum and can also occur within other precious-metal contexts, so the complete hallmark shape and metal description should be checked rather than reading the number in isolation." },
          { question: "Does 925 alone mean the item has a full UK hallmark?", answer: "No. A full hallmark contains the three compulsory components. An underweight silver article can also carry a 925 stamp without compulsory full hallmarking." },
          { question: "Is solid gold the same as pure gold?", answer: "No. An item can be made from 18ct gold alloy throughout without being pure 24ct gold." },
          { question: "Is hollow gold fake gold?", answer: "No. Hollow describes construction. The metal can still genuinely be the stated gold alloy." },
          { question: "Is hollow gold the same as gold plated?", answer: "No. Hollow precious-metal jewellery uses the stated alloy in its structure but has an internal void. Plating is a surface layer over another underlying material." },
          { question: "Is gold-plated jewellery solid gold?", answer: "No. Gold plating is a surface coating." },
          { question: "Can sterling silver be gold plated?", answer: "Yes." },
          { question: "How is gold-plated silver hallmarked in the UK?", answer: "Official guidance says it is hallmarked as silver, not as a solid gold article." },
          { question: "Can gold-plated silver be described as 18ct gold?", answer: "Not as though the entire article were 18ct gold. The wording must make the silver article and gold plating clear." },
          { question: "Can a gold-plated base-metal item receive a UK gold hallmark?", answer: "No. Official UK hallmarking guidance says gold-plated base-metal articles cannot be hallmarked as gold." },
          { question: "Does gold plating wear off?", answer: "It can wear over time depending on use, thickness and construction." },
          { question: "Is white gold the same as platinum?", answer: "No. They are different precious metals." },
          { question: "Does a hallmark prove the diamond is genuine?", answer: "No. It verifies applicable precious-metal fineness, not diamond identity." },
          { question: "Does an IGI diamond report prove the ring metal?", answer: "A loose-diamond report does not automatically verify the surrounding ring metal." },
          { question: "Is a heavy ring automatically solid gold?", answer: "No." },
          { question: "Is a lightweight ring automatically hollow?", answer: "No." },
          { question: "Can I tell 14ct from 18ct gold by colour?", answer: "Not reliably." },
          { question: "Does every UK gold item need a hallmark?", answer: "Compulsory hallmarking applies above the relevant exemption weight. The current UK exemption threshold for gold is 1 gram." },
          { question: "What is the silver hallmarking threshold?", answer: "7.78 grams." },
          { question: "What is the platinum threshold?", answer: "0.5 gram." },
          { question: "What is the palladium threshold?", answer: "1 gram." },
          { question: "Is jewellery gram weight the same as diamond carat weight?", answer: "No. Finished jewellery weight and gemstone carat weight are different measurements." },
          { question: "What is the most important thing to check?", answer: "Identify the underlying metal, its fineness and its construction separately." }
        ]
      }
    ]
  },
  {
    heading: "Final Answer: How Do You Know What Metal Diamond Jewellery Uses?",
    content: [
      { type: "paragraph", text: "Do not judge jewellery metal from colour alone. Start with the product description and identify the underlying material. Then establish its fineness. For a qualifying UK precious-metal article, use the recognised hallmark as independent evidence. A full UK hallmark includes the sponsor or maker mark, metal-and-fineness mark and Assay Office mark." },
      { type: "paragraph", text: "After that, ask a separate construction question. Is the article made from the stated precious-metal alloy throughout the relevant component? Is it hollow? Or is another underlying material plated with gold? These descriptions are not interchangeable. An 18ct gold hollow component can genuinely be 18ct gold. A sterling-silver item with 18ct gold plating is fundamentally a silver article with a gold surface. And gold-plated base metal is different again." },
      { type: "paragraph", text: "For UK buyers, gold-plated silver should be described as silver with gold plating and is hallmarked as silver where hallmarking applies. Finally, keep metal verification separate from diamond verification. A UK hallmark tells you about precious-metal fineness. A diamond grading report tells you about the gemstone within that report's scope. Neither replaces the other." },
      { type: "paragraph", parts: [{ text: "For finished product dimensions and gram weight, continue with " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
      { type: "paragraph", parts: [{ text: "For diamond carat weight, read " }, { text: "Lab-Grown Diamond Carat Weight Explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For checking all product information before buying, use " }, { text: "What to Check Before Buying Lab-Grown Diamond Jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For loose-diamond versus finished-jewellery documentation, read " }, { text: "Diamond Certification vs Jewellery Certification", href: "/blog/diamond-certification-vs-jewellery-certification/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For the broader online buying process, continue with " }, { text: "How to Buy Certified Lab-Grown Diamond Jewellery Online", href: "/blog/buy-certified-lab-grown-diamond-jewellery-online/" }, { text: "." }] },
      { type: "paragraph", text: "When reviewing an Aurelia Royale product, only publish metal, fineness, plating, hollow-construction or hallmark claims that are verified for that specific design or SKU." },
      { type: "paragraph", parts: [{ text: "Where a design is not currently available through an approved direct-purchase process, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry to register your interest." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Identify the underlying metal, its fineness and its construction — three separate questions.", shopHref: "/shop/", contactHref: "/contact/" }
    ]
  }
];

export default function BlogCheckMetalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Check the Metal Used in Diamond Jewellery</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Hallmarks, Fineness and Plating Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="check-metal-used-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}

