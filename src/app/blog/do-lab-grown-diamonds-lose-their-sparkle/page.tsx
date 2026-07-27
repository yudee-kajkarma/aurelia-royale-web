import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Do Lab-Grown Diamonds Lose Their Sparkle?",
  description: "Learn why lab-grown diamonds can look dull, whether they permanently lose brilliance and how cleaning, cut, lighting and maintenance restore sparkle.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/",
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
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#webpage",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/",
      "name": "Do Lab-Grown Diamonds Lose Their Sparkle?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-lose-sparkle.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-lose-sparkle.webp",
      "width": 1600,
      "height": 900,
      "caption": "Clean and dull-looking laboratory-grown diamonds compared"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#webpage"
      },
      "headline": "Do Lab-Grown Diamonds Lose Their Sparkle?",
      "description": "Learn why lab-grown diamonds can look dull, whether they permanently lose brilliance and how cleaning, cut, lighting and maintenance restore sparkle.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "do lab-grown diamonds lose their sparkle",
        "why does my lab-grown diamond look dull",
        "how to make a lab-grown diamond sparkle",
        "do lab-grown diamonds lose brilliance",
        "clean lab-grown diamond jewellery",
        "diamond sparkle"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#breadcrumb",
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
          "name": "Do Lab-Grown Diamonds Lose Their Sparkle?",
          "item": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-lose-their-sparkle/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds lose their sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They do not permanently lose their ability to reflect light merely because they are laboratory-grown."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my lab-grown diamond look dull?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common causes are finger oils, soap, skincare products, dirt beneath the setting or different lighting."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds sparkle like natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both display diamond's characteristic brilliance, fire and scintillation when well cut."
          }
        },
        {
          "@type": "Question",
          "name": "Can cleaning restore diamond sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cleaning can restore sparkle when surface dirt or oil is responsible. It cannot correct poor cut or internal inclusions."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my diamond look oily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diamonds attract grease, allowing oils from fingers, lotion and cosmetics to adhere to their surfaces."
          }
        },
        {
          "@type": "Question",
          "name": "Does cut affect sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cut proportions, symmetry and polish strongly influence how effectively a diamond interacts with light."
          }
        },
        {
          "@type": "Question",
          "name": "Is toothpaste safe for cleaning diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Toothpaste can scratch precious metal and damage the jewellery's finish."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an ultrasonic cleaner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only with caution. Ultrasonic vibration can loosen stones or affect vulnerable jewellery and should not be used without checking the piece."
          }
        },
        {
          "@type": "Question",
          "name": "Does perfume reduce sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perfume and skincare products can create a film that reduces visible brilliance."
          }
        },
        {
          "@type": "Question",
          "name": "What if my diamond remains dull after cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Have it professionally inspected for trapped dirt, weak cut, inclusions, loose settings, damage or incorrect material identification."
          }
        }
      ]
    }
  ]
};

