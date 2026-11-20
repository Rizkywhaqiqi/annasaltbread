import "./globals.css";
import "./brand-motion.css";
import "./navigation.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageBloom from "@/components/page-bloom";
export const metadata = {
  metadataBase: new URL("https://annasaltbread.vercel.app"),
  title: "Ana Salt Bread",
  description: "Menu, lokasi outlet, dan pemesanan Ana Salt Bread.",
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
export const viewport = { themeColor: "#FEF3EA" };
export default function RootLayout({ children }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Langsung ke konten
        </a>
        <Header />
        <main id="main">
          <PageBloom />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
