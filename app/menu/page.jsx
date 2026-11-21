import { MenuProducts, MenuCategoryNav } from "@/components/products";
import { BRAND } from "@/lib/content";
import {
  BRAND_KEYWORDS,
  BRAND_SUPPORTING_LINE,
  BRAND_TAGLINE,
} from "@/lib/brand-copy";
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
        <p className="catalog-tagline">
          <strong>{BRAND_TAGLINE}</strong> {BRAND_SUPPORTING_LINE}
        </p>
        <MenuCategoryNav />  </nav>
      </header>
      <MenuProducts />
      <DrinksMenu />
      <section className="catalog-values" aria-label="Nilai brand Ana">
        <ul>
          {BRAND_KEYWORDS.map((item) => (
            <li key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </section>
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
