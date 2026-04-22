"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "currentColor" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-6 md:gap-10">
          <span className="eyebrow opacity-50 shrink-0">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-display font-semibold text-2xl md:text-4xl tracking-tight">
            {q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.6, 0.2, 1] }}
          className="shrink-0 text-2xl md:text-3xl font-light leading-none"
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.6, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:pb-8 md:pl-[calc(2.5rem+2ch)]">
              <p className="text-base md:text-lg opacity-75 max-w-2xl leading-relaxed">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
