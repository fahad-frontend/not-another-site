"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Heading({
  children,
  size = "xl",
  as: Tag = "h2",
  className = "",
  stagger = true,
}) {
  const reduced = useReducedMotion();
  const sizeClass =
    size === "xl"
      ? "display-xl"
      : size === "lg"
        ? "display-lg"
        : size === "hero"
          ? "display-hero"
          : "display-md";

  const text = typeof children === "string" ? children : "";
  const lines = text.split("\n");

  if (!stagger || reduced || !text) {
    return (
      <Tag className={`${sizeClass} ${className}`}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={`${sizeClass} ${className}`}>
      {lines.map((line, lineIdx) => (
        <motion.span
          key={lineIdx}
          className="block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
            hidden: {},
          }}
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-top pb-[0.1em] pr-[0.22em]"
            >
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "110%" },
                  visible: {
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.2, 0.6, 0.2, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      ))}
    </Tag>
  );
}
