"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function MotionStudio() {
  const path = usePathname();
  const [paused, setPaused] = useState(false);
  const seen = useRef(new WeakSet());
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion:reduce)");
    const update = () => {
      let stored = false;
      try {
        stored = sessionStorage.getItem("ana-motion") === "off";
      } catch {}
      setPaused(media.matches || stored);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "off" : "on";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    let cancelled = false,
      ctx,
      observer;
    const listeners = [];
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([m, p]) => {
        if (cancelled) return;
        const gsap = m.gsap;
        gsap.registerPlugin(p.ScrollTrigger);
        ctx = gsap.context(() => {
          const reveal = (el) => {
            if (seen.current.has(el)) return;
            seen.current.add(el);
            ctx.add(() => {
              gsap.fromTo(
                el,
                { opacity: 0, y: 24 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.85,
                  ease: "power3.out",
                  clearProps: "opacity,transform",
                },
              );
            });
          };
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (e.isIntersecting) {
                  reveal(e.target);
                  observer.unobserve(e.target);
                }
              });
            },
            { threshold: 0.08 },
          );
          document
            .querySelectorAll(
              "[data-reveal],.page-banner h1,.catalog-intro h1,.catalog-intro>p,.catalog-category>h2,.product-card,.story-grid>div,.location-grid>div,.contact-options>a,.faq details,.footer-top>div",
            )
            .forEach((el) => observer.observe(el));
          document
            .querySelectorAll(
              ".profile-location figure,.story-grid figure,.location-grid figure,.contact-hero figure",
            )
            .forEach((el) => {
              gsap.fromTo(
                el,
                { y: 18 },
                {
                  y: -18,
                  ease: "none",
                  scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            });
          document
            .querySelectorAll(".button,.header-order,.contact-options>a")
            .forEach((el) => {
              const enter = () =>
                ctx.add(() =>
                  gsap.to(el, { y: -3, duration: 0.3, ease: "power2.out" }),
                );
              const leave = () =>
                ctx.add(() =>
                  gsap.to(el, { y: 0, duration: 0.35, ease: "power2.out" }),
                );
              el.addEventListener("pointerenter", enter);
              el.addEventListener("pointerleave", leave);
              listeners.push(() => {
                el.removeEventListener("pointerenter", enter);
                el.removeEventListener("pointerleave", leave);
              });
            });
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      observer?.disconnect();
      listeners.forEach((fn) => fn());
      ctx?.revert();
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
          try {
            sessionStorage.setItem("ana-motion", p ? "on" : "off");
          } catch {}
          return !p;
        })
      }
    >
      <span aria-hidden="true">{paused ? ">" : "||"}</span> Animasi{" "}
      {paused ? "nonaktif" : "aktif"}
    </button>
  );
}
