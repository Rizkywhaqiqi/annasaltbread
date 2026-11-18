import Link from "next/link";
import Image from "next/image";
import { ProductGrid, MenuProducts } from "@/components/products";
export const metadata = {
  title: "Say hello — Ana Salt Bread",
  description:
    "Hubungi Instagram resmi Ana Salt Bread untuk pertanyaan, ketersediaan menu, dan pemesanan.",
  alternates: { canonical: "/kontak" },
};
export default function Page() {
  return (
    <>
      <section className="contact-hero">
        <div>
          <span className="tiny">{"COME SAY HELLO"}</span>
          <h1>
            {"A LITTLE"}
            <br />
            {"HELLO GOES"}
            <br />
            {"A "}
            <em>{"LONG WAY."}</em>
          </h1>
          <p>
            {"Pertanyaan tentang menu, ketersediaan, atau pemesanan?"}
            <br />
            {"Ceritakan ke Ana lewat Instagram resmi."}
          </p>
          <a
            className="button dark"
            href="https://www.instagram.com/anasaltbread/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Hubungi @anasaltbread"}
            <svg viewbox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </a>
        </div>
        <figure>
          <Image
            src="/images/ana-moment.webp"
            alt="Sepotong salt bread Ana dengan isian krim di atas piring hitam"
            width={1100}
            height={1375}
            fetchPriority="high"
            sizes="(max-width: 720px) 90vw, 45vw"
          />
          <span className="contact-doodle">
            {"let’s talk"}
            <br />
            {"about bread."}
          </span>
        </figure>
      </section>
      <section className="contact-options section">
        <a
          href="https://www.instagram.com/anasaltbread/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tiny">{"01 / TANYA & PESAN"}</span>
          <h2>{"INSTAGRAM"}</h2>
          <p>{"@anasaltbread"}</p>
          <svg viewbox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </a>
        <Link href="/kunjungi">
          <span className="tiny">{"02 / MAMPIR LANGSUNG"}</span>
          <h2>{"KUNJUNGI ANA"}</h2>
          <p>{"Sorrento Junction, Tangerang"}</p>
          <svg viewbox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </Link>
      </section>
    </>
  );
}
