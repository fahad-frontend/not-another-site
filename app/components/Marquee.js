"use client";

import { motion, useReducedMotion } from "motion/react";
import { SITE_LOGO_SRC } from "../lib/branding";

export default function Marquee({
  items = ["NOT ANOTHER SITE", "DESIGN + DEV", "EST. 2026"],
  theme = "dark",
  speed = 40,
  className = "",
}) {
  const reduced = useReducedMotion();
  const isDark = theme === "dark";
  const line = Array.from({ length: 4 }).flatMap(() => items);

  return (
    <div
      className={`relative w-full overflow-hidden border-y py-6 md:py-8 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } ${className}`}
      style={{ borderColor: "currentColor" }}
    >
      <motion.div
        className="flex whitespace-nowrap gap-12 md:gap-16 font-display font-semibold"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 3rem)",
          letterSpacing: "-0.02em",
        }}
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...line, ...line].map((item, i) => (
          <span key={i} className="flex items-center gap-12 md:gap-16">
            <span>{item}</span>
            <span
              aria-hidden
              className={`inline-flex items-center justify-center opacity-40 ${
                isDark ? "" : "brightness-0"
              }`}
            >
              <img
                src={SITE_LOGO_SRC}
                alt=""
                className="h-[0.85em] w-[0.85em] object-contain"
                draggable={false}
              />
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
