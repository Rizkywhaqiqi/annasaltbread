import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-banner not-found">
      <span className="eyebrow">404</span>
      <h1>Halaman tidak ditemukan</h1>
      <Link href="/" className="text-link">
        Kembali ke beranda
      </Link>
    </section>
  );
}
