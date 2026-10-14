"use client";

import {
    useCallback,
    useEffect,
    useId,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import type { PointerEvent } from "react";
import { useTranslations } from "next-intl";
import { Info } from "lucide-react";
import { useDismiss } from "@/hooks/useDismiss";

// Grace period for the mouse to travel from the icon, down the leader line,
// into the note without the note closing in between.
const HOVER_CLOSE_DELAY_MS = 300;
const NOTE_FILL = "#fbf8f1";

// Callout geometry, in px relative to the note's top-left corner.
const TAIL_HALF_WIDTH = 15;
const TAIL_RISE = 18; // tail tip sits this far above the note (inside its mt-11 gap)
const CORNER_RADIUS = 16; // matches rounded-2xl
const STROKE_WIDTH = 1.5;
// Lucide's Info circle (r=10 of 24, stroke 1.6) ends ~5px above our 32px button's bottom.
const ICON_CIRCLE_INSET = 5;

/**
 * The callout outline as three strokes, all starting where the line is first
 * drawn: `lead` from the icon down to the tail tip, then two halves that run
 * from the tip around either side of the note and meet at its bottom centre.
 */
function calloutPaths(width: number, height: number, tipX: number, leadStartY: number) {
    const inset = STROKE_WIDTH / 2;
    const r = CORNER_RADIUS - inset;
    const left = inset;
    const right = width - inset;
    const top = inset;
    const bottom = height - inset;
    const tipY = -TAIL_RISE;
    // Keep the tail's base off the rounded corners even if the icon sits far over.
    const baseX = Math.min(
        Math.max(tipX, left + r + TAIL_HALF_WIDTH),
        right - r - TAIL_HALF_WIDTH,
    );
    const midX = width / 2;

    return {
        lead: `M ${tipX} ${leadStartY} L ${tipX} ${tipY}`,
        clockwise: `M ${tipX} ${tipY} L ${baseX + TAIL_HALF_WIDTH} ${top} L ${right - r} ${top} A ${r} ${r} 0 0 1 ${right} ${top + r} L ${right} ${bottom - r} A ${r} ${r} 0 0 1 ${right - r} ${bottom} L ${midX} ${bottom}`,
        counterClockwise: `M ${tipX} ${tipY} L ${baseX - TAIL_HALF_WIDTH} ${top} L ${left + r} ${top} A ${r} ${r} 0 0 0 ${left} ${top + r} L ${left} ${bottom - r} A ${r} ${r} 0 0 0 ${left + r} ${bottom} L ${midX} ${bottom}`,
        // Dips 1px under the top edge so no seam shows between tail and note.
        tailFill: `M ${tipX} ${tipY} L ${baseX + TAIL_HALF_WIDTH} ${top + 1} L ${baseX - TAIL_HALF_WIDTH} ${top + 1} Z`,
    };
}

// Motion. Opening: the gold line draws out of the icon down to the tail tip,
// then splits and traces the note's border around both sides over the dark
// card, a glint riding each drawing tip, meeting at the bottom. Once the
// outline is mostly drawn, the cream fills in and the text follows (~0.75s
// in all). Closing is quick and reversed: text and fill fade, the border
// un-draws back to the tip, the line retracts into the icon.
// A CSS transition takes its timing from the state it heads to, so base
// classes time the close and `group-data-[state=open]` classes the open.
// The paths use pathLength="1" with a "1 2" dash, so dashoffset 1 = hidden
// and 0 = fully drawn.
const DRAW_LEAD =
    "[stroke-dashoffset:1] transition-[stroke-dashoffset] delay-220 duration-140 ease-out group-data-[state=open]/special:[stroke-dashoffset:0] group-data-[state=open]/special:delay-0 group-data-[state=open]/special:duration-180 group-data-[state=open]/special:ease-[cubic-bezier(0.4,0,1,1)] motion-reduce:transition-none motion-reduce:[stroke-dashoffset:0]";
const DRAW_BORDER =
    "[stroke-dashoffset:1] transition-[stroke-dashoffset] duration-260 ease-in group-data-[state=open]/special:[stroke-dashoffset:0] group-data-[state=open]/special:delay-150 group-data-[state=open]/special:duration-600 group-data-[state=open]/special:ease-[cubic-bezier(0.5,0,0.2,1)] motion-reduce:transition-none motion-reduce:[stroke-dashoffset:0]";
// Same delay, duration and easing as DRAW_BORDER, so it stays on the tip.
const GLINT =
    "opacity-0 group-data-[state=open]/special:animate-[special-date-glint_600ms_cubic-bezier(0.5,0,0.2,1)_150ms_both] motion-reduce:hidden";
const FADE_FILL =
    "opacity-0 transition-opacity delay-40 duration-160 ease-in group-data-[state=open]/special:opacity-100 group-data-[state=open]/special:delay-400 group-data-[state=open]/special:duration-280 group-data-[state=open]/special:ease-out motion-reduce:delay-0";

/**
 * "A Special Date. A Lasting Memory." line with an info icon. Hovering the
 * icon previews the note; clicking or tapping pins it open (phones have no
 * hover) until Escape or a press outside.
 */
export function SpecialDateInfo() {
    const t = useTranslations("ShopDetailsPage");
    const noteId = useId();
    // useId output can contain characters that break a url(#…) reference.
    const gradientId = `special-date-gold-${noteId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const noteRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<SVGLinearGradientElement>(null);
    const tailFillRef = useRef<SVGPathElement>(null);
    const leadRef = useRef<SVGPathElement>(null);
    const clockwiseRefs = useRef<SVGPathElement[]>([]);
    const counterClockwiseRefs = useRef<SVGPathElement[]>([]);
    const closeTimerRef = useRef<number | null>(null);
    const [pinned, setPinned] = useState(false);
    const [hovered, setHovered] = useState(false);
    const open = pinned || hovered;

    const clearCloseTimer = () => {
        if (closeTimerRef.current !== null) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    useEffect(
        () => () => {
            if (closeTimerRef.current !== null) {
                window.clearTimeout(closeTimerRef.current);
            }
        },
        [],
    );

    // The outline depends on the note's size and on where the icon lands
    // (which moves with the title's wrapping), so it is measured and the path
    // data written straight to the SVG — it only feeds the CSS transitions,
    // no re-render needed. Re-run on open (fonts may have shifted the icon)
    // and whenever the note reflows.
    useLayoutEffect(() => {
        function place() {
            const container = containerRef.current;
            const button = buttonRef.current;
            const note = noteRef.current;
            if (!container || !button || !note) return;

            const frame = container.getBoundingClientRect();
            const icon = button.getBoundingClientRect();
            const width = note.offsetWidth;
            const height = note.offsetHeight;
            const tipX = icon.left + icon.width / 2 - frame.left - note.offsetLeft;
            const leadStartY =
                icon.bottom - ICON_CIRCLE_INSET - frame.top - note.offsetTop;
            const paths = calloutPaths(width, height, tipX, leadStartY);

            tailFillRef.current?.setAttribute("d", paths.tailFill);
            leadRef.current?.setAttribute("d", paths.lead);
            clockwiseRefs.current.forEach((path) =>
                path.setAttribute("d", paths.clockwise),
            );
            counterClockwiseRefs.current.forEach((path) =>
                path.setAttribute("d", paths.counterClockwise),
            );
            const gradient = gradientRef.current;
            if (gradient) {
                gradient.setAttribute("y1", String(leadStartY));
                gradient.setAttribute("x2", String(width));
                gradient.setAttribute("y2", String(height));
            }
        }

        place();
        const observer = new ResizeObserver(place);
        if (noteRef.current) observer.observe(noteRef.current);
        if (containerRef.current) observer.observe(containerRef.current);
        window.addEventListener("resize", place);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", place);
        };
    }, [open]);

    const close = useCallback(() => {
        setPinned(false);
        setHovered(false);
    }, []);

    useDismiss({ open, onDismiss: close, containerRef, returnFocusRef: buttonRef });

    // Touch browsers fire synthetic pointerenter on tap; acting on it would
    // open the note only for the click handler to toggle it straight back.
    function handlePointerEnter(event: PointerEvent) {
        if (event.pointerType !== "mouse") return;
        clearCloseTimer();
        setHovered(true);
    }

    function handlePointerLeave(event: PointerEvent) {
        if (event.pointerType !== "mouse") return;
        clearCloseTimer();
        closeTimerRef.current = window.setTimeout(
            () => setHovered(false),
            HOVER_CLOSE_DELAY_MS,
        );
    }

    // Keep the icon on the same line as the title's last word when it wraps
    // on narrow screens, instead of dropping onto a line of its own.
    const title = t("specialDateTitle");
    const lastSpace = title.lastIndexOf(" ");

    const strokeProps = {
        fill: "none",
        pathLength: 1,
        strokeDasharray: "1 2",
        strokeWidth: STROKE_WIDTH,
        stroke: `url(#${gradientId})`,
    };
    const glintProps = {
        fill: "none",
        pathLength: 1,
        strokeDasharray: "0.06 2",
        strokeWidth: 2.5,
        strokeLinecap: "round" as const,
        stroke: "#fff4cc",
    };

    return (
        <div
            ref={containerRef}
            data-state={open ? "open" : "closed"}
            className="group/special relative mt-6"
        >
            <p className="font-cormorant text-balance text-[1.35rem] font-semibold leading-8 text-gold sm:text-2xl">
                {title.slice(0, lastSpace + 1)}
                <span className="whitespace-nowrap">
                    {title.slice(lastSpace + 1)}
                    <button
                        ref={buttonRef}
                        type="button"
                        aria-label={t("specialDateInfoLabel")}
                        aria-expanded={open}
                        aria-controls={noteId}
                        onClick={() => setPinned((value) => !value)}
                        onPointerEnter={handlePointerEnter}
                        onPointerLeave={handlePointerLeave}
                        // h-8 + align-top fill the 32px line box exactly, so the
                        // button's bottom is the paragraph's bottom, and the
                        // note's mt-11 gap is measured from there.
                        className="relative ml-2 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full align-top text-gold transition-colors hover:text-[#e2c568] focus-visible:outline-2 focus-visible:outline-gold"
                    >
                        <Info
                            size={24}
                            strokeWidth={1.6}
                            aria-hidden="true"
                            className="fill-transparent transition-[fill] duration-200 group-data-[state=open]/special:fill-gold/20"
                        />
                        {/* Invisible hover corridor over the gap, so the mouse
                            can follow the line down into the note. */}
                        <span
                            aria-hidden="true"
                            className="invisible absolute left-1/2 top-full h-11 w-7.5 -translate-x-1/2 group-data-[state=open]/special:visible"
                        />
                    </button>
                </span>
            </p>

            <div
                ref={noteRef}
                id={noteId}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                // Stays visible until the close animation has finished.
                className="invisible absolute inset-x-0 top-full z-20 mt-11 transition-[visibility] delay-400 duration-0 group-data-[state=open]/special:visible group-data-[state=open]/special:delay-0"
            >
                <div
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-2xl shadow-[0_18px_40px_-12px_rgba(3,27,22,0.55)] ${FADE_FILL}`}
                    style={{ backgroundColor: NOTE_FILL }}
                />

                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                >
                    <defs>
                        <linearGradient
                            ref={gradientRef}
                            id={gradientId}
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                        >
                            <stop offset="0" stopColor="#ecd58a" />
                            <stop offset="0.45" stopColor="#c7a63d" />
                            <stop offset="0.8" stopColor="#a8862c" />
                            <stop offset="1" stopColor="#d9bb5c" />
                        </linearGradient>
                    </defs>
                    <path ref={tailFillRef} fill={NOTE_FILL} className={FADE_FILL} />
                    <path ref={leadRef} {...strokeProps} className={DRAW_LEAD} />
                    <path
                        ref={(path) => {
                            if (path) clockwiseRefs.current[0] = path;
                        }}
                        {...strokeProps}
                        className={DRAW_BORDER}
                    />
                    <path
                        ref={(path) => {
                            if (path) counterClockwiseRefs.current[0] = path;
                        }}
                        {...strokeProps}
                        className={DRAW_BORDER}
                    />
                    <path
                        ref={(path) => {
                            if (path) clockwiseRefs.current[1] = path;
                        }}
                        {...glintProps}
                        className={GLINT}
                    />
                    <path
                        ref={(path) => {
                            if (path) counterClockwiseRefs.current[1] = path;
                        }}
                        {...glintProps}
                        className={GLINT}
                    />
                </svg>

                <div className="font-cormorant relative translate-y-1 px-6 py-5 text-left text-[1.08rem] font-medium leading-7 text-deep/90 opacity-0 transition-[opacity,translate] duration-120 ease-in group-data-[state=open]/special:translate-y-0 group-data-[state=open]/special:opacity-100 group-data-[state=open]/special:delay-460 group-data-[state=open]/special:duration-300 group-data-[state=open]/special:ease-out motion-reduce:translate-y-0 motion-reduce:delay-0 sm:px-7">
                    <p>{t("specialDateBody")}</p>
                    <p className="mt-4">
                        {t.rich("specialDateLeadTime", {
                            b: (chunks) => (
                                <strong className="whitespace-nowrap font-bold text-deep">
                                    {chunks}
                                </strong>
                            ),
                        })}
                    </p>
                    <p className="mt-4">{t("specialDateFee")}</p>
                </div>
            </div>
        </div>
    );
}
