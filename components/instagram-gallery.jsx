import SectionBread from "@/components/section-bread";
import Image from "next/image";
import { BRAND } from "@/lib/content";

// Owner-supplied photos; these links open the brand profile, not individual posts.
// This curated gallery does not claim to be a live Instagram feed.
const photos = [
  {
    image: "ana-coffee-detail.jpg",
    alt: "Minuman Ana dengan cream dan taburan renyah dalam gelas hitam berlogo Ana",
  },
  {
    image: "ana-cheddar-detail.jpg",
    alt: "Detail salt bread Ana dengan topping cheddar kuning dan saus",
  },
  { image: "ana-cream-detail.jpg", alt: "Tekstur kulit salt bread Ana dengan isian krim putih" },
  { image: "ana-savory-detail.jpg", alt: "Close-up saus creamy dan irisan daun bawang pada salt bread Ana" },
  {
    image: "ana-chocolate.webp",
    alt: "Pilihan salt bread Ana dengan lapisan cokelat",
  },
  {
    image: "ana-crunch.webp",
    alt: "Salt bread Ana dengan topping remah bertekstur",
  },
];
export default function InstagramGallery() {
  return (
    <section className="home-gallery" aria-labelledby="home-gallery-title">
      <SectionBread
        variant="savory"
        side="left"
        className="gallery-section-bread"
      />
      <div className="home-gallery-heading" data-reveal>
        <span className="eyebrow">INSTAGRAM</span>
        <h2 id="home-gallery-title">Galeri Ana</h2>
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-handle"
        >
          @anasaltbread
        </a>
      </div>
      <div className="home-gallery-grid">
        {photos.map((photo) => (
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-photo"
            key={photo.image}
            aria-label={"Buka profil Instagram Ana — " + photo.alt}
          >
            <Image
              src={"/images/" + photo.image}
              alt={photo.alt}
              width={1100}
              height={1375}
              sizes="(max-width:720px) 45vw, (max-width:1200px) 22vw,280px"
            />
            <span className="gallery-photo-label" aria-hidden="true">
              Lihat profil Ana
            </span>
          </a>
        ))}
      </div>
      <a
        className="text-link gallery-follow"
        href={BRAND.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Kunjungi Instagram Ana
      </a>
    </section>
  );
}
