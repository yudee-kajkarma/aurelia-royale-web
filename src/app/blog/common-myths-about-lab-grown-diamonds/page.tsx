import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "15 Lab-Grown Diamond Myths Buyers Should Stop Believing",
  description: "Separate fact from fiction with 15 common lab-grown diamond myths covering authenticity, durability, sparkle, certification, sustainability and value.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/",
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
      "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/common-lab-grown-diamond-myths.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/common-lab-grown-diamond-myths.webp",
      "width": 1600,
      "height": 900,
      "caption": "Common lab-grown diamond myths and facts"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/",
      "name": "15 Lab-Grown Diamond Myths Buyers Should Stop Believing",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#article",
      "headline": "Common Myths About Lab-Grown Diamonds",
      "description": "Separate fact from fiction with common lab-grown diamond myths covering authenticity, durability, sparkle, certification, sustainability and value.",
      "url": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#primaryimage"
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
        "lab-grown diamond myths",
        "common myths about lab-grown diamonds",
        "are lab-grown diamonds fake",
        "are lab-grown diamonds durable",
        "lab-grown diamond facts"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#breadcrumb",
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
          "name": "Common Myths About Lab-Grown Diamonds",
          "item": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/common-myths-about-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds are genuine crystallised-carbon diamonds. Their origin is laboratory production rather than geological formation."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as cubic zirconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cubic zirconia has a different composition, crystal structure, hardness and optical behaviour."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as moissanite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Moissanite consists primarily of silicon carbide and displays different optical properties."
          }
        },
        {
          "@type": "Question",
          "name": "Can a jeweller identify a lab-grown diamond by looking at it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reliable separation from a mined diamond generally requires suitable training and specialist equipment. Appearance alone is insufficient."
          }
        },
        {
          "@type": "Question",
          "name": "Are all lab-grown diamonds flawless?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds can contain inclusions, blemishes, growth features and different colour characteristics."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds lose their sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They do not lose a temporary sparkling coating. Dirt, oil and product residue can reduce brilliance until the jewellery is cleaned."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds become cloudy over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not through ordinary ageing. Surface residue is a more common cause of haze, although internal characteristics or damage may affect individual stones."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds fragile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They have diamond's exceptional hardness, although any diamond can chip following a strong impact."
          }
        },
        {
          "@type": "Question",
          "name": "Does every lab-grown diamond have a certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Significant centre stones may have individual reports, while small accent diamonds are frequently sold without separate documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds always environmentally friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Environmental impact depends on energy, production, cutting, metal sourcing, transport and other factors."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A resale market can exist, but offers may be significantly below the original retail price and depend on demand, quality, metal and condition."
          }
        }
      ]
    }
  ]
};

