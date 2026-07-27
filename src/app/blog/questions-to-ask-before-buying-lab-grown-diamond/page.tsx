import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "25 Questions to Ask Before Buying a Lab-Grown Diamond",
  description: "Use these 25 questions to check a lab-grown diamond’s quality, report, treatment, carat weight, metal, hallmark, returns, warranty and total price.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/",
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
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/questions-before-buying-lab-grown-diamond.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/questions-before-buying-lab-grown-diamond.webp",
      "width": 1600,
      "height": 900,
      "caption": "Questions to ask before buying a lab-grown diamond"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#webpage",
      "url": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/",
      "name": "25 Questions to Ask Before Buying a Lab-Grown Diamond",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#article",
      "headline": "25 Questions to Ask Before Buying a Lab-Grown Diamond",
      "description": "Use these 25 questions to check a lab-grown diamond’s quality, report, treatment, carat weight, metal, hallmark, returns, warranty and total price.",
      "url": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#primaryimage"
      },
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "questions to ask before buying a lab-grown diamond",
        "lab-grown diamond buying checklist",
        "what to check before buying a lab diamond",
        "lab-grown diamond certificate check",
        "how to buy a quality lab-grown diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#breadcrumb",
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
          "name": "Lab-Grown Diamond Education",
          "item": "https://www.aureliaroyale.com/blog/category/lab-grown-diamond-education/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Questions to Ask Before Buying a Lab-Grown Diamond",
          "item": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/questions-to-ask-before-buying-lab-grown-diamond/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most important question when buying a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Confirm that the stone is genuinely laboratory-grown diamond and that its identity, specifications and documentation can be verified."
          }
        },
        {
          "@type": "Question",
          "name": "Is CVD or HPHT better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither method is automatically better. Both can produce high-quality diamonds. Evaluate the individual stone's cut, transparency, colour, clarity and appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Should a lab-grown diamond have a certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A significant centre diamond often benefits from an independent report. Small accent diamonds do not normally receive individual reports."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify a lab-grown diamond report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the report number into the issuing laboratory's official report-check service and compare the record with the diamond's specifications and inscription."
          }
        },
        {
          "@type": "Question",
          "name": "What does a laser inscription prove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps match a diamond to its report and may identify it as laboratory-grown. It does not verify the entire jewellery piece or retail value."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Total carat weight is the combined weight of all diamonds in a jewellery piece or pair. It is not necessarily the weight of one diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Does a diamond report certify the precious metal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A loose-diamond report normally evaluates the submitted diamond. Precious-metal purity is addressed separately, often through hallmarking."
          }
        },
        {
          "@type": "Question",
          "name": "Can made-to-order lab-grown diamond jewellery be returned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the seller's policy and applicable consumer law. Check whether made-to-order, resized, engraved or personalised items are excluded before paying."
          }
        },
        {
          "@type": "Question",
          "name": "Should lab-grown diamond shipping be insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Valuable jewellery should be shipped using tracking, insurance for the complete purchase value and suitable delivery confirmation."
          }
        },
        {
          "@type": "Question",
          "name": "Does a warranty cover a lost diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Many warranties cover manufacturing defects but exclude accidental damage, normal wear or loss."
          }
        }
      ]
    }
  ]
};

