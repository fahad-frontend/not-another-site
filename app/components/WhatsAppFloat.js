"use client";

import { motion, useReducedMotion } from "motion/react";

const WHATSAPP_URL = "https://wa.me/923305699114";

export default function WhatsAppFloat() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.15,
        duration: 0.45,
        ease: [0.2, 0.6, 0.2, 1],
      }}
      whileHover={
        reduced
          ? undefined
          : {
              scale: 1.1,
              y: -6,
              rotate: -3,
              boxShadow: "0 18px 50px rgba(0,0,0,0.55)",
              transition: {
                type: "spring",
                stiffness: 380,
                damping: 18,
                mass: 0.65,
              },
            }
      }
      whileTap={
        reduced
          ? undefined
          : {
              scale: 0.84,
              y: 3,
              rotate: 0,
              boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
              transition: {
                type: "spring",
                stiffness: 520,
                damping: 22,
                mass: 0.55,
              },
            }
      }
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-black shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:bottom-8 md:right-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="h-7 w-7 transition-transform duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-hover:scale-[1.12] group-hover:-rotate-12 group-active:scale-95 group-active:rotate-0"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}
