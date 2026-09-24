<template>
  <div v-if="icon" class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/browse/" class="hover:underline">Browse</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink :to="`/browse/${letter}/`" class="hover:underline uppercase">{{ letter }}</NuxtLink>
      <span class="mx-2">/</span>
      <span>{{ icon.name }}</span>
    </nav>

    <h1 class="text-3xl sm:text-4xl font-bold mb-4">{{ icon.name }} icon</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
      {{ intro }}
    </p>

    <div
      v-if="styles.length"
      class="grid gap-6 mb-12"
      :class="styles.length > 2 ? 'sm:grid-cols-2 lg:grid-cols-3 max-w-5xl' : 'sm:grid-cols-2 max-w-3xl'"
    >
      <div
        v-for="style in styles"
        :key="style.key"
        class="rounded-lg border dark:border-gray-700 overflow-hidden"
      >
        <div class="dots-pattern-background bg-white dark:bg-gray-800 h-48 flex-center">
          <svg
            v-if="style.svg.body"
            :width="style.svg.size"
            :height="style.svg.size"
            :viewBox="`0 0 ${style.svg.size} ${style.svg.size}`"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-24 w-24"
            role="img"
            :aria-label="`${icon.name} ${style.label}`"
            v-html="style.svg.body"
          />
          <img
            v-else
            :src="`/icons/${style.svg.file}`"
            :width="style.svg.size"
            :height="style.svg.size"
            class="h-24 w-24"
            :alt="`${icon.name} ${style.label}`"
          />
        </div>
        <div class="p-4 border-t dark:border-gray-700">
          <p class="font-medium mb-3">{{ style.label }}</p>
          <div class="flex flex-wrap gap-2 text-sm">
            <a :href="`/icons/${style.svg.file}`" :download="style.svg.file" class="navbar-btn">
              <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>SVG</span>
            </a>
            <button class="navbar-btn" @click="downloadPng(style.svg.file)">
              <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>PNG</span>
            </button>
            <button class="navbar-btn" @click="copySvg(style.svg.file)">
              <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Copy SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <section v-if="variantStyles.length" id="sizes" class="mb-12 max-w-5xl">
      <h2 class="text-2xl font-bold mb-2">Every size and style</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
        Microsoft draws each size separately so icons stay crisp, rather than scaling one
        drawing. Pick a style and size to preview it, download it, or copy the code for your
        platform.
      </p>

      <div class="flex flex-wrap gap-2 mb-3" role="group" aria-label="Style">
        <button
          v-for="s in variantStyles"
          :key="s"
          class="rounded-full border dark:border-gray-700 px-4 py-1.5 text-sm"
          :class="s === activeStyle ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="s === activeStyle"
          @click="pickStyle(s)"
        >
          {{ STYLE_INFO[s].short }}
        </button>
      </div>
      <div class="flex flex-wrap gap-2 mb-6" role="group" aria-label="Size">
        <button
          v-for="v in details.variants[activeStyle]"
          :key="v[0]"
          class="min-w-[3rem] rounded-lg border dark:border-gray-700 px-3 py-1.5 text-sm"
          :class="v[0] === activeSize ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
          :aria-pressed="v[0] === activeSize"
          @click="activeSize = v[0]"
        >
          {{ v[0] }} px
        </button>
      </div>

      <div class="grid md:grid-cols-[16rem_1fr] gap-6">
        <div class="rounded-lg border dark:border-gray-700 overflow-hidden self-start">
          <div class="dots-pattern-background bg-white dark:bg-gray-800 h-48 flex-center gap-8">
            <template v-if="previewFailed">
              <p class="text-sm text-gray-500 px-4 text-center">Preview unavailable right now.</p>
            </template>
            <template v-else-if="activeStyle === 'color'">
              <img
                :key="activeSrc"
                :src="activeSrc"
                :width="activeSize"
                :height="activeSize"
                :alt="`${icon.name} ${activeSize} px ${activeStyle}`"
                @error="previewFailed = true"
              />
              <img :key="`${activeSrc}-large`" :src="activeSrc" class="h-24 w-24" alt="" @error="previewFailed = true" />
            </template>
            <template v-else>
              <IconMask :src="activeSrc" :style="{ width: `${activeSize}px`, height: `${activeSize}px` }" />
              <IconMask :src="activeSrc" class="h-24 w-24" />
            </template>
          </div>
          <div class="p-4 border-t dark:border-gray-700">
            <p class="font-medium mb-1">{{ STYLE_INFO[activeStyle].short }}, {{ activeSize }} px</p>
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
              @click="codeTab = tab.key"
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
                class="absolute top-2 right-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1"
                @click="tab.key === 'powerapps' ? copyPowerApps(activeSrc) : copyText(tab.code, tab.label)"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="prose dark:prose-invert max-w-3xl">
      <template v-if="!details.legacy">
        <h2>Use the {{ icon.name }} icon in React</h2>
        <p>
          Install Microsoft's <code>@fluentui/react-icons</code> package, then import the
          component. Icons inherit the current text color, and you can size them with CSS.
        </p>
        <pre><code>{{ reactCode }}</code></pre>
      </template>
      <p v-else>
        This icon was retired from Microsoft's official packages. It's kept here so existing
        links keep working, but for new work consider one of the related icons below.
      </p>

      <h2>Use it in HTML</h2>
      <p>Reference the SVG file directly:</p>
      <pre><code>{{ htmlCode }}</code></pre>
      <template v-if="inlineCode">
        <p>
          Or paste the SVG markup inline. Setting <code>fill="currentColor"</code> makes the icon
          follow the text color of its parent:
        </p>
        <pre><code>{{ inlineCode }}</code></pre>
      </template>

      <h2>Details</h2>
      <table>
        <tbody>
          <tr><th>Name</th><td>{{ icon.name }}</td></tr>
          <tr><th>Styles</th><td>{{ allStyleLabels }}</td></tr>
          <tr v-if="allSizes.length"><th>Sizes</th><td>{{ allSizes.map((s) => `${s} px`).join(", ") }}</td></tr>
          <tr v-else-if="styles.length"><th>Size</th><td>{{ styles[0].svg.size }} × {{ styles[0].svg.size }} px (scalable SVG)</td></tr>
          <tr v-for="style in styles" :key="style.key">
            <th>{{ style.label }} file</th><td><code>{{ style.svg.file }}</code></td>
          </tr>
          <tr v-for="s in variantStyles" :key="`react-${s}`">
            <th>React ({{ STYLE_INFO[s].short }})</th>
            <td><code>{{ details.variants[s].map((v) => reactName(slug, v[0], s)).join(", ") }}</code></td>
          </tr>
          <tr v-if="!variantStyles.length && !details.legacy">
            <th>React components</th>
            <td><code>{{ styles.filter((s) => s.variant).map((s) => s.component).join(", ") }}</code></td>
          </tr>
          <tr><th>License</th><td><NuxtLink to="/license/">MIT</NuxtLink> (© Microsoft Corporation)</td></tr>
        </tbody>
      </table>

      <template v-if="keywords.length">
        <h2>Keywords</h2>
        <p class="not-prose flex flex-wrap gap-2">
          <template v-for="keyword in keywords" :key="keyword.name">
            <NuxtLink
              v-if="keyword.tag"
              :to="`/tag/${keyword.tag}/`"
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
import { getSvg, svgToImage, svgToPowerApps } from "~/utils/iconManager";
import { saveAs } from "file-saver";

