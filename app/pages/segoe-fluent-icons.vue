<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/microsoft-icons/" class="hover:underline">Microsoft icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>Segoe Fluent Icons</span>
    </nav>

    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Segoe Fluent Icons: full glyph list and font</h1>
      <p>
        Segoe Fluent Icons is the icon font built into Windows 11, and the font WinUI apps use for
        system icons such as the navigation menu, settings and search. Below are all
        {{ glyphs.length.toLocaleString("en-US") }} glyphs Microsoft documents, with their Unicode
        code points (E700 to {{ glyphs.at(-1)[0] }}), how to use them in WinUI, UWP and WPF, and where
        to download the font.
      </p>
      <p class="text-sm">
        Quick links: <a href="#list">Glyph list</a> · <a href="#download">Download the font</a> ·
        <a href="#xaml">Use it in XAML</a> · <a href="#web">On the web</a>
      </p>
    </div>

    <!-- Glyph list -->
    <section id="list" class="my-10 max-w-5xl" aria-labelledby="list-heading">
      <h2 id="list-heading" class="text-2xl font-bold mb-2">Segoe Fluent Icons list</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
        Search by name or code point. Glyphs show here when Segoe Fluent Icons is installed on
        your computer (every Windows 11 PC has it); the code and name always show.
        <template v-if="matched"> {{ matched }} glyphs have a Fluent UI System Icon of the same name, as a free SVG.</template>
      </p>
      <label for="segoe-search" class="sr-only">Search glyphs</label>
      <input
        id="segoe-search"
        v-model="query"
        type="search"
        placeholder="Search, e.g. settings, wifi or E713"
        class="w-full max-w-md mb-4 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
      />
      <p class="text-sm text-gray-500 mb-3" aria-live="polite">
        {{ shown.length === glyphs.length ? `${glyphs.length.toLocaleString("en-US")} glyphs` : `${shown.length} of ${glyphs.length.toLocaleString("en-US")} glyphs` }}
      </p>
      <div class="relative overflow-x-auto rounded-lg border dark:border-gray-700">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 dark:bg-gray-800 text-left">
            <tr>
              <th v-if="fontInstalled" class="px-4 py-2 font-medium">Glyph</th>
              <th class="px-4 py-2 font-medium">Unicode</th>
              <th class="px-4 py-2 font-medium">Name</th>
              <th class="px-4 py-2 font-medium">Fluent SVG</th>
              <th class="px-4 py-2"><span class="sr-only">Copy</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="[code, name, fluent] in shown" :key="code" class="border-t dark:border-gray-700">
              <td v-if="fontInstalled" class="px-4 py-1.5">
                <span class="segoe-glyph text-xl" aria-hidden="true">{{ String.fromCodePoint(parseInt(code, 16)) }}</span>
              </td>
              <td class="px-4 py-1.5"><code>{{ code }}</code></td>
              <td class="px-4 py-1.5">{{ name }}</td>
              <td class="px-4 py-1.5">
                <NuxtLink v-if="fluent" :to="slugToPath(fluent)" class="text-blue-600 dark:text-blue-400 hover:underline">{{ fluent }}</NuxtLink>
              </td>
              <td class="px-4 py-1.5 text-right whitespace-nowrap">
                <button class="text-xs rounded-md border dark:border-gray-700 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800" @click="copy(code, name)">
                  Copy &amp;#x{{ code }};
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-gray-500 mt-3">
        Code points and names from Microsoft's
        <a href="https://learn.microsoft.com/windows/apps/design/iconography/segoe-fluent-icons-font" class="underline" rel="noopener">Segoe Fluent Icons font</a>
        documentation. Microsoft marks glyphs from E000 to E5FF as legacy.
      </p>
    </section>

    <div class="prose dark:prose-invert max-w-3xl">
      <h2 id="download">Download Segoe Fluent Icons</h2>
      <ul>
        <li><strong>Windows 11:</strong> nothing to download, the font comes with Windows.</li>
        <li>
          <strong>Windows 10, Mac or another device:</strong> download it from Microsoft's
          <a href="https://learn.microsoft.com/windows/apps/design/downloads/#fonts" rel="noopener">Design resources</a>
          page, along with the other Windows fonts and design toolkits.
        </li>
      </ul>
      <p>
        Microsoft allows the downloaded font for design and development, but not to be shipped to
        another platform. The download can also lag behind the copy in Windows 11, so a glyph from
        this list may show as an empty box in it; the font in an up-to-date Windows 11 has every
        glyph.
      </p>

      <h2 id="xaml">Use Segoe Fluent Icons in WinUI, UWP and WPF</h2>
      <p>
        In WinUI 3 and UWP, use <code>SymbolIcon</code> for glyphs in the
        <code>Symbol</code> enumeration, and a <code>FontIcon</code> with the code point for
        everything else. Referencing the font through <code>SymbolThemeFontFamily</code> rather
        than by name lets Windows 10, which doesn't have Segoe Fluent Icons, fall back to Segoe MDL2
        Assets.
      </p>
      <pre><code>&lt;!-- WinUI 3 / UWP --&gt;
