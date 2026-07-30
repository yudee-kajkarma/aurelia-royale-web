import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Diamond vs Jewellery Certification: Key Differences",
  description: "Learn the difference between a diamond report, finished-jewellery report, hallmark, valuation and authenticity card before buying fine jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/",
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
      "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/diamond-certification-vs-jewellery-certification.webp",
      "width": 1600,
      "height": 900,
      "caption": "Diamond grading report compared with a finished-jewellery report"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#webpage",
      "url": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/",
      "name": "Diamond Certification vs Jewellery Certification: What Is the Difference?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#article",
      "headline": "Diamond Certification vs Jewellery Certification: What Is the Difference?",
      "description": "Learn the difference between a diamond report, finished-jewellery report, hallmark, valuation and authenticity card before buying fine jewellery.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "diamond certification vs jewellery certification",
        "diamond certificate vs jewellery certificate",
        "jewellery grading report",
        "finished jewellery report",
        "diamond report vs hallmark"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#breadcrumb",
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
          "name": "Diamond Certification vs Jewellery Certification",
          "item": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/diamond-certification-vs-jewellery-certification/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between diamond and jewellery certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A diamond report normally assesses one individual diamond. A jewellery report examines the complete mounted article within the limits created by the setting."
          }
        },
        {
          "@type": "Question",
          "name": "Does a diamond certificate cover the ring setting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. A loose-diamond report does not normally assess the ring's metal, claws, craftsmanship or smaller accent stones."
          }
        },
        {
          "@type": "Question",
          "name": "Is a jewellery certificate the same as a hallmark?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A hallmark relates to precious-metal fineness and official hallmark information; it does not grade diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Is a grading report the same as a valuation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A grading report describes gemological characteristics, while a valuation estimates monetary value for a stated purpose."
          }
        },
        {
          "@type": "Question",
          "name": "Does an authenticity card count as independent certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not normally. Most authenticity cards are issued by the retailer, brand or manufacturer rather than an independent laboratory."
          }
        },
        {
          "@type": "Question",
          "name": "What does graded as mounting permits mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It means the setting restricted the laboratory's examination, so some grades or measurements may be provided as ranges or estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI report certify jewellery craftsmanship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A jewellery report may document the article and mounting details, but it should not be treated as a lifetime structural guarantee."
          }
        },
        {
          "@type": "Question",
          "name": "Can a ring have both diamond and jewellery certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The centre diamond may have an individual report, while the finished ring may also have a separate jewellery report."
          }
        },
        {
          "@type": "Question",
          "name": "Does jewellery certification guarantee resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Documentation assists identification, but resale value depends on market conditions, condition, metal, design and demand."
          }
        },
        {
          "@type": "Question",
          "name": "Which document is most important when buying diamond jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No single document covers everything. Review the diamond report, hallmark information, invoice, warranty and any finished-jewellery report together."
          }
        }
      ]
    }
  ]
};

