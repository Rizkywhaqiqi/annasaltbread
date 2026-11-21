"use client";
import { Arrow } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import BreadCutout from "@/components/bread-cutout";
import { PRODUCT_PHOTO_IDS, PRODUCT_SECOND_PHOTO_IDS, productPhotoUrl } from "@/lib/product-photos";
import { BRAND, BEST_SELLERS, PRODUCTS, formatPrice } from "@/lib/content";
function ProductPhoto({ product, photo = 1, modal = false }) {
  const [failed, setFailed] = useState(false);
  const src = productPhotoUrl(product.id, modal ? 1600 : 960, photo);
  // Each rendered photo is keyed by product and photo number, so failures
  // from a previous image never leak into the next product.
  if (!src || failed) {
    return <BreadCutout index={product.sprite} alt={product.alt} />;
  }
  const extraCrop = modal && photo === 2 && !PRODUCT_SECOND_PHOTO_IDS[product.id];
  return (
    <img
      className={modal
        ? `product-photo-hd product-photo-hd-modal${extraCrop ? " alternate-crop" : ""}`
        : "product-photo-hd"}
      src={src}
      srcSet={`${productPhotoUrl(product.id, 640, photo)} 640w, ${productPhotoUrl(product.id, 960, photo)} 960w, ${productPhotoUrl(product.id, 1600, photo)} 1600w`}
      sizes={modal ? "(max-width: 720px) 92vw, 48vw" : "(max-width: 720px) 94vw, (max-width: 1100px) 46vw, 31vw"}
      alt={photo === 2 ? `${product.alt} — foto detail` : product.alt}
      width={1000}
      height={1000}
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
  const [activePhoto, setActivePhoto] = useState(2);
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
    setActivePhoto(2);
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
            className={catalog ? "product-card photo-menu-card" : cutouts ? "product-card cutout-product" : "product-card"}
            data-hd-photo={Boolean(PRODUCT_PHOTO_IDS[p.id])}
            data-category={p.category}
            data-best-seller={BEST_SELLERS.includes(p.id) || undefined}
          >
            <button
              type="button"
              className="product-image"
              aria-label={"Lihat foto lainnya dari " + p.name}
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setActivePhoto(2);
                setSelected(p);
              }}
            >
              <span className="bread-scroll-layer">
                <ProductPhoto key={p.id} product={p} />
                {BEST_SELLERS.includes(p.id) && (
                  <span className="best-seller-badge">Best seller</span>
                )}
                {catalog && <span className="menu-photo-hint" aria-hidden="true">Lihat foto lainnya</span>}
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
              <ProductPhoto key={selected.id + "-" + activePhoto} product={selected} photo={activePhoto} modal />
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
