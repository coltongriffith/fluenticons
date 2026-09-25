// Names of each Material Symbol in the libraries built on the older Material
// Icons set, read from the libraries themselves so only real names are used:
//   mui          @mui/icons-material export, e.g. ArrowBack (plus Outlined,
//                Rounded and Sharp versions)
//   flutterIcon  Flutter's built-in Icons.<name>, e.g. arrow_back
// Symbols added after Material Icons have neither. Returns null for a library
// that couldn't be fetched, so callers keep the previous names.
const pascal = (slug) => slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");

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
      const name = pascal(slug);
      if (["", "Outlined", "Rounded", "Sharp"].every((s) => exported.has(name + s))) mui.set(slug, name);
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
      const name = [slug, `${slug}_`].find(
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
