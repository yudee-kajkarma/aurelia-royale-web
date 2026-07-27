import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond vs Cubic Zirconia: Differences",
  description: "Compare lab-grown diamonds and cubic zirconia by material, sparkle, hardness, weight, price, testing, cloudiness and suitability for jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/",
  },
};

// 2. Reconstructed JSON-LD Schema
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/",
      "name": "Lab-Grown Diamonds vs Cubic Zirconia: What Is the Difference?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#primaryimage"
      },
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-vs-cubic-zirconia.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-vs-cubic-zirconia.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond and cubic zirconia compared side by side"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#webpage"
      },
      "headline": "Lab-Grown Diamonds vs Cubic Zirconia: What Is the Difference?",
      "description": "Compare lab-grown diamonds and cubic zirconia by material, sparkle, hardness, weight, price, testing, cloudiness and suitability for jewellery.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#primaryimage"
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
        "lab-grown diamond vs cubic zirconia",
        "cubic zirconia vs lab-grown diamond",
        "is cubic zirconia a lab-grown diamond",
        "does cubic zirconia become cloudy",
        "lab diamond vs cubic zirconia hardness",
        "cubic zirconia or lab-grown diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#breadcrumb",
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
          "name": "Lab-Grown Diamonds vs Cubic Zirconia",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-cubic-zirconia/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is cubic zirconia a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A lab-grown diamond is crystallised carbon, while cubic zirconia is manufactured zirconium dioxide."
          }
        },
        {
          "@type": "Question",
          "name": "Is cubic zirconia the same as zircon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Zircon is a naturally occurring zirconium silicate mineral. Cubic zirconia is a manufactured zirconium dioxide crystal."
          }
        },
        {
          "@type": "Question",
          "name": "Is cubic zirconia a fake diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubic zirconia is a real manufactured material but not a diamond. It is classified as a diamond simulant when used to imitate diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Which sparkles more: CZ or lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CZ can display broad coloured flashes, while lab-grown diamond offers the traditional balance of brilliance, fire, contrast and scintillation."
          }
        },
        {
          "@type": "Question",
          "name": "Which is harder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamond scores 10 on the Mohs scale. Cubic zirconia generally measures approximately 8–8.5."
          }
        },
        {
          "@type": "Question",
          "name": "Does cubic zirconia become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Surface build-up can make CZ look cloudy temporarily. Scratches and abrasion can also reduce its brilliance permanently until it is repolished or replaced."
          }
        },
        {
          "@type": "Question",
          "name": "Does cubic zirconia pass a diamond tester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It normally gives a non-diamond result on a thermal tester, although professional identification is more reliable than a basic home device."
          }
        },
        {
          "@type": "Question",
          "name": "Is cubic zirconia cheaper than lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cubic zirconia is generally considerably less expensive."
          }
        },
        {
          "@type": "Question",
          "name": "Which is better for fine jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can be used in precious-metal jewellery, but lab-grown diamond offers stronger long-term surface durability and actual diamond material."
          }
        }
      ]
    }
  ]
};

