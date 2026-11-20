import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/content";
import { Arrow } from "@/components/icons";
export const metadata = {
  title: "Kontak — Ana Salt Bread",
  description: "Hubungi Ana Salt Bread untuk informasi menu dan pemesanan.",
  alternates: { canonical: "/kontak" },
};
export default function Page() {
  return (
    <>
      <section className="contact-hero">
        <div data-reveal>
          <span className="eyebrow">ANA SALT BREAD</span>
          <h1>Kontak</h1>
          <p>
            Pesan melalui ESB Order. Untuk pertanyaan dan informasi lainnya,
            hubungi Instagram resmi Ana.
          </p>
          <div className="contact-hero-actions">
            <a
              className="button dark"
              href={BRAND.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan salt bread <Arrow />
            </a>
            <a
              className="text-link"
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @anasaltbread <Arrow />
            </a>
          </div>
        </div>
        <figure>
          <Image
            src="/images/ana-moment.webp"
            alt="Salt bread Ana dengan isian krim"
            width={1100}
            height={1375}
            sizes="(max-width:720px) 90vw, 40vw"
          />
        </figure>
      </section>
      <section className="contact-options section">
        <a href={BRAND.orderUrl} target="_blank" rel="noopener noreferrer">
          <span className="eyebrow">PEMESANAN</span>
          <h2>ESB Order</h2>
          <p>Pilih menu dan pesan online</p>
          <Arrow />
        </a>
        <Link href="/kunjungi">
          <span className="eyebrow">LOKASI</span>
          <h2>Outlet Ana</h2>
          <p>Sorrento Junction, Tangerang</p>
          <Arrow />
        </Link>
      </section>
    </>
  );
}
