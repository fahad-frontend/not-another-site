"use client";

import { motion } from "motion/react";

export default function Section({
  id,
  theme = "dark",
  children,
  className = "",
  as: Tag = "section",
  fullBleed = false,
}) {
  const isDark = theme === "dark";
  const MotionTag = motion[Tag] || motion.section;

  return (
    <MotionTag
      id={id}
      data-theme={theme}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.2, 0.6, 0.2, 1] }}
      className={`relative w-full ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } ${fullBleed ? "" : "px-6 md:px-10 lg:px-16"} ${className}`}
    >
      {children}
    </MotionTag>
  );
}
