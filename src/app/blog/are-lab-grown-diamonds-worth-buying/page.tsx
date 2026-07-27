import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Worth Buying? An Honest Guide",
  description: "Discover when lab-grown diamonds are worth buying, their benefits, disadvantages, quality, durability, certification and resale considerations.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/",
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
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/",
      "name": "Are Lab-Grown Diamonds Worth Buying? An Honest Buyer’s Guide",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/are-lab-grown-diamonds-worth-buying.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/are-lab-grown-diamonds-worth-buying.webp",
      "width": 1600,
      "height": 900,
      "caption": "Certified laboratory-grown diamond jewellery evaluated before purchase"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#webpage"
      },
      "headline": "Are Lab-Grown Diamonds Worth Buying? An Honest Buyer’s Guide",
      "description": "Discover when lab-grown diamonds are worth buying, their benefits, disadvantages, quality, durability, certification and resale considerations.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#primaryimage"
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
        "are lab-grown diamonds worth buying",
        "are lab-grown diamonds worth it",
        "should I buy a lab-grown diamond",
        "are lab-grown diamonds good quality",
        "lab-grown diamond disadvantages",
        "lab-grown diamond buying guide"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#breadcrumb",
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
          "name": "Are Lab-Grown Diamonds Worth Buying?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-worth-buying/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds worth buying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when you want diamond material, strong durability and greater budget flexibility without prioritising natural geological rarity."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds good quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be. Quality varies according to cut, colour, clarity, growth conditions and polishing."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds worth it for regular wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They offer diamond-level hardness, although the setting and precious metal must also be well constructed."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They do not expire or lose their diamond structure with age."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds lose their sparkle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not permanently under normal conditions. Surface residue can reduce sparkle until the jewellery is cleaned."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They may, but no future return should be guaranteed. Market demand, documentation and current prices affect resale offers."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds a financial investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They should not be purchased on the expectation of guaranteed appreciation or recovery of the retail price."
          }
        },
        {
          "@type": "Question",
          "name": "Should a lab-grown diamond have a certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An independent report is valuable for confirming origin and documenting important specifications, particularly for significant centre stones."
          }
        },
        {
          "@type": "Question",
          "name": "Is CVD better than HPHT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is automatically better. The quality and price of the individual diamond matter more than the process alone."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds automatically sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Environmental performance depends on energy sources, production efficiency and verifiable supply-chain information."
          }
        }
      ]
    }
  ]
};

