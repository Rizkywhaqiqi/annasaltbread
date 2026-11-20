import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
export const metadata = {
  title: "Tentang — Ana Salt Bread",
  description: "Informasi Ana Salt Bread di Sorrento Junction, Tangerang.",
  alternates: { canonical: "/tentang" },
};
export default function Page() {
  return (
    <>
      <section className="page-banner ana-story-banner">
        <Image
          src="/images/ana-assortment.webp"
          alt=""
          fill
          sizes="100vw"
          preload
          className="ana-story-backdrop"
        />
        <span className="eyebrow">ANA SALT BREAD</span>
        <h1>Tentang Ana</h1>
        <p>Salt bread dengan pilihan isian dan topping.</p>
      </section>
      <section className="story-grid section">
        <figure>
          <Image
            src="/images/ana-moment.webp"
            alt="Salt bread Ana dengan isian krim"
            width={1100}
            height={1375}
            sizes="(max-width:720px) 90vw, 45vw"
          />
        </figure>
        <div data-reveal>
          <h2>Let your heart bloom.</h2>
          <p>Salt bread manis dan gurih di Sorrento Junction, Tangerang.</p>
          <p>
            Pemesanan melalui ESB Order. Informasi lainnya melalui
            @anasaltbread.
          </p>
          <Link href="/menu" className="text-link">
            Lihat menu <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
