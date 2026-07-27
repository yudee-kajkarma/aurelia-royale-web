import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "Lab-Grown Diamond Clarity Grades Explained",
  description: "Understand lab-grown diamond clarity grades from FL to I3, what eye-clean means, how inclusions are assessed and which clarity may suit your jewellery.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/",
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
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#primaryimage",
      "url": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-clarity-grades-explained.webp",
      "contentUrl": "https://www.aureliaroyale.com/wp-content/uploads/lab-grown-diamond-clarity-grades-explained.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond clarity grades explained"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#webpage",
      "url": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/",
      "name": "Lab-Grown Diamond Clarity Grades Explained",
      "isPartOf": { "@id": "https://www.aureliaroyale.com/#website" },
      "primaryImageOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#primaryimage" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "breadcrumb": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#article",
      "headline": "Lab-Grown Diamond Clarity Grades Explained",
      "description": "Understand lab-grown diamond clarity grades from FL to I3, what eye-clean means, how inclusions are assessed and which clarity may suit your jewellery.",
      "image": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#primaryimage" },
      "mainEntityOfPage": { "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#webpage" },
      "author": { "@id": "https://www.aureliaroyale.com/#organization" },
      "publisher": { "@id": "https://www.aureliaroyale.com/#organization" },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "lab-grown diamond clarity grades",
        "diamond clarity grades explained",
        "lab-grown diamond clarity scale",
        "best clarity for a lab-grown diamond",
        "VS1 vs VS2 lab-grown diamond",
        "eye-clean diamond"
      ],
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#breadcrumb",
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
          "name": "Lab-Grown Diamond Clarity Grades Explained",
          "item": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/lab-grown-diamond-clarity-grades-explained/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are lab-grown diamonds graded for clarity?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Eligible lab-grown diamonds can be assessed for clarity. Report terminology and current services vary by laboratory." }
        },
        {
          "@type": "Question",
          "name": "What is the best clarity for a lab-grown diamond?",
          "acceptedAnswer": { "@type": "Answer", "text": "There is no universal best. VS grades often provide an eye-clean appearance, while VVS, IF and FL suit buyers who value higher technical grades." }
        },
        {
          "@type": "Question",
          "name": "Is VS1 better than VS2?",
          "acceptedAnswer": { "@type": "Answer", "text": "VS1 is a higher clarity grade because its inclusions are generally more difficult to detect at 10×, although the two grades may look identical without magnification." }
        },
        {
          "@type": "Question",
          "name": "Is VVS clarity worth paying for?",
          "acceptedAnswer": { "@type": "Answer", "text": "It can be worthwhile if the rare specification matters to the buyer. If visible appearance is the priority, an eye-clean VS diamond may offer a similar unaided view." }
        },
        {
          "@type": "Question",
          "name": "Can an SI1 lab-grown diamond be eye-clean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, some SI1 diamonds appear eye-clean, but others have visible inclusions. Size, shape, inclusion position and viewing conditions all matter." }
        },
        {
          "@type": "Question",
          "name": "What does eye-clean mean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eye-clean generally means inclusions are not readily visible without magnification under defined viewing conditions. It is not an official laboratory grade." }
        },
        {
          "@type": "Question",
          "name": "Do inclusions affect diamond sparkle?",
          "acceptedAnswer": { "@type": "Answer", "text": "Small inclusions often have little visible effect. Extensive clouds or prominent features can reduce transparency, while cut remains the main driver of sparkle." }
        },
        {
          "@type": "Question",
          "name": "Can inclusions make a diamond break?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most minor inclusions do not create a practical problem. Large or surface-reaching features near a girdle, point or corner can require professional assessment." }
        },
        {
          "@type": "Question",
          "name": "Can a setting hide an inclusion?",
          "acceptedAnswer": { "@type": "Answer", "text": "A setting may make an edge inclusion less visible and protect vulnerable areas, but it should not be used to conceal a serious structural concern." }
        },
        {
          "@type": "Question",
          "name": "Is a clarity plot a photograph of the inclusion?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. It is a diagram showing the approximate type and location of selected characteristics. Symbol size does not directly show real size or severity." }
        },
        {
          "@type": "Question",
          "name": "Does CVD or HPHT determine clarity?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Either growth method can produce diamonds across a range of clarity outcomes. The individual stone must be examined." }
        },
        {
          "@type": "Question",
          "name": "Do lab-grown diamonds have inclusions?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Lab-grown diamonds can contain growth-related internal features and characteristics introduced or revealed during cutting and polishing." }
        }
      ]
    }
  ]
};

