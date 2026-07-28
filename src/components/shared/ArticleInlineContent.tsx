"use client";

import React from "react";
import Link from "next/link";

export type InlinePart = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  href?: string;
};

export const ArticleInlineContent: React.FC<{ text?: string; parts?: InlinePart[] }> = ({
  text,
  parts,
}) => {
  if (parts && parts.length > 0) {
    return (
      <>
        {parts.map((part, index) => {
          let element: React.ReactNode = part.text;

          if (part.bold) {
            element = <strong className="font-semibold text-foreground">{element}</strong>;
          }
          if (part.italic) {
            element = <em className="italic">{element}</em>;
          }
          if (part.href) {
            element = (
              <Link href={part.href} className="text-gold hover:underline transition-colors duration-300">
                {element}
              </Link>
            );
          }

          return <React.Fragment key={index}>{element}</React.Fragment>;
        })}
      </>
    );
  }

  return <>{text}</>;
};

export default ArticleInlineContent;
