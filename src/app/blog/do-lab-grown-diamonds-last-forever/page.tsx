import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Do Lab-Grown Diamonds Last Forever? Durability Guide",
  description: "Learn how long lab-grown diamonds last, whether they deteriorate, fade, scratch or chip, and how settings and maintenance affect their longevity.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/",
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
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#webpage",
      "url": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/",
      "name": "Do Lab-Grown Diamonds Last Forever?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#primaryimage"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-last-forever.webp",
      "contentUrl": "https://www.aureliaroyale.com/images/blog/do-lab-grown-diamonds-last-forever.webp",
      "width": 1600,
      "height": 900,
      "caption": "Laboratory-grown diamond jewellery designed for long-term wear"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#webpage"
      },
      "headline": "Do Lab-Grown Diamonds Last Forever?",
      "description": "Learn how long lab-grown diamonds last, whether they deteriorate, fade, scratch or chip, and how settings and maintenance affect their longevity.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#primaryimage"
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
        "do lab-grown diamonds last forever",
        "how long do lab-grown diamonds last",
        "do lab-grown diamonds deteriorate",
        "can lab-grown diamonds chip",
        "are lab-grown diamonds durable",
        "lab-grown diamond longevity"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#breadcrumb",
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
          "name": "Do Lab-Grown Diamonds Last Forever?",
          "item": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/do-lab-grown-diamonds-last-forever/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last forever?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can retain their diamond structure and optical properties indefinitely under normal jewellery conditions, but they are not indestructible."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last as long as natural diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can. Laboratory origin does not create a predetermined shorter lifespan."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds deteriorate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They do not ordinarily deteriorate through age or normal wear."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lab-grown diamond chip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A strong impact on a vulnerable edge, point or corner can cause chipping."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds get scratched?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are exceptionally scratch-resistant, but another diamond can scratch them."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds turn yellow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They do not normally turn yellow because of age. Lighting, dirt or reflections from the setting can make them appear warmer."
          }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT last longer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither growth method automatically provides a longer lifespan. The individual diamond and setting matter more."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds become heirlooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Properly maintained laboratory-grown diamond jewellery can be passed between generations."
          }
        },
        {
          "@type": "Question",
          "name": "Does the setting wear out before the diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can. Prongs, clasps, chains and other metal components may require repair while the diamond remains intact."
          }
        },
        {
          "@type": "Question",
          "name": "How should lab-grown diamond jewellery be stored?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Store pieces separately in lined compartments or soft pouches to prevent diamonds from scratching other jewellery or each other."
          }
        }
      ]
    }
  ]
};

