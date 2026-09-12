"use client";

import React from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQSection: React.FC<{ items: FaqItem[]; title?: string }> = ({
  items,
}) => {
  return (
    <div>
      <div className="space-y-4 mb-20">
        {items.map((faq, index) => (
          <details
            key={index}
            className="group border border-[#e2dfd5] rounded-lg p-5 bg-surface open:bg-[#e8e5dc]/40 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between font-cormorant text-xl md:text-2xl font-medium text-foreground cursor-pointer outline-none">
              <span>{faq.question}</span>
              <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-gold text-lg">▼</span>
            </summary>
            <p className="mt-4 font-jost text-sm font-light text-[#5a5a5a] leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
