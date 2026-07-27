import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Are Lab-Grown Diamonds Suitable for Regular Wear?",
  description: "Can you wear lab-grown diamonds regularly? Learn about durability, secure settings, daily activities, cleaning and protecting diamond jewellery from damage.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/",
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
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-regular-wear.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/2026/07/lab-grown-diamonds-regular-wear.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond jewellery suitable for regular wear"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#webpage",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/",
      "name": "Are Lab-Grown Diamonds Suitable for Regular Wear?",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#breadcrumb"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#article",
      "headline": "Are Lab-Grown Diamonds Suitable for Regular Wear?",
      "description": "Can you wear lab-grown diamonds regularly? Learn about durability, secure settings, daily activities, cleaning and protecting diamond jewellery from damage.",
      "url": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/",
      "mainEntityOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#webpage"
      },
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#primaryimage"
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
        "are lab-grown diamonds suitable for regular wear",
        "can you wear lab-grown diamonds every day",
        "lab-grown diamonds for everyday wear",
        "are lab-grown diamonds durable",
        "everyday lab-grown diamond jewellery"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#breadcrumb",
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
          "name": "Are Lab-Grown Diamonds Suitable for Regular Wear?",
          "item": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/are-lab-grown-diamonds-suitable-for-regular-wear/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds be worn every day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lab-grown diamonds are sufficiently durable for frequent wear, although jewellery should be removed for activities involving impact, chemicals, pressure or a high risk of loss."
          }
        },
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds as durable as mined diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lab-grown and mined diamonds have essentially the same fundamental material properties. Both resist scratching exceptionally well, and both can chip after a strong impact."
          }
        },
        {
          "@type": "Question",
          "name": "Can I shower with lab-grown diamond jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is better to remove it. Soap and hair products can build up around the diamond, while wet handling and towel snagging increase the risk of damage or loss."
          }
        },
        {
          "@type": "Question",
          "name": "Can I swim with a lab-grown diamond ring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Chlorinated water can affect jewellery metals, and cold water can make a ring easier to lose."
          }
        },
        {
          "@type": "Question",
          "name": "Can I exercise while wearing lab-grown diamonds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diamond jewellery should normally be removed before exercise because equipment, impact, pressure and repeated movement can damage the setting or cause loss."
          }
        },
        {
          "@type": "Question",
          "name": "Will regular wear make a lab-grown diamond cloudy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular wear may allow oil, soap and cosmetics to collect on the surface. This temporary film can reduce brilliance, but the diamond does not naturally become cloudy through ageing."
          }
        },
        {
          "@type": "Question",
          "name": "Which diamond setting is best for active wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A secure, lower-profile bezel or protected prong setting can reduce snagging and protect vulnerable diamond edges."
          }
        },
        {
          "@type": "Question",
          "name": "How often should regularly worn diamond jewellery be cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clean it when visible residue begins to reduce its brilliance. Frequently worn pieces may require gentle home cleaning regularly."
          }
        },
        {
          "@type": "Question",
          "name": "How often should the setting be professionally inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many jewellers recommend inspection approximately every six months for frequently worn pieces, or sooner after an impact or visible change."
          }
        },
        {
          "@type": "Question",
          "name": "Can lab-grown diamonds scratch other jewellery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Diamond can scratch precious metals, gemstones and other diamonds, so jewellery pieces should be stored separately."
          }
        }
      ]
    }
  ]
};

