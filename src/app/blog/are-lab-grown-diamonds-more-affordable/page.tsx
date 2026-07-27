import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Cheaper Than Natural Diamonds?",
  description: "Learn why lab-grown diamonds usually cost less than natural diamonds and how to compare cut, size, reports, metal, VAT and total jewellery prices properly.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/",
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
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-vs-natural-diamond-affordability.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-vs-natural-diamond-affordability.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown and natural diamond affordability compared"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/",
      "name": "Are Lab-Grown Diamonds Cheaper Than Natural Diamonds?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#article",
      "headline": "Are Lab-Grown Diamonds More Affordable Than Natural Diamonds?",
      "description": "Learn why lab-grown diamonds usually cost less than natural diamonds and how to compare cut, size, reports, metal, VAT and total jewellery prices properly.",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#primaryimage"
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
        "are lab-grown diamonds more affordable than natural diamonds",
        "lab-grown diamond price vs natural diamond",
        "are lab diamonds cheaper",
        "why are lab-grown diamonds cheaper",
        "lab-grown vs natural diamond cost"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#breadcrumb",
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
          "name": "Are Lab-Grown Diamonds More Affordable?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-more-affordable/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds cheaper than natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds are generally considerably less expensive than mined diamonds with comparable shape, size and quality."
          }
        },
        {
          "@type": "Question",
          "name": "Why are lab-grown diamonds less expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Their supply can expand through manufacturing, and they do not carry the same geological-rarity premium as mined diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Does a lower price mean lab-grown diamonds are fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds are genuine diamond material and are different from moissanite, cubic zirconia and glass."
          }
        },
        {
          "@type": "Question",
          "name": "How much cheaper are lab-grown diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The percentage varies with market conditions, size, quality, seller and design. Compare current like-for-like products rather than relying on a fixed percentage."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds lower quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Both lab-grown and mined diamonds vary in cut, colour, clarity, transparency and overall appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Why do two lab-grown diamonds with the same carat weight cost differently?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They may differ in cut, dimensions, colour, clarity, transparency, shape, treatment, report and overall appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Why does lab-grown diamond jewellery still cost a lot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The final price also includes precious metal, manufacturing, setting, matching, design, tax, shipping, warranty and retail service."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds retain their price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Market prices can change as production technology and supply develop, so resale offers may be below the original retail price."
          }
        },
        {
          "@type": "Question",
          "name": "Is total carat weight the same as centre-stone weight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Total carat weight combines all diamonds in the product or pair, while centre-stone weight refers to one specific diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Should I buy the biggest lab-grown diamond I can afford?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Cut, transparency, comfort, setting security and overall jewellery quality are more important than reaching the highest carat number."
          }
        }
      ]
    }
  ]
};

