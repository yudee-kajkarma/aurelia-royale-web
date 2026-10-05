"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { isExternalHref, normalizeContentHref } from "@/lib/blogs/links";

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
            element = isExternalHref(part.href) ? (
              <a
                href={part.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline decoration-[1px] underline-offset-4 hover:text-foreground"
              >
                {element}
              </a>
            ) : (
              <Link
                href={normalizeContentHref(part.href)}
                className="text-gold underline decoration-[1px] underline-offset-4 hover:text-foreground"
              >
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
