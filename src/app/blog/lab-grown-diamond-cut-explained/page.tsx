import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "Lab-Grown Diamond Cut: Grades & Light Performance",
  description: "Learn how lab-grown diamond cut affects brightness, fire and scintillation, how round cut grades work, how fancy shapes are assessed, and what polish and symmetry mean.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aureliaroyale.com/#organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
    { "@type": "WebSite", "@id": "https://www.aureliaroyale.com/#website", "url": "https://www.aureliaroyale.com/", "name": "Aurelia Royale", "publisher": { "@id": "https://www.aureliaroyale.com/#organization" } },
    { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#webpage", "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/", "name": "Lab-Grown Diamond Cut Explained: Cut Grades, Light Performance, Polish and Symmetry", "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" }, "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#breadcrumb" }, "datePublished": "2026-09-10", "dateModified": "2026-09-10" },
    { "@type": "BlogPosting", "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#article", "headline": "Lab-Grown Diamond Cut Explained: Cut Grades, Light Performance, Polish and Symmetry", "description": "Learn how lab-grown diamond cut affects brightness, fire and scintillation, how round cut grades work, how fancy shapes are assessed, and what polish and symmetry mean.", "datePublished": "2026-09-10", "dateModified": "2026-09-10", "author": { "@id": "https://www.aureliaroyale.com/#organization" }, "publisher": { "@id": "https://www.aureliaroyale.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#webpage" }, "articleSection": "Lab-Grown Diamond Education", "keywords": ["lab-grown diamond cut grade", "diamond cut explained", "GIA cut grades", "IGI fancy shape cut"] },
    { "@type": "BreadcrumbList", "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" }, { "@type": "ListItem", "position": 3, "name": "Lab-Grown Diamond Cut Explained", "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/" }] },
    { "@type": "FAQPage", "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#faq", "mainEntity": [{ "@type": "Question", "name": "What is lab-grown diamond cut?", "acceptedAnswer": { "@type": "Answer", "text": "It describes how successfully a laboratory-grown rough diamond has been planned, proportioned, faceted and polished into a finished gemstone." } }, { "@type": "Question", "name": "Is cut the same as diamond shape?", "acceptedAnswer": { "@type": "Answer", "text": "No. Shape describes the outline and broad faceting style. Cut quality describes how successfully the diamond has been fashioned." } }, { "@type": "Question", "name": "Does GIA grade fancy-shape cut?", "acceptedAnswer": { "@type": "Answer", "text": "GIA does not currently provide an overall cut grade for fancy-shaped diamonds. It can provide polish and symmetry and other information for those shapes." } }] }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Diamond cut describes how successfully a polished diamond has been designed and fashioned to interact with light. It is one of the most important characteristics affecting whether a diamond appears bright, fiery and lively." },
      { type: "paragraph", text: "But \"cut\" is also one of the most confusing words in diamond buying. People often use it to describe shape, saying \"oval cut\" or \"emerald cut\". Gemmologically, however, shape and cut quality are not the same thing." },
      { type: "paragraph", text: "A diamond can be round, oval, pear, emerald, cushion or another shape. Its cut quality concerns how its proportions, facets and workmanship influence its appearance and performance." },
      { type: "paragraph", text: "There is another complication: laboratories do not all grade cut in exactly the same way." },
      { type: "paragraph", text: "GIA currently assigns an overall cut grade only to qualifying standard round brilliant diamonds. Fancy shapes such as oval, pear, marquise, cushion, emerald and princess do not receive an overall GIA cut grade, although GIA reports can still provide measurements, polish and symmetry information." },
      { type: "paragraph", text: "IGI takes a different approach. It grades round brilliant cut quality and also has a formal cut-grading system for fancy-shaped diamonds." },
      { type: "paragraph", text: "So before interpreting a phrase such as Excellent Cut or Ideal Cut, first ask: Which laboratory issued the report, what shape is the diamond, and what exactly is being graded?" }
    ]
  },
  {
    heading: "Quick Answer: What Is Lab-Grown Diamond Cut?",
    content: [
      { type: "paragraph", text: "Lab-grown diamond cut refers to how the grown rough diamond has been planned, faceted and polished into a finished gemstone. The diamond-growth method does not automatically determine cut quality." },
      { type: "paragraph", text: "A CVD-grown diamond can be beautifully cut or poorly cut. An HPHT-grown diamond can also be beautifully cut or poorly cut." },
      { type: "paragraph", text: "Once the rough crystal has been produced, cutters still have to decide how to orient it, what polished shape to create, what proportions to use and how accurately the facets should be finished. Those decisions influence how the finished diamond handles light." },
      { type: "paragraph", text: "GIA describes three major visual components associated with diamond cut: brightness, meaning white light returned from the diamond; fire, meaning flashes of spectral colour; and scintillation, meaning the flashes and contrasting light-and-dark pattern visible as the diamond, observer or light source moves." },
      { type: "paragraph", text: "A strong cut balances these effects rather than maximising one number in isolation." }
    ]
  },
  {
    heading: "Cut and Shape Are Not the Same Thing",
    content: [
      { type: "paragraph", text: "This distinction should be clear throughout the Aurelia article." },
      { type: "paragraph", text: "Shape describes the diamond's outline and general faceting style. Examples include round, oval, pear, marquise, cushion, emerald, Asscher and princess." },
      { type: "paragraph", text: "Cut quality describes how well the polished diamond's proportions, facet relationships and craftsmanship work together." },
      { type: "paragraph", text: "A diamond can therefore be: an oval brilliant by shape and cutting style, while still having stronger or weaker overall cut execution." },
      { type: "paragraph", text: "Likewise, an emerald cut describes a rectangular step-cut style. It does not automatically tell you whether the individual diamond has attractive proportions, symmetry or light behaviour." },
      { type: "paragraph", text: "The phrase \"round cut diamond\" is often used casually, but the more precise common description is round brilliant diamond." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/lab-grown-diamond-cut-explained/27 (2).jpg", alt: "Lab-grown diamond cut grades light performance brightness fire scintillation", title: "Cut and Light Performance", caption: "Cut quality determines how effectively a diamond's facets redirect available light into brightness, fire and scintillation.", priority: false }
    ]
  },
  {
    heading: "Is \"Round Brilliant\" a Shape or a Cut Grade?",
    content: [
      { type: "paragraph", text: "Neither in the sense buyers sometimes assume." },
      { type: "paragraph", text: "Round describes the outline. Brilliant describes the faceting style designed to produce substantial brightness, fire and scintillation. A standard round brilliant normally contains 57 or 58 facets depending on whether a culet facet is present." },
      { type: "paragraph", text: "Its overall quality can then receive a formal cut grade from laboratories whose grading system applies to that diamond." },
      { type: "paragraph", text: "A clearer sentence would be: \"IGI evaluates round brilliant diamonds using its own cut-grading methodology, while polish and symmetry are also reported separately.\"" }
    ]
  },
  {
    heading: "Why Cut Matters So Much",
    content: [
      { type: "paragraph", text: "Colour and clarity describe important characteristics, but neither alone determines how effectively a diamond returns light." },
      { type: "paragraph", text: "A very high-colour, very high-clarity diamond can still look comparatively flat if its geometry produces weak light return. A diamond with slightly lower colour or clarity can appear substantially more lively if it has stronger cut execution." },
      { type: "paragraph", text: "This is why buyers should not allocate their entire attention to carat, colour and clarity and then treat cut as an afterthought." },
      { type: "paragraph", text: "GIA's cut research evaluates a round brilliant's face-up appearance, design and craftsmanship rather than using only one table percentage or depth figure." }
    ]
  },
  {
    heading: "What Creates Diamond Sparkle?",
    content: [
      { type: "paragraph", text: "The everyday word \"sparkle\" combines several visual effects. Brightness is the white light you see returning from the diamond. Fire appears as flashes of spectral colour. Scintillation includes flashes and patterns created when the diamond, light or observer moves." },
      { type: "paragraph", text: "Facet arrangement, proportions and finish influence how these effects appear. Lighting matters as well. A diamond does not generate light itself; it redirects light from its environment." },
      { type: "paragraph", text: "This means a strong cut can support excellent optical performance, but the exact appearance will still vary between daylight, diffuse indoor lighting and point-source lighting." },
      { type: "paragraph", parts: [{ text: "For apparent loss of brilliance over time, continue with " }, { text: "Do Lab-Grown Diamonds Lose Their Sparkle?", href: "/blog/do-lab-grown-diamonds-lose-their-sparkle/" }] }
    ]
  },
  {
    heading: "Does Lab-Grown Origin Affect Cut Quality?",
    content: [
      { type: "paragraph", text: "Not inherently. Laboratory-grown origin describes how the rough diamond crystal was created. Cut quality describes what happened after that rough existed." },
      { type: "paragraph", text: "Once laboratory-grown rough has been produced through CVD or HPHT, it still needs to be planned, shaped, faceted and polished. The cutter or manufacturing system has to decide how to distribute the rough material." },
      { type: "paragraph", text: "One cutting plan may preserve more carat weight. Another may produce better proportions. A third might work around an internal feature." },
      { type: "paragraph", text: "Therefore: growth quality and cut quality are related stages of production, but they are not the same thing." },
      { type: "paragraph", parts: [{ text: "For the manufacturing sequence, see " }, { text: "How Are Lab-Grown Diamonds Made?", href: "/blog/how-are-lab-grown-diamonds-made/" }] }
    ]
  },
  {
    heading: "Can a Lab-Grown Diamond Be Poorly Cut?",
    content: [
      { type: "paragraph", text: "Yes. Controlled laboratory growth does not automatically create a perfectly proportioned finished gemstone. The growth process creates rough diamond material. The rough then has to be transformed into a polished stone." },
      { type: "paragraph", text: "If the polished diamond is too deep, too shallow, unevenly proportioned or poorly finished, its visual performance can suffer regardless of whether the rough was laboratory-grown or natural." },
      { type: "paragraph", text: "\"Lab-grown\" is not a cut grade." }
    ]
  },
  {
    heading: "How Does GIA Grade Round Brilliant Cut?",
    content: [
      { type: "paragraph", text: "GIA's formal cut-grading system applies to standard round brilliant diamonds in the D-to-Z colour range. It evaluates seven components: brightness, fire, scintillation, weight ratio, durability, polish and symmetry. Those components represent three broader areas: face-up appearance, design and craftsmanship." },
      { type: "paragraph", text: "GIA's overall cut-grade scale is:" },
      { type: "table", headers: ["GIA Round Brilliant Cut Grade", "General Meaning"], rows: [["Excellent", "Highest GIA overall cut-grade category"], ["Very Good", "Strong overall cut quality with differences from Excellent"], ["Good", "Acceptable cut quality with more noticeable compromises"], ["Fair", "More significant deficiencies"], ["Poor", "Lowest GIA cut-grade category"]] },
      { type: "paragraph", text: "These categories each cover a range of proportion combinations rather than one exact set of \"perfect\" dimensions. That is important. There is no single table percentage, crown angle or depth percentage that by itself guarantees an Excellent cut." }
    ]
  },
  {
    heading: "Does GIA Have an \"Ideal\" Cut Grade?",
    content: [
      { type: "paragraph", text: "No. Ideal is not a GIA overall cut grade. GIA's formal round-brilliant cut scale runs from: Excellent → Very Good → Good → Fair → Poor." },
      { type: "paragraph", text: "Retailers sometimes use \"Ideal\", \"Super Ideal\" or similar terminology in their own product categorisation. Other laboratories may also use Ideal terminology within their systems." },
      { type: "paragraph", text: "Therefore, Aurelia should never rewrite: GIA Excellent as: GIA Ideal unless the actual laboratory documentation uses that terminology. Use the issuing laboratory's exact language." }
    ]
  },
  {
    heading: "What Is \"Triple Excellent\"?",
    content: [
      { type: "paragraph", text: "In diamond-market language, Triple Excellent or 3EX commonly describes a GIA round brilliant that receives: Excellent overall cut, Excellent polish, and Excellent symmetry. Those are three separate recorded results." },
      { type: "paragraph", text: "It does not mean GIA has one grade officially named \"Triple Excellent\". Nor does it mean every Triple Excellent diamond looks identical. GIA itself notes that an Excellent cut grade covers a range of proportions and appearances." },
      { type: "paragraph", text: "So Triple Excellent can be a useful screening criterion, but it should not replace evaluation of the individual stone." }
    ]
  },
  {
    heading: "Does Excellent Cut Mean Perfect?",
    content: [
      { type: "paragraph", text: "No. Excellent is a range, not one mathematical point. Two GIA Excellent round brilliants can have different tables, crown angles, pavilion angles, depths and visual personalities." },
      { type: "paragraph", text: "One buyer may prefer a particular balance of brightness and fire. Another may prefer a different proportion combination within the same grade." },
      { type: "paragraph", text: "That does not mean the grading system is unreliable. It means the grade intentionally accommodates multiple proportion sets capable of strong overall performance." }
    ]
  },
  {
    heading: "What Does Very Good Cut Mean?",
    content: [
      { type: "paragraph", text: "Very Good is the category immediately below Excellent in GIA's round-brilliant cut system. A Very Good stone can still be attractive. The difference may involve one or more aspects of appearance, design or craftsmanship." },
      { type: "paragraph", text: "It should not automatically be rejected purely because the report does not say Excellent. Likewise, a buyer should not automatically choose one Excellent diamond over every Very Good option without looking at actual dimensions, proportions and appearance." },
      { type: "paragraph", text: "Grades help narrow decisions. They do not replace the diamond." }
    ]
  },
  {
    heading: "What Does Good Cut Mean?",
    content: [
      { type: "paragraph", text: "Good is another formal GIA category. Compared with higher categories, compromises in light performance, proportions or craftsmanship may become more noticeable. Whether such a stone suits a particular jewellery purchase depends on the diamond and buyer." },
      { type: "paragraph", text: "For buyers placing strong priority on brilliance, higher cut categories will usually deserve consideration first. But Aurelia should avoid turning a grading scale into unsupported statements such as: \"Good cut diamonds are bad diamonds.\" The terminology already tells the buyer that Good is below Very Good and Excellent." }
    ]
  },
  {
    heading: "How Does IGI Grade Round Brilliant Diamonds?",
    content: [
      { type: "paragraph", text: "IGI uses its own methodology. For round brilliant diamonds, IGI evaluates polish, symmetry, proportions and light performance. IGI currently states that the highest round-brilliant cut result available within its system is Excellent-Ideal. Its methodology also offers specialised light-performance analysis for qualifying diamonds." },
      { type: "paragraph", text: "This is precisely why laboratory names should stay attached to their terminology. A GIA Excellent grade and an IGI Excellent-Ideal result should not be casually rewritten as though they were labels from one universal scale. Each laboratory defines and applies its own system." }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/lab-grown-diamond-cut-explained/27 (3).jpg", alt: "IGI fancy shape cut grading system oval emerald marquise diamond", title: "How IGI Grades Fancy Shapes", caption: "IGI currently grades fancy-shaped diamonds through a four-step methodology considering polish, symmetry, shape-specific craftsmanship and light return.", priority: false }
    ]
  },
  {
    heading: "Is IGI \"Ideal\" the Same as GIA Excellent?",
    content: [
      { type: "paragraph", text: "Do not treat them as automatic equivalents. GIA and IGI use their own research, terminology and grading methodologies. A seller should therefore reproduce the grade that appears on the actual report rather than converting it into another laboratory's vocabulary." },
      { type: "paragraph", text: "If the report says: IGI Excellent-Ideal — state IGI Excellent-Ideal. If another report says: GIA Excellent — state GIA Excellent." },
      { type: "paragraph", text: "Avoid homemade conversion tables claiming: IGI Ideal = GIA Excellent unless an authoritative source explicitly defines such a direct equivalence." }
    ]
  },
  {
    heading: "Does GIA Grade Fancy-Shape Cut?",
    content: [
      { type: "paragraph", text: "For its conventional diamond reports, GIA currently gives an official overall cut grade only to standard round brilliant diamonds. Fancy shapes—including oval, pear, marquise, cushion, emerald and princess—do not currently receive a GIA overall cut grade." },
      { type: "paragraph", text: "GIA does, however, report polish and symmetry for these diamonds, and buyers can evaluate measurements, outline, proportions and shape-specific visual characteristics." },
      { type: "paragraph", text: "This distinction should replace any older Aurelia language implying that an oval or emerald automatically receives the same GIA Excellent-to-Poor cut grade as a round brilliant." }
    ]
  },
  {
    heading: "Does IGI Grade Fancy-Shape Cut?",
    content: [
      { type: "paragraph", text: "Yes, under IGI's current methodology. IGI states that it grades fancy-shaped diamonds on an Excellent-to-Poor scale using a four-step process. That process considers polish and symmetry first, then proportion qualifications, additional shape-specific craftsmanship requirements and finally light return." },
      { type: "paragraph", text: "IGI specifically notes that fancy-shape cut quality cannot be judged from proportions alone. This is a major distinction between current IGI and GIA reporting and should be represented accurately." }
    ]
  },
  {
    heading: "How IGI Evaluates Fancy Shapes",
    content: [
      { type: "paragraph", text: "IGI's fancy-shape framework is useful because fancy shapes have issues that cannot be reduced to one table-and-depth formula. First, polish and symmetry are considered. Then the stone's proportions are assessed against shape-specific parameters. The methodology also considers craftsmanship factors that can vary by shape, such as bow-tie appearance and girdle ranges. Finally, trained gemmologists assess overall light return." },
      { type: "paragraph", text: "A fancy-shaped diamond that passes the applicable requirements can receive an Excellent overall cut grade under IGI's system." },
      { type: "paragraph", text: "This means outdated statements such as: \"Fancy shapes never receive cut grades.\" are now too broad. The correct statement is: \"Whether a fancy shape receives an overall cut grade depends on the laboratory and report system.\"" }
    ]
  },
  {
    heading: "What Is a Fancy-Shaped Diamond?",
    content: [
      { type: "paragraph", text: "In diamond terminology, shapes other than round brilliant are commonly grouped as fancy shapes. Examples include oval, pear, marquise, cushion, emerald, Asscher, princess and heart." },
      { type: "paragraph", text: "\"Fancy shape\" does not mean fancy-coloured diamond. Shape and colour are separate characteristics." },
      { type: "paragraph", text: "Each outline also creates its own visual considerations, which is one reason fancy-shape assessment is more complicated than applying the same round-brilliant proportion system to every diamond." }
    ]
  },
  {
    heading: "Why Fancy Shapes Cannot Be Judged by One Percentage",
    content: [
      { type: "paragraph", text: "Searchers often look for a single \"ideal\" table or depth percentage for ovals, pears, cushions and emerald cuts. That can be useful as a rough filter, but it is insufficient by itself." },
      { type: "paragraph", text: "Two ovals with similar table and depth percentages can have very different: outline appeal, bow-tie visibility, facet patterns, light return and face-up spread. Likewise, two emerald cuts with similar dimensions can have very different step patterns and visual balance." },
      { type: "paragraph", text: "IGI explicitly states that fancy-shape cut quality cannot be graded using proportions alone. That is the correct buying principle." }
    ]
  },
  {
    heading: "How Should You Judge an Oval Diamond?",
    content: [
      { type: "paragraph", text: "For an oval, inspect more than the report numbers. The outline should look balanced to you. Length-to-width ratio affects whether the stone appears broad or slender. The shoulders should transition smoothly. Bow-tie contrast deserves attention. The facet pattern should look balanced across the stone rather than producing large lifeless areas." },
      { type: "paragraph", text: "A GIA report will not currently give an oval an overall cut grade. An IGI report may provide a fancy-shape cut grade under IGI's methodology. Therefore, read the actual laboratory report rather than assuming all oval diamonds are graded identically." }
    ]
  },
  {
    heading: "What Is the Bow-Tie Effect?",
    content: [
      { type: "paragraph", text: "Elongated brilliant-style diamonds such as ovals, pears and marquises can display a darker bow-tie-shaped region across the centre. Some contrast is a natural part of many facet patterns. The issue is degree." },
      { type: "paragraph", text: "A severe, persistent dark bow tie can dominate the stone and reduce the balanced light return a buyer may want. A subtle bow tie may be completely acceptable or barely distracting." },
      { type: "paragraph", text: "This is one reason fancy-shape diamonds benefit from visual evaluation rather than being selected from dimensions alone." }
    ]
  },
  {
    heading: "How Should You Judge a Pear Diamond?",
    content: [
      { type: "paragraph", text: "A pear combines a rounded end with a pointed tip. Beyond basic proportions, buyers should consider whether the shoulders look balanced, whether the point aligns with the centre line and whether the stone displays an attractive light pattern. Bow-tie contrast can occur in pears as well." },
      { type: "paragraph", text: "The point also deserves adequate protection once set because pointed areas can be vulnerable to impact. Cut quality for the pear should therefore include both visual appeal and practical craftsmanship considerations." }
    ]
  },
  {
    heading: "How Should You Judge a Marquise Diamond?",
    content: [
      { type: "paragraph", text: "Marquise diamonds are elongated brilliant-style stones with pointed ends. A balanced outline, attractive length-to-width ratio, even shoulders and controlled bow-tie effect are useful visual considerations." },
      { type: "paragraph", text: "A marquise can also deliver substantial face-up spread for its weight, which means carat weight alone should not be used to judge how large it looks." },
      { type: "paragraph", parts: [{ text: "For visible-size comparisons, see " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }, { text: "." }] }
    ]
  },
  {
    heading: "How Should You Judge an Emerald Cut?",
    content: [
      { type: "paragraph", text: "Emerald cuts are step-cut diamonds rather than brilliant cuts. Their appeal comes from broad, geometric flashes and a hall-of-mirrors effect rather than the smaller, rapid scintillation associated with a round brilliant." },
      { type: "paragraph", text: "Important considerations include: outline, length-to-width ratio, step pattern, windowing, light-and-dark balance, polish, symmetry and clarity visibility." },
      { type: "paragraph", text: "An emerald cut should not be rejected because it does not sparkle like a round brilliant. It is designed to produce a different visual style." }
    ]
  },
  {
    heading: "How Should You Judge an Asscher Cut?",
    content: [
      { type: "paragraph", text: "Asscher cuts are also step cuts. Their square or near-square outline and concentric step facets create a geometric pattern. Strong examples display an appealing balance of bright and dark reflections as the stone moves." },
      { type: "paragraph", text: "Because the faceting is open, inclusions and body colour can sometimes be more visible than in busier brilliant-style stones. That connects cut choice with clarity and colour considerations without making them the same characteristic." }
    ]
  },
  {
    heading: "How Should You Judge a Cushion Diamond?",
    content: [
      { type: "paragraph", text: "\"Cushion\" covers a broad family of facet patterns. Some cushions display larger, chunkier flashes. Others use modified brilliant arrangements producing a different texture of scintillation." },
      { type: "paragraph", text: "That variety makes it especially risky to buy cushion diamonds using a single table/depth formula. The actual facet pattern and face-up appearance matter. A report can provide important measurements and finish information, but imagery or appropriate visual inspection remains valuable." }
    ]
  },
  {
    heading: "How Should You Judge a Princess Diamond?",
    content: [
      { type: "paragraph", text: "Princess diamonds usually have a square outline with brilliant or modified-brilliant faceting. Important considerations include balanced proportions, a symmetrical square outline and attractive light return. Their pointed corners deserve appropriate setting protection." },
      { type: "paragraph", text: "Again, a strong princess should be judged as a princess rather than against round-brilliant cut rules." }
    ]
  },
  {
    heading: "What Is Diamond Polish?",
    content: [
      { type: "paragraph", text: "Polish describes the quality and condition of the diamond's facet surfaces. During cutting, facets are polished to smooth reflective surfaces. Polish grading looks for features associated with that finishing process or later surface condition. These can include polishing lines, abrasions, scratches, pits and other surface features depending on the laboratory's methodology." },
      { type: "paragraph", text: "Polish is therefore one aspect of craftsmanship. It is not the same thing as overall cut." }
    ]
  },
  {
    heading: "What Is Diamond Symmetry?",
    content: [
      { type: "paragraph", text: "Symmetry describes the precision of a diamond's shape and facet arrangement. It considers whether corresponding facets are appropriately aligned and whether the stone's outline and facet relationships are balanced according to its design." },
      { type: "paragraph", text: "Potential symmetry issues can include an off-centre table or culet, irregular facets, uneven outlines or misaligned facet relationships. Again, symmetry contributes to overall craftsmanship. It is not a substitute word for cut." }
    ]
  },
  {
    heading: "Cut vs Polish vs Symmetry",
    content: [
      { type: "paragraph", text: "These terms should remain separate on Aurelia product and educational pages." },
      { type: "table", headers: ["Term", "What It Describes"], rows: [["Cut / overall cut grade", "Overall assessment of proportions, visual performance and craftsmanship under the applicable laboratory system"], ["Polish", "Quality and condition of polished facet surfaces"], ["Symmetry", "Precision and alignment of the diamond's outline and facets"], ["Shape", "Physical outline and broad cutting style, such as round, oval or emerald"], ["Light performance", "How effectively the diamond returns and distributes available light"]] },
      { type: "paragraph", text: "A diamond can therefore have Excellent polish and Excellent symmetry without necessarily receiving the highest overall cut grade. Likewise, a fancy shape can carry polish and symmetry grades even when its laboratory report does not provide an overall cut grade." }
    ]
  },
  {
    heading: "Does Excellent Polish Mean Excellent Cut?",
    content: [
      { type: "paragraph", text: "No. Polish is only one component. A diamond could have extremely smooth facet surfaces but poor proportions. That stone may receive an Excellent polish grade while its overall visual performance remains weaker." },
      { type: "paragraph", text: "Do not see: Polish: Excellent and rewrite the product as: Cut: Excellent unless the report actually provides an Excellent overall cut grade." }
    ]
  },
  {
    heading: "Does Excellent Symmetry Mean Excellent Cut?",
    content: [
      { type: "paragraph", text: "Again, no. Symmetry describes one aspect of craftsmanship. An evenly aligned stone can still have proportion choices that reduce light performance. Conversely, a diamond with very strong overall performance may not need mathematically perfect facet relationships to remain attractive." },
      { type: "paragraph", text: "Always reproduce the actual report fields independently." }
    ]
  },
  {
    heading: "Can a Diamond Have Excellent Cut but Very Good Polish?",
    content: [
      { type: "paragraph", text: "Under GIA's round-brilliant system, it is possible for Very Good polish or symmetry to coexist with an overall Excellent cut under certain conditions. GIA specifically notes that polish and symmetry contribute to the overall cut assessment but are also graded separately." },
      { type: "paragraph", text: "This is another reason \"Triple Excellent\" and \"Excellent Cut\" should not be treated as synonymous. Triple Excellent specifically adds separate Excellent polish and Excellent symmetry to the Excellent overall cut result." }
    ]
  },
  {
    heading: "What Is Light Return?",
    content: [
      { type: "paragraph", text: "Light return describes how effectively light entering the diamond is directed back towards the observer rather than escaping through areas that reduce the desired face-up brightness. Good light return helps create a lively appearance." },
      { type: "paragraph", text: "But a simplified light-return score should not be treated as the whole visual experience. Fire, contrast, scintillation pattern, proportions and personal preference also matter." },
      { type: "paragraph", text: "IGI's current light-performance reporting separately analyses components such as overall light performance, brightness, fire and contrast for qualifying round diamonds." }
    ]
  },
  {
    heading: "What Is Light Leakage?",
    content: [
      { type: "paragraph", text: "Light leakage refers to light that exits the diamond in directions that do not contribute effectively to the intended face-up return. Excessive leakage can create dark or washed-out areas and reduce visual brightness." },
      { type: "paragraph", text: "However, attempting to eliminate every dark area is not the goal. Contrast is important to scintillation. A diamond that returned uniform white light without contrasting patterns would not necessarily create the dynamic appearance people associate with diamond sparkle. The objective is balanced optical behaviour." }
    ]
  },
  {
    heading: "What Is Brightness?",
    content: [
      { type: "paragraph", text: "Brightness is the white light returned to the observer. A well-cut diamond can produce a crisp pattern of bright and darker areas. Brightness should not be confused with colour grade." },
      { type: "paragraph", text: "A G-colour diamond can have excellent brightness. A D-colour diamond can have weak brightness if its cut performs poorly. Colour and cut measure different characteristics." }
    ]
  },
  {
    heading: "What Is Fire?",
    content: [
      { type: "paragraph", text: "Fire is the separation of white light into spectral colours. It appears as coloured flashes—often red, blue, green, orange or yellow—under suitable lighting conditions. GIA includes fire as one of the face-up appearance components used in its round-brilliant cut system." },
      { type: "paragraph", text: "The amount visible at any moment also depends strongly on lighting." }
    ]
  },
  {
    heading: "What Is Scintillation?",
    content: [
      { type: "paragraph", text: "Scintillation describes the changing pattern of bright and dark areas and the flashes that appear as the diamond, observer or lighting moves. It is one of the reasons a diamond can look more dynamic in motion than in a still photograph." },
      { type: "paragraph", text: "A strong facet pattern creates organised contrast rather than random dark patches. Again, this is why a cut grade represents more than one proportion number." }
    ]
  },
  {
    heading: "Does a Higher Cut Grade Make a Diamond Look Bigger?",
    content: [
      { type: "paragraph", text: "Not directly, but proportions influence face-up spread. A diamond can retain excess weight in its depth or girdle and therefore appear smaller from above than another diamond of equal carat weight." },
      { type: "paragraph", text: "GIA includes weight ratio as one component of its round-brilliant cut assessment. This helps penalise diamonds that retain weight inefficiently relative to their visible diameter." },
      { type: "paragraph", parts: [{ text: "For the detailed relationship between weight and visible dimensions, use " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }, { text: "." }] }
    ]
  },
  {
    heading: "Can a Diamond Be Too Shallow?",
    content: [
      { type: "paragraph", text: "Yes. A shallow proportion combination can direct light in less desirable ways and create weaker contrast or light return depending on the complete geometry." },
      { type: "paragraph", text: "But \"shallow\" cannot be diagnosed from one percentage without context. Table size, crown angle, pavilion angle, girdle and other relationships work together." }
    ]
  },
  {
    heading: "Can a Diamond Be Too Deep?",
    content: [
      { type: "paragraph", text: "Yes. Excess depth can hide weight below the face-up view, making the diamond appear smaller for its carat weight. It can also interact with other proportions in ways that reduce desired optical performance." },
      { type: "paragraph", text: "Again, no single depth percentage should be turned into a universal cut grade." }
    ]
  },
  {
    heading: "What Is Table Percentage?",
    content: [
      { type: "paragraph", text: "The table is the large top facet. Table percentage describes its size relative to the diamond's width under the applicable measurement method. It is an important proportion. It is not an independent beauty score." },
      { type: "paragraph", text: "Two diamonds with the same table percentage can have different crown and pavilion relationships and therefore different appearances." }
    ]
  },
  {
    heading: "What Is Depth Percentage?",
    content: [
      { type: "paragraph", text: "Depth percentage describes the diamond's total depth relative to an applicable width measurement. It helps show how much of the stone's weight lies vertically. Like table percentage, it needs context." },
      { type: "paragraph", text: "Aurelia should avoid publishing simplistic rules such as: \"60% depth is always perfect.\" Diamond geometry is interactive." }
    ]
  },
  {
    heading: "What Are Crown and Pavilion Angles?",
    content: [
      { type: "paragraph", text: "The crown is the upper portion of the diamond above the girdle. The pavilion is the lower portion beneath the girdle. In a round brilliant, the relationship between crown and pavilion angles strongly affects how light travels through the stone. One angle cannot be evaluated properly without considering the other." },
      { type: "paragraph", text: "GIA's cut research specifically found that no single proportion or small subset of proportions could be considered independently when judging appearance. That is an important correction to online \"perfect diamond proportions\" charts." }
    ]
  },
  {
    heading: "Is There One Perfect Round-Brilliant Proportion?",
    content: [
      { type: "paragraph", text: "No. Multiple proportion combinations can produce excellent results. GIA's Excellent cut category covers a range rather than one exact formula. That makes sense because brightness, fire, scintillation, weight distribution and craftsmanship interact." },
      { type: "paragraph", text: "Aurelia should therefore avoid presenting one set of angles as: \"the only perfect diamond.\" Use ranges as screening information where appropriate, then consider the complete report and stone." }
    ]
  },
  {
    heading: "What Is the Best Cut for a Lab-Grown Diamond?",
    content: [
      { type: "paragraph", text: "There is no special cut grade required just because a diamond is laboratory-grown. For a round brilliant, a high cut grade can be a strong priority because cut has such a major influence on visible performance. Where a reliable laboratory assigns an Excellent or equivalent top-level result under its system, that can be useful evidence." },
      { type: "paragraph", text: "But \"best\" also depends on shape. An oval cannot be judged by simply applying round-brilliant grading rules. An emerald cut intentionally produces a different visual effect. A cushion may have a facet pattern someone prefers even if another cushion has different optics." },
      { type: "paragraph", text: "The best cut is therefore the one that combines appropriate laboratory information, strong visual performance and a shape/facet character you actually like." }
    ]
  },
  {
    heading: "Should You Always Choose Excellent Cut?",
    content: [
      { type: "paragraph", text: "For a GIA-graded round brilliant, Excellent is the highest formal category and deserves strong consideration when visual performance is a priority. But even within Excellent, compare individual stones. Do not assume every Excellent diamond is visually identical." },
      { type: "paragraph", text: "For IGI, use IGI's own current terminology. For fancy shapes, first determine whether the laboratory actually provides an overall cut grade and how that grade was derived." },
      { type: "paragraph", text: "The recommendation must follow the report rather than forcing every diamond into a GIA-round framework." }
    ]
  },
  {
    heading: "Is \"Ideal Cut\" Better Than \"Excellent Cut\"?",
    content: [
      { type: "paragraph", text: "There is no universal answer because the terms may come from different grading systems. GIA does not use Ideal as an official overall cut grade. IGI currently uses Excellent-Ideal as its highest round-brilliant result. Retailers can also use proprietary Ideal terminology." },
      { type: "paragraph", text: "Therefore, the word Ideal is meaningless without knowing who defined it. Always ask: Ideal according to which laboratory or retailer?" }
    ]
  },
  {
    heading: "Does Cut Matter More Than Colour?",
    content: [
      { type: "paragraph", text: "They affect different things. Cut strongly influences light performance. Colour describes body colour. If a buyer is choosing between an extremely high colour grade with weak cut and a slightly warmer diamond with substantially better light performance, the second diamond may appear more lively." },
      { type: "paragraph", text: "But that does not mean colour never matters. The optimal balance depends on the individual stones and buyer." },
      { type: "paragraph", parts: [{ text: "For colour specifically, read " }, { text: "Lab-Grown Diamond Colour Grades Explained", href: "/blog/lab-grown-diamond-colour-grades-explained/" }, { text: "." }] }
    ]
  },
  {
    heading: "Does Cut Matter More Than Clarity?",
    content: [
      { type: "paragraph", text: "Again, they answer different questions. Clarity describes inclusions and blemishes. Cut describes the design and workmanship influencing light performance." },
      { type: "paragraph", text: "Once a diamond is sufficiently transparent and its inclusions are not visually distracting or structurally problematic, additional clarity may offer less visible benefit than improved cut. But severe clarity characteristics can also reduce transparency. So the characteristics should be considered together rather than ranked by a universal formula." },
      { type: "paragraph", parts: [{ text: "For clarity, see " }, { text: "Lab-Grown Diamond Clarity Grades Explained", href: "/blog/lab-grown-diamond-clarity-grades-explained/" }, { text: "." }] }
    ]
  },
  {
    content: [
      { type: "image", src: "/images/blog/lab-grown-diamond-cut-explained/27 (4).jpg", alt: "GIA lab-grown diamond cut Premium Standard Quality Assessment 2025", title: "Current GIA Lab-Grown Diamond Cut Reporting", caption: "Since October 2025, eligible GIA lab-grown diamonds receive Premium or Standard Quality Assessments — cut is one criterion within that overall result.", priority: false }
    ]
  },
  {
    heading: "Current GIA Lab-Grown Diamond Cut Reporting",
    content: [
      { type: "paragraph", text: "GIA's laboratory-grown reporting changed significantly on 1 October 2025. Eligible loose colourless-to-near-colourless laboratory-grown diamonds weighing at least 0.15 ct now receive an overall Premium or Standard Quality Assessment rather than the former natural-diamond-style nomenclature." },
      { type: "paragraph", text: "For round brilliants, cut is one criterion within that assessment. A Premium result requires Excellent cut for an applicable round brilliant, together with the required colour, clarity, polish and symmetry criteria. A Standard result allows Very Good cut for the round-brilliant criterion, provided the stone remains within the rest of GIA's Standard/Premium framework." },
      { type: "paragraph", text: "For fancy shapes, GIA's published assessment criteria use symmetry rather than an overall fancy-shape cut grade. This distinction needs to be reflected in any current Aurelia content referencing GIA lab-grown diamonds." }
    ]
  },
  {
    heading: "What Does GIA Premium Mean for Cut?",
    content: [
      { type: "paragraph", text: "It does not mean Premium is simply a cut grade. Premium is the overall current GIA lab-grown quality classification. Cut is only one part of it for applicable round brilliant diamonds." },
      { type: "paragraph", text: "A diamond must meet all of GIA's Premium criteria across colour, clarity, polish, symmetry and applicable round-brilliant cut to receive Premium. Therefore, Aurelia should not write: \"GIA Premium is the new Excellent cut grade.\" That would be incorrect." }
    ]
  },
  {
    heading: "What Does GIA Standard Mean for Cut?",
    content: [
      { type: "paragraph", text: "Standard is also an overall classification rather than one cut grade. For a qualifying round brilliant, Very Good cut is the minimum cut criterion within the Standard framework. Other criteria involving colour, clarity, polish and symmetry also have to meet the applicable Standard/Premium ranges." },
      { type: "paragraph", text: "Again, the classification applies to the complete assessment." }
    ]
  },
  {
    heading: "Current IGI Lab-Grown Diamond Cut Reporting",
    content: [
      { type: "paragraph", text: "IGI's current lab-grown report framework continues to provide detailed cut-related information according to shape. For round brilliant diamonds, IGI assesses polish, symmetry and proportions, with Excellent-Ideal currently described as its top cut result. For fancy-shaped diamonds, IGI uses an Excellent-to-Poor overall cut scale through its four-step methodology involving finish, proportion qualification, shape-specific craftsmanship and light return." },
      { type: "paragraph", text: "This is substantially more precise than saying: \"IGI gives cut grades to diamonds.\" The shape and applicable methodology need to be specified." }
    ]
  },
  {
    heading: "Why You Should Use the Actual Report",
    content: [
      { type: "paragraph", text: "A product page should reproduce what the laboratory actually says. If an IGI report gives a fancy-shaped diamond an Excellent cut result, use that information accurately. If a GIA report for an oval contains polish and symmetry but no overall cut grade, do not invent an Excellent Cut label based only on proportions." },
      { type: "paragraph", text: "Likewise, if a retailer creates its own internal cut category, it should not be presented as a GIA or IGI grade. Transparency requires keeping laboratory and retailer terminology separate." }
    ]
  },
  {
    heading: "Can You Judge Cut from the Report Alone?",
    content: [
      { type: "paragraph", text: "For a round brilliant with a respected laboratory cut grade, the report can provide very useful screening information. Even then, GIA recommends looking beyond the numbers because diamonds within a cut-grade category can display different appearances." },
      { type: "paragraph", text: "For fancy shapes, visual assessment becomes even more important because outline, facet pattern and shape-specific effects can vary substantially. Videos, imagery and appropriate professional assessment can therefore complement the report." },
      { type: "paragraph", parts: [{ text: "For remote buying, continue with " }, { text: "How to Choose Diamond Jewellery Without Seeing It in Person", href: "/blog/how-to-choose-lab-grown-diamond-jewellery-online/" }, { text: "." }] }
    ]
  },
  {
    heading: "Can You Judge Cut from a Photo?",
    content: [
      { type: "paragraph", text: "A photo can help evaluate outline and certain visible features, but one still image cannot fully demonstrate scintillation or performance in motion. Lighting, exposure and photography can also exaggerate or suppress brightness." },
      { type: "paragraph", text: "Video can provide additional information, but it too depends on lighting and presentation. Therefore, imagery should complement laboratory data rather than replace it." }
    ]
  },
  {
    heading: "Does the Setting Change Cut Grade?",
    content: [
      { type: "paragraph", text: "No. The laboratory cut grade belongs to the diamond under the conditions and report service used when it was assessed. Mounting the stone does not turn a Very Good cut grade into Excellent." },
      { type: "paragraph", text: "However, the setting can influence how the finished diamond appears by changing surrounding reflections, visibility and how much of the stone is exposed. Diamond cut and jewellery design therefore interact visually without becoming the same specification." }
    ]
  },
  {
    heading: "Does a Halo Make a Poorly Cut Diamond Sparkle More?",
    content: [
      { type: "paragraph", text: "A halo can create additional sparkle around a centre stone because it introduces more diamonds. It does not improve the centre diamond's actual cut. Likewise, polished white metal can add brightness around a stone without changing its facet geometry." },
      { type: "paragraph", text: "The complete jewellery piece may look more brilliant, but the centre diamond retains its own cut characteristics." }
    ]
  },
  {
    heading: "Can Cleaning Improve Cut?",
    content: [
      { type: "paragraph", text: "No. Cleaning can remove oils and residue and restore the visibility of the diamond's existing light performance. It cannot change pavilion angle, table size or facet alignment." },
      { type: "paragraph", text: "If a well-cut diamond looks dull after regular wear, contamination may be hiding its performance." },
      { type: "paragraph", parts: [{ text: "For that question, see " }, { text: "Do Lab-Grown Diamonds Lose Their Sparkle?", href: "/blog/do-lab-grown-diamonds-lose-their-sparkle/" }] }
    ]
  },
  {
    heading: "Can Recutting Improve Diamond Cut?",
    content: [
      { type: "paragraph", text: "In some situations, an existing polished diamond can be recut or repolished to change its proportions or remove damage. But recutting also removes diamond material and therefore reduces carat weight. Whether it is worthwhile depends on the individual stone." },
      { type: "paragraph", text: "This is specialist work and should not be presented as a routine Aurelia service unless the client explicitly offers it." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Cut by Hand?",
    content: [
      { type: "paragraph", text: "Modern diamond manufacturing combines specialist equipment, digital planning, lasers, polishing machinery and skilled human decision-making. The degree of automation varies between manufacturers." },
      { type: "paragraph", text: "The important point for the buyer is that a lab-grown crystal does not emerge from the reactor already shaped as a polished round, oval or emerald diamond. Cutting and polishing are separate manufacturing stages." },
      { type: "paragraph", parts: [{ text: "For the full sequence, see " }, { text: "How Are Lab-Grown Diamonds Made?", href: "/blog/how-are-lab-grown-diamonds-made/" }] }
    ]
  },
  {
    heading: "Does CVD Produce Better Cut Than HPHT?",
    content: [
      { type: "paragraph", text: "No. CVD and HPHT describe diamond-growth processes. They do not function as cut grades. Either type of rough can be polished into a strongly or weakly cut diamond." },
      { type: "paragraph", text: "Buy the finished diamond based on its actual cut information and appearance rather than assuming the growth method decides light performance." },
      { type: "paragraph", parts: [{ text: "For growth-method comparison, see " }, { text: "CVD vs HPHT Lab-Grown Diamonds", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" }, { text: "." }] }
    ]
  },
  {
    heading: "How Should Aurelia Product Pages Describe Diamond Cut?",
    content: [
      { type: "paragraph", text: "Aurelia should use the terminology from the specific laboratory report or verified product specification. For a GIA standard round brilliant carrying a qualifying cut grade, report that grade accurately. For a current IGI round or fancy-shape report, use the IGI terminology actually provided. For a GIA fancy shape with no overall cut grade, do not fabricate a cut grade from table/depth measurements." },
      { type: "paragraph", text: "Polish and symmetry should also be shown as separate specifications where known rather than folded into one generic \"cut\" label." },
      { type: "paragraph", text: "Most importantly, avoid a catalogue-wide statement such as: \"Every Aurelia diamond is Ideal Cut\" unless there is verifiable product-level evidence and a clearly defined grading source behind that claim." }
    ]
  },
  {
    heading: "Common Mistake: Using Shape and Cut Interchangeably",
    content: [
      { type: "paragraph", text: "\"Oval cut\", \"pear cut\" and \"emerald cut\" are common consumer expressions. But a buyer still needs to understand the difference between the stone's shape/cutting style and the quality of its execution." },
      { type: "paragraph", text: "An oval does not become excellent simply because it is oval. An emerald cut does not carry an overall GIA Excellent cut grade merely because the word \"cut\" appears in its shape name." }
    ]
  },
  {
    heading: "Common Mistake: Assuming Every Laboratory Uses GIA Grades",
    content: [
      { type: "paragraph", text: "They do not. GIA currently uses Excellent through Poor for applicable standard round-brilliant cut grading. IGI uses its own methodology and terminology, including Excellent-Ideal for top round-brilliant cut and an Excellent-to-Poor fancy-shape system." },
      { type: "paragraph", text: "Use the laboratory named on the report." }
    ]
  },
  {
    heading: "Common Mistake: Treating \"Ideal\" as a Universal Scientific Grade",
    content: [
      { type: "paragraph", text: "Ideal may refer to an IGI result, another laboratory's terminology or a retailer-created category. Without the source, it is ambiguous. Aurelia should therefore always qualify the term when it is used commercially." }
    ]
  },
  {
    heading: "Common Mistake: Choosing Fancy Shapes from Table and Depth Alone",
    content: [
      { type: "paragraph", text: "Fancy-shape beauty involves more than two percentages. Outline, facet arrangement, bow-tie effect, symmetry, light return and personal shape preference can all matter. Use numerical filters to narrow options—not to replace evaluation." }
    ]
  },
  {
    heading: "Common Mistake: Confusing Polish With Cut",
    content: [
      { type: "paragraph", text: "Excellent polish does not automatically mean Excellent overall cut. Polish refers to facet-surface quality. Keep the fields separate." }
    ]
  },
  {
    heading: "Common Mistake: Confusing Symmetry With Cut",
    content: [
      { type: "paragraph", text: "The same principle applies. Symmetry describes alignment and geometric precision. It contributes to cut quality but is not automatically the overall cut grade." },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "What is lab-grown diamond cut?", answer: "It describes how successfully a laboratory-grown rough diamond has been planned, proportioned, faceted and polished into a finished gemstone." },
          { question: "Is cut the same as diamond shape?", answer: "No. Shape describes the outline and broad faceting style. Cut quality describes how successfully the diamond has been fashioned." },
          { question: "Does a lab-grown diamond have a cut grade?", answer: "It can. Whether an overall cut grade appears depends on the shape, laboratory and report type." },
          { question: "Does GIA grade lab-grown diamond cut?", answer: "Under GIA's current lab-grown Quality Assessment, cut is an assessment criterion for qualifying round brilliant stones. GIA does not apply an overall fancy-shape cut grade." },
          { question: "What are GIA's round diamond cut grades?", answer: "Excellent, Very Good, Good, Fair and Poor." },
          { question: "Does GIA have an Ideal cut grade?", answer: "No. Ideal is not part of GIA's official overall cut-grade scale." },
          { question: "What is Triple Excellent?", answer: "It commonly refers to a GIA round brilliant with Excellent overall cut, Excellent polish and Excellent symmetry." },
          { question: "Does Triple Excellent mean perfect?", answer: "No. Multiple proportion combinations can fall within GIA Excellent, so Triple Excellent diamonds can still differ visually." },
          { question: "Does IGI grade lab-grown diamond cut?", answer: "Yes. IGI provides cut assessment for laboratory-grown diamonds according to its current methodologies." },
          { question: "What is IGI's highest round-brilliant cut result?", answer: "IGI currently states that its highest round-brilliant cut grade is Excellent-Ideal." },
          { question: "Does IGI grade fancy shapes?", answer: "Yes. IGI currently grades fancy-shaped diamonds on an Excellent-to-Poor scale using a four-step methodology." },
          { question: "Does GIA grade oval cut?", answer: "GIA does not currently provide an overall cut grade for oval diamonds. It can provide other information including polish and symmetry." },
          { question: "Does GIA grade emerald-cut diamonds for overall cut?", answer: "Not with the same overall cut grade applied to standard round brilliants." },
          { question: "Can an IGI oval receive an overall cut grade?", answer: "Under IGI's current fancy-shape methodology, fancy-shaped diamonds can receive overall cut grades." },
          { question: "What is diamond polish?", answer: "Polish describes the quality and condition of the diamond's facet surfaces." },
          { question: "What is diamond symmetry?", answer: "Symmetry describes the precision of the diamond's outline and facet placement." },
          { question: "Is Excellent polish the same as Excellent cut?", answer: "No." },
          { question: "Is Excellent symmetry the same as Excellent cut?", answer: "No." },
          { question: "What is diamond brightness?", answer: "Brightness is white light returned to the observer." },
          { question: "What is diamond fire?", answer: "Fire is the visible dispersion of white light into spectral colours." },
          { question: "What is scintillation?", answer: "Scintillation is the changing pattern of flashes and light-dark contrast visible as the diamond, observer or light source moves." },
          { question: "What is light leakage?", answer: "It describes light leaving the diamond in directions that reduce desired face-up return." },
          { question: "Is there one perfect table percentage?", answer: "No. Table works together with crown, pavilion, depth and other proportions." },
          { question: "Is there one perfect diamond cut formula?", answer: "No. Multiple proportion combinations can produce high-quality light performance." },
          { question: "What is the best cut for a lab-grown diamond?", answer: "For rounds, top laboratory cut grades can be useful starting points. For fancy shapes, use the applicable laboratory methodology together with visual assessment." },
          { question: "Should I always buy Excellent cut?", answer: "Excellent is the highest GIA overall round-brilliant category and deserves consideration, but individual Excellent diamonds can still look different." },
          { question: "Is Ideal better than Excellent?", answer: "The answer depends on who issued the terminology. GIA does not use Ideal as an official overall cut grade, while IGI currently uses Excellent-Ideal for its top round-brilliant result." },
          { question: "Does CVD or HPHT affect cut grade?", answer: "Not directly. They describe growth methods rather than the quality of the polished cut." },
          { question: "Do lab-grown diamonds sparkle differently from natural diamonds because of cut?", answer: "Origin does not create a separate cut-quality system. The individual stone's facet design, proportions and workmanship determine its optical performance." }
        ]
      }
    ]
  },
  {
    heading: "Final Answer: What Cut Should You Look for in a Lab-Grown Diamond?",
    content: [
      { type: "paragraph", text: "Cut should be evaluated according to the individual diamond, its shape and the laboratory system used to assess it." },
      { type: "paragraph", text: "For standard round brilliants, formal cut grading can provide a powerful first filter. Under GIA's system, round-brilliant grades run from Excellent to Poor. Under IGI's current system, round-brilliant terminology and methodology differ, with Excellent-Ideal currently identified as its highest result." },
      { type: "paragraph", text: "Fancy shapes require even more care. GIA does not currently give ovals, pears, cushions, emeralds, marquises and other fancy shapes an overall cut grade. IGI does now grade fancy shapes through its own four-step system. Therefore, never assume the same label means the same thing everywhere." },
      { type: "paragraph", text: "And never substitute polish or symmetry for an overall cut grade." },
      { type: "paragraph", text: "The most useful process is to identify the diamond's shape, read the actual laboratory report, understand the laboratory's grading system and then evaluate the stone's real visual behaviour. For a round brilliant, brightness, fire, scintillation, proportions and craftsmanship all matter. For an oval, bow tie and outline become important. For an emerald or Asscher, step pattern and light-dark balance matter. For a pear or marquise, shape symmetry, tips and bow-tie effect require attention." },
      { type: "paragraph", text: "A strong diamond is therefore not defined by one percentage or one marketing word such as \"Ideal\". It is defined by how successfully its complete facet system works for that particular shape." },
      { type: "paragraph", parts: [{ text: "For the broad quality framework, continue with " }, { text: "What Are the 4Cs of Lab-Grown Diamonds?", href: "/blog/4cs-of-lab-grown-diamonds/" }] },
      { type: "paragraph", parts: [{ text: "For colour, read " }, { text: "Lab-Grown Diamond Colour Grades Explained", href: "/blog/lab-grown-diamond-colour-grades-explained/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For clarity, use " }, { text: "Lab-Grown Diamond Clarity Grades Explained", href: "/blog/lab-grown-diamond-clarity-grades-explained/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For visible size and proportions, see " }, { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "For report terminology, continue with " }, { text: "How to Read a Lab-Grown Diamond Certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" }, { text: "." }] },
      { type: "paragraph", parts: [{ text: "And for apparent brilliance over time, use " }, { text: "Do Lab-Grown Diamonds Lose Their Sparkle?", href: "/blog/do-lab-grown-diamonds-lose-their-sparkle/" }] },
      { type: "paragraph", text: "When considering an Aurelia Royale design, rely on the cut, polish and symmetry information verified for that specific diamond, rather than assuming one cut grade applies across the complete catalogue." },
      { type: "paragraph", parts: [{ text: "Where a design is not currently available for direct purchase, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry to register your interest." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Cut is the characteristic with the greatest impact on how lively a diamond looks — evaluate it carefully.", shopHref: "/shop/", contactHref: "/contact/" }
    ]
  }
];

export default function BlogCutExplainedPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">Lab-Grown Diamond Cut Explained</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Cut Grades, Light Performance, Polish and Symmetry • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="lab-grown-diamond-cut-explained" />
      <NewsletterSection />
    </main>
  );
}

