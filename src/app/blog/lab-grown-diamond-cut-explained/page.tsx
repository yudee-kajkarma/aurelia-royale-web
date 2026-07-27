import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Cut Explained: Complete Guide",
  description: "Learn how lab-grown diamond cut affects sparkle, brightness and size, including cut grades, proportions, polish, symmetry and fancy shapes.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/",
  },
};

// 2. The exact JSON-LD Schema you provided
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-cut-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Precision-cut lab-grown diamond showing balanced light return"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/",
      "name": "Lab-Grown Diamond Cut Explained",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#article",
      "headline": "Lab-Grown Diamond Cut Explained",
      "description": "Learn how lab-grown diamond cut affects sparkle, brightness and size, including cut grades, proportions, polish, symmetry and fancy shapes.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond cut explained",
        "lab-grown diamond cut grades",
        "best cut for lab-grown diamond",
        "diamond cut quality",
        "diamond proportions"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#breadcrumb",
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
          "name": "Lab-Grown Diamond Cut Explained",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-cut-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is lab-grown diamond cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cut describes the diamond's craftsmanship, proportions, facet arrangement and interaction with light."
          }
        },
        {
          "@type": "Question",
          "name": "Is diamond cut the same as shape?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Shape refers to the outline, while cut quality describes how effectively the diamond has been faceted and proportioned."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best cut grade for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A high cut grade such as Excellent-Ideal, Excellent or Very Good is generally preferred, depending on the laboratory's grading system."
          }
        },
        {
          "@type": "Question",
          "name": "Does a better cut make a diamond sparkle more?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, because cut influences brightness, fire, scintillation and contrast."
          }
        },
        {
          "@type": "Question",
          "name": "Can two Excellent-cut diamonds look different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A cut-grade category can include different proportions, facet relationships and visual patterns."
          }
        },
        {
          "@type": "Question",
          "name": "Does cut affect visible diamond size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Deep or thick-girdled diamonds may hold weight without providing greater face-up dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Do oval diamonds receive cut grades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the laboratory and report. Some laboratories offer fancy-shape grading while others limit traditional cut grades to round brilliants."
          }
        },
        {
          "@type": "Question",
          "name": "Is a bow tie always bad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A slight bow tie can create contrast, but a large, dark and persistent bow tie may be distracting."
          }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT determine diamond cut quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. CVD and HPHT describe growth methods. Cut quality is determined during shaping and polishing."
          }
        },
        {
          "@type": "Question",
          "name": "Can a certificate tell me everything about diamond cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It provides grades and measurements but may not fully communicate bow ties, windowing, movement or personal visual preference."
          }
        }
      ]
    }
  ]
};

