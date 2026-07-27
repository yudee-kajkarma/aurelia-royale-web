import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Can Lab-Grown Diamonds Become Cloudy? Causes & Fixes",
  description: "Learn why a lab-grown diamond may look cloudy, how to distinguish surface residue from internal haze or damage, and whether cleaning can restore it.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/",
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
      "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/can-lab-grown-diamonds-become-cloudy.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/can-lab-grown-diamonds-become-cloudy.webp",
      "width": 1600,
      "height": 900,
      "caption": "Clear and cloudy-looking lab-grown diamonds compared"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#webpage",
      "url": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/",
      "name": "Can Lab-Grown Diamonds Become Cloudy? Causes & Fixes",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#article",
      "headline": "Can Lab-Grown Diamonds Become Cloudy?",
      "description": "Learn why a lab-grown diamond may look cloudy, how to distinguish surface residue from internal haze or damage, and whether cleaning can restore it.",
      "url": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#primaryimage"
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
        "can lab-grown diamonds become cloudy",
        "cloudy lab-grown diamond",
        "milky lab-grown diamond",
        "hazy lab-grown diamond",
        "cleaning lab-grown diamonds"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#breadcrumb",
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
          "name": "Can Lab-Grown Diamonds Become Cloudy?",
          "item": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/can-lab-grown-diamonds-become-cloudy/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds become cloudy over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds do not naturally turn cloudy as they age. Surface residue and dirt are more common reasons for a gradual hazy appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my lab-grown diamond suddenly look cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A sudden change is commonly caused by lotion, soap, oil or debris beneath the setting. If cleaning does not help, have the jewellery checked for damage."
          }
        },
        {
          "@type": "Question",
          "name": "Can a cloudy lab-grown diamond be cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cleaning can correct haze caused by surface contamination. It cannot remove inclusions or growth characteristics located inside the diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Do CVD diamonds become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CVD diamonds do not inherently become cloudy with age. Individual diamonds can have different clarity and growth characteristics and should be assessed separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can HPHT diamonds become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HPHT diamonds do not normally develop cloudiness over time. Dirt, internal characteristics, cutting or damage may affect their appearance."
          }
        },
        {
          "@type": "Question",
          "name": "What is a cloud inclusion in a diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A cloud is a grouping of tiny clarity characteristics, often pinpoints. Small clouds may have no visible effect, while dense or extensive clouds can sometimes reduce transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Does a low clarity grade always make a diamond cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Clarity characteristics differ in nature, size and location. Some lower-clarity diamonds remain eye-clean."
          }
        },
        {
          "@type": "Question",
          "name": "Can poor cut make a diamond look cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Poor cut generally makes a diamond look dark or lifeless rather than genuinely milky, although both conditions can reduce its apparent brightness."
          }
        },
        {
          "@type": "Question",
          "name": "Can toothpaste clean a cloudy diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Toothpaste should not be used because its abrasive ingredients can scratch precious-metal settings. Use mild soap, warm water and a soft brush."
          }
        },
        {
          "@type": "Question",
          "name": "Can heat make a lab-grown diamond cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ordinary temperatures will not. Extreme heat from a fire or improper torch exposure can damage the diamond's surface and create a cloudy appearance."
          }
        }
      ]
    }
  ]
};

