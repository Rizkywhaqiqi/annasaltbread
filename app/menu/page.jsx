import { MenuProducts } from "@/components/products";
import { BRAND, MENU_CATEGORIES } from "@/lib/content";
import DrinksMenu from "@/components/drinks-menu";
import BrandFlower from "@/components/brand-flower";
import "./menu.css";
export const metadata = {
  title: "Menu — Ana Salt Bread",
  description: "Menu salt bread, kopi, dan minuman Ana beserta harga.",
  alternates: { canonical: "/menu" },
};
export default function Page() {
  return (
    <div className="ana-catalog">
      <header className="catalog-intro">
        <BrandFlower />
        <h1>Menu Ana</h1>
        <p>Salt bread, kopi, dan minuman.</p>
        <nav aria-label="Kategori menu">
          {MENU_CATEGORIES.map((category) => (
            <a href={"#menu-" + category.id} key={category.id}>
              {category.label}
            </a>
          ))}
          <a href="#menu-minuman">Minuman</a>
        </nav>
      </header>
      <MenuProducts />
      <DrinksMenu />
      <section className="catalog-order">
        <h2>Pemesanan</h2>
        <p>Menu dan harga terbaru tersedia di ESB Order.</p>
        <a
          href={BRAND.orderUrl}
          className="button dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesan melalui ESB Order
        </a>
        <a
          href="/images/ana-bread-menu.webp"
          className="text-link catalog-official-menu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Menu roti Ana
        </a>
      </section>
    </div>
  );
}
