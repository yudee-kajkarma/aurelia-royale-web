"use client";

import { useEffect, useState } from "react";
import { familyService } from "@/services/family/family.service";

export interface DiscountState {
  discountPercent: number;
  isLoading: boolean;
}

/**
 * Lightweight hook that fetches the signed-in user's family discount.
 * Returns 0 when unauthenticated or on failure so the UI degrades gracefully.
 */
export function useDiscount(): DiscountState {
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const data = await familyService.getFamily();
        if (isMounted) {
          setDiscountPercent(data.discountPercent ?? 0);
        }
      } catch {
        if (isMounted) {
          setDiscountPercent(0);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { discountPercent, isLoading };
}
