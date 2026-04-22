"use client";

import Image from "next/image";
import { SITE_LOGO_SRC } from "../lib/branding";

/**
 * @param {"nav" | "footer" | "compact"} variant
 */
export default function Logo({ variant = "nav", className = "", priority = false }) {
  const styles = {
    nav: "h-8 w-8 md:h-9 md:w-9",
    footer: "h-10 w-10 md:h-11 md:w-11 brightness-0",
    compact: "h-7 w-7",
  };

  return (
    <Image
      src={SITE_LOGO_SRC}
      alt="notanother.site"
      width={128}
      height={128}
      priority={priority}
      className={`object-contain ${styles[variant]} ${className}`}
      sizes="(max-width: 768px) 32px, 36px"
    />
  );
}
