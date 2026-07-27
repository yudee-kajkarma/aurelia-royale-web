import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Advantages of Lab-Grown Diamonds: 12 Buyer Benefits",
  description: "Explore the advantages of lab-grown diamonds, including genuine diamond properties, durability, design choice, accessible pricing and independent reports.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/",
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
      "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/advantages-of-lab-grown-diamonds.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/advantages-of-lab-grown-diamonds.webp",
      "width": 1600,
      "height": 900,
      "caption": "Advantages of choosing lab-grown diamond jewellery"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/",
      "name": "Advantages of Lab-Grown Diamonds: 12 Buyer Benefits",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#article",
      "headline": "What Are the Advantages of Lab-Grown Diamonds?",
      "description": "Explore the advantages of lab-grown diamonds, including genuine diamond properties, durability, design choice, accessible pricing and independent reports.",
      "url": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#primaryimage"
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
        "advantages of lab-grown diamonds",
        "benefits of lab-grown diamonds",
        "pros of lab-grown diamonds",
        "why choose lab-grown diamonds",
        "benefits of lab-grown diamond jewellery"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#breadcrumb",
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
          "name": "What Are the Advantages of Lab-Grown Diamonds?",
          "item": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/advantages-of-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the biggest advantage of lab-grown diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Their main advantage is access to genuine diamond material at a generally lower price than a mined diamond with comparable specifications."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They consist of crystallised carbon and have essentially the same chemical, physical and optical properties as mined diamonds."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds sparkle like mined diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A well-cut lab-grown diamond can display comparable brightness, fire and scintillation. Cut quality and cleanliness strongly affect sparkle."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a larger diamond by choosing lab-grown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Their generally lower pricing may make larger carat weights more accessible within the same budget."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds suitable for fine jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They can be set in gold, platinum and other properly disclosed jewellery metals using established setting techniques."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be worn regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. They are sufficiently durable for regular wear, although jewellery should be removed for impact, chemicals, exercise and swimming."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds receive grading reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Important loose diamonds can receive independent reports or quality assessments. Small accent diamonds may not be individually reported."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds always environmentally friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The diamond is grown rather than mined, but environmental impact depends on energy, manufacturing, cutting, metal sourcing and transport."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A resale market may exist, but offers can be significantly below the original retail price and should not be guaranteed."
          }
        },
        {
          "@type": "Question",
          "name": "Is CVD better than HPHT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither method is automatically better. Both can produce high-quality diamonds, and the individual stone should be assessed."
          }
        }
      ]
    }
  ]
};

