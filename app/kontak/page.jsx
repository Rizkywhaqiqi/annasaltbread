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
            Untuk informasi menu, ketersediaan, dan pemesanan, hubungi Instagram
            resmi Ana.
          </p>
          <a
            className="button dark"
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @anasaltbread <Arrow />
          </a>
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
        <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
          <span className="eyebrow">PEMESANAN</span>
          <h2>Instagram</h2>
          <p>@anasaltbread</p>
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
