import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Keep Lab-Grown Diamonds Sparkling",
  description: "Keep lab-grown diamond jewellery sparkling by preventing oil and product build-up, handling it correctly, cleaning safely and checking the setting.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/keep-lab-grown-diamond-jewellery-sparkling/",
  },
};

// 2. The exact JSON-LD Schema (Fixed syntax)
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/keep-lab-grown-diamond-jewellery-sparkling/#article",
      "headline": "How to Keep Lab-Grown Diamond Jewellery Sparkling",
      "description": "Keep lab-grown diamond jewellery sparkling by preventing oil and product build-up, handling it correctly, cleaning safely and checking the setting.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "mainEntityOfPage": "https://www.aureliaroyale.com/blog/keep-lab-grown-diamond-jewellery-sparkling/",
      "author": { "@type": "Organization", "name": "Aurelia Royale" },
      "publisher": { "@type": "Organization", "name": "Aurelia Royale", "url": "https://www.aureliaroyale.com/" },
      "image": "https://www.aureliaroyale.com/images/blog/keep-lab-grown-diamond-jewellery-sparkling.webp"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "How to Keep Lab-Grown Diamond Jewellery Sparkling", "item": "https://www.aureliaroyale.com/blog/keep-lab-grown-diamond-jewellery-sparkling/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do lab-grown diamonds lose their sparkle over time?", "acceptedAnswer": { "@type": "Answer", "text": "They do not run out of sparkle, but oil, lotion, soap film and dust can temporarily mute their light performance." } },
        { "@type": "Question", "name": "Why does my lab-grown diamond look dull?", "acceptedAnswer": { "@type": "Answer", "text": "Surface or underside residue and different lighting are common causes; persistent dullness needs assessment." } },
        { "@type": "Question", "name": "Does cleaning improve a diamond's cut?", "acceptedAnswer": { "@type": "Answer", "text": "No. Cleaning removes surface interference but cannot change proportions, symmetry, polish or cut grade." } },
        { "@type": "Question", "name": "Why should I avoid touching the diamond?", "acceptedAnswer": { "@type": "Answer", "text": "Finger oils transfer to diamond surfaces and can reduce visible brightness and fire." } },
        { "@type": "Question", "name": "Should jewellery go on before or after perfume?", "acceptedAnswer": { "@type": "Answer", "text": "Apply perfume and other products first, let them dry, then put jewellery on last." } },
        { "@type": "Question", "name": "Can I wear diamond jewellery in the shower?", "acceptedAnswer": { "@type": "Answer", "text": "Removing it helps prevent soap film and avoids unnecessary risk to settings and other materials." } },
        { "@type": "Question", "name": "Why is the back of a diamond important?", "acceptedAnswer": { "@type": "Answer", "text": "Oil and dirt beneath the stone can interfere with light interaction and mute face-up appearance." } },
        { "@type": "Question", "name": "Can a microfibre cloth keep diamonds sparkling?", "acceptedAnswer": { "@type": "Answer", "text": "An approved clean cloth removes light surface residue but may not reach behind the stone." } },
        { "@type": "Question", "name": "Can I use toothpaste to restore sparkle?", "acceptedAnswer": { "@type": "Answer", "text": "No. Toothpaste is abrasive and can scratch metal or finishes and lodge in settings." } },
        { "@type": "Question", "name": "Does an ultrasonic cleaner create more sparkle?", "acceptedAnswer": { "@type": "Answer", "text": "It may remove residue but cannot improve cut; use it only after professional approval." } },
        { "@type": "Question", "name": "Does lighting change how a clean diamond looks?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Diamonds reflect their surroundings, so brightness, fire and contrast vary across lighting." } },
        { "@type": "Question", "name": "What if safe cleaning does not restore the sparkle?", "acceptedAnswer": { "@type": "Answer", "text": "Stop repeating the process and have the diamond, setting and finish assessed by a qualified jeweller." } }
      ]
    }
  ]
};

