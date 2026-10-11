// The "about this icon" text on icon pages: two or three sentences built from
// the icon's own data (its tags, category, similar icons, popularity and the
// matching icon on the other site), so no two pages read the same. Used by
// build-icon-data.mjs.

// Tags too generic to say anything about an icon.
const STOP = new Set([
  "ui actions", "site", "graphic", "symbol", "symbols", "icon", "icons", "simple", "media", "mode", "type",
  "action", "actions", "other", "outlined", "rounded", "sharp", "google", "material", "android", "letters",
  "character", "font", "alphabet", "glyph", "shape", "button", "app", "application", "ui",
]);

const list = (items) =>
  items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
}

// Microsoft's design note, first sentence only (some carry asides), phrased
// as Microsoft's guidance: "Used in calendar scenarios." -> "Microsoft uses
// it in calendar scenarios."
function microsoftNote(description) {
  const first = (description || "").replace(/\.(?=[A-Z])/g, ". ").split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!first || /[?!]/.test(first)) return "";
  const m = first.match(/^Used (to|in|for|as|when|with)\b\s*(.*)$/i);
  if (m) return `Microsoft uses it ${m[1].toLowerCase()} ${m[2].replace(/\.$/, "")}.`;
  return `Microsoft's design note: “${first.replace(/\.$/, "")}.”`;
}

// Tags that say something about this icon: not its name, category or a stop
// word, rarest first (most specific), at most three.
function telling(icon, rarity) {
  const skip = new Set([...icon.name.toLowerCase().split(/\s+/), icon.category?.toLowerCase()]);
  return [...new Set(icon.keywords)]
    .filter((k) => !STOP.has(k) && !skip.has(k) && !k.split(" ").every((w) => skip.has(w)))
    .sort((a, b) => rarity(`k:${b}`) - rarity(`k:${a}`))
    .slice(0, 3);
}

// { icon, kind: "fluent" | "material", similar: [names], twin, rank, total, rarity }
export function usageText({ icon, kind, similar, twin, rank, total, rarity }) {
  const tags = telling(icon, rarity);
  const sentences = [];
  const sim = list(similar.slice(0, 3));
  if (kind === "material") {
    const code = icon.slug;
    if (tags.length) sentences.push(`Google tags ${code} with ${list(tags)}.`);
    if (sim) sentences.push(`${icon.category ? `It's in Google's ${icon.category} category; similar` : "Similar"} symbols include ${sim}.`);
    if (rank && rank <= 500) sentences.push(`It's the ${ordinal(rank)} most used of Google's ${total.toLocaleString("en-US")} Material Symbols.`);
    else if (icon.mui) sentences.push(`MUI ships it as ${icon.mui}Icon${twin ? `, and Fluent's closest match is ${twin.name}` : ""}.`);
    else if (twin) sentences.push(`Microsoft's Fluent set has a matching ${twin.name} icon.`);
  } else {
    const note = microsoftNote(icon.description);
    if (note) sentences.push(note);
    if (tags.length) sentences.push(`The ${icon.name} icon is tagged ${list(tags)}.`);
    if (sim) sentences.push(`Similar Fluent icons include ${sim}.`);
    if (twin) sentences.push(`Google's Material Symbols version is ${twin.slug}.`);
    if (sentences.length < 2) sentences.unshift(`${icon.name} is one of Microsoft's Fluent UI System Icons.`);
  }
  return sentences.slice(0, 3).join(" ");
}
