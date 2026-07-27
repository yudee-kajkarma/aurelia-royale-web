import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Disclosure: A Clear Buyer’s Guide",
  description: "Learn how lab-grown diamonds should be disclosed on product pages, adverts, reports and invoices, including origin, treatment and certification details.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/",
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
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/lab-grown-diamond-disclosure-guide.webp",
      "width": 1600,
      "height": 900,
      "caption": "A guide to clear laboratory-grown diamond descriptions and disclosures"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#webpage",
      "url": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/",
      "name": "How Should Lab-Grown Diamonds Be Described and Disclosed?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#article",
      "headline": "How Should Lab-Grown Diamonds Be Described and Disclosed?",
      "description": "Learn how lab-grown diamonds should be disclosed on product pages, adverts, reports and invoices, including origin, treatment and certification details.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#webpage"
      },
      "articleSection": "Lab-Grown Diamond Fundamentals",
      "keywords": [
        "lab-grown diamond disclosure",
        "lab-grown diamond terminology",
        "laboratory-grown diamond description",
        "how to label lab-grown diamonds",
        "lab-grown diamond advertising"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#breadcrumb",
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
          "name": "How Should Lab-Grown Diamonds Be Described and Disclosed?",
          "item": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/how-lab-grown-diamonds-should-be-disclosed/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Must a lab-grown diamond be labelled as lab-grown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Its laboratory-grown origin should be disclosed prominently wherever it is advertised or sold."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lab-grown diamond be called a real diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds have the essential properties of diamond, but the phrase real diamond can be confusing unless the laboratory-grown origin is equally prominent."
          }
        },
        {
          "@type": "Question",
          "name": "Is laboratory-created diamond acceptable terminology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is clear terminology because it communicates the diamond's laboratory origin. Retailers should still check current requirements in each market."
          }
        },
        {
          "@type": "Question",
          "name": "Should CVD or HPHT be disclosed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The growth method should be provided when it is known and verified, although it does not determine diamond quality by itself."
          }
        },
        {
          "@type": "Question",
          "name": "Must post-growth treatment be disclosed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Known post-growth treatments should be disclosed accurately, particularly when stated in the grading report."
          }
        },
        {
          "@type": "Question",
          "name": "What does total carat weight mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Total carat weight is the combined weight of all relevant diamonds in a jewellery piece."
          }
        },
        {
          "@type": "Question",
          "name": "Does a grading report certify the complete jewellery piece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. A grading report commonly evaluates an identifiable diamond and may not cover the metal, setting, craftsmanship or accent stones."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be described as sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only when the claim is properly defined, qualified and supported by evidence relevant to its stated scope."
          }
        },
        {
          "@type": "Question",
          "name": "Should lab-grown origin appear on an invoice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The laboratory-grown description should remain consistent on invoices, confirmations and accompanying documents."
          }
        },
        {
          "@type": "Question",
          "name": "Must laboratory-grown origin be disclosed during resale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Laboratory-grown origin remains material product information and should be disclosed clearly in a resale listing."
          }
        }
      ]
    }
  ]
};

