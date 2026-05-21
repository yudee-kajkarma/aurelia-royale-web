"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

type ProductPurchasePanelProps = {
    productId: string;
};

export function ProductPurchasePanel({ productId }: ProductPurchasePanelProps) {
    const [quantity, setQuantity] = useState(1);

    function decreaseQuantity() {
        setQuantity((currentValue) => Math.max(1, currentValue - 1));
    }

    function increaseQuantity() {
        setQuantity((currentValue) => currentValue + 1);
    }

    return (
        <div className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)]">
                <div className="inline-flex h-14 overflow-hidden border border-deep/30">
                    <button
                        type="button"
                        onClick={decreaseQuantity}
                        disabled={quantity === 1}
                        className="inline-flex w-14 items-center justify-center text-deep transition hover:bg-deep hover:text-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-deep"
                        aria-label="Decrease quantity"
                    >
                        <Minus size={16} strokeWidth={1.75} />
                    </button>
                    <div className="font-jost inline-flex min-w-16 items-center justify-center border-x border-deep/20 px-4 text-base font-semibold text-deep">
                        {quantity}
                    </div>
                    <button
                        type="button"
                        onClick={increaseQuantity}
                        className="inline-flex w-14 items-center justify-center text-deep transition hover:bg-deep hover:text-gold"
                        aria-label="Increase quantity"
                    >
                        <Plus size={16} strokeWidth={1.75} />
                    </button>
                </div>

                <AddToCartButton
                    productId={productId}
                    quantity={quantity}
                    className="font-jost inline-flex h-14 w-full items-center justify-center bg-deep text-xs font-semibold uppercase tracking-[0.32em] text-gold transition hover:bg-[#0a2e28]"
                    label="Add To Cart"
                />
            </div>

            {/* <AddToCartButton
                productId={productId}
                quantity={quantity}
                className="font-jost inline-flex h-14 w-full items-center justify-center border-2 border-gold bg-transparent text-xs font-semibold uppercase tracking-[0.32em] text-deep transition hover:bg-gold/10"
                label="Buy Now"
                redirectToCart
            /> */}
        </div>
    );
}
