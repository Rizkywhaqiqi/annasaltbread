import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import { Arrow } from "@/components/icons";
import { ProductGrid } from "@/components/products";
export const metadata = {
  title: "Ana Salt Bread — Menu dan lokasi outlet",
  description:
    "Pilihan salt bread, informasi outlet, dan pemesanan Ana Salt Bread di Sorrento Junction, Tangerang.",
  alternates: { canonical: "/" },
};
export default function Page() {
  return (
    <>
      <Hero />
      <section className="profile-menu section">
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
      <section className="profile-location section">
        <figure data-reveal>
          <Image
            src="/images/ana-selection.webp"
            width={1100}
            height={1375}
            alt="Pilihan salt bread Ana di atas nampan"
            sizes="(max-width:720px) 90vw, 45vw"
          />
        </figure>
        <div data-reveal>
          <span className="eyebrow">LOKASI</span>
          <h2>Sorrento Junction</h2>
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
        </div>
      </section>
    </>
  );
}
