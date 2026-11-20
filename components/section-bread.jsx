import Image from "next/image";
export default function SectionBread({
  variant = "cream",
  side = "left",
  className = "",
}) {
  return (
    <div
      className={"section-bread " + className}
      data-scroll-bread
      data-bread-side={side}
      aria-hidden="true"
    >
      <Image
        src={"/graphics/" + variant + "-cutout.png"}
        alt=""
        width={900}
        height={600}
        sizes="(max-width:720px) 120px,200px"
      />
    </div>
  );
}
