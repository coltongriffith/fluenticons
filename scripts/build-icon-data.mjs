// Builds compact icon data from public/icons/*.svg so the app renders every icon
// from one JSON file per variant instead of thousands of generated components.
// Output: app/generated/icons-{filled,outlined}.json as [name, svgFileName, innerSvg, size?][]
// (size is only present when the icon is not 24x24)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const root = new URL("../", import.meta.url);
const outDir = new URL("app/generated/", root);
mkdirSync(outDir, { recursive: true });

const pascalize = (s) =>
  s.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");

function toIcon(file) {
  const svg = readFileSync(new URL(`public/icons/${file}`, root), "utf8");
  const match = svg.match(/^<svg[^>]*\bwidth="(\d+)"[^>]*>([\s\S]*)<\/svg>\s*$/);
  if (!match) throw new Error(`Unexpected SVG format: ${file}`);
  const size = Number(match[1]);
  const body = match[2].trim().replace(/fill="#212121"/g, 'fill="currentColor"');
  const name = pascalize(file.replace("ic_fluent_", "").split("_24")[0]);
  return size === 24 ? [name, file, body] : [name, file, body, size];
}

for (const variant of ["filled", "outlined"]) {
  const files = JSON.parse(readFileSync(new URL(`data/${variant}.json`, root)));
  const icons = files.map(toIcon);
  writeFileSync(new URL(`icons-${variant}.json`, outDir), JSON.stringify(icons));
  console.log(`icons-${variant}.json: ${icons.length} icons`);
}

// Small set of icons used by the site's own UI, bundled with the app shell.
const uiIcons = [
  "search_24_filled",
  "position_backward_24_filled",
  "weather_sunny_24_regular",
  "weather_moon_24_regular",
  "heart_24_regular",
  "heart_24_filled",
  "copy_24_regular",
  "arrow_download_24_regular",
  "folder_24_regular",
  "chevron_down_24_regular",
  "balloon_24_regular",
  "sticker_24_regular",
];
const ui = Object.fromEntries(
  uiIcons.map((key) => [key, toIcon(`ic_fluent_${key}.svg`)[2]])
);
writeFileSync(new URL("ui-icons.json", outDir), JSON.stringify(ui));