export default function Blog29Page() {
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
            Clarity Grades Explained
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
            src="/images/blog/lab-grown-diamond-clarity-grades-explained/29 (1).png"
            alt="Lab-grown diamond clarity grades explained"
            title="Diamond Clarity Grades"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Clarity grading checks loose diamonds under 10× magnification for internal inclusions and surface blemishes.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            Clarity describes a diamond’s relative freedom from internal characteristics called <strong>inclusions</strong> and surface characteristics called <strong>blemishes</strong>. When a laboratory assigns a traditional clarity grade, trained graders examine the diamond under controlled conditions, normally using 10× magnification.
          </p>
          <p>
            The scale runs from Flawless at the top to Included at the lower end. However, a higher clarity grade does not automatically mean a visibly more beautiful jewel. Many clarity characteristics are difficult or impossible to see without magnification, and a diamond with a lower paper grade can still look clean to the unaided eye.
          </p>
          <p>
            Clarity is one of the <Link href="/blog/4cs-of-lab-grown-diamonds/" className="text-gold hover:underline">4Cs of a lab-grown diamond</Link>, alongside cut, colour and carat weight. It should be considered as part of the complete diamond rather than used as a standalone ranking.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            When the traditional clarity scale is used, it contains 11 grades:
          </p>
          <ul className="mt-2 space-y-1 font-jost text-base font-medium text-[#153f35] list-disc pl-5">
            <li><strong>FL:</strong> Flawless</li>
            <li><strong>IF:</strong> Internally Flawless</li>
            <li><strong>VVS1 &amp; VVS2:</strong> Very, Very Slightly Included</li>
            <li><strong>VS1 &amp; VS2:</strong> Very Slightly Included</li>
            <li><strong>SI1 &amp; SI2:</strong> Slightly Included</li>
            <li><strong>I1, I2 &amp; I3:</strong> Included</li>
          </ul>
          <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
            An “eye-clean” diamond is one whose inclusions are not readily visible without magnification under stated viewing conditions. Eye-clean is useful retail language, but it is not an official clarity grade and should always be defined by the seller.
          </p>
        </div>

        {/* Section 1: The Clarity Scale Table */}
        <div className="my-12">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            The Diamond Clarity Scale Explained
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Grade</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Official category</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Practical meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { g: "FL", c: "Flawless", p: "No inclusions or blemishes visible to a skilled grader at 10× magnification. Extremely uncommon." },
                  { g: "IF", c: "Internally Flawless", p: "No inclusions visible at 10×, although minor surface blemishes may be present." },
                  { g: "VVS1–VVS2", c: "Very, Very Slightly Included", p: "Minute inclusions that are extremely difficult or very difficult for a skilled grader to see at 10×." },
                  { g: "VS1–VS2", c: "Very Slightly Included", p: "Minor inclusions ranging from difficult to somewhat easy for a skilled grader to see at 10×. Often not visible without magnification." },
                  { g: "SI1–SI2", c: "Slightly Included", p: "Noticeable inclusions at 10×. Some stones may appear eye-clean; others may have inclusions visible without magnification." },
                  { g: "I1–I3", c: "Included", p: "Obvious inclusions at 10× that may affect appearance, transparency or durability to increasing degrees. Careful individual assessment is important." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.g}</td>
                    <td className="p-4">{row.c}</td>
                    <td className="p-4">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: How Clarity is Graded */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. How is Diamond Clarity Graded?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Clarity grading evaluates five factors under 10× magnification:
          </p>
          <ul className="space-y-3 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Size:</strong> Larger inclusions lower the grade relative to the diamond’s size.</li>
            <li><strong>Number:</strong> Graders assess the visual impact of multiple features rather than simply counting them.</li>
            <li><strong>Position:</strong> Inclusions positioned under the table facet are most easily noticed. Features at girdles or corners affect durability.</li>
            <li><strong>Nature:</strong> Refers to the type (crystal, cloud, needle, feather).</li>
            <li><strong>Relief:</strong> High-contrast or dark inclusions are graded more severely than transparent ones.</li>
          </ul>

          {/* IMAGE 2: Microscopes evaluation */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-clarity-grades-explained/29 (2).png"
              alt="Inspecting inclusions under microscopes and magnification lenses"
              title="Magnified Inclusions Check"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Trained graders evaluate the size, number, position, and relief of inclusions using microscopes.
          </p>
        </div>

        {/* Section 3: Do lab-grown diamonds have inclusions? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Do Lab-Grown Diamonds Have Inclusions?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Yes. A controlled growth environment does not guarantee a perfectly flawless crystal. Lab-grown diamonds can contain internal features related to growth, and they can acquire additional characteristics during cutting and polishing.
          </p>
          <p>
            Common traits include: metallic remnants (from HPHT flux growth), pinpoints, needles, internal grain lines, clouds, and surface blemishes. Review our <Link href="/blog/cvd-vs-hpht-lab-grown-diamonds/" className="text-gold hover:underline">CVD vs HPHT comparison</Link> for growth details.
          </p>
          <p>
            <strong>Inclusions vs Blemishes:</strong> Inclusions represent internal characteristics extending into the stone. Blemishes are surface-only features (scratches, pits, polish lines). IF diamonds allow surface blemishes but forbid internal inclusions.
          </p>

          {/* IMAGE 3: metallic remnants flux growth */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-clarity-grades-explained/29 (3).png"
              alt="HPHT diamond metallic remnants showing flux structures"
              title="Metallic Flux remnants"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Growth traits like metallic flux remnants can occur in controlled growth chambers.
          </p>
        </div>

        {/* Section 4: What does eye clean mean? */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. What Does “Eye-Clean” Really Mean?
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Eye-clean is retail description, not a universal laboratory grade. It means inclusions are invisible to the unaided eye face-up under normal viewing distances (about 20–25 cm).
          </p>
          <p>
            <strong>VS vs VVS Grades:</strong> VVS inclusions are extremely difficult to locate at 10×. VS inclusions are minor but easier to spot under magnification. For many buyers, a well-selected VS1 or VS2 offers the visual outcome of an Internally Flawless stone without the premium price.
          </p>
          <p>
            <strong>Shape and Size Effects:</strong> Step cuts like ovals, marquises, and step-faceted emerald shapes reveal inclusions more easily than brilliant round cuts. Points and corners in princess and pear shapes require close checking for feather inclusions near prongs.
          </p>

          {/* IMAGE 4: Eye-clean solitaire diamond */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/lab-grown-diamond-clarity-grades-explained/29 (4).png"
              alt="Looking at a clean diamond face-up at close distance"
              title="Eye-Clean Solitaire Diamond"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A carefully selected VS grade diamond looks completely eye-clean without magnification.
          </p>
        </div>

        {/* Section 5: Reading a clarity plot */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          4. How to Read a Clarity Plot
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            A clarity plot is a map, not a photograph. Symbols indicate feature position, relief, and nature, but their printed scale does not dictate physical sizes.
          </p>
          <p>
            Be aware that GIA changed its eligible color/clarity lab-grown service on October 1, 2025 to Premium or Standard classifications, whereas IGI commonly continues to provide specific FL-to-I3 grades. Check our guides on <Link href="/blog/how-to-read-lab-grown-diamond-certificate/" className="text-gold hover:underline">how to read a lab-grown diamond certificate</Link> and <Link href="/blog/igi-certificate-for-lab-grown-diamond/" className="text-gold hover:underline">what an IGI certificate means</Link> to cross-reference registry details.
          </p>
        </div>

        {/* Action Guide */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Selecting the Right Clarity Grade
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Step</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { s: "1. Visual targets", a: "Determine if you require eye-clean visual beauty or exceptional technical rarity (FL/IF)." },
                  { s: "2. Prioritise cut quality", a: "Invest budget in Excellent cut proportions first, as cut masks slight inclusions." },
                  { s: "3. Check shape/facet style", a: "Examine step cuts (emerald/Asscher) at VS1/VS2 levels, since their broad facets reveal marks." },
                  { s: "4. Locate inclusions on plots", a: "Ensure grade-setting inclusions are not dark carbon spots directly under the table." },
                  { s: "5. Evaluate prong protection", a: "Make sure edge feathers are protected by setting claws to avoid impact damage." }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.s}</td>
                    <td className="p-4">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Clarity Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before buying, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Laboratory-grown origin is explicitly disclosed in writing.",
                  "Clarity grade is verified online via GIA or IGI registry check.",
                  "Inclusions are eye-clean at 20-25 cm face-up viewing distances.",
                  "Feathers do not reach pointed tips where prongs exert pressure.",
                  "Clouds do not create hazy, cloudy, or milky overall transparency.",
                  "The seller's video shows the exact report-matched diamond.",
                  "Return margins are clear to allow post-delivery physical inspections."
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
            Lab-grown diamond clarity grades describe how readily inclusions and blemishes can be detected under standard examination. FL and IF sit at the top of the traditional scale, followed by VVS, VS, SI and Included grades. Yet the highest grade is not necessary for every beautiful piece of jewellery.
          </p>
          <p className="mt-4">
            Aurelia Royale defines all quality ranges transparently, matching solitaire certificates and supplying eye-clean accent ranges on all product designs.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Are lab-grown diamonds graded for clarity?",
              a: "Yes. Eligible lab-grown diamonds can be assessed for clarity. Report terminology and current services vary by laboratory, so buyers should read the specific report."
            },
            {
              q: "What is the best clarity for a lab-grown diamond?",
              a: "There is no universal best. VS grades often provide an eye-clean appearance, while VVS, IF and FL suit buyers who value higher technical grades."
            },
            {
              q: "Is VS1 better than VS2?",
              a: "VS1 is a higher clarity grade because its inclusions are generally more difficult to detect at 10×, although the two grades may look identical without magnification."
            },
            {
              q: "Is VVS clarity worth paying for?",
              a: "It can be worthwhile if the rare specification matters to the buyer. If visible appearance is the priority, an eye-clean VS diamond may offer a similar unaided view."
            },
            {
              q: "Can an SI1 lab-grown diamond be eye-clean?",
              a: "Yes, some SI1 diamonds appear eye-clean, but others have visible inclusions. Size, shape, inclusion position and viewing conditions all matter."
            },
            {
              q: "What does eye-clean mean?",
              a: "Eye-clean generally means inclusions are not readily visible without magnification under defined viewing conditions. It is not an official laboratory grade."
            },
            {
              q: "Do inclusions affect diamond sparkle?",
              a: "Small inclusions often have little visible effect. Extensive clouds or prominent features can reduce transparency, while cut remains the main driver of sparkle."
            },
            {
              q: "Can inclusions make a diamond break?",
              a: "Most minor inclusions do not create a practical problem. Large or surface-reaching features near a girdle, point or corner can require professional assessment."
            },
            {
              q: "Can a setting hide an inclusion?",
              a: "A setting may make an edge inclusion less visible and protect vulnerable areas, but it should not be used to conceal a serious structural concern."
            },
            {
              q: "Is a clarity plot a photograph of the inclusion?",
              a: "No. It is a diagram showing the approximate type and location of selected characteristics. Symbol size does not directly show real size or severity."
            },
            {
              q: "Does CVD or HPHT determine clarity?",
              a: "No. Either growth method can produce diamonds across a range of clarity outcomes. The individual stone must be examined."
            },
            {
              q: "Do lab-grown diamonds have inclusions?",
              a: "Yes. Lab-grown diamonds can contain growth-related internal features and characteristics introduced or revealed during cutting and polishing."
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
            Verify Eye-Clean Perfection
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully sorted clarities, micro-mapped plots, and certified laboratory validation checks. Explore our range.
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
