import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond vs Moissanite: Key Differences",
  description: "Compare lab-grown diamonds and moissanite by composition, sparkle, colour, hardness, price, testing and suitability for fine jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/",
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
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/",
      "name": "Lab-Grown Diamonds vs Moissanite: What Is the Difference?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#primaryimage"
      },
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-vs-moissanite.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-vs-moissanite.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond and moissanite compared side by side"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#webpage"
      },
      "headline": "Lab-Grown Diamonds vs Moissanite: What Is the Difference?",
      "description": "Compare lab-grown diamonds and moissanite by composition, sparkle, colour, hardness, price, testing and suitability for fine jewellery.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#primaryimage"
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
        "lab-grown diamond vs moissanite",
        "moissanite vs lab-grown diamond",
        "is moissanite a lab-grown diamond",
        "lab diamond vs moissanite sparkle",
        "lab diamond vs moissanite price",
        "moissanite or lab-grown diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#breadcrumb",
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
          "name": "Lab-Grown Diamonds vs Moissanite",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-vs-moissanite/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is moissanite a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A lab-grown diamond is crystallised carbon, while moissanite is silicon carbide."
          }
        },
        {
          "@type": "Question",
          "name": "Is moissanite considered a fake diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moissanite is a genuine gemstone material. It is considered a diamond simulant when used to imitate diamond, but it should not be sold as diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Which sparkles more: moissanite or lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moissanite generally produces more rainbow-coloured fire. Lab-grown diamond produces the traditional balance of brilliance, fire and scintillation associated with diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Which is harder: lab-grown diamond or moissanite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamond is harder, measuring 10 on the Mohs scale. Moissanite measures approximately 9.25."
          }
        },
        {
          "@type": "Question",
          "name": "Does moissanite become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moissanite does not normally become permanently cloudy. Oils, soap and mineral deposits can reduce its sparkle until the stone is cleaned."
          }
        },
        {
          "@type": "Question",
          "name": "Can moissanite pass a diamond tester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some basic thermal testers may give moissanite a diamond-like result. More advanced testing is needed to distinguish the materials reliably."
          }
        },
        {
          "@type": "Question",
          "name": "Is moissanite cheaper than lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moissanite is generally less expensive, although the difference varies by size, cut, brand, setting and retailer."
          }
        },
        {
          "@type": "Question",
          "name": "Does moissanite weigh the same as diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The materials have different densities. Stones with similar dimensions may have different carat weights."
          }
        },
        {
          "@type": "Question",
          "name": "Which looks more like a natural diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lab-grown diamond has the same fundamental diamond material and optical properties. Moissanite has different optical behaviour and stronger rainbow fire."
          }
        },
        {
          "@type": "Question",
          "name": "Which is better for fine jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can be suitable. Choose laboratory-grown diamond for diamond material and traditional sparkle, or moissanite for affordability and stronger coloured fire."
          }
        }
      ]
    }
  ]
};