export default function Blog14Page() {
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
            Are Lab-Grown Diamonds Suitable for Regular Wear?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Wear Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (1).png"
            alt="Lab-grown diamond jewellery suitable for regular wear"
            title="Are Lab-Grown Diamonds Suitable for Regular Wear?"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Laboratory-grown diamonds are highly resilient, making them well-suited for everyday styles when properly cared for.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Lab-grown diamond jewellery does not have to remain inside a jewellery box until a special occasion. A properly made piece can be worn regularly, whether it is a pair of diamond earrings, a necklace, a bracelet or a favourite ring.
          </p>
          <p>
            Lab-grown diamonds are genuine diamonds with the hardness and stability associated with diamond. They do not become less durable because they were grown using CVD or HPHT technology.
          </p>
          <p>
            However, &quot;suitable for regular wear&quot; does not mean indestructible or appropriate for every activity. The diamond, precious metal, setting, clasp and overall construction experience different forms of wear.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Yes, lab-grown diamonds are suitable for regular wear. They have essentially the same chemical, physical and optical properties as mined diamonds and rank 10 on the Mohs hardness scale.
            Nevertheless, any diamond can chip following a hard impact. Settings can loosen, precious metals can scratch and clasps can wear. Remove diamond jewellery before swimming, exercise, gardening, household cleaning and other activities that expose it to impact, chemicals or loss.
          </p>
        </div>

        {/* Section 1: Are lab-grown diamonds durable */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Are Lab-Grown Diamonds Durable?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Lab-grown diamonds are made from crystallised carbon. Their laboratory origin does not make them a softer imitation of diamond.
          </p>
          <p>
            GIA explains that laboratory-grown diamonds possess essentially the same chemical, physical and optical properties as mined diamonds. The differences associated with their origin generally require professional equipment to detect.
          </p>
        </div>

        {/* Durability factors table */}
        <div className="my-12">
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Property</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What it means</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Why it matters for jewellery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { p: "Hardness", m: "Resistance to scratching and abrasion", w: "Helps polished diamond facets retain their finish" },
                  { p: "Toughness", m: "Resistance to breaking and chipping", w: "Determines how the stone responds to impact" },
                  { p: "Stability", m: "Resistance to heat, chemicals and environmental changes", w: "Affects how the stone handles normal conditions" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.p}</td>
                    <td className="p-4">{row.m}</td>
                    <td className="p-4">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
            Diamond ranks at the top of the Mohs hardness scale. This makes it exceptionally resistant to scratches, but hardness is not the same as toughness. A sufficiently strong impact at a vulnerable angle can still chip a lab-grown or mined diamond. GIA specifically notes that any diamond can break when struck hard enough in the right place.
          </p>

          {/* IMAGE 2: Everyday rings */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (2).png"
              alt="Stunning round brilliant lab-grown diamond ring in clean daylight"
              title="Everyday Diamond Rings"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Diamonds resist scratching from daily activities but remain vulnerable to sharp corner impacts.
          </p>
        </div>

        {/* Section 2: Can you wear every day */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Can You Wear Lab-Grown Diamonds Every Day?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            You can wear well-designed lab-grown diamond jewellery frequently, but &quot;every day&quot; should not mean 24 hours a day. Ordinary activities such as office work, dining, walking and social occasions generally present limited risk. Jewellery should be removed when an activity could expose it to hard impacts, sustained pressure, chemicals, chlorine, heavy sweat, or snagging hazards.
          </p>
          <p>
            <strong>Earrings:</strong> Studs and hoops are highly practical, but drop settings should be checked for loose posts or hinge loops. Sleeping in large earrings can bend posts or strain prongs against pillows.
          </p>
          <p>
            <strong>Necklaces:</strong> Pendant chains must be proportionate to stone weight. Remove fine necklaces before exercise or sleep to prevent tangles and breaks.
          </p>
          <p>
            <strong>Bracelets &amp; Rings:</strong> Bracelets and rings experience the most contact with hard surfaces (desks, bag hardware, handles). Lower-profile settings, bezel designs, and substantial prongs are more practical for active wear than highly exposed solitaires.
          </p>
        </div>

        {/* Section 3: Setting safety */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          How Setting Style Affects Everyday Durability
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            The diamond may be exceptionally hard, but it depends on the setting to remain secure.
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Prong Settings:</strong> Open look, but can catch on knitwear or bend. Inspect regularly for gaps, clicks, or uneven heights.</li>
            <li><strong>Bezel Settings:</strong> Surrounds the girdle in a metal collar, shielding it from impact. Recommended for active lifestyles.</li>
            <li><strong>Pavé &amp; Micro-set:</strong> Tiny accent prongs require gentle care. Avoid aggressive ultrasonic cleaning or heavy direct impact.</li>
            <li><strong>Vulnerable Shapes:</strong> Pear, marquise, princess, and heart cuts contain sharp tips that need protective prongs (like V-prongs) to prevent chipping.</li>
          </ul>
          <p>
            <strong>The Metal Matters:</strong> Precious metals like gold, platinum, and silver are softer than diamonds and will develop surface scratches. Rhodium plating on white gold naturally thins with contact, requiring periodic replating. Check whether the piece is solid, vermeil, or plated, as plated surfaces wear off much faster under daily contact.
          </p>

          {/* IMAGE 3: Checking settings */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (3).png"
              alt="Checking gold bezel and prong settings for stability"
              title="Bezel and Prong Setting Styles"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Prongs should be checked regularly for catching, while bezel mounts provide protective metal walls.
          </p>
        </div>

        {/* Section 4: Activities and Removal */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          When to Remove Diamond Jewellery
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Adopt a proactive routine: put jewellery on last when dressing (after perfumes and creams) and take it off first before chores or exercise.
          </p>
          
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg my-6">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Activity</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Wear or remove?</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Main reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { a: "Office work", w: "Usually suitable", r: "Low impact, but avoid repeated desk contact" },
                  { a: "Dining or social events", w: "Usually suitable", r: "Limited physical risk" },
                  { a: "Walking", w: "Usually suitable", r: "Low impact" },
                  { a: "Sleeping", w: "Preferably remove", r: "Pressure, snagging and bent components" },
                  { a: "Showering", w: "Remove", r: "Soap film, snagging and unnecessary exposure" },
                  { a: "Swimming", w: "Remove", r: "Chlorine, loss and cold-water finger shrinkage" },
                  { a: "Gym or weight training", w: "Remove", r: "Impact and pressure against metal equipment" },
                  { a: "Contact sport", w: "Remove", r: "Injury, impact and stone loss" },
                  { a: "Gardening", w: "Remove", r: "Dirt, impact and pressure" },
                  { a: "Household cleaning", w: "Remove", r: "Chemicals and abrasion" },
                  { a: "Cooking or baking", w: "Preferably remove", r: "Grease, dough and contamination under settings" },
                  { a: "Applying cosmetics", w: "Put jewellery on afterwards", r: "Lotion, perfume and hairspray residue" },
                  { a: "Hair styling", w: "Remove or protect", r: "Heat, chemicals and snagging" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.a}</td>
                    <td className="p-4">{row.w}</td>
                    <td className="p-4">{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm font-light text-[#5a5a5a] leading-relaxed">
            <strong>Showering and Swimming Risks:</strong> Water doesn&apos;t damage diamonds, but soaps build up dull films. Swimming pools introduce chlorine, which can pit and discolour gold alloys. Cold seawater can also cause fingers to shrink slightly, leading to rings slipping off unnoticed.
          </p>
        </div>

        {/* Section 5: Care and Inspections */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Cleaning, Inspections, and Storage
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Clean Regularly:</strong> Use warm soapy water and a soft toothbrush to clean underneath settings where oils collect. Dry completely with a microfibre cloth. Avoid abrasive toothpastes, baking soda, and bleach.
          </p>
          <p>
            <strong>Periodic Inspections:</strong> Check prongs, clasps, and links every few months at home. Many jewellers recommend professional check-ups every six months to verify prong stability and setting structure, especially for rings and tennis bracelets.
          </p>
          <p>
            <strong>Separate Storage:</strong> Diamonds scratch other metals, gemstones, and other diamonds. Store each piece in a separate fabric-lined compartment, padded slot, or pouch when not in use.
          </p>

          {/* IMAGE 4: Safe practices */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/are-lab-grown-diamonds-suitable-for-regular-wear/14 (4).png"
              alt="Applying hand lotions away from precious diamond settings"
              title="Avoiding residues and impact damage"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Remove jewellery before chores or workouts to prevent build-ups, scratches, or clasp loss.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Regular-Wear Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Daily Wear Routine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Verify that the diamond does not move in the setting.",
                  "Close clasps and safety latches completely.",
                  "Apply perfume, makeup, and hairsprays before putting jewellery on.",
                  "Remove rings and bracelets before washing up, gardening, or cleaning.",
                  "Store pieces separately in lined compartments to prevent scratches.",
                  "Arrange professional cleaning when the stone loses its sparkle."
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
            Lab-grown diamonds are entirely suitable for regular wear. The primary risks are physical impacts on vulnerable tips, metal scratches, and setting wear rather than any limitations of the diamond crystal itself. By choosing secure settings and following safe daily habits, you can enjoy your diamond jewellery for decades.
          </p>
          <p className="mt-4">
            Explore Aurelia Royale&apos;s collections of securely set, high-transparency laboratory-grown diamond rings, earrings, and pendants designed for regular wear.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Can lab-grown diamonds be worn every day?",
              a: "Yes. Lab-grown diamonds are sufficiently durable for frequent wear, although jewellery should be removed for activities involving impact, chemicals, pressure or a high risk of loss."
            },
            {
              q: "Are lab-grown diamonds as durable as mined diamonds?",
              a: "Lab-grown and mined diamonds have essentially the same fundamental material properties. Both resist scratching exceptionally well, and both can chip after a strong impact."
            },
            {
              q: "Can I shower with lab-grown diamond jewellery?",
              a: "It is better to remove it. Soap and hair products can build up around the diamond, while wet handling and towel snagging increase the risk of damage or loss."
            },
            {
              q: "Can I swim with a lab-grown diamond ring?",
              a: "No. Chlorinated water can affect jewellery metals, and cold water can make a ring easier to lose."
            },
            {
              q: "Can I exercise while wearing lab-grown diamonds?",
              a: "Diamond jewellery should normally be removed before exercise because equipment, impact, pressure and repeated movement can damage the setting or cause loss."
            },
            {
              q: "Will regular wear make a lab-grown diamond cloudy?",
              a: "Regular wear may allow oil, soap and cosmetics to collect on the surface. This temporary film can reduce brilliance, but the diamond does not naturally become cloudy through ageing."
            },
            {
              q: "Which diamond setting is best for active wear?",
              a: "A secure, lower-profile bezel or protected prong setting can reduce snagging and protect vulnerable diamond edges."
            },
            {
              q: "How often should regularly worn diamond jewellery be cleaned?",
              a: "Clean it when visible residue begins to reduce its brilliance. Frequently worn pieces may require gentle home cleaning regularly."
            },
            {
              q: "How often should the setting be professionally inspected?",
              a: "Many jewellers recommend inspection approximately every six months for frequently worn pieces, or sooner after an impact or visible change."
            },
            {
              q: "Can lab-grown diamonds scratch other jewellery?",
              a: "Yes. Diamond can scratch precious metals, gemstones and other diamonds, so jewellery pieces should be stored separately."
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
            Discover Secure Craftsmanship at Aurelia Royale
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Settings designed to maximize diamond security without compromising optical brilliance. Explore our regular-wear collections.
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
