<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>Material Symbols</span>
    </nav>
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Material Symbols</h1>
      <p>
        Google's current Material Design icons: {{ roughCount(stats.designs) }} icons in one
        variable font, with fill, weight, grade and optical size as settings. The successor to
        Material Icons, free under the Apache License 2.0.
      </p>
    </div>

    <!-- Live preview -->
    <section id="preview" class="my-10 max-w-5xl" aria-labelledby="preview-heading">
      <h2 id="preview-heading" class="text-2xl font-bold mb-4">Preview</h2>
      <div class="grid lg:grid-cols-[1fr_22rem] gap-6">
        <div class="rounded-lg border dark:border-gray-700 overflow-hidden">
          <div class="dots-pattern-background bg-white dark:bg-gray-800 p-6 grid grid-cols-4 sm:grid-cols-8 gap-6 place-items-center min-h-[10rem]">
            <template v-for="name in DEMO" :key="name">
              <span
                v-if="fontReady"
                :class="`material-symbols-${style}`"
                class="select-none"
                :style="{ fontSize: '48px', fontVariationSettings: settings }"
                :title="name"
                >{{ name }}</span
              >
              <IconMask v-else :file="`${name}.svg`" class="h-12 w-12" />
            </template>
          </div>
          <p class="px-4 py-2 border-t dark:border-gray-700 text-xs text-gray-500">
            <code>font-variation-settings: {{ settings }}</code>
          </p>
        </div>

        <div class="space-y-4 text-sm">
          <div class="flex gap-2" role="group" aria-label="Style">
            <button
              v-for="s in STYLES"
              :key="s"
              class="rounded-full border dark:border-gray-700 px-4 py-1.5 capitalize"
              :class="s === style ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
              :aria-pressed="s === style"
              @click="style = s"
            >
              {{ s }}
            </button>
          </div>
          <label v-for="axis in AXES" :key="axis.key" class="block">
            <span class="flex justify-between mb-1">
              <span class="font-medium">{{ axis.label }} <code class="text-xs text-gray-500">{{ axis.key }}</code></span>
              <span class="tabular-nums">{{ values[axis.key] }}</span>
            </span>
            <input
              v-model.number="values[axis.key]"
              type="range"
              :min="axis.min"
              :max="axis.max"
              :step="axis.step"
              class="w-full accent-gray-900 dark:accent-white"
              @change="track('symbols_slider', { axis: axis.key, value: values[axis.key] })"
            />
          </label>
          <button class="text-xs underline text-gray-500" @click="reset">Reset</button>
        </div>
      </div>

      <div class="mt-6 min-w-0">
        <div class="flex flex-wrap gap-1 border-b dark:border-gray-700 mb-3" role="tablist" aria-label="Code">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            role="tab"
            class="px-3 py-2 text-sm -mb-px border-b-2"
            :class="tab.key === activeTab ? 'border-blue-600 font-semibold' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'"
            :aria-selected="tab.key === activeTab"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
        <div v-for="tab in tabs" v-show="tab.key === activeTab" :key="tab.key" role="tabpanel">
          <h3 class="sr-only">{{ tab.label }}</h3>
          <p v-if="tab.note" class="text-sm text-gray-600 dark:text-gray-300 mb-2">{{ tab.note }}</p>
          <CodeBlock :code="tab.code" :label="tab.file" @copy="copied(tab)" />
        </div>
      </div>
    </section>

    <div class="prose dark:prose-invert max-w-3xl">
      <h2>What are Material Symbols?</h2>
      <p>
        Material Symbols are the icon set Google designs for Material Design and uses across
        Android and its own apps. Google released them in 2022 as the successor to Material Icons,
        and they're the set that still gets new icons. Each symbol is published as a variable font
        on Google Fonts and as SVG files, under the Apache License 2.0, so you can use them in
        commercial projects. Browse them all on the <NuxtLink to="/">icon search</NuxtLink> or by
        <NuxtLink to="/category/">category</NuxtLink>.
      </p>

      <h2>Material Symbols vs. Material Icons</h2>
      <p>
        The classic <strong>Material Icons</strong> come as five fixed font families (Filled,
        Outlined, Round, Sharp and Two-tone) with about 2,100 icons, and no longer get new ones.
        <strong>Material Symbols</strong> have three styles, over 3,900 icons, and four variable
        axes, so one font covers every look. Names mostly carry over (<code>home</code>,
        <code>arrow_back</code>), but the CSS classes change from <code>material-icons</code> to
        <code>material-symbols-outlined</code>. The full comparison, with migration steps, is in
        <NuxtLink to="/material-icons-vs-material-symbols/">Material Icons vs. Material Symbols</NuxtLink>.
      </p>

      <h2>Variable axes</h2>
      <table>
        <thead>
          <tr><th>Axis</th><th>Range</th><th>Default</th><th>Use</th></tr>
        </thead>
        <tbody>
          <tr><td>Fill <code>FILL</code></td><td>0–1</td><td>0</td><td>Outline or solid. Animates for toggles.</td></tr>
          <tr><td>Weight <code>wght</code></td><td>100–700</td><td>400</td><td>Stroke thickness. Match the adjacent text.</td></tr>
          <tr><td>Grade <code>GRAD</code></td><td>−50–200</td><td>0</td><td>Thickness without changing size. −25 on dark backgrounds.</td></tr>
          <tr><td>Optical size <code>opsz</code></td><td>20–48</td><td>24</td><td>Detail tuned to display size. Set to the icon's px size.</td></tr>
        </tbody>
      </table>
      <p>
        Examples: <NuxtLink to="/guides/material-symbols-fill-weight-grade-optical-size/">fill, weight, grade and optical size</NuxtLink>.
      </p>

      <h2>Outlined, Rounded and Sharp</h2>
      <table>
        <thead>
          <tr><th>Style</th><th>Class</th><th>Shape</th></tr>
        </thead>
        <tbody>
          <tr><td>Outlined</td><td><code>material-symbols-outlined</code></td><td>Even strokes. The default.</td></tr>
          <tr><td>Rounded</td><td><code>material-symbols-rounded</code></td><td>Rounded corners and stroke ends.</td></tr>
          <tr><td>Sharp</td><td><code>material-symbols-sharp</code></td><td>Square corners.</td></tr>
        </tbody>
      </table>
      <p>All three take the same four axes; Rounded with fill 1 matches the old "Round" icons.</p>

      <h2>FAQ</h2>
      <template v-for="item in FAQ" :key="item.q">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>

