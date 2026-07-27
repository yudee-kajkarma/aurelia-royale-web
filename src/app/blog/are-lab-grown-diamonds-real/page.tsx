import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check, Compass, Shield } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Real? Facts & Proof | Aurelia",
  description: "Are lab-grown diamonds real? Learn what makes them diamonds, how testing works, how they differ from natural stones and what buyers should verify.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/",
  },
};

// 2. The custom JSON-LD Schema including the 15 FAQs for Google Search
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
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/",
      "name": "Are Lab-Grown Diamonds Real Diamonds?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/#webpage"
      },
      "headline": "Are Lab-Grown Diamonds Real Diamonds?",
      "description": "Are lab-grown diamonds real? Learn what makes them diamonds, how testing works, how they differ from natural stones and what buyers should verify.",
      "image": [
        "https://www.aureliaroyale.com/images/blog/are-lab-grown-diamonds-real.webp"
      ],
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
        "are lab-grown diamonds real",
        "are lab-grown diamonds fake",
        "do lab-grown diamonds pass a diamond tester",
        "can a jeweller tell if a diamond is lab-grown",
        "laboratory-grown diamond authenticity",
        "certified laboratory-grown diamonds"
      ],
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/#breadcrumb",
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
          "name": "Are Lab-Grown Diamonds Real Diamonds?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-real/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds real diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From a scientific and gemmological perspective, laboratory-grown diamonds are diamonds. However, their laboratory-grown origin must always be stated clearly."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Natural diamonds form geologically, while laboratory-grown diamonds are created through a controlled technological process."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They are diamonds with a laboratory-grown origin, not imitation stones."
          }
        },
        {
          "@type": "Question",
          "name": "Do laboratory-grown diamonds look like natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They can appear the same to the unaided eye because they have essentially the same crystal structure and optical properties."
          }
        },
        {
          "@type": "Question",
          "name": "Do laboratory-grown diamonds pass a diamond tester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They generally register as diamonds on standard thermal-conductivity testers, but a basic tester cannot reliably establish whether the diamond is natural or laboratory-grown."
          }
        },
        {
          "@type": "Question",
          "name": "Can a jeweller identify a laboratory-grown diamond by sight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not reliably in every case. Advanced instruments and gemmological laboratory testing may be required."
          }
        },
        {
          "@type": "Question",
          "name": "How can laboratory-grown diamond origin be verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check a report from a recognised gemmological laboratory, verify its number and confirm that the report corresponds to the stone or jewellery being sold."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds the same as moissanite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Moissanite is a different gemstone with a different chemical composition and optical behaviour."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds the same as cubic zirconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cubic zirconia is a diamond simulant and has a different composition and hardness."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds durable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They have diamond's recognised hardness, although they can still chip and the surrounding jewellery can be damaged."
          }
        },
        {
          "@type": "Question",
          "name": "Do laboratory-grown diamonds lose their sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They do not inherently lose their sparkle. Surface residue can make them appear dull until cleaned."
          }
        },
        {
          "@type": "Question",
          "name": "Can laboratory-grown diamonds become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They should not become permanently cloudy simply because of their origin. Residue, inclusions, damage or another gemstone material may affect appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Can laboratory-grown diamonds be certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Qualifying stones and certain finished jewellery pieces can receive reports from gemmological laboratories."
          }
        },
        {
          "@type": "Question",
          "name": "Are all laboratory-grown diamonds the same quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They vary in cut, colour, clarity, carat weight, treatment and visual performance."
          }
        }
      ]
    }
  ]
};

