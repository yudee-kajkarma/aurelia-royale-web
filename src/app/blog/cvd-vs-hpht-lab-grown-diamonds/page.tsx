import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "CVD vs HPHT Lab-Grown Diamonds: Key Differences",
  description: "Compare CVD and HPHT lab-grown diamonds, including how they are made, quality, appearance, price, treatments and which option is better to buy.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/",
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
      "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/",
      "name": "CVD vs HPHT Lab-Grown Diamonds: What Is the Difference?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#primaryimage"
      },
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/cvd-vs-hpht-lab-grown-diamonds.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/cvd-vs-hpht-lab-grown-diamonds.webp",
      "width": 1600,
      "height": 900,
      "caption": "CVD and HPHT lab-grown diamond production methods compared"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#webpage"
      },
      "headline": "CVD vs HPHT Lab-Grown Diamonds: What Is the Difference?",
      "description": "Compare CVD and HPHT lab-grown diamonds, including how they are made, quality, appearance, price, treatments and which option is better to buy.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#primaryimage"
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
        "CVD vs HPHT lab-grown diamonds",
        "CVD diamond",
        "HPHT diamond",
        "CVD or HPHT which is better",
        "HPHT vs CVD diamond quality",
        "HPHT-treated CVD diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#breadcrumb",
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
          "name": "CVD vs HPHT Lab-Grown Diamonds",
          "item": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/cvd-vs-hpht-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are CVD and HPHT diamonds both lab-grown diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CVD and HPHT are the two principal processes used to create laboratory-grown diamonds. Both produce diamond crystal rather than a diamond simulant."
          }
        },
        {
          "@type": "Question",
          "name": "Is a CVD diamond better than an HPHT diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Either method can produce excellent or lower-quality material. The specifications and appearance of the individual diamond matter more than the method alone."
          }
        },
        {
          "@type": "Question",
          "name": "Can you see the difference between CVD and HPHT diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not with the unaided eye. Advanced gemmological equipment may be required to identify the growth method conclusively."
          }
        },
        {
          "@type": "Question",
          "name": "Which sparkles more, CVD or HPHT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither method automatically produces more sparkle. A diamond's brilliance and fire depend mainly on its cut, proportions, polish and symmetry."
          }
        },
        {
          "@type": "Question",
          "name": "Are CVD diamonds cheaper than HPHT diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, but not consistently. Pricing depends on the complete diamond specifications, availability, supplier and retailer, not only the growth method."
          }
        },
        {
          "@type": "Question",
          "name": "What does HPHT-treated CVD mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It means the diamond was grown using CVD and later exposed to high pressure and high temperature, usually to alter characteristics such as colour. Its growth origin remains CVD."
          }
        },
        {
          "@type": "Question",
          "name": "Does IGI identify CVD and HPHT diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IGI laboratory-grown diamond reports can state the detected growth process and provide information concerning indications of post-growth treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Are CVD and HPHT diamonds equally durable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are diamond material and offer the hardness and durability associated with diamond. The security of the setting and proper jewellery care remain important."
          }
        },
        {
          "@type": "Question",
          "name": "Is CVD or HPHT better for an engagement ring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Either can be suitable. Prioritise cut quality, appearance, grading information, disclosure and a secure setting instead of selecting solely by growth method."
          }
        },
        {
          "@type": "Question",
          "name": "Should I avoid an HPHT-treated CVD diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not solely because it received treatment. The important considerations are accurate disclosure, independent documentation, appearance, quality and price."
          }
        }
      ]
    }
  ]
};

