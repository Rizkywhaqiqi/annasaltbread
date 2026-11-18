import Link from "next/link";
import Image from "next/image";
import { ProductGrid, MenuProducts } from "@/components/products";
export const metadata = {
  title: "Kunjungi Ana — Sorrento Junction, Tangerang",
  description:
    "Temukan alamat Ana Salt Bread di Ruko Sorrento Junction dan buka petunjuk arah ke outlet.",
  alternates: { canonical: "/kunjungi" },
};
export default function Page() {
  return (
    <>
      <section className="page-banner">
        <span className="eyebrow">ANA SALT BREAD</span>
        <h1>Lokasi outlet</h1>
        <p>Ruko Sorrento Junction, Tangerang.</p>
      </section>
      <section className="location-grid section">
        <figure>
          <Image
            src="/images/ana-selection.webp"
            alt="Ragam salt bread Ana yang tersaji di nampan kayu"
            width={1100}
            height={1375}
            fetchPriority="high"
            sizes="(max-width: 720px) 90vw, 45vw"
          />
        </figure>
        <div>
          <span className="tiny">{"SORRENTO JUNCTION / TANGERANG"}</span>
          <h2>Sorrento Junction</h2>
          <address>
            {
              "Jl. Ir. H. Soekarno No. 8, Ruko Sorrento Junction, Curug Sangereng, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810"
            }
          </address>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ana%20Salt%20Bread%20Ruko%20Sorrento%20Junction%20Jl%20Ir%20H%20Soekarno%20No%208%20Curug%20Sangereng%20Kelapa%20Dua%20Tangerang"
            className="button dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Buka petunjuk arah"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </a>
          <div className="location-note">
            <span className="tiny">{"JAM OPERASIONAL"}</span>
            <p>
              {
                "Cek jam buka dan ketersediaan menu melalui Instagram sebelum berkunjung."
              }
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/anasaltbread/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Tanya Ana di Instagram"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="faq section">
        <span className="tiny">{"INFORMASI"}</span>
        <h2>Pertanyaan umum</h2>
        <details>
          <summary>
            {"Di mana lokasi Ana?"}
            <span>{"+"}</span>
          </summary>
          <p>
            {
              "Ana berada di Ruko Sorrento Junction, Jl. Ir. H. Soekarno No. 8, Curug Sangereng, Kelapa Dua, Kabupaten Tangerang. Gunakan tombol petunjuk arah untuk mencari rutenya."
            }
          </p>
        </details>
        <details>
          <summary>
            {"Bagaimana cara memesan?"}
            <span>{"+"}</span>
          </summary>
          <p>
            {
              "Kirim pesan ke akun Instagram resmi @anasaltbread untuk menanyakan pilihan menu, harga, dan cara pemesanan yang tersedia."
            }
          </p>
        </details>
        <details>
          <summary>
            {"Apakah menu selalu tersedia?"}
            <span>{"+"}</span>
          </summary>
          <p>
            {
              "Ketersediaan dapat berubah. Konfirmasi pilihan rasa dan jam operasional melalui Instagram sebelum datang atau memesan."
            }
          </p>
        </details>
      </section>
    </>
  );
}
