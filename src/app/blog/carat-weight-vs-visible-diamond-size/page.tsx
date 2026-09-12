import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "Diamond Carat Weight vs Size: Carat-to-MM Guide",
  description: "Carat measures diamond weight, not visible size. Compare approximate diamond dimensions in mm and learn why equal-carat stones can look different face-up.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aureliaroyale.com/#organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
    { "@type": "WebSite", "@id": "https://www.aureliaroyale.com/#website", "url": "https://www.aureliaroyale.com/", "name": "Aurelia Royale", "publisher": { "@id": "https://www.aureliaroyale.com/#organization" } },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#webpage",
      "url": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/",
      "name": "Diamond Carat Weight vs Size: Why Equal-Carat Diamonds Can Look Different",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#breadcrumb" },
      "datePublished": "2026-07-15", "dateModified": "2026-09-10"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#article",
      "headline": "Diamond Carat Weight vs Size: Why Equal-Carat Diamonds Can Look Different",
      "description": "Carat measures diamond weight, not visible size. Compare approximate diamond dimensions in mm and learn why equal-carat stones can look different face-up.",
      "datePublished": "2026-07-15", "dateModified": "2026-09-10",
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#webpage" },
      "articleSection": "Certification and Diamond Quality",
      "keywords": ["diamond carat weight vs size", "diamond carat to mm", "how big is 1 carat diamond", "diamond size chart"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Diamond Carat Weight vs Size", "item": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Is diamond carat a measure of size or weight?", "acceptedAnswer": { "@type": "Answer", "text": "Carat measures weight. One carat equals 0.20 grams. A diamond's physical size is measured separately in millimetres." } },
        { "@type": "Question", "name": "How big is a 1 carat round diamond?", "acceptedAnswer": { "@type": "Answer", "text": "A reasonably proportioned 1 ct round brilliant is commonly around 6.4–6.6 mm in face-up diameter. Individual stones can vary." } },
        { "@type": "Question", "name": "Can two 1 carat diamonds be different sizes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both can weigh exactly 1.00 ct while having different lengths, widths and depths because their weight is distributed differently." } },
        { "@type": "Question", "name": "Does a lab-grown diamond look bigger than a natural diamond of the same carat?", "acceptedAnswer": { "@type": "Answer", "text": "Not inherently. If natural and laboratory-grown diamonds have the same carat weight, shape and similar proportions, their physical dimensions should be comparable." } },
        { "@type": "Question", "name": "Is total carat weight the same as centre-stone size?", "acceptedAnswer": { "@type": "Answer", "text": "No. Total carat weight adds together the weight of multiple diamonds. A 1.00 ct total-weight ring may contain a centre diamond considerably smaller than 1.00 ct." } }
      ]
    }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (1).jpg",
        alt: "Comparison of diamond carat weight versus visible face-up size",
        title: "Diamond Carat Weight vs Visible Size",
        caption: "Carat measures weight — how that weight is distributed through the diamond determines what you see from above.",
        priority: true,
      },
      { type: "paragraph", text: "Diamond carat weight and visible size are not the same thing." },
      { type: "paragraph", text: "Carat tells you how much a diamond weighs. Millimetre measurements tell you how large the polished stone physically measures. When you look at a diamond from above, those dimensions — together with its shape, proportions and setting — have a major influence on how large it appears." },
      { type: "paragraph", text: "This explains something that initially surprises many diamond buyers:" },
      { type: "paragraph", text: "Two diamonds can both weigh exactly 1.00 carat and still look different in size." },
      { type: "paragraph", text: "One may spread more of its weight across the visible face of the diamond. Another may carry more weight in its depth or girdle, where that extra material contributes to carat weight without producing the same increase in visible diameter, length or width." },
      { type: "paragraph", text: "For that reason, carat should never be read as a direct measurement of millimetre size." }
    ]
  },
  {
    heading: "Quick Answer: Is Diamond Carat a Weight or a Size?",
    content: [
      { type: "paragraph", text: "A carat is a unit of weight." },
      { type: "paragraph", text: "One metric carat equals 0.20 grams, or 200 milligrams, and each carat is divided into 100 points." },
      { type: "paragraph", text: "A 0.50 ct diamond therefore weighs half a carat. A 0.75 ct diamond weighs 75 points. A 1.00 ct diamond weighs one carat." },
      { type: "paragraph", text: "None of those numbers tells you the diamond's exact diameter, length or width." },
      { type: "paragraph", text: "Physical dimensions are measured separately in millimetres." },
      { type: "paragraph", text: "For a round diamond, the most noticeable face-up measurement is its diameter. Fancy shapes such as oval, pear, emerald, radiant and marquise diamonds are normally described by length and width as well as depth." },
      { type: "paragraph", text: "That distinction is the foundation of diamond size comparison." }
    ]
  },
  {
    heading: "Carat Weight vs Visible Size",
    content: [
      {
        type: "table",
        headers: ["Measurement", "What It Tells You"],
        rows: [
          ["Carat weight", "How much the diamond weighs"],
          ["Length", "How long the diamond measures"],
          ["Width", "How wide the diamond measures"],
          ["Depth", "How deep the diamond extends from top to bottom"],
          ["Face-up size", "The visible spread when viewed from above"],
          ["Length-to-width ratio", "The outline proportions of elongated or rectangular shapes"]
        ]
      },
      { type: "paragraph", text: "Carat weight matters, but visible size depends on how that weight has been distributed through the polished diamond." },
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (2).jpg",
        alt: "Diamond face-up size chart comparing carat weight to millimetre measurements",
        title: "How Carat Weight Relates to Diamond Dimensions",
        caption: "The same carat weight can produce noticeably different face-up sizes depending on a diamond's shape, depth and proportions."
      }
    ]
  },
  {
    heading: "How Big Is a 1 Carat Diamond?",
    content: [
      { type: "paragraph", text: "There is no single millimetre measurement for every 1 carat diamond." },
      { type: "paragraph", text: "For a reasonably proportioned 1.00 ct round brilliant, approximately 6.4–6.6 mm in diameter is a useful general reference." },
      { type: "paragraph", text: "GIA cut research uses roughly 6.5–6.6 mm as the expected face-up diameter of a typical 1 ct round brilliant." },
      { type: "paragraph", text: "Fancy-shaped diamonds are different because their weight is distributed through different outlines." },
      { type: "paragraph", text: "A one-carat oval can be substantially longer than a one-carat round. A marquise can be longer still. A princess or Asscher may have smaller length and width measurements because of how its weight is distributed through its square shape and depth." },
      { type: "paragraph", text: "So the question \"How many millimetres is one carat?\" cannot be answered accurately without also knowing the diamond shape and proportions." }
    ]
  },
  {
    heading: "Approximate Round Diamond Carat-to-MM Size Chart",
    content: [
      {
        type: "table",
        headers: ["Carat Weight", "Approximate Round Face-Up Diameter"],
        rows: [
          ["0.25 ct", "about 4.0–4.2 mm"],
          ["0.50 ct", "about 5.0–5.2 mm"],
          ["0.75 ct", "about 5.7–5.9 mm"],
          ["1.00 ct", "about 6.4–6.6 mm"],
          ["1.50 ct", "about 7.3–7.5 mm"],
          ["2.00 ct", "about 8.0–8.2 mm"],
          ["2.50 ct", "about 8.6–8.9 mm"],
          ["3.00 ct", "about 9.2–9.4 mm"]
        ]
      },
      { type: "paragraph", text: "Important: These figures are approximate reference dimensions for normally proportioned round diamonds. Two diamonds at the same carat weight can measure differently." },
      { type: "paragraph", text: "Do not reject or choose a diamond simply because it differs slightly from a chart. Examine its complete proportions and light performance." }
    ]
  },
  {
    heading: "Approximate 1 Carat Diamond Size by Shape",
    content: [
      {
        type: "table",
        headers: ["Diamond Shape", "Approximate 1 ct Face-Up Dimensions"],
        rows: [
          ["Round", "about 6.4–6.6 mm diameter"],
          ["Oval", "about 7.8–8.2 × 5.4–5.8 mm"],
          ["Pear", "about 8.3–9.0 × 5.4–5.8 mm"],
          ["Marquise", "about 9.5–10.4 × 4.8–5.2 mm"],
          ["Emerald", "about 6.5–7.0 × 4.5–5.0 mm"],
          ["Radiant", "about 6.5–7.2 × 5.0–5.5 mm"],
          ["Cushion", "about 5.6–6.0 × 5.6–6.0 mm for a roughly square outline"],
          ["Princess", "about 5.3–5.6 × 5.3–5.6 mm"],
          ["Asscher", "about 5.4–5.7 × 5.4–5.7 mm"],
          ["Heart", "about 6.3–6.7 × 6.3–6.7 mm"]
        ]
      },
      { type: "paragraph", text: "These ranges should always be labelled approximate. Fancy-shaped diamonds vary considerably because length-to-width preferences differ." }
    ]
  },
  {
    heading: "Why Can Two 1 Carat Diamonds Look Different Sizes?",
    content: [
      { type: "paragraph", text: "Because equal weight does not require equal dimensions." },
      { type: "paragraph", text: "Imagine two diamonds that both weigh exactly 1.00 ct." },
      { type: "paragraph", text: "The first distributes its weight efficiently across an attractive face-up outline." },
      { type: "paragraph", text: "The second carries additional material through a deeper pavilion or thick girdle." },
      { type: "paragraph", text: "Both still weigh one carat." },
      { type: "paragraph", text: "But when viewed from above, the first may cover more visible area." },
      { type: "paragraph", text: "GIA specifically warns about this issue. A diamond can contain extra weight below or around the girdle that contributes to carat weight without providing a corresponding visual benefit when the stone is viewed face-up." },
      { type: "paragraph", text: "In other words: you can pay for carat weight that you cannot really see." }
    ]
  },
  {
    heading: "Depth: Where Hidden Carat Weight Can Go",
    content: [
      { type: "paragraph", text: "A polished diamond is three-dimensional." },
      { type: "paragraph", text: "You normally admire it from above, but a substantial part of its mass extends below the girdle into the pavilion." },
      { type: "paragraph", text: "When too much weight is concentrated there, the diamond can become deep without becoming proportionately wider." },
      { type: "paragraph", text: "This is often called hidden weight." },
      { type: "paragraph", text: "The same issue can occur in an overly thick girdle." },
      { type: "paragraph", text: "GIA cut research specifically considers whether a diamond weighs more than its face-up appearance justifies." },
      { type: "paragraph", text: "However, the opposite extreme is not automatically better." },
      { type: "paragraph", text: "A very shallow diamond may produce greater spread but weaker light behaviour." },
      { type: "paragraph", text: "The objective is not simply to make the diamond as wide as possible. It is to balance face-up dimensions with attractive optical performance." }
    ]
  },
  {
    heading: "Bigger Face-Up Does Not Automatically Mean Better",
    content: [
      { type: "paragraph", text: "Suppose two 1.00 ct rounds measure approximately: Diamond A: 6.45 mm diameter, Diamond B: 6.75 mm diameter." },
      { type: "paragraph", text: "It may be tempting to assume Diamond B is automatically superior because it appears larger." },
      { type: "paragraph", text: "Not necessarily." },
      { type: "paragraph", text: "If the wider stone achieved that spread through proportions that allow excessive light leakage, it may appear less bright or less balanced despite covering more surface area." },
      { type: "paragraph", text: "The correct question is therefore not: \"Which diamond has the biggest millimetre measurement?\"" },
      { type: "paragraph", text: "It is: \"Does this diamond have appropriate face-up dimensions while still delivering the appearance and light performance I want?\"" },
      { type: "paragraph", text: "Visible size is important, but it should not replace cut quality." }
    ]
  },
  {
    heading: "Length-to-Width Ratio Changes What You See",
    content: [
      { type: "paragraph", text: "For elongated diamonds, the relationship between length and width strongly affects their visual character." },
      { type: "paragraph", text: "Length-to-width ratio is calculated by dividing the length by the width." },
      { type: "paragraph", text: "A hypothetical oval measuring 8.10 × 5.40 mm has a length-to-width ratio of 8.10 ÷ 5.40 = 1.50. An oval measuring 7.80 × 5.80 mm has a ratio of approximately 7.80 ÷ 5.80 = 1.34." },
      { type: "paragraph", text: "Both can weigh approximately one carat while presenting very different outlines." },
      { type: "paragraph", text: "The preferred ratio is partly aesthetic." },
      { type: "paragraph", text: "Some buyers like elongated shapes. Others prefer fuller, broader outlines." },
      { type: "paragraph", text: "That is why a carat-to-mm chart should be used as a reference, not as a specification rule." },
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (3).jpg",
        alt: "Different diamond shapes showing how carat weight distributes across various outlines",
        title: "How Shape Changes the Face-Up Appearance of Equal-Carat Diamonds",
        caption: "An oval, pear or marquise can look considerably longer than a round of the same carat weight — shape distributes weight differently."
      }
    ]
  },
  {
    heading: "Which Diamond Shapes Look Largest for Their Carat Weight?",
    content: [
      { type: "paragraph", text: "Elongated shapes such as marquise, pear and oval diamonds often present greater length than round, princess, cushion or Asscher diamonds of equivalent weight." },
      { type: "paragraph", text: "This can make them appear visually prominent on the finger." },
      { type: "paragraph", text: "But there is no universally correct ranking of which shape \"looks biggest.\"" },
      { type: "paragraph", text: "Apparent size is influenced by length, width, face-up area, outline, setting, finger dimensions and light performance." },
      { type: "paragraph", text: "Choose shape primarily because you like its visual character — not merely because one chart gives it the largest single measurement." }
    ]
  },
  {
    heading: "Diamond Measurements Matter More Than Carat Alone When Shopping Online",
    content: [
      { type: "paragraph", text: "When viewing jewellery online, carat weight is easy to understand because it provides one simple number." },
      { type: "paragraph", text: "But if visual size matters to you, look for actual millimetre dimensions as well." },
      { type: "paragraph", text: "For a loose diamond, these may appear on its laboratory report." },
      { type: "paragraph", text: "For finished jewellery, product specifications may provide measurements of the centre stone, setting or complete piece." },
      { type: "paragraph", text: "The important point is that 1.00 ct does not tell you how much finger, ear or neckline coverage the jewellery will provide." },
      { type: "paragraph", text: "A good online specification gives you enough information to visualise the scale more realistically." }
    ]
  },
  {
    heading: "Carat Weight Is Not the Same as Total Carat Weight",
    content: [
      { type: "paragraph", text: "This becomes even more important with finished jewellery." },
      { type: "paragraph", text: "A ring described as 1.00 ct centre stone is very different from a ring described as 1.00 ct total weight." },
      { type: "paragraph", text: "The first may contain one diamond weighing one carat." },
      { type: "paragraph", text: "The second may contain numerous smaller diamonds whose combined weight equals one carat." },
      { type: "paragraph", text: "A pair of earrings labelled 1.00 ct total weight might contain approximately 0.50 ct of diamonds in each earring rather than two separate 1.00 ct diamonds." },
      { type: "paragraph", text: "A tennis bracelet may contain several carats distributed across dozens of individual stones." },
      { type: "paragraph", text: "Carat-to-mm charts therefore apply to individual diamonds, not automatically to a piece's total carat weight." },
      {
        type: "paragraph",
        parts: [
          { text: "For the complete distinction, read " },
          { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Does a Lab-Grown Diamond Measure Differently from a Natural Diamond?",
    content: [
      { type: "paragraph", text: "Not simply because of its origin." },
      { type: "paragraph", text: "Natural and laboratory-grown diamonds have essentially the same fundamental physical properties." },
      { type: "paragraph", text: "A 1.00 ct laboratory-grown round and a 1.00 ct natural round with comparable proportions should therefore fall within comparable physical size ranges." },
      { type: "paragraph", text: "Lab-grown diamonds do not automatically appear larger millimetre-for-millimetre simply because they were grown in a laboratory." },
      { type: "paragraph", text: "What may differ is what size a buyer chooses, because lab-grown and natural diamonds have different pricing economics." },
      {
        type: "paragraph",
        parts: [
          { text: "For the economics, see " },
          { text: "Are Lab-Grown Diamonds Cheaper Than Natural Diamonds?", href: "/blog/are-lab-grown-diamonds-more-affordable/" }
        ]
      }
    ]
  },
  {
    heading: "Why Millimetres Can Be More Useful Than Carat for Visual Comparison",
    content: [
      { type: "paragraph", text: "If your question is: \"How large will this diamond look?\" — millimetres can often tell you more than carat alone." },
      { type: "paragraph", text: "Suppose you are comparing two round diamonds: 0.95 ct at approximately 6.3 mm and 1.00 ct at approximately 6.5 mm." },
      { type: "paragraph", text: "The 1.00 ct stone crosses the symbolic one-carat threshold, but the visible diameter difference may be relatively small." },
      { type: "paragraph", text: "Whether the additional carat weight matters to you depends on whether you value the number itself, the physical appearance or both." },
      { type: "paragraph", text: "This is one reason experienced buyers consider carat and dimensions together." }
    ]
  },
  {
    heading: "Should You Buy Just Below a Full-Carat Weight?",
    content: [
      { type: "paragraph", text: "Diamond prices can change around popular carat thresholds such as 0.50, 1.00, 1.50 and 2.00 ct." },
      { type: "paragraph", text: "That makes diamonds slightly below those weights worth comparing when visible dimensions are more important to you than reaching a specific number." },
      { type: "paragraph", text: "A well-proportioned 0.90–0.99 ct diamond may sometimes look surprisingly close in size to a 1.00 ct stone." },
      { type: "paragraph", text: "But do not assume that every sub-one-carat diamond offers better value." },
      { type: "paragraph", text: "Compare the actual dimensions, cut, appearance and current prices of the stones available." }
    ]
  },
  {
    heading: "How the Setting Changes Perceived Diamond Size",
    content: [
      { type: "paragraph", text: "The setting cannot change the diamond's actual dimensions, but it can change how large the overall piece appears." },
      { type: "paragraph", text: "A narrow ring band can visually emphasise the centre stone." },
      { type: "paragraph", text: "Halo designs extend the visible diamond-set area around a centre." },
      { type: "paragraph", text: "Three-stone designs distribute visual weight horizontally." },
      { type: "paragraph", text: "Bezel settings create a defined metal outline around the gemstone." },
      { type: "paragraph", text: "So there are three separate measurements to keep in mind: carat weight → physical diamond dimensions → visual jewellery presence. They are related, but they are not interchangeable." }
    ]
  },
  {
    heading: "Why a Very Deep Diamond Deserves Attention",
    content: [
      { type: "paragraph", text: "A diamond that is significantly deeper than expected may carry weight where it does not contribute much to face-up appearance." },
      { type: "paragraph", text: "Suppose two round diamonds both present approximately the same 6.5 mm diameter." },
      { type: "paragraph", text: "If one weighs 1.00 ct and the other weighs materially more because of excess pavilion or girdle weight, the heavier stone may not deliver a corresponding increase in visible size." },
      { type: "paragraph", text: "That does not mean every deeper diamond is automatically poor." },
      { type: "paragraph", text: "It means the buyer should ask whether the extra weight produces a meaningful visual benefit." },
      { type: "paragraph", text: "Carat should work with the diamond's dimensions rather than against them." },
      {
        type: "paragraph",
        parts: [
          { text: "For further detail, read " },
          { text: "Lab-Grown Diamond Cut Explained", href: "/blog/lab-grown-diamond-cut-explained/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How to Read Diamond Dimensions on a Grading Report",
    content: [
      { type: "paragraph", text: "Laboratory reports commonly state measurements in millimetres." },
      { type: "paragraph", text: "A round diamond may be recorded with two diameter measurements followed by depth, for example: 6.45–6.49 × 3.95 mm. The first two figures indicate the minimum and maximum diameter. The final figure represents depth." },
      { type: "paragraph", text: "A fancy-shaped diamond may instead appear as: 8.10 × 5.45 × 3.35 mm. This usually represents: length × width × depth." },
      { type: "paragraph", text: "Those figures make it possible to compare stones of similar carat weight more intelligently." },
      { type: "paragraph", text: "Do not expect two diamonds with the same weight to have identical measurements." },
      {
        type: "image",
        src: "/images/blog/carat-weight-vs-visible-diamond-size/31 (4).jpg",
        alt: "Diamond grading report showing millimetre measurements and dimensions",
        title: "Reading Diamond Dimensions on a Grading Report",
        caption: "A laboratory report records length, width and depth in millimetres — use these alongside carat weight for a complete size comparison."
      }
    ]
  },
  {
    heading: "How to Compare Two Diamonds of the Same Carat Weight",
    content: [
      { type: "paragraph", text: "When two diamonds have equal or very similar carat weights, start with their actual length and width." },
      { type: "paragraph", text: "Then check depth." },
      { type: "paragraph", text: "Look at the overall proportions and, where applicable, cut assessment." },
      { type: "paragraph", text: "For elongated shapes, compare length-to-width ratio because that helps explain why one stone is longer and narrower while another is shorter and fuller." },
      { type: "paragraph", text: "Finally, view the actual diamonds whenever possible." },
      { type: "paragraph", text: "Millimetres tell you physical size. They do not fully tell you whether you will prefer the diamond's outline, facet pattern or visual performance." }
    ]
  },
  {
    heading: "Which Matters More: Carat or Millimetres?",
    content: [
      { type: "paragraph", text: "Neither should be considered in isolation." },
      { type: "paragraph", text: "Carat is important because it gives an exact weight." },
      { type: "paragraph", text: "Millimetres are important because they tell you how that weight has translated into physical dimensions." },
      { type: "paragraph", text: "If you care about visible presence, millimetre measurements deserve almost as much attention as the carat figure." },
      { type: "paragraph", text: "A strong buying decision uses both." },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "Is diamond carat a measure of size or weight?", answer: "Carat measures weight. One carat equals 0.20 grams. A diamond's physical size is measured separately in millimetres." },
          { question: "How big is a 1 carat round diamond?", answer: "A reasonably proportioned 1 ct round brilliant is commonly around 6.4–6.6 mm in face-up diameter. Individual stones can vary." },
          { question: "How many millimetres is a 1 carat diamond?", answer: "There is no universal answer because shape and proportions matter. A 1 ct round may be around 6.5 mm across, while an oval or marquise can have much greater length." },
          { question: "Can two 1 carat diamonds be different sizes?", answer: "Yes. Both can weigh exactly 1.00 ct while having different lengths, widths and depths because their weight is distributed differently." },
          { question: "Why does my 1 carat diamond look small?", answer: "It may carry proportionally more weight in its depth or girdle, or its shape and setting may create a smaller face-up impression. Check the actual dimensions rather than carat alone." },
          { question: "Can a 0.90 carat diamond look as big as a 1 carat diamond?", answer: "Sometimes their visible dimensions can be relatively close, particularly if the smaller stone distributes its weight efficiently and the larger stone is deeper. Compare actual millimetre measurements." },
          { question: "Can a 1.2 carat diamond look like a 1 carat diamond?", answer: "Yes. GIA specifically explains that a poorly cut 1.20 ct diamond with hidden weight can potentially present a similar face-up size to a well-cut 1.00 ct diamond." },
          { question: "Why do oval diamonds look larger than round diamonds?", answer: "An oval distributes its weight across an elongated outline, giving greater length and often more apparent finger coverage." },
          { question: "What size is a 1 carat oval diamond?", answer: "Approximately 7.8–8.2 × 5.4–5.8 mm is a useful broad reference, but actual dimensions vary substantially with length-to-width ratio and depth." },
          { question: "What size is a 1 carat princess-cut diamond?", answer: "A square 1 ct princess is commonly around 5.3–5.6 mm per side, although actual stones vary." },
          { question: "What size is a 1 carat marquise diamond?", answer: "A typical one-carat marquise may measure roughly 9.5–10.4 mm long and around 4.8–5.2 mm wide, depending heavily on its length-to-width ratio." },
          { question: "What size is a 1 carat Asscher diamond?", answer: "Approximately 5.4–5.7 mm square is a useful reference range for many 1 ct Asscher-cut diamonds." },
          { question: "Does a lab-grown diamond look bigger than a natural diamond of the same carat?", answer: "Not inherently. If natural and laboratory-grown diamonds have the same carat weight, shape and similar proportions, their physical dimensions should be comparable." },
          { question: "Does a thicker girdle affect visible diamond size?", answer: "It can. Extra material in a thick girdle contributes weight without necessarily increasing the visible diameter or length of the diamond proportionately." },
          { question: "Is a shallow diamond always better because it looks larger?", answer: "No. Excessive spread can come at the expense of desirable light performance." },
          { question: "Is total carat weight the same as centre-stone size?", answer: "No. Total carat weight adds together the weight of multiple diamonds. A 1.00 ct total-weight ring may contain a centre diamond considerably smaller than 1.00 ct." }
        ]
      },
      { type: "paragraph", text: "Carat tells you how much a diamond weighs. Millimetres tell you how large it physically measures. Those two measurements are connected, but they are not interchangeable." },
      { type: "paragraph", text: "The best stone is one where the weight, dimensions and optical performance work together." },
      {
        type: "paragraph",
        parts: [
          { text: "When comparing Aurelia Royale laboratory-grown diamond jewellery, check whether the stated weight refers to a centre stone or total diamond weight. Review physical dimensions where they are provided. Where a design is not currently available for direct purchase, " },
          { text: "Join the Waitlist", href: "/contact/" },
          { text: " or submit an enquiry to register your interest." }
        ]
      },
      {
        type: "cta-banner",
        title: "Compare the Diamond You Can Actually See",
        subtitle: "Use carat weight and millimetre dimensions together for a realistic picture of how large a diamond will appear.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function BlogCaratVsSizePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Certification &amp; Diamond Quality</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            Diamond Carat Weight vs Size
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Why Equal-Carat Diamonds Can Look Different • Published July 15, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="carat-weight-vs-visible-diamond-size" />
      <NewsletterSection />
    </main>
  );
}

