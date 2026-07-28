import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Verify an IGI Certificate Number Online",
  description: "Learn how to verify an IGI certificate number, compare the digital report, check a diamond’s laser inscription and identify mismatched documents.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/",
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
      "url": "https://www.aureliaroyale.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aureliaroyale.com/#website",
      "url": "https://www.aureliaroyale.com/",
      "name": "Aurelia Royale",
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/verify-igi-certificate-number.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond report number being verified online"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#webpage",
      "url": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/",
      "name": "How to Verify an IGI Certificate Number",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#article",
      "headline": "How to Verify an IGI Certificate Number",
      "description": "Learn how to verify an IGI certificate number, compare the digital report, check a diamond's laser inscription and identify mismatched documents.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "verify IGI certificate number",
        "IGI report verification",
        "check IGI diamond certificate",
        "IGI report number check",
        "IGI laser inscription"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#breadcrumb",
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
          "name": "Certification and Diamond Quality",
          "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "How to Verify an IGI Certificate Number",
          "item": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I verify an IGI certificate number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the Verify Report service on IGI's official website and compare the resulting digital report with the supplied document and diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Is an IGI certificate number unique?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IGI assigns a unique report number to each grading report, but buyers must still confirm that the report corresponds with the physical diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my IGI report number not working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possible causes include a typing error, incomplete number, recently issued report, temporary website issue or a document not issued by IGI."
          }
        },
        {
          "@type": "Question",
          "name": "Does finding an IGI report online prove the diamond is genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It proves that a report with that number exists. The diamond's inscription, measurements and characteristics must also match."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the IGI number written on the diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be laser-inscribed on the diamond's girdle and normally requires magnification to read."
          }
        },
        {
          "@type": "Question",
          "name": "Can someone copy a genuine IGI certificate number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A copied number could be used for another stone, which is why measurements, grades and the inscription must be checked."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the certificate and product page show different grades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask the retailer for the correct report and written clarification before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI report number confirm the diamond's resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It identifies the report and documented characteristics but does not guarantee present or future resale value."
          }
        },
        {
          "@type": "Question",
          "name": "Should the IGI number appear on my invoice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For an individually graded diamond, recording the report number on the invoice improves traceability."
          }
        },
        {
          "@type": "Question",
          "name": "Can an IGI report be verified after the diamond is set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The report can be checked online, although the setting may make the girdle inscription more difficult to inspect."
          }
        }
      ]
    }
  ]
};

