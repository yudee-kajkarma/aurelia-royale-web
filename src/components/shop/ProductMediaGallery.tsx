"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

type GalleryItem =
    | { id: string; kind: "image"; src: string }
    | { id: string; kind: "video"; src: string; poster?: string };

type ProductMediaGalleryProps = {
    title: string;
    items: GalleryItem[];
};

export function ProductMediaGallery({
    title,
    items,
}: ProductMediaGalleryProps) {
    const [activeId, setActiveId] = useState(items[0]?.id ?? "");

    const activeItem =
        items.find((item) => item.id === activeId) ?? items[0];

    return (
        <div className="space-y-5">
            <div className="flex aspect-square items-center justify-center overflow-hidden bg-[#f3eee5] p-6">
                {activeItem?.kind === "video" ? (
                    <iframe
                        key={activeItem.id}
                        src={activeItem.src}
                        title={`${title} 360° view`}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; fullscreen; gyroscope; xr-spatial-tracking"
                        allowFullScreen
                    />
                ) : activeItem ? (
                    <Image
                        src={activeItem.src}
                        alt={title}
                        width={900}
                        height={900}
                        unoptimized
                        className="h-full w-full object-contain"
                    />
                ) : null}
            </div>

            {items.length > 1 ? (
                <div className="grid grid-cols-4 gap-3">
                    {items.map((item) => {
                        const isActive = item.id === activeItem?.id;
                        const thumbSrc =
                            item.kind === "video" ? item.poster : item.src;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                aria-label={
                                    item.kind === "video"
                                        ? `Show ${title} 360° view`
                                        : `Show ${title} image`
                                }
                                onClick={() => setActiveId(item.id)}
                                className={`relative flex aspect-square items-center justify-center overflow-hidden bg-[#f3eee5] p-2 transition ${
                                    isActive
                                        ? "border-2 border-gold"
                                        : "border border-deep/10 hover:border-gold/60"
                                }`}
                            >
                                {thumbSrc ? (
                                    <Image
                                        src={thumbSrc}
                                        alt={
                                            item.kind === "video"
                                                ? `${title} 360° view`
                                                : title
                                        }
                                        width={220}
                                        height={220}
                                        unoptimized
                                        className="h-full w-full object-contain"
                                    />
                                ) : (
                                    <span className="h-full w-full bg-deep/5" />
                                )}

                                {item.kind === "video" ? (
                                    <span
                                        className="absolute inset-0 flex items-center justify-center bg-deep/25"
                                        aria-hidden="true"
                                    >
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-deep shadow-sm">
                                            <Play
                                                size={16}
                                                fill="currentColor"
                                                className="translate-x-px"
                                            />
                                        </span>
                                    </span>
                                ) : null}
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
