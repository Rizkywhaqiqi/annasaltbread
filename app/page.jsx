import Link from "next/link";
import Image from "next/image";
import { ProductGrid, MenuProducts } from "@/components/products";
export const metadata = {
  title: "Ana Salt Bread — A little bread, a little love.",
  description:
    "Salt bread, pilihan rasa, dan momen kecil bersama Ana Salt Bread di Sorrento Junction, Tangerang.",
  alternates: { canonical: "/" },
};
export default function Page() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-top">
          <p className="tiny">{"SALT BREAD FOR YOUR LITTLE EVERYDAY JOYS"}</p>
          <span className="hero-handwritten">{"a little love, baked in."}</span>
        </div>
        <div className="hero-title">
          <h1>
            {"A LITTLE BREAD."}
            <br />
            <span>
              {"A LITTLE "}
              <i>{"LOVE."}</i>
            </span>
          </h1>
          <svg viewbox="0 0 72 72" aria-hidden="true" className="flower">
            <g fill="none" stroke="currentColor" strokeWidth="2.4">
              <circle cx="36" cy="36" r="7"></circle>
              <path d="M29 23C14 3 41-2 41 20c13-18 31 1 12 12 25-2 20 25-1 17 15 18-9 31-15 9-5 23-30 10-15-8-22 8-26-19-3-20-20-10-3-30 10-7Z"></path>
            </g>
          </svg>
        </div>
        <div className="hero-photos">
          <figure className="hero-photo photo-one">
            <Image
              src="/images/ana-savory.webp"
              alt="Salt bread Ana dengan pilihan topping gurih"
              width={1100}
              height={1375}
              fetchPriority="high"
              sizes="(max-width: 720px) 90vw, 45vw"
            />
            <figcaption>{"a little savoury."}</figcaption>
          </figure>
          <figure className="hero-photo photo-two">
            <Image
              src="/images/ana-cream.webp"
              alt="Salt bread Ana dengan isian krim"
              width={1100}
              height={1375}
              fetchPriority="high"
              sizes="(max-width: 720px) 90vw, 45vw"
            />
            <figcaption>{"always room for Ana."}</figcaption>
          </figure>
          <figure className="hero-photo photo-three">
            <Image
              src="/images/ana-chocolate.webp"
              alt="Salt bread berlapis cokelat dari Ana"
              width={1100}
              height={1375}
              loading="eager"
              sizes="(max-width: 720px) 90vw, 45vw"
            />
            <figcaption>{"a little sweet."}</figcaption>
          </figure>
          <Link className="round-cta" href="/menu">
            <span>
              {"PILIH"}
              <br />
              {"FAVORITMU"}
            </span>
            <svg viewbox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
        <div className="hero-bottom">
          <p>
            {"Sepotong roti."}
            <br />
            {"Alasan kecil untuk tersenyum."}
          </p>
          <Link className="text-link" href="/menu">
            {"Kenali pilihan rasa"}
            <svg viewbox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
      </section>
      <div className="ribbon" aria-hidden="true">
        <div>
          {"BAKE & BLOOM "}
          <span>{"✿"}</span>
          {" A LITTLE BREAD, A LITTLE LOVE "}
          <span>{"✿"}</span>
          {" SALT BREAD & LITTLE MOMENTS "}
          <span>{"✿"}</span>
          {" BAKE & BLOOM "}
          <span>{"✿"}</span>
        </div>
      </div>
      <section className="home-story section">
        <span className="tiny">{"HELLO, WE’RE ANA."}</span>
        <h2>
          {"ADA CERITA KECIL"}
          <br />
          {"DI SETIAP "}
          <em>{"JEDA."}</em>
        </h2>
        <div className="home-story-bottom">
          <span className="outline-flower">
            <svg viewbox="0 0 72 72" aria-hidden="true" className="flower">
              <g fill="none" stroke="currentColor" strokeWidth="2.4">
                <circle cx="36" cy="36" r="7"></circle>
                <path d="M29 23C14 3 41-2 41 20c13-18 31 1 12 12 25-2 20 25-1 17 15 18-9 31-15 9-5 23-30 10-15-8-22 8-26-19-3-20-20-10-3-30 10-7Z"></path>
              </g>
            </svg>
          </span>
          <p>
            {
              "Dari sepotong salt bread hingga obrolan yang tak terasa panjang. Ana mengajakmu menikmati hal-hal sederhana, satu momen kecil dalam satu waktu."
            }
          </p>
          <Link href="/tentang" className="button outline">
            {"Cerita Ana"}
            <svg viewbox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
      </section>
      <section className="home-menu section">
        <div className="section-heading">
          <div>
            <span className="tiny">{"FIND YOUR LITTLE FAVOURITE"}</span>
            <h2>
              {"MANIS? GURIH?"}
              <br />
              <em>{"YES, PLEASE."}</em>
            </h2>
          </div>
          <Link className="text-link" href="/menu">
            {"Jelajahi pilihan rasa"}
            <svg viewbox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
        <ProductGrid></ProductGrid>
      </section>
      <section className="visit-teaser">
        <div className="visit-copy">
          <span className="tiny">{"YOUR NEXT LITTLE STOP"}</span>
          <h2>
            {"MEET YOU"}
            <br />
            {"AT "}
            <em>{"ANA."}</em>
          </h2>
          <p>
            {"Temukan kami di Sorrento Junction, Tangerang."}
            <br />
            {"Jadikan Ana bagian dari jeda berikutnya."}
          </p>
          <Link href="/kunjungi" className="button dark">
            {"Mampir ke Ana"}
            <svg viewbox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
        <figure>
          <Image
            src="/images/ana-selection.webp"
            alt="Pilihan salt bread Ana tersusun di atas nampan kayu"
            width={1100}
            height={1375}
            loading="lazy"
            sizes="(max-width: 720px) 90vw, 45vw"
          />
          <span className="photo-stamp">
            {"COME"}
            <br />
            {"SAY HELLO"}
            <br />
            {"✿"}
          </span>
        </figure>
      </section>
    </>
  );
}
