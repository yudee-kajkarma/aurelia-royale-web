import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Do Lab-Grown Diamonds Have Resale Value? Honest Guide",
  description: "Lab-grown diamonds can be resold, but offers may be far below retail. Learn how market prices, metal, reports, condition and selling method affect value.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/",
  },
};

// 2. Custom JSON-LD Schema (since none was provided, we constructed a matching schema graph)
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
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/do-lab-grown-diamonds-have-resale-value.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/do-lab-grown-diamonds-have-resale-value.webp",
      "width": 1600,
      "height": 900,
      "caption": "Resale value of lab-grown diamonds guide"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#webpage",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/",
      "name": "Do Lab-Grown Diamonds Have Resale Value? Honest Guide",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#article",
      "headline": "Do Lab-Grown Diamonds Have Resale Value?",
      "description": "Lab-grown diamonds can be resold, but offers may be far below retail. Learn how market prices, metal, reports, condition and selling method affect value.",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#primaryimage"
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
        "do lab-grown diamonds have resale value",
        "lab-grown diamond resale value",
        "reselling lab-grown diamonds",
        "resale value of lab-grown diamonds",
        "lab diamond trade-in value"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#breadcrumb",
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
          "name": "Do Lab-Grown Diamonds Have Resale Value?",
          "item": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-have-resale-value/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have any resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can have resale value, but offers may be substantially below the original retail price."
          }
        },
        {
          "@type": "Question",
          "name": "Can I sell a lab-grown diamond to a jeweller?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some jewellers purchase lab-grown diamonds, while others do not. Ask whether the business actively handles them before arranging an assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Why is lab-grown diamond resale value low?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New production is readily available, wholesale prices have declined and the second-hand market is less developed than the market for mined diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Does a grading report improve resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A verifiable report may improve identification and buyer confidence, but it does not guarantee a particular offer."
          }
        },
        {
          "@type": "Question",
          "name": "Does the gold or platinum setting have value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Solid precious metal can contribute recoverable metal value, while design, craftsmanship and brand may add value if the piece is resold intact."
          }
        },
        {
          "@type": "Question",
          "name": "Is an insurance valuation the same as resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Insurance valuations usually estimate replacement cost, while resale value reflects what a buyer will pay for a second-hand item."
          }
        },
        {
          "@type": "Question",
          "name": "Is trade-in value the same as cash value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Trade-in value is usually store credit linked to another purchase and may be higher than an immediate cash offer."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lab-grown diamond retain its original price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is possible but should not be expected. Changing replacement prices and growing supply can substantially reduce resale offers."
          }
        },
        {
          "@type": "Question",
          "name": "Are larger lab-grown diamonds easier to resell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Demand, cut, colour, clarity, shape, transparency, documentation and current replacement price all matter."
          }
        },
        {
          "@type": "Question",
          "name": "Can I sell lab-grown diamond earrings or a bracelet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, although the offer may consider the entire piece, including metal, total diamond weight, construction, condition and demand."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the best place to sell a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare the original retailer, specialist buyers, independent jewellers, consignment and private-sale options. The best route depends on risk, speed and expected return."
          }
        },
        {
          "@type": "Question",
          "name": "Should I buy a lab-grown diamond as an investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds are generally better viewed as jewellery for wear and enjoyment rather than assets guaranteed to appreciate."
          }
        }
      ]
    }
  ]
};

