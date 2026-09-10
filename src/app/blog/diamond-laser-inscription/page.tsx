import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "What Is a Diamond Laser Inscription?",
  description: "Learn where a diamond laser inscription appears, what it contains, how to view and verify it, and why the inscription must match the grading report.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-laser-inscription/",
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
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/diamond-laser-inscription.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/diamond-laser-inscription.webp",
      "width": 1600,
      "height": 900,
      "caption": "Diamond laser inscription viewed under magnification"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#webpage",
      "url": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/",
      "name": "What Is a Diamond Laser Inscription?",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#article",
      "headline": "What Is a Diamond Laser Inscription?",
      "description": "Learn where a diamond laser inscription appears, what it contains, how to view and verify it, and why the inscription must match the grading report.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "diamond laser inscription",
        "laser inscription on a diamond",
        "diamond inscription number",
        "diamond girdle inscription",
        "verify diamond inscription",
        "lab-grown diamond laser inscription"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "What Is a Diamond Laser Inscription?", "item": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-laser-inscription/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a diamond laser inscription?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is microscopic text, numbers or a symbol applied to a diamond, usually on the girdle, using a controlled laser." }
        },
        {
          "@type": "Question",
          "name": "Where is the inscription on a diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is normally on the girdle, the narrow outer edge between the crown and pavilion. A prong or bezel may cover it after setting." }
        },
        {
          "@type": "Question",
          "name": "Can you see a diamond inscription with the naked eye?",
          "acceptedAnswer": { "@type": "Answer", "text": "Usually not. A 10× loupe or microscope and appropriate lighting are commonly needed." }
        },
        {
          "@type": "Question",
          "name": "What is inscribed on a lab-grown diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "It may carry a laboratory-grown description, the grading or assessment number, and sometimes a brand or personal inscription." }
        },
        {
          "@type": "Question",
          "name": "How do I verify a diamond inscription?",
          "acceptedAnswer": { "@type": "Answer", "text": "Read the exact number, check it in the issuing laboratory’s official database and compare the diamond’s weight, measurements and reported characteristics." }
        },
        {
          "@type": "Question",
          "name": "Does an inscription prove a diamond is genuine?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not by itself. Inscriptions can be copied or altered, so the physical diamond and laboratory record must also match." }
        },
        {
          "@type": "Question",
          "name": "Can a laser inscription be removed?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Polishing the girdle can remove it. Removal should be performed only by a qualified professional." }
        },
        {
          "@type": "Question",
          "name": "Does laser inscription damage the diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "A correctly applied microscopic girdle inscription is intended not to affect face-up beauty or quality. Work should be completed by a reputable specialist." }
        },
        {
          "@type": "Question",
          "name": "Does inscription reduce carat weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "Routine microscopic inscription does not normally cause a meaningful change in reported weight. More extensive repolishing or recutting can remove material." }
        },
        {
          "@type": "Question",
          "name": "Does every certified diamond have an inscription?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Availability depends on the laboratory, service, date, size and client request. Check the actual report." }
        },
        {
          "@type": "Question",
          "name": "What should I do if the inscription and report do not match?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pause the transaction, document the discrepancy, obtain independent examination and contact the issuing laboratory through its official channel." }
        },
        {
          "@type": "Question",
          "name": "Can a personal message be laser-inscribed on a diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, some providers can add initials, dates, short messages or symbols, subject to space and service requirements." }
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
        src: "/images/blog/diamond-laser-inscription/1.jpg",
        alt: "Diamond laser inscription viewed under magnification",
        title: "What Is a Diamond Laser Inscription?",
        caption: "Microscopic identifiers on the diamond girdle connect the gemstone with its certificate.",
        priority: true
      },
      {
        type: "paragraph",
        text: "A diamond laser inscription is microscopic text, numbers or a symbol applied to the diamond—normally on its girdle—using a highly controlled laser. The inscription can contain a grading-report number, a laboratory-grown description, a brand mark or a personal message."
      },
      {
        type: "paragraph",
        text: "Its most useful purpose is identification. When a report number is inscribed on the diamond, a jeweller can read the number under magnification, retrieve the corresponding laboratory record and compare the report’s specifications with the physical stone."
      },
      {
        type: "paragraph",
        text: "The inscription is usually too small to see with the unaided eye and does not replace a grading report. It is one part of a verification process, not an independent guarantee. Numbers can be copied, altered or removed, so buyers should confirm the inscription, the laboratory database and the diamond’s measurable characteristics together."
      }
    ]
  },
  {
    heading: "Quick answer: what does a diamond inscription tell you?",
    content: [
      {
        type: "paragraph",
        text: "A laser inscription may tell you:"
      },
      {
        type: "bullet-list",
        items: [
          "the grading laboratory’s report number;",
          "that the diamond is laboratory-grown;",
          "a manufacturer or brand identifier;",
          "a personalised message or symbol; or",
          "another reference recorded in the report comments."
        ]
      },
      {
        type: "paragraph",
        text: "Most inscriptions are placed around the girdle, the narrow outer edge between the diamond’s crown and pavilion. They are commonly viewed with a 10× loupe or microscope, although the ease of reading depends on the inscription, girdle finish, lighting, cleanliness and setting."
      },
      {
        type: "paragraph",
        text: "An inscription helps identify a diamond only when its information matches a legitimate report and the stone’s specifications."
      }
    ]
  },
  {
    heading: "Where is a laser inscription located?",
    content: [
      {
        type: "paragraph",
        text: "The inscription is normally placed on the girdle because this area is accessible for identification while being less visually prominent than the top facets. The girdle circles the widest perimeter of the diamond and forms the edge held by prongs, a bezel or another setting."
      },
      {
        type: "paragraph",
        text: "Depending on the design, a prong can partly or completely cover the inscription. This does not mean the inscription is missing. A jeweller may need to rotate the piece under magnification, inspect it from several angles or consult pre-setting records."
      },
      {
        type: "paragraph",
        text: "For loose diamonds, the entire girdle is usually easier to examine. For mounted diamonds, access depends on:"
      },
      {
        type: "bullet-list",
        items: [
          "number and position of prongs;",
          "bezel coverage;",
          "gallery and basket construction;",
          "girdle thickness and finish;",
          "diamond shape; and",
          "the location chosen for the inscription."
        ]
      },
      {
        type: "image",
        src: "/images/blog/diamond-laser-inscription/2.jpg",
        alt: "Location of the laser inscription on the diamond girdle",
        title: "Diamond Laser Inscription Location",
        caption: "The outer boundary or girdle of the diamond is where the inscription text is placed."
      },
      {
        type: "paragraph",
        text: "A setter can sometimes position the inscription where it remains viewable, provided doing so does not compromise the safest orientation of the diamond."
      }
    ]
  },
  {
    heading: "What is the diamond girdle?",
    content: [
      {
        type: "paragraph",
        text: "The girdle is the narrow outer boundary separating the crown above from the pavilion below. It may be polished, faceted or have another finish, and its thickness can vary around the stone."
      },
      {
        type: "paragraph",
        text: "Because a report-number inscription is microscopic and applied to this peripheral surface, it should not alter the diamond’s face-up appearance when performed correctly. Girdle thickness still matters for weight distribution and durability independently of the inscription."
      },
      {
        type: "callout",
        title: "Related Reading",
        parts: [
          { text: "Read " },
          { text: "lab-grown diamond cut explained", href: "/blog/lab-grown-diamond-cut-explained/" },
          { text: " for the relationship among the girdle, proportions and cut quality." }
        ]
      }
    ]
  },
  {
    heading: "What can be written on a diamond?",
    content: [
      {
        type: "paragraph",
        text: "Depending on the origin and purpose of the stone, several elements can be inscribed:"
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Laboratory report number: ", bold: true },
          { text: "The most common practical inscription is the unique number connected to a laboratory report or assessment. It provides a quick reference for retrieving archived information." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Laboratory-grown description: ", bold: true },
          { text: "Current laboratory-grown diamond services may apply wording such as “Laboratory-Grown” or another accepted disclosure alongside the report or assessment number. The exact wording and format depend on the laboratory and service." }
        ]
      },
      {
        type: "paragraph",
        text: "GIA’s current laboratory-grown services state that qualifying stones are inscribed with “Laboratory-Grown” and the applicable GIA number. IGI laboratory-grown reports may also document girdle inscriptions and provide report-number inscription services."
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Brand name or logo: ", bold: true },
          { text: "A manufacturer or jewellery brand may add its own identifier. A brand inscription is not evidence that the diamond received an independent laboratory grade unless a verifiable report is also connected to it." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Personal message: ", bold: true },
          { text: "Initials, a date, short phrase or symbol can commemorate an engagement, wedding or other event. Character limits and available space depend on diamond size, laboratory or inscription provider." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Multiple inscriptions: ", bold: true },
          { text: "A diamond can carry more than one inscription—for example, a laboratory-grown identifier, report number and brand mark. Each should be interpreted separately." }
        ]
      }
    ]
  },
  {
    heading: "What is inscribed on a lab-grown diamond?",
    content: [
      {
        type: "paragraph",
        text: "The inscription commonly supports two separate points:"
      },
      {
        type: "numbered-list",
        items: [
          "Origin disclosure: wording identifies the stone as laboratory-grown.",
          "Report connection: a unique number links the stone to a laboratory record."
        ]
      },
      {
        type: "paragraph",
        text: "This helps distinguish a laboratory-grown diamond from a natural diamond within the supply chain and after setting. However, inscription practices vary, services change and not every lab-grown diamond in the market has the same wording or any inscription at all."
      },
      {
        type: "paragraph",
        text: "The absence of a visible inscription does not automatically make a diamond inauthentic. It may never have been inscribed, the inscription may be hidden by the setting, or it may have been removed during repolishing. The diamond’s origin must be determined through appropriate gemmological examination rather than from absence alone."
      },
      {
        type: "callout",
        title: "Origin Disclosure Guidelines",
        parts: [
          { text: "Learn " },
          { text: "how lab-grown diamonds should be described and disclosed", href: "/blog/how-lab-grown-diamonds-should-be-disclosed/" },
          { text: " across product pages, reports and after-sales documents." }
        ]
      }
    ]
  },
  {
    heading: "How is a diamond laser-inscribed?",
    content: [
      {
        type: "paragraph",
        text: "The inscription provider positions the diamond precisely and uses a tightly controlled laser to apply microscopic characters to the girdle surface. The system must create legible marks without interfering with the diamond’s overall appearance."
      },
      {
        type: "paragraph",
        text: "After inscription, the text may be inspected and recorded. A laboratory report can list the inscription in its comments or dedicated inscription field. When the laboratory itself applies a report number, the connection is established within its service workflow."
      },
      {
        type: "image",
        src: "/images/blog/diamond-laser-inscription/3.jpg",
        alt: "Precision laser inscription process on a diamond",
        title: "Precision Laser Inscription Process",
        caption: "A high-precision laser engraves microscopic digits onto the girdle without damaging the stone."
      },
      {
        type: "paragraph",
        text: "The process differs from ordinary hand engraving. The scale is far smaller, and specialised equipment, secure handling and accurate alignment are required."
      }
    ]
  },
  {
    heading: "Can you see a diamond inscription without magnification?",
    content: [
      {
        type: "paragraph",
        text: "Usually not. GIA states that its inscriptions can be viewed at 10× magnification, which is the standard power of a jeweller’s loupe. In practice, first-time users may still struggle because the inscription is tiny and the girdle reflects light."
      },
      {
        type: "paragraph",
        text: "Visibility depends on:"
      },
      {
        type: "bullet-list",
        items: [
          "whether the diamond is clean;",
          "inscription depth and contrast;",
          "girdle finish;",
          "lighting angle;",
          "loupe quality;",
          "observer experience;",
          "the diamond’s orientation; and",
          "whether metal covers the relevant area."
        ]
      },
      {
        type: "paragraph",
        text: "A binocular microscope generally makes the task easier than a handheld loupe. Ask a trained jeweller to show the inscription rather than risking damage while trying to remove or manipulate the jewellery."
      }
    ]
  },
  {
    heading: "How to find a diamond laser inscription",
    content: [
      {
        type: "paragraph",
        text: "Depending on whether the diamond is loose or mounted, different procedures apply:"
      },
      {
        type: "paragraph",
        parts: [
          { text: "For a loose diamond:", bold: true }
        ]
      },
      {
        type: "numbered-list",
        items: [
          "Work over a clean, soft, secure surface.",
          "Confirm the expected inscription from the report.",
          "Clean the diamond using an appropriate method.",
          "Hold it safely with diamond tweezers if trained to do so.",
          "Focus a 10× loupe or microscope on the girdle.",
          "Rotate the diamond slowly while changing the light angle.",
          "Record the exact characters without guessing unclear digits."
        ]
      },
      {
        type: "paragraph",
        text: "Loose diamonds are small and easily lost or damaged through incorrect handling. If you do not have suitable tools or experience, use a professional."
      },
      {
        type: "image",
        src: "/images/blog/diamond-laser-inscription/4.jpg",
        alt: "Finding a diamond laser inscription using a loupe",
        title: "How to Find a Laser Inscription",
        caption: "Magnification tools like a jeweller's loupe or microscope are essential to view the inscription."
      },
      {
        type: "paragraph",
        parts: [
          { text: "For a mounted diamond:", bold: true }
        ]
      },
      {
        type: "numbered-list",
        items: [
          "Check the report for inscription text.",
          "Clean the setting so oil does not obscure the girdle.",
          "Inspect every accessible section between prongs.",
          "Tilt the ring or jewel to create contrast on the girdle.",
          "If a bezel or prong blocks the view, ask the original setter or a gemmologist for help."
        ]
      },
      {
        type: "paragraph",
        text: "Do not bend prongs or attempt to unset the diamond solely to find the inscription. Unsetting should be performed only when necessary by a qualified professional."
      }
    ]
  },
  {
    heading: "How to verify a diamond inscription correctly",
    content: [
      {
        type: "paragraph",
        text: "To ensure your purchase is secure, follow these five steps:"
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Step 1: Read the exact inscription", bold: true },
          { text: " — Note every letter, number, hyphen and prefix. Do not rely on a seller’s typed copy when the physical stone can be inspected." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Step 2: Use the issuing laboratory’s official database", bold: true },
          { text: " — Enter the report number through the laboratory’s own report-verification service. Avoid unfamiliar third-party look-up pages that could reproduce incomplete or manipulated information." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Step 3: Match the basic specifications", bold: true },
          { text: " — Compare natural or laboratory-grown description; shape and cutting style; carat weight; length, width and depth; colour and clarity information; fluorescence where reported; proportions and girdle information; and report comments." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Step 4: Compare identifying features", bold: true },
          { text: " — Where the report contains a clarity plot, images or other identifying details, a qualified professional can compare them with the stone." }
        ]
      },
      {
        type: "paragraph",
        parts: [
          { text: "• " },
          { text: "Step 5: Seek professional verification when risk is higher", bold: true },
          { text: " — For an important purchase, secondary-market stone, replaced diamond, damaged inscription or suspicious mismatch, ask a qualified gemmologist or the issuing laboratory to verify the stone." }
        ]
      },
      {
        type: "callout",
        title: "Verifying Certificates",
        parts: [
          { text: "Our step-by-step guide explains " },
          { text: "how to verify an IGI certificate number", href: "/blog/verify-igi-certificate-number/" },
          { text: "." }
        ]
      }
    ]
  },
  {
    heading: "Why the report number alone is not proof",
    content: [
      {
        type: "paragraph",
        text: "An inscription is a mark on a surface. A dishonest party could copy an existing number onto a different stone, including one selected to approximate the original diamond’s weight and measurements."
      },
      {
        type: "paragraph",
        text: "GIA and IGI have both published cases involving fraudulent inscriptions. These cases do not make laser inscription useless; they show why buyers must verify more than the digits."
      },
      {
        type: "paragraph",
        text: "A secure comparison asks three questions:"
      },
      {
        type: "bullet-list",
        items: [
          "Does the inscription match a record in the issuing laboratory’s database?",
          "Do the diamond’s measurements and reported characteristics match that record?",
          "Has a qualified professional confirmed the stone’s identity and origin when needed?"
        ]
      },
      {
        type: "paragraph",
        text: "If any answer is uncertain, pause the transaction and obtain independent examination."
      }
    ]
  },
  {
    heading: "Can a laser inscription be removed?",
    content: [
      {
        type: "paragraph",
        text: "Yes. An inscription can be removed through polishing because it sits at or near the girdle surface. IGI’s service terms explicitly note that an inscription can be removed by polishing and does not, by itself, guarantee identification."
      },
      {
        type: "paragraph",
        text: "Removal may involve a very small amount of material, and a qualified professional must consider girdle thickness, weight, symmetry and the reason for polishing. Do not attempt removal as a home process."
      },
      {
        type: "paragraph",
        text: "If an inscription has been removed accidentally during repair or recutting, the stone may be eligible for a laboratory follow-up or re-inscription service. The original report and current diamond specifications should be reviewed because repolishing can sometimes alter measurements or weight."
      }
    ]
  },
  {
    heading: "Can an inscription be changed or added later?",
    content: [
      {
        type: "paragraph",
        text: "Yes. A report number, brand identifier or personal message can be added after the diamond was initially sold, subject to the service provider’s requirements. Existing text may also be removed or overwritten in some circumstances."
      },
      {
        type: "paragraph",
        text: "Adding a laboratory’s name or report number without authorisation does not create a legitimate laboratory report. The database record and the physical diamond must still match."
      },
      {
        type: "paragraph",
        text: "For a personal inscription, keep complete documentation showing who applied it and when. If the diamond already has a report inscription, position new text so the identifiers remain distinct."
      }
    ]
  },
  {
    heading: "Does laser inscription damage a diamond?",
    content: [
      {
        type: "paragraph",
        text: "A properly performed microscopic girdle inscription is designed for identification without affecting face-up beauty. It should not change the diamond’s cut, colour or clarity grade merely because a report number has been applied."
      },
      {
        type: "paragraph",
        text: "However, any work on a diamond should be completed by a reputable provider using appropriate equipment. Girdles can be thin or vulnerable in places, and poor handling—not the concept of inscription itself—can create risk."
      },
      {
        type: "paragraph",
        text: "The inscription also does not strengthen the diamond or protect it from chipping. Setting design and careful wear remain important."
      }
    ]
  },
  {
    heading: "Does laser inscription change carat weight?",
    content: [
      {
        type: "paragraph",
        text: "The amount of material involved in a microscopic inscription is generally too small to change the reported carat weight. Routine inscription should not be understood as a meaningful reduction in diamond mass."
      },
      {
        type: "paragraph",
        text: "More extensive polishing to remove an inscription or repair damage can remove material. If the diamond is substantially repolished or recut, its measurements and weight should be reassessed."
      },
      {
        type: "callout",
        title: "Carat Weight Details",
        parts: [
          { text: "Read " },
          { text: "lab-grown diamond carat weight explained", href: "/blog/lab-grown-diamond-carat-weight-explained/" },
          { text: " for how weight is measured and reported." }
        ]
      }
    ]
  },
  {
    heading: "Does every certified diamond have an inscription?",
    content: [
      {
        type: "paragraph",
        text: "No. An inscription may be included, optional or unavailable depending on the laboratory, report service, carat range, date and client request. Older reports may follow different practices from current services."
      },
      {
        type: "paragraph",
        text: "Conversely, an inscribed diamond is not necessarily “certified.” A brand, manufacturer or private inscription can exist without an independent laboratory report."
      },
      {
        type: "callout",
        title: "Diamond Certification Guide",
        parts: [
          { text: "Check the actual document and issuing laboratory. Our guide to " },
          { text: "whether every lab-grown diamond needs certification", href: "/blog/do-lab-grown-diamonds-need-certification/" },
          { text: " explains when individual reporting is most valuable." }
        ]
      }
    ]
  },
  {
    heading: "Is an inscription the same as a certificate?",
    content: [
      {
        type: "paragraph",
        text: "No. The inscription is a microscopic identifier. The grading report is the laboratory document or digital record describing the examined diamond."
      },
      {
        type: "paragraph",
        text: "The inscription normally contains only a short reference, not the complete 4Cs, measurements, comments, growth information or treatment findings. It becomes meaningful when used to locate and match the full report."
      },
      {
        type: "callout",
        title: "Reading Certificates",
        parts: [
          { text: "Learn " },
          { text: "how to read a lab-grown diamond certificate", href: "/blog/how-to-read-lab-grown-diamond-certificate/" },
          { text: " and why the industry term “certificate” is often used informally for a grading report." }
        ]
      }
    ]
  },
  {
    heading: "What if the inscription does not match the report?",
    content: [
      {
        type: "paragraph",
        text: "Do not complete the purchase or accept the stone as verified. A mismatch can result from a transcription error, an incorrect report supplied with the item, a stone mixed up during setting or repair, an outdated report, a counterfeit inscription, or intentional substitution."
      },
      {
        type: "paragraph",
        text: "Ask the seller to isolate the item and explain the discrepancy in writing. Obtain independent examination and contact the issuing laboratory through its official channel. Do not allow the inscription to be polished away before the mismatch is documented."
      }
    ]
  },
  {
    heading: "What if you cannot find the inscription?",
    content: [
      {
        type: "paragraph",
        text: "First confirm that the report says an inscription exists. Then clean the jewellery and ask an experienced jeweller to inspect the complete accessible girdle."
      },
      {
        type: "paragraph",
        text: "The inscription may be under a prong or bezel, obscured by dirt or oil, difficult to read on the girdle finish, worn or removed through polishing, located somewhere unexpected, or absent because the wrong report was supplied."
      },
      {
        type: "paragraph",
        text: "Inability to see it at home does not prove a problem, but a professional should resolve the uncertainty before a significant purchase, repair handover or insurance update."
      }
    ]
  },
  {
    heading: "Laser inscriptions and jewellery repairs",
    content: [
      {
        type: "paragraph",
        text: "Record the inscription and photograph the jewellery before leaving it for resizing, resetting, cleaning or repair. The receipt should identify the principal diamond by report number, shape, weight and any accessible inscription."
      },
      {
        type: "paragraph",
        text: "After collection, check the following points:"
      },
      {
        type: "numbered-list",
        items: [
          "Inspect the jewellery for damage.",
          "Recheck the inscription where accessible.",
          "Confirm that measurements and identifying characteristics remain consistent.",
          "Retain the repair invoice with the grading report."
        ]
      },
      {
        type: "paragraph",
        text: "This protects both the customer and reputable repairer by creating a chain of documentation."
      }
    ]
  },
  {
    heading: "Common laser-inscription mistakes",
    content: [
      {
        type: "paragraph",
        text: "Avoid these common errors when evaluating diamond inscriptions:"
      },
      {
        type: "bullet-list",
        items: [
          "Treating the inscription as automatic proof: Verify the laboratory record and physical specifications as well.",
          "Assuming every lab-grown diamond has identical wording: Practices vary by laboratory, service and date. Read the current report.",
          "Expecting to see it unaided: Most inscriptions require magnification and controlled lighting.",
          "Believing it can never be removed: Polishing can remove a girdle inscription.",
          "Assuming a missing inscription means a fake diamond: It may be hidden, optional, removed or never applied. Professional testing determines identity.",
          "Confusing a brand inscription with laboratory grading: A logo or message is not an independent quality assessment.",
          "Ignoring repair documentation: Record the inscription before handing over important jewellery.",
          "Comparing only carat weight: Fraudulent substitutions can be selected to approximate weight. Match dimensions, quality data and identifying features."
        ],
        itemsParts: [
          [
            { text: "Treating the inscription as automatic proof: ", bold: true },
            { text: "Verify the laboratory record and physical specifications as well." }
          ],
          [
            { text: "Assuming every lab-grown diamond has identical wording: ", bold: true },
            { text: "Practices vary by laboratory, service and date. Read the current report." }
          ],
          [
            { text: "Expecting to see it unaided: ", bold: true },
            { text: "Most inscriptions require magnification and controlled lighting." }
          ],
          [
            { text: "Believing it can never be removed: ", bold: true },
            { text: "Polishing can remove a girdle inscription." }
          ],
          [
            { text: "Assuming a missing inscription means a fake diamond: ", bold: true },
            { text: "It may be hidden, optional, removed or never applied. Professional testing determines identity." }
          ],
          [
            { text: "Confusing a brand inscription with laboratory grading: ", bold: true },
            { text: "A logo or message is not an independent quality assessment." }
          ],
          [
            { text: "Ignoring repair documentation: ", bold: true },
            { text: "Record the inscription before handing over important jewellery." }
          ],
          [
            { text: "Comparing only carat weight: ", bold: true },
            { text: "Fraudulent substitutions can be selected to approximate weight. Match dimensions, quality data and identifying features." }
          ]
        ]
      }
    ]
  },
  {
    heading: "Aurelia Royale’s transparency standard",
    content: [
      {
        type: "paragraph",
        text: "For individually reported principal diamonds in Aurelia Royale jewellery, product information should state the issuing laboratory, report or assessment number, laboratory-grown origin and inscription details where applicable."
      },
      {
        type: "paragraph",
        text: "Before dispatch, the relevant identifier should be checked against the report and product specification. The supplied documentation should allow the customer to repeat the verification through the issuing laboratory’s official database."
      },
      {
        type: "paragraph",
        text: "For small accent diamonds, individual inscriptions may not be practical or expected. Their laboratory-grown origin and applicable quality range should still be disclosed clearly."
      },
      {
        type: "callout",
        title: "Transparency Questions",
        parts: [
          { text: "If the report or inscription information is unclear, " },
          { text: "contact Aurelia Royale", href: "/contact" },
          { text: " before ordering." }
        ]
      }
    ]
  },
  {
    heading: "Buyer checklist",
    content: [
      {
        type: "bullet-list",
        items: [
          "Is the diamond clearly described as laboratory-grown?",
          "Does the report state that an inscription is present?",
          "What exact text should appear on the girdle?",
          "Can a jeweller locate and read it?",
          "Does the number exist in the issuing laboratory’s official database?",
          "Do shape, weight and measurements match?",
          "Do colour, clarity and other report details align?",
          "Is the inscription partly hidden by the setting?",
          "Has the diamond been repolished, recut or repaired?",
          "Are there unexplained extra inscriptions?",
          "Has an independent professional checked a higher-risk purchase?",
          "Is the inscription recorded before repair or resetting?",
          "Are the report and invoice retained securely?"
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
            text: "A diamond laser inscription is a microscopic identifier normally placed on the girdle. It can connect a diamond to its report, support laboratory-grown disclosure and make checks before purchase, repair and resale easier.\n\n"
          },
          {
            text: "It is valuable, but it is not infallible. An inscription can be hidden, removed, altered or counterfeited. Reliable verification combines the exact inscription, the issuing laboratory’s official database, the report’s measurements and characteristics, and professional examination where appropriate.\n\n"
          },
          {
            text: "Use the inscription as a doorway to evidence—not as the evidence in its entirety."
          }
        ]
      }
    ]
  },
  {
    heading: "Frequently asked questions",
    content: [
      {
        type: "faq",
        items: [
          {
            question: "What is a diamond laser inscription?",
            answer: "It is microscopic text, numbers or a symbol applied to a diamond, usually on the girdle, using a controlled laser."
          },
          {
            question: "Where is the inscription on a diamond?",
            answer: "It is normally on the girdle, the narrow outer edge between the crown and pavilion. A prong or bezel may cover it after setting."
          },
          {
            question: "Can you see a diamond inscription with the naked eye?",
            answer: "Usually not. A 10× loupe or microscope and appropriate lighting are commonly needed."
          },
          {
            question: "What is inscribed on a lab-grown diamond?",
            answer: "It may carry a laboratory-grown description, the grading or assessment number, and sometimes a brand or personal inscription."
          },
          {
            question: "How do I verify a diamond inscription?",
            answer: "Read the exact number, check it in the issuing laboratory’s official database and compare the diamond’s weight, measurements and reported characteristics."
          },
          {
            question: "Does an inscription prove a diamond is genuine?",
            answer: "Not by itself. Inscriptions can be copied or altered, so the physical diamond and laboratory record must also match."
          },
          {
            question: "Can a laser inscription be removed?",
            answer: "Yes. Polishing the girdle can remove it. Removal should be performed only by a qualified professional."
          },
          {
            question: "Does laser inscription damage the diamond?",
            answer: "A correctly applied microscopic girdle inscription is intended not to affect face-up beauty or quality. Work should be completed by a reputable specialist."
          },
          {
            question: "Does inscription reduce carat weight?",
            answer: "Routine microscopic inscription does not normally cause a meaningful change in reported weight. More extensive repolishing or recutting can remove material."
          },
          {
            question: "Does every certified diamond have an inscription?",
            answer: "No. Availability depends on the laboratory, service, date, size and client request. Check the actual report."
          },
          {
            question: "What should I do if the inscription and report do not match?",
            answer: "Pause the transaction, document the discrepancy, obtain independent examination and contact the issuing laboratory through its official channel."
          },
          {
            question: "Can a personal message be laser-inscribed on a diamond?",
            answer: "Yes, some providers can add initials, dates, short messages or symbols, subject to space and service requirements."
          }
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
            Certification and Diamond Quality
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Is a Diamond Laser Inscription?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Journal • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <DynamicArticle sections={articleSections} />

      {/* Footer Newsletter Section */}
      {/* Related articles — crawlable plain links */}
      <RelatedArticles currentSlug="diamond-laser-inscription" />
      <NewsletterSection />
    </main>
  );
}
