"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Arrow } from "@/components/icons";
import BrandFlower from "@/components/brand-flower";
import BloomScene from "@/components/bloom-scene";
export default function Hero() {
  const scene = useRef(null);
  const frame = useRef(0);
  useEffect(() => {
    let scrollFrame = 0;
    function update() {
      if (
        document.documentElement.dataset.motion === "off" ||
        matchMedia("(prefers-reduced-motion:reduce)").matches
      )
        return;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        if (!scene.current) return;
        const r = scene.current.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -r.top / r.height));
        scene.current.style.setProperty("--scroll-shift", `${progress * 65}px`);
      });
    }
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(frame.current);
    };
  }, []);
  function move(e) {
    if (
      !matchMedia("(pointer:fine) and (prefers-reduced-motion:no-preference)")
        .matches ||
      document.documentElement.dataset.motion === "off"
    )
      return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      scene.current?.style.setProperty("--mx", `${x * 24}px`);
      scene.current?.style.setProperty("--my", `${y * 18}px`);
      scene.current?.style.setProperty("--rx", `${-y * 8}deg`);
      scene.current?.style.setProperty("--ry", `${x * 10}deg`);
    });
  }
  function reset() {
    cancelAnimationFrame(frame.current);
    for (const k of ["--mx", "--my", "--rx", "--ry"])
      scene.current?.style.removeProperty(k);
  }
  return (
    <section
      className="brand-hero"
      ref={scene}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="brand-top">
        <span className="eyebrow">SORRENTO JUNCTION · TANGERANG</span>
        <span className="eyebrow">MENU · LOKASI · PEMESANAN</span>
      </div>
      <div className="brand-heading">
        <h1>
          <span>ANA</span>
          <em>Salt Bread</em>
        </h1>
        <BloomScene className="hero-brand-flower" />
      </div>
      <div className="brand-stage">
        <span className="brand-outline" aria-hidden="true">
          ANA SALT BREAD
        </span>
        <div className="brand-orbit orbit-savory">
          <Link
            className="brand-bread bread-savory"
            href="/menu"
            aria-label="Lihat salt bread gurih"
          >
            <Image
              src="/graphics/savory-cutout.png"
              width={900}
              height={600}
              sizes="(max-width:720px) 60vw,35vw"
              alt="Salt bread Ana dengan saus dan daun bawang"
              loading="eager"
            />
          </Link>
        </div>
        <div className="brand-orbit orbit-cream">
          <Link
            className="brand-bread bread-cream"
            href="/menu"
            aria-label="Lihat salt bread isian krim"
          >
            <Image
              src="/graphics/cream-cutout.png"
              width={900}
              height={600}
              sizes="(max-width:720px) 75vw,43vw"
              alt="Salt bread Ana dengan isian krim"
              loading="eager"
              fetchPriority="high"
            />
          </Link>
        </div>
        <div className="brand-orbit orbit-chocolate">
          <Link
            className="brand-bread bread-chocolate"
            href="/menu"
            aria-label="Lihat salt bread cokelat"
          >
            <Image
              src="/graphics/chocolate-cutout.png"
              width={900}
              height={600}
              sizes="(max-width:720px) 55vw,33vw"
              alt="Salt bread Ana berlapis cokelat"
              loading="eager"
            />
          </Link>
        </div>
        <BrandFlower className="stage-flower" />
      </div>
      <div className="brand-hero-bottom">
        <p>
          Salt bread manis dan gurih.
          <br />
          Pilih rasanya, pesan langsung ke Ana.
        </p>
        <div className="brand-actions">
          <Link href="/menu" className="button dark">
            Lihat menu <Arrow />
          </Link>
          <Link href="/kunjungi" className="text-link">
            Lokasi outlet <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
