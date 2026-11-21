"use client";
import { Arrow } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import BreadCutout from "@/components/bread-cutout";
import { PRODUCT_PHOTO_IDS, PRODUCT_SECOND_PHOTO_IDS, productPhotoUrl } from "@/lib/product-photos";
import { BRAND, BEST_SELLERS, MENU_CATEGORIES, PRODUCTS, formatPrice } from "@/lib/content";
function ProductPhoto({ product, photo = 1, modal = false, catalog = false }) {
  const [failureCount, setFailureCount] = useState(0);
  const currentPhoto = photo === 2 && failureCount > 0 ? 1 : photo;
  const src = productPhotoUrl(product.id, modal ? 1600 : 960, currentPhoto);
  // Each rendered photo is keyed by product and photo number, so failures
  // from a previous image never leak into the next product.
  if (!src || failureCount >= (photo === 2 ? 2 : 1)) {
    return <BreadCutout index={product.sprite} alt={product.alt} />;
  }
  const extraCrop = modal && photo === 2 && !PRODUCT_SECOND_PHOTO_IDS[product.id];
  return (
    <img
      className={modal
        ? `product-photo-hd product-photo-hd-modal${extraCrop ? " alternate-crop" : ""}`
        : "product-photo-hd"}
      src={src}
      srcSet={modal
        ? `${productPhotoUrl(product.id, 640, currentPhoto)} 640w, ${productPhotoUrl(product.id, 960, currentPhoto)} 960w, ${productPhotoUrl(product.id, 1600, currentPhoto)} 1600w`
        : `${productPhotoUrl(product.id, 640, currentPhoto)} 640w, ${productPhotoUrl(product.id, 960, currentPhoto)} 960w`}
      fetchPriority={modal ? "high" : "low"}
      sizes={modal ? "(max-width: 720px) 90vw, 48vw" : catalog
        ? "(max-width: 390px) 88vw, (max-width: 720px) 44vw, (max-width: 1100px) 46vw, 31vw"
        : "(max-width: 720px) 90vw, (max-width: 1100px) 46vw, 31vw"}
      alt={photo === 2 ? `${product.alt} — foto detail` : product.alt}
      width={1000}
      height={1000}
      loading={modal ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailureCount((count) => count + 1)}
    />
  );
}
function Products({ items, cutouts = false, catalog = false, categoryAnchors = false }) {
  const ProductHeading = catalog ? "h3" : "h2";
  const [selected, setSelected] = useState(null);
  const [activePhoto, setActivePhoto] = useState(1);
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
  const swipeStart = useRef(null);
  function shiftPhoto(direction) {
    setActivePhoto((current) => current === 1 ? 2 : 1);
  }
  function close() {
    if (dialog.current?.open) dialog.current.close();
  }
  function closed() {
    setSelected(null);
    setActivePhoto(1);
    swipeStart.current = null;
    if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
  }
  return (
    <>
      <div className={catalog ? "product-grid catalog-grid" : "product-grid"}>
        {items.map((p, index) => (
          <article
            key={p.id}
            id={
              catalog && categoryAnchors &&
              items.findIndex((item) => item.group === p.group) === index
                ? "menu-" + p.group
                : undefined
            }
            className={catalog ? "product-card photo-menu-card" : cutouts ? "product-card cutout-product" : "product-card"}
            data-hd-photo={Boolean(PRODUCT_PHOTO_IDS[p.id])}
            data-category={p.category}
            data-best-seller={BEST_SELLERS.includes(p.id) || undefined}
          >
            <button
              type="button"
              className="product-image"
              aria-label={"Lihat detail produk " + p.name}
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setActivePhoto(1);
                setSelected(p);
              }}
            >
              <span className="bread-scroll-layer">
                <ProductPhoto key={p.id} product={p} catalog={catalog} />
                {BEST_SELLERS.includes(p.id) && (
                  <span className="best-seller-badge">Best seller</span>
                )}
                {catalog && <span className="menu-photo-hint" aria-hidden="true">Lihat detail →</span>}
                {catalog && <span className="menu-photo-count" aria-hidden="true">{PRODUCT_SECOND_PHOTO_IDS[p.id] ? "2 foto" : "Foto + detail"}</span>}
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
              {catalog && (
                <button type="button" className="catalog-detail-link" onClick={(e) => {
                  trigger.current = e.currentTarget;
                  setActivePhoto(1);
                  setSelected(p);
                }}>
                  Lihat detail <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label={selected ? `Detail produk ${selected.name}` : "Detail produk Ana"}
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
            <div className="photo-dialog-gallery">
              <div
                className="photo-dialog-art"
                role="group"
                tabIndex={0}
                aria-label={`Foto ${activePhoto} dari 2 untuk ${selected.name}. Geser atau gunakan tombol panah untuk foto lain.`}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    shiftPhoto(event.key === "ArrowRight" ? 1 : -1);
                  }
                }}
                onTouchStart={(event) => {
                  swipeStart.current = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY,
                  };
                }}
                onTouchEnd={(event) => {
                  const start = swipeStart.current;
                  swipeStart.current = null;
                  if (!start || !event.changedTouches.length) return;
                  const dx = event.changedTouches[0].clientX - start.x;
                  const dy = event.changedTouches[0].clientY - start.y;
                  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                    shiftPhoto(dx < 0 ? 1 : -1);
                  }
                }}
              >
                <ProductPhoto key={selected.id + "-" + activePhoto} product={selected} photo={activePhoto} modal />
              </div>
              <div className="photo-gallery-controls" aria-label="Navigasi foto">
                <button type="button" onClick={() => shiftPhoto(-1)} aria-label="Foto sebelumnya">←</button>
                <span aria-live="polite">{activePhoto} / 2</span>
                <button type="button" onClick={() => shiftPhoto(1)} aria-label="Foto berikutnya">→</button>
              </div>
            </div>
            <div>
              <div className="menu-photo-switcher" role="group" aria-label="Pilih foto produk">
                <button type="button" aria-pressed={activePhoto === 1} onClick={() => setActivePhoto(1)}>Foto utama</button>
                <button type="button" aria-pressed={activePhoto === 2} onClick={() => setActivePhoto(2)}>
                  {PRODUCT_SECOND_PHOTO_IDS[selected.id] ? "Foto lainnya" : "Detail foto"}
                </button>
              </div>
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