const DEMO = ["home", "search", "settings", "favorite", "delete", "notifications", "check_circle", "arrow_back"];
const STYLES = ["outlined", "rounded", "sharp"];
const AXES = [
  { key: "FILL", label: "Fill", min: 0, max: 1, step: 0.01, value: 0 },
  { key: "wght", label: "Weight", min: 100, max: 700, step: 1, value: 400 },
  { key: "GRAD", label: "Grade", min: -50, max: 200, step: 1, value: 0 },
  { key: "opsz", label: "Optical size", min: 20, max: 48, step: 1, value: 24 },
];

const style = ref("outlined");
const values = reactive(Object.fromEntries(AXES.map((a) => [a.key, a.value])));
const reset = () => AXES.forEach((a) => (values[a.key] = a.value));
const settings = computed(() => AXES.map((a) => `"${a.key}" ${values[a.key]}`).join(", "));

// The demo icons from Google Fonts (just these eight, a few KB), loaded after
// the page renders; until then the preview shows the SVG files.
const fontReady = ref(false);
const AXES_RANGE = "opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
const family = (s) => `Material+Symbols+${s.charAt(0).toUpperCase()}${s.slice(1)}`;
onMounted(() => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${STYLES.map((s) => `family=${family(s)}:${AXES_RANGE}`).join("&")}&icon_names=${[...DEMO].sort().join(",")}&display=block`;
  link.onload = () =>
    Promise.all(STYLES.map((s) => document.fonts.load(`48px "${family(s).replace(/\+/g, " ")}"`, "home")))
      .then(() => (fontReady.value = true))
      .catch(() => {});
  document.head.appendChild(link);
});

// ---- Code for the current settings ----------------------------------------------
const tabs = computed(() => {
  const cls = `material-symbols-${style.value}`;
  const fam = family(style.value);
  const css = `.${cls} {
  font-variation-settings: ${settings.value};
}`;
  const Style = style.value === "outlined" ? "" : `_${style.value}`;
  return [
    {
      key: "font",
      label: "Google Fonts",
      file: "index.html",
      note: "Add to your page's <head>. Add &icon_names=home,search,… (sorted) to load only the icons you use.",
      code: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${fam}:${AXES_RANGE}" />`,
    },
    { key: "css", label: "CSS", file: "styles.css", code: css },
    {
      key: "html",
      label: "HTML",
      file: "index.html",
      code: `<span class="${cls}">home</span>

<style>
${css}
</style>`,
    },
    {
      key: "react",
      label: "React",
      file: "HomeIcon.jsx",
      code: `export function HomeIcon() {
  return (
    <span className="${cls}" style={{ fontVariationSettings: "${settings.value.replace(/"/g, "'")}" }}>
      home
    </span>
  );
}`,
    },
    {
      key: "angular",
      label: "Angular",
      file: "app.component.html",
      note: "With Angular Material, the Google Fonts link and the CSS above in styles.css:",
      code: `<mat-icon fontSet="${cls}">home</mat-icon>`,
    },
    {
      key: "flutter",
      label: "Flutter",
      file: "main.dart",
      note: "Uses the community material_symbols_icons package.",
      code: `flutter pub add material_symbols_icons

import 'package:material_symbols_icons/symbols.dart';

Icon(Symbols.home${Style}, fill: ${values.FILL}, weight: ${values.wght}, grade: ${values.GRAD}, opticalSize: ${values.opsz})`,
    },
  ];
});
const activeTab = ref("font");

