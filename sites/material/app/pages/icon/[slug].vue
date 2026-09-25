<template>
  <div v-if="icon" class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <template v-for="crumb in crumbs.slice(0, -1)" :key="crumb.path">
        <NuxtLink :to="crumb.path" class="hover:underline">{{ crumb.name }}</NuxtLink>
        <span class="mx-2">/</span>
      </template>
      <span>{{ icon.name }}</span>
    </nav>

    <h1 class="text-3xl sm:text-4xl font-bold mb-4">{{ icon.name }} icon</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
      {{ intro }}
    </p>

    <div class="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl">
      <div v-for="card in cards" :key="card.key" class="rounded-lg border dark:border-gray-700 overflow-hidden">
        <div class="dots-pattern-background bg-white dark:bg-gray-800 h-48 flex-center">
          <svg
            :width="card.svg.size"
            :height="card.svg.size"
            :viewBox="`0 0 ${card.svg.size} ${card.svg.size}`"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-24 w-24"
            role="img"
            :aria-label="`${icon.name} ${card.label}`"
            v-html="card.svg.body"
          />
        </div>
        <div class="p-4 border-t dark:border-gray-700">
          <p class="font-medium mb-3">{{ card.label }}</p>
          <div class="flex flex-wrap gap-2 text-sm">
            <a
              :href="`/icons/${card.svg.file}`"
              :download="card.svg.file"
              class="navbar-btn"
              @click="trackVariant('download_icon', 'svg', 'outlined', card.fill, 400)"
            >
              <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>SVG</span>
            </a>
            <button class="navbar-btn" @click="downloadPng(`/icons/${card.svg.file}`, card.svg.file, 'outlined', card.fill, 400)">
              <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>PNG</span>
            </button>
            <button class="navbar-btn" @click="copySvg(`/icons/${card.svg.file}`, 'outlined', card.fill, 400)">
              <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Copy SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <SponsorSlot variant="inline" placement="icon_page" class="mb-12 max-w-3xl" />

    <section id="styles" class="mb-12 max-w-5xl">
      <h2 class="text-2xl font-bold mb-2">Every style, fill and weight</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
        Material Symbols are variable: each icon comes in three styles, with or without fill, at
        seven weights. Pick a combination to preview it, download it, or copy the code for your
        platform.
      </p>

      <div class="flex flex-wrap gap-2 mb-3" role="group" aria-label="Style">
        <button
          v-for="s in STYLES"
          :key="s.key"
          class="rounded-full border dark:border-gray-700 px-4 py-1.5 text-sm"
          :class="s.key === activeStyle ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="s.key === activeStyle"
          @click="pick({ style: s.key })"
        >
          {{ s.label }}
        </button>
        <span class="mx-1 border-l dark:border-gray-700"></span>
        <button
          v-for="f in [0, 1]"
          :key="f"
          class="rounded-full border dark:border-gray-700 px-4 py-1.5 text-sm"
          :class="f === activeFill ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="f === activeFill"
          @click="pick({ fill: f })"
        >
          {{ f ? "Filled" : "Unfilled" }}
        </button>
      </div>
      <div class="flex flex-wrap gap-2 mb-6" role="group" aria-label="Weight">
        <button
          v-for="w in WEIGHTS"
          :key="w"
          class="min-w-[3rem] rounded-lg border dark:border-gray-700 px-3 py-1.5 text-sm"
          :class="w === activeWeight ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="w === activeWeight"
          @click="pick({ weight: w })"
        >
          {{ w }}
        </button>
      </div>
      <div class="flex flex-wrap items-center gap-2 mb-6 text-sm" role="group" aria-label="Grade and optical size">
        <span class="text-gray-500 mr-1">Grade</span>
        <button
          v-for="g in GRADES"
          :key="g"
          class="min-w-[3rem] rounded-lg border dark:border-gray-700 px-3 py-1.5"
          :class="g === activeGrade ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="g === activeGrade"
          @click="pick({ grade: g })"
        >
          {{ g }}
        </button>
        <span class="text-gray-500 ml-3 mr-1">Optical size</span>
        <button
          v-for="o in OPTICAL_SIZES"
          :key="o"
          class="min-w-[3rem] rounded-lg border dark:border-gray-700 px-3 py-1.5"
          :class="o === activeOpsz ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="o === activeOpsz"
          @click="pick({ opsz: o })"
        >
          {{ o }}
        </button>
      </div>

      <div class="grid md:grid-cols-[16rem_1fr] gap-6">
        <div class="rounded-lg border dark:border-gray-700 overflow-hidden self-start">
          <div class="dots-pattern-background bg-white dark:bg-gray-800 h-48 flex-center gap-8">
            <p v-if="previewFailed" class="text-sm text-gray-500 px-4 text-center">Preview unavailable right now.</p>
            <template v-else>
              <IconMask :src="activeSrc" style="width: 24px; height: 24px" />
              <IconMask :src="activeSrc" class="h-24 w-24" />
            </template>
            <span
              v-if="fontReady"
              :class="`material-symbols-${activeStyle}`"
              class="select-none"
              :style="{ fontSize: '96px', fontVariationSettings: fontSettings }"
              :title="`Variable font: ${fontSettings}`"
              aria-hidden="true"
              >{{ slug }}</span
            >
          </div>
          <div class="p-4 border-t dark:border-gray-700">
            <p class="font-medium mb-1">{{ activeLabel }}</p>
            <p class="text-xs text-gray-500 mb-3 break-all"><code>{{ activeFile }}</code></p>
            <div class="flex flex-wrap gap-2 text-sm">
              <button class="navbar-btn" @click="downloadSvg(activeSrc, activeFile)">
                <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>SVG</span>
              </button>
              <button class="navbar-btn" @click="downloadPng(activeSrc, activeFile)">
                <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>PNG</span>
              </button>
              <button class="navbar-btn" @click="copySvg(activeSrc)">
                <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Copy SVG</span>
              </button>
              <button class="navbar-btn" @click="copyPowerApps(activeSrc)">
                <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Power Apps</span>
              </button>
            </div>
          </div>
        </div>

        <div class="min-w-0">
          <div class="flex flex-wrap gap-1 border-b dark:border-gray-700 mb-3" role="tablist" aria-label="Platform">
            <button
              v-for="tab in codeTabs"
              :key="tab.key"
              role="tab"
              class="px-3 py-2 text-sm -mb-px border-b-2"
              :class="tab.key === activeTab.key ? 'border-blue-600 font-semibold' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'"
              :aria-selected="tab.key === activeTab.key"
              @click="pickTab(tab.key)"
            >
              {{ tab.label }}
            </button>
          </div>
          <div v-for="tab in codeTabs" v-show="tab.key === activeTab.key" :key="tab.key" role="tabpanel">
            <h3 class="sr-only">{{ icon.name }} icon in {{ tab.label }}</h3>
            <p v-if="tab.note" class="text-sm text-gray-600 dark:text-gray-300 mb-2">{{ tab.note }}</p>
            <div class="relative">
              <pre class="rounded-lg bg-gray-900 text-gray-100 text-sm p-4 overflow-x-auto"><code>{{ tab.code }}</code></pre>
              <button
                class="absolute top-2 right-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 disabled:opacity-40"
                :disabled="tab.disabled"
                @click="tab.key === 'powerapps' ? copyPowerApps(activeSrc, true) : copyText(tab.code, tab.label, tab.key)"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="prose dark:prose-invert max-w-3xl">
      <h2>Details</h2>
      <table>
        <tbody>
          <tr><th>Name</th><td>{{ icon.name }}</td></tr>
          <tr><th>Ligature</th><td><code>{{ slug }}</code></td></tr>
          <tr v-if="details.codepoint"><th>Code point</th><td><code>U+{{ details.codepoint.toString(16).toUpperCase() }}</code></td></tr>
          <tr v-if="details.category">
            <th>Category</th>
            <td>
              <NuxtLink v-if="category" :to="category.path">{{ details.category }}</NuxtLink>
              <span v-else>{{ details.category }}</span>
            </td>
          </tr>
          <tr><th>Styles</th><td>Outlined, Rounded, Sharp — each unfilled or filled</td></tr>
          <tr><th>Weights</th><td>100, 200, 300, 400, 500, 600, 700</td></tr>
          <tr>
            <th>Files</th>
            <td><code>@material-symbols/svg-400/outlined/{{ slug }}.svg</code>, <code>{{ slug }}-fill.svg</code></td>
          </tr>
          <tr v-if="details.flutter"><th>Flutter</th><td><code>Symbols.{{ details.flutter }}</code><template v-if="details.flutterIcon"> (Material Icons: <code>Icons.{{ details.flutterIcon }}</code>)</template></td></tr>
          <tr v-if="details.mui"><th>MUI</th><td><code>@mui/icons-material/{{ details.mui }}</code></td></tr>
          <tr><th>License</th><td><NuxtLink to="/license/">Apache License 2.0</NuxtLink> (© Google LLC)</td></tr>
        </tbody>
      </table>

      <template v-if="keywords.length">
        <h2>Keywords</h2>
        <p class="not-prose flex flex-wrap gap-2">
          <template v-for="keyword in keywords" :key="keyword.name">
            <NuxtLink
              v-if="keyword.path"
              :to="keyword.path"
              class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {{ keyword.name }}
            </NuxtLink>
            <NuxtLink
              v-else
              :to="{ path: '/', query: { q: keyword.name } }"
              class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
              rel="nofollow"
            >
              {{ keyword.name }}
            </NuxtLink>
          </template>
        </p>
      </template>
    </div>

    <section v-if="related.length" class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Related icons</h2>
      <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        <NuxtLink
          v-for="item in related"
          :key="item.slug"
          :to="slugToPath(item.slug)"
          class="rounded-lg border dark:border-gray-700 p-4 flex flex-col items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask :file="item.file" class="h-8 w-8" />
          <span class="text-xs text-center truncate w-full">{{ item.name }}</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { saveAs } from "file-saver";