// Navigation remains anchor based: all products are accessible without JS.
// Current section highlighting is a progressive enhancement.
export function MenuCategoryNav() {
  const entries = [
    { id: "menu-best-sellers", label: "Best Seller" },
    { id: "menu-all", label: "Semua" },
    ...MENU_CATEGORIES.map((category) => ({
      id: "menu-" + category.id,
      label: category.label,
    })),
    { id: "menu-minuman", label: "Minuman" },
  ];
  const [active, setActive] = useState("menu-best-sellers");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = entries[0].id;
        // Sections activate shortly after crossing the sticky navbar.
        for (const entry of entries) {
          const target = document.getElementById(entry.id);
          if (target && target.getBoundingClientRect().top <= 210) {
            current = entry.id;
          }
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);
  return (
    <nav className="catalog-category-nav" aria-label="Kategori menu">
      {entries.map((entry) => (
        <a
          key={entry.id}
          href={"#" + entry.id}
          aria-current={active === entry.id ? "location" : undefined}
          onClick={() => setActive(entry.id)}
        >
          {entry.label}
        </a>
      ))}
    </nav>
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
        id="menu-best-sellers"
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
        id="menu-all"
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
        <Products items={rest} cutouts catalog categoryAnchors />
      </section>
      <p className="catalog-note">
        Harga mengikuti menu Ana yang ditampilkan dan dapat berubah. Cek harga
        akhir dan ketersediaan di ESB Order. Untuk informasi alergen, hubungi
        Instagram resmi Ana.
      </p>
    </div>
  );
}
