"use client";

import { useEffect, useState } from "react";
import { familyService } from "@/services/family/family.service";
import { getStoredSession } from "@/services/auth/auth.storage";
import { AUTH_STATE_CHANGE_EVENT } from "@/services/auth/auth.types";

export interface DiscountState {
  discountPercent: number;
  isLoading: boolean;
}

// Module-level cache so 20 product cards share one network request.
let cachedDiscount: number | null = null;
let inflight: Promise<number> | null = null;
const subscribers = new Set<(value: number) => void>();

function notify(value: number) {
  for (const fn of subscribers) {
    fn(value);
  }
}

function resetCache() {
  cachedDiscount = null;
  inflight = null;
  notify(0);
}

async function fetchDiscount(): Promise<number> {
  const session = typeof window === "undefined" ? null : getStoredSession();
  if (!session?.token) {
    cachedDiscount = 0;
    return 0;
  }

  if (cachedDiscount !== null) {
    return cachedDiscount;
  }

  if (!inflight) {
    inflight = familyService
      .getFamily()
      .then((data) => {
        const value = data.discountPercent ?? 0;
        cachedDiscount = value;
        notify(value);
        return value;
      })
      .catch(() => {
        cachedDiscount = 0;
        notify(0);
        return 0;
      })
      .finally(() => {
        inflight = null;
      });
  }

  return inflight;
}

let authListenerInstalled = false;
function installAuthListener() {
  if (authListenerInstalled || typeof window === "undefined") return;
  authListenerInstalled = true;
  window.addEventListener(AUTH_STATE_CHANGE_EVENT, resetCache);
  window.addEventListener("storage", resetCache);
}

export function invalidateDiscountCache() {
  resetCache();
}

export function useDiscount(): DiscountState {
  const [discountPercent, setDiscountPercent] = useState<number>(cachedDiscount ?? 0);
  const [isLoading, setIsLoading] = useState<boolean>(cachedDiscount === null);

  useEffect(() => {
    installAuthListener();

    let isMounted = true;
    const onChange = (value: number) => {
      if (!isMounted) return;
      setDiscountPercent(value);
      setIsLoading(false);
    };
    subscribers.add(onChange);

    void fetchDiscount().then((value) => {
      if (isMounted) {
        setDiscountPercent(value);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscribers.delete(onChange);
    };
  }, []);

  return { discountPercent, isLoading };
}
