import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "Diamond Necklace vs Pendant: What Is the Difference?",
  description: "Learn the difference between a diamond necklace and diamond pendant, whether a chain is included, and how pendant-only, pendant-with-chain and necklace products differ.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/diamond-necklace-vs-diamond-pendant/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (1).jpg", alt: "Diamond necklace vs pendant difference chain inclusion pendant-only comparison", title: "Diamond Necklace vs Diamond Pendant: What Is the Difference?", caption: "The most important question is not whether the product is called a necklace or pendant — it is exactly what will you receive.", priority: true },
      { type: "paragraph", text: "A diamond pendant and a diamond necklace are related terms, but they do not always describe the same thing. A necklace is the complete piece of jewellery worn around the neck. It can be a plain chain, a diamond station necklace, a continuous diamond line necklace, a chain with a fixed centre element or a chain carrying a removable pendant. A pendant is the decorative element that hangs from or is suspended by a necklace or chain." },
      { type: "paragraph", text: "That means a pendant can be part of a necklace, but the pendant itself is not necessarily the entire necklace. This distinction becomes particularly important when shopping online because a product described as a diamond pendant may sometimes mean the pendant component only, with the chain sold separately. In other cases, a retailer may use diamond pendant necklace to describe a complete product that already includes both the pendant and chain." },
      { type: "paragraph", text: "Current retailer examples demonstrate why buyers cannot infer the contents from the word \"pendant\" alone. Blue Nile describes pendants as decorative elements suspended from chains, while current Tiffany pendant listings explicitly state when the chain is sold separately. The safest rule is therefore: Do not ask only whether the product is called a necklace or pendant. Check exactly what is included." },
    ],
  },
  {
    heading: "Diamond Necklace vs Diamond Pendant: Quick Comparison",
    content: [
      { type: "table", headers: ["Feature", "Diamond Necklace", "Diamond Pendant"], rows: [["What the term describes", "Complete neck-worn jewellery", "Decorative element designed to hang from a chain or necklace"], ["Does it always have a chain?", "A complete necklace necessarily has a neck-worn chain, strand, linked structure or equivalent", "Not necessarily"], ["Can it contain one main diamond?", "Yes", "Yes"], ["Can it contain diamonds throughout the design?", "Yes", "Usually the term refers to the suspended focal component rather than the entire chain"], ["Can it be sold separately?", "Normally sold as the complete necklace being described", "Yes, depending on retailer and design"], ["Most important online check", "Length, construction and complete contents", "Whether the chain is included"], ["Main physical measurement", "Complete necklace length plus relevant design dimensions", "Pendant height and width, plus chain length if included"]] },
    ],
  },
  {
    heading: "What Is a Diamond Necklace?",
    content: [
      { type: "paragraph", text: "A diamond necklace is a complete item designed to be worn around the neck. That category can include many different structures. A necklace might contain a single diamond focal point, multiple spaced diamonds or diamonds continuing across a large part of the neckline." },
      { type: "paragraph", text: "Blue Nile's current jewellery guide describes a necklace broadly as a chain or length of precious metal or gemstones and distinguishes pendant styles as designs where a diamond, gemstone, metal design or pearl is suspended from a chain. This means necklace is the broader category. A pendant necklace is one type of necklace. A station necklace is another. A diamond line necklace is another. A plain precious-metal chain is also a necklace even if it has no pendant at all." },
    ],
  },
  {
    heading: "What Is a Diamond Pendant?",
    content: [
      { type: "paragraph", text: "A pendant is the decorative element that hangs from a chain or necklace. Blue Nile's current pendant guidance describes pendants as the part of a necklace that hangs from the chain and commonly contains an eye-catching design, gemstone or diamond. The pendant may consist of: one solitaire diamond in a setting, a diamond halo, a geometric motif, a letter or symbol, a diamond-set key, a multi-stone arrangement, or another decorative design. What makes it a pendant is not the number of diamonds. It is the way the element relates to the necklace: it is the suspended focal component." },
    ],
  },
  {
    heading: "A Pendant Can Be Part of a Necklace",
    content: [
      { type: "paragraph", text: "This is where the terminology often becomes confusing. Imagine a complete piece consisting of: a gold chain, a bail, and: a diamond-set pendant. The entire object is a diamond pendant necklace. The hanging decorative element is the diamond pendant. The chain is the structure that allows the complete piece to be worn around the neck. So the same piece can legitimately be described using both terms, but the words are referring to different levels of the product." },
      { type: "table", headers: ["Term", "What It Refers To"], rows: [["Pendant", "Hanging decorative component"], ["Chain", "The neck-worn structure supporting the pendant"], ["Pendant necklace", "Complete pendant + chain combination"], ["Necklace", "Broad category covering the complete neck-worn piece"]] },
      { type: "paragraph", text: "This distinction is especially useful when reviewing product pages because the product title alone may not tell you whether you are buying the component or the complete wearable necklace." },
    ],
  },
  {
    heading: "Pendant Only vs Pendant With Chain vs Complete Necklace",
    content: [
      { type: "paragraph", text: "This is the most important distinction on this page. There are three different product situations that can look similar in ecommerce photography." },
      { type: "paragraph", text: "1. Pendant Only: A pendant-only listing means you are purchasing the decorative pendant component but not necessarily the chain. The product may show the pendant attached to a chain for styling purposes while the actual chain is excluded. Current Tiffany diamond pendant listings provide a clear real-world example: several Tiffany Keys diamond pendants explicitly state \"Chain sold separately.\" In that situation, the buyer still needs a compatible chain before the pendant can be worn as a necklace." },
      { type: "paragraph", text: "2. Pendant With Chain: A pendant-with-chain product includes both components. The product specification should ideally explain: the pendant dimensions, the chain length, the chain metal, and whether the pendant is removable from the chain. In this case, the buyer receives a complete pendant necklace." },
      { type: "paragraph", text: "3. Complete Necklace Without a Separate Pendant Component: Not every diamond necklace contains a removable hanging pendant. A station necklace may place diamonds directly along the chain. A line necklace may consist of a continuous or near-continuous sequence of diamond settings. A bar necklace may have the focal design integrated directly between sections of chain. These are complete necklaces, but describing them as pendants may be inaccurate because there is no separately suspended pendant element." },
      { type: "table", headers: ["Product Type", "Pendant Included?", "Chain Included?", "Ready to Wear Around Neck?", "Key Question"], rows: [["Pendant only", "Yes", "Not necessarily", "No, unless buyer already has a compatible chain", "Is the chain included?"], ["Pendant with chain", "Yes", "Yes", "Yes", "What chain length and specification are supplied?"], ["Complete necklace without separate pendant", "Not necessarily", "Complete necklace structure included", "Yes", "How is the diamond design integrated into the necklace?"]] },
    ],
  },
  {
    heading: "Why Retail Product Names Can Be Confusing",
    content: [
      { type: "paragraph", text: "Jewellery terminology is not always used identically across every retailer. One seller may call a complete chain-and-pendant product a diamond necklace. Another may call essentially the same category a diamond pendant necklace. A third may use diamond pendant in the product title even where a chain is included. This does not necessarily mean any of the retailers are incorrect. The important point is that the product title is a category label, not the complete specification. The buyer should still check: what is physically supplied, how the pendant connects, the chain length, the metal, and the dimensions." },
    ],
  },
  {
    heading: "Does \"Diamond Pendant\" Mean the Chain Is Included?",
    content: [
      { type: "paragraph", text: "No. You should never assume that the chain is included simply because the product photograph shows one. Current Tiffany product pages demonstrate this clearly: diamond pendant listings can display the pendant in necklace-oriented merchandising while explicitly stating that the chain is sold separately. Other retailers sell pendant necklaces as complete chain-and-pendant products. Therefore the correct answer is: sometimes the chain is included and sometimes it is not. The product description must tell you." },
    ],
  },
  {
    heading: "What Should a Product Page Say About Chain Inclusion?",
    content: [
      { type: "paragraph", text: "A clear pendant product page should leave no ambiguity about the contents. If the chain is included, the product specification should ideally state the chain details. If the chain is excluded, the listing should say something equivalent to: Pendant only — chain not included or: Chain sold separately. The important principle is not the exact wording. It is that the buyer should know what arrives before committing to the transaction." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (2).jpg", alt: "Product photography chain pendant styling image inclusion specification confirmation", title: "Why Product Photography Is Not Enough", caption: "A chain used in product photography does not prove it is included — always check the written specification.", priority: false },
    ],
  },
  {
    heading: "Why Product Photography Is Not Enough",
    content: [
      { type: "paragraph", text: "Suppose a website shows a diamond pendant beautifully styled on a chain around a model's neck. It is easy to assume that the chain is part of the product. That assumption may be wrong. A chain can be used in photography simply to demonstrate how the pendant looks when worn. The same principle applies to: earrings shown beside a necklace, multiple necklaces layered together, rings included in styling images, or decorative presentation accessories. Use images to understand the design. Use the product specification to determine what is actually included." },
    ],
  },
  {
    heading: "A Pendant Without a Chain Is Not an Incomplete Product",
    content: [
      { type: "paragraph", text: "If a retailer clearly sells a pendant alone, that does not mean anything is missing. Some buyers deliberately want pendant-only products because they already own: a suitable chain, a preferred chain length, a heavier chain, or: a chain in a particular style. Selling the pendant separately can therefore provide flexibility. The issue is not whether pendant-only products are good or bad. The issue is clear disclosure." },
    ],
  },
  {
    heading: "Why Would Someone Buy a Pendant Without a Chain?",
    content: [
      { type: "paragraph", text: "A buyer may already own a chain they wear regularly. They may also prefer to select a separate chain based on: length, thickness, metal, link design, or how the chain sits with other jewellery. A pendant-only purchase can make sense when the wearer knows exactly which chain they want. But compatibility still needs to be considered. The pendant's bail or opening must accommodate the chosen chain and relevant end components. Do not assume every pendant fits every chain." },
    ],
  },
  {
    heading: "What Is a Bail?",
    content: [
      { type: "paragraph", text: "The bail is the part of many pendant designs through which the chain passes or to which the chain connects. Blue Nile's pendant guidance describes the bail as the part securing a pendant around or to the necklace chain. Its dimensions and construction can affect whether the pendant can be moved onto another chain. A very small bail opening may not pass over a larger chain clasp. A pendant fixed permanently between sections of chain may not be removable at all. This is why pendant with chain does not automatically mean interchangeable pendant." },
    ],
  },
  {
    heading: "Removable Pendant vs Fixed Centre Design",
    content: [
      { type: "paragraph", text: "These products can look similar from the front while functioning differently." },
      { type: "table", headers: ["Feature", "Removable Pendant", "Fixed Centre Necklace"], rows: [["Can pendant move along chain?", "Often yes", "Usually restricted or fixed"], ["Can another chain be used?", "Potentially, if compatible", "Usually not without modification"], ["Focal position", "May shift along chain", "Usually remains centred"], ["Chain replacement", "Often simpler", "Can require jewellery work"], ["Product terminology", "Clearly pendant-based", "Often better described as necklace/centre design"]] },
      { type: "paragraph", text: "Neither construction is inherently better. A removable pendant gives more flexibility. A fixed centre element can provide more controlled positioning." },
    ],
  },
  {
    heading: "A Solitaire Diamond Pendant Is Different From a Diamond Line Necklace",
    content: [
      { type: "paragraph", text: "A solitaire pendant concentrates almost all visual attention into one diamond. A diamond line necklace distributes the visual interest across many stones. Even if their total diamond weights were similar, the wearing experience would be completely different. This is why the necklace-versus-pendant distinction is partly about construction and partly about where the diamonds are positioned." },
      { type: "paragraph", parts: [{ text: "For the broader design comparison, use " }, { text: "How to Compare Different Diamond Necklace Designs", href: "/blog/compare-diamond-necklace-designs/" }] },
    ],
  },
  {
    heading: "A Pendant Is Also Different From a Station Necklace",
    content: [
      { type: "paragraph", text: "A station necklace places several decorative or diamond elements at intervals along a chain. There may be no single suspended component that functions as the pendant. Blue Nile describes station necklaces as designs where gemstones or decorative elements are positioned at intervals along the chain. The visual difference is straightforward. A pendant says: one focal point. A station necklace says: several points of interest across the chain." },
    ],
  },
  {
    heading: "Necklace vs Pendant: Diamond Distribution",
    content: [
      { type: "table", headers: ["Design", "Diamond Distribution", "Primary Visual Effect"], rows: [["Solitaire pendant", "Concentrated in one centre stone", "Strong single focus"], ["Halo pendant", "Centre + surrounding accents", "Larger central motif"], ["Multi-stone pendant", "Several diamonds within one hanging element", "Concentrated decorative design"], ["Station necklace", "Diamonds separated along chain", "Distributed sparkle"], ["Line necklace", "Many diamonds close together", "Broad diamond coverage"]] },
      { type: "paragraph", text: "This distinction is more informative than simply comparing total carat weight." },
    ],
  },
  {
    heading: "Carat Weight Can Mean Different Things in a Pendant and Necklace",
    content: [
      { type: "paragraph", text: "A solitaire diamond pendant may state a carat figure referring to one centre diamond. A halo pendant may state: centre-stone carat, accent weight, and total diamond weight. A diamond line necklace may contain dozens of smaller diamonds whose weights combine into one total carat figure. That means: 1 ct diamond pendant and: 1 ct diamond necklace do not necessarily describe visually similar products. Before comparing them, determine how the diamond weight is distributed." },
      { type: "paragraph", parts: [{ text: "For the dedicated explanation, use " }, { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "Same Total Carat Weight, Different Product",
    content: [
      { type: "paragraph", text: "Imagine three fictional jewellery products, each containing 1.00 ct total diamond weight. These are illustrative examples only." },
      { type: "table", headers: ["Fictional Product", "Diamond Distribution", "Likely Appearance"], rows: [["Pendant A", "One 1.00 ct centre diamond", "One dominant focal stone"], ["Pendant B", "0.70 ct centre + 0.30 ct halo", "Larger decorative outline"], ["Necklace C", "Many smaller diamonds totalling 1.00 ct", "Diamond sparkle distributed across neckline"]] },
      { type: "paragraph", text: "The total diamond weight matches. The products do not. This is why necklace and pendant price comparisons should not start with TCW alone." },
    ],
  },
  {
    heading: "Pendant Size Is Different From Diamond Size",
    content: [
      { type: "paragraph", text: "A diamond may measure several millimetres across. The completed pendant will usually be larger because it also includes: the setting, bail, metal framework, accent diamonds, or another design element. For example, a halo pendant may have a relatively modest centre diamond while creating a much larger finished visual outline. Therefore check: diamond measurements and: finished pendant dimensions separately." },
      { type: "paragraph", parts: [{ text: "For physical measurement terminology, use " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
    ],
  },
  {
    heading: "Chain Length Changes How a Pendant Looks",
    content: [
      { type: "paragraph", text: "A pendant is not visually independent from its chain. The same pendant can sit at very different positions depending on chain length. Moving it higher may place it near the collarbone. Moving it lower can change its relationship with clothing necklines and other necklaces. That is why chain length should be confirmed whenever a chain is included. If a pendant-only listing excludes the chain, then the buyer will also need to choose an appropriate chain length independently." },
    ],
  },
  {
    heading: "Chain Thickness Also Matters",
    content: [
      { type: "paragraph", text: "Two chains of identical length can produce different results. A very fine chain can make the pendant appear visually dominant. A wider or heavier chain becomes more visible and can change the balance of the necklace. Compatibility matters as well. A chain must be appropriate for: the pendant's bail, the physical mass of the pendant, and the intended visual design. Do not assume the thinnest possible chain is always the best match." },
    ],
  },
  {
    heading: "Chain Metal Should Not Be Assumed",
    content: [
      { type: "paragraph", text: "A diamond pendant may be made from one metal while the separately selected chain is another. If a complete pendant necklace is sold as one product, check the stated metal specification for the complete piece. If the pendant is sold alone, then the buyer must separately choose the chain material." },
      { type: "paragraph", parts: [{ text: "For precious-metal verification and fineness, use " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "Does the Pendant Need to Match the Chain Metal?",
    content: [
      { type: "paragraph", text: "Not necessarily. Mixed-metal jewellery can be intentional. But if the buyer wants a visually consistent same-metal necklace, both the pendant and chain specifications should be checked. Do not judge this from colour alone. Two visually similar white metals can be materially different." },
    ],
  },
  {
    heading: "Is a Chain Necklace a Pendant?",
    content: [
      { type: "paragraph", text: "No. A plain chain worn around the neck is a necklace even if it contains no pendant. Likewise, a diamond-set chain design or diamond line necklace can be a necklace without containing a separately suspended pendant. This is why necklace is the broader term." },
    ],
  },
  {
    heading: "Is Every Pendant a Necklace?",
    content: [
      { type: "paragraph", text: "Not by itself. A pendant is the decorative component. It becomes part of a wearable necklace when attached to a suitable chain or necklace structure. A pendant sold without a chain therefore remains a valid piece of jewellery, but it is not yet the entire wearable necklace combination." },
    ],
  },
  {
    heading: "Is Every Diamond Necklace a Pendant Necklace?",
    content: [
      { type: "paragraph", text: "No. A diamond necklace can be: a pendant necklace, a station necklace, a line necklace, a chain with integrated diamond motifs, or another structure. Pendant necklaces are one subset of diamond necklaces." },
    ],
  },
  {
    heading: "Pendant Necklace vs Diamond Necklace: Terminology Table",
    content: [
      { type: "table", headers: ["Term", "Correct Interpretation"], rows: [["Diamond necklace", "Broad category for complete diamond jewellery worn around the neck"], ["Diamond pendant", "Diamond-containing decorative element designed to hang from a chain"], ["Diamond pendant necklace", "Complete necklace built around a diamond pendant"], ["Pendant only", "Pendant sold without an included chain unless otherwise stated"], ["Diamond station necklace", "Complete necklace with diamonds positioned at intervals"], ["Diamond line necklace", "Complete necklace with continuous or near-continuous diamond coverage"], ["Chain necklace", "Necklace where the chain itself forms most or all of the design"]] },
      { type: "paragraph", text: "This vocabulary makes online product listings easier to interpret." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (3).jpg", alt: "Pendant only chain included complete necklace product comparison specification", title: "What Should You Check Before Buying a Diamond Pendant?", caption: "The most important question is deceptively simple: what exactly am I buying?", priority: false },
    ],
  },
  {
    heading: "What Should You Check Before Buying a Diamond Pendant?",
    content: [
      { type: "paragraph", text: "The most important question is deceptively simple: What exactly am I buying? If the product is pendant-only, understand the pendant dimensions and chain compatibility. If the chain is included, check its length, metal, construction and fastening. If the pendant contains a significant centre diamond, check whether the stated carat figure refers to the centre stone or the total diamond weight. If laboratory documentation applies, confirm which stone or product the report actually covers." },
      { type: "paragraph", parts: [{ text: "The broader product-verification process belongs in " }, { text: "What to Check Before Buying Lab-Grown Diamond Jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" }, { text: ", so this article does not need to repeat every certification check." }] },
    ],
  },
  {
    heading: "What Should You Check Before Buying a Complete Diamond Necklace?",
    content: [
      { type: "paragraph", text: "For a complete necklace, the primary structural questions are different. You need to understand: the necklace design, complete length, where the diamonds are positioned, the chain or link construction, the fastening, and how the total diamond weight is distributed. A pendant may not exist at all. This is why a necklace should not automatically be evaluated using a pendant checklist." },
    ],
  },
  {
    heading: "Online Listing Example: Pendant Only",
    content: [
      { type: "paragraph", text: "Imagine a fictional product called: Oval Lab-Grown Diamond Pendant. The description states: 0.75 ct oval laboratory-grown diamond, 18ct gold setting, Pendant height: 9 mm, Chain sold separately. The customer is buying: the diamond, setting, and pendant component. They are not buying a complete necklace. They will need a compatible chain." },
    ],
  },
  {
    heading: "Online Listing Example: Pendant With Chain",
    content: [
      { type: "paragraph", text: "Now imagine another fictional product: Oval Lab-Grown Diamond Pendant Necklace. The specification states: 0.75 ct oval laboratory-grown diamond, 18ct gold pendant, 18ct gold chain included, Chain length: 45 cm, Pendant height: 9 mm. This is a complete wearable pendant necklace. The pendant and chain are both part of the product." },
    ],
  },
  {
    heading: "Online Listing Example: Complete Necklace Without a Pendant",
    content: [
      { type: "paragraph", text: "A third fictional product reads: Lab-Grown Diamond Station Necklace. It states: seven laboratory-grown diamonds positioned along an 18ct gold chain, total diamond weight: 0.75 ct, necklace length: 45 cm. This is also a complete diamond necklace. But it is not a pendant necklace because no single hanging pendant forms the main decorative element." },
      { type: "table", headers: ["Product", "Pendant?", "Chain Included?", "Complete Necklace?"], rows: [["Oval diamond pendant", "Yes", "No", "No"], ["Oval diamond pendant necklace", "Yes", "Yes", "Yes"], ["Diamond station necklace", "No separate pendant", "Yes", "Yes"]] },
      { type: "paragraph", text: "This distinction is exactly what product pages should make clear." },
    ],
  },
  {
    heading: "Which Is Better: Diamond Necklace or Diamond Pendant?",
    content: [
      { type: "paragraph", text: "Neither. The terms do not represent competing quality levels. If the buyer wants one central focal diamond, a pendant necklace may be the stronger design choice. If they want diamonds distributed around the neckline, a station or line necklace may fit the objective better. If they already own a suitable chain, buying a pendant alone may provide flexibility. If they want one complete ready-to-wear product, a pendant necklace with an included chain can be simpler. The better choice depends on the desired construction." },
    ],
  },
  {
    heading: "Is a Diamond Pendant More Versatile?",
    content: [
      { type: "paragraph", text: "Potentially. A removable pendant may allow the wearer to change: chain length, chain style, metal appearance, or layering position. But that flexibility depends on physical compatibility. A pendant with a small bail may not fit every chain. A fixed pendant may not be removable at all. Do not assume pendant = interchangeable. Verify the construction." },
    ],
  },
  {
    heading: "Is a Diamond Necklace More Complete?",
    content: [
      { type: "paragraph", text: "If by diamond necklace you mean a product sold as the full neck-worn piece, then yes: it is already the complete jewellery item. But this does not make it objectively better. A pendant-only product is intentionally incomplete as a necklace because the buyer is purchasing one component. That can be exactly what the customer wants." },
    ],
  },
  {
    heading: "What If the Product Title Says \"Pendant Necklace\"?",
    content: [
      { type: "paragraph", text: "That normally indicates that the necklace design contains a pendant. But you should still check what the seller includes. Retail product naming is not sufficiently standardised to treat the title as a guarantee of chain inclusion. Look at the product specifications and included components." },
    ],
  },
  {
    heading: "What If the Product Photo Shows a Chain but the Description Does Not Mention One?",
    content: [
      { type: "paragraph", text: "Do not assume the chain is included. Ask before proceeding. Current luxury-retail examples demonstrate precisely why: Tiffany has pendant product pages where a chain is visible as part of the category presentation but the specification clearly states that the chain is sold separately. The written product contents should control your expectation." },
    ],
  },
  {
    heading: "What if Aurelia Uses the Word \"Pendant\"?",
    content: [
      { type: "paragraph", text: "Aurelia product pages should clearly specify whether the product is: pendant only or: pendant with chain included. If a chain is included, the product page should also state the confirmed chain length and relevant metal specification. Do not use generic copy such as: \"includes matching chain\" unless the client has confirmed that the exact product includes one." },
    ],
  },
  {
    heading: "What if Aurelia Does Not Have a Confirmed Chain Specification?",
    content: [
      { type: "paragraph", text: "Do not invent it. Do not assume: 16 inches, 18 inches, adjustable, gold, silver, or any particular clasp. Leave the chain specification unclaimed until confirmed. If the product cannot yet be purchased because price or final commercial information is unavailable, use the current Aurelia approach: Join Waitlist or: Enquire About This Piece. Joining the waitlist should register interest only. It should not represent an order, reservation or preorder." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/diamond-necklace-vs-diamond-pendant/70 (4).jpg", alt: "Diamond necklace pendant FAQ final answer chain included specification checklist", title: "Frequently Asked Questions", caption: "The strongest rule: check what is physically supplied — not just what the product is called.", priority: false },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", title: "Frequently Asked Questions", items: [
        { question: "What is the difference between a diamond necklace and a diamond pendant?", answer: "A diamond necklace is the complete piece worn around the neck. A diamond pendant is the decorative element suspended from a chain or necklace." },
        { question: "Is a pendant the same as a necklace?", answer: "No, although a pendant can form part of a necklace." },
        { question: "What is a pendant necklace?", answer: "A pendant necklace is a complete necklace where a pendant is suspended from or incorporated with a chain." },
        { question: "Does a diamond pendant come with a chain?", answer: "Sometimes, but not always." },
        { question: "How do I know whether a chain is included?", answer: "Check the product description and included-component information." },
        { question: "Can a pendant be sold by itself?", answer: "Yes. Current retailers sell some pendants separately from their chains." },
        { question: "Why would a pendant be sold without a chain?", answer: "Some customers already own a suitable chain or want to choose their own length, metal or chain style." },
        { question: "Can every pendant go on every chain?", answer: "No. Bail size, clasp dimensions, chain thickness and construction can affect compatibility." },
        { question: "What is a pendant bail?", answer: "It is the component through or through which the chain commonly connects to the pendant." },
        { question: "Is a pendant always removable from its chain?", answer: "No. Some designs are fixed into the necklace structure." },
        { question: "Is a diamond station necklace a pendant necklace?", answer: "Not necessarily. Station necklaces distribute diamonds at intervals rather than using one main suspended pendant." },
        { question: "Is a tennis or line necklace a pendant necklace?", answer: "Usually not if its diamonds form a continuous linked line rather than one separate hanging element." },
        { question: "Does a necklace need a pendant?", answer: "No." },
        { question: "Does a pendant need a chain?", answer: "It needs an appropriate necklace or chain structure to be worn around the neck, but the chain does not necessarily need to be sold with it." },
        { question: "Is a chain itself a necklace?", answer: "Yes. A chain designed to be worn around the neck is a necklace even without a pendant." },
        { question: "Does 'pendant necklace' always mean the chain is included?", answer: "Do not rely on the title alone. Check the actual product contents." },
        { question: "Can the same pendant be worn at different lengths?", answer: "Potentially, if it is removable and compatible with other chains." },
        { question: "Does necklace length matter for a pendant?", answer: "Yes. Chain length determines where the pendant sits on the wearer." },
        { question: "Should I check pendant measurements?", answer: "Yes. Finished pendant dimensions are separate from the diamond's own measurements." },
        { question: "Is pendant carat weight the same as necklace total carat weight?", answer: "Not always. Check whether the figure applies to a centre diamond, pendant total or complete necklace." },
        { question: "Can a pendant contain several diamonds?", answer: "Yes." },
        { question: "Can a necklace have several diamonds without a pendant?", answer: "Yes. Station and line necklaces are common examples." },
        { question: "Which is better for one focal diamond?", answer: "A pendant design often provides the clearest single focal point." },
        { question: "Which is better for broader diamond coverage?", answer: "Station and line designs distribute diamonds across more of the necklace." },
        { question: "Is a pendant-only product lower quality?", answer: "No. Chain inclusion and jewellery quality are separate issues." },
        { question: "Should a product photograph prove what is included?", answer: "No. The written specification should identify the supplied components." },
        { question: "What should Aurelia specify on a pendant product page?", answer: "At minimum, it should make clear whether the chain is included. Confirmed pendant dimensions, chain length, metal and relevant diamond specifications should also be shown where available." },
      ]},
    ],
  },
  {
    heading: "Final Answer: Diamond Necklace vs Diamond Pendant",
    content: [
      { type: "paragraph", text: "The simplest distinction is this: A necklace is the complete neck-worn piece. A pendant is the decorative element that hangs from it. A diamond pendant can therefore be part of a diamond necklace, but the two terms are not interchangeable." },
      { type: "paragraph", text: "When shopping online, there are three different product situations to distinguish. A pendant-only product contains the decorative component but may exclude the chain. A pendant-with-chain product contains both and forms a complete pendant necklace. A complete diamond necklace can also contain no separate pendant at all, as with station or continuous line designs." },
      { type: "paragraph", text: "That is why the most important question is not: \"Is this called a necklace or pendant?\" It is: \"Exactly what will I receive?\" Check whether the chain is included. If it is, confirm the length, metal and construction. If it is not, check that the pendant is compatible with the chain you intend to use. Then compare the diamond information, pendant dimensions and complete necklace structure separately." },
      { type: "paragraph", parts: [{ text: "For the different necklace architectures, continue with " }, { text: "How to Compare Different Diamond Necklace Designs", href: "/blog/compare-diamond-necklace-designs/" }] },
      { type: "paragraph", parts: [{ text: "For total carat weight, use " }, { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For the final product verification, use " }, { text: "What to Check Before Buying Lab-Grown Diamond Jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "Where an Aurelia Royale product does not yet have an approved direct-purchase price, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry. This should register interest only and should not be presented as a purchase, reservation or preorder." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Necklaces", subtitle: "Know what you are buying — pendant only, pendant with chain, or complete necklace.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogNecklacePendantPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">Diamond Necklace vs Diamond Pendant: What Is the Difference?</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Chain Inclusion, Pendant-Only vs Complete Necklace Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="diamond-necklace-vs-diamond-pendant" />
      <NewsletterSection />
    </main>
  );
}

