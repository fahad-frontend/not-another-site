"use client";

import { motion } from "motion/react";

export default function CTABar({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  theme = "dark",
  className = "",
  ...rest
}) {
  const isPrimary = variant === "primary";
  const isDark = theme === "dark";

  const primaryClasses = isDark
    ? "bg-white text-black"
    : "bg-black text-white";

  const outlineClasses = isDark
    ? "border border-white/20 text-white hover:border-white"
    : "border border-black/20 text-black hover:border-black";

  const base = `group relative w-full h-[72px] md:h-[84px] flex items-center justify-center gap-3
    font-mono text-[13px] tracking-[0.18em] uppercase font-medium
    transition-colors duration-200 overflow-hidden
    ${isPrimary ? primaryClasses : outlineClasses} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <motion.span
          aria-hidden
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
      </span>
    </>
  );

  const MotionEl = href ? motion.a : motion.button;
  const extraProps = href
    ? { href }
    : { type, onClick };

  return (
    <MotionEl
      whileHover={{ scale: 0.995 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={base}
      {...extraProps}
      {...rest}
    >
      {content}
    </MotionEl>
  );
}
