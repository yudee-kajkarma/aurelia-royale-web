"use client";

import { useEffect, type RefObject } from "react";

type UseDismissOptions = {
    /** Only while this is true are the listeners attached. */
    open: boolean;
    /** Called when the user presses Escape or presses outside `containerRef`. */
    onDismiss: () => void;
    /** The element that counts as "inside" — a press within it is ignored. */
    containerRef: RefObject<HTMLElement | null>;
    /**
     * Focused after Escape, so keyboard users are not dropped at the top of
     * the document. Deliberately NOT focused after an outside press: the
     * pointer user is already on their way somewhere else, and yanking focus
     * back would fight them.
     */
    returnFocusRef?: RefObject<HTMLElement | null>;
};

/**
 * Closes a header popover on Escape or on a press outside it.
 *
 * `pointerdown` rather than `click` so the panel is gone before the press
 * lands on whatever sits underneath — with `click`, dismissing the menu and
 * activating the thing behind it happen in the wrong order, and a press that
 * starts inside and drags outside would close the menu on release.
 */
export function useDismiss({
    open,
    onDismiss,
    containerRef,
    returnFocusRef,
}: UseDismissOptions) {
    useEffect(() => {
        if (!open) return;

        function onPointerDown(event: PointerEvent) {
            if (!containerRef.current?.contains(event.target as Node)) {
                onDismiss();
            }
        }

        function onKeyDown(event: KeyboardEvent) {
            if (event.key !== "Escape") return;
            // Stop a parent overlay from also reacting and closing two layers
            // at once.
            event.stopPropagation();
            onDismiss();
            returnFocusRef?.current?.focus();
        }

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onDismiss, containerRef, returnFocusRef]);
}
