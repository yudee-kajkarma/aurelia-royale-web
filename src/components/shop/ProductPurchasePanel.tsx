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
    <div className="mt-9 space-y-4">
      <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)]">
        <div className="inline-flex h-16 overflow-hidden bg-white">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            className="inline-flex w-16 items-center justify-center border-r border-[#101723]/10 text-[#101723] transition hover:bg-[#101723] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            <Minus size={18} />
          </button>
          <div className="inline-flex min-w-20 items-center justify-center px-6 text-lg font-extrabold text-[#101723]">
            {quantity}
          </div>
          <button
            type="button"
            onClick={increaseQuantity}
            className="inline-flex w-16 items-center justify-center border-l border-[#101723]/10 text-[#101723] transition hover:bg-[#101723] hover:text-white"
            aria-label="Increase quantity"
          >
            <Plus size={18} />
          </button>
        </div>

        <AddToCartButton
          productId={productId}
          quantity={quantity}
          className="h-16 w-full bg-[#101723] text-xl font-extrabold uppercase tracking-[0.04em] text-white"
          label="Add To Cart"
        />
      </div>

      <div>
        <AddToCartButton
          productId={productId}
          quantity={quantity}
          className="h-16 w-full bg-[#101723] text-xl font-extrabold uppercase tracking-[0.04em] text-white"
          label="Buy Now"
          redirectToCart
        />
      </div>
    </div>
  );
}
