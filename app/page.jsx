import "./home.css";
import { BRAND, DEFAULT_OUTLET, OUTLETS } from "@/lib/content";
import SectionBread from "@/components/section-bread";
import BreadCutout from "@/components/bread-cutout";
import OutletMap from "@/components/outlet-map";
import InstagramGallery from "@/components/instagram-gallery";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import BrandFlower from "@/components/brand-flower";
import { Arrow } from "@/components/icons";
import { ProductGrid } from "@/components/products";
export const metadata = {
  title: "Ana Salt Bread — Menu dan lokasi outlet",
  description:
    "Pilihan salt bread, informasi 5 cabang, dan pemesanan Ana Salt Bread.",
  alternates: { canonical: "/" },
};
function BrandRibbon() {
  const breads = Array.from({ length: 14 }, (_, index) => index);
  return (
    <div className="brand-ribbon" aria-hidden="true">
      <div className="brand-ribbon-track">
        {[0, 1].map((i) => (
          <div className="brand-ribbon-group" key={i}>
            {breads.map((bread) => (
              <BreadCutout key={bread} index={bread} className="ribbon-bread" />
            ))}
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
      <section
        className="home-editorial"
        aria-labelledby="home-editorial-title"
      >
        <div className="home-editorial-copy" data-reveal>
          <span className="eyebrow">SALT BREAD ANA</span>
          <h2 id="home-editorial-title">
            Now serving
            <br />
            warmth.
          </h2>
          
          <Link href="/menu" className="button dark">
            Lihat menu
          </Link>
          <BrandFlower className="editorial-flower" />
        </div>
        <figure>
          <div
            className="bread-photo-layer"
            data-scroll-bread
            data-bread-side="right"
          >
            <Image
              src="/images/ana-assortment.webp"
              alt="Aneka salt bread Ana dengan lapisan cokelat dan topping gurih di atas nampan kayu"
              width={1100}
              height={1375}
              sizes="(max-width:720px) 100vw,55vw"
            />
          </div>
        </figure>
      </section>
      <section className="brand-about section">
        <span className="eyebrow">TENTANG ANA</span>
        <div data-reveal>
          <h2>
            Salt bread
            <br />
          </h2>
          <div className="brand-about-copy">
            <p>Ana Salt Bread, Tangerang.</p>
            <Link href="/tentang" className="text-link">
              Tentang Ana <Arrow />
            </Link>
          </div>
        </div>
        <SectionBread
          variant="chocolate"
          side="left"
          className="about-section-bread"
        />
      </section>
      <section className="profile-menu section brand-menu">
        <BrandFlower className="menu-flower" />
        <div className="profile-section-heading" data-reveal>
          <div>
            <span className="eyebrow">MENU</span>
            <h2>Menu salt bread</h2>
          </div>
          <Link href="/menu" className="text-link">
            Lihat semua menu <Arrow />
          </Link>
        </div>
        <ProductGrid />
      </section>
      <section
        className="home-order-feature"
        aria-labelledby="home-order-title"
      >
        <div className="home-order-copy" data-reveal>
          <span className="eyebrow">PESAN ONLINE</span>
          <h2 id="home-order-title">
            Order
            <br />
            online.
          </h2>
          <p>Menu dan harga tersedia di ESB Order.</p>
          <a
            href={BRAND.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button pink-button"
          >
            Pesan salt bread
          </a>
        </div>
        <div
          className="home-order-art"
          aria-hidden="true"
          data-scroll-bread
          data-bread-side="right"
        >
          <BrandFlower />
          <Image
            src="/graphics/cream-cutout.png"
            alt=""
            width={900}
            height={600}
            sizes="(max-width:720px) 90vw,50vw"
          />
          <span>ANA SALT BREAD</span>
        </div>
      </section>
      <section className="home-outlet" aria-labelledby="home-outlet-title">
        <div className="home-outlet-copy" data-reveal>
          <span className="eyebrow">KUNJUNGI ANA</span>
          <h2 id="home-outlet-title">
            Temui Ana di 5
            <br />
            cabang.
          </h2>
          <div className="home-outlet-address">
            <span className="eyebrow">CABANG</span>
            <address>{OUTLETS.map((o) => o.name).join(" · ")}</address>
          </div>
          <p className="outlet-hours">{BRAND.hours}</p>
          <div className="home-outlet-actions">
            <a
              href={DEFAULT_OUTLET.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="button dark"
            >
              Buka petunjuk arah
            </a>
            <Link href="/kunjungi" className="text-link">
              Semua cabang
            </Link>
          </div>
        </div>
        <OutletMap />
      </section>
      <InstagramGallery />
    </>
  );
}