// 3. Article content sections structured for DynamicArticle (Without images)
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "paragraph",
        text: "Lab-grown diamonds do not gradually run out of sparkle. Their cut and polished facets continue to interact with light, but skin oils, lotion, soap film and dust can cover those surfaces and mute the visible result."
      },
      {
        type: "paragraph",
        text: "The best care strategy is prevention: touch the diamond less, apply products before jewellery, remove it for residue-heavy activities, wipe compatible pieces after wear and clean only by the method approved for the complete item."
      }
    ]
  },
  {
    heading: "Quick answer",
    content: [
      {
        type: "paragraph",
        text: "Keep lab-grown diamond jewellery sparkling by handling it by the metal rather than touching the stone, putting it on after skincare and perfume have dried, removing it before showering, swimming, cooking, exercise and household cleaning, and wiping compatible surfaces with a clean lint-free cloth after wear. Pay attention to residue behind the diamond, where light interaction can be affected. Use the approved gentle cleaning routine when film appears, inspect settings before and after, store pieces separately and arrange professional care when dullness persists."
      }
    ]
  },
  {
    heading: "What “sparkle” actually includes",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Inspect brightness (reflected light), fire (spectral dispersion), and scintillation (facet pattern contrast) metrics in motion. For grading details, consult " },
          { text: "the 4Cs of lab-grown diamonds", href: "/blog/4cs-of-lab-grown-diamonds/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Why a clean diamond can look different from room to room",
    content: [
      {
        type: "numbered-list",
        items: [
          "View it under the same neutral light used for its clean baseline.",
          "Move it gently at normal viewing distance.",
          "Compare front and side views.",
          "Check for visible film under magnification.",
          "Avoid comparing it with a high-contrast edited product video."
        ]
      }
    ]
  },
  {
    heading: "The main causes of temporary dullness",
    content: [
      {
        type: "table",
        headers: ["Cause", "Where it collects", "Prevention"],
        rows: [
          ["Finger oils", "Table, crown and girdle", "Hold by the metal or edge of setting"],
          ["Hand cream and sunscreen", "Surface, prongs and gallery", "Apply first; let dry before jewellery"],
          ["Soap and shampoo", "Behind stones and in recesses", "Remove before showering or washing"],
          ["Hair and cosmetic products", "Earrings, necklaces and pendants", "Jewellery goes on last"],
          ["Cooking grease", "Exposed rings and bracelets", "Remove before food preparation"],
          ["Dust and fibres", "Prongs, pavé and clasps", "Store covered and separately"],
          ["Hard-water film", "Galleries and metal surfaces", "Avoid unnecessary water exposure"]
        ]
      }
    ]
  },
  {
    heading: "1. Touch the metal, not the diamond",
    content: [
      {
        type: "paragraph",
        text: "Finger oils reduce visible light returns. Handle rings by shanks and earrings by posts or metal borders."
      }
    ]
  },
  {
    heading: "2. Put jewellery on last",
    content: [
      {
        type: "numbered-list",
        items: [
          "Skincare and sunscreen.",
          "Make-up and hair products.",
          "Perfume.",
          "Allow products to dry.",
          "Put on jewellery."
        ]
      }
    ]
  },
  {
    heading: "3. Remove it for residue-heavy activities",
    content: [
      {
        type: "paragraph",
        text: "Remove jewelry before:"
      },
      {
        type: "bullet-list",
        items: [
          "showering or bathing;",
          "swimming or using a hot tub;",
          "handwashing when secure temporary storage is available;",
          "cooking with oils or dough;",
          "household cleaning;",
          "gardening;",
          "exercise; and",
          "applying lotion or hair products."
        ]
      }
    ]
  },
  {
    heading: "4. Wipe compatible pieces after wear",
    content: [
      {
        type: "paragraph",
        text: "Wipe with clean microfibre cloths after wear if approved. Avoid pulling cloths aggressively through micro prongs."
      }
    ]
  },
  {
    heading: "5. Keep the underside clear",
    content: [
      {
        type: "paragraph",
        text: "Light interactions rely on pavilion cleanliness. Clean galleries carefully without using steel pins or needles."
      }
    ]
  },
  {
    heading: "6. Follow a residue-based cleaning schedule",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Clean periodically based on lotion exposure. Stated procedures are detailed at " },
          { text: "how often diamond jewellery should be cleaned", href: "/blog/how-often-clean-diamond-jewellery/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "7. Inspect before every deeper clean",
    content: [
      {
        type: "paragraph",
        text: "Look for:"
      },
      {
        type: "bullet-list",
        items: [
          "a moving or rattling stone;",
          "raised, bent or worn prongs;",
          "gaps around a bezel;",
          "missing accents;",
          "new snagging;",
          "damaged links or clasps; and",
          "chips or changes in finish."
        ]
      }
    ]
  },
  {
    heading: "8. Store every piece separately",
    content: [
      {
        type: "paragraph",
        text: "Use soft-lined compartments. Fasten bracelets to avoid prongs catching adjacent chains."
      }
    ]
  },
  {
    heading: "9. Keep cloths and tools genuinely clean",
    content: [
      {
        type: "paragraph",
        text: "Ensure microfibre cloths are dust-free. Reserve new soft brushes specifically for jewelry tasks."
      }
    ]
  },
  {
    heading: "10. Do not chase sparkle with harsh methods",
    content: [
      {
        type: "paragraph",
        text: "Avoid:"
      },
      {
        type: "bullet-list",
        items: [
          "toothpaste or abrasive powders;",
          "bleach and chlorine products;",
          "boiling water;",
          "sharp scraping tools;",
          "strong household degreasers;",
          "unapproved alcohol or sanitiser;",
          "domestic steam; and",
          "ultrasonic cleaning without professional approval."
        ]
      }
    ]
  },
  {
    heading: "Sparkle care by jewellery category",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "Rings: ", bold: true }, { text: "Handle by shanks. Residues collect under center stones." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Earrings: ", bold: true }, { text: "Remove prior to applying hair spray or perfume." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Necklaces and pendants: ", bold: true }, { text: "Clean bails where body lotions contact mountings." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Bracelets: ", bold: true }, { text: "Check clasps and links frequently. Wipe after use." }]
      }
    ]
  },
  {
    heading: "When dullness needs professional assessment",
    content: [
      {
        type: "paragraph",
        text: "Contact a jeweller if:"
      },
      {
        type: "bullet-list",
        items: [
          "one approved gentle clean does not restore the clean baseline;",
          "residue is compacted beneath an inaccessible setting;",
          "the piece contains sensitive coloured stones or unknown treatments;",
          "it is vintage or structurally delicate;",
          "the metal finish has changed;",
          "the stone appears hazy in all familiar lighting;",
          "a prong, clasp or link is damaged; or",
          "professional inspection is due."
        ]
      }
    ]
  },
  {
    heading: "A daily, monthly and annual routine",
    content: [
      {
        type: "paragraph",
        parts: [{ text: "After each wear: ", bold: true }, { text: "Check links and store separately." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "When film appears: ", bold: true }, { text: "Wash with mild soaps and dry fully." }]
      },
      {
        type: "paragraph",
        parts: [{ text: "Every six to twelve months, depending on use: ", bold: true }, { text: "Arrange professional checks to secure warranty benefits." }]
      }
    ]
  },
  {
    heading: "The Aurelia Royale standard",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Aurelia Royale care guidelines explain light performance traits. Browse collections at " },
          { text: "Aurelia Royale jewellery", href: "/shop/" },
          { text: " or " },
          { text: "contact Aurelia Royale", href: "/contact/" },
          { text: " to request specific specifications." }
        ]
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
            text: "Most temporary dullness comes from oil, lotion, soap film and dust.\n\n"
          },
          {
            text: "A prevention-first routine keeps diamond surfaces clearer between safe cleans. Touch the metal borders instead of center tables, put on jewelry last, and store pieces in separate slots."
          }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Do lab-grown diamonds lose their sparkle over time?",
            answer: "They do not run out of sparkle, but oil, lotion, soap film and dust can temporarily mute their light performance."
          },
          {
            question: "Why does my lab-grown diamond look dull?",
            answer: "Surface or underside residue and different lighting are common causes. Persistent dullness after an approved clean needs professional assessment."
          },
          {
            question: "Does cleaning improve a diamond’s cut?",
            answer: "No. Cleaning removes surface interference; it cannot change proportions, symmetry, polish or cut grade."
          },
          {
            question: "Why should I avoid touching the diamond?",
            answer: "Finger oils transfer easily to diamond surfaces and can reduce visible brilliance and fire."
          },
          {
            question: "Should jewellery go on before or after perfume?",
            answer: "Apply perfume and other products first, let them dry, then put jewellery on last."
          },
          {
            question: "Can I wear diamond jewellery in the shower?",
            answer: "Removing it helps prevent soap and product film and avoids unnecessary risk to the setting and other materials."
          },
          {
            question: "Why is the back of a diamond important?",
            answer: "Oil and dirt beneath the stone can interfere with light interaction and make the face-up appearance look duller."
          },
          {
            question: "Can a microfibre cloth keep diamonds sparkling?",
            answer: "An approved clean cloth can remove light surface residue between cleans, but it may not reach behind the stone."
          },
          {
            question: "Can I use toothpaste to restore sparkle?",
            answer: "No. Toothpaste is abrasive and can scratch metal or finishes and lodge in settings."
          },
          {
            question: "Does an ultrasonic cleaner create more sparkle?",
            answer: "It removes some residue but does not improve cut; use it only after professional approval of the complete piece."
          },
          {
            question: "Does lighting change how a clean diamond looks?",
            answer: "Yes. Diamonds reflect their surroundings, so brightness, fire and contrast vary across lighting environments."
          },
          {
            question: "What if safe cleaning does not restore the sparkle?",
            answer: "Stop repeating the process and have the diamond, setting and finish assessed by a qualified jeweller."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Maintain Lifelong Sparkle",
        subtitle: "Aurelia Royale sets all GIA-graded lab-grown diamonds in open-back styles to facilitate gentle care. View our jewelry.",
        shopHref: "/shop/",
        contactHref: "/contact/"
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
            Jewellery Care and Maintenance
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            How to Keep Lab-Grown Diamond Jewellery Sparkling
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 16, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="keep-lab-grown-diamond-jewellery-sparkling" />
      <NewsletterSection />
    </main>
  );
}

