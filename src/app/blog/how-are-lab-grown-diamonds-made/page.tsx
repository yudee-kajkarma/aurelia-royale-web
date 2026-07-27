import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check, Compass, Shield } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How Are Lab-Grown Diamonds Made? CVD & HPHT Guide",
  description: "Learn how lab-grown diamonds are made using CVD and HPHT, from the original diamond seed through crystal growth, cutting, polishing and certification.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/",
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
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#webpage",
      "url": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/",
      "name": "How Are Lab-Grown Diamonds Made?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#webpage"
      },
      "headline": "How Are Lab-Grown Diamonds Made?",
      "description": "Learn how lab-grown diamonds are made using CVD and HPHT, from the original diamond seed through crystal growth, cutting, polishing and certification.",
      "image": [
        "https://www.aureliaroyale.com/images/blog/how-are-lab-grown-diamonds-made.webp"
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
        "how are lab-grown diamonds made",
        "laboratory-grown diamond process",
        "CVD diamond process",
        "HPHT diamond process",
        "diamond seed",
        "lab-grown diamond manufacturing",
        "lab-grown diamond certification"
      ],
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#breadcrumb",
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
          "name": "How Are Lab-Grown Diamonds Made?",
          "item": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/how-are-lab-grown-diamonds-made/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How laboratory-grown diamonds made?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are made by creating controlled conditions in which carbon forms diamond around a prepared diamond seed. The two principal methods are CVD and HPHT."
          }
        },
        {
          "@type": "Question",
          "name": "What does HPHT mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HPHT means High Pressure High Temperature. The method uses intense heat and pressure, a carbon source, metallic flux and a diamond seed."
          }
        },
        {
          "@type": "Question",
          "name": "What does CVD mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CVD means Chemical Vapour Deposition. It uses activated carbon-containing gases to grow diamond in layers on a prepared substrate."
          }
        },
        {
          "@type": "Question",
          "name": "Do CVD and HPHT produce diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both processes can produce gem-quality laboratory-grown diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Does the process begin with a diamond seed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both primary growth methods generally use a small diamond substrate that provides the crystal structure for new growth."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds made from carbon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Carbon atoms form the diamond crystal structure during the growth process."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a laboratory-grown diamond take to grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no fixed time. Growth can take from hours to weeks depending on the method, equipment, size and intended quality."
          }
        },
        {
          "@type": "Question",
          "name": "Are laboratory-grown diamonds ready for jewellery immediately after growth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The rough crystal must be assessed, cut, faceted, polished and tested before it can be selected for jewellery."
          }
        },
        {
          "@type": "Question",
          "name": "Can laboratory-grown diamonds receive treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Some receive post-growth treatment to alter or improve colour. Relevant treatment should be disclosed."
          }
        },
        {
          "@type": "Question",
          "name": "Is CVD better than HPHT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Both methods can produce diamonds of different qualities, so the individual diamond should be assessed."
          }
        },
        {
          "@type": "Question",
          "name": "Can laboratories identify how a diamond was grown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Specialist laboratories use advanced equipment to identify laboratory-grown origin and often the growth method."
          }
        },
        {
          "@type": "Question",
          "name": "Are all laboratory-grown diamonds identical?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They vary in colour, clarity, size, treatment, cut and visual performance."
          }
        }
      ]
    }
  ]
};

