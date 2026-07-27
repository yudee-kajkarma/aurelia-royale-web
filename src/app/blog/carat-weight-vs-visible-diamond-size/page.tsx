import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Carat Weight vs Diamond Size: What Buyers See",
  description: "Learn why equal-carat diamonds can look different in size and how shape, depth, dimensions, spread, setting and finger coverage affect appearance.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/",
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
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/carat-weight-vs-visible-diamond-size.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/carat-weight-vs-visible-diamond-size.webp",
      "width": 1600,
      "height": 900,
      "caption": "Carat weight compared with visible diamond size"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#webpage",
      "url": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/",
      "name": "Carat Weight vs the Visible Size of a Diamond",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#article",
      "headline": "Carat Weight vs the Visible Size of a Diamond",
      "description": "Learn why equal-carat diamonds can look different in size and how shape, depth, dimensions, spread, setting and finger coverage affect appearance.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "carat weight vs diamond size",
        "diamond carat vs size",
        "diamond size in millimetres",
        "diamond face-up size",
        "diamond spread",
        "length-to-width ratio diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aureliaroyale.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aureliaroyale.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Certification and Diamond Quality", "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/" },
        { "@type": "ListItem", "position": 4, "name": "Carat Weight vs the Visible Size of a Diamond", "item": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/carat-weight-vs-visible-diamond-size/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is carat weight the same as diamond size?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Carat measures weight. Diamond size is described by physical measurements such as diameter, length, width and depth." }
        },
        {
          "@type": "Question",
          "name": "Why can two one-carat diamonds look different in size?",
          "acceptedAnswer": { "@type": "Answer", "text": "Their shapes, depths, girdle thicknesses and proportions may distribute weight differently. One can show more face-up area while the other carries more weight vertically." }
        },
        {
          "@type": "Question",
          "name": "What does diamond spread mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Spread is an informal term for the diamond’s visible face-up area or dimensions. It is not an official 4C grade." }
        },
        {
          "@type": "Question",
          "name": "How wide is a one-carat round diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 mm in diameter, although actual measurements vary." }
        },
        {
          "@type": "Question",
          "name": "Which diamond shape looks largest?",
          "acceptedAnswer": { "@type": "Answer", "text": "Elongated marquise, oval and pear shapes often create a larger visual impression for their weight. The individual stone’s depth, width, outline and cut still matter." }
        },
        {
          "@type": "Question",
          "name": "Does a shallow diamond look larger?",
          "acceptedAnswer": { "@type": "Answer", "text": "It may have a wider face-up spread, but overly shallow proportions can reduce light performance or create undesirable visual effects." }
        },
        {
          "@type": "Question",
          "name": "What is length-to-width ratio?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is the diamond’s length divided by its width. The figure describes whether a fancy shape appears compact, broad or elongated." }
        },
        {
          "@type": "Question",
          "name": "Does a thick girdle make a diamond look smaller?",
          "acceptedAnswer": { "@type": "Answer", "text": "A very thick girdle can retain weight without adding an equivalent amount of visible diameter, causing some diamonds to face up smaller for their carat weight." }
        },
        {
          "@type": "Question",
          "name": "Can a setting make a diamond look bigger?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Halos, bezels, slim bands and side stones can increase perceived size or overall finger coverage without changing the centre diamond’s dimensions." }
        },
        {
          "@type": "Question",
          "name": "Does a diamond look different on different ring sizes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Its dimensions stay the same, but proportional coverage changes. The same stone can appear more prominent on a narrower finger." }
        },
        {
          "@type": "Question",
          "name": "Should I buy the diamond with the largest millimetre measurements?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. Confirm that the extra spread does not come at the expense of brightness, symmetry, durability or an attractive outline." }
        },
        {
          "@type": "Question",
          "name": "Are online diamond size charts accurate?",
          "acceptedAnswer": { "@type": "Answer", "text": "They are useful as approximate references, but the grading report provides the actual measurements of the individual diamond." }
        }
      ]
    }
  ]
}
```

export default function Blog31Page() {
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
            Carat Weight vs Diamond Size
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
            src="/images/blog/carat-weight-vs-visible-diamond-size/31 (1).png"
            alt="Carat weight compared with visible diamond size"
            title="Carat Weight and Size"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Two diamonds carrying identical carat weights can display different visual sizes.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Two diamonds can carry the same carat weight and still look noticeably different when viewed from above. The reason is simple: <strong>carat measures weight, while visible size describes dimensions and visual coverage</strong>.
          </p>
          <p>
            A one-carat diamond always weighs 200 milligrams. It does not always measure the same number of millimetres. Shape, depth, girdle thickness, facet arrangement and cutting decisions determine how that weight is distributed throughout the stone. Some weight contributes to the visible outline; some can be held below the girdle where the wearer sees less of it.
          </p>
          <p>
            Carat weight is one of the <Link href="/blog/4cs-of-lab-grown-diamonds/" className="text-gold hover:underline">4Cs of a lab-grown diamond</Link>, but none of the 4Cs independently describes face-up size.
          </p>
          <p>
            For the measurement basics, read <Link href="/blog/lab-grown-diamond-carat-weight-explained/" className="text-gold hover:underline">lab-grown diamond carat weight explained</Link>. This guide focuses on what the wearer sees.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12 font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p>
            No. <strong>Carat is weight; size is physical dimension.</strong>
          </p>
          <ul className="mt-2 space-y-1 list-disc pl-5 text-sm text-[#5a5a5a]">
            <li>Round-diamond measurements are generally listed as minimum diameter–maximum diameter × depth.</li>
            <li>Fancy-shape measurements are generally listed as length × width × depth.</li>
            <li>Face-up spread refers to the visible area or outline when the diamond is viewed from above.</li>
            <li>Two equal-weight diamonds can have different spreads because their proportions and shapes differ.</li>
          </ul>
          <p className="mt-4">
            A wider diamond is not automatically better. If extra spread comes from overly shallow proportions, the stone may lose brightness or show undesirable visual effects. Visible size must be balanced with cut quality, appearance and durability.
          </p>
        </div>

        {/* Section 1: Dimensions Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Weight vs Millimetre Dimensions
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Weight</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Measurements</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Face-up impression</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { d: "Diamond A", w: "1.00 ct", m: "6.45–6.48 × 3.92 mm", f: "Balanced diameter for its weight" },
                  { d: "Diamond B", w: "1.00 ct", m: "6.15–6.19 × 4.10 mm", f: "More weight held in depth; smaller visible diameter" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.d}</td>
                    <td className="p-4">{row.w}</td>
                    <td className="p-4">{row.m}</td>
                    <td className="p-4">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Shape Spread Guide Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Indicative 1.00ct Diamond Dimensions by Shape
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Shape</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Indicative measurements near 1.00 ct</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Visual tendency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "Round", m: "About 6.3–6.5 mm diameter", t: "Balanced, symmetrical coverage" },
                  { s: "Oval", m: "About 7.7–8.3 × 5.5–6.0 mm", t: "Elongated appearance" },
                  { s: "Pear", m: "About 8.0–8.7 × 5.2–5.8 mm", t: "Length with a tapered point" },
                  { s: "Marquise", m: "About 9.5–10.5 × 4.8–5.3 mm", t: "Strong length and finger coverage" },
                  { s: "Emerald", m: "About 6.7–7.2 × 4.7–5.1 mm", t: "Rectangular, open outline" },
                  { s: "Radiant", m: "About 6.2–6.8 × 5.2–5.8 mm", t: "Rectangular or square brilliant outline" },
                  { s: "Cushion", m: "About 5.8–6.3 × 5.8–6.3 mm", t: "Compact soft-square outline" },
                  { s: "Princess", m: "About 5.4–5.7 × 5.4–5.7 mm", t: "Compact square outline" },
                  { s: "Asscher", m: "About 5.4–5.7 × 5.4–5.7 mm", t: "Compact square step-cut outline" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.m}</td>
                    <td className="p-4">{row.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Round Diamond Diameter Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Approximate Round-Diamond Diameter by Carat Weight
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Carat weight</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Indicative diameter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { w: "0.25 ct", d: "About 4.0 mm" },
                  { w: "0.50 ct", d: "About 5.0–5.2 mm" },
                  { w: "0.75 ct", d: "About 5.7–5.9 mm" },
                  { w: "1.00 ct", d: "About 6.3–6.5 mm" },
                  { w: "1.50 ct", d: "About 7.2–7.4 mm" },
                  { w: "2.00 ct", d: "About 8.0–8.2 mm" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.w}</td>
                    <td className="p-4">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Why equal weight looks different */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Why Equal-Carat Diamonds Can Have Different Dimensions
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Several physical variables govern the face-up spread of a stone:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Shape silhouette:</strong> Elongated shapes draw the eye outward; compact outlines concentrate weight in a smaller outline footprint.</li>
            <li><strong>Total depth:</strong> Deep cutting hides weight beneath girdles, making stones face up smaller. Shallow cutting spreads wide but leaks light.</li>
            <li><strong>Girdle thickness:</strong> Thick girdles hold weight around borders without adding visible diameter.</li>
            <li><strong>Proportions and crown heights:</strong> Crowns, tables, and pavilion angles regulate how weight behaves.</li>
          </ul>

          {/* IMAGE 2: Depth profiles */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/carat-weight-vs-visible-diamond-size/31 (2).png"
              alt="Comparing loose diamond depth profiles and facet cuts"
              title="Diamond Depth and Silhouette Profiles"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Total depth, girdle thickness, and crowns govern how much weight is distributed to the visible face-up outline.
          </p>
        </div>

        {/* Section 4: Perceived size and settings */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. How Settings and Finger Coverage Affect Perceived Size
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Perceived size is also contextual:
          </p>
          <ul className="space-y-3 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Halo borders:</strong> Surround the center stone with accent diamonds to create a larger field of brilliance.</li>
            <li><strong>Bezel borders:</strong> Visually frame the outline silhouette, making it look broader.</li>
            <li><strong>Slim bands:</strong> Narrow bands increase design contrast to emphasize solitaire prominence.</li>
            <li><strong>Finger size proportions:</strong> A 6.4 mm round looks prominent on slim fingers but restrained on wider shanks.</li>
          </ul>

          {/* IMAGE 3: Halo setting model hand */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/carat-weight-vs-visible-diamond-size/31 (3).png"
              alt="Stunning halo diamond ring on model finger"
              title="Halo Setting Ring Coverage"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Settings like halos or slim shank bands change the perceived scale and finger coverage.
          </p>
        </div>

        {/* Section 5: Online comparison */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. How to Compare Visible Size Online
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            When shopping online, look for: physical report measurements, printable scale templates, and unmagnified realistic photographs.
          </p>
          <p>
            Our related guides outline <Link href="/blog/how-to-read-lab-grown-diamond-certificate/" className="text-gold hover:underline">how to read a lab-grown diamond certificate</Link> and <Link href="/blog/verify-igi-certificate-number/" className="text-gold hover:underline">how to verify an IGI certificate number online</Link> for step-by-step registry instructions.
          </p>

          {/* IMAGE 4: Millimeter Caliper caliper */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/carat-weight-vs-visible-diamond-size/31 (4).png"
              alt="Measuring round brilliant diameter spread using millimeter caliper"
              title="Caliper Spread Measurement"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Verify the actual length, width, and diameter measurements on the grading report before buying.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Visible Size Purchase Checklist
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
                  "Carat weights are compared against actual millimetre dimensions.",
                  "Length-to-width ratios for fancy shapes match visual outline preferences.",
                  "Total depth percentage falls within appropriate parameters for the shape.",
                  "The girdle description does not list 'extremely thick' weight retention.",
                  "Cut grades are verified to ensure light return is bright across borders.",
                  "Model hand photographs disclose both ring size and diamond millimetres.",
                  "The seller's return policies permit viewing designs at real scale."
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
            Carat weight and visible diamond size are connected, but they are not the same. Carat measures mass; length, width, diameter and depth describe physical dimensions. Shape, cut proportions and setting determine how that weight appears when worn.
          </p>
          <p className="mt-4">
            Aurelia Royale lists complete diamond parameters, matching premium center-stone grades, gold hallmarks, and detailed accent specifications.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Is carat weight the same as diamond size?",
              a: "No. Carat measures weight. Diamond size is described by physical measurements such as diameter, length, width and depth."
            },
            {
              q: "Why can two one-carat diamonds look different in size?",
              a: "Their shapes, depths, girdle thicknesses and proportions may distribute weight differently. One can show more face-up area while the other carries more weight vertically."
            },
            {
              q: "What does diamond spread mean?",
              a: "Spread is an informal term for the diamond’s visible face-up area or dimensions. It is not an official 4C grade."
            },
            {
              q: "How wide is a one-carat round diamond?",
              a: "A well-proportioned one-carat round brilliant is often approximately 6.3–6.5 mm in diameter, although actual measurements vary."
            },
            {
              q: "Which diamond shape looks largest?",
              a: "Elongated marquise, oval and pear shapes often create a larger visual impression for their weight. The individual stone’s depth, width, outline and cut still matter."
            },
            {
              q: "Does a shallow diamond look larger?",
              a: "It may have a wider face-up spread, but overly shallow proportions can reduce light performance or create undesirable visual effects."
            },
            {
              q: "What is length-to-width ratio?",
              a: "It is the diamond’s length divided by its width. The figure describes whether a fancy shape appears compact, broad or elongated."
            },
            {
              q: "Does a thick girdle make a diamond look smaller?",
              a: "A very thick girdle can retain weight without adding an equivalent amount of visible diameter, causing some diamonds to face up smaller for their carat weight."
            },
            {
              q: "Can a setting make a diamond look bigger?",
              a: "Yes. Halos, bezels, slim bands and side stones can increase perceived size or overall finger coverage without changing the centre diamond’s dimensions."
            },
            {
              q: "Does a diamond look different on different ring sizes?",
              a: "Its dimensions stay the same, but proportional coverage changes. The same stone can appear more prominent on a narrower finger."
            },
            {
              q: "Should I buy the diamond with the largest millimetre measurements?",
              a: "Not automatically. Confirm that the extra spread does not come at the expense of brightness, symmetry, durability or an attractive outline."
            },
            {
              q: "Are online diamond size charts accurate?",
              a: "They are useful as approximate references, but the grading report provides the actual measurements of the individual diamond."
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
            Balance Spread and Performance at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Meticulously planned angles, symmetrical outlines, and verified certificate credentials. Shop our collection.
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