export default function Blog4Page() {
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
            CVD vs HPHT Lab-Grown Diamonds
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
            src="/images/blog/cvd-vs-hpht-lab-grown-diamonds/41.png"
            alt="CVD and HPHT lab-grown diamond production methods compared"
            title="CVD vs HPHT Lab-Grown Diamonds"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          CVD and HPHT are the two primary technological processes used to grow genuine diamond crystals.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            CVD and HPHT are the two principal processes used to create lab-grown diamonds. Both produce genuine diamond material, but they create the diamond crystal under different laboratory conditions.
          </p>
          <p>
            HPHT uses extremely high pressure and temperature to dissolve carbon and deposit it around a diamond seed. CVD uses a carbon-containing gas inside a low-pressure chamber to build diamond material gradually over a seed.
          </p>
          <p>
            For most jewellery buyers, neither process is automatically better. Cut, colour, clarity, carat weight, proportions and independent grading usually matter more than whether a diamond was grown using CVD or HPHT.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              The main difference between CVD and HPHT lab-grown diamonds is how they are created:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>CVD (chemical vapour deposition)</strong> grows diamond in layers from carbon-containing gas.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span><strong>HPHT (high pressure high temperature)</strong> grows diamond from carbon dissolved in molten metal under intense heat and pressure.</span>
              </li>
            </ul>
            <p className="mt-3">
              Once cut and polished, both can offer excellent colour, clarity, durability and brilliance. The growth process alone does not determine whether an individual diamond is high quality.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            CVD vs HPHT at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">CVD Lab-Grown Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">HPHT Lab-Grown Diamond</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Full name", cvd: "Chemical vapour deposition", hpht: "High pressure high temperature" },
                  { f: "Carbon source", cvd: "Carbon-containing gas, commonly involving a hydrocarbon", hpht: "Solid carbon source" },
                  { f: "Growth environment", cvd: "Low-pressure chamber", hpht: "Specialised high-pressure press" },
                  { f: "Growth style", cvd: "Diamond develops in layers over a flat seed", hpht: "Carbon crystallises around a seed from a metal solution" },
                  { f: "Typical rough form", cvd: "Flat or tabular crystal", hpht: "Cuboctahedral crystal" },
                  { f: "Possible inclusions", cvd: "Dark graphitic or mineral inclusions", hpht: "Metallic flux inclusions may occur" },
                  { f: "Post-growth treatment", cvd: "Sometimes HPHT-treated to alter colour", hpht: "May also show indications of post-growth treatment" },
                  { f: "Appearance after polishing", cvd: "Can be colourless, clear and brilliant", hpht: "Can be colourless, clear and brilliant" },
                  { f: "Durability", cvd: "Diamond-level durability", hpht: "Diamond-level durability" },
                  { f: "Automatically better?", cvd: "No", hpht: "No" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    <td className="p-4">{row.cvd}</td>
                    <td className="p-4">{row.hpht}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs font-jost italic text-[#5a5a5a] leading-relaxed">
            Note: The characteristics in this table are possible tendencies, not a checklist for judging every diamond. Production methods continue to improve, and modern stones may not display the features historically associated with their growth process.
          </p>
        </div>

        {/* Section 1: CVD */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is a CVD Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            CVD stands for chemical vapour deposition. During the CVD process, a thin piece of previously grown diamond is placed inside a chamber. The chamber is filled with carbon-containing gas and energy is applied to create a plasma.
          </p>
          <p>
            The energy separates carbon atoms from the gas molecules. These carbon atoms settle onto the diamond seed and gradually form additional diamond crystal. Unlike HPHT growth, CVD does not require the same extremely high pressure. The diamond normally grows as a relatively flat or tabular piece of rough material.
          </p>
          <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5] space-y-4">
            <h4 className="font-cormorant text-xl font-semibold text-foreground uppercase tracking-wide">
              The simplified CVD process:
            </h4>
            <ol className="space-y-2 text-sm font-light text-[#5a5a5a] list-decimal pl-5">
              <li>A thin diamond seed is cleaned and placed inside a growth chamber.</li>
              <li>Carbon-containing gas is introduced.</li>
              <li>Energy converts the gas into plasma.</li>
              <li>Carbon atoms separate from the gas molecules.</li>
              <li>Carbon accumulates on the seed in layers.</li>
              <li>The rough diamond is removed, assessed, cut and polished.</li>
            </ol>
          </div>
          <p>
            The technical environment must be carefully controlled. Changes in gas composition, temperature or growth stability can influence colour, internal features and the quality of the resulting crystal. Read more about this in our guide to <Link href="/blog/how-are-lab-grown-diamonds-made/" className="text-gold underline hover:text-gold/80">how lab-grown diamonds are made</Link>.
          </p>
        </div>

        {/* Section 2: HPHT */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is an HPHT Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            HPHT stands for high pressure high temperature. The process places a diamond seed, a carbon source and metallic material inside a specialised growth capsule. The capsule is subjected to very high temperature and pressure.
          </p>
          <p>
            The metal melts and helps dissolve the carbon. Carbon then moves towards the cooler diamond seed, where it crystallises and enlarges the diamond. GIA describes HPHT growth as taking place at approximately 1,300–1,600°C and pressures of around 5–6 GPa.
          </p>
          <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5] space-y-4">
            <h4 className="font-cormorant text-xl font-semibold text-foreground uppercase tracking-wide">
              The simplified HPHT process:
            </h4>
            <ol className="space-y-2 text-sm font-light text-[#5a5a5a] list-decimal pl-5">
              <li>A diamond seed is placed inside a growth capsule.</li>
              <li>A carbon source and metallic flux are added.</li>
              <li>The capsule is placed inside a powerful press.</li>
              <li>Extreme pressure and heat dissolve the carbon.</li>
              <li>Carbon crystallises around the seed.</li>
              <li>The rough crystal is removed, cut and polished.</li>
            </ol>
          </div>
          <p>
            HPHT conditions are designed to reproduce some of the extreme environmental factors involved in natural diamond formation, although the laboratory process is controlled and considerably faster.
          </p>
        </div>

        {/* Section 3: Differences */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is the Biggest Difference?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            The biggest difference is the environment in which the diamond crystal grows. HPHT relies on extreme pressure, extreme temperature and a molten metallic medium. CVD relies on carbon-containing gas, plasma and substantially lower pressure.
          </p>
          <p>
            These different environments influence the shape of the rough crystal and may produce different microscopic growth features. They do not change the fundamental fact that both resulting materials are diamonds. For shoppers, this distinction is mostly about origin and production—not a visible difference between two well-cut finished diamonds.
          </p>

          {/* IMAGE 2: Growth environments comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/cvd-vs-hpht-lab-grown-diamonds/42.png"
              alt="Growth environments and apparatus compared for CVD and HPHT methods"
              title="Growth Environments Compared"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            CVD uses activated carbon gases in a vacuum, while HPHT uses extreme mechanical pressure and heat.
          </p>
        </div>

        {/* Section 4: Visuals & 4Cs comparison */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Quality, Appearance, and Sparkle Comparison
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Do they look different?</strong> Normally, not to the unaided eye. Two polished diamonds with comparable cut, colour, clarity, carat weight and proportions may appear virtually identical. The growth process can leave microscopic features (such as metallic flux inclusions in HPHT-grown stones or dark graphitic inclusions in CVD-grown stones), but these require gemmological instruments to identify.
          </p>
          <p>
            <strong>Which has better quality?</strong> Neither process guarantees better quality. High-quality and lower-quality diamonds can be produced through either method. The final result depends on factors such as seed quality, stability during growth, and cutting precision. The method should be treated as one piece of product information, not as an overall quality grade.
          </p>
          <p>
            <strong>CVD vs HPHT colour:</strong> Both processes can produce high-colour-grade (colourless) diamonds. Historically, some CVD diamonds had a brownish tint which required post-growth HPHT treatment. Recent research shows that modern manufacturing has improved to the point where both processes reliably create colourless, near-colourless, and vibrant coloured examples.
          </p>
          <p>
            <strong>Which sparkles more?</strong> The growth method does not directly determine how much a finished diamond sparkles. Brilliance, fire and scintillation depend primarily on cut quality (proportions, symmetry, polish) and facet design.
          </p>

          {/* IMAGE 3: Polished comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/cvd-vs-hpht-lab-grown-diamonds/43.png"
              alt="Trained gemmologist examining CVD and HPHT polished diamonds"
              title="Comparing Polish and Brilliance"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Sparkle, brilliance and beauty depend on the cut quality rather than the growth acronym.
          </p>
        </div>

        {/* Section 5: Treatments */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is an HPHT-Treated CVD Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            An HPHT-treated CVD diamond was originally grown through chemical vapour deposition (CVD) and was later exposed to high pressure and high temperature (HPHT).
          </p>
          <p>
            This does not mean that the diamond was grown twice or that it became an HPHT-grown diamond. Its growth origin remains CVD. The later HPHT process is a treatment, generally used to modify characteristics such as colour by rearranging carbon defects.
          </p>
          <p>
            <strong>Is post-growth treatment a problem?</strong> Post-growth treatment is not automatically evidence of a poor diamond. Treatments are part of modern laboratory-grown diamond production. The important issue for buyers is transparency: relevant treatment information should be disclosed accurately on the grading report.
          </p>
        </div>

        {/* Section 6: Sourcing, Pricing & Sustainability */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Pricing, Sourcing, and UK Advertising Guidelines
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Are CVD diamonds more expensive than HPHT?</strong> There is no universal price rule. A CVD diamond may cost more or less than an HPHT diamond depending on carat weight, cut, colour, clarity, and setting. Compare complete specifications rather than using the growth process as the only pricing indicator.
          </p>
          <p>
            <strong>Is CVD more sustainable?</strong> The growth method alone is not enough to establish environmental performance. CVD and HPHT both require energy. Environmental footprint depends heavily on the electricity source (renewable vs coal) and the efficiency of the facility.
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
              src="/images/blog/cvd-vs-hpht-lab-grown-diamonds/44.png"
              alt="Buyer verification checklist for CVD and HPHT laboratory-grown diamond jewellery"
              title="Buyer Checklist"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-6">
            Always verify the growth details, treatments and certifications on the independent laboratory report.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">CVD or HPHT Buyer Verification Steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The product is clearly described as laboratory-grown or lab-grown.",
                  "The growth method (CVD or HPHT) is disclosed where available.",
                  "An independent grading report (e.g., IGI or GIA) is provided.",
                  "The report number can be verified online.",
                  "Any post-growth treatment (such as HPHT annealing) is disclosed.",
                  "Cut, colour, clarity, and carat information are complete.",
                  "Product photographs show the actual jewellery design clearly.",
                  "The precious metal and its fineness (e.g. 18k gold or platinum) are specified.",
                  "Returns and warranty terms are available from the seller."
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

        {/* Section 7: Final Verdict */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            Final Verdict
          </h4>
          <p>
            CVD and HPHT are different technological routes to the same fundamental material: diamond. CVD builds the crystal from carbon-containing gas, while HPHT grows it from carbon under extreme pressure and temperature. Their growth environments can produce different microscopic characteristics, but neither method is automatically more beautiful, durable or valuable.
          </p>
          <p className="mt-4">
            For jewellery buyers, the finished diamond matters more than the production acronym. Compare the stone&apos;s cut, colour, clarity, size, visual performance, independent report and treatment disclosure before deciding.
          </p>
          <p className="mt-4">
            Explore Aurelia Royale&apos;s lab-grown diamond jewellery or contact Aurelia Royale if you need help understanding the specifications of a particular piece.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are CVD and HPHT diamonds both lab-grown diamonds?",
              a: "Yes. CVD and HPHT are the two principal processes used to create laboratory-grown diamonds. Both produce diamond crystal rather than a diamond simulant."
            },
            {
              q: "Is a CVD diamond better than an HPHT diamond?",
              a: "Not automatically. Either method can produce excellent or lower-quality material. The specifications and appearance of the individual diamond matter more than the method alone."
            },
            {
              q: "Can you see the difference between CVD and HPHT diamonds?",
              a: "Usually not with the unaided eye. Advanced gemmological equipment may be required to identify the growth method conclusively."
            },
            {
              q: "Which sparkles more, CVD or HPHT?",
              a: "Neither method automatically produces more sparkle. A diamond's brilliance and fire depend mainly on its cut, proportions, polish and symmetry."
            },
            {
              q: "Are CVD diamonds cheaper than HPHT diamonds?",
              a: "Sometimes, but not consistently. Pricing depends on the complete diamond specifications, availability, supplier and retailer, not only the growth method."
            },
            {
              q: "What does HPHT-treated CVD mean?",
              a: "It means the diamond was grown using CVD and later exposed to high pressure and high temperature, usually to alter characteristics such as colour. Its growth origin remains CVD."
            },
            {
              q: "Does IGI identify CVD and HPHT diamonds?",
              a: "IGI laboratory-grown diamond reports can state the detected growth process and provide information concerning indications of post-growth treatment."
            },
            {
              q: "Are CVD and HPHT diamonds equally durable?",
              a: "Both are diamond material and offer the hardness and durability associated with diamond. The security of the setting and proper jewellery care remain important."
            },
            {
              q: "Is CVD or HPHT better for an engagement ring?",
              a: "Either can be suitable. Prioritise cut quality, appearance, grading information, disclosure and a secure setting instead of selecting solely by growth method."
            },
            {
              q: "Should I avoid an HPHT-treated CVD diamond?",
              a: "Not solely because it received treatment. The important considerations are accurate disclosure, independent documentation, appearance, quality and price."
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
            Find Your Perfect Lab-Grown Diamond
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Explore our curated inventory of beautifully cut, certified laboratory-grown diamond jewellery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop/"
              className="inline-block bg-gold text-[#031b16] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-300"
            >
              View Inventory
            </Link>
            <Link
              href="/contact/"
              className="inline-block border border-[#efefe8]/30 text-[#efefe8] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-[#efefe8] hover:text-[#031b16] transition-all duration-300"
            >
              Speak to a Specialist
            </Link>
          </div>
        </div>

      </section>

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
