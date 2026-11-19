import Link from "next/link";
import { Arrow } from "@/components/icons";
import Image from "next/image";
import Hero, { Spark } from "@/components/hero";
import { ProductGrid } from "@/components/products";
export const metadata = {
  title: "Ana Salt Bread — A little bread, a little love.",
  description:
    "Salt bread, pilihan rasa, dan momen kecil bersama Ana Salt Bread di Sorrento Junction, Tangerang.",
  alternates: { canonical: "/" },
};
function Marquee() {
  return (
    <div className="bloom-marquee" aria-hidden="true">
      <div className="bloom-track">
        {[0, 1].map((n) => (
          <div className="bloom-group" key={n}>
            <span>A LITTLE BREAD</span>
            <i>✳</i>
            <span>A LITTLE LOVE</span>
            <i>✳</i>
            <span>BAKE & BLOOM</span>
            <i>✳</i>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="little-story">
        <div className="story-margin">
          <span className="eyebrow">01 / THE LITTLE THINGS</span>
          <span className="hand-note">
            life happens.
            <br />
            take a little break.
          </span>
          <Spark />
        </div>
        <div className="story-message" data-reveal>
          <h2>
            HARI BOLEH RAMAI.
            <br />
            JEDAMU BOLEH
            <br />
            <em>sesimpel ini.</em>
          </h2>
          <div className="story-message-bottom">
            <p>
              Sepotong salt bread. Obrolan yang mengalir. Atau waktu untuk diri
              sendiri. Di Ana, selalu ada ruang untuk hal-hal kecil yang bikin
              harimu terasa lebih baik.
            </p>
            <Link href="/tentang" className="sketch-link">
              Sedikit cerita Ana{" "}
              <span>
                <Arrow />
              </span>
              <svg viewBox="0 0 200 14" aria-hidden="true">
                <path d="M2 9C55 0 132 4 198 8M24 13c47-5 108-6 159-3" />
              </svg>
            </Link>
          </div>
        </div>
        <Image
          className="story-bloom"
          src="/graphics/ana-flower.svg"
          width={150}
          height={150}
          alt=""
          unoptimized
        />
      </section>
      <section className="flavour-section">
        <div className="flavour-heading" data-reveal>
          <span className="eyebrow">02 / FOLLOW YOUR CRAVINGS</span>
          <h2>
            PICK YOUR
            <br />
            <em>little crush.</em>
          </h2>
          <p>
            Tim manis, tim gurih,
            <br />
            atau tim “satu lagi, deh”?
          </p>
          <Spark />
        </div>
        <ProductGrid />
        <div className="flavour-bottom">
          <span className="hand-note">can’t choose? we get it.</span>
          <Link href="/menu" className="button dark">
            Kenali semua pilihan{" "}
            <span>
              <Arrow />
            </span>
          </Link>
        </div>
      </section>
      <section className="ana-postcard">
        <div className="postcard-photo" data-reveal>
          <Image
            src="/images/ana-selection.webp"
            alt="Ragam salt bread Ana di atas nampan kayu"
            width={1100}
            height={1375}
            sizes="(max-width:720px) 90vw, 45vw"
          />
          <span className="tape tape-one" aria-hidden="true" />
          <span className="tape tape-two" aria-hidden="true" />
          <span className="postcard-caption">a very good kind of company.</span>
        </div>
        <div className="postcard-copy" data-reveal>
          <span className="eyebrow">03 / YOUR NEXT LITTLE STOP</span>
          <h2>
            SEE YOU
            <br />
            AT <em>Ana.</em>
          </h2>
          <p>
            Sorrento Junction, Tangerang.
            <br />
            Datang sendiri atau ajak orang kesayangan.
            <br />
            Kami tunggu jeda kecilmu berikutnya.
          </p>
          <Link href="/kunjungi" className="sketch-link">
            Yuk, mampir{" "}
            <span>
              <Arrow />
            </span>
            <svg viewBox="0 0 200 14" aria-hidden="true">
              <path d="M2 8c61-6 137-5 196 0" />
            </svg>
          </Link>
          <span className="postcard-stamp">
            <Image
              src="/graphics/ana-flower.svg"
              alt=""
              width={150}
              height={150}
              unoptimized
            />
            <span>
              WITH LOVE,
              <br />
              FROM ANA.
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
