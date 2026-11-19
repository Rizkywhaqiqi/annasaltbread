"use client";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import Link from "next/link";
import { useRef, useEffect } from "react";
export function Spark({ className = "" }) {
  return (
    <svg
      className={"doodle-spark " + className}
      viewBox="0 0 60 60"
      aria-hidden="true"
    >
      <path d="M30 3c0 18-9 27-27 27 18 0 27 9 27 27 0-18 9-27 27-27C39 30 30 21 30 3Z" />
    </svg>
  );
}
export default function Hero() {
  const scene = useRef(null);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  useEffect(() => {
    let scrollFrame = 0;
    const update = () => {
      if (
        document.documentElement.dataset.motion === "off" ||
        matchMedia("(prefers-reduced-motion:reduce)").matches
      )
        return;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        if (!scene.current) return;
        const r = scene.current.getBoundingClientRect();
        const amount = Math.min(1, Math.max(0, -r.top / r.height));
        scene.current.style.setProperty("--scroll-shift", `${amount * 70}px`);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(scrollFrame);
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
      scene.current?.style.setProperty("--mx", `${x * 25}px`);
      scene.current?.style.setProperty("--my", `${y * 20}px`);
      scene.current?.style.setProperty("--rx", `${-y * 9}deg`);
      scene.current?.style.setProperty("--ry", `${x * 11}deg`);
    });
  }
  function reset() {
    cancelAnimationFrame(frame.current);
    scene.current?.style.setProperty("--mx", "0px");
    scene.current?.style.setProperty("--my", "0px");
    scene.current?.style.setProperty("--rx", "0deg");
    scene.current?.style.setProperty("--ry", "0deg");
  }
  return (
    <section
      className="bakery-hero"
      ref={scene}
      onPointerMove={move}
      onPointerLeave={reset}
      aria-label="Selamat datang di Ana"
    >
      <div className="bakery-hero-top">
        <span className="eyebrow">SALT BREAD, COFFEE & LITTLE MOMENTS</span>
        <span className="hand-note">a little love, baked in.</span>
      </div>
      <div className="hero-editorial">
        <h1>
          ROTI KECIL.
          <br />
          <em>big feelings.</em>
        </h1>
        <div className="hero-hello">
          <Image
            src="/graphics/ana-flower.svg"
            alt=""
            width={150}
            height={150}
            unoptimized
          />
          <span className="hand-note">oh, hi there!</span>
          <p>
            Kenalan dengan Ana.
            <br />
            Teman untuk jeda kecilmu.
          </p>
        </div>
      </div>
      <div className="bread-playground">
        <div className="bread-outline" aria-hidden="true">
          BAKE & BLOOM
        </div>
        <Spark className="spark-one" />
        <Spark className="spark-two" />
        <span className="crumb crumb-a" aria-hidden="true" />
        <span className="crumb crumb-b" aria-hidden="true" />
        <span className="crumb crumb-c" aria-hidden="true" />
        <div className="bread-orbit orbit-savory">
          <Link
            href="/menu"
            className="floating-bread bread-savory"
            aria-label="Jelajahi salt bread gurih"
          >
            <Image
              src="/graphics/savory-cutout.png"
              alt="Salt bread Ana dengan saus dan taburan daun bawang, tanpa latar"
              width={900}
              height={600}
              sizes="(max-width:720px) 60vw, 35vw"
              loading="eager"
              fetchPriority="high"
            />
            <span className="bread-caption">a little savoury</span>
          </Link>
        </div>
        <div className="bread-orbit orbit-cream">
          <Link
            href="/menu"
            className="floating-bread bread-cream"
            aria-label="Jelajahi salt bread isian krim"
          >
            <Image
              src="/graphics/cream-cutout.png"
              alt="Salt bread Ana dengan isian krim putih, tanpa latar"
              width={900}
              height={600}
              sizes="(max-width:720px) 75vw, 42vw"
              loading="eager"
              fetchPriority="high"
            />
            <span className="bread-caption">a little creamy</span>
          </Link>
        </div>
        <div className="bread-orbit orbit-chocolate">
          <Link
            href="/menu"
            className="floating-bread bread-chocolate"
            aria-label="Jelajahi salt bread cokelat"
          >
            <Image
              src="/graphics/chocolate-cutout.png"
              alt="Salt bread Ana berlapis cokelat dan chocolate chips, tanpa latar"
              loading="eager"
              width={900}
              height={600}
              sizes="(max-width:720px) 55vw, 32vw"
            />
            <span className="bread-caption">a little sweet</span>
          </Link>
        </div>
        <span className="hand-note playground-note">
          pilih yang bikin
          <br />
          kamu senyum :)
          <svg viewBox="0 0 100 60" aria-hidden="true">
            <path d="M5 8C28 2 75 4 72 44M59 31l14 15 14-14" />
          </svg>
        </span>
        <Link className="bakery-seal" href="/menu">
          <span>
            ADA YANG
            <br />
            BIKIN NGILER?
          </span>
          <b>
            Lihat pilihan <Arrow />
          </b>
        </Link>
      </div>
      <div className="hero-ground">
        <span className="eyebrow">TANGERANG, WITH LOVE.</span>
        <Link href="/kunjungi">
          Mampir ke Ana{" "}
          <span>
            <Arrow />
          </span>
        </Link>
        <span className="scroll-note">SCROLL, THERE’S MORE ↓</span>
      </div>
    </section>
  );
}
