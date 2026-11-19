"use client";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import { BRAND, PRODUCTS } from "@/lib/content";
function Products({ items, cutouts = false }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    return () => {
      document.body.style.overflow = before;
    };
  }, [selected]);
  function close() {
    dialog.current.close();
  }
  function closed() {
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <>
      <div className="product-grid">
        {items.map((p) => (
          <article
            key={p.id}
            className={cutouts ? "product-card cutout-product" : "product-card"}
            data-category={p.category}
          >
            <button
              type="button"
              className="product-image"
              aria-label={"Lihat foto " + p.name}
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setSelected(p);
              }}
            >
              <Image
                src={
                  cutouts
                    ? "/graphics/" +
                      {
                        cream: "cream",
                        chocolate: "chocolate",
                        savory: "savory",
                      }[p.id] +
                      "-cutout.png"
                    : "/images/" + p.image + ".webp"
                }
                alt={p.alt}
                width={1100}
                height={cutouts ? 733 : 1375}
                sizes="(max-width: 720px) 90vw, 45vw"
              />
              <span className="photo-open">
                Lihat lebih dekat{" "}
                <span>
                  <Arrow />
                </span>
              </span>
            </button>
            <div className="product-caption">
              <span className="tiny">
                0{PRODUCTS.indexOf(p) + 1} / {p.category}
              </span>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label="Foto pilihan Ana"
        onClose={closed}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            close();
        }}
      >
        <button
          type="button"
          className="photo-close"
          aria-label="Tutup foto"
          onClick={close}
        >
          ✕
        </button>
        {selected && (
          <div className="photo-dialog-inner">
            <Image
              src={"/images/" + selected.image + ".webp"}
              alt={selected.alt}
              width={1100}
              height={1375}
              sizes="(max-width: 720px) 90vw, 45vw"
            />
            <div>
              <span className="tiny">A LITTLE CLOSER</span>
              <h2>{selected.name}</h2>
              <p>
                {selected.description} Konfirmasi ketersediaan dan harga
                langsung ke Ana.
              </p>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="button pink-button"
              >
                Tanya pilihan ini ke Ana <Arrow />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
export function ProductGrid() {
  return (
    <div className="home-products">
      <Products items={PRODUCTS.slice(0, 3)} cutouts />
    </div>
  );
}
export function MenuProducts() {
  const [filter, setFilter] = useState("Semua");
  const items = PRODUCTS.filter(
    (p) => filter === "Semua" || p.category === filter,
  );
  return (
    <section className="menu-section section">
      <div className="menu-toolbar">
        <div className="filters" role="group" aria-label="Filter pilihan rasa">
          {["Semua", "Manis", "Gurih"].map((f) => (
            <button
              key={f}
              type="button"
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="tiny" aria-live="polite">
          {items.length} PILIHAN UNTUK DIKENALI
        </span>
      </div>
      <div className="full-menu">
        <Products items={items} />
      </div>
      <p className="menu-note">
        Foto merupakan sajian Ana. Pilihan rasa dan ketersediaan dapat berubah;
        konfirmasi menu serta informasi alergen sebelum memesan.
      </p>
    </section>
  );
}
