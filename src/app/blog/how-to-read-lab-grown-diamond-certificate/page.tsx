import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Read a Lab-Grown Diamond Certificate",
  description: "Learn how to read an IGI lab-grown diamond certificate, including carat, colour, clarity, cut, measurements, treatments and report verification.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/",
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
      "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/how-to-read-lab-grown-diamond-certificate.webp",
      "width": 1600,
      "height": 900,
      "caption": "Laboratory-grown diamond beside an independent grading report"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#webpage",
      "url": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/",
      "name": "How to Read a Lab-Grown Diamond Certificate",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#article",
      "headline": "How to Read a Lab-Grown Diamond Certificate",
      "description": "Learn how to read an IGI lab-grown diamond certificate, including carat, colour, clarity, cut, measurements, treatments and report verification.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "how to read a lab-grown diamond certificate",
        "how to read an IGI report",
        "lab-grown diamond certificate explained",
        "IGI certificate explained",
        "diamond report number"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#breadcrumb",
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
          "name": "How to Read a Lab-Grown Diamond Certificate",
          "item": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/how-to-read-lab-grown-diamond-certificate/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I check first on a lab-grown diamond certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the report number, grading laboratory and laboratory-grown origin. Verify the number through the laboratory's official website."
          }
        },
        {
          "@type": "Question",
          "name": "Is a diamond certificate the same as a grading report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certificate is commonly used by consumers, but grading report is more accurate because the document records a laboratory's professional assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What does CVD mean on a diamond certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CVD means Chemical Vapour Deposition, one of the processes used to grow diamonds in a controlled environment."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most important grade on a diamond certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No single grade determines overall quality. Cut and visible appearance are important, but origin, measurements, colour, clarity and treatments should all be reviewed."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI report show whether a lab-grown diamond was treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment information may appear in the comments section when included in the assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What does eye-clean mean on a diamond certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eye-clean is not normally an official laboratory grade. It is a retail description indicating that inclusions are not easily visible without magnification under stated conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Why do two one-carat diamonds have different measurements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carat measures weight. Differences in depth, outline and proportions can cause equal-weight diamonds to have different face-up dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Is fluorescence bad in a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Many fluorescent diamonds show no undesirable effect in everyday lighting and should be evaluated individually."
          }
        },
        {
          "@type": "Question",
          "name": "Can a grading report tell me whether the diamond price is fair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A report describes the diamond's characteristics but does not normally evaluate the retailer's price or future resale value."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the report number does not work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check that the number was entered correctly. If it still cannot be verified, contact the retailer and grading laboratory before purchasing."
          }
        }
      ]
    }
  ]
};

