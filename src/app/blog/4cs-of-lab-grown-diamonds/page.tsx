import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "The 4Cs of Lab-Grown Diamonds: A Buyer’s Guide",
  description: "Understand the 4Cs of lab-grown diamonds—cut, colour, clarity and carat—and learn how to balance the grades when choosing jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/",
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
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/4cs-of-lab-grown-diamonds.webp",
      "width": 1600,
      "height": 900,
      "caption": "Cut, colour, clarity and carat characteristics of lab-grown diamonds"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/",
      "name": "What Are the 4Cs of a Lab-Grown Diamond?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#article",
      "headline": "What Are the 4Cs of a Lab-Grown Diamond?",
      "description": "Understand the 4Cs of lab-grown diamonds—cut, colour, clarity and carat—and learn how to balance the grades when choosing jewellery.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "4Cs of lab-grown diamonds",
        "lab-grown diamond 4Cs",
        "lab diamond quality grades",
        "how to choose a lab-grown diamond",
        "diamond cut colour clarity carat"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#breadcrumb",
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
          "name": "Certification and Diamond Quality",
          "item": "https://www.aureliaroyale.com/blog/category/certification-and-diamond-quality/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Are the 4Cs of a Lab-Grown Diamond?",
          "item": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the 4Cs of a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 4Cs are cut, colour, clarity and carat weight. They describe key quality characteristics used to evaluate and compare diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded using the same 4Cs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The same general quality principles apply, although laboratory report formats and current lab-grown grading services can differ."
          }
        },
        {
          "@type": "Question",
          "name": "Which of the 4Cs is most important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cut is often the first priority because it strongly influences brightness and sparkle, although the best choice balances all four factors."
          }
        },
        {
          "@type": "Question",
          "name": "Is diamond cut the same as diamond shape?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Shape describes the outline, while cut quality describes craftsmanship, proportions and light behaviour."
          }
        },
        {
          "@type": "Question",
          "name": "Is D the best diamond colour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "D is at the colourless end of the scale, but near-colourless grades can also appear white once set."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds always flawless?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds can contain internal and external characteristics and receive a range of clarity grades."
          }
        },
        {
          "@type": "Question",
          "name": "Does one carat describe diamond size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carat describes weight. Millimetre measurements provide better information about visible dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Why do two diamonds with the same 4Cs look different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They may have different proportions, facet patterns, inclusion positions, measurements, fluorescence or light performance."
          }
        },
        {
          "@type": "Question",
          "name": "Do higher 4Cs always mean a better purchase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Higher grades can increase price without always creating a visible improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Are the 4Cs enough to choose diamond jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Buyers should also check origin, treatment, certification, metal, craftsmanship, images, warranty and returns."
          }
        }
      ]
    }
  ]
};

