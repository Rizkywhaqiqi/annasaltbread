import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <Link
            href="/"
            className="footer-logo"
            aria-label="Beranda Ana Salt Bread"
          >
            <Image
              src="/graphics/ana-wordmark.svg"
              alt=""
              width={330}
              height={150}
              unoptimized
            />
          </Link>
          <div>
            <span className="tiny">{"A LITTLE MORE ANA"}</span>
            <nav aria-label="Navigasi footer">
              <Link href="/tentang">{"Tentang Ana"}</Link>
              <Link href="/menu">{"Pilihan rasa"}</Link>
              <Link href="/kunjungi">{"Kunjungi kami"}</Link>
              <Link href="/kontak">{"Kontak"}</Link>
            </nav>
          </div>
          <div className="footer-social">
            <span className="tiny">{"COME SAY HELLO"}</span>
            <a
              href="https://www.instagram.com/anasaltbread/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"@anasaltbread"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </a>
            <p>
              {"Salt bread, coffee,"}
              <br />
              {"and little moments."}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{"© 2026 Ana Salt Bread"}</span>
          <span>{"We start blooming today."}</span>
          <Link href="/kunjungi">{"Sorrento Junction · Tangerang ↗"}</Link>
        </div>
      </footer>
    </>
  );
}
