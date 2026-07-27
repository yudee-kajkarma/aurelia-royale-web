import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
  description: "Discover whether lab-grown diamonds are suitable for fine jewellery and how diamond quality, precious metals, craftsmanship and certification affect a piece.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/",
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
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-fine-jewellery.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-fine-jewellery.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond earrings, necklace and bracelet as fine jewellery"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/",
      "name": "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#article",
      "headline": "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
      "description": "Discover whether lab-grown diamonds are suitable for fine jewellery and how diamond quality, precious metals, craftsmanship and certification affect a piece.",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#primaryimage"
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
        "are lab-grown diamonds suitable for fine jewellery",
        "lab-grown diamond fine jewellery",
        "lab-grown diamond jewellery quality",
        "luxury lab-grown diamond jewellery",
        "are lab diamonds durable"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#breadcrumb",
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
          "name": "Are Lab-Grown Diamonds Suitable for Fine Jewellery?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds considered fine jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds can be used in fine jewellery because they are genuine diamonds. The finished piece must also use appropriate metals, secure construction and accurate disclosure."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds durable enough for jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds have the same fundamental hardness as mined diamonds, although any diamond can chip after a sufficiently strong impact."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be set in real gold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds can be set in yellow, white or rose gold, platinum and other suitable jewellery metals."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds look luxurious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A well-cut, transparent lab-grown diamond can display excellent brightness, fire and scintillation. The finished appearance also depends on design, metal quality and craftsmanship."
          }
        },
        {
          "@type": "Question",
          "name": "Is lab-grown diamond jewellery fashion jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Lab-grown diamonds can be used in fine, demi-fine or fashion jewellery. The classification depends on the entire piece."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds need certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not every small diamond needs an individual report. A significant centre diamond is more likely to benefit from independent grading or quality-assessment documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Does a diamond certificate cover the whole jewellery piece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. A loose-diamond report evaluates the submitted diamond and does not necessarily verify the metal, setting, accent stones or workmanship."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamond jewellery become an heirloom?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be passed between generations when thoughtfully designed, properly constructed and maintained."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamond jewellery be repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most properly constructed pieces can be professionally cleaned, resized or repaired, depending on their design, metal and setting."
          }
        },
        {
          "@type": "Question",
          "name": "Is all lab-grown diamond jewellery sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No single origin label proves sustainability. Environmental impact depends on energy, manufacturing, metal sourcing, cutting, packaging and transport."
          }
        }
      ]
    }
  ]
};

