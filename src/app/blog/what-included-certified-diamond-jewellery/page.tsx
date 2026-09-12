import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "What Comes with Certified Diamond Jewellery?",
  description: "Learn which documents may come with certified diamond jewellery, including laboratory reports, order records, hallmarking, warranties, appraisals and optional care information.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/what-included-certified-diamond-jewellery/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/what-included-certified-diamond-jewellery/58 (1).jpg", alt: "What should be included with certified diamond jewellery documents report hallmark warranty", title: "What Should Be Included with Certified Diamond Jewellery?", caption: "Different documents serve completely different purposes — not every one should be expected with every piece of diamond jewellery.", priority: true },
      { type: "paragraph", text: "When jewellery is described as certified, buyers often expect a box containing a diamond certificate, valuation, warranty card, authenticity card and several other documents. In reality, those documents serve completely different purposes—and not every one should be expected with every piece of diamond jewellery." },
      { type: "paragraph", text: "A significant individually reported diamond may have a laboratory report. A complete mounted jewellery piece may instead have a finished-jewellery report. Precious-metal verification in the UK may be provided through a hallmark stamped or applied to the jewellery itself rather than through a separate certificate. An online purchase should also have an order or contract record that you can retain." },
      { type: "paragraph", text: "Other items—including warranties, appraisals, insurance valuations, care cards, branded authenticity cards and special packaging—are optional unless the retailer specifically promises them." },
      { type: "paragraph", text: "The most useful question is therefore not: \"How many documents are in the box?\" It is: \"Which documents should exist for this particular product, what does each one prove, and which extras has the retailer actually promised?\"" },
    ],
  },
  {
    heading: "Quick Answer: What Should Come with Diamond Jewellery?",
    content: [
      { type: "paragraph", text: "For an online jewellery purchase, you should expect a clear record of the transaction or contract. If the product was specifically sold with an individual laboratory report, you should also receive access to the corresponding report or report information. If the jewellery itself has been submitted for a finished-jewellery laboratory report, that report should correspond to the complete article. For qualifying precious-metal jewellery sold in the UK, the hallmark is normally applied to the article itself rather than supplied as a separate \"metal certificate\". UK hallmarking exists to verify precious-metal fineness." },
      { type: "paragraph", text: "A warranty, appraisal, insurance valuation, care guide, authenticity card, presentation box or gift packaging should only be expected where the seller states that it is included. A useful way to divide the documentation is: Promised / applicable — should be supplied because the product was sold on that basis. Optional — may be provided, but should not be assumed. Inapplicable — does not make sense for that particular jewellery item." },
    ],
  },
  {
    heading: "1. Start With What the Seller Actually Promised",
    content: [
      { type: "paragraph", text: "The product page should determine your expectations. If the retailer says: \"Includes an individual IGI report\" then that report is part of the product proposition. If the page says nothing about an appraisal, do not assume an appraisal will arrive. If no warranty is advertised, do not silently add a lifetime warranty to your expectations." },
      { type: "paragraph", text: "This distinction matters because the words: certificate, report, valuation, appraisal, warranty, and: authenticity card are not interchangeable. Before buying, identify exactly which documents the seller states will accompany the product." },
    ],
  },
  {
    heading: "2. A Diamond Laboratory Report",
    content: [
      { type: "paragraph", text: "For a significant individually reported diamond, the most important independent gemmological document may be the laboratory report associated with that stone. IGI states that its loose-diamond reports identify whether a diamond is natural or laboratory-grown and document the relevant 4Cs. Its lab-grown reports include information such as description, shape, measurements and the 4Cs assessment." },
      { type: "paragraph", text: "If the jewellery was sold specifically on the basis of an individual IGI report, you should be able to identify: the laboratory, report number, diamond description, and the stone the report applies to. The key point is not simply that a document exists. It should correspond with the diamond being sold." },
    ],
  },
  {
    heading: "3. \"Certificate\" and \"Grading Report\" Are Not Always the Same Term",
    content: [
      { type: "paragraph", text: "Retailers often use diamond certificate as consumer shorthand. But laboratories may use different formal terminology. GIA explicitly states that it does not certify or appraise diamonds. It issues laboratory reports containing technical information about the examined stone." },
      { type: "paragraph", text: "That means wording such as: \"GIA-certified diamond\" is not technically accurate according to GIA's own usage guidance. A more precise description is: diamond with a GIA report or: GIA-graded/reported diamond, depending on context. For IGI, you will also see consumer-facing use of certification terminology, but the actual laboratory document should still be understood according to its scope." },
    ],
  },
  {
    heading: "4. A Physical Paper Report Is Not Always Required",
    content: [
      { type: "paragraph", text: "Do not assume that independent diamond documentation must arrive as a printed certificate inside the jewellery box. Some laboratory services are digital. GIA's current laboratory-grown diamond services include digital reporting, and GIA states that PDF versions of its laboratory-grown diamond reports can be downloaded through Report Check and printed for personal records. IGI also provides online report verification and access to digital report information." },
      { type: "paragraph", text: "So the correct check is: \"Can I access and verify the applicable report?\" rather than: \"Did I receive a piece of paper?\"" },
    ],
  },
  {
    heading: "5. Make Sure the Report Applies to the Correct Diamond",
    content: [
      { type: "paragraph", text: "Receiving a genuine report is not sufficient if it belongs to another stone. Compare the report with the product information. Useful fields can include: shape, carat weight, measurements, colour, clarity, cut information, and report-linked inscription where applicable." },
      { type: "paragraph", text: "If the product page says: 1.50 ct oval and the laboratory report describes: 1.02 ct round brilliant, the mismatch should be resolved." },
      { type: "paragraph", parts: [{ text: "For the full process, use " }, { text: "How to Verify an IGI Certificate Number", href: "/blog/verify-igi-certificate-number/" }] },
    ],
  },
  {
    heading: "6. A Laser Inscription Is Not Another Certificate",
    content: [
      { type: "paragraph", text: "Some individually reported diamonds have microscopic identifying information laser-inscribed on the girdle. That may include a laboratory report number and, for laboratory-grown diamonds, origin-related wording depending on the laboratory service. For example, GIA's current applicable laboratory-grown quality assessment requires the girdle to carry \"Laboratory-Grown\" and the assessment number." },
      { type: "paragraph", text: "The inscription is useful for linking a stone with documentation. It is not another report. Think of it as an identifier on the diamond." },
      { type: "paragraph", parts: [{ text: "For detail, read " }, { text: "What Is a Diamond Laser Inscription?", href: "/blog/diamond-laser-inscription/" }] },
    ],
  },
  {
    heading: "7. A Finished-Jewellery Report Is Different",
    content: [
      { type: "paragraph", text: "Sometimes the laboratory document applies to the complete mounted jewellery article rather than one loose centre diamond. IGI's Jewellery Reports describe the jewellery article, identify mounted gemstones and record precious-metal content and purity stamps where present. For centre stones, measurements and 4Cs assessments are provided as the mounting permits." },
      { type: "paragraph", text: "That is materially different from a loose-diamond report. With mounted jewellery, the setting can restrict what the gemmologist can observe. IGI therefore notes that where grading is limited by the mounting, colour and clarity can be expressed as ranges and cut may be estimated. Do not demand an individual loose-stone report when the product was sold with a different, appropriate report type." },
    ],
  },
  {
    heading: "8. Not Every Small Diamond Needs Its Own Individual Report",
    content: [
      { type: "paragraph", text: "A multi-stone bracelet, pavé ring or diamond necklace may contain many small diamonds. It would not necessarily make practical sense for every small accent stone to have a separate individual grading report. A buyer should therefore distinguish: significant individually reported centre diamond from: small accent or melee diamonds described as part of the finished jewellery specification. The absence of dozens of individual reports does not automatically mean the jewellery is improperly documented. What matters is whether the product description accurately explains what reporting applies." },
    ],
  },
  {
    heading: "9. Current GIA Lab-Grown Documentation Needs Extra Care",
    content: [
      { type: "paragraph", text: "GIA changed its reporting framework for qualifying colourless-to-near-colourless laboratory-grown diamonds. Its current Laboratory-Grown Diamond Quality Assessment classifies qualifying stones as Premium or Standard rather than simply reproducing the conventional natural-diamond report format. It applies to loose laboratory-grown colourless-to-near-colourless diamonds of 0.15 ct or more." },
      { type: "paragraph", text: "So if a modern Aurelia product eventually uses a current GIA lab-grown assessment, the site should describe the actual document rather than automatically referring to traditional D–Z/VVS/VS-style GIA certification wording." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/what-included-certified-diamond-jewellery/58 (2).jpg", alt: "Order confirmation transaction record contract jewellery purchase hallmark", title: "10. You Should Also Have an Order or Contract Record", caption: "The laboratory report tells you about the diamond — your order record tells you what you agreed to purchase. Both are essential.", priority: false },
    ],
  },
  {
    heading: "10. You Should Also Have an Order or Contract Record",
    content: [
      { type: "paragraph", text: "Gemstone documentation and transaction documentation solve different problems. The laboratory report tells you about the examined diamond or jewellery. Your order record tells you what you agreed to purchase. For UK online sales, GOV.UK states that the seller must confirm the contract and provide it on paper, by email or in another format the customer can save for future reference." },
      { type: "paragraph", text: "A useful order record may therefore identify: the seller, product, selected variation, price, delivery information, and relevant transaction terms. This document is commercially important even though it is not a gemmological report." },
    ],
  },
  {
    heading: "11. Is an Invoice or Receipt the Same as a Diamond Report?",
    content: [
      { type: "paragraph", text: "No. An invoice or receipt records the transaction. A laboratory report records gemmological examination. One cannot replace the other. An invoice saying: 1.50 ct F VS1 lab-grown diamond ring does not independently establish those grades. Likewise, an IGI report does not prove how much you paid. Keep both types of information where they apply." },
    ],
  },
  {
    heading: "12. Keep the Product Specification Record",
    content: [
      { type: "paragraph", text: "For significant jewellery, retain the product information that formed part of your decision. That can include: product name or reference, diamond origin, centre-stone carat, total diamond weight, dimensions, colour and clarity specification, metal, size, and any individually agreed variation. This is especially useful for made-to-order jewellery where the product may not physically exist when the order is first agreed. Your retained specification helps answer: \"What was actually ordered?\"" },
    ],
  },
  {
    heading: "13. What About a UK Hallmark?",
    content: [
      { type: "paragraph", text: "A hallmark is different from a laboratory diamond report. For qualifying precious-metal articles sold in the UK and described as gold, silver, platinum or palladium, UK hallmarking law requires legally recognised hallmarking above applicable exemption weights. The hallmark indicates that the metal has been independently tested and verified for fineness. The hallmark is normally on the jewellery itself. It is not usually a separate piece of paperwork that needs to arrive in the box." },
      { type: "paragraph", text: "And it does not tell you: diamond carat, diamond colour, diamond clarity, diamond origin, or: diamond cut." },
    ],
  },
  {
    heading: "14. A Hallmark Is Not a Diamond Certificate",
    content: [
      { type: "paragraph", text: "This distinction is worth stating clearly. Diamond report → gemstone information. Hallmark → precious-metal fineness. They answer different questions. A hallmarked 18ct gold ring is not automatically a reported diamond. A diamond with an IGI report is not automatically proof that the surrounding ring is 18ct gold." },
      { type: "paragraph", parts: [{ text: "For metal verification, read " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "15. Is an Appraisal Supposed to Be Included?",
    content: [
      { type: "paragraph", text: "Not automatically. An appraisal or valuation estimates value for a defined purpose. A grading report is not an appraisal. GIA explicitly says its reports do not contain appraisal values and should not be treated as valuations. Some jewellers may provide: a retail valuation, replacement valuation, insurance valuation, or independent appraisal. But unless the product or retailer specifically promises one, do not assume it is included." },
    ],
  },
  {
    heading: "16. An Insurance Valuation Is Also Separate",
    content: [
      { type: "paragraph", text: "A laboratory report can help an appraiser or insurer understand gemstone characteristics. That does not mean the report itself is an insurance valuation. If you need documentation for insurance, check what the insurer requires. The required information can differ by: insurer, jewellery value, jurisdiction, and policy. Do not assume every retailer automatically supplies insurance-ready documentation." },
    ],
  },
  {
    heading: "17. What About an Authenticity Card?",
    content: [
      { type: "paragraph", text: "A retailer-issued authenticity card can be useful as a product record. But it should not be confused automatically with independent laboratory documentation. A branded card might state: product reference, materials, diamond details, or other retailer-supplied information. Its evidential status depends on who issued it and what it says. The presence of a luxury-looking card does not make the jewellery independently laboratory reported." },
    ],
  },
  {
    heading: "18. What About a Warranty Card?",
    content: [
      { type: "paragraph", text: "A warranty is a commercial promise from the seller or manufacturer. It is not a diamond grading report. It may cover certain defects or services under stated conditions. But warranty scope varies enormously. Never assume jewellery includes: a lifetime warranty, free repairs, free stone replacement, free resizing, annual servicing, or accidental-damage cover unless the terms specifically say so. For Aurelia, warranty wording should remain unconfirmed until the client provides the actual policy." },
    ],
  },
  {
    heading: "19. A Warranty Does Not Replace Consumer Rights",
    content: [
      { type: "paragraph", text: "A retailer warranty is additional to whatever statutory rights apply. It should not be presented as though it is the only protection available when goods are faulty or misdescribed. Likewise, the absence of an optional commercial warranty does not allow a seller to ignore applicable consumer law. The warranty document, where offered, should explain its own scope rather than being confused with returns or statutory remedies." },
    ],
  },
  {
    heading: "20. What About a Care Guide?",
    content: [
      { type: "paragraph", text: "A jewellery care guide is useful but optional. It can explain: cleaning, storage, wear precautions, and maintenance. But its absence does not mean the diamond lacks certification. Likewise, a care card should not be presented as a warranty. If Aurelia eventually supplies care instructions with an order, those instructions should match the verified materials used in the actual product." },
    ],
  },
  {
    heading: "21. What About Packaging?",
    content: [
      { type: "paragraph", text: "Packaging is not certification. A luxury box can protect and present the jewellery. It does not establish: diamond origin, diamond quality, metal fineness, or authenticity. Do not judge documentation quality from presentation packaging. For Aurelia specifically, do not state that jewellery arrives in: a luxury presentation box, gift box, travel pouch, branded bag, certificate wallet, or any other packaging configuration until the client confirms what is actually supplied." },
    ],
  },
  {
    heading: "22. Is Gift Packaging Automatically Included?",
    content: [
      { type: "paragraph", text: "No. Gift packaging is a retail service, not an inherent component of certified diamond jewellery. It may be: standard, optional, chargeable, seasonal, or unavailable. If gift presentation matters, check before ordering." },
      { type: "paragraph", parts: [{ text: "For broader gifting decisions, read " }, { text: "What to Know Before Purchasing Fine Jewellery as a Gift", href: "/blog/buying-fine-jewellery-as-gift/" }] },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/what-included-certified-diamond-jewellery/58 (3).jpg", alt: "Returns information made-to-order jewellery specifications documentation record", title: "23. What About Returns Information?", caption: "Returns terms are commercially important but not a diamond certificate — they should be accessible and saveable for the customer.", priority: false },
    ],
  },
  {
    heading: "23. What About Returns Information?",
    content: [
      { type: "paragraph", text: "Returns terms are commercially important, but they are not a diamond certificate. For online sales, customers should receive applicable contract information and be able to retain relevant terms. GOV.UK states that after an online order the business must confirm the contract and provide a copy in a format that the customer can save. The returns policy may therefore be: included in the confirmation, linked in a saveable document, or otherwise made accessible according to the applicable process. Do not require a printed returns card inside every box simply because the jewellery is reported." },
    ],
  },
  {
    heading: "24. What About Made-to-Order Specifications?",
    content: [
      { type: "paragraph", text: "For made-to-order jewellery, the agreed specification can be particularly important. Before production, it may be useful to retain confirmation of applicable details such as: design, metal, size, diamond specification, dimensions, and any customer-specific variation. This is not another laboratory report. It is the record of what the jeweller agreed to manufacture." },
      { type: "paragraph", parts: [{ text: "For the buying-model distinction, read " }, { text: "Ready-Made vs Made-to-Order Diamond Jewellery", href: "/blog/ready-made-vs-made-to-order-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "25. What Should Be Included With a Ready-Made Individually Reported Diamond Ring?",
    content: [
      { type: "paragraph", text: "A typical evidence set might include: the actual jewellery, the relevant order/contract record, access to the applicable individual diamond laboratory report, and the hallmark on the jewellery where UK hallmarking applies. Depending on the retailer, optional extras may include a warranty, appraisal, care card or presentation packaging. But do not treat the optional items as universal requirements." },
    ],
  },
  {
    heading: "26. What Should Be Included With Multi-Stone Jewellery?",
    content: [
      { type: "paragraph", text: "The answer may differ. A tennis bracelet with many smaller diamonds may not have an individual report for every stone. Instead, the important documentation could include: the order confirmation, product specification, stated total diamond weight, diamond-quality range where applicable, metal information, and possibly a finished-jewellery laboratory report if one was specifically obtained. The correct documentation depends on how the item was sold." },
    ],
  },
  {
    heading: "27. What Should Be Included With Jewellery Carrying a Finished-Jewellery Report?",
    content: [
      { type: "paragraph", text: "If the product was explicitly sold with a finished-jewellery laboratory report, the report should correspond with the mounted article. IGI says its Jewellery Reports identify mounted gemstones as well as precious-metal content and purity stamps where present and provide centre-stone grading information as mounting permits. That report is therefore evidence about the mounted article within its scope. It should not be described as though every mounted measurement had necessarily been established with the same precision possible for a loose stone." },
    ],
  },
  {
    heading: "28. Promised, Optional and Inapplicable Documents",
    content: [
      { type: "paragraph", text: "Use this framework before purchasing." },
      { type: "table", headers: ["Item", "Status", "What It Does"], rows: [["Order/contract confirmation", "Expected for an actual online order", "Records the transaction"], ["Individual diamond report", "Expected if specifically promised for that diamond", "Documents the stone within the laboratory's scope"], ["Finished-jewellery report", "Expected only if specifically promised", "Documents the mounted article within its scope"], ["UK hallmark", "Applicable to qualifying precious-metal jewellery", "Verifies precious-metal fineness; normally on the item"], ["Appraisal/valuation", "Optional unless promised", "Provides a value opinion for a stated purpose"], ["Warranty", "Optional unless promised", "Sets out seller/manufacturer warranty terms"], ["Authenticity card", "Optional", "Retailer or brand product documentation"], ["Care guide", "Optional", "Gives maintenance guidance"], ["Insurance document", "Usually separate", "Depends on insurer/appraisal requirements"], ["Gift packaging", "Optional", "Presentation only"], ["Individual reports for every melee stone", "Often inapplicable", "Usually unnecessary unless specifically part of the product proposition"]] },
      { type: "paragraph", text: "The useful question is not whether a product has the longest document list. It is whether it includes the documentation appropriate to the claims being made." },
    ],
  },
  {
    heading: "29. What Should You Check When the Jewellery Arrives?",
    content: [
      { type: "paragraph", text: "Start with the item itself. Confirm that the jewellery appears to be the product and variation you ordered. Then compare the retained order information with the physical piece. Where an individual laboratory report applies, check that its key information corresponds with the supplied stone. Where a report-linked inscription is available and important to verification, that can add another matching point. For qualifying UK precious-metal jewellery, check the appropriate hallmarking information. Then confirm that any specifically promised extras—such as a warranty or appraisal—are present or accessible. Do not reject an otherwise properly documented product merely because an optional document you assumed would exist was never promised." },
    ],
  },
  {
    heading: "30. What If a Promised Document Is Missing?",
    content: [
      { type: "paragraph", text: "First confirm that it was genuinely part of the offer. If the product was explicitly sold with an individual IGI report and no applicable report information can be supplied, ask the retailer to resolve the issue. The same applies to an explicitly promised: valuation, warranty, or other commercial document. Keep the distinction between: promised but missing and: never promised. Those are different situations." },
    ],
  },
  {
    heading: "A Simple Document Check Before Ordering",
    content: [
      { type: "paragraph", text: "Before proceeding, ask:" },
      { type: "bullet-list", items: ["Which laboratory document applies, if any?", "Does it cover the loose centre diamond or the mounted jewellery?", "Will I receive physical paperwork, digital access or both?", "What document records my purchase?", "Does UK hallmarking apply to this precious-metal article?", "Is a warranty actually offered?", "Is an appraisal actually included?", "Which packaging or care items are specifically included?"] },
      { type: "paragraph", text: "If a retailer can answer those questions clearly, there is much less room for misunderstanding." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/what-included-certified-diamond-jewellery/58 (4).jpg", alt: "Certified diamond jewellery documentation FAQ final answer checklist", title: "Frequently Asked Questions", caption: "The strongest rule: product claim → appropriate document → matching item → correct scope.", priority: false },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", title: "Frequently Asked Questions", items: [
        { question: "What should come with certified diamond jewellery?", answer: "You should receive the jewellery and an appropriate transaction record. If a laboratory report was explicitly part of the product, you should also receive access to that report or report information." },
        { question: "Does every diamond ring come with a certificate?", answer: "No. Reporting depends on the stone, product and retailer proposition." },
        { question: "Should a large centre diamond have a report?", answer: "Independent reporting is useful for significant individually sold diamonds, but do not assume every diamond on the market automatically has one." },
        { question: "Does every small accent diamond need an individual report?", answer: "No." },
        { question: "Is an IGI report the same as an appraisal?", answer: "No." },
        { question: "What is included in an IGI diamond report?", answer: "IGI states that its loose-diamond reports identify natural or laboratory-grown origin and document the 4Cs." },
        { question: "Can IGI report finished jewellery?", answer: "Yes. IGI offers Jewellery Reports for mounted pieces." },
        { question: "Is a mounted-jewellery report the same as a loose-diamond report?", answer: "No. Mounted grading can be limited by the setting." },
        { question: "Does GIA issue certificates?", answer: "GIA says it issues reports and does not certify or appraise diamonds." },
        { question: "Does current GIA lab-grown reporting use the same system as natural diamonds?", answer: "Its current qualifying colourless-to-near-colourless lab-grown service uses an overall Premium or Standard Quality Assessment." },
        { question: "Do I need a physical paper certificate?", answer: "Not necessarily. Some reports can be digital and independently verified online." },
        { question: "Can I print a GIA lab-grown report?", answer: "GIA states that PDF versions can be downloaded through Report Check and printed for personal records." },
        { question: "Is a laser inscription a certificate?", answer: "No. It is an identifier on the diamond." },
        { question: "Does an IGI report prove the ring metal?", answer: "A loose-diamond report does not automatically prove the surrounding jewellery's metal." },
        { question: "Does a UK hallmark certify the diamond?", answer: "No. It verifies qualifying precious-metal fineness." },
        { question: "Should a jewellery purchase come with an order confirmation?", answer: "For UK online orders, the seller must confirm the contract and provide it in a format the customer can save." },
        { question: "Is an invoice the same as an order confirmation?", answer: "They can contain overlapping information but serve commercial/transaction purposes rather than gemmological grading." },
        { question: "Does every diamond purchase include an appraisal?", answer: "No." },
        { question: "Does a grading report state the diamond's retail value?", answer: "Not necessarily. GIA specifically states its reports are not appraisals and do not state appraisal value." },
        { question: "Should I receive an insurance valuation?", answer: "Only if it is specifically offered or separately obtained." },
        { question: "Should certified jewellery include a warranty?", answer: "Not automatically." },
        { question: "Does a certificate guarantee a lifetime warranty?", answer: "No." },
        { question: "Does every Aurelia product include a warranty?", answer: "This should remain unconfirmed until Aurelia's actual warranty policy is supplied and approved." },
        { question: "Does every Aurelia order include luxury packaging?", answer: "This should not be claimed until Aurelia's actual packaging specification is confirmed." },
        { question: "Is an authenticity card independent certification?", answer: "Not necessarily. Check who issued it." },
        { question: "Is a care card required?", answer: "No. It is useful but optional." },
        { question: "Should gift packaging be included?", answer: "Only where the retailer says it is included." },
        { question: "What if the jewellery is made to order?", answer: "Retain the agreed product specification in addition to any applicable laboratory documentation." },
        { question: "What is the most important rule?", answer: "Expect documents because they are relevant or promised—not simply because they sound appropriate for luxury jewellery." },
      ]},
    ],
  },
  {
    heading: "Final Answer: What Should Be Included with Certified Diamond Jewellery?",
    content: [
      { type: "paragraph", text: "Start with the transaction record. For an actual online order, you should have a confirmation that identifies what you purchased and the terms of that transaction." },
      { type: "paragraph", text: "Then identify what independent gemmological documentation actually applies. If a significant individual diamond was sold with an IGI or other laboratory report, you should be able to access and verify that report. If the complete jewellery article was laboratory reported, the applicable finished-jewellery report should correspond with the mounted piece. Do not assume every report must be physical paper. Digital laboratory records can be legitimate and independently verifiable." },
      { type: "paragraph", text: "Then check the precious metal separately. For qualifying UK precious-metal jewellery, hallmarking verifies metal fineness—but the hallmark is normally on the jewellery, not another diamond certificate." },
      { type: "paragraph", text: "Finally, treat the remaining documentation according to what was actually promised. A: warranty, appraisal, insurance valuation, authenticity card, care guide, presentation box or: gift packaging may be useful, but none should be assumed simply because the jewellery contains a reported diamond." },
      { type: "paragraph", text: "The strongest rule is: Product claim → appropriate document → matching item → correct scope." },
      { type: "paragraph", parts: [{ text: "For what \"certified diamond jewellery\" actually means, read " }, { text: "What Does Certified Lab-Grown Diamond Jewellery Actually Mean?", href: "/blog/certified-lab-grown-diamond-jewellery-meaning/" }] },
      { type: "paragraph", parts: [{ text: "For the difference between diamond and jewellery reports, use " }, { text: "Diamond Certification vs Jewellery Certification", href: "/blog/diamond-certification-vs-jewellery-certification/" }] },
      { type: "paragraph", parts: [{ text: "For reading a report, continue with " }, { text: "How to Read a Lab-Grown Diamond Certificate or Report", href: "/blog/how-to-read-lab-grown-diamond-certificate/" }] },
      { type: "paragraph", parts: [{ text: "For checking an IGI report number, use " }, { text: "How to Verify an IGI Certificate Number Online", href: "/blog/verify-igi-certificate-number/" }] },
      { type: "paragraph", parts: [{ text: "For laser inscriptions, read " }, { text: "What Is a Diamond Laser Inscription?", href: "/blog/diamond-laser-inscription/" }] },
      { type: "paragraph", parts: [{ text: "For metal and hallmarking, use " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For the full pre-purchase specification check, read " }, { text: "What to Check Before Buying Lab-Grown Diamond Jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "Where an Aurelia Royale design is currently only available through a Join Waitlist or enquiry form, no purchase documentation should be implied because the customer has not placed an order. " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry — the submission should register interest only." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Know which documents are relevant, promised or optional — before you buy.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogCertifiedDocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">What Should Be Included with Certified Diamond Jewellery?</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Reports, Hallmarks, Warranties, Appraisals and Packaging Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="what-included-certified-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}