export default function Blog7Page() {
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
            Lab-Grown Diamond vs Cubic Zirconia
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Differences • Published July 14, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/lab-grown-diamond-vs-cubic-zirconia/7 (1).png"
            alt="Lab-grown diamond and cubic zirconia compared side by side"
            title="Lab-Grown Diamond vs Cubic Zirconia"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          A lab-grown diamond is crystallised carbon, while cubic zirconia is manufactured zirconium dioxide.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            A lab-grown diamond and cubic zirconia can both be transparent, colourless-looking and highly polished, but they are fundamentally different materials.
          </p>
          <p>
            A lab-grown diamond is crystallised carbon with the characteristic structure and properties of diamond. Cubic zirconia, commonly abbreviated as CZ, is manufactured zirconium dioxide. It is used as an affordable diamond simulant.
          </p>
          <p>
            Lab-grown diamonds offer diamond-level hardness, traditional brilliance and better resistance to scratching. Cubic zirconia offers a diamond-inspired appearance at a much lower initial price, but it is softer, heavier for its size and more likely to show surface wear over time.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              Cubic zirconia is not a lab-grown diamond.
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Composition:</strong> Lab-grown diamond is crystallised carbon, while cubic zirconia is zirconium dioxide.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Hardness:</strong> Lab-grown diamond is 10 on the Mohs scale, while cubic zirconia is approximately 8–8.5.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Appearance:</strong> Lab-grown diamond displays crisp brilliance and diamond fire, whereas CZ is bright but often glassier with different light reflection patterns.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Price:</strong> Cubic zirconia is considerably less expensive.</span>
              </li>
            </ul>
            <p className="mt-3">
              Choose cubic zirconia for maximum affordability. Choose a lab-grown diamond if you want actual diamond material and stronger long-term wear resistance.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown Diamond vs Cubic Zirconia at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-Grown Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Cubic Zirconia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Composition", lab: "Crystallised carbon", cz: "Zirconium dioxide" },
                  { f: "Is it diamond?", lab: "Yes", cz: "No" },
                  { f: "Classification", lab: "Laboratory-grown diamond", cz: "Diamond simulant" },
                  { f: "Hardness", lab: "10 on the Mohs scale", cz: "Approximately 8–8.5" },
                  { f: "Refractive index", lab: "Approximately 2.42", cz: "Approximately 2.15–2.18" },
                  { f: "Density", lab: "Lower than CZ", cz: "Substantially heavier for the same size" },
                  { f: "Appearance", lab: "Crisp brilliance, fire and contrast", cz: "Bright but can appear glassier" },
                  { f: "Inclusions", lab: "May contain growth-related inclusions", cz: "Often manufactured with very high apparent clarity" },
                  { f: "Scratch resistance", lab: "Exceptional", cz: "Good, but lower than diamond" },
                  { f: "Surface wear", lab: "Highly resistant", cz: "More likely to develop scratches and worn facet edges" },
                  { f: "Price", lab: "Higher", cz: "Considerably lower" },
                  { f: "Diamond report", lab: "May receive a laboratory-grown diamond report", cz: "Not graded as diamond" },
                  { f: "Basic diamond tester", lab: "Usually tests as diamond", cz: "Normally gives a non-diamond result" },
                  { f: "Regular wear", lab: "Excellent when securely set", cz: "Possible, but greater maintenance and wear should be expected" },
                  { f: "Best suited to", lab: "Fine jewellery intended for long-term wear", cz: "Budget, travel, temporary or fashion jewellery" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.lab}</td>
                    <td className="p-4">{row.cz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Lab-Grown */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is a Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A lab-grown diamond is diamond material created in a controlled facility. It is produced through one of two principal methods: CVD (Chemical vapour deposition) or HPHT (High pressure high temperature). Both processes arrange carbon into the defining crystal structure of diamond.
          </p>
          <p>
            A lab-grown diamond is not an imitation simply because it was made in a laboratory. It has essentially the physical, chemical and optical characteristics associated with diamond. GIA distinguishes laboratory-grown diamonds from simulants such as cubic zirconia, moissanite and glass.
          </p>
        </div>

        {/* Section 2: Cubic Zirconia */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is Cubic Zirconia?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Cubic zirconia is a manufactured crystalline form of zirconium dioxide. It became widely used as a diamond imitation because it can be transparent, colourless-looking, faceted, and sold at a low price.
          </p>
          <p>
            GIA explains that synthetic cubic zirconia is produced by heating zirconium oxide until it melts and then controlling the cooling process so crystals form. Cubic zirconia is a genuine manufactured material, but it is not diamond.
          </p>
          <p>
            <strong>Is it a fake diamond?</strong> Cubic zirconia is a real manufactured material, but it is not diamond. When used to resemble diamond, it is classified as a diamond simulant. It becomes deceptive only when a seller presents it as a natural or laboratory-grown diamond.
          </p>

          {/* IMAGE 2: CZ vs Diamond */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-vs-cubic-zirconia/7 (2).png"
              alt="Comparing faceted cubic zirconia with crystallised lab-grown diamond"
              title="Manufactured Simulant vs Diamond"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Cubic zirconia is a manufactured simulant, whereas lab-grown diamonds share the physical qualities of natural diamonds.
          </p>
        </div>

        {/* Section 3: Shared/Not shared labels */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Is Cubic Zirconia a Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            No. Both materials are manufactured, but laboratory production does not make them chemically or physically equivalent. Lab-grown diamond is crystallised carbon, while cubic zirconia is zirconium dioxide. Cubic zirconia should never be marketed as a lab-grown diamond, laboratory diamond, or synthetic diamond.
          </p>
          <p>
            <strong>Cubic Zirconia vs Zircon:</strong> They are also different. Zircon is a naturally occurring zirconium silicate mineral, while cubic zirconia is a manufactured zirconium dioxide crystal. The word &quot;zirconia&quot; should therefore not be shortened to &quot;zircon&quot; on a product page.
          </p>
        </div>

        {/* Section 4: Sparkle */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Sparkle, Contrast, and Refraction Index
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            They can look similar from a distance when new, but closer observation reveals differences. A lab-grown diamond displays crisp facet reflections, balanced fire, and sharp contrast. Cubic zirconia has a glassier overall appearance, broader flashes of colour, and less contrast definition.
          </p>
          <p>
            <strong>Why can cubic zirconia look glassier?</strong> Diamond bends and reflects light differently. Diamond has a refractive index of approximately 2.42, while cubic zirconia is generally around 2.15–2.18. This difference affects how light travels through and returns from the stone. CZ is also frequently produced with extremely high apparent clarity, which when combined with lower refraction can look less crisp.
          </p>

          {/* IMAGE 3: Sparkle refraction */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-vs-cubic-zirconia/7 (3).png"
              alt="Refractive index and facet edges compared between CZ and lab diamond"
              title="Comparing Refraction and Contrast"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Diamond&apos;s higher refractive index creates crisper scintillation than the glassier reflections of CZ.
          </p>
        </div>

        {/* Section 5: Hardness & Cloudiness */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Hardness, Wear, and Cloudiness
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Lab-grown diamond scores 10 on the Mohs hardness scale. Cubic zirconia generally scores approximately 8–8.5. Diamond is substantially more scratch-resistant. Cubic zirconia is more likely to develop fine scratches, surface abrasion, and rounded facet junctions over time.
          </p>
          <p>
            <strong>Does cubic zirconia become cloudy?</strong> CZ does not transform internally, but it may look cloudy for two reasons: surface build-up (soap, skin oils, dust) or surface wear (scratches and abrasion that scatter light). Cleaning can remove residue, but it cannot remove scratches or restore worn facet edges.
          </p>
          <p>
            <strong>How long does CZ last?</strong> Occasional-wear CZ pendants or earrings may retain their appearance for years, but CZ rings worn daily will experience frequent contact with surfaces, leading to visible wear sooner.
          </p>

          {/* IMAGE 4: Scratch wear */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-vs-cubic-zirconia/7 (4).png"
              alt="Checking surface wear and facet sharpness on cubic zirconia"
              title="Hardness and Scratch Resistance"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Cubic zirconia is softer and prone to surface scratches, while lab diamonds retain their facet sharpness.
          </p>
        </div>

        {/* Section 6: Sourcing, Pricing & Weight */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Weight, Pricing, and Grading Differences
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Density and Weight:</strong> Cubic zirconia is denser than diamond. Therefore, a CZ and diamond with the same physical dimensions will have different weights, with the CZ being substantially heavier. If both stones have the same carat weight, the CZ will appear smaller.
          </p>
          <p>
            <strong>Pricing:</strong> Cubic zirconia is considerably less expensive because it can be manufactured in large quantities at low cost, whereas lab-grown diamonds require complex CVD/HPHT growth equipment, cutting, polishing, and grading.
          </p>
          <p>
            <strong>Grading and Testing:</strong> CZ is not graded like diamond. Ratings like &quot;5A CZ&quot; are manufacturer classifications, not independent grading. In terms of testing, cubic zirconia gives a non-diamond result on a functional thermal conductivity tester, whereas lab diamonds test as diamond.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Buyer Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-Grown Diamond vs Cubic Zirconia Buyer Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The material is clearly stated (lab-grown diamond vs cubic zirconia).",
                  "Cubic zirconia is not described as a “lab-grown diamond” or “created diamond.”",
                  "Stated measurements are in millimetres to clarify physical size.",
                  "Carat weight is specified as actual weight or diamond-equivalent weight.",
                  "An independent report is provided where applicable.",
                  "Returns and warranty terms are clear and accessible.",
                  "You are choosing the material for its actual described qualities."
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
            Choose cubic zirconia if your priority is the lowest possible price, occasional wear, or a temporary diamond-inspired look.
          </p>
          <p className="mt-4">
            Choose a lab-grown diamond if you want actual diamond material, traditional diamond optics, greater scratch resistance, and jewellery intended for frequent wear.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Is cubic zirconia a lab-grown diamond?",
              a: "No. A lab-grown diamond is crystallised carbon, while cubic zirconia is manufactured zirconium dioxide."
            },
            {
              q: "Is cubic zirconia the same as zircon?",
              a: "No. Zircon is a naturally occurring zirconium silicate mineral. Cubic zirconia is a manufactured zirconium dioxide crystal."
            },
            {
              q: "Is cubic zirconia a fake diamond?",
              a: "Cubic zirconia is a real manufactured material but not a diamond. It is classified as a diamond simulant when used to imitate diamond."
            },
            {
              q: "Which sparkles more: CZ or lab-grown diamond?",
              a: "CZ can display broad coloured flashes, while lab-grown diamond offers the traditional balance of brilliance, fire, contrast and scintillation."
            },
            {
              q: "Which is harder?",
              a: "Lab-grown diamond scores 10 on the Mohs scale. Cubic zirconia generally measures approximately 8–8.5."
            },
            {
              q: "Does cubic zirconia become cloudy?",
              a: "Surface build-up can make CZ look cloudy temporarily. Scratches and abrasion can also reduce its brilliance permanently until it is repolished or replaced."
            },
            {
              q: "Does cubic zirconia pass a diamond tester?",
              a: "It normally gives a non-diamond result on a thermal tester, although professional identification is more reliable than a basic home device."
            },
            {
              q: "Is cubic zirconia cheaper than lab-grown diamond?",
              a: "Yes. Cubic zirconia is generally considerably less expensive."
            },
            {
              q: "Which is better for fine jewellery?",
              a: "Both can be used in precious-metal jewellery, but lab-grown diamond offers stronger long-term surface durability and actual diamond material."
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
            Explore Certified Fine Jewellery at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Ensure your jewellery stays brilliant for a lifetime. Explore our collections of certified laboratory-grown diamond jewellery.
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