export default function Blog25Page() {
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
            Diamond vs Jewellery Certification
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Registry Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/diamond-certification-vs-jewellery-certification/25 (1).jpg"
            alt="Diamond grading report compared with a finished-jewellery report"
            title="Diamond vs Jewellery Reports"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          A loose-stone certificate and a mounted finished-jewellery report serve distinct evaluation purposes.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Diamond certification and jewellery certification do not necessarily cover the same things.
          </p>
          <p>
            A diamond grading report normally assesses one specific diamond and records information such as its origin, carat weight, colour, clarity, cut and measurements.
          </p>
          <p>
            A finished-jewellery report examines the assembled piece. Depending on the service, it may identify the mounted stones, describe the precious metal, record purity stamps and provide gemstone assessments within the limits created by the setting.
          </p>
          <p>
            Neither document should automatically be confused with a precious-metal hallmark, a jewellery valuation, an insurance appraisal, a retailer authenticity card, a warranty, or an invoice. When a product is advertised as “certified jewellery”, buyers should ask exactly what was examined, who examined it, and which document will be supplied.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Document</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it primarily covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { d: "Diamond grading report", c: "One individual diamond" },
                  { d: "Finished-jewellery report", c: "The assembled jewellery article and mounted stones" },
                  { d: "Hallmark", c: "Precious-metal fineness and official hallmark information" },
                  { d: "Valuation or appraisal", c: "Estimated monetary value for a stated purpose" },
                  { d: "Authenticity card", c: "Retailer or brand product information" },
                  { d: "Warranty", c: "Repair, manufacturing or aftercare terms" },
                  { d: "Invoice", c: "Transaction and product-purchase record" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.d}</td>
                    <td className="p-4">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] italic text-center">
            One document cannot automatically replace all the others.
          </p>
        </div>

        {/* Section 1: Diamond Certification */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. What is Diamond Certification?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Diamond certification refers to grading reports issued by gemmological laboratories (e.g., GIA, IGI) that record the 4Cs, physical dimensions, polish, symmetry, fluorescence, growth technology (CVD or HPHT), and girdle laser inscriptions.
          </p>
          <p>
            An individual loose diamond report covers only the stone itself. It does not evaluate the setting, gold fineness hallmarks, accent diamonds, resizing options, or retail warranties.
          </p>

          {/* IMAGE 2: Loose certificate plot */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/diamond-certification-vs-jewellery-certification/25 (2).jpg"
              alt="Checking clarity plot graph mapping details on loose-stone certificate"
              title="Loose Diamond Certificate Mapping"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Loose diamond reports detail exact carat weight, proportion specs, and clarity plots.
          </p>
        </div>

        {/* Section 2: Jewellery Certification */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. What is Jewellery Certification?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Jewellery certification refers to assessments of assembled mounted items. Laboratories evaluate mounted stones &quot;as the mounting permits.&quot; Claws, bezels, and surrounding metal can obscure inclusions or alter color perception, meaning some grades are reported as ranges rather than single exact values.
          </p>
          <p>
            These reports can describe the finished article, mounted gemstones, precious metal weights, and hallmarks, but they are not structural durability guarantees.
          </p>

          {/* IMAGE 3: Mounted check */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/diamond-certification-vs-jewellery-certification/25 (3).jpg"
              alt="Stating finished-jewellery report details with mounted diamonds"
              title="Finished Jewellery Mount Evaluation"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Mounted evaluations can restrict measurements, meaning parameters are logged as ranges.
          </p>
        </div>

        {/* Comparison table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Detailed Document Comparison
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Diamond grading report</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Finished-jewellery report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Subject examined", d: "One loose or identifiable diamond", j: "Complete mounted jewellery article" },
                  { f: "Diamond origin", d: "Normally identified", j: "Mounted stones may be screened and identified" },
                  { f: "Carat weight", d: "Directly measured for a loose diamond", j: "May be estimated when stones cannot be removed" },
                  { f: "Measurements", d: "Usually more complete", j: "May be restricted by the setting" },
                  { f: "Colour", d: "Individual grade", j: "May be given as a range" },
                  { f: "Clarity", d: "Individual grade", j: "May be given as a range" },
                  { f: "Precious metal", d: "Not normally covered", j: "May be described" },
                  { f: "Accent stones", d: "Not covered unless separately submitted", j: "May be identified or estimated as mounted" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.d}</td>
                    <td className="p-4">{row.j}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Hallmarking, valuations & brand cards */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Hallmarking, Valuations, and Authenticity Cards
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Hallmarking vs Reports:</strong> Hallmarking evaluates the purity of precious metals (such as 18ct gold or 950 platinum) through an official Assay Office. A hallmark does not grade, screen, or identify mounted diamonds.
          </p>
          <p>
            <strong>Valuations:</strong> A valuation provides a monetary estimate for a specific purpose (insurance replacement, probate, resale). Insurance replacement valuations are typically higher than cash buyout rates.
          </p>
          <p>
            <strong>Authenticity &amp; Warranty:</strong> Retailer authenticity cards record purchase details, weights, and metal info, while warranties address defects and clasps. Neither replaces independent gemmological grading.
          </p>

          {/* IMAGE 4: Hallmark card */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/diamond-certification-vs-jewellery-certification/25 (4).jpg"
              alt="Official precious-metal hallmark stamping card"
              title="Metal Purity and Assay Hallmark"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Official Assay hallmarks verify metal fineness rather than evaluating the diamond grades.
          </p>
        </div>

        {/* Product Recommendations Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Documentation Approach by Product Type
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Product</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Recommended Documentation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { p: "Solitaire ring", d: "Individual centre-diamond report, metal hallmark, warranty, invoice specs" },
                  { p: "Halo or pavé ring", d: "Individual principal stone report, accent weight/quality range, metal hallmark, warranty" },
                  { p: "Diamond stud earrings", d: "Individual reports for larger stones, matched-pair specs, total carat weight" },
                  { p: "Tennis bracelet", d: "Finished-jewellery report, diamond count, total carat weight, gold hallmark, warranty" },
                  { p: "Coloured-stone jewellery", d: "Centre stone identification, diamond-accent specifications, treatment disclosure, hallmark" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.p}</td>
                    <td className="p-4">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Documentation Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before purchase, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Confirm whether the report covers the loose stone or finished mount.",
                  "Verify the independent report registry number online.",
                  "Distinguish individual diamond weights from total carat weights (TCW).",
                  "Verify precious metal hallmarks (gold fineness, Assay Office sponsor mark).",
                  "Understand the difference between insurance appraisals and cash resale value.",
                  "Review the warranty terms for settings, prongs, and clasps."
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
            Diamond certification and jewellery certification serve different purposes. A loose-stone report documents one specific gem, while a finished-jewellery report logs the mounted article under setting restrictions. Review your diamond report, hallmark registrations, invoices, and warranties together to ensure a safe purchase.
          </p>
          <p className="mt-4">
            Aurelia Royale defines all reports transparently, supplying verified center-stone GIA/IGI certificates, Assay hallmarks, and written warranties.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is the difference between diamond and jewellery certification?",
              a: "A diamond report normally assesses one individual diamond. A jewellery report examines the complete mounted article and its gemstones within the limits created by the setting."
            },
            {
              q: "Does a diamond certificate cover the ring setting?",
              a: "Usually not. A loose-diamond report does not normally assess the ring’s metal, claws, shank, craftsmanship or smaller accent stones."
            },
            {
              q: "Does a jewellery report cover every diamond?",
              a: "It may identify mounted stones, but this does not necessarily mean every small diamond received a complete individual grading assessment."
            },
            {
              q: "Is a jewellery certificate the same as a hallmark?",
              a: "No. A hallmark relates to precious-metal fineness and official hallmark information. It does not grade diamonds."
            },
            {
              q: "Is a 750 stamp a diamond certification?",
              a: "No. A 750 stamp refers to a gold-fineness designation. It provides no information about the diamond."
            },
            {
              q: "Is a grading report the same as a valuation?",
              a: "No. A grading report describes gemological characteristics. A valuation provides a monetary estimate for a stated purpose."
            },
            {
              q: "Does an authenticity card count as independent certification?",
              a: "Not unless it was issued as an independent report by a qualified external organisation. Most authenticity cards are retailer or brand documents."
            },
            {
              q: "What does “graded as mounting permits” mean?",
              a: "It means the setting restricted the laboratory’s examination. Some measurements or grades may therefore be stated as ranges or estimates."
            },
            {
              q: "Does an IGI report certify jewellery craftsmanship?",
              a: "An IGI jewellery report may document the article and mounting details, but buyers should not treat it as a lifetime structural or durability guarantee."
            },
            {
              q: "Can a ring have both diamond and jewellery certification?",
              a: "Yes. The centre diamond may have an individual report, while the finished ring may also have a separate jewellery report."
            },
            {
              q: "Does jewellery certification guarantee good resale value?",
              a: "No. Documentation can assist identification, but resale value depends on market conditions, condition, metal, design and buyer demand."
            },
            {
              q: "Which document is most important when buying diamond jewellery?",
              a: "There is no single document covering everything. Buyers should review the diamond report, metal or hallmark information, invoice, warranty and any finished-jewellery report together."
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
            Experience Transparent Fine Jewellery
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully hallmarked gold, verified GIA/IGI diamond logs, and written warranties. Explore our collection.
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
