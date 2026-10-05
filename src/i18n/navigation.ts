import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware replacements for next/link and next/navigation. In-scope
 * components MUST import from here, so an internal href written as "/shop/"
 * stays inside the active locale automatically.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
