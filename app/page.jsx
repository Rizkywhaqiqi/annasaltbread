import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import BrandFlower from "@/components/brand-flower";
import { Arrow } from "@/components/icons";
import { ProductGrid } from "@/components/products";
export const metadata = {
  title: "Ana Salt Bread — Menu dan lokasi outlet",
  description:
    "Pilihan salt bread, informasi outlet, dan pemesanan Ana Salt Bread di Sorrento Junction, Tangerang.",
  alternates: { canonical: "/" },
};
function BrandRibbon() {
  return (
    <div className="brand-ribbon" aria-hidden="true">
      <div className="brand-ribbon-track">
        {[0, 1].map((i) => (
          <div className="brand-ribbon-group" key={i}>
            <span>ANA SALT BREAD</span>
            <BrandFlower />
            <span>SORRENTO JUNCTION</span>
            <BrandFlower />
            <span>TANGERANG</span>
            <BrandFlower />
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Page() {
  return (
    <>
      <Hero />
      <BrandRibbon />
      <section className="brand-about section">
        <span className="eyebrow">TENTANG ANA</span>
        <div data-reveal>
          <h2>
            Salt bread
            <br />
            manis dan gurih.
          </h2>
          <div className="brand-about-copy">
            <p>
              Ana menyediakan salt bread dengan pilihan isian dan topping.
              Temukan menu dan informasi outlet kami di Sorrento Junction,
              Tangerang.
            </p>
            <Link href="/tentang" className="text-link">
              Tentang Ana <Arrow />
            </Link>
          </div>
        </div>
        <BrandFlower className="about-flower" />
      </section>
      <section className="profile-menu section brand-menu">
        <BrandFlower className="menu-flower" />
        <div className="profile-section-heading" data-reveal>
          <div>
            <span className="eyebrow">MENU</span>
            <h2>Pilihan salt bread</h2>
          </div>
          <Link href="/menu" className="text-link">
            Lihat semua <Arrow />
          </Link>
        </div>
        <ProductGrid />
      </section>
      <section className="profile-location section brand-location">
        <figure data-reveal>
          <Image
            src="/images/ana-selection.webp"
            width={1100}
            height={1375}
            alt="Pilihan salt bread Ana di atas nampan"
            sizes="(max-width:720px) 90vw,45vw"
          />
          <figcaption>Sorrento Junction, Tangerang</figcaption>
        </figure>
        <div data-reveal>
          <span className="eyebrow">LOKASI</span>
          <h2>
            Sorrento
            <br />
            Junction
          </h2>
          <p>
            Jl. Ir. H. Soekarno No. 8,
            <br />
            Curug Sangereng, Kelapa Dua,
            <br />
            Kabupaten Tangerang, Banten.
          </p>
          <Link href="/kunjungi" className="text-link">
            Informasi outlet <Arrow />
          </Link>
          <BrandFlower className="location-flower" />
        </div>
      </section>
    </>
  );
}
