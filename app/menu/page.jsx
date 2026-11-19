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
        <h1>Menu Salt Bread</h1>
        <p>
          Isian manis atau topping gurih. Pilih salt bread untuk teman ngemilmu.
        </p>
        <nav aria-label="Kategori menu">
          <a href="#menu-manis">Manis</a>
          <a href="#menu-gurih">Gurih</a>
        </nav>
      </header>
      <MenuProducts />
      <section className="catalog-order">
        <h2>Sudah pilih rasanya?</h2>
        <p>
          Pesan salt bread melalui Instagram Ana. Tanyakan harga dan menu yang
          tersedia.
        </p>
        <a
          href={BRAND.instagram}
          className="button dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesan salt bread
        </a>
      </section>
    </div>
  );
}