export default function Blog18Page() {
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
            Are Lab-Grown Diamonds Cheaper Than Natural?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Price Comparison Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/are-lab-grown-diamonds-more-affordable/18 (1).png"
            alt="Lab-grown and natural diamond affordability compared"
            title="Affordability of Lab-Grown Diamonds"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds offer a highly accessible entry point to fine jewellery design.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds are generally much more affordable than mined diamonds with comparable specifications. This price difference is one of the main reasons buyers consider them for earrings, necklaces, bracelets, rings and diamond jewellery sets.
          </p>
          <p>
            However, a meaningful comparison requires more than placing two carat weights beside two prices.
          </p>
          <p>
            Diamond cut, colour, clarity, dimensions, report, treatment and transparency all affect price. For finished jewellery, the precious metal, setting, craftsmanship, total diamond weight, tax, delivery and aftercare also contribute to the amount paid.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Yes. A lab-grown diamond usually costs considerably less than a mined diamond of a similar shape, carat weight and quality.
            This is primarily because laboratory-grown diamonds are produced through scalable manufacturing rather than recovered as naturally rare geological material. Growing technology and supply have also continued to develop, placing downward pressure on lab-grown diamond prices.
            The lower purchase price does not mean lab-grown diamonds are cubic zirconia or imitation stones. They are genuine diamonds, but they belong to a different origin and pricing category.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown vs Natural Diamond Affordability
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Consideration</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-grown diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Natural diamond</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { c: "Material", l: "Diamond", n: "Diamond" },
                  { c: "Origin", l: "Produced using CVD or HPHT", n: "Formed naturally and mined" },
                  { c: "Typical purchase price", l: "Generally lower", n: "Generally higher" },
                  { c: "Supply", l: "Can expand through production", n: "Limited by natural deposits and recovery" },
                  { c: "Geological rarity premium", l: "No", n: "Yes" },
                  { c: "Larger sizes within a budget", l: "Often more accessible", n: "Usually more expensive" },
                  { c: "Price stability", l: "Can change as production develops", n: "Also market-dependent, but a different market" },
                  { c: "Resale expectations", l: "Usually more limited", n: "More established, though never guaranteed" },
                  { c: "Visual appearance", l: "Depends on cut and quality", n: "Depends on cut and quality" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.c}</td>
                    <td className="p-4">{row.l}</td>
                    <td className="p-4">{row.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Why cheaper? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Why Are Lab-Grown Diamonds Less Expensive?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Scalable Manufacturing Capacity:</strong> Mined diamonds rely on geological rarity and exploration budgets. Lab-grown diamonds grow in facilities via CVD or HPHT chambers. Increased factory scale directly coordinates with lower wholesale pricing structures.
          </p>
          <p>
            <strong>No Geological Rarity Premium:</strong> Only a tiny fraction of natural diamond recovery matches clean visual properties. Lab-grown manufacturing can yield target clarity/color properties consistently, avoiding natural rarity markups.
          </p>
          <p>
            <strong>Evolving Pricing Trends:</strong> Developing technologies continue to streamline production, meaning historical pricing models (like 30% off natural) are obsolete. Current retail comparisons should analyze real-time live prices.
          </p>

          {/* IMAGE 2: Technology growth */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-more-affordable/18 (2).png"
              alt="A technician adjusting high pressure HPHT growth machinery"
              title="HPHT Growth Machinery"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Modern scalable growth technology helps reduce lab-grown production costs.
          </p>
        </div>

        {/* Section 2: Quality & price comparison */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. How to Compare Diamond Prices Correctly
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Shape and Proportions:</strong> Fancy shapes (ovals, cushions, emeralds) carry different pricing models than round brilliants. Compare parameters of similar shapes only.
          </p>
          <p>
            <strong>Physical Measurements vs Carats:</strong> Carat is weight; two 1ct diamonds can have different visible face-up dimensions depending on cut depth. Compare millimeter dimensions.
          </p>
          <p>
            <strong>Color, Clarity, and Haze:</strong> Ensure you are not comparing an eye-clean, highly transparent diamond to a stone with gray tints or milkiness.
          </p>
          <p>
            <strong>Reporting Labs:</strong> Standardize comparisons across verified certificates. GIA uses &quot;Premium/Standard&quot; assessments for lab stones, while others use traditional 4Cs grids.
          </p>

          {/* IMAGE 3: Measuring dimensions */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-more-affordable/18 (3).png"
              alt="Measuring loose brilliant round diamond dimensions"
              title="Comparing Carat Weight and Proportions"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Physical dimensions and cut quality must be aligned to make an accurate price comparison.
          </p>
        </div>

        {/* Section 3: Finished Jewellery costs */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Stoned Costs versus Finished Jewellery Prices
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            The loose diamond price is only part of what you pay. Finished jewellery involves precious metals, alloy weights, artisan setting settings, custom sizing, hallmarking, VAT, packaging, and store support.
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Precious Metals:</strong> Platinum or 18k solid gold will carry higher material value than plated sterling silver bases.</li>
            <li><strong>Multi-Stone Layouts:</strong> Tennis bracelets or halo studs require extensive stone matching for visual flow, adding craftsmanship costs.</li>
            <li><strong>Import and Tax Charges:</strong> Always check if online prices include regional VAT, shipping customs duties, or sizing insurance.</li>
          </ul>

          {/* IMAGE 4: Finished jewellery details */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-more-affordable/18 (4).png"
              alt="Delicate gold tennis bracelet showing custom linked sections"
              title="Finished Diamond Jewellery Construction"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Final jewellery tags reflect gold mass, clasp construction, and setting craftsmanship.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Buyer Affordability Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before comparing final tags, confirm:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Stated weights distinguish centre-stone carat from total carat weight.",
                  "Metal composition and purity markings (e.g. Pt950 or 750 gold) match.",
                  "Independent laboratory check numbers are verifiable online.",
                  "All local taxes (VAT), shipping insurances, and custom clearing are included.",
                  "Cut quality, dimensions, and visual transparency (no haze) match.",
                  "Return shipping, cancellation protections, and resizing terms are clear."
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
            Lab-grown diamonds are generally considerably more affordable than mined diamonds with comparable size and quality. This difference stems from manufacturing scalability and the absence of geological rarity premiums, rather than lower material quality. For buyers prioritizing immediate value, cut performance, and secure wear over natural scarcity, lab diamonds provide a highly compelling choice.
          </p>
          <p className="mt-4">
            Contact Aurelia Royale for custom quote allocations, metal details, and certified diamond portfolios.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are lab-grown diamonds cheaper than natural diamonds?",
              a: "Yes. Lab-grown diamonds are generally considerably less expensive than mined diamonds with comparable shape, size and quality."
            },
            {
              q: "Why are lab-grown diamonds less expensive?",
              a: "Their supply can expand through manufacturing, and they do not carry the same geological-rarity premium as mined diamonds."
            },
            {
              q: "Does a lower price mean lab-grown diamonds are fake?",
              a: "No. Lab-grown diamonds are genuine diamond material. They are different from moissanite, cubic zirconia and glass."
            },
            {
              q: "How much cheaper are lab-grown diamonds?",
              a: "The percentage varies with market conditions, size, quality, seller and diamond jewellery design. Compare current like-for-like products rather than relying on a fixed percentage."
            },
            {
              q: "Are lab-grown diamonds lower quality?",
              a: "Not automatically. Both lab-grown and mined diamonds vary in cut, colour, clarity, transparency and overall appearance."
            },
            {
              q: "Why do two lab-grown diamonds with the same carat weight cost differently?",
              a: "They may differ in cut, dimensions, colour, clarity, transparency, shape, treatment, report and overall appearance."
            },
            {
              q: "Why does lab-grown diamond jewellery still cost a lot?",
              a: "The final price also includes precious metal, manufacturing, stone setting, matching, design, tax, shipping, warranty and retail service."
            },
            {
              q: "Do lab-grown diamonds retain their price?",
              a: "Not necessarily. Market prices can change as production technology and supply develop, so resale offers may be well below the original retail price."
            },
            {
              q: "Is total carat weight the same as centre-stone weight?",
              a: "No. Total carat weight combines all diamonds in the product or pair, while centre-stone weight refers to one specific diamond."
            },
            {
              q: "Should I buy the biggest lab-grown diamond I can afford?",
              a: "Not automatically. Cut, transparency, comfort, setting security and overall jewellery quality are more important than reaching the highest carat number."
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
            Discover Transparent Value at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully made fine jewellery featuring independently graded, highly transparent laboratory-grown diamonds.
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
