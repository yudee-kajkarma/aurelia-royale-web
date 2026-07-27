import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Carat Weight Explained",
  description: "Learn what lab-grown diamond carat weight means, how points and total carat weight work, and why two diamonds of equal weight can look different in size.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/",
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-carat-weight-explained.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-carat-weight-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond carat weight explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/",
      "name": "Lab-Grown Diamond Carat Weight Explained",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#article",
      "headline": "Lab-Grown Diamond Carat Weight Explained",
      "description": "Learn what lab-grown diamond carat weight means, how points and total carat weight work, and why two diamonds of equal weight can look different in size.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond carat weight",
        "diamond carat weight explained",
        "lab-grown diamond carat size",
        "carat weight vs diamond size",
        "diamond points",
        "total carat weight"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "Lab-Grown Diamond Carat Weight Explained", "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-carat-weight-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is one carat in a lab-grown diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "One metric carat equals 200 milligrams, or 0.2 grams. The measurement is the same for laboratory-grown and natural diamonds." }
        },
        {
          "@type": "Question",
          "name": "Does carat mean diamond size?",
          "acceptedAnswer": { "@type": "Answer", "text": "Carat measures weight, not physical size. Length, width and depth in millimetres describe the diamond’s dimensions." }
        },
        {
          "@type": "Question",
          "name": "What are diamond points?",
          "acceptedAnswer": { "@type": "Answer", "text": "One carat contains 100 points. A 0.50 ct diamond is a 50-point diamond, while 0.25 ct equals 25 points." }
        },
        {
          "@type": "Question",
          "name": "Is a one-carat lab-grown diamond the same size as a one-carat natural diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "If shape and proportions are comparable, their dimensions can be comparable because both weigh one metric carat. Origin does not change the carat definition." }
        },
        {
          "@type": "Question",
          "name": "Why do two one-carat diamonds look different in size?",
          "acceptedAnswer": { "@type": "Answer", "text": "They may have different shapes, depths, girdles and proportions. One may distribute more weight across its face-up area while another carries more below the girdle." }
        },
        {
          "@type": "Question",
          "name": "How wide is a one-carat round diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 millimetres in diameter, but actual measurements vary." }
        },
        {
          "@type": "Question",
          "name": "Is 0.90 carat noticeably smaller than one carat?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not always. A well-proportioned 0.90–0.99 ct diamond may look close in face-up size to some one-carat diamonds. Compare actual dimensions and cut." }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Total carat weight is the combined weight of multiple diamonds in an item or defined pair. It does not necessarily describe the centre stone." }
        },
        {
          "@type": "Question",
          "name": "Does one-carat total weight mean each earring is one carat?",
          "acceptedAnswer": { "@type": "Answer", "text": "Usually not. If one carat is the pair’s total weight, each evenly matched principal diamond would be approximately 0.50 ct." }
        },
        {
          "@type": "Question",
          "name": "Does a higher carat diamond sparkle more?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. A larger diamond provides more visible area, but cut quality and lighting primarily determine brightness, fire and scintillation." }
        },
        {
          "@type": "Question",
          "name": "Can a diamond lose carat weight?",
          "acceptedAnswer": { "@type": "Answer", "text": "Normal wear does not reduce carat weight. Chipping, damage, recutting or repolishing can remove material and lower the recorded weight." }
        },
        {
          "@type": "Question",
          "name": "Is carat the same as karat?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Carat measures gemstone weight, while karat describes gold purity." }
        }
      ]
    }
  ]
};

