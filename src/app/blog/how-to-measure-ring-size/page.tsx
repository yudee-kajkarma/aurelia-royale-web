import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Measure Your Ring Size at Home",
  description: "Learn how to measure your ring size using an existing ring or finger measurement, avoid common errors and compare UK and European sizing safely.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-to-measure-ring-size/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/how-to-measure-ring-size/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/how-to-measure-ring-size/"},
      "headline":"How to Measure Your Ring Size Accurately",
      "description":"Learn how to measure your ring size using an existing ring or finger measurement, avoid common errors and compare UK and European sizing safely.",
      "image":"https://www.aureliaroyale.com/images/blog/how-to-measure-ring-size.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["how to measure ring size","measure ring size at home","ring size guide UK","European ring size guide"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/how-to-measure-ring-size/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How to Measure Your Ring Size","item":"https://www.aureliaroyale.com/blog/how-to-measure-ring-size/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/how-to-measure-ring-size/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What is the most accurate way to measure ring size?","acceptedAnswer":{"@type":"Answer","text":"A professional fitting with ring sizers on the intended finger is the most reliable method."}},
        {"@type":"Question","name":"Can I measure ring size with an existing ring?","acceptedAnswer":{"@type":"Answer","text":"Yes, if it fits the same finger and hand. Measure its inner diameter through the centre and compare with the seller chart."}},
        {"@type":"Question","name":"Can I use string to measure my finger?","acceptedAnswer":{"@type":"Answer","text":"String is only a rough estimate because it can stretch, twist and compress the skin. A ring sizer is better."}},
        {"@type":"Question","name":"Should a ring sizer feel tight?","acceptedAnswer":{"@type":"Answer","text":"It should feel secure at the finger base and pass over the knuckle with gentle resistance, without pain or force."}},
        {"@type":"Question","name":"When is the best time to measure ring size?","acceptedAnswer":{"@type":"Answer","text":"Measure when hands are at a normal, comfortable temperature and repeat at different times and on another day."}},
        {"@type":"Question","name":"Are ring sizes the same on both hands?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. Measure the exact finger on the hand where the ring will be worn."}},
        {"@type":"Question","name":"Does band width affect ring size?","acceptedAnswer":{"@type":"Answer","text":"Yes. Wider bands and stacks often feel tighter, so use guidance specific to the design."}},
        {"@type":"Question","name":"What is the difference between ring diameter and circumference?","acceptedAnswer":{"@type":"Answer","text":"Diameter is the distance across the ring inner opening; circumference is the distance around that opening."}},
        {"@type":"Question","name":"Are UK and European ring sizes the same?","acceptedAnswer":{"@type":"Answer","text":"No. UK sizes commonly use letters, while many European systems use numbers related to circumference in millimetres."}},
        {"@type":"Question","name":"Can I trust an online ring-size conversion chart?","acceptedAnswer":{"@type":"Answer","text":"Use the chart from the exact seller and verify its millimetre measurements because conversions can vary through rounding and tolerances."}},
        {"@type":"Question","name":"Can every ring be resized?","acceptedAnswer":{"@type":"Answer","text":"No. Eternity settings, continuous pave, engraving and complex construction may restrict resizing."}},
        {"@type":"Question","name":"What should I do if I am between two sizes?","acceptedAnswer":{"@type":"Answer","text":"Recheck the measurement and ask the jeweller to consider your knuckle, band width, inner profile and resizing options."}}
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
        src: "/images/blog/how-to-measure-ring-size/73 (1).png",
        alt: "How to measure your ring size accurately - complete guide",
        title: "How to Measure Your Ring Size Accurately",
        caption: "Measure ring size with an existing well-fitting ring or a correctly fitted finger sizer.",
        priority: true
      },
      {
        type: "paragraph",
        text: "The most reliable way to find your ring size is to have the intended finger measured by a jeweller using professional ring sizers. If that is not possible, measure either the inner diameter of a well-fitting ring or the circumference of the intended finger—and repeat the result before ordering."
      },
      {
        type: "paragraph",
        text: "Ring size is not just a number or letter. The finger, knuckle, band width, measuring method and sizing system must all match the ring you plan to buy."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "If you already own a ring that fits:"
      },
      {
        type: "numbered-list",
        items: [
          "Choose a circular ring worn comfortably on the same finger and hand.",
          "Measure its inside diameter across the centre in millimetres.",
          "Do not include the metal edges.",
          "Repeat in several directions and compare with the seller's exact chart."
        ]
      },
      {
        type: "paragraph",
        text: "If you do not own a suitable ring:"
      },
      {
        type: "numbered-list",
        items: [
          "Use a proper reusable ring sizer where possible.",
          "Fit it over the widest part of the finger or knuckle.",
          "It should feel secure but pass over the knuckle without force.",
          "Repeat at different times on more than one day.",
          "Record the result in millimetres and the stated sizing system."
        ]
      },
      {
        type: "paragraph",
        text: "For an expensive, wide, eternity-style or difficult-to-resize ring, confirm the result professionally."
      }
    ]
  },
  {
    heading: "Why ring-size measurements go wrong",
    content: [
      {
        type: "paragraph",
        text: "Common errors include:"
      },
      {
        type: "bullet-list",
        items: [
          "measuring the wrong finger or opposite hand;",
          "measuring only once;",
          "pulling paper or string too tightly;",
          "including the ring's outer edges in a diameter reading;",
          "printing a guide at \"fit to page\" rather than 100% scale;",
          "ignoring a larger knuckle;",
          "using a narrow sizer for a wide band;",
          "converting through several charts; and",
          "assuming every brand manufactures to identical tolerances."
        ]
      },
      {
        type: "paragraph",
        text: "The aim is not to produce a perfect abstract measurement. It is to select the best size for one specific ring on one specific finger."
      }
    ]
  },
  {
    heading: "Understand diameter and circumference",
    content: [
      {
        type: "paragraph",
        text: "Two measurements appear frequently in ring-size charts:"
      },
      {
        type: "bullet-list",
        items: [
          "Inner diameter: the straight distance across the inside of a circular ring through its centre.",
          "Inner circumference: the distance around the inside of the ring, corresponding approximately to the finger circumference the ring must enclose."
        ]
      },
      {
        type: "image",
        src: "/images/blog/how-to-measure-ring-size/73 (2).png",
        alt: "Ring size measurement - inner diameter and inner circumference explained",
        title: "Ring Diameter vs Circumference",
        caption: "Understanding the difference between inner diameter and inner circumference is essential for accurate ring sizing.",
        priority: false
      },
      {
        type: "paragraph",
        text: "For a perfect circle, circumference is diameter multiplied by π. In practice, do not calculate and round repeatedly when a seller provides a chart. Measure directly, retain decimals and compare with the chart for that product."
      },
      {
        type: "paragraph",
        text: "Never use outer diameter. Ring thickness makes it larger than the opening that determines fit."
      }
    ]
  },
  {
    heading: "Method 1: measure an existing ring",
    content: [
      {
        type: "paragraph",
        text: "This is useful when the existing ring:"
      },
      {
        type: "bullet-list",
        items: [
          "fits the intended finger comfortably;",
          "has a similar band width;",
          "is circular rather than visibly distorted; and",
          "has not been sized with an unusual internal insert."
        ]
      },
      {
        type: "paragraph",
        text: "Step-by-step method:"
      },
      {
        type: "numbered-list",
        items: [
          "Place the ring flat on a ruler marked in millimetres or use a calliper carefully.",
          "Align the zero point with the inner edge—not the outside of the metal.",
          "Measure straight across the exact centre to the opposite inner edge.",
          "Record the diameter to at least one decimal place if the tool permits.",
          "Rotate the ring and repeat. Different readings may indicate distortion or an off-centre measurement.",
          "Compare the consistent result with the product's own size guide."
        ]
      },
      {
        type: "paragraph",
        text: "Printable ring-chart method:"
      },
      {
        type: "paragraph",
        text: "A correctly scaled chart lets you place an existing ring over printed circles. The printed line should sit immediately inside the ring, without visible space or being hidden by the band."
      },
      {
        type: "paragraph",
        text: "Before using it:"
      },
      {
        type: "bullet-list",
        items: [
          "print at 100% or \"actual size\";",
          "disable page scaling;",
          "verify the guide's calibration line with a physical ruler; and",
          "do not measure from a phone or monitor, where display scaling varies."
        ]
      }
    ]
  },
  {
    heading: "Method 2: measure the finger",
    content: [
      {
        type: "paragraph",
        text: "A reusable plastic or metal ring sizer is generally more consistent than string. Select the intended finger on the correct hand."
      },
      {
        type: "paragraph",
        text: "Slide the sizer on and off several times. It should sit securely at the base without pinching, yet move over the knuckle with gentle resistance. If the knuckle is much wider than the finger base, choose a balance that can pass the knuckle without spinning excessively once seated."
      },
      {
        type: "paragraph",
        text: "Using a printable finger sizer:"
      },
      {
        type: "bullet-list",
        items: [
          "Verify print scale with the calibration mark.",
          "Cut only where instructed.",
          "Keep the strip flat and untwisted.",
          "Fit it as the real ring would pass over the knuckle.",
          "Read the mark at the overlap without pulling it into the skin.",
          "Repeat the test."
        ]
      },
      {
        type: "paragraph",
        text: "Using paper as a rough check:"
      },
      {
        type: "paragraph",
        text: "A non-stretch paper strip can provide an estimate. Mark the overlap, lay the strip flat and measure its length in millimetres. It should not compress the skin or hang loosely."
      },
      {
        type: "paragraph",
        text: "String, thread and elastic are poor primary tools because they stretch, twist and sink into the finger. Use them only as a preliminary estimate, never the sole basis for a high-value made-to-order ring."
      }
    ]
  },
  {
    heading: "Measure at the right time",
    content: [
      {
        type: "paragraph",
        text: "Finger size can vary with temperature, exercise, fluid retention and time of day. Avoid measuring immediately after intense activity, in unusually hot or cold conditions, or when your hands are visibly swollen."
      },
      {
        type: "paragraph",
        text: "For a representative result:"
      },
      {
        type: "bullet-list",
        items: [
          "measure when hands feel normal and comfortably warm;",
          "take readings at two or three different times;",
          "repeat on another day; and",
          "investigate any inconsistent result rather than averaging blindly."
        ]
      },
      {
        type: "paragraph",
        text: "If your finger size fluctuates significantly for health-related reasons, seek personal advice from a jeweller and, where appropriate, a healthcare professional."
      }
    ]
  },
  {
    heading: "Measure the correct hand and finger",
    content: [
      {
        type: "paragraph",
        text: "Corresponding fingers on the left and right hand can differ. Never transfer the size of one ring finger to the other without measuring."
      },
      {
        type: "paragraph",
        text: "Likewise, a middle-finger ring is not a dependable guide to the ring finger. Record the result with a precise label such as \"right-hand ring finger,\" not simply \"my ring size.\""
      },
      {
        type: "paragraph",
        text: "For a surprise gift, an existing ring works only if you know which finger and hand it fits. Asking a jeweller to measure that ring is safer than tracing it approximately."
      }
    ]
  },
  {
    heading: "Account for band width",
    content: [
      {
        type: "paragraph",
        text: "Wider bands contact more of the finger and can feel tighter than narrow bands in the same nominal size. Stacks of several rings can behave like one wide band."
      },
      {
        type: "image",
        src: "/images/blog/how-to-measure-ring-size/73 (3).png",
        alt: "How band width affects ring size - wide vs narrow bands",
        title: "Band Width and Ring Size",
        caption: "Wider bands feel tighter than narrow bands of the same nominal size.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Compare the width of the measuring ring or sizer with the ring being ordered. If the design is wide, ask the seller whether its stated sizing already accounts for width and whether a wide-band sizing set is available."
      },
      {
        type: "paragraph",
        text: "Do not automatically order a larger size based on a generic rule. Interior profile, thickness, manufacturing tolerance and the wearer's finger shape all matter."
      }
    ]
  },
  {
    heading: "Consider the inner profile",
    content: [
      {
        type: "paragraph",
        text: "Rings may have a flat interior, a rounded or \"comfort-fit\" interior, or a design interrupted by stones and settings. Two rings with the same measured inner circumference can feel different."
      },
      {
        type: "paragraph",
        text: "Product pages should state:"
      },
      {
        type: "bullet-list",
        items: [
          "band width and thickness;",
          "inner profile where relevant;",
          "whether stones or settings extend between the fingers;",
          "approximate manufacturing tolerance; and",
          "size recommendations specific to the design."
        ]
      },
      {
        type: "paragraph",
        text: "This is why measurement and fit are related but not identical."
      }
    ]
  },
  {
    heading: "UK, EU and other ring-size systems",
    content: [
      {
        type: "paragraph",
        text: "The UK commonly uses letters and half sizes. Many continental European charts use a number related to inner circumference in millimetres. US sizes use a different numerical system."
      },
      {
        type: "paragraph",
        text: "The same ring may therefore be labelled differently across websites. Always confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "which system the seller uses;",
          "whether EU numbering represents circumference;",
          "whether half or intermediate sizes are offered;",
          "the millimetre diameter or circumference behind the label; and",
          "whether the conversion chart belongs to that exact retailer."
        ]
      },
      {
        type: "paragraph",
        text: "Avoid converting UK to US and then US to EU. Each extra conversion and rounding step can introduce error. Use the measured millimetre value as the common reference."
      }
    ]
  },
  {
    heading: "A practical size-recording template",
    content: [
      {
        type: "image",
        src: "/images/blog/how-to-measure-ring-size/73 (4).png",
        alt: "Ring size recording template",
        title: "Ring Size Recording Template",
        caption: "Use this template to record your ring measurements accurately.",
        priority: false
      },
      {
        type: "table",
        headers: ["Field", "Your result"],
        rows: [
          ["Hand and finger", ""],
          ["Existing-ring inner diameter", " mm"],
          ["Finger/sizer circumference", " mm"],
          ["Measurement dates and times", ""],
          ["Existing/measuring band width", " mm"],
          ["New ring band width", " mm"],
          ["Seller's sizing system", ""],
          ["Seller's recommended size", ""],
          ["Professional confirmation", ""]
        ]
      },
      {
        type: "paragraph",
        text: "If diameter and finger measurements point to different sizes, do not choose whichever result you prefer. Recheck the technique and contact the jeweller with both measurements."
      }
    ]
  },
  {
    heading: "Check resizing before ordering",
    content: [
      {
        type: "paragraph",
        text: "Resizing can be limited by:"
      },
      {
        type: "bullet-list",
        items: [
          "full eternity or near-eternity stone settings;",
          "continuous pavé;",
          "engraving or patterned bands;",
          "unusual alloys or mixed metals;",
          "complex galleries; and",
          "the amount of change required."
        ]
      },
      {
        type: "paragraph",
        text: "Ask whether the exact ring can be resized, by how much, at what cost and whether adjustment affects its warranty or production time. \"Resizable\" does not mean unlimited alteration."
      }
    ]
  },
  {
    heading: "Ordering a ring online",
    content: [
      {
        type: "paragraph",
        text: "Before checkout, confirm:"
      },
      {
        type: "bullet-list",
        items: [
          "size system and product-specific chart;",
          "band width, thickness and inner profile;",
          "whether the ring is ready-made or produced to size;",
          "stated manufacturing tolerance;",
          "exchange or resize policy;",
          "return eligibility for resized, engraved or made-to-order items;",
          "production and delivery time; and",
          "insured return procedure."
        ]
      },
      {
        type: "paragraph",
        text: "Retain your measurements, product specifications and order confirmation. If the fit is wrong, avoid wearing the ring long enough to mark or damage it before contacting the seller."
      }
    ]
  },
  {
    heading: "Final measurement checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "I measured the intended finger on the correct hand.",
          "I repeated the measurement at normal temperature and on another occasion.",
          "My existing ring fits the same finger and has a comparable width.",
          "I measured inner—not outer—diameter.",
          "Any printed guide was verified at 100% scale.",
          "I recorded the result in millimetres.",
          "I checked the new ring's band width and inner profile.",
          "I used the seller's exact sizing system and chart.",
          "I reviewed resizing, exchange and made-to-order terms.",
          "I sought professional confirmation where the risk of error is high."
        ]
      }
    ]
  },
  {
    heading: "The Aurelia Royale approach",
    content: [
      {
        type: "paragraph",
        text: "Every Aurelia Royale ring page should identify its sizing system, available sizes, band dimensions and relevant resizing limits. A downloadable guide should include a physical calibration line and instruct users to print at actual size."
      },
      {
        type: "paragraph",
        text: "For designs whose width, profile or stone setting changes fit, the product page should provide design-specific guidance instead of relying on a generic chart alone."
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
          { text: "Accurate ring sizing requires measuring the intended finger or a well-fitting ring with the same band width on the same hand. Repeat the measurement in millimetres and convert only through the seller's exact chart.\n\n" },
          { text: "When in doubt, or when the ring is expensive or difficult to resize, a professional fitting is the most reliable investment before the purchase." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is the most accurate way to measure ring size?",
            answer: "A professional fitting with ring sizers on the intended finger is the most reliable method."
          },
          {
            question: "Can I measure ring size with an existing ring?",
            answer: "Yes, if it fits the same finger and hand. Measure its inner diameter through the centre and compare with the seller's chart."
          },
          {
            question: "Can I use string to measure my finger?",
            answer: "String is only a rough estimate because it can stretch, twist and compress the skin. A ring sizer is better."
          },
          {
            question: "Should a ring sizer feel tight?",
            answer: "It should feel secure at the finger base and pass over the knuckle with gentle resistance, without pain or force."
          },
          {
            question: "When is the best time to measure ring size?",
            answer: "Measure when your hands are at a normal, comfortable temperature and repeat at different times and on another day."
          },
          {
            question: "Are ring sizes the same on both hands?",
            answer: "Not necessarily. Measure the exact finger on the hand where the ring will be worn."
          },
          {
            question: "Does band width affect ring size?",
            answer: "Yes. Wider bands and stacks often feel tighter, so use guidance specific to the design rather than an automatic adjustment."
          },
          {
            question: "What is the difference between ring diameter and circumference?",
            answer: "Diameter is the distance across the ring's inner opening; circumference is the distance around that opening."
          },
          {
            question: "Are UK and European ring sizes the same?",
            answer: "No. UK sizes commonly use letters, while many European systems use numbers related to circumference in millimetres."
          },
          {
            question: "Can I trust an online ring-size conversion chart?",
            answer: "Use the chart from the exact seller and verify its millimetre measurements. Conversions can vary through rounding and tolerances."
          },
          {
            question: "Can every ring be resized?",
            answer: "No. Eternity settings, continuous pavé, engraving and complex construction may restrict resizing."
          },
          {
            question: "What should I do if I am between two sizes?",
            answer: "Recheck the measurement and ask the jeweller to consider your knuckle, band width, inner profile and the ring's resizing options."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Ring Size at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond rings with detailed size guides, design-specific fit guidance and transparent resizing policies.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function HowToMeasureRingSizePage() {
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
            Product-Category Guides
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Measure Your Ring Size Accurately
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}