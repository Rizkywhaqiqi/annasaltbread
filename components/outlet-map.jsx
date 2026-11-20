import { BRAND } from "@/lib/content";

export default function OutletMap() {
  return (
    <figure className="outlet-map">
      <iframe
        title="Peta Ana Salt Bread Gading Serpong, Sorrento Junction"
        src={BRAND.mapEmbed}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <figcaption>
        Sorrento Junction ·{" "}
        <a href={BRAND.maps} target="_blank" rel="noopener noreferrer">
          Buka di Google Maps
        </a>
      </figcaption>
    </figure>
  );
}
