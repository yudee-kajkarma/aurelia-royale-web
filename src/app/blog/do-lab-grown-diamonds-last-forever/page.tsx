import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Do Lab-Grown Diamonds Last Forever? Durability Guide",
  description: "Learn how long lab-grown diamonds last, whether they deteriorate, fade, scratch or chip, and how settings and maintenance affect their longevity.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/",
  },
};

// 2. The exact JSON-LD Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aureliaroyale.com/#organization",
      "name": "Aurelia Royale",
      "url": "https://www.aureliaroyale.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aureliaroyale.com/images/aurelia-royale-logo.png"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aureliaroyale.com/#website",
      "url": "https://www.aureliaroyale.com/",
      "name": "Aurelia Royale",
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#webpage",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/",
      "name": "Do Lab-Grown Diamonds Last Forever?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-last-forever.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-last-forever.webp",
      "width": 1600,
      "height": 900,
      "caption": "Laboratory-grown diamond jewellery designed for long-term wear"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#webpage"
      },
      "headline": "Do Lab-Grown Diamonds Last Forever?",
      "description": "Learn how long lab-grown diamonds last, whether they deteriorate, fade, scratch or chip, and how settings and maintenance affect their longevity.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "do lab-grown diamonds last forever",
        "how long do lab-grown diamonds last",
        "do lab-grown diamonds deteriorate",
        "can lab-grown diamonds chip",
        "are lab-grown diamonds durable",
        "lab-grown diamond longevity"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aureliaroyale.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.aureliaroyale.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Lab-Grown Diamond Education",
          "item": "https://www.aureliaroyale.com/blog/category/lab-grown-diamond-education/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Do Lab-Grown Diamonds Last Forever?",
          "item": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last forever?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can retain their diamond structure and optical properties indefinitely under normal jewellery conditions, but they are not indestructible."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last as long as natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can. Laboratory origin does not create a predetermined shorter lifespan."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds deteriorate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They do not ordinarily deteriorate through age or normal wear."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lab-grown diamond chip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A strong impact on a vulnerable edge, point or corner can cause chipping."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds get scratched?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are exceptionally scratch-resistant, but another diamond can scratch them."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds turn yellow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They do not normally turn yellow because of age. Lighting, dirt or reflections from the setting can make them appear warmer."
          }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT last longer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither growth method automatically provides a longer lifespan. The individual diamond and setting matter more."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds become heirlooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Properly maintained laboratory-grown diamond jewellery can be passed between generations."
          }
        },
        {
          "@type": "Question",
          "name": "Does the setting wear out before the diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can. Prongs, clasps, chains and other metal components may require repair while the diamond remains intact."
          }
        },
        {
          "@type": "Question",
          "name": "How should lab-grown diamond jewellery be stored?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Store pieces separately in lined compartments or soft pouches to prevent diamonds from scratching other jewellery or each other."
          }
        }
      ]
    }
  ]
};