export default function Blog15Page() {
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
            Common Myths About Lab-Grown Diamonds
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Myth-Busting Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/common-myths-about-lab-grown-diamonds/15 (1).png"
            alt="Common lab-grown diamond myths and facts"
            title="15 Lab-Grown Diamond Myths"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Uncovering common misconceptions about lab-grown diamond authenticity, durability, and markets.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds have moved rapidly from a specialist product to a widely available choice for earrings, necklaces, bracelets, rings and other fine jewellery.
          </p>
          <p>
            That growth has also created a confusing mixture of accurate information, outdated assumptions and exaggerated marketing claims.
          </p>
          <p>
            At one extreme, lab-grown diamonds are dismissed as fake stones that lose their sparkle. At the other, they are presented as flawless, environmentally harmless and financially equivalent to mined diamonds.
          </p>
          <p>
            Neither position provides buyers with the complete picture.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Lab-grown diamonds are genuine diamonds produced using CVD or HPHT technology. They have essentially the same chemical, physical and optical properties as mined diamonds, but their origin, growth conditions, market supply and pricing are different.
            They are not automatically flawless, certified, sustainable or guaranteed to retain their purchase price. Their quality and suitability must be evaluated diamond by diamond and piece by piece.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown Diamond Myths at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Myth</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">The reality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { m: "Lab-grown diamonds are fake", r: "They are genuine crystallised-carbon diamonds" },
                  { m: "They are cubic zirconia", r: "Cubic zirconia is a different material" },
                  { m: "Anyone can identify one visually", r: "Reliable identification generally requires specialist equipment" },
                  { m: "Every lab-grown diamond is flawless", r: "They can contain inclusions and growth features" },
                  { m: "They do not sparkle properly", r: "Cut quality determines light performance" },
                  { m: "They become cloudy with age", r: "Surface residue is a more common cause of haze" },
                  { m: "They are fragile", r: "They have diamond’s hardness but can still chip" },
                  { m: "CVD is fake but HPHT is real", r: "Both methods can produce genuine diamond" },
                  { m: "Treated diamonds are unstable", r: "Properly disclosed post-growth treatment does not make them imitation diamonds" },
                  { m: "Every stone has a certificate", r: "Many small diamonds are sold without individual reports" },
                  { m: "A report guarantees the entire piece", r: "It may evaluate only one loose diamond" },
                  { m: "Every lab-grown diamond is sustainable", r: "Impact depends on energy and production details" },
                  { m: "They have absolutely no resale value", r: "Resale may exist, but expectations should be cautious" },
                  { m: "They are identical to mined diamonds in every way", r: "Material properties are similar, but origin and markets differ" },
                  { m: "They are unsuitable for fine jewellery", r: "Properly selected stones work well in fine jewellery" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.m}</td>
                    <td className="p-4">{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Myths 1-5 */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Myths 1 to 5: Authenticity, Simulants and Visuals
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Myth 1: Lab-grown diamonds are fake diamonds.</strong> They are not fake stones; they are diamonds made from crystallised carbon under controlled conditions. GIA states that laboratory-grown diamonds possess essentially the same chemical, physical and optical properties as their natural counterparts.
          </p>
          <p>
            <strong>Myth 2: Lab-grown diamonds are the same as cubic zirconia.</strong> Cubic zirconia is not diamond; it is a manufactured crystalline material with different hardness, density, refractive behavior, and wear characteristics. Lab diamonds rank 10 on the Mohs scale, while CZ scratches easily.
          </p>
          <p>
            <strong>Myth 3: Lab-grown diamonds and moissanite are the same.</strong> Moissanite consists primarily of silicon carbide and displays double refraction (more coloured flashes), whereas diamond displays single refraction.
          </p>
          <p>
            <strong>Myth 4: Anyone can identify a lab-grown diamond by looking at it.</strong> A buyer cannot distinguish a high-quality lab diamond from a mined diamond using the unaided eye. GIA notes that separation requires specialized laboratory instruments that analyze growth lines and spectroscopic properties.
          </p>
          <p>
            <strong>Myth 5: Every lab-grown diamond is flawless.</strong> Controlled growth does not guarantee perfect clarity or colour. Lab diamonds contain inclusions like pinpoints, clouds, metallic crystals, and growth graining. Carat and origin do not dictate clarity.
          </p>

          {/* IMAGE 2: Loupe inspection */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/common-myths-about-lab-grown-diamonds/15 (2).png"
              alt="Examining loose diamonds under professional loupe magnification"
              title="Visual inspection and authenticity"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Laboratory-grown diamonds contain identical optical properties to natural diamonds; sight alone cannot differentiate their origins.
          </p>
        </div>

        {/* Section 2: Myths 6-10 */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Myths 6 to 10: Sparkle, Durability and Growth Methods
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Myth 6: Lab-grown diamonds do not sparkle.</strong> A well-cut lab-grown diamond displays identical brightness, fire, and scintillation to a mined diamond. Cut quality—not origin—dictates sparkle.
          </p>
          <p>
            <strong>Myth 7: Lab-grown diamonds lose their sparkle permanently.</strong> They do not have temporary sparkling coatings. A dull diamond is simply dirty, as diamond attracts grease and finger oils. Cleanings restore original fire.
          </p>
          <p>
            <strong>Myth 8: Lab-grown diamonds become cloudy after a few years.</strong> They do not turn milky with age. Any cloudiness is surface dirt, hard water build-up, or internal inclusions present from the start.
          </p>
          <p>
            <strong>Myth 9: Lab-grown diamonds are fragile.</strong> They possess exceptional scratch-resistance, but can still chip if hit at a vulnerable cleavage angle. Keep settings in good repair and remove rings during heavy work.
          </p>
          <p>
            <strong>Myth 10: CVD diamonds are fake, while HPHT diamonds are real.</strong> Both CVD (Chemical Vapour Deposition) and HPHT (High Pressure, High Temperature) grow genuine diamond crystal using different technologies.
          </p>

          {/* IMAGE 3: Growth chambers */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/common-myths-about-lab-grown-diamonds/15 (3).png"
              alt="CVD and HPHT growth seeds and technical chambers"
              title="CVD and HPHT Technological Growth"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Both chemical vapour deposition and high-pressure heating grow genuine diamond crystal from carbon seeds.
          </p>
        </div>

        {/* Section 3: Myths 11-15 */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Myths 11 to 18: Treatments, Reports and Markets
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Myth 11: Post-growth treatment makes a diamond fake.</strong> Post-growth treatments (annealing) to improve colour do not change the diamond material. However, all treatments must be disclosed.
          </p>
          <p>
            <strong>Myth 12: Every lab-grown diamond comes with a certificate.</strong> Individual reports are practical for significant centre diamonds, but small accent diamonds (melee) are sold in bulk without separate documents.
          </p>
          <p>
            <strong>Myth 13: A report guarantees the quality of the jewellery.</strong> A loose-diamond report evaluates only the submitted gemstone, not the metal fineness, safety clasps, or mount workmanship of the finished piece.
          </p>
          <p>
            <strong>Myth 14: Every lab-grown diamond is environmentally friendly.</strong> Growing diamonds requires significant electricity. Environmental impact depends on the grower&apos;s energy source, efficiency, and carbon offset details.
          </p>
          <p>
            <strong>Myth 15: Lab-grown diamonds have no resale value whatsoever.</strong> Reselling lab diamonds is possible, but resale offers are often substantially below original retail prices due to shifting wholesale supply.
          </p>
          <p>
            <strong>Myth 16: Lab-grown and mined diamonds are identical in every way.</strong> While chemically and optically similar, they differ in origin, rarity, market behaviour, and trace growth structures that gemmologists can detect.
          </p>
          <p>
            <strong>Myth 17: Lab-grown diamonds are unsuitable for fine jewellery.</strong> With Mohs 10 hardness, they are perfectly suited for gold/platinum mounts, provided appropriate care and settings protect them from heavy workouts or chores.
          </p>
          <p>
            <strong>Myth 18: All lab-grown diamonds are basically the same.</strong> Diamonds of the same carat weight vary extensively in colour, clarity, cut proportions, and optical transparency. Complete specs and visual assets are essential.
          </p>

          {/* IMAGE 4: Certificates */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/common-myths-about-lab-grown-diamonds/15 (4).png"
              alt="Certified loose diamonds and grading reports details"
              title="Grading Reports and Quality Disclosures"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Independent grading reports verify critical measurements and quality nuances for larger diamonds.
          </p>
        </div>

        {/* Evaluation checklist section */}
        <div className="my-16 space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h3 className="font-cormorant text-2xl font-semibold text-foreground uppercase tracking-wide">
            How to Evaluate Lab-Grown Diamond Claims
          </h3>
          <p>
            Before accepting a statement made on a product page or advertisement, ask whether it is:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Specific:</strong> &quot;Produced using CVD&quot; is more useful than vague marketing terms like &quot;conscious stone&quot;.</li>
            <li><strong>Verifiable:</strong> Independent grading reports and legal hallmarks are more meaningful than unsupported badges.</li>
            <li><strong>Qualified:</strong> Specific details (e.g. &quot;renewable electricity at the growth facility&quot;) are better than claiming a finished piece is completely carbon-neutral.</li>
          </ul>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Buyer Evaluation Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before Purchasing Lab-Grown Diamonds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "The gemstone is clearly disclosed as laboratory-grown.",
                  "CVD or HPHT growth method and any treatments are documented.",
                  "Separate colour, clarity, cut, and carat weights are provided.",
                  "An independent grading report (GIA/IGI) is supplied for loose centre stones.",
                  "The precious metal composition and fineness are explicitly stated.",
                  "Workmanship warranty and return conditions are clear."
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
            Lab-grown diamonds are genuine diamonds, but they should not be surrounded by exaggerated promises. They are not cubic zirconia or temporary sparkling simulants, nor are they automatically carbon-neutral or guaranteed to retain retail price. A reliable purchase rests on clear disclosure, complete specifications, and independent grading documentation.
          </p>
          <p className="mt-4">
            At Aurelia Royale, we provide certified lab-grown diamond jewellery with full disclosure of growth methods, treatments, and metal standards.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are lab-grown diamonds fake?",
              a: "No. Lab-grown diamonds are genuine crystallised-carbon diamonds. Their origin is laboratory production rather than geological formation."
            },
            {
              q: "Are lab-grown diamonds the same as cubic zirconia?",
              a: "No. Cubic zirconia has a different composition, structure, hardness and optical behaviour."
            },
            {
              q: "Are lab-grown diamonds the same as moissanite?",
              a: "No. Moissanite consists primarily of silicon carbide and displays different optical properties."
            },
            {
              q: "Can a jeweller identify a lab-grown diamond by looking at it?",
              a: "Reliable separation from a mined diamond generally requires suitable training and specialist equipment. Appearance alone is insufficient."
            },
            {
              q: "Are all lab-grown diamonds flawless?",
              a: "No. Lab-grown diamonds can contain inclusions, blemishes, growth features and different colour characteristics."
            },
            {
              q: "Do lab-grown diamonds lose their sparkle?",
              a: "They do not lose a temporary sparkling coating. Dirt, oil and product residue can reduce brilliance until the jewellery is cleaned."
            },
            {
              q: "Do lab-grown diamonds become cloudy over time?",
              a: "Not through ordinary ageing. Surface residue is a more common cause of haze, although internal characteristics or damage may affect individual stones."
            },
            {
              q: "Are lab-grown diamonds fragile?",
              a: "No. They have diamond's exceptional hardness. However, any diamond can chip following a strong impact."
            },
            {
              q: "Are CVD diamonds real diamonds?",
              a: "Yes. CVD is one of the established methods used to produce genuine laboratory-grown diamond crystal."
            },
            {
              q: "Does every lab-grown diamond have a certificate?",
              a: "No. Significant centre stones may have individual reports, while small accent diamonds are frequently sold without separate documentation."
            },
            {
              q: "Are lab-grown diamonds always environmentally friendly?",
              a: "No. Environmental impact depends on energy, production, cutting, metal sourcing, transport and other factors."
            },
            {
              q: "Do lab-grown diamonds have resale value?",
              a: "A resale market can exist, but offers may be significantly below the original retail price and depend on current demand, quality, metal and condition."
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
            Discover Honest Excellence at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Full material disclosure and verified grading standards for all our laboratory-grown diamond jewellery.
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
