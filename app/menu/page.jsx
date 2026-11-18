import Link from "next/link";
import Image from "next/image";
import { ProductGrid, MenuProducts } from "@/components/products";
export const metadata = {
  title: "Pilihan rasa — Ana Salt Bread",
  description:
    "Jelajahi foto salt bread Ana, dari isian krim dan lapisan cokelat hingga pilihan topping gurih.",
  alternates: { canonical: "/menu" },
};
export default function Page() {
  return (
    <>
      <section className="page-banner cream">
        <span className="tiny">{"FIND YOUR LITTLE FAVOURITE"}</span>
        <h1>
          {"SELALU ADA"}
          <br />
          {"RUANG UNTUK "}
          <em>{"ANA."}</em>
        </h1>
        <p>
          {"Kenali pilihan salt bread dari foto-foto Ana."}
          <br />
          {
            "Untuk menu lengkap, harga, dan ketersediaan hari ini, tanya langsung ke kami."
          }
        </p>
      </section>
      <MenuProducts></MenuProducts>
      <section className="small-cta">
        <div>
          <span className="tiny">{"HAVE A LITTLE CRAVING?"}</span>
          <h2>
            {"SUDAH PUNYA "}
            <em>{"PILIHAN?"}</em>
          </h2>
        </div>
        <a
          className="button dark"
          href="https://www.instagram.com/anasaltbread/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Tanya & pesan ke Ana"}
          <svg viewbox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </a>
      </section>
    </>
  );
}
