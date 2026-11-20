// Explicit visitor choice wins over the OS default, including desktop reduced motion.
export function motionAllowed() {
  if (typeof window === "undefined") return false;
  const choice = document.documentElement.dataset.motion;
  if (choice === "on") return true;
  if (choice === "off") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
