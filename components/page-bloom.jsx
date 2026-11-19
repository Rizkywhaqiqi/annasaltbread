"use client";
import { usePathname } from "next/navigation";
import BloomScene from "@/components/bloom-scene";
export default function PageBloom() {
  const path = usePathname();
  return path === "/" ? null : <BloomScene key={path} className="page-bloom" />;
}
