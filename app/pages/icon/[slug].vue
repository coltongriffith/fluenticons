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

    <div class="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl">
      <div
        v-for="style in styles"
        :key="style.key"
        class="rounded-lg border dark:border-gray-700 overflow-hidden"
      >
        <div class="dots-pattern-background bg-white dark:bg-gray-800 h-48 flex-center">
          <svg
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
        </div>
        <div class="p-4 border-t dark:border-gray-700">
          <p class="font-medium mb-3">{{ style.label }}</p>
          <div class="flex flex-wrap gap-2 text-sm">
            <a :href="`/icons/${style.svg.file}`" :download="style.svg.file" class="navbar-btn">
              <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>SVG</span>
            </a>
            <button class="navbar-btn" @click="downloadPng(style)">
              <FluentSvg ui="arrow_download_24_regular" class="h-4 w-4" /><span>PNG</span>
            </button>
            <button class="navbar-btn" @click="copySvg(style)">
              <FluentSvg ui="copy_24_regular" class="h-4 w-4" /><span>Copy SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>

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
      <p>
        Or paste the SVG markup inline. Setting <code>fill="currentColor"</code> makes the icon
        follow the text color of its parent:
      </p>
      <pre><code>{{ inlineCode }}</code></pre>

      <template v-if="!details.legacy">
        <h2>Use it from the SVG package</h2>
        <p>
          Microsoft's <code>@fluentui/svg-icons</code> package contains the raw SVG files, which
          works well with bundlers that import SVGs:
        </p>
        <pre><code>{{ packageCode }}</code></pre>
      </template>

      <h2>Details</h2>
      <table>
        <tbody>
          <tr><th>Name</th><td>{{ icon.name }}</td></tr>
          <tr><th>Styles</th><td>{{ styles.map((s) => s.label).join(", ") }}</td></tr>
          <tr><th>Size</th><td>{{ styles[0].svg.size }} × {{ styles[0].svg.size }} px (scalable SVG)</td></tr>
          <tr v-for="style in styles" :key="style.key">
            <th>{{ style.label }} file</th><td><code>{{ style.svg.file }}</code></td>
          </tr>
          <tr v-if="!details.legacy">
            <th>React components</th>
            <td><code>{{ styles.map((s) => s.component).join(", ") }}</code></td>
          </tr>
          <tr><th>License</th><td><NuxtLink to="/license/">MIT</NuxtLink> (© Microsoft Corporation)</td></tr>
        </tbody>
      </table>

      <template v-if="icon.keywords.length">
        <h2>Keywords</h2>
        <p class="not-prose flex flex-wrap gap-2">
          <NuxtLink
            v-for="keyword in icon.keywords"
            :key="keyword"
            :to="{ path: '/', query: { q: keyword } }"
            class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
            rel="nofollow"
          >
            {{ keyword }}
          </NuxtLink>
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
import { getSvg, svgToImage } from "~/utils/iconManager";
import { saveAs } from "file-saver";

const route = useRoute();
const slug = pathToSlug(route.params.slug);
const toast = useToast();

const { data } = await useAsyncData(`icon-${slug}`, async () => {
  const index = await loadIndex();
  const entry = index.find((e) => e.slug === slug);
  if (!entry) return null;
  const details = await loadIconDetails(slug);
  const related = (details.related || [])
    .map((s) => index.find((e) => e.slug === s))
    .filter(Boolean)
    .map((e) => ({ slug: e.slug, name: e.name, file: e.regular || e.filled }));
  const { search, ...icon } = entry;
  return { icon, details, related };
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Icon not found", fatal: true });
}

const icon = computed(() => data.value.icon);
const details = computed(() => data.value.details);
const related = computed(() => data.value.related);
const letter = computed(() => {
  const c = icon.value.name.charAt(0).toLowerCase();
  return /[a-z]/.test(c) ? c : "0-9";
});

const styles = computed(() =>
  [
    { key: "regular", label: "Regular (outlined)", variant: "outlined" },
    { key: "filled", label: "Filled", variant: "filled" },
  ]
    .filter((s) => details.value[s.key])
    .map((s) => ({ ...s, svg: details.value[s.key], component: componentName(slug, s.variant) }))
);

const intro = computed(() => {
  const name = icon.value.name;
  const styleText =
    styles.value.length === 2 ? "filled and regular (outlined) styles" : `the ${styles.value[0].label.toLowerCase()} style`;
  const description = details.value.description ? `${details.value.description} ` : "";
  return `${description}The ${name} icon is part of Microsoft's Fluent UI System Icons, available here in ${styleText} on a 24 px grid. Download it as SVG or PNG, or copy it as code — it's free to use under the MIT License.`;
});

const reactCode = computed(() => {
  const names = styles.value.map((s) => s.component);
  return `npm install @fluentui/react-icons

import { ${names.join(", ")} } from "@fluentui/react-icons";

export function Example() {
  return <${names[0]} aria-label="${icon.value.name}" />;
}`;
});

const htmlCode = computed(() => {
  const s = styles.value[0].svg;
  return `<img src="${SITE_URL}/icons/${s.file}" width="24" height="24" alt="${icon.value.name}">`;
});

const inlineCode = computed(() => {
  const s = styles.value[0].svg;
  return `<svg width="${s.size}" height="${s.size}" viewBox="0 0 ${s.size} ${s.size}" fill="none" xmlns="http://www.w3.org/2000/svg">${s.body}</svg>`;
});

const packageCode = computed(() => {
  const s = styles.value[0].svg;
  return `npm install @fluentui/svg-icons

import icon from "@fluentui/svg-icons/icons/${s.file.replace(/^ic_fluent_/, "")}";`;
});

async function copySvg(style) {
  try {
    await navigator.clipboard.writeText(await getSvg(style.svg.file));
    toast.show("Copied SVG");
  } catch (err) {
    toast.error(err.message);
  }
}

async function downloadPng(style) {
  try {
    const blob = await svgToImage({
      svg: await getSvg(style.svg.file),
      width: 512,
      height: 512,
      outputFormat: "blob",
    });
    saveAs(blob, style.svg.file.replace(".svg", ".png"));
  } catch (err) {
    toast.error(err.message);
  }
}

const name = icon.value.name;
useSeo({
  title: `${name} icon (Filled & Regular)`,
  description: details.value.description
    ? `${name} icon from Microsoft's Fluent UI System Icons. ${details.value.description} Free SVG, PNG and React code.`
    : `Free ${name} icon from Microsoft's Fluent UI System Icons in filled and regular styles. Download SVG or PNG, or copy React, Vue and HTML code.`,
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
</script>
