import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import {
  BRAND_KEYWORDS,
  BRAND_SUPPORTING_LINE,
  BRAND_TAGLINE,
} from "@/lib/brand-copy";
export const metadata = {
  title: "Tentang — Ana Salt Bread",
  description: "Informasi Ana Salt Bread di Tangerang.",
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
            src="/images/ana-cream-detail.jpg"
            alt="Salt bread Ana dengan isian krim putih dan detail kulit roti keemasan"
            width={648}
            height={810}
            sizes="(max-width:720px) 90vw, 45vw"
          />
        </figure>
        <div data-reveal>
          <h2 className="brand-handwritten">Let your heart bloom.</h2>
          <p>Salt bread manis dan gurih di Tangerang.</p>
          <p className="brand-narrative-line">
            <strong>{BRAND_SUPPORTING_LINE}</strong>{" "}
            {BRAND_TAGLINE}{" "}merangkum tiga esensi Ana Salt Bread: sensasi
            kerenyahan gigitan pertama, kekayaan cita rasa mentega premium,
            serta pengalaman menikmati roti artisan yang lebih modern dan
            berkelas.
          </p>
          <p>
            Pemesanan melalui ESB Order. Informasi lainnya melalui
            @anasaltbread.
          </p>
          <Link href="/menu" className="text-link">
            Lihat menu <Arrow />
          </Link>
        </div>
      </section>
      <section className="brand-keywords section" aria-labelledby="keywords-title">
        <div className="brand-keywords-head" data-reveal>
          <span className="eyebrow">KATA KUNCI BRAND</span>
          <h2 id="keywords-title">Empat nilai di setiap roti.</h2>
        </div>
        <ul className="brand-keyword-list" data-reveal>
          {BRAND_KEYWORDS.map((item, index) => (
            <li key={item.name}>
              <span className="brand-keyword-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
