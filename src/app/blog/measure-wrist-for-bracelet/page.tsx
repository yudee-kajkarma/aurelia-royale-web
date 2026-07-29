import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Measure Your Wrist for a Bracelet",
  description: "Measure your wrist accurately for a flexible bracelet, tennis bracelet, bangle or cuff using tape, paper or string—and avoid sizing mistakes.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/#article",
      "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/"},
      "headline": "How to Measure Your Wrist for a Bracelet",
      "description": "Measure your wrist accurately for a flexible bracelet, tennis bracelet, bangle or cuff using tape, paper or string—and avoid sizing mistakes.",
      "image": "https://www.aureliaroyale.com/images/blog/measure-wrist-for-bracelet.webp",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "publisher": {"@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/"},
      "inLanguage": "en-GB",
      "articleSection": "Product-Category Guides",
      "keywords": ["how to measure your wrist for a bracelet", "bracelet wrist measurement", "how to measure bracelet size", "measure wrist without tape"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/"},
        {"@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/"},
        {"@type": "ListItem", "position": 3, "name": "How to Measure Your Wrist for a Bracelet", "item": "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/#faq",
      "mainEntity": [
        {"@type": "Question", "name": "Where should I measure my wrist for a bracelet?", "acceptedAnswer": {"@type": "Answer", "text": "Measure at the exact position where the bracelet will sit, especially beside a watch or in a stack."}},
        {"@type": "Question", "name": "How tight should the measuring tape be?", "acceptedAnswer": {"@type": "Answer", "text": "It should lie flat and comfortably against the skin without compressing it or leaving a gap."}},
        {"@type": "Question", "name": "Can I measure my wrist with string?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if it is non-stretch. Mark the meeting point, lay it flat and measure without pulling."}},
        {"@type": "Question", "name": "Should I add extra length to my wrist measurement?", "acceptedAnswer": {"@type": "Answer", "text": "Only according to the specific bracelet’s method and desired fit. Do not use one universal allowance."}},
        {"@type": "Question", "name": "How do I measure for a tennis bracelet?", "acceptedAnswer": {"@type": "Answer", "text": "Measure wrist circumference at the wearing position, then use the seller’s design-specific guidance."}},
        {"@type": "Question", "name": "How do I measure for a bangle?", "acceptedAnswer": {"@type": "Answer", "text": "For a slip-on bangle, measure the widest compressed hand under the brand’s method; hinged bangles may use wrist dimensions."}},
        {"@type": "Question", "name": "Is bracelet length the same as wrist circumference?", "acceptedAnswer": {"@type": "Answer", "text": "No. Bracelet length is a product dimension; wrist circumference is a body measurement."}},
        {"@type": "Question", "name": "Can I measure a bracelet I already own?", "acceptedAnswer":{"@type": "Answer", "text": "Yes, if it fits well and has comparable construction. Measure usable length or internal bangle dimensions."}},
        {"@type": "Question", "name": "Should I measure both wrists?", "acceptedAnswer": {"@type": "Answer", "text": "Yes if you may switch wrists. They can differ, so label the intended side."}},
        {"@type": "Question", "name": "Should I measure in centimetres or inches?", "acceptedAnswer": {"@type": "Answer", "text": "Use the seller’s unit while preserving your precise original measurement. One inch equals 25.4 millimetres."}},
        {"@type": "Question", "name": "Why does a diamond bracelet feel smaller than a chain of the same length?", "acceptedAnswer": {"@type": "Answer", "text": "Diamond settings and clasps occupy internal space, reducing usable circumference."}},
        {"@type": "Question", "name": "What if my measurement falls between sizes?", "acceptedAnswer": {"@type": "Answer", "text": "Follow design-specific advice or ask customer service, sharing the raw measurement and desired fit."}}
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
        src: "/images/blog/measure-wrist-for-bracelet/67 (1).png",
        alt: "Measuring wrist circumference for a diamond bracelet",
        title: "How to Measure Wrist Size",
        caption: "Wrap a flexible tape flat against your skin at the exact wearing position to find your wrist circumference.",
        priority: true
      },
      {
        type: "paragraph",
        text: "To measure your wrist for a bracelet, wrap a flexible tape around the exact place where the bracelet will sit. Keep the tape flat and comfortably against the skin without compressing it. Record the circumference, repeat the measurement and then follow the sizing instructions for the specific bracelet."
      },
      {
        type: "paragraph",
        text: "That last step matters. Wrist circumference is a body measurement; bracelet length is a product measurement. Setting depth, clasp design and link construction determine how the two relate."
      },
      {
        type: "callout",
        title: "Quick answer: the basic wrist-measurement method",
        parts: [
          { text: "Follow this checklist:\n\n", bold: true },
          { text: "1. Choose the wrist and intended wearing position.\n2. Relax the hand and keep the palm open naturally.\n3. Wrap a flexible tape around the wrist.\n4. Keep it level, flat and comfortably snug.\n5. Read the measurement without rounding early.\n6. Repeat twice.\n7. Record the largest consistent result in millimetres and centimetres.\n8. Apply the seller’s bracelet-specific sizing method.\n\nDo not add an arbitrary allowance until you know how the brand defines its listed sizes." }
        ]
      }
    ]
  },
  {
    heading: "What you are actually measuring",
    content: [
      {
        type: "paragraph",
        text: "Measuring the wrist alone cannot size every bangle. A solid slip-on bangle must pass over the hand, which is wider than the wrist."
      },
      {
        type: "table",
        headers: ["Bracelet construction", "Body measurement needed", "Product measurement to compare"],
        rows: [
          ["Flexible tennis or line bracelet", "Wrist circumference at wearing point", "Usable closed length or brand size"],
          ["Chain or station bracelet", "Wrist circumference", "Closed length and adjuster positions"],
          ["Slip-on bangle", "Widest compressed hand circumference or cross-section", "Internal diameter or circumference"],
          ["Hinged bangle", "Wrist width, depth or circumference under brand method", "Internal width and height"],
          ["Cuff", "Wrist circumference and shape at wearing point", "Internal dimensions and opening"]
        ]
      }
    ]
  },
  {
    heading: "Tools you can use",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Flexible measuring tape: ", bold: true },
          { text: "A soft tailor’s tape is the simplest option. Check that its zero point is intact and identify whether the scale is centimetres, millimetres or inches."
          }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Paper strip: ", bold: true },
          { text: "Cut a straight, narrow strip that does not stretch. Wrap it around the wrist, mark the overlap precisely, lay it flat and measure from the end to the mark with a rigid ruler."
          }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Non-stretch string: ", bold: true },
          { text: "String works when paper is unavailable, but it can twist, stretch or compress the skin. Use a non-elastic type, mark the meeting point and measure it flat without pulling."
          }
        ]
      },
      {
        type: "paragraph",
        text: "Do not use elastic cord, a phone-charging cable, thick ribbon or a stretchy bracelet."
      }
    ]
  },
  {
    heading: "Step-by-step: measuring for a flexible diamond bracelet",
    content: [
      {
        type: "image",
        src: "/images/blog/measure-wrist-for-bracelet/67 (2).png",
        alt: "Wrapping a flexible measuring tape flat against the wrist sitting position",
        title: "Snug Tape Measurement Check",
        caption: "Keep the measuring tape flat against the skin at the exact wearing position without pinching.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Step 1: select the correct wrist. Measure the wrist that will wear the bracelet. Dominant and non-dominant wrists can differ. Do not assume they are interchangeable."
      },
      {
        type: "paragraph",
        text: "Step 2: choose the wearing position. Measure where the bracelet will normally sit. A bracelet worn beside a watch may sit higher on the forearm than one worn alone."
      },
      {
        type: "paragraph",
        text: "Step 3: relax the hand. Keep the wrist neutral, fingers relaxed and palm open. A clenched fist can alter muscles and tendons around the wrist."
      },
      {
        type: "paragraph",
        text: "Step 4: place the tape. Wrap the tape around the wrist so it lies flat and does not spiral. It should touch the skin without digging in or leaving a gap."
      },
      {
        type: "paragraph",
        text: "Step 5: read and record. Read at the overlap while the tape remains in position. Record the raw measurement—for example, 162 mm or 16.2 cm—rather than immediately rounding to 16 cm."
      },
      {
        type: "paragraph",
        text: "Step 6: repeat. Remove the tape and repeat at least twice. If results vary materially, check position, tension and tape alignment."
      },
      {
        type: "paragraph",
        text: "Step 7: use the product’s size chart. Apply the manufacturer’s stated rule. Confirm whether a listed “18 cm bracelet” means overall length, wearable closed length, internal circumference or a nominal category."
      }
    ]
  },
  {
    heading: "How snug should the tape be?",
    content: [
      {
        type: "paragraph",
        text: "The raw wrist measurement should be comfortably snug, not the final desired bracelet fit. You should not insert fingers beneath the tape unless the seller specifically instructs you to do so."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Measure the body first. Choose close, balanced or relaxed ease afterwards using the exact design’s guidance. Read " },
          { text: "how a diamond bracelet should fit", href: "/blog/how-should-diamond-bracelet-fit/" },
          { text: " before choosing ease." }
        ]
      }
    ]
  },
  {
    heading: "Measuring without a tape",
    content: [
      {
        type: "paragraph",
        text: "Use a paper strip rather than estimating from clothing size or photographs. Cut a strip approximately 1–2 cm wide, wrap it flat without overlap at an angle, and mark exactly where the end meets the strip. Measure on a rigid ruler to the nearest millimetre. Repeat with a new mark or strip to ensure consistency."
      },
      {
        type: "paragraph",
        text: "Photograph the measured strip beside the ruler if you need to send evidence to customer service."
      }
    ]
  },
  {
    heading: "How to measure for a slip-on bangle",
    content: [
      {
        type: "image",
        src: "/images/blog/measure-wrist-for-bracelet/67 (3).png",
        alt: "Measuring hand width for slip-on bangle sizing",
        title: "Bangle Knuckle Sizing",
        caption: "For a slip-on bangle, bring the thumb towards the little finger and measure around the widest knuckle area.",
        priority: false
      },
      {
        type: "paragraph",
        text: "A closed bangle must pass the widest compressed part of the hand. Bring the thumb towards the little finger as if putting on a bangle, relax the hand, and wrap a tape or paper strip around the widest knuckle area."
      },
      {
        type: "paragraph",
        text: "Some brands request an across-hand diameter instead. Follow their exact diagram. Do not convert circumference to diameter unless the bangle is circular and the brand explicitly accepts that method; many hands and bangles are oval."
      }
    ]
  },
  {
    heading: "Measuring for a hinged bangle",
    content: [
      {
        type: "paragraph",
        text: "Hinged bangles open, so hand passage may not determine size. The seller may request wrist circumference, wrist width and sometimes depth."
      },
      {
        type: "paragraph",
        text: "Measure with the wrist in a neutral position. If internal width and height are provided, compare them with a well-fitting hinged bangle rather than assuming circumference alone predicts shape compatibility."
      }
    ]
  },
  {
    heading: "Measuring for a cuff",
    content: [
      {
        type: "paragraph",
        text: "Measure at the exact position where the cuff will sit. Record wrist circumference and, where requested, width across the top and side depth."
      },
      {
        type: "paragraph",
        text: "The cuff opening is part of the design. Do not repeatedly squeeze or spread precious metal to correct an uncertain measurement unless the maker explicitly permits adjustment."
      }
    ]
  },
  {
    heading: "Measuring an existing bracelet",
    content: [
      {
        type: "paragraph",
        text: "An existing well-fitting bracelet can be useful only when its construction is comparable. For a flexible bracelet, lay it straight without stretching, close or align the clasp according to the brand’s method, measure the wearable length, and record width and setting depth."
      },
      {
        type: "paragraph",
        text: "For a bangle, measure internal width and height through the centre. Do not measure the outside, which includes metal thickness. A fine chain and a deep tennis bracelet of the same end-to-end length may not fit alike."
      }
    ]
  },
  {
    heading: "When to measure",
    content: [
      {
        type: "paragraph",
        text: "Measure under ordinary indoor conditions. Wrist circumference can shift slightly with heat, activity and time of day."
      },
      {
        type: "paragraph",
        text: "Avoid measuring immediately after strenuous exercise, prolonged heat or unusual swelling. If normal results vary, record the range and ask the seller how the design accommodates it. For substantial or medically related swelling, seek appropriate professional advice."
      }
    ]
  },
  {
    heading: "Left wrist versus right wrist",
    content: [
      {
        type: "paragraph",
        text: "Measure both if you may switch wrists. Record them separately and label the intended wrist."
      },
      {
        type: "paragraph",
        text: "If stacking with a watch, measure at the actual position of the bracelet rather than at the narrowest point by default. The circumference may change only a short distance up the arm."
      }
    ]
  },
  {
    heading: "Metric and imperial conversion",
    content: [
      {
        type: "paragraph",
        text: "European sellers commonly use centimetres or millimetres, while some sites list inches (1 centimetre = 10 millimetres; 1 inch = 25.4 millimetres). Keep the original measurement and convert only once. Avoid repeated rounding."
      }
    ]
  },
  {
    heading: "Why deep diamond bracelets may feel smaller",
    content: [
      {
        type: "paragraph",
        text: "Diamond settings, galleries and clasps occupy space inside the bracelet. An articulated line with substantial baskets can have less usable room than a flat chain with the same stated overall length."
      },
      {
        type: "paragraph",
        text: "Ask for usable closed length, setting width and depth, clasp dimensions, and fit model guidelines before selecting a size. This is why a universal allowance rule is unreliable."
      }
    ]
  },
  {
    heading: "Measuring as a gift",
    content: [
      {
        type: "paragraph",
        text: "The least intrusive method is to measure a bracelet the recipient already wears on the intended wrist. Choose a similar construction and record its usable length and width."
      },
      {
        type: "paragraph",
        text: "Do not rely on watch-strap holes or clothing size. If certainty is low, prioritise an adjustable design, an exchangeable standard size or choosing together. Avoid custom sizing until the recipient confirms fit."
      }
    ]
  },
  {
    heading: "Common measurement mistakes",
    content: [
      {
        type: "paragraph",
        text: "Avoid measuring the wrong wrist, using elastic string, treating overall flat length as usable closed length, or adding arbitrary margins without reviewing the brand's specific chart."
      },
      {
        type: "bullet-list",
        items: [
          "measuring the wrong wrist;",
          "measuring the narrowest point when the bracelet sits elsewhere;",
          "pulling the tape tightly or leaving gaps;",
          "confusing bangle outside diameter with inside diameter;",
          "treating overall length as usable length."
        ]
      }
    ]
  },
  {
    heading: "Measurement record template",
    content: [
      {
        type: "image",
        src: "/images/blog/measure-wrist-for-bracelet/67 (4).png",
        alt: "Keeping a record of wrist and hand dimensions for sizing",
        title: "Wrist Measurement Record Template",
        caption: "Keep a written template of your wrist, knuckle, and stack options to assist with custom orders.",
        priority: false
      },
      {
        type: "table",
        headers: ["Field", "Record"],
        rows: [
          ["Intended wrist", "Left / right"],
          ["Wearing position", "Alone / beside watch / stacked"],
          ["Raw wrist circumference", "___ mm / ___ cm"],
          ["Repeat measurement", "___ mm / ___ cm"],
          ["Hand measurement for slip-on bangle", "___ mm / ___ cm"],
          ["Existing bracelet usable length", "___ mm / ___ cm"],
          ["Desired fit", "Close / balanced / relaxed"],
          ["Product and size chart reviewed", "Yes / no"],
          ["Seller confirmation", "Date and response"]
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale should provide",
    content: [
      {
        type: "paragraph",
        text: "Aurelia provides design-specific measurement diagrams, defines listed length, states usable closed length, width and depth, and provides sizing charts customized for flexible, bangle, and cuff variants."
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
          { text: "Measure the body before choosing the bracelet size. Record the wrist circumference at the actual wearing position with a flat, comfortably snug tape, repeat it and preserve the unrounded result.\n\n" },
          { text: "Then follow the exact product’s method. Bracelet fit is a calculation made from a reliable measurement, a chosen amount of ease and the construction of the piece—not a universal number added to every wrist." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Where should I measure my wrist for a bracelet?",
            answer: "Measure at the exact position where the bracelet will sit, especially if it will be worn beside a watch or in a stack."
          },
          {
            question: "How tight should the measuring tape be?",
            answer: "It should lie flat and comfortably against the skin without compressing it or leaving a gap."
          },
          {
            question: "Can I measure my wrist with string?",
            answer: "Yes, if it is non-stretch. Mark the meeting point, lay it flat and measure it without pulling."
          },
          {
            question: "Should I add extra length to my wrist measurement?",
            answer: "Only according to the specific bracelet’s sizing method and your desired fit. Do not use one universal allowance."
          },
          {
            question: "How do I measure for a tennis bracelet?",
            answer: "Measure wrist circumference at the wearing position, then use the seller’s guidance for that bracelet’s setting depth and usable length."
          },
          {
            question: "How do I measure for a bangle?",
            answer: "For a slip-on bangle, measure the widest compressed part of the hand using the brand’s method; hinged bangles may use wrist dimensions."
          },
          {
            question: "Is bracelet length the same as wrist circumference?",
            answer: "No. Bracelet length is a product dimension, while wrist circumference is a body measurement. Construction determines the relationship."
          },
          {
            question: "Can I measure a bracelet I already own?",
            answer: "Yes, if it fits well and has comparable construction. Measure usable length for flexible pieces or internal dimensions for bangles."
          },
          {
            question: "Should I measure both wrists?",
            answer: "Yes if you may switch wrists. They can differ, so label the intended side."
          },
          {
            question: "Should I measure in centimetres or inches?",
            answer: "Use the unit required by the seller, while keeping your original precise measurement. One inch equals 25.4 millimetres."
          },
          {
            question: "Why does a diamond bracelet feel smaller than a chain of the same length?",
            answer: "Diamond settings and clasps occupy internal space, reducing usable circumference compared with a flat chain."
          },
          {
            question: "What if my measurement falls between sizes?",
            answer: "Follow the seller’s design-specific advice or ask customer service, sharing the raw measurement and desired fit."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Bracelet Fit at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond bracelets with detailed fit guidance, complete specifications and transparent sizing.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function MeasureWristForBraceletPage() {
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
            How to Measure Your Wrist for a Bracelet
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
