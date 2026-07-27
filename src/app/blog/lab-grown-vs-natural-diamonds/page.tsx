import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown vs Natural Diamonds: Complete Comparison",
  description: "Compare lab-grown and natural diamonds by origin, appearance, quality, price, durability, grading, value and environmental considerations.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/",
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
      "url": "https://www.aureliaroyale.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aureliaroyale.com/images/aurelia-royale-logo.png"
      }
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
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/",
      "name": "Lab-Grown vs Natural Diamonds: A Complete Comparison",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#primaryimage"
      },
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-vs-natural-diamonds.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/lab-grown-vs-natural-diamonds.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown and natural diamonds compared by origin and appearance"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#webpage"
      },
      "headline": "Lab-Grown vs Natural Diamonds: A Complete Comparison",
      "description": "Compare lab-grown and natural diamonds by origin, appearance, quality, price, durability, grading, value and environmental considerations.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#primaryimage"
      },
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "lab-grown vs natural diamonds",
        "difference between lab-grown and natural diamonds",
        "lab-grown vs natural diamond price",
        "lab-grown vs natural diamond quality",
        "lab-grown vs natural diamond value",
        "should I buy a lab-grown or natural diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#breadcrumb",
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
          "name": "Lab-Grown vs Natural Diamonds",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-vs-natural-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are both diamond materials with closely comparable chemical, physical and optical properties. However, they differ in origin: one is manufactured under controlled conditions and the other forms naturally inside the Earth."
          }
        },
        {
          "@type": "Question",
          "name": "Can you tell a lab-grown diamond from a natural diamond by looking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. Conclusive origin identification commonly requires specialist equipment or an independent gemmological report."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds sparkle like natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both can display brilliance, fire and scintillation. The strength of that appearance depends primarily on cut quality."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds as hard as natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both have diamond's characteristic hardness of 10 on the Mohs scale."
          }
        },
        {
          "@type": "Question",
          "name": "Why are lab-grown diamonds less expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Their supply can be expanded through manufacturing, whereas natural-diamond supply depends on limited geological deposits and mining."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They may have resale value, but there is no guaranteed future price. Their secondary market is less established and production prices can change."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds more environmentally friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Their environmental impact depends on energy sources, production efficiency, supply chains and other measurable factors."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be assessed by recognised gemmological laboratories. The report should clearly identify laboratory-grown origin and provide applicable quality information."
          }
        },
        {
          "@type": "Question",
          "name": "Can a normal diamond tester identify a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A basic tester may identify diamond material but may not reliably distinguish natural from laboratory-grown origin."
          }
        },
        {
          "@type": "Question",
          "name": "Should I buy a lab-grown or natural diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose a lab-grown diamond if price flexibility and visual size are priorities. Consider a natural diamond if geological rarity and natural origin matter more to you."
          }
        }
      ]
    }
  ]
};