// 3. The Article Content Sections
const articleSections: ArticleSection[] = [
  {
    "content": [
      {
        "type": "image",
        "src": "/images/blog/do-lab-grown-diamonds-last-forever/10 (1).jpg",
        "alt": "Laboratory-grown diamond jewellery designed for long-term wear",
        "title": "Do Lab-Grown Diamonds Last Forever?",
        "caption": "Laboratory-grown diamonds offer exceptional hardness and stability, allowing them to last for generations.",
        "priority": true
      },
      {
        "type": "paragraph",
        "text": "A lab-grown diamond can retain its diamond structure, hardness and optical properties indefinitely under normal jewellery conditions."
      },
      {
        "type": "paragraph",
        "text": "It does not have an expiry date, and it does not gradually turn into another material. Its laboratory origin does not cause it to wear out faster than a natural diamond."
      },
      {
        "type": "paragraph",
        "text": "However, \"forever\" should not be confused with \"indestructible.\" A laboratory-grown diamond can still chip if struck forcefully at a vulnerable point. It can become loose if the setting wears down, and it can look dull when oils or residue collect on its surface."
      },
      {
        "type": "paragraph",
        "text": "The diamond itself can potentially last for generations, but the complete jewellery piece requires care and maintenance."
      },
      {
        "type": "callout",
        "title": "Quick Answer",
        "parts": [
          {
            "text": "Lab-grown diamonds are capable of lasting as long as natural diamonds because both have the defining crystal structure and hardness of diamond.\n\n"
          },
          {
            "text": "Under normal conditions, a lab-grown diamond will not:\n"
          },
          {
            "text": "• Expire or decompose over time.\n"
          },
          {
            "text": "• Wear away or fade because it was grown in a laboratory.\n"
          },
          {
            "text": "• Permanently lose its brilliance due to age.\n\n"
          },
          {
            "text": "It can still:\n"
          },
          {
            "text": "• Chip from a hard impact or fracture along a cleavage plane.\n"
          },
          {
            "text": "• Become loose in its setting as prongs wear down.\n"
          },
          {
            "text": "• Accumulate surface dirt and oils that temporarily reduce sparkle."
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Question",
          "Short Answer"
        ],
        "rows": [
          [
            "Does a lab-grown diamond expire?",
            "No"
          ],
          [
            "Does it deteriorate with age?",
            "Not under ordinary jewellery conditions"
          ],
          [
            "Does it last as long as a natural diamond?",
            "It can"
          ],
          [
            "Can it scratch?",
            "It is extremely scratch-resistant, but another diamond can scratch it"
          ],
          [
            "Can it chip?",
            "Yes, if struck hard in a vulnerable area"
          ],
          [
            "Can it break?",
            "Yes, under sufficient force"
          ],
          [
            "Can it fade?",
            "Normal colourless diamond material does not fade from ordinary wear"
          ],
          [
            "Can it turn yellow with age?",
            "Not simply because it is laboratory-grown"
          ],
          [
            "Can it look dull?",
            "Yes, when dirty or when the cut performs poorly"
          ],
          [
            "Can the setting wear out?",
            "Yes; metal and prongs may wear sooner than the diamond"
          ],
          [
            "Can it become an heirloom?",
            "Yes, when the piece is well made and maintained"
          ]
        ]
      }
    ]
  },
  {
    "heading": "Why Can Lab-Grown Diamonds Last So Long?",
    "content": [
      {
        "type": "paragraph",
        "text": "Lab-grown diamonds are made from carbon atoms arranged in diamond's characteristic crystal structure. That structure gives them exceptional hardness, high resistance to surface abrasion, strong chemical resistance, and optical stability."
      },
      {
        "type": "paragraph",
        "text": "The production method changes the diamond's origin, not its fundamental identity as diamond material. GIA describes diamond as having remarkable hardness, low thermal expansion, and high resistance to corrosion, acids, and radiation."
      }
    ]
  },
  {
    "heading": "What Does \"Diamond Durability\" Actually Mean?",
    "content": [
      {
        "type": "paragraph",
        "text": "Gemstone durability has three main components:"
      },
      {
        "type": "bullet-list",
        "items": [
          "Hardness: Resistance to scratching and abrasion. Diamond scores 10 on the Mohs hardness scale. While it is highly resistant to ordinary materials, storing diamond-set jewellery together can scratch other diamonds.",
          "Toughness: Resistance to chipping and breaking. A forceful blow along a cleavage plane can cleave or fracture diamond. Edge points and sharp corners are most vulnerable.",
          "Stability: Resistance to heat, light, and chemicals. Normal exposure to indoor or day lighting does not affect colourless diamonds, but extreme temperatures (like a jeweller's torch) can cause oxidation."
        ]
      },
      {
        "type": "image",
        "src": "/images/blog/do-lab-grown-diamonds-last-forever/10 (2).jpg",
        "alt": "Comparing hardness, toughness and chemical stability of lab diamonds",
        "title": "Understanding Diamond Durability",
        "caption": "Diamond's structure yields Mohs 10 hardness, which is resistant to everyday surface scratching."
      }
    ]
  },
  {
    "heading": "Protecting Different Diamond Shapes from Chipping",
    "content": [
      {
        "type": "paragraph",
        "text": "Pointed and cornered shapes benefit from protective settings. The setting should protect vulnerable areas without covering the diamond excessively:"
      },
      {
        "type": "table",
        "headers": [
          "Diamond Shape",
          "Area Needing Protection",
          "Suitable Setting Consideration"
        ],
        "rows": [
          [
            "Round",
            "Girdle",
            "Secure, evenly spaced prongs"
          ],
          [
            "Oval",
            "Curved girdle",
            "Balanced prong placement"
          ],
          [
            "Emerald",
            "Cut corners and girdle",
            "Corner protection"
          ],
          [
            "Princess",
            "Sharp corners",
            "V-shaped corner prongs"
          ],
          [
            "Pear",
            "Pointed tip",
            "V-prong or protective cap"
          ],
          [
            "Marquise",
            "Both pointed ends",
            "V-prongs at each tip"
          ],
          [
            "Heart",
            "Point and cleft",
            "Protected point and secure upper prongs"
          ],
          [
            "Cushion",
            "Corners and girdle",
            "Well-positioned corner prongs"
          ]
        ]
      },
      {
        "type": "image",
        "src": "/images/blog/do-lab-grown-diamonds-last-forever/10 (3).jpg",
        "alt": "Faceted diamond shapes in protective prong and bezel settings",
        "title": "Shapes and Settings Protection",
        "caption": "Protective settings help buffer vulnerable corners and edges on princess, pear, and marquise cuts."
      }
    ]
  },
  {
    "heading": "Deterioration, Fading, and Apparent Changes",
    "content": [
      {
        "type": "paragraph",
        "text": "Lab-grown diamonds do not naturally soften, dissolve, or turn yellow over time because of age. Perceived yellowing or dullness is usually surface build-up (soap, lotion, make-up, or skin oils) or reflections from yellow gold settings and white gold losing its rhodium plating. Regular cleaning can easily restore the stone's original sparkle."
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "text": "Will the setting last? ",
            "bold": true
          },
          {
            "text": "Not necessarily. The diamond will remain stable while the surrounding metal wears. Fine prongs can thin, clasps can loosen, and jump rings can wear. Jewellery longevity depends on both the stone and the maintenance of the setting."
          }
        ]
      }
    ]
  },
  {
    "heading": "Caring for and Storing Diamond Jewellery",
    "content": [
      {
        "type": "paragraph",
        "text": "With appropriate care, lab-grown diamond jewellery can remain wearable for decades and become a cherished family heirloom. Follow these best practices:"
      },
      {
        "type": "bullet-list",
        "items": [
          "Clean Gently: Use warm water, mild soap, and a soft brush to remove ordinary residue from diamond-only jewellery.",
          "Store Separately: Diamonds scratch other jewellery and each other. Use separate compartments or soft pouches.",
          "Avoid Impact: Remove rings or bracelets before heavy sports, gardening, or using heavy tools.",
          "Inspect Settings: Check regularly for loose stones, bent prongs, or catching metal. Arrange professional inspections periodically."
        ]
      },
      {
        "type": "image",
        "src": "/images/blog/do-lab-grown-diamonds-last-forever/10 (4).jpg",
        "alt": "Cleaning and storing laboratory-grown diamond jewellery separately",
        "title": "Jewellery Care and Storage",
        "caption": "Storing diamonds separately prevents them from scratching other gemstones or precious metals."
      }
    ]
  },
  {
    "heading": "Longevity Checklist",
    "content": [
      {
        "type": "table",
        "headers": [
          "Longevity Checks Before Buying"
        ],
        "rows": [
          [
            "Laboratory-grown origin is clearly disclosed."
          ],
          [
            "Pointed corners or tips are protected by the setting design."
          ],
          [
            "The girdle is not dangerously thin or exposed."
          ],
          [
            "Setting metal and fineness are fully specified (e.g. 18k or platinum)."
          ],
          [
            "Prongs appear secure, robust, and evenly positioned."
          ],
          [
            "The clasp matches the weight of the necklet or bracelet."
          ],
          [
            "Product care and maintenance instructions are available."
          ]
        ]
      },
      {
        "type": "callout",
        "title": "Final Verdict",
        "theme": "gold-border",
        "parts": [
          {
            "text": "A lab-grown diamond can last for generations and does not have a shorter lifespan simply because it was created in a laboratory. While the diamond itself can last indefinitely, the complete jewellery piece requires care, safe storage, cleaning, and periodic setting maintenance.\n\n"
          },
          {
            "text": "Explore Aurelia Royale's collections for securely set laboratory-grown diamond jewellery crafted for lifetime wear."
          }
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "question": "Do lab-grown diamonds last forever?",
            "answer": "They can retain their diamond structure and optical properties indefinitely under normal jewellery conditions, but they are not indestructible."
          },
          {
            "question": "Do lab-grown diamonds last as long as natural diamonds?",
            "answer": "They can. Laboratory origin does not create a predetermined shorter lifespan."
          },
          {
            "question": "Do lab-grown diamonds deteriorate?",
            "answer": "They do not ordinarily deteriorate through age or normal wear."
          },
          {
            "question": "Can a lab-grown diamond chip?",
            "answer": "Yes. A strong impact on a vulnerable edge, point or corner can cause chipping."
          },
          {
            "question": "Can lab-grown diamonds get scratched?",
            "answer": "They are exceptionally scratch-resistant, but another diamond can scratch them."
          },
          {
            "question": "Do lab-grown diamonds turn yellow?",
            "answer": "They do not normally turn yellow because of age. Lighting, dirt or reflections from the setting can make them appear warmer."
          },
          {
            "question": "Does CVD or HPHT last longer?",
            "answer": "Neither growth method automatically provides a longer lifespan. The individual diamond and setting matter more."
          },
          {
            "question": "Can lab-grown diamonds become heirlooms?",
            "answer": "Yes. Properly maintained laboratory-grown diamond jewellery can be passed between generations."
          },
          {
            "question": "Does the setting wear out before the diamond?",
            "answer": "It can. Prongs, clasps, chains and other metal components may require repair while the diamond remains intact."
          },
          {
            "question": "How should lab-grown diamond jewellery be stored?",
            "answer": "Store pieces separately in lined compartments or soft pouches to prevent diamonds from scratching other jewellery or each other."
          }
        ]
      },
      {
        "type": "cta-banner",
        "title": "Discover Lifetime Brilliance at Aurelia Royale",
        "subtitle": "Crafted to be worn, loved, and passed down. Explore our signature laboratory-grown diamond jewellery.",
        "shopHref": "/shop/",
        "contactHref": "/contact/"
      }
    ]
  }
];

export default function Blog10Page() {
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
            Lab-Grown Diamond Education
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            Do Lab Diamonds Last Forever?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Durability Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Render Content Blocks */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
