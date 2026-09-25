// Social preview images (1200×630 PNG) for icon pages, drawn from the icon's
// own SVG with resvg. Used by scripts/build-icon-data.mjs for sites with
// ogImages. Fonts: Roboto (Apache License 2.0), in this folder.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const fontFiles = ["Roboto-Medium.ttf", "Roboto-Bold.ttf"].map((f) => fileURLToPath(new URL(f, import.meta.url)));

const escape = (s) => String(s).replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c]);

// Splits a long name over two lines.
function lines(name, max = 16) {
  if (name.length <= max) return [name];
  const words = name.split(" ");
  let first = "";
  while (words.length && (first + " " + words[0]).trim().length <= max) first = `${first} ${words.shift()}`.trim();
  return first ? [first, words.join(" ")] : [name];
}

function card({ name, category, body, site }) {
  const title = lines(name);
  const longest = Math.max(...title.map((l) => l.length));
  const size = longest > 18 ? 52 : longest > 12 ? 64 : 80;
  const titleY = title.length > 1 ? 250 : 290;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f8fafc"/>
  <rect x="80" y="115" width="400" height="400" rx="40" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <g transform="translate(130 165) scale(12.5)" fill="#1e293b">${body.replace(/fill="(currentColor|#212121)"/g, "")}</g>
  <text font-family="Roboto" font-weight="700" font-size="${size}" fill="#0f172a">
    ${title.map((l, i) => `<tspan x="540" y="${titleY + i * (size + 8)}">${escape(l)}</tspan>`).join("")}
  </text>
  <text x="540" y="${titleY + title.length * (size + 8) + 10}" font-family="Roboto" font-weight="500" font-size="34" fill="#475569">Material Icons &amp; Symbols${category ? ` · ${escape(category)}` : ""}</text>
  <text x="540" y="${titleY + title.length * (size + 8) + 60}" font-family="Roboto" font-weight="500" font-size="30" fill="#64748b">SVG · JSX · MUI · Flutter · Font</text>
  <text x="80" y="580" font-family="Roboto" font-weight="700" font-size="28" fill="#2563eb">${escape(site)}</text>
</svg>`;
}

// items: [{ slug, name, category, body }] (body: the 24×24 SVG's inner markup)
export function renderOgImages(items, outDir, site) {
  for (const item of items) {
    const png = new Resvg(card({ ...item, site }), {
      font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "Roboto" },
    })
      .render()
      .asPng();
    writeFileSync(new URL(`${item.slug}.png`, outDir), png);
  }
}
