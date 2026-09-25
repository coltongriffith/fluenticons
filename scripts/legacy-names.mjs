// Names of each Material Symbol in the libraries built on the older Material
// Icons set, read from the libraries themselves so only real names are used:
//   mui          @mui/icons-material export, e.g. ArrowBack (plus Outlined,
//                Rounded and Sharp versions)
//   flutterIcon  Flutter's built-in Icons.<name>, e.g. arrow_back
// Symbols added after Material Icons have neither. Returns null for a library
// that couldn't be fetched, so callers keep the previous names.
const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1);

// Names starting with digits are spelled out, inconsistently: 3d_rotation is
// MUI ThreeDRotation and Flutter threed_rotation, 360 is ThreeSixty and
// threesixty, 20mp is MUI TwentyZeroMp. So each slug gives several candidate
// spellings (lists of words), and only ones the library exports are used.
const ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function numberSpellings(digits) {
  const n = Number(digits);
  const out = [];
  if (n < 20) out.push([ONES[n]]);
  else if (n < 100) {
    out.push([TENS[Math.floor(n / 10)], ...(n % 10 ? [ONES[n % 10]] : [])]);
    out.push([TENS[Math.floor(n / 10)], ONES[n % 10]]);
  }
  if (digits.length === 3) out.push([ONES[digits[0]], ...numberSpellings(digits.slice(1))[0]]);
  out.push([...digits].map((d) => ONES[d]));
  return out;
}
// [number words, remaining words] candidates for a slug.
function spellings(slug) {
  const m = slug.match(/^(\d+)(.*)$/);
  if (!m) return [[[], slug.split("_")]];
  const rest = m[2].split("_").filter(Boolean);
  return numberSpellings(m[1]).map((words) => [words, rest]);
}
const muiNames = (slug) => spellings(slug).map(([n, r]) => [...n, ...r].map(cap).join(""));
const flutterNames = (slug) =>
  spellings(slug).flatMap(([n, r]) =>
    n.length
      ? [[...n, ...r].join("_"), [n.join(""), ...r].join("_"), [n.join("") + (r[0] || ""), ...r.slice(1)].join("_")]
      : [r.join("_"), `${r.join("_")}_`]
  );

async function text(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.text();
}

export async function legacyNames(slugs) {
  let mui = null;
  try {
    const version = (await (await fetch("https://registry.npmjs.org/@mui/icons-material/latest")).json()).version;
    const exported = new Set(
      (await text(`https://cdn.jsdelivr.net/npm/@mui/icons-material@${version}/index.d.ts`)).match(/(?<=export const )\w+/g)
    );
    mui = new Map();
    for (const slug of slugs) {
      const name = muiNames(slug).find((n) => ["", "Outlined", "Rounded", "Sharp"].every((s) => exported.has(n + s)));
      if (name) mui.set(slug, name);
    }
    console.log(`MUI: @mui/icons-material ${version}, ${mui.size} names`);
  } catch (err) {
    console.warn(`MUI names not updated (keeping the previous ones): ${err.message}`);
  }
  let flutter = null;
  try {
    const source = await text(
      "https://raw.githubusercontent.com/flutter/flutter/stable/packages/flutter/lib/src/material/icons.dart"
    );
    const declared = new Set(source.match(/(?<=static const IconData )\w+/g));
    flutter = new Map();
    for (const slug of slugs) {
      // Dart keywords get a trailing underscore (Icons.class_).
      const name = flutterNames(slug).find(
        (n) => declared.has(n) && ["outlined", "rounded", "sharp"].every((s) => declared.has(`${n.replace(/_$/, "")}_${s}`))
      );
      if (name) flutter.set(slug, name);
    }
    console.log(`Flutter Icons: ${flutter.size} names`);
  } catch (err) {
    console.warn(`Flutter Icons names not updated (keeping the previous ones): ${err.message}`);
  }
  return { mui, flutter };
}
