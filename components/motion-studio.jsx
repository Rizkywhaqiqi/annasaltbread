"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function MotionStudio() {
  const path = usePathname();
  const [paused, setPaused] = useState(null);
  const seen = useRef(new WeakSet());
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion:reduce)");
    const update = () => {
      let stored = null;
      try {
        stored = sessionStorage.getItem("ana-motion");
      } catch {}
      setPaused(
        stored === "on" ? false : stored === "off" ? true : media.matches,
      );
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused === null) return;
    document.documentElement.dataset.motion = paused ? "off" : "on";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);
  useEffect(() => {
    if (paused !== false) return;
    let cancelled = false,
      ctx,
      observer,
      layoutObserver,
      refreshFrame = 0;
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
                { opacity: 0, y: el.matches(".product-card") ? 14 : 24 },
                {
                  opacity: 1,
                  y: 0,
                  duration: el.matches(".product-card") ? 0.65 : 0.85,
                  ease: "power3.out",
                  clearProps: "opacity,transform",
                },
              );
              // Stagger only the homepage's editorial type after its section
              // enters view. The original wordmark is never split or replaced.
              const typeLines = el.querySelectorAll(".home-display-title > span");
              if (typeLines.length) {
                gsap.fromTo(
                  typeLines,
                  { opacity: 0, y: 18 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.13,
                    delay: 0.12,
                    ease: "power3.out",
                    clearProps: "opacity,transform",
                  },
                );
              }
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
          // Scroll-scrub parallax is decorative: never run on small/touch screens.
          // Pure CSS handles CTA hover so we do not create GSAP tweens per pointer event.
          if (window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)").matches) {
            document
              .querySelectorAll(".profile-location figure,.story-grid figure,.location-grid figure,.contact-hero figure")
              .forEach((el) => {
                gsap.fromTo(
                  el,
                  { y: 12 },
                  {
                    y: -12,
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
          }
        });
        // Desktop fonts and responsive columns can settle after hydration.
        // Re-measure triggers after layout changes without requiring a window resize.
        const refresh = () => {
          cancelAnimationFrame(refreshFrame);
          refreshFrame = requestAnimationFrame(() => {
            if (!cancelled) p.ScrollTrigger.refresh();
          });
        };
        document.fonts?.ready.then(() => { if (!cancelled) refresh(); });
        const main = document.querySelector("#main");
        if (main) {
          let previous = "";
          layoutObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(([entry]) => {
            const next = `${Math.round(entry.contentRect.width)}:${Math.round(entry.contentRect.height)}`;
            if (next !== previous) {
              previous = next;
              refresh();
            }
          }) : null;
          layoutObserver?.observe(main);
        }
        refresh();
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== "production") console.error("Motion initialization failed", error);
      });
    return () => {
      cancelled = true;
      observer?.disconnect();
      layoutObserver?.disconnect();
      cancelAnimationFrame(refreshFrame);
      ctx?.revert();
    };
  }, [path, paused]);
  return (
    <button
      className="motion-control"
      type="button"
      disabled={paused === null}
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