export default function Blog17Page() {
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
            What Are the Advantages of Lab Diamonds?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Advantages Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/advantages-of-lab-grown-diamonds/17 (1).png"
            alt="Advantages of choosing lab-grown diamond jewellery"
            title="Buyer Advantages of Lab-Grown Diamonds"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds offer accessible pricing and design freedom without compromising diamond properties.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamonds offer buyers a different way to purchase genuine diamond jewellery. They provide diamond&apos;s familiar brilliance and durability while generally making a broader range of sizes, shapes and designs accessible within a given budget.
          </p>
          <p>
            Their growing popularity, however, has led to some exaggerated claims. Lab-grown diamonds are not automatically flawless, carbon-neutral, individually certified or guaranteed to retain their purchase price.
          </p>
          <p>
            Understanding their genuine advantages—and their limitations—allows buyers to decide whether they suit their priorities.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            The main advantages of lab-grown diamonds are that they are genuine diamonds, offer diamond&apos;s hardness and optical properties, are generally more affordable than comparable mined diamonds and provide access to a wider range of sizes and jewellery designs.
            They can be independently assessed, set in precious metals and used in fine jewellery intended for regular wear. Their laboratory origin also avoids the extraction of the diamond itself from a mine, although environmental impact still depends on energy, manufacturing, cutting, metal sourcing and transport.
          </p>
        </div>

        {/* Advantages at a glance table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Advantages at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Advantage</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it means for the buyer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { a: "Genuine diamond material", b: "Not moissanite, glass or cubic zirconia" },
                  { a: "Diamond optical properties", b: "Can display brightness, fire and scintillation" },
                  { a: "Excellent hardness", b: "Highly resistant to scratching" },
                  { a: "More accessible pricing", b: "More options within a given budget" },
                  { a: "Greater size flexibility", b: "Potential to select a larger diamond" },
                  { a: "Broader design freedom", b: "More diamonds can be incorporated into a design" },
                  { a: "Variety of shapes", b: "Available in traditional and modern cuts" },
                  { a: "Suitable for fine jewellery", b: "Can be set in gold, platinum and other metals" },
                  { a: "Suitable for regular wear", b: "Durable when properly set and maintained" },
                  { a: "Independent assessment", b: "Important stones can have laboratory reports" },
                  { a: "Clear modern origin", b: "Produced using CVD or HPHT technology" },
                  { a: "Avoids diamond mining", b: "The diamond itself is grown rather than extracted" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.a}</td>
                    <td className="p-4">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Chemical & Optical Properties */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Genuine Diamond Properties &amp; Brilliance
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Lab-Grown Diamonds Are Genuine Diamonds:</strong> They consist of crystallised carbon and possess essentially the same chemical, physical, and optical properties as natural diamonds. GIA confirms that both are diamond, distinguishing them fundamentally from simulants like cubic zirconia or moissanite.
          </p>
          <p>
            <strong>Optical Performance:</strong> A well-cut lab diamond displays identical white brightness, spectral fire, and scintillation during movement. Proportions, symmetry, and polish are what determine light return, rather than the origin of the stone.
          </p>
          <p>
            <strong>Scratch Resistance:</strong> Ranking 10 on the Mohs hardness scale, lab diamonds are highly resistant to scratches. Note that hardness does not mean unbreakable; diamonds can still chip along cleavage directions under direct impacts.
          </p>

          {/* IMAGE 2: Genuine Properties */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/advantages-of-lab-grown-diamonds/17 (2).png"
              alt="A selection of highly refractive loose round diamonds"
              title="Refractive Brilliance and Hardness"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Optically identical to natural diamonds, lab-grown diamonds rank 10 on the Mohs scale for superior scratch resistance.
          </p>
        </div>

        {/* Section 2: Pricing & Design Freedom */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Accessible Pricing, Size, and Design Freedom
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>More Options Within a Budget:</strong> Since lab diamonds are generally priced lower than mined diamonds of identical grading, buyers can redirect their budget toward choosing larger carat weights, higher cut quality, custom precious-metal settings, or matching suites.
          </p>
          <p>
            <strong>Design Versatility:</strong> Designers have more freedom to create intricate styles like multi-stone settings, halos, channel links, and graduated necklaces. Diamonds are available in round, oval, pear, cushion, marquise, emerald, and radiant cuts.
          </p>
          <p>
            <strong>Fine Jewellery Settings:</strong> They can be set in 18-carat gold or platinum and undergo standard cleanings, polishing, and resizing repairs.
          </p>

          {/* IMAGE 3: Settings */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/advantages-of-lab-grown-diamonds/17 (3).png"
              alt="Stunning yellow and rose gold diamond pendant settings"
              title="Precious Gold and Platinum Settings"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Lower stone pricing lets buyers choose larger sizes, custom shapes, and sturdier gold or platinum settings.
          </p>
        </div>

        {/* Section 3: Assessment & Origins */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Independent Reports, Inscriptions, and Mining
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Independent Assessment:</strong> Major loose lab diamonds receive reports from laboratories like GIA or IGI, document matching laser inscriptions on their girdles, and verify origins and treatments.
          </p>
          <p>
            <strong>Mining and Energy:</strong> Growing diamonds avoids direct geological extraction. However, greenhouse footprints vary based on the growth facility&apos;s energy efficiency. Clean claim disclosures should align with codes like the UK Green Claims Code.
          </p>
          <p>
            <strong>Resale Considerations:</strong> Lab diamonds have lower resale expectations compared to natural diamonds. Always prioritize purchasing for visual enjoyment and durability rather than financial investment purposes.
          </p>

          {/* IMAGE 4: Certificates */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/advantages-of-lab-grown-diamonds/17 (4).png"
              alt="Inspecting diamond laser registration number on a certificate report"
              title="Laser Registration and Grading Verification"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            GIA and IGI reports offer complete assessment data for loose lab-grown diamonds.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Buyer Advantages Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">How to make advantages count:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Verify that the stone is genuine laboratory-grown diamond material.",
                  "Prioritize cut quality and transparency over carat size alone.",
                  "Request GIA/IGI grading check numbers for loose center stones.",
                  "Select solid gold (18k/14k) or Platinum 950 settings for secure wear.",
                  "Understand that resale values vary and are generally low.",
                  "Verify the seller provides clean warranties and return windows."
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
            Lab-grown diamonds offer genuine and practical advantages. They provide diamond&apos;s optical properties, exceptional hardness, and suitability for fine jewellery while making larger sizes and diamond-rich designs more accessible. However, origin does not guarantee flawless quality, sustainability, or future resale value; each stone should be evaluated individually.
          </p>
          <p className="mt-4">
            Explore Aurelia Royale&apos;s certified lab-grown diamond jewellery collections or contact us for assistance.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is the biggest advantage of lab-grown diamonds?",
              a: "Their main advantage is access to genuine diamond material at a generally lower price than a mined diamond with comparable specifications."
            },
            {
              q: "Are lab-grown diamonds real?",
              a: "Yes. They consist of crystallised carbon and have essentially the same chemical, physical and optical properties as mined diamonds."
            },
            {
              q: "Do lab-grown diamonds sparkle like mined diamonds?",
              a: "A well-cut lab-grown diamond can display comparable brightness, fire and scintillation. Cut quality and cleanliness strongly affect sparkle."
            },
            {
              q: "Can I get a larger diamond by choosing lab-grown?",
              a: "Often, yes. Their generally lower pricing may make larger carat weights more accessible within the same budget."
            },
            {
              q: "Are lab-grown diamonds suitable for fine jewellery?",
              a: "Yes. They can be set in gold, platinum and other properly disclosed jewellery metals using established setting techniques."
            },
            {
              q: "Can lab-grown diamonds be worn regularly?",
              a: "Yes. They are sufficiently durable for regular wear, although jewellery should be removed for impact, chemicals, exercise and swimming."
            },
            {
              q: "Do lab-grown diamonds receive grading reports?",
              a: "Important loose diamonds can receive independent reports or quality assessments. Small accent diamonds may not be individually reported."
            },
            {
              q: "Are lab-grown diamonds always environmentally friendly?",
              a: "No. The diamond is grown rather than mined, but environmental impact depends on energy, manufacturing, cutting, metal sourcing and transport."
            },
            {
              q: "Do lab-grown diamonds have resale value?",
              a: "A resale market may exist, but offers can be significantly below the original retail price and should not be guaranteed."
            },
            {
              q: "Is CVD better than HPHT?",
              a: "Neither method is automatically better. Both can produce high-quality diamonds, and the individual stone should be assessed."
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
            Discover Buyer Benefits at Aurelia Royale
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