export default function Blog30Page() {
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
            Carat Weight Explained
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
            src="/images/blog/lab-grown-diamond-carat-weight-explained/30 (1).png"
            alt="Lab-grown diamond carat weight explained"
            title="Diamond Carat Weight"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Carat weight measures physical mass; visible size is determined by face-up dimensions.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Carat weight is one of the most familiar diamond specifications and one of the most frequently misunderstood. A carat measures how much a diamond weighs. It does not directly state how wide the diamond looks, how brightly it returns light or whether it is high quality.
          </p>
          <p>
            One metric carat equals <strong>200 milligrams</strong>, or 0.2 grams. Each carat is divided into 100 points, so 0.50 carat equals 50 points and 1.25 carats equals one carat and 25 points. These measurements apply to laboratory-grown and natural diamonds alike.
          </p>
          <p>
            The number is precise, but the visual result is not determined by weight alone. Two lab-grown diamonds can weigh exactly 1.00 carat yet look different from the top because their shapes, proportions and weight distribution differ. A useful buying decision therefore considers carat weight together with measurements, cut, shape, setting and the wearer’s preferences.
          </p>
          <p>
            Carat is one of the <Link href="/blog/4cs-of-lab-grown-diamonds/" className="text-gold hover:underline">4Cs of a lab-grown diamond</Link>, alongside cut, colour and clarity. It describes quantity of weight, not overall quality.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            A diamond carat is a unit of weight:
          </p>
          <ul className="mt-2 space-y-1 font-jost text-base font-medium text-[#153f35] list-disc pl-5">
            <li><strong>1.00 carat = 200 milligrams</strong></li>
            <li><strong>1.00 carat = 100 points</strong></li>
            <li><strong>0.75 carat = 75 points</strong></li>
            <li><strong>0.50 carat = 50 points</strong></li>
            <li><strong>0.25 carat = 25 points</strong></li>
          </ul>
          <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
            The abbreviation for a single diamond’s carat weight is commonly <strong>ct</strong>. For jewellery containing several diamonds, sellers may use <strong>total carat weight</strong>, written as <strong>tcw</strong>, <strong>ctw</strong> or another clearly explained abbreviation. Carat weight is not the same as millimetre size. To understand how large a diamond may appear, also check its length, width and depth.
          </p>
        </div>

        {/* Section 1: Points Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            What Are Diamond Points?
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] mb-6">
            &quot;Points&quot; provide a convenient way to describe diamonds weighing less than one carat. One point equals 0.01 carat.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Carat weight</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Points</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Common description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { c: "0.10 ct", p: "10", d: "Ten-pointer" },
                  { c: "0.25 ct", p: "25", d: "Quarter carat or twenty-five points" },
                  { c: "0.33 ct", p: "33", d: "Thirty-three points" },
                  { c: "0.50 ct", p: "50", d: "Half carat or fifty points" },
                  { c: "0.75 ct", p: "75", d: "Three-quarter carat or seventy-five points" },
                  { c: "0.90 ct", p: "90", d: "Ninety points" },
                  { c: "1.00 ct", p: "100", d: "One carat" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.c}</td>
                    <td className="p-4">{row.p}</td>
                    <td className="p-4">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-jost text-xs font-light text-[#5a5a5a] italic text-center">
            Points describe weight, not the number of diamonds. A &quot;twenty-five-point diamond&quot; means one diamond weighing 0.25 carat. It does not mean a jewel contains 25 stones.
          </p>
        </div>

        {/* Section 2: Carat vs Karat */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Is Carat the Same as Karat?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            No. The similar spelling causes frequent confusion:
          </p>
          <ul className="space-y-3 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Carat (ct):</strong> Measures the physical weight of diamonds and other gemstones.</li>
            <li><strong>Karat (kt or K):</strong> Describes the proportion of pure gold in an alloy, such as 18ct gold (75% purity) or 9ct gold (37.5% purity).</li>
          </ul>
          <p>
            A product may therefore contain a 1.00 ct lab-grown diamond set in 18K gold. The two figures describe entirely different parts of the jewellery.
          </p>

          {/* IMAGE 2: Balance scale */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-carat-weight-explained/30 (2).png"
              alt="Weighing loose diamonds on a precision scale balance"
              title="Weighing loose diamonds"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Loose diamonds are weighed on calibrated gemological scales to determine carat weight.
          </p>
        </div>

        {/* Section 3: Carat vs Spread */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Carat Weight vs. Visible Diamond Size
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Carat is a three-dimensional weight measurement. The size a buyer sees from the top is usually described by the diamond’s face-up length and width, sometimes called its spread.
          </p>
          <p>
            Two diamonds with the same weight can look different because one carries more material in its depth while another distributes more weight across its face-up area. Shape also matters. A one-carat oval and a one-carat round will not share the same outline or measurements, even though their weight is equal.
          </p>
          <p>
            Check the millimetre measurements on the grading report. You can read our related guides detailing <Link href="/blog/lab-grown-diamond-cut-explained/" className="text-gold hover:underline">lab-grown diamond cut explained</Link> for proportion info.
          </p>

          {/* IMAGE 3: Diameter spread comparisons */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-carat-weight-explained/30 (3).png"
              alt="Comparing diameter widths of round brilliant cuts side by side"
              title="Spread and Depth Comparison"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Two diamonds sharing identical carat weights can look different due to depth and facet proportions.
          </p>
        </div>

        {/* Section 4: Total carat weight vs centre weight */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Centre-Stone Weight vs. Total Carat Weight
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Total carat weight (tcw) refers to the combined weight of all diamonds in the piece, which is different from the weight of the largest individual diamond.
          </p>
          <p>
            <strong>Earring Carats:</strong> Stud descriptions require particular care because totals refer to the pair. A &quot;1.00 ct total weight&quot; pair of diamond studs commonly contains approximately 0.50 ct in each earring.
          </p>
          <p>
            <strong>Necklaces and Bracelets:</strong> A tennis bracelet containing fifty 0.02 ct diamonds has a total of 1.00 ct. This combined total weight should not be confused with the visual appearance of a single 1.00 ct solitaire diamond.
          </p>

          {/* IMAGE 4: tennis bracelet layout */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-carat-weight-explained/30 (4).png"
              alt="Multi-stone diamond tennis bracelet layout"
              title="Tennis Bracelet Total Carat Weight"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Total carat weight represents the combined weight of all stones in multi-stone jewelry designs.
          </p>
        </div>

        {/* Section 5: Reading a report */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. How to Read Carat Weight on a Grading Report
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Grading reports record weight to two decimal places on calibrated scales. Be sure to check the shape and cutting style, length-width measurements, and girdle profiles.
          </p>
          <p>
            Read <Link href="/blog/how-to-read-lab-grown-diamond-certificate/" className="text-gold hover:underline">how to read a lab-grown diamond certificate</Link> and <Link href="/blog/verify-igi-certificate-number/" className="text-gold hover:underline">how to verify an IGI certificate number online</Link> for additional confirmation steps.
          </p>
        </div>

        {/* Selection Steps Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Selecting the Right Carat Weight
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Step</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Carat Weight Action Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "1. Establish complete budget", a: "Include settings and tax costs instead of spending the entire budget on carat weight alone." },
                  { s: "2. Verify shape and outline", a: "Elongated shapes (ovals, marquises) spread weight differently than deep round cushions." },
                  { s: "3. Check millimetre spread", a: "Compare millimetre diameter dimensions to ensure you are not buying a deep, small-looking stone." },
                  { s: "4. Prioritise cut quality", a: "Do not choose a heavier stone if its poor cut makes it look dull and lifeless." },
                  { s: "5. Separate center and accents", a: "Ensure center-stone carat weight is distinguished from combined total weights." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
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
            Carat Weight Verification Checklist
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
                  "Laboratory-grown origin is explicitly disclosed in the product titles.",
                  "Individual carat weights are separated from total carat weights (TCW).",
                  "Earring specifications clarify if weights are per earring or for the pair.",
                  "Millimetre measurements are cross-checked against standard weight guides.",
                  "Girdle descriptions do not indicate hidden weight concentration.",
                  "The certificate registry matches laser inscriptions on girdles.",
                  "Coloured gemstones are listed separately from diamond carat weights."
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
            Lab-grown diamond carat weight is an exact measurement of mass: one carat equals 200 milligrams and 100 points. It does not independently describe visible size, beauty or quality. Choose carat weight in harmony with cut quality, face-up millimetre spread, and intended settings.
          </p>
          <p className="mt-4">
            Aurelia Royale displays individual center-stone weights, accents, and physical measurements clearly to ensure a confident selection.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is one carat in a lab-grown diamond?",
              a: "One metric carat equals 200 milligrams, or 0.2 grams. The measurement is the same for laboratory-grown and natural diamonds."
            },
            {
              q: "Does carat mean diamond size?",
              a: "Carat measures weight, not physical size. Length, width and depth in millimetres describe the diamond’s dimensions."
            },
            {
              q: "What are diamond points?",
              a: "One carat contains 100 points. A 0.50 ct diamond is a 50-point diamond, while 0.25 ct equals 25 points."
            },
            {
              q: "Is a one-carat lab-grown diamond the same size as a one-carat natural diamond?",
              a: "If shape and proportions are comparable, their dimensions can be comparable because both weigh one metric carat. Origin does not change the carat definition."
            },
            {
              q: "Why do two one-carat diamonds look different in size?",
              a: "They may have different shapes, depths, girdles and proportions. One may distribute more weight across its face-up area while another carries more below the girdle."
            },
            {
              q: "How wide is a one-carat round diamond?",
              a: "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 millimetres in diameter, but actual measurements vary."
            },
            {
              q: "Is 0.90 carat noticeably smaller than one carat?",
              a: "Not always. A well-proportioned 0.90–0.99 ct diamond may look close in face-up size to some one-carat diamonds. Compare actual dimensions and cut."
            },
            {
              q: "What does total carat weight mean?",
              a: "Total carat weight is the combined weight of multiple diamonds in an item or defined pair. It does not necessarily describe the centre stone."
            },
            {
              q: "Does one-carat total weight mean each earring is one carat?",
              a: "Usually not. If one carat is the pair’s total weight, each evenly matched principal diamond would be approximately 0.50 ct."
            },
            {
              q: "Does a higher carat diamond sparkle more?",
              a: "Not automatically. A larger diamond provides more visible area, but cut quality and lighting primarily determine brightness, fire and scintillation."
            },
            {
              q: "Can a diamond lose carat weight?",
              a: "Normal wear does not reduce carat weight. Chipping, damage, recutting or repolishing can remove material and lower the recorded weight."
            },
            {
              q: "Is carat the same as karat?",
              a: "No. Carat measures gemstone weight, while karat describes gold purity."
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
            Compare Certified Carats Online
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Choose exact millimetre diameters, balanced depths, and verified GIA/IGI carat specifications. Shop our collection.
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