export default function Blog12Page() {
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
            Can Lab-Grown Diamonds Become Cloudy?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Causes &amp; Fixes • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/can-lab-grown-diamonds-become-cloudy/12 (1).png"
            alt="Clear and cloudy-looking lab-grown diamonds compared"
            title="Can Lab-Grown Diamonds Become Cloudy?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          A lab-grown diamond should remain highly transparent; haziness is typically caused by surface deposits.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            A beautifully cut diamond should look bright, transparent and lively. It can therefore be worrying when a lab-grown diamond begins to look cloudy, milky or less brilliant than it did before.
          </p>
          <p>
            The good news is that a lab-grown diamond does not normally become cloudy simply because it is getting older. In most cases, the cloudy appearance is caused by oil, soap, skincare products or dirt collecting on the diamond—particularly underneath it.
          </p>
          <p>
            However, persistent cloudiness can sometimes result from internal clarity characteristics, poor transparency, damage or even the stone being mistaken for a diamond simulant.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              Lab-grown diamonds do not ordinarily turn cloudy with age. They are made from crystallised carbon and have the same fundamental optical and physical properties as mined diamonds.
            </p>
            <p>
              If a lab-grown diamond suddenly looks cloudy, surface residue or dirt trapped beneath the setting is the most likely cause. If it remains hazy after professional cleaning, the stone may have internal clarity characteristics, a transparency issue or, more rarely, surface damage that requires professional examination.
            </p>
          </div>
        </div>

        {/* Description definitions */}
        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-12">
          <h3 className="font-cormorant text-2xl font-semibold text-foreground uppercase tracking-wide">
            What Does a Cloudy Diamond Look Like?
          </h3>
          <p>
            &quot;Cloudy&quot; is an informal description rather than a single gemmological condition. Buyers may use the word to describe a diamond that appears:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>White or milky inside.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Covered by a faint greasy or rainbow-like film.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Less transparent than expected.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Clear from above but noticeably dirty underneath.</span>
            </li>
          </ul>
          <p>
            Before deciding that the diamond itself is cloudy, it is important to separate transparency from sparkle. A diamond can be transparent but lack brilliance because its surface is dirty or its cut does not return light effectively. Conversely, a diamond may be clean and well cut but have internal characteristics that reduce its transparency.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Why a Lab-Grown Diamond May Look Cloudy
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What you see</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Possible Cause</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Can it be corrected?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "Greasy or rainbow-like film", c: "Skin oil, lotion or product residue", f: "Usually, with careful cleaning" },
                  { s: "Cloudiness mainly underneath", c: "Dirt trapped behind the diamond", f: "Usually, with cleaning" },
                  { s: "Persistent haze inside the stone", c: "Dense inclusions or internal graining", f: "Not through cleaning" },
                  { s: "Diamond looks dark rather than milky", c: "Cut or lighting conditions", f: "Lighting can change; cut cannot" },
                  { s: "White mark after an impact", c: "Chip, abrasion or fracture", f: "Requires professional assessment" },
                  { s: "White surface after extreme heat", c: "Heat or fire damage", f: "May require repolishing or recutting" },
                  { s: "Stone has gradually become scratched", c: "It may be a simulant rather than diamond", f: "Material should be verified" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.c}</td>
                    <td className="p-4">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Surface contamination */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Surface Contamination and Trap Debris
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            The most common explanation is not a permanent change inside the diamond. It is a film on its surface. Diamonds attract grease. Fingerprints, natural skin oils, moisturiser, sunscreen, soap and cosmetics can adhere to the facets. Dust then collects on the oily surface, reducing the amount of light that can travel through and reflect.
          </p>
          <p>
            GIA explains that even oil transferred by touching a diamond can collect dirt and reduce its visual appeal. It recommends gentle cleaning with water, mild dish soap and a soft, clean brush.
          </p>
          <p>
            <strong>Dirt Trapped Beneath the Setting:</strong> The pavilion (the lower part of the stone) plays an essential role in returning light. In rings, earrings and pendants, this area is often difficult to reach during ordinary cleaning. Soap, oil and dust accumulate between the diamond and its setting, making the whole stone look cloudy even if the top is wiped clean. This is particularly common in halo settings, clusters, and closed back mounts.
          </p>

          {/* IMAGE 2: Surface Contamination */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/can-lab-grown-diamonds-become-cloudy/12 (2).png"
              alt="Removing skin creams and oil film from diamond jewellery surface"
              title="Surface Contamination and Oils"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Daily products like hand creams and soaps form a film that gathers dust, making the stone look milky.
          </p>
        </div>

        {/* Section 2: Internal Cloud Inclusions */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Internal Inclusions and Growth Features
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            In gemmology, a &quot;cloud&quot; is a grouping of extremely small pinpoints or other microscopic clarity characteristics. A small cloud has no visible effect, but a dense or extensive cloud can influence overall transparency.
          </p>
          <p>
            Lab-grown diamonds can contain clarity characteristics created during their growth process. As with mined diamonds, their effect depends on their size, number, location, nature and visibility. A diamond with internal cloudiness does not suddenly develop it during wear; the characteristic was present when the diamond was graded and purchased.
          </p>
          <p>
            <strong>Does a clarity grade reveal cloudiness?</strong> The clarity grade is helpful, but the grade alone does not describe every aspect of a diamond&apos;s appearance. Two diamonds with the same clarity grade may contain different types and arrangements of inclusions. Make sure the seller confirms that the stone is eye-clean and transparent.
          </p>
          <p>
            <strong>Growth Graining and Strain:</strong> CVD and HPHT growth patterns can leave microscopic patterns or strain structures. GIA research highlights that characteristics of laboratory-grown diamonds vary according to growth method and subsequent treatment. Many lab diamonds have excellent transparency, but poor growth runs can look hazy.
          </p>

          {/* IMAGE 3: Clouds and graining */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/can-lab-grown-diamonds-become-cloudy/12 (3).png"
              alt="Examining microscopic pinpoint cloud inclusions inside a lab diamond"
              title="Cloud Inclusions and Graining"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Microscopic clouds and internal graining are growth-related features present from the beginning.
          </p>
        </div>

        {/* Section 3: Poor Cut, Damage, or Simulants */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Poor Cut, Damage, or Material Mismatch
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A poorly cut diamond can appear dull, dark or lifeless even when it has good clarity. This is not technically cloudiness—it is a light-performance problem. When the proportions and facet angles do not work well together, light escapes from the bottom or sides instead of returning through the top. A clean diamond will continue to show the same light-performance limitations.
          </p>
          <p>
            <strong>Damage from Impact or Heat:</strong> A hard impact at a vulnerable angle can chip or fracture diamond, creating a localized white mark or frosted edge. Furthermore, extreme heat from a fire or improper torch exposure during repair can burn the diamond&apos;s surface, causing oxidation and white discolouration.
          </p>
          <p>
            <strong>Simulant Confusion:</strong> Lab-grown diamonds should not be confused with cubic zirconia or other simulants. Simulants are softer and accumulate surface scratches over time, giving them a permanently dull or cloudy appearance that cannot be cleaned away.
          </p>
        </div>

        {/* Section 4: Cleaning Guide */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Can Cleaning Fix a Cloudy Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Cleaning can fix cloudiness caused by surface oil, soap, lotion and trapped dirt. It cannot remove characteristics located inside the diamond. Follow these safe cleaning steps:
          </p>
          <ol className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-decimal">
            <li>Check whether the stone or setting appears loose or damaged. Do not scrub if prongs are weak.</li>
            <li>Soak briefly in a bowl of warm water with a few drops of mild washing-up liquid.</li>
            <li>Use a new, very soft toothbrush to clean around and underneath the diamond setting.</li>
            <li>Rinse carefully in a separate bowl and dry with a clean, microfibre lint-free cloth.</li>
          </ol>
          <p>
            Do not use toothpaste, abrasives, or chlorine bleach. If a newly purchased diamond remains cloudy after cleaning, check the grading database or request a professional appraiser inspection.
          </p>

          {/* IMAGE 4: Brushing underside */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/can-lab-grown-diamonds-become-cloudy/12 (4).png"
              alt="Using soft toothbrush and mild soapy water to clean the diamond pavilion"
              title="Cleaning the pavilion underside"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Brushing the pavilion underside thoroughly removes hidden debris to restore transparency.
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
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Cloudiness Prevention Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Confirm the diamond is described as laboratory-grown (not CZ or moissanite).",
                  "Verify the independent GIA/IGI report number online.",
                  "Review the clarity grading and growth treatment comments.",
                  "Ask the seller to confirm the diamond is eye-clean and transparent.",
                  "High-resolution videos are checked for any apparent haze.",
                  "A return period is available to inspect the stone in natural light."
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
            A lab-grown diamond should not become cloudy simply because it ages. Most sudden or gradual haziness is caused by oil, soap, cosmetics or dirt accumulating on the surface and beneath the setting. Persistent cloudiness is usually linked to internal inclusions, cut proportions, or damage.
          </p>
          <p className="mt-4">
            At Aurelia Royale, every diamond is selected for high optical transparency, backed by verifiable independent grading.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Can lab-grown diamonds become cloudy over time?",
              a: "Not under normal conditions. Lab-grown diamonds do not naturally turn cloudy as they age. Surface residue and dirt are more common reasons for a gradual hazy appearance."
            },
            {
              q: "Why does my lab-grown diamond suddenly look cloudy?",
              a: "A sudden change is commonly caused by lotion, soap, oil or debris beneath the setting. If cleaning does not help, have the jewellery checked for damage."
            },
            {
              q: "Can a cloudy lab-grown diamond be cleaned?",
              a: "Cleaning can correct haze caused by surface contamination. It cannot remove inclusions or growth characteristics located inside the diamond."
            },
            {
              q: "Do CVD diamonds become cloudy?",
              a: "CVD diamonds do not inherently become cloudy with age. Individual diamonds can have different clarity and growth characteristics and should be assessed separately."
            },
            {
              q: "Can HPHT diamonds become cloudy?",
              a: "HPHT diamonds do not normally develop cloudiness over time. Dirt, internal characteristics, cutting or damage may affect their appearance."
            },
            {
              q: "What is a cloud inclusion in a diamond?",
              a: "A cloud is a grouping of tiny clarity characteristics, often pinpoints. Small clouds may have no visible effect, while dense or extensive clouds can sometimes reduce transparency."
            },
            {
              q: "Does a low clarity grade always make a diamond cloudy?",
              a: "No. Clarity characteristics differ in nature, size and location. Some lower-clarity diamonds remain eye-clean."
            },
            {
              q: "Can poor cut make a diamond look cloudy?",
              a: "Poor cut generally makes a diamond look dark or lifeless rather than genuinely milky, although both conditions can reduce its apparent brightness."
            },
            {
              q: "Can toothpaste clean a cloudy diamond?",
              a: "Toothpaste should not be used because its abrasive ingredients can scratch precious-metal settings. Use mild soap, warm water and a soft brush."
            },
            {
              q: "Can heat make a lab-grown diamond cloudy?",
              a: "Ordinary temperatures will not. Extreme heat from a fire or improper torch exposure can damage the diamond's surface and create a cloudy appearance."
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
            Discover Exceptional Transparency at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Every laboratory-grown diamond in our fine collections is selected for high optical transparency, backed by verifiable independent grading.
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
