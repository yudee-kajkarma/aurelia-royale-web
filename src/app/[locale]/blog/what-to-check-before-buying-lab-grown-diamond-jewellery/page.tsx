import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "What to Check Before Buying Lab-Grown Diamond Jewellery",
  description: "Check lab-grown diamond jewellery properly: origin, carat, size, colour, clarity, cut, reports, metal, total weight and whether specifications are exact or approximate.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/1.jpg", alt: "What to check before buying lab-grown diamond jewellery checklist verification", title: "What to Check Before Buying Lab-Grown Diamond Jewellery", caption: "Make sure the product description, applicable report, jewellery specifications and physical design all describe the same product.", priority: true },
      { type: "paragraph", text: "Before buying lab-grown diamond jewellery, you do not need every possible fact about diamonds. You do need the information that could materially change what you believe you are buying." },
      { type: "paragraph", text: "That means checking more than a photograph and a headline carat figure. You should understand the diamond origin, how diamond weight is distributed, the stone's dimensions and relevant quality information, what kind of laboratory documentation applies, what metal the jewellery uses, the physical dimensions of the finished piece and whether the information being presented is exact, minimum, ranged or approximate." },
      { type: "paragraph", text: "The objective is simple: make sure the product description, applicable report, jewellery specifications and physical design all describe the same product." },
      { type: "paragraph", text: "A useful way to think about the process is: What is verified? What has merely been disclosed by the seller? What remains unconfirmed? Then ask one final question: Would the unconfirmed information change my buying decision? If yes, resolve it before proceeding." },
    ],
  },
  {
    heading: "Quick Answer: What Should You Check Before Buying Lab-Grown Diamond Jewellery?",
    content: [
      { type: "paragraph", text: "For most pieces, check five layers of information. First, establish what the jewellery contains: laboratory-grown diamond origin, diamond configuration, centre-stone weight and total diamond weight. Second, understand the individual diamond characteristics that matter for the product: carat, millimetre dimensions, colour, clarity, cut or finish information and shape. Third, check the documentation: which laboratory issued the report, what exactly was examined, whether the report matches the product and whether a laser inscription applies. Fourth, check the finished jewellery: underlying metal, fineness, plating or hollow construction where relevant, product dimensions, ring size, chain length, bracelet length, earring scale and finished weight if supplied." },
      { type: "paragraph", text: "Finally, identify whether every specification is exact, minimum, range or approximate. That last distinction prevents a large amount of online-shopping confusion." },
    ],
  },
  {
    heading: "1. Confirm That the Diamonds Are Clearly Disclosed as Lab-Grown",
    content: [
      { type: "paragraph", text: "Start with origin. The page should make it clear whether the diamonds are: laboratory-grown, natural, or another gemstone or simulant. Do not rely on phrases such as: diamond alternative, eco diamond, created stone, or: diamond look when the actual material is unclear." },
      { type: "paragraph", text: "The FTC's jewellery guidance requires marketers to represent gemstone origin and material characteristics truthfully and not misleadingly. The first check is therefore straightforward: Does the product clearly say that the diamond is laboratory-grown? If yes, continue. If not, clarify what the product actually contains." },
    ],
  },
  {
    heading: "2. Understand the Diamond Configuration",
    content: [
      { type: "paragraph", text: "Next determine how many diamonds the jewellery contains and how they are arranged. A product may use: one centre diamond, a centre diamond plus accents, several similarly sized diamonds, or many small stones. This matters because the headline carat figure can describe different things." },
      { type: "paragraph", text: "For example: 1.00 ct centre stone and: 1.00 ct total diamond weight do not describe the same product. A tennis bracelet can contain several carats in total without containing one large centre diamond. A pair of earrings may state a combined weight for the pair. Before comparing anything else, understand the configuration." },
    ],
  },
  {
    heading: "3. Separate Centre-Stone Weight From Total Carat Weight",
    content: [
      { type: "paragraph", text: "This is one of the most important product checks. If a ring contains a centre diamond and several smaller stones, identify: the centre-stone weight, the accent-stone weight where disclosed, and: the total diamond weight. Do not assume the largest number on the page refers to the centre diamond." },
      { type: "paragraph", text: "For earrings, also determine whether the stated figure applies: to each stone, to each earring, or: to the complete pair. The FTC's diamond-weight guidance also requires decimal carat claims to be accurate to the stated decimal precision." },
      { type: "paragraph", parts: [{ text: "For a detailed explanation, read " }, { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "4. Check Carat Weight—but Do Not Treat Carat as Physical Size",
    content: [
      { type: "paragraph", text: "Carat measures weight. It does not directly tell you how large the diamond appears. Two diamonds of the same carat can have different: length, width, depth, shape, and face-up appearance. That means a product described as 1.00 ct is not fully understood until you also know the stone's physical measurements when those measurements are relevant and available. For visible size, use: carat + dimensions + shape rather than carat alone." },
      { type: "paragraph", parts: [{ text: "For the deeper explanation, use " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }] },
    ],
  },
  {
    heading: "5. Check the Diamond's Millimetre Measurements",
    content: [
      { type: "paragraph", text: "For an individually significant diamond, millimetre measurements translate carat weight into physical scale. A round brilliant is typically documented using minimum diameter, maximum diameter and depth. Fancy shapes are commonly described using length, width and depth. IGI's current laboratory-grown diamond reports include the diamond description, shape, cutting style, measurements and 4Cs information." },
      { type: "paragraph", text: "Measurements are especially useful when comparing stones with the same carat weight. Do not assume a larger carat figure always creates a proportionally larger face-up appearance." },
    ],
  },
  {
    heading: "6. Separate Diamond Size From Finished-Jewellery Size",
    content: [
      { type: "paragraph", text: "A 6.5 mm diamond does not mean the entire ring, pendant or earring is 6.5 mm across. The finished piece may include: prongs, bezel metal, halo stones, decorative metal, or surrounding components. Always distinguish: diamond dimensions from: finished-jewellery dimensions. This becomes particularly important with earrings and pendants because macro photography can make the whole product look significantly larger than it is." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/2.jpg", alt: "Diamond shape colour clarity cut report verification lab-grown jewellery checklist", title: "7. Check Diamond Shape and Cutting Style", caption: "The shape or cutting style on the report should agree with the product being sold — any contradiction should be resolved.", priority: false },
    ],
  },
  {
    heading: "7. Check Diamond Shape and Cutting Style",
    content: [
      { type: "paragraph", text: "Shape is a visual characteristic. Round brilliant, oval, emerald, radiant, pear and other cuts can look very different even at similar carat weights. Do not rely on the product title alone when an individual laboratory report exists. The shape or cutting style on the report should agree with the product being sold." },
      { type: "paragraph", text: "If the product says: oval laboratory-grown diamond while the associated report says: round brilliant, that is a material contradiction that should be resolved." },
    ],
  },
  {
    heading: "8. Check Colour Information",
    content: [
      { type: "paragraph", text: "If colour information is used to sell the diamond, determine: which laboratory or specification system the colour claim comes from, whether it applies to the centre stone or all diamonds, and: whether it is an exact grade or a range. IGI currently continues detailed colour grading for laboratory-grown diamonds, including the familiar D-to-Z scale." },
      { type: "paragraph", text: "Do not assume that every diamond in a multi-stone piece necessarily carries one identical individual colour grade unless the product explicitly says so. A product might legitimately specify a range for matched smaller diamonds. The important issue is clarity of wording." },
    ],
  },
  {
    heading: "9. Check Clarity the Same Way",
    content: [
      { type: "paragraph", text: "Clarity can be: an exact grade for one reported diamond, a minimum specification, or: a quality range covering multiple stones. Those are different claims. For example: VS1 is different from: VS or better and different again from: VS–SI range. IGI's current laboratory-grown reporting includes detailed clarity categories from IF through included grades." },
      { type: "paragraph", text: "Ask whether the claim applies to: the centre diamond, all diamonds, or: the general quality specification of the piece." },
    ],
  },
  {
    heading: "10. Check Cut, Polish and Symmetry Where Relevant",
    content: [
      { type: "paragraph", text: "For significant centre stones, cut and finish can materially affect visual performance. Do not reduce the decision to: carat, colour, and clarity. Where available, check: cut information, polish, symmetry, and relevant proportions. But understand the reporting system. Not every shape or laboratory uses identical terminology. A product page should not convert one laboratory's terminology into another system without a legitimate basis." },
    ],
  },
  {
    heading: "11. Be Careful With Current GIA Lab-Grown Reporting",
    content: [
      { type: "paragraph", text: "This is especially important in 2026. Since 1 October 2025, GIA's applicable colourless-to-near-colourless laboratory-grown diamond service uses an overall Premium or Standard Quality Assessment rather than simply applying the traditional natural-diamond colour-and-clarity nomenclature." },
      { type: "paragraph", text: "Premium requires the qualifying stone to meet GIA's Premium criteria across clarity, colour, polish, symmetry and applicable round-brilliant cut. Standard applies where the diamond meets the published minimum Standard criteria. Stones outside those criteria do not receive that assessment. That means an Aurelia product should not automatically describe a current GIA laboratory-grown Quality Assessment using traditional standalone GIA colour and clarity grades that the document does not actually provide. Read the report you have—not the report format you expected." },
    ],
  },
  {
    heading: "12. Check Growth Method Only When It Is Actually Disclosed or Relevant",
    content: [
      { type: "paragraph", text: "Most laboratory-grown diamonds are produced using CVD or HPHT processes. Growth method can appear on laboratory documentation. But CVD and HPHT are not universal quality grades. A CVD diamond is not automatically superior to an HPHT diamond. An HPHT diamond is not automatically superior to CVD." },
      { type: "paragraph", text: "If the growth method is disclosed, make sure the product page and report agree. If it is not material to your buying decision, do not let growth method distract you from more important specifications such as cut, dimensions, colour, clarity and actual finished-jewellery quality." },
    ],
  },
  {
    heading: "13. Check Whether Post-Growth Treatment Is Disclosed Where Relevant",
    content: [
      { type: "paragraph", text: "Some laboratory-grown diamonds can undergo post-growth treatment. Where the laboratory report identifies such treatment, product information should not contradict it. IGI states that treatment information can be recorded within its diamond reporting where relevant. Do not assume: CVD = treated or: HPHT = untreated. Growth process and post-growth treatment are separate issues." },
    ],
  },
  {
    heading: "14. Check Whether a Laboratory Report Actually Exists",
    content: [
      { type: "paragraph", text: "Do not infer an individual report merely because a product uses the word: certified. Ask: Which laboratory? What is the report number? What exactly was examined? An individually reported loose centre diamond and a finished-jewellery report are not the same thing. Likewise, a retailer-issued authenticity document is not automatically an independent laboratory report." },
      { type: "paragraph", parts: [{ text: "For the full distinction, read " }, { text: "What Does Certified Lab-Grown Diamond Jewellery Actually Mean?", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" }] },
    ],
  },
  {
    heading: "15. Understand the Scope of the Report",
    content: [
      { type: "paragraph", text: "A loose-diamond report describes the submitted diamond. A mounted-jewellery report describes the finished article within the limitations created by the mounting. This matters because mounted settings can restrict direct observation and measurement. Therefore, never treat every laboratory document as though it provides exactly the same level of information. The correct question is: What did the laboratory actually examine?" },
    ],
  },
  {
    heading: "16. Verify the Report Independently Where Possible",
    content: [
      { type: "paragraph", text: "Where an individual report number is supplied, use the issuing laboratory's own verification service. Then compare the retrieved document with the product. Checking that a report number exists is only the first step. A genuine report can still be associated with the wrong listing if the product information is incorrect. Compare overlapping data such as: shape, carat, measurements, colour, clarity, and inscription where applicable." },
      { type: "paragraph", parts: [{ text: "For the dedicated process, use " }, { text: "How to Verify an IGI Certificate Number Online", href: "/blog/verify-igi-certificate-number/" }] },
    ],
  },
  {
    heading: "17. Report Found Does Not Automatically Mean Stone Matched",
    content: [
      { type: "paragraph", text: "This distinction deserves its own check. Suppose you enter an IGI report number and a valid document appears. You have verified: the report exists. You have not automatically verified: the physical diamond in front of you is the stone described by that report. Matching requires additional points of consistency. Use the product information, measurements and girdle inscription where applicable." },
    ],
  },
  {
    heading: "18. Check the Laser Inscription Where Relevant",
    content: [
      { type: "paragraph", text: "A microscopic girdle inscription can help link an individual diamond to a report. GIA's current qualifying laboratory-grown diamonds are inscribed with \"Laboratory-Grown\" and the GIA Quality Assessment number. An inscription is useful evidence. It is not a substitute for checking the rest of the product. Likewise, the absence of an inscription does not automatically establish that a diamond is fraudulent; the expected inscription depends on the laboratory service and product." },
      { type: "paragraph", parts: [{ text: "For the detailed guide, read " }, { text: "What Is a Diamond Laser Inscription?", href: "/blog/diamond-laser-inscription/" }] },
    ],
  },
  {
    heading: "19. Check the Jewellery Metal Separately From the Diamond",
    content: [
      { type: "paragraph", text: "A diamond report does not automatically prove what the surrounding jewellery is made from. Check: the underlying metal, fineness, and any plating. Do not infer composition from colour. Yellow jewellery is not automatically solid gold. White jewellery is not automatically platinum. Rose-coloured jewellery is not automatically a particular gold alloy." },
      { type: "paragraph", parts: [{ text: "For the full metal framework, use " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "20. Understand Fineness",
    content: [
      { type: "paragraph", text: "If a product is described as gold, silver or platinum, fineness tells you the precious-metal proportion. For UK hallmarking, the fineness mark records precious-metal content in parts per thousand. For example, the official UK guidance explains that 375 gold contains at least 375 parts gold per thousand. Do not treat: 9ct, 14ct, 18ct, sterling silver, and: platinum as interchangeable materials simply because they can all be used in fine jewellery." },
    ],
  },
  {
    heading: "21. Check Hallmarking Where It Applies",
    content: [
      { type: "paragraph", text: "For qualifying articles sold in the UK and described as gold, silver, platinum or palladium, hallmarking requirements apply above statutory exemption weights. Current UK guidance lists exemption thresholds of: gold — 1 g, silver — 7.78 g, platinum — 0.5 g, palladium — 1 g. A complete UK hallmark includes a sponsor's or maker's mark, metal-and-fineness mark and Assay Office mark." },
      { type: "paragraph", text: "But remember: hallmarking verifies precious-metal fineness. It does not certify: diamond origin, diamond carat, diamond colour, diamond clarity, or: workmanship." },
    ],
  },
  {
    heading: "22. Check Whether the Piece Is Solid, Hollow or Plated",
    content: [
      { type: "paragraph", text: "These terms describe different aspects of jewellery construction. Solid gold generally means the stated gold alloy is used through the relevant metal component rather than merely as a surface coating. Gold plated means gold is applied over another underlying material. Hollow describes internal construction and is not the same as plated. A piece can use genuine precious metal and still have hollow construction. Do not allow these terms to be collapsed into one vague description. If construction materially affects your decision, ask for it to be clarified." },
    ],
  },
  {
    heading: "23. Check the Finished Jewellery Dimensions",
    content: [
      { type: "paragraph", text: "Once the diamond is understood, check the jewellery around it. Depending on the product, useful dimensions can include: ring band width, setting height, earring diameter, earring drop, pendant height and width, bracelet width, chain length, bracelet length, or clasp dimensions. You do not need every measurement for every product. You need the measurements capable of changing your expectation of: scale, fit, or wearability." },
      { type: "paragraph", parts: [{ text: "For the complete measurement guide, read " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
    ],
  },
  {
    heading: "24. Ring Size Is Not the Same as Ring Dimensions",
    content: [
      { type: "paragraph", text: "A ring can have the correct finger size while still being: wider, higher, thicker, or more substantial than expected. Check both: fit size and: physical construction. This is especially important for wide bands or high-set rings." },
    ],
  },
  {
    heading: "25. Check Necklace and Bracelet Length",
    content: [
      { type: "paragraph", text: "A necklace's chain length determines where the jewellery is likely to sit. A bracelet's wearable length affects wrist fit. Do not assume all necklace lengths are standard. Do not assume a bracelet can be resized. Check the stated length and any explicitly confirmed adjustability. If no adjustment is stated, do not invent one." },
    ],
  },
  {
    heading: "26. For Earrings, Check Whether Measurements and Carat Apply to One or the Pair",
    content: [
      { type: "paragraph", text: "Earrings create recurring ambiguity. If the page says: 1.00 ct does that mean: 1.00 ct each, 0.50 ct each for 1.00 ct total, or another distribution? Likewise, is the stated weight or dimension: per earring, or: for the complete pair? Product wording should make this clear. If not, ask." },
    ],
  },
  {
    heading: "27. Do Not Confuse Finished Jewellery Weight With Diamond Carat",
    content: [
      { type: "paragraph", text: "Diamond mass is measured in carats. Finished jewellery mass is normally expressed in grams. Those measurements answer different questions. A ring weighing 4 g does not contain four grams of diamond. A 1 ct diamond weighs 0.20 g. Keep: diamond carat weight and: finished jewellery gram weight separate." },
    ],
  },
  {
    heading: "28. Check Whether the Images Show the Exact Item",
    content: [
      { type: "paragraph", text: "A product page may display: the exact physical item, a representative example, a previous completed piece, or: a rendering. That distinction matters particularly for: made-to-order jewellery, unique centre diamonds, fancy shapes, and products with natural variation between individual stones. If the photograph is representative, use it to judge the design. Do not assume it proves the exact final stone appearance." },
      { type: "paragraph", parts: [{ text: "For the full remote-inspection framework, read " }, { text: "How to Choose Diamond Jewellery Without Seeing It in Person", href: "/blog/choose-diamond-jewellery-without-seeing-in-person/" }] },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/3.jpg", alt: "Product specifications exact minimum range approximate verification worksheet", title: "29. Check Whether Specifications Are Exact, Minimum, Range or Approximate", caption: "Not every specification has the same precision — knowing which type you are reading prevents most online-shopping confusion.", priority: false },
    ],
  },
  {
    heading: "29. Check Whether Specifications Are Exact, Minimum, Range or Approximate",
    content: [
      { type: "paragraph", text: "This is one of the most useful improvements to a jewellery product page. Not every specification has the same precision." },
      { type: "table", headers: ["Specification Type", "Meaning"], rows: [["Exact", "Applies to the specific item or individually identified stone"], ["Minimum", "The supplied product should meet or exceed the stated threshold"], ["Range", "The supplied stones or product are expected within a defined interval"], ["Approximate", "The figure is an estimate or practical target rather than exact"]] },
      { type: "paragraph", text: "For example: Exact: 1.03 ct centre diamond. Minimum: clarity VS or better. Range: colour F–G. Approximate: total diamond weight approximately 0.50 ct. The wording should tell the buyer which type of claim they are reading." },
    ],
  },
  {
    heading: "30. Avoid False Precision",
    content: [
      { type: "paragraph", text: "A made-to-order multi-stone design may not always have the exact same total weight to two decimal places in every production run. Mounted jewellery can also limit the precision of certain measurements. In those cases, a truthful: approximately 0.50 ct or: 0.48–0.52 ct may be more accurate than pretending every finished piece is precisely: 0.500 ct. Precision should reflect the evidence available. Not marketing preference." },
    ],
  },
  {
    heading: "31. Use the Verified / Disclosed / Unconfirmed Framework",
    content: [
      { type: "paragraph", text: "Every important product claim can be placed in one of three categories. Verified means you have independent or direct evidence supporting the claim. For example, an applicable laboratory report verifies certain diamond characteristics within its stated scope, while an appropriate hallmark verifies precious-metal fineness. Disclosed means the retailer states the information, but you have not independently verified it. For example, a product page might state a chain length or finished weight. That can still be useful information. Unconfirmed means the information is missing or unclear. The goal is not to make every field independently verified. The goal is to know which kind of information you are relying on." },
    ],
  },
  {
    heading: "32. Use Omission, Ambiguity and Contradiction Differently",
    content: [
      { type: "paragraph", text: "A missing fact is not the same problem as a conflicting fact. Omission means the information is absent. Example: The product page gives no pendant width. Ambiguity means the wording can reasonably be interpreted in more than one way. Example: \"1 ct earrings\" does not say whether that is per earring or per pair. Contradiction means two sources disagree. Example: The product page says oval, while the report says round. Contradictions usually deserve more urgent clarification than a non-material omission." },
    ],
  },
  {
    heading: "33. Not Every Missing Specification Matters",
    content: [
      { type: "paragraph", text: "A good product page does not need to contain every gemmological field ever created. Ask whether the missing information could reasonably change: your expectation of the product, your ability to compare it, its fit, its physical scale, or: your buying decision. For a small pavé accent stone, an individual clarity plot is unlikely to be necessary. For a significant centre diamond, its carat, dimensions, origin and applicable quality information may matter much more. Use proportional verification." },
    ],
  },
  {
    heading: "34. Check Availability Separately From Product Quality",
    content: [
      { type: "paragraph", text: "A product can have excellent specifications and still not be currently available. Confirm whether the piece is: available now, made to order, offered for preorder, or: open only for waitlist/enquiry. Those terms do not mean the same thing." },
      { type: "paragraph", text: "For Aurelia's current proposed unpriced-product flow: Join Waitlist = expression of interest only. It should not mean: order placed, product reserved, preorder accepted, or: production started." },
      { type: "paragraph", parts: [{ text: "For the complete distinction, read " }, { text: "How to Understand Jewellery Availability and Production Time", href: "/blog/jewellery-availability-production-time/" }] },
    ],
  },
  {
    heading: "35. Check Ready-Made vs Made-to-Order Status",
    content: [
      { type: "paragraph", text: "If the product already exists, you may be able to verify the exact physical piece. If it will be manufactured after ordering, some specifications may describe a repeatable design rather than an already finished object. This can change how you interpret: images, weights, dimensions, diamond selection, and timing. Made to order does not automatically mean custom or bespoke." },
      { type: "paragraph", parts: [{ text: "For the dedicated comparison, read " }, { text: "Ready-Made vs Made-to-Order Diamond Jewellery", href: "/blog/ready-made-vs-made-to-order-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "36. Check What Is Actually Included",
    content: [
      { type: "paragraph", text: "Do not assume every diamond jewellery order contains: a printed report, appraisal, valuation, warranty, care card, gift box, travel pouch, or: insurance document. Check which items the retailer actually promises. If a laboratory report is specifically part of the product proposition, access to that report should be clear." },
      { type: "paragraph", parts: [{ text: "For the complete documentation guide, use " }, { text: "What Should Be Included with Certified Diamond Jewellery?", href: "/blog/what-included-certified-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "37. Check Price Only After Understanding the Product",
    content: [
      { type: "paragraph", text: "Price comparison is weak when product specifications are not normalised. A cheaper ring may have: a smaller centre stone, less total diamond weight, a different metal, lower physical dimensions, or different report coverage. A more expensive product may contain genuinely different specifications—or simply a different commercial proposition. First determine what the product is. Then assess the price." },
      { type: "paragraph", parts: [{ text: "For price-factor explanations, use " }, { text: "What Determines the Price of Lab-Grown Diamond Jewellery?", href: "/blog/what-determines-price-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For budget decisions, use " }, { text: "How to Set a Budget for Lab-Grown Diamond Jewellery", href: "/blog/set-budget-lab-grown-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "The Main Lab-Grown Diamond Jewellery Product Verification Worksheet",
    content: [
      { type: "paragraph", text: "Use this worksheet when a product is important enough to justify a structured check." },
      { type: "table", headers: ["Field", "What to Record"], rows: [["Product type", "Ring / earrings / pendant / necklace / bracelet / other"], ["Exact vs representative item", "Exact item / representative / rendering / unclear"], ["Diamond origin", "Laboratory-grown / other"], ["Diamond configuration", "Centre + accents / multi-stone / single-stone"], ["Centre carat", "Exact figure if applicable"], ["Accent carat", "Where available"], ["Total carat weight", "Exact / approximate / range"], ["Diamond measurements", "mm"], ["Shape/cutting style", "Round / oval / emerald / etc."], ["Colour", "Exact / minimum / range"], ["Clarity", "Exact / minimum / range"], ["Cut", "Where applicable"], ["Polish", "Where applicable"], ["Symmetry", "Where applicable"], ["Fluorescence", "Where applicable"], ["Growth method", "If stated"], ["Post-growth treatment", "If stated"], ["Laboratory", "IGI / GIA / other"], ["Report type", "Loose diamond / mounted jewellery / other"], ["Report number", "If applicable"], ["Report independently verified?", "Yes / no"], ["Report matches product?", "Yes / unresolved"], ["Laser inscription", "Present / absent / not applicable / unconfirmed"], ["Underlying metal", "Gold / silver / platinum / other"], ["Metal fineness", "375 / 585 / 750 / 925 / 950 / etc."], ["Plating", "Yes / no / unclear"], ["Hollow construction", "Yes / no / unclear / not material"], ["Hallmark", "Applicable / seen / unconfirmed"], ["Finished dimensions", "Relevant mm dimensions"], ["Chain/bracelet length", "cm or stated unit"], ["Finished mass", "g if supplied"], ["Size/fit", "Ring size / wrist fit / other"], ["Availability", "In stock / made to order / waitlist / preorder"], ["What is included", "Only confirmed items"], ["Price/quotation", "Confirmed amount if available"], ["Unresolved question", "The issue still capable of changing your decision"]] },
      { type: "paragraph", text: "You do not need to complete every cell for every product. The purpose is to expose material gaps." },
    ],
  },
  {
    heading: "How the Checklist Changes by Jewellery Type",
    content: [
      { type: "paragraph", text: "A solitaire ring places more weight on the individual centre diamond, its dimensions, report and setting. A pair of earrings requires clarity around whether carat weight applies to each earring or the pair, as well as physical diameter and fastening. A pendant requires both diamond information and finished pendant scale, plus chain length. A tennis bracelet requires attention to total carat weight, bracelet length, diamond distribution, clasp and construction rather than one centre stone. A multi-stone ring may rely more on total diamond weight and quality ranges than individually reported small stones. Use the checklist according to the architecture of the actual product." },
    ],
  },
  {
    heading: "A Fictional Product Verification Example",
    content: [
      { type: "paragraph", text: "The following example is purely illustrative and does not represent Aurelia inventory. Imagine a product page states: Lab-grown oval diamond pendant, 1.00 ct, F colour, VS clarity, 18ct gold." },
      { type: "paragraph", text: "That looks informative, but several questions remain. Does 1.00 ct refer to: the centre diamond, or: the total weight including accents? Is F colour exact or minimum? Is VS an exact grade or a quality range? What are the oval's millimetre dimensions? Which laboratory issued the report? Does the report apply to the loose centre stone or the finished pendant? Is the product image the exact stone? What are the pendant dimensions? What is the chain length? Is the underlying metal 18ct gold throughout or is any plating involved? Those questions do not mean the listing is suspicious. They simply show the difference between: a marketing summary and: a complete buying specification." },
    ],
  },
  {
    heading: "A Second Fictional Example: Omission vs Contradiction",
    content: [
      { type: "paragraph", text: "Imagine Product A says: 0.75 ct round lab-grown diamond, G colour, VS1 clarity but does not give the stone's millimetre dimensions. That is an omission. You may ask for the dimensions if visible size matters." },
      { type: "paragraph", text: "Now imagine Product B says: 0.75 ct round but the associated laboratory report describes: 0.75 ct oval. That is a contradiction. The second situation deserves resolution before proceeding because two pieces of product evidence disagree. This distinction prevents every missing field from being treated as equally serious." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/4.jpg", alt: "Questions to ask missing information materiality test jewellery FAQ final answer", title: "Questions to Ask When Important Product Information Is Missing", caption: "Precise questions produce useful answers — use the materiality test to decide which missing information actually matters.", priority: false },
    ],
  },
  {
    heading: "Questions to Ask When Important Product Information Is Missing",
    content: [
      { type: "paragraph", text: "The best questions are precise. Instead of: \"Can you send more information?\" ask: \"Does the 1.00 ct figure refer to the centre diamond or total diamond weight?\" Instead of: \"Is this certified?\" ask: \"Which laboratory issued the report, what is the report number and does the report apply to the centre stone or the finished jewellery?\" Instead of: \"How big is it?\" ask: \"What are the pendant's finished height and width in millimetres?\" Instead of: \"Is this gold?\" ask: \"What is the underlying metal and fineness, and is the product plated?\" Precise questions produce useful answers." },
    ],
  },
  {
    heading: "Use the Materiality Test",
    content: [
      { type: "paragraph", text: "When you find a missing or unclear specification, ask: If I learned the answer only after receiving the jewellery, could it make me wish I had chosen differently? If yes, resolve it before buying. If no, the missing information may not require further investigation. This prevents the checklist from becoming an endless search for irrelevant technical data." },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", title: "Frequently Asked Questions", items: [
        { question: "What should I check first when buying lab-grown diamond jewellery?", answer: "Start with diamond origin, diamond configuration, carat distribution and finished-jewellery type." },
        { question: "How do I know whether a diamond is lab-grown?", answer: "The product description should clearly disclose laboratory-grown origin. Independent laboratory documentation can provide additional verification for individually reported diamonds." },
        { question: "Should I check the carat weight?", answer: "Yes, but determine whether it refers to a centre diamond, individual stone, pair or total diamond weight." },
        { question: "Is total carat weight the same as centre-stone weight?", answer: "No." },
        { question: "Is carat the same as diamond size?", answer: "No. Carat measures weight." },
        { question: "Should I check diamond dimensions?", answer: "Yes when physical scale matters, especially for a significant centre diamond." },
        { question: "Should I check the finished jewellery dimensions too?", answer: "Yes. Diamond dimensions and finished-piece dimensions answer different questions." },
        { question: "Should I check colour?", answer: "Yes if colour is part of the advertised specification." },
        { question: "Should I check clarity?", answer: "Yes, and determine whether the claim is an exact grade, minimum or range." },
        { question: "Should I check cut?", answer: "For significant diamonds where applicable, cut and finish information can be important." },
        { question: "Should I check polish and symmetry?", answer: "They can be useful parts of the stone specification, particularly for an individually reported diamond." },
        { question: "Should I care whether the diamond is CVD or HPHT?", answer: "Only as much as it matters to your decision. Growth method is not itself a universal quality grade." },
        { question: "Should treatment information match the report?", answer: "Yes where treatment is disclosed." },
        { question: "Does every lab-grown diamond need an individual report?", answer: "No. Reporting practices differ by stone size and product." },
        { question: "Does every accent diamond need a report?", answer: "No." },
        { question: "What does an IGI report include?", answer: "Current IGI laboratory-grown diamond reports include origin, shape, cutting style, measurements and 4Cs information, with additional information depending on the report." },
        { question: "Does GIA currently grade lab-grown diamonds using the same system as natural diamonds?", answer: "Not for its applicable colourless-to-near-colourless laboratory-grown service. Since 1 October 2025, GIA uses overall Premium or Standard Quality Assessments for qualifying stones." },
        { question: "Should I verify an IGI report online?", answer: "Yes when an individual IGI report is part of the product proposition." },
        { question: "Does finding the report online prove the physical diamond matches?", answer: "No. Compare the report details with the stone/product." },
        { question: "Should the diamond have a laser inscription?", answer: "That depends on the laboratory service and report. It can be useful for stone-report matching where present." },
        { question: "Does a diamond report prove the metal?", answer: "No." },
        { question: "Should I check the metal separately?", answer: "Yes." },
        { question: "What does a UK hallmark prove?", answer: "It independently verifies qualifying precious-metal fineness." },
        { question: "Does a hallmark prove diamond quality?", answer: "No." },
        { question: "Does all gold jewellery need a hallmark in the UK?", answer: "UK hallmarking applies to qualifying articles sold as precious metal above applicable exemption thresholds. Gold's current exemption threshold is 1 gram." },
        { question: "Is gold plated the same as solid gold?", answer: "No." },
        { question: "Is hollow jewellery the same as plated jewellery?", answer: "No." },
        { question: "Should I check ring dimensions as well as ring size?", answer: "Yes." },
        { question: "Should I check chain length?", answer: "Yes if the necklace's position matters to you." },
        { question: "Should I check finished jewellery weight?", answer: "It can provide useful physical context where supplied, but it is not a universal quality score." },
        { question: "How do I know if a product image shows the exact item?", answer: "The product page should state this clearly; otherwise ask." },
        { question: "What does approximate diamond weight mean?", answer: "It means the figure should not be interpreted as an exact individual measurement." },
        { question: "What does 'VS or better' mean?", answer: "It describes a minimum clarity specification rather than one exact grade." },
        { question: "What should I do if information is missing?", answer: "Decide whether the missing information could change your purchase decision. If yes, ask for clarification." },
        { question: "What should I do if the report contradicts the product page?", answer: "Resolve the contradiction before proceeding." },
        { question: "What should I do if Aurelia does not publish a price?", answer: "Join the waitlist or submit an enquiry. Do not infer a price from another product." },
        { question: "Does joining Aurelia's waitlist place an order?", answer: "It should not under the current proposed flow. It should register interest only." },
        { question: "What is the most important product-verification rule?", answer: "Make sure the product description, applicable documentation and physical specifications tell one consistent story." },
      ]},
    ],
  },
  {
    heading: "Final Answer: What Should You Check Before Buying Lab-Grown Diamond Jewellery?",
    content: [
      { type: "paragraph", text: "Start by confirming exactly what the jewellery contains. Check the laboratory-grown origin, diamond configuration, centre-stone weight and total diamond weight. Then establish scale. Use carat for diamond weight and millimetre measurements for physical dimensions." },
      { type: "paragraph", text: "Next, check the diamond specifications that matter to the piece: shape, colour, clarity, cut, polish, symmetry, and any disclosed growth or treatment information. Then understand the documentation. Identify the issuing laboratory, report type and report number. Verify the report where possible. Then check whether the report actually matches the product." },
      { type: "paragraph", text: "After the diamond, move to the finished jewellery. Check the underlying metal, fineness, plating or hollow construction where relevant, hallmarking, product dimensions, size, chain or bracelet length and finished weight where supplied." },
      { type: "paragraph", text: "Then classify the information. Is each specification: exact, minimum, range or approximate? Finally, separate your knowledge into: Verified, Disclosed, and: Unconfirmed. An unconfirmed detail is not automatically a problem. It becomes important when the answer could change your decision." },
      { type: "paragraph", text: "That is the purpose of the checklist: not to collect the maximum possible amount of jewellery data, but to make sure you understand the product well enough that nothing material surprises you after purchase." },
      { type: "paragraph", parts: [{ text: "For carat versus visible size, read " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }] },
      { type: "paragraph", parts: [{ text: "For total diamond weight, use " }, { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For reports, read " }, { text: "How to Read a Lab-Grown Diamond Certificate or Report", href: "/blog/how-to-read-lab-grown-diamond-certificate/" }] },
      { type: "paragraph", parts: [{ text: "For IGI verification, use " }, { text: "How to Verify an IGI Certificate Number Online", href: "/blog/verify-igi-certificate-number/" }] },
      { type: "paragraph", parts: [{ text: "For laser inscriptions, read " }, { text: "What Is a Diamond Laser Inscription?", href: "/blog/diamond-laser-inscription/" }] },
      { type: "paragraph", parts: [{ text: "For jewellery dimensions, use " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
      { type: "paragraph", parts: [{ text: "For metal and hallmarking, continue with " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For remote visual assessment, use " }, { text: "How to Choose Diamond Jewellery Without Seeing It in Person", href: "/blog/choose-diamond-jewellery-without-seeing-in-person/" }] },
      { type: "paragraph", parts: [{ text: "For comparing two complete products, read " }, { text: "How to Compare Lab-Grown Diamond Jewellery Online", href: "/blog/compare-lab-grown-diamond-jewellery-online/" }] },
      { type: "paragraph", parts: [{ text: "For the complete online transaction, continue with " }, { text: "How to Buy Certified Lab-Grown Diamond Jewellery Online", href: "/blog/buy-certified-lab-grown-diamond-jewellery-online/" }] },
      { type: "paragraph", parts: [{ text: "Where an Aurelia Royale design currently has no approved direct-purchase price, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry. That should register interest only and should not be presented as an order, reservation or preorder." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Check origin, weight, dimensions, reports, metal and availability — before you commit.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogCheckBeforeBuyingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">What to Check Before Buying Lab-Grown Diamond Jewellery</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Origin, Carat, Reports, Metal, Dimensions and Availability Verified • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="what-to-check-before-buying-lab-grown-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}

