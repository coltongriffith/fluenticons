<template>
  <div v-if="icon" class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <template v-for="crumb in crumbs.slice(0, -1)" :key="crumb.path">
        <NuxtLink :to="crumb.path" class="hover:underline">{{ crumb.name }}</NuxtLink>
        <span class="mx-2">/</span>
      </template>
      <span>{{ icon.name }}</span>
    </nav>

    <h1 class="text-3xl sm:text-4xl font-bold break-all">{{ kebab }}</h1>
    <p class="text-gray-500 dark:text-gray-400 mt-1 mb-4">{{ icon.name }} icon · Lucide · <code>&lt;{{ component }} /&gt;</code></p>
    <div class="flex items-stretch max-w-md mb-6 rounded-lg border dark:border-gray-700 overflow-hidden">
      <code class="flex-1 min-w-0 px-4 py-2.5 text-base bg-gray-50 dark:bg-gray-800 truncate" aria-label="Icon name">{{ kebab }}</code>
      <button
        class="flex items-center gap-1.5 px-4 text-sm font-medium border-l dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        @click="copyText(kebab, 'icon name', 'name')"
      >
        <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Copy name</span>
      </button>
    </div>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
      {{ intro }}
    </p>

    <section id="customize" class="mb-12 max-w-5xl">
      <div class="grid md:grid-cols-[16rem_1fr] gap-6">
        <div class="rounded-lg border dark:border-gray-700 overflow-hidden self-start">
          <div class="dots-pattern-background bg-white dark:bg-gray-800 h-48 flex-center gap-8 text-gray-900 dark:text-white">
            <svg
              v-for="px in [24, 96]"
              :key="px"
              :width="px"
              :height="px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="`${icon.name} icon`"
              v-html="previewBody"
            />
          </div>
          <div class="p-4 border-t dark:border-gray-700">
            <p class="font-medium mb-1">{{ size }} px, stroke {{ strokeWidth }}</p>
            <p class="text-xs text-gray-500 mb-3 break-all"><code>{{ details.regular.file }}</code></p>
            <div class="flex flex-wrap gap-2 text-sm">
              <button class="navbar-btn" @click="downloadSvg">
                <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>SVG</span>
              </button>
              <button class="navbar-btn" @click="downloadPng">
                <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>PNG</span>
              </button>
              <button class="navbar-btn" @click="copySvg">
                <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Copy SVG</span>
              </button>
              <button class="navbar-btn" @click="copyPowerApps(false)">
                <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Power Apps</span>
              </button>
            </div>
          </div>
        </div>

        <div class="min-w-0">
          <h2 class="text-2xl font-bold mb-2">Size, stroke and code</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
            Lucide icons are drawn on a 24&nbsp;px grid with a 2&nbsp;px stroke. Pick a size and stroke
            width to preview them; the downloads and the code below follow your choice.
          </p>
          <div class="flex flex-wrap items-center gap-2 mb-3 text-sm" role="group" aria-label="Stroke width">
            <span class="text-gray-500 mr-1 w-24">Stroke width</span>
            <button
              v-for="w in STROKES"
              :key="w"
              class="min-w-[3rem] rounded-lg border dark:border-gray-700 px-3 py-1.5"
              :class="w === strokeWidth ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
              :aria-pressed="w === strokeWidth"
              @click="pick({ strokeWidth: w })"
            >
              {{ w }}
            </button>
          </div>
          <div class="flex flex-wrap items-center gap-2 mb-6 text-sm" role="group" aria-label="Size">
            <span class="text-gray-500 mr-1 w-24">Size</span>
            <button
              v-for="s in SIZES"
              :key="s"
              class="min-w-[3rem] rounded-lg border dark:border-gray-700 px-3 py-1.5"
              :class="s === size ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
              :aria-pressed="s === size"
              @click="pick({ size: s })"
            >
              {{ s }}
            </button>
          </div>

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
          <!-- Only the selected tab's code is in the page, so shared snippets don't outweigh this icon's own text. -->
          <div v-for="tab in codeTabs.filter((t) => t.key === activeTab.key)" :key="tab.key" role="tabpanel">
            <h3 class="sr-only">{{ icon.name }} icon in {{ tab.label }}</h3>
            <p v-if="tab.note" class="text-sm text-gray-600 dark:text-gray-300 mb-2">{{ tab.note }}</p>
            <div class="relative">
              <pre class="rounded-lg bg-gray-900 text-gray-100 text-sm p-4 overflow-x-auto"><code>{{ tab.code }}</code></pre>
              <button
                class="absolute top-2 right-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1"
                @click="tab.key === 'powerapps' ? copyPowerApps(true) : copyText(tab.code, tab.label, tab.key)"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SponsorCard variant="inline" placement="icon" class="mb-12 max-w-3xl" />

    <div class="prose dark:prose-invert max-w-3xl">
      <h2>Details</h2>
      <table>
        <tbody>
          <tr><th>Name</th><td><code>{{ kebab }}</code></td></tr>
          <tr><th>Component</th><td><code>{{ component }}</code> (also <code>{{ component }}Icon</code>, <code>Lucide{{ component }}</code>)</td></tr>
          <tr v-if="aliases.length">
            <th>Old names</th>
            <td>
              <template v-for="(a, i) in aliases" :key="a"><code>{{ a }}</code><template v-if="i < aliases.length - 1">, </template></template>
              (still work as aliases)
            </td>
          </tr>
          <tr v-if="categories.length">
            <th>{{ categories.length > 1 ? "Categories" : "Category" }}</th>
            <td>
              <template v-for="(c, i) in categories" :key="c.name">
                <NuxtLink v-if="c.path" :to="c.path">{{ c.name }}</NuxtLink><span v-else>{{ c.name }}</span><template v-if="i < categories.length - 1">, </template>
              </template>
            </td>
          </tr>
          <template v-if="details.codepoint">
            <tr><th>Icon font</th><td><code>icon-{{ kebab }}</code>, <code>U+{{ hex.toUpperCase() }}</code></td></tr>
            <tr><th>CSS content</th><td><code>"\{{ hex }}"</code></td></tr>
          </template>
          <tr><th>File</th><td><code>lucide-static/icons/{{ details.regular.file }}</code></td></tr>
          <tr><th>Grid and stroke</th><td>24 × 24, 2 px stroke, round caps and joins</td></tr>
          <tr><th>License</th><td><NuxtLink to="/license/">ISC License</NuxtLink> (© Lucide Icons and Contributors)</td></tr>
        </tbody>
      </table>

      <template v-if="keywords.length">
        <h2>Tags</h2>
        <p class="not-prose flex flex-wrap gap-2">
          <template v-for="keyword in keywords" :key="keyword.name">
            <NuxtLink
              v-if="keyword.path"
              :to="keyword.path"
              class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {{ keyword.name }}
            </NuxtLink>
            <button
              v-else
              type="button"
              class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
              @click="navigateTo({ path: '/', query: { q: keyword.name } })"
            >
              {{ keyword.name }}
            </button>
          </template>
        </p>
      </template>
    </div>

    <IconTwin :twins="details.twins" :slug="slug" />

    <section v-if="related.length" class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Similar icons</h2>
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
import { lucideName } from "~/site.js";

