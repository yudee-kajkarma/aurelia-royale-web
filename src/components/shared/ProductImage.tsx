"use client";

import { useState } from "react";

type ProductImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23f6f2ea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23735d45' font-family='Segoe UI, Arial, sans-serif' font-size='20'%3ENo Image%3C/text%3E%3C/svg%3E";

export function ProductImage({
  src,
  alt,
  className = "h-full w-full object-contain",
  fallbackClassName = "bg-[linear-gradient(180deg,#f7efe3_0%,#ffffff_100%)]",
}: ProductImageProps) {
  const [imageSrc, setImageSrc] = useState(src?.trim() || fallbackImage);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => setImageSrc(fallbackImage)}
      className={`${className} ${!src ? fallbackClassName : ""}`.trim()}
      loading="lazy"
    />
  );
}