import Image from "next/image";
import { DRINK_SERIES, formatPrice } from "@/lib/content";

export default function DrinksMenu() {
  return (
    <section
      className="drinks-menu"
      id="menu-minuman"
      aria-labelledby="drinks-title"
    >
      <div className="drinks-heading" data-reveal>
        <span className="eyebrow">MINUMAN</span>
        <h2 id="drinks-title">Coffee & Drinks</h2>
      </div>
      <div className="drinks-layout">
        <a
          className="drinks-poster"
          href="/images/ana-drinks-menu.webp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka gambar menu minuman Ana"
        >
          <Image
            src="/images/ana-drinks-menu.webp"
            alt="Menu minuman Ana: Coffee Series, Drink Series, dan Hot Drink Series"
            width={640}
            height={1138}
            sizes="(max-width:720px) 90vw,40vw"
          />
        </a>
        <div className="drinks-list">
          {DRINK_SERIES.map((series) => (
            <div className="drinks-series" key={series.id} data-reveal>
              <h3>{series.title}</h3>
              <dl>
                {series.items.map((item) => (
                  <div className="drink-row" key={item.name}>
                    <dt>{item.name}</dt>
                    <dd>{formatPrice(item.price)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