export default function Blog13Page() {
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
            Are Lab-Grown Diamonds Suitable for Fine Jewellery?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Quality Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (1).png"
            alt="Lab-grown diamond earrings, necklace and bracelet as fine jewellery"
            title="Are Lab-Grown Diamonds Suitable for Fine Jewellery?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds possess the physical properties and visual brilliance suitable for premium fine jewellery designs.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Fine jewellery is expected to offer more than an attractive appearance. Its materials, construction and finishing should be suitable for lasting use, professional maintenance and, when necessary, repair.
          </p>
          <p>
            Can a lab-grown diamond meet those expectations?
          </p>
          <p>
            Yes. A high-quality lab-grown diamond is suitable for fine jewellery because it is a genuine diamond with essentially the same chemical, physical and optical properties as a mined diamond. Its laboratory origin does not prevent it from being set in gold, platinum or other precious metals or used in expertly constructed earrings, necklaces, bracelets and rings.
          </p>
          <p>
            However, the presence of a lab-grown diamond does not automatically make a piece fine jewellery. The quality of the diamond, metal, setting, clasp, construction, disclosure and aftercare all matter.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Lab-grown diamonds are suitable for fine jewellery. They are crystallised carbon, have the hardness and optical properties associated with diamond, and can be cut and set using established jewellery-making techniques.
            Whether the finished piece qualifies as high-quality fine jewellery depends on the entire design—not just the origin or carat weight of its diamonds.
          </p>
        </div>

        {/* What is Fine Jewellery definition */}
        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-12">
          <h3 className="font-cormorant text-2xl font-semibold text-foreground uppercase tracking-wide">
            What is Fine Jewellery?
          </h3>
          <p>
            There is no single universal definition applied identically by every jeweller and country. In practical terms, fine jewellery usually refers to pieces made using precious metals, gemstones and construction methods intended to provide lasting quality.
          </p>
          <p>Fine jewellery is generally distinguished by:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Precious metals such as gold, platinum, palladium or sterling silver.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Genuine gemstones rather than decorative glass.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Secure stone-setting and carefully finished surfaces and edges.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Serviceable clasps, links and mountings.</span>
            </li>
          </ul>
          <p>
            Price alone does not establish whether a piece is fine jewellery. A costly design can still be poorly constructed, while a more accessible piece can be thoughtfully made from properly disclosed materials.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Gemstone Material Comparison
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Material</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Is it diamond?</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Typical hardness</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Suitable for fine jewellery?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { m: "Lab-grown diamond", d: "Yes", h: "10 on the Mohs scale", s: "Yes" },
                  { m: "Mined diamond", d: "Yes", h: "10", s: "Yes" },
                  { m: "Moissanite", d: "No", h: "Approximately 9.25", s: "Can be used in fine jewellery" },
                  { m: "Cubic zirconia", d: "No", h: "Approximately 8–8.5", s: "More commonly used in fashion jewellery" },
                  { m: "Glass crystal", d: "No", h: "Varies, generally much softer", s: "Primarily fashion jewellery" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.m}</td>
                    <td className="p-4">{row.d}</td>
                    <td className="p-4">{row.h}</td>
                    <td className="p-4">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Suitability features */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Why Are Lab-Grown Diamonds Suitable?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>1. They Have Diamond&apos;s Hardness:</strong> Diamond ranks 10 on the Mohs scale, making it highly resistant to scratching. Polished facet surfaces need to remain smooth to reflect light effectively, and a softer material can accumulate scratches more readily, reducing brilliance.
          </p>
          <p>
            <strong>2. They Retain Their Optical Properties:</strong> A lab-grown diamond does not lose its optical identity simply because it becomes older. Sparle may temporarily appear reduced when oils collect, but cleanings easily restore original brightness, fire, and scintillation.
          </p>
          <p>
            <strong>3. Cut, Metals and Settings:</strong> Lab diamond rough can be cut into round, oval, pear, marquise, and fancy shapes, and set securely using gold, platinum, and other precious metals in prong, bezel, channel, or flush mounts.
          </p>

          {/* IMAGE 2: Faceted Cuts */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (2).png"
              alt="Cut and polished loose lab-grown diamonds in various shapes"
              title="Faceted Diamond Cuts"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Faceted and polished lab diamond crystals perform identically to mined diamonds under optical assessment.
          </p>
        </div>

        {/* Section 2: What makes it high quality */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Makes Lab-Grown Diamond Jewellery High Quality?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A piece must be judged as a complete object:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Diamond Selection:</strong> Transparent, eye-clean, and well-cut. For multi-stone pieces, proper matching in colour and brilliance is essential.</li>
            <li><strong>Precious Metal:</strong> Explicit identification of metal composition (e.g. 18-carat gold, Platinum 950) and presence of a legal hallmark verifying fineness.</li>
            <li><strong>Secure Setting:</strong> Evenly positioned prongs, flat stone seats, protected corners, and good cleaning access.</li>
            <li><strong>Construction:</strong> Smooth interior surfaces, secure solder joints, safety clasps, and strong links.</li>
          </ul>

          {/* IMAGE 3: Craftsmanship Settings */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (3).png"
              alt="Securing lab-grown diamonds in premium solid gold and platinum settings"
              title="Craftsmanship and Setting Security"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Fine jewellery requires secure stone-setting, thick prongs, and legal hallmarks for precious metal verification.
          </p>
        </div>

        {/* Section 3: Categories & Certifications */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Certification and Jewellery Categories
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            While small melee diamonds are rarely certified individually, a significant centre stone benefits from independent grading (GIA/IGI) confirming origin, carat weight, clarity, cut, and treatments.
          </p>
          <p>
            Note that a loose-diamond grading report evaluates the submitted gemstone, not the finished setting, metal purity, or clasp workmanship.
          </p>
          <p>
            Lab-grown diamonds are suitable across all major fine categories:
          </p>
          <ul className="space-y-2 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Earrings:</strong> Studs, drops, and hoops with secure post and backing mounts.</li>
            <li><strong>Necklaces &amp; Pendants:</strong> Designs utilizing strong chains and closed bail loops.</li>
            <li><strong>Bracelets:</strong> Tennis line bracelets and bangles requiring flexible connections and secondary safety clasps.</li>
            <li><strong>Rings:</strong> Solitaires and cocktail settings designed with bands thick enough to withstand impact.</li>
          </ul>

          {/* IMAGE 4: Categories Matching */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-suitable-for-fine-jewellery/13 (4).png"
              alt="Matching lab-grown diamond line bracelets and anniversary rings"
              title="Anniversary Rings and Tennis Bracelets"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Careful diamond matching in colour, cut, and size ensures a cohesive, high-quality finished design.
          </p>
        </div>

        {/* Section 4: Considerations & Resale */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Value, Rarity, and Sustainability Considerations
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Value expectations:</strong> Lab-grown diamond prices can change as supply and growth technology develop. They should not be purchased with the expectation of strong resale value or capital appreciation.
          </p>
          <p>
            <strong>Sustainability:</strong> The origin label does not automatically prove sustainability. Environmental performance depends on verifiable energy sourcing, manufacturing, and transport practices.
          </p>
          <p>
            <strong>Longevity:</strong> While the diamond lasts indefinitely, the setting metal will experience normal wear over decades, requiring periodic prong tightening, rhodium replating, or clasp repairs.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Fine Jewellery Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before Ordering Fine Jewellery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Every diamond is clearly disclosed as laboratory-grown.",
                  "Precious-metal composition (e.g. solid 18k gold or platinum) is explicitly stated.",
                  "A legal hallmark is present or described for verification.",
                  "Individual carat weight and dimensions are fully specified.",
                  "Center stones over 0.50ct include independent grading reports.",
                  "The seller details workmanship warranties and return guidelines."
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
            Lab-grown diamonds are entirely suitable for fine jewellery. Their origin does not reduce their fundamental hardness, brilliance, or capability to be mounted securely. However, diamond selection, metal quality, craftsmanship, and aftercare determine whether the finished design meets a truly premium standard.
          </p>
          <p className="mt-4">
            Explore Aurelia Royale&apos;s signature collections for certified lab-grown diamond jewellery crafted for lifetime beauty.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are lab-grown diamonds considered fine jewellery?",
              a: "Lab-grown diamonds can be used in fine jewellery because they are genuine diamonds. The finished piece must also use appropriate metals, secure construction and accurate disclosure."
            },
            {
              q: "Are lab-grown diamonds durable enough for jewellery?",
              a: "Yes. Lab-grown diamonds have the same fundamental hardness as mined diamonds, although any diamond can chip after a sufficiently strong impact."
            },
            {
              q: "Can lab-grown diamonds be set in real gold?",
              a: "Yes. Lab-grown diamonds can be set in yellow, white or rose gold, platinum and other suitable jewellery metals."
            },
            {
              q: "Do lab-grown diamonds look luxurious?",
              a: "A well-cut, transparent lab-grown diamond can display excellent brightness, fire and scintillation. The finished appearance also depends on design, metal quality and craftsmanship."
            },
            {
              q: "Is lab-grown diamond jewellery fashion jewellery?",
              a: "Not automatically. Lab-grown diamonds can be used in fine, demi-fine or fashion jewellery. The classification depends on the entire piece."
            },
            {
              q: "Do lab-grown diamonds need certification?",
              a: "Not every small diamond needs an individual report. A significant centre diamond is more likely to benefit from independent grading or quality-assessment documentation."
            },
            {
              q: "Does a diamond certificate cover the whole jewellery piece?",
              a: "Usually not. A loose-diamond report evaluates the submitted diamond and does not necessarily verify the metal, setting, accent stones or workmanship."
            },
            {
              q: "Can lab-grown diamond jewellery become an heirloom?",
              a: "It can be passed between generations when thoughtfully designed, properly constructed and maintained."
            },
            {
              q: "Can lab-grown diamond jewellery be repaired?",
              a: "Most properly constructed pieces can be professionally cleaned, resized or repaired, depending on their design, metal and setting."
            },
            {
              q: "Is all lab-grown diamond jewellery sustainable?",
              a: "No single origin label proves sustainability. Environmental impact depends on energy, manufacturing, metal sourcing, cutting, packaging and transport."
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
            Beautifully crafted settings in gold and platinum. Explore our fine laboratory-grown diamond jewellery.
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
