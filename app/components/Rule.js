"use client";

import { motion } from "motion/react";

export default function Rule({ className = "" }) {
  return (
    <motion.hr
      className={`border-0 h-px w-full origin-left ${className}`}
      style={{ backgroundColor: "currentColor", opacity: 0.25 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
    />
  );
}
