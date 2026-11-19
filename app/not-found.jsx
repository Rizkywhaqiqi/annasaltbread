import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-banner pink not-found">
      <span className="tiny">404 / A LITTLE DETOUR</span>
      <h1>
        SEPERTINYA
        <br />
        BEDA <em>ALAMAT.</em>
      </h1>
      <Link href="/" className="button dark">
        Kembali ke beranda ↗
      </Link>
    </section>
  );
}
