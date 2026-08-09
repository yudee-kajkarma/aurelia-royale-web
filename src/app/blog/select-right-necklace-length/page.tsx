import { getBlogDataByLocale } from "@/utils/getBlogData";
import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadataEn: Metadata = {
  title: "Select Right Necklace Length",
  description: "Select Right Necklace Length",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/select-right-necklace-length/",
  },
};

export const metadataEs: Metadata = {
  title: "Seleccione la longitud correcta del collar",
  description: "Seleccione la longitud correcta del collar - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/select-right-necklace-length/",
  },
};

export const metadataFr: Metadata = {
  title: "Sélectionnez la bonne longueur de collier",
  description: "Sélectionnez la bonne longueur de collier - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/select-right-necklace-length/",
  },
};

export const metadataNl: Metadata = {
  title: "Selecteer de juiste kettinglengte",
  description: "Selecteer de juiste kettinglengte - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/select-right-necklace-length/",
  },
};



export const metadataDe: Metadata = {
  title: "Wählen Sie die richtige Halskettenlänge",
  description: "Wählen Sie die richtige Halskettenlänge - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/blog/select-right-necklace-length/",
  },
};


export const metadataIt: Metadata = {
  title: "Come scegliere la lunghezza giusta della collana di diamanti",
  description: "Trova la lunghezza della collana più adatta alla tua scollatura. Confronta girocolli, collane di lunghezza standard e classici ciondoli lunghi. - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/select-right-necklace-length/",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "it") return metadataIt;
  const localeData = getBlogDataByLocale("select-right-necklace-length", locale);
  const sections = localeData && localeData.length > 0 ? localeData : articleSections;

  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};




// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/select-right-necklace-length/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/select-right-necklace-length/"},
      "headline":"How to Select the Right Necklace Length",
      "description":"Select the right necklace length by testing exact centimetres, pendant drop, neckline and layering—plus learn how to measure chains correctly.",
      "image":"https://www.aureliaroyale.com/images/blog/select-right-necklace-length.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["how to select the right necklace length","necklace length guide","how to measure necklace length","pendant necklace length"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/select-right-necklace-length/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How to Select the Right Necklace Length","item":"https://www.aureliaroyale.com/blog/select-right-necklace-length/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/select-right-necklace-length/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What is the best necklace length?","acceptedAnswer":{"@type":"Answer","text":"There is no universal best length. Choose by placement, body proportions, pendant drop, clothing and layering."}},
        {"@type":"Question","name":"How do I measure necklace length?","acceptedAnswer":{"@type":"Answer","text":"Fasten it, lay it flat without stretching and measure along the complete wearable path under the seller's method."}},
        {"@type":"Question","name":"How can I test necklace length without owning the chain?","acceptedAnswer":{"@type":"Answer","text":"Use non-stretch cord or ribbon marked to the proposed length and check it safely in a mirror."}},
        {"@type":"Question","name":"Does necklace length include the clasp?","acceptedAnswer":{"@type":"Answer","text":"Definitions vary. Confirm whether the stated figure is the complete wearable closed length."}},
        {"@type":"Question","name":"Does pendant height count as necklace length?","acceptedAnswer":{"@type":"Answer","text":"Usually chain length and pendant height are separate. Add pendant drop to find the lowest point."}},
        {"@type":"Question","name":"Where will a 40 cm necklace sit?","acceptedAnswer":{"@type":"Answer","text":"Placement varies with the wearer, chain and pendant. Test 40 cm on the actual body."}},
        {"@type":"Question","name":"Where will a 45 cm necklace sit?","acceptedAnswer":{"@type":"Answer","text":"It often falls lower than 40 cm, but the exact point varies. Test it with cord or an existing necklace."}},
        {"@type":"Question","name":"Are adjustable necklaces better for layering?","acceptedAnswer":{"@type":"Answer","text":"They offer more options, but texture, pendant width and movement still affect overlap and tangling."}},
        {"@type":"Question","name":"How much space should I leave between layered necklaces?","acceptedAnswer":{"@type":"Answer","text":"There is no guaranteed spacing. Test separation while accounting for pendant drops, chain gauges and movement."}},
        {"@type":"Question","name":"How do I choose necklace length as a gift?","acceptedAnswer":{"@type":"Answer","text":"Measure a frequently worn necklace or choose an adjustable, exchangeable design."}},
        {"@type":"Question","name":"Can a jeweller shorten a diamond necklace?","acceptedAnswer":{"@type":"Answer","text":"Some can be altered, but construction, reports, warranty and returns may be affected."}},
        {"@type":"Question","name":"Should a close necklace feel tight?","acceptedAnswer":{"@type":"Answer","text":"No. It should sit securely without restricting breathing, swallowing or normal movement."}}
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
        src: "/images/blog/select-right-necklace-length/69 (1).jpg",
        alt: "How to select the right necklace length - complete guide",
        title: "How to Select the Right Necklace Length",
        caption: "The right necklace length places the design where you want it to sit - test exact centimetres and pendant drop.",
        priority: true
      },
      {
        type: "paragraph",
        text: "The right necklace length places the design where you want it to sit. That position depends on the exact chain length, neck and torso proportions, pendant dimensions, clothing and whether other necklaces will be layered."
      },
      {
        type: "paragraph",
        text: "Generic names such as \"choker\", \"princess\" or \"matinee\" can be useful shorthand, but their length ranges vary between sellers. Centimetres, millimetres and on-body testing are more reliable."
      }
    ]
  },
  {
    heading: "Quick answer: how do you choose necklace length?",
    content: [
      {
        type: "paragraph",
        text: "Choose in this order:"
      },
      {
        type: "numbered-list",
        items: [
          "Decide where the focal point should sit.",
          "Measure a well-fitting necklace that reaches that point, or test with non-stretch cord.",
          "Record the complete closed chain length.",
          "Add the pendant's vertical drop when relevant.",
          "Test the measurement with the intended neckline.",
          "Check every adjustable fastening position.",
          "Allow planned separation for layering.",
          "Confirm how the retailer defines the listed length."
        ]
      },
      {
        type: "paragraph",
        text: "Do not assume a 45 cm necklace will land at the same place on every person."
      }
    ]
  },
  {
    heading: "Choose placement before the number",
    content: [
      {
        type: "paragraph",
        text: "Start by deciding whether the necklace should sit:"
      },
      {
        type: "bullet-list",
        items: [
          "high on the neck;",
          "near the base of the neck;",
          "around the collarbone;",
          "on the upper chest; or",
          "lower as a long pendant or layering piece."
        ]
      },
      {
        type: "paragraph",
        text: "Then find the length that creates that position on the actual wearer. This reverses the common mistake of choosing a named length first and hoping it lands correctly."
      }
    ]
  },
  {
    heading: "Why standard length names are only approximate",
    content: [
      {
        type: "paragraph",
        text: "Retailers may use overlapping names and different ranges. A \"choker\" can mean a close chain, a rigid collar or an adjustable design. A \"princess\" length on one site may overlap another site's \"standard\" chain."
      },
      {
        type: "image",
        src: "/images/blog/select-right-necklace-length/69 (2).jpg",
        alt: "Necklace length guide - standard lengths compared",
        title: "Standard Necklace Lengths Compared",
        caption: "Standard length names vary between sellers - always verify exact centimetres.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Use labels for browsing, then verify:"
      },
      {
        type: "bullet-list",
        items: [
          "exact maximum length;",
          "minimum adjustable length;",
          "intermediate fastening points;",
          "pendant drop; and",
          "whether the stated length includes the clasp."
        ]
      }
    ]
  },
  {
    heading: "Method 1: measure an existing necklace",
    content: [
      {
        type: "paragraph",
        text: "Choose a necklace that sits at the desired point and has similar construction."
      },
      {
        type: "numbered-list",
        items: [
          "Fasten it.",
          "Lay it flat without pulling or stretching.",
          "Measure along the chain's centre line from one clasp end to the corresponding connection.",
          "Follow the complete wearable path rather than measuring straight across a curve.",
          "Record the closed length in millimetres or centimetres.",
          "Measure pendant height separately."
        ]
      },
      {
        type: "paragraph",
        text: "For a fixed-front or rigid section, follow the seller's method. Do not assume every design is measured end to end in the same way."
      }
    ]
  },
  {
    heading: "Method 2: test with cord or ribbon",
    content: [
      {
        type: "paragraph",
        text: "Use non-stretch cord, narrow ribbon or a soft measuring tape."
      },
      {
        type: "numbered-list",
        items: [
          "Cut or mark the exact proposed length.",
          "Join the ends safely without tightening around the neck.",
          "Position the join where the clasp would sit.",
          "Attach a light paper template representing the pendant if needed.",
          "Check placement in a mirror from front and side.",
          "Test with the intended neckline."
        ]
      },
      {
        type: "paragraph",
        text: "Do not hang a heavy object from the cord. Its weight and safety differ from a real necklace."
      }
    ]
  },
  {
    heading: "Chain length versus pendant drop",
    content: [
      {
        type: "paragraph",
        text: "Chain length controls the path around the neck. Pendant drop extends below that path."
      },
      {
        type: "paragraph",
        text: "The final lowest point depends on:"
      },
      {
        type: "bullet-list",
        items: [
          "chain length;",
          "pendant height;",
          "whether height includes the bail;",
          "bail movement;",
          "fixed, sliding or suspended construction; and",
          "pendant weight."
        ]
      },
      {
        type: "paragraph",
        text: "A pendant described as 20 mm high may extend slightly more if the bail is excluded. Product pages should state both complete height and stone or motif dimensions."
      }
    ]
  },
  {
    heading: "Fixed versus sliding pendants",
    content: [
      {
        type: "paragraph",
        text: "A fixed pendant connects to the chain at set points and may keep the focal element centred more consistently. A sliding pendant moves along the chain and can respond differently to body movement."
      },
      {
        type: "paragraph",
        text: "For fixed designs, check the total wearable length including the focal section. For sliding designs, confirm whether the chain can be adjusted without forcing the setting and whether the pendant is removable."
      }
    ]
  },
  {
    heading: "Adjustable necklaces",
    content: [
      {
        type: "paragraph",
        text: "An adjustable necklace should list each usable position, not only a broad range."
      },
      {
        type: "paragraph",
        text: "Check whether adjustment uses:"
      },
      {
        type: "bullet-list",
        items: [
          "several fixed jump rings;",
          "an extension chain;",
          "a sliding mechanism; or",
          "a removable extender."
        ]
      },
      {
        type: "paragraph",
        text: "An extension chain may allow any link or only designated links, depending on construction. A sliding adjuster should have operating and weight-limit guidance."
      }
    ]
  },
  {
    heading: "How neck circumference affects placement",
    content: [
      {
        type: "paragraph",
        text: "The same chain length creates a different drop after wrapping around different neck circumferences. Measure the base of the neck with a flexible tape if choosing a close length."
      },
      {
        type: "image",
        src: "/images/blog/select-right-necklace-length/69 (3).jpg",
        alt: "How neck circumference affects necklace placement",
        title: "Neck Circumference and Placement",
        caption: "The same chain length creates different drops on different neck circumferences.",
        priority: false
      },
      {
        type: "paragraph",
        text: "Keep the tape flat and comfortably against the skin. Then test the proposed chain length rather than calculating placement from circumference alone."
      },
      {
        type: "paragraph",
        text: "For high or close-fitting designs, comfort and safe clearance are particularly important. A necklace should not restrict breathing or swallowing."
      }
    ]
  },
  {
    heading: "Consider pendant size and weight",
    content: [
      {
        type: "paragraph",
        text: "A larger or heavier pendant can pull a chain into a sharper V and may sit slightly lower than a light motif on the same nominal length. Chain gauge and neckline contact also affect drape."
      },
      {
        type: "paragraph",
        text: "Test a paper template for size, but remember it does not reproduce weight. Use on-body video of the actual or representative design for a more realistic view."
      }
    ]
  },
  {
    heading: "Match length to clothing",
    content: [
      {
        type: "paragraph",
        text: "Use the intended outfit as a practical test rather than following universal neckline rules."
      },
      {
        type: "paragraph",
        text: "Check whether the focal point:"
      },
      {
        type: "bullet-list",
        items: [
          "sits against skin or fabric;",
          "disappears under a collar;",
          "repeatedly meets an edge or button;",
          "conflicts with embellishment; or",
          "remains visible when seated and moving."
        ]
      },
      {
        type: "paragraph",
        text: "A length that works with an open neckline may disappear under a high one. Adjustable positions can increase versatility."
      }
    ]
  },
  {
    heading: "Choosing length for layering",
    content: [
      {
        type: "paragraph",
        text: "Layer by measured separation, not just by buying \"short\", \"medium\" and \"long\"."
      },
      {
        type: "paragraph",
        text: "Record:"
      },
      {
        type: "bullet-list",
        items: [
          "complete length of each chain;",
          "pendant drop;",
          "chain gauge;",
          "focal width;",
          "clasp weight; and",
          "adjustable positions."
        ]
      },
      {
        type: "paragraph",
        text: "Leave enough vertical distance to reduce overlapping pendants. Different chain textures can still tangle, so no spacing guarantees a tangle-free stack."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to prevent necklaces from tangling", href: "/blog/prevent-necklaces-tangling/" },
          { text: " before building a frequent-wear stack." }
        ]
      }
    ]
  },
  {
    heading: "Length for station and line necklaces",
    content: [
      {
        type: "paragraph",
        text: "Placement matters beyond the centre point. For station necklaces, check where the outer diamonds end and whether the pattern remains visible around the sides."
      },
      {
        type: "paragraph",
        text: "For line necklaces, confirm whether the stated length follows the articulated curve and whether the piece lies flat at that placement. A shorter setting-heavy necklace can feel different from a fine chain of the same nominal length."
      }
    ]
  },
  {
    heading: "Choosing length as a gift",
    content: [
      {
        type: "paragraph",
        text: "Measure a necklace the recipient already wears frequently. Record its complete length, pendant drop and adjustable position."
      },
      {
        type: "paragraph",
        text: "If you cannot measure one, an adjustable standard-size design with clear exchange terms is lower risk than an irreversible custom length. Avoid choosing from height, clothing size, age or gender alone."
      }
    ]
  },
  {
    heading: "Converting inches and centimetres",
    content: [
      {
        type: "bullet-list",
        items: [
          "1 inch = 2.54 centimetres.",
          "1 centimetre = 10 millimetres."
        ]
      },
      {
        type: "paragraph",
        text: "Keep the original measurement and convert once. Common retail figures may be rounded—for example, an inch-based chain may not convert to a whole centimetre. Use the product's actual specification rather than assuming equivalence."
      }
    ]
  },
  {
    heading: "How to check an online product page",
    content: [
      {
        type: "paragraph",
        text: "The page should provide:"
      },
      {
        type: "bullet-list",
        items: [
          "maximum wearable length;",
          "every fastening position;",
          "extension length;",
          "pendant or focal-section dimensions;",
          "whether the pendant is fixed, sliding or removable;",
          "chain gauge and clasp;",
          "on-body images at stated lengths; and",
          "complete product weight."
        ]
      },
      {
        type: "image",
        src: "/images/blog/select-right-necklace-length/69 (4).jpg",
        alt: "Necklace length selection checklist",
        title: "Necklace Length Checklist",
        caption: "Use this checklist to verify necklace length before ordering.",
        priority: false
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to choose a lab-grown diamond necklace", href: "/blog/how-to-choose-lab-grown-diamond-necklace/" },
          { text: " for the wider quality and construction checklist." }
        ]
      }
    ]
  },
  {
    heading: "At-home arrival test",
    content: [
      {
        type: "paragraph",
        text: "Keep tags attached and follow the return policy."
      },
      {
        type: "numbered-list",
        items: [
          "Compare the delivered length with the order.",
          "Check each adjustment point.",
          "Wear it briefly in a safe indoor setting.",
          "Test the intended neckline.",
          "Observe pendant position while sitting and standing.",
          "Confirm the clasp remains manageable.",
          "Remove it before sleep, showering, exercise or leaving home."
        ]
      },
      {
        type: "paragraph",
        text: "Do not alter the chain until placement and return eligibility are confirmed."
      }
    ]
  },
  {
    heading: "Common length mistakes",
    content: [
      {
        type: "paragraph",
        text: "Avoid:"
      },
      {
        type: "bullet-list",
        items: [
          "choosing by a name rather than centimetres;",
          "ignoring pendant drop;",
          "measuring straight across a curved necklace;",
          "assuming all stated lengths include the clasp identically;",
          "overlooking adjustable positions;",
          "relying on one model image;",
          "choosing by body-type rules;",
          "failing to test the intended neckline; and",
          "customising before confirming placement."
        ]
      }
    ]
  },
  {
    heading: "Necklace-length checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Desired body placement is defined.",
          "Exact length is tested with cord or an existing necklace.",
          "Pendant drop is included.",
          "Maximum and minimum lengths are clear.",
          "Every adjustment point is identified.",
          "Chain and clasp construction are understood.",
          "Neckline and layering plans are tested.",
          "On-body images use stated lengths.",
          "Return or alteration terms are saved."
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale should disclose",
    content: [
      {
        type: "paragraph",
        text: "Aurelia should show all lengths in centimetres and inches, define how they are measured, list every fastening position, separate pendant height from chain length, show on-body placement on more than one model where practical and provide a printable length tester with a calibration line."
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
          { text: "The right necklace length is the measured path that places the design where the wearer wants it. Decide placement first, test exact centimetres and include the pendant's full drop.\n\n" },
          { text: "Names such as \"choker\" and \"princess\" can organise a catalogue, but they cannot predict an individual result. Measurements and on-body testing can." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is the best necklace length?",
            answer: "There is no universal best length. Choose according to desired placement, neck and torso proportions, pendant drop, clothing and layering."
          },
          {
            question: "How do I measure necklace length?",
            answer: "Fasten the necklace, lay it flat without stretching and measure along the complete wearable path under the seller's method."
          },
          {
            question: "How can I test necklace length without owning the chain?",
            answer: "Use non-stretch cord or ribbon marked to the exact proposed length and check it safely in a mirror."
          },
          {
            question: "Does necklace length include the clasp?",
            answer: "Definitions vary. Confirm whether the seller's stated length is the complete wearable closed length and how it was measured."
          },
          {
            question: "Does pendant height count as necklace length?",
            answer: "Usually chain length and pendant height are separate. Add the pendant drop to understand the lowest visual point."
          },
          {
            question: "Where will a 40 cm necklace sit?",
            answer: "Placement varies with the wearer, chain construction and pendant. Test 40 cm on the actual body rather than relying on a universal chart."
          },
          {
            question: "Where will a 45 cm necklace sit?",
            answer: "It often falls lower than 40 cm, but the exact point varies. Use cord or an existing necklace to confirm placement."
          },
          {
            question: "Are adjustable necklaces better for layering?",
            answer: "They offer more placement options, but chain texture, pendant width and movement still affect overlap and tangling."
          },
          {
            question: "How much space should I leave between layered necklaces?",
            answer: "There is no guaranteed spacing. Test measured separation while accounting for pendant drops, chain gauges and movement."
          },
          {
            question: "How do I choose necklace length as a gift?",
            answer: "Measure a frequently worn necklace or choose an adjustable, exchangeable design rather than guessing from body characteristics."
          },
          {
            question: "Can a jeweller shorten a diamond necklace?",
            answer: "Some chains and articulated designs can be altered, but construction, reports, warranty and returns may be affected. Ask first."
          },
          {
            question: "Should a close necklace feel tight?",
            answer: "No. It should sit securely without restricting breathing, swallowing or normal movement."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Necklace Length at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond necklaces with detailed length guides, adjustable options and transparent sizing.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default async function SelectRightNecklaceLengthPage({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const localeData = getBlogDataByLocale("select-right-necklace-length", locale);
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
            {locale === "it" ? "Guide all'Acquisto" : locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ? "Product-Category Guides" : locale === "es" ? "Guías de categorías de productos" : "Product-Category Guides"}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {locale === "it" ? "Journal • Pubblicato il 15 luglio 2026" : locale === "de" ? "Journal • Veröffentlicht am 16. Juli 2026" : locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026" : locale === "fr" ? "Journal • Publié le 16. Juli 2026" : locale === "es" ? "Diario • Publicado el 16 de julio de 2026" : "Journal • Published July 16, 2026"}
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