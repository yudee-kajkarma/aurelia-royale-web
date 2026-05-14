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

export function ProductMediaGallery({
    title,
    images,
}: ProductMediaGalleryProps) {
    const sortedImages = [...images].sort(
        (left, right) => left.position - right.position,
    );
    const [activeImageId, setActiveImageId] = useState(
        sortedImages[0]?.id ?? "",
    );

    const activeImage =
        sortedImages.find((image) => image.id === activeImageId) ??
        sortedImages[0];

    return (
        <div className="space-y-5">
            <div className="flex aspect-square items-center justify-center overflow-hidden bg-[#f3eee5] p-6">
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

            {sortedImages.length > 1 ? (
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                    {sortedImages.map((image) => {
                        const isActive = image.id === activeImage?.id;

                        return (
                            <button
                                key={image.id}
                                type="button"
                                aria-label={`Show ${title} image ${image.position}`}
                                onClick={() => setActiveImageId(image.id)}
                                className={`flex aspect-square items-center justify-center overflow-hidden bg-[#f3eee5] p-2 transition ${
                                    isActive
                                        ? "border-2 border-gold"
                                        : "border border-deep/10 hover:border-gold/60"
                                }`}
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
            ) : null}
        </div>
    );
}
