import { BRAND, DEFAULT_OUTLET, OUTLETS } from "@/lib/content";
import OutletMap from "@/components/outlet-map";
export const metadata = {
  title: "Kunjungi Ana — 5 cabang",
  description:
    "Temukan alamat 5 cabang Ana Salt Bread dan buka petunjuk arah ke outlet terdekat.",
  alternates: { canonical: "/kunjungi" },
};
export default function Page() {
  return (
    <>
      <section className="page-banner">
        <span className="eyebrow">ANA SALT BREAD</span>
        <h1>Lokasi outlet</h1>
        <p>Lima cabang Ana Salt Bread. Pilih outlet terdekat.</p>
      </section>
      <section className="outlet-list section" aria-labelledby="outlet-list-title">
        <span className="tiny">{"DAFTAR CABANG"}</span>
        <h2 id="outlet-list-title">5 cabang Ana</h2>
        <ul>
          {OUTLETS.map((outlet, index) => (
            <li key={outlet.id}>
              <span className="outlet-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{outlet.name}</h3>
              <p className="outlet-area">{outlet.area}</p>
              <address>{outlet.address}</address>
              <a
                href={outlet.maps}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Petunjuk arah
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p className="outlet-phone">
          Semua cabang ·{" "}
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp {BRAND.phone}
          </a>
          {" · "}
          <a href="tel:+6281156002122">{BRAND.phone}</a>
        </p>
      </section>
      <section className="location-grid section">
        <OutletMap />
        <div>
          <span className="tiny">{"GADING SERPONG / TANGERANG"}</span>
          <h2>{DEFAULT_OUTLET.name}</h2>
          <address>{DEFAULT_OUTLET.address}</address>
          <a
            href={DEFAULT_OUTLET.maps}
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
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Tanya Ana via WhatsApp"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </a>
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
              "Ana punya 5 cabang: Gading Serpong, Green Lake City, Purnama dan Juanda (Pontianak), serta Balikpapan. Buka petunjuk arah pada cabang yang ingin dikunjungi."
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