export default function Blog22Page() {
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
            How to Read a Lab-Grown Diamond Certificate
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
            src="/images/blog/how-to-read-lab-grown-diamond-certificate/22 (1).png"
            alt="Laboratory-grown diamond beside an independent grading report"
            title="How to Read a Diamond Certificate"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Understanding all sections of an independent grading report ensures a transparent buying experience.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            To read a lab-grown diamond certificate, begin by confirming the report number and laboratory-grown origin. Then review the diamond’s shape, measurements, carat weight, colour, clarity, cut, polish, symmetry, fluorescence, treatments and laser inscription.
          </p>
          <p>
            Do not focus on one grade alone.
          </p>
          <p>
            A diamond with a high colour or clarity grade can still appear less attractive if its cut and proportions do not handle light effectively. Likewise, two diamonds with the same 4Cs may differ in visible size, proportions, inclusions and overall appearance.
          </p>
          <p>
            Although consumers frequently use the word “certificate”, the more accurate term is diamond grading report. It records the laboratory’s assessment of a particular diamond at the time of examination.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Read a lab-grown diamond report in this order:
            Verify the report number. Confirm it says “laboratory-grown diamond”. Check the shape and measurements. Review carat weight. Check colour and clarity. Review cut, polish and symmetry. Examine fluorescence. Read every comment and treatment disclosure. Compare the laser inscription. Make sure the report matches the diamond being sold.
            The report provides valuable quality information, but it does not tell you whether the retailer’s price is fair, whether the jewellery setting is well made or whether the diamond will have strong resale value.
          </p>
        </div>

        {/* Section 1: Grading lab, number, date, description, growth */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Essential Registry and Growth Details
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Grading Laboratory &amp; Number:</strong> Identify the issuing organisation (such as IGI or GIA). Enter the unique report number into the laboratory&apos;s online verification database to match digital logs to the printed paper.
          </p>
          <p>
            <strong>Report Date &amp; Description:</strong> The date records when the stone was examined. Ensure the description specifies &quot;laboratory-grown diamond&quot; or &quot;laboratory-created diamond&quot; rather than vague descriptors.
          </p>
          <p>
            <strong>Growth Method:</strong> Check comments for CVD or HPHT growth technologies. Remember, growth method is a production classification, not an indicator of beauty or durability.
          </p>

          {/* IMAGE 2: Database verifications */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-to-read-lab-grown-diamond-certificate/22 (2).png"
              alt="Entering grading report number on official laboratory database"
              title="Report Registry Verification"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Verify the unique report code through the official laboratory website database to confirm origin details.
          </p>
        </div>

        {/* Section 2: Proportions and 4Cs */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Shape, Physical Measurements, and the 4Cs
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Shape &amp; Cutting Style:</strong> Outlines include round brilliant, oval modified brilliant, pear, cushion, and emerald cuts. Match descriptions to the physical stones.
          </p>
          <p>
            <strong>Millimetre Measurements &amp; Carat Weight:</strong> Carat is weight (0.20g); measurements define visual size. Compare dimensions directly to see if weight is hidden in cut depth. Elongated shapes display length-to-width ratios.
          </p>
          <p>
            <strong>Colour Grade (D to Z):</strong> Ranging from colourless (D–F) to near-colourless (G–J). Neighboured grades are near-indistinguishable. Metal selection (yellow or rose gold) can complement warmer colour grades.
          </p>
          <p>
            <strong>Clarity Grade (FL to I3):</strong> Evaluated at 10× zoom. VS and SI diamonds are frequently eye-clean without paying premiums for flawless clarity grades. Undergo visual checks for cloudy zones.
          </p>
          <p>
            <strong>Cut Grade, Polish &amp; Symmetry:</strong> Cut regulates fire, brilliance, and scintillation. Polish tracks surface markers, while symmetry logs facet alignment. Priority remains Excellent ratings for round shapes.
          </p>

          {/* IMAGE 3: Facet proportions */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-to-read-lab-grown-diamond-certificate/22 (3).png"
              alt="Inspecting round brilliant cut diamond facets with a loupe"
              title="The 4Cs and Proportion Mapping"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Carat weight evaluates mass, while millimeter measurements define visual face-up size.
          </p>
        </div>

        {/* Section 3: Fluorescence, plots, comments */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Fluorescence, Clarity Plots, and Inscriptions
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Fluorescence:</strong> Identifies ultraviolet light reactions (none, faint, medium, strong). Faint and medium details do not impact normal light properties.
          </p>
          <p>
            <strong>Clarity Plots &amp; Comments:</strong> The diagram maps where surface blemishes or inclusions reside. Read the comments column for post-growth treatments (annealing).
          </p>
          <p>
            <strong>Girdle laser inscription:</strong> Laser-inscribed serial codes match reporting entries, allowing identification checks under loupe zoom.
          </p>

          {/* IMAGE 4: Girdle serial */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-to-read-lab-grown-diamond-certificate/22 (4).png"
              alt="Using micro zoom lens to check girdle laser inscription number"
              title="Girdle Laser Code Registration"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A matching laser inscription code on the diamond's girdle links the physical gem with its report.
          </p>
        </div>

        {/* Worked example table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            A worked report example
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Report field</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Example result</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">How to interpret it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Description", r: "Laboratory-grown diamond", i: "Confirms laboratory-grown origin" },
                  { f: "Growth method", r: "CVD", i: "Explains how the diamond was produced" },
                  { f: "Shape", r: "Round brilliant", i: "Standard round outline and brilliant facet style" },
                  { f: "Measurements", r: "6.42–6.46 × 3.94 mm", i: "Appropriate physical dimensions must be compared with carat weight" },
                  { f: "Carat weight", r: "1.00 ct", i: "The diamond weighs one carat" },
                  { f: "Colour", r: "G", i: "Near colourless" },
                  { f: "Clarity", r: "VS1", i: "Minor characteristics that are difficult to see at 10×" },
                  { f: "Cut", r: "Excellent", i: "Strong reported cut quality" },
                  { f: "Polish", r: "Excellent", i: "High-quality facet surfaces" },
                  { f: "Symmetry", r: "Excellent", i: "Precise facet alignment" },
                  { f: "Fluorescence", r: "Faint", i: "Unlikely to cause a significant visible effect" },
                  { f: "Comments", r: "CVD growth process; post-growth treatment detected", i: "Important manufacturing and treatment information" },
                  { f: "Inscription", r: "IGI LG123456789", i: "Should match the girdle inscription and online report" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.r}</td>
                    <td className="p-4">{row.i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Loose vs Mounted Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Loose vs Finished Jewellery Reports
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Loose-diamond report</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Finished-jewellery report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Evaluation Focus", l: "Covers an individual loose diamond", m: "Covers a mounted jewellery article" },
                  { f: "Measurements", l: "Usually allows complete measurements", m: "Setting may restrict measurements" },
                  { f: "Weight Accuracy", l: "Carat weight can be measured directly", m: "Weight may be estimated if removal is not possible" },
                  { f: "Girdle Inspection", l: "Easier to inspect the girdle", m: "Girdle may be partially hidden" },
                  { f: "Setting Grading", l: "Does not grade the finished setting", m: "May describe metal and mounted stones" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.l}</td>
                    <td className="p-4">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Final Buyer Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before paying, confirm you checked:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Grading laboratory, report number, and database check verification.",
                  "Stated laboratory-grown origin and date matches original examination.",
                  "Shape, cut grade, polish, symmetry, and ultraviolet fluorescence levels.",
                  "Physical measurements in millimetres and carat weights match product descriptions.",
                  "CVD/HPHT growth method comments and any post-growth treatments.",
                  "Girdle laser inscription details and clarity characteristics plot.",
                  "Understanding of whether the report covers loose diamonds or a finished mount."
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
            Reading a lab-grown diamond certificate means understanding how all its fields work together. Verify the report number independently on the lab&apos;s database, check the growth/treatment details, and balance cut quality against carat specifications. The best diamond is the one whose documented grades, visual beauty, and price match seamlessly.
          </p>
          <p className="mt-4">
            At Aurelia Royale, we guide you through reading reports, providing complete GIA/IGI files and metal hallmarks for every piece.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What should I check first on a lab-grown diamond certificate?",
              a: "Check the report number, grading laboratory and laboratory-grown origin. Verify the number through the laboratory's official website before interpreting the remaining grades."
            },
            {
              q: "Is a diamond certificate the same as a grading report?",
              a: "“Certificate” is commonly used by consumers, but “grading report” is more accurate. The document records a laboratory’s professional assessment rather than guaranteeing value."
            },
            {
              q: "What does CVD mean on a diamond certificate?",
              a: "CVD means Chemical Vapour Deposition, one of the processes used to grow diamonds in a controlled environment."
            },
            {
              q: "What is the most important grade on a diamond certificate?",
              a: "No single grade determines overall quality. Cut and visible appearance are particularly important, but origin, measurements, colour, clarity and treatment information should all be reviewed."
            },
            {
              q: "Does an IGI report show whether a lab-grown diamond was treated?",
              a: "Treatment information may appear in the comments section when included in the assessment. Always read the complete report."
            },
            {
              q: "What does “eye-clean” mean on a diamond certificate?",
              a: "Eye-clean is not normally an official laboratory grade. It is a retail description indicating that inclusions are not easily visible without magnification under stated viewing conditions."
            },
            {
              q: "Why do two one-carat diamonds have different measurements?",
              a: "Carat measures weight. Differences in depth, outline and proportions can cause diamonds of equal weight to have different face-up dimensions."
            },
            {
              q: "Is fluorescence bad in a lab-grown diamond?",
              a: "Not automatically. Many diamonds with fluorescence show no undesirable effect in everyday lighting. Stronger fluorescence should be evaluated individually."
            },
            {
              q: "Can a grading report tell me whether the diamond price is fair?",
              a: "No. A report describes the diamond’s characteristics but does not normally evaluate the retailer’s price or future resale value."
            },
            {
              q: "What should I do if the report number does not work?",
              a: "Check that it was entered correctly. If it still cannot be verified, contact the retailer and grading laboratory before completing the purchase."
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
            Explore Certified Fine Jewellery at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Verify independent grading credentials directly. Shop our transparent collection of lab-grown diamonds.
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