const STROKES = [1, 1.5, 2, 2.5, 3];
const SIZES = [16, 20, 24, 32, 48];
// Same slugs as scripts/build-icon-data.mjs.
const categorySlug = (name) =>
  name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const route = useRoute();
const slug = pathToSlug(route.params.slug);
const toast = useToast();

const { data } = await useAsyncData(`icon-${slug}`, async () => {
  const index = await loadIndex();
  const entry = index.find((e) => e.slug === slug);
  if (!entry) return null;
  const [details, tags] = await Promise.all([loadIconDetails(slug), loadTags()]);
  const related = (details.related || [])
    .map((s) => index.find((e) => e.slug === s))
    .filter(Boolean)
    .map((e) => ({ slug: e.slug, name: e.name, file: e.regular || e.filled }));
  // Tags link to their category or topic page, if there is one. (The index's
  // keywords also hold old names, for search; only Lucide's tags are listed.)
  const aliasWords = new Set((details.aliases || []).map((a) => a.replace(/-/g, " ")));
  const pathOf = (name) => {
    if (categoryNames[categorySlug(name)]) return `/category/${categorySlug(name)}/`;
    const tag = name.replace(/\s+/g, "-");
    return tags[tag] ? `/tag/${tag}/` : null;
  };
  const keywords = entry.keywords.filter((k) => !aliasWords.has(k)).map((name) => ({ name, path: pathOf(name) }));
  const categories = (details.categories || []).map((name) => ({
    name,
    path: categoryNames[categorySlug(name)] ? `/category/${categorySlug(name)}/` : null,
  }));
  const { search, ...icon } = entry;
  return { icon, details, related, keywords, categories };
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Icon not found", fatal: true });
}

const icon = computed(() => data.value.icon);
const details = computed(() => data.value.details);
const related = computed(() => data.value.related);
const keywords = computed(() => data.value.keywords || []);
const categories = computed(() => data.value.categories || []);
const aliases = computed(() => details.value.aliases || []);
const hex = computed(() => details.value.codepoint?.toString(16));
const kebab = slug.replace(/_/g, "-");
const component = lucideName(slug);
const letter = computed(() => letterOf(icon.value.name));
// Icons / <first category> / this icon, or Icons / Browse / <letter> without a category page.
const crumbs = computed(() => {
  const main = categories.value.find((c) => c.path);
  return [
    { name: "Icons", path: "/" },
    ...(main
      ? [{ name: main.name, path: main.path }]
      : [
          { name: "Browse", path: "/browse/" },
          { name: letter.value.toUpperCase(), path: `/browse/${letter.value}/` },
        ]),
    { name: `${icon.value.name} icon` },
  ];
});

// ---- Size and stroke -----------------------------------------------------------
const strokeWidth = ref(2);
const size = ref(24);
const codeTab = ref("react");

const previewBody = computed(() => details.value.regular.body.replace(/stroke-width="2"/, `stroke-width="${strokeWidth.value}"`));

function pick(change) {
  if (change.strokeWidth) strokeWidth.value = change.strokeWidth;
  if (change.size) size.value = change.size;
  track("select_variant", { icon: slug, stroke: strokeWidth.value, size: size.value });
}

function pickTab(key) {
  codeTab.value = key;
  track("code_tab", { icon: slug, platform: key });
}

// The icon's SVG with the chosen size and stroke width (and color, if given).
async function customSvg(color) {
  const svg = await getSvg(`/icons/${details.value.regular.file}`, color);
  return svg
    .replace(/\bwidth="24"/, `width="${size.value}"`)
    .replace(/\bheight="24"/, `height="${size.value}"`)
    .replace(/stroke-width="2"/, `stroke-width="${strokeWidth.value}"`);
}

const codeTabs = computed(() => {
  const v = stats.version;
  const s = size.value;
  const w = strokeWidth.value;
  const custom = s !== 24 || w !== 2;
  const jsxProps = [s !== 24 && `size={${s}}`, w !== 2 && `strokeWidth={${w}}`].filter(Boolean).join(" ");
  const vueProps = [s !== 24 && `:size="${s}"`, w !== 2 && `:stroke-width="${w}"`].filter(Boolean).join(" ");
  const svelteProps = [s !== 24 && `size={${s}}`, w !== 2 && `strokeWidth={${w}}`].filter(Boolean).join(" ");
  const ngProps = [s !== 24 && `[size]="${s}"`, w !== 2 && `[strokeWidth]="${w}"`].filter(Boolean).join(" ");
  const attrs = (props) => (props ? ` ${props}` : "");
  return [
    {
      key: "react",
      label: "React",
      code: `npm install lucide-react

import { ${component} } from "lucide-react";

export function Example() {
  return <${component}${attrs(jsxProps)} />;
}`,
    },
    {
      key: "vue",
      label: "Vue",
      code: `npm install @lucide/vue

<script setup>
import { ${component} } from "@lucide/vue";
<\/script>

<template>
  <${component}${attrs(vueProps)} />
</template>`,
    },
    {
      key: "svelte",
      label: "Svelte",
      note: "@lucide/svelte is for Svelte 5 (Svelte 4 used the lucide-svelte package).",
      code: `npm install @lucide/svelte

<script>
  import { ${component} } from "@lucide/svelte";
<\/script>

<${component}${attrs(svelteProps)} />`,
    },
    {
      key: "angular",
      label: "Angular",
      note: "@lucide/angular's standalone components (it replaces lucide-angular):",
      code: `npm install @lucide/angular

import { Component } from "@angular/core";
import { Lucide${component} } from "@lucide/angular";

@Component({
  selector: "app-example",
  imports: [Lucide${component}],
  template: \`<svg lucide${component}${attrs(ngProps)}></svg>\`,
})
export class Example {}`,
    },
    {
      key: "html",
      label: "HTML",
      note: "The lucide package swaps each data-lucide element for the icon's SVG.",
      code: `<i data-lucide="${kebab}"${custom ? ` width="${s}" height="${s}" stroke-width="${w}"` : ""}></i>

<script src="https://unpkg.com/lucide@${v}"><\/script>
<script>
  lucide.createIcons();
<\/script>`,
    },
    {
      key: "font",
      label: "Icon font",
      code: `<link rel="stylesheet" href="https://unpkg.com/lucide-static@${v}/font/lucide.css">

<i class="icon-${kebab}"></i>${
        hex.value
          ? `

/* or use the code point in your own CSS */
.icon::before {
  font-family: "lucide";
  content: "\\${hex.value}";
  font-size: ${s}px;
}`
          : ""
      }`,
    },
    {
      key: "react-native",
      label: "React Native",
      code: `npm install lucide-react-native react-native-svg

import { ${component} } from "lucide-react-native";

<${component}${attrs(jsxProps)} />`,
    },
    {
      key: "solid",
      label: "Solid",
      code: `npm install lucide-solid

import { ${component} } from "lucide-solid";

<${component}${attrs(jsxProps)} />`,
    },
    {
      key: "svg",
      label: "SVG",
      code: `npm install lucide-static

import icon from "lucide-static/icons/${kebab}.svg";

<!-- or load it from a CDN -->
<img src="https://unpkg.com/lucide-static@${v}/icons/${kebab}.svg" width="${s}" height="${s}" alt="${icon.value.name}">`,
    },
    {
      key: "powerapps",
      label: "Power Apps",
      note: "Paste into an Image control's Image property. The Copy button copies the full formula with this icon's SVG.",
      code: `"data:image/svg+xml;utf8, " & EncodeUrl("<svg xmlns='http://www.w3.org/2000/svg' width='${s}' height='${s}' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='${w}'>…</svg>")`,
    },
  ];
});
const activeTab = computed(() => codeTabs.value.find((t) => t.key === codeTab.value) || codeTabs.value[0]);

// ---- Copy and download ------------------------------------------------------
function trackIcon(name, format) {
  track(name, { icon: slug, format, source: "icon_page", stroke: strokeWidth.value, size: size.value });
}

async function copyText(text, label, platform) {
  try {
    await navigator.clipboard.writeText(text);
    toast.show(platform === "name" ? `Copied ${text}` : `Copied ${label} code`, "info", { promo: true });
    track("copy_code", { icon: slug, platform });
  } catch (err) {
    toast.error(err.message);
  }
}

async function copySvg() {
  try {
    await navigator.clipboard.writeText(await customSvg());
    toast.show("Copied SVG", "info", { promo: true });
    trackIcon("copy_icon", "svg");
  } catch (err) {
    toast.error(err.message);
  }
}

async function copyPowerApps(fromTab) {
  try {
    await navigator.clipboard.writeText(svgToPowerApps(await customSvg("#000000")));
    toast.show("Copied Power Apps formula", "info", { promo: true });
    if (fromTab) track("copy_code", { icon: slug, platform: "powerapps" });
    else trackIcon("copy_icon", "powerapps");
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadSvg() {
  try {
    saveAs(new Blob([await customSvg()], { type: "image/svg+xml;charset=utf-8" }), `${kebab}.svg`);
    trackIcon("download_icon", "svg");
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadPng() {
  try {
    const blob = await svgToImage({ svg: await customSvg(), width: 512, height: 512, outputFormat: "blob" });
    saveAs(blob, `${kebab}.png`);
    trackIcon("download_icon", "png");
  } catch (err) {
    toast.error(err.message);
  }
}

// ---- Copy for search engines -------------------------------------------------
// This icon's own text (scripts/icon-copy.mjs): its tags, categories, old
// names and the matching Fluent and Material icons.
const intro = computed(() => details.value.usage);

useSeo({
  fullTitle: `${kebab} — Lucide Icon | Copy SVG, React & Vue Code`,
  description: `Copy the ${kebab} Lucide icon (<${component} />) for React, Vue, Svelte or Angular, or download SVG and PNG at any size and stroke width.${
    aliases.value.length ? ` Formerly ${aliases.value.join(", ")}.` : ""
  }`,
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
useJsonLd({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: `${icon.value.name} icon`,
  description: intro.value,
  contentUrl: `${SITE_URL}/icons/${details.value.regular.file}`,
  encodingFormat: "image/svg+xml",
  width: 24,
  height: 24,
  license: `${SITE_URL}/license/`,
  acquireLicensePage: `${SITE_URL}/license/`,
  creditText: "Lucide",
  copyrightNotice: "© Lucide Icons and Contributors",
  creator: { "@type": "Organization", name: "Lucide" },
});
</script>
