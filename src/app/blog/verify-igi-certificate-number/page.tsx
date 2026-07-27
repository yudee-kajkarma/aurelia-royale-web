import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/home/NewsletterSection";

// 1. SEO Metadata for Search Engines
export const metadata: Metadata = {
  title: "How to Verify an IGI Certificate Number Online",
  description: "Learn how to verify an IGI certificate number, compare the digital report, check a diamond’s laser inscription and identify mismatched documents.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/",
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
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#primaryimage",
      "url": "https://www.aureliaroyale.com/images/blog/verify-igi-certificate-number.webp",
      "width": 1600,
      "height": 900,
      "caption": "Lab-grown diamond report number being verified online"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#webpage",
      "url": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/",
      "name": "How to Verify an IGI Certificate Number",
      "isPartOf": {
        "@id": "https://www.aureliaroyale.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#breadcrumb"
      },
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#article",
      "headline": "How to Verify an IGI Certificate Number",
      "description": "Learn how to verify an IGI certificate number, compare the digital report, check a diamond's laser inscription and identify mismatched documents.",
      "image": {
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#primaryimage"
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
        "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#webpage"
      },
      "articleSection": "Certification and Diamond Quality",
      "keywords": [
        "verify IGI certificate number",
        "IGI report verification",
        "check IGI diamond certificate",
        "IGI report number check",
        "IGI laser inscription"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#breadcrumb",
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
          "name": "How to Verify an IGI Certificate Number",
          "item": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aureliaroyale.com/blog/verify-igi-certificate-number/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I verify an IGI certificate number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the Verify Report service on IGI's official website and compare the resulting digital report with the supplied document and diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Is an IGI certificate number unique?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IGI assigns a unique report number to each grading report, but buyers must still confirm that the report corresponds with the physical diamond."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my IGI report number not working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possible causes include a typing error, incomplete number, recently issued report, temporary website issue or a document not issued by IGI."
          }
        },
        {
          "@type": "Question",
          "name": "Does finding an IGI report online prove the diamond is genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It proves that a report with that number exists. The diamond's inscription, measurements and characteristics must also match."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the IGI number written on the diamond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be laser-inscribed on the diamond's girdle and normally requires magnification to read."
          }
        },
        {
          "@type": "Question",
          "name": "Can someone copy a genuine IGI certificate number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A copied number could be used for another stone, which is why measurements, grades and the inscription must be checked."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the certificate and product page show different grades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask the retailer for the correct report and written clarification before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Does an IGI report number confirm the diamond's resale value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It identifies the report and documented characteristics but does not guarantee present or future resale value."
          }
        },
        {
          "@type": "Question",
          "name": "Should the IGI number appear on my invoice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For an individually graded diamond, recording the report number on the invoice improves traceability."
          }
        },
        {
          "@type": "Question",
          "name": "Can an IGI report be verified after the diamond is set?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The report can be checked online, although the setting may make the girdle inscription more difficult to inspect."
          }
        }
      ]
    }
  ]
};

