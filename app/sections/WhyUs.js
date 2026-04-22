"use client";

import { motion } from "motion/react";
import Section from "../components/Section";
import Eyebrow from "../components/Eyebrow";
import Heading from "../components/Heading";

const REASONS = [
  {
    number: "01",
    title: "Owned, not rented.",
    body: "You keep the code, the stack, the domain. Move it anywhere, anytime.",
  },
  {
    number: "02",
    title: "Built for humans and Google.",
    body: "SEO, semantics, accessibility. Not bolted on at the end.",
  },
  {
    number: "03",
    title: "Ships in weeks.",
    body: "Fixed scope. Fixed timeline. No rolling deadlines.",
  },
  {
    number: "04",
    title: "One team, one bill.",
    body: "Design, dev, launch. Same people start to finish.",
  },
];

export default function WhyUs() {
  return (
    <Section id="why" theme="dark" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <Eyebrow>03 / Why us</Eyebrow>
          <Heading size="lg">Not a template.</Heading>
        </div>

        <div className="border-t" style={{ borderColor: "currentColor" }}>
          {REASONS.map((r, i) => (
            <ReasonRow key={r.number} reason={r} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ReasonRow({ reason }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5 }}
      className="relative border-b py-8 md:py-12 group"
      style={{ borderColor: "currentColor" }}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left"
        style={{ backgroundColor: "currentColor" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.2, 0.6, 0.2, 1] }}
      />

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.2, 0.6, 0.2, 1] }}
        className="grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 md:gap-10 items-start"
      >
        <div className="eyebrow opacity-50 pt-1 md:pt-3">{reason.number}</div>
        <div className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
          {reason.title}
        </div>
        <p className="col-span-2 md:col-span-1 text-base md:text-lg opacity-70 leading-relaxed max-w-md md:pt-2">
          {reason.body}
        </p>
      </motion.div>
    </motion.div>
  );
}
