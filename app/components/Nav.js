"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";

const LINKS = [
  { href: "#what", label: "What" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why", label: "Why" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.6, 0.2, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ mixBlendMode: "difference" }}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between px-6 md:px-10 lg:px-16 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5 md:py-6"
          }`}
        >
          <a
            href="#top"
            className="flex items-center shrink-0 text-white"
          >
            <Logo variant="nav" priority />
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.16em] text-white">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative group"
              >
                {l.label}
                <span className="absolute left-0 right-0 -bottom-1 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col items-end gap-1.5 text-white"
          >
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            scaleX: scrolled ? 1 : 0,
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none h-px w-full origin-left bg-white"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.2, 0.6, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-black text-white md:hidden flex flex-col items-center justify-center gap-8 px-6"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="font-display font-semibold text-5xl tracking-tight"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