export default function Blog16Page() {
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
            25 Questions to Ask Before Buying a Lab Diamond
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Buying Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/questions-to-ask-before-buying-lab-grown-diamond/16 (1).png"
            alt="Questions to ask before buying a lab-grown diamond"
            title="Buying Checklist and Questions"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Asking the right questions about loose diamonds and settings ensures a transparent, high-quality purchase.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Buying a lab-grown diamond should involve more than choosing the largest carat weight available within your budget.
          </p>
          <p>
            Laboratory-grown diamonds are genuine diamonds, but they still differ in cut, colour, clarity, transparency, dimensions and overall appearance. The finished jewellery also depends on the quality of its precious metal, setting, clasp and construction.
          </p>
          <p>
            A trustworthy seller should be able to explain exactly what is being offered, which specifications apply and what documentation will arrive with the order.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Before purchasing a lab-grown diamond, confirm its origin, CVD or HPHT growth method, post-growth treatment, quality specifications, independent report, laser inscription, dimensions and actual appearance.
            For finished jewellery, also check whether the stated carat weight is individual or total, the exact metal and fineness, hallmarking, product measurements, setting quality, production time, insured shipping, returns, warranty and repair arrangements.
          </p>
        </div>

        {/* Summary Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            The Essential Questions at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Area</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Essential Question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { r: "Identity", q: "Is this definitely a lab-grown diamond?" },
                  { r: "Growth", q: "Was it produced using CVD or HPHT?" },
                  { r: "Treatment", q: "Has it received post-growth treatment?" },
                  { r: "Documentation", q: "Which laboratory issued the report?" },
                  { r: "Verification", q: "Can the report number be checked online?" },
                  { r: "Matching", q: "Does the inscription match the report?" },
                  { r: "Quality", q: "What are the cut, colour, clarity and carat details?" },
                  { r: "Appearance", q: "Is it transparent and eye-clean?" },
                  { r: "Weight", q: "Is the carat weight individual or total?" },
                  { r: "Metal", q: "What exact metal and fineness are used?" },
                  { r: "Construction", q: "Is the setting appropriate for the design?" },
                  { r: "Purchase", q: "What are the returns, warranty and delivery terms?" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.r}</td>
                    <td className="p-4">{row.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Diamond Identity & Growths */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Diamond Identity, Growth, and Reports
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Question 1: Is this definitely a lab-grown diamond?</strong> Make sure the stone is genuine laboratory-grown diamond crystal, not a simulant like cubic zirconia or moissanite. GIA states that laboratory-grown diamonds have essentially the same properties as mined diamonds.
          </p>
          <p>
            <strong>Question 2: Was the diamond grown using CVD or HPHT?</strong> Both chemical vapour deposition and high pressure, high temperature methods grow genuine diamond. Evaluate the individual stone rather than choosing by growth method label alone.
          </p>
          <p>
            <strong>Question 3: Has the diamond received post-growth treatment?</strong> Some diamonds undergo annealing post-growth to modify colour. This should be transparently disclosed on reports.
          </p>
          <p>
            <strong>Question 4: Which laboratory issued the report?</strong> Ensure large centre stones come with independent reports from recognized labs (like GIA or IGI).
          </p>
          <p>
            <strong>Question 5: Can the report number be verified?</strong> Always enter the report number directly into the official laboratory database online.
          </p>
          <p>
            <strong>Question 6: Does the laser inscription match the report?</strong> Match the microscopic inscription on the diamond girdle to the report registration number.
          </p>
          <p>
            <strong>Question 7: Does the report cover the loose diamond or the finished jewellery?</strong> Reports typically cover loose stones; precious metal purity and settings are verified separately.
          </p>

          {/* IMAGE 2: Laser checks */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/questions-to-ask-before-buying-lab-grown-diamond/16 (2).png"
              alt="Verifying laser inscription number on a diamond girdle under microscope"
              title="Report and Laser Inscription Verification"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Matching the microscopic girdle inscription to the independent laboratory report confirms the diamond&apos;s pedigree.
          </p>
        </div>

        {/* Section 2: Diamond Specifications & Dimensions */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Complete Quality Specifications &amp; Appearance
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Question 8: What are the diamond&apos;s complete quality specifications?</strong> Check colour, clarity, cut, polish, symmetry, and fluorescence.
          </p>
          <p>
            <strong>Question 9: How good is the diamond&apos;s cut?</strong> Cut proportions determine optical performance. Don&apos;t compromise on cut for carat weight alone.
          </p>
          <p>
            <strong>Question 10: Is the diamond transparent and free from unwanted haze?</strong> Ask if the stone has growth strain, milkiness, or brown/grey colour casts.
          </p>
          <p>
            <strong>Question 11: Is the diamond eye-clean?</strong> Clarify if inclusions are visible under normal viewing without loupe magnification.
          </p>
          <p>
            <strong>Question 12: Are the product images of the exact diamond?</strong> Verify if assets show the exact stone you will receive or a placeholder model.
          </p>
          <p>
            <strong>Question 13: What are the diamond&apos;s measurements?</strong> Carat is weight; check diameter and depth ratios to see actual face-up dimensions.
          </p>
          <p>
            <strong>Question 14: Is the stated carat weight individual or total?</strong> Make sure you know if a &quot;one carat&quot; description refers to the centre diamond or the entire set combined.
          </p>
          <p>
            <strong>Question 15: Are matching diamonds consistent?</strong> Ensure stones in earrings or line bracelets are matched in colour and brilliance.
          </p>

          {/* IMAGE 3: Diamond Ratios */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/questions-to-ask-before-buying-lab-grown-diamond/16 (3).png"
              alt="Measuring the length and width of an oval lab-grown diamond"
              title="Diamond Measurements and Ratios"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Faceted dimensions differ from carat weight; check diameter, depth, and length-to-width ratios directly.
          </p>
        </div>

        {/* Section 3: Metals, Settings & Construction */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Metal Quality, Settings, and Hallmarks
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Question 16: What exact metal is used?</strong> Differentiate between solid gold (e.g. 18ct), platinum, gold vermeil, or plated base alloys.
          </p>
          <p>
            <strong>Question 17: Is the jewellery appropriately hallmarked?</strong> For UK buyers, a hallmark independently confirms metal purity. Exemptions may apply based on weight.
          </p>
          <p>
            <strong>Question 18: Is the setting appropriate for how the jewellery will be worn?</strong> Consider lower profiles or bezels for active wear, and ensure vulnerable tips on pears or marquise cuts are protected.
          </p>
          <p>
            <strong>Question 19: What are the product&apos;s exact dimensions and weight?</strong> Double-check band width, chain thickness, and overall gram weights to avoid returns.
          </p>

          {/* IMAGE 4: Metal Hallmark */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/questions-to-ask-before-buying-lab-grown-diamond/16 (4).png"
              alt="Solid 18ct white gold ring mount showing hallmark details"
              title="Prong Settings and Hallmarking"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Confirm precious metal purity marks and choose lower-profile settings for a secure, regular-wear design.
          </p>
        </div>

        {/* Section 4: Purchasing details */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. Made-to-Order Terms, Shipping, and Warranties
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Question 20: Is the jewellery ready-made or made to order?</strong> Clarify production times, hallmarking durations, and cancellations.
          </p>
          <p>
            <strong>Question 21: What will arrive with the jewellery?</strong> Ensure boxes, reports, hallmarks, and receipt disclosures are complete.
          </p>
          <p>
            <strong>Question 22: What is the complete price?</strong> Check for VAT, import duties, customs charges, or return-shipping costs.
          </p>
          <p>
            <strong>Question 23: How will the jewellery be shipped?</strong> Verify insured shipping, signature on delivery, and tracking.
          </p>
          <p>
            <strong>Question 24: What is the return and cancellation policy?</strong> For distance sales, check return periods (typically 14 days) and exceptions.
          </p>
          <p>
            <strong>Question 25: What does the warranty actually cover?</strong> Lifetime warranties often cover only manufacturing faults, excluding loss or impact damage.
          </p>
        </div>

        {/* Red flags warning callout */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3 text-red-700">
            Red Flags When Buying Online
          </h4>
          <p>
            Pause if the seller uses the word &quot;diamond&quot; without disclosing laboratory-grown origin, refuses to share report check numbers, uses vague descriptions like &quot;gold finish&quot;, makes unsubstantiated eco-claims, or lacks a verifiable physical legal address.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Five-Minute Final Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before paying, confirm you have:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Verifiable independent grading report details and matching laser inscriptions.",
                  "Complete diamond quality specifications (4Cs, polish, symmetry, treatments).",
                  "Metal type, precise fineness (e.g. 750 or Pt950), and hallmarking details.",
                  "Product measurements, band width, and total gram weights.",
                  "Clear made-to-order manufacturing and insured shipping timelines.",
                  "Written warranty terms, cancellation parameters, and total invoice price."
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
            The best question is not simply, &quot;Is this lab-grown diamond certified?&quot; A confident purchase requires you to understand exactly which diamond is supplied, how its quality was assessed, what the documentation covers, and how the stone is set in the finished precious-metal design.
          </p>
          <p className="mt-4">
            Contact Aurelia Royale for product specifications, independent reports, and personalized buying assistance.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is the most important question when buying a lab-grown diamond?",
              a: "Confirm that the stone is genuinely laboratory-grown diamond and that its identity, specifications and documentation can be verified."
            },
            {
              q: "Is CVD or HPHT better?",
              a: "Neither method is automatically better. Both can produce high-quality diamonds. Evaluate the individual stone's cut, transparency, colour, clarity and appearance."
            },
            {
              q: "Should a lab-grown diamond have a certificate?",
              a: "A significant centre diamond often benefits from an independent report. Small accent diamonds do not normally receive individual reports."
            },
            {
              q: "How can I verify a lab-grown diamond report?",
              a: "Enter the report number into the issuing laboratory's official report-check service and compare the record with the diamond's specifications and inscription."
            },
            {
              q: "What does a laser inscription prove?",
              a: "It helps match a diamond to its report and may identify it as laboratory-grown. It does not verify the entire jewellery piece or retail value."
            },
            {
              q: "What does total carat weight mean?",
              a: "Total carat weight is the combined weight of all diamonds in a jewellery piece or pair. It is not necessarily the weight of one diamond."
            },
            {
              q: "Does a diamond report certify the precious metal?",
              a: "No. A loose-diamond report normally evaluates the submitted diamond. Precious-metal purity is addressed separately, often through hallmarking."
            },
            {
              q: "Can made-to-order lab-grown diamond jewellery be returned?",
              a: "It depends on the seller's policy and applicable consumer law. Check whether made-to-order, resized, engraved or personalised items are excluded before paying."
            },
            {
              q: "Should lab-grown diamond shipping be insured?",
              a: "Yes. Valuable jewellery should be shipped using tracking, insurance for the complete purchase value and suitable delivery confirmation."
            },
            {
              q: "Does a warranty cover a lost diamond?",
              a: "Not necessarily. Many warranties cover manufacturing defects but exclude accidental damage, normal wear or loss."
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
            Request Product Specifications at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Every query welcomed. We provide complete details of diamonds, metal, and independent documentation for your order.
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
