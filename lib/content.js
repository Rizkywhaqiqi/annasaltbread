export const BRAND = {
  name: "Ana Salt Bread",
  instagram: "https://www.instagram.com/anasaltbread/",
  handle: "anasaltbread",
  tagline: "We start blooming today.",
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
    title: "Ana Salt Bread — A little bread, a little love.",
    description:
      "Salt bread, pilihan rasa, dan momen kecil bersama Ana Salt Bread di Sorrento Junction, Tangerang.",
  },
  {
    path: "/tentang",
    label: "Tentang Ana",
    title: "Tentang Ana — Cerita kecil kami",
    description:
      "Kenali Ana Salt Bread dan cerita di balik jeda kecil yang penuh rasa.",
  },
  {
    path: "/menu",
    label: "Pilihan rasa",
    title: "Pilihan rasa — Ana Salt Bread",
    description:
      "Jelajahi foto salt bread Ana, dari isian krim dan lapisan cokelat hingga pilihan topping gurih.",
  },
  {
    path: "/kunjungi",
    label: "Kunjungi kami",
    title: "Kunjungi Ana — Sorrento Junction, Tangerang",
    description:
      "Temukan alamat Ana Salt Bread di Ruko Sorrento Junction dan buka petunjuk arah ke outlet.",
  },
  {
    path: "/kontak",
    label: "Kontak",
    title: "Say hello — Ana Salt Bread",
    description:
      "Hubungi Instagram resmi Ana Salt Bread untuk pertanyaan, ketersediaan menu, dan pemesanan.",
  },
];
export const PRODUCTS = [
  {
    id: "cream",
    name: "Isian krim",
    category: "Manis",
    image: "ana-cream",
    alt: "Salt bread Ana dengan isian krim putih dan permukaan kecokelatan",
    description: "Jeda manis, dengan isian krim di antara lapisan salt bread.",
  },
  {
    id: "chocolate",
    name: "Lapisan cokelat",
    category: "Manis",
    image: "ana-chocolate",
    alt: "Pilihan salt bread Ana berlapis cokelat di atas nampan kayu",
    description: "Untuk kamu yang selalu punya ruang untuk cokelat.",
  },
  {
    id: "savory",
    name: "Pilihan gurih",
    category: "Gurih",
    image: "ana-savory",
    alt: "Salt bread Ana dengan topping gurih dan taburan hijau",
    description: "Kenali sisi gurih Ana lewat pilihan toppingnya.",
  },
  {
    id: "crunch",
    name: "Topping renyah",
    category: "Gurih",
    image: "ana-crunch",
    alt: "Salt bread Ana dengan topping remah bertekstur",
    description: "Tekstur dan topping untuk melengkapi pilihan rotimu.",
  },
];