const STYLE_INFO = {
  regular: { label: "Regular (outlined)", short: "Regular", font: "Regular", variant: "outlined" },
  filled: { label: "Filled", short: "Filled", font: "Filled", variant: "filled" },
  color: { label: "Color", short: "Color" },
  light: { label: "Light", short: "Light", font: "Light" },
};
const STYLE_ORDER = ["regular", "filled", "color", "light"];

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
  const keywords = entry.keywords.map((name) => {
    const tag = name.replace(/\s+/g, "-");
    return { name, tag: tags[tag] ? tag : null };
  });
  const { search, ...icon } = entry;
  return { icon, details: { variants: {}, ...details }, related, keywords };
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Icon not found", fatal: true });
}

const icon = computed(() => data.value.icon);
const details = computed(() => data.value.details);
const related = computed(() => data.value.related);
const keywords = computed(() => data.value.keywords || []);
const letter = computed(() => {
  const c = icon.value.name.charAt(0).toLowerCase();
  return /[a-z]/.test(c) ? c : "0-9";
});

// The site's own copy of each style (24 px, or the nearest size Microsoft draws).
const styles = computed(() =>
  STYLE_ORDER
    .filter((key) => details.value[key])
    .map((key) => ({
      key,
      label: STYLE_INFO[key].label,
      variant: STYLE_INFO[key].variant,
      svg: details.value[key],
      component: reactName(slug, details.value[key].size, key),
    }))
);