import categoryNames from "~/generated/category-names.json";

const STYLES = [
  { key: "outlined", label: "Outlined", font: "Outlined" },
  { key: "rounded", label: "Rounded", font: "Rounded" },
  { key: "sharp", label: "Sharp", font: "Sharp" },
];
const WEIGHTS = [100, 200, 300, 400, 500, 600, 700];
// Two more axes of the variable font (no SVG files exist for them).
const GRADES = [-25, 0, 200];
const OPTICAL_SIZES = [20, 24, 40, 48];
// Same slugs as scripts/build-icon-data.mjs.
const categorySlug = (name) =>
  name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const route = useRoute();
const slug = pathToSlug(route.params.slug);
const toast = useToast();

const { data } = await useAsyncData(`icon-${slug}`, async () => {
  const index = await loadIndex();
  const rank = index.findIndex((e) => e.slug === slug);
  if (rank < 0) return null;
  const entry = index[rank];
  const [details, tags] = await Promise.all([loadIconDetails(slug), loadTags()]);
  const related = (details.related || [])
    .map((s) => index.find((e) => e.slug === s))
    .filter(Boolean)
    .map((e) => ({ slug: e.slug, name: e.name, file: e.regular || e.filled }));
  // Keywords link to their category or topic page, if there is one.
  const pathOf = (name) => {
    if (categoryNames[categorySlug(name)]) return `/category/${categorySlug(name)}/`;
    const tag = name.replace(/\s+/g, "-");
    return tags[tag] ? `/tag/${tag}/` : null;
  };
  const keywords = entry.keywords.map((name) => ({ name, path: pathOf(name) }));
  const cat = details.category && categoryNames[categorySlug(details.category)] && { name: categoryNames[categorySlug(details.category)] };
  const { search, ...icon } = entry;
  return {
    icon,
    rank: rank + 1,
    details,
    related,
    keywords,
    category: cat ? { name: cat.name, path: `/category/${categorySlug(details.category)}/` } : null,
  };
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Icon not found", fatal: true });
}

const icon = computed(() => data.value.icon);
const details = computed(() => data.value.details);
const related = computed(() => data.value.related);
const keywords = computed(() => data.value.keywords || []);
const category = computed(() => data.value.category);
const letter = computed(() => letterOf(icon.value.name));
// Icons / <category> / this icon, or Icons / Browse / <letter> without a category page.
const crumbs = computed(() => [
  { name: "Icons", path: "/" },
  ...(category.value
    ? [{ name: category.value.name, path: category.value.path }]
    : [
        { name: "Browse", path: "/browse/" },
        { name: letter.value.toUpperCase(), path: `/browse/${letter.value}/` },
      ]),
  { name: `${icon.value.name} icon` },
]);

const cards = computed(() =>
  [
    { key: "regular", label: "Outlined", fill: 0 },
    { key: "filled", label: "Outlined, filled", fill: 1 },
  ]
    .filter((c) => details.value[c.key])
    .map((c) => ({ ...c, svg: details.value[c.key] }))
);

// ---- Style, fill and weight explorer ---------------------------------------
const activeStyle = ref("outlined");
const activeFill = ref(0);
const activeWeight = ref(400);
const activeGrade = ref(0);
const activeOpsz = ref(24);
const codeTab = ref("html");
const previewFailed = ref(false);

const fileFor = (fill) => `${slug}${fill ? "-fill" : ""}.svg`;
const cdnUrl = (style, fill, weight) =>
  `https://cdn.jsdelivr.net/npm/@material-symbols/svg-${weight}@${stats.version}/${style}/${fileFor(fill)}`;
// The site's own copy for Outlined 400; everything else from the pinned package.
const activeSrc = computed(() =>
  activeStyle.value === "outlined" && activeWeight.value === 400
    ? `/icons/${fileFor(activeFill.value)}`
    : cdnUrl(activeStyle.value, activeFill.value, activeWeight.value)
);
const activeFile = computed(
  () => `${slug}_${activeStyle.value}_fill${activeFill.value}_wght${activeWeight.value}.svg`
);
const activeLabel = computed(
  () =>
    `${STYLES.find((s) => s.key === activeStyle.value).label}, ${activeFill.value ? "filled" : "unfilled"}, weight ${activeWeight.value}`
);

function pick(change) {
  if (change.style) activeStyle.value = change.style;
  if (change.fill !== undefined) activeFill.value = change.fill;
  if (change.weight) activeWeight.value = change.weight;
  if (change.grade !== undefined) activeGrade.value = change.grade;
  if (change.opsz) activeOpsz.value = change.opsz;
  if (change.grade !== undefined || change.opsz) loadFont();
  track("select_variant", {
    icon: slug,
    style: activeStyle.value,
    fill: activeFill.value,
    weight: activeWeight.value,
    grade: activeGrade.value,
    opsz: activeOpsz.value,
  });
}

// ---- Variable font preview ----------------------------------------------------
// Grade and optical size only exist in the font, so the preview adds the icon
// drawn with the font (Google Fonts, just this icon: about 2 KB per style),
// loaded once the explorer scrolls into view.
const fontSettings = computed(
  () => `"FILL" ${activeFill.value}, "wght" ${activeWeight.value}, "GRAD" ${activeGrade.value}, "opsz" ${activeOpsz.value}`
);
const fontReady = ref(false);
let fontRequested = false;
function loadFont() {
  if (fontRequested || !import.meta.client) return;
  fontRequested = true;
  const axes = "opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${STYLES.map((s) => `family=Material+Symbols+${s.font}:${axes}`).join("&")}&icon_names=${slug}&display=block`;
  link.onload = () =>
    Promise.all(STYLES.map((s) => document.fonts.load(`24px "Material Symbols ${s.font}"`, slug)))
      .then(() => (fontReady.value = true))
      .catch(() => {});
  document.head.appendChild(link);
}
onMounted(() => {
  const section = document.getElementById("styles");
  if (!section || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      loadFont();
      observer.disconnect();
    }
  });
  observer.observe(section);
  onBeforeUnmount(() => observer.disconnect());
});