export default function Blog2Page() {
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
            Are Lab-Grown Diamonds Real?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Facts &amp; Proof • Published July 25, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/are-lab-grown-diamonds-real/blog21.png"
            alt="Laboratory-grown diamond and finished fine jewellery"
            title="Are Lab-Grown Diamonds Real?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds have the essential properties associated with diamond but are created through a controlled technological process.
        </p>
        
        {/* Quick Answer Callout */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              From a scientific and gemmological perspective, laboratory-grown diamonds are diamonds. They consist of crystallised carbon and have essentially the same crystal structure, hardness and optical properties as natural diamonds.
            </p>
            <p>
              They are not cubic zirconia, moissanite or another material designed to imitate a diamond. However, laboratory-grown and natural diamonds have different origins. One is created through a controlled technological process; the other forms through geological processes beneath the Earth.
            </p>
            <p className="italic text-foreground/80">
              This origin must always be disclosed clearly. For UK advertising, Aurelia Royale consistently uses a prominent qualifier such as &quot;laboratory-grown&quot; or &quot;lab-grown&quot; and avoids describing products simply as &quot;diamonds&quot; or using &quot;real diamond&quot; as an unqualified marketing claim.
            </p>
          </div>
        </div>

        {/* Key Takeaways Grid */}
        <div className="mb-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Key Takeaways
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Laboratory-grown diamonds are diamonds, not diamond simulants.",
              "They are made from crystallised carbon.",
              "They possess essentially the same chemical, optical and physical properties as natural diamonds.",
              "They can pass standard diamond-testing devices because those devices test material properties rather than geological origin.",
              "A basic diamond tester cannot reliably determine whether a diamond is natural or laboratory-grown.",
              "Advanced gemmological equipment can identify laboratory-grown origin.",
              "Laboratory-grown and natural diamonds should not be presented as commercially identical.",
              "Their origins, supply, pricing and resale markets are different.",
              "“Laboratory-grown” should remain visible throughout product and advertising copy.",
              "Certification and accurate product information provide stronger evidence than marketing language alone."
            ].map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-[#e2dfd5]">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="font-jost text-sm font-light text-[#3b3b3b]">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Authenticity Comparison Table */}
        <div className="mb-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Quick Authenticity Comparison
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Question</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { q: "Is a laboratory-grown diamond a diamond?", a: "Yes, from a scientific and gemmological perspective." },
                  { q: "Is it a natural diamond?", a: "No. It has a laboratory-grown origin." },
                  { q: "Is it the same as cubic zirconia?", a: "No. Cubic zirconia is a diamond simulant." },
                  { q: "Is it the same as moissanite?", a: "No. Moissanite is a different gemstone." },
                  { q: "Will it look like a natural diamond?", a: "It can appear the same to the unaided eye." },
                  { q: "Will it pass a standard diamond tester?", a: "Generally yes, although testers have limitations." },
                  { q: "Can a jeweller identify its origin by sight?", a: "Not reliably in every case." },
                  { q: "Can a laboratory identify its origin?", a: "Yes, using specialised testing and instruments." },
                  { q: "Can it receive a grading report?", a: "Yes, qualifying stones can be assessed by gemmological laboratories." },
                  { q: "Should it be called simply a “diamond”?", a: "No. Its laboratory-grown origin should be disclosed prominently." }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02]">
                    <td className="p-4 font-semibold text-foreground">{row.q}</td>
                    <td className="p-4">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: What Makes a Laboratory-Grown Diamond a Diamond? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Makes a Laboratory-Grown Diamond a Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A gemstone is not classified as a diamond merely because it looks bright, colourless or reflective.
          </p>
          <p>
            Laboratory-grown diamonds possess the defining material and structural characteristics of diamond. Their crystal structure consists primarily of carbon atoms arranged in the tightly bonded formation that gives diamond its recognised hardness and optical behaviour.
          </p>
          <p>
            According to the Gemological Institute of America (GIA), laboratory-grown diamonds have essentially the same chemical composition and crystal structure as diamonds created by nature. They also appear the same as natural diamonds to the unaided eye.
          </p>

          {/* IMAGE 2: Crystal structure comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-real/blog22.png"
              alt="Crystal structure and composition of laboratory-grown diamonds"
              title="What Makes Lab-Grown Diamonds Real"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Pure carbon arranged in a tightly bonded diamond crystal structure determines its diamond nature.
          </p>

          <h3 className="font-cormorant text-2xl font-medium text-foreground mt-8 mb-4">
            Four defining characteristics:
          </h3>
          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5]">
              <strong className="text-foreground font-medium block mb-2 font-cormorant text-xl uppercase tracking-wide">1. Chemical composition</strong>
              <p className="font-jost text-sm text-[#5a5a5a] leading-relaxed">
                Laboratory-grown and natural diamonds consist primarily of crystallised carbon. This distinguishes laboratory-grown diamonds from moissanite, cubic zirconia, glass and crystal.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5]">
              <strong className="text-foreground font-medium block mb-2 font-cormorant text-xl uppercase tracking-wide">2. Crystal structure</strong>
              <p className="font-jost text-sm text-[#5a5a5a] leading-relaxed">
                The carbon atoms are organised in the diamond crystal structure. This structure contributes to diamond&apos;s hardness, durability and interaction with light.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5]">
              <strong className="text-foreground font-medium block mb-2 font-cormorant text-xl uppercase tracking-wide">3. Physical properties</strong>
              <p className="font-jost text-sm text-[#5a5a5a] leading-relaxed">
                They measure 10 on the Mohs hardness scale. However, hardness does not make jewellery completely resistant to damage; diamonds can still chip at vulnerable points, and metal prongs may wear or bend.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5]">
              <strong className="text-foreground font-medium block mb-2 font-cormorant text-xl uppercase tracking-wide">4. Optical properties</strong>
              <p className="font-jost text-sm text-[#5a5a5a] leading-relaxed">
                A properly cut laboratory-grown diamond displays identical brightness, fire, and scintillation. Sparkle depends entirely on cut quality (proportions, polish, symmetry)—not origin.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Are Laboratory-Grown Diamonds the Same as Natural Diamonds? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Are Laboratory-Grown Diamonds the Same as Natural Diamonds?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-8">
          <p>
            They are the same type of gemstone material, but they are not identical in origin or commercial meaning.
          </p>
          <p>
            Natural diamonds form through geological processes over billions of years. Laboratory-grown diamonds are produced through a controlled technological process, usually CVD or HPHT.
          </p>
          <p>
            Their different growth histories can leave characteristics that specialist laboratories detect using advanced equipment. GIA states that laboratory-grown and natural diamonds may appear identical to the unaided eye but have subtle differences detectable by trained gemmologists.
          </p>
          
          {/* IMAGE 3: Growth history comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-real/blog23.png"
              alt="Lab-grown and natural diamond growth histories compared"
              title="Lab-Grown vs Natural Diamonds"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Lab-grown and natural diamonds share identical material properties but grow in different timescales and settings.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-16 border border-[#e2dfd5] rounded-lg">
          <table className="w-full text-left font-jost text-sm border-collapse">
            <thead>
              <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Characteristic</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Laboratory-Grown Diamond</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Natural Earth-Mined Diamond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
              {[
                { label: "Gemstone material", lab: "Diamond", natural: "Diamond" },
                { label: "Primary composition", lab: "Crystallised carbon", natural: "Crystallised carbon" },
                { label: "Origin", lab: "Controlled technological production", natural: "Natural geological formation" },
                { label: "Growth method", lab: "Primarily CVD or HPHT", natural: "Geological pressure and temperature" },
                { label: "Appearance", lab: "Can appear identical to the unaided eye", natural: "Can appear identical to the unaided eye" },
                { label: "Laboratory identification", lab: "Identified through specialist testing", natural: "Natural origin confirmed through specialist testing" },
                { label: "Supply", lab: "Can be produced technologically", natural: "Limited by natural geological supply" },
                { label: "Typical retail price", lab: "Usually lower", natural: "Usually higher" },
                { label: "Resale market", lab: "Developing and less predictable", natural: "More established, though resale remains below retail" },
                { label: "Required description", lab: "Must be identified as laboratory-grown", natural: "Must be identified as natural" }
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="p-4 font-semibold text-foreground">{row.label}</td>
                  <td className="p-4">{row.lab}</td>
                  <td className="p-4">{row.natural}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 3: Does "Real" Mean the Same as "Natural"? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide">
          Does &quot;Real&quot; Mean the Same as &quot;Natural&quot;?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-8">
          <p>
            No. This is where much of the confusion begins. When people frequently use the word &quot;real,&quot; they actually mean one of several different things: Is the stone genuinely carbon? Is it geological? Is it durable? Or is it simply a diamond rather than a simulant?
          </p>
        </div>

        <div className="overflow-x-auto mb-12 border border-[#e2dfd5] rounded-lg">
          <table className="w-full text-left font-jost text-sm border-collapse">
            <thead>
              <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Term</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it should mean</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
              {[
                { term: "Laboratory-grown diamond", desc: "A diamond created through a controlled technological process" },
                { term: "Natural diamond", desc: "A diamond formed through natural geological processes" },
                { term: "Diamond simulant", desc: "A different material made or cut to resemble a diamond (e.g., cubic zirconia)" },
                { term: "Certified diamond", desc: "A diamond assessed by a named gemmological laboratory" },
                { term: "Fake diamond", desc: "An imprecise term that should not replace accurate gemstone identification" }
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="p-4 font-semibold text-foreground">{row.term}</td>
                  <td className="p-4">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 4: UK Advertising Standards Compliance */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Why &quot;Real Diamond&quot; Requires Careful Use in the UK
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            There is a difference between a scientific explanation and an advertising claim. Gemmological sources explain that laboratory-grown diamonds possess essentially the same composition as natural diamonds. However, UK advertising guidance focuses strictly on whether consumers could misunderstand a product&apos;s origin.
          </p>
          <p>
            In October 2025, the UK Advertising Standards Authority (ASA) advised advertisers to use clear and prominent qualifiers such as &quot;synthetic,&quot; &quot;laboratory-grown&quot; or &quot;laboratory-created&quot; consistently. It also advised against using &quot;real diamond&quot; to describe laboratory-grown products to prevent consumer confusion.
          </p>
          
          <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5] space-y-4">
            <h4 className="font-cormorant text-xl font-semibold text-foreground uppercase tracking-wide">
              For Aurelia Royale, this means:
            </h4>
            <ul className="space-y-2 text-sm font-light text-[#5a5a5a]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                Use &quot;lab-grown diamond&quot; in product titles and descriptions.
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                Include the qualifier in image alt texts.
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                Avoid using &quot;real diamond&quot; as an unqualified promotional slogan.
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                Make the origin clear before the customer reaches checkout.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: Fake vs Moissanite vs Cubic Zirconia */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Are Lab-Grown Diamonds Fake, Moissanite, or Cubic Zirconia?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Are they fake?</strong> No. A correctly disclosed laboratory-grown diamond is being presented according to its actual gemstone material and origin. It only becomes misleadingly marketed when its origin is concealed or described ambiguously.
          </p>
          <p>
            <strong>Are they Moissanite?</strong> No. Moissanite is a completely different gemstone (silicon carbide) with its own compositional and optical qualities. It displays much more colourful fire and must be sold under its own name.
          </p>
          <p>
            <strong>Are they Cubic Zirconia?</strong> No. Cubic zirconia is a lower-hardness simulant. It is not classified as a diamond and wears down much quicker.
          </p>
        </div>

        {/* Stone Comparison Table */}
        <div className="overflow-x-auto my-12 border border-[#e2dfd5] rounded-lg">
          <table className="w-full text-left font-jost text-sm border-collapse">
            <thead>
              <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Stone</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Is it a diamond?</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Mohs Hardness</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Correct Product Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
              {[
                { stone: "Laboratory-grown diamond", isD: "Yes", hardness: "10", desc: "Laboratory-grown diamond" },
                { stone: "Natural diamond", isD: "Yes", hardness: "10", desc: "Natural diamond" },
                { stone: "Moissanite", isD: "No", hardness: "Approximately 9.25", desc: "Moissanite" },
                { stone: "Cubic zirconia", isD: "No", hardness: "Approximately 8–8.5", desc: "Cubic zirconia" },
                { stone: "Glass or crystal", isD: "No", hardness: "Varies", desc: "Glass, crystal or the specific material" }
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="p-4 font-semibold text-foreground">{row.stone}</td>
                  <td className="p-4">{row.isD}</td>
                  <td className="p-4">{row.hardness}</td>
                  <td className="p-4">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 6: Testing & Certification */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Testing, Jewellers, and Certification
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Do they pass a diamond tester?</strong> Generally, yes. Standard thermal-conductivity testers will register them as diamonds because they possess diamond&apos;s exact thermal properties. A basic handheld tester cannot distinguish between natural and lab-grown stones.
          </p>
          <p>
            <strong>Can a jeweller identify origin by sight?</strong> No, not reliably through a standard visual inspection. Confirming natural or laboratory-grown origin requires examination and advanced testing by a gemmological laboratory.
          </p>
          <p>
            <strong>How can a laboratory identify origin?</strong> Natural, HPHT-grown, and CVD-grown diamonds develop under different conditions. Those conditions leave microscopic growth structures, fluorescence patterns, and trace element marks that specialist laboratories detect.
          </p>
          <p>
            <strong>Can they be certified?</strong> Yes. Independent authorities like IGI and GIA grade laboratory-grown diamonds according to the classic 4Cs and issue reports confirming their origin. Furthermore, reputable growers laser-inscribe a microscopic report number onto the diamond&apos;s girdle for verification.
          </p>

          {/* IMAGE 4: Tester and Laboratory verification */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-real/blog24.png"
              alt="Diamond tester device and laboratory verification of origin"
              title="Lab-Grown Diamond Testing"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Handheld testers check material properties, while advanced laboratory instruments verify geological origin.
          </p>
        </div>

        {/* Section 7: Durability & Lifespan */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Do They Last and Can They Become Cloudy?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Do they last?</strong> Yes. Laboratory-grown diamonds have the exact durability expected of diamond. They do not have a shorter lifespan. However, the metal setting holding the stone still requires periodic maintenance.
          </p>
          <p>
            <strong>Do they lose their sparkle?</strong> No. A diamond does not lose its optical properties over time. A temporary dull look is caused by surface oils, soap, and cosmetic residue, which can easily be cleaned off.
          </p>
          <p>
            <strong>Can they become cloudy?</strong> A laboratory-grown diamond will not become permanently cloudy simply because of their origin. Any cloudiness is due to surface dirt, high inclusions in lower-grade stones, or a simulant material being mistaken for diamond.
          </p>
        </div>

        {/* Buyer Checklist Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            What Evidence Should a Buyer Look For?
          </h2>
          
          {/* IMAGE 5: Buyer Checklist */}
          <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-real/blog25.png"
              alt="Buyer checklist for certified laboratory-grown diamond jewellery"
              title="Lab-Grown Diamond Buying Checklist"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-6">
            Check certifications, cut grade, metal settings and seller documentation before buying.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Product Authenticity Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "“Laboratory-grown” or “lab-grown” appears weightily and prominently.",
                  "The stone is not described only as a “diamond.”",
                  "The product specifies whether carat weight is individual or total.",
                  "Relevant colour and clarity information is available.",
                  "The metal type and purity (e.g., 18k gold or platinum) are disclosed.",
                  "Additional coloured stones are identified.",
                  "Any treatments are disclosed where relevant.",
                  "Certification claims identify the issuing laboratory (e.g., IGI or GIA).",
                  "The report number can be verified online.",
                  "The product images accurately represent the item.",
                  "Dimensions and wearable measurements are included."
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

        {/* Aurelia Royale Collection Callout */}
        <div className="my-12 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h3 className="font-cormorant text-2xl font-semibold text-foreground uppercase tracking-wide mb-3">
            Choosing Laboratory-Grown Diamond Jewellery from Aurelia Royale
          </h3>
          <p>
            Aurelia Royale offers jewellery designs featuring laboratory-grown diamonds across categories including earrings, bracelets, necklaces, pendants, rings and coordinated sets.
          </p>
          <p className="mt-4">
            When considering a piece, review the design alongside the available diamond, metal, coloured-stone, certification, dimension and delivery information. The words &quot;laboratory-grown diamond&quot; explain the diamond&apos;s origin. Explore the Aurelia Royale jewellery collection or contact our team for expert styling consultations.
          </p>
        </div>

        {/* FAQ Accordion Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are laboratory-grown diamonds real diamonds?",
              a: "From a scientific and gemmological perspective, laboratory-grown diamonds are diamonds. However, their laboratory-grown origin must always be stated clearly."
            },
            {
              q: "Are laboratory-grown diamonds natural diamonds?",
              a: "No. Natural diamonds form geologically, while laboratory-grown diamonds are created through a controlled technological process."
            },
            {
              q: "Are laboratory-grown diamonds fake?",
              a: "No. They are diamonds with a laboratory-grown origin, not imitation stones."
            },
            {
              q: "Do laboratory-grown diamonds look like natural diamonds?",
              a: "Yes. They can appear the same to the unaided eye because they have essentially the same crystal structure and optical properties."
            },
            {
              q: "Do laboratory-grown diamonds pass a diamond tester?",
              a: "They generally register as diamonds on standard thermal-conductivity testers, but a basic tester cannot reliably establish whether the diamond is natural or laboratory-grown."
            },
            {
              q: "Can a jeweller identify a laboratory-grown diamond by sight?",
              a: "Not reliably in every case. Advanced instruments and gemmological laboratory testing may be required."
            },
            {
              q: "How can laboratory-grown diamond origin be verified?",
              a: "Check a report from a recognised gemmological laboratory, verify its number and confirm that the report corresponds to the stone or jewellery being sold."
            },
            {
              q: "Are laboratory-grown diamonds the same as moissanite?",
              a: "No. Moissanite is a different gemstone with a different chemical composition and optical behaviour."
            },
            {
              q: "Are laboratory-grown diamonds the same as cubic zirconia?",
              a: "No. Cubic zirconia is a diamond simulant and has a different composition and hardness."
            },
            {
              q: "Are laboratory-grown diamonds durable?",
              a: "Yes. They have diamond&apos;s recognised hardness, although they can still chip and the surrounding jewellery can be damaged."
            },
            {
              q: "Do laboratory-grown diamonds lose their sparkle?",
              a: "They do not inherently lose their sparkle. Surface residue can make them appear dull until cleaned."
            },
            {
              q: "Can laboratory-grown diamonds become cloudy?",
              a: "They should not become permanently cloudy simply because of their origin. Residue, inclusions, damage or another gemstone material may affect appearance."
            },
            {
              q: "Can laboratory-grown diamonds be certified?",
              a: "Yes. Qualifying stones and certain finished jewellery pieces can receive reports from gemmological laboratories."
            },
            {
              q: "Are all laboratory-grown diamonds the same quality?",
              a: "No. They vary in cut, colour, clarity, carat weight, treatment and visual performance."
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

        {/* Final Thought Section */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            Final Thought
          </h4>
          <p>
            Laboratory-grown diamonds are diamonds with a technological origin. That answer is scientifically straightforward, but responsible jewellery communication requires more precision than simply calling them “real.”
          </p>
          <p className="mt-4">
            They are not natural diamonds. They are not moissanite. They are not cubic zirconia. They should always be described clearly as laboratory-grown. For buyers, proof should come from transparent product information, verifiable certification and accurate disclosure—not from vague authenticity claims.
          </p>
        </div>

        {/* CTA Conversion Banner */}
        <div className="mt-20 bg-[#153f35] text-[#efefe8] p-10 rounded-lg text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          <h3 className="font-cormorant text-3xl md:text-4xl font-medium tracking-wide mb-4">
            Discover the Brilliance of Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            From meticulously crafted solitaire rings to custom-designed masterworks, explore our collection of certified laboratory-grown diamond jewellery.
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
