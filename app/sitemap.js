import { PAGES } from "@/lib/content";
export default function sitemap() {
  return PAGES.map((p) => ({
    url: "https://annasaltbread.vercel.app" + p.path,
  }));
}
