import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How Are Lab-Grown Diamonds Made? Seed to Jewellery",
  description: "Learn how lab-grown diamonds are made from a diamond seed using CVD or HPHT, then cut, polished, tested and set into finished jewellery.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aureliaroyale.com/#organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
    { "@type": "WebSite", "@id": "https://www.aureliaroyale.com/#website", "url": "https://www.aureliaroyale.com/", "name": "Aurelia Royale", "publisher": { "@id": "https://www.aureliaroyale.com/#organization" } },
    { "@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#webpage", "url": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/", "name": "How Are Lab-Grown Diamonds Made? From Diamond Seed to Finished Jewellery", "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" }, "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#breadcrumb" }, "datePublished": "2026-07-14", "dateModified": "2026-09-10" },
    { "@type": "BlogPosting", "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#article", "headline": "How Are Lab-Grown Diamonds Made? From Diamond Seed to Finished Jewellery", "description": "Learn how lab-grown diamonds are made from a diamond seed using CVD or HPHT, then cut, polished, tested and set into finished jewellery.", "datePublished": "2026-07-14", "dateModified": "2026-09-10", "author": { "@id": "https://www.aureliaroyale.com/#organization" }, "publisher": { "@id": "https://www.aureliaroyale.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#webpage" }, "articleSection": "Lab-Grown Diamond Education", "keywords": ["how are lab-grown diamonds made", "CVD diamond process", "HPHT diamond process", "lab-grown diamond seed to jewellery"] },
    { "@type": "BreadcrumbList", "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" }, { "@type": "ListItem", "position": 3, "name": "How Are Lab-Grown Diamonds Made?", "item": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/" }] },
    { "@type": "FAQPage", "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#faq", "mainEntity": [{ "@type": "Question", "name": "How are lab-grown diamonds made?", "acceptedAnswer": { "@type": "Answer", "text": "They are grown from carbon around or upon a diamond seed or substrate using HPHT or CVD technology. The resulting rough crystal is then planned, cut, polished, tested and, when intended for jewellery, mounted into a finished piece." } }, { "@type": "Question", "name": "What are lab-grown diamonds made of?", "acceptedAnswer": { "@type": "Answer", "text": "They are made of carbon arranged in diamond's crystal structure." } }, { "@type": "Question", "name": "Do lab-grown diamonds come out of the machine already polished?", "acceptedAnswer": { "@type": "Answer", "text": "No. The growth process produces rough diamond crystal. That material must then be planned, cut and polished." } }] }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Lab-grown diamonds are created by growing diamond crystal from carbon around or upon a diamond seed or substrate under carefully controlled laboratory conditions." },
      { type: "paragraph", text: "The two principal commercial methods are High Pressure High Temperature (HPHT) and Chemical Vapour Deposition (CVD)." },
      { type: "paragraph", text: "Those technologies create the rough diamond crystal. They do not produce a polished engagement-ring diamond straight from a machine." },
      { type: "paragraph", text: "After crystal growth, the rough material still needs to be evaluated, planned, cut, polished and tested. Diamonds selected for jewellery can then be matched with a design and mounted into rings, earrings, necklaces, bracelets or other pieces." },
      { type: "paragraph", text: "The complete journey is therefore better understood as:" },
      { type: "paragraph", text: "diamond seed → crystal growth → rough diamond → planning and cutting → polishing → identification and testing → jewellery selection and setting" },
      { type: "paragraph", text: "That distinction matters because the quality of a finished lab-grown diamond depends on much more than the reactor in which it grew." }
    ]
  },
  {
    heading: "Quick Answer: How Are Lab-Grown Diamonds Made?",
    content: [
      { type: "paragraph", text: "A lab-grown diamond begins with a diamond seed or substrate that provides a crystal structure on which additional diamond can grow." },
      { type: "paragraph", text: "In the HPHT process, carbon is dissolved under extremely high pressure and high temperature and crystallises onto a diamond seed." },
      { type: "paragraph", text: "In the CVD process, carbon-containing gas is activated inside a low-pressure chamber. Carbon atoms are deposited onto a diamond substrate, progressively building additional diamond crystal." },
      { type: "paragraph", text: "Once sufficient crystal has grown, the rough diamond is removed." },
      { type: "paragraph", text: "It is then planned, cut and polished much like other diamond rough." },
      { type: "paragraph", text: "The resulting polished stone can be examined using specialist gemmological equipment to establish that it is laboratory-grown and assess relevant characteristics." },
      { type: "paragraph", text: "Finally, diamonds selected for jewellery are mounted into the finished piece." },
      { type: "paragraph", text: "So laboratory-grown diamond production involves both crystal growth and conventional jewellery manufacturing." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Really Diamonds?",
    content: [
      { type: "paragraph", text: "Yes, but their laboratory origin should always be made clear." },
      { type: "paragraph", text: "Laboratory-grown diamonds consist of diamond material rather than glass, cubic zirconia or moissanite." },
      { type: "paragraph", text: "Natural diamonds developed through geological processes within the Earth." },
      { type: "paragraph", text: "Laboratory-grown diamonds are produced technologically." },
      { type: "paragraph", text: "That difference in origin is fundamental, even though the resulting materials have essentially the same basic chemical, physical and optical properties." },
      {
        type: "paragraph",
        parts: [{ text: "If your main question is whether that makes lab-grown diamonds \"real\", continue with " }, { text: "Are Lab-Grown Diamonds Real?", href: "/blog/are-lab-grown-diamonds-real/" }]
      },
      { type: "paragraph", text: "This article is specifically about how they are produced." }
    ]
  },
  {
    heading: "What Are Lab-Grown Diamonds Made Of?",
    content: [
      { type: "paragraph", text: "The fundamental material is carbon arranged in diamond's crystal structure." },
      { type: "paragraph", text: "This is an important distinction because the phrase \"made in a lab\" sometimes creates the false impression that lab-grown diamonds are produced from glass, plastic or another material engineered merely to resemble diamond." },
      { type: "paragraph", text: "They are not." },
      { type: "paragraph", text: "Carbon atoms become incorporated into a growing diamond crystal." },
      { type: "paragraph", text: "What differs between CVD and HPHT is the technological environment used to deliver those carbon atoms and allow the diamond crystal to grow." }
    ]
  },
  {
    heading: "Step 1: Start with a Diamond Seed or Substrate",
    content: [
      { type: "paragraph", text: "Both principal growth technologies begin with diamond material that acts as a crystal template." },
      { type: "paragraph", text: "This is commonly called a diamond seed." },
      { type: "paragraph", text: "In technical discussions of CVD growth, it may also be called a diamond substrate." },
      { type: "paragraph", text: "The seed provides the atomic structure that newly deposited carbon can continue." },
      { type: "paragraph", text: "That does not mean the finished gemstone is simply a small seed coated with imitation material." },
      { type: "paragraph", text: "The additional material being grown is diamond crystal." },
      { type: "paragraph", text: "The size, preparation and quality of the starting substrate can also influence the growth process and the resulting crystal." },
      { type: "paragraph", text: "This is the first major difference between growing a diamond and manufacturing a diamond simulant." },
      { type: "image", src: "/images/blog/how-are-lab-grown-diamonds-made/31.jpg", alt: "Diamond seed or substrate used as the starting point for CVD and HPHT lab-grown diamond growth", title: "Step 1: The Diamond Seed", caption: "A diamond seed or substrate provides the crystal template — both CVD and HPHT begin with diamond material.", priority: true }
    ]
  },
  {
    heading: "Step 2: Choose the Growth Method",
    content: [
      { type: "paragraph", text: "Commercial gem-quality laboratory-grown diamonds are principally produced by two technologies:" },
      { type: "paragraph", text: "HPHT — High Pressure High Temperature" },
      { type: "paragraph", text: "and" },
      { type: "paragraph", text: "CVD — Chemical Vapour Deposition" },
      { type: "paragraph", text: "Both can produce jewellery-quality diamond." },
      { type: "paragraph", text: "Neither acronym is itself a diamond-quality grade." },
      { type: "paragraph", text: "A buyer therefore should not assume that CVD automatically means better quality or that HPHT automatically means a superior stone." },
      { type: "paragraph", text: "This article gives only the manufacturing overview." },
      {
        type: "paragraph",
        parts: [{ text: "For inclusions, post-growth treatment, quality, price and method-specific buying considerations, use Aurelia Royale's dedicated " }, { text: "CVD vs HPHT Lab-Grown Diamonds", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" }, { text: " guide." }]
      }
    ]
  },
  {
    heading: "How HPHT Diamond Growth Works",
    content: [
      { type: "paragraph", text: "HPHT stands for High Pressure High Temperature." },
      { type: "paragraph", text: "A diamond seed, carbon source and metallic flux are placed within a specialised growth system capable of producing extremely high pressure and temperature." },
      { type: "paragraph", text: "The carbon source can include graphite." },
      { type: "paragraph", text: "Under suitable conditions, the metallic material helps dissolve the carbon." },
      { type: "paragraph", text: "The temperature around the diamond seed is controlled so that carbon can move through the growth environment and crystallise onto the seed." },
      { type: "paragraph", text: "Over time, additional diamond material forms and the crystal becomes larger." },
      { type: "paragraph", text: "The end result is a rough HPHT-grown diamond crystal." },
      { type: "paragraph", text: "It still does not look like the polished stone you see in a jewellery setting." },
      { type: "paragraph", text: "It must first go through the cutting and polishing process." }
    ]
  },
  {
    heading: "How Extreme Are HPHT Conditions?",
    content: [
      { type: "paragraph", text: "HPHT production uses genuinely extreme operating conditions." },
      { type: "paragraph", text: "GIA describes commercial HPHT diamond growth at pressures around 5–6 gigapascals and temperatures of approximately 1,300–1,600°C, although exact recipes depend on the producer and objective." },
      { type: "paragraph", text: "This is one reason describing lab-grown diamonds as simply \"pressed carbon\" is misleading." },
      { type: "paragraph", text: "The process requires highly specialised equipment and tightly controlled crystal-growth conditions." },
      { type: "paragraph", text: "Temperature gradients, growth chemistry and other variables influence how the crystal develops." }
    ]
  },
  {
    heading: "How CVD Diamond Growth Works",
    content: [
      { type: "paragraph", text: "CVD stands for Chemical Vapour Deposition." },
      { type: "paragraph", text: "Instead of using the enormous pressures associated with HPHT production, CVD grows diamond inside a low-pressure chamber." },
      { type: "paragraph", text: "Thin diamond substrates are placed inside the reactor." },
      { type: "paragraph", text: "A mixture containing hydrogen and a carbon-containing gas such as methane is introduced." },
      { type: "paragraph", text: "Energy is then applied to activate the gases and form a plasma." },
      { type: "paragraph", text: "Within this environment, carbon-bearing species reach the cooler diamond substrate and become incorporated into the growing crystal." },
      { type: "paragraph", text: "Instead of the crystal developing through a metal-solvent system under enormous pressure, the CVD diamond grows progressively on the substrate." },
      { type: "paragraph", text: "This is why CVD growth is frequently described as layer-by-layer diamond growth." }
    ]
  },
  {
    heading: "Is CVD Diamond Just a Coating?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "That is another common misunderstanding." },
      { type: "paragraph", text: "CVD can be used technologically to produce coatings for industrial purposes, but gem-quality CVD laboratory-grown diamonds are not simply ordinary gemstones with a thin diamond paint applied to them." },
      { type: "paragraph", text: "The process grows actual diamond crystal from the substrate." },
      { type: "paragraph", text: "After sufficient growth, that material can be cut into a faceted gemstone." },
      { type: "paragraph", text: "A polished CVD-grown diamond is therefore diamond material throughout the portion fashioned into the gemstone." }
    ]
  },
  {
    heading: "Does CVD Use Microwaves?",
    content: [
      { type: "paragraph", text: "Many commercial CVD systems use microwave energy to help generate the plasma required for diamond growth." },
      { type: "paragraph", text: "The microwave energy is not somehow \"turning a seed into a diamond\" directly." },
      { type: "paragraph", text: "Its role is to supply energy to the gases within the reactor." },
      { type: "paragraph", text: "Those activated gases create the conditions under which carbon can be deposited onto the diamond-growing surface." },
      { type: "paragraph", text: "Different reactor technologies and production recipes can vary, so it is better to understand microwaves as part of the growth environment, rather than defining CVD simply as \"microwave-made diamond\"." }
    ]
  },
  {
    heading: "CVD vs HPHT Manufacturing: The Essential Difference",
    content: [
      { type: "paragraph", text: "The simplest way to remember the distinction is this:" },
      { type: "paragraph", text: "HPHT grows diamond from carbon under very high pressure and temperature, typically using a metallic flux." },
      { type: "paragraph", text: "CVD grows diamond from carbon-containing gases inside a lower-pressure chamber." },
      { type: "paragraph", text: "Both begin from diamond material." },
      { type: "paragraph", text: "Both produce rough laboratory-grown diamond." },
      { type: "paragraph", text: "Both require subsequent cutting and polishing before becoming finished gemstones." },
      { type: "paragraph", text: "And both can produce jewellery-quality stones." },
      { type: "paragraph", text: "The manufacturing difference is important gemmologically, but it should not be turned into a rule that one method always produces prettier jewellery." }
    ]
  },
  {
    heading: "Step 3: Allow the Diamond Crystal to Grow",
    content: [
      { type: "paragraph", text: "Laboratory-grown diamonds are not produced instantly." },
      { type: "paragraph", text: "Crystal growth can take days to weeks, depending on method, desired size, production recipe, crystal quality and manufacturer." },
      { type: "paragraph", text: "HPHT growth times can range considerably depending on the intended product." },
      { type: "paragraph", text: "CVD production may involve repeated growth stages and can take several weeks for particular batches." },
      { type: "paragraph", text: "This means statements such as:" },
      { type: "paragraph", text: "\"Every lab-grown diamond takes exactly two weeks\"" },
      { type: "paragraph", text: "or" },
      { type: "paragraph", text: "\"Every one-carat diamond takes the same time to grow\"" },
      { type: "paragraph", text: "should be avoided." },
      { type: "paragraph", text: "Diamond-growth time is a production variable, not a fixed consumer specification." }
    ]
  },
  {
    heading: "Why Doesn't Every Diamond Grow at Maximum Speed?",
    content: [
      { type: "paragraph", text: "Producing crystal as quickly as possible is not necessarily the same as producing the best possible crystal for gem use." },
      { type: "paragraph", text: "Manufacturers control temperature, pressure, gas chemistry, impurities and growth conditions because these can influence the resulting material." },
      { type: "paragraph", text: "Growth decisions can affect characteristics including colour, internal graining and other features." },
      { type: "paragraph", text: "The manufacturer therefore has to balance speed, crystal quality, yield and the final intended use of the material." },
      { type: "paragraph", text: "This is one reason laboratory-grown diamonds can still vary significantly from one stone to another." },
      { type: "paragraph", text: "\"Made in controlled conditions\" does not mean \"every diamond comes out identical\"." }
    ]
  },
  {
    heading: "Can Several Diamonds Be Grown at the Same Time?",
    content: [
      { type: "paragraph", text: "Yes." },
      { type: "paragraph", text: "Depending on the equipment and growth method, a production run can contain several diamond seeds or substrates." },
      { type: "paragraph", text: "For CVD production, multiple seed plates can be positioned within the reactor chamber." },
      { type: "paragraph", text: "HPHT systems can also be configured according to the manufacturer's equipment and growth objectives." },
      { type: "paragraph", text: "The number of crystals produced in one run is an industrial-production consideration." },
      { type: "paragraph", text: "It does not mean every crystal from the same run will necessarily produce identical polished gemstones." },
      { type: "paragraph", text: "Each piece of rough still needs to be individually evaluated." }
    ]
  },
  {
    heading: "Why Do Lab-Grown Rough Diamonds Look Different from Jewellery Diamonds?",
    content: [
      { type: "paragraph", text: "Because crystal growth and diamond cutting are different stages." },
      { type: "paragraph", text: "The rough crystal coming out of the growth environment does not have the precise facets of a round brilliant, oval, emerald, pear or other finished diamond shape." },
      { type: "paragraph", text: "CVD rough can have a relatively flat or tabular form associated with its growth direction." },
      { type: "paragraph", text: "HPHT-grown crystals can have different characteristic crystal faces and growth sectors." },
      { type: "paragraph", text: "A diamond cutter must determine how the usable rough can best be transformed into polished gemstones." },
      { type: "paragraph", text: "That planning stage has a major effect on the final result." }
    ]
  },
  {
    heading: "Step 4: Post-Growth Processing May Occur",
    content: [
      { type: "paragraph", text: "Some laboratory-grown diamonds undergo additional treatment after the main crystal-growth stage." },
      { type: "paragraph", text: "This needs careful wording because it is one of the most misunderstood parts of laboratory-grown diamond manufacturing." },
      { type: "paragraph", text: "A CVD-grown diamond may, for example, receive HPHT treatment after growth to modify colour characteristics." },
      { type: "paragraph", text: "That does not mean it suddenly becomes an HPHT-grown diamond." },
      { type: "paragraph", text: "Its growth method remains CVD." },
      { type: "paragraph", text: "The later HPHT process is a post-growth treatment." },
      { type: "paragraph", text: "GIA specifically distinguishes HPHT growth from HPHT treatment and notes that post-growth HPHT processing does not synthesise additional diamond material." }
    ]
  },
  {
    heading: "Why Are Some CVD Diamonds Treated After Growth?",
    content: [
      { type: "paragraph", text: "Certain CVD growth conditions can produce brown coloration related to defects within the crystal structure." },
      { type: "paragraph", text: "Post-growth high-temperature processing can modify some of those defects and improve apparent colour." },
      { type: "paragraph", text: "This is not rare enough to be treated as an unusual secret." },
      { type: "paragraph", text: "Modern laboratory-grown diamond production can deliberately combine a growth stage with subsequent processing." },
      { type: "paragraph", text: "What matters is understanding the final stone and any treatment information provided through appropriate laboratory documentation." },
      {
        type: "paragraph",
        parts: [{ text: "For the complete subject, read " }, { text: "CVD vs HPHT Lab-Grown Diamonds", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" }, { text: "." }]
      }
    ]
  },
  {
    heading: "Does Post-Growth Treatment Mean Poor Quality?",
    content: [
      { type: "paragraph", text: "Not automatically." },
      { type: "paragraph", text: "Treatment describes part of a diamond's manufacturing history." },
      { type: "paragraph", text: "It is not, by itself, a complete quality judgement." },
      { type: "paragraph", text: "An attractive treated CVD-grown diamond may be preferable to a less attractive untreated stone." },
      { type: "paragraph", text: "Likewise, an \"as-grown\" stone can be appealing to buyers who specifically prefer that production history." },
      { type: "paragraph", text: "What matters is that relevant information is represented accurately rather than using the word \"treated\" as though it automatically meant defective." },
      { type: "image", src: "/images/blog/how-are-lab-grown-diamonds-made/32.jpg", alt: "Lab-grown diamond cutting and polishing process transforming rough crystal into finished gemstone", title: "Steps 5–8: From Rough Crystal to Polished Diamond", caption: "After growth, the rough crystal must be evaluated, planned, cut and polished — this process determines much of the finished diamond's quality." }
    ]
  },
  {
    heading: "Step 5: Evaluate the Rough Diamond",
    content: [
      { type: "paragraph", text: "After crystal growth is complete, the rough material has to be evaluated before cutting begins." },
      { type: "paragraph", text: "The goal is to determine how much usable polished diamond can be obtained from the rough and what shapes may be appropriate." },
      { type: "paragraph", text: "The crystal's geometry, internal features, colour and usable material can all influence planning." },
      { type: "paragraph", text: "This is where laboratory diamond manufacturing begins to overlap with the traditional skills of diamond cutting." },
      { type: "paragraph", text: "The growth chamber creates rough diamond." },
      { type: "paragraph", text: "The cutting process determines how that rough becomes a polished gemstone." }
    ]
  },
  {
    heading: "Step 6: Plan the Cut",
    content: [
      { type: "paragraph", text: "Diamond cutting is not simply a matter of making the largest possible stone." },
      { type: "paragraph", text: "The cutter has to balance carat retention, proportions, internal characteristics and potential appearance." },
      { type: "paragraph", text: "Imagine one rough crystal that could theoretically produce a heavier deep-cut stone or a slightly lighter stone with more attractive face-up proportions." },
      { type: "paragraph", text: "The correct decision depends on the characteristics of the rough and the intended polished result." },
      { type: "paragraph", text: "This explains why two laboratory-grown diamonds from the same growth technology can have very different finished quality." },
      { type: "paragraph", text: "The reactor did not determine the final facet relationships." },
      { type: "paragraph", text: "The cutting process did." }
    ]
  },
  {
    heading: "Step 7: Shape and Cut the Rough Diamond",
    content: [
      { type: "paragraph", text: "Once the cutting plan is established, the rough crystal is transformed into the intended shape." },
      { type: "paragraph", text: "Possible polished shapes include round, oval, emerald, cushion, pear, marquise, radiant, princess and many others." },
      { type: "paragraph", text: "Material that cannot form part of the final gemstone is removed." },
      { type: "paragraph", text: "The stone is progressively shaped and faceted." },
      { type: "paragraph", text: "The goal is to create the precise arrangement of polished surfaces that gives the finished diamond its geometry and optical behaviour." },
      { type: "paragraph", text: "This stage is fundamental to how the diamond ultimately looks in jewellery." }
    ]
  },
  {
    heading: "Does a 1 Carat Lab-Grown Diamond Begin as Exactly 1 Carat of Rough?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "Cutting involves material loss." },
      { type: "paragraph", text: "A rough diamond weighs more than the finished polished stone produced from it." },
      { type: "paragraph", text: "How much polished weight can be retained depends on rough shape, internal characteristics, desired cut and manufacturing decisions." },
      { type: "paragraph", text: "That is why a manufacturer cannot simply grow exactly 1.00 ct of rough and expect to finish with a precisely 1.00 ct polished gemstone." },
      { type: "paragraph", text: "Carat weight is determined on the finished stone after material has been removed during cutting." }
    ]
  },
  {
    heading: "Step 8: Polish the Diamond",
    content: [
      { type: "paragraph", text: "Facets need smooth, precisely finished surfaces to interact with light effectively." },
      { type: "paragraph", text: "Polishing therefore forms an essential part of diamond manufacturing." },
      { type: "paragraph", text: "A polished diamond may eventually receive assessments relating to polish and symmetry, depending on the laboratory and reporting service." },
      { type: "paragraph", text: "This stage also demonstrates why saying \"lab-grown diamonds are made by a machine\" gives an incomplete picture." },
      { type: "paragraph", text: "Advanced technology produces the rough diamond crystal." },
      { type: "paragraph", text: "Specialised diamond-manufacturing processes then turn that rough into a finished gemstone." }
    ]
  },
  {
    heading: "Is Lab-Grown Diamond Cut Different from Natural-Diamond Cut?",
    content: [
      { type: "paragraph", text: "The fundamental objective of faceting a diamond for jewellery is not determined by whether the rough formed underground or in a growth reactor." },
      { type: "paragraph", text: "Both types of rough have to be planned and polished into finished gemstones." },
      { type: "paragraph", text: "Cutting decisions can therefore affect light performance, dimensions, symmetry, polish and carat retention in either category." },
      { type: "paragraph", text: "A laboratory-grown diamond is not automatically perfectly cut simply because its crystal growth was controlled." },
      {
        type: "paragraph",
        parts: [{ text: "For detailed buying information, use " }, { text: "Lab-Grown Diamond Cut Explained", href: "/blog/lab-grown-diamond-cut-explained/" }, { text: "." }]
      }
    ]
  },
  {
    heading: "Step 9: Clean and Inspect the Polished Stone",
    content: [
      { type: "paragraph", text: "Once cutting and polishing are complete, the diamond can be inspected as a finished gemstone." },
      { type: "paragraph", text: "Manufacturers and suppliers may evaluate dimensions, appearance and other characteristics before determining where the stone will go next." },
      { type: "paragraph", text: "Some diamonds may be matched into pairs." },
      { type: "paragraph", text: "Others may become centre stones." },
      { type: "paragraph", text: "Smaller diamonds can be grouped for multi-stone jewellery." },
      { type: "paragraph", text: "Polished stones may also proceed to independent gemmological examination where relevant." }
    ]
  },
  {
    heading: "Step 10: Establish That the Diamond Is Laboratory-Grown",
    content: [
      { type: "paragraph", text: "Natural and laboratory-grown diamonds can look extremely similar to the unaided eye." },
      { type: "paragraph", text: "The difference in origin is therefore not reliably established simply by asking someone to look at the stone." },
      { type: "paragraph", text: "Specialist gemmological laboratories use advanced testing methods to identify laboratory-grown diamonds and distinguish them from naturally formed diamonds and diamond simulants." },
      { type: "paragraph", text: "Growth structures, inclusions, fluorescence or phosphorescence behaviour, spectroscopy and other laboratory observations can contribute to identification." },
      { type: "paragraph", text: "The exact methods used depend on the laboratory and stone." },
      {
        type: "paragraph",
        parts: [{ text: "For the complete identification question, read " }, { text: "Can You Tell a Lab-Grown Diamond from a Natural Diamond?", href: "/blog/can-you-tell-lab-grown-from-natural-diamond/" }]
      }
    ]
  },
  {
    heading: "Can a Normal Diamond Tester Identify How a Diamond Was Made?",
    content: [
      { type: "paragraph", text: "Usually not." },
      { type: "paragraph", text: "A conventional handheld diamond tester can be useful for distinguishing diamond from some simulants." },
      { type: "paragraph", text: "But a positive result does not automatically reveal whether the diamond is natural, CVD-grown or HPHT-grown." },
      { type: "paragraph", text: "Professional screening and laboratory instrumentation are much more sophisticated." },
      { type: "paragraph", text: "This is why the production process leaves scientifically useful signatures even when the finished stone looks natural to the unaided eye." }
    ]
  },
  {
    heading: "Can Laboratories Tell CVD from HPHT?",
    content: [
      { type: "paragraph", text: "Yes, specialist laboratories can identify characteristics associated with different laboratory-growth processes." },
      { type: "paragraph", text: "HPHT and CVD create different crystal-growth environments." },
      { type: "paragraph", text: "Those environments can leave different growth structures and gemmological features." },
      { type: "paragraph", text: "Some laboratory reports can also include information about the identified growth method or detected post-growth treatment, depending on the laboratory and report service." },
      { type: "paragraph", text: "Again, this is not something buyers should try to determine using an improvised home test." }
    ]
  },
  {
    heading: "Step 11: Independent Reporting Where Appropriate",
    content: [
      { type: "paragraph", text: "Some polished laboratory-grown diamonds are submitted to independent gemmological laboratories for reporting." },
      { type: "paragraph", text: "That documentation can establish laboratory-grown origin and record other characteristics according to the applicable service." },
      { type: "paragraph", text: "But not every tiny diamond in every jewellery piece needs its own individual report." },
      { type: "paragraph", text: "A substantial centre diamond and a tiny pavé diamond serve very different roles." },
      { type: "paragraph", text: "Individual reporting is often particularly useful for significant centre stones, while finished-jewellery reporting or other product-level verification can make more sense for pieces containing many small diamonds." },
      {
        type: "paragraph",
        parts: [{ text: "For the full decision, read " }, { text: "Do Lab-Grown Diamonds Need Certification?", href: "/blog/do-lab-grown-diamonds-need-certification/" }]
      }
    ]
  },
  {
    heading: "Does Every Lab-Grown Diamond Get a GIA or IGI Report?",
    content: [
      { type: "paragraph", text: "No universal rule requires every laboratory-grown diamond to have an individual GIA or IGI report." },
      { type: "paragraph", text: "Some significant loose stones have individual laboratory documents." },
      { type: "paragraph", text: "Other diamonds are examined within finished-jewellery reporting systems." },
      { type: "paragraph", text: "Small melee diamonds may instead be screened and documented through other quality-control processes." },
      { type: "paragraph", text: "Aurelia Royale should therefore describe documentation at product level, rather than promising that every diamond automatically has an individual report." }
    ]
  },
  {
    heading: "What Does IGI Test?",
    content: [
      { type: "paragraph", text: "IGI provides laboratory-grown diamond analysis for both loose diamonds and finished jewellery." },
      { type: "paragraph", text: "Its laboratory processes can distinguish naturally mined diamonds, laboratory-grown diamonds and simulants using specialist technologies." },
      { type: "paragraph", text: "Depending on the report and service, growth-method and treatment information may also be recorded." },
      { type: "paragraph", text: "For finished jewellery, IGI can examine mounted stones without necessarily dismantling complex pieces." },
      { type: "paragraph", text: "This is why testing belongs after growth and cutting in the manufacturing journey: the laboratory examines the resulting gemstone or jewellery, not the growth recipe in advance." }
    ]
  },
  {
    heading: "Step 12: Match Diamonds for Jewellery",
    content: [
      { type: "paragraph", text: "Once diamonds have been cut, polished and appropriately evaluated, they can be selected for specific jewellery designs." },
      { type: "paragraph", text: "This can involve more than simply choosing stones with the same carat weight." },
      { type: "paragraph", text: "For a pair of stud earrings, the two main diamonds may need to look visually balanced." },
      { type: "paragraph", text: "For a tennis bracelet, many small stones need to work cohesively across the complete line." },
      { type: "paragraph", text: "A halo or pavé design may require numerous diamonds of closely matched scale and appearance." },
      { type: "paragraph", text: "The manufacturing process therefore moves from individual gemstone production to jewellery composition." }
    ]
  },
  {
    heading: "Step 13: Prepare the Jewellery Setting",
    content: [
      { type: "paragraph", text: "The jewellery itself is created separately from the diamond-growth process." },
      { type: "paragraph", text: "A ring needs a band and stone setting." },
      { type: "paragraph", text: "A necklace needs its pendant structure, chain or links and fastening." },
      { type: "paragraph", text: "Earrings require settings and appropriate posts, backs or hinges." },
      { type: "paragraph", text: "Bracelets contain links, settings and clasps." },
      { type: "paragraph", text: "The exact precious metal and construction depend on the product." },
      { type: "paragraph", text: "This is an important quality distinction." },
      { type: "paragraph", text: "A well-grown diamond does not automatically make a well-made jewellery piece." },
      { type: "paragraph", text: "The final jewellery also depends on setting security, metal construction, finishing, dimensions and workmanship." },
      {
        type: "paragraph",
        parts: [{ text: "For that wider finished-piece question, see " }, { text: "What Makes Lab-Grown Diamond Jewellery High Quality?", href: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/" }]
      },
      { type: "image", src: "/images/blog/how-are-lab-grown-diamonds-made/33.jpg", alt: "Lab-grown diamond being set into finished jewellery showing the jewellery manufacturing stage", title: "Steps 13–15: From Polished Diamond to Finished Jewellery", caption: "Jewellery matching, setting and final quality checks complete the journey from diamond seed to finished wearable piece." }
    ]
  },
  {
    heading: "Step 14: Set the Diamonds Into the Jewellery",
    content: [
      { type: "paragraph", text: "The selected diamonds are then secured into the chosen settings." },
      { type: "paragraph", text: "Depending on the design, this might involve prongs, bezels, channels, pavé settings or other construction methods." },
      { type: "paragraph", text: "This is a jewellery-manufacturing stage rather than diamond growth." },
      { type: "paragraph", text: "Its quality matters enormously." },
      { type: "paragraph", text: "Even an excellent diamond needs an appropriate setting to be worn securely." },
      { type: "paragraph", text: "This is one reason shoppers should not judge a complete ring, earring, necklace or bracelet solely by the laboratory report of its centre stone." },
      { type: "paragraph", text: "The finished piece needs to work as jewellery." }
    ]
  },
  {
    heading: "Step 15: Final Jewellery Quality Checks",
    content: [
      { type: "paragraph", text: "Before a completed piece reaches a customer, appropriate jewellery quality control should consider the finished article rather than only the diamond." },
      { type: "paragraph", text: "Relevant checks can include whether stones appear secure, whether settings are correctly formed, whether clasps or fastenings function as intended and whether the finished piece matches its stated specifications." },
      { type: "paragraph", text: "The exact quality-control procedure depends on the manufacturer or retailer." },
      { type: "paragraph", text: "Aurelia Royale should not claim a specific multi-stage proprietary inspection process unless the client has confirmed that process." },
      { type: "paragraph", text: "The important educational principle is that diamond grading and finished-jewellery quality control are different stages." }
    ]
  },
  {
    heading: "From Carbon to Jewellery: The Full Process",
    content: [
      { type: "paragraph", text: "The complete process can be summarised like this:" },
      {
        type: "table",
        headers: ["Stage", "What Happens"],
        rows: [
          ["Diamond seed/substrate", "Diamond material provides the crystal template"],
          ["Growth", "HPHT or CVD creates additional diamond crystal"],
          ["Optional post-growth processing", "Certain stones may receive treatment such as HPHT annealing"],
          ["Rough evaluation", "The grown crystal is examined and planned"],
          ["Cutting", "Rough material is shaped into a gemstone"],
          ["Polishing", "Precise facets are finished"],
          ["Identification/testing", "Specialist equipment can establish laboratory-grown origin"],
          ["Reporting where appropriate", "Individual or jewellery-level documentation may be produced"],
          ["Jewellery matching", "Stones are selected for a particular design"],
          ["Setting", "Diamonds are mounted into the jewellery"],
          ["Finished-piece checks", "The complete piece is assessed before sale"]
        ]
      },
      { type: "paragraph", text: "This is why describing laboratory-grown diamonds as simply \"diamonds made in a machine\" misses most of the actual process." },
      { type: "image", src: "/images/blog/how-are-lab-grown-diamonds-made/34.jpg", alt: "Complete lab-grown diamond production journey from seed through growth cutting polishing to finished jewellery", title: "From Seed to Finished Jewellery: The Complete Journey", caption: "Lab-grown diamond production involves crystal growth, cutting, polishing, testing and jewellery manufacturing — not just a growth reactor." },
      // { type: "image", src: "/images/blog/how-are-lab-grown-diamonds-made/35.jpg", alt: "Finished lab-grown diamond jewellery showing the complete product after all manufacturing stages", title: "The Complete Lab-Grown Diamond Jewellery Product", caption: "The reactor grows the crystal. The cutter determines its geometry. The laboratory documents it. The jeweller brings it to life." }
    ]
  },
  {
    heading: "How Long Does It Take to Make a Lab-Grown Diamond?",
    content: [
      { type: "paragraph", text: "There is no universal answer." },
      { type: "paragraph", text: "The crystal-growth stage itself can range from days to weeks depending on the process, intended size, growth conditions and quality objectives." },
      { type: "paragraph", text: "After growth, additional time is needed for planning, cutting, polishing, testing, reporting where applicable and jewellery manufacturing." },
      { type: "paragraph", text: "So \"how long does a lab-grown diamond take to make?\" can refer to two different timelines:" },
      { type: "paragraph", text: "the time required to grow the crystal" },
      { type: "paragraph", text: "or" },
      { type: "paragraph", text: "the complete time required to transform that crystal into finished jewellery." },
      { type: "paragraph", text: "Those should not be confused." }
    ]
  },
  {
    heading: "Do Bigger Diamonds Take Longer to Grow?",
    content: [
      { type: "paragraph", text: "Often more material must be deposited or crystallised to produce larger rough, but growth time does not follow one simple consumer formula such as \"one week per carat\"." },
      { type: "paragraph", text: "Different technologies, equipment, growth rates, recipes and quality requirements matter." },
      { type: "paragraph", text: "A larger crystal can also yield more than one polished stone depending on how it is planned." },
      { type: "paragraph", text: "It is therefore inaccurate to assign one universal number of days to every finished carat weight." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Mass Produced?",
    content: [
      { type: "paragraph", text: "Laboratory production is scalable in a way that natural geological formation is not." },
      { type: "paragraph", text: "Multiple crystals can be grown through commercial manufacturing systems, and global production capacity has expanded significantly." },
      { type: "paragraph", text: "But \"mass produced\" should not be interpreted to mean every polished diamond is physically identical." },
      { type: "paragraph", text: "The rough crystals still vary." },
      { type: "paragraph", text: "Cutting outcomes vary." },
      { type: "paragraph", text: "Colour and clarity characteristics vary." },
      { type: "paragraph", text: "Dimensions vary." },
      { type: "paragraph", text: "The finished diamonds can therefore differ substantially even when they originated from the same broad technology." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Perfect Because Conditions Are Controlled?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "Controlled growth is not the same as flawless growth." },
      { type: "paragraph", text: "HPHT-grown diamonds can display characteristics associated with their metallic growth environment." },
      { type: "paragraph", text: "CVD-grown diamonds can show growth-related graining, graphitic features and other internal characteristics." },
      { type: "paragraph", text: "Some stones receive post-growth treatment to modify colour." },
      { type: "paragraph", text: "The resulting polished diamonds can occupy different quality levels." },
      { type: "paragraph", text: "That is why independent assessment and careful selection remain useful." }
    ]
  },
  
  {
    heading: "Are Lab-Grown Diamonds Made From Glass?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "Glass is not diamond." },
      { type: "paragraph", text: "A genuine laboratory-grown diamond consists of diamond crystal grown from carbon." },
      { type: "paragraph", text: "Glass-based materials may imitate the appearance of gemstones, but they are not created through CVD or HPHT diamond growth." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Made From Cubic Zirconia?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "Cubic zirconia is a different material." },
      { type: "paragraph", text: "It can be used as a diamond simulant because its appearance can resemble diamond, but its composition and physical properties differ." },
      { type: "paragraph", text: "A laboratory-grown diamond is not a CZ stone that has been upgraded through treatment." },
      {
        type: "paragraph",
        parts: [{ text: "For the full comparison, read " }, { text: "Lab-Grown Diamond vs Cubic Zirconia", href: "/blog/lab-grown-diamond-vs-cubic-zirconia/" }, { text: "." }]
      }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Made From Moissanite?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "Moissanite is silicon carbide." },
      { type: "paragraph", text: "Laboratory-grown diamond is carbon in diamond crystal structure." },
      { type: "paragraph", text: "Both can be produced technologically, which is perhaps why they are sometimes confused." },
      { type: "paragraph", text: "But they are distinct gemstone materials." },
      {
        type: "paragraph",
        parts: [{ text: "See " }, { text: "Lab-Grown Diamond vs Moissanite", href: "/blog/lab-grown-diamond-vs-moissanite/" }, { text: " for the dedicated comparison." }]
      }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Made From Carbon?",
    content: [
      { type: "paragraph", text: "Yes." },
      { type: "paragraph", text: "Carbon is the fundamental element in diamond." },
      { type: "paragraph", text: "HPHT and CVD simply provide different technological pathways for carbon atoms to become incorporated into a growing diamond crystal." },
      { type: "paragraph", text: "That is one of the simplest and most accurate answers to the question of what lab-grown diamonds are made from." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds \"Synthetic\"?",
    content: [
      { type: "paragraph", text: "In gemmological and technical contexts, the word synthetic has historically been used to describe diamonds grown artificially rather than formed naturally." },
      { type: "paragraph", text: "In consumer-facing jewellery markets, laboratory-grown, lab-grown and laboratory-created are widely used terms." },
      { type: "paragraph", text: "Whichever permitted term is used, the important point is that the laboratory origin must remain clear rather than presenting the stone as a naturally mined diamond." },
      { type: "paragraph", text: "Aurelia Royale should therefore consistently use lab-grown diamond or laboratory-grown diamond in customer-facing content unless there is a specific legal or standards reason to use different terminology." }
    ]
  },
  {
    heading: "Are Lab-Grown Diamonds Made Exactly Like Natural Diamonds?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "They are the same type of gemstone material, but their formation processes are different." },
      { type: "paragraph", text: "Natural diamonds form through geological processes within the Earth over enormously different timescales and environments." },
      { type: "paragraph", text: "Laboratory-grown diamonds form through engineered HPHT or CVD systems." },
      { type: "paragraph", text: "HPHT recreates some relevant high-pressure/high-temperature conditions technologically." },
      { type: "paragraph", text: "CVD uses a very different low-pressure gas-based process." },
      { type: "paragraph", text: "So saying lab-grown diamonds are \"made exactly the same way as natural diamonds\" would be inaccurate." },
      { type: "paragraph", text: "A better statement is that laboratory methods create the conditions required to grow diamond crystal through different technological processes." }
    ]
  },
  {
    heading: "Why Can Experts Tell Lab-Grown Diamonds Apart?",
    content: [
      { type: "paragraph", text: "Because different growth environments can create different internal structures and observable characteristics." },
      { type: "paragraph", text: "HPHT-grown crystals have characteristic growth sectors." },
      { type: "paragraph", text: "CVD growth produces another pattern because the diamond develops from a flat substrate." },
      { type: "paragraph", text: "Specialist laboratories can examine these characteristics together with fluorescence, phosphorescence and spectroscopic data." },
      { type: "paragraph", text: "The differences may be invisible to an ordinary shopper but scientifically detectable." },
      { type: "paragraph", text: "That is why \"looks identical to me\" and \"cannot be distinguished professionally\" are not the same statement." }
    ]
  },
  {
    heading: "Does Growing a Diamond Determine Its Final Quality?",
    content: [
      { type: "paragraph", text: "Only partly." },
      { type: "paragraph", text: "Growth quality affects the rough crystal." },
      { type: "paragraph", text: "But after that, another major set of decisions begins." },
      { type: "paragraph", text: "The cutter determines the polished shape." },
      { type: "paragraph", text: "Proportions influence appearance." },
      { type: "paragraph", text: "Material may be removed to work around internal characteristics." },
      { type: "paragraph", text: "Polish and symmetry depend on the finishing process." },
      { type: "paragraph", text: "A diamond can therefore begin as good-quality rough and still be cut poorly." },
      { type: "paragraph", text: "Conversely, skilful planning can help make effective use of suitable rough material." },
      { type: "paragraph", text: "The finished diamond is the result of growth plus cutting, not growth alone." }
    ]
  },
  {
    heading: "Does the Diamond Growth Method Determine Jewellery Quality?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "CVD or HPHT describes the diamond." },
      { type: "paragraph", text: "It does not describe the quality of the ring, necklace, earring or bracelet holding that diamond." },
      { type: "paragraph", text: "Finished-jewellery quality depends on additional factors such as precious-metal construction, setting security, finishing and practical design." },
      { type: "paragraph", text: "That distinction is especially important for consumers comparing apparently similar jewellery online." },
      { type: "paragraph", text: "An impressive centre-stone specification cannot compensate for weak jewellery construction." }
    ]
  },
  {
    heading: "Final Answer: How Are Lab-Grown Diamonds Made?",
    content: [
      { type: "paragraph", text: "Lab-grown diamonds begin with diamond material and carbon, not glass, cubic zirconia or moissanite." },
      { type: "paragraph", text: "A diamond seed or substrate provides the crystal template." },
      { type: "paragraph", text: "Manufacturers then use one of two principal growth technologies." },
      { type: "paragraph", text: "HPHT creates a very high-pressure, high-temperature environment in which carbon crystallises onto the seed." },
      { type: "paragraph", text: "CVD uses activated carbon-containing gases in a lower-pressure chamber to build diamond material progressively on a substrate." },
      { type: "paragraph", text: "That creates a rough diamond crystal." },
      { type: "paragraph", text: "The process is not finished there." },
      { type: "paragraph", text: "The rough is evaluated and planned." },
      { type: "paragraph", text: "It is cut into the desired shape." },
      { type: "paragraph", text: "Its facets are polished." },
      { type: "paragraph", text: "The finished stone can be tested by specialist gemmological methods to establish laboratory-grown origin and relevant characteristics." },
      { type: "paragraph", text: "Where appropriate, independent laboratory documentation can then accompany the stone or finished jewellery." },
      { type: "paragraph", text: "Finally, selected diamonds are mounted into rings, earrings, necklaces, bracelets and other jewellery." },
      { type: "paragraph", text: "So the complete journey is:" },
      { type: "paragraph", text: "Seed → Growth → Rough Diamond → Cutting → Polishing → Testing → Documentation Where Applicable → Jewellery Setting" },
      { type: "paragraph", text: "Understanding that sequence also explains why \"lab-grown\" does not automatically mean high quality." },
      { type: "paragraph", text: "The reactor grows the diamond crystal." },
      { type: "paragraph", text: "The cutter determines much of its final geometry and optical performance." },
      { type: "paragraph", text: "The laboratory can document what the resulting stone is." },
      { type: "paragraph", text: "And the jeweller determines how successfully that stone becomes part of a finished piece." },
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "How are lab-grown diamonds made?", answer: "They are grown from carbon around or upon a diamond seed or substrate using HPHT or CVD technology. The resulting rough crystal is then planned, cut, polished, tested and, when intended for jewellery, mounted into a finished piece." },
          { question: "What are lab-grown diamonds made of?", answer: "They are made of carbon arranged in diamond's crystal structure." },
          { question: "Do lab-grown diamonds start from a diamond seed?", answer: "Yes. Both principal commercial growth technologies use diamond material as a substrate or seed that provides the crystal template for new growth." },
          { question: "What is HPHT?", answer: "HPHT stands for High Pressure High Temperature. Carbon crystallises onto a diamond seed under extremely high pressure and temperature using a specialised growth environment." },
          { question: "What is CVD?", answer: "CVD stands for Chemical Vapour Deposition. Carbon-containing gases are activated in a low-pressure chamber and carbon is progressively deposited onto a diamond substrate." },
          { question: "Which method is better, CVD or HPHT?", answer: "Neither is automatically better. Both can produce high-quality jewellery diamonds. See CVD vs HPHT Lab-Grown Diamonds for the detailed comparison." },
          { question: "How long does it take to grow a lab-grown diamond?", answer: "Growth can take days to weeks depending on method, desired size, production conditions and quality targets. There is no universal time per carat." },
          { question: "Are lab-grown diamonds made instantly?", answer: "No. Crystal growth itself requires time, after which cutting, polishing, testing and jewellery manufacturing add further steps." },
          { question: "Do lab-grown diamonds come out of the machine already polished?", answer: "No. The growth process produces rough diamond crystal. That material must then be planned, cut and polished." },
          { question: "Are lab-grown diamonds made of glass?", answer: "No. Genuine lab-grown diamonds are diamond material, not glass." },
          { question: "Are lab-grown diamonds cubic zirconia?", answer: "No. Cubic zirconia is a different material used as a diamond simulant." },
          { question: "Are lab-grown diamonds moissanite?", answer: "No. Moissanite is silicon carbide, while diamond is carbon crystal." },
          { question: "Do lab-grown diamonds contain carbon?", answer: "Yes. Carbon is the fundamental element that forms diamond." },
          { question: "Can CVD diamonds receive HPHT treatment?", answer: "Yes. Some CVD-grown diamonds undergo HPHT treatment after growth, often to modify colour characteristics. That does not change their growth method from CVD to HPHT." },
          { question: "Is an HPHT-treated CVD diamond HPHT-grown?", answer: "No. It remains CVD-grown. HPHT treatment describes a separate post-growth step." },
          { question: "Are all lab-grown diamonds treated after growth?", answer: "No. Treatment status varies. Some stones are described as as-grown where no post-growth treatment is detected." },
          { question: "Are all lab-grown diamonds flawless?", answer: "No. Growth characteristics and inclusions can occur in laboratory-grown diamonds." },
          { question: "Are lab-grown diamonds cut the same way as natural diamonds?", answer: "Both types of diamond rough must be planned, shaped, faceted and polished to become finished gemstones." },
          { question: "Can a laboratory tell how a diamond was grown?", answer: "Specialist gemmological analysis can identify characteristics associated with HPHT and CVD growth." },
          { question: "Can a basic diamond tester identify CVD versus HPHT?", answer: "Generally not. Conventional handheld testers are not complete growth-method identification systems." },
          { question: "Does every lab-grown diamond need an individual grading report?", answer: "No. Individual reporting is particularly useful for significant stones, while jewellery containing many small diamonds may use different forms of appropriate documentation." },
          { question: "How do lab-grown diamonds become jewellery?", answer: "After growth, cutting, polishing and appropriate testing, selected diamonds are matched to designs and secured into jewellery settings." }
        ]
      },
      { type: "paragraph", text: "For the detailed difference between the two growth technologies, continue with CVD vs HPHT Lab-Grown Diamonds." },
      {
        type: "paragraph",
        parts: [{ text: "For identification, read " }, { text: "Can You Tell a Lab-Grown Diamond from a Natural Diamond?", href: "/blog/can-you-tell-lab-grown-from-natural-diamond/" }]
      },
      {
        type: "paragraph",
        parts: [{ text: "For grading and reporting, use " }, { text: "Do Lab-Grown Diamonds Need Certification?", href: "/blog/do-lab-grown-diamonds-need-certification/" }]
      },
      {
        type: "paragraph",
        parts: [{ text: "For finished-product quality, see " }, { text: "What Makes Lab-Grown Diamond Jewellery High Quality?", href: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/" }]
      },
      {
        type: "paragraph",
        parts: [{ text: "And for the basic authenticity question, continue with " }, { text: "Are Lab-Grown Diamonds Real?", href: "/blog/are-lab-grown-diamonds-real/" }]
      },
      { type: "paragraph", text: "When reviewing Aurelia Royale laboratory-grown diamond jewellery, use the product information supplied for the specific design rather than assuming a particular growth method, laboratory report or manufacturing claim applies across every item." },
      {
        type: "paragraph",
        parts: [{ text: "Where a design is not currently available for direct purchase, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry to register your interest." }]
      },
      { type: "cta-banner", title: "Continue Learning About Lab-Grown Diamonds", subtitle: "Understanding how diamonds are made helps you evaluate quality beyond the growth acronym.", shopHref: "/shop/", contactHref: "/contact/" }
    ]
  }
];

export default function BlogHowMadePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How Are Lab-Grown Diamonds Made?</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">From Diamond Seed to Finished Jewellery • Published July 14, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="how-are-lab-grown-diamonds-made" />
      <NewsletterSection />
    </main>
  );
}

