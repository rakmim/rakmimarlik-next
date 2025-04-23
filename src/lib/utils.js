export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Turkish and special character replacements
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/û/g, "u")
    .replace(/é/g, "e")
    .replace(/à|ä|æ/g, "a")
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-")        // collapse whitespace and replace by -
    .replace(/-+/g, "-");        // collapse dashes
}
