"use client";

import { useEffect } from "react";

/**
 * CSS scroll-behavior is often overridden or ignored. Same-document hash links
 * are handled here with scrollIntoView({ behavior: "smooth" }) for reliable smooth scrolling.
 */
export default function SmoothScroll() {
  useEffect(() => {
    function onClickCapture(e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest?.("a[href*='#']");
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr || hrefAttr === "#") return;

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;

      const hash = url.hash;
      if (!hash || hash === "#") return;

      const id = decodeURIComponent(hash.slice(1));
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      el.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });

      const path =
        window.location.pathname +
        window.location.search +
        hash;
      window.history.replaceState(null, "", path);
    }

    document.addEventListener("click", onClickCapture, true);
    return () =>
      document.removeEventListener("click", onClickCapture, true);
  }, []);

  return null;
}