export default function Blog9Page() {
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
            Are Lab-Grown Diamonds Worth Buying?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            An Honest Buyer&apos;s Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/are-lab-grown-diamonds-worth-buying/9 (1).png"
            alt="Certified laboratory-grown diamond jewellery evaluated before purchase"
            title="Are Lab-Grown Diamonds Worth Buying?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds offer genuine diamond material with budget-friendly pricing.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds are worth buying when you want genuine diamond material, strong visual impact and greater budget flexibility without paying the premium associated with natural geological rarity.
          </p>
          <p>
            They may not be the right choice if your primary priorities are natural origin, geological age, scarcity or an established resale market.
          </p>
          <p>
            A laboratory-grown diamond can offer excellent brilliance, hardness and long-term suitability for fine jewellery. However, &quot;worth&quot; depends on more than the gemstone. The cut, documentation, setting, precious metal, product construction, price and seller&apos;s transparency all affect whether a particular piece represents good value.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p><strong>Lab-grown diamonds can be worth buying if you:</strong></p>
            <ul className="space-y-2 list-none pl-0 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Want diamond material rather than a simulant like CZ or moissanite.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Prefer a lower initial price than a comparable natural diamond.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Want greater freedom over size, quality and setting configuration.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Plan to wear and enjoy the jewellery long-term.</span>
              </li>
            </ul>
            <p><strong>They may not be suitable if you:</strong></p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>Specifically want a naturally formed diamond.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>Place high value on geological rarity and historic significance.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>Expect the diamond to appreciate financially over time.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Priority Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            When is a Lab-Grown Diamond Worth Buying?
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Your Priority</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Is it likely to suit you?</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Why?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { p: "Genuine diamond material", s: "Yes", w: "It has the defining diamond carbon crystal structure." },
                  { p: "Maximum visual size within budget", s: "Usually", w: "The initial price is generally lower than natural diamond." },
                  { p: "Long-term jewellery use", s: "Yes", w: "It offers diamond-level hardness (10 on Mohs scale)." },
                  { p: "Traditional diamond sparkle", s: "Yes", w: "Cut laboratory-grown diamonds display diamond optics." },
                  { p: "Natural geological rarity", s: "No", w: "It is manufactured rather than geologically formed." },
                  { p: "Guaranteed resale return", s: "No", w: "No future resale price should be promised." },
                  { p: "Lowest possible stone price", s: "Not always", w: "Moissanite and cubic zirconia are generally less expensive." },
                  { p: "Transparent origin", s: "Potentially", w: "Production origin and growth reports should be documented." },
                  { p: "Automatically sustainable", s: "No", w: "Environmental performance requires evidence (power sources)." },
                  { p: "Fine jewellery settings", s: "Yes", w: "It can be set in 18k gold, platinum and other precious metals." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.p}</td>
                    <td className="p-4">{row.s}</td>
                    <td className="p-4">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Value to Buyer */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Makes a Lab-Grown Diamond Valuable?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            The practical value of a laboratory-grown diamond comes from its identity as actual diamond material, its strong durability, its attractive optical brilliance, its lower initial cost, and the design flexibility it grants buyers.
          </p>
          <p>
            Value does not come from geological scarcity. Because laboratory-grown supply can expand as manufacturing technology and capacity improve, it does not behave like a naturally scarce product in the market. This is central to understanding why a lab-grown diamond can offer strong personal utility while not carrying the resale premium of natural stones.
          </p>
          <p>
            <strong>Are they genuine?</strong> Yes. Laboratory-grown diamonds are not moissanite or cubic zirconia. They are carbon crystals. GIA notes that they share the exact chemical composition and physical structures of natural diamonds.
          </p>
        </div>

        {/* Section 2: Quality Factors */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Evaluating Quality and Worth
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            &quot;Lab-grown&quot; describes origin, not quality. Buyers should evaluate the individual diamond across several factors:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Cut Quality:</strong> Cut has the largest influence on brightness and fire. A poorly cut stone will leak light and look dull.</li>
            <li><strong>Colour and Clarity:</strong> Evaluated in relation to the design. Stones do not always need the highest available clarity designations to be visually flawless at normal reading distance.</li>
            <li><strong>Measurements:</strong> Carat measures weight, not physical size. Verify millimetre dimensions and proportions.</li>
            <li><strong>Jewellery Construction:</strong> Diamond value is only one component. Prong thickness, metal weight, clasp quality, and setting finish define the overall worth of the piece.</li>
          </ul>

          {/* IMAGE 2: Quality factors */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-worth-buying/9 (2).png"
              alt="Inspecting the cut, clarity and symmetry of laboratory-grown diamond jewellery"
              title="Evaluating Diamond Quality"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Visual performance is determined by cut proportions and facet symmetry rather than stone origin.
          </p>
        </div>

        {/* Section 3: Pricing comparisons */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Pricing and Design Flexibility
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Prices vary dynamically according to size, cut quality, brand, setting, and metal. The primary, evergreen benefit is that lab-grown diamonds allow a lower initial retail price than natural diamonds of comparable specifications.
          </p>
          <p>
            This allows buyers to consider a larger centre stone, a more detailed setting, higher metal specifications, or a matching jewellery set within their designated budget. However, balance remains key; an oversized stone can look awkward if the setting is too delicate or the chain is too thin.
          </p>

          {/* IMAGE 3: Setting style */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-worth-buying/9 (3).png"
              alt="Selecting precious metals and setting styles for laboratory diamonds"
              title="Design and Setting Flexibility"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Budget flexibility allows buyers to prioritize premium gold/platinum settings and larger stone accents.
          </p>
        </div>

        {/* Section 4: Durability & Sparkle */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Durability and Sparkle Performance
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            With a score of 10 on the Mohs hardness scale, lab-grown diamonds offer exceptional scratch resistance. They do not expire or lose their diamond structure with age.
          </p>
          <p>
            <strong>Do they lose their sparkle?</strong> No, not permanently. A diamond can appear less brilliant when its surface collects skin oils, soaps, cosmetics, or dust. Regular, gentle cleaning easily restores its original brilliance.
          </p>
        </div>

        {/* Section 5: Resale & Investment */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Resale Value and Financial Expectations
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Laboratory-grown diamonds should not be purchased on the expectation of guaranteed financial appreciation. A personal jewellery purchase includes costs such as design, manufacturing, taxes, warranties, and retailer operations. These costs are not recovered at resale.
          </p>
          <p>
            The future resale price of lab-grown diamonds remains uncertain and is tied to shifting market supply. The primary value of either choice should be its beauty, wearability, and personal meaning.
          </p>

          {/* IMAGE 4: Resale factors */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-worth-buying/9 (4).png"
              alt="Appraising lab diamond jewellery and checking grading reports"
              title="Resale and Financial Considerations"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Buyers should select diamond jewellery for its aesthetic appeal and wearability rather than financial investment returns.
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
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Buyer Verification Steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Laboratory-grown origin is stated clearly.",
                  "The product is not confused with moissanite or CZ.",
                  "Centre-stone and total carat weights are separated.",
                  "Measurements in millimetres are provided.",
                  "Cut, colour, and clarity information is available.",
                  "Growth method and post-growth treatment are disclosed.",
                  "The grading report (IGI/GIA) can be verified online.",
                  "Precious-metal specifications are complete.",
                  "No guaranteed resale return is promised.",
                  "The final price reflects the complete jewellery piece."
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
            Lab-grown diamonds are worth buying for customers who want genuine diamond material, excellent durability, and greater purchasing flexibility. Their strongest value is the opportunity to choose attractive diamond designs at a lower initial price than natural diamonds.
          </p>
          <p className="mt-4">
            At Aurelia Royale, laboratory-grown origin is always disclosed clearly before purchase so customers can choose with complete confidence.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are lab-grown diamonds worth buying?",
              a: "Yes, when you want diamond material, strong durability and greater budget flexibility without prioritising natural geological rarity."
            },
            {
              q: "Are lab-grown diamonds good quality?",
              a: "They can be. Quality varies according to cut, colour, clarity, growth conditions and polishing."
            },
            {
              q: "Are lab-grown diamonds worth it for regular wear?",
              a: "Yes. They offer diamond-level hardness, although the setting and precious metal must also be well constructed."
            },
            {
              q: "Do lab-grown diamonds last?",
              a: "Yes. They do not expire or lose their diamond structure with age."
            },
            {
              q: "Do lab-grown diamonds lose their sparkle?",
              a: "Not permanently under normal conditions. Surface residue can reduce sparkle until the jewellery is cleaned."
            },
            {
              q: "Do lab-grown diamonds have resale value?",
              a: "They may, but no future return should be guaranteed. Market demand, documentation and current prices affect resale offers."
            },
            {
              q: "Are lab-grown diamonds a financial investment?",
              a: "They should not be purchased on the expectation of guaranteed appreciation or recovery of the retail price."
            },
            {
              q: "Should a lab-grown diamond have a certificate?",
              a: "An independent report is valuable for confirming origin and documenting important specifications, particularly for significant centre stones."
            },
            {
              q: "Is CVD better than HPHT?",
              a: "Neither is automatically better. The quality and price of the individual diamond matter more than the process alone."
            },
            {
              q: "Are lab-grown diamonds automatically sustainable?",
              a: "No. Environmental performance depends on energy sources, production efficiency and verifiable supply-chain information."
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
            Shop Certified Diamond Designs at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Ensure maximum value and premium craftsmanship. Discover our verified laboratory-grown diamond collections.
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