// 3. The Article Content Sections
const articleSections: ArticleSection[] = [
  {
    content: [
      {
        type: "image",
        src: "/images/blog/verify-igi-certificate-number/23 (1).png",
        alt: "Lab-grown diamond report number being verified online",
        title: "How to Verify IGI Certificate Number",
        caption: "Entering the grading report code directly into the lab registry confirms authenticity details.",
        priority: true
      },
      {
        type: "paragraph",
        text: "To verify an IGI certificate number, enter the number into the official IGI “Verify Report” service and open the corresponding digital grading report."
      },
      {
        type: "paragraph",
        text: "You must then compare that digital record with the report supplied by the retailer, the product-page specifications, the physical diamond, and the laser inscription on the diamond’s girdle."
      },
      {
        type: "paragraph",
        text: "Finding a valid report number online is only the first step. A copied number can correspond to a genuine report while being used to advertise a different diamond. Complete verification means confirming that the online report, supplied document, and actual diamond all match."
      },
      {
        type: "callout",
        title: "Quick Answer",
        text: "Follow these steps: Obtain the complete IGI report number. Visit the official IGI website yourself. Open the “Verify Report” service. Enter the number exactly as provided. Open the digital report. Confirm laboratory-grown origin. Compare shape, carat weight, measurements and grades. Read the growth and treatment comments. Check the laser-inscription details. Have the physical inscription inspected under magnification. If any important detail differs, pause the purchase and ask the retailer for clarification."
      }
    ]
  },
  {
    heading: "1. Understanding the IGI Report Number",
    content: [
      {
        type: "paragraph",
        text: "An IGI report number is the unique identification code assigned to a graded stone. It links the physical diamond to the laboratory's digital archives. The code can be located at the top of printed copies, beside verification QR codes, or engraved microscopically on the diamond's girdle."
      },
      {
        type: "paragraph",
        text: "If a retailer offers a certified centre diamond but refuses to share the certificate number before your order, treat this as a warning sign and pause the transaction."
      },
      {
        type: "image",
        src: "/images/blog/verify-igi-certificate-number/23 (2).png",
        alt: "Unique certificate barcode scanner display on laptop screen",
        title: "Report Code Intake Log",
        caption: "Unique registry codes identify loose or set stones in the laboratory database."
      }
    ]
  },
  {
    heading: "2. Step-by-Step Verification Instructions",
    content: [
      {
        type: "paragraph",
        text: "Follow these essential steps to run online registry checks safely:"
      },
      {
        type: "bullet-list",
        items: [
          "Request Complete Reports: Never accept cropped screens or summaries. Request full copies showing date logs, comment footnotes, and measurements.",
          "Visit Official Portals: Input the URL yourself rather than clicking links in advertisements or emails to prevent landing on phishing pages.",
          "Input Codes Exactly: Avoid confusing letters and numbers (e.g. zero '0' with letter 'O', one '1' with letter 'I')."
        ]
      },
      {
        type: "image",
        src: "/images/blog/verify-igi-certificate-number/23 (3).png",
        alt: "A professional matching the report details with the diamond",
        title: "Verify Online Registry Entries",
        caption: "Ensure that online description parameters align exactly with the physical diamond."
      }
    ]
  },
  {
    heading: "Registry Fields to Match",
    content: [
      {
        type: "table",
        headers: ["Detail", "What must match"],
        rows: [
          ["Report number", "Exact number supplied by the retailer"],
          ["Description", "Laboratory-grown diamond"],
          ["Report date", "Same date shown on the supplied report"],
          ["Shape", "Round, oval, emerald, pear or other advertised shape"],
          ["Cutting style", "The cutting description shown on the report"],
          ["Measurements", "Same millimetre dimensions"],
          ["Carat weight", "Exact weight of the graded diamond"],
          ["Colour", "Same grade as the product listing"],
          ["Clarity", "Same grade as the product listing"],
          ["Cut", "Same grade where applicable"],
          ["Polish", "Same report result"],
          ["Symmetry", "Same report result"],
          ["Fluorescence", "Same strength and colour"],
          ["Comments", "Same growth and treatment information"],
          ["Inscription", "Same inscription information"]
        ]
      }
    ]
  },
  {
    heading: "3. Physical Checks and Document Mismatches",
    content: [
      {
        type: "paragraph",
        parts: [
          { text: "Girdle Laser Engravings: ", bold: true },
          { text: "Laser inscriptions are microscopic codes that jewellers read using loupes or zoom lenses. Girdle settings can cover parts of codes, so double-check code positions before setting stones." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Document Alterations: ", bold: true },
          { text: "Copying report numbers to mask lower-grade stones is a common tactic of fraudulent retailers. Watch for uneven fonts, cropped comment zones, missing origin labels, or blurry registry pages." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "Safe QR Code Scanning: ", bold: true },
          { text: "Treat QR code links carefully. Always check that scanned domains route to the official `.org` or secure registry addresses before entering details." }
        ]
      },
      {
        type: "image",
        src: "/images/blog/verify-igi-certificate-number/23 (4).png",
        alt: "Inspecting girdle laser serial with a microscope viewer tool",
        title: "Laser Inscription Microscope Assessment",
        caption: "A matching laser inscription code printed on the girdle connects the diamond to its online report."
      }
    ]
  },
  {
    heading: "IGI Report Verification Checklist",
    content: [
      {
        type: "table",
        headers: ["Before purchase, verify:"],
        rows: [
          ["Obtain the complete report number and search independently."],
          ["Match shape, carat weight, measurements, and comments exactly."],
          ["Read CVD/HPHT growth method logs and treatment comments."],
          ["Verify that the digital certificate is not marked as replaced or expired."],
          ["Request high-resolution videos showing physical girdle codes under magnification."],
          ["Review return policies to ensure you can verify parameters post-delivery."]
        ]
      }
    ]
  },
  {
    content: [
      {
        type: "callout",
        title: "Final Verdict",
        theme: "gold-border",
        parts: [
          { text: "Verifying an IGI certificate number requires comparing the official digital report, product description, and physical diamond girdle. If any details are mismatched or the number cannot be located on the official lab website, pause the purchase until you get a clear explanation.\n\n" },
          { text: "At Aurelia Royale, we provide full, transparent access to GIA/IGI report verification registries for every piece in our collections." }
        ]
      },
      {
        type: "faq",
        items: [
          {
            question: "Where can I verify an IGI certificate number?",
            answer: "Use the Verify Report service on IGI’s official website. Enter the complete report number and compare the resulting digital report with the supplied document and diamond."
          },
          {
            question: "Is an IGI certificate number unique?",
            answer: "IGI assigns a unique report number to each grading report. The number identifies a report, but buyers must still confirm that the report corresponds with the physical diamond."
          },
          {
            question: "Can I verify an IGI certificate for free?",
            answer: "IGI’s online report-verification facility allows consumers to search for the digital report using its number without purchasing a separate grading service."
          },
          {
            question: "Why is my IGI report number not working?",
            answer: "Possible causes include a typing error, an incomplete number, a recently issued report, a temporary website issue or a document that was not issued by IGI."
          },
          {
            question: "Does finding an IGI report online prove the diamond is genuine?",
            answer: "It proves that a report with that number exists. You must still compare the physical diamond’s inscription, measurements and characteristics with the report."
          },
          {
            question: "Where is the IGI number written on the diamond?",
            answer: "It may be laser-inscribed on the diamond’s girdle. The report should state the inscription information."
          },
          {
            question: "Can I see the IGI inscription with my eyes?",
            answer: "Usually not. A jeweller’s loupe or microscope is normally required to locate and read the inscription."
          },
          {
            question: "Can someone copy a genuine IGI certificate number?",
            answer: "Yes. A copied number could be used in a listing for a different stone. This is why measurements, grades and the physical inscription must also be checked."
          },
          {
            question: "What should I do if the certificate and product page show different grades?",
            answer: "Ask the retailer for the correct report and written clarification. Do not purchase a diamond advertised with better grades than its report records."
          },
          {
            question: "Does an IGI report number confirm the diamond’s resale value?",
            answer: "No. It identifies the grading report and documented characteristics. It does not guarantee present or future resale value."
          },
          {
            question: "Should the IGI number appear on my invoice?",
            answer: "For a product sold with an individually graded diamond, placing the report number on the invoice or order documentation improves traceability."
          },
          {
            question: "Can an IGI report be verified after the diamond is set?",
            answer: "Yes. The report number can be checked online, although inspecting the girdle inscription may be more difficult if the setting covers it."
          }
        ]
      },
      {
        type: "cta-banner",
        title: "Shop Verified Diamond Collections",
        subtitle: "Beautifully hallmarked, independently graded, and fully verifiable. Experience the Aurelia Royale registry standard.",
        shopHref: "/shop/",
        contactHref: "/contact/"
      }
    ]
  }
];

export default function Blog23Page() {
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
            How to Verify an IGI Certificate Number
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Registry Guide • Published July 15, 2026
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
