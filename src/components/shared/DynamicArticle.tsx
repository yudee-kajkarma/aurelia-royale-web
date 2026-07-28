"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import ArticleInlineContent, { InlinePart } from "./ArticleInlineContent";
import FAQSection, { FaqItem } from "./FAQSection";

// Re-export types for backward compatibility
export type { InlinePart, FaqItem };

export type CtaButton = {
  label: string;
  href: string;
};

export type ContentBlock =
  | { type: "paragraph"; text?: string; parts?: InlinePart[] }
  | { type: "bullet-list" | "numbered-list"; items: string[]; itemsParts?: InlinePart[][] }
  | { type: "cta-group"; buttons: CtaButton[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; title?: string; items: FaqItem[] }
  | { type: "image"; src: string; alt: string; title?: string; caption?: string; priority?: boolean }
  | { type: "callout"; title: string; text?: string; parts?: InlinePart[]; theme?: "cream" | "pine" | "gold-border" }
  | { type: "cta-banner"; title: string; subtitle: string; shopHref: string; contactHref: string };

export type ArticleSection = {
  heading?: string;
  content: ContentBlock[];
};

interface DynamicArticleProps {
  sections: ArticleSection[];
}

// --- MAIN BUILDER COMPONENT ---

const DynamicArticle: React.FC<DynamicArticleProps> = ({ sections }) => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {sections.map((section, idx) => (
        <div key={idx} className={idx > 0 ? "mt-16 border-t border-[#e2dfd5] pt-12" : ""}>
          {section.heading && (
            <h2 className="mb-6 font-cormorant text-3xl md:text-4xl font-semibold leading-tight text-foreground uppercase tracking-wide">
              {section.heading}
            </h2>
          )}
          <div className="space-y-6">
            {section.content.map((block, bIdx) => {
              if (block.type === "paragraph") {
                return (
                  <p key={bIdx} className="font-jost text-lg font-light leading-relaxed text-[#3b3b3b]">
                    <ArticleInlineContent text={block.text} parts={block.parts} />
                  </p>
                );
              }

              if (block.type === "bullet-list") {
                return (
                  <ul key={bIdx} className="list-disc pl-5 font-jost text-base font-light text-[#3b3b3b] space-y-3 my-4">
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <ArticleInlineContent text={item} parts={block.itemsParts?.[i]} />
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "numbered-list") {
                return (
                  <ol key={bIdx} className="list-decimal pl-5 font-jost text-base font-light text-[#3b3b3b] space-y-3 my-4">
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <ArticleInlineContent text={item} parts={block.itemsParts?.[i]} />
                      </li>
                    ))}
                  </ol>
                );
              }

              if (block.type === "cta-group") {
                return (
                  <div key={bIdx} className="flex flex-wrap gap-4 my-6">
                    {block.buttons.map((btn, i) => (
                      <Link
                        key={i}
                        href={btn.href}
                        className="inline-block bg-gold text-[#031b16] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-300"
                      >
                        {btn.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              if (block.type === "table") {
                if (block.headers.length === 1) {
                  return (
                    <div key={bIdx} className="my-8 overflow-x-auto border border-[#e2dfd5] rounded-lg">
                      <table className="w-full text-left font-jost text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                            <th className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">
                              {block.headers[0]}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                          {block.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td className="p-4 flex items-center gap-3">
                                <Check className="w-4 h-4 text-gold shrink-0" />
                                <span className="font-jost text-base font-light text-[#3b3b3b]">{row[0]}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return (
                  <div key={bIdx} className="my-8 overflow-x-auto border border-[#e2dfd5] rounded-lg">
                    <table className="w-full text-left font-jost text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#153f35] text-[#efefe8] font-semibold">
                          {block.headers.map((header, i) => (
                            <th key={i} className="p-4 border-b border-[#e2dfd5] uppercase tracking-wider">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e2dfd5] bg-surface text-[#3b3b3b]">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => {
                              // If it's the first cell, styling it as bold
                              const isFirst = cIdx === 0;
                              return (
                                <td
                                  key={cIdx}
                                  className={`p-4 ${isFirst ? "font-semibold text-foreground" : ""}`}
                                >
                                  {cell}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (block.type === "faq") {
                return <FAQSection key={bIdx} items={block.items} title={block.title} />;
              }

              if (block.type === "image") {
                const isFeatured = block.priority;
                return (
                  <div key={bIdx} className="my-8">
                    <div
                      className={`relative w-full overflow-hidden rounded-lg shadow-lg border border-[#e2dfd5] ${
                        isFeatured ? "h-[300px] md:h-[500px]" : "h-[280px] md:h-[450px]"
                      }`}
                    >
                      <Image
                        src={block.src}
                        alt={block.alt}
                        title={block.title || block.alt}
                        fill
                        priority={!!isFeatured}
                        className="object-cover"
                      />
                    </div>
                    {block.caption && (
                      <p className="mt-2 text-xs font-jost italic text-[#5a5a5a] text-center">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }

              if (block.type === "callout") {
                const isGoldBorder = block.theme === "gold-border";
                const isPine = block.theme === "pine";
                
                let containerClass = "bg-[#e8e5dc]/40 border-l-4 border-gold p-6 rounded-r-lg my-8";
                if (isGoldBorder) {
                  containerClass = "bg-[#e8e5dc]/40 p-8 rounded-lg border border-[#e2dfd5] my-12";
                } else if (isPine) {
                  containerClass = "bg-[#153f35] text-[#efefe8] p-8 rounded-lg my-12";
                }

                let headingClass = "font-cormorant text-2xl font-semibold uppercase tracking-wider text-foreground mb-3";
                if (isGoldBorder) {
                  headingClass = "font-cormorant text-2xl font-medium text-foreground uppercase tracking-wide mb-3";
                } else if (isPine) {
                  headingClass = "font-cormorant text-2xl font-semibold uppercase tracking-wider text-[#efefe8] mb-3";
                }

                return (
                  <div key={bIdx} className={containerClass}>
                    <h4 className={headingClass}>{block.title}</h4>
                    <div className="font-jost text-base font-light leading-relaxed text-[#3b3b3b]">
                      <ArticleInlineContent text={block.text} parts={block.parts} />
                    </div>
                  </div>
                );
              }

              if (block.type === "cta-banner") {
                return (
                  <div key={bIdx} className="mt-20 bg-[#153f35] text-[#efefe8] p-10 rounded-lg text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
                    <h3 className="font-cormorant text-3xl md:text-4xl font-medium tracking-wide mb-4">
                      {block.title}
                    </h3>
                    <p className="font-jost text-sm font-light text-[#efefe8]/80 max-w-xl mx-auto mb-8 leading-relaxed">
                      {block.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link
                        href={block.shopHref}
                        className="inline-block bg-gold text-[#031b16] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-300"
                      >
                        Explore Collection
                      </Link>
                      <Link
                        href={block.contactHref}
                        className="inline-block border border-[#efefe8]/30 text-[#efefe8] font-jost text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-[#efefe8] hover:text-[#031b16] transition-all duration-300"
                      >
                        Consult an Expert
                      </Link>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicArticle;
