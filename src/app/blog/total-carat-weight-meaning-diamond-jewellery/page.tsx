import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Total Carat Weight Meaning in Diamond Jewellery",
  description: "Learn what total carat weight means, how it differs from centre-stone weight, and how to read diamond weights for rings, earrings and bracelets.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/",
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
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/total-carat-weight-meaning-diamond-jewellery.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/total-carat-weight-meaning-diamond-jewellery.webp",
      "width": 1600,
      "height": 900,
      "caption": "Total carat weight in diamond jewellery explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#webpage",
      "url": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/",
      "name": "What Does Total Carat Weight Mean in Diamond Jewellery?",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#article",
      "headline": "What Does Total Carat Weight Mean in Diamond Jewellery?",
      "description": "Learn what total carat weight means, how it differs from centre-stone weight, and how to read diamond weights for rings, earrings and bracelets.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "total carat weight meaning",
        "what is total carat weight",
        "total diamond weight",
        "carat vs total carat weight",
        "centre stone vs total carat weight",
        "total carat weight earrings"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "What Does Total Carat Weight Mean in Diamond Jewellery?", "item": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/total-carat-weight-meaning-diamond-jewellery/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "It means the combined weight of all diamonds included within the stated total. The listing should define exactly what the total covers." }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight the same as centre-stone weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Centre-stone weight refers to one principal diamond. Total carat weight may include the centre, side stones, halo and accents." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between ct and ctw?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ct commonly describes an individual stone’s carat weight. Ctw commonly describes the combined carat weight of multiple diamonds, although sellers should define their abbreviations." }
        },
        {
          "@type": "Question",
          "name": "Does 1.00 ct total mean a one-carat centre diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. The total may be divided among a smaller centre diamond and multiple accents. Check the weight breakdown." }
        },
        {
          "@type": "Question",
          "name": "What does one-carat total weight mean for earrings?",
          "acceptedAnswer": { "@type": "Answer", "text": "If the figure applies to the pair, the two earrings together contain approximately one carat. Matched solitaire studs may contain about 0.50 ct per earring." }
        },
        {
          "@type": "Question",
          "name": "Does total carat weight include accent diamonds?",
          "acceptedAnswer": { "@type": "Answer", "text": "It should include the accents when they fall within the stated total. The product page should say which diamonds are included." }
        },
        {
          "@type": "Question",
          "name": "Is one large diamond worth the same as several small diamonds of equal total weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Individual size, quality, matching, reports, setting and market conditions all affect value." }
        },
        {
          "@type": "Question",
          "name": "Does total carat weight show how large jewellery will look?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Stone count, dimensions, shape, setting and distribution determine visible coverage." }
        },
        {
          "@type": "Question",
          "name": "Can total carat weight include coloured gemstones?",
          "acceptedAnswer": { "@type": "Answer", "text": "A combined total gemstone weight can include different gems if clearly stated, but it should not be labelled total diamond weight. Each gemstone type should be broken down separately." }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight exact?",
          "acceptedAnswer": { "@type": "Answer", "text": "It may be exact, approximate within a manufacturing tolerance or estimated for mounted stones. The seller should state which applies." }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight shown on an individual diamond certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "An individual loose-diamond report records that diamond’s own weight. A jewellery report or product specification is needed to describe the complete jewel’s total." }
        },
        {
          "@type": "Question",
          "name": "What should a transparent product page show?",
          "acceptedAnswer": { "@type": "Answer", "text": "It should show centre weight, accent weight, total diamond weight, stone count, the scope of the total, whether the figure is exact or approximate, and report details where applicable." }
        }
      ]
    }
  ]
};

