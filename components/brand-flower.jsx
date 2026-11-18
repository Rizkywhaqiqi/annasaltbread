import Image from "next/image";
export default function BrandFlower({ className = "" }) {
  return (
    <Image
      className={"brand-flower " + className}
      src="/graphics/ana-flower.svg"
      width={150}
      height={150}
      alt=""
      aria-hidden="true"
      unoptimized
    />
  );
}
