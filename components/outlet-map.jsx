import { BRAND } from "@/lib/content";

export default function OutletMap() {
  return (
    <figure className="outlet-map">
      <iframe
        title="Peta 5 cabang Ana Salt Bread"
        src={BRAND.mapEmbed}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <figcaption>
        {"Peta semua cabang · "}
        <a href={BRAND.maps} target="_blank" rel="noopener noreferrer">
          Buka di Google Maps
        </a>
      </figcaption>
    </figure>
  );
}
