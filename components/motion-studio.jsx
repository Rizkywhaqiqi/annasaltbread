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
          // Scrubbed, reversible entrance/exit: each bread has a separate transform layer.
          // No pinning or wheel interception; normal scrolling stays intact.
          gsap.utils.toArray("[data-scroll-bread]").forEach((el) => {
            const card = el.closest(".product-card");
            const section = card ?? el.closest("section");
            if (!section) return;
            const side = el.dataset.breadSide === "right" ? 1 : -1;
            const distance = () =>
              side *
              (card ? el.offsetWidth + 64 : innerWidth * 0.65 + el.offsetWidth);
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.65,
                  invalidateOnRefresh: true,
                },
              })
              .fromTo(
                el,
                { x: distance, rotation: side * 12, opacity: 0 },
                {
                  x: 0,
                  rotation: 0,
                  opacity: 1,
                  duration: 0.34,
                  ease: "power1.inOut",
                  immediateRender: false,
                },
              )
              .to(el, { x: 0, opacity: 1, duration: 0.36, ease: "none" })
              .to(el, {
                x: () => -distance(),
                rotation: -side * 10,
                opacity: 0,
                duration: 0.3,
                ease: "power1.inOut",
              });
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
      listeners.forEach((fn) => fn());
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
