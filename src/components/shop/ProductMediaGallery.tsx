"use client";

import Image from "next/image";
import { useState } from "react";

type ProductMediaGalleryProps = {
  title: string;
  images: Array<{
    id: string;
    src: string;
    position: number;
  }>;
};

export function ProductMediaGallery({ title, images }: ProductMediaGalleryProps) {
  const sortedImages = [...images].sort((left, right) => left.position - right.position);
  const [activeImageId, setActiveImageId] = useState(sortedImages[0]?.id ?? "");

  const activeImage = sortedImages.find((image) => image.id === activeImageId) ?? sortedImages[0];

  return (
    <div className="space-y-5">
      <div className="flex h-[540px] items-center justify-center border border-black/15 bg-[#0f1420] p-6">
        {activeImage ? (
          <Image
            src={activeImage.src}
            alt={`${title} image ${activeImage.position}`}
            width={900}
            height={900}
            unoptimized
            className="h-full w-full object-contain"
          />
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {sortedImages.map((image) => {
          const isActive = image.id === activeImage?.id;

          return (
            <button
              key={image.id}
              type="button"
              aria-label={`Show ${title} image ${image.position}`}
              onClick={() => setActiveImageId(image.id)}
              className={isActive ? "h-28 overflow-hidden border-2 border-[var(--gold)] bg-[#0f1420] p-1" : "h-28 overflow-hidden border border-black/10 bg-[#0f1420] p-1 transition hover:border-[var(--gold)]/50"}
            >
              <Image
                src={image.src}
                alt={`${title} thumbnail ${image.position}`}
                width={220}
                height={220}
                unoptimized
                className="h-full w-full object-contain"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