export default function Blog32Page() {
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
            Total Carat Weight Meaning
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
            src="/images/blog/total-carat-weight-meaning-diamond-jewellery/32 (1).png"
            alt="Total carat weight in diamond jewellery explained"
            title="Total Carat Weight"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Total carat weight adds together all diamonds in a piece, which differs from single center-stone weights.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Total carat weight is the combined weight of multiple diamonds in a piece of jewellery—or, when clearly stated, across a matching pair such as earrings. It does not necessarily tell you the weight of the centre diamond, the size of each stone or how the jewellery will look when worn.
          </p>
          <p>
            A ring containing one 0.60 ct centre diamond and twenty 0.02 ct accent diamonds has 1.00 ct total diamond weight. A pair of stud earrings containing one 0.50 ct diamond in each ear also has 1.00 ct total weight. A bracelet containing fifty 0.02 ct diamonds can carry the same total. The numbers add to one carat in every example, but the designs, visible scale and value structure are very different.
          </p>
          <p>
            Understanding this distinction prevents a common online-shopping mistake: reading “1.00 ct” in a product title and assuming it refers to one one-carat diamond.
          </p>
          <p>
            For the definition of an individual carat, points and milligrams, read <Link href="/blog/lab-grown-diamond-carat-weight-explained/" className="text-gold hover:underline">lab-grown diamond carat weight explained</Link>.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12 font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p>
            <strong>Total carat weight is the sum of the weights of all diamonds included within the stated total.</strong>
          </p>
          <ul className="mt-2 space-y-1 list-disc pl-5 text-sm text-[#5a5a5a]">
            <li><strong>ct:</strong> carat weight, often used for one individual stone;</li>
            <li><strong>tcw:</strong> total carat weight;</li>
            <li><strong>ctw:</strong> carat total weight or total carat weight;</li>
            <li><strong>tdw:</strong> total diamond weight; and</li>
            <li><strong>tw:</strong> total weight, which must be clearly defined.</li>
          </ul>
          <p className="mt-4">
            Abbreviations are not applied identically by every retailer. The product page should explain what the figure includes rather than expecting buyers to interpret initials.
          </p>
        </div>

        {/* Section 1: Term Comparison Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Carat vs. Total Carat Weight Terms
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Term</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it usually describes</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { t: "Carat weight (ct)", d: "The weight of one individual diamond", e: "Centre diamond: 0.75 ct" },
                  { t: "Total carat weight (tcw or ctw)", d: "The combined weight of multiple diamonds", e: "Centre and accents combined: 1.00 tcw" },
                  { t: "Total diamond weight (tdw)", d: "The combined weight of diamonds in the described item or pair", e: "Bracelet: 2.00 tdw" },
                  { t: "Total gemstone weight", d: "A combined gemstone figure that must identify which gem types are included", e: "Sapphire and diamond total: must be broken down clearly" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.t}</td>
                    <td className="p-4">{row.d}</td>
                    <td className="p-4">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Distribution Details */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Understanding Weight Distribution
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            One metric carat equals 200 milligrams, whether it belongs to one stone or is divided among many. The difference is distribution.
          </p>
          <p>
            A single one-carat diamond is not equivalent to four quarter-carat diamonds merely because the total mass matches. The individual stones have different dimensions, uses and market characteristics. Larger individual diamonds are also evaluated separately for cut, colour, clarity and documentation where applicable.
          </p>
        </div>

        {/* Section 3: Ring Accent Layouts */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Total Carat Weight in Diamond Rings
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Rings distribute diamond weight in multiple ways:
          </p>
          <ul className="space-y-3 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Solitaire with hidden halos:</strong> Principal stones account for most weight; tiny hidden diamonds under bases add minor points.</li>
            <li><strong>Halo rings:</strong> Surrounding halos expand total weight face-up without physical centre enlargement.</li>
            <li><strong>Three-stone rings:</strong> Sums up the main centre and two adjacent side diamonds.</li>
            <li><strong>Pavé or diamond-set bands:</strong> Multiple tiny diamonds inset along the metal shank profile.</li>
          </ul>

          {/* IMAGE 2: engagement rings setting styles */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/total-carat-weight-meaning-diamond-jewellery/32 (2).png"
              alt="Stunning diamond engagement ring styles showing settings"
              title="Engagement Ring Setting Styles"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Halo, pavé, and three-stone rings distribute their total carat weights across multiple diamonds.
          </p>
        </div>

        {/* Section 4: Earrings and bracelets */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Total Carat Weight in Earrings and Bracelets
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Earrings:</strong> Stud descriptions apply to the matching pair. A &quot;1.00 ct total weight&quot; pair of stud earrings commonly contains approximately 0.50 ct in each earring.
          </p>
          <p>
            <strong>Bracelets:</strong> Tennis designs distribute weight along the clasp length. A 3.00 ct total bracelet containing 60 diamonds uses smaller stones than a 3.00 ct bracelet containing 40 stones, changing visual density.
          </p>
          <p>
            Read <Link href="/blog/carat-weight-vs-visible-diamond-size/" className="text-gold hover:underline">carat weight versus visible diamond size</Link> to compare face-up spreads.
          </p>
        </div>

        {/* Section 5: Colored stone combinations */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. How to Read Coloured Stone Combinations
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Stones of equal carat weight can have different dimensions because their densities differ. For a sapphire-centre ring with lab-grown diamond accents, verify separate gem parameters:
          </p>
          <ul className="space-y-2 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Centre sapphire:</strong> 1.20 ct</li>
            <li><strong>Lab-grown diamond accents:</strong> 0.35 ct total</li>
            <li><strong>Total gemstone weight:</strong> 1.55 ct total</li>
          </ul>
          <p>
            Read <Link href="/blog/diamond-certification-vs-jewellery-certification/" className="text-gold hover:underline">diamond certification versus jewellery certification</Link> and <Link href="/blog/how-to-read-lab-grown-diamond-certificate/" className="text-gold hover:underline">how to read a lab-grown diamond certificate</Link> for additional documentation guidelines.
          </p>
        </div>

        {/* Coordinated Set Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Example Coordinated Set Weight Breakdown
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Component</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Diamond weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { c: "Necklace and pendant", w: "1.20 ct total" },
                  { c: "Earring pair", w: "0.80 ct total" },
                  { c: "Complete set", w: "2.00 ct total" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.c}</td>
                    <td className="p-4">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Disclosure Guideline */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Transparent Disclosure Guide
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Recommended Format</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Application Scenario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Centre: 0.75 ct | Accents: 0.25 ct total | TDW: 1.00 ct", a: "Engagement ring with pavé side diamonds" },
                  { f: "Sold as pair | TDW: 1.00 ct | Principal: 0.50 ct per earring", a: "Matched solitaire stud earrings" },
                  { f: "Centre sapphire: 1.20 ct | Diamond accents: 0.35 ct total", a: "Coloured gemstone solitaire with diamond accents" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Total Carat Weight Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before buying, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Product titles separate centre solitaire weight from total weight.",
                  "Earring specifications confirm pair weight totals vs single unit weights.",
                  "Jewellery sets show a clear breakdown of each component item.",
                  "Coloured gemstones are listed separately from diamond totals in carats.",
                  "Accent stone quality ranges (colour/clarity) are documented in specifications.",
                  "Individually reported centre diamonds include report check registry numbers.",
                  "Finished jewel weights state whether figures are exact or estimated."
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
            Total carat weight adds together the diamonds included in a stated item, pair or set. It does not automatically describe the centre diamond, individual-stone size or visible appearance. Look for transparent weight breakdowns to compare jewelry accurately.
          </p>
          <p className="mt-4">
            Aurelia Royale maintains a strict transparency standard, separating principal stone carats, accent totals, and gold fineness stamps.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What does total carat weight mean?",
              a: "It means the combined weight of all diamonds included within the stated total. The listing should define exactly what the total covers."
            },
            {
              q: "Is total carat weight the same as centre-stone weight?",
              a: "No. Centre-stone weight refers to one principal diamond. Total carat weight may include the centre, side stones, halo and accents."
            },
            {
              q: "What is the difference between ct and ctw?",
              a: "Ct commonly describes an individual stone’s carat weight. Ctw commonly describes the combined carat weight of multiple diamonds, although sellers should define their abbreviations."
            },
            {
              q: "Does 1.00 ct total mean a one-carat centre diamond?",
              a: "Not necessarily. The total may be divided among a smaller centre diamond and multiple accents. Check the weight breakdown."
            },
            {
              q: "What does one-carat total weight mean for earrings?",
              a: "If the figure applies to the pair, the two earrings together contain approximately one carat. Matched solitaire studs may contain about 0.50 ct per earring."
            },
            {
              q: "Does total carat weight include accent diamonds?",
              a: "It should include the accents when they fall within the stated total. The product page should say which diamonds are included."
            },
            {
              q: "Is one large diamond worth the same as several small diamonds of equal total weight?",
              a: "No. Individual size, quality, matching, reports, setting and market conditions all affect value."
            },
            {
              q: "Does total carat weight show how large jewellery will look?",
              a: "No. Stone count, dimensions, shape, setting and distribution determine visible coverage."
            },
            {
              q: "Can total carat weight include coloured gemstones?",
              a: "A combined total gemstone weight can include different gems if clearly stated, but it should not be labelled total diamond weight. Each gemstone type should be broken down separately."
            },
            {
              q: "Is total carat weight exact?",
              a: "It may be exact, approximate within a manufacturing tolerance or estimated for mounted stones. The seller should state which applies."
            },
            {
              q: "Is total carat weight shown on an individual diamond certificate?",
              a: "An individual loose-diamond report records that diamond’s own weight. A jewellery report or product specification is needed to describe the complete jewel’s total."
            },
            {
              q: "What should a transparent product page show?",
              a: "It should show centre weight, accent weight, total diamond weight, stone count, the scope of the total, whether the figure is exact or approximate, and report details where applicable."
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
            Evaluate Exact Diamond Weights Online
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Choose certified solitaire centers, micro-matched pavé accents, and hand-selected tennis links. Shop our range.
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
