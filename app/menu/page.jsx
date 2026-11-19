import { MenuProducts } from "@/components/products";
import { BRAND } from "@/lib/content";
import BrandFlower from "@/components/brand-flower";
import "./menu.css";
export const metadata = {
  title: "Menu — Ana Salt Bread",
  description: "Pilihan salt bread manis dan gurih dari Ana Salt Bread.",
  alternates: { canonical: "/menu" },
};
export default function Page() {
  return (
    <div className="ana-catalog">
      <header className="catalog-intro">
        <BrandFlower />
        <h1>Menu</h1>
        <p>Pilihan salt bread dengan isian manis dan topping gurih.</p>
        <nav aria-label="Kategori menu">
          <a href="#menu-manis">Manis</a>
          <a href="#menu-gurih">Gurih</a>
        </nav>
      </header>
      <MenuProducts />
      <section className="catalog-order">
        <h2>Pemesanan</h2>
        <p>Hubungi Ana untuk informasi harga dan ketersediaan.</p>
        <a
          href={BRAND.instagram}
          className="button dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hubungi Ana
        </a>
      </section>
    </div>
  );
}
