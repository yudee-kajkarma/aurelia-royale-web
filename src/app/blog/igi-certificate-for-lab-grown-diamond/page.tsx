import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "What Is an IGI Certificate for a Lab-Grown Diamond?",
  description: "Learn what an IGI lab-grown diamond certificate contains, what it proves, what it does not guarantee and how to check an IGI report number.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/",
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
      "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/igi-certificate-lab-grown-diamond.webp",
      "width": 1600,
      "height": 900,
      "caption": "Laboratory-grown diamond displayed beside an independent grading report"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#webpage",
      "url": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/",
      "name": "What Is an IGI Certificate for a Lab-Grown Diamond?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#article",
      "headline": "What Is an IGI Certificate for a Lab-Grown Diamond?",
      "description": "Learn what an IGI lab-grown diamond certificate contains, what it proves, what it does not guarantee and how to check an IGI report number.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "IGI certificate for lab-grown diamond",
        "what is an IGI certificate",
        "IGI lab-grown diamond certificate",
        "IGI diamond report",
        "IGI report verification"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#breadcrumb",
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
          "name": "What Is an IGI Certificate for a Lab-Grown Diamond?",
          "item": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/igi-certificate-for-lab-grown-diamond/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an IGI certificate for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is an independent grading report that identifies a stone as laboratory-grown and records characteristics such as carat weight, colour, clarity, measurements and finish."
          }
        },
        {
          "@type": "Question",
          "name": "Is an IGI certificate the same as a valuation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A grading report records gemological characteristics and does not normally provide the diamond's retail, insurance or resale value."
          }
        },
        {
          "@type": "Question",
          "name": "Does IGI grade both CVD and HPHT diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. IGI examines laboratory-grown diamonds produced by both methods. Growth-process information may be included in the report comments."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI report show diamond treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The report may record evidence of post-growth treatment in its comments. Buyers should inspect the specific report supplied."
          }
        },
        {
          "@type": "Question",
          "name": "What is an IGI report number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is the unique number assigned to the graded item and used to access the corresponding digital report through IGI's verification service."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the IGI number on a diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The report number may be laser-inscribed on the diamond's girdle and normally requires magnification to read."
          }
        },
        {
          "@type": "Question",
          "name": "Does every small diamond need an IGI certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Small accent diamonds are frequently sold without individual reports, but their origin, approximate quality and total carat weight should still be disclosed."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI certificate cover the complete ring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if IGI issued a finished-jewellery report covering the ring. A loose centre-diamond report does not automatically cover the setting or accent stones."
          }
        },
        {
          "@type": "Question",
          "name": "Can an IGI certificate be fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fraudulent documents or copied report numbers are possible. Buyers should verify the report number and ensure the recorded characteristics match the diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI certificate guarantee good resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It documents the diamond's characteristics, but resale value depends on market conditions, demand, condition and the buyer's offer."
          }
        }
      ]
    }
  ]
};

