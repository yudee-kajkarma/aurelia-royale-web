import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Check Jewellery Dimensions and Weight Online",
  description: "Learn how to read jewellery dimensions online, including ring width and height, earring diameter, pendant size, necklace and bracelet length, diamond millimetres and carat weight.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aureliaroyale.com/#organization",
      "name": "Aurelia Royale",
      "url": "https://www.aureliaroyale.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aureliaroyale.com/#website",
      "url": "https://www.aureliaroyale.com/",
      "name": "Aurelia Royale",
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/check-jewellery-product-dimensions-weight.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/check-jewellery-product-dimensions-weight.webp",
      "width": 1600,
      "height": 900,
      "caption": "How to check jewellery dimensions and weight online"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#webpage",
      "url": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/",
      "name": "How to Check Jewellery Dimensions and Weight Online",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#primaryimage" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-09-11",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#article",
      "headline": "How to Check Jewellery Dimensions and Weight Online",
      "description": "Learn how to read jewellery dimensions online, including ring width and height, earring diameter, pendant size, necklace and bracelet length, diamond millimetres and carat weight.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-09-11",
      "articleSection": "Buying Lab-Grown Diamond Jewellery",
      "keywords": [
        "how to check jewellery dimensions online",
        "jewellery dimensions and weight",
        "earring diameter pendant size necklace length",
        "diamond millimetres vs carat weight"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How to Check Jewellery Dimensions and Weight Online", "item": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/check-jewellery-product-dimensions-weight/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What do jewellery dimensions mean?", "acceptedAnswer": { "@type": "Answer", "text": "They describe the physical size of a jewellery item or one of its components, usually using millimetres, centimetres or inches." } },
        { "@type": "Question", "name": "Is diamond carat a measurement of size?", "acceptedAnswer": { "@type": "Answer", "text": "No. Carat measures weight. GIA defines one metric carat as 200 milligrams." } },
        { "@type": "Question", "name": "Is jewellery weight the same as diamond carat weight?", "acceptedAnswer": { "@type": "Answer", "text": "No. Finished jewellery weight may be expressed in grams and includes the metal and other components, while diamond carat measures gemstone mass." } },
        { "@type": "Question", "name": "Can product photos tell me actual jewellery size?", "acceptedAnswer": { "@type": "Answer", "text": "Not reliably. Jewellery is often photographed under magnification, and display size varies between screens." } },
        { "@type": "Question", "name": "Is total carat weight the same as centre-stone weight?", "acceptedAnswer": { "@type": "Answer", "text": "No. Total carat weight can combine the weight of multiple diamonds." } },
        { "@type": "Question", "name": "Are 360-degree images useful for size?", "acceptedAnswer": { "@type": "Answer", "text": "They help with relative proportions and profile but do not replace actual measurements." } },
        { "@type": "Question", "name": "Is one carat always the same diameter?", "acceptedAnswer": { "@type": "Answer", "text": "No. Shape and proportions influence physical dimensions." } },
        { "@type": "Question", "name": "Are approximate dimensions bad?", "acceptedAnswer": { "@type": "Answer", "text": "No. They can be the most accurate way to describe products with legitimate manufacturing variation." } },
        { "@type": "Question", "name": "Does heavier jewellery mean better quality?", "acceptedAnswer": { "@type": "Answer", "text": "No. Weight alone does not establish craftsmanship, durability or overall quality." } },
        { "@type": "Question", "name": "Can a mounted diamond be measured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but access can be limited by the setting. IGI notes that mounted jewellery is assessed as the mounting permits." } },
        { "@type": "Question", "name": "What should I check for a necklace?", "acceptedAnswer": { "@type": "Answer", "text": "Overall necklace or chain length is fundamental; pendant or individual stone dimensions may also matter." } },
        { "@type": "Question", "name": "What is the most important rule when reading jewellery dimensions online?", "acceptedAnswer": { "@type": "Answer", "text": "Identify exactly what each number measures before using it to judge the size of the product." } }
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
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (1).jpg",
        alt: "Measuring diamond jewellery dimensions using a digital gauge",
        title: "Measuring Jewellery Scale",
        caption: "Online photos can make jewellery appear larger than it is; check physical dimensions and weight to determine accurate scale.",
        priority: true
      },
      { type: "paragraph", text: "Jewellery often looks much larger on a product page than it will appear when worn." },
      { type: "paragraph", text: "That is not necessarily because the photograph is misleading. Fine jewellery is usually photographed close-up so that details such as settings, prongs, pavé diamonds and polished surfaces remain visible on a screen." },
      { type: "paragraph", text: "The problem begins when enlarged photography is the only scale information available." },
      { type: "paragraph", text: "To understand how a piece will actually look and feel, you need to read its physical dimensions alongside the images." },
      { type: "paragraph", text: "For earrings, that might mean diameter, height and drop length. For a pendant, it could mean width, height and chain length. For a ring, band width and setting height can be important. For bracelets and necklaces, overall length is fundamental." },
      { type: "paragraph", text: "Diamond measurements need to be interpreted separately from jewellery dimensions, and diamond carat weight should not be confused with physical size." },
      { type: "paragraph", text: "A strong online assessment therefore asks:" },
      { type: "paragraph", text: "How large is the jewellery?" },
      { type: "paragraph", text: "How large is the diamond?" },
      { type: "paragraph", text: "How much does the diamond weigh?" },
      { type: "paragraph", text: "How much does the complete jewellery piece weigh, if that information is relevant and available?" },
      { type: "paragraph", text: "Those are four different questions." }
    ]
  },
  {
    heading: "Quick Answer: How Do You Check Jewellery Size Online?",
    content: [
      { type: "paragraph", text: "Do not estimate size from photography alone." },
      { type: "paragraph", text: "Look for measurements stated in millimetres, centimetres or inches, depending on the jewellery type." },
      { type: "paragraph", text: "For a ring, check band width and, where available, setting height." },
      { type: "paragraph", text: "For earrings, check overall height, width or diameter." },
      { type: "paragraph", text: "For a pendant, check the pendant dimensions separately from the chain length." },
      { type: "paragraph", text: "For a bracelet, check total wearable length." },
      { type: "paragraph", text: "For a necklace, check chain or necklace length and, where relevant, pendant or stone dimensions." },
      { type: "paragraph", text: "For a significant diamond, compare carat weight with the stone's actual millimetre measurements." },
      { type: "paragraph", text: "The more clearly those values are separated, the easier it is to understand the product." }
    ]
  },
  {
    heading: "Jewellery Dimensions and Diamond Carat Are Not the Same Thing",
    content: [
      { type: "paragraph", text: "This is the most important distinction on the page." },
      { type: "paragraph", text: "Millimetres describe physical dimensions." },
      { type: "paragraph", text: "Carats describe diamond weight." },
      { type: "paragraph", text: "GIA defines diamond carat weight as the measurement of how much a diamond weighs and defines one metric carat as 200 milligrams." },
      { type: "paragraph", text: "This means a diamond described as:" },
      { type: "paragraph", text: "1.00 ct" },
      { type: "paragraph", text: "does not automatically have one universal diameter." },
      { type: "paragraph", text: "How its weight is distributed depends on the diamond's shape and proportions." },
      { type: "paragraph", text: "Two diamonds can therefore have the same carat weight while showing different physical dimensions." }
    ]
  },
  {
    heading: "Why Carat Weight Cannot Tell You Exactly How Large a Diamond Looks",
    content: [
      { type: "paragraph", text: "Imagine two diamonds that both weigh 1.00 ct." },
      { type: "paragraph", text: "One may distribute more of its weight through its face-up width." },
      { type: "paragraph", text: "Another may carry additional weight through greater depth or girdle thickness." },
      { type: "paragraph", text: "Both can genuinely weigh one carat while presenting differently from above." },
      { type: "paragraph", text: "GIA specifically warns that carat weight is not the same as diamond size and notes that cutting can place extra weight below the visible face-up area or in a thicker girdle." },
      { type: "paragraph", text: "That is why you should check:" },
      { type: "paragraph", text: "carat + millimetres + proportions" },
      { type: "paragraph", text: "rather than carat alone." },
      {
        type: "paragraph",
        parts: [
          { text: "For the dedicated explanation, continue with " },
          { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How Diamond Measurements Are Usually Written",
    content: [
      { type: "paragraph", text: "Diamond reports commonly express dimensions in millimetres." },
      { type: "paragraph", text: "For a round diamond, GIA describes the measurement format as:" },
      { type: "paragraph", text: "minimum diameter × maximum diameter × depth" },
      { type: "paragraph", text: "For fancy-shaped diamonds, the usual reporting format is:" },
      { type: "paragraph", text: "length × width × depth." },
      { type: "paragraph", text: "So an oval diamond might be shown as something like:" },
      { type: "paragraph", text: "9.10 × 6.40 × 3.90 mm" },
      { type: "paragraph", text: "Those figures describe the actual measured stone." },
      { type: "paragraph", text: "They are not its jewellery dimensions." },
      { type: "paragraph", text: "If that same diamond is placed in a pendant, the complete pendant could be considerably larger because the setting, halo, frame or bail adds additional size." },
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (2).jpg",
        alt: "Measuring ring shank width, setting height, and band thickness",
        title: "Measuring Ring Head & Setting Height",
        caption: "Check shank width, thickness, and setting height separately from the ring size to understand the scale."
      }
    ]
  },
  {
    heading: "Diamond Size and Finished Jewellery Size Should Be Separate",
    content: [
      { type: "paragraph", text: "Consider a pendant containing an oval diamond." },
      { type: "paragraph", text: "The diamond might measure:" },
      { type: "paragraph", text: "9.1 × 6.4 mm" },
      { type: "paragraph", text: "while the finished pendant might measure:" },
      { type: "paragraph", text: "14 × 9 mm" },
      { type: "paragraph", text: "once the metal setting and bail are included." },
      { type: "paragraph", text: "Both figures can be useful." },
      { type: "paragraph", text: "But they answer different questions." },
      { type: "paragraph", text: "The diamond measurements tell you the scale of the gemstone." },
      { type: "paragraph", text: "The pendant dimensions tell you the scale of the complete piece." },
      { type: "paragraph", text: "A product should not use one in a way that makes customers assume it represents the other." }
    ]
  },
  {
    heading: "How to Check Ring Dimensions Online",
    content: [
      { type: "paragraph", text: "A ring requires more than ring size." },
      { type: "paragraph", text: "The ring size tells you whether it should fit the intended finger." },
      { type: "paragraph", text: "It does not tell you how substantial the design looks or how far the setting rises from the hand." },
      { type: "paragraph", text: "Useful ring measurements can include:" },
      {
        type: "bullet-list",
        items: [
          "band width",
          "band thickness",
          "setting or head width",
          "setting height",
          "and, for a significant centre diamond, the stone's actual measurements."
        ]
      },
      { type: "paragraph", text: "These become particularly useful when choosing between delicate and substantial designs." }
    ]
  },
  {
    heading: "What Does Ring Band Width Mean?",
    content: [
      { type: "paragraph", text: "Band width measures how wide the ring appears across the finger." },
      { type: "paragraph", text: "A relatively narrow band creates a different visual balance from a broad band, even if both hold the same centre diamond." },
      { type: "paragraph", text: "Band width can also influence how rings look when stacked together." },
      { type: "paragraph", text: "For online purchasing, a millimetre measurement gives far more reliable scale than words such as:" },
      {
        type: "bullet-list",
        items: [
          "thin",
          "delicate",
          "wide",
          "or:",
          "bold."
        ]
      },
      { type: "paragraph", text: "Those words are subjective." },
      { type: "paragraph", text: "A number provides a reference." }
    ]
  },
  {
    heading: "What Does Ring Setting Height Mean?",
    content: [
      { type: "paragraph", text: "Setting height generally describes how high the stone or setting sits above the finger." },
      { type: "paragraph", text: "This can affect:" },
      {
        type: "bullet-list",
        items: [
          "the visual profile,",
          "how exposed the stone feels,",
          "how easily the ring may catch during daily activity,",
          "and whether another ring can sit closely beside it."
        ]
      },
      { type: "paragraph", text: "A side-view image can help you understand the profile." },
      { type: "paragraph", text: "An actual millimetre measurement gives you stronger scale information." },
      { type: "paragraph", text: "Do not infer an exact setting height from photography if no measurement is provided." }
    ]
  },
  {
    heading: "Why Ring Size and Ring Dimensions Are Different",
    content: [
      { type: "paragraph", text: "A UK ring size such as N or P concerns finger fit." },
      { type: "paragraph", text: "It does not tell you:" },
      {
        type: "bullet-list",
        items: [
          "band width,",
          "setting height,",
          "centre-stone dimensions,",
          "or overall visual scale."
        ]
      },
      { type: "paragraph", text: "Two rings can therefore be manufactured in the same finger size while looking completely different." },
      { type: "paragraph", text: "This distinction matters especially when buying a ring as a gift." }
    ]
  },
  {
    heading: "How to Check Earring Dimensions Online",
    content: [
      { type: "paragraph", text: "Earrings are frequently photographed at extreme close range." },
      { type: "paragraph", text: "That makes actual dimensions particularly important." },
      { type: "paragraph", text: "For studs, useful measurements can include:" },
      { type: "paragraph", text: "face-up diameter" },
      { type: "paragraph", text: "or:" },
      { type: "paragraph", text: "overall height × width." },
      { type: "paragraph", text: "For hoops, diameter and hoop thickness matter." },
      { type: "paragraph", text: "For drop earrings, overall drop length can be more useful than gemstone dimensions alone." },
      { type: "paragraph", text: "A 25 mm drop earring and an 8 mm stud create completely different visual proportions even if the close-up images occupy the same amount of screen space." }
    ]
  },
  {
    heading: "What Does Earring Diameter Mean?",
    content: [
      { type: "paragraph", text: "For a circular stud or hoop, diameter describes the distance across the circle." },
      { type: "paragraph", text: "If a stud measures approximately 8 mm across, that provides a useful real-world reference." },
      { type: "paragraph", text: "But check what the number describes." },
      { type: "paragraph", text: "An 8 mm measurement might refer to:" },
      {
        type: "bullet-list",
        items: [
          "the diamond,",
          "the complete setting,",
          "or the entire decorative front."
        ]
      },
      { type: "paragraph", text: "Those are different measurements." },
      { type: "paragraph", text: "Good product information should make the reference clear." }
    ]
  },
  {
    heading: "How to Read Hoop Earring Measurements",
    content: [
      { type: "paragraph", text: "Hoops often need at least two pieces of scale information:" },
      { type: "paragraph", text: "the overall diameter" },
      { type: "paragraph", text: "and:" },
      { type: "paragraph", text: "the thickness or width of the hoop." },
      { type: "paragraph", text: "A large thin hoop and a small thick hoop can have very different visual weight even when one dimension sounds similar." },
      { type: "paragraph", text: "Some products may also distinguish inner diameter from outer diameter." },
      { type: "paragraph", text: "If that distinction materially changes fit or appearance, it should be stated clearly rather than simply listing “20 mm”." }
    ]
  },
  {
    heading: "How to Check Drop-Earring Length",
    content: [
      { type: "paragraph", text: "For drop earrings, overall length is usually one of the most useful measurements." },
      { type: "paragraph", text: "Measure conceptually from the top of the visible earring to its lowest point." },
      { type: "paragraph", text: "If a design contains several connected sections, the gemstone itself may represent only part of the overall drop." },
      { type: "paragraph", text: "This is why:" },
      { type: "paragraph", text: "diamond dimensions" },
      { type: "paragraph", text: "and:" },
      { type: "paragraph", text: "earring dimensions" },
      { type: "paragraph", text: "should not be merged into one unclear field." }
    ]
  },
  {
    heading: "Total Carat Weight in Earrings Is Not Earring Size",
    content: [
      { type: "paragraph", text: "Suppose a pair of earrings is advertised as:" },
      { type: "paragraph", text: "2.00 ct total diamond weight." },
      { type: "paragraph", text: "That does not tell you the earrings' physical dimensions." },
      { type: "paragraph", text: "It also does not necessarily mean each earring contains two carats." },
      { type: "paragraph", text: "In a simple two-stone matched pair, the total could be distributed approximately one carat per earring." },
      { type: "paragraph", text: "For more complex earrings, the weight might be divided across several stones." },
      { type: "paragraph", text: "For this reason, earring listings benefit from both:" },
      {
        type: "bullet-list",
        items: [
          "diamond weight",
          "and:",
          "physical dimensions."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For the combined-weight terminology, read " },
          { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "How to Check Pendant Dimensions Online",
    content: [
      { type: "paragraph", text: "A pendant has at least two potential scale components:" },
      { type: "paragraph", text: "the decorative pendant itself" },
      { type: "paragraph", text: "and:" },
      { type: "paragraph", text: "the chain." },
      { type: "paragraph", text: "The pendant may be measured by:" },
      {
        type: "bullet-list",
        items: [
          "height,",
          "width,",
          "and sometimes depth."
        ]
      },
      { type: "paragraph", text: "The chain is measured separately by total length." },
      { type: "paragraph", text: "If the pendant includes a bail, check whether its height is included in the stated pendant length." },
      { type: "paragraph", text: "A 12 mm motif plus a 4 mm bail can create a different overall drop from a 12 mm total pendant height." },
      { type: "paragraph", text: "Where the distinction matters, clear product information should state it." }
    ]
  },
  {
    heading: "Pendant Size and Diamond Size Are Not the Same",
    content: [
      { type: "paragraph", text: "A diamond might occupy only part of a pendant." },
      { type: "paragraph", text: "For example, a 6.5 mm round diamond can be surrounded by a halo or decorative metal work that increases the overall pendant width significantly." },
      { type: "paragraph", text: "So if you want to know:" },
      { type: "paragraph", text: "How large will this pendant look on the chest?" },
      { type: "paragraph", text: "use the pendant dimensions." },
      { type: "paragraph", text: "If you want to know:" },
      { type: "paragraph", text: "How large is the centre diamond?" },
      { type: "paragraph", text: "use the stone measurements and carat information." }
    ]
  },
  {
    heading: "How to Check Necklace Length",
    content: [
      { type: "paragraph", text: "Necklace length determines where the piece sits relative to the neck and chest." },
      { type: "paragraph", text: "A chain can look short or long depending on:" },
      {
        type: "bullet-list",
        items: [
          "the wearer's neck,",
          "body proportions,",
          "clothing,",
          "and whether a pendant adds additional drop."
        ]
      },
      { type: "paragraph", text: "An actual chain length is therefore more useful than a photograph of one model." },
      { type: "paragraph", text: "If a necklace has adjustment positions, those lengths should be stated where verified." },
      { type: "paragraph", text: "Do not assume every necklace can be shortened or lengthened simply because another product from the same retailer can." }
    ]
  },
  {
    heading: "Chain Length and Pendant Drop Should Not Be Combined",
    content: [
      { type: "paragraph", text: "Suppose a pendant necklace has:" },
      { type: "paragraph", text: "18-inch chain" },
      { type: "paragraph", text: "and:" },
      { type: "paragraph", text: "15 mm pendant height." },
      { type: "paragraph", text: "Those dimensions describe separate parts." },
      { type: "paragraph", text: "The 18 inches refers to the chain length." },
      { type: "paragraph", text: "The pendant extends below its attachment point." },
      { type: "paragraph", text: "Combining them into one “necklace measurement” would make it harder to understand how the piece sits." }
    ]
  },
  {
    heading: "How to Check Tennis-Necklace Dimensions",
    content: [
      { type: "paragraph", text: "For a tennis necklace, overall length is essential." },
      { type: "paragraph", text: "Total diamond weight is useful, but it does not tell you the size of each individual stone." },
      { type: "paragraph", text: "Imagine two necklaces with the same total diamond weight." },
      { type: "paragraph", text: "One is shorter and therefore distributes the same total weight across a shorter circumference." },
      { type: "paragraph", text: "Another may be longer or use a different number of stones." },
      { type: "paragraph", text: "Their individual diamond sizes and visual presence can differ." },
      { type: "paragraph", text: "So for tennis jewellery, consider:" },
      {
        type: "bullet-list",
        items: [
          "total diamond weight + necklace length + stone count or dimensions where known."
        ]
      }
    ]
  },
  {
    heading: "How to Check Bracelet Dimensions Online",
    content: [
      { type: "paragraph", text: "For bracelets, the most important measurement is generally the total wearable length." },
      { type: "paragraph", text: "But width can matter too." },
      { type: "paragraph", text: "A delicate chain bracelet and a broad tennis bracelet may both be 18 cm long while looking completely different on the wrist." },
      { type: "paragraph", text: "For rigid bangles, dimensions may need to describe the internal opening rather than simply the outside diameter." },
      { type: "paragraph", text: "Again, ask what the number actually measures." }
    ]
  },
  {
    heading: "Bracelet Length vs Wrist Size",
    content: [
      { type: "paragraph", text: "Your wrist circumference and the jewellery's total length are not automatically the same thing." },
      { type: "paragraph", text: "Some extra room is normally needed depending on the desired fit and construction." },
      { type: "paragraph", text: "A bracelet intended to sit close to the wrist will feel different from one designed for a looser drape." },
      { type: "paragraph", text: "Do not assume that one bracelet length is universally suitable for every wrist of the same circumference." }
    ]
  },
  {
    heading: "How to Read Tennis-Bracelet Weight",
    content: [
      { type: "paragraph", text: "A tennis bracelet may list:" },
      {
        type: "bullet-list",
        items: [
          "total diamond weight",
          "metal weight",
          "or:",
          "complete item weight."
        ]
      },
      { type: "paragraph", text: "Those numbers should not be confused." },
      { type: "paragraph", text: "For example:" },
      { type: "paragraph", text: "5 ct total diamond weight" },
      { type: "paragraph", text: "does not mean:" },
      { type: "paragraph", text: "bracelet weighs 5 carats altogether." },
      { type: "paragraph", text: "It describes the combined diamond mass being counted." },
      { type: "paragraph", text: "The complete finished bracelet contains metal as well." },
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (3).jpg",
        alt: "Measuring necklace chain length and pendant drop size",
        title: "Pendant and Chain Scale Check",
        caption: "Confirm the chain length and pendant body specs separately from the bail opening size."
      }
    ]
  },
  {
    heading: "Diamond Carat Weight vs Total Carat Weight",
    content: [
      { type: "paragraph", text: "A single diamond's carat weight describes that individual stone." },
      { type: "paragraph", text: "Total carat weight describes the combined weight of multiple diamonds included in the stated total." },
      { type: "paragraph", text: "For example:" },
      { type: "paragraph", text: "Centre diamond: 1.00 ct" },
      { type: "paragraph", text: "Accent diamonds: 0.40 ct total" },
      { type: "paragraph", text: "would produce:" },
      { type: "paragraph", text: "Total diamond weight: 1.40 ct" },
      { type: "paragraph", text: "assuming those are the verified component values." },
      { type: "paragraph", text: "Do not rewrite 1.40 ct total as:" },
      { type: "paragraph", text: "1.40 ct centre diamond." },
      {
        type: "paragraph",
        parts: [
          { text: "For the dedicated subject, read " },
          { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Diamond Carat Weight vs Jewellery Weight",
    content: [
      { type: "paragraph", text: "These are also completely different." },
      { type: "paragraph", text: "Diamond carat is measured in carats." },
      { type: "paragraph", text: "Finished jewellery weight is often expressed in grams." },
      { type: "paragraph", text: "A ring could therefore contain:" },
      { type: "paragraph", text: "1.00 ct diamond" },
      { type: "paragraph", text: "while the complete ring weighs several grams because the metal and other components add mass." },
      { type: "paragraph", text: "The exact jewellery weight depends on construction, metal, size and components." },
      { type: "paragraph", text: "There is no meaningful universal conversion from:" },
      { type: "paragraph", text: "1 ct diamond" },
      { type: "paragraph", text: "to:" },
      { type: "paragraph", text: "X grams finished ring." }
    ]
  },
  {
    heading: "Remember: One Carat Is Only 0.20 Grams",
    content: [
      { type: "paragraph", text: "One metric carat equals 200 milligrams, or 0.20 grams." },
      { type: "paragraph", text: "This helps explain why a jewellery item's gram weight and its diamond carat weight should never be used interchangeably." },
      { type: "paragraph", text: "A complete ring weighing several grams can still contain a relatively small diamond by mass." }
    ]
  },
  {
    heading: "Does Heavier Jewellery Mean Better Quality?",
    content: [
      { type: "paragraph", text: "Not automatically." },
      { type: "paragraph", text: "A higher gram weight may indicate that more material is present, but it is not a complete quality assessment." },
      { type: "paragraph", text: "Two rings can use different widths, settings, sizes, hollow or solid components and metal alloys." },
      { type: "paragraph", text: "Workmanship, durability, comfort and design cannot be determined from gram weight alone." },
      { type: "paragraph", text: "So avoid the shortcut:" },
      { type: "paragraph", text: "heavier = automatically better." },
      { type: "paragraph", text: "Weight is one specification." }
    ]
  },
  {
    heading: "Does Heavier Mean More Expensive?",
    content: [
      { type: "paragraph", text: "Not universally." },
      { type: "paragraph", text: "Precious-metal quantity can influence manufacturing cost, but many other factors affect finished jewellery pricing." },
      { type: "paragraph", text: "Those can include gemstone specifications, workmanship, design complexity, production method, brand and market conditions." },
      { type: "paragraph", text: "This article should therefore use weight to explain physical product information, not create a simplistic price formula." }
    ]
  },
  {
    heading: "Exact vs Approximate Jewellery Dimensions",
    content: [
      { type: "paragraph", text: "Not every dimension needs to be presented as though it were measured to laboratory precision." },
      { type: "paragraph", text: "A significant loose diamond can have precise reported millimetre measurements." },
      { type: "paragraph", text: "Finished jewellery may instead have a nominal or approximate dimension because minor manufacturing variations can occur." },
      { type: "paragraph", text: "For example:" },
      { type: "paragraph", text: "Diamond: 9.12 × 6.43 × 3.92 mm" },
      { type: "paragraph", text: "may be an exact laboratory measurement." },
      { type: "paragraph", text: "While:" },
      { type: "paragraph", text: "Pendant height: approximately 15 mm" },
      { type: "paragraph", text: "may be the more appropriate finished-product description." },
      { type: "paragraph", text: "Do not remove “approximately” simply because exact-looking numbers appear more sophisticated." }
    ]
  },
  {
    heading: "Why False Precision Can Be Misleading",
    content: [
      { type: "paragraph", text: "Imagine a product listing says:" },
      { type: "paragraph", text: "Earring Height: 12.437 mm" },
      { type: "paragraph", text: "but the manufacturing tolerance means different finished pieces may vary slightly." },
      { type: "paragraph", text: "That excessive precision creates an impression that every item is identical to a thousandth of a millimetre." },
      { type: "paragraph", text: "A more truthful description may simply be:" },
      { type: "paragraph", text: "approximately 12.4 mm" },
      { type: "paragraph", text: "or:" },
      { type: "paragraph", text: "approximately 12 mm," },
      { type: "paragraph", text: "depending on the available production data." },
      { type: "paragraph", text: "The right precision is the precision the underlying information genuinely supports." }
    ]
  },
  {
    heading: "Measured, Nominal and Approximate Dimensions",
    content: [
      { type: "paragraph", text: "When comparing products, try to understand where the dimensions came from." },
      { type: "paragraph", text: "A diamond laboratory report may contain directly measured gemstone dimensions." },
      { type: "paragraph", text: "A finished jewellery specification may come from manufacturing data." },
      { type: "paragraph", text: "A retailer may also provide nominal dimensions for a design manufactured repeatedly." },
      { type: "paragraph", text: "All can be useful." },
      { type: "paragraph", text: "They should simply not be presented as the same kind of measurement when they are not." }
    ]
  },
  {
    heading: "Mounted Diamonds Can Be Harder to Measure Precisely",
    content: [
      { type: "paragraph", text: "A setting can obstruct portions of a diamond." },
      { type: "paragraph", text: "That can limit what can be directly measured or graded once the stone is mounted." },
      { type: "paragraph", text: "IGI specifically states that its finished-jewellery reporting evaluates mounted centre stones as the mounting permits. When grading is constrained by the setting, certain characteristics may be reported conservatively as ranges or estimates." },
      { type: "paragraph", text: "That is another reason a mounted estimate should not automatically be compared with a precise loose-stone measurement as though both were obtained under identical conditions." }
    ]
  },
  {
    heading: "How to Use a Ruler to Visualise Jewellery Size",
    content: [
      { type: "paragraph", text: "When an online product lists millimetres, use a physical ruler rather than trying to imagine the number." },
      { type: "paragraph", text: "Ten millimetres equals one centimetre." },
      { type: "paragraph", text: "So an earring measuring 10 mm across is approximately one centimetre across." },
      { type: "paragraph", text: "A pendant measuring 20 mm high is approximately two centimetres high." },
      { type: "paragraph", text: "This simple reference often gives a clearer sense of scale than an enlarged product image." },
      { type: "paragraph", text: "You can also compare those measurements with jewellery you already own." }
    ]
  },
  {
    heading: "Compare New Jewellery With a Piece You Already Wear",
    content: [
      { type: "paragraph", text: "This is one of the most practical ways to understand online measurements." },
      { type: "paragraph", text: "If your existing favourite studs are 6 mm across and the product you are considering is 10 mm, you immediately have a physical reference." },
      { type: "paragraph", text: "If your usual necklace is 18 inches long, you can compare a 16-inch or 20-inch option against something familiar." },
      { type: "paragraph", text: "If your current ring band is 2 mm wide, you can better understand how a 4 mm band will feel visually." },
      { type: "paragraph", text: "Real-world comparison is often more useful than abstract size language." }
    ]
  },
  {
    heading: "Do Not Trust “Small”, “Medium” and “Large” Without Measurements",
    content: [
      { type: "paragraph", text: "These words have no universal jewellery definition." },
      { type: "paragraph", text: "One brand's “small hoop” may be another brand's “medium hoop”." },
      { type: "paragraph", text: "Likewise, “delicate pendant” and “statement pendant” are subjective descriptions." },
      { type: "paragraph", text: "Use the millimetres or centimetres to understand actual scale." },
      { type: "paragraph", text: "Descriptive words can support those measurements." },
      { type: "paragraph", text: "They should not replace them." }
    ]
  },
  {
    heading: "Check Whether Images Are to Scale",
    content: [
      { type: "paragraph", text: "Most ecommerce jewellery photographs should not be assumed to display at true physical size on your screen." },
      { type: "paragraph", text: "Screen dimensions vary enormously." },
      { type: "paragraph", text: "A product shown at 1000 pixels wide might appear several centimetres across on one device and much larger on another." },
      { type: "paragraph", text: "GIA itself warns that online diamond images are for reference and may vary according to screen size." },
      { type: "paragraph", text: "Use specifications for physical scale." }
    ]
  },
  {
    heading: "Can 360-Degree Views Help With Dimensions?",
    content: [
      { type: "paragraph", text: "They can help you understand relative proportions." },
      { type: "paragraph", text: "For example, a rotating ring view can show whether the setting appears high or low relative to the band." },
      { type: "paragraph", text: "It can show earring depth or pendant profile." },
      { type: "paragraph", text: "But it still cannot give you an exact millimetre value unless the product supplies one." },
      {
        type: "paragraph",
        parts: [
          { text: "For the broader remote-inspection process, read " },
          { text: "How to Choose Diamond Jewellery Without Seeing It in Person", href: "/blog/choose-diamond-jewellery-without-seeing-in-person/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Practical Example: Reading a Ring Listing",
    content: [
      { type: "paragraph", text: "Imagine a product listing contains:" },
      {
        type: "bullet-list",
        items: [
          "Centre diamond: 1.25 ct oval",
          "Diamond measurements: 8.5 × 6.2 mm",
          "Band width: approximately 1.8 mm",
          "Setting height: approximately 6.5 mm"
        ]
      },
      { type: "paragraph", text: "Those four lines answer four separate questions." },
      { type: "paragraph", text: "The carat tells you diamond weight." },
      { type: "paragraph", text: "The diamond measurements communicate its physical face-up dimensions." },
      { type: "paragraph", text: "The band width gives the ring's visual scale across the finger." },
      { type: "paragraph", text: "The setting height helps communicate its side profile." },
      { type: "paragraph", text: "That is far more useful than simply describing the ring as:" },
      { type: "paragraph", text: "“1.25 carat elegant oval ring.”" }
    ]
  },
  {
    heading: "Practical Example: Reading Stud-Earring Dimensions",
    content: [
      { type: "paragraph", text: "Imagine:" },
      {
        type: "bullet-list",
        items: [
          "Total Diamond Weight: approximately 1.00 ct per pair",
          "Approximate Diamond Weight: 0.50 ct each",
          "Diamond Diameter: approximately 5.1 mm each",
          "Overall Setting Diameter: approximately 5.5 mm"
        ]
      },
      { type: "paragraph", text: "Now the shopper understands both weight distribution and physical size." },
      { type: "paragraph", text: "Simply writing:" },
      { type: "paragraph", text: "1 ct diamond earrings" },
      { type: "paragraph", text: "does not provide the same clarity." }
    ]
  },
  {
    heading: "Practical Example: Reading a Pendant Listing",
    content: [
      { type: "paragraph", text: "Imagine:" },
      {
        type: "bullet-list",
        items: [
          "Centre Diamond: 0.50 ct",
          "Diamond Diameter: approximately 5.1 mm",
          "Pendant Diameter: approximately 7 mm",
          "Chain Length: 18 inches"
        ]
      },
      { type: "paragraph", text: "The shopper can now distinguish:" },
      { type: "paragraph", text: "the gemstone," },
      { type: "paragraph", text: "the complete pendant," },
      { type: "paragraph", text: "and:" },
      { type: "paragraph", text: "the chain." },
      { type: "paragraph", text: "Those numbers should not be collapsed into one field." }
    ]
  },
  {
    heading: "Practical Example: Reading a Tennis Bracelet",
    content: [
      { type: "paragraph", text: "Imagine:" },
      {
        type: "bullet-list",
        items: [
          "Total Diamond Weight: approximately 5.00 ct",
          "Bracelet Length: approximately 18 cm",
          "Setting Width: approximately 3 mm",
          "Diamond Count: [verified count if available]"
        ]
      },
      { type: "paragraph", text: "The total weight does not tell you bracelet length." },
      { type: "paragraph", text: "The bracelet length does not tell you individual stone weight." },
      { type: "paragraph", text: "The width does not tell you precious-metal weight." },
      { type: "paragraph", text: "Each specification serves a different purpose." },
      {
        type: "image",
        src: "/images/blog/check-jewellery-product-dimensions-weight/51 (4).jpg",
        alt: "Measuring bracelet inner circumference and tennis link size",
        title: "Bracelet Wearable Length Verification",
        caption: "Confirm the usable inner circumference when fastened, as thick links can reduce fit compared to laying flat."
      }
    ]
  },
  {
    heading: "Does Every Product Need Every Possible Dimension?",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "The relevant measurements depend on the jewellery type." },
      { type: "paragraph", text: "An earring may not need a ring-style setting-height field." },
      { type: "paragraph", text: "A simple chain does not need a centre-diamond diameter field." },
      { type: "paragraph", text: "A solitaire ring needs different information from a tennis bracelet." },
      { type: "paragraph", text: "The correct objective is not:" },
      { type: "paragraph", text: "fill every possible specification field." },
      { type: "paragraph", text: "It is:" },
      { type: "paragraph", text: "provide the measurements that materially help someone understand that particular product." }
    ]
  },
  {
    heading: "Does Every Aurelia Product Page Provide Complete Dimensions?",
    content: [
      { type: "paragraph", text: "This claim should not be published unless it has been verified across the live catalogue." },
      { type: "paragraph", text: "Do not state:" },
      { type: "paragraph", text: "“Every Aurelia Royale product page includes complete jewellery dimensions.”" },
      { type: "paragraph", text: "unless a catalogue audit confirms that statement and a process exists to keep it true for future products." },
      { type: "paragraph", text: "Where dimensions have been verified for an individual product, publish them." },
      { type: "paragraph", text: "Where a particular measurement has not been supplied by the client or product data, do not invent it." },
      { type: "paragraph", text: "A missing dimension can remain unconfirmed until reliable information becomes available." }
    ]
  },
  {
    heading: "What Should You Do If a Product Dimension Is Missing?",
    content: [
      { type: "paragraph", text: "Ask whether the missing dimension affects your decision." },
      { type: "paragraph", text: "If you need to know whether an earring is subtle or substantial, diameter matters." },
      { type: "paragraph", text: "If you want to know whether a ring will sit high on the finger, setting height matters." },
      { type: "paragraph", text: "If necklace placement matters, chain length matters." },
      { type: "paragraph", text: "If a missing measurement is important, request clarification." },
      { type: "paragraph", text: "Do not try to calculate a precise measurement from photographs." }
    ]
  },
  {
    heading: "How Should Approximate Measurements Be Labelled?",
    content: [
      { type: "paragraph", text: "Clearly." },
      { type: "paragraph", text: "Use wording such as:" },
      { type: "paragraph", text: "approximately 10 mm" },
      { type: "paragraph", text: "when the number should not be interpreted as an exact guarantee." },
      { type: "paragraph", text: "This is preferable to inventing false precision." },
      { type: "paragraph", text: "For diamond carat claims in the US, the FTC likewise requires care with precision: decimal representations should be accurate to the stated decimal place, while fractional diamond-weight descriptions require disclosure that the weight is not exact along with an appropriate range or tolerance." },
      { type: "paragraph", text: "The general lesson is the same:" },
      { type: "paragraph", text: "the precision of the claim should match the precision of the evidence." }
    ]
  },
  {
    heading: "How Does UK Hallmarking Relate to Jewellery Weight?",
    content: [
      { type: "paragraph", text: "UK hallmarking has statutory exemption weights for precious-metal articles." },
      { type: "paragraph", text: "Current GOV.UK guidance lists the thresholds as:" },
      { type: "paragraph", text: "gold — 1 gram," },
      { type: "paragraph", text: "silver — 7.78 grams," },
      { type: "paragraph", text: "platinum — 0.5 gram," },
      { type: "paragraph", text: "and palladium — 1 gram." },
      { type: "paragraph", text: "That does not mean product weight and hallmarking are the same concept." },
      { type: "paragraph", text: "The thresholds determine when hallmarking requirements generally apply to qualifying precious-metal articles." },
      { type: "paragraph", text: "A hallmark verifies applicable precious-metal fineness; it does not state diamond carat weight or product dimensions." }
    ]
  },
  {
    heading: "Is Jewellery Gram Weight Needed on Every Product Page?",
    content: [
      { type: "paragraph", text: "Not necessarily." },
      { type: "paragraph", text: "For some buyers and jewellery types, finished-product weight is useful because it gives extra context about how substantial an item may feel." },
      { type: "paragraph", text: "For other products, dimensions and construction may be more relevant." },
      { type: "paragraph", text: "Do not publish a gram weight unless the value is reliable for the actual product." },
      { type: "paragraph", text: "If size variants materially change metal weight, one universal gram figure may itself be misleading unless it is clearly qualified." }
    ]
  },
  {
    heading: "Final Answer: How Should You Check Jewellery Dimensions and Weight Online?",
    content: [
      { type: "paragraph", text: "Do not judge physical jewellery scale from product photography alone." },
      { type: "paragraph", text: "Start with actual dimensions." },
      { type: "paragraph", text: "For a ring, look at band width, setting profile and centre-stone dimensions where relevant." },
      { type: "paragraph", text: "For earrings, check diameter, height or drop." },
      { type: "paragraph", text: "For pendants, separate pendant dimensions from chain length." },
      { type: "paragraph", text: "For necklaces and bracelets, understand overall wearable length." },
      { type: "paragraph", text: "Then separate those measurements from diamond carat." },
      { type: "paragraph", text: "Carat tells you how much the diamond weighs." },
      { type: "paragraph", text: "Millimetres tell you how large the diamond physically measures." },
      { type: "paragraph", text: "Total carat weight tells you how much multiple diamonds weigh together." },
      { type: "paragraph", text: "Finished jewellery weight tells you something different again—the mass of the complete article." },
      { type: "paragraph", text: "These numbers should never be treated as interchangeable." },
      { type: "paragraph", text: "Also pay attention to precision." },
      { type: "paragraph", text: "An exact laboratory-measured diamond dimension can be presented exactly." },
      { type: "paragraph", text: "A jewellery dimension affected by manufacturing tolerance may be more appropriately labelled approximately." },
      { type: "paragraph", text: "A reliable product page does not need to make every number look exact." },
      { type: "paragraph", text: "It needs to tell you clearly what was measured, what the figure applies to and how certain that measurement is." },
      {
        type: "paragraph",
        parts: [
          { text: "For diamond carat itself, continue with " },
          { text: "Lab-Grown Diamond Carat Weight Explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For carat versus visible physical size, read " },
          { text: "Diamond Carat Weight vs Size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For combined diamond weight in multi-stone pieces, use " },
          { text: "Total Carat Weight Meaning in Diamond Jewellery", href: "/blog/total-carat-weight-meaning-diamond-jewellery/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For checking all product specifications before buying, continue with " },
          { text: "What to Check Before Buying Lab-Grown Diamond Jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" },
          { text: "." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "For evaluating jewellery remotely using images, 360-degree views and specifications together, read " },
          { text: "How to Choose Diamond Jewellery Without Seeing It in Person", href: "/blog/choose-diamond-jewellery-without-seeing-in-person/" },
          { text: "." }
        ]
      },
      { type: "paragraph", text: "When viewing an Aurelia Royale product, rely only on dimensions and weights verified for that specific design or SKU. Do not assume a measurement from another variation applies, and do not estimate missing dimensions from enlarged photography." },
      {
        type: "paragraph",
        parts: [
          { text: "Where a design is not currently available through an approved direct-purchase process, " },
          { text: "Join the Waitlist", href: "/contact/" },
          { text: " or submit an enquiry to register your interest." }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Fit with Aurelia",
        subtitle: "Explore our collection of lab-grown diamond jewellery with transparent dimensions and weights.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  },
  {
    content: [
      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          { question: "What do jewellery dimensions mean?", answer: "They describe the physical size of a jewellery item or one of its components, usually using millimetres, centimetres or inches." },
          { question: "Is diamond carat a measurement of size?", answer: "No. Carat measures weight. GIA defines one metric carat as 200 milligrams." },
          { question: "Is one carat always the same diameter?", answer: "No. Shape and proportions influence physical dimensions." },
          { question: "How are round diamonds measured?", answer: "GIA reports round-diamond dimensions using minimum diameter, maximum diameter and depth." },
          { question: "How are oval or other fancy-shaped diamonds measured?", answer: "Fancy-shaped diamond measurements are typically expressed as length × width × depth." },
          { question: "Is total carat weight the same as centre-stone weight?", answer: "No. Total carat weight can combine the weight of multiple diamonds." },
          { question: "Is jewellery weight the same as diamond carat weight?", answer: "No. Finished jewellery weight may be expressed in grams and includes the metal and other components, while diamond carat measures gemstone mass." },
          { question: "What ring measurements should I check online?", answer: "Useful measurements can include band width, setting height and centre-stone dimensions, depending on the design." },
          { question: "What earring measurements matter?", answer: "Diameter, width, overall height or drop length can be useful depending on the earring style." },
          { question: "What should I check for hoop earrings?", answer: "Check the diameter and, where relevant, the hoop width or thickness." },
          { question: "What should I check for a pendant?", answer: "Look at the pendant's width and height separately from the chain length." },
          { question: "What should I check for a necklace?", answer: "Overall necklace or chain length is fundamental; pendant or individual stone dimensions may also matter." },
          { question: "What should I check for a bracelet?", answer: "Look at wearable length and, where relevant, width or internal bangle dimensions." },
          { question: "Can product photos tell me actual jewellery size?", answer: "Not reliably. Jewellery is often photographed under magnification, and display size varies between screens." },
          { question: "Are 360-degree images useful for size?", answer: "They help with relative proportions and profile but do not replace actual measurements." },
          { question: "What does “approximately 10 mm” mean?", answer: "It means 10 mm is being provided as an approximate rather than exact measurement." },
          { question: "Are approximate dimensions bad?", answer: "No. They can be the most accurate way to describe products with legitimate manufacturing variation." },
          { question: "Should every measurement use several decimal places?", answer: "No. The stated precision should reflect the accuracy of the underlying measurement." },
          { question: "Can a mounted diamond be measured?", answer: "Yes, but access can be limited by the setting. IGI notes that mounted jewellery is assessed as the mounting permits." },
          { question: "Does heavier jewellery mean better quality?", answer: "No. Weight alone does not establish craftsmanship, durability or overall quality." },
          { question: "Does a UK hallmark show jewellery weight?", answer: "No. Hallmarking primarily verifies precious-metal fineness; statutory weight thresholds determine when hallmarking requirements apply." },
          { question: "Should every Aurelia product have dimensions?", answer: "Useful product-specific dimensions should be published where verified, but Aurelia should not claim every current product page already has complete measurements unless a catalogue audit confirms that." },
          { question: "What if an Aurelia measurement is unavailable?", answer: "Leave it unconfirmed rather than estimating a precise value from imagery." },
          { question: "What is the most important rule when reading jewellery dimensions online?", answer: "Identify exactly what each number measures before using it to judge the size of the product." }
        ]
      }
    ]
  }
];

export default function Page() {
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
            How to Check Jewellery Dimensions and Weight Online
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="check-jewellery-product-dimensions-weight" />
      <NewsletterSection />
    </main>
  );
}