const copied = (tab) => track("copy_code", { icon: "material_symbols_page", platform: tab.key });

// ---- FAQ ------------------------------------------------------------------------
const FAQ = [
  {
    q: "What is the difference between Material Icons and Material Symbols?",
    a: "Material Symbols are the newer set: over 3,900 icons in three styles (Outlined, Rounded, Sharp) with variable fill, weight, grade and optical size. Material Icons are the older set of about 2,100 icons in five fixed styles, which Google no longer adds to.",
  },
  {
    q: "Are Material Symbols free for commercial use?",
    a: "Yes. Google publishes them under the Apache License 2.0, which allows commercial use, modification and redistribution. You don't need to credit Google in your interface, but keep the license notice if you redistribute the font or SVG files.",
  },
  {
    q: "How do I use Material Symbols in HTML?",
    a: 'Add the Google Fonts stylesheet for the style you want, then write the icon\'s name inside an element with the matching class, for example <span class="material-symbols-outlined">home</span>.',
  },
  {
    q: "How do I make a Material Symbol filled?",
    a: "Set the fill axis to 1 with CSS: font-variation-settings: 'FILL' 1. With SVG files, use the -fill version of the icon.",
  },
  {
    q: "How do I change the size or thickness of a Material Symbol?",
    a: "Use font-size for the size, and set the optical size (opsz) to the same number of pixels. Change the thickness with the weight axis (wght, 100 to 700), or fine-tune it with grade (GRAD).",
  },
  {
    q: "How do I use Material Symbols in React?",
    a: "Load the Google Fonts stylesheet and render a span with the icon name and the material-symbols-outlined class, or import the SVG files from the @material-symbols/svg-400 npm package as components with your bundler's SVG plugin.",
  },
  {
    q: "How do I use Material Symbols in Figma?",
    a: "Open the icon's page here, pick the style, fill and weight, click Copy SVG and paste into Figma: it becomes an editable vector you can recolor and resize. For a whole set, download the SVG files and drag them in.",
  },
  {
    q: "Why does my Material Symbol show as text?",
    a: "The icon's name shows as text until the font loads, or if the font didn't load. Check that the stylesheet is on the page, that the class matches the style you loaded, and add &display=block to the font URL to hide the text while it loads.",
  },
];

const description =
  "Material Symbols explained: Google's variable icon font vs. Material Icons, fill, weight, grade and optical size, the three styles, and copy-ready code.";
useSeo({ title: "Google Material Symbols: variable icon font guide & live preview", description, path: "/material-symbols" });
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
</script>