export default function Blog23Page() {
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
            How to Verify an IGI Certificate Number
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Registry Guide • Published July 15, 2026
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* IMAGE 1: Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-4 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/blog/verify-igi-certificate-number/23 (1).png"
            alt="Lab-grown diamond report number being verified online"
            title="How to Verify IGI Certificate Number"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-12 border-b border-[#e2dfd5] pb-6">
          Entering the grading report code directly into the lab registry confirms authenticity details.
        </p>
        
        {/* Intro */}
        <div className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b] space-y-6 mb-12">
          <p>
            To verify an IGI certificate number, enter the number into the official IGI “Verify Report” service and open the corresponding digital grading report.
          </p>
          <p>
            You must then compare that digital record with the report supplied by the retailer, the product-page specifications, the physical diamond, and the laser inscription on the diamond’s girdle.
          </p>
          <p>
            Finding a valid report number online is only the first step. A copied number can correspond to a genuine report while being used to advertise a different diamond. Complete verification means confirming that the online report, supplied document, and actual diamond all match.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg mb-12">
          <h2 className="font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3">
            Quick Answer
          </h2>
          <p className="font-jost text-base font-light text-[#3b3b3b] leading-relaxed">
            Follow these steps: Obtain the complete IGI report number. Visit the official IGI website yourself. Open the “Verify Report” service. Enter the number exactly as provided. Open the digital report. Confirm laboratory-grown origin. Compare shape, carat weight, measurements and grades. Read the growth and treatment comments. Check the laser-inscription details. Have the physical inscription inspected under magnification. If any important detail differs, pause the purchase and ask the retailer for clarification.
          </p>
        </div>

        {/* What is a report number section */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          1. Understanding the IGI Report Number
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            An IGI report number is the unique identification code assigned to a graded stone. It links the physical diamond to the laboratory&apos;s digital archives. The code can be located at the top of printed copies, beside verification QR codes, or engraved microscopically on the diamond&apos;s girdle.
          </p>
          <p>
            If a retailer offers a certified centre diamond but refuses to share the certificate number before your order, treat this as a warning sign and pause the transaction.
          </p>

          {/* IMAGE 2: Registry code log */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/verify-igi-certificate-number/23 (2).png"
              alt="Unique certificate barcode scanner display on laptop screen"
              title="Report Code Intake Log"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Unique registry codes identify loose or set stones in the laboratory database.
          </p>
        </div>

        {/* Step-by-step verification process */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          2. Step-by-Step Verification Instructions
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            Follow these essential steps to run online registry checks safely:
          </p>
          <ul className="space-y-4 text-sm font-light text-[#5a5a5a] pl-5 list-disc">
            <li><strong>Request Complete Reports:</strong> Never accept cropped screens or summaries. Request full copies showing date logs, comment footnotes, and measurements.</li>
            <li><strong>Visit Official Portals:</strong> Input the URL yourself rather than clicking links in advertisements or emails to prevent landing on phishing pages.</li>
            <li><strong>Input Codes Exactly:</strong> Avoid confusing letters and numbers (e.g. zero &apos;0&apos; with letter &apos;O&apos;, one &apos;1&apos; with letter &apos;I&apos;).</li>
          </ul>

          {/* IMAGE 3: Verify Online Entries */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/verify-igi-certificate-number/23 (3).png"
              alt="A professional matching the report details with the diamond"
              title="Verify Online Registry Entries"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            Ensure that online description parameters align exactly with the physical diamond.
          </p>
        </div>

        {/* Comparison table */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            Registry Fields to Match
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Detail</th>
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">What must match</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  { d: "Report number", m: "Exact number supplied by the retailer" },
                  { d: "Description", m: "Laboratory-grown diamond" },
                  { d: "Report date", m: "Same date shown on the supplied report" },
                  { d: "Shape", m: "Round, oval, emerald, pear or other advertised shape" },
                  { d: "Cutting style", m: "The cutting description shown on the report" },
                  { d: "Measurements", m: "Same millimetre dimensions" },
                  { d: "Carat weight", m: "Exact weight of the graded diamond" },
                  { d: "Colour", m: "Same grade as the product listing" },
                  { d: "Clarity", m: "Same grade as the product listing" },
                  { d: "Cut", m: "Same grade where applicable" },
                  { d: "Polish", m: "Same report result" },
                  { d: "Symmetry", m: "Same report result" },
                  { d: "Fluorescence", m: "Same strength and colour" },
                  { d: "Comments", m: "Same growth and treatment information" },
                  { d: "Inscription", m: "Same inscription information" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-semibold text-foreground">{row.d}</td>
                    <td className="p-4">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Physical checks & warning signs */}
        <h2 className="mt-16 mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          3. Physical Checks and Document Mismatches
        </h2>

        <div className="space-y-6 font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
          <p>
            <strong>Girdle Laser Engravings:</strong> Laser inscriptions are microscopic codes that jewellers read using loupes or zoom lenses. Girdle settings can cover parts of codes, so double-check code positions before setting stones.
          </p>
          <p>
            <strong>Document Alterations:</strong> Copying report numbers to mask lower-grade stones is a common tactic of fraudulent retailers. Watch for uneven fonts, cropped comment zones, missing origin labels, or blurry registry pages.
          </p>
          <p>
            <strong>Safe QR Code Scanning:</strong> Treat QR code links carefully. Always check that scanned domains route to the official `.org` or secure registry addresses before entering details.
          </p>

          {/* IMAGE 4: Inscription microscope zoom */}
          <div className="relative w-full h-[280px] md:h-[450px] my-6 overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5]">
            <Image
              src="/images/blog/verify-igi-certificate-number/23 (4).png"
              alt="Inspecting girdle laser serial with a microscope viewer tool"
              title="Laser Inscription Microscope Assessment"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center mb-8">
            A matching laser inscription code printed on the girdle connects the diamond to its online report.
          </p>
        </div>

        {/* Buyer Checklist */}
        <div className="my-16">
          <h2 className="font-cormorant text-3xl font-semibold uppercase tracking-wider mb-6">
            IGI Report Verification Checklist
          </h2>
          <div className="overflow-x-auto border border-[#e2dfd5] rounded-lg">
            <table className="w-full text-left font-jost text-sm border-collapse">
              <thead>
                <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                  <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">Before purchase, verify:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                {[
                  "Obtain the complete report number and search independently.",
                  "Match shape, carat weight, measurements, and comments exactly.",
                  "Read CVD/HPHT growth method logs and treatment comments.",
                  "Verify that the digital certificate is not marked as replaced or expired.",
                  "Request high-resolution videos showing physical girdle codes under magnification.",
                  "Review return policies to ensure you can verify parameters post-delivery."
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
            Verifying an IGI certificate number requires comparing the official digital report, product description, and physical diamond girdle. If any details are mismatched or the number cannot be located on the official lab website, pause the purchase until you get a clear explanation.
          </p>
          <p className="mt-4">
            At Aurelia Royale, we provide full, transparent access to GIA/IGI report verification registries for every piece in our collections.
          </p>
        </div>

        {/* FAQ Section using HTML5 <details> */}
        <h2 className="mb-8 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-[#153f35] uppercase tracking-wide border-t border-[#e2dfd5] pt-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-20">
          {[
            {
              q: "Where can I verify an IGI certificate number?",
              a: "Use the Verify Report service on IGI’s official website. Enter the complete report number and compare the resulting digital report with the supplied document and diamond."
            },
            {
              q: "Is an IGI certificate number unique?",
              a: "IGI assigns a unique report number to each grading report. The number identifies a report, but buyers must still confirm that the report corresponds with the physical diamond."
            },
            {
              q: "Can I verify an IGI certificate for free?",
              a: "IGI’s online report-verification facility allows consumers to search for the digital report using its number without purchasing a separate grading service."
            },
            {
              q: "Why is my IGI report number not working?",
              a: "Possible causes include a typing error, an incomplete number, a recently issued report, a temporary website issue or a document that was not issued by IGI."
            },
            {
              q: "Does finding an IGI report online prove the diamond is genuine?",
              a: "It proves that a report with that number exists. You must still compare the physical diamond’s inscription, measurements and characteristics with the report."
            },
            {
              q: "Where is the IGI number written on the diamond?",
              a: "It may be laser-inscribed on the diamond’s girdle. The report should state the inscription information."
            },
            {
              q: "Can I see the IGI inscription with my eyes?",
              a: "Usually not. A jeweller’s loupe or microscope is normally required to locate and read the inscription."
            },
            {
              q: "Can someone copy a genuine IGI certificate number?",
              a: "Yes. A copied number could be used in a listing for a different stone. This is why measurements, grades and the physical inscription must also be checked."
            },
            {
              q: "What should I do if the certificate and product page show different grades?",
              a: "Ask the retailer for the correct report and written clarification. Do not purchase a diamond advertised with better grades than its report records."
            },
            {
              q: "Does an IGI report number confirm the diamond’s resale value?",
              a: "No. It identifies the grading report and documented characteristics. It does not guarantee present or future resale value."
            },
            {
              q: "Should the IGI number appear on my invoice?",
              a: "For a product sold with an individually graded diamond, placing the report number on the invoice or order documentation improves traceability."
            },
            {
              q: "Can an IGI report be verified after the diamond is set?",
              a: "Yes. The report number can be checked online, although inspecting the girdle inscription may be more difficult if the setting covers it."
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
            Shop Verified Diamond Collections
          </h3>
          <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Beautifully hallmarked, independently graded, and fully verifiable. Experience the Aurelia Royale registry standard.
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
