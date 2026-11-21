// Owner-supplied, publicly shared Ana product photographs on Google Drive.
// Google's thumbnail endpoint serves resized images to avoid shipping the full
// 6–10 MB originals to each site visitor. Unsupported products keep sprites.
export const PRODUCT_PHOTO_IDS = Object.freeze({
  original: "1s7sSz_8D-PtpFjDrARcMN-2jSg2Od-U7",
  sikaya: "1KZCWh2sXgnjl02sGVbDOL4_6EF2Y-QoP",
  cheddar: "14ym9Wa_nyGss-Y65NaOfWZRpEBOqIKrR",
  cream: "1iAwAX6IjxCTCJwiJcQWbJUfkgLTVJRhp",
  garlic: "1cHv2tvi_k_rmzmf9rYUYtGEdYhsP5TWo",
  crunch: "16ybcfUBFvHkcLVQmwgKYfkl8SF5kT17s",
  corn: "1KC1OxCF-L1W5U8W0qPmLMDo6Bz8sWN0S",
  abon: "1lwZQXHoG6nBlIh0RgYiE4zM2di_NiHtg",
  spicy: "1y8y-aPQXDeVEup9jeyM_Of1ouBKb4HXj",
  katsu: "10Sko-O4HhI4kAZtAHiKY5hhl9SDw6JPU",
  savory: "1p-9SnBBul4ZIGMxLguckz7aGbHqoZlIr",
  chocolate: "1zeSf0tG4mt0KEHLfyx4ReruS_tlozYPP",
  pistachio: "1zWShAFb3wXP_84OHDu1IBXkOuBLL0o-Q",
});
export function productPhotoUrl(id, width = 1200) {
  const fileId = PRODUCT_PHOTO_IDS[id];
  if (!fileId) return null;
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${width}`;
}
