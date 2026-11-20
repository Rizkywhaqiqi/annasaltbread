export default function BreadCutout({ index, alt = "", className = "" }) {
  const extra = index >= 12;
  return (
    <span
      className={
        "bread-cutout " + (extra ? "bread-cutout-extra " : "") + className
      }
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      style={{
        backgroundPosition: extra
          ? `${(index - 12) * 100}% 50%`
          : `${(index % 3) * 50}% ${[3.414, 34.142, 64.241, 95.238][Math.floor(index / 3)]}%`,
      }}
    />
  );
}
