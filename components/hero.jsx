"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Arrow } from "@/components/icons";
export default function Hero() {
  const scene = useRef(null);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
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
      scene.current?.style.setProperty("--mx", `${x * 10}px`);
      scene.current?.style.setProperty("--my", `${y * 8}px`);
      scene.current?.style.setProperty("--rx", `${-y * 3}deg`);
      scene.current?.style.setProperty("--ry", `${x * 4}deg`);
    });
  }
  function reset() {
    cancelAnimationFrame(frame.current);
    for (const key of ["--mx", "--my", "--rx", "--ry"])
      scene.current?.style.removeProperty(key);
  }
  return (
    <section className="profile-hero">
      <div className="profile-intro" data-reveal>
        <span className="eyebrow">SORRENTO JUNCTION · TANGERANG</span>
        <h1>
          Ana
          <br />
          Salt Bread
        </h1>
        <p>Salt bread dengan pilihan isian manis dan topping gurih.</p>
        <div className="profile-actions">
          <Link className="button dark" href="/menu">
            Lihat menu <Arrow />
          </Link>
          <Link className="text-link" href="/kunjungi">
            Lokasi outlet <Arrow />
          </Link>
        </div>
      </div>
      <div
        className="profile-products"
        ref={scene}
        onPointerMove={move}
        onPointerLeave={reset}
      >
        <div className="product-backdrop" aria-hidden="true" />
        <Link
          className="profile-bread profile-savory"
          href="/menu"
          aria-label="Lihat salt bread gurih"
        >
          <Image
            src="/graphics/savory-cutout.png"
            width={900}
            height={600}
            sizes="(max-width:720px) 55vw, 25vw"
            alt="Salt bread dengan saus dan daun bawang"
            loading="eager"
          />
        </Link>
        <Link
          className="profile-bread profile-cream"
          href="/menu"
          aria-label="Lihat salt bread isian krim"
        >
          <Image
            src="/graphics/cream-cutout.png"
            width={900}
            height={600}
            sizes="(max-width:720px) 75vw, 40vw"
            alt="Salt bread dengan isian krim"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
        <Link
          className="profile-bread profile-chocolate"
          href="/menu"
          aria-label="Lihat salt bread cokelat"
        >
          <Image
            src="/graphics/chocolate-cutout.png"
            width={900}
            height={600}
            sizes="(max-width:720px) 45vw, 23vw"
            alt="Salt bread berlapis cokelat"
            loading="eager"
          />
        </Link>
      </div>
    </section>
  );
}
