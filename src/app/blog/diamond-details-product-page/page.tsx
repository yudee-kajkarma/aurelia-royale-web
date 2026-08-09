import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadataEn: Metadata = {
  title: "Diamond Details Product Page",
  description: "Diamond Details Product Page",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-details-product-page/",
  },
};

export const metadataEs: Metadata = {
  title: "Página de producto de detalles de diamantes",
  description: "Página de producto de detalles de diamantes - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/diamond-details-product-page/",
  },
};

export const metadataFr: Metadata = {
  title: "Page produit Détails du diamant",
  description: "Page produit Détails du diamant - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/diamond-details-product-page/",
  },
};

export const metadataNl: Metadata = {
  title: "Productpagina met diamantdetails",
  description: "Productpagina met diamantdetails - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/diamond-details-product-page/",
  },
};



export const metadataDe: Metadata = {
  title: "Diamantdetails-Produktseite",
  description: "Diamantdetails-Produktseite - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/diamond-details-product-page/",
  },
};


export const metadataIt: Metadata = {
  title: "Dettagli del diamante sulla pagina del prodotto: cosa leggere",
  description: "Scopri come decifrare la scheda delle specifiche su un sito web di gioielli. Identifica facilmente il grado di taglio, il colore, la purezza e l'origine del diamante. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/diamond-details-product-page/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;

  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};




// 2. The exact JSON-LD Schema
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
      "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/diamond-product-page-details.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/diamond-product-page-details.webp",
      "width": 1600,
      "height": 900,
      "caption": "Diamond details that should be provided on a jewellery product page"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#webpage",
      "url": "https://www.aureliaroyale.com/blog/diamond-details-product-page/",
      "name": "Which Diamond Details Should Be Provided on a Product Page?",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#primaryimage" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#article",
      "headline": "Which Diamond Details Should Be Provided on a Product Page?",
      "description": "Learn which diamond, metal, certification, sizing, price, delivery and return details a trustworthy jewellery product page should clearly disclose.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "diamond product page details",
        "diamond jewellery product specifications",
        "lab-grown diamond product details",
        "diamond jewellery information online",
        "diamond product page checklist"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "Diamond Product Page Details", "item": "https://www.aureliaroyale.com/blog/diamond-details-product-page/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-details-product-page/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most important diamond detail on a product page?",
          "acceptedAnswer": { "@type": "Answer", "text": "Origin is fundamental. The page should clearly state whether the diamond is laboratory-grown or natural, then provide weight, shape, quality and certification information appropriate to the item." }
        },
        {
          "@type": "Question",
          "name": "Should a product page show the diamond certificate number?",
          "acceptedAnswer": { "@type": "Answer", "text": "For an individually certified diamond, a report number or secure verification route is valuable. The seller should also state which physical diamond the report covers." }
        },
        {
          "@type": "Question",
          "name": "Does every lab-grown diamond jewellery piece need a certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Small accent diamonds and multi-stone finished jewellery are not always individually graded. The page should state what is and is not certified and what documentation is supplied." }
        },
        {
          "@type": "Question",
          "name": "Should carat weight be listed per diamond or as a total?",
          "acceptedAnswer": { "@type": "Answer", "text": "It may be either, but the label must be explicit. Earrings should clarify per-stone, per-earring and pair-total figures where confusion is possible." }
        },
        {
          "@type": "Question",
          "name": "Are colour and clarity ranges acceptable?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, particularly for small accent diamonds or made-to-order jewellery, provided the range is accurate and clearly distinguished from an exact grade for an individual stone." }
        },
        {
          "@type": "Question",
          "name": "Should a jewellery product page list metal weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is useful for understanding substance and comparison, but hand finishing and size can cause variation. If listed, it should be identified as approximate finished-product weight." }
        },
        {
          "@type": "Question",
          "name": "Is a hallmark the same as a diamond certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. A hallmark relates to precious-metal fineness under the applicable system. A diamond grading report records specified characteristics of the examined diamond." }
        },
        {
          "@type": "Question",
          "name": "Should product photographs show the exact diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "For unique selectable diamonds, actual-stone imagery is preferable. When stock or representative imagery is used, the page should disclose this and identify the variant shown." }
        },
        {
          "@type": "Question",
          "name": "What dimensions should be listed for diamond earrings?",
          "acceptedAnswer": { "@type": "Answer", "text": "Useful details include face-up width and height, drop length, fastening type and whether the measurements or weight apply to each earring or the pair." }
        },
        {
          "@type": "Question",
          "name": "What does certified diamond jewellery mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "The phrase is incomplete on its own. The page should identify the document, issuer and whether it covers one diamond, multiple stones or another aspect of the finished item." }
        },
        {
          "@type": "Question",
          "name": "Should VAT and delivery costs appear on the product page?",
          "acceptedAnswer": { "@type": "Answer", "text": "The customer should be able to understand the total price, applicable taxes and unavoidable additional charges before placing the order. Presentation requirements depend on the market." }
        },
        {
          "@type": "Question",
          "name": "What should I do if important product details are missing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ask the retailer for written clarification before purchasing. If origin, weight, metal, certification scope, total price or return conditions remain vague, consider another product or seller." }
        }
      ]
    }
  ]
};