export default function Blog20Page() {
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
            How Should Lab-Grown Diamonds Be Disclosed?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Compliance Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (1).png"
            alt="A guide to clear laboratory-grown diamond descriptions and disclosures"
            title="Disclosures and Nomenclature Guide"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Clear descriptions should accompany lab-grown diamond products from adverts to checkout pages.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds should always be described using clear language that identifies their laboratory-grown origin.
          </p>
          <p>
            The disclosure should appear prominently wherever the jewellery is advertised or sold. It should not be hidden in a product specification, tooltip, FAQ page or terms and conditions.
          </p>
          <p>
            A buyer should be able to understand that the diamond was created in a laboratory before clicking “Add to basket”.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            A transparent description should use wording such as: **Laboratory-grown diamond**, **Laboratory-created diamond**, or **Lab-grown diamond**. The word “diamond” should not appear by itself if the stone is laboratory-grown.
            Where the information is available, the retailer should also disclose CVD/HPHT growth methods, post-growth treatments, exact carat weights, colour/clarity grades, report verification numbers, metal alloy hallmarks, and coloured stone classifications.
          </p>
        </div>

        {/* Terminology table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Terminology Recommendations
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Description</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Recommended use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { d: "Laboratory-grown diamond", u: "Clear formal terminology suitable for product pages and documents" },
                  { d: "Laboratory-created diamond", u: "Clear alternative that identifies the diamond’s origin" },
                  { d: "Lab-grown diamond", u: "Widely understood consumer-facing terminology" },
                  { d: "CVD laboratory-grown diamond", u: "Use when the growth method has been confirmed" },
                  { d: "HPHT laboratory-grown diamond", u: "Use when the growth method has been confirmed" },
                  { d: "Diamond", u: "Do not use alone when describing a laboratory-grown diamond" },
                  { d: "Real diamond", u: "Potentially confusing when the laboratory-grown origin is not equally prominent" },
                  { d: "Cultured diamond", u: "Avoid using without an immediate laboratory-grown qualifier" },
                  { d: "Eco diamond", u: "Avoid unless the exact environmental claim is defined and evidenced" },
                  { d: "Ethical diamond", u: "Avoid as an unsupported general claim" },
                  { d: "Fake diamond", u: "Inaccurate description of a lab-grown diamond" },
                  { d: "Diamond simulant", u: "Not an appropriate description of a lab-grown diamond" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.d}</td>
                    <td className="p-4">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Compliance Standards */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Why Lab-Grown Diamond Disclosure Matters
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Lab-grown diamonds share fundamental chemical and physical properties with natural diamonds, but their geological origin is completely different. This origin affects retail valuations, replacement insurance coverage, and the second-hand resale market.
          </p>
          <p>
            CIBJO (World Jewellery Confederation) publishes internationally recognised jewellery nomenclature standards in its Blue Books. Voluntarily followed across the global supply chain, these rules are updated regularly. Sellers in the UK must also check CAP and ASA rules to ensure compliance under active advertising policies.
          </p>
          <p>
            <strong>Are they fake or imitation?</strong> No. Simulants like moissanite and cubic zirconia are different crystalline substances with unique compositions. A laboratory-grown diamond is genuine diamond crystal grew through CVD/HPHT methods, but its artificial origin must remain clear to prevent buyer confusion.
          </p>

          {/* IMAGE 2: Compliance standards */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (2).png"
              alt="Checking CIBJO Blue Books rules and guidelines"
              title="Compliance and Standards Nomenclature"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            CIBJO standards require transparent terminology to distinguish lab-grown diamonds from natural ones.
          </p>
        </div>

        {/* Section 2: Journey Touchpoints */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Where Disclosures Must Appear
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Disclosure should follow the product throughout the entire customer journey:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Search &amp; Social Ads:</strong> Visible text, copy, or landing pages must clearly identify lab-grown origin rather than hiding behind generic tags.</li>
            <li><strong>Product Pages &amp; Titles:</strong> Titles like <em>1.00 ct Laboratory-Grown Diamond Pendant</em> are accurate, whereas <em>1 Carat Real Diamond</em> is misleading.</li>
            <li><strong>Checkouts &amp; Invoices:</strong> Baskets, email confirmations, receipts, and warranty logs must preserve full origin disclosures.</li>
          </ul>

          {/* IMAGE 3: Product titles */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (3).png"
              alt="Product title showing 1.00ct lab-grown diamond detail"
              title="Transparent Product Title and Listing"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Titles and descriptions must consistently state origin across catalogs, baskets, and receipts.
          </p>
        </div>

        {/* Section 3: Technical Details and Environmental claims */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Environmental claims and grading nomenclature
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Carats &amp; Settings:</strong> Carat weights should clarify centre-stone mass versus total carat weights (TCW). Precious metals (gold fineness, platinum 950) should be explicitly detailed alongside coloured accents.
          </p>
          <p>
            <strong>Certifications:</strong> Clearly state which independent lab (GIA, IGI) issued grading reports. Make sure report numbers correspond directly to girdle laser inscriptions.
          </p>
          <p>
            <strong>Green &amp; Eco Claims:</strong> General phrases like &quot;completely sustainable&quot; require complete lifecycle evidence. Precise claims (e.g. &quot;100% renewable electricity at the growth facility&quot;) are preferred.
          </p>

          {/* IMAGE 4: Grading and claims */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/how-lab-grown-diamonds-should-be-disclosed/20 (4).png"
              alt="Stating renewable energy and certificate terms clearly"
              title="Grading Reports and Environmental Scope"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A loose-stone grading report should match the girdle laser registration code exactly.
          </p>
        </div>

        {/* Product template layout block */}
        <div className="bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] my-16 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <h4 className="font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3">
            Product Page template for Aurelia Royale
          </h4>
          <p className="text-sm font-light text-[#5a5a5a] mb-4">
            The following structure ensures compliance and visual elegance across our web pages:
          </p>
          <div className="bg-surface p-4 rounded border border-[#e2dfd5] font-mono text-xs text-[#3b3b3b] space-y-2 overflow-x-auto">
            <p><strong>[Carat weight] Laboratory-Grown Diamond [Type] in [Metal]</strong></p>
            <p>Origin: Laboratory-grown</p>
            <p>Growth Method: CVD / HPHT</p>
            <p>Post-growth treatment: Stated if detected</p>
            <p>Metal: Stated with fineness (e.g. 18 ct / Pt 950)</p>
          </div>
        </div>

        {/* Disclosure checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown Diamond Disclosure Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Ensure transparent checkout details:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Clear lab-grown descriptors are visible on titles, ads, and baskets.",
                  "Individual carat weights are separated clearly from total combined weights.",
                  "Metal types, purity levels, and hallmarking processes are specified.",
                  "Independent laboratory reports (GIA, IGI) are named and verifiable.",
                  "Any post-growth treatments are disclosed on invoices.",
                  "All environmental or ethical claims are precise and backed by evidence."
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
            Lab-grown diamonds should be described clearly, prominently, and consistently as laboratory-grown or laboratory-created diamonds. Transparency does not diminish a piece of fine jewellery; it empowers customers to choose their diamonds with absolute confidence.
          </p>
          <p className="mt-4">
            At Aurelia Royale, we follow strict disclosure guidelines across all collections, providing full certificate numbers, metal hallmarks, and growth details.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Must a lab-grown diamond be labelled as lab-grown?",
              a: "Yes. Its laboratory-grown origin should be disclosed prominently wherever it is advertised or sold. The word “diamond” should not be used in isolation in a way that could confuse buyers about origin."
            },
            {
              q: "Can a lab-grown diamond be called a real diamond?",
              a: "Lab-grown diamonds have the essential properties of diamond, but “real diamond” can be confusing if the laboratory-grown origin is not equally prominent. “Laboratory-grown diamond” is clearer."
            },
            {
              q: "Is laboratory-created diamond acceptable terminology?",
              a: "It is clear terminology because it directly communicates the diamond’s laboratory origin. Requirements can vary by country and advertising channel, so retailers should check current local guidance."
            },
            {
              q: "Is a lab-grown diamond a synthetic diamond?",
              a: "“Synthetic diamond” is used in technical and regulatory contexts, but some consumers incorrectly interpret “synthetic” as meaning a simulant. Consumer descriptions should explain clearly that the product is a laboratory-grown diamond."
            },
            {
              q: "Can a lab-grown diamond be called a cultured diamond?",
              a: "“Cultured diamond” should not be used by itself because its meaning may not be clear to every buyer. If used at all, it should be accompanied immediately by an unambiguous laboratory-grown description."
            },
            {
              q: "Should CVD or HPHT be disclosed?",
              a: "The growth method should be provided when it is known and verified. It can help customers understand the product, although it does not determine the diamond’s quality by itself."
            },
            {
              q: "Must post-growth treatment be disclosed?",
              a: "Known treatments should be disclosed accurately, particularly when they are stated in the grading report or materially affect how the diamond is represented."
            },
            {
              q: "What does total carat weight mean?",
              a: "Total carat weight is the combined weight of all relevant diamonds in the piece. It is not necessarily the weight of each individual diamond."
            },
            {
              q: "Does a grading report certify the complete jewellery piece?",
              a: "Usually not. A diamond grading report commonly evaluates a loose or identifiable diamond. It may not evaluate the setting, precious metal, craftsmanship or smaller accent stones."
            },
            {
              q: "Can lab-grown diamonds be described as sustainable?",
              a: "Only when the claim is defined, qualified and supported with suitable evidence. A claim about renewable electricity at a growing facility does not automatically cover the entire jewellery lifecycle."
            },
            {
              q: "Should lab-grown origin appear on an invoice?",
              a: "Yes. Consistent disclosure on invoices, confirmations and accompanying documents helps preserve accurate product information after purchase."
            },
            {
              q: "Must lab-grown origin be disclosed when jewellery is resold?",
              a: "Yes. The laboratory-grown origin remains material information and should be stated clearly in a resale listing."
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
            Shop Confidently at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Independent certifications, clear technical growth methods, and legal metal hallmarks are guaranteed on all purchases.
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
