import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Does Every Lab-Grown Diamond Need Certification?",
  description: "Learn when a lab-grown diamond certificate is important, why small accent diamonds are rarely graded individually and what to check without a report.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/",
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
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-need-certification.webp",
      "width": 1600,
      "height": 900,
      "caption": "Large lab-grown diamond with a grading report beside smaller accent diamonds"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#webpage",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/",
      "name": "Does Every Lab-Grown Diamond Need Certification?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#article",
      "headline": "Does Every Lab-Grown Diamond Need Certification?",
      "description": "Learn when a lab-grown diamond certificate is important, why small accent diamonds are rarely graded individually and what to check without a report.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "do lab-grown diamonds need certification",
        "does every lab-grown diamond need a certificate",
        "lab-grown diamond without certificate",
        "certified lab-grown diamonds",
        "diamond certificate for small diamonds"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#breadcrumb",
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
          "name": "Does Every Lab-Grown Diamond Need Certification?",
          "item": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-need-certification/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does every lab-grown diamond need a certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Individual reports are most useful for larger or higher-value diamonds. Small accent diamonds are commonly sold without separate certificates."
          }
        },
        {
          "@type": "Question",
          "name": "Is an uncertified lab-grown diamond fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The absence of a report does not prove that a diamond is fake, but its origin should still be supported and accurately disclosed."
          }
        },
        {
          "@type": "Question",
          "name": "Should a one-carat lab-grown diamond have a certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An independent report is strongly recommended for a one-carat diamond sold as an individual centre stone."
          }
        },
        {
          "@type": "Question",
          "name": "Do small diamonds in a ring need individual certificates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. Small pavé, halo and accent diamonds are commonly assessed and matched as groups."
          }
        },
        {
          "@type": "Question",
          "name": "Are diamonds in a tennis bracelet individually certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. Detailed information about total carat weight, laboratory-grown origin and quality range should still be provided."
          }
        },
        {
          "@type": "Question",
          "name": "Is a finished-jewellery report the same as an individual diamond report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A finished-jewellery report assesses a mounted article, while an individual diamond report covers one particular stone."
          }
        },
        {
          "@type": "Question",
          "name": "Does certification guarantee a high-quality diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A report documents the diamond's assessed characteristics; it does not guarantee high grades or excellent craftsmanship."
          }
        },
        {
          "@type": "Question",
          "name": "Can a retailer provide its own diamond certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A retailer can provide product documentation, but this is not the same as an independent gemological grading report."
          }
        },
        {
          "@type": "Question",
          "name": "Does certification guarantee resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Certification improves documentation but does not guarantee a particular resale price."
          }
        },
        {
          "@type": "Question",
          "name": "What should I receive if the diamonds are not individually certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You should receive clear information about origin, total carat weight, quality range, metal and product specifications."
          }
        }
      ]
    }
  ]
};

