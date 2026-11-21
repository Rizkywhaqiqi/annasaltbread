// Owner-supplied, publicly shared original Ana product photographs on Google Drive.
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
  ferrero: "1ol8zfD1m2tYUaqrxumZGrUEs1hHOyPLK",
});
// Alternate authentic shot from the corresponding product folder.
// Sikaya uses the earlier owner-supplied Srikaya photo collection.
// Ferrero has only one confirmed source image: no invented second product shot.
export const PRODUCT_SECOND_PHOTO_IDS = Object.freeze({
  original: "1oY4JiaVNr8c5AXCu0l5EThrK9gTqlkGB",
  sikaya: "1dTbKv_CHEikDmac5npDzgacaiJ1jfSS_",
  cheddar: "1ViI2vAQCWwOsGVdRg71of-wdJXQh4Ai5",
  cream: "1DoC9aEXDA1A5VPrBvnbzFCtRsAznvuSe",
  crunch: "1r_-unqGIfFH_bWI4Mj3RlSQ4WX9WxbIF",
  garlic: "1233CPBMQJ3TiBAqEEYD2xC-YgpmxFmj2",
  corn: "1eqSt7GvjZZ7HEVfUNq5Zp6_Z4OW_FaHy",
  abon: "1Lygyn6n5_UiW4QeM__HhN8b6hwYSsWJD",
  spicy: "1yEhCk3uyGp6JlYSuZqKXFyMac9AV0JH2",
  katsu: "1HFXHOZXnkxZjDMqiF7v_wBS09g5T-4hi",
  savory: "1Go3pCxvnquskUg5hEWz2f1fxCnBtNgYc",
  chocolate: "1i7431R53QjtLqpyYZJKg9cwVwhAc-AxM",
  pistachio: "1Kt8yMwtXcuf8wqGcLFpzYz8BKtdRh9x5"
});
export function productPhotoUrl(id, width = 1200, photo = 1) {
  const fileId = (photo === 2 ? PRODUCT_SECOND_PHOTO_IDS[id] : PRODUCT_PHOTO_IDS[id]) || PRODUCT_PHOTO_IDS[id];
  if (!fileId) return null;
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${width}`;
}
