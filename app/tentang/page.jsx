import Link from "next/link";
import Image from "next/image";
import { ProductGrid, MenuProducts } from "@/components/products";
export const metadata = {
  title: "Tentang Ana — Cerita kecil kami",
  description:
    "Kenali Ana Salt Bread dan cerita di balik jeda kecil yang penuh rasa.",
  alternates: { canonical: "/tentang" },
};
export default function Page() {
  return (
    <>
      <section className="page-banner pink">
        <span className="tiny">{"A SMALL STORY, A LITTLE LOVE"}</span>
        <h1>
          {"KENALAN"}
          <br />
          {"DENGAN "}
          <em>{"ANA."}</em>
        </h1>
        <p>
          {"Salt bread, kopi, dan jeda kecil yang punya ceritanya sendiri."}
        </p>
        <svg viewBox="0 0 72 72" aria-hidden="true" className="flower">
          <g fill="none" stroke="currentColor" strokeWidth="2.4">
            <circle cx="36" cy="36" r="7"></circle>
            <path d="M29 23C14 3 41-2 41 20c13-18 31 1 12 12 25-2 20 25-1 17 15 18-9 31-15 9-5 23-30 10-15-8-22 8-26-19-3-20-20-10-3-30 10-7Z"></path>
          </g>
        </svg>
      </section>
      <section className="story-grid section">
        <figure>
          <Image
            src="/images/ana-moment.webp"
            alt="Salt bread Ana dengan krim, disajikan di atas piring hitam"
            width={1100}
            height={1375}
            fetchPriority="high"
            sizes="(max-width: 720px) 90vw, 45vw"
          />
        </figure>
        <div>
          <span className="tiny">{"MORE THAN A LITTLE BREAD"}</span>
          <h2>
            {"HAL SEDERHANA."}
            <br />
            <em>{"MOMEN BERARTI."}</em>
          </h2>
          <p>
            {
              "Kadang, momen menyenangkan datang dari hal yang sederhana. Sepotong salt bread, sajian kopi, dan waktu yang kamu luangkan untuk menikmatinya."
            }
          </p>
          <p>
            {
              "Ana mengajakmu menemukan jeda kecil itu. Sendiri, bersama teman, atau sekadar singgah di tengah hari yang penuh cerita."
            }
          </p>
          <Link className="button outline" href="/menu">
            {"Temukan pilihanmu"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
      </section>
      <section className="statement">
        <span className="tiny">{"A NOTE FROM ANA"}</span>
        <p>
          {"SEDIKIT JEDA."}
          <br />
          {"SEDIKIT "}
          <em>{"BAHAGIA."}</em>
          <br />
          {"BANYAK CERITA."}
        </p>
        <Link href="/kunjungi" className="text-link">
          {"Bertemu di Ana"}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </Link>
      </section>
    </>
  );
}
