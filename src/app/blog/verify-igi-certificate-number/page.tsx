import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Verify an IGI Certificate Number Online",
  description: "Learn how to verify an IGI diamond report number online, compare the official IGI record with the diamond, check laser inscriptions and handle a report that cannot be found.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aureliaroyale.com/#organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
    { "@type": "WebSite", "@id": "https://www.aureliaroyale.com/#website", "url": "https://www.aureliaroyale.com/", "name": "Aurelia Royale", "publisher": { "@id": "https://www.aureliaroyale.com/#organization" } },
    { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#webpage", "url": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/", "name": "How to Verify an IGI Certificate Number and Match the Report to Your Diamond", "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" }, "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#breadcrumb" }, "datePublished": "2026-09-10", "dateModified": "2026-09-10" },
    { "@type": "BlogPosting", "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#article", "headline": "How to Verify an IGI Certificate Number and Match the Report to Your Diamond", "description": "Learn how to verify an IGI diamond report number online, compare the official IGI record with the diamond, check laser inscriptions and handle a report that cannot be found.", "datePublished": "2026-09-10", "dateModified": "2026-09-10", "author": { "@id": "https://www.aureliaroyale.com/#organization" }, "publisher": { "@id": "https://www.aureliaroyale.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#webpage" }, "articleSection": "Lab-Grown Diamond Education", "keywords": ["verify IGI certificate number", "IGI report verification", "check IGI diamond report online", "IGI laser inscription"] },
    { "@type": "BreadcrumbList", "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" }, { "@type": "ListItem", "position": 3, "name": "How to Verify an IGI Certificate Number", "item": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/" }] },
    { "@type": "FAQPage", "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#faq", "mainEntity": [{ "@type": "Question", "name": "How do I verify an IGI certificate number?", "acceptedAnswer": { "@type": "Answer", "text": "Enter the report number into IGI's official Verify Your Report service and compare the retrieved record with the report and diamond being offered." } }, { "@type": "Question", "name": "What if my IGI report is not found?", "acceptedAnswer": { "@type": "Answer", "text": "Check the number carefully. For certain J_ report numbers, IGI advises removing the prefix and searching again. If the issue remains unresolved, use IGI's Missing or Problematic Report service." } }, { "@type": "Question", "name": "Does finding the IGI report online prove my diamond is genuine?", "acceptedAnswer": { "@type": "Answer", "text": "It verifies that the report number corresponds to an IGI record. You should still establish that the physical diamond corresponds to that report." } }] }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "If a diamond seller gives you an IGI certificate or report number, do not stop at seeing an IGI logo or receiving a PDF." },
      { type: "paragraph", text: "IGI provides an official online report-verification service where you can enter the report number and retrieve the corresponding laboratory record. That is the correct first step when checking whether an IGI report number exists." },
      { type: "paragraph", text: "But there is an important second step that buyers often miss." },
      { type: "paragraph", text: "Finding the report online does not, by itself, prove that the physical diamond in front of you is the diamond described by that report. You also need to compare the retrieved IGI information with the stone you are buying. Where a matching report-number laser inscription is present on the diamond's girdle, that can provide an especially useful connection between the physical stone and the laboratory record." },
      { type: "paragraph", text: "The correct verification process is therefore: find the official IGI record → compare its details with the seller's report → compare those details with the actual diamond → check a report-linked inscription where applicable." }
    ]
  },
  {
    heading: "Quick Answer: How Do You Verify an IGI Certificate Number?",
    content: [
      { type: "paragraph", text: "Use IGI's official report-verification service: IGI — Verify Your Report. Enter the report number exactly as it appears on the IGI document and select Verify. IGI's page also provides a QR-code scanning option." },
      { type: "paragraph", text: "If a corresponding record appears, compare the retrieved report with the diamond being sold. Depending on report type, relevant details can include the diamond's description, laboratory-grown or natural origin, shape, measurements, carat weight, colour, clarity, cut or finish information, comments and inscription details." },
      { type: "paragraph", text: "Then, if the diamond carries an IGI report-number inscription on its girdle, inspect that inscription under suitable magnification and make sure it corresponds with the report number." },
      { type: "paragraph", text: "That final comparison is important because: Report found does not equal physical diamond automatically matched." }
    ]
  },
  {
    heading: "Step 1: Find the IGI Report Number",
    content: [
      { type: "paragraph", text: "First locate the report number on the IGI document supplied with the diamond. Do not confuse it with: a retailer SKU; order number; product code; stock number; invoice number; or internal jewellery reference." },
      { type: "paragraph", text: "The number you need is the identifying number assigned to the IGI laboratory report." },
      { type: "paragraph", parts: [{ text: "For a detailed explanation of all the other information on the document, use Aurelia Royale's " }, { text: "How to Read a Lab-Grown Diamond Certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" }, { text: " guide." }] }
    ]
  },
  {
    heading: "Step 2: Go Directly to IGI",
    content: [
      { type: "paragraph", text: "Do not begin with a random third-party \"certificate checker\". Use IGI itself. The official IGI verification interface provides a field labelled Report Number, an option to verify the report and a QR-code scanning facility." },
      { type: "paragraph", text: "This matters because the purpose of verification is to compare the seller's document with IGI's own laboratory record. A third-party page copying the same information does not provide the same source-level confirmation." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/verify-igi-certificate-number/23 (2).jpg", alt: "IGI certificate number verification steps enter report number official website", title: "Steps 3–5: Entering and Comparing the Report", caption: "Enter the report number exactly as shown — a single digit error can prevent a valid record from appearing.", priority: false }
    ]
  },
  {
    heading: "Step 3: Enter the Report Number Exactly",
    content: [
      { type: "paragraph", text: "Type the report number from the document into IGI's verification field. Check carefully for: incorrect digits; missing digits; extra spaces; letter-number confusion; or an incorrectly copied prefix." },
      { type: "paragraph", text: "A single typing error can prevent a valid record from appearing. If the document has a QR code intended for report access, you can also use IGI's QR-code option where appropriate." }
    ]
  },
  {
    heading: "Step 4: Confirm That an IGI Record Appears",
    content: [
      { type: "paragraph", text: "If IGI returns a corresponding report, you have established something important: IGI's database contains a laboratory record associated with that report number. This is substantially stronger than simply receiving a photograph of an IGI document from a seller." },
      { type: "paragraph", text: "However, it still does not complete the verification. At this stage you have verified the existence of the report record. You have not yet independently established that the physical diamond being sold is necessarily the stone described by that record. That distinction is fundamental." }
    ]
  },
  {
    heading: "\"Report Found\" vs \"Diamond Matched\"",
    content: [
      { type: "paragraph", text: "Think of verification as two layers." },
      { type: "paragraph", text: "Layer 1: Report Found. You entered the number on IGI's official website and IGI returned the corresponding record. This helps establish that the report number exists within IGI's system." },
      { type: "paragraph", text: "Layer 2: Diamond Matched. You compare that record with the actual diamond and establish that the physical stone is consistent with the report. The strongest available matching evidence can include: the report number; shape; measurements; carat weight; reported characteristics; and a matching microscopic girdle inscription where one is present." },
      { type: "paragraph", text: "The second layer is necessary because someone could theoretically present a genuine report alongside the wrong physical diamond." }
    ]
  },
  {
    heading: "Step 5: Check the Diamond Description",
    content: [
      { type: "paragraph", text: "Start comparing the retrieved record with what the seller is offering. If you are buying a laboratory-grown diamond, the report should identify the stone accordingly." },
      { type: "paragraph", text: "IGI states that its loose-diamond reports identify whether the submitted stone is natural or laboratory-grown and document relevant 4Cs information. If the seller tells you: \"This is an IGI laboratory-grown diamond\" but the retrieved report describes a different material or origin, stop and investigate the discrepancy." },
      { type: "paragraph", text: "Never assume the IGI logo alone establishes origin." }
    ]
  },
  {
    heading: "Step 6: Match the Shape and Cutting Style",
    content: [
      { type: "paragraph", text: "If the seller is offering an oval diamond but the official report describes a round brilliant, the information clearly does not match. The same applies to: pear; cushion; emerald; radiant; princess; marquise; and other shapes." },
      { type: "paragraph", text: "Shape is a basic but useful first matching signal. It is not enough by itself, because thousands of diamonds can share the same shape. But a mismatch is an immediate warning sign." }
    ]
  },
  {
    heading: "Step 7: Compare the Measurements",
    content: [
      { type: "paragraph", text: "Measurements are one of the most useful fields for connecting a report with an individual diamond. A loose-diamond report can record the stone's dimensions in millimetres. For example, a round diamond may have diameter and depth measurements, while a fancy shape may have length, width and depth." },
      { type: "paragraph", text: "Compare those figures with the report supplied by the seller. A material difference deserves explanation. Two diamonds can share the same carat weight but have different millimetre measurements, so measurements provide a more specific identifying signal than carat alone." }
    ]
  },
  {
    heading: "Step 8: Compare the Carat Weight",
    content: [
      { type: "paragraph", text: "Check that the carat weight on IGI's online record matches the weight stated by the seller and on the report you received. One metric carat equals 0.20 grams." },
      { type: "paragraph", text: "However, do not use carat alone to identify the stone. Many diamonds can weigh: 0.50 ct; 1.00 ct; 1.50 ct; or another common weight. Carat becomes much stronger as a matching characteristic when combined with shape, measurements, grades and inscription information." }
    ]
  },
  {
    heading: "Step 9: Compare Colour and Clarity",
    content: [
      { type: "paragraph", text: "Where the IGI report provides individual colour and clarity grades, compare them with the seller's information. If IGI's record says: F colour, VS1 clarity but the retailer lists: D colour, VVS1 clarity that requires investigation." },
      { type: "paragraph", text: "Do not assume a seller is entitled to \"upgrade\" a laboratory grade for marketing. The information advertised for an individually reported diamond should correspond accurately with the laboratory documentation." },
      { type: "paragraph", parts: [{ text: "For what those grades mean, read " }, { text: "Lab-Grown Diamond Colour Grades Explained", href: "/blog/lab-grown-diamond-colour-grades-explained/" }, { text: " and " }, { text: "Lab-Grown Diamond Clarity Grades Explained", href: "/blog/lab-grown-diamond-clarity-grades-explained/" }, { text: "." }] }
    ]
  },
  {
    heading: "Step 10: Compare Cut, Polish and Symmetry Separately",
    content: [
      { type: "paragraph", text: "Where applicable, check: overall cut grade; polish; and symmetry. These are not interchangeable fields. A diamond might have: Excellent Polish without necessarily having an Excellent overall cut grade. Likewise, cut-grading conventions vary by shape and laboratory methodology." },
      { type: "paragraph", text: "The objective here is not to analyse whether the grade is good or bad. The objective is simply to confirm that the online IGI record matches what you have been shown." },
      { type: "paragraph", parts: [{ text: "For detailed cut interpretation, use " }, { text: "Lab-Grown Diamond Cut Explained", href: "/blog/lab-grown-diamond-cut-explained/" }, { text: "." }] }
    ]
  },
  {
    heading: "Step 11: Check Fluorescence and Other Report Details",
    content: [
      { type: "paragraph", text: "Additional report information can make the comparison stronger. Depending on the report, this may include: fluorescence; proportions; clarity characteristics; comments; growth method; post-growth treatment information; or inscription details." },
      { type: "paragraph", text: "IGI's laboratory-grown reporting can include growth-process and treatment information in report comments where applicable. A matching set of multiple characteristics provides far stronger evidence than a matching report number alone." }
    ]
  },
  {
    heading: "Step 12: Look for a Laser Inscription",
    content: [
      { type: "paragraph", text: "Some diamonds carry microscopic inscriptions on their girdles. IGI's LaserScribe service can place an IGI report number on the diamond's girdle, allowing the physical stone to be connected with its report under magnification." },
      { type: "paragraph", text: "If the report indicates an inscription and the stone should carry one, ask whether it can be inspected. A matching inscription can be one of the most useful physical checks available." }
    ]
  },
  {
    heading: "Where Is the IGI Number on the Diamond?",
    content: [
      { type: "paragraph", text: "Where an IGI report number has been laser inscribed, it is typically located on the girdle—the narrow outer edge separating the crown from the pavilion. The inscription is microscopic. You should not expect to read it with the naked eye. Suitable magnification is normally required." },
      { type: "paragraph", text: "Its small size is intentional because the inscription is designed for identification without materially changing the normal visual appearance of the diamond." }
    ]
  },
  {
    heading: "Does Every IGI Diamond Have a Laser Inscription?",
    content: [
      { type: "paragraph", text: "Do not assume so. IGI offers LaserScribe and describes report-number girdle inscription as a common identification method, but a buyer should check the specific report and stone rather than assuming every IGI-reported diamond worldwide necessarily carries the same inscription." },
      { type: "paragraph", text: "Therefore: No visible inscription does not automatically mean a report is fake. First establish whether the particular diamond was supposed to have one." }
    ]
  },
  {
    heading: "What If the Laser Inscription Matches the IGI Report Number?",
    content: [
      { type: "paragraph", text: "That substantially strengthens the connection between the physical stone and the report. You now have: an IGI record found in the official database; a corresponding report; and a stone bearing the matching report number. You should still compare the broader characteristics where appropriate." },
      { type: "paragraph", text: "But this is far stronger than simply seeing the same number on a piece of paper." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/verify-igi-certificate-number/23 (3).jpg", alt: "IGI laser inscription girdle diamond matching report number verification", title: "Laser Inscription and Diamond Matching", caption: "A matching girdle inscription substantially strengthens the link between report and physical stone — but it is one layer of evidence, not the complete check.", priority: false }
    ]
  },
  {
    heading: "Does a Matching Laser Inscription Guarantee Everything About the Sale?",
    content: [
      { type: "paragraph", text: "No. It helps identify the diamond. It does not automatically prove: the seller owns the stone legitimately; the jewellery setting is high quality; the purchase price is fair; the diamond has a guaranteed resale value; the ring is the correct size; or every commercial promise made by the seller is accurate." },
      { type: "paragraph", text: "Gemstone identification and retail due diligence are separate tasks." }
    ]
  },
  {
    heading: "What If the IGI Report Number Is Not Found?",
    content: [
      { type: "paragraph", text: "First, do not immediately conclude that the diamond or report is fraudulent. There can be simpler explanations. Check the report number again. Look for: typing errors; incorrect prefixes; transposed digits; spaces; or characters that were read incorrectly. Then retry the official verification service." }
    ]
  },
  {
    heading: "Important IGI Tip for Certain J_ Report Numbers",
    content: [
      { type: "paragraph", text: "IGI provides a specific troubleshooting instruction for certain report numbers. Its Missing or Problematic Report page states that if the report number begins in a format such as: J_XXXXXXXXXXX and it does not retrieve correctly, remove the J_ and search again using the remaining number." },
      { type: "paragraph", text: "This is far better advice than assuming immediately that a non-returning report is fraudulent." }
    ]
  },
  {
    heading: "What If It Still Cannot Be Found?",
    content: [
      { type: "paragraph", text: "If you have carefully checked the number and the report still does not appear, ask the seller for clarification. Then use IGI's own support route. IGI provides a Missing or Problematic Report form where users can supply the report number, report date, comments and even an image of the physical report to help resolve retrieval issues." },
      { type: "paragraph", text: "Do not proceed on the assumption that an unexplained report-verification failure is irrelevant. For a significant purchase, resolve it first." }
    ]
  },
  {
    heading: "Does \"IGI Report Not Found\" Automatically Mean Fake?",
    content: [
      { type: "paragraph", text: "No. A failed first lookup is a reason to investigate, not immediate proof of fraud. Possible explanations can include: an incorrectly entered number; a prefix-format issue; or a report-retrieval problem that IGI may need to investigate." },
      { type: "paragraph", text: "But once obvious entry problems have been ruled out, the seller should be able to help explain why the claimed IGI record cannot be retrieved. A significant unexplained inconsistency should not simply be ignored." }
    ]
  },
  {
    heading: "What If the Report Is Found but the Carat Weight Is Wrong?",
    content: [
      { type: "paragraph", text: "That is more concerning. If the official IGI record describes a 1.01 ct diamond and the seller's supposed matching document describes a materially different weight, you may be looking at: the wrong report; the wrong stone; incorrect seller information; or another discrepancy that needs resolution." },
      { type: "paragraph", text: "Do not \"average\" the figures or assume it is close enough without understanding why they differ." }
    ]
  },
  {
    heading: "What If the Shape Is Wrong?",
    content: [
      { type: "paragraph", text: "A significant shape mismatch is an obvious red flag. An official record describing a round brilliant cannot logically identify an oval diamond. Stop the purchase process until the discrepancy is resolved." }
    ]
  },
  {
    heading: "What If Only One Grade Is Different?",
    content: [
      { type: "paragraph", text: "That also deserves clarification. A retailer should not silently alter an IGI colour or clarity grade. If the official record and retailer specifications differ, use the issuing laboratory's record as the reference point for what IGI actually reported. Then ask the retailer why its product information does not match." }
    ]
  },
  {
    heading: "What If the Measurements Differ Slightly?",
    content: [
      { type: "paragraph", text: "Before concluding there is a problem, make sure you are comparing the same type of measurement and the same report. Small variations in independent measurements can arise depending on equipment and circumstances." },
      { type: "paragraph", text: "However, a material mismatch between the seller's IGI document and IGI's own archived report data needs explanation. The purpose of verification is precisely to identify such inconsistencies." }
    ]
  },
  {
    heading: "Can You Verify an IGI Report From a PDF?",
    content: [
      { type: "paragraph", text: "A PDF supplied by the seller can be useful, but the stronger process is to check the report number independently through IGI. A professional-looking PDF alone does not prove that: the report exists; the PDF has not been altered; or the physical stone corresponds to it." },
      { type: "paragraph", text: "Use the document to obtain the report number. Then verify that number directly with IGI." }
    ]
  },
  {
    heading: "Can You Verify an IGI Report From a QR Code?",
    content: [
      { type: "paragraph", text: "IGI's official verification page includes a QR-code scanning option. Where a genuine report contains a working verification QR code, this can provide a convenient route to its digital record." },
      { type: "paragraph", text: "However, verify that the destination is genuinely IGI. Do not assume that every QR code printed on jewellery paperwork necessarily leads to an official laboratory source." }
    ]
  },
  {
    heading: "Should You Google the Report Number?",
    content: [
      { type: "paragraph", text: "Google can help locate references, but it should not replace official verification. The authoritative question is: Does IGI itself return this report?" },
      { type: "paragraph", text: "A report number appearing on a retailer's website, marketplace listing or search-engine result does not independently confirm the laboratory record. Use IGI's own verification system." }
    ]
  },
  {
    heading: "Can Someone Copy a Genuine IGI Report Number?",
    content: [
      { type: "paragraph", text: "A report number by itself is not a secret security credential. That is exactly why finding the number online is only the first layer of verification. A copied genuine number could theoretically be associated with a different physical stone." },
      { type: "paragraph", text: "This is why matching: measurements; carat; shape; grades; and especially a corresponding girdle inscription where present adds important physical evidence." }
    ]
  },
  {
    heading: "Is an IGI Report Verification the Same as Diamond Authentication?",
    content: [
      { type: "paragraph", text: "Not exactly. Online report verification establishes that a corresponding IGI record exists. Authentication of the physical diamond involves determining that the actual gemstone is the one described in that record. The two processes work together." },
      { type: "paragraph", text: "This distinction should appear prominently on Aurelia because it answers a major gap in generic \"certificate checker\" articles." }
    ]
  },
  {
    heading: "Can the Report Number Prove the Diamond Is Lab-Grown?",
    content: [
      { type: "paragraph", text: "The IGI record can state that the diamond IGI examined was laboratory-grown. That provides independent evidence regarding the reported stone. But you still need to connect the physical stone being sold with that record." },
      { type: "paragraph", text: "Again: report identity and physical-stone matching are related but distinct." }
    ]
  },
  {
    heading: "Does an IGI Report Prove a Diamond Is Natural?",
    content: [
      { type: "paragraph", text: "Only if the corresponding IGI report identifies the examined stone as natural. IGI handles both natural and laboratory-grown diamonds. Therefore, seeing: IGI certified does not tell you origin. Read the description in the report." }
    ]
  },
  {
    heading: "Does IGI Verify Lab-Grown Diamonds?",
    content: [
      { type: "paragraph", text: "Yes. IGI states that its loose-diamond reports identify natural or laboratory-grown origin and document relevant diamond characteristics. Its dedicated Laboratory Grown Diamond Report provides detailed information for stones identified as laboratory-grown." }
    ]
  },
  {
    heading: "Is an IGI Report an Appraisal?",
    content: [
      { type: "paragraph", text: "No. IGI's own verification page states that its report should not be relied upon as a guarantee, appraisal or warranty. Verifying the report therefore does not tell you what you should pay for the diamond or what it will be worth in the future. It verifies laboratory information." }
    ]
  },
  {
    heading: "Does IGI Verification Prove the Price Is Fair?",
    content: [
      { type: "paragraph", text: "No. Two accurately reported diamonds can sell for different prices. Price can depend on: carat; colour; clarity; cut; shape; dimensions; growth history; market conditions; retailer; and the jewellery surrounding the stone. A verified report is valuable evidence. It is not a price-comparison service." }
    ]
  },
  {
    heading: "Does IGI Verification Guarantee Resale Value?",
    content: [
      { type: "paragraph", text: "No. A genuine report may make the stone easier to identify and describe in a future transaction, but it does not guarantee that anyone will buy the diamond or pay a particular amount." },
      { type: "paragraph", parts: [{ text: "For that issue, read " }, { text: "Do Lab-Grown Diamonds Have Resale Value?", href: "/blog/do-lab-grown-diamonds-have-resale-value/" }] }
    ]
  },
  {
    heading: "Does IGI Verification Guarantee Jewellery Quality?",
    content: [
      { type: "paragraph", text: "No. An individual IGI loose-diamond report concerns the diamond examined. It does not automatically assess: ring construction; prong security; clasp quality; chain strength; comfort; sizing; or overall workmanship." },
      { type: "paragraph", text: "IGI also offers separate jewellery-reporting services, which have their own scope." },
      { type: "paragraph", parts: [{ text: "For the distinction, read " }, { text: "Diamond Certification vs Jewellery Certification", href: "/blog/diamond-certification-vs-jewellery-certification/" }, { text: "." }] }
    ]
  },
  {
    heading: "Can You Verify an IGI Jewellery Report?",
    content: [
      { type: "paragraph", text: "IGI's reporting and verification ecosystem also covers jewellery reports. The important principle remains the same: first identify what type of IGI report you have." },
      { type: "paragraph", text: "A loose-diamond report and a finished-jewellery report do not describe exactly the same things. Do not expect a jewellery report to provide every individual loose-stone measurement or grade in the same way as a report for an unmounted diamond." }
    ]
  },
  {
    heading: "How Do You Match a Mounted Diamond to Its Report?",
    content: [
      { type: "paragraph", text: "This can be more difficult than matching a loose stone because prongs, bezels and other setting components can obstruct the girdle and parts of the diamond. Where the report number is laser-inscribed and accessible under magnification, that can still provide strong identifying evidence." },
      { type: "paragraph", text: "Measurements and visual characteristics may also help. For a significant centre stone where certainty is important, a qualified jeweller or gemmologist can assist with inspection. Do not remove a diamond from its setting solely to perform a casual home verification." }
    ]
  },
  {
    heading: "What Magnification Is Needed to See an IGI Inscription?",
    content: [
      { type: "paragraph", text: "The girdle inscription is microscopic and normally requires magnification. Rather than promising that every consumer will see every inscription with a particular inexpensive loupe, ask a jewellery professional to help if you cannot locate it. Lighting, setting obstruction, inscription size and viewing angle can all affect visibility." }
    ]
  },
  {
    heading: "What If the Diamond Is Mounted Over the Inscription?",
    content: [
      { type: "paragraph", text: "A prong or bezel can obstruct part of the girdle. That does not automatically indicate a problem. Ask whether the inscription can be viewed from another section or with appropriate professional equipment. Do not attempt to bend prongs or disturb a setting to find the number." }
    ]
  },
  {
    heading: "Can an Inscription Be Fake?",
    content: [
      { type: "paragraph", text: "An inscription alone should not be treated as independent proof. The correct process is to compare it with the official laboratory record and the diamond's other characteristics. A number appearing on a girdle is most meaningful when: the same number exists in IGI's system; the corresponding report describes the stone; and the stone's measurable characteristics are consistent with that report. That combination is considerably stronger than any single check." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/verify-igi-certificate-number/23 (4).jpg", alt: "IGI diamond verification checklist report found diamond matched physical comparison", title: "The Strongest Practical IGI Verification Checklist", caption: "Two layers of verification: confirm the report record exists, then match the physical diamond to that record.", priority: false }
    ]
  },
  {
    heading: "The Strongest Practical IGI Verification Checklist",
    content: [
      { type: "paragraph", text: "For a significant diamond, use this sequence: 1. Obtain the IGI report number. 2. Enter it into IGI's official verification service. 3. Confirm a corresponding IGI record appears. 4. Check whether the report identifies the stone as natural or laboratory-grown. 5. Match the shape. 6. Match the carat weight. 7. Match the measurements. 8. Compare colour and clarity where applicable. 9. Compare cut, polish and symmetry where applicable. 10. Review comments and relevant growth/treatment information. 11. Check whether the report references an inscription. 12. Where present and accessible, confirm the girdle inscription matches. 13. Resolve any material discrepancy before purchase." },
      { type: "paragraph", text: "The first three steps establish the laboratory record. The remaining steps help establish that the report belongs to the diamond being offered." }
    ]
  },
  {
    heading: "Common Mistake: Stopping When the Report Appears Online",
    content: [
      { type: "paragraph", text: "This is the biggest weakness in many IGI verification guides. Finding a report online proves the number corresponds with an IGI record. It does not automatically prove that the seller has placed the correct physical diamond beside that report. Always perform the matching step too." }
    ]
  },
  {
    heading: "Common Mistake: Trusting the Seller's Screenshot",
    content: [
      { type: "paragraph", text: "A screenshot may be genuine. It may also be old, incomplete or unrelated to the physical stone. Entering the report number yourself on IGI's official site takes very little effort and removes one unnecessary layer of trust." }
    ]
  },
  {
    heading: "Common Mistake: Looking Only at Carat Weight",
    content: [
      { type: "paragraph", text: "Many diamonds have identical carat weights. A 1.00 ct match is not enough. Combine carat with: shape; measurements; grades; comments; and inscription information where available." }
    ]
  },
  {
    heading: "Common Mistake: Assuming Every IGI Diamond Has a Visible Serial Number",
    content: [
      { type: "paragraph", text: "Do not make this assumption. Report-linked girdle inscriptions are extremely useful where present, but check the actual report and diamond rather than relying on a universal rule." }
    ]
  },
  {
    heading: "Common Mistake: Assuming \"Report Not Found\" Instantly Means Fraud",
    content: [
      { type: "paragraph", text: "First check the number carefully and follow IGI's own troubleshooting guidance. For applicable J_ numbers, IGI specifically recommends removing the prefix and trying again. If the issue persists, investigate." }
    ]
  },
  {
    heading: "Common Mistake: Assuming Verification Guarantees Value",
    content: [
      { type: "paragraph", text: "A verified IGI report is gemmological evidence. It is not a guaranteed resale value, investment certificate or promise that the seller's asking price is reasonable." },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I verify an IGI certificate number?", answer: "Enter the report number into IGI's official Verify Your Report service and compare the retrieved record with the report and diamond being offered." },
          { question: "Where can I check an IGI certificate online?", answer: "Use IGI directly through its official report verification interface." },
          { question: "Is IGI report verification free online?", answer: "IGI currently provides a public online report-number verification interface." },
          { question: "Can I verify an IGI lab-grown diamond report?", answer: "Yes. IGI's loose-diamond reporting covers laboratory-grown diamonds, and its verification system allows corresponding report records to be checked." },
          { question: "How do I know if an IGI certificate is real?", answer: "Verify the number directly with IGI, compare the retrieved information with the document, then match the report characteristics to the actual diamond." },
          { question: "Does finding the IGI report online prove my diamond is genuine?", answer: "It verifies that the report number corresponds to an IGI record. You should still establish that the physical diamond corresponds to that report." },
          { question: "How do I match the report to the diamond?", answer: "Compare shape, measurements, carat and other report characteristics. Where a matching IGI report-number girdle inscription is present, that provides additional identifying evidence." },
          { question: "Where is the IGI number on a diamond?", answer: "Where LaserScribe has been used, the report number can be microscopically inscribed on the diamond's girdle." },
          { question: "Does every IGI diamond have a serial number on the girdle?", answer: "Do not assume every stone does. Check the specific report and diamond for inscription information." },
          { question: "Can I see the IGI number without magnification?", answer: "Normally not easily. Girdle inscriptions are microscopic." },
          { question: "What if my IGI report is not found?", answer: "Check the number carefully. For certain J_ report numbers, IGI advises removing the prefix and searching again. If the issue remains unresolved, use IGI's Missing or Problematic Report service." },
          { question: "Does report not found mean fake?", answer: "Not automatically. First eliminate entry or retrieval issues, then investigate any unresolved discrepancy." },
          { question: "Can an IGI QR code verify a report?", answer: "IGI's official verification service currently supports QR-code scanning." },
          { question: "Should I trust a PDF of an IGI report?", answer: "Use it as documentation, but independently check the number through IGI rather than relying solely on the PDF." },
          { question: "Can someone copy a real IGI report number?", answer: "A report number alone does not prove the physical diamond corresponds to the record, which is why stone matching matters." },
          { question: "Does the laser inscription prove the stone matches?", answer: "A matching report-number inscription provides strong identifying evidence, particularly when the official IGI record and other stone characteristics also correspond." },
          { question: "What if the report says one carat but the seller says two carats?", answer: "Resolve the discrepancy before purchasing. The seller's description should not materially conflict with the laboratory record." },
          { question: "What if the colour or clarity does not match?", answer: "Ask the seller why. Do not silently substitute retailer claims for IGI's recorded findings." },
          { question: "Can IGI verify natural diamonds too?", answer: "Yes. IGI issues reports for natural as well as laboratory-grown diamonds." },
          { question: "Does an IGI report tell me whether a diamond is lab-grown?", answer: "An appropriate IGI diamond report identifies the origin classification of the examined diamond." },
          { question: "Does an IGI report prove the diamond is valuable?", answer: "No. A grading report is not a guarantee, appraisal or warranty." },
          { question: "Does an IGI report guarantee resale value?", answer: "No." },
          { question: "Does verifying a centre diamond verify the whole ring?", answer: "No. A loose-diamond report and finished-jewellery assessment have different scopes." },
          { question: "Can I verify an IGI report after buying?", answer: "Yes, but for a significant purchase it is better to check the available report information before completing the transaction." },
          { question: "Should Aurelia provide the IGI report number on a product page?", answer: "Where a specific product or centre diamond genuinely carries an IGI report and publication is operationally appropriate, making the corresponding report information readily accessible can improve buyer transparency. Aurelia should not invent or reuse report numbers across products." }
        ]
      }
    ]
  },
  {
    heading: "Final Answer: How Do You Properly Verify an IGI Diamond Report?",
    content: [
      { type: "paragraph", text: "Do not treat verification as a one-step certificate lookup. Begin with the official IGI record. Take the report number supplied by the seller and enter it into IGI's own verification system. If IGI returns a record, you have established that the report number exists in IGI's database." },
      { type: "paragraph", text: "Then perform the second step: match the report to the diamond. Confirm that the origin description is correct. Check the shape. Compare the carat weight. Compare the millimetre measurements. Review colour, clarity, cut, polish, symmetry and other relevant characteristics. Then look for report-linked laser inscription information." },
      { type: "paragraph", text: "Where the diamond carries the matching IGI report number on its girdle, verify that microscopic inscription under appropriate magnification. That gives you a much stronger chain: official IGI record → report data → physical diamond." },
      { type: "paragraph", text: "If the report cannot be found, do not immediately assume fraud. Check for input errors and follow IGI's own troubleshooting guidance. If the issue remains unresolved, contact IGI or use its Missing or Problematic Report process before relying on the document." },
      { type: "paragraph", parts: [{ text: "For understanding what an IGI report actually means, continue with " }, { text: "What Is an IGI Lab-Grown Diamond Certificate?", href: "/blog/igi-certificate-for-lab-grown-diamond/" }] },
      { type: "paragraph", parts: [{ text: "For understanding each field on the document, read " }, { text: "How to Read a Lab-Grown Diamond Certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For report-linked girdle identification, continue with " }, { text: "What Is a Diamond Laser Inscription?", href: "/blog/what-is-a-diamond-laser-inscription/" }] },
      { type: "paragraph", parts: [{ text: "For deciding whether individual certification is necessary, use " }, { text: "Do Lab-Grown Diamonds Need Certification?", href: "/blog/do-lab-grown-diamonds-need-certification/" }] },
      { type: "paragraph", text: "When reviewing an Aurelia Royale piece, verify the report associated with the specific diamond being offered rather than assuming an IGI badge or generic site-wide certification statement applies to every product." },
      { type: "paragraph", parts: [{ text: "Where a design is not currently available for direct purchase, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry to register your interest." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Verified specifications and transparent documentation — check the actual report, not just the badge.", shopHref: "/shop/", contactHref: "/contact/" }
    ]
  }
];

export default function BlogVerifyIGIPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Verify an IGI Certificate Number</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Match the Report to Your Diamond • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="verify-igi-certificate-number" />
      <NewsletterSection />
    </main>
  );
}

