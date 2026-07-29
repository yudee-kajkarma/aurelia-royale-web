import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How to Choose the Right Diamond Earring Size",
  description: "Choose the right diamond earring size using millimetres, pair-total carat weight, setting footprint, on-ear scale and intended visibility.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/select-right-size-diamond-earrings/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/select-right-size-diamond-earrings/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/select-right-size-diamond-earrings/"},
      "headline":"How to Select the Right Size Diamond Earrings",
      "description":"Choose the right diamond earring size using millimetres, pair-total carat weight, setting footprint, on-ear scale and intended visibility.",
      "image":"https://www.aureliaroyale.com/images/blog/select-right-size-diamond-earrings.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Product-Category Guides",
      "keywords":["how to select the right size diamond earrings","diamond earring size guide","diamond stud earring size","earring size in mm"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/select-right-size-diamond-earrings/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How to Select the Right Size Diamond Earrings","item":"https://www.aureliaroyale.com/blog/select-right-size-diamond-earrings/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/select-right-size-diamond-earrings/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What is the best size for diamond earrings?","acceptedAnswer":{"@type":"Answer","text":"There is no universal best size. Choose by desired visibility, earlobe, piercing, setting, comfort and use."}},
        {"@type":"Question","name":"Is diamond earring size measured in carats or millimetres?","acceptedAnswer":{"@type":"Answer","text":"Carats measure diamond weight. Millimetres describe diamond spread and finished earring dimensions. Use both."}},
        {"@type":"Question","name":"Is total carat weight for one earring or the pair?","acceptedAnswer":{"@type":"Answer","text":"It is often the pair total, but listings vary. Confirm pair, per-ear and principal-stone weight."}},
        {"@type":"Question","name":"Does a one-carat pair mean one carat in each ear?","acceptedAnswer":{"@type":"Answer","text":"Usually not. A two-stone one-carat-total pair may mean about half a carat per ear, but verify it."}},
        {"@type":"Question","name":"Do equal-carat diamonds look the same size?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. Shape and proportions can produce different face-up measurements at equal weight."}},
        {"@type":"Question","name":"How do I estimate earring size at home?","acceptedAnswer":{"@type":"Answer","text":"Use the stated finished dimensions to make an actual-size paper template and compare it beside the ear."}},
        {"@type":"Question","name":"Does a bezel make a diamond stud look larger?","acceptedAnswer":{"@type":"Answer","text":"A bezel adds a visible border and increases the finished footprint, although the diamond itself is unchanged."}},
        {"@type":"Question","name":"Do halo earrings look larger than solitaire studs?","acceptedAnswer":{"@type":"Answer","text":"They generally create a larger footprint with accent stones. Check centre and total weights separately."}},
        {"@type":"Question","name":"How should I size diamond drop earrings?","acceptedAnswer":{"@type":"Answer","text":"Compare full length, width, depth and on-ear placement while considering hairstyle, clothing and movement."}},
        {"@type":"Question","name":"How should I size diamond hoops?","acceptedAnswer":{"@type":"Answer","text":"Check external diameter, internal opening, width and post-to-bottom distance rather than diameter alone."}},
        {"@type":"Question","name":"What size earrings work for multiple piercings?","acceptedAnswer":{"@type":"Answer","text":"Measure piercing spacing and compare each finished setting's footprint and orientation to prevent overlap."}},
        {"@type":"Question","name":"Can a diamond report tell me the finished earring size?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. It may give diamond measurements, while the product specification must give finished dimensions."}}
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
        src: "/images/blog/select-right-size-diamond-earrings/63 (1).png",
        alt: "How to select the right size diamond earrings - complete size guide",
        title: "How to Select the Right Size Diamond Earrings",
        caption: "Choose the right diamond earring size by comparing millimetres, carat weight, setting footprint and on-ear scale.",
        priority: true
      },
      {
        type: "paragraph",
        text: "The right diamond earring size is a visual and practical choice, not a fixed carat rule. The same weight can look different when diamond shape, proportions, setting and earlobe are different."
      },
      {
        type: "paragraph",
        text: "To choose confidently, separate three measurements:"
      },
      {
        type: "numbered-list",
        items: [
          "Diamond weight in carats.",
          "Diamond face-up dimensions in millimetres.",
          "Finished earring dimensions including the setting."
        ]
      },
      {
        type: "paragraph",
        text: "Then judge the result against the wearer's ear, piercing position and intended use."
      }
    ]
  },
  {
    heading: "Quick answer: what size diamond earrings should you choose?",
    content: [
      {
        type: "paragraph",
        text: "Choose **subtle** earrings when you want a compact footprint or an easy fit within an earring stack."
      },
      {
        type: "paragraph",
        text: "Choose a **balanced** scale when the earrings should be clearly visible without dominating the ear."
      },
      {
        type: "paragraph",
        text: "Choose a **prominent** scale when the earrings are intended to be a focal point."
      },
      {
        type: "paragraph",
        text: "Those descriptions are more useful than universal carat labels. Check exact millimetres, confirm whether carat weight is for one earring or the pair, and view the design on an ear at credible scale."
      }
    ]
  },
  {
    heading: "Why carat weight is not earring size",
    content: [
      {
        type: "paragraph",
        text: "Carat measures weight. GIA defines one metric carat as 0.2 grams and divides it into 100 points. Weight is important, but it does not directly state face-up diameter."
      },
      {
        type: "paragraph",
        text: "Two equal-weight diamonds can differ in visible spread because their shapes and proportions distribute material differently. A deeper stone can carry more weight below the face; an elongated shape may look larger along one axis."
      },
      {
        type: "paragraph",
        text: "The setting adds another layer. A bezel creates a metal border. A halo increases the overall footprint with accent stones. Fine prongs show more of the diamond's outline."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "carat weight versus visible diamond size", href: "/blog/carat-weight-vs-visible-size-diamond/" },
          { text: " for the gem-level explanation." }
        ]
      }
    ]
  },
  {
    heading: "Understand pair-total carat weight",
    content: [
      {
        type: "paragraph",
        text: "Earrings are often advertised by the combined weight of both sides."
      },
      {
        type: "image",
        src: "/images/blog/select-right-size-diamond-earrings/63 (2).png",
        alt: "Diamond earring size guide - understanding pair-total carat weight",
        title: "Understanding Pair-Total Carat Weight",
        caption: "Earring carat weight is often stated as the combined total for both earrings - verify the per-ear distribution.",
        priority: false
      },
      {
        type: "table",
        headers: ["Listing structure", "What the headline may mean", "What to verify"],
        rows: [
          ["Two solitaire studs", "Combined weight of two principal diamonds", "Exact weight and measurements of each diamond"],
          ["Halo studs", "Centre and accent diamonds across both ears", "Centre weight, accent weight and pair total"],
          ["Drop earrings", "Every diamond in both earrings", "Per-ear distribution and principal stones"],
          ["Cluster earrings", "Many small diamonds across the pair", "Stone count and finished dimensions"]
        ]
      },
      {
        type: "paragraph",
        text: "A 1.00-carat total two-stone pair may contain approximately 0.50 carat per ear, but do not assume that division for a multi-stone design. The page should state it."
      }
    ]
  },
  {
    heading: "The measurements that actually help",
    content: [
      {
        type: "paragraph",
        text: "For stud earrings:"
      },
      {
        type: "bullet-list",
        items: [
          "each diamond's length and width;",
          "finished setting width;",
          "setting height or depth;",
          "post placement; and",
          "total product weight."
        ]
      },
      {
        type: "paragraph",
        text: "For a round diamond, minimum and maximum diameter show face-up spread. For oval, pear, emerald and other fancy shapes, both length and width matter."
      },
      {
        type: "paragraph",
        text: "For drop earrings:"
      },
      {
        type: "bullet-list",
        items: [
          "full drop length;",
          "maximum width;",
          "depth;",
          "size of each main motif; and",
          "per-ear weight."
        ]
      },
      {
        type: "paragraph",
        text: "Confirm where the length begins. Some measurements include the fitting; others begin below it."
      },
      {
        type: "paragraph",
        text: "For hoops and huggie-style earrings:"
      },
      {
        type: "bullet-list",
        items: [
          "external diameter;",
          "internal opening;",
          "hoop width;",
          "post-to-bottom distance; and",
          "diamond-set area."
        ]
      },
      {
        type: "paragraph",
        text: "An external diameter alone does not tell you whether the hoop will clear the earlobe comfortably."
      }
    ]
  },
  {
    heading: "A practical three-step size method",
    content: [
      {
        type: "paragraph",
        text: "Step 1: choose the intended visibility:"
      },
      {
        type: "paragraph",
        text: "Decide whether the pair should be subtle, balanced or prominent. Consider daily clothing, workplace, events and whether other earrings will be worn nearby."
      },
      {
        type: "paragraph",
        text: "Avoid choosing by age, face shape or gender stereotypes. Personal style, anatomy and intended effect are more relevant."
      },
      {
        type: "paragraph",
        text: "Step 2: translate the product into millimetres:"
      },
      {
        type: "paragraph",
        text: "Record diamond dimensions and complete setting dimensions. Use a ruler, calliper reference or paper template at actual size."
      },
      {
        type: "paragraph",
        text: "For a stud, cut a small circle or outline matching the finished width and hold it beside—not inside—the piercing. For a drop, mark the stated length on a narrow paper strip. This is approximate but more informative than zoomed photography."
      },
      {
        type: "paragraph",
        text: "Step 3: validate with on-ear imagery and returns:"
      },
      {
        type: "paragraph",
        text: "Use an on-ear photo to assess proportion, but check whether the product has been composited or enlarged. Look for multiple angles and a video."
      },
      {
        type: "paragraph",
        text: "Because earlobes and piercings vary, ensure the return policy allows a reasonable at-home assessment subject to any hygiene, tag or handling conditions."
      }
    ]
  },
  {
    heading: "How setting style changes apparent size",
    content: [
      {
        type: "paragraph",
        text: "Different setting styles affect how large the earring appears."
      },
      {
        type: "image",
        src: "/images/blog/select-right-size-diamond-earrings/63 (3).png",
        alt: "How different earring settings affect apparent size - prong, bezel, halo and cluster",
        title: "Setting Style and Apparent Size",
        caption: "Different settings create different finished footprints and can change how large an earring looks.",
        priority: false
      },
      {
        type: "table",
        headers: ["Setting", "Size effect", "Other consideration"],
        rows: [
          ["Fine prongs", "Keeps the diamond outline visually open", "Prong count and symmetry"],
          ["Bezel", "Adds a defined metal border", "Finished diameter exceeds diamond diameter"],
          ["Halo", "Creates a larger overall footprint", "Headline total includes accent stones"],
          ["Cluster", "Produces scale through several diamonds", "Individual stones are smaller than the total suggests"],
          ["Elevated basket", "May look similar front-on but project farther", "Side profile and tipping"]
        ]
      },
      {
        type: "paragraph",
        text: "Compare finished dimensions, not only centre-stone measurements."
      }
    ]
  },
  {
    heading: "How diamond shape changes the size impression",
    content: [
      {
        type: "paragraph",
        text: "Round shapes are read by diameter. Elongated ovals, pears and marquises can create more length at a given weight, while square and step-cut shapes create different outlines and reflection patterns."
      },
      {
        type: "paragraph",
        text: "Do not use one generic carat-to-millimetre conversion across shapes. Compare the actual measurements on the report or specification. For pairs, both principal diamonds should have compatible outlines and dimensions."
      }
    ]
  },
  {
    heading: "Consider the earlobe and piercing position",
    content: [
      {
        type: "paragraph",
        text: "The same stud can appear different on a small, broad, attached or free earlobe. A high piercing leaves more space below; a low piercing can make a larger setting approach the edge."
      },
      {
        type: "paragraph",
        text: "Also consider:"
      },
      {
        type: "bullet-list",
        items: [
          "stretched or angled piercings;",
          "multiple-piercing spacing;",
          "post length;",
          "back support;",
          "glasses, hearing devices or headphones; and",
          "whether a drop touches the jaw or neck."
        ]
      },
      {
        type: "paragraph",
        text: "If a piercing is uncomfortable or damaged, seek professional guidance rather than using a larger back to mask the issue."
      }
    ]
  },
  {
    heading: "Size for everyday wear",
    content: [
      {
        type: "paragraph",
        text: "Frequent-wear earrings benefit from a scale that works with the wearer's routine. Ask whether they need to fit beneath headphones, avoid telephone contact, coordinate with multiple piercings or remain discreet at work."
      },
      {
        type: "paragraph",
        text: "Size alone does not decide comfort. Setting height, weight distribution, post length and back type are equally important. A broad lightweight earring may feel different from a compact but deep design."
      }
    ]
  },
  {
    heading: "Size for occasions",
    content: [
      {
        type: "paragraph",
        text: "Occasion earrings can support a stronger footprint or longer movement, but plan for hairstyle, neckline and wear duration. A prominent drop may catch on a high collar; a large stud may tip if its back provides insufficient support."
      },
      {
        type: "paragraph",
        text: "Try the full outfit before the event. Do not first test a new high-value pair immediately before travel or a long occasion."
      }
    ]
  },
  {
    heading: "Size for multiple piercings",
    content: [
      {
        type: "paragraph",
        text: "Measure the distance between piercings and consider each earring's complete footprint, not only its diamond. Leave room for settings, prongs and backs."
      },
      {
        type: "paragraph",
        text: "Check orientation for oval, pear or marquise designs. A rotated shape can use space more efficiently, but the post position must support the intended angle."
      }
    ]
  },
  {
    heading: "Choosing a size as a gift",
    content: [
      {
        type: "paragraph",
        text: "The safest evidence is what the recipient already wears. Note the dimensions of a favourite pair, preferred metal, fastening and whether they choose subtle or prominent jewellery."
      },
      {
        type: "paragraph",
        text: "If that information is unavailable, prioritise a versatile design with exact specifications and a clear return or exchange route. Do not rely on generic labels such as \"everyday size\"."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "how to choose lab-grown diamond earrings as a gift", href: "/blog/choose-lab-grown-diamond-earrings-gift/" },
          { text: " for the complete gifting process." }
        ]
      }
    ]
  },
  {
    heading: "Balance size with diamond quality",
    content: [
      {
        type: "paragraph",
        text: "Increasing carat weight while sacrificing cut appearance can create a larger but less lively diamond. GIA explains that proportions influence brightness, fire and scintillation. Colour and clarity also contribute to the full quality and price comparison."
      },
      {
        type: "paragraph",
        text: "Choose a pair that meets the desired visible scale while remaining harmonious in cut appearance, colour, clarity and measurements. The highest grade in every category is not automatically necessary for the intended look."
      }
    ]
  },
  {
    heading: "Check report measurements correctly",
    content: [
      {
        type: "paragraph",
        text: "An individual diamond report may show exact measurements for a loose graded diamond. A finished-jewellery report can describe mounted stones, but IGI notes that some assessments are limited \"as mounting permits\"."
      },
      {
        type: "paragraph",
        text: "Confirm whether the reported dimensions belong to:"
      },
      {
        type: "bullet-list",
        items: [
          "each principal diamond;",
          "a representative diamond;",
          "a range of accent stones; or",
          "the complete finished earring."
        ]
      },
      {
        type: "paragraph",
        text: "Never substitute diamond measurements for finished setting dimensions. Buyers need both."
      }
    ]
  },
  {
    heading: "Online size checklist",
    content: [
      {
        type: "image",
        src: "/images/blog/select-right-size-diamond-earrings/63 (4).png",
        alt: "Diamond earring size selection checklist",
        title: "Diamond Earring Size Checklist",
        caption: "Use this checklist to verify diamond measurements, finished dimensions and on-ear scale before ordering.",
        priority: false
      },
      {
        type: "bullet-list",
        items: [
          "Pair-total and per-ear carat weights are distinguished.",
          "Principal-diamond weights and dimensions are stated.",
          "Finished earring width, height and depth are stated.",
          "Drop length or hoop diameter is clearly defined.",
          "Both earrings are shown together.",
          "Side and back views reveal setting profile.",
          "On-ear imagery appears credibly scaled.",
          "Product weight, post and back are disclosed.",
          "Report measurements match the offered stones.",
          "Returns and handling conditions are saved."
        ]
      }
    ]
  },
  {
    heading: "Common sizing mistakes",
    content: [
      {
        type: "paragraph",
        text: "Avoid:"
      },
      {
        type: "bullet-list",
        items: [
          "treating pair-total weight as the weight of each ear;",
          "using carat as a direct diameter;",
          "comparing different shapes by weight alone;",
          "ignoring the setting border;",
          "judging from a macro image;",
          "overlooking setting height and product weight;",
          "assuming a model's ear matches the wearer's; and",
          "choosing a gift size without checking return terms."
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale should disclose",
    content: [
      {
        type: "paragraph",
        text: "Each earring page should provide pair-total, per-ear and principal-stone weights; diamond measurements; complete setting dimensions; drop length or hoop diameter; per-ear product weight where useful; post and back type; actual-scale and on-ear imagery; report scope; and clear returns information."
      },
      {
        type: "paragraph",
        text: "An optional printable actual-size template can help, provided printing instructions require 100% scale and include a calibration line."
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
          { text: "The right diamond earring size is the one that creates the intended presence on the actual wearer. Start with visibility, compare millimetres, include the setting and validate the result against the ear.\n\n" },
          { text: "Carat weight remains useful, but it is one input—not a visual-size guarantee. Exact dimensions turn an abstract number into a more confident choice." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is the best size for diamond earrings?",
            answer: "There is no universal best size. Choose according to desired visibility, earlobe, piercing position, setting, comfort and intended use."
          },
          {
            question: "Is diamond earring size measured in carats or millimetres?",
            answer: "Carats measure diamond weight. Millimetres describe diamond spread and finished earring dimensions. Use both."
          },
          {
            question: "Is total carat weight for one earring or the pair?",
            answer: "It is often the combined pair weight, but listings vary. Confirm pair total, per-ear weight and principal-stone weight."
          },
          {
            question: "Does a one-carat pair mean one carat in each ear?",
            answer: "Usually not. For a two-stone pair, one carat total may mean about half a carat per ear, but verify the specification."
          },
          {
            question: "Do equal-carat diamonds look the same size?",
            answer: "Not necessarily. Shape and proportions can produce different face-up measurements at equal weight."
          },
          {
            question: "How do I estimate earring size at home?",
            answer: "Use the stated finished dimensions to make an actual-size paper template, then compare it beside the ear with care."
          },
          {
            question: "Does a bezel make a diamond stud look larger?",
            answer: "A bezel adds a visible metal border and increases the finished footprint, although the diamond itself does not become larger."
          },
          {
            question: "Do halo earrings look larger than solitaire studs?",
            answer: "They generally create a larger overall footprint by surrounding the centre with accent stones. Check centre and total weights separately."
          },
          {
            question: "How should I size diamond drop earrings?",
            answer: "Compare full length, maximum width, depth and on-ear placement, while considering hairstyle, clothing and movement."
          },
          {
            question: "How should I size diamond hoops?",
            answer: "Check external diameter, internal opening, width and post-to-bottom distance rather than diameter alone."
          },
          {
            question: "What size earrings work for multiple piercings?",
            answer: "Measure spacing between piercings and compare each finished setting's footprint and orientation to prevent overlap."
          },
          {
            question: "Can a diamond report tell me the finished earring size?",
            answer: "Not necessarily. It may provide diamond measurements, while the product specification must provide complete setting dimensions."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Find Your Perfect Diamond Earring Size at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond earrings with complete dimensions, transparent carat weights and detailed size guidance.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function SelectRightSizeDiamondEarringsPage() {
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
            How to Select the Right Size Diamond Earrings
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