&lt;SymbolIcon Symbol="GlobalNavigationButton" /&gt;
&lt;FontIcon FontFamily="{StaticResource SymbolThemeFontFamily}" Glyph="&amp;#xE700;" /&gt;

&lt;!-- WPF (Windows 11 has the font; list MDL2 as the fallback) --&gt;
&lt;TextBlock FontFamily="Segoe Fluent Icons, Segoe MDL2 Assets" Text="&amp;#xE713;" FontSize="16" /&gt;</code></pre>
      <p>From C#, set the glyph as a string with the same code point:</p>
      <pre><code>var icon = new FontIcon { Glyph = "" };   // Settings
button.Content = icon;</code></pre>
      <p>
        Microsoft designs the glyphs for 16, 20, 24, 32, 40, 48 and 64 px; other sizes can look
        blurry.
      </p>

      <h2 id="web">Segoe Fluent Icons on the web and in other apps</h2>
      <p>
        Because the font can't be shipped to other platforms, don't load it on a website or bundle
        it in a cross-platform app. Use
        <NuxtLink to="/">Fluent UI System Icons</NuxtLink> instead: Microsoft's open-source set in
        the same design language, MIT licensed, as SVG, React components and fonts. The
        <strong>Fluent SVG</strong> column above links to the matching icon where the names agree,
        and <NuxtLink to="/">the search</NuxtLink> finds the rest by meaning.
      </p>

      <h2>Segoe Fluent Icons vs. Segoe MDL2 Assets</h2>
      <p>
        Segoe MDL2 Assets was the Windows 10 icon font. Windows 11 replaced it with Segoe Fluent
        Icons, redrawn in Fluent's rounder style. Symbols the two fonts share use the same code
        points, which is why <code>SymbolThemeFontFamily</code> can fall back to MDL2 on Windows 10.
        MDL2 still ships with Windows, so older apps keep working. See
        <NuxtLink to="/microsoft-icons/">every Microsoft icon set</NuxtLink> for how these fonts
        relate to Fluent UI System Icons, Fabric MDL2 and the Office icons.
      </p>
    </div>
  </div>
</template>

<script setup>
import glyphs from "~/generated/segoe.json";
import { track } from "../utils/analytics";

const toast = useToast();
const query = ref("");
const matched = glyphs.filter((g) => g[2]).length;
const shown = computed(() => {
  const q = query.value.trim().toLowerCase().replace(/^(?:u\+|&#x|\\u|0x)/, "").replace(/[\s;]/g, "");
  if (!q) return glyphs;
  return glyphs.filter(([code, name, fluent]) => code.toLowerCase().includes(q) || name.toLowerCase().includes(q) || (fluent && fluent.replace(/_/g, "").includes(q)));
});

// Glyphs only render with the font installed locally (it isn't served from
// here), so the column appears when a glyph measures differently from the
// fallback font.
const fontInstalled = ref(false);
onMounted(() => {
  try {
    const ctx = document.createElement("canvas").getContext("2d");
    const width = (font) => ((ctx.font = font), ctx.measureText("").width);
    fontInstalled.value = width('32px "Segoe Fluent Icons", monospace') !== width("32px monospace");
  } catch {}
});

async function copy(code, name) {
  try {
    await navigator.clipboard.writeText(`&#x${code};`);
    toast.show(`Copied ${name} (&#x${code};)`);
    track("copy_code", { icon: name, platform: "segoe" });
  } catch (err) {
    toast.error(err.message);
  }
}

useSeo({
  fullTitle: "Segoe Fluent Icons — Full List, Glyph Codes & Font Download",
  description: `All ${glyphs.length.toLocaleString("en-US")} Segoe Fluent Icons glyphs with Unicode codes, searchable. How to use the Windows 11 icon font in WinUI, UWP, WPF and XAML, and where to download it.`,
  path: "/segoe-fluent-icons",
});
useAdsense();
</script>

<style scoped>
.segoe-glyph {
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets";
}
</style>