export default function Blog19Page() {
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
            Do Lab-Grown Diamonds Have Resale Value?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Resale Value Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/do-lab-grown-diamonds-have-resale-value/19 (1).png"
            alt="Resale value of lab-grown diamonds guide"
            title="Understanding Resale Value"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          While lab-grown diamonds can be resold, offers are heavily influenced by shifting manufacturing supplies.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            A lab-grown diamond does not become worthless immediately after it is purchased. It is genuine diamond material and can be offered for resale, trade-in or private purchase.
          </p>
          <p>
            However, having resale value is not the same as retaining the original retail price.
          </p>
          <p>
            Second-hand offers for lab-grown diamonds may be considerably below the amount originally paid. In some cases, the precious metal, craftsmanship or complete jewellery design may contribute more to an offer than the loose diamond itself.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Lab-grown diamonds can have resale value, but they generally do not retain a high proportion of their original retail purchase price.
            Increasing production, falling prices for newly manufactured lab-grown diamonds and a less-developed second-hand market can reduce what professional buyers are willing to offer.
            Resale value depends on the current replacement cost, diamond size and quality, independent report, precious-metal content, brand, condition, design and selling method. A trade-in credit, insurance valuation and cash resale offer are different figures and should not be treated as interchangeable.
          </p>
        </div>

        {/* Resale terms buyers should understand table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Resale Terms Buyers Should Understand
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Term</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it usually means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { t: "Retail price", m: "The amount paid when the jewellery was new" },
                  { t: "Replacement value", m: "Estimated cost of replacing the item through a comparable retailer" },
                  { t: "Insurance valuation", m: "A figure used for insurance purposes, not a guaranteed selling price" },
                  { t: "Cash resale offer", m: "Amount a buyer will pay immediately" },
                  { t: "Trade-in value", m: "Credit offered towards another purchase" },
                  { t: "Buyback value", m: "Amount offered under a seller’s stated repurchase programme" },
                  { t: "Private-sale price", m: "Amount another consumer may agree to pay" },
                  { t: "Scrap-metal value", m: "Value of recoverable precious metal, excluding design and retail costs" },
                  { t: "Auction estimate", m: "Expected selling range before fees, not a guaranteed result" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.t}</td>
                    <td className="p-4">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Can you resell? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Can You Resell a Lab-Grown Diamond?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Yes. There is no physical or gemmological reason preventing a properly disclosed lab-grown diamond from being resold. You can sell through specialist diamond buyers, online resale platforms, private consumer transactions, or store upgrade credits.
          </p>
          <p>
            The main challenge is finding a buyer actively trading lab diamonds. Some dealers do not buy second-hand lab diamonds because new stones are highly abundant, wholesale rates have fallen, and identification requires specialized equipment.
          </p>
          <p>
            <strong>Retail vs Resale Margins:</strong> The original retail price pays for gold alloy, setting labor, hallmarking, store overheads, VAT, and marketing. A resale buyer does not refund these markup margins. They calculate current wholesale costs and deduct testing and listing risks.
          </p>

          {/* IMAGE 2: Tweezer assessments */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-have-resale-value/19 (2).png"
              alt="A professional jeweller assessing loose diamonds with tweezers"
              title="Dealer Assessment and Trade Valuation"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Professional second-hand dealers evaluate clarity, cut, and weight before proposing cash or trade-in rates.
          </p>
        </div>

        {/* Section 2: Why are offers low? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Why Are Lab-Grown Diamond Resale Offers Often Low?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Declining Replacement Costs:</strong> Technology improvements and expanding manufacturing yields have lowered the wholesale cost of newly grown diamonds. Second-hand buyers match your diamond with today&apos;s trade replacement cost—not what you paid years ago.
          </p>
          <p>
            <strong>Less Developed Secondary Markets:</strong> While natural diamond resale loops have existed for centuries, lab-grown secondary channels are young. Dealer margins are heavily influenced by shifting manufacturer outputs.
          </p>

          {/* IMAGE 3: Diffused lighting comparison */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-have-resale-value/19 (3).png"
              alt="Comparing loose round brilliant diamonds under diffused lighting"
              title="Comparing Replacement and Resale Prices"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Falling wholesale costs mean that dealers can source new inventory cheaply, affecting second-hand bids.
          </p>
        </div>

        {/* Section 3: Setting and components */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Setting Value, Grading Reports, and Storage
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Value of Precious Metal:</strong> Often, the solid gold or platinum setting contributes the most predictable share of a second-hand offer. If a buyer values a piece only for scrap, they calculate melt value and exclude design markup.
          </p>
          <p>
            <strong>Grading Certificates:</strong> Independent certificates (like GIA or IGI) help verify parameters, but they are description logs, not cash guarantees.
          </p>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg my-6">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Setting Resale Components</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { c: "Precious Metal Content", d: "Solid hallmarked gold or platinum has intrinsic melt value." },
                  { c: "Centre Diamond Size", d: "Larger, well-cut reported stones attract more remarket interest." },
                  { c: "Design Wearability", d: "Classic designs (solitaires, tennis bracelets) resell faster than highly niche styles." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4">
                      <strong className="text-foreground">{row.c}:</strong> <span className="font-light text-[#5a5a5a]">{row.d}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* IMAGE 4: Scale weighting */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-have-resale-value/19 (4).png"
              alt="Measuring gold alloy weight on a digital laboratory scale"
              title="Intrinsic Metal Value Calculation"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Solid precious metals like 18ct gold or platinum contribute recoverable melt value to finished designs.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Resale Checklist for Buyers
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">When evaluating future value, remember:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Buy lab-grown diamonds for visual enjoyment and use, not as investments.",
                  "Collect all invoice slips, laboratory reports, and hallmark cards together.",
                  "Verify gold and platinum purity marks (hallmarks) are stamped on the metal.",
                  "Differentiate cash offers from trade-in credits or insurance replacement values.",
                  "Obtain multiple quotes before allowing a dealer to unset your diamond."
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
            Lab-grown diamonds can be resold, but they should not be purchased with the assumption that they will retain their original retail price. Shifting trade supplies mean resale offers are often far below original costs. Treat lab-grown diamond jewellery as a beautiful, durable accessory to wear and enjoy, rather than a financial asset.
          </p>
          <p className="mt-4">
            Contact Aurelia Royale for clear product specifications, independent reports, and straightforward purchase terms.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Do lab-grown diamonds have any resale value?",
              a: "They can have resale value, but offers may be substantially below the original retail price."
            },
            {
              q: "Can I sell a lab-grown diamond to a jeweller?",
              a: "Some jewellers purchase lab-grown diamonds, while others do not. Ask whether the business actively handles them before arranging an assessment."
            },
            {
              q: "Why is lab-grown diamond resale value low?",
              a: "New production is readily available, wholesale prices have declined and the second-hand market is less developed than the market for mined diamonds."
            },
            {
              q: "Does a grading report improve resale value?",
              a: "A verifiable report may improve identification and buyer confidence, but it does not guarantee a particular offer."
            },
            {
              q: "Does the gold or platinum setting have value?",
              a: "Yes. Solid precious metal can contribute recoverable metal value, while design, craftsmanship and brand may add value if the piece is resold intact."
            },
            {
              q: "Is an insurance valuation the same as resale value?",
              a: "No. Insurance valuations usually estimate replacement cost, while resale value reflects what a buyer will pay for a second-hand item."
            },
            {
              q: "Is trade-in value the same as cash value?",
              a: "No. Trade-in value is usually store credit linked to another purchase and may be higher than an immediate cash offer."
            },
            {
              q: "Can a lab-grown diamond retain its original price?",
              a: "It is possible but should not be expected. Changing replacement prices and growing supply can substantially reduce resale offers."
            },
            {
              q: "Are larger lab-grown diamonds easier to resell?",
              a: "Not always. Demand, cut, colour, clarity, shape, transparency, documentation and current replacement price all matter."
            },
            {
              q: "Can I sell lab-grown diamond earrings or a bracelet?",
              a: "Yes, although the offer may consider the entire piece, including metal, total diamond weight, construction, condition and demand."
            },
            {
              q: "Where is the best place to sell a lab-grown diamond?",
              a: "Compare the original retailer, specialist buyers, independent jewellers, consignment and private-sale options. The best route depends on risk, speed and expected return."
            },
            {
              q: "Should I buy a lab-grown diamond as an investment?",
              a: "Lab-grown diamonds are generally better viewed as jewellery for wear and enjoyment rather than assets guaranteed to appreciate."
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
            Discover Quality with Integrity at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Every piece is made with solid hallmarked metals and fully disclosed diamonds. Enjoy premium design built to last.
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
