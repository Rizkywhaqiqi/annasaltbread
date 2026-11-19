"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import BrandFlower from "@/components/brand-flower";
const pages = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/menu", label: "Menu" },
  { href: "/kunjungi", label: "Lokasi" },
  { href: "/kontak", label: "Kontak" },
];
const motion = () =>
  !matchMedia("(prefers-reduced-motion:reduce)").matches &&
  document.documentElement.dataset.motion !== "off";
function Logo() {
  return (
    <Image
      className="ana-official-logo"
      src="/graphics/ana-wordmark.svg"
      alt=""
      width={165}
      height={75}
      unoptimized
    />
  );
}
export default function Header() {
  const path = usePathname();
  const header = useRef(null),
    nav = useRef(null),
    marker = useRef(null),
    dialog = useRef(null),
    toggle = useRef(null),
    animation = useRef(null),
    restoreFocus = useRef(true);
  const [open, setOpen] = useState(false);
  function point(el) {
    const m = marker.current;
    if (!m) return;
    if (!el) {
      gsap.to(m, { opacity: 0, duration: motion() ? 0.2 : 0, overwrite: true });
      return;
    }
    gsap.to(m, {
      x: el.offsetLeft,
      y: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
      opacity: 1,
      duration: motion() ? 0.38 : 0,
      ease: "power3.out",
      overwrite: true,
    });
  }
  function restore() {
    point(nav.current?.querySelector('[aria-current="page"]'));
  }
  useEffect(() => {
    const ro = new ResizeObserver(restore);
    if (nav.current) ro.observe(nav.current);
    document.fonts.ready.then(() => {
      if (nav.current) restore();
    });
    restore();
    return () => {
      ro.disconnect();
      if (marker.current) gsap.killTweensOf(marker.current);
    };
  }, [path]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!header.current) return;
        header.current.dataset.scrolled = scrollY > 64 ? "true" : "false";
        const max = document.documentElement.scrollHeight - innerHeight;
        header.current.style.setProperty(
          "--reading",
          String(max > 0 ? Math.min(1, scrollY / max) : 0),
        );
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [path]);
  function openMenu() {
    if (dialog.current.open) return;
    animation.current?.kill();
    restoreFocus.current = true;
    dialog.current.showModal();
    setOpen(true);
    const panel = dialog.current.querySelector(".nav-overlay-panel");
    const links = dialog.current.querySelectorAll(".nav-overlay-links a");
    if (motion()) {
      animation.current = gsap
        .timeline()
        .fromTo(
          panel,
          { opacity: 0, y: -24 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
        )
        .fromTo(
          links,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.065,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
          0.08,
        );
    } else {
      gsap.set(panel, { clearProps: "all" });
      gsap.set(links, { clearProps: "opacity,transform" });
    }
  }
  function closeMenu(immediate = false, focus = true) {
    if (!dialog.current?.open) return;
    restoreFocus.current = focus;
    animation.current?.kill();
    if (immediate || !motion()) {
      dialog.current.close();
      return;
    }
    animation.current = gsap.to(
      dialog.current.querySelector(".nav-overlay-panel"),
      {
        opacity: 0,
        y: -16,
        duration: 0.24,
        ease: "power2.in",
        onComplete: () => dialog.current?.close(),
      },
    );
  }
  useEffect(() => {
    closeMenu(true, false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const pause = new MutationObserver(() => {
      if (!motion()) animation.current?.progress(1);
    });
    pause.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });
    return () => {
      pause.disconnect();
      document.body.style.overflow = before;
    };
  }, [open]);
  useEffect(
    () => () => {
      animation.current?.kill();
    },
    [],
  );
  return (
    <>
      <div className="announcement">
        <span>Sorrento Junction, Tangerang</span>
        <span>ANA SALT BREAD</span>
      </div>
      <header ref={header} className="site-header live-header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Ana Salt Bread, beranda"
        >
          <Logo />
        </Link>
        <nav
          ref={nav}
          aria-label="Navigasi utama"
          onPointerLeave={restore}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) restore();
          }}
        >
          <span className="nav-indicator" ref={marker} aria-hidden="true" />
          {pages.slice(1).map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-current={path === p.href ? "page" : undefined}
              onPointerEnter={(e) => point(e.currentTarget)}
              onFocus={(e) => point(e.currentTarget)}
            >
              <span>{p.label}</span>
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="header-order"
            href="https://www.instagram.com/anasaltbread/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan
          </a>
          <button
            type="button"
            ref={toggle}
            className="menu-toggle"
            aria-label="Buka menu navigasi"
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={openMenu}
          >
            <span />
            <span />
            <small>Jelajahi</small>
          </button>
        </div>
        <div className="nav-progress" aria-hidden="true" />
      </header>
      <dialog
        ref={dialog}
        id="mobile-nav"
        className="nav-overlay"
        aria-label="Navigasi Ana Salt Bread"
        onCancel={(e) => {
          e.preventDefault();
          closeMenu();
        }}
        onClose={() => {
          setOpen(false);
          if (restoreFocus.current) toggle.current?.focus();
        }}
      >
        <div className="nav-overlay-panel">
          <div className="nav-overlay-top">
            <Link
              href="/"
              className="wordmark"
              aria-label="Ana Salt Bread, beranda"
              onClick={() => closeMenu(true, false)}
            >
              <Logo />
            </Link>
            <button
              className="menu-close"
              type="button"
              aria-label="Tutup menu"
              onClick={() => closeMenu()}
            >
              ✕
            </button>
          </div>
          <div className="nav-overlay-body">
            <nav className="nav-overlay-links" aria-label="Navigasi lengkap">
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  aria-current={path === p.href ? "page" : undefined}
                  onClick={() => closeMenu(true, false)}
                >
                  <span>{p.label}</span>
                  <i aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <aside className="nav-overlay-aside">
              <BrandFlower />
              <p>Ana Salt Bread</p>
              <span>
                Sorrento Junction
                <br />
                Tangerang, Banten
              </span>
              <a
                href="https://www.instagram.com/anasaltbread/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @anasaltbread
              </a>
            </aside>
          </div>
          <div className="nav-overlay-bottom">
            <span>Menu · Lokasi · Pemesanan</span>
            <a
              href="https://www.instagram.com/anasaltbread/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan melalui Instagram
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