function pickTab(key) {
  codeTab.value = key;
  track("code_tab", { icon: slug, platform: key });
}

// The selected variant's markup, for the Android tab. Starts from the local
// Outlined file and follows the selection once the page is interactive.
const localSvg = (body) =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${body.replace(/fill="currentColor"/g, 'fill="#212121"')}</svg>`;
const activeSvgText = ref(details.value.regular ? localSvg(details.value.regular.body) : "");

// CSS masks give no load error, so check the file with an Image to show
// "Preview unavailable" when the CDN can't be reached.
if (import.meta.client) {
  watch(activeSrc, async (src) => {
    previewFailed.value = false;
    // Never show (or copy) the previous variant's code while this one loads.
    activeSvgText.value = "";
    const probe = new Image();
    probe.onerror = () => {
      if (activeSrc.value === src) previewFailed.value = true;
    };
    probe.src = src;
    try {
      const svg = await getSvg(src);
      if (activeSrc.value === src) activeSvgText.value = svg;
    } catch {}
  });
}

// Android resource names can't start with a digit (e.g. 10k).
const androidName = `ic_${slug}`;

// MUI and Flutter's Icons use the older Material Icons set: Outlined is the
// unfilled style, and the plain, Rounded and Sharp versions are filled.
function legacyName(base, style, fill, sep = "") {
  if (style === "outlined") return fill ? base : `${base}${sep}${sep ? "outlined" : "Outlined"}`;
  return `${base}${sep}${sep ? style : style.charAt(0).toUpperCase() + style.slice(1)}`;
}

function muiTab(style, fill) {
  const name = legacyName(details.value.mui, style, fill);
  return {
    key: "mui",
    label: "MUI",
    note: "The @mui/icons-material component (from the older Material Icons set, so no weight or grade):",
    code: `npm install @mui/icons-material @mui/material @emotion/react @emotion/styled