export default function Blog3Page() {
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
            How Are Lab-Grown Diamonds Made?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            CVD &amp; HPHT Guide • Published July 14, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/how-are-lab-grown-diamonds-made/31.png"
            alt="Laboratory-grown diamond seed preparation and growth apparatus"
            title="How Lab-Grown Diamonds Are Made"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds are created from carbon through controlled technological processes starting with a seed.
        </p>
        
        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              Lab-grown diamonds are made by creating the conditions required for carbon atoms to form a diamond crystal. The process normally begins with a small piece of existing diamond called a diamond seed.
            </p>
            <p>
              Two main technologies are used. High Pressure High Temperature, or HPHT, uses intense pressure and heat to dissolve carbon and encourage it to crystallise around the seed. Chemical Vapour Deposition, or CVD, places a diamond seed in a chamber containing activated carbon-rich gases, allowing diamond to grow in layers.
            </p>
            <p>
              After growth, the rough crystal is examined, cut, polished and tested. Qualifying diamonds may then receive a laboratory report before being selected and set into jewellery.
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mb-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Key Takeaways
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Lab-grown diamonds are created from carbon through controlled technological processes.",
              "Both CVD and HPHT generally begin with a diamond seed.",
              "HPHT uses high pressure, high temperature and a metallic growth environment.",
              "CVD uses activated carbon-rich gases inside a controlled chamber.",
              "The rough crystal must still be cut and polished after growth.",
              "Post-growth treatment may be used to alter colour or improve appearance.",
              "CVD is not automatically better than HPHT, and HPHT is not automatically better than CVD.",
              "Growth method alone does not determine the quality of the finished diamond.",
              "Specialist laboratories can identify growth method and post-growth treatment.",
              "Environmental impact depends partly on the energy source and efficiency of the facility."
            ].map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-[#e2dfd5]">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="font-jost text-sm font-light text-[#3b3b3b]">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Production at a Glance Table */}
        <div className="mb-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown Diamond Production at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Stage</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { stage: "Diamond seed preparation", desc: "A small diamond substrate is selected and prepared" },
                  { stage: "Growth environment", desc: "The seed is placed inside an HPHT press or CVD chamber" },
                  { stage: "Carbon introduction", desc: "Carbon is supplied through a solid source or carbon-containing gas" },
                  { stage: "Crystal growth", desc: "Carbon atoms form diamond around the seed" },
                  { stage: "Crystal removal", desc: "The rough laboratory-grown diamond is removed from the equipment" },
                  { stage: "Assessment", desc: "The rough crystal is inspected and planned" },
                  { stage: "Cutting", desc: "The diamond is shaped and faceted" },
                  { stage: "Polishing", desc: "Facets are polished to manage light effectively" },
                  { stage: "Laboratory testing", desc: "Origin, growth method, treatment and quality may be assessed" },
                  { stage: "Jewellery production", desc: "The finished diamond is selected and set into jewellery" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02]">
                    <td className="p-4 font-semibold text-foreground">{row.stage}</td>
                    <td className="p-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Seed blueprint */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          The Process Begins with a Diamond Seed
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Both major growth methods normally begin with a diamond substrate, commonly called a diamond seed.
          </p>
          <p>
            The seed acts as the structural foundation for new diamond growth. It gives carbon atoms an existing diamond crystal pattern upon which they can form.
          </p>
          <p>
            A diamond seed is not comparable to planting a biological seed. It does not contain a living organism, and it does not grow through a natural reproductive process. It is a precisely prepared piece of diamond material placed inside specialised equipment.
          </p>
          <p>
            The seed must be selected and prepared carefully. Surface quality, orientation and cleanliness can affect how the new crystal develops. GIA explains that both CVD and HPHT use a diamond substrate to provide the crystal blueprint from which the new laboratory-grown diamond develops.
          </p>
        </div>

        {/* Section 2: HPHT */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is the HPHT Diamond-Growth Process?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            HPHT stands for High Pressure High Temperature. This method creates an environment of intense heat and pressure. It was the first commercially successful method used to produce diamonds and remains an important production process.
          </p>
          
          <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5] space-y-4">
            <h4 className="font-cormorant text-xl font-semibold text-foreground uppercase tracking-wide">
              Inside the growth apparatus:
            </h4>
            <ul className="space-y-2 text-sm font-light text-[#5a5a5a]">
              <li>• A diamond seed acting as a blueprint</li>
              <li>• A pure carbon source</li>
              <li>• A metallic solvent or flux (such as iron, nickel or cobalt)</li>
              <li>• A controlled temperature gradient</li>
              <li>• High-pressure equipment capable of reproducing natural mantle forces</li>
            </ul>
          </div>

          <p>
            The carbon source is positioned within a specialised growth cell. Under high temperature and pressure, the metallic material melts and helps dissolve the carbon. Carbon moves through the molten metal environment and crystallises around the seed. Over time, the seed develops into a larger rough diamond crystal.
          </p>
          
          <p>
            <strong>What does an HPHT rough crystal look like?</strong> The rough crystal does not initially resemble a finished jewellery diamond. Its external shape reflects the conditions under which it grew. It may have distinct cuboctahedral crystal faces and growth sectors that become useful during professional identification.
          </p>
          
          <p>
            <strong>Can HPHT introduce inclusions?</strong> Yes. Because metallic materials are involved in the growth environment, some HPHT diamonds can contain microscopic metallic inclusions. Their presence, size and visibility vary and are documented during grading.
          </p>

          {/* IMAGE 2: HPHT Process Diagram */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-are-lab-grown-diamonds-made/32.png"
              alt="HPHT diamond growth process diagram and equipment"
              title="The HPHT Growth Process"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            High Pressure High Temperature (HPHT) reproduces the extreme heat and pressure of the earth to grow crystals.
          </p>
        </div>

        {/* Section 3: CVD */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is the CVD Diamond-Growth Process?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            CVD stands for Chemical Vapour Deposition. Unlike HPHT, CVD does not depend on creating the same extreme pressure environment. It uses a controlled vacuum chamber containing carbon-rich gas.
          </p>
          <p>
            A thin diamond seed or substrate is placed inside the chamber. The chamber is then sealed, and gases—commonly involving hydrogen and a carbon source such as methane—are introduced. Energy (often microwave radiation) is applied to activate the gases, creating a plasma in which carbon-containing molecules break apart. Carbon atoms then settle onto the diamond seed, growing layer by layer into a diamond crystal.
          </p>
          <p>
            <strong>Does CVD create a diamond instantly?</strong> No. Crystal growth requires controlled conditions and careful monitoring. The manufacturer must manage factors such as gas composition, pressure, temperature, energy input, and chamber cleanliness. Growing too quickly can compromise crystal quality.
          </p>
          <p>
            <strong>Why is CVD described as layer-by-layer growth?</strong> CVD growth occurs as carbon is deposited onto the prepared diamond substrate. This creates a layered growth structure. While these patterns are invisible to the eye, advanced spectroscopic instruments can detect them to confirm the CVD method.
          </p>

          {/* IMAGE 3: CVD Process Chamber */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-are-lab-grown-diamonds-made/33.png"
              alt="CVD diamond vacuum chamber layer-by-layer growth"
              title="The CVD Growth Process"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Chemical Vapour Deposition (CVD) grows diamonds layer by layer from carbon-rich plasma gas.
          </p>
        </div>

        {/* CVD vs HPHT Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            CVD vs HPHT: Quick Comparison
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Feature</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">CVD</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">HPHT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { f: "Full name", cvd: "Chemical Vapour Deposition", hpht: "High Pressure High Temperature" },
                  { f: "Starting point", cvd: "Prepared diamond substrate", hpht: "Diamond seed" },
                  { f: "Carbon source", cvd: "Carbon-containing gas", hpht: "Solid carbon source" },
                  { f: "Main environment", cvd: "Activated gas or plasma chamber", hpht: "Intense pressure, heat and metallic flux" },
                  { f: "Growth pattern", cvd: "Diamond develops in layers", hpht: "Diamond crystallises around the seed through a temperature gradient" },
                  { f: "Pressure", cvd: "Lower than HPHT", hpht: "Extremely high" },
                  { f: "Possible growth features", cvd: "Layered growth patterns and trace elements", hpht: "Growth sectors and possible metallic inclusions" },
                  { f: "Post-growth treatment", cvd: "May be used", hpht: "May be used" },
                  { f: "Jewellery suitability", cvd: "Can produce gem-quality diamonds", hpht: "Can produce gem-quality diamonds" },
                  { f: "Automatic quality advantage", cvd: "No", hpht: "No" }
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
        </div>

        {/* Section 4: Sizing and Duration */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide">
          How Long Does a Lab-Grown Diamond Take to Grow?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            There is no single universal production time. Growth time varies according to the growth technology, desired crystal size, growth rate, and equipment efficiency.
          </p>
          <p>
            GIA research indicates that HPHT growth can range from hours to weeks, depending on size and quality. A larger crystal does not merely require a longer uninterrupted run; manufacturers must manage growth stability throughout the cycle to prevent cracks or major impurities.
          </p>
        </div>

        {/* Section 5: What Happens After Crystal Growth? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Happens After Crystal Growth?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Removing the crystal from the reactor or press does not produce a finished jewellery diamond. The rough crystal passes through three additional skilled stages:
          </p>
          
          <div className="space-y-6 mt-6">
            <div>
              <strong className="text-foreground font-semibold font-cormorant text-xl block mb-2">1. Rough Diamond Assessment</strong>
              <p className="text-sm font-light text-[#5a5a5a] leading-relaxed">
                The newly grown crystal is scanned and planned. Cutting software models different options to determine expected finished shapes and facet layout, balancing cut quality, clarity, shape, and carat weight.
              </p>
            </div>
            <div>
              <strong className="text-foreground font-semibold font-cormorant text-xl block mb-2">2. Cutting the Diamond</strong>
              <p className="text-sm font-light text-[#5a5a5a] leading-relaxed">
                The rough crystal is cut using laser technology or traditional diamond saws. It is then shaped and faceted. Popular shapes include Round, Oval, Pear, Emerald, Cushion, Radiant, Princess, Marquise, and Heart.
              </p>
            </div>
            <div>
              <strong className="text-foreground font-semibold font-cormorant text-xl block mb-2">3. Polishing and Finishing</strong>
              <p className="text-sm font-light text-[#5a5a5a] leading-relaxed">
                Each facet is carefully polished. Polishing affects the smoothness and light reflection of the surface. Poor polishing creates micro-lines that interfere with the diamond&apos;s trademark brilliance.
              </p>
            </div>
          </div>

          {/* IMAGE 4: Laser cutting and faceting */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-are-lab-grown-diamonds-made/34.png"
              alt="Rough diamond crystal laser cutting and faceting process"
              title="Cutting and Polishing Lab-Grown Diamonds"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Laser technology and skilled craftsmanship transform the rough diamond crystal into a faceted gemstone.
          </p>
        </div>

        {/* Section 6: Post-growth treatments and grading */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Treatments, Sourcing, and Sustainability
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Can they receive post-growth treatment?</strong> Yes. Some laboratory-grown diamonds receive treatments (like high-pressure annealing) to modify colour or improve transparency. Any treatment is material information that must be disclosed on grading reports.
          </p>
          <p>
            <strong>Are they automatically sustainable?</strong> Not automatically. While lab-grown diamond production avoids mining, the reactors and presses require electricity. The environmental footprint depends heavily on the energy source (e.g. solar/wind vs coal) and the efficiency of the grower&apos;s facility.
          </p>
          <p>
            <strong>Are they made from natural diamonds?</strong> The process begins with a small diamond seed. While the seed provides the crystal blueprint, the finished crystal consists almost entirely of carbon atoms newly crystallised around it.
          </p>
        </div>

        {/* Natural vs Lab Growth Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            How Does the Process Differ from Natural Diamond Formation?
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Stage</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Laboratory-Grown Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Natural Diamond</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "Starting environment", lab: "Manufacturing facility", nat: "Geological environment" },
                  { s: "Growth control", lab: "Managed through technology", nat: "Determined by geological conditions" },
                  { s: "Growth method", lab: "CVD or HPHT", nat: "Natural heat, pressure and chemistry" },
                  { s: "Recovery", lab: "Removed from growth equipment", nat: "Recovered from geological deposits" },
                  { s: "Rough assessment", lab: "Planned for cutting", nat: "Planned for cutting" },
                  { s: "Cutting and polishing", lab: "Required", nat: "Required" },
                  { s: "Origin identification", lab: "Advanced laboratory testing", nat: "Advanced laboratory testing" },
                  { s: "Jewellery setting", lab: "Required", nat: "Required" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.lab}</td>
                    <td className="p-4">{row.nat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            What Should Buyers Check?
          </h2>
          
          {/* IMAGE 5: Buyer Checklist */}
          <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-are-lab-grown-diamonds-made/35.png"
              alt="Buyer checklist for certified laboratory-grown diamond jewellery"
              title="Buyer Checklist"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-6">
            Always verify the growth method, certifications and report numbers before choosing your diamond.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Laboratory-Grown Diamond Buying Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The diamond is clearly described as laboratory-grown or lab-grown.",
                  "The product description identifies CVD or HPHT where known.",
                  "Post-growth treatment is disclosed where relevant.",
                  "Carat weight is clearly stated.",
                  "Total carat weight (TCW) is distinguished from individual stone weight.",
                  "Relevant colour and clarity information are provided.",
                  "The certificate issuer (e.g. IGI or GIA) is identified.",
                  "The report number can be verified online.",
                  "The metal type and purity (e.g., 18k gold or platinum) are disclosed.",
                  "Additional gemstones are identified.",
                  "Product dimensions and availability terms are explained."
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

        {/* Aurelia Royale Callout */}
        <div className="my-12 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h3 className="font-cormorant text-2xl font-semibold text-foreground uppercase tracking-wide mb-3">
            Explore Laboratory-Grown Diamond Jewellery
          </h3>
          <p>
            Aurelia Royale&apos;s collection includes jewellery featuring laboratory-grown diamonds across earrings, bracelets, necklaces, pendants, rings and coordinated designs. When considering a piece, review the product&apos;s design details and verifiable certifications. Explore the Aurelia Royale jewellery collection or contact our team for assistance.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "How are laboratory-grown diamonds made?",
              a: "They are made by creating controlled conditions in which carbon forms diamond around a prepared diamond seed. The two principal methods are CVD and HPHT."
            },
            {
              q: "What does HPHT mean?",
              a: "HPHT means High Pressure High Temperature. The method uses intense heat and pressure, a carbon source, metallic flux and a diamond seed."
            },
            {
              q: "What does CVD mean?",
              a: "CVD means Chemical Vapour Deposition. It uses activated carbon-containing gases to grow diamond in layers on a prepared substrate."
            },
            {
              q: "Do CVD and HPHT produce diamonds?",
              a: "Yes. Both processes can produce gem-quality laboratory-grown diamonds."
            },
            {
              q: "Does the process begin with a diamond seed?",
              a: "Yes. Both primary growth methods generally use a small diamond substrate that provides the crystal structure for new growth."
            },
            {
              q: "Are laboratory-grown diamonds made from carbon?",
              a: "Yes. Carbon atoms form the diamond crystal structure during the growth process."
            },
            {
              q: "How long does a laboratory-grown diamond take to grow?",
              a: "There is no fixed time. Growth can take from hours to weeks depending on the method, equipment, size and intended quality."
            },
            {
              q: "Are laboratory-grown diamonds ready for jewellery immediately after growth?",
              a: "No. The rough crystal must be assessed, cut, faceted, polished and tested before it can be selected for jewellery."
            },
            {
              q: "Can laboratory-grown diamonds receive treatment?",
              a: "Yes. Some receive post-growth treatment to alter or improve colour. Relevant treatment should be disclosed."
            },
            {
              q: "Is CVD better than HPHT?",
              a: "Not automatically. Both methods can produce diamonds of different qualities, so the individual diamond should be assessed."
            },
            {
              q: "Can laboratories identify how a diamond was grown?",
              a: "Yes. Specialist laboratories use advanced equipment to identify laboratory-grown origin and often the growth method."
            },
            {
              q: "Are all laboratory-grown diamonds identical?",
              a: "No. They vary in colour, clarity, size, treatment, cut and visual performance."
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

        {/* Final Thought */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            Final Thought
          </h4>
          <p>
            A laboratory-grown diamond does not emerge from a machine as a finished piece of jewellery. Its journey begins with a prepared diamond seed and a carefully controlled growth environment. Carbon forms the rough crystal through CVD or HPHT. The crystal must then be examined, cut, polished, tested and selected before it can become part of a finished jewellery design.
          </p>
          <p className="mt-4">
            Technology creates the diamond material. Skilled workmanship determines what that material becomes.
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