export default function Blog6Page() {
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
            Lab-Grown Diamond vs Moissanite
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Key Differences • Published July 14, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/lab-grown-diamond-vs-moissanite/61 (1).png"
            alt="Lab-grown diamond and moissanite compared side by side"
            title="Lab-Grown Diamond vs Moissanite"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Lab-grown diamonds and moissanite are two distinct gemstones with different compositions and optical properties.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds and moissanite are two different gemstones.
          </p>
          <p>
            A lab-grown diamond is made from crystallised carbon and has the defining crystal structure of diamond. Moissanite is made from silicon carbide. It can resemble a diamond, but its chemical composition, optical behaviour and physical properties are different.
          </p>
          <p>
            Both can offer impressive brilliance and sufficient durability for fine jewellery. However, lab-grown diamonds display traditional diamond sparkle, while moissanite usually produces more intense rainbow-coloured flashes.
          </p>
          <p>
            The better option depends on whether you specifically want a diamond or prefer a lower-priced gemstone with a distinctive, highly fiery appearance.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              A lab-grown diamond is a diamond. Moissanite is not.
            </p>
            <p>The most important differences are:</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Composition:</strong> Lab-grown diamond is crystallised carbon, while moissanite is silicon carbide.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Hardness:</strong> Lab-grown diamond is 10 on the Mohs scale, while moissanite is approximately 9.25.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Sparkle:</strong> Lab-grown diamond displays balanced white brilliance and spectral fire, while moissanite produces more intense rainbow-coloured flashes.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>Price:</strong> Moissanite is generally less expensive than a lab-grown diamond.</span>
              </li>
            </ul>
            <p className="mt-3">
              Both are manufactured gemstones when used in modern jewellery, but laboratory origin does not make them the same material.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown Diamond vs Moissanite at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-Grown Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Moissanite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Material", lab: "Crystallised carbon", moiss: "Silicon carbide" },
                  { f: "Is it diamond?", lab: "Yes", moiss: "No" },
                  { f: "Category", lab: "Laboratory-grown diamond", moiss: "Diamond simulant or gemstone in its own right" },
                  { f: "Hardness", lab: "10 on the Mohs scale", moiss: "Approximately 9.25" },
                  { f: "Refractive index", lab: "Approximately 2.42", moiss: "Approximately 2.65–2.69" },
                  { f: "Fire", lab: "Traditional diamond fire", moiss: "More intense rainbow fire" },
                  { f: "Refraction", lab: "Singly refractive", moiss: "Doubly refractive" },
                  { f: "Typical appearance", lab: "Crisp contrast and diamond-like sparkle", moiss: "More colourful, fiery flashes" },
                  { f: "Everyday suitability", lab: "Excellent when securely set", moiss: "Very good when securely set" },
                  { f: "Price", lab: "Usually more expensive", moiss: "Usually less expensive" },
                  { f: "Diamond grading report", lab: "May receive a laboratory-grown diamond report", moiss: "Not graded as a diamond" },
                  { f: "Basic diamond tester", lab: "Usually tests as diamond", moiss: "Can produce a diamond-like result on some thermal testers" },
                  { f: "Production", lab: "CVD or HPHT", moiss: "Laboratory production of silicon carbide" },
                  { f: "Best for", lab: "Buyers who specifically want diamond material", moiss: "Buyers who prefer affordability and strong rainbow fire" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.lab}</td>
                    <td className="p-4">{row.moiss}</td>
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
            A lab-grown diamond is diamond material produced through controlled technology rather than geological formation. The two principal growth processes are Chemical vapour deposition (CVD) and High pressure high temperature (HPHT). Both processes create the characteristic diamond crystal structure from carbon.
          </p>
          <p>
            Lab-grown diamonds have essentially the chemical, physical and optical properties associated with diamond. They are not cubic zirconia, glass or moissanite.
          </p>
          <p>
            GIA explains that laboratory-grown diamonds share the tightly bonded carbon crystal structure of natural diamonds. Their laboratory origin can be determined by trained professionals using advanced equipment.
          </p>
        </div>

        {/* Section 2: Moissanite */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is Moissanite?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Moissanite is silicon carbide. Natural moissanite exists, but it is extremely rare. The moissanite used in contemporary jewellery is generally created in a laboratory.
          </p>
          <p>
            Moissanite is often used as a diamond alternative because it is transparent, highly brilliant, very hard (9.25 Mohs), and generally more affordable. However, it is not a variety of diamond. Its composition and optical behaviour are different. Calling moissanite a &quot;lab diamond&quot; is inaccurate. It should always be disclosed and sold as moissanite.
          </p>
          <p>
            <strong>Is it a fake diamond?</strong> Moissanite should not be dismissed as a fake gemstone. It is a distinct material with its own optical and physical properties. It only becomes misleading when a seller represents it as a diamond or laboratory-grown diamond.
          </p>

          {/* IMAGE 2: Composition comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-vs-moissanite/61 (2).png"
              alt="Silicon carbide moissanite gemstone alongside crystallised carbon lab diamond"
              title="Distinct Gemstone Compositions"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Diamond consists of pure carbon, while moissanite is composed of silicon carbide.
          </p>
        </div>

        {/* Section 3: Shared/Not shared labels */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Is Moissanite a Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            No. &quot;Lab-grown&quot; describes where or how a material was created. It does not mean that every laboratory-created gemstone is a diamond. A laboratory can produce several different materials (including sapphire, ruby, and cubic zirconia), each with a different chemical composition and crystal structure.
          </p>
          <p>
            A lab-grown diamond must be made of diamond material. Moissanite remains silicon carbide regardless of whether it resembles diamond.
          </p>
        </div>

        {/* Section 4: Sparkle */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Sparkle, Fire, and Refractive Index
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            They can appear similar at a quick glance, particularly in smaller sizes. However, moissanite often displays stronger rainbow-coloured flashes, more visible fire under direct lighting, and double-refraction effects. Lab-grown diamonds display more balanced white brilliance and spectral fire, and a crisper internal appearance.
          </p>
          <p>
            Why does moissanite produce more rainbow sparkle? Moissanite has a higher refractive index (2.65–2.69) and greater dispersion than diamond. Dispersion describes how a gemstone separates white light into spectral colours. Because moissanite has high dispersion, it produces prominent coloured flashes.
          </p>
          <p>
            Moissanite is also doubly refractive. Light entering the gemstone splits into two rays, which can create visible doubling of the back facets under magnification. Diamond is singly refractive, keeping its facet pattern crisper.
          </p>
          <p>
            <strong>Colour Undertones:</strong> Both are available in colourless varieties. A high-quality lab-grown diamond can appear colourless or near-colourless. Moissanite can also appear colourless face-up but may show grey, green or yellow undertones from some angles or in certain lighting.
          </p>

          {/* IMAGE 3: Sparkle comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-vs-moissanite/61 (3).png"
              alt="Demonstrating the double refraction of moissanite and single refraction of diamond"
              title="Comparing Refraction and Sparkle"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Moissanite&apos;s high dispersion creates colorful rainbow flashes, whereas diamond offers balanced brilliance.
          </p>
        </div>

        {/* Section 5: Hardness & Lifespan */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Hardness, Durability, and Maintenance
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Diamond is the hardest known material and scores 10 on the Mohs hardness scale. Moissanite measures approximately 9.25. While diamond has greater scratch resistance, moissanite is still highly durable and suitable for daily wear.
          </p>
          <p>
            <strong>Does moissanite become cloudy?</strong> Moissanite does not normally become permanently cloudy. Apparent cloudiness is often surface build-up from soap, skin oils, cosmetics, or dust. Regular cleaning can easily restore its original brilliance.
          </p>
          <p>
            <strong>Can they chip?</strong> Yes. Hardness does not make a gemstone indestructible. Both moissanite and lab-grown diamonds can chip if they receive a strong impact, particularly around points or exposed corners.
          </p>
        </div>

        {/* Section 6: Sourcing, Pricing & Measurement */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Pricing, Measurement, and Grading Differences
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Price Differences:</strong> Moissanite is generally less expensive than a lab-grown diamond of a visually comparable size. Compare complete specifications rather than using the gemstone type as the only indicator.
          </p>
          <p>
            <strong>Weight and Measurements:</strong> Moissanite has a different density from diamond. Therefore, a moissanite and diamond with the same physical dimensions will not have the same weight. Moissanite is often sold using millimetre dimensions or &quot;diamond-equivalent weight&quot; (DEW).
          </p>
          <p>
            <strong>Grading and Certification:</strong> Moissanite is not graded as diamond. While lab-grown diamonds receive reports from independent gemmological laboratories (e.g. IGI or GIA) documenting their 4Cs, moissanite quality categories (like VVS or D colour) are often comparison terms rather than standardised grading.
          </p>
          <p>
            <strong>Diamond Testers:</strong> Some basic thermal diamond testers may produce a diamond-like result for moissanite because moissanite has thermal conductivity close to diamond. Advanced screening and optical devices are needed to separate the materials.
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
              src="/images/blog/lab-grown-diamond-vs-moissanite/61 (4).png"
              alt="Buyer verification checklist for lab-grown diamond and moissanite jewellery"
              title="Buyer Checklist"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-6">
            Verify the physical dimensions, gemstone type, and independent certification details before buying.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Lab-Grown Diamond vs Moissanite Buyer Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The stone is clearly and honestly identified as either lab-grown diamond or moissanite.",
                  "Moissanite is not described as a “lab diamond.”",
                  "Stated measurements are in millimetres to clarify physical size.",
                  "Carat weight is specified as actual weight or diamond-equivalent weight.",
                  "An independent report is provided for loose lab-grown diamonds.",
                  "Returns and warranty terms are clear and accessible.",
                  "You are choosing the gemstone because you genuinely prefer its sparkle characteristics."
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
            Choose a lab-grown diamond if owning diamond material, receiving traditional diamond sparkle, and having maximum scratch resistance are important to you.
          </p>
          <p className="mt-4">
            Choose moissanite if you prefer a lower price and enjoy a gemstone with noticeably stronger rainbow fire.
          </p>
          <p className="mt-4">
            A trustworthy retailer should clearly distinguish between them and provide complete product information.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Is moissanite a lab-grown diamond?",
              a: "No. A lab-grown diamond is crystallised carbon, while moissanite is silicon carbide."
            },
            {
              q: "Is moissanite considered a fake diamond?",
              a: "Moissanite is a genuine gemstone material. It is considered a diamond simulant when used to imitate diamond, but it should not be sold as diamond."
            },
            {
              q: "Which sparkles more: moissanite or lab-grown diamond?",
              a: "Moissanite generally produces more rainbow-coloured fire. Lab-grown diamond produces the traditional balance of brilliance, fire and scintillation associated with diamond."
            },
            {
              q: "Which is harder: lab-grown diamond or moissanite?",
              a: "Lab-grown diamond is harder, measuring 10 on the Mohs scale. Moissanite measures approximately 9.25."
            },
            {
              q: "Does moissanite become cloudy?",
              a: "Moissanite does not normally become permanently cloudy. Oils, soap and mineral deposits can reduce its sparkle until the stone is cleaned."
            },
            {
              q: "Can moissanite pass a diamond tester?",
              a: "Some basic thermal testers may give moissanite a diamond-like result. More advanced testing is needed to distinguish the materials reliably."
            },
            {
              q: "Is moissanite cheaper than lab-grown diamond?",
              a: "Moissanite is generally less expensive, although the difference varies by size, cut, brand, setting and retailer."
            },
            {
              q: "Does moissanite weigh the same as diamond?",
              a: "No. The materials have different densities. Stones with similar dimensions may have different carat weights."
            },
            {
              q: "Which looks more like a natural diamond?",
              a: "A lab-grown diamond has the same fundamental diamond material and optical properties. Moissanite has different optical behaviour and stronger rainbow fire."
            },
            {
              q: "Which is better for fine jewellery?",
              a: "Both can be suitable. Choose laboratory-grown diamond for diamond material and traditional sparkle, or moissanite for affordability and stronger coloured fire."
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
            Explore Certified Gemstones at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            From the crisp contrast of certified lab-grown diamonds to custom fine settings, find your ideal match with Aurelia Royale.
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
