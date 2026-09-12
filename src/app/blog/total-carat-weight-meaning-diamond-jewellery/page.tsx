import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "Total Carat Weight Meaning: TCW & CTTW Explained",
  description: "Learn what total carat weight means in diamond jewellery, how TCW, CTW and CTTW differ from a single diamond's carat weight, with earrings, rings and bracelet examples.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aureliaroyale.com/#organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
    { "@type": "WebSite", "@id": "https://www.aureliaroyale.com/#website", "url": "https://www.aureliaroyale.com/", "name": "Aurelia Royale", "publisher": { "@id": "https://www.aureliaroyale.com/#organization" } },
    { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#webpage", "url": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/", "name": "What Does Total Carat Weight Mean? TCW, CTW and CTTW in Diamond Jewellery Explained", "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" }, "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#breadcrumb" }, "datePublished": "2026-09-10", "dateModified": "2026-09-10" },
    { "@type": "BlogPosting", "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#article", "headline": "What Does Total Carat Weight Mean? TCW, CTW and CTTW in Diamond Jewellery Explained", "description": "Learn what total carat weight means in diamond jewellery, how TCW, CTW and CTTW differ from a single diamond's carat weight, with earrings, rings and bracelet examples.", "datePublished": "2026-09-10", "dateModified": "2026-09-10", "author": { "@id": "https://www.aureliaroyale.com/#organization" }, "publisher": { "@id": "https://www.aureliaroyale.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#webpage" }, "articleSection": "Lab-Grown Diamond Education", "keywords": ["total carat weight meaning", "TCW CTTW CTW diamond", "what does total carat weight mean", "diamond jewellery carat weight"] },
    { "@type": "BreadcrumbList", "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" }, { "@type": "ListItem", "position": 3, "name": "Total Carat Weight Meaning", "item": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/" }] },
    { "@type": "FAQPage", "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#faq", "mainEntity": [{ "@type": "Question", "name": "What does total carat weight mean?", "acceptedAnswer": { "@type": "Answer", "text": "It means the combined weight of the diamonds being counted in a multi-stone piece of jewellery." } }, { "@type": "Question", "name": "What does TCW mean in diamond jewellery?", "acceptedAnswer": { "@type": "Answer", "text": "TCW commonly means total carat weight." } }, { "@type": "Question", "name": "What does 1 carat total weight mean for earrings?", "acceptedAnswer": { "@type": "Answer", "text": "For a matched pair, it may mean approximately 0.50 ct per earring, but always verify the product specification." } }] }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Total carat weight is the combined weight of multiple diamonds in a piece of jewellery. This is different from the carat weight of one individual diamond." },
      { type: "paragraph", text: "If a solitaire ring contains one diamond weighing 1.00 ct, the stone itself weighs one carat. If a pair of earrings contains two 0.50 ct diamonds, the two stones together contain 1.00 carat total weight." },
      { type: "paragraph", text: "That difference sounds simple, but it becomes extremely important when comparing diamond rings, earrings, necklaces, bracelets, halos and other multi-stone jewellery." },
      { type: "paragraph", text: "A product described as: 2 ct diamond ring could potentially refer to one two-carat centre diamond. A product described as: 2 ct total diamond weight could instead contain a smaller centre diamond plus multiple side stones whose combined weight reaches approximately two carats. Those are very different pieces of jewellery." },
      { type: "paragraph", text: "Understanding TCW, CTW and CTTW helps prevent you from comparing headline numbers that do not mean the same thing." }
    ]
  },
  {
    heading: "Quick Answer: What Does Total Carat Weight Mean?",
    content: [
      { type: "paragraph", text: "Total carat weight means the combined weight of all applicable diamonds being counted in a multi-diamond piece of jewellery." },
      { type: "paragraph", text: "For example, suppose a ring contains: a 1.00 ct centre diamond, two 0.20 ct side diamonds and ten 0.01 ct accent diamonds. The calculation would be: 1.00 + 0.40 + 0.10 = 1.50 carats total diamond weight. The ring therefore contains approximately 1.50 tcw." },
      { type: "paragraph", text: "That does not mean its centre diamond weighs 1.50 ct. Its centre diamond still weighs 1.00 ct. The remaining 0.50 ct comes from the other diamonds. This distinction is the foundation of the entire topic." }
    ]
  },
  {
    heading: "What Do TCW, CTW and CTTW Mean?",
    content: [
      { type: "paragraph", text: "Diamond jewellery retailers use several abbreviations when describing combined stone weight. TCW commonly means total carat weight. CTW commonly means carat total weight or is used by retailers to indicate total carat weight. CTTW is commonly used for carat total weight and similarly signals that multiple stones are being counted together." },
      { type: "paragraph", text: "Terminology is not perfectly uniform across every retailer or market. That is why the abbreviation itself should never be the only information provided. The product description should make clear whether the advertised weight refers to: one individual diamond or: multiple diamonds combined." },
      { type: "paragraph", text: "For consumer clarity, Aurelia should favour plain wording such as Total Diamond Weight or Total Carat Weight alongside any abbreviation." }
    ]
  },
  {
    heading: "Carat Weight vs Total Carat Weight",
    content: [
      { type: "paragraph", text: "The core distinction is:" },
      { type: "table", headers: ["Term", "What It Describes", "Example"], rows: [["Carat weight — ct", "Weight of one individual diamond", "One centre diamond weighs 1.00 ct"], ["Total carat weight — TCW", "Combined weight of multiple diamonds", "Twenty diamonds together weigh 1.00 tcw"], ["CTW / CTTW", "Common retail abbreviations for combined carat weight", "Product states 2.00 cttw across all diamonds"]] },
      { type: "paragraph", text: "One metric carat always equals 0.20 grams, whether it refers to one diamond or the combined weight of several diamonds. What changes is how many stones contribute to that figure." }
    ]
  },
  {
    heading: "Why Total Carat Weight Can Be Misleading If It Is Not Explained",
    content: [
      { type: "paragraph", text: "Imagine two rings advertised with the number: 2.00 carats. Ring A is a solitaire containing one 2.00 ct centre diamond. Ring B contains a 1.20 ct centre diamond surrounded by smaller diamonds contributing another 0.80 ct. Both pieces may legitimately contain approximately two carats of diamond in some sense. But they will not have the same centre-stone size or visual appearance." },
      { type: "paragraph", text: "If a shopper is primarily interested in a large centre diamond, total carat weight alone is therefore insufficient. The product needs to separate: centre-stone carat weight from: total diamond weight." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/total-carat-weight-meaning-diamond-jewellery/32 (1).jpg", alt: "Total carat weight TCW CTTW explained solitaire halo ring earrings examples", title: "TCW vs Individual Carat Weight", caption: "Total carat weight combines all diamonds in a piece — always check centre-stone weight separately when individual stone size matters to you.", priority: true }
    ]
  },
  {
    heading: "Example 1: Solitaire Ring",
    content: [
      { type: "paragraph", text: "Consider a simple solitaire ring containing one diamond weighing: 1.00 ct. If there are no other diamonds in the ring, its individual diamond weight and total diamond weight are effectively the same: Centre diamond: 1.00 ct; Total diamond weight: 1.00 ct." },
      { type: "paragraph", text: "This is the simplest possible case. Once additional diamonds are introduced, however, those two figures begin to separate." }
    ]
  },
  {
    heading: "Example 2: Halo Engagement Ring",
    content: [
      { type: "paragraph", text: "Imagine a halo ring containing: a 1.00 ct centre diamond and halo diamonds with a combined weight of: 0.30 ct. The complete ring contains: 1.30 ct total diamond weight. The centre diamond remains only: 1.00 ct." },
      { type: "paragraph", text: "A shopper comparing this with a solitaire containing one 1.30 ct centre diamond should therefore not assume the diamonds visible in the middle are the same size. One figure describes the entire collection of stones. The other describes one stone." }
    ]
  },
  {
    heading: "Example 3: Three-Stone Ring",
    content: [
      { type: "paragraph", text: "Suppose a ring contains: one 0.80 ct centre diamond and two 0.25 ct side diamonds. The combined total is: 0.80 + 0.25 + 0.25 = 1.30 ct total diamond weight. The ring is therefore approximately: 1.30 tcw while its centre diamond is: 0.80 ct." },
      { type: "paragraph", text: "This example shows why the centre-stone weight can be substantially smaller than the headline total." }
    ]
  },
  {
    heading: "Example 4: Diamond Stud Earrings",
    content: [
      { type: "paragraph", text: "Earrings create one of the most common total-weight misunderstandings. Imagine a pair advertised as: 1.00 carat total weight diamond stud earrings. If the stones are equally matched, that could mean approximately: 0.50 ct in the left earring and: 0.50 ct in the right earring." },
      { type: "paragraph", text: "It does not normally mean one full carat per ear when the advertised figure explicitly describes the pair's total weight. So before buying diamond studs, ask: Is the quoted carat weight per earring or for the pair? This one question can completely change your expectation of their physical size." }
    ]
  },
  {
    heading: "What Does 2 Carat Total Weight Mean for Earrings?",
    content: [
      { type: "paragraph", text: "A pair described as: 2.00 cttw could contain approximately one carat of diamond per earring if the pair is evenly matched. That is different from: two 2.00 ct diamond earrings which would imply approximately four carats combined." },
      { type: "paragraph", text: "Product wording needs to make this difference unmistakable. For earrings, Aurelia should ideally show both figures where verified: Approximate diamond weight per earring and: Total diamond weight for pair." }
    ]
  },
  {
    heading: "What Does 1 Carat Total Weight Mean?",
    content: [
      { type: "paragraph", text: "It means the stones being counted together have a combined weight of approximately one carat, subject to the precise product specification and any stated weight tolerance. It does not reveal how that carat is distributed." },
      { type: "paragraph", text: "One carat total could theoretically be: one 1.00 ct diamond; two 0.50 ct diamonds; four 0.25 ct diamonds; ten 0.10 ct diamonds; or many smaller diamonds adding to the same total. The visual result would be dramatically different." },
      { type: "paragraph", text: "This is why total weight must be paired with information about stone count and individual stone size where those details matter to the design." }
    ]
  },
  {
    heading: "What Does 2 Carat Total Weight Mean?",
    content: [
      { type: "paragraph", text: "The same principle applies. Two carats total simply means that the applicable diamonds together contribute approximately two carats. It could be concentrated in one or two significant stones. Or it could be distributed across dozens of small stones." },
      { type: "paragraph", text: "Without knowing the individual weights or dimensions, 2 cttw does not tell you how large any one diamond will look." }
    ]
  },
  {
    heading: "Example 5: Tennis Bracelet",
    content: [
      { type: "paragraph", text: "Total carat weight is particularly useful for tennis jewellery because a bracelet can contain dozens of diamonds. Suppose a bracelet contains 50 diamonds, each averaging approximately: 0.05 ct. The approximate total is: 50 × 0.05 = 2.50 ct total weight." },
      { type: "paragraph", text: "Another bracelet might also contain 2.50 tcw but use fewer, larger diamonds. Those two bracelets would have different visual proportions despite sharing the same total weight. So when comparing tennis bracelets, check: the total diamond weight, number of stones, bracelet length and approximate dimensions of the individual stones. The total figure alone does not define the appearance." }
    ]
  },
  {
    heading: "Why Bracelet Length Matters",
    content: [
      { type: "paragraph", text: "Imagine two tennis bracelets with the same total weight. One is shorter. The other is longer. If everything else were equal, the longer bracelet may need to spread the available diamond weight over a greater length. That could mean smaller individual stones or different spacing." },
      { type: "paragraph", text: "Therefore, comparing total carat weight without considering bracelet dimensions can be misleading. The final appearance depends on how that weight is distributed across the design." }
    ]
  },
  {
    heading: "Example 6: Tennis Necklace",
    content: [
      { type: "paragraph", text: "The same issue becomes even more important in necklaces. A necklace might contain: 10 ct total diamond weight spread across dozens or even hundreds of stones. That does not mean the necklace contains a ten-carat individual diamond." },
      { type: "paragraph", text: "For line necklaces, useful information includes: total diamond weight; necklace length; stone count; and approximate individual diamond dimensions where available. A shorter necklace and a longer necklace with the same total diamond weight can look very different." }
    ]
  },
  {
    heading: "Example 7: Pavé Ring",
    content: [
      { type: "paragraph", text: "A pavé ring may contain dozens of tiny diamonds. Imagine: one 1.00 ct centre diamond plus 40 accent diamonds averaging approximately 0.01 ct each. The accent stones contribute approximately: 0.40 ct. The overall piece therefore contains: 1.40 ct total diamond weight." },
      { type: "paragraph", text: "But visually, most of the central presence still comes from the 1.00 ct centre stone. That is why both figures are useful." }
    ]
  },
  {
    heading: "Example 8: Diamond Pendant",
    content: [
      { type: "paragraph", text: "Suppose a pendant contains one: 0.75 ct centre diamond plus smaller surrounding diamonds totalling: 0.25 ct. The complete pendant contains: 1.00 ct total diamond weight." },
      { type: "paragraph", text: "If the product title simply says: 1 Carat Diamond Pendant a shopper could reasonably imagine one full-carat centre diamond. A clearer description would distinguish: Centre diamond: 0.75 ct; Total diamond weight: 1.00 ct where those figures are verified." }
    ]
  },
  {
    heading: "Total Carat Weight Does Not Tell You Diamond Size",
    content: [
      { type: "paragraph", text: "Total carat weight is still a measurement of weight, not dimensions. And because the weight is distributed across multiple stones, the disconnect from visible individual size becomes even larger." },
      { type: "paragraph", text: "A 3 ct total-weight bracelet and a 3 ct solitaire both contain three carats of diamond weight. But their appearance could hardly be more different. The solitaire concentrates that weight in one stone. The bracelet distributes it across an entire line." },
      { type: "paragraph", parts: [{ text: "For single-diamond carat versus millimetre dimensions, read " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }, { text: "." }] }
    ]
  },
  {
    heading: "Total Carat Weight Does Not Tell You Stone Count",
    content: [
      { type: "paragraph", text: "Two pieces can have identical total weights and different numbers of diamonds. Consider: 10 diamonds × 0.10 ct = 1.00 tcw; 20 diamonds × 0.05 ct = 1.00 tcw; 50 diamonds × 0.02 ct = 1.00 tcw. All three examples contain the same combined weight. But the designs would have very different visual textures and individual-stone sizes. The number of diamonds matters." }
    ]
  },
  {
    heading: "Total Carat Weight Does Not Tell You Quality",
    content: [
      { type: "paragraph", text: "TCW tells you how much the diamonds weigh together. It does not tell you their colour. It does not tell you their clarity. It does not tell you their cut quality. It does not tell you whether the stones are well matched. And it does not tell you whether the finished jewellery is well made." },
      { type: "paragraph", text: "A high total carat weight can therefore be impressive while revealing relatively little about the quality of the complete piece." }
    ]
  },
  {
    heading: "Why One Large Diamond Is Not Equivalent to Many Small Diamonds of the Same Total Weight",
    content: [
      { type: "paragraph", text: "A single 2.00 ct diamond and twenty 0.10 ct diamonds both contain two carats of diamond weight. But they do not normally occupy the same market position. Large individual diamonds and small melee diamonds have different supply, cutting and pricing dynamics." },
      { type: "paragraph", text: "This is why a ring containing many small diamonds totalling 2.00 tcw can cost substantially less than a solitaire containing one otherwise comparable 2.00 ct diamond. GIA specifically uses this distinction when explaining total carat weight." },
      { type: "paragraph", text: "The important consumer lesson is: total weight should not be used as though it were equivalent to the weight of one diamond." }
    ]
  },
  {
    heading: "Is Total Carat Weight the Same for Lab-Grown and Natural Diamonds?",
    content: [
      { type: "paragraph", text: "The measurement system is the same. One metric carat equals 0.20 grams regardless of whether the diamonds are laboratory-grown or natural. If ten lab-grown diamonds collectively weigh 1.00 ct, the combined mass is 0.20 grams. If ten natural diamonds collectively weigh 1.00 ct, the combined mass is also 0.20 grams. Origin does not change the definition of a carat. The market prices of those stones may differ, but the unit of weight does not." }
    ]
  },
  {
    heading: "Can Lab-Grown Diamond Jewellery Use TCW?",
    content: [
      { type: "paragraph", text: "Yes. Total carat weight is simply a method of expressing combined gemstone weight. It applies perfectly well to laboratory-grown diamond jewellery containing multiple diamonds. A lab-grown diamond tennis bracelet might therefore be described as: 5.00 ct total diamond weight if that is the verified combined weight." },
      { type: "paragraph", text: "The product should still make the laboratory-grown origin of the diamonds clear. TCW communicates weight. \"Lab-grown\" communicates origin. Those are separate disclosures." }
    ]
  },
  {
    heading: "Is TCW the Same as TDW?",
    content: [
      { type: "paragraph", text: "Some retailers use TDW to mean total diamond weight. In practical shopping contexts, TDW may communicate the same basic idea: the combined weight of the diamonds in the jewellery. However, abbreviations vary across retailers." },
      { type: "paragraph", text: "The safest product copy does not force shoppers to decode abbreviations. For example: Total Diamond Weight: 2.50 ct is clearer than displaying only: 2.50 TDW or: 2.50 CTTW. Plain language improves both customer understanding and product-data consistency." }
    ]
  },
  {
    heading: "What If the Jewellery Contains Diamonds and Other Gemstones?",
    content: [
      { type: "paragraph", text: "This is where terminology requires care. GIA uses total carat weight / tcw specifically for the combined weight of diamonds in jewellery containing diamonds, while the combined weight of a mixture of gemstones may instead be described as total gem weight." },
      { type: "paragraph", text: "A product containing diamonds and sapphires should therefore not casually combine all stones into a figure labelled: Diamond TCW unless that figure genuinely refers only to the diamonds. Product specifications should say exactly what is being totalled." }
    ]
  },
  {
    heading: "Should the Centre Diamond Be Included in Total Carat Weight?",
    content: [
      { type: "paragraph", text: "Usually, when the stated total refers to all diamonds in the piece, the centre diamond contributes to that total. For example: Centre: 1.00 ct; Side diamonds: 0.40 ct combined; Total diamond weight: 1.40 ct." },
      { type: "paragraph", text: "But retailers should never force the shopper to infer this. The product page should specify what the stated total includes. If a total excludes the centre stone, that needs to be made clear as well." }
    ]
  },
  {
    heading: "What About Two-Stone Earrings?",
    content: [
      { type: "paragraph", text: "For a pair of simple studs, the total may refer to the combined weight of both centre diamonds. For example: Left diamond: approximately 0.50 ct; Right diamond: approximately 0.50 ct; Pair total: approximately 1.00 ct." },
      { type: "paragraph", text: "This is one of the clearest situations where CTTW and individual carat weight need to appear together." }
    ]
  },
  {
    heading: "What About Halo Earrings?",
    content: [
      { type: "paragraph", text: "Halo earrings introduce another layer. Each earring could contain: one centre diamond; plus multiple halo diamonds. The pair's total weight could therefore combine: both centre stones and all accent stones." },
      { type: "paragraph", text: "A headline such as: 2 ct total weight earrings would then tell you very little about the size of each centre stone unless that information is separately provided. For shoppers focused on visible centre size, always look beyond the total." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/total-carat-weight-meaning-diamond-jewellery/32 (2).jpg", alt: "Total carat weight tennis bracelet necklace calculation loose diamond weigh", title: "Stone Distribution and Calculations", caption: "For tennis jewellery, always compare total weight alongside stone count, individual dimensions and bracelet or necklace length.", priority: false }
    ]
  },
  {
    heading: "Can Total Carat Weight Be Estimated?",
    content: [
      { type: "paragraph", text: "For jewellery that has already been assembled, individual small stones may sometimes be assessed through measurements, manufacturing records or other methods rather than being removed and weighed individually. This is one reason mounted-jewellery documentation can differ from individual loose-diamond reports." },
      { type: "paragraph", text: "If the figure is approximate or estimated, the product documentation should communicate that appropriately rather than presenting an estimate with unjustified precision." }
    ]
  },
  {
    heading: "Why Loose Diamonds Are Easier to Weigh Precisely",
    content: [
      { type: "paragraph", text: "A loose diamond can be placed directly on a highly sensitive gemmological balance. A mounted stone cannot be weighed separately from its setting without removing it. For centre stones that were independently weighed and documented before mounting, the exact reported carat weight may already be available." },
      { type: "paragraph", text: "For a completed jewellery article containing many small mounted stones, the documentation context can be different." },
      { type: "paragraph", parts: [{ text: "For loose versus mounted reporting, read " }, { text: "Diamond Certification vs Jewellery Certification", href: "/blog/diamond-certification-vs-jewellery-certification/" }, { text: "." }] }
    ]
  },
  {
    heading: "Does an IGI Jewellery Report Show Total Diamond Weight?",
    content: [
      { type: "paragraph", text: "Finished-jewellery laboratories can document gemstone information according to the service and mounting conditions. However, the buyer should read the actual report rather than assuming that a finished-jewellery document provides the same precise individual data as a loose-diamond report." },
      { type: "paragraph", text: "The setting may limit direct weighing and observation of individual stones." },
      { type: "paragraph", parts: [{ text: "For IGI reporting specifically, read " }, { text: "What Is an IGI Lab-Grown Diamond Certificate?", href: "/blog/igi-certificate-for-lab-grown-diamond/" }] }
    ]
  },
  {
    heading: "Can You Calculate Total Carat Weight Yourself?",
    content: [
      { type: "paragraph", text: "Yes, when accurate individual stone weights are known. The formula is: Total carat weight = sum of the carat weights of the diamonds being counted." },
      { type: "paragraph", text: "For example: 1 × 1.00 ct centre = 1.00 ct; 2 × 0.15 ct side stones = 0.30 ct; 20 × 0.01 ct accent stones = 0.20 ct. Combined: 1.00 + 0.30 + 0.20 = 1.50 tcw." },
      { type: "paragraph", text: "The arithmetic is simple. The difficult part is making sure the underlying individual weights are accurate and that you know exactly which stones the seller has included." }
    ]
  },
  {
    heading: "Can You Calculate TCW From Millimetres?",
    content: [
      { type: "paragraph", text: "Only approximately if you do not know the actual weights. Diamond weight can be estimated from dimensions and shape, but a dimensional estimate is not equivalent to direct weighing because depth, proportions and exact geometry influence mass." },
      { type: "paragraph", text: "For product specifications, use verified weights from manufacturing or laboratory documentation where available. Do not replace known data with a generic online size calculator." }
    ]
  },
  {
    heading: "Is Total Carat Weight Exact?",
    content: [
      { type: "paragraph", text: "It depends on how the product is specified and measured. Diamond jewellery manufacturing can involve weight tolerances, particularly where many small stones are matched within size ranges. Retailers may also advertise rounded or fractional weights." },
      { type: "paragraph", text: "The important principle is that the advertised figure should accurately describe what is supplied and any approximation or tolerance should not mislead the customer. Aurelia should therefore avoid publishing invented precision such as: 2.0000 tcw when the operational product data does not support that level of accuracy." }
    ]
  },
  {
    heading: "US Rules About Diamond Weight Claims",
    content: [
      { type: "paragraph", text: "For US-facing sales content, diamond-weight claims deserve particular care. FTC jewellery guidance says diamond weight must not be misrepresented. When decimal carat figures are used, the stated number needs to be accurate to the represented decimal place." },
      { type: "paragraph", text: "When fractional descriptions such as ½ carat are used, the seller should clearly disclose that the weight is not exact and provide the reasonable weight range or tolerance used. For Aurelia, the simplest product-data approach is to use verified decimal weights wherever possible and clearly identify whether they are individual or total weights." }
    ]
  },
  {
    heading: "Why \"1/2 Carat\" and \"0.50 ct\" Are Not Always Communicated the Same Way",
    content: [
      { type: "paragraph", text: "A decimal such as: 0.50 ct is presented as a rounded numeric measurement according to the applicable precision. A fraction such as: ½ carat can represent a range rather than an exact 0.500 ct stone." },
      { type: "paragraph", text: "US FTC guidance specifically addresses this difference and requires additional disclosure when fractional diamond-weight representations are used. This matters more on product pages and advertisements than in general educational content. Aurelia should avoid casual fractional claims unless the underlying tolerances are known and properly disclosed." }
    ]
  },
  {
    heading: "Should Product Titles Use TCW?",
    content: [
      { type: "paragraph", text: "They can, but clarity matters more than brevity. A product title such as: Lab-Grown Diamond Tennis Bracelet — 5.00 ct Total Weight is understandable. A title containing only: 5.00 CTTW Bracelet requires the customer to know specialist terminology." },
      { type: "paragraph", text: "The title or immediately adjacent specification should therefore explain the abbreviation." }
    ]
  },
  {
    heading: "How Aurelia Product Pages Should Show Carat Information",
    content: [
      { type: "paragraph", text: "For a solitaire, a clear specification might state: Centre Diamond Weight: 1.00 ct." },
      { type: "paragraph", text: "For a halo ring: Centre Diamond Weight: 1.00 ct; Accent Diamond Weight: 0.30 ct combined; Total Diamond Weight: 1.30 ct." },
      { type: "paragraph", text: "For stud earrings: Diamond Weight Per Earring: approximately 0.50 ct; Total Diamond Weight Per Pair: approximately 1.00 ct." },
      { type: "paragraph", text: "For a tennis bracelet: Total Diamond Weight: 5.00 ct; Number of Diamonds: [verified count]; Bracelet Length: [verified measurement]." },
      { type: "paragraph", text: "Only publish values Aurelia has actually verified for the SKU." }
    ]
  },
  {
    heading: "Why Total Carat Weight Should Not Be Used as the Only Headline Specification",
    content: [
      { type: "paragraph", text: "A total-weight number can sound impressive while leaving essential information unanswered. \"5 carats\" could mean: one five-carat stone; five one-carat stones; fifty 0.10 ct stones; or another distribution entirely. For multi-stone jewellery, buyers need context." },
      { type: "paragraph", text: "The more important the individual stone size is to the appearance, the more important it becomes to disclose that information separately." }
    ]
  },
  {
    heading: "Is Higher TCW Always Better?",
    content: [
      { type: "paragraph", text: "No. A higher total weight simply means more combined diamond mass. It does not automatically mean: better cut; better matching; better clarity; better colour; better jewellery construction; or a more attractive design." },
      { type: "paragraph", text: "A lower-TCW bracelet with well-matched stones and proportions you prefer can be more appealing than a heavier piece. Use total weight as a specification, not as a complete quality score." }
    ]
  },
  {
    heading: "Does TCW Determine Price?",
    content: [
      { type: "paragraph", text: "It can influence price, but it does not determine price by itself. Two pieces with identical total diamond weight can have very different costs because the diamond weight can be distributed differently. A piece containing one large centre diamond plus small accents can occupy a different market position from jewellery using only small stones." },
      { type: "paragraph", text: "Colour, clarity, cut, natural versus lab-grown origin, metal and manufacturing also affect price. Therefore: same TCW does not mean same value." }
    ]
  },
  {
    heading: "Why Stone Distribution Matters for Price",
    content: [
      { type: "paragraph", text: "Large individual diamonds generally occupy different rarity and pricing categories from smaller stones. That means: 1 × 2.00 ct is not commercially equivalent to: 20 × 0.10 ct even though both mathematically total two carats." },
      { type: "paragraph", text: "This is one of the most important concepts for shoppers comparing multi-stone jewellery." }
    ]
  },
  {
    heading: "Does TCW Tell You Whether a Diamond Is Lab-Grown?",
    content: [
      { type: "paragraph", text: "No. TCW communicates only combined weight. A 3 tcw bracelet could contain: natural diamonds; laboratory-grown diamonds; or potentially another clearly described gemstone arrangement if a seller were using different terminology." },
      { type: "paragraph", text: "The material and origin therefore need separate disclosure. For lab-grown products, Aurelia should ensure the laboratory-grown origin remains clear alongside the weight specification." }
    ]
  },
  {
    heading: "Carat vs Karat vs Total Carat Weight",
    content: [
      { type: "paragraph", text: "In US terminology: carat refers to gemstone weight; karat refers to gold purity; total carat weight refers to the combined weight of multiple gemstones or diamonds as specified." },
      { type: "paragraph", text: "In UK jewellery language, carat can also appear in descriptions of gold fineness, such as 18-carat gold. This makes phrases such as: Diamond Total Carat Weight especially useful on UK-facing product pages. It reduces ambiguity between gemstone weight and metal fineness." }
    ]
  },
  {
    heading: "What Should You Check When Comparing Diamond Earrings?",
    content: [
      { type: "paragraph", text: "Do not compare only the headline TCW. Check whether the number is for: each earring or: the complete pair. Then check individual diamond dimensions, shape, setting size and overall earring dimensions." },
      { type: "paragraph", text: "A pair labelled 2.00 cttw can look very different depending on how the two carats are distributed." }
    ]
  },
  {
    heading: "What Should You Check When Comparing Tennis Bracelets?",
    content: [
      { type: "paragraph", text: "Compare: total diamond weight; bracelet length; number of diamonds; individual stone dimensions where available; and setting construction. A longer bracelet with the same TCW may distribute that weight differently from a shorter one. The complete dimensions therefore matter." }
    ]
  },
  {
    heading: "What Should You Check With Halo Rings?",
    content: [
      { type: "paragraph", text: "Check both: centre-stone weight and: total diamond weight. The centre stone usually drives much of the visible central scale. A large halo can make a centre diamond appear larger without increasing the centre diamond's actual carat weight. That is a design effect, not a change in gemstone weight." }
    ]
  },
  {
    heading: "What Should You Check With Multi-Stone Necklaces?",
    content: [
      { type: "paragraph", text: "Look at total weight together with: necklace length; stone count; distribution of larger and smaller stones; and the actual dimensions of the design. Two necklaces with identical TCW can have completely different visual scale and rhythm." }
    ]
  },
  {
    heading: "Common Mistake: Assuming TCW Means Centre-Stone Weight",
    content: [
      { type: "paragraph", text: "This is probably the most important mistake to avoid. If a ring says: 2.00 tcw do not assume the centre stone is two carats. Find the centre-stone specification." }
    ]
  },
  {
    heading: "Common Mistake: Assuming One Carat Total Earrings Means One Carat Per Ear",
    content: [
      { type: "paragraph", text: "A one-carat-total pair commonly divides that weight across both earrings. Always confirm the stated distribution." }
    ]
  },
  {
    heading: "Common Mistake: Comparing TCW Across Different Jewellery Types",
    content: [
      { type: "paragraph", text: "A five-carat tennis bracelet and a five-carat solitaire are not meaningful equivalents simply because the number matches. The weight is distributed completely differently." }
    ]
  },
  {
    heading: "Common Mistake: Ignoring Jewellery Length",
    content: [
      { type: "paragraph", text: "For line bracelets and necklaces, length affects how total diamond weight is spread across the piece. Always compare physical dimensions as well as TCW." }
    ]
  },
  {
    heading: "Common Mistake: Treating TCW as a Quality Grade",
    content: [
      { type: "paragraph", text: "It is only weight. It tells you nothing by itself about cut, colour, clarity, matching or workmanship." }
    ]
  },
  {
    heading: "Common Mistake: Assuming All Abbreviations Mean Exactly the Same Thing Everywhere",
    content: [
      { type: "paragraph", text: "TCW, CTW, CTTW and TDW are commonly encountered retail terms, but retailers are not perfectly consistent. Read the accompanying product description rather than relying on the abbreviation alone." },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "What does total carat weight mean?", answer: "It means the combined weight of the diamonds being counted in a multi-stone piece of jewellery." },
          { question: "What does TCW mean in diamond jewellery?", answer: "TCW commonly means total carat weight." },
          { question: "What does CTW mean?", answer: "CTW is commonly used by retailers to indicate carat total weight or total carat weight. Check the specific product description." },
          { question: "What does CTTW mean in jewellery?", answer: "CTTW commonly means carat total weight and indicates the combined weight of multiple stones." },
          { question: "Is CTTW the same as TCW?", answer: "They are commonly used to communicate the same general concept of combined stone weight, although retailer terminology varies." },
          { question: "What is the difference between ct and tcw?", answer: "ct can describe one diamond's carat weight. tcw describes the combined carat weight of multiple diamonds." },
          { question: "What does 1 carat total weight mean?", answer: "It means the applicable diamonds together weigh approximately one carat. It does not tell you how that weight is distributed." },
          { question: "What does 2 carat total weight mean?", answer: "It means the combined diamonds total approximately two carats, not necessarily that any individual stone weighs two carats." },
          { question: "What does 1 carat total weight mean for earrings?", answer: "For a matched pair, it may mean approximately 0.50 ct per earring, but always verify the product specification." },
          { question: "What does 2 carat total weight mean for earrings?", answer: "For an evenly matched two-stone pair, it may mean approximately 1.00 ct per earring. Multi-stone designs can distribute the weight differently." },
          { question: "Is total carat weight the same as diamond size?", answer: "No. Carat measures weight, not physical dimensions." },
          { question: "Does TCW include the centre diamond?", answer: "If the figure is stated as the total weight of all diamonds, the centre usually contributes to it. Check the product wording to confirm exactly what is included." },
          { question: "Does total carat weight include side stones?", answer: "It can when the stated total covers all diamonds in the piece." },
          { question: "Does total carat weight include the metal?", answer: "No. Carat weight refers to gemstones, not the precious-metal setting." },
          { question: "Is a two-carat-total ring the same as a two-carat solitaire?", answer: "No. A two-carat-total ring may distribute the weight among several diamonds." },
          { question: "Are two 0.50 ct earrings one carat total?", answer: "Yes. Two 0.50 ct diamonds together weigh 1.00 ct." },
          { question: "Is a 5 tcw bracelet made from five one-carat diamonds?", answer: "Not necessarily. The five carats may be distributed across many smaller stones." },
          { question: "Is higher total carat weight always better?", answer: "No. TCW measures combined mass, not overall jewellery quality." },
          { question: "Why can the same TCW have different prices?", answer: "Stone size distribution, colour, clarity, cut, origin, metal, design and workmanship can all affect price." },
          { question: "Do lab-grown diamonds use total carat weight?", answer: "Yes. Lab-grown and natural diamonds use the same metric carat system." },
          { question: "Is one lab-grown carat different from one natural-diamond carat?", answer: "No. One metric carat always equals 0.20 grams." },
          { question: "What if jewellery contains diamonds and coloured gemstones?", answer: "The seller should clearly state what the total refers to rather than presenting a combined mixed-gem weight as though it were all diamond weight." },
          { question: "Can total carat weight be estimated?", answer: "Mounted jewellery may involve estimates or manufacturing records in some circumstances. Any approximation should be described appropriately." },
          { question: "Does an independent diamond report show TCW?", answer: "Individual loose-diamond reports concern individual stones. Finished-jewellery documentation can provide different information according to the service and mounting." },
          { question: "Should Aurelia show total carat weight on product pages?", answer: "Yes where verified, but it should also distinguish important individual diamond weights when those are material to understanding the design." }
        ]
      }
    ]
  },
  {
    heading: "Final Answer: What Does TCW or CTTW Mean?",
    content: [
      { type: "paragraph", text: "TCW, CTW and CTTW are used in jewellery to communicate the combined carat weight of multiple stones rather than necessarily the weight of one diamond. That distinction matters whenever jewellery contains more than one diamond." },
      { type: "paragraph", text: "A 1.00 ct solitaire generally refers to one individual one-carat diamond. A pair of earrings described as 1.00 carat total weight may contain approximately 0.50 ct per ear. A halo ring described as 1.50 tcw could contain a 1.00 ct centre diamond and another 0.50 ct distributed through the halo and side stones. A five-carat tennis bracelet may distribute those five carats across dozens of diamonds." },
      { type: "paragraph", text: "The headline number can therefore be identical while the jewellery looks completely different. When comparing a multi-stone design, ask four things: What is the total diamond weight? How many stones contribute to it? What does each important stone weigh or measure? How large is the complete jewellery piece? Those questions give TCW the context it needs." },
      { type: "paragraph", text: "Total carat weight is useful. It simply should not be mistaken for centre-stone weight, physical size or overall quality." },
      { type: "paragraph", parts: [{ text: "For the underlying single-diamond measurement, continue with " }, { text: "Lab-Grown Diamond Carat Weight Explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For carat versus millimetre size, read " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For pre-purchase questions, see " }, { text: "25 Questions to Ask Before Buying a Lab-Grown Diamond", href: "/blog/questions-to-ask-before-buying-lab-grown-diamond/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For report interpretation, use " }, { text: "How to Read a Lab-Grown Diamond Certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" }, { text: "." }] },
      { type: "paragraph", text: "When considering Aurelia Royale jewellery, use the weight figures verified for the specific product. For multi-stone designs, Aurelia should clearly distinguish individual centre-stone weight from total diamond weight wherever both materially affect what the customer expects to receive." },
      { type: "paragraph", parts: [{ text: "Where a design is not currently available for direct purchase, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry to register your interest." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Total carat weight is useful — understand what it includes before comparing multi-stone designs.", shopHref: "/shop/", contactHref: "/contact/" }
    ]
  }
];

export default function BlogTotalCaratWeightPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">What Does Total Carat Weight Mean?</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">TCW, CTW and CTTW in Diamond Jewellery Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="total-carat-weight-meaning-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}