// 3. Article content sections structured for DynamicArticle
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-details-product-page/1.jpg",
        alt: "Important details to look for on a jewellery product page",
        title: "Which Diamond Details Should Be Provided?",
        caption: "A trustworthy product page clearly describes the gemstone specifications, metal hallmark details, and transaction terms.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A diamond jewellery product page should do more than create desire. It should identify what is being sold, explain the materials and stones, show how the piece will fit, disclose whether certification applies and make the total buying conditions understandable before checkout."
      },
      {
        type: "paragraph",
        text: "That standard matters even more online. A customer cannot hold the piece, inspect the setting or compare its scale in person. The product page therefore has to perform three jobs: describe the diamond, describe the finished jewellery and explain the transaction."
      },
      {
        type: "paragraph",
        text: "A page can contain elegant prose and still be incomplete. Phrases such as “premium lab-grown diamonds”, “fine gold” or “certified jewellery” are not substitutes for origin, weight, quality range, metal fineness, dimensions and the exact scope of certification."
      }
    ]
  },
  {
    heading: "Quick answer: what diamond details should a product page include?",
    content: [
      {
        type: "paragraph",
        text: "At minimum, a strong diamond jewellery listing should disclose:"
      },
      {
        type: "numbered-list",
        items: [
          "whether the diamonds are laboratory-grown or natural;",
          "diamond shape and cutting style;",
          "individual or total carat weight, clearly labelled;",
          "colour and clarity grades or honest quality ranges;",
          "stone count and the role of centre and accent stones;",
          "certification details and exactly which stone is covered;",
          "precious-metal type, colour and fineness;",
          "item dimensions, size, fit and approximate finished weight where useful;",
          "setting, fastening or construction details;",
          "accurate photographs, scale views and variant identification;",
          "total price, taxes and unavoidable charges as applicable; and",
          "availability, production time, delivery, returns, warranty and included documents."
        ]
      },
      {
        type: "paragraph",
        text: "Not every piece needs an individual grading report. However, every product page should make the absence, presence and scope of certification understandable rather than leaving the buyer to assume."
      }
    ]
  },
  {
    heading: "Product-page information has three layers",
    content: [
      {
        type: "paragraph",
        text: "The easiest way to audit a listing is to separate its information into three layers."
      },
      {
        type: "table",
        headers: ["Layer", "What it should explain", "Why it matters"],
        rows: [
          ["The diamonds", "Origin, shape, weight, quality and certification", "Establishes what stones the customer is buying"],
          ["The jewellery", "Metal, dimensions, setting, size and construction", "Explains the complete physical product"],
          ["The purchase", "Price, availability, delivery, returns and warranty", "Explains what happens before and after payment"]
        ]
      },
      {
        type: "paragraph",
        text: "If any layer is weak, the page may not support an informed comparison. A complete grading report cannot tell a shopper the bracelet length. Equally, a detailed size guide cannot compensate for an undisclosed diamond origin."
      }
    ]
  },
  {
    heading: "1. Diamond origin must be explicit",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "The page should use a clear qualifier such as " },
          { text: "laboratory-grown diamond", bold: true },
          { text: " or " },
          { text: "lab-grown diamond", bold: true },
          { text: " wherever origin could otherwise be misunderstood. The disclosure should be prominent in the product title, principal description or specification area—not hidden only in an FAQ or policy page." }
        ]
      },
      {
        type: "paragraph",
        text: "Avoid relying on branded collection names that do not explain the material. A first-time visitor should not need to know what a proprietary term means before understanding whether the diamond was grown in a laboratory or formed naturally."
      },
      {
        type: "paragraph",
        text: "If a piece combines different materials, disclose each one separately. For example, do not let “lab-grown diamond earrings” imply that a coloured centre stone is also a diamond. Identify the centre stone, diamond accents and any other gem materials accurately."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: " for the terminology principles behind this requirement." }
        ]
      }
    ]
  },
  {
    heading: "2. Shape and outline should be named",
    content: [
      {
        type: "paragraph",
        text: "“Diamond earrings” does not tell the buyer whether the stones are round brilliant, oval brilliant, emerald cut or a mixture of shapes. Shape affects appearance, coverage, light pattern and design."
      },
      {
        type: "paragraph",
        text: "The product page should identify:"
      },
      {
        type: "bullet-list",
        items: [
          "the principal diamond shape;",
          "the shapes of meaningful accent stones;",
          "whether the shape shown changes with a selected variant; and",
          "the cutting style when it adds useful information."
        ]
      },
      {
        type: "paragraph",
        text: "For multi-stone pieces, a concise line such as “round brilliant laboratory-grown diamonds” may be sufficient. For a centre-stone ring, more detailed measurements and proportions may be appropriate."
      }
    ]
  },
  {
    heading: "3. Carat weight must be labelled precisely",
    content: [
      {
        type: "paragraph",
        text: "Carat measures diamond weight, not the physical weight of the jewellery. A product page should never leave the buyer guessing whether a number refers to one diamond or all diamonds combined."
      },
      {
        type: "paragraph",
        text: "Use unambiguous labels:"
      },
      {
        type: "bullet-list",
        items: [
          "Centre-diamond carat weight: the weight of the main diamond.",
          "Accent-diamond total weight: the combined weight of the smaller diamonds.",
          "Total diamond carat weight: the combined weight of all diamonds in the piece.",
          "Each earring: where a pair contains two principal stones.",
          "Pair total: the combined diamond weight of both earrings."
        ],
        itemsParts: [
          [
            { text: "Centre-diamond carat weight: ", bold: true },
            { text: "the weight of the main diamond." }
          ],
          [
            { text: "Accent-diamond total weight: ", bold: true },
            { text: "the combined weight of the smaller diamonds." }
          ],
          [
            { text: "Total diamond carat weight: ", bold: true },
            { text: "the combined weight of all diamonds in the piece." }
          ],
          [
            { text: "Each earring: ", bold: true },
            { text: "where a pair contains two principal stones." }
          ],
          [
            { text: "Pair total: ", bold: true },
            { text: "the combined diamond weight of both earrings." }
          ]
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "If the final weight can vary slightly because a piece is made to order or contains many small stones, state the tolerance or use “approximately”. Do not present a nominal weight as if every finished piece is identical. The distinction is explained fully in " },
          { text: "what total carat weight means in diamond jewellery", href: "/blog/total-carat-weight-diamond-jewellery/" },
          { text: " and " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-diamond-size/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "4. Colour and clarity need scope, not just impressive grades",
    content: [
      {
        type: "paragraph",
        text: "If colour and clarity are listed, the page should explain which diamonds those grades cover. A centre stone might have an individual grade while small accent stones are supplied within a stated quality range."
      },
      {
        type: "paragraph",
        text: "A clear specification might say:"
      },
      {
        type: "paragraph",
        text: "“Principal diamond: F colour, VS1 clarity, according to the accompanying report. Accent diamonds: approximately G–H colour and VS–SI clarity.”"
      },
      {
        type: "paragraph",
        text: "This is more meaningful than placing “F/VS1” beside the entire piece if only the centre stone was graded individually."
      },
      {
        type: "paragraph",
        parts: [
          { text: "For stock images, made-to-order pieces or products fulfilled with an equivalent diamond, the page should explain whether the stated grades are exact, minimum specifications or ranges. The buyer should also know whether the photograph shows the actual stone or a representative example. For context, see " },
          { text: "diamond colour grades explained", href: "/blog/lab-grown-diamond-colour-grades-explained/" },
          { text: " and " },
          { text: "diamond clarity grades explained", href: "/blog/lab-grown-diamond-clarity-grades-explained/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "5. Cut information should match the diamond and report",
    content: [
      {
        type: "paragraph",
        text: "The word “cut” is often used loosely for shape, craftsmanship and laboratory cut grade. A product page should not confuse these meanings."
      },
      {
        type: "paragraph",
        text: "Where a recognised laboratory provides an overall cut result, reproduce it accurately and identify the report. For diamonds or shapes that do not receive that laboratory’s overall cut grade, do not invent an equivalent. Provide relevant information such as polish, symmetry, dimensions and actual imagery when available."
      },
      {
        type: "paragraph",
        parts: [
          { text: "For an individually selectable centre diamond, useful fields may include table, depth, girdle, culet and other proportions. See " },
          { text: "diamond cut explained", href: "/blog/lab-grown-diamond-cut-explained/" },
          { text: " for the distinction between shape, proportions and visible performance." }
        ]
      }
    ]
  },
  {
    heading: "6. Stone count and design roles should be understandable",
    content: [
      {
        type: "paragraph",
        text: "Stone count helps buyers interpret total carat weight and compare designs. It is especially valuable for tennis bracelets, eternity rings, cluster earrings, halos and jewellery sets."
      },
      {
        type: "paragraph",
        text: "The page should separate:"
      },
      {
        type: "bullet-list",
        items: [
          "principal or centre diamonds;",
          "side diamonds;",
          "halo or pavé diamonds;",
          "diamond accents; and",
          "coloured centre or accent stones."
        ]
      },
      {
        type: "paragraph",
        text: "When exact stone count varies by ring size, bracelet length or production requirements, explain that variation. An eternity ring in a larger size may require more stones without changing the advertised style."
      }
    ]
  },
  {
    heading: "7. Certification must be explained accurately",
    content: [
      {
        type: "paragraph",
        text: "“Certified” is incomplete unless the page answers four questions: Which laboratory issued the document? What is the exact document type? Which diamond does it cover? Can the buyer verify the report number?"
      },
      {
        type: "paragraph",
        text: "An individual diamond grading report generally covers the submitted loose diamond, not the craftsmanship, precious metal or value of the entire finished piece. A jewellery document, appraisal, authenticity card and grading report are not interchangeable."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Never imply that the complete item is laboratory graded when only one diamond was examined. Use " },
          { text: "what an IGI certificate for a lab-grown diamond is", href: "/blog/igi-certificate-for-lab-grown-diamond/" },
          { text: ", " },
          { text: "diamond certification versus jewellery certification", href: "/blog/diamond-certification-vs-jewellery-certification/" },
          { text: " and " },
          { text: "how to verify an IGI certificate number", href: "/blog/how-to-verify-an-igi-certificate-number/" },
          { text: " to check the scope." }
        ]
      }
    ]
  },
  {
    heading: "8. Growth method and treatment should not be guessed",
    content: [
      {
        type: "paragraph",
        text: "Where the grading document identifies CVD or HPHT growth and states whether post-growth treatment was detected, the product page may reproduce that information exactly. If the report type does not provide it, the retailer should not infer it from appearance or fill the gap with assumptions."
      },
      {
        type: "paragraph",
        parts: [
          { text: "The commercially useful standard is accurate disclosure, not the claim that one growth method is automatically superior. CVD and HPHT diamonds can both vary in quality. Read " },
          { text: "CVD versus HPHT lab-grown diamonds", href: "/blog/cvd-vs-hpht-lab-grown-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "9. Precious-metal specifications belong beside diamond details",
    content: [
      {
        type: "paragraph",
        text: "A buyer is purchasing jewellery, not only stones. The product page should name the metal (gold/platinum), fineness (18ct gold/950 platinum), metal colour, plating or coating, and hallmark details."
      },
      {
        type: "paragraph",
        text: "“White metal”, “gold finish” or “premium metal” is not sufficiently precise for fine jewellery. If rhodium plating is used, aftercare information can explain that its appearance may require maintenance over time."
      },
      {
        type: "paragraph",
        text: "The page should also avoid confusing a grading report with a hallmark. One describes specified gem characteristics; the other relates to precious-metal fineness under the relevant hallmarking system."
      }
    ]
  },
  {
    heading: "10. Dimensions and fit make the listing usable",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-details-product-page/2.jpg",
        alt: "Visualizing earring and ring dimensions for size and scale",
        title: "Dimensions and Fit Guide",
        caption: "Providing accurate physical dimensions in millimetres ensures the buyer understands scale, drop length, and wearability."
      },
      {
        type: "paragraph",
        text: "Carat weight cannot tell a shopper how an earring sits, how far a pendant drops or whether a bracelet fits comfortably. List the measurements that affect use."
      },
      {
        type: "table",
        headers: ["Product", "Useful measurements"],
        rows: [
          ["Earrings", "Face-up width and height, drop length, post or fastening type, pair weight where helpful"],
          ["Necklace", "Chain length, extension range, pendant width and height, clasp type"],
          ["Bracelet", "Wearable length, width, clasp type and available sizing"],
          ["Ring", "Available sizes, band width, setting height and resizing limitations"],
          ["Jewellery set", "Separate dimensions for every included item"]
        ]
      },
      {
        type: "paragraph",
        text: "Use millimetres and centimetres for European audiences, with inches as a secondary conversion only if useful. Finished jewellery weight can also help buyers understand substance and comfort, but it should be labelled separately from diamond carat weight."
      }
    ]
  },
  {
    heading: "11. Setting and fastening details affect everyday use",
    content: [
      {
        type: "paragraph",
        text: "The design name alone does not explain construction. Disclose prong/bezel styles, number of prongs, earring backs, necklace clasps, chain types, adjustable parts, and whether settings can be resized."
      },
      {
        type: "paragraph",
        text: "These details help shoppers evaluate security, comfort, maintenance and compatibility with their lifestyle. They also reduce avoidable returns caused by assumptions."
      }
    ]
  },
  {
    heading: "12. Images must represent the selected product honestly",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-details-product-page/3.jpg",
        alt: "Using honest, high-fidelity jewelry photography and variant views",
        title: "Truthful Product Imagery",
        caption: "An honest gallery displays multiple angles, variant options, and scale views without misleading edits."
      },
      {
        type: "paragraph",
        text: "Strong imagery is product information, not decoration. A useful gallery should include front/side/back views, setting close-ups, scale or on-body views, 360-degree videos, and exact metal variant images."
      },
      {
        type: "paragraph",
        text: "Magnification should not be allowed to create a false impression of real-life size. If diamonds are enlarged in a technical image, add dimensions or a scale reference. Avoid editing that removes inclusions from an actual-stone video or changes the apparent metal and gemstone colour."
      }
    ]
  },
  {
    heading: "13. Price and availability should be clear before checkout",
    content: [
      {
        type: "paragraph",
        text: "The displayed price should correspond to the selected size, metal, diamond option and currency. Explain whether VAT or other applicable taxes are included and identify unavoidable delivery or production charges before checkout."
      },
      {
        type: "paragraph",
        text: "Availability should use precise language: in stock and ready to dispatch, made to order, available for pre-order, estimated production time, or one of a kind. Do not combine production and shipping into an unexplained promise."
      }
    ]
  },
  {
    heading: "14. Delivery, returns and warranty information must be easy to reach",
    content: [
      {
        type: "paragraph",
        text: "The page can summarise these terms and link to the full policies. Before payment, a buyer should be able to find dispatch estimates, delivery regions, insured-shipping details, customs responsibilities, cancellation and return periods, packaging requirements, exclusions, and warranty routes."
      },
      {
        type: "paragraph",
        text: "EU and UK distance-selling rules require traders to provide specified pre-contract information. The precise rights and exceptions depend on the buyer’s location and the nature of the order, so the product page and policies should be reviewed by qualified counsel rather than relying on a generic template."
      }
    ]
  },
  {
    heading: "Exact specification, range or representative example?",
    content: [
      {
        type: "paragraph",
        text: "One of the most important labels on a jewellery page is often overlooked. Every specification should fall into one of these categories:"
      },
      {
        type: "table",
        headers: ["Information type", "Appropriate use", "Example"],
        rows: [
          ["Exact", "A unique, individually identified item", "“1.02 ct, F colour, VS1 clarity”"],
          ["Minimum", "Fulfilment guarantees at least this level", "“Clarity: VS or better”"],
          ["Range", "Small stones or production variations", "“Accent diamonds: G–H colour”"],
          ["Approximate", "Hand-finished dimensions or total weights", "“Approx. 0.50 ct total diamond weight”"],
          ["Representative", "Photography or specifications show a model example", "“Image shows the 1.00 ct option”"]
        ]
      },
      {
        type: "paragraph",
        text: "Do not mix these categories silently. If a listing shows an exact grading report but fulfilment may use a different equivalent diamond, say so before purchase and provide the final report for approval."
      }
    ]
  },
  {
    heading: "What should appear above the fold?",
    content: [
      {
        type: "paragraph",
        text: "Not every technical field must sit beside the product title, but the first screen should answer the questions most likely to change a purchase decision: product name, lab-grown origin, selected metal, price, principal carat weight, size, availability, and clear links to specifications, delivery and returns."
      },
      {
        type: "paragraph",
        text: "The remaining details can sit in well-labelled accordions or tabs. Important information should not be hidden in an unrelated footer policy or accessible only after adding the item to the basket."
      }
    ]
  },
  {
    heading: "Product-page specification template",
    content: [
      {
        type: "image",
        src: "/images/blog/diamond-details-product-page/4.jpg",
        alt: "Clean specifications template for jewelry product page",
        title: "Specifications Structure Template",
        caption: "A structured grid layout cleanly presents gemological parameters, certification details, and metal specifications."
      },
      {
        type: "paragraph",
        text: "Retailers can use this structure as a practical starting point:"
      },
      {
        type: "table",
        headers: ["Section", "Fields"],
        rows: [
          ["Diamond", "Origin, shape, stone count, centre weight, accent weight, total weight, colour, clarity, cut information"],
          ["Certification", "Laboratory, document type, report number, coverage, inscription, verification route"],
          ["Gemstones", "Identity, origin where known, treatment disclosure, dimensions or weight, role in design"],
          ["Metal", "Type, fineness, colour, plating or coating, hallmark information"],
          ["Dimensions", "Item-specific measurements, available sizes, finished weight, tolerances"],
          ["Construction", "Setting, clasp, backs, chain, adjustable or removable parts"],
          ["Visuals", "Actual or representative, variant shown, scale view, video"],
          ["Fulfilment", "In stock or made to order, production time, dispatch estimate, included packaging and documents"],
          ["Purchase terms", "Total price, taxes, delivery, returns, warranty and aftercare"]
        ]
      },
      {
        type: "paragraph",
        text: "This is a framework, not a reason to publish data the seller has not verified. Unknown information should be investigated or described honestly, not completed with generic copy."
      }
    ]
  },
  {
    heading: "Red flags on a diamond jewellery product page",
    content: [
      {
        type: "paragraph",
        text: "Pause before purchasing when a listing:"
      },
      {
        type: "bullet-list",
        items: [
          "uses “diamond” without clearly disclosing laboratory-grown or natural origin;",
          "gives a carat number without saying whether it is per stone or total;",
          "says “certified” but does not identify the document or its scope;",
          "applies one centre-stone grade to every diamond without explanation;",
          "calls gold-plated material solid gold;",
          "omits metal fineness;",
          "uses only highly magnified images with no scale view;",
          "shows one variant while silently delivering another;",
          "hides production time until after payment;",
          "provides no accessible return or company information; or",
          "makes technical, ethical or value claims without support."
        ],
        itemsParts: [
          [
            { text: "uses “diamond” without clearly disclosing: ", bold: true },
            { text: "laboratory-grown or natural origin." }
          ],
          [
            { text: "gives a carat number without saying: ", bold: true },
            { text: "whether it is per stone or total." }
          ],
          [
            { text: "says “certified” but: ", bold: true },
            { text: "does not identify the document or its scope." }
          ],
          [
            { text: "applies one centre-stone grade: ", bold: true },
            { text: "to every diamond without explanation." }
          ],
          [
            { text: "calls gold-plated material: ", bold: true },
            { text: "solid gold." }
          ],
          [
            { text: "omits: ", bold: true },
            { text: "metal fineness." }
          ],
          [
            { text: "uses only highly magnified images: ", bold: true },
            { text: "with no scale view." }
          ],
          [
            { text: "shows one variant: ", bold: true },
            { text: "while silently delivering another." }
          ],
          [
            { text: "hides: ", bold: true },
            { text: "production time until after payment." }
          ],
          [
            { text: "provides: ", bold: true },
            { text: "no accessible return or company information; or" }
          ],
          [
            { text: "makes: ", bold: true },
            { text: "technical, ethical or value claims without support." }
          ]
        ]
      },
      {
        type: "paragraph",
        text: "One missing minor measurement does not automatically make a seller untrustworthy. A pattern of vague origin, weight, certification, price and returns is much more concerning."
      }
    ]
  },
  {
    heading: "Questions to ask when information is missing",
    content: [
      {
        type: "numbered-list",
        items: [
          "Is the stated carat weight for the centre diamond, each item or the complete piece?",
          "Are the colour and clarity exact grades, minimums or ranges?",
          "Does the grading report cover one diamond or the entire jewellery item?",
          "Will I receive the exact diamond and report shown?",
          "What are the item’s dimensions and finished weight?",
          "What is the precious-metal fineness and hallmark status?",
          "Is the item in stock or made to order?",
          "Which image shows my selected size and metal colour?",
          "What arrives with the jewellery?",
          "Do custom sizing or engraving choices affect cancellation and returns?"
        ]
      },
      {
        type: "paragraph",
        text: "Keep material answers in writing and compare them with the final order confirmation."
      }
    ]
  },
  {
    heading: "Aurelia Royale’s product-information standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "For Aurelia Royale, the strongest product pages should combine restrained luxury presentation with precise disclosure. The emotional description can explain design inspiration and wearability, while a structured specification area records facts consistently." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "The ideal page should allow a European or UK shopper to understand the product without contacting support for basic information. Support should add personal guidance—not supply details that should already have been disclosed. Buyers can then explore " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " for product-specific guidance." }
        ]
      },
      {
        type: "paragraph",
        text: "Before publication, every specification should be traceable to a supplier record, production sheet, verified grading report or measured finished sample. Consistent field names across earrings, necklaces, bracelets, rings and sets will improve comparison, site search, structured data and customer trust."
      }
    ]
  },
  {
    heading: "Final checklist for shoppers",
    content: [
      {
        type: "bullet-list",
        items: [
          "Is diamond origin explicit?",
          "Are shape, stone count and carat-weight scope clear?",
          "Are colour and clarity described honestly?",
          "Is certification explained without overstating its scope?",
          "Are the metal and fineness identified?",
          "Can I understand the item’s real dimensions and fit?",
          "Do images match the selected variant and show scale?",
          "Is the displayed price understandable?",
          "Are production and delivery times separate and clear?",
          "Can I find the return, warranty and contact information?",
          "Do I know which documents and packaging will arrive?"
        ]
      },
      {
        type: "paragraph",
        text: "If several answers are no, request the missing information before paying."
      }
    ]
  },
  {
    content: [
      {
        type: "callout",
        title: "Final verdict",
        theme: "gold-border",
        parts: [
          {
            text: "A trustworthy diamond jewellery product page replaces assumption with verifiable detail. It clearly identifies the diamonds, accurately describes the finished piece and explains the purchase conditions. The 4Cs are only one part of that standard.\n\n"
          },
          {
            text: "The best listing is not necessarily the longest. It is the one that gives the right information, labels exact figures and ranges correctly, connects certification to the correct diamond and lets the buyer understand what will arrive."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is the most important diamond detail on a product page?",
            answer: "Origin is fundamental. The page should clearly state whether the diamond is laboratory-grown or natural, then provide weight, shape, quality and certification information appropriate to the item."
          },
          {
            question: "Should a product page show the diamond certificate number?",
            answer: "For an individually certified diamond, a report number or secure verification route is valuable. The seller should also state which physical diamond the report covers."
          },
          {
            question: "Does every lab-grown diamond jewellery piece need a certificate?",
            answer: "No. Small accent diamonds and multi-stone finished jewellery are not always individually graded. The page should state what is and is not certified and what documentation is supplied."
          },
          {
            question: "Should carat weight be listed per diamond or as a total?",
            answer: "It may be either, but the label must be explicit. Earrings should clarify per-stone, per-earring and pair-total figures where confusion is possible."
          },
          {
            question: "Are colour and clarity ranges acceptable?",
            answer: "Yes, particularly for small accent diamonds or made-to-order jewellery, provided the range is accurate and clearly distinguished from an exact grade for an individual stone."
          },
          {
            question: "Should a jewellery product page list metal weight?",
            answer: "It is useful for understanding substance and comparison, but hand finishing and size can cause variation. If listed, it should be identified as approximate finished-product weight."
          },
          {
            question: "Is a hallmark the same as a diamond certificate?",
            answer: "No. A hallmark relates to precious-metal fineness under the applicable system. A diamond grading report records specified characteristics of the examined diamond."
          },
          {
            question: "Should product photographs show the exact diamond?",
            answer: "For unique selectable diamonds, actual-stone imagery is preferable. When stock or representative imagery is used, the page should disclose this and identify the variant shown."
          },
          {
            question: "What dimensions should be listed for diamond earrings?",
            answer: "Useful details include face-up width and height, drop length, fastening type and whether the measurements or weight apply to each earring or the pair."
          },
          {
            question: "What does “certified diamond jewellery” mean?",
            answer: "The phrase is incomplete on its own. The page should identify the document, issuer and whether it covers one diamond, multiple stones or another aspect of the finished item."
          },
          {
            question: "Should VAT and delivery costs appear on the product page?",
            answer: "The customer should be able to understand the total price, applicable taxes and unavoidable additional charges before placing the order. Presentation requirements depend on the market."
          },
          {
            question: "What should I do if important product details are missing?",
            answer: "Ask the retailer for written clarification before purchasing. If origin, weight, metal, certification scope, total price or return conditions remain vague, consider another product or seller."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Explore Fully Disclosed Fine Jewellery",
        subtitle: "Complete specifications, independent certification details, and premium metal information are provided on every product page at Aurelia Royale.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("diamond-details-product-page", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;
  const schema = locale === "es" ? schemaMarkup : schemaMarkup;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {/* Script injection for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Certification & Qualité" : locale === "es" ? "Certificación y Calidad del Diamante" : "Certification and Diamond Quality"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {locale === "it" ? "Journal • Pubblicato il 16 luglio 2026" : locale === "de" ? "Journal • Veröffentlicht am 16. Juli 2026" : locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026" : locale === "fr" ? "Journal • Publié le 16. Juli 2026" : locale === "es" ? "Diario • Publicado el 16 de julio de 2026" : "Journal • Published July 16, 2026"}
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={sections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
