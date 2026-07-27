import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check, Compass, Shield } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "What Are Lab-Grown Diamonds? Complete Buyer’s Guide",
  description: "Discover what lab-grown diamonds are, how CVD and HPHT create them, whether they are real, how they are graded and what buyers should check.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/",
  },
};

// 2. The exact SEO Schema you shared
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
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#webpage",
      "url": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/",
      "name": "What Are Lab-Grown Diamonds? Complete Buyer’s Guide",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#article",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#webpage"
      },
      "headline": "What Are Lab-Grown Diamonds?",
      "description": "Discover what lab-grown diamonds are, how CVD and HPHT create them, whether they are real, how they are graded and what buyers should check.",
      "image": [
        "https://www.aureliaroyale.com/images/blog/what-are-lab-grown-diamonds.webp"
      ],
      "datePublished": "2026-07-14",
      "dateModified": "2026-07-14",
      "author": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "publisher": {
        "@id": "https://www.aureliaroyale.com/#organization"
      },
      "articleSection": "Lab-Grown Diamond Education",
      "keywords": [
        "what are lab-grown diamonds",
        "are lab-grown diamonds real",
        "how are lab-grown diamonds made",
        "CVD diamonds",
        "HPHT diamonds",
        "lab-grown diamond jewellery",
        "certified lab-grown diamonds"
      ],
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#breadcrumb",
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
          "name": "What Are Lab-Grown Diamonds?",
          "item": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/what-are-lab-grown-diamonds/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a lab-grown diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lab-grown diamond is a diamond created in a controlled technological environment rather than formed through geological processes beneath the Earth."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds are real diamonds made from crystallised carbon and possess the essential physical and optical properties associated with diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lab-grown diamonds are not fake diamonds, although their laboratory-grown origin must always be clearly disclosed."
          }
        },
        {
          "@type": "Question",
          "name": "How are lab-grown diamonds made?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds are primarily produced using Chemical Vapour Deposition or High Pressure High Temperature technology."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as cubic zirconia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cubic zirconia is a diamond simulant with a different chemical composition and physical properties."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds the same as moissanite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Moissanite is a different gemstone with its own composition, optical properties and appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds have the hardness and durability expected of diamond, although the surrounding jewellery must still be maintained properly."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds become cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lab-grown diamond does not normally become permanently cloudy through ordinary wear. Oil, soap and cosmetic residue can make its surface appear dull until cleaned."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gemmological laboratories provide reports for qualifying laboratory-grown diamonds and certain finished jewellery pieces."
          }
        },
        {
          "@type": "Question",
          "name": "Are all lab-grown diamonds high quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cut, colour, clarity and craftsmanship vary, so each diamond and jewellery piece should be evaluated individually."
          }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown diamonds may have resale value, but their secondary market is less established and resale prices can be significantly lower than original retail prices."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds sustainable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Their environmental impact depends partly on production efficiency and the energy source used by the manufacturing facility."
          }
        }
      ]
    }
  ]
};

