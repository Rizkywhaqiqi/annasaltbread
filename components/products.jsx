"use client";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import { BRAND, PRODUCTS } from "@/lib/content";
function Products({ items, cutouts = false, catalog = false }) {
  const ProductHeading = catalog ? "h3" : "h2";
  const cutoutFiles = {
    cream: "cream",
    chocolate: "chocolate",
    savory: "savory",
  };
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
      <div className={catalog ? "product-grid catalog-grid" : "product-grid"}>
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
                className="product-front"
                src={
                  cutouts && cutoutFiles[p.id]
                    ? "/graphics/" + cutoutFiles[p.id] + "-cutout.png"
                    : "/images/" + p.image + ".webp"
                }
                alt={p.alt}
                width={1100}
                height={cutouts && cutoutFiles[p.id] ? 733 : 1375}
                sizes="(max-width: 720px) 90vw, 45vw"
              />
              {catalog && cutoutFiles[p.id] && (
                <Image
                  className="product-hover"
                  src={"/images/" + p.image + ".webp"}
                  alt=""
                  aria-hidden="true"
                  width={1100}
                  height={1375}
                  sizes="(max-width:720px) 90vw,33vw"
                />
              )}
              <span className="photo-open">
                Lihat lebih dekat{" "}
                <span>
                  <Arrow />
                </span>
              </span>
            </button>
            <div className="product-caption">
              {!catalog && <span className="tiny">{p.category}</span>}
              <ProductHeading>{p.name}</ProductHeading>
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
              <span className="tiny">MENU ANA</span>
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
                Pesan melalui Instagram <Arrow />
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
  return (
    <div className="catalog-content">
      {["Manis", "Gurih"].map((category) => (
        <section
          key={category}
          id={"menu-" + category.toLowerCase()}
          className="catalog-category"
          aria-labelledby={"heading-" + category.toLowerCase()}
        >
          <h2 id={"heading-" + category.toLowerCase()}>
            {category === "Manis" ? "Isian manis" : "Topping gurih"}
          </h2>
          <Products
            items={PRODUCTS.filter((p) => p.category === category)}
            cutouts
            catalog
          />
        </section>
      ))}
      <p className="catalog-note">
        Harga, ketersediaan, dan informasi alergen dapat ditanyakan melalui
        Instagram resmi Ana.
      </p>
    </div>
  );
}
