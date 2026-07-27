import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Can You Tell a Lab-Grown Diamond from a Natural One?",
  description: "Learn whether you can identify lab-grown and natural diamonds by sight, tester, laser inscription, certificate or professional laboratory testing.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/",
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
      "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#webpage",
      "url": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/",
      "name": "Can You Tell a Lab-Grown Diamond from a Natural Diamond?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/tell-lab-grown-from-natural-diamond.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/tell-lab-grown-from-natural-diamond.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown and natural diamonds that appear identical without testing"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#webpage"
      },
      "headline": "Can You Tell a Lab-Grown Diamond from a Natural Diamond?",
      "description": "Learn whether you can identify lab-grown and natural diamonds by sight, tester, laser inscription, certificate or professional laboratory testing.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#primaryimage"
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
        "can you tell a lab-grown diamond from a natural diamond",
        "how to identify a lab-grown diamond",
        "can a diamond tester detect lab-grown diamonds",
        "lab-grown diamond laser inscription",
        "can a jeweller tell if a diamond is lab-grown",
        "verify lab-grown diamond certificate"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#breadcrumb",
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
          "name": "Can You Tell a Lab-Grown Diamond from a Natural Diamond?",
          "item": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/can-you-tell-lab-grown-from-natural-diamond/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you tell a lab-grown diamond by looking at it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Natural and laboratory-grown diamonds can appear the same to the unaided eye."
          }
        },
        {
          "@type": "Question",
          "name": "Can a jeweller tell if a diamond is lab-grown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A jeweller may verify an inscription or use screening equipment, but sight alone is not always conclusive. Laboratory testing may be required."
          }
        },
        {
          "@type": "Question",
          "name": "Can a diamond tester detect a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A basic thermal tester usually cannot distinguish natural from laboratory-grown diamonds because both are diamond materials."
          }
        },
        {
          "@type": "Question",
          "name": "Can a loupe identify a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A loupe may reveal an inscription or useful clues, but it cannot always establish origin conclusively."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have serial numbers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many independently assessed laboratory-grown diamonds have laser-inscribed report numbers. The exact format depends on the issuing laboratory."
          }
        },
        {
          "@type": "Question",
          "name": "Can a laser inscription be removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A girdle inscription may be removed or altered through repolishing. It should therefore be checked alongside the official report."
          }
        },
        {
          "@type": "Question",
          "name": "Can UV light identify a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UV reactions can provide clues, but ordinary fluorescence observation is not conclusive."
          }
        },
        {
          "@type": "Question",
          "name": "Can mounted lab-grown diamonds be tested?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many can be screened or identified while mounted, although the setting may limit access and measurement."
          }
        },
        {
          "@type": "Question",
          "name": "What if a diamond has no certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The absence of a report does not prove origin. Request professional screening or independent laboratory testing if confirmation is important."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most reliable way to identify diamond origin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advanced examination by a recognised gemmological laboratory is the most reliable method."
          }
        }
      ]
    }
  ]
};