import ${name}Icon from "@mui/icons-material/${name}";

<${name}Icon />`,
  };
}

// Android VectorDrawable from an SVG with one or more paths.
function vectorDrawable(svg) {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1].split(/[\s,]+/).map(Number) || [0, 0, 24, 24];
  const [minX, minY, w, h] = viewBox;
  const paths = [...svg.matchAll(/<path[^>]*\sd="([^"]+)"/g)].map(
    (m) => `        <path android:fillColor="@android:color/white" android:pathData="${m[1]}" />`
  );
  const translate = [minX && `android:translateX="${-minX}"`, minY && `android:translateY="${-minY}"`].filter(Boolean);
  const shift = translate.length ? `    <group ${translate.join(" ")}>\n` : "";
  return `<!-- res/drawable/${androidName}.xml -->
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="${w}"
    android:viewportHeight="${h}"
    android:tint="?attr/colorControlNormal">
${shift}${paths.join("\n")}
${shift ? "    </group>\n" : ""}</vector>`;
}

const codeTabs = computed(() => {
  const style = STYLES.find((s) => s.key === activeStyle.value);
  const fill = activeFill.value;
  const weight = activeWeight.value;
  const cls = `material-symbols-${style.key}`;
  const custom = fill !== 0 || weight !== 400 || activeGrade.value !== 0 || activeOpsz.value !== 24;
  const settings = fontSettings.value;
  const font = `https://fonts.googleapis.com/css2?family=Material+Symbols+${style.font}:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${slug}`;
  const component = `${pascalName(slug)}Icon`.replace(/^(\d)/, "Icon$1");
  const packagePath = `@material-symbols/svg-${weight}/${style.key}/${fileFor(fill)}`;
  const tabs = [
    {
      key: "html",
      label: "HTML",
      note: "Load the Material Symbols font from Google Fonts (this link loads just this icon), then use the icon's name as text.",
      code: `<link rel="stylesheet" href="${font}" />

<span class="${cls}">${slug}</span>${
        custom
          ? `

<style>
  .${cls} {
    font-variation-settings: ${settings};
  }
</style>`
          : ""
      }`,
    },
    {
      key: "react",
      label: "React",
      code: `// With the font from the HTML tab:
export function ${component}() {
  return (
    <span className="${cls}"${custom ? ` style={{ fontVariationSettings: '${settings}' }}` : ""}>
      ${slug}
    </span>
  );
}

// Or as an SVG component (Vite + vite-plugin-svgr) instead:
//   npm install @material-symbols/svg-${weight}
//   import ${component} from "${packagePath}?react";`,
    },
    ...(details.value.mui ? [muiTab(style.key, fill)] : []),
    {
      key: "vue",
      label: "Vue",
      code: `<!-- With the font from the HTML tab -->
<template>
  <span class="${cls}"${custom ? ` style="font-variation-settings: ${settings.replace(/"/g, "'")}"` : ""}>${slug}</span>
