"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motionAllowed } from "@/lib/motion";
import { gsap } from "gsap";
import { BRAND } from "@/lib/content";
import BrandFlower from "@/components/brand-flower";
const pages = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/menu", label: "Menu" },
  { href: "/kunjungi", label: "Lokasi" },
  { href: "/kontak", label: "Kontak" },
];
const motion = motionAllowed;
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
    dialog = useRef(null),
    toggle = useRef(null),
    animation = useRef(null),
    restoreFocus = useRef(true);
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    let frame = 0;
    let lastY = Math.max(0, scrollY),
      travel = 0,
      direction = 0;
    setCompact(false);
    // Resolve each section's painted background once per route/resize, not per scroll.
    function surface(el) {
      while (el) {
        const color = getComputedStyle(el).backgroundColor;
        const values = color.match(/[\d.]+/g)?.map(Number);
        if (values && (values.length === 3 || values[3] >= 0.95))
          return values.slice(0, 3);
        el = el.parentElement;
      }
      return [250, 248, 244];
    }
    let regions = [];
    const collect = () => {
      regions = [
        ...document.querySelectorAll(
          "#main section, #main .brand-ribbon, #main .catalog-intro, .site-footer",
        ),
      ].map((el) => ({ el, rgb: surface(el) }));
    };
    collect();
    let lastColor = "";
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!header.current) return;
        const y = Math.max(0, scrollY);
        const delta = y - lastY;
        const nextDirection = Math.sign(delta);
        if (nextDirection && nextDirection !== direction) {
          travel = 0;
          direction = nextDirection;
        }
        travel += Math.abs(delta);
        lastY = y;
        if (y < 100 || dialog.current?.open) {
          setCompact(false);
          travel = 0;
        } else if (
          !header.current.querySelector(".compact-brand:focus") &&
          travel >= (direction > 0 ? 24 : 14)
        ) {
          setCompact(direction > 0);
          travel = 0;
        }
        header.current.dataset.scrolled = y > 64 ? "true" : "false";
        const line = header.current.getBoundingClientRect().bottom + 1;
        const max = document.documentElement.scrollHeight - innerHeight;
        // Short footers cannot reach the header; adopt their palette at scroll end.
        const footer =
          max > 0 && scrollY >= max - 2
            ? regions.find(({ el }) => el.matches(".site-footer"))
            : null;
        const region =
          footer ??
          regions.findLast(({ el }) => {
            const rect = el.getBoundingClientRect();
            return rect.top <= line && rect.bottom > line;
          });
        const rgb = region?.rgb ?? surface(document.querySelector("#main"));
        const color = rgb.join(", ");
        if (color !== lastColor) {
          lastColor = color;
          const linear = rgb.map((v) => {
            v /= 255;
            return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
          });
          const luminance =
            linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
          header.current.style.setProperty(
            "--nav-surface",
            `rgba(${color}, 0.97)`,
          );
          header.current.dataset.tone = luminance < 0.18 ? "dark" : "light";
        }
        header.current.style.setProperty(
          "--reading",
          String(max > 0 ? Math.min(1, scrollY / max) : 0),
        );
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    const resize = () => {
      collect();
      update();
    };
    const ro = new ResizeObserver(update);
    const main = document.querySelector("#main");
    if (main) ro.observe(main);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, [path]);
  function openMenu() {
    if (dialog.current.open) return;
    animation.current?.kill();
    restoreFocus.current = true;
    setCompact(false);
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
      <div className="nav-shell">
        <header
          ref={header}
          className="site-header live-header"
          data-compact={compact}
        >
          <Link
            className="wordmark"
            href="/"
            aria-label="Ana Salt Bread, beranda"
            inert={compact}
          >
            <Logo />
            <span className="nav-brand-subtitle">SALT BREAD</span>
          </Link>
          <button
            type="button"
            className="compact-brand"
            aria-label="Buka menu navigasi Ana"
            aria-controls="mobile-nav"
            aria-expanded={open}
            inert={!compact}
            onClick={openMenu}
          >
            <BrandFlower />
          </button>
          <nav aria-label="Navigasi utama">
            {pages.slice(1, 3).map((p) => (
              <Link
                key={p.href}
                href={p.href}
                aria-current={path === p.href ? "page" : undefined}
              >
                <span>{p.label}</span>
              </Link>
            ))}
          </nav>
          <nav className="nav-actions" aria-label="Navigasi lainnya">
            {pages.slice(3).map((p) => (
              <Link
                className="nav-secondary"
                href={p.href}
                key={p.href}
                aria-current={path === p.href ? "page" : undefined}
              >
                {p.label}
              </Link>
            ))}
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
          </nav>
        </header>
      </div>
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
          if (restoreFocus.current) {
            setCompact(false);
            const focusTarget = matchMedia("(max-width:720px)").matches
              ? toggle.current
              : header.current?.querySelector(".wordmark");
            focusTarget?.focus({ preventScroll: true });
          }
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
            <a href={BRAND.orderUrl} target="_blank" rel="noopener noreferrer">
              Pesan melalui ESB Order
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
