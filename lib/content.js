export const BRAND = {
  name: "Ana Salt Bread",
  instagram: "https://www.instagram.com/anasaltbread/",
  handle: "anasaltbread",
  tagline: "Ana Salt Bread",
  address:
    "Jl. Ir. H. Soekarno No. 8, Ruko Sorrento Junction, Curug Sangereng, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Ana Salt Bread Ruko Sorrento Junction Jl Ir H Soekarno No 8 Curug Sangereng Kelapa Dua Tangerang",
    ),
};
export const PAGES = [
  {
    path: "/",
    label: "Beranda",
    title: "Ana Salt Bread — Menu dan lokasi outlet",
    description:
      "Menu dan informasi outlet Ana Salt Bread di Sorrento Junction, Tangerang.",
  },
  {
    path: "/tentang",
    label: "Tentang",
    title: "Tentang — Ana Salt Bread",
    description: "Informasi Ana Salt Bread di Sorrento Junction, Tangerang.",
  },
  {
    path: "/menu",
    label: "Menu",
    title: "Pilihan rasa — Ana Salt Bread",
    description:
      "Jelajahi foto salt bread Ana, dari isian krim dan lapisan cokelat hingga pilihan topping gurih.",
  },
  {
    path: "/kunjungi",
    label: "Lokasi",
    title: "Kunjungi Ana — Sorrento Junction, Tangerang",
    description:
      "Temukan alamat Ana Salt Bread di Ruko Sorrento Junction dan buka petunjuk arah ke outlet.",
  },
  {
    path: "/kontak",
    label: "Kontak",
    title: "Kontak — Ana Salt Bread",
    description:
      "Hubungi Instagram resmi Ana Salt Bread untuk pertanyaan, ketersediaan menu, dan pemesanan.",
  },
];
export const PRODUCTS = [
  {
    id: "cream",
    name: "Salt Bread Krim",
    category: "Manis",
    image: "ana-cream",
    alt: "Salt bread Ana dengan isian krim putih dan permukaan kecokelatan",
    description: "Isian krim lembut dalam salt bread.",
  },
  {
    id: "chocolate",
    name: "Salt Bread Cokelat",
    category: "Manis",
    image: "ana-chocolate",
    alt: "Pilihan salt bread Ana berlapis cokelat di atas nampan kayu",
    description: "Lapisan cokelat dengan taburan chocolate chips.",
  },
  {
    id: "savory",
    name: "Salt Bread Gurih",
    category: "Gurih",
    image: "ana-savory",
    alt: "Salt bread Ana dengan topping gurih dan taburan hijau",
    description: "Saus dan topping gurih di atas salt bread.",
  },
  {
    id: "crunch",
    name: "Salt Bread Renyah",
    category: "Gurih",
    image: "ana-crunch",
    alt: "Salt bread Ana dengan topping remah bertekstur",
    description: "Taburan remah renyah untuk pilihan gurih.",
  },
];
