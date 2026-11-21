"use client";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import BreadCutout from "@/components/bread-cutout";
import { PRODUCT_PHOTO_IDS, productPhotoUrl } from "@/lib/product-photos";
import { BRAND, BEST_SELLERS, PRODUCTS, formatPrice } from "@/lib/content";
function ProductPhoto({ product, modal = false, cutouts = true, transparent = false }) {
  // Transparent cutouts in menu cards; keep genuine HD photos in the detail dialog.
  if (transparent && !modal) {
    return <BreadCutout index={product.sprite} alt={product.alt} />;
  }
  const [failed, setFailed] = useState(false);
  const url = productPhotoUrl(product.id);
  if (!url || failed) {
    return cutouts ? (
      <BreadCutout index={product.sprite} alt={product.alt} />
    ) : (
      <Image
        className="product-front"
        src={"/graphics/" + product.id + "-cutout.png"}
        alt={product.alt}
        width={900}
        height={600}
        sizes="(max-width: 720px) 90vw, 30vw"
      />
    );
  }
  return (
    <img
      className={modal ? "product-photo-hd product-photo-hd-modal" : "product-photo-hd"}
      src={url}
      srcSet={`${productPhotoUrl(product.id, 640)} 640w, ${productPhotoUrl(product.id, 960)} 960w, ${productPhotoUrl(product.id, 1600)} 1600w`}
      sizes={modal ? "(max-width: 720px) 90vw, 45vw" : "(max-width: 720px) 88vw, 30vw"}
      alt={product.alt}
      width={900}
      height={900}
      loading={modal ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
function Products({ items, cutouts = false, catalog = false }) {
  const ProductHeading = catalog ? "h3" : "h2";
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
    return () => {
      document.body.style.overflow = before;
    };
  }, [selected]);
  function close() {
    if (dialog.current?.open) dialog.current.close();
  }
  function closed() {
    setSelected(null);
    if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
  }
  return (
    <>
      <div className={catalog ? "product-grid catalog-grid" : "product-grid"}>
        {items.map((p, index) => (
          <article
            key={p.id}
            id={
              catalog &&
              items.findIndex((item) => item.group === p.group) === index
                ? "menu-" + p.group
                : undefined
            }
            className={cutouts ? "product-card cutout-product" : "product-card"}
            data-hd-photo={Boolean(PRODUCT_PHOTO_IDS[p.id])}
            data-category={p.category}
            data-best-seller={BEST_SELLERS.includes(p.id) || undefined}
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
              <span
                className="bread-scroll-layer"
                data-scroll-bread
                data-bread-side={
                  p.id === "chocolate" || p.id === "crunch" ? "right" : "left"
                }
              >
                <ProductPhoto product={p} cutouts={cutouts} transparent={catalog} />
                {BEST_SELLERS.includes(p.id) && (
                  <span className="best-seller-badge">Best seller</span>
                )}
              </span>
            </button>
            <div className="product-caption">
              <span className="tiny">
                {BEST_SELLERS.includes(p.id)
                  ? "Best seller · " + p.category
                  : p.category}
              </span>
              <ProductHeading>{p.name}</ProductHeading>
              <span className="product-price">{formatPrice(p.price)}</span>
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
            <div className="photo-dialog-art">
              <ProductPhoto product={selected} modal />
            </div>
            <div>
              <span className="tiny">
                {BEST_SELLERS.includes(selected.id)
                  ? "BEST SELLER · MENU ANA"
                  : "MENU ANA"}
              </span>
              <h2>{selected.name}</h2>
              <p className="product-price">{formatPrice(selected.price)}</p>
              <p>{selected.description}</p>
              <a
                href={BRAND.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button pink-button"
              >
                Pesan melalui ESB Order <Arrow />
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
      <Products
        items={BEST_SELLERS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
          Boolean,
        )}
        cutouts
      />
    </div>
  );
}
export function MenuProducts() {
  const bestSellers = BEST_SELLERS.map((id) =>
    PRODUCTS.find((p) => p.id === id),
  ).filter(Boolean);
  const rest = PRODUCTS.filter((p) => !BEST_SELLERS.includes(p.id));
  return (
    <div className="catalog-content">
      <section
        className="catalog-products catalog-best-sellers"
        aria-labelledby="catalog-best-sellers-title"
      >
        <h2 id="catalog-best-sellers-title" className="catalog-best-sellers-title">
          Best seller
        </h2>
        <p className="catalog-best-sellers-note">
          Paling sering dipesan di Ana.
        </p>
        <Products items={bestSellers} cutouts catalog />
      </section>
      <section
        className="catalog-products catalog-all-menu"
        aria-labelledby="catalog-products-title"
      >
        <h2
          id="catalog-products-title"
          className="catalog-best-sellers-title"
        >
          Menu lengkap
        </h2>
        <p className="catalog-best-sellers-note">
          Semua pilihan salt bread Ana.
        </p>
        <Products items={rest} cutouts catalog />
      </section>
      <p className="catalog-note">
        Harga mengikuti menu Ana yang ditampilkan dan dapat berubah. Cek harga
        akhir dan ketersediaan di ESB Order. Untuk informasi alergen, hubungi
        Instagram resmi Ana.
      </p>
    </div>
  );
}
