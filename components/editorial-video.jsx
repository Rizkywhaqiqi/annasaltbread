"use client";

import { useEffect, useRef, useState } from "react";
import { motionAllowed } from "@/lib/motion";

// Decorative, silent brand-film loop. Keep native video controls hidden but
// provide an accessible pause/play control for motion longer than five seconds.
export default function EditorialVideo() {
  const videoRef = useRef(null);
  const visibleRef = useRef(false);
  const [pausedByVisitor, setPausedByVisitor] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    const sync = () => {
      if (cancelled) return;
      const shouldPlay =
        visibleRef.current &&
        !document.hidden &&
        !pausedByVisitor &&
        motionAllowed();
      if (!shouldPlay) {
        video.pause();
        setPlaying(false);
        return;
      }
      const attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => {
          if (!cancelled) setPlaying(false);
        });
      }
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => {
              visibleRef.current = entry.isIntersecting;
              sync();
            },
            { threshold: 0.1 },
          )
        : null;
    if (observer) observer.observe(video);
    else visibleRef.current = true;

    const motionObserver =
      typeof MutationObserver !== "undefined"
        ? new MutationObserver(sync)
        : null;
    motionObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.addEventListener?.("change", sync);
    document.addEventListener("visibilitychange", sync);
    if (!observer) sync();

    return () => {
      cancelled = true;
      observer?.disconnect();
      motionObserver?.disconnect();
      reducedMotion.removeEventListener?.("change", sync);
      document.removeEventListener("visibilitychange", sync);
      video.pause();
    };
  }, [pausedByVisitor]);

  return (
    <div className="home-editorial-video-wrap">
      <video
        ref={videoRef}
        className="home-editorial-video"
        src="/video/ana.webm"
        poster="/images/ana-assortment.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        className="home-editorial-video-toggle"
        aria-label={playing ? "Jeda video Ana" : "Putar video Ana"}
        aria-pressed={pausedByVisitor}
        onClick={() => setPausedByVisitor((paused) => !paused)}
      >
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
      </button>
    </div>
  );
}