export default function Blog8Page() {
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
            Can You Tell a Lab Diamond from Natural?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Identification Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/can-you-tell-lab-grown-from-natural-diamond/8 (1).png"
            alt="Lab-grown and natural diamonds that appear identical without testing"
            title="Can You Tell a Lab Diamond from Natural?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Natural and laboratory-grown diamonds share identical visual qualities, making visual detection impossible.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            You normally cannot tell a lab-grown diamond from a natural diamond simply by looking at it.
          </p>
          <p>
            Both are diamond materials and can share closely comparable chemical, physical and optical properties. A well-cut laboratory-grown diamond can display the same type of brilliance, fire and transparency as a comparable natural diamond.
          </p>
          <p>
            A basic diamond tester will not normally determine origin either. It may confirm that a stone behaves like diamond, but both natural and laboratory-grown diamonds are diamonds.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              You cannot reliably distinguish a lab-grown diamond from a natural diamond with the naked eye, an ordinary loupe or a basic thermal diamond tester.
            </p>
            <p>
              Professional laboratories identify origin by examining growth structures, atomic-level defects, spectroscopy and fluorescence or phosphorescence patterns.
            </p>
            <p>For consumers, the safest verification process is:</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Check the grading report and verify its number online.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Match the report to the diamond&apos;s physical measurements.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Check the laser inscription under magnification where available.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Identification Methods Compared
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Method</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Can it identify origin reliably?</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Important limitation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { m: "Naked-eye inspection", r: "No", l: "Both can look alike" },
                  { m: "Jewellery photographs", r: "No", l: "Lighting and editing affect appearance" },
                  { m: "10× loupe", r: "Not conclusively", l: "May reveal an inscription or clues, but not every stone has them" },
                  { m: "Basic thermal diamond tester", r: "No", l: "Both conduct heat like diamond" },
                  { m: "UV lamp", r: "Not conclusively", l: "Fluorescence may provide clues but overlaps occur" },
                  { m: "Fog / Water / Scratch tests", r: "No", l: "Uncontrolled, unreliable or potentially destructive" },
                  { m: "Laser inscription", r: "Useful verification clue", l: "Can be hidden, polished away or fraudulently copied" },
                  { m: "Grading report", r: "Reliable when authentic", l: "The report must be verified and matched to the stone" },
                  { m: "Professional screening device", r: "Often highly effective", l: "Some results may require referral for further testing" },
                  { m: "Gemmological laboratory", r: "Yes", l: "Uses several advanced analytical spectroscopic methods" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.m}</td>
                    <td className="p-4">{row.r}</td>
                    <td className="p-4">{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Why do they look alike? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Why Do They Look Alike?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Natural and laboratory-grown diamonds share the defining crystal structure of diamond. Both can be transparent, faceted into the same shapes, graded for quality, and set in the same precious metals.
          </p>
          <p>
            Their main difference is how and where the crystal formed. Natural diamonds developed through geological processes inside the Earth over billions of years, while laboratory-grown diamonds are produced through CVD or HPHT technology in a matter of weeks.
          </p>
          <p>
            These different growth histories leave scientific clues at the atomic level, but sight alone is insufficient. Sparkle is also not an origin test; a well-cut laboratory-grown diamond can sparkle more attractively than a poorly cut natural diamond, and vice versa.
          </p>
        </div>

        {/* Section 2: Jeweller and Loupe */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Can a Jeweller or a 10× Loupe Tell?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A jeweller may be able to verify an inscription or inspect documentation, but even an experienced jeweller cannot always identify origin conclusively by visual examination alone. Gemmologists look for growth-sector patterns, metallic/graphitic inclusions, or fluorescence, but advanced testing is recommended for definitive confirmation.
          </p>
          <p>
            An ordinary 10× loupe can help verify a laser inscription, but it is not independent proof. Not every inscription is easy to find, settings can hide girdle details, and inscriptions can be fraudulently copied. An inscription should always be matched with the issuing laboratory&apos;s official online report.
          </p>

          {/* IMAGE 2: Girdle Inspection */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/can-you-tell-lab-grown-from-natural-diamond/8 (2).png"
              alt="Examining diamond girdle under a microscope to find laser inscription"
              title="Inspecting Diamond Girdle"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A jeweller using a loupe or microscope can check the diamond&apos;s girdle for grading inscriptions.
          </p>
        </div>

        {/* Section 3: Laser Inscriptions */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Is a Diamond Laser Inscription?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A laser inscription is a microscopic sequence of letters, numbers, or symbols placed on a diamond&apos;s girdle (the narrow outer edge). It allows the diamond to be matched with its documented gemmological details.
          </p>
          <p>
            <strong>Do all lab diamonds say &quot;lab-grown&quot;?</strong> No. Inscription formats vary. GIA eligible stones are inscribed with &quot;Laboratory-Grown&quot; and their assessment number, while other laboratories use different wording or formats.
          </p>
          <p>
            <strong>Is it enough to prove origin?</strong> No. Printed reports and inscriptions can be copied or mismatched. IGI has reported cases of laboratory-grown diamonds carrying inscriptions associated with natural diamonds. Girdle inscriptions should always be checked in conjunction with the laboratory&apos;s digital database.
          </p>
        </div>

        {/* Section 4: Basic Testers */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Can a Basic Tester or UV Light Detect Lab Diamonds?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A basic thermal tester cannot distinguish natural from lab-grown diamonds because both conduct heat exactly like diamond. While some electronic conductivity testers exist, their results are easily affected by calibration, stone size, and temperature.
          </p>
          <p>
            UV light reactions (fluorescence and phosphorescence) can provide useful clues—such as cross-shaped HPHT growth patterns or CVD striations—but they are not conclusive for consumers, as natural diamonds can also fluoresce.
          </p>

          {/* IMAGE 3: Basic tester */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/can-you-tell-lab-grown-from-natural-diamond/8 (3).png"
              alt="Handheld diamond tester and UV fluorescence examination"
              title="Handheld Testers and UV Light"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Thermal conductivity testers show diamond results for both types, while UV reaction provides growth sector clues.
          </p>
        </div>

        {/* Section 5: Laboratory Methods */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          How Gemmological Laboratories Identify Origin
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Professional laboratories use a combination of advanced analytical methods:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Spectroscopy:</strong> Analysing how the diamond absorbs or emits light to reveal impurities.</li>
            <li><strong>Photoluminescence:</strong> Laser excitation of atomic-level defects associated with specific growth methods.</li>
            <li><strong>Infrared Analysis:</strong> Mapping atomic structures and nitrogen/boron configurations.</li>
            <li><strong>Fluorescence Imaging:</strong> Exposing growth sector shapes that differ between natural (concentric), HPHT (cuboctahedral), and CVD (layered) diamonds.</li>
            <li><strong>Microscopic Inspection:</strong> Identifying metallic flux residuals (HPHT) or graphitic pinpoints (CVD).</li>
          </ul>

          {/* IMAGE 4: Gemmological Lab */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/can-you-tell-lab-grown-from-natural-diamond/8 (4).png"
              alt="Advanced spectroscopic testing instruments in a gemmological laboratory"
              title="Advanced Gemmological Screening"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Gemmological laboratories employ spectrometers and photoluminescence detectors to verify origin conclusively.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Buyer Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Step</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Verification Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "1. Disclosure", a: "Confirm the product clearly states 'laboratory-grown diamond' in titles and description." },
                  { s: "2. Report Verification", a: "Enter the report number directly on the official GIA or IGI verification portal." },
                  { s: "3. Dimension Check", a: "Confirm that physical measurements and carat weight match the report exactly." },
                  { s: "4. Girdle Inscription", a: "Verify the microscopic inscription on the diamond girdle under a loop or microscope." },
                  { s: "5. Sourcing Info", a: "Check whether precious metals and total stone weight are fully specified." },
                  { s: "6. UK Compliance", a: "Ensure the seller does not describe lab stones only as 'diamonds' without qualifiers." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground shrink-0">{row.s}</td>
                    <td className="p-4 flex items-center gap-3">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span>{row.a}</span>
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
            You cannot reliably tell whether a polished diamond is laboratory-grown or natural simply by looking at it. The safest consumer verification process combines clear seller disclosure, a recognised grading report (GIA/IGI), online report database verification, and checking the laser inscription.
          </p>
          <p className="mt-4">
            At Aurelia Royale, laboratory-grown origin is always disclosed clearly before purchase so customers understand exactly what they are purchasing.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Can you tell a lab-grown diamond by looking at it?",
              a: "No. Natural and laboratory-grown diamonds can appear the same to the unaided eye."
            },
            {
              q: "Can a jeweller tell if a diamond is lab-grown?",
              a: "A jeweller may verify an inscription or use screening equipment, but sight alone is not always conclusive. Laboratory testing may be required."
            },
            {
              q: "Can a diamond tester detect a lab-grown diamond?",
              a: "A basic thermal tester usually cannot distinguish natural from laboratory-grown diamonds because both are diamond materials."
            },
            {
              q: "Can a loupe identify a lab-grown diamond?",
              a: "A loupe may reveal an inscription or useful clues, but it cannot always establish origin conclusively."
            },
            {
              q: "Do lab-grown diamonds have serial numbers?",
              a: "Many independently assessed laboratory-grown diamonds have laser-inscribed report numbers. The exact format depends on the issuing laboratory."
            },
            {
              q: "Can a laser inscription be removed?",
              a: "A girdle inscription may be removed or altered through repolishing. It should therefore be checked alongside the official report."
            },
            {
              q: "Can UV light identify a lab-grown diamond?",
              a: "UV reactions can provide clues, but ordinary fluorescence observation is not conclusive."
            },
            {
              q: "Can mounted lab-grown diamonds be tested?",
              a: "Yes. Many can be screened or identified while mounted, although the setting may limit access and measurement."
            },
            {
              q: "What if a diamond has no certificate?",
              a: "The absence of a report does not prove origin. Request professional screening or independent laboratory testing if confirmation is important."
            },
            {
              q: "What is the most reliable way to identify diamond origin?",
              a: "Advanced examination by a recognised gemmological laboratory is the most reliable method."
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
            Discover Certified Quality at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Every laboratory-grown diamond in our fine collections is independently graded, fully verified, and transparently disclosed.
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