</template>

<!-- Or as an SVG component (Vite + vite-svg-loader):
     npm install @material-symbols/svg-${weight}
     import ${component} from "${packagePath}?component"; -->`,
    },
    {
      key: "angular",
      label: "Angular",
      note: "With Angular Material and the font from the HTML tab:",
      code: `<mat-icon fontSet="${cls}">${slug}</mat-icon>${
        custom
          ? `

/* styles.css */
.${cls} {
  font-variation-settings: ${settings};
}`
          : ""
      }`,
    },
  ];
  // Flutter's Icons: the filled version keeps Dart's trailing underscore (Icons.class_).
  const fi = details.value.flutterIcon;
  const builtIn = fi && (style.key === "outlined" && fill ? fi : legacyName(fi.replace(/_$/, ""), style.key, fill, "_"));
  const flutterIcons = builtIn && `// Or Flutter's built-in Material Icons (the older designs, no fill or weight):
Icon(Icons.${builtIn})`;
  if (details.value.flutter) {
    const name = `${details.value.flutter}${style.key === "outlined" ? "" : `_${style.key}`}`;
    tabs.push({
      key: "flutter",
      label: "Flutter",
      note: "Uses the community material_symbols_icons package.",
      code: `flutter pub add material_symbols_icons

import 'package:material_symbols_icons/symbols.dart';

