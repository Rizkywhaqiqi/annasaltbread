"use client";

import { useEffect, useRef, useState } from "react";
import { motionAllowed } from "@/lib/motion";

// Decorative, silent brand film. Playback is opt-in under reduced motion,
// and an explicit visitor pause is preserved across scrolling and tab changes.
export default function EditorialVideo() {
  const videoRef = useRef(null);
  const visibleRef = useRef(false);
  const [choice, setChoice] = useState("auto"); // auto | play | pause
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    function sync() {
      if (cancelled) return;
      const allowed = choice === "play" || (choice === "auto" && motionAllowed());
      const shouldPlay = visibleRef.current && !document.hidden && allowed;
      if (!shouldPlay) {
        video.pause();
        return;
      }
      // Do not repeatedly restart a video that is already playing.
      if (!video.paused) return;
      const attempt = video.play();
      attempt?.catch?.(() => {
        if (!cancelled) setPlaying(false);
      });
    }

    const viewportObserver =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              visibleRef.current = entry.isIntersecting;
              sync();
            },
            { threshold: 0.1 },
          );
    if (viewportObserver) viewportObserver.observe(video);
    else visibleRef.current = true;

    const motionObserver =
      typeof MutationObserver === "undefined"
        ? null
        : new MutationObserver(sync);
    motionObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.addEventListener?.("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      cancelled = true;
      viewportObserver?.disconnect();
      motionObserver?.disconnect();
      reducedMotion.removeEventListener?.("change", sync);
      document.removeEventListener("visibilitychange", sync);
      video.pause();
    };
  }, [choice]);

  return (
    <div className="home-editorial-video-wrap">
      <video
        ref={videoRef}
        className="home-editorial-video"
        src="/video/ana.webm"
        poster="/images/ana-assortment.webp"
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
        aria-pressed={playing}
        onClick={() => setChoice(playing ? "pause" : "play")}
      >
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
      </button>
    </div>
  );
}
