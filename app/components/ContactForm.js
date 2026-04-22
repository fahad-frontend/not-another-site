"use client";

import { useActionState, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { sendContact } from "../actions/contact";
import CTABar from "./CTABar";

const BUDGETS = ["Launch", "Studio", "Complete", "Not sure"];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContact, null);
  const [budget, setBudget] = useState("");

  if (state?.ok) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-white p-10 md:p-16"
      >
        <div className="eyebrow opacity-60 mb-6">Message sent</div>
        <h3 className="font-display font-semibold text-3xl md:text-5xl tracking-tight leading-[1.05]">
          Thanks. We&apos;ll reply within one business day.
        </h3>
        <p className="mt-6 text-base md:text-lg opacity-70 max-w-xl">
          In the meantime, you can reach us directly.
        </p>
        <div className="mt-10">
          <CTABar
            href="mailto:hello@notanother.site"
            variant="outline"
            theme="dark"
          >
            hello@notanother.site
          </CTABar>
        </div>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col">
      <Field label="Your name" name="name" type="text" required />
      <Field label="Your email" name="email" type="email" required />
      <Field
        label="Tell us about your project"
        name="project"
        as="textarea"
        required
      />

      <div className="py-6 md:py-8 border-b border-white/30">
        <div className="eyebrow opacity-60 mb-4">Your budget</div>
        <input type="hidden" name="budget" value={budget} />
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => {
            const active = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(active ? "" : b)}
                className={`font-mono text-[12px] uppercase tracking-[0.16em] px-4 py-2.5 border transition-colors ${
                  active
                    ? "bg-white text-black border-white"
                    : "border-white/30 text-white hover:border-white"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {state?.error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="py-4 eyebrow text-white border-b border-white/30">
              {state.error}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8">
        <CTABar type="submit" variant="primary" theme="dark" disabled={isPending}>
          {isPending ? "Sending…" : "Send it"}
        </CTABar>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", as = "input", required }) {
  const isTextarea = as === "textarea";
  return (
    <div className="py-6 md:py-8 border-b border-white/30 group focus-within:border-white transition-colors">
      <label
        htmlFor={name}
        className="eyebrow opacity-60 block mb-3 group-focus-within:opacity-100"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          className="w-full bg-transparent text-white text-lg md:text-xl font-display placeholder-white/30 outline-none resize-none"
          placeholder="A few lines on what you're building, your timeline, links…"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
          className="w-full bg-transparent text-white text-lg md:text-xl font-display placeholder-white/30 outline-none"
          placeholder={
            name === "email" ? "you@company.com" : name === "name" ? "Your name" : ""
          }
        />
      )}
    </div>
  );
}
