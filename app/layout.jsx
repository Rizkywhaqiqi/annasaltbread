import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata = {
  metadataBase: new URL("https://annasaltbread.vercel.app"),
  title: "Ana Salt Bread",
  description: "Salt bread dan momen kecil bersama Ana.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Ana Salt Bread",
    images: [
      {
        url: "/images/ana-assortment.webp",
        width: 1100,
        height: 1375,
        alt: "Pilihan salt bread Ana",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};
export const viewport = { themeColor: "#f3aabe" };
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#main">
          Langsung ke konten
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