// ---- Every size and style (from @fluentui/svg-icons) ----------------------
const variantStyles = computed(() =>
  STYLE_ORDER.filter((s) => details.value.variants?.[s]?.length)
);
const allSizes = computed(() =>
  [...new Set(variantStyles.value.flatMap((s) => details.value.variants[s].map((v) => v[0])))].sort(
    (a, b) => a - b
  )
);
// Every style this icon has: in Microsoft's package or as a file on this site.
const availableStyles = computed(() =>
  STYLE_ORDER.filter((s) => variantStyles.value.includes(s) || details.value[s])
);
const allStyleLabels = computed(() =>
  availableStyles.value.map((s) => STYLE_INFO[s].label).join(", ")
);

function defaultSize(style) {
  const sizes = (details.value.variants[style] || []).map((v) => v[0]);
  return sizes.includes(24) ? 24 : sizes[0];
}
const activeStyle = ref(variantStyles.value[0] || "regular");
const activeSize = ref(defaultSize(activeStyle.value));
const codeTab = ref("react");
const previewFailed = ref(false);

function pickStyle(style) {
  activeStyle.value = style;
  if (!details.value.variants[style].some((v) => v[0] === activeSize.value)) {
    activeSize.value = defaultSize(style);
  }
}

const activeVariant = computed(
  () => details.value.variants[activeStyle.value]?.find((v) => v[0] === activeSize.value) || [activeSize.value, 0, 0]
);
const activeFile = computed(() => variantFile(slug, activeSize.value, activeStyle.value));
// The local file when it is this exact variant; otherwise the pinned CDN copy.
const activeSrc = computed(() => {
  const local = details.value[activeStyle.value];
  if (local && local.file === activeFile.value) return `/icons/${local.file}`;
  return variantUrl(slug, activeSize.value, activeStyle.value);
});
// CSS masks give no load error, so check the file with an Image to show
// "Preview unavailable" when the CDN can't be reached.
if (import.meta.client) {
  watch(
    activeSrc,
    (src) => {
      previewFailed.value = false;
      const probe = new Image();
      probe.onerror = () => {
        if (activeSrc.value === src) previewFailed.value = true;
      };
      probe.src = src;
    },
    { immediate: true }
  );
}