export default function Blog27Page() {
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
            Lab-Grown Diamond Cut Explained
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Educational Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/lab-grown-diamond-cut-explained/27 (1).png"
            alt="Precision-cut lab-grown diamond showing balanced light return"
            title="Precision Cut Lab Diamond"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          A precision-cut lab-grown diamond balances brightness, fire, and contrast to return light effectively.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamond cut describes how successfully a diamond has been shaped and faceted to interact with light.
          </p>
          <p>
            Cut influences brightness, fire, scintillation, contrast, visible size, facet pattern, symmetry, and overall visual appeal. A diamond may have exceptional colour and clarity grades but still look dull if it has weak proportions or poor light return.
          </p>
          <p>
            For many buyers, cut is the most important of the 4Cs because it has a direct effect on what they see.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12 font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p>
            A well-cut lab-grown diamond should: return light effectively, show a balanced mixture of brightness and contrast, produce visible flashes as it moves, avoid appearing consistently dark or glassy, use weight efficiently, and display good polish.
          </p>
          <p className="mt-2">
            The report’s cut grade is an important starting point, but videos, measurements and visual inspection are still needed—particularly for oval, pear, emerald, cushion and other fancy-shaped diamonds.
          </p>
        </div>

        {/* Section 1: Definition */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. What Does Diamond Cut Mean?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Diamond cut refers to the precise craftsmanship and geometric plan used to polish rough diamond crystal. It dictates table sizes, crown angles, pavilion depths, girdle thickness, and culet points. Cutters must balance carat yield from rough materials against light properties; deep stones hide carat weight without contributing to face-up diameters.
          </p>
          <p>
            <strong>Cut vs Shape:</strong> Shape refers to outline (round, oval, pear, cushion, emerald). Cut quality evaluates how successfully that shape and its facets have been executed. Two oval stones can look entirely different based on cut execution.
          </p>

          {/* IMAGE 2: Shape comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-cut-explained/27 (2).png"
              alt="Comparing diverse diamond outlines like round cushion and marquise"
              title="Comparing Various Diamond Shapes"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Diamond shape refers to outline silhouette; cut quality describes facet craftsmanship.
          </p>
        </div>

        {/* Section 2: How Sparkle Works */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. How Cut Creates Diamond Sparkle
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Sparkle relies on multiple physical light reflections:
          </p>
          <ul className="space-y-3 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Brightness:</strong> The white light returned to the eye. Shallow cuts bleed light from bottoms.</li>
            <li><strong>Fire:</strong> The dispersion of white light into bright spectral color flashes (reds, blues, yellows).</li>
            <li><strong>Scintillation &amp; Contrast:</strong> Flash patterns created during movement. Dark contrast lines are necessary to make bright flashes stand out.</li>
          </ul>

          {/* IMAGE 3: Dispersion fire */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-cut-explained/27 (3).png"
              alt="Bright fire and light return dispersion through facets"
              title="Light Fire and Dispersion"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Fire separates white light into spectral colors, creating visible flashes as the stone moves.
          </p>
        </div>

        {/* Section 3: Anatomy and Grades */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Diamond Anatomy and Cut Grading
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>The Proportions:</strong> Key zones include the flat top facet (table), upper slope (crown), middle dividing edge (girdle), lower facets (pavilion), and bottom culet tip.
          </p>
          <p>
            <strong>Grading terminology:</strong> Labs (IGI, GIA) evaluate parameters under Excellent, Very Good, Good, Fair, and Poor. IGI rounds round brilliant cuts with &quot;Excellent-Ideal&quot; classifications.
          </p>
          <p>
            <strong>Polish and Symmetry:</strong> Polish tracks surface facet blemishes (drag lines). Symmetry records geometric alignment. Excellent grades in both are desirable, but overall proportions must still be balanced.
          </p>
        </div>

        {/* Section 4: Fancy Shapes Bow ties and windowing */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. Bow Ties and Windowing in Fancy Shapes
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Fancy shapes require visual assessment beyond certificates:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Bow Ties:</strong> Dark bow-shaped areas crossing ovals, marquises, or pears. Severe black bow ties look distracting.</li>
            <li><strong>Windowing:</strong> Transparent central glassy sections in step-cut shapes (emerald, Asscher). Inactive areas let you see directly through the stone.</li>
          </ul>

          {/* IMAGE 4: Oval bow tie check */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-cut-explained/27 (4).png"
              alt="Checking oval diamond bow-tie pattern with magnification"
              title="Oval Diamond Bow Tie Check"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Elongated ovals or marquise stones must be inspected to ensure bow ties are not dark or distracting.
          </p>
        </div>

        {/* Product Recommendations Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Fancy Shape Cut Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Shape</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Key Cut Parameters to Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "Round Brilliant", c: "Table/depth ratios, culet sharpness, Hearts & Arrows optical symmetry." },
                  { s: "Oval & Pear", c: "Even outline shoulders, bow-tie severity, point claw protection." },
                  { s: "Emerald & Asscher", c: "Step facet corner alignments, windowing transparency check, visual clarity plots." },
                  { s: "Cushion & Radiant", c: "Crushed-ice sparkle distribution vs larger facet pattern contrast, corner profiles." },
                  { s: "Marquise & Princess", c: "Point alignments, curvature symmetries, prongs shielding vulnerable tips." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Diamond Cut Purchase Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before choosing your stone, check:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Shape description aligns with your chosen setting frame.",
                  "Cut, polish, and symmetry grades are Excellent or Very Good.",
                  "Face-up millimetre measurements match expected carat weights.",
                  "The diamond shows a balanced pattern of light and dark contrast.",
                  "Step-cuts are checked for central transparency (windowing).",
                  "Elongated stones are evaluated via rotating videos to log bow ties.",
                  "Vulnerable points (corners, tips) are shielded by setting prongs."
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-4 flex items-center gap-3">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span>{item}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Verdict Callout */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            Final Verdict
          </h4>
          <p>
            Lab-grown diamond cut determines how successfully the finished stone interacts with light. Proportions, polish, symmetry, and facet alignments shape brightness and fire. Start with the grading report but review high-resolution rotating videos to inspect bow ties and windowing before buying.
          </p>
          <p className="mt-4">
            Aurelia Royale hand-selects diamonds for ideal light return, providing rotating videos and complete GIA/IGI reports for all designs.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is lab-grown diamond cut?",
              a: "Cut describes the diamond's craftsmanship, proportions, facet arrangement and interaction with light."
            },
            {
              q: "Is diamond cut the same as shape?",
              a: "No. Shape refers to the outline, such as round or oval. Cut quality describes how effectively the diamond has been faceted and proportioned."
            },
            {
              q: "What is the best cut grade for a lab-grown diamond?",
              a: "A high cut grade such as Excellent-Ideal, Excellent or Very Good is generally preferred, depending on the laboratory's grading system."
            },
            {
              q: "Does a better cut make a diamond sparkle more?",
              a: "Usually, because cut influences brightness, fire, scintillation and contrast. Lighting and cleanliness also affect visible sparkle."
            },
            {
              q: "Can two Excellent-cut diamonds look different?",
              a: "Yes. A cut-grade category can include different proportions, facet relationships and visual patterns."
            },
            {
              q: "What is the difference between cut, polish and symmetry?",
              a: "Cut is the overall assessment of design and light behaviour. Polish assesses facet surfaces, while symmetry assesses facet alignment and outline."
            },
            {
              q: "Does cut affect visible diamond size?",
              a: "Yes. Deep or thick-girdled diamonds may hold weight without providing greater face-up dimensions."
            },
            {
              q: "Do oval diamonds receive cut grades?",
              a: "It depends on the laboratory and report. Some laboratories offer fancy-shape cut grading, while others limit traditional cut grades to standard round brilliants."
            },
            {
              q: "Is a bow tie always bad?",
              a: "No. A slight bow tie can create contrast, but a large, dark and persistent bow tie may be distracting."
            },
            {
              q: "What is windowing in a diamond?",
              a: "Windowing is an area where light passes through rather than returning effectively, creating a transparent or glassy appearance."
            },
            {
              q: "Does CVD or HPHT determine diamond cut quality?",
              a: "No. CVD and HPHT describe growth methods. Cut quality is determined during the later shaping and polishing process."
            },
            {
              q: "Can a certificate tell me everything about diamond cut?",
              a: "No. It provides important grades and measurements but may not fully communicate bow ties, windowing, movement or personal visual preference."
            }
          ].map((faq, index) => (
            <details
              key={index}
              className="group border border-[#e2dfd5] rounded-lg p-5 bg-surface open:bg-[#e8e5dc]/40 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between font-cormorant text-xl md:text-2xl font-medium text-foreground cursor-pointer outline-none">
                <span>{faq.q}</span>
                <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-gold text-lg">▼</span>
              </summary>
              <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* CTA Conversion Banner */}
        <div className="mt-20 bg-[#153f35] text-[#efefe8] p-10 rounded-lg text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          <h3 className="font-cormorant text-3xl md:text-4xl font-medium tracking-wide mb-4">
            Discover Ideal Cut Brilliance
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Meticulously planned facets, sharp symmetries, and verified certificate credentials. Shop our diamonds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop/"
              className="inline-block bg-gold text-[#031b16] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-300"
            >
              Explore Collection
            </Link>
            <Link
              href="/contact/"
              className="inline-block border border-[#efefe8]/30 text-[#efefe8] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-[#efefe8] hover:text-[#031b16] transition-all duration-300"
            >
              Consult an Expert
            </Link>
          </div>
        </div>

      </section>

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