export default function Blog26Page() {
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
            What Are the 4Cs of a Lab Diamond?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Educational Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/4cs-of-lab-grown-diamonds/26 (1).png"
            alt="Cut, colour, clarity and carat characteristics of lab-grown diamonds"
            title="The 4Cs of Lab-Grown Diamonds"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Cut, colour, clarity, and carat weight define the standard quality framework for lab-grown diamonds.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            The 4Cs of a lab-grown diamond are cut, colour, clarity and carat weight.
          </p>
          <p>
            Together, they provide a standard framework for describing and comparing diamond quality. The same four quality factors commonly associated with natural diamonds can also be used to assess laboratory-grown diamonds.
          </p>
          <p>
            However, the 4Cs should not be treated as four independent numbers. They interact with one another, and the highest grades do not automatically produce the best-looking or best-value diamond for every buyer.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12 font-jost text-lg font-light">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg my-4">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">C</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it measures</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { c: "Cut", m: "Craftsmanship, proportions and light behaviour", w: "Strongly influences sparkle and visual performance" },
                  { c: "Colour", m: "The presence or absence of body colour", w: "Affects how white or warm the diamond appears" },
                  { c: "Clarity", m: "Internal and external characteristics", w: "Influences visual cleanliness and rarity" },
                  { c: "Carat", m: "Diamond weight", w: "Affects price and contributes to physical size" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.c}</td>
                    <td className="p-4">{row.m}</td>
                    <td className="p-4">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-[#5a5a5a] italic text-center">
            For many buyers, cut should be prioritised first, followed by an appropriate balance of visible size, colour and eye-clean clarity.
          </p>
        </div>

        {/* Section 1: Cut */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Diamond Cut
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Cut refers to the facet craftsmanship and angles regulating light behaviour, including brightness (white light reflection), fire (dispersion of spectral colors), and scintillation (flashes of light).
          </p>
          <p>
            Cut grade (Excellent down to Poor) is generally the most important of the 4Cs. A diamond with high color and clarity can still look lifeless if its cut proportions fail to return light.
          </p>

          {/* IMAGE 2: Cut proportions */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/4cs-of-lab-grown-diamonds/26 (2).png"
              alt="Grading diamond facets reflection under light machinery"
              title="Proportion and Facet Cut Assessment"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A diamond's cut regulates fire, brightness, and scintillation, making it the most critical C.
          </p>
        </div>

        {/* Section 2: Colour */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Diamond Colour
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Colour grades track the presence of body tints on a D-to-Z scale. Neighbouring grades are visually indistinguishable without comparison stones under laboratory lamps. Yellow or rose gold settings can soften slightly warm stones, making G or H colour options a balanced, cost-effective choice.
          </p>
          <p>
            Fancy-coloured lab diamonds (blue, pink, yellow) bypass the D-to-Z scale entirely, using parameters like hue, tone, and saturation instead.
          </p>

          {/* IMAGE 3: Settings selection */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/4cs-of-lab-grown-diamonds/26 (3).png"
              alt="Comparing yellow gold claws with white platinum settings"
              title="Apparent Colour and Setting Selection"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Warmer near-colourless diamonds are complemented beautifully by yellow or rose gold settings.
          </p>
        </div>

        {/* Section 3: Clarity */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Diamond Clarity
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Clarity logs inclusions and blemishes mapped under 10× magnification from Flawless (FL) to Included (I3). Lab diamonds are not automatically flawless—they develop growth traits (carbon or metallic pinpoint zones) during manufacturing.
          </p>
          <p>
            Choosing &quot;eye-clean&quot; VS1 or VS2 diamonds avoids paying premium prices for microscopic features that are invisible without magnification.
          </p>

          {/* IMAGE 4: Clarity inclusions */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/4cs-of-lab-grown-diamonds/26 (4).png"
              alt="Mapping inclusions under micro zoom magnification"
              title="Clarity Inclusion Mapping under Magnification"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Visual checks help verify whether clarity inclusions are eye-clean to the unaided eye.
          </p>
        </div>

        {/* Section 4: Carat weight */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. Diamond Carat Weight
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Carat weight (0.20g) measures mass, not visible diameter. Poorly cut diamonds can hide weight in setting depth, making them look smaller face-up. Always cross-check carat weight against millimetre measurements.
          </p>
          <p>
            Distinguish individual centre-stone weight from total carat weights (TCW) in multi-stone pieces like tennis bracelets or halo clusters.
          </p>
        </div>

        {/* Combined 4Cs interaction table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Balancing the 4Cs
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Diamond</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Cut</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Colour</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Clarity</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Carat</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Possible result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { d: "Diamond A", c: "Excellent", o: "D", l: "IF", w: "1.00 ct", r: "Very high paper grades, potentially higher price" },
                  { d: "Diamond B", c: "Excellent", o: "G", l: "VS1", w: "1.00 ct", r: "Strong balance with differences difficult to see unaided" },
                  { d: "Diamond C", c: "Good", o: "E", l: "VVS1", w: "1.00 ct", r: "High colour and clarity but potentially weaker light performance" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.d}</td>
                    <td className="p-4">{row.c}</td>
                    <td className="p-4 text-center">{row.o}</td>
                    <td className="p-4 text-center">{row.l}</td>
                    <td className="p-4">{row.w}</td>
                    <td className="p-4">{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            4Cs Purchase Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before choosing your diamond, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Laboratory-grown origin is clearly stated in product metadata.",
                  "Cut quality (brilliance and fire) is prioritised over perfect clarity.",
                  "Carat weights align with visual millimetre face-up measurements.",
                  "Colour grades are selected to match white or gold metal settings.",
                  "Inclusions are eye-clean, and cloudiness is absent.",
                  "You have matched IGI/GIA certificate details with registry numbers."
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
            The 4Cs of a lab-grown diamond—cut, colour, clarity, and carat weight—provide a framework for describing quality, but they should be balanced rather than maximised blindly. Cut governs sparkle, colour affects warmth, clarity records inclusions, and carat measures weight.
          </p>
          <p className="mt-4">
            Aurelia Royale guides you through selecting the ideal balance, providing high-resolution videos and verified IGI/GIA reports for all solitaire designs.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What are the 4Cs of a lab-grown diamond?",
              a: "The 4Cs are cut, colour, clarity and carat weight. They describe key quality characteristics used to evaluate and compare diamonds."
            },
            {
              q: "Are lab-grown diamonds graded using the same 4Cs?",
              a: "The same general quality principles apply, although laboratory report formats and current lab-grown grading services can differ."
            },
            {
              q: "Which of the 4Cs is most important?",
              a: "Cut is often the first priority because it strongly influences brightness and sparkle. The best choice still balances all four factors."
            },
            {
              q: "Is diamond cut the same as diamond shape?",
              a: "No. Shape describes the outline, such as round or oval. Cut quality describes craftsmanship, proportions and light behaviour."
            },
            {
              q: "Is D the best diamond colour?",
              a: "D is at the colourless end of the D-to-Z scale, but it is not necessary for every buyer. Near-colourless grades can also appear white once set."
            },
            {
              q: "What clarity grade is eye-clean?",
              a: "There is no universal eye-clean grade. Many VS diamonds and some SI diamonds may appear clean without magnification, depending on their inclusions and size."
            },
            {
              q: "Are lab-grown diamonds always flawless?",
              a: "No. Lab-grown diamonds can contain internal and external characteristics and receive a range of clarity grades."
            },
            {
              q: "Does one carat describe diamond size?",
              a: "Carat describes weight. Millimetre measurements provide better information about visible dimensions."
            },
            {
              q: "Why do two diamonds with the same 4Cs look different?",
              a: "They may have different proportions, facet patterns, inclusion positions, measurements, fluorescence or light performance."
            },
            {
              q: "Do higher 4Cs always mean a better purchase?",
              a: "No. Higher grades may increase the price without always creating a visible improvement. Balance and actual appearance matter."
            },
            {
              q: "Are small accent diamonds individually graded?",
              a: "Usually not. Their origin, total carat weight and estimated quality range should still be disclosed."
            },
            {
              q: "Are the 4Cs enough to choose diamond jewellery?",
              a: "No. Buyers should also check origin, treatment, certification, metal, craftsmanship, dimensions, images, warranty and returns."
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
            Balance Quality and Value at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully cut to deliver maximum fire and scintillation. Discover our certified laboratory-grown diamond jewellery.
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
