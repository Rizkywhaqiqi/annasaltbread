export const BRAND = {
  name: "Ana Salt Bread",
  orderUrl: "https://esborder.qs.esb.co.id/ANA",
  instagram: "https://www.instagram.com/anasaltbread/",
  handle: "anasaltbread",
  tagline: "Ana Salt Bread",
  address:
    "Jl. Ir. H. Soekarno No. 8, Curug Sangereng, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
  menuUrl:
    "https://drive.google.com/file/d/14AFhJdgPZ5xhNXa-zxdPtI7iNHnMXMeZ/view",
  hours: "Setiap hari · 10.00–22.00 WIB",
  phone: "0811-5600-2122",
  hoursSource: "https://maps.app.goo.gl/XnXtXuWm5DVZKft57",
  mapEmbed:
    "https://www.google.com/maps/d/u/0/embed?mid=1GvcVD218hG5vuZ2sz194deziJQPbIvE&ehbc=2E312F&noprof=1",
  maps: "https://maps.app.goo.gl/XnXtXuWm5DVZKft57",
};
// Outlet list confirmed by the owner (5 branches) with the owner-supplied Maps links.
export const OUTLETS = [
  {
    id: "gading-serpong",
    name: "Gading Serpong",
    area: "Tangerang, Banten",
    address:
      "Jl. Ir H Soekarno No.8, Curug Sangereng, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
    maps: "https://maps.app.goo.gl/XnXtXuWm5DVZKft57",
  },
  {
    id: "green-lake-city",
    name: "Green Lake City",
    area: "Jakarta Barat",
    address:
      "Rukan Sentra Niaga, Jl. Green Lake City Boulevard No.2 Blok B, RT.7/RW.8, Duri Kosambi, Cengkareng, Jakarta Barat 11750",
    maps: "https://maps.app.goo.gl/5qFasNvuXfWz7RabA",
  },
  {
    id: "purnama",
    name: "Purnama",
    area: "Pontianak Selatan, Kalimantan Barat",
    address:
      "Jl. Perintis Depan No.98, Parit Tokaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78115",
    maps: "https://maps.app.goo.gl/Z6dvNWYkCuVaP3Hi6",
  },
  {
    id: "juanda",
    name: "Juanda",
    area: "Pontianak Kota, Kalimantan Barat",
    address:
      "Jl. Ir. H. Juanda No.67, Darat Sekip, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78243",
    maps: "https://maps.app.goo.gl/76U1Ws9nMMivCKom7",
  },
  {
    id: "balikpapan",
    name: "Balikpapan",
    area: "Balikpapan, Kalimantan Timur",
    address:
      "Jl. MT Haryono No.12, Damai, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76114",
    maps: "https://maps.app.goo.gl/J24SZHRpTnbiCfWMA",
  },
];
export const DEFAULT_OUTLET = OUTLETS[0];
// Owner-confirmed best sellers, shown first with a badge on the menu.
export const BEST_SELLERS = [
  "pistachio",
  "katsu",
  "cheddar",
];
export const PAGES = [
  {
    path: "/",
    label: "Beranda",
    title: "Ana Salt Bread — Menu dan lokasi outlet",
    description:
      "Menu dan informasi outlet Ana Salt Bread di Tangerang.",
  },
  {
    path: "/tentang",
    label: "Tentang",
    title: "Tentang — Ana Salt Bread",
    description: "Informasi Ana Salt Bread di Tangerang.",
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
    title: "Kunjungi Ana — Tangerang",
    description:
      "Temukan alamat Ana Salt Bread di Tangerang dan buka petunjuk arah ke outlet.",
  },
  {
    path: "/kontak",
    label: "Kontak",
    title: "Kontak — Ana Salt Bread",
    description:
      "Pesan Ana Salt Bread melalui ESB Order atau hubungi Instagram untuk informasi.",
  },
];
export const MENU_CATEGORIES = [
  { id: "signature", label: "Signature" },
  { id: "keju", label: "Keju" },
  { id: "gurih", label: "Gurih" },
  { id: "cokelat", label: "Cokelat" },
];
// Names verified against the official Ana menu linked from @anasaltbread's Linktree.
// Sprite indices correspond to the owner-supplied 3-column tray photograph.
// Prices transcribed from the owner-supplied menu sheets.
export const PRODUCTS = [
  {
    id: "original",
    name: "Original",
    category: "Signature",
    group: "signature",
    sprite: 11,
    description: "Salt bread original.",
    alt: "Salt bread Ana original tanpa topping",
    price: 13000,
  },
  {
    id: "sikaya",
    name: "Sikaya Butter",
    category: "Signature",
    group: "signature",
    sprite: 12,
    price: 20000,
    description: "Salt bread dengan srikaya dan butter.",
    alt: "Sikaya Butter Ana dengan isian srikaya dan butter",
  },
  {
    id: "cheddar",
    name: "Cheddar Supreme",
    category: "Keju",
    group: "keju",
    sprite: 10,
    description: "Salt bread dengan topping cheddar.",
    alt: "Cheddar Supreme Ana dengan saus keju kuning",
    price: 22000,
  },
  {
    id: "cream",
    name: "Mozza Melt",
    category: "Keju",
    group: "keju",
    sprite: 0,
    description: "Salt bread dengan isian keju.",
    alt: "Mozza Melt Ana dengan isian keju putih",
    price: 18000,
  },
  {
    id: "crunch",
    name: "Cruncheese",
    category: "Keju",
    group: "keju",
    sprite: 8,
    description: "Salt bread dengan topping keju renyah.",
    alt: "Cruncheese Ana dengan topping remah keju",
    price: 18000,
  },
  {
    id: "garlic",
    name: "Garlic & Cheese",
    category: "Keju",
    group: "keju",
    sprite: 3,
    description: "Salt bread garlic dan keju.",
    alt: "Garlic & Cheese Ana dengan isian putih dan taburan herbs",
    price: 20000,
  },
  {
    id: "corn",
    name: "Corn Supreme",
    category: "Keju",
    group: "keju",
    sprite: 13,
    price: 20000,
    description: "Salt bread dengan topping jagung dan keju.",
    alt: "Corn Supreme Ana dengan topping jagung dan keju",
  },
  {
    id: "abon",
    name: "Abon Signature",
    category: "Gurih",
    group: "gurih",
    sprite: 2,
    description: "Salt bread dengan topping abon.",
    alt: "Abon Signature Ana dengan topping abon berwarna terang",
    price: 18000,
  },
  {
    id: "spicy",
    name: "Spicy Abon Lava",
    category: "Gurih",
    group: "gurih",
    sprite: 5,
    description: "Salt bread dengan topping abon pedas.",
    alt: "Spicy Abon Lava Ana dengan topping abon berwarna jingga",
    price: 20000,
  },
  {
    id: "katsu",
    name: "Katsu Mentai Chicken",
    category: "Gurih",
    group: "gurih",
    sprite: 9,
    description: "Salt bread dengan chicken katsu dan mentai.",
    alt: "Katsu Mentai Chicken Ana dengan saus dan taburan nori",
    price: 22000,
  },
  {
    id: "savory",
    name: "Truffle Chicken",
    category: "Gurih",
    group: "gurih",
    sprite: 6,
    description: "Salt bread dengan topping truffle chicken.",
    alt: "Truffle Chicken Ana dengan saus dan taburan hijau",
    price: 22000,
  },
  {
    id: "chocolate",
    name: "Choco Bomb",
    category: "Cokelat",
    group: "cokelat",
    sprite: 4,
    description: "Salt bread berlapis cokelat dan chocolate chips.",
    alt: "Choco Bomb Ana dengan lapisan cokelat hitam dan chocolate chips",
    price: 22000,
  },
  {
    id: "ferrero",
    name: "Mr Ferrero",
    category: "Cokelat",
    group: "cokelat",
    sprite: 1,
    description: "Salt bread dengan lapisan cokelat dan taburan kacang.",
    alt: "Mr Ferrero Ana dengan cokelat dan taburan kacang",
    price: 22000,
  },
  {
    id: "pistachio",
    name: "Royal Pistachio Kunafa",
    category: "Cokelat",
    group: "cokelat",
    sprite: 7,
    description: "Salt bread cokelat dengan topping pistachio kunafa.",
    alt: "Royal Pistachio Kunafa Ana dengan topping hijau di atas lapisan cokelat",
    price: 28000,
  },
];
export const DRINK_SERIES = [
  {
    id: "coffee",
    title: "Coffee Series",
    items: [
      {
        name: "Peanut Butter Cream Latte",
        price: 25000,
      },
      {
        name: "Kopi Susu Harian",
        price: 17000,
      },
      {
        name: "Americano",
        price: 17000,
      },
      {
        name: "Ice Café Latte",
        price: 22000,
      },
      {
        name: "Ice Café Mocha",
        price: 24000,
      },
    ],
  },
  {
    id: "drink",
    title: "Drink Series",
    items: [
      {
        name: "Bloom Tea",
        price: 17000,
      },
      {
        name: "Bloom & Breeze",
        price: 17000,
      },
      {
        name: "Dark Cacao",
        price: 22000,
      },
      {
        name: "Kyoto Matcha",
        price: 24000,
      },
    ],
  },
  {
    id: "hot",
    title: "Hot Drink Series",
    items: [
      {
        name: "Grand Cacao",
        price: 27000,
      },
      {
        name: "Mocha",
        price: 24000,
      },
      {
        name: "Café Latte",
        price: 22000,
      },
    ],
  },
];
export function formatPrice(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