Icon(Symbols.${name}, fill: ${fill}, weight: ${weight}, grade: ${activeGrade.value}, opticalSize: ${activeOpsz.value})${
        flutterIcons ? `\n\n${flutterIcons}` : ""
      }`,
    });
  } else if (flutterIcons) {
    tabs.push({ key: "flutter", label: "Flutter", code: flutterIcons.replace(/^\/\/ Or /, "// ") });
  }
  tabs.push(
    {
      key: "android",
      label: "Android",
      note: "A vector drawable of the selected style, fill and weight, for XML layouts and Jetpack Compose:",
      code: activeSvgText.value
        ? `${vectorDrawable(activeSvgText.value)}

// Jetpack Compose
Icon(painterResource(R.drawable.${androidName}), contentDescription = "${icon.value.name}")`
        : previewFailed.value
          ? "This variant couldn't be loaded right now."
          : "Loading the selected variant…",
      disabled: !activeSvgText.value,
    },
    {
      key: "svg",
      label: "SVG",
      code: `npm install @material-symbols/svg-${weight}

import icon from "${packagePath}";

<!-- or load it from a CDN -->
<img src="${cdnUrl(style.key, fill, weight)}" width="24" height="24" alt="${icon.value.name}">`,
    },
    {
      key: "powerapps",
      label: "Power Apps",
      note: "Paste into an Image control's Image property. The Copy button copies the full formula with this icon's SVG.",
      code: `"data:image/svg+xml;utf8, " & EncodeUrl("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>…</svg>")`,
    }
  );
  return tabs;
});
const activeTab = computed(() => codeTabs.value.find((t) => t.key === codeTab.value) || codeTabs.value[0]);

// ---- Copy and download ------------------------------------------------------
function trackVariant(name, format, style = activeStyle.value, fill = activeFill.value, weight = activeWeight.value) {
  track(name, { icon: slug, format, source: "icon_page", style, fill, weight });
}

async function copyText(text, label, platform) {
  try {
    await navigator.clipboard.writeText(text);
    toast.show(`Copied ${label} code`, "info", { promo: true });
    track("copy_code", { icon: slug, platform });
  } catch (err) {
    toast.error(err.message);
  }
}

async function copySvg(src, ...variant) {
  try {
    await navigator.clipboard.writeText(await getSvg(src));
    toast.show("Copied SVG", "info", { promo: true });
    trackVariant("copy_icon", "svg", ...variant);
  } catch (err) {
    toast.error(err.message);
  }
}

async function copyPowerApps(src, fromTab = false) {
  try {
    await navigator.clipboard.writeText(svgToPowerApps(await getSvg(src)));
    toast.show("Copied Power Apps formula", "info", { promo: true });
    if (fromTab) track("copy_code", { icon: slug, platform: "powerapps" });
    else trackVariant("copy_icon", "powerapps");
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadSvg(src, name) {
  try {
    saveAs(new Blob([await getSvg(src)], { type: "image/svg+xml;charset=utf-8" }), name);
    trackVariant("download_icon", "svg");
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadPng(src, name, ...variant) {
  try {
    const blob = await svgToImage({ svg: await getSvg(src), width: 512, height: 512, outputFormat: "blob" });
    saveAs(blob, name.replace(".svg", ".png"));
    trackVariant("download_icon", "png", ...variant);
  } catch (err) {
    toast.error(err.message);
  }
}

// ---- Copy for search engines -------------------------------------------------
const intro = computed(() => {
  const name = icon.value.name;
  const category = details.value.category ? ` from the ${details.value.category} category` : "";
  const popular =
    data.value.rank <= 100
      ? ` It's one of the 100 most used Material Symbols.`
      : data.value.rank <= 500
        ? ` It's one of the 500 most used Material Symbols.`
        : "";
  return `${name} is a Google Material Symbol${category}.${popular} It comes in outlined, rounded and sharp styles, filled or unfilled, at seven weights from 100 to 700. Download it as SVG or PNG, or copy code for HTML, React, Vue, Angular, Flutter and Android — it's free to use under the Apache License 2.0.`;
});