const codeTabs = computed(() => {
  const style = activeStyle.value;
  const size = activeSize.value;
  const [, codepoint, flutter] = activeVariant.value;
  const name = icon.value.name;
  const stem = `${slug}_${size}_${style}`;
  const react = reactName(slug, size, style);
  const Style = STYLE_INFO[style].short;
  const mono = style === "filled" || style === "regular";
  const tabs = [
    {
      key: "react",
      label: "React",
      code: `npm install @fluentui/react-icons

import { ${react} } from "@fluentui/react-icons";

export function Example() {
  return <${react} aria-label="${name}" />;
}`,
    },
    {
      key: "svg",
      label: "SVG",
      code: `npm install @fluentui/svg-icons

import icon from "@fluentui/svg-icons/icons/${stem}.svg";

<!-- or load it from a CDN -->
<img src="${variantUrl(slug, size, style)}" width="${size}" height="${size}" alt="${name}">`,
    },
  ];
  if (mono) {
    tabs.push({
      key: "blazor",
      label: "Blazor",
      note: "Microsoft's Fluent UI Blazor icons package:",
      code: `dotnet add package Microsoft.FluentUI.AspNetCore.Components.Icons

<FluentIcon Value="@(new Icons.${Style}.Size${size}.${pascalName(slug)}())" />`,
    });
  }
  if (flutter) {
    tabs.push({
      key: "flutter",
      label: "Flutter",
      code: `flutter pub add fluentui_system_icons

import 'package:fluentui_system_icons/fluentui_system_icons.dart';

Icon(FluentIcons.${stem})`,
    });
  }
  if (codepoint) {
    const font = `FluentSystemIcons-${STYLE_INFO[style].font}`;
    const hex = codepoint.toString(16).toUpperCase();
    tabs.push(
      {
        key: "xaml",
        label: "WinUI / WPF",
        note: `Add ${font}.ttf from Microsoft's repository to your app, then use the glyph:`,
        code: `<!-- WinUI 3 (font in Assets/Fonts) -->
<FontIcon FontFamily="ms-appx:///Assets/Fonts/${font}.ttf#${font}" Glyph="&#x${hex};" FontSize="${size}" />

<!-- WPF (font in Fonts/, Build Action: Resource) -->
<TextBlock FontFamily="pack://application:,,,/Fonts/#${font}" Text="&#x${hex};" FontSize="${size}" />`,
      },
      {
        key: "font",
        label: "Icon font",
        code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/microsoft/fluentui-system-icons@${stats.upstreamCommit}/fonts/${font}.css">

<i class="icon-ic_fluent_${stem}"></i>

/* or use the code point in your own CSS */
.icon::before {
  font-family: "${font}";
  content: "\\${hex.toLowerCase()}";
  font-size: ${size}px;
}`,
      }
    );
  }
  if (mono) {
    tabs.push(
      {
        key: "android",
        label: "Android",
        code: `// build.gradle
implementation("com.microsoft.design:fluent-system-icons:${stats.svgIcons}@aar")

<!-- layout XML -->
<ImageView android:src="@drawable/ic_fluent_${stem}" />

// Kotlin
R.drawable.ic_fluent_${stem}`,
      },
      {
        key: "ios",
        label: "iOS",
        code: `# Podfile
pod "FluentIcons", "${stats.svgIcons}"

import FluentIcons

UIImage(fluent: .${react.charAt(0).toLowerCase()}${react.slice(1)})`,
      }
    );
  }
  tabs.push({
    key: "powerapps",
    label: "Power Apps",
    note: "Paste into an Image control's Image property. The Copy button copies the full formula with this icon's SVG.",
    code: `"data:image/svg+xml;utf8, " & EncodeUrl("<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>…</svg>")`,
  });
  return tabs;
});
const activeTab = computed(
  () => codeTabs.value.find((t) => t.key === codeTab.value) || codeTabs.value[0]
);

// ---- Copy and download ------------------------------------------------------
const intro = computed(() => {
  const name = icon.value.name;
  const labels = availableStyles.value.map((s) => STYLE_INFO[s].short.toLowerCase());
  const styleText =
    labels.length === 1 ? `the ${labels[0]} style` : `${labels.slice(0, -1).join(", ")} and ${labels.at(-1)} styles`;
  const sizes = allSizes.value;
  const sizeText =
    sizes.length > 1
      ? `in ${sizes.length} sizes from ${sizes[0]} to ${sizes.at(-1)} px`
      : `on a ${sizes[0] || styles.value[0]?.svg.size || 24} px grid`;
  const description = details.value.description ? `${details.value.description} ` : "";
  return `${description}The ${name} icon is part of Microsoft's Fluent UI System Icons, available here in ${styleText} ${sizeText}. Download it as SVG or PNG, or copy it as code — it's free to use under the MIT License.`;
});

const reactCode = computed(() => {
  const names = variantStyles.value.length
    ? variantStyles.value
        .filter((s) => s === "regular" || s === "filled")
        .map((s) => reactName(slug, defaultSize(s), s))
    : styles.value.filter((s) => s.variant).map((s) => s.component);
  if (!names.length) names.push(reactName(slug, activeSize.value, activeStyle.value));
  return `npm install @fluentui/react-icons

import { ${names.join(", ")} } from "@fluentui/react-icons";

export function Example() {
  return <${names[0]} aria-label="${icon.value.name}" />;
}`;
});

const htmlCode = computed(() => {
  const s = styles.value[0]?.svg;
  if (!s) {
    return `<img src="${activeSrc.value}" width="${activeSize.value}" height="${activeSize.value}" alt="${icon.value.name}">`;
  }
  return `<img src="${SITE_URL}/icons/${s.file}" width="${s.size}" height="${s.size}" alt="${icon.value.name}">`;
});

const inlineCode = computed(() => {
  const s = styles.value.find((st) => st.svg.body)?.svg;
  if (!s) return "";
  return `<svg width="${s.size}" height="${s.size}" viewBox="0 0 ${s.size} ${s.size}" fill="none" xmlns="http://www.w3.org/2000/svg">${s.body}</svg>`;
});

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    toast.show(`Copied ${label} code`);
  } catch (err) {
    toast.error(err.message);
  }
}

async function copySvg(file) {
  try {
    await navigator.clipboard.writeText(await getSvg(file));
    toast.show("Copied SVG");
  } catch (err) {
    toast.error(err.message);
  }
}

async function copyPowerApps(file) {
  try {
    await navigator.clipboard.writeText(svgToPowerApps(await getSvg(file)));
    toast.show("Copied Power Apps formula");
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadSvg(file, name) {
  try {
    const blob = new Blob([await getSvg(file)], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, name);
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadPng(file, name = file) {
  try {
    const blob = await svgToImage({
      svg: await getSvg(file),
      width: 512,
      height: 512,
      outputFormat: "blob",
    });
    saveAs(blob, name.replace(/^.*\//, "").replace(".svg", ".png"));
  } catch (err) {
    toast.error(err.message);
  }
}

// ---- SEO ---------------------------------------------------------------------
const name = icon.value.name;
const primary = styles.value[0]?.svg;
// "Filled & Regular", "Filled, Regular & Color", "Light"… from the styles this icon has.
const titleStyles = ["filled", "regular", "color", "light"]
  .filter((s) => availableStyles.value.includes(s))
  .map((s) => STYLE_INFO[s].short);
const titleStyleText =
  titleStyles.length > 1 ? `${titleStyles.slice(0, -1).join(", ")} & ${titleStyles.at(-1)}` : titleStyles[0];
useSeo({
  title: `${name} icon${titleStyleText ? ` (${titleStyleText})` : ""}`,
  description: details.value.description
    ? `${name} icon from Microsoft's Fluent UI System Icons. ${details.value.description} Free SVG, PNG and code for React, Flutter, Blazor and more.`
    : `Free ${name} icon from Microsoft's Fluent UI System Icons in every size and style. Download SVG or PNG, or copy React, Flutter, Blazor, WinUI and HTML code.`,
  path: slugToPath(slug).replace(/\/$/, ""),
});
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Icons", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Browse", item: `${SITE_URL}/browse/` },
    { "@type": "ListItem", position: 3, name: letter.value.toUpperCase(), item: `${SITE_URL}/browse/${letter.value}/` },
    { "@type": "ListItem", position: 4, name: `${name} icon` },
  ],
});
if (primary) {
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `${name} icon`,
    description: details.value.description || `${name} icon from Microsoft's Fluent UI System Icons.`,
    contentUrl: `${SITE_URL}/icons/${primary.file}`,
    encodingFormat: "image/svg+xml",
    width: primary.size,
    height: primary.size,
    license: `${SITE_URL}/license/`,
    acquireLicensePage: `${SITE_URL}/license/`,
    creditText: "Microsoft Fluent UI System Icons",
    copyrightNotice: "© Microsoft Corporation",
    creator: { "@type": "Organization", name: "Microsoft" },
  });
}
</script>
