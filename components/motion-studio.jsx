"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function MotionStudio() {
  const path = usePathname();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setPaused(
        media.matches || sessionStorage.getItem("ana-motion") === "off",
      );
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "off" : "on";
    if (paused) {
      document.getAnimations().forEach((a) => {
        if (a.effect?.target?.hasAttribute?.("data-reveal")) a.finish();
      });
    }
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const pending = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            const a = e.target.animate(
              [
                { opacity: 0, transform: "translateY(28px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 750,
                easing: "cubic-bezier(.2,.8,.2,1)",
                fill: "none",
              },
            );
            pending.add(a);
            a.onfinish = () => pending.delete(a);
            observer.unobserve(e.target);
          }
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(
        "[data-reveal],.page-banner h1,.story-grid>div,.location-grid>div,.contact-options>a,.product-card",
      )
      .forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      pending.forEach((a) => a.cancel());
    };
  }, [path, paused]);
  return (
    <button
      className="motion-control"
      type="button"
      aria-label={paused ? "Aktifkan animasi" : "Jeda animasi"}
      aria-pressed={paused}
      onClick={() =>
        setPaused((p) => {
          sessionStorage.setItem("ana-motion", p ? "on" : "off");
          return !p;
        })
      }
    >
      <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span> Motion{" "}
      {paused ? "off" : "on"}
    </button>
  );
}