export default function Blog21Page() {
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
            What Is an IGI Diamond Certificate?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Certificate Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/igi-certificate-for-lab-grown-diamond/21 (1).png"
            alt="Laboratory-grown diamond displayed beside an independent grading report"
            title="What Is an IGI Certificate"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          An International Gemological Institute grading report provides independent assessment log data for lab-grown diamonds.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            An IGI certificate for a lab-grown diamond is an independent grading report issued by the International Gemological Institute.
          </p>
          <p>
            The report confirms that the examined stone is a laboratory-grown diamond and records important characteristics such as its measurements, carat weight, colour, clarity and finish. Depending on the report and services requested, it may also identify the growth method and post-growth treatments.
          </p>
          <p>
            Although consumers commonly call the document an “IGI certificate”, IGI grading report is the more precise description. The report records the laboratory’s professional assessment of the diamond at the time it was examined.
          </p>
          <p>
            It is not a guarantee of future value, a jewellery warranty or a recommendation about how much you should pay.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            An IGI lab-grown diamond report helps a buyer answer three important questions:
            1. Is the stone a laboratory-grown diamond?
            2. What quality characteristics did IGI assign to it?
            3. Can the diamond be connected to a unique report number?
            A report can make it easier to compare two diamonds, confirm product-page claims and maintain accurate records after purchase. However, buyers should still inspect the jewellery’s design, metal, craftsmanship, setting quality, return policy and price.
          </p>
        </div>

        {/* What information does an IGI certificate contain table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            What An IGI Report Contains
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Report section</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it tells the buyer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "Report number", w: "The unique number connected to the assessment" },
                  { s: "Description", w: "Identifies the item as a laboratory-grown diamond" },
                  { s: "Shape and cutting style", w: "For example, round brilliant or oval modified brilliant" },
                  { s: "Measurements", w: "The diamond’s dimensions in millimetres" },
                  { s: "Carat weight", w: "The diamond’s weight" },
                  { s: "Colour grade", w: "Where the diamond sits on the relevant colour scale" },
                  { s: "Clarity grade", w: "The visibility and nature of internal or surface characteristics" },
                  { s: "Cut grade", w: "The assessment provided where applicable" },
                  { s: "Polish", w: "The quality of the polished facet surfaces" },
                  { s: "Symmetry", w: "The alignment and arrangement of facets" },
                  { s: "Fluorescence", w: "The diamond’s reaction to ultraviolet light" },
                  { s: "Proportions", w: "Information such as table, depth and girdle measurements" },
                  { s: "Clarity plot", w: "A diagram showing relevant characteristics when included" },
                  { s: "Comments", w: "Additional observations about origin, growth or treatment" },
                  { s: "Inscription", w: "Wording or report number inscribed on the girdle" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Gemological Background */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. International Gemological Institute (IGI) Standards
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>What Is IGI?</strong> The International Gemological Institute is an independent gemmological laboratory. It began grading laboratory-grown diamonds in 2005 and has ISO/IEC 17025 accreditation for grading procedures.
          </p>
          <p>
            <strong>Origin Verification:</strong> Natural and lab diamonds look identical to the unaided eye. IGI screens stones using specialized machinery to detect growth lines, preventing confusion with natural diamonds or simulants like moissanite and CZ.
          </p>

          {/* IMAGE 2: IGI screening */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/igi-certificate-for-lab-grown-diamond/21 (2).png"
              alt="Comparing colour hue cards in controlled laboratory light"
              title="Origin Verification and Screening"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            IGI uses professional screening machinery to distinguish diamond materials from simulants.
          </p>
        </div>

        {/* Section 2: Technical grow comments */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. CVD/HPHT Growths &amp; Post-Growth Treatments
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Process Disclosures:</strong> Comments on growth processes (CVD or HPHT) and post-growth color treatments are included upon request in the comments section. Treatment does not decrease suitability; it is valuable information that should match the seller&apos;s disclosures.
          </p>
          <p>
            <strong>The Grading Steps:</strong> Graders measure carat weight (to two decimals), map facet symmetries, compare color hues against reference cards, verify clarity under 10× zoom, and log all data anonymously to prevent bias.
          </p>

          {/* IMAGE 3: Clarity Plots */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/igi-certificate-for-lab-grown-diamond/21 (3).png"
              alt="Checking clarity inclusions map diagram on grading report"
              title="Clarity Plots and Growth Comments"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A report highlights clarity characteristics (inclusions) under 10x magnification alongside growth method comments.
          </p>
        </div>

        {/* Section 3: Inscriptions & jewellery reports */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Laser Girdle Inscriptions and Completed Jewellery Reports
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Girdle Inscription:</strong> graded lab diamonds receive microscopic laser inscriptions containing the report number. This code can be verified on IGI&apos;s website.
          </p>
          <p>
            <strong>Finished Jewellery Reports:</strong> Reports for completed rings or necklaces evaluate parameters &quot;as the mounting permits.&quot; Claws or bezels block parts of set diamonds, meaning measurements may be estimations.
          </p>
          <p>
            <strong>Accent Melee:</strong> In pieces containing many small accent diamonds (melee), only the principal centre stone is individually reported. Product pages should state this clearly.
          </p>

          {/* IMAGE 4: Laser inscriptions */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/igi-certificate-for-lab-grown-diamond/21 (4).png"
              alt="Reading microscopic inscription number on the girdle of a set ring"
              title="Girdle Laser Inscription Verification"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Verifying the microscopic laser inscription confirms that the physical diamond matches the grading report.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            IGI Report Buyer Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before ordering a reported stone, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The description confirms origin as laboratory-grown diamond.",
                  "The unique report number is displayed on the invoice.",
                  "The report matches IGI’s official database check.",
                  "Carat weight, millimeter dimensions, and shapes match perfectly.",
                  "You understand if the report covers loose diamonds or a mounted piece.",
                  "Precious metal alloy purity and accent specifications are provided."
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
            An IGI lab-grown diamond report is an important description tool. It maps out carat weights, measurements, colour, clarity, and treatments to ensure purchase transparency. Make sure to verify the report number independently on IGI&apos;s database before ordering.
          </p>
          <p className="mt-4">
            Aurelia Royale provides verified IGI grading reports with all significant loose lab-grown diamonds, alongside complete gold/platinum hallmarks.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is an IGI certificate for a lab-grown diamond?",
              a: "It is an independent grading report that identifies a stone as laboratory-grown and records characteristics such as carat weight, colour, clarity, measurements and finish."
            },
            {
              q: "Is an IGI certificate the same as a valuation?",
              a: "No. A grading report records gemological characteristics and does not normally provide the diamond's retail, insurance or resale value."
            },
            {
              q: "Does IGI grade both CVD and HPHT diamonds?",
              a: "Yes. IGI examines laboratory-grown diamonds produced by both methods. Growth-process information may be included in the report comments."
            },
            {
              q: "Does an IGI report show diamond treatment?",
              a: "The report may record evidence of post-growth treatment in its comments. Buyers should inspect the specific report supplied."
            },
            {
              q: "What is an IGI report number?",
              a: "It is the unique number assigned to the graded item and used to access the corresponding digital report through IGI's verification service."
            },
            {
              q: "Where is the IGI number on a diamond?",
              a: "The report number may be laser-inscribed on the diamond's girdle and normally requires magnification to read."
            },
            {
              q: "Does every small diamond need an IGI certificate?",
              a: "No. Small accent diamonds are frequently sold without individual reports, but their origin, approximate quality and total carat weight should still be disclosed."
            },
            {
              q: "Does an IGI certificate cover the complete ring?",
              a: "Only if IGI issued a finished-jewellery report covering the ring. A loose centre-diamond report does not automatically cover the setting or accent stones."
            },
            {
              q: "Can an IGI certificate be fake?",
              a: "Fraudulent documents or copied report numbers are possible. Buyers should verify the report number and ensure the recorded characteristics match the diamond."
            },
            {
              q: "Does an IGI certificate guarantee good resale value?",
              a: "No. It documents the diamond's characteristics, but resale value depends on market conditions, demand, condition and the buyer's offer."
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
            Discover Verified Quality at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully cut to deliver maximum fire and scintillation. Explore our certified laboratory-grown diamond jewellery.
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
