import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Colour Grades Explained",
  description: "Understand lab-grown diamond colour grades from D to Z, what buyers can actually see, and how metal, shape, size and lighting affect appearance.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/",
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-colour-grades-explained.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-colour-grades-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond colour grades explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/",
      "name": "Lab-Grown Diamond Colour Grades Explained",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#article",
      "headline": "Lab-Grown Diamond Colour Grades Explained",
      "description": "Understand lab-grown diamond colour grades from D to Z, what buyers can actually see, and how metal, shape, size and lighting affect appearance.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond colour grades",
        "diamond colour grades explained",
        "lab-grown diamond colour scale",
        "best colour for lab-grown diamond",
        "D vs E vs F diamond colour",
        "G vs H diamond colour"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#breadcrumb",
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
          "name": "Lab-Grown Diamond Colour Grades Explained",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-colour-grades-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded for colour in the same way as natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an individual D–Z grade is assigned, the same colour scale and grading principles apply. Report formats and current services vary by laboratory, so buyers should read the specific report."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best colour for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single best grade. The right choice depends on the desired appearance, cut, shape, size, metal, setting and the buyer’s preferences."
          }
        },
        {
          "@type": "Question",
          "name": "Is G colour good for a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "G is at the upper end of the near-colourless category and often appears white face-up, especially with good cutting. Its appearance should still be checked in the intended shape, size and setting."
          }
        },
        {
          "@type": "Question",
          "name": "Can you see the difference between D and F colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The difference is usually subtle for an untrained viewer and is most readily assessed with loose stones placed side by side under controlled lighting."
          }
        },
        {
          "@type": "Question",
          "name": "Does a higher colour grade sparkle more?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Colour describes body colour, while cut quality and lighting strongly influence brightness, fire and scintillation."
          }
        },
        {
          "@type": "Question",
          "name": "Does yellow gold make a diamond look yellow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yellow metal can reflect warmth into a diamond, although the result depends on the design and prong colour. It can also make a warmer diamond look visually harmonious."
          }
        },
        {
          "@type": "Question",
          "name": "Which diamond shapes show more colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Colour perception varies by stone. Step-cut shapes and some elongated shapes may make warmth easier to notice than certain brilliant-cut designs, so the actual diamond should be evaluated."
          }
        },
        {
          "@type": "Question",
          "name": "Do larger diamonds show more colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Colour may be easier to observe across a larger visible area, so buyers choosing larger centre stones may compare grades more carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Is fluorescence the same as colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Colour grades describe body colour under controlled conditions. Fluorescence describes a reaction to ultraviolet radiation and is reported separately."
          }
        },
        {
          "@type": "Question",
          "name": "Are fancy-coloured lab-grown diamonds graded D to Z?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Distinct fancy colours are evaluated using descriptions that consider hue, tone, saturation and distribution rather than being treated as simply lower D–Z grades."
          }
        },
        {
          "@type": "Question",
          "name": "Can jewellery be colour graded after the diamond is set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be assessed if the setting permits, but metal and mounting can limit examination. A laboratory may give a range or qualified result rather than the precision possible for a loose diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Can CVD and HPHT diamonds have the same colour grade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CVD and HPHT describe growth processes, not predetermined colour levels. Diamonds produced by either method can receive a range of colour grades."
          }
        }
      ]
    }
  ]
};

