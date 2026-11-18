"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export default function Header() {
  const path = usePathname();
  const dialog = useRef(null);
  const toggle = useRef(null);
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    dialog.current.showModal();
    setOpen(true);
  };
  const closeMenu = () => dialog.current?.close();
  const onClose = () => {
    setOpen(false);
    toggle.current?.focus();
  };
  useEffect(() => {
    dialog.current?.close();
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = before;
    };
  }, [open]);
  return (
    <>
      <div className="announcement">
        <span>{"Sorrento Junction, Tangerang"}</span>
        <span>{"ANA SALT BREAD"}</span>
      </div>
      <header className="site-header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Ana Salt Bread, beranda"
        >
          <Image
            className="ana-official-logo"
            src="/graphics/ana-wordmark.svg"
            alt=""
            width={165}
            height={75}
            unoptimized
          />
        </Link>
        <nav aria-label="Navigasi utama">
          <Link
            onClick={closeMenu}
            href="/tentang"
            aria-current={path === "/tentang" ? "page" : undefined}
          >
            {"Tentang"}
          </Link>
          <Link
            onClick={closeMenu}
            href="/menu"
            aria-current={path === "/menu" ? "page" : undefined}
          >
            {"Menu"}
          </Link>
          <Link
            onClick={closeMenu}
            href="/kunjungi"
            aria-current={path === "/kunjungi" ? "page" : undefined}
          >
            {"Lokasi"}
          </Link>
          <Link
            onClick={closeMenu}
            href="/kontak"
            aria-current={path === "/kontak" ? "page" : undefined}
          >
            {"Kontak"}
          </Link>
        </nav>
        <a
          className="header-order"
          href="https://www.instagram.com/anasaltbread/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Pesan"}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
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
          <span></span>
          <span></span>
        </button>
      </header>
      <dialog
        ref={dialog}
        onClose={onClose}
        id="mobile-nav"
        className="mobile-nav"
      >
        <div className="mobile-head">
          <span className="wordmark">
            <Image
              className="ana-official-logo"
              src="/graphics/ana-wordmark.svg"
              alt="Ana Salt Bread"
              width={165}
              height={75}
              unoptimized
            />
          </span>
          <button
            type="button"
            className="menu-close"
            onClick={closeMenu}
            aria-label="Tutup menu"
          >
            {"✕"}
          </button>
        </div>
        <nav aria-label="Navigasi mobile">
          <Link
            onClick={closeMenu}
            href="/"
            aria-current={path === "/" ? "page" : undefined}
          >
            {"Beranda"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
          <Link
            onClick={closeMenu}
            href="/tentang"
            aria-current={path === "/tentang" ? "page" : undefined}
          >
            {"Tentang"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
          <Link
            onClick={closeMenu}
            href="/menu"
            aria-current={path === "/menu" ? "page" : undefined}
          >
            {"Menu"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
          <Link
            onClick={closeMenu}
            href="/kunjungi"
            aria-current={path === "/kunjungi" ? "page" : undefined}
          >
            {"Lokasi"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
          <Link
            onClick={closeMenu}
            href="/kontak"
            aria-current={path === "/kontak" ? "page" : undefined}
          >
            {"Kontak"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </nav>
        <a
          className="button dark"
          href="https://www.instagram.com/anasaltbread/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Pesan melalui Instagram"}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </a>
        <p>{"Ana Salt Bread"}</p>
      </dialog>
    </>
  );
}