export default function Blog5Page() {
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
            Lab-Grown vs Natural Diamonds
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Complete Comparison • Published July 14, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/lab-grown-vs-natural-diamonds/51.png"
            alt="Lab-grown and natural diamonds compared by origin and appearance"
            title="Lab-Grown vs Natural Diamonds"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Lab-grown and natural diamonds share the defining crystal structure but originate from different sources.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown and natural diamonds are both diamond materials, but they have very different origins.
          </p>
          <p>
            Natural diamonds formed deep inside the Earth over immense geological periods. Lab-grown diamonds are created in controlled facilities using CVD or HPHT technology.
          </p>
          <p>
            When properly cut and polished, the two can have closely comparable chemical, physical and optical properties. They can both be brilliant, durable and suitable for fine jewellery. However, they differ in origin, rarity, availability, pricing, identification and likely resale expectations.
          </p>
          <p>
            The right choice depends on what you value most: natural geological rarity, a lower initial price, a larger appearance for your budget, production transparency, tradition or personal meaning.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              The principal difference between a lab-grown and natural diamond is its origin:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>A <strong>natural diamond</strong> forms beneath the Earth’s surface and is recovered through mining.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>A <strong>lab-grown diamond</strong> is produced in a controlled facility using CVD or HPHT technology.</span>
              </li>
            </ul>
            <p className="mt-3">
              They can look extremely similar after cutting and polishing. Most consumers cannot reliably distinguish them by sight alone. Specialist testing or a recognised grading report is normally required to establish origin.
            </p>
            <p className="mt-3">
              Neither option is universally better. Lab-grown diamonds usually offer greater size or quality flexibility within a given budget, while natural diamonds are chosen for their geological rarity, age and established market history.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown vs Natural Diamonds at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-Grown Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Natural Diamond</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Origin", lab: "Created in a controlled production facility", nat: "Formed naturally inside the Earth" },
                  { f: "Formation time", lab: "Generally weeks", nat: "Millions to billions of years" },
                  { f: "Main production methods", lab: "CVD or HPHT", nat: "Geological heat and pressure" },
                  { f: "Chemical composition", lab: "Primarily crystallised carbon", nat: "Primarily crystallised carbon" },
                  { f: "Crystal structure", lab: "Diamond crystal structure", nat: "Diamond crystal structure" },
                  { f: "Hardness", lab: "10 on the Mohs scale", nat: "10 on the Mohs scale" },
                  { f: "Appearance", lab: "Can appear identical without specialist testing", nat: "Can appear identical without specialist testing" },
                  { f: "Quality range", lab: "Available across different qualities", nat: "Available across different qualities" },
                  { f: "Price", lab: "Usually lower at initial retail purchase", nat: "Usually higher for a comparable specification" },
                  { f: "Supply", lab: "Can increase through production", nat: "Geologically limited" },
                  { f: "Identification", lab: "Specialist equipment or grading report", nat: "Specialist equipment or grading report" },
                  { f: "Resale market", lab: "Developing and subject to price changes", nat: "More established, but resale is not guaranteed" },
                  { f: "Suitable for fine jewellery", lab: "Yes", nat: "Yes" },
                  { f: "Automatically sustainable", lab: "No", nat: "No" },
                  { f: "Automatically conflict-free", lab: "Requires supply-chain verification", nat: "Requires supply-chain verification" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.lab}</td>
                    <td className="p-4">{row.nat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Natural */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is a Natural Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A natural diamond is a diamond that formed through geological processes beneath the Earth’s surface. Carbon atoms crystallised under conditions of extreme heat and pressure, producing the structure that gives diamond its hardness and optical properties. Volcanic activity later transported some diamonds closer to the surface.
          </p>
          <p>
            GIA reports that many natural diamonds formed more than a billion years ago, while some specimens have been dated to more than three billion years. Natural diamonds are recovered from primary deposits such as kimberlite pipes or from secondary deposits where geological forces have moved them from their original source.
          </p>
          <p>
            Their natural origin, age and finite geological availability contribute to their market positioning and emotional appeal.
          </p>
        </div>

        {/* Section 2: Lab-Grown */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is a Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A lab-grown diamond is diamond material created through a controlled technological process. The two principal production methods are CVD (Chemical vapour deposition) and HPHT (High pressure high temperature). Both begin with a diamond seed and create conditions in which additional carbon develops into diamond crystal.
          </p>
          <p>
            A lab-grown diamond is not the same as cubic zirconia, glass or moissanite. Those materials are diamond alternatives with different compositions and properties.
          </p>
          <p>
            IGI describes laboratory-grown diamonds as having the optical, chemical and physical characteristics of natural diamonds, noting that specialist examination is needed to distinguish their origin after cutting and polishing.
          </p>

          {/* IMAGE 2: Origin comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-vs-natural-diamonds/52.png"
              alt="Comparing geological natural formation with advanced laboratory diamond reactors"
              title="Origin and Formation Environments"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Natural diamonds form over billions of years geologically, while lab diamonds grow in weeks technologically.
          </p>
        </div>

        {/* Section 3: Material properties */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Shared Material and Properties
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Both are principally composed of carbon arranged in the characteristic crystal structure of diamond. This shared structure gives them comparable hardness (10 on the Mohs scale), refractive behaviour, thermal conductivity, brilliance, fire, and durability.
          </p>
          <p>
            Their growth histories are nevertheless different. Those different conditions can create distinct atomic-level defects, growth structures, inclusions and fluorescence patterns. Specialist laboratories detect these subtle features to determine origin.
          </p>
        </div>

        {/* Section 4: Visuals & Sparkle */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Do Lab-Grown and Natural Diamonds Look Different?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            To an ordinary observer, they may look the same. A well-cut lab-grown diamond and a well-cut natural diamond with comparable colour, clarity, shape and carat weight can both show strong brilliance and fire. You cannot reliably determine origin by looking at sparkle, colour, apparent clarity, shape, or how the diamond reacts in ordinary lighting.
          </p>
          <p>
            <strong>Do they sparkle differently?</strong> Origin does not decide how much a diamond sparkles. A diamond’s visual performance depends primarily on its cut (facet proportions, angles, symmetry, and polish). A poorly cut natural diamond may appear less lively than a beautifully cut lab-grown diamond. Focus on cut quality rather than category.
          </p>
          <p>
            <strong>Diamond Quality:</strong> Both categories include diamonds of different qualities. A lab-grown diamond is not automatically flawless, and a natural diamond is not automatically more beautiful. Both can contain inclusions, colour variations and surface blemishes.
          </p>

          {/* IMAGE 3: Visual inspection */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-vs-natural-diamonds/53.png"
              alt="Trained gemmologist comparing the fire and brilliance of natural and lab diamonds"
              title="Comparing Polish and Sparkle"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Both diamond types sparkle identically when cut to excellent proportions.
          </p>
        </div>

        {/* Section 5: Durability & Lifespan */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Durability and Longevity
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Lab-grown and natural diamonds both offer diamond-level hardness and are suitable for long-term fine-jewellery use. Both reach 10 on the Mohs hardness scale. This gives them strong resistance to scratching, but it does not make them impossible to damage. Either can chip if struck at a vulnerable angle, particularly around thin girdles or exposed edges.
          </p>
          <p>
            <strong>Do lab-grown diamonds last as long?</strong> Yes, when treated and cared for appropriately. The diamond crystal does not expire, fade or stop being diamond because it was laboratory-grown. Long-term jewellery condition depends on cleaning, storage, and setting security (clasps, prongs, and precious metals).
          </p>
        </div>

        {/* Section 6: Sourcing, Pricing & Sustainability */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Pricing, Value, Sourcing, and UK Guidelines
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Price Differences:</strong> Lab-grown diamonds are generally available at a lower initial retail price than similarly specified natural diamonds. Mined diamonds depend on limited geological deposits, while lab-grown diamond supply can expand as production capacity improves.
          </p>
          <p>
            <strong>Resale Value:</strong> Natural diamonds generally have a more established resale market, though resale is not a guaranteed financial investment. Lab-grown diamonds are priced primarily for their immediate beauty and affordability; as production capacity grows, future resale offers may be lower than the initial purchase price.
          </p>
          <p>
            <strong>Sustainability and Sourcing:</strong> The words &quot;laboratory-grown&quot; alone do not prove that a diamond is carbon-neutral or sustainable. Manufactured diamonds require electricity, while natural diamonds involve mining and earth restoration. Buyers should look for specific, verified environmental credentials.
          </p>
          <p>
            <strong>UK Advertising Guidelines:</strong> In UK-facing content, Aurelia Royale consistently uses a clear qualifier such as &quot;laboratory-grown&quot; or &quot;lab-grown&quot; with the word diamond. Current UK advertising decisions (from the ASA) emphasize that manufactured diamond origin should not be ambiguous.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Buyer Checklist
          </h2>
          
          {/* IMAGE 4: Buyer Checklist */}
          <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-vs-natural-diamonds/54.png"
              alt="Buyer checklist for selecting natural and laboratory-grown diamond jewellery"
              title="Buyer Checklist"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-6">
            Verify the independent grading report, diamond measurements and metal settings before purchasing.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-Grown vs Natural Buyer Verification Steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The origin (laboratory-grown or natural) is clearly disclosed.",
                  "An independent gemmological report (e.g., IGI or GIA) is provided.",
                  "The report number can be verified online.",
                  "Cut, colour, clarity, and carat weight details are fully documented.",
                  "Any post-growth treatments or colour origins are disclosed.",
                  "Precious metal composition and purity (e.g., 18k gold or platinum) are specified.",
                  "Returns, warranty terms, and delivery parameters are clear.",
                  "Environmental or ethical claims are supported by specific, verifiable evidence.",
                  "You are buying primarily for design, beauty, and utility, not for guaranteed returns."
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

        {/* Which should you choose callout */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            Which should you choose?
          </h4>
          <p>
            Choose according to your actual priorities, not pressure from either side of the debate.
          </p>
          <p className="mt-4">
            If you want a larger or higher-specification diamond within a controlled budget, a laboratory-grown diamond may be the more practical choice. If geological age, natural rarity, and natural origin are central to the meaning of the purchase, a natural diamond may be more appropriate.
          </p>
          <p className="mt-4">
            At Aurelia Royale, laboratory-grown origin is always disclosed clearly so customers understand exactly what they are purchasing.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are lab-grown diamonds the same as natural diamonds?",
              a: "They are both diamond materials with closely comparable chemical, physical and optical properties. However, they differ in origin: one is manufactured under controlled conditions and the other forms naturally inside the Earth."
            },
            {
              q: "Can you tell a lab-grown diamond from a natural diamond by looking?",
              a: "Usually not. Conclusive origin identification commonly requires specialist equipment or an independent gemmological report."
            },
            {
              q: "Do lab-grown diamonds sparkle like natural diamonds?",
              a: "Yes. Both can display brilliance, fire and scintillation. The strength of that appearance depends primarily on cut quality."
            },
            {
              q: "Are lab-grown diamonds as hard as natural diamonds?",
              a: "Yes. Both have diamond's characteristic hardness of 10 on the Mohs scale."
            },
            {
              q: "Why are lab-grown diamonds less expensive?",
              a: "Their supply can be expanded through manufacturing, whereas natural-diamond supply depends on limited geological deposits and mining."
            },
            {
              q: "Do lab-grown diamonds have resale value?",
              a: "They may have resale value, but there is no guaranteed future price. Their secondary market is less established and production prices can change."
            },
            {
              q: "Are lab-grown diamonds more environmentally friendly?",
              a: "Not automatically. Their environmental impact depends on energy sources, production efficiency, supply chains and other measurable factors."
            },
            {
              q: "Are lab-grown diamonds certified?",
              a: "They can be assessed by recognised gemmological laboratories. The report should clearly identify laboratory-grown origin and provide applicable quality information."
            },
            {
              q: "Can a normal diamond tester identify a lab-grown diamond?",
              a: "A basic tester may identify diamond material but may not reliably distinguish natural from laboratory-grown origin."
            },
            {
              q: "Should I buy a lab-grown or natural diamond?",
              a: "Choose a lab-grown diamond if price flexibility and visual size are priorities. Consider a natural diamond if geological rarity and natural origin matter more to you."
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
            Compare Certified Diamonds at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you seek natural rarity or the design flexibility of lab-grown stones, let our specialists guide you to the perfect diamond.
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
              Consult a Specialist
            </Link>
          </div>
        </div>

      </section>

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