export default function Blog1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {/* 3. Injecting the JSON-LD Script into the page for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Header Banner */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Lab-Grown Diamond Education
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Are Lab-Grown Diamonds?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Published July 14, 2026 • 8 Min Read
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/what-are-lab-grown-diamonds/featured.png"
            alt="Laboratory-grown diamond and finished fine jewellery"
            title="What Are Lab-Grown Diamonds?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds have the essential properties associated with diamond but are created through a controlled technological process.
        </p>

        {/* Introduction */}
        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            For generations, the diamond has stood as the ultimate symbol of endurance, beauty, and refined status. In recent years, a remarkable technological milestone has reshaped the landscape of fine jewellery: the rise of laboratory-grown diamonds. 
          </p>
          <p>
            Unlike historic diamond simulants, which only mimic the superficial appearance of diamond, laboratory-grown diamonds represent a true revolution. They are actual diamonds, formed through human ingenuity and highly sophisticated technology. But what exactly are they, how do they compare to earth-mined stones, and what should you check before selecting one for your personal collection? Let us explore.
          </p>
        </div>

        {/* Heading: How Are Lab-Grown Diamonds Made? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          How Are Lab-Grown Diamonds Made?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-10">
          <p>
            Earth-mined diamonds require billions of years of extreme pressure and intense thermal activity deep within the mantle of the earth to crystallise carbon. In the laboratory, scientists replicate these precise conditions using two cutting-edge methods:
          </p>
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5]">
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold" />
                CVD (Chemical Vapour Deposition)
              </h3>
              <p className="font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
                In a vacuum chamber, a microscopic diamond slice (or &quot;seed&quot;) is exposed to a carbon-rich gas mixture (such as methane). Plasma energy breaks down the gas molecules, causing pure carbon atoms to rain down and crystallise layer-by-layer onto the seed, slowly growing a flawless raw crystal.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-[#e2dfd5]">
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold" />
                HPHT (High Pressure High Temperature)
              </h3>
              <p className="font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
                This process subjects the carbon seed to immense forces (exceeding 1.5 million pounds of pressure per square inch) and temperatures upwards of 1,500°C. Under these colossal conditions, the carbon melts and recrystallises around the diamond seed in a format identical to geological diamond formation.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE 2: CVD and HPHT process comparison */}
        <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
          <Image
            src="/images/blog/what-are-lab-grown-diamonds/cvd-hpht-process.png"
            alt="CVD and HPHT lab-grown diamond creation methods compared"
            title="How Lab-Grown Diamonds Are Made"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-16 border-b border-[#e2dfd5] pb-6">
          CVD and HPHT use different controlled environments to grow a diamond crystal from a seed.
        </p>

        {/* Heading: Lab-Grown vs Natural Origin */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide">
          Lab-Grown vs Natural Origin: The Essential Distinction
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-12">
          <p>
            It is critical to clarify that origin is the only separating factor between the two types of diamonds. Physically, chemically, and optically, they are identical. They both register a 10 on the Mohs hardness scale (making them the hardest known substances) and exhibit the exact same high refraction of light, which produces their trademark sparkle.
          </p>
          <p>
            Because of their structural identity, it is impossible to distinguish between a laboratory-grown and a natural diamond with a standard magnifying loupe or simple visual inspection. Only highly specialized gemmological machinery can detect trace growth elements that identify their unique origin pathway.
          </p>
        </div>

        {/* IMAGE 3: Lab-grown vs natural origin */}
        <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
          <Image
            src="/images/blog/what-are-lab-grown-diamonds/lab-vs-natural.png"
            alt="Lab-grown and natural diamond origins compared"
            title="Lab-Grown vs Natural Diamonds"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-10">
          Lab-grown and natural diamonds share essential diamond properties but have different origins.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-16 border border-[#e2dfd5] rounded-lg">
          <table className="w-full text-left font-jost text-sm border-collapse">
            <thead>
              <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Characteristic</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Laboratory-Grown Diamond</th>
                <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Natural Earth-Mined Diamond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
              <tr>
                <td className="p-4 font-semibold text-foreground">Chemical Composition</td>
                <td className="p-4">Crystallised Carbon (C)</td>
                <td className="p-4">Crystallised Carbon (C)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Refractive Index</td>
                <td className="p-4">2.417 (Identical Brilliance)</td>
                <td className="p-4">2.417 (Identical Brilliance)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Hardness (Mohs Scale)</td>
                <td className="p-4">10 (Extreme Durability)</td>
                <td className="p-4">10 (Extreme Durability)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Time to Form</td>
                <td className="p-4">Weeks to Months</td>
                <td className="p-4">1 to 3.3 Billion Years</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Value Proposition</td>
                <td className="p-4">Premium look at an accessible price point</td>
                <td className="p-4">High investment value linked to scarcity</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Heading: What Does Certification Mean? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          What Does Certification Mean?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-10">
          <p>
            Just like natural diamonds, laboratory-grown diamonds undergo rigorous grading by global gemmological laboratories. Independent authorities like the International Gemological Institute (IGI) and the Gemological Institute of America (GIA) assess each diamond according to the classic 4Cs: Carat, Cut, Color, and Clarity.
          </p>
          <p>
            When a laboratory grades a diamond, they issue an official certificate documenting its exact physical characteristics. Furthermore, reputable growers laser-inscribe a microscopic report number onto the diamond&apos;s girdle. This number allows you to verify the origin and quality details online, protecting you from misrepresentation and ensuring absolute buying transparency.
          </p>
        </div>

        {/* IMAGE 4: Certification and report verification */}
        <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
          <Image
            src="/images/blog/what-are-lab-grown-diamonds/certification.png"
            alt="Laboratory-grown diamond grading and certificate verification"
            title="Lab-Grown Diamond Certification"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-16 border-b border-[#e2dfd5] pb-6">
          Certification can confirm laboratory-grown origin and document relevant quality characteristics.
        </p>

        {/* Heading: What to Check Before Buying */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide">
          What to Check Before Buying Lab-Grown Jewellery
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b] mb-12">
          <p>
            When choosing laboratory-grown diamond jewellery, you should proceed with the same care as buying a traditional diamond. A structured checklist will help you buy with total confidence:
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <strong className="text-foreground font-medium">Verify the Certificate:</strong> Ensure the diamond comes with an IGI or GIA grading report specifically stating it is &quot;Laboratory-Grown.&quot;
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <strong className="text-foreground font-medium">Check the Cut Grade:</strong> The quality of the cut determines how much light the diamond reflects. Always look for a cut grade of &quot;Excellent&quot; or &quot;Ideal.&quot;
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <strong className="text-foreground font-medium">Examine the Metal &amp; Craftsmanship:</strong> A premium diamond deserves a premium setting. Ensure the metal is certified 18k Gold or Platinum, with prongs set to offer long-term security.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <strong className="text-foreground font-medium">Clear Sourcing &amp; Delivery:</strong> Verify that the retailer offers fully insured shipping, proper product specifications, and a clear return policy.
              </div>
            </li>
          </ul>
        </div>

        {/* IMAGE 5: Buyer checklist */}
        <div className="relative w-full h-[280px] md:h-[450px] mb-4 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
          <Image
            src="/images/blog/what-are-lab-grown-diamonds/buyer-checklist.png"
            alt="Lab-grown diamond jewellery buying checklist"
            title="What to Check Before Buying Lab-Grown Diamond Jewellery"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-16">
          Origin, quality, metal, certification, availability and delivery information should be reviewed before ordering.
        </p>

        {/* 4. FAQ Accordion Section matching the FAQ in your JSON block */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "What is a lab-grown diamond?",
              a: "A lab-grown diamond is a diamond created in a controlled technological environment rather than formed through geological processes beneath the Earth."
            },
            {
              q: "Are lab-grown diamonds real?",
              a: "Yes. Lab-grown diamonds are real diamonds made from crystallised carbon and possess the essential physical and optical properties associated with diamond."
            },
            {
              q: "Are lab-grown diamonds fake?",
              a: "No. Lab-grown diamonds are not fake diamonds, although their laboratory-grown origin must always be clearly disclosed."
            },
            {
              q: "How are lab-grown diamonds made?",
              a: "Lab-grown diamonds are primarily produced using Chemical Vapour Deposition (CVD) or High Pressure High Temperature (HPHT) technology."
            },
            {
              q: "Are lab-grown diamonds the same as cubic zirconia?",
              a: "No. Cubic zirconia is a diamond simulant with a completely different chemical composition and physical properties."
            },
            {
              q: "Are lab-grown diamonds the same as moissanite?",
              a: "No. Moissanite is a different gemstone with its own composition, optical properties and appearance."
            },
            {
              q: "Do lab-grown diamonds last?",
              a: "Yes. Lab-grown diamonds have the hardness and durability expected of diamond, although the surrounding jewellery must still be maintained properly."
            },
            {
              q: "Can lab-grown diamonds become cloudy?",
              a: "A lab-grown diamond does not normally become permanently cloudy through ordinary wear. Oil, soap and cosmetic residue can make its surface appear dull until cleaned."
            },
            {
              q: "Can lab-grown diamonds be certified?",
              a: "Yes. Gemmological laboratories provide reports for qualifying laboratory-grown diamonds and certain finished jewellery pieces."
            },
            {
              q: "Are all lab-grown diamonds high quality?",
              a: "No. Cut, colour, clarity and craftsmanship vary, so each diamond and jewellery piece should be evaluated individually."
            },
            {
              q: "Do lab-grown diamonds have resale value?",
              a: "Lab-grown diamonds may have resale value, but their secondary market is less established and resale prices can be significantly lower than original retail prices."
            },
            {
              q: "Are lab-grown diamonds sustainable?",
              a: "Not automatically. Their environmental impact depends partly on production efficiency and the energy source used by the manufacturing facility."
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
            Discover the Brilliance of Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            From meticulously crafted solitaire rings to custom-designed masterworks, explore our collection of certified laboratory-grown diamond jewellery.
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