export default function Blog24Page() {
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
            Does Every Lab Diamond Need Certification?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Compliance Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/do-lab-grown-diamonds-need-certification/24 (1).png"
            alt="Large lab-grown diamond with a grading report beside smaller accent diamonds"
            title="Need for Lab-Grown Diamond Certification"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Independent grading reports document the quality parameters of large principal centre diamonds.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            No. Not every lab-grown diamond needs an individual grading certificate.
          </p>
          <p>
            Independent grading is particularly useful for larger centre diamonds, higher-value loose stones and jewellery sold using exact colour and clarity grades. However, individual reports are often impractical for the many small diamonds used in pavé settings, tennis bracelets, necklaces, halos and diamond accents.
          </p>
          <p>
            The absence of an individual report does not automatically mean that a diamond is fake or poor quality. It does mean that the retailer must provide enough accurate information for the buyer to understand what is being purchased.
          </p>
          <p>
            Certification and disclosure are separate issues. Even when a diamond does not have an individual report, its laboratory-grown origin should still be stated clearly.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            An individual grading report is generally most valuable when:
            The diamond is the principal stone in a higher-value piece, exact grades affect price, you compare loose diamonds, the stone carries meaningful carat weight, or growth/treatment tracking is needed.
            An individual report is less common when:
            The diamonds are very small, many stones populate the piece (melee), formatting uses total carat weight (TCW), or sorting and grading cost is disproportionate.
          </p>
        </div>

        {/* Section 1: Definition & legal requirements */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Understanding Certification vs. Disclosure
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>What Is A Certified Lab Diamond?</strong> It is a loose stone assessed by an independent lab (IGI, GIA) that verifies the 4Cs, measurements, CVD/HPHT origin, laser inscriptions, and post-growth treatments.
          </p>
          <p>
            <strong>Is Certification Legally Required?</strong> No. While retailers are not legally required to provide reports for every stone, they must fully disclose lab-grown origins on all adverts, titles, invoice copies, and packaging documents.
          </p>

          {/* IMAGE 2: Compliance guidelines */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-need-certification/24 (2).png"
              alt="A consultant explaining product tags and disclosures to a buyer"
              title="Compliance and Disclosure Guidelines"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Disclosing laboratory origin remains a legal necessity even for uncertified accent gems.
          </p>
        </div>

        {/* Section 2: When it is important */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. When A Diamond Report Is Crucial
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Reports are important for centre solitaire stones (above 0.30 ct), fancy-coloured diamonds (where color treatments affect prices), and custom loose diamond comparisons. Having documentation supports registry mapping, resizing tracking, insurance claims, and second-hand reselling.
          </p>
          <p>
            Without independent reports, exact grades like <em>1.02 ct E VS1</em> are only retailer estimations rather than certified laboratory parameters.
          </p>

          {/* IMAGE 3: Loose graded comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-need-certification/24 (3).png"
              alt="Comparing loose diamonds for custom ring setting design"
              title="Comparing Loose Graded Diamonds"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Reports are crucial for solitaire center stones to verify color, clarity, and cut parameters.
          </p>
        </div>

        {/* Section 3: When it is unnecessary */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. When Individual Reports Are Unnecessary
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Accent diamonds (melee) used in pavé settings, halo borders, tennis bracelets, or multi-stone chains are rarely certified individually. Sorting, laser-inscribing, and cataloging every 0.01 ct diamond would double manufacturing costs without adding visual quality.
          </p>
          <p>
            Instead, sellers disclose approximate total carat weights and minimum estimated color/clarity ranges (e.g. F-G VS average).
          </p>

          {/* IMAGE 4: Sparkling pave halo setting */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-need-certification/24 (4).png"
              alt="A sparkling pavé diamond halo setting in a workshop mount"
              title="Accent Diamond Settings"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Melee accent diamonds used in pavé bands or halos are sorted and matched in groups.
          </p>
        </div>

        {/* Loose vs Mounted Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Individual vs Finished Jewellery Reports
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Individual diamond report</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Finished-jewellery report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Scope", i: "Covers one specific diamond", j: "Covers a mounted jewellery article" },
                  { f: "Production", i: "Usually produced before setting", j: "Produced after the stones are mounted" },
                  { f: "Carat weight", i: "Provides exact loose-stone weight", j: "Carat weight may be limited or estimated" },
                  { f: "Measurements", i: "Allows more complete measurements", j: "Setting may obstruct measurements" },
                  { f: "Clarity plot", i: "Can contain a clarity plot", j: "Mounted assessment may be more limited" },
                  { f: "Applicability", i: "Useful for a principal stone", j: "Useful for multi-stone jewellery" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.i}</td>
                    <td className="p-4">{row.j}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Recommendations Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Certification Recommendations by Product
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Jewellery type</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Practical certification approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { p: "Larger solitaire ring", c: "Individual report strongly recommended" },
                  { p: "Larger centre-stone pendant", c: "Individual report strongly recommended" },
                  { p: "Loose lab-grown diamond", c: "Individual report recommended" },
                  { p: "Small lab-grown diamond studs", c: "Individual reports optional" },
                  { p: "Larger stud earrings", c: "Individual reports or detailed pair documentation recommended" },
                  { p: "Pavé ring", c: "Centre stone reported; pavé stones usually not individually graded" },
                  { p: "Tennis bracelet", c: "Individual reports generally unnecessary; detailed total specifications needed" },
                  { p: "Multi-stone necklace", c: "Finished-jewellery report or detailed group specifications may be appropriate" },
                  { p: "Diamond halo jewellery", c: "Principal stone may be reported; halo stones usually supplied as a graded range" },
                  { p: "Small diamond accents", c: "Individual certification generally unnecessary" },
                  { p: "Fancy-coloured centre diamond", c: "Specialised individual report recommended" },
                  { p: "High-value made-to-order piece", c: "Individual centre-stone report and complete jewellery documentation recommended" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.p}</td>
                    <td className="p-4">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What to check when there is no certificate */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. What to Check for Uncertified Pieces
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            When buying items without individual certificates, inspect:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Carat weight terminology:</strong> Distinguish pair weights (e.g. &quot;1.00ct studs&quot; meaning 0.50ct each) from total piece weights.</li>
            <li><strong>Range descriptions:</strong> Seek clarity ranges (e.g. VS-SI) rather than single exact grades.</li>
            <li><strong>Precious metals &amp; hallmarks:</strong> Ensure gold alloys (18ct gold, platinum 950) are hallmarked and stamp-registered.</li>
            <li><strong>Retailer return policies:</strong> Buy from stores with clear return margins to inspect items post-delivery.</li>
          </ul>

          {/* IMAGE 5: Metal hallmark inspection */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-need-certification/24 (5).png"
              alt="Checking gold fineness hallmark stamps with magnifier"
              title="Precious Metal Hallmark Check"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Verify official metal alloy purity hallmarks when buying uncertified accent jewelry.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Uncertified Purchase Checklist
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
                  "Laboratory-grown origin is explicitly disclosed in writing.",
                  "Carat specifications clearly state single versus combined weights.",
                  "Estimated color and clarity ranges are listed in specifications.",
                  "The seller screens and verifies all stones to exclude simulants.",
                  "Precious metal fineness and alloy settings are fully described.",
                  "The store return policy allows you to consult a local gemmologist."
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
            Not every lab-grown diamond needs an individual certificate. Solitaires, loose stones, and fancy-coloured centre gems require report documentation to justify pricing, but small accent melee do not. Focus on transparent origin disclosures and clear return policies when checking uncertified accent designs.
          </p>
          <p className="mt-4">
            Aurelia Royale provides independent IGI/GIA certificates for all solitaire centre stones, alongside detailed alloy specs and lifetime hallmarks.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Does every lab-grown diamond need a certificate?",
              a: "No. Individual reports are most useful for larger or higher-value diamonds. Small accent diamonds are commonly sold without separate certificates."
            },
            {
              q: "Is an uncertified lab-grown diamond fake?",
              a: "No. The absence of a report does not prove that a diamond is fake. Its origin should still be supported through reliable screening, supplier records and accurate retailer disclosure."
            },
            {
              q: "Should a one-carat lab-grown diamond have a certificate?",
              a: "An independent report is strongly recommended for a one-carat diamond sold as an individual centre stone, particularly when exact colour and clarity grades affect the price."
            },
            {
              q: "Do small diamonds in a ring need individual certificates?",
              a: "Usually not. Small pavé, halo and accent diamonds are commonly assessed and matched as groups rather than individually reported."
            },
            {
              q: "Are diamonds in a tennis bracelet individually certified?",
              a: "Usually not. Tennis bracelets can contain dozens of diamonds, making individual reports impractical. Detailed combined specifications should still be provided."
            },
            {
              q: "Is a finished-jewellery report the same as an individual diamond report?",
              a: "No. A finished-jewellery report assesses mounted jewellery, while an individual diamond report covers one particular stone."
            },
            {
              q: "Does certification guarantee a high-quality diamond?",
              a: "No. A report documents the diamond’s assessed characteristics. Certified diamonds can still have different colour, clarity and cut grades."
            },
            {
              q: "Can a retailer provide its own diamond certificate?",
              a: "A retailer can provide product documentation or an authenticity card, but this is not the same as an independent gemological grading report."
            },
            {
              q: "Does certification guarantee resale value?",
              a: "No. Certification can improve documentation, but it does not guarantee a particular resale price or buyer."
            },
            {
              q: "What should I receive if the diamonds are not individually certified?",
              a: "You should receive clear information about laboratory-grown origin, total carat weight, quality range, metal and product specifications."
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
            Shop Fully Disclosed Fine Jewellery
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            From certified solitaires to matched diamond bracelets, explore luxury options built on compliance and trust.
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