const name = icon.value.name;
// A unique description from the icon's name, category and first few keywords
// (ones that don't repeat the name or category), kept under 160 characters.
function describe() {
  const cat = details.value.category;
  const skip = new Set([...name.toLowerCase().split(" "), cat?.toLowerCase()]);
  const tags = icon.value.keywords.filter((k) => !skip.has(k) && !k.split(" ").every((w) => skip.has(w)));
  const head = `${name} icon${cat ? ` (${cat})` : ""} from Google's Material Symbols`;
  for (const tail of [" Free SVG, PNG, JSX, MUI, Flutter and font code.", " Free SVG, PNG and code."]) {
    for (let n = Math.min(4, tags.length); n >= 0; n--) {
      const text = `${head}${n ? `: ${tags.slice(0, n).join(", ")}.` : "."}${tail}`;
      if (text.length <= 160) return text;
    }
  }
  return `${head}.`;
}
useSeo({
  fullTitle: `${name} Icon — Material Icons & Symbols (SVG, JSX, Font)`,
  description: describe(),
  path: slugToPath(slug).replace(/\/$/, ""),
  image: details.value.og ? `/og/${slug}.png` : undefined,
});
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.value.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    ...(c.path && { item: `${SITE_URL}${c.path}` }),
  })),
});
if (details.value.regular) {
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `${name} icon`,
    description: intro.value,
    contentUrl: `${SITE_URL}/icons/${details.value.regular.file}`,
    encodingFormat: "image/svg+xml",
    width: 24,
    height: 24,
    license: `${SITE_URL}/license/`,
    acquireLicensePage: `${SITE_URL}/license/`,
    creditText: "Google Material Symbols",
    copyrightNotice: "© Google LLC",
    creator: { "@type": "Organization", name: "Google" },
  });
}
</script>
