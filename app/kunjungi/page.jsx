import { BRAND } from "@/lib/content";
import OutletMap from "@/components/outlet-map";
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
        <OutletMap />
        <div>
          <span className="tiny">{"SORRENTO JUNCTION / TANGERANG"}</span>
          <h2>Sorrento Junction</h2>
          <address>{BRAND.address}</address>
          <a
            href={BRAND.maps}
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
            <p className="hours-value">{BRAND.hours}</p>
            <p className="hours-source">
              Sesuai jadwal di{" "}
              <a
                href={BRAND.hoursSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
              . Jam dapat berubah pada hari libur.
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
          <p>{"Pilih menu dan buat pesanan melalui ESB Order."}</p>
          <a
            href={BRAND.orderUrl}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan melalui ESB Order
          </a>
        </details>
        <details>
          <summary>
            {"Apakah menu selalu tersedia?"}
            <span>{"+"}</span>
          </summary>
          <p>
            {
              "Ketersediaan dapat berubah. Cek menu pada ESB Order. Jam buka hari libur dapat dikonfirmasi melalui Instagram."
            }
          </p>
        </details>
      </section>
    </>
  );
}
