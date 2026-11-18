import { MenuProducts } from "@/components/products";
import { BRAND } from "@/lib/content";
import { Arrow } from "@/components/icons";
export const metadata = {
  title: "Menu — Ana Salt Bread",
  description: "Pilihan salt bread manis dan gurih dari Ana Salt Bread.",
  alternates: { canonical: "/menu" },
};
export default function Page() {
  return (
    <>
      <section className="page-banner">
        <span className="eyebrow">ANA SALT BREAD</span>
        <h1>Menu</h1>
        <p>
          Pilihan isian manis dan topping gurih. Hubungi kami untuk harga dan
          ketersediaan.
        </p>
      </section>
      <MenuProducts />
      <section className="small-cta">
        <h2>Pemesanan</h2>
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="button dark"
        >
          Hubungi Ana <Arrow />
        </a>
      </section>
    </>
  );
}
