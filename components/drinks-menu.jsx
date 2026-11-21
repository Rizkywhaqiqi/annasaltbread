"use client";
import { useEffect, useRef, useState } from "react";
import { BRAND, DRINK_SERIES, formatPrice } from "@/lib/content";

// Owner-supplied product photographs from the linked Ana Salt Bread Drive folder.
// Verified against the owner's Coffee / Drink / Hot Drink poster.
// The Drive thumbnail service supplies responsive resolutions without loading
// the full 1.2–1.3 MB original PNG for each card.
const DRINK_PHOTO_IDS = Object.freeze({
  "Peanut Butter Cream Latte": "11BXup3rQu4BIl-Ab720cwVnZAXcJOE9h",
  "Ice Café Latte": "16u0DvHkKiEXnRTJ9BYPQ77EDXceoEKAc",
  "Kopi Susu Harian": "1TnHU3TYxbfEGaDGE_PPpviCu2hsTD9sL",
  "Americano": "1scAasfAJ1dR3TyLCoqvJMUDNZWNWg_JK",
  "Ice Café Mocha": "1YITjfok9p0KxTGn8NINK0qcO6q6Tjrhp",
  "Bloom Tea": "15_NNbVP6OQKj2KD7xvF12WBSfN5jxrP9",
  "Dark Cacao": "1Ka83BZy1tfLu-cWBfQcLZINC4-KbT_GV",
  "Bloom & Breeze": "10Wdrjb-189MT67n4a0VQNT0HDZ_I9c_I",
  "Kyoto Matcha": "1BkT2aFIWd09rCwuPYGjBfFSLP81jBvGQ",
  "Grand Cacao": "1zKkFZHjjX_2Bkmd-nLXSPLbjxhB9GyI-",
  "Mocha": "1FyyVN8DjgasHGvs8F9IRNl3JoDIk_hyx",
  "Café Latte": "1KIlb2CpmwPzcpUmRHkIwfJIpqYkHTRWO",
});
function drinkPhotoUrl(name, size = 960) {
  const id = DRINK_PHOTO_IDS[name];
  return id ? `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${size}` : null;
}
function DrinkPhoto({ item, modal = false }) {
  const [failed, setFailed] = useState(false);
  const src = drinkPhotoUrl(item.name, modal ? 1200 : 640);
  if (!src || failed) {
    return (
      <div className="drink-photo-fallback" role="img" aria-label={item.name}>
        <span>{item.name}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      srcSet={`${drinkPhotoUrl(item.name, 420)} 420w, ${drinkPhotoUrl(item.name, 640)} 640w, ${drinkPhotoUrl(item.name, 960)} 960w, ${drinkPhotoUrl(item.name, 1200)} 1200w`}
      sizes={modal ? "(max-width:720px) 90vw, 48vw" : "(max-width:390px) 88vw, (max-width:720px) 44vw, (max-width:1100px) 46vw, 31vw"}
      width={1181}
      height={1181}
      loading={modal ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      alt={`Foto ${item.name} Ana Salt Bread`}
      className="drink-photo"
      onError={() => setFailed(true)}
    />
  );
}
function DrinkCards({ series }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
    return () => { document.body.style.overflow = oldOverflow; };
  }, [selected]);
  function open(item, element) {
    trigger.current = element;
    setSelected(item);
  }
  function close() { if (dialog.current?.open) dialog.current.close(); }
  function closed() {
    setSelected(null);
    trigger.current?.isConnected && trigger.current.focus({ preventScroll: true });
  }
  return (
    <>
      <div className="product-grid catalog-grid drink-product-grid">
        {series.items.map((item) => (
          <article className="product-card photo-menu-card drink-product-card" key={item.name}>
            <button type="button" className="product-image" aria-label={`Lihat detail minuman ${item.name}`} onClick={(event) => open(item, event.currentTarget)}>
              <span className="bread-scroll-layer">
                <DrinkPhoto item={item} />
                <span className="menu-photo-hint" aria-hidden="true">Lihat detail →</span>
              </span>
            </button>
            <div className="product-caption">
              <span className="tiny">{series.title}</span>
              <h4>{item.name}</h4>
              <span className="product-price">{formatPrice(item.price)}</span>
              <button type="button" className="catalog-detail-link" onClick={(event) => open(item, event.currentTarget)}>
                Lihat detail <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <dialog className="photo-dialog drink-photo-dialog" ref={dialog} aria-label={selected ? `Detail minuman ${selected.name}` : "Detail minuman Ana"} onClose={closed} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}>
        <button type="button" className="photo-close" aria-label="Tutup detail minuman" onClick={close}>✕</button>
        {selected && (
          <div className="photo-dialog-inner">
            <div className="photo-dialog-gallery">
              <div className="photo-dialog-art">
                <DrinkPhoto key={selected.name} item={selected} modal />
              </div>
            </div>
            <div className="drink-detail-copy">
              <span className="tiny">{series.title.toUpperCase()} · ANA</span>
              <h2>{selected.name}</h2>
              <p className="product-price">{formatPrice(selected.price)}</p>
              <p>Harga dan ketersediaan terbaru tersedia melalui ESB Order.</p>
              <a href={BRAND.orderUrl} className="button pink-button" target="_blank" rel="noopener noreferrer">Pesan melalui ESB Order</a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
export default function DrinksMenu() {
  return (
    <section className="drinks-menu" id="menu-minuman" aria-labelledby="drinks-title">
      <div className="drinks-heading" data-reveal>
        <span className="eyebrow">MINUMAN · ANA</span>
        <h2 id="drinks-title">Coffee & Drinks</h2>
        <p>Pilih minuman favoritmu untuk menemani salt bread Ana.</p>
      </div>
      <div className="drinks-catalog">
        {DRINK_SERIES.map((series) => (
          <section className="drinks-series" key={series.id} id={`menu-drink-${series.id}`} aria-labelledby={`drinks-${series.id}-title`}>
            <div className="catalog-drink-heading">
              <span className="eyebrow">ANA DRINKS</span>
              <h3 id={`drinks-${series.id}-title`}>{series.title}</h3>
              <span className="drink-series-count">{series.items.length} pilihan</span>
            </div>
            <DrinkCards series={series} />
          </section>
        ))}
      </div>
      <p className="drinks-note">Foto produk asli Ana. Harga bisa berubah; lihat harga akhir dan ketersediaan melalui ESB Order.</p>
      <a className="text-link drinks-official-poster-link" href="/images/ana-drinks-menu.webp" target="_blank" rel="noopener noreferrer">Lihat poster menu minuman resmi</a>
    </section>
  );
}