export default function Blog11Page() {
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
            Do Lab Diamonds Lose Sparkle?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Optical Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (1).png"
            alt="Clean and dull-looking laboratory-grown diamonds compared"
            title="Do Lab-Grown Diamonds Lose Their Sparkle?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          A lab-grown diamond does not permanently lose brilliance; surface build-up is the most common cause of dullness.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds do not permanently lose their natural ability to reflect and disperse light merely because they were created in a laboratory.
          </p>
          <p>
            If a laboratory-grown diamond looks less brilliant than before, the most common explanation is a film of oil, soap, lotion or other residue on its surface. Lighting, cut quality, a dirty underside, a loose setting or physical damage may also affect its appearance.
          </p>
          <p>
            Cleaning can restore brilliance when surface build-up is responsible. However, cleaning cannot correct poor cut quality, significant inclusions or damage.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              A lab-grown diamond does not normally lose its sparkle with age. It may look dull because of:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Finger oils, soap residue, cosmetics, and skincare lotions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Hard-water deposits or dust gathered under the open-back setting.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Weak cut proportions or change in surrounding lighting environments.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Loose settings or physical chips on the facets.</span>
              </li>
            </ul>
            <p className="mt-3">
              Start with gentle cleaning and neutral lighting. If the diamond still appears noticeably different, have the jewellery professionally inspected.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Why a Diamond May Look Less Sparkly
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Possible Cause</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Is it usually temporary?</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What to do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { c: "Finger oils", t: "Yes", d: "Clean gently" },
                  { c: "Soap or lotion", t: "Yes", d: "Remove surface residue" },
                  { c: "Hard-water deposits", t: "Usually", d: "Professional cleaning may help" },
                  { c: "Dirt beneath the diamond", t: "Yes", d: "Clean the back of the setting" },
                  { c: "Different lighting", t: "Yes", d: "Compare in several environments" },
                  { c: "Poor cut quality", t: "No", d: "Evaluate original light performance" },
                  { c: "Dense inclusions / graining", t: "No", d: "Review the grading report" },
                  { c: "Loose diamond", t: "Requires repair", d: "Stop wearing and inspect settings" },
                  { c: "Chipped facet or girdle", t: "No", d: "Seek professional assessment" },
                  { c: "Scratched surrounding metal", t: "Metal issue", d: "Refinish the setting if appropriate" },
                  { c: "Rhodium plating wear", t: "Metal issue", d: "Consider replating white gold" },
                  { c: "Stone is not diamond", t: "No", d: "Verify report and material identity" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.c}</td>
                    <td className="p-4">{row.t}</td>
                    <td className="p-4">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: What is sparkle? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Does &quot;Sparkle&quot; Actually Mean?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Sparkle is a general consumer term covering three main aspects of light performance:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Brightness:</strong> The white light reflected internally and externally from the diamond.</li>
            <li><strong>Fire:</strong> The flashes of spectral color created when light separates into rainbow hues.</li>
            <li><strong>Scintillation:</strong> The pattern of light and dark areas and the sharp flashes seen when the stone, light source, or observer moves.</li>
          </ul>
          <p>
            GIA explains that these characteristics depend heavily on the diamond&apos;s cut and facet proportions. A well-cut laboratory-grown diamond can display identical brilliance, fire, and scintillation to a natural diamond because they share the same carbon structure.
          </p>

          {/* IMAGE 2: Sparkle light path */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (2).png"
              alt="Light paths reflecting through pavilion facets of a round brilliant diamond"
              title="Understanding Diamond Light Performance"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Optically precise cuts ensure white brilliance, spectral fire, and lively scintillation.
          </p>
        </div>

        {/* Section 2: Why diamonds attract oil */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Why Do Diamonds Attract Oil and Dullness?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Diamonds have a natural affinity for grease and oils. Normal handling transfers oils from fingers, while skincare products, soaps, and cosmetics build up a surface film. This issue is particularly visible on large table facets, rings handled frequently, and open-back settings where dirt gets trapped underneath.
          </p>
          <p>
            The lower portion of the diamond (the pavilion) often collects more residue than the visible top. Light enters the top, reflects off the pavilion facets, and returns. If the pavilion is coated in dust or oil, the light escapes rather than reflecting, making the stone appear flat and lifeless.
          </p>

          {/* IMAGE 3: Underside cleaning */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (3).png"
              alt="Cleaning the undersides and basket mounts of diamond rings"
              title="Cleaning the Underside"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Oils and makeup collect behind the setting, blocking light from reflecting back through the table.
          </p>
        </div>

        {/* Section 3: Permanent Dullness vs Lighting */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Permanent Dullness Factors and Shop Spotlights
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A diamond cannot permanently lose its sparkle from normal aging, but permanent optical issues can be caused by a poor original cut (light leakage), surface chips/abrasions from impacts, or dense clouds and growth graining.
          </p>
          <p>
            <strong>Why does my diamond sparkle in the shop but not at home?</strong> Jewellery stores use multiple bright spotlights to maximize scintillation and fire. At home, lighting is often warmer, more diffused, or lower in contrast. This is normal optical behaviour and does not mean the diamond has changed quality.
          </p>
          <p>
            <strong>Metal and Settings:</strong> Surrounding precious metal color (yellow or rose gold) reflects warm hues into the diamond. As white gold rhodium plating wears down, the warm under-gold is exposed, changing the overall visual contrast. Furthermore, a loose diamond may sit at a tilted angle, preventing optimal reflection and risking stone loss.
          </p>
        </div>

        {/* Section 4: Cleaning Guide */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          How to Make a Lab-Grown Diamond Sparkle Again
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            For safe home cleaning, follow these steps:
          </p>
          <ol className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-decimal">
            <li><strong>Inspect:</strong> Ensure no prongs are bent, clasps are loose, or accent stones are missing before cleaning.</li>
            <li><strong>Soak:</strong> Use a warm (not boiling) solution of water and mild washing-up liquid. Soften build-up for a few minutes.</li>
            <li><strong>Brush:</strong> Use a very soft, clean toothbrush to brush the underside, gallery, prongs, and link crevices gently.</li>
            <li><strong>Rinse and Dry:</strong> Rinse in clean water (block the sink drain!) and dry with a lint-free microfibre cloth.</li>
          </ol>
          <p>
            <strong>Avoid:</strong> Toothpaste, baking soda, bleach, and chlorine. These contain abrasives or harsh agents that can scratch gold/platinum alloys or erode rhodium plating.
          </p>

          {/* IMAGE 4: Gentle brushing */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-lose-their-sparkle/11 (4).png"
              alt="Brushing diamond jewellery gently with warm soapy water solution"
              title="Safe Cleaning Routine"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Brushing with a soft-bristled brush loosens dirt from prongs and links without scratching the precious metals.
          </p>
        </div>

        {/* Cleaning Frequency Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Cleaning Considerations by Jewellery Type
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Jewellery Type</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Likely Exposure</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Cleaning Consideration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { t: "Rings", e: "Hand cream, soap, cooking oils", c: "Requires frequent gentle cleaning due to daily contact." },
                  { t: "Earrings", e: "Hair sprays, makeup, skin sebum", c: "Focus on posts, backing mechanisms, and basket mounts." },
                  { t: "Necklaces", e: "Perfumes, body lotions, perspiration", c: "Brush pendant backs and link junctions gently." },
                  { t: "Bracelets", e: "Lotions, dust from desks, clothing lint", c: "Inspect latch stability and articulation links before cleaning." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.t}</td>
                    <td className="p-4">{row.e}</td>
                    <td className="p-4">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ultrasonic warnings callout */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] mb-20 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            A Note on Ultrasonic Cleaners
          </h4>
          <p>
            Ultrasonic cleaners use high-frequency vibration to loosen dirt, but they can easily dislodge small melee diamonds or crack stones with existing fracture lines. Avoid ultrasonic cleaning if prongs are worn, settings contain emeralds or pearls, or the diamond has significant inclusions. Request professional inspections and steaming when in doubt.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Sparkle Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Sparkle Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Visual/video assets show the diamond in multiple lighting conditions.",
                  "Cut proportions (table, depth, polish, symmetry) are fully documented.",
                  "The grading report (IGI/GIA) can be verified on the official website.",
                  "The setting allows reasonable access to the underside of the stone for cleaning.",
                  "Precious-metal content and fineness are clearly stated.",
                  "The seller provides detailed care instructions for normal use."
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
            Laboratory-grown diamonds do not naturally lose their sparkle because of age or origin. When a diamond looks dull, the cause is almost always surface residue—especially finger oils, makeup, and soaps. Gentle cleaning and inspection can restore the stone&apos;s original premium fire and brilliance.
          </p>
          <p className="mt-4">
            Explore Aurelia Royale&apos;s certified laboratory-grown diamond collection, designed for lasting brightness and fire.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Do lab-grown diamonds lose their sparkle?",
              a: "No. They do not permanently lose their ability to reflect light merely because they are laboratory-grown."
            },
            {
              q: "Why does my lab-grown diamond look dull?",
              a: "The most common causes are finger oils, soap, skincare products, dirt beneath the setting or different lighting."
            },
            {
              q: "Do lab-grown diamonds sparkle like natural diamonds?",
              a: "Yes. Both display diamond's characteristic brilliance, fire and scintillation when well cut."
            },
            {
              q: "Can cleaning restore diamond sparkle?",
              a: "Cleaning can restore sparkle when surface dirt or oil is responsible. It cannot correct poor cut or internal inclusions."
            },
            {
              q: "Why does my diamond look oily?",
              a: "Diamonds attract grease, allowing oils from fingers, lotion and cosmetics to adhere to their surfaces."
            },
            {
              q: "Does cut affect sparkle?",
              a: "Yes. Cut proportions, symmetry and polish strongly influence how effectively a diamond interacts with light."
            },
            {
              q: "Is toothpaste safe for cleaning diamonds?",
              a: "No. Toothpaste can scratch precious metal and damage the jewellery's finish."
            },
            {
              q: "Can I use an ultrasonic cleaner?",
              a: "Only with caution. Ultrasonic vibration can loosen stones or affect vulnerable jewellery and should not be used without checking the piece."
            },
            {
              q: "Does perfume reduce sparkle?",
              a: "Perfume and skincare products can create a film that reduces visible brilliance."
            },
            {
              q: "What if my diamond remains dull after cleaning?",
              a: "Have it professionally inspected for trapped dirt, weak cut, inclusions, loose settings, damage or incorrect material identification."
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
            Discover Lifetime Sparkle at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully cut to deliver maximum fire and scintillation. Explore our certified laboratory-grown diamond jewellery.
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
