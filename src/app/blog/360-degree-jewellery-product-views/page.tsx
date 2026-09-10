import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata
export const metadata: Metadata = {
  title: "How 360-Degree Jewellery Views Help Online Buyers",
  description: "Learn what 360-degree jewellery views reveal about settings, proportions, clasps and construction—and what buyers must still verify separately.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/360-degree-jewellery-product-views/",
  },
};

// 2. JSON-LD Schema
const schemaMarkup = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BlogPosting",
      "@id":"https://www.aureliaroyale.com/blog/360-degree-jewellery-product-views/#article",
      "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.aureliaroyale.com/blog/360-degree-jewellery-product-views/"},
      "headline":"How 360-Degree Product Views Help Jewellery Buyers",
      "description":"Learn what 360-degree jewellery views reveal about settings, proportions, clasps and construction—and what buyers must still verify separately.",
      "image":"https://www.aureliaroyale.com/images/blog/360-degree-jewellery-product-views.webp",
      "datePublished":"2026-07-16",
      "dateModified":"2026-07-16",
      "author":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "publisher":{"@type":"Organization","name":"Aurelia Royale","url":"https://www.aureliaroyale.com/"},
      "inLanguage":"en-GB",
      "articleSection":"Buying Lab-Grown Diamond Jewellery",
      "keywords":["360-degree jewellery product views","360 jewellery photography","interactive jewellery images","diamond ring 360 view"]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aureliaroyale.com/blog/360-degree-jewellery-product-views/#breadcrumb",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://www.aureliaroyale.com/"},
        {"@type":"ListItem","position":2,"name":"Journal","item":"https://www.aureliaroyale.com/blog/"},
        {"@type":"ListItem","position":3,"name":"How 360-Degree Product Views Help Jewellery Buyers","item":"https://www.aureliaroyale.com/blog/360-degree-jewellery-product-views/"}
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://www.aureliaroyale.com/blog/360-degree-jewellery-product-views/#faq",
      "mainEntity":[
        {"@type":"Question","name":"What is a 360-degree jewellery product view?","acceptedAnswer":{"@type":"Answer","text":"It is an interactive or pre-recorded rotation showing a piece from multiple angles using photographs, video or a 3D model."}},
        {"@type":"Question","name":"Is a 360 spin the same as a 3D model?","acceptedAnswer":{"@type":"Answer","text":"No. A photo spin uses captured frames of a physical item. A 3D model uses digital geometry and textures."}},
        {"@type":"Question","name":"What should I check in a diamond ring 360 view?","acceptedAnswer":{"@type":"Answer","text":"Check diamond outline, prongs, setting height, gallery, shoulders, shank, side stones and reverse."}},
        {"@type":"Question","name":"Can a 360 view prove diamond quality?","acceptedAnswer":{"@type":"Answer","text":"No. It demonstrates visible appearance and construction. Grades and origin require separate evidence."}},
        {"@type":"Question","name":"Does a 360 view show actual jewellery size?","acceptedAnswer":{"@type":"Answer","text":"No. The viewer scales to the screen. Use millimetre dimensions, finished weight and labelled on-body images."}},
        {"@type":"Question","name":"Should a 360 view show the exact product?","acceptedAnswer":{"@type":"Answer","text":"Ideally for unique ready-made items. Representative views are acceptable when clearly labelled with tolerances."}},
        {"@type":"Question","name":"Why is a 360 view useful for bracelets?","acceptedAnswer":{"@type":"Answer","text":"It can reveal link construction, underside finish and clasp integration, while handling video better shows articulation."}},
        {"@type":"Question","name":"Can 360 views be misleading?","acceptedAnswer":{"@type":"Answer","text":"Yes, if they use a wrong variant, unlabelled render, extreme lighting, rapid motion, hidden angles or distorted proportions."}},
        {"@type":"Question","name":"Should a jewellery spin rotate automatically?","acceptedAnswer":{"@type":"Answer","text":"It may begin automatically, but users should be able to pause it and take manual control."}},
        {"@type":"Question","name":"Must a 360 viewer work with a keyboard?","acceptedAnswer":{"@type":"Answer","text":"Interactive functionality should be keyboard-operable with labelled controls and visible focus."}},
        {"@type":"Question","name":"Can 360 views slow a jewellery website?","acceptedAnswer":{"@type":"Answer","text":"Yes. Responsive compression, poster images and on-demand loading reduce the impact of many high-resolution frames."}},
        {"@type":"Question","name":"What should I do if no 360 view is available?","acceptedAnswer":{"@type":"Answer","text":"Request front, profile, reverse, macro and fastening images plus a slow handling video."}}
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
        src: "/images/blog/360-degree-jewellery-product-views/57 (1).jpg",
        alt: "360-degree jewellery product view showing diamond ring rotation",
        title: "How 360-Degree Product Views Help Jewellery Buyers",
        caption: "A 360-degree view lets buyers inspect jewellery from every angle, revealing details hidden in still hero images.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A still photograph shows one chosen angle. A 360-degree product view lets the buyer move around the jewellery and inspect how the design changes from front to profile and reverse."
      },
      {
        type: "paragraph",
        text: "That is especially useful for diamond jewellery because many practical details sit outside the face-up view: setting height, gallery structure, prong alignment, clasp construction, pendant depth and bracelet articulation."
      },
      {
        type: "paragraph",
        text: "Yet \"360 view\" can describe several different technologies. It may be a sequence of photographs, a pre-recorded rotation video or a fully interactive three-dimensional model. Buyers should know which one they are using and what it can genuinely demonstrate."
      }
    ]
  },
  {
    heading: "Quick answer: what does a 360-degree jewellery view help you check?",
    content: [
      {
        type: "paragraph",
        text: "A useful rotation can reveal:"
      },
      {
        type: "numbered-list",
        items: [
          "Overall proportion from every horizontal angle.",
          "Ring setting height and gallery design.",
          "Diamond outline and pattern as the piece turns.",
          "Prong, bezel and stone alignment.",
          "Earring basket depth and post position.",
          "Pendant bail, reverse and chain attachment.",
          "Bracelet links, articulation and clasp integration.",
          "Surface finish, joins and visible construction.",
          "How light and shadow change across the piece.",
          "Whether the exact selected variant matches the listing."
        ]
      },
      {
        type: "paragraph",
        text: "It cannot independently verify diamond origin, carat weight, laboratory grades, metal fineness, long-term durability or report authenticity. Those require written evidence."
      }
    ]
  },
  {
    heading: "360 spin, video and 3D model are different",
    content: [
      {
        type: "paragraph",
        text: "Each format offers different evidence:"
      },
      {
        type: "image",
        src: "/images/blog/360-degree-jewellery-product-views/57 (2).jpg",
        alt: "Comparison of photographic 360 spin, rotation video and interactive 3D model formats",
        title: "360-Degree View Formats Compared",
        caption: "Different 360-degree technologies offer different strengths and limitations for jewellery inspection.",
        priority: false
      },
      {
        type: "table",
        headers: ["Format", "How it works", "Main strength", "Limitation"],
        rows: [
          ["Photographic 360 spin", "Many still photographs captured around the product", "Shows the physical item consistently", "Usually rotates on one fixed axis"],
          ["Rotation video", "Product or camera moves in a pre-recorded clip", "Shows movement and light naturally", "Buyer cannot freely control every angle"],
          ["Interactive 3D model", "Digital geometry and textures rendered in real time", "Free rotation, zoom and sometimes AR", "May be a representation rather than the physical item"],
          ["Turntable GIF", "Short looping image sequence", "Simple and widely compatible", "Limited control, resolution and accessibility"]
        ]
      },
      {
        type: "paragraph",
        text: "A seller should label the format accurately. A digital 3D model should not be presented as exact-item photography unless it was created and validated for that item."
      }
    ]
  },
  {
    heading: "Why a spin reveals more than a hero image",
    content: [
      {
        type: "paragraph",
        text: "Hero images are composed to create the most flattering silhouette. They commonly hide depth."
      },
      {
        type: "paragraph",
        text: "As a product rotates, buyers can see:"
      },
      {
        type: "bullet-list",
        items: [
          "whether a ring head is balanced over the shank;",
          "how far a pendant projects;",
          "whether earring baskets are shallow or deep;",
          "how a clasp aligns with a bracelet;",
          "whether decorative details continue around the piece; and",
          "how reflections move across polished metal."
        ]
      },
      {
        type: "paragraph",
        text: "This makes a 360 view an inspection tool rather than simply an animation."
      }
    ]
  },
  {
    heading: "What to inspect in a diamond ring spin",
    content: [
      {
        type: "paragraph",
        text: "Pause at four positions: face-up, three-quarter, true profile and reverse."
      },
      {
        type: "paragraph",
        text: "Check:"
      },
      {
        type: "bullet-list",
        items: [
          "centre-diamond outline and orientation;",
          "symmetry of prongs or bezel;",
          "setting height;",
          "gallery and under-bezel structure;",
          "shoulder transition;",
          "shank width and thickness;",
          "side-stone alignment; and",
          "clearance that may affect stacking."
        ]
      },
      {
        type: "paragraph",
        text: "A horizontal rotation cannot show every underside detail. The gallery may still require separate close-up images or a second vertical-axis view."
      },
      {
        type: "paragraph",
        parts: [
          { text: "Use " },
          { text: "how to check jewellery dimensions and weight", href: "/blog/check-jewellery-product-dimensions-weight/" },
          { text: " because rotation does not preserve actual scale on screen." }
        ]
      }
    ]
  },
  {
    heading: "What to inspect in earrings",
    content: [
      {
        type: "paragraph",
        text: "For studs and drops, watch for:"
      },
      {
        type: "bullet-list",
        items: [
          "face-up matching across the pair;",
          "basket or decorative-element depth;",
          "post alignment;",
          "hinge or lever movement;",
          "back or fastening type;",
          "articulation between sections; and",
          "whether left and right designs are mirrored."
        ]
      },
      {
        type: "paragraph",
        text: "If only one earring is shown, confirm that the product is sold as a pair and request pair imagery. A spin of one representative item cannot prove matching across two delivered earrings."
      }
    ]
  },
  {
    heading: "What to inspect in necklaces and pendants",
    content: [
      {
        type: "paragraph",
        text: "A pendant rotation can show:"
      },
      {
        type: "bullet-list",
        items: [
          "bail shape and opening;",
          "attachment orientation;",
          "front-to-back depth;",
          "whether the reverse is open or closed;",
          "how the pendant may tilt; and",
          "whether the chain is removable."
        ]
      },
      {
        type: "image",
        src: "/images/blog/360-degree-jewellery-product-views/57 (3).jpg",
        alt: "360-degree view of pendant showing bail, chain attachment and reverse details",
        title: "Inspecting Pendants with 360-Degree Views",
        caption: "A pendant rotation reveals bail shape, depth, reverse construction and chain attachment details.",
        priority: false
      },
      {
        type: "paragraph",
        text: "However, a rigid turntable spin does not show how the chain drapes on a neck. It should be combined with on-body imagery, chain-length information and a short movement video."
      }
    ]
  },
  {
    heading: "What to inspect in bracelets",
    content: [
      {
        type: "paragraph",
        text: "Bracelets need more than a rotation of a closed circle. Buyers should see:"
      },
      {
        type: "bullet-list",
        items: [
          "link articulation;",
          "underside construction;",
          "clasp open and closed;",
          "safety catches;",
          "hinge movement;",
          "width and thickness; and",
          "how the piece bends around a wrist."
        ]
      },
      {
        type: "paragraph",
        text: "A turntable can display appearance but may conceal flexibility. Request a handling video for articulated tennis bracelets."
      }
    ]
  },
  {
    heading: "Rotation helps evaluate visible workmanship",
    content: [
      {
        type: "paragraph",
        text: "Consistent lighting across frames can make some irregularities easier to notice:"
      },
      {
        type: "bullet-list",
        items: [
          "uneven stone heights;",
          "prongs that do not align;",
          "interrupted polish;",
          "asymmetric settings;",
          "abrupt joins; and",
          "clasp components that do not sit flush."
        ]
      },
      {
        type: "paragraph",
        text: "Do not mistake a single compression artefact, dust particle or frame-to-frame reflection for a defect. Inspect the same feature across neighbouring angles and request a sharp still image if it matters."
      },
      {
        type: "paragraph",
        text: "The rotation cannot test stone security or metal strength. Ask how the seller performs final quality control."
      }
    ]
  },
  {
    heading: "Exact-item versus representative rotation",
    content: [
      {
        type: "paragraph",
        text: "The most important disclosure remains: Does the spin show the exact piece?"
      },
      {
        type: "paragraph",
        text: "For a ready-made unique piece, an exact-item spin can demonstrate the actual stone arrangement and finish. For made-to-order jewellery, a representative spin can explain design and construction, but the delivered diamonds, engraving or dimensions may vary within the specification."
      },
      {
        type: "paragraph",
        text: "The page should state:"
      },
      {
        type: "bullet-list",
        items: [
          "exact item, sample, representative piece or digital model;",
          "variant shown;",
          "product size and carat option shown;",
          "permitted variation; and",
          "whether the delivered item will receive exact-item media before dispatch."
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Read " },
          { text: "ready-made vs made-to-order diamond jewellery", href: "/blog/ready-made-vs-made-to-order-diamond-jewellery/" },
          { text: " for the wider distinction." }
        ]
      }
    ]
  },
  {
    heading: "Lighting and rotation speed matter",
    content: [
      {
        type: "paragraph",
        text: "A jewellery spin should turn slowly enough to inspect. Rapid rotation under intense spotlights can create sparkle without showing construction."
      },
      {
        type: "paragraph",
        text: "Useful implementation provides:"
      },
      {
        type: "bullet-list",
        items: [
          "drag control;",
          "pause at any angle;",
          "zoom without losing focus;",
          "neutral, consistent background;",
          "controlled but not deceptive lighting;",
          "reset-to-front control; and",
          "optional full-screen viewing."
        ]
      },
      {
        type: "paragraph",
        text: "Automatic rotation can introduce motion discomfort or distract from the page. W3C guidance requires users to be able to pause, stop or hide certain moving content, and functionality should be operable through a keyboard."
      }
    ]
  },
  {
    heading: "What a 360-degree view cannot prove",
    content: [
      {
        type: "paragraph",
        text: "Even a perfect rotation cannot establish:"
      },
      {
        type: "bullet-list",
        items: [
          "laboratory-grown versus natural diamond origin;",
          "exact diamond carat weight;",
          "cut, colour or clarity grade;",
          "precious-metal fineness;",
          "report validity;",
          "invisible treatment;",
          "metal weight; or",
          "contractual return and warranty rights."
        ]
      },
      {
        type: "paragraph",
        text: "Pair the view with complete specifications, report verification, dimensions, hallmark information and policies. Review the broader diamond jewellery product-specification checklist.",
        parts: [
          { text: "Review the broader " },
          { text: "diamond jewellery product-specification checklist", href: "/blog/diamond-jewellery-product-specifications-checklist/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Do 360 views show the real size?",
    content: [
      {
        type: "paragraph",
        text: "No. The viewer fills an available screen container. A small ring and large bracelet may appear equally large within separate viewers."
      },
      {
        type: "paragraph",
        text: "The page must still provide:"
      },
      {
        type: "bullet-list",
        items: [
          "millimetre dimensions;",
          "setting height or depth;",
          "approximate finished weight;",
          "wearable length; and",
          "labelled on-body reference."
        ]
      },
      {
        type: "paragraph",
        text: "Zoom is for detail, not scale."
      }
    ]
  },
  {
    heading: "Accessibility and fallbacks",
    content: [
      {
        type: "paragraph",
        text: "An interactive view must not make product information inaccessible."
      },
      {
        type: "paragraph",
        text: "A robust product page should offer:"
      },
      {
        type: "bullet-list",
        items: [
          "keyboard-operable rotation and controls;",
          "visible focus indicators;",
          "pause or stop for automatic motion;",
          "labelled controls;",
          "touch targets large enough for mobile use;",
          "a descriptive text summary;",
          "equivalent still images; and",
          "no essential facts available only inside the viewer."
        ]
      },
      {
        type: "paragraph",
        text: "If JavaScript fails or the user prefers reduced motion, the product must remain understandable and purchasable."
      }
    ]
  },
  {
    heading: "Performance and mobile experience",
    content: [
      {
        type: "paragraph",
        text: "Dozens of high-resolution frames can make a page slow. A slow viewer reduces trust and can harm the wider shopping experience."
      },
      {
        type: "paragraph",
        text: "Aurelia should:"
      },
      {
        type: "bullet-list",
        items: [
          "load the main product image first;",
          "initialise the spin only when requested or near the viewport;",
          "serve responsive compressed frames;",
          "avoid downloading every variant's rotation at once;",
          "provide a poster image;",
          "reserve the viewer's dimensions to prevent layout shift;",
          "support touch drag without trapping page scroll; and",
          "test on slow mobile connections."
        ]
      },
      {
        type: "paragraph",
        text: "Still images should remain crawlable. Google Merchant Center accepts additional product images and product-video data, while its optional 3D model attribute currently has market and file requirements. Platform eligibility should be verified at implementation time."
      }
    ]
  },
  {
    heading: "360-view checklist for buyers",
    content: [
      {
        type: "image",
        src: "/images/blog/360-degree-jewellery-product-views/57 (4).jpg",
        alt: "360-degree jewellery view checklist for buyers",
        title: "360-View Checklist",
        caption: "Use this checklist to verify what a 360-degree jewellery view can and cannot show before buying online.",
        priority: false
      },
      {
        type: "table",
        headers: ["Check", "Answer"],
        rows: [
          ["Is this a photo spin, video or 3D model?", ""],
          ["Exact item or representative?", ""],
          ["Correct metal and diamond variant?", ""],
          ["Can I pause and drag manually?", ""],
          ["Can I inspect profile and reverse?", ""],
          ["Is zoom sharp enough?", ""],
          ["Are clasp or backs shown?", ""],
          ["Is lighting consistent?", ""],
          ["Are dimensions stated separately?", ""],
          ["Do still images support the spin?", ""],
          ["Can keyboard and mobile users control it?", ""],
          ["What material question remains unanswered?", ""]
        ]
      }
    ]
  },
  {
    heading: "Red flags",
    content: [
      {
        type: "paragraph",
        text: "Pause when:"
      },
      {
        type: "bullet-list",
        items: [
          "\"360 view\" is only a looping sparkle clip;",
          "the format is not labelled;",
          "the shown variant differs from the selection;",
          "a render is presented as exact photography;",
          "rotation is too fast to inspect;",
          "the underside or clasp never appears;",
          "zoom reveals severe blur;",
          "the viewer has no pause or keyboard control;",
          "the page relies on the spin instead of dimensions; or",
          "loading the viewer blocks the rest of the product page."
        ]
      }
    ]
  },
  {
    heading: "What Aurelia Royale should implement",
    content: [
      {
        type: "paragraph",
        text: "For priority pieces, Aurelia Royale should provide a controlled photographic spin of the correct variant, with:"
      },
      {
        type: "bullet-list",
        items: [
          "exact or representative disclosure;",
          "drag, keyboard, pause and reset controls;",
          "sharp front, profile and reverse frames;",
          "consistent neutral lighting;",
          "separate clasp or handling video where required;",
          "fallback still images and descriptive text;",
          "responsive lazy loading after the featured image; and",
          "performance monitoring on European mobile connections."
        ]
      },
      {
        type: "paragraph",
        text: "True 3D models should be labelled as digital models and validated against jewellery dimensions and construction before publication."
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
          { text: "360-degree product views help jewellery buyers inspect the angles that still hero images hide. They are particularly valuable for setting height, gallery structure, stone alignment, pendant depth, earring construction and bracelet clasps.\n\n" },
          { text: "Their value depends on control, accuracy and disclosure. A slow, sharp, variant-correct rotation is useful; a rapid unlabelled render is not.\n\n" },
          { text: "Use the viewer alongside still images, specifications, reports, dimensions and return protection. Rotation increases visual understanding, but it does not authenticate the material facts." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "What is a 360-degree jewellery product view?",
            answer: "It is an interactive or pre-recorded rotation that shows a piece from multiple angles, commonly using a sequence of photographs, video or a 3D model."
          },
          {
            question: "Is a 360 spin the same as a 3D model?",
            answer: "No. A photo spin uses captured frames of a physical item. A 3D model uses digital geometry and textures rendered in real time."
          },
          {
            question: "What should I check in a diamond ring 360 view?",
            answer: "Check the diamond outline, prongs, setting height, gallery, shoulders, shank, side stones, reverse and potential stacking clearance."
          },
          {
            question: "Can a 360 view prove diamond quality?",
            answer: "No. It demonstrates visible appearance and construction under its lighting. Laboratory grades and diamond origin require separate evidence."
          },
          {
            question: "Does a 360 view show actual jewellery size?",
            answer: "No. The viewer scales to the screen. Use stated millimetre dimensions, finished weight and labelled on-body images."
          },
          {
            question: "Should a 360 view show the exact product?",
            answer: "Ideally for unique ready-made items. Representative views are acceptable for made-to-order products when clearly labelled with tolerances."
          },
          {
            question: "Why is a 360 view useful for bracelets?",
            answer: "It can reveal link construction, underside finish and clasp integration, although a handling video is better for testing visible articulation."
          },
          {
            question: "Can 360 views be misleading?",
            answer: "Yes, if they use the wrong variant, an unlabelled render, extreme lighting, rapid motion, hidden angles or distorted proportions."
          },
          {
            question: "Should a jewellery spin rotate automatically?",
            answer: "It may begin automatically, but users should be able to pause it and take manual control. Reduced-motion preferences should be respected."
          },
          {
            question: "Must a 360 viewer work with a keyboard?",
            answer: "Interactive functionality should be keyboard-operable, with labelled controls and visible focus, while equivalent still images remain available."
          },
          {
            question: "Can 360 views slow a jewellery website?",
            answer: "Yes. Multiple high-resolution frames can be heavy. Responsive compression, poster images and on-demand loading reduce the impact."
          },
          {
            question: "What should I do if no 360 view is available?",
            answer: "Request front, profile, reverse, macro and fastening images plus a slow handling video. A complete still-image set can provide strong evidence."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop with Confidence at Aurelia",
        subtitle: "Browse our collection of lab-grown diamond jewellery with detailed product views, complete specifications and verified reports.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function ThreeSixtyDegreeJewelleryViewsPage() {
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
            How 360-Degree Product Views Help Jewellery Buyers
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="360-degree-jewellery-product-views" />
      <NewsletterSection />
    </main>
  );
}