export default function Blog10Page() {
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
            Do Lab Diamonds Last Forever?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Durability Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/do-lab-grown-diamonds-last-forever/10 (1).png"
            alt="Laboratory-grown diamond jewellery designed for long-term wear"
            title="Do Lab-Grown Diamonds Last Forever?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds offer exceptional hardness and stability, allowing them to last for generations.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            A lab-grown diamond can retain its diamond structure, hardness and optical properties indefinitely under normal jewellery conditions.
          </p>
          <p>
            It does not have an expiry date, and it does not gradually turn into another material. Its laboratory origin does not cause it to wear out faster than a natural diamond.
          </p>
          <p>
            However, &quot;forever&quot; should not be confused with &quot;indestructible.&quot; A laboratory-grown diamond can still chip if struck forcefully at a vulnerable point. It can become loose if the setting wears down, and it can look dull when oils or residue collect on its surface.
          </p>
          <p>
            The diamond itself can potentially last for generations, but the complete jewellery piece requires care and maintenance.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <div className="font-jost text-base font-light text-[#3b3b3b] space-y-3 leading-relaxed">
            <p>
              Lab-grown diamonds are capable of lasting as long as natural diamonds because both have the defining crystal structure and hardness of diamond.
            </p>
            <p>Under normal conditions, a lab-grown diamond will not:</p>
            <ul className="space-y-2 list-none pl-0 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Expire or decompose over time.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Wear away or fade because it was grown in a laboratory.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span>Permanently lose its brilliance due to age.</span>
              </li>
            </ul>
            <p>It can still:</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>Chip from a hard impact or fracture along a cleavage plane.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>Become loose in its setting as prongs wear down.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>Accumulate surface dirt and oils that temporarily reduce sparkle.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Longevity Table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Lab-Grown Diamond Longevity at a Glance
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Question</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Short Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { q: "Does a lab-grown diamond expire?", a: "No" },
                  { q: "Does it deteriorate with age?", a: "Not under ordinary jewellery conditions" },
                  { q: "Does it last as long as a natural diamond?", a: "It can" },
                  { q: "Can it scratch?", a: "It is extremely scratch-resistant, but another diamond can scratch it" },
                  { q: "Can it chip?", a: "Yes, if struck hard in a vulnerable area" },
                  { q: "Can it break?", a: "Yes, under sufficient force" },
                  { q: "Can it fade?", a: "Normal colourless diamond material does not fade from ordinary wear" },
                  { q: "Can it turn yellow with age?", a: "Not simply because it is laboratory-grown" },
                  { q: "Can it look dull?", a: "Yes, when dirty or when the cut performs poorly" },
                  { q: "Can the setting wear out?", a: "Yes; metal and prongs may wear sooner than the diamond" },
                  { q: "Can it become an heirloom?", a: "Yes, when the piece is well made and maintained" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.q}</td>
                    <td className="p-4">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Why do they last? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Why Can Lab-Grown Diamonds Last So Long?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Lab-grown diamonds are made from carbon atoms arranged in diamond&apos;s characteristic crystal structure. That structure gives them exceptional hardness, high resistance to surface abrasion, strong chemical resistance, and optical stability.
          </p>
          <p>
            The production method changes the diamond&apos;s origin, not its fundamental identity as diamond material. GIA describes diamond as having remarkable hardness, low thermal expansion, and high resistance to corrosion, acids, and radiation.
          </p>
        </div>

        {/* Section 2: Durability Factors */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Does &quot;Diamond Durability&quot; Actually Mean?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Gemstone durability has three main components:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Hardness:</strong> Resistance to scratching and abrasion. Diamond scores 10 on the Mohs hardness scale. While it is highly resistant to ordinary materials, storing diamond-set jewellery together can scratch other diamonds.</li>
            <li><strong>Toughness:</strong> Resistance to chipping and breaking. A forceful blow along a cleavage plane can cleave or fracture diamond. Edge points and sharp corners are most vulnerable.</li>
            <li><strong>Stability:</strong> Resistance to heat, light, and chemicals. Normal exposure to indoor or day lighting does not affect colourless diamonds, but extreme temperatures (like a jeweller&apos;s torch) can cause oxidation.</li>
          </ul>

          {/* IMAGE 2: Durability features */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-last-forever/10 (2).png"
              alt="Comparing hardness, toughness and chemical stability of lab diamonds"
              title="Understanding Diamond Durability"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Diamond&apos;s structure yields Mohs 10 hardness, which is resistant to everyday surface scratching.
          </p>
        </div>

        {/* Section 3: Chipping and protection */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Protecting Different Diamond Shapes from Chipping
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Pointed and cornered shapes benefit from protective settings. The setting should protect vulnerable areas without covering the diamond excessively:
          </p>
          
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg my-6">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Diamond Shape</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Area Needing Protection</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Suitable Setting Consideration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "Round", a: "Girdle", c: "Secure, evenly spaced prongs" },
                  { s: "Oval", a: "Curved girdle", c: "Balanced prong placement" },
                  { s: "Emerald", a: "Cut corners and girdle", c: "Corner protection" },
                  { s: "Princess", a: "Sharp corners", c: "V-shaped corner prongs" },
                  { s: "Pear", a: "Pointed tip", c: "V-prong or protective cap" },
                  { s: "Marquise", a: "Both pointed ends", c: "V-prongs at each tip" },
                  { s: "Heart", a: "Point and cleft", c: "Protected point and secure upper prongs" },
                  { s: "Cushion", a: "Corners and girdle", c: "Well-positioned corner prongs" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.a}</td>
                    <td className="p-4">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* IMAGE 3: Settings and shapes */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-last-forever/10 (3).png"
              alt="Faceted diamond shapes in protective prong and bezel settings"
              title="Shapes and Settings Protection"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Protective settings help buffer vulnerable corners and edges on princess, pear, and marquise cuts.
          </p>
        </div>

        {/* Section 4: Deterioration & Fading */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Deterioration, Fading, and Apparent Changes
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Lab-grown diamonds do not naturally soften, dissolve, or turn yellow over time because of age. Perceived yellowing or dullness is usually surface build-up (soap, lotion, make-up, or skin oils) or reflections from yellow gold settings and white gold losing its rhodium plating. Regular cleaning can easily restore the stone&apos;s original sparkle.
          </p>
          <p>
            <strong>Will the setting last?</strong> Not necessarily. The diamond will remain stable while the surrounding metal wears. Fine prongs can thin, clasps can loosen, and jump rings can wear. Jewellery longevity depends on both the stone and the maintenance of the setting.
          </p>
        </div>

        {/* Section 5: Care & Storage */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Caring for and Storing Diamond Jewellery
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            With appropriate care, lab-grown diamond jewellery can remain wearable for decades and become a cherished family heirloom. Follow these best practices:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Clean Gently:</strong> Use warm water, mild soap, and a soft brush to remove ordinary residue from diamond-only jewellery.</li>
            <li><strong>Store Separately:</strong> Diamonds scratch other jewellery and each other. Use separate compartments or soft pouches.</li>
            <li><strong>Avoid Impact:</strong> Remove rings or bracelets before heavy sports, gardening, or using heavy tools.</li>
            <li><strong>Inspect Settings:</strong> Check regularly for loose stones, bent prongs, or catching metal. Arrange professional inspections periodically.</li>
          </ul>

          {/* IMAGE 4: Care and Storage */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/do-lab-grown-diamonds-last-forever/10 (4).png"
              alt="Cleaning and storing laboratory-grown diamond jewellery separately"
              title="Jewellery Care and Storage"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Storing diamonds separately prevents them from scratching other gemstones or precious metals.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Longevity Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Longevity Checks Before Buying</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Laboratory-grown origin is clearly disclosed.",
                  "Pointed corners or tips are protected by the setting design.",
                  "The girdle is not dangerously thin or exposed.",
                  "Setting metal and fineness are fully specified (e.g. 18k or platinum).",
                  "Prongs appear secure, robust, and evenly positioned.",
                  "The clasp matches the weight of the necklet or bracelet.",
                  "Product care and maintenance instructions are available."
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
            A lab-grown diamond can last for generations and does not have a shorter lifespan simply because it was created in a laboratory. While the diamond itself can last indefinitely, the complete jewellery piece requires care, safe storage, cleaning, and periodic setting maintenance.
          </p>
          <p className="mt-4">
            Explore Aurelia Royale&apos;s collections for securely set laboratory-grown diamond jewellery crafted for lifetime wear.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Do lab-grown diamonds last forever?",
              a: "They can retain their diamond structure and optical properties indefinitely under normal jewellery conditions, but they are not indestructible."
            },
            {
              q: "Do lab-grown diamonds last as long as natural diamonds?",
              a: "They can. Laboratory origin does not create a predetermined shorter lifespan."
            },
            {
              q: "Do lab-grown diamonds deteriorate?",
              a: "They do not ordinarily deteriorate through age or normal wear."
            },
            {
              q: "Can a lab-grown diamond chip?",
              a: "Yes. A strong impact on a vulnerable edge, point or corner can cause chipping."
            },
            {
              q: "Can lab-grown diamonds get scratched?",
              a: "They are exceptionally scratch-resistant, but another diamond can scratch them."
            },
            {
              q: "Do lab-grown diamonds turn yellow?",
              a: "They do not normally turn yellow because of age. Lighting, dirt or reflections from the setting can make them appear warmer."
            },
            {
              q: "Does CVD or HPHT last longer?",
              a: "Neither growth method automatically provides a longer lifespan. The individual diamond and setting matter more."
            },
            {
              q: "Can lab-grown diamonds become heirlooms?",
              a: "Yes. Properly maintained laboratory-grown diamond jewellery can be passed between generations."
            },
            {
              q: "Does the setting wear out before the diamond?",
              a: "It can. Prongs, clasps, chains and other metal components may require repair while the diamond remains intact."
            },
            {
              q: "How should lab-grown diamond jewellery be stored?",
              a: "Store pieces separately in lined compartments or soft pouches to prevent diamonds from scratching other jewellery or each other."
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
            Discover Lifetime Brilliance at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Crafted to be worn, loved, and passed down. Explore our signature laboratory-grown diamond jewellery.
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