export default function Blog28Page() {
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
            Diamond Colour Grades Explained
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
            src="/images/blog/lab-grown-diamond-colour-grades-explained/28 (1).png"
            alt="Lab-grown diamond colour grades explained"
            title="Diamond Colour Grades"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory colour assessments compare loose diamonds face-down against calibrated master stones.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Colour is one of the <Link href="/blog/4cs-of-lab-grown-diamonds/" className="text-gold hover:underline">4Cs used to describe diamond quality</Link>. In a colourless or near-colourless lab-grown diamond, the grade describes the absence or presence of a yellow, brown or grey body colour under controlled grading conditions. It does not describe coloured flashes of light, sparkle or fire.
          </p>
          <p>
            Lab-grown and natural diamonds use the same basic D–Z colour scale when a laboratory assigns an individual letter grade. D represents the least observable body colour on that scale, while colour becomes progressively more apparent towards Z. However, the difference between neighbouring grades is often subtle, and the highest letter grade is not automatically the best choice for every piece of jewellery.
          </p>
          <p>
            The way a diamond appears once worn also depends on its cut, shape, size, setting and surrounding metal. That is why a useful buying decision considers both the laboratory information and the complete jewel.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            For diamonds in the normal colour range, the scale runs from D to Z:
          </p>
          <ul className="mt-2 space-y-1 font-jost text-base font-medium text-[#153f35] list-disc pl-5">
            <li><strong>D–F:</strong> colourless</li>
            <li><strong>G–J:</strong> near-colourless</li>
            <li><strong>K–M:</strong> faint colour</li>
            <li><strong>N–R:</strong> very light colour</li>
            <li><strong>S–Z:</strong> light colour</li>
          </ul>
          <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
            A higher colour grade means less visible body colour—not more sparkle. Cut quality has a major influence on brightness and light return, so colour should never be assessed in isolation. Read our guide to <Link href="/blog/lab-grown-diamond-cut-explained/" className="text-gold hover:underline">lab-grown diamond cut</Link> to understand the distinction.
          </p>
        </div>

        {/* Section 1: The D-Z Scale Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            The D–Z Diamond Colour Scale
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Grade range</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Laboratory category</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What a buyer may notice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { r: "D–F", c: "Colourless", n: "Very little body colour. Differences between adjacent grades are usually subtle and are easiest to identify in controlled comparison." },
                  { r: "G–J", c: "Near-colourless", n: "G and H often appear white face-up. I and J may show gentle warmth, particularly in larger stones, certain shapes or white-metal settings." },
                  { r: "K–M", c: "Faint colour", n: "Warmth is more readily noticeable and may be chosen deliberately for a softer appearance or to complement yellow or rose-toned metal." },
                  { r: "N–R", c: "Very light colour", n: "A distinct tint is usually apparent, although its appearance still changes with the setting and lighting." },
                  { r: "S–Z", c: "Light colour", n: "Yellow, brown or grey body colour is clearly present, but the diamond remains within the normal colour scale." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.r}</td>
                    <td className="p-4">{row.c}</td>
                    <td className="p-4">{row.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-jost text-xs font-light text-[#5a5a5a] italic text-center">
            These descriptions are guidance rather than a substitute for seeing the actual jewel. Screens, photography and ambient light can all alter colour perception.
          </p>
        </div>

        {/* Section 2: How Colour is Graded */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. How is a Lab-Grown Diamond’s Colour Graded?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            For a loose diamond receiving a D–Z grade, trained graders examine it in a standardised viewing environment and compare it with calibrated master stones. The diamond is normally positioned face-down and viewed through its side. This reduces the visual influence of its shape and face-up light performance, helping the grader focus on body colour.
          </p>
          <p>
            Not every laboratory report currently presents lab-grown diamond colour in the same way. GIA’s current service for eligible colourless-to-near-colourless loose laboratory-grown diamonds classifies overall quality as Premium or Standard, rather than always presenting the traditional individual colour and clarity grades. IGI reports commonly provide a letter colour grade for eligible stones.
          </p>
          <p>
            Our guides explain <Link href="/blog/how-to-read-lab-grown-diamond-certificate/" className="text-gold hover:underline">how to read a lab-grown diamond certificate</Link> and <Link href="/blog/igi-certificate-for-lab-grown-diamond/" className="text-gold hover:underline">what an IGI certificate means</Link>.
          </p>

          {/* IMAGE 2: Grading lamp */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-colour-grades-explained/28 (2).png"
              alt="Inspecting loose diamond side profile under grading lamp"
              title="Loose Diamond Grading Environment"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Loose diamonds are viewed from the side under daylight-equivalent lighting to isolate body colour.
          </p>
        </div>

        {/* Section 3: Are D-colour diamonds the best? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Are D-Colour Lab-Grown Diamonds the Best?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            D is the highest grade on the normal colour scale, but &quot;best&quot; depends on what the wearer values. A buyer who wants the most colourless specification may prefer D–F. Another may see little practical difference between an F and a G once the diamond is set and choose to place more of the budget into cut, size or craftsmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#e8e5dc]/30 p-5 rounded-lg border border-[#e2dfd5]">
              <h4 className="font-cormorant text-xl font-bold uppercase tracking-wider text-foreground mb-2">D vs E vs F</h4>
              <p className="text-sm font-light text-[#5a5a5a]">All belong to the colourless group. Differences are highly subtle and require direct side-by-side loose comparison to distinguish.</p>
            </div>
            <div className="bg-[#e8e5dc]/30 p-5 rounded-lg border border-[#e2dfd5]">
              <h4 className="font-cormorant text-xl font-bold uppercase tracking-wider text-foreground mb-2">G vs H colour</h4>
              <p className="text-sm font-light text-[#5a5a5a]">Sitting at the upper near-colourless tier, they look bright white face-up and represent a popular balance of value and appearance.</p>
            </div>
            <div className="bg-[#e8e5dc]/30 p-5 rounded-lg border border-[#e2dfd5]">
              <h4 className="font-cormorant text-xl font-bold uppercase tracking-wider text-foreground mb-2">I vs J colour</h4>
              <p className="text-sm font-light text-[#5a5a5a]">Display a soft, warm tone that harmonises beautifully with yellow or rose gold setting mounts, avoiding white metal contrasts.</p>
            </div>
          </div>

          {/* IMAGE 3: Colourless comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-colour-grades-explained/28 (3).png"
              alt="Comparing colourless brilliant diamonds side by side"
              title="Colourless Diamond Comparison"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Colourless D, E, and F diamonds appear bright white face-up, with differences indistinguishable once set.
          </p>
        </div>

        {/* Section 4: What affects how diamond colour looks */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. What Affects Apparent Colour in Jewellery?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Perceived colour in real-world wear conditions is shaped by multiple physical variables:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Diamond cut and light return:</strong> Excellent cutting produces bright reflections that help mask slight body color.</li>
            <li><strong>Diamond shape:</strong> Step cuts (emerald, Asscher) hold less light reflection, revealing color more than brilliant cuts. Elongated ovals can concentrate color tips.</li>
            <li><strong>Carat weight and size:</strong> Body color is easier to see across larger stones than in small accents.</li>
            <li><strong>Metal colour:</strong> White gold and platinum emphasize warmth, whereas yellow and rose golds harmonize with warmer grades.</li>
            <li><strong>Side stone matching:</strong> Harmony across rings is critical. Center stones can look warmer if paired with much whiter side diamonds.</li>
          </ul>

          {/* IMAGE 4: Gold shanks settings */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-colour-grades-explained/28 (4).png"
              alt="Warm near-colourless diamond in yellow gold shank setting"
              title="Warm Diamonds in Yellow Gold Settings"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Yellow or rose gold settings complement warmer, near-colourless diamonds beautifully.
          </p>
        </div>

        {/* Section 5: Fluorescence, CVD/HPHT & fancy colours */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. Fluorescence, CVD/HPHT, and Fancy Colours
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Fluorescence:</strong> Fluorescence describes a diamond’s reaction to UV radiation. It is noted separately on reports and does not automatically reduce beauty or quality.
          </p>
          <p>
            <strong>CVD vs HPHT:</strong> Growth method does not determine colour. Diamonds grown by either CVD or HPHT can achieve the full D-to-Z color scale. Review <Link href="/blog/cvd-vs-hpht-lab-grown-diamonds/" className="text-gold hover:underline">CVD vs HPHT comparison</Link> for details.
          </p>
          <p>
            <strong>Fancy Colours:</strong> Blue, pink, or yellow lab diamonds use a separate scale evaluating hue, tone, and saturation rather than colourlessness.
          </p>
        </div>

        {/* Buyer Selection Guide */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            How to Choose the Right Colour Grade
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Step</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Action Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "1. Desired appearance", a: "Decide if you want icy-white reflection, soft warmth, or fancy colour tints." },
                  { s: "2. Setting metal selection", a: "Select setting metal (white gold, platinum, rose, or yellow gold) first." },
                  { s: "3. Shape and dimensions", a: "Inspect step cuts and elongated shapes more closely, since they display colour tints more easily." },
                  { s: "4. Prioritise cut quality", a: "Do not compromise cut proportions just to pay for an invisible paper color grade." },
                  { s: "5. Verify side-stone harmony", a: "Ensure side accents or halo borders are matched to within one colour group of the center stone." }
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
            Colour Grade Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before ordering, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Laboratory-grown origin is explicitly disclosed in the listing copy.",
                  "Grading document is issued by a reputable laboratory like IGI or GIA.",
                  "Individual center-stone grades are separate from accent ranges.",
                  "Cut performance remains high to ensure optimal light reflection.",
                  "The tone matches settings (white gold vs yellow/rose gold mounts).",
                  "Any post-growth treatment comments are reviewed on the certificate.",
                  "Photographs and videos are recorded under neutral lighting."
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
            Lab-grown diamond colour grades provide a consistent way to describe body colour, but the grade is only one part of the finished jewel. D–F diamonds carry a colourless specification, G–J are near-colourless, and warmer colour becomes progressively more visible further down the scale.
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
              q: "Are lab-grown diamonds graded for colour in the same way as natural diamonds?",
              a: "When an individual D–Z grade is assigned, the same colour scale and grading principles apply. Report formats and current services vary by laboratory, so buyers should read the specific report."
            },
            {
              q: "What is the best colour for a lab-grown diamond?",
              a: "There is no single best grade. The right choice depends on the desired appearance, cut, shape, size, metal, setting and the buyer’s preferences."
            },
            {
              q: "Is G colour good for a lab-grown diamond?",
              a: "G is at the upper end of the near-colourless category and often appears white face-up, especially with good cutting. Its appearance should still be checked in the intended shape, size and setting."
            },
            {
              q: "Can you see the difference between D and F colour?",
              a: "The difference is usually subtle for an untrained viewer and is most readily assessed with loose stones placed side by side under controlled lighting."
            },
            {
              q: "Does a higher colour grade sparkle more?",
              a: "No. Colour describes body colour, while cut quality and lighting strongly influence brightness, fire and scintillation."
            },
            {
              q: "Does yellow gold make a diamond look yellow?",
              a: "Yellow metal can reflect warmth into a diamond, although the result depends on the design and prong colour. It can also make a warmer diamond look visually harmonious."
            },
            {
              q: "Which diamond shapes show more colour?",
              a: "Colour perception varies by stone. Step-cut shapes and some elongated shapes may make warmth easier to notice than certain brilliant-cut designs, so the actual diamond should be evaluated."
            },
            {
              q: "Do larger diamonds show more colour?",
              a: "Colour may be easier to observe across a larger visible area, so buyers choosing larger centre stones may compare grades more carefully."
            },
            {
              q: "Is fluorescence the same as colour?",
              a: "No. Colour grades describe body colour under controlled conditions. Fluorescence describes a reaction to ultraviolet radiation and is reported separately."
            },
            {
              q: "Are fancy-coloured lab-grown diamonds graded D to Z?",
              a: "Distinct fancy colours are evaluated using descriptions that consider hue, tone, saturation and distribution rather than being treated as simply lower D–Z grades."
            },
            {
              q: "Can jewellery be colour graded after the diamond is set?",
              a: "It may be assessed if the setting permits, but metal and mounting can limit examination. A laboratory may give a range or qualified result rather than the precision possible for a loose diamond."
            },
            {
              q: "Can CVD and HPHT diamonds have the same colour grade?",
              a: "Yes. CVD and HPHT describe growth processes, not predetermined colour levels. Diamonds produced by either method can receive a range of colour grades."
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
            Find Your Ideal Diamond Tone
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Harmonious gold mounts, matched side accents, and verified laboratory D-to-Z color gradings. Shop now.
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
