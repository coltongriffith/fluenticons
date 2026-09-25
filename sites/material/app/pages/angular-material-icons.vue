<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>Angular Material Icons</span>
    </nav>
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Angular Material Icons</h1>
      <p>
        Using Google's Material Symbols and classic Material Icons with Angular Material's
        <code>&lt;mat-icon&gt;</code>: font setup, styles, variable settings and SVG icons.
      </p>

      <h2>1. Add the font</h2>
      <p>Add the Material Symbols stylesheet to <code>src/index.html</code>:</p>
      <CodeBlock :code="font" label="src/index.html" />
      <p>
        Add <code>&amp;icon_names=home,search,…</code> (sorted A–Z) to load only the icons you
        use, which makes the font much smaller.
      </p>

      <h2>2. Make Material Symbols the default</h2>
      <p>
        <code>mat-icon</code> uses the classic <code>material-icons</code> font by default. To use
        Material Symbols for every icon, set the default font set class once, for example in your
        root component:
      </p>
      <CodeBlock :code="registry" label="app.component.ts" />

      <h2>3. Use icons by name</h2>
      <CodeBlock :code="usage" label="app.component.html" />
      <p>
        Names are the ones on each icon's page here (<code>arrow_back</code>,
        <code>shopping_cart</code>). The <code>fontSet</code> input switches one icon to another
        style: <code>material-symbols-rounded</code> or <code>material-symbols-sharp</code>, with the
        matching family in the stylesheet.
      </p>

      <h2>4. Fill, weight, grade and size</h2>
      <p>Material Symbols' variable settings are CSS, so set them globally or per class:</p>
      <CodeBlock :code="css" label="styles.css" />

      <h2>SVG icons instead of a font</h2>
      <p>
        To ship only the icons you use without loading a font, register SVG files with
        <code>MatIconRegistry</code> and use <code>svgIcon</code>. Download the SVG from any icon's
        page here into <code>src/assets/icons/</code>:
      </p>
      <CodeBlock :code="svg" label="app.component.ts" />

      <h2>Classic Material Icons</h2>
      <p>
        Projects still on the older set load <code>family=Material+Icons</code> (or
        <code>Material+Icons+Outlined</code>, <code>+Round</code>, <code>+Sharp</code>,
        <code>+Two+Tone</code>) and write <code>&lt;mat-icon&gt;home&lt;/mat-icon&gt;</code> with no other
        setup. Most names are the same in Material Symbols, so switching is usually steps 1 and 2
        (see <NuxtLink to="/material-icons-vs-material-symbols/">Material Icons vs. Material Symbols</NuxtLink>).
      </p>

      <h2>Most used icons</h2>
      <p>Each has its <code>mat-icon</code> code, SVG and PNG.</p>
    </div>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-4">
      <li v-for="icon in popular" :key="icon.slug">
        <NuxtLink
          :to="slugToPath(icon.slug)"
          class="flex items-center gap-3 rounded-lg border dark:border-gray-700 p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask :file="icon.file" class="h-6 w-6 shrink-0" />
          <code class="text-xs truncate">{{ icon.slug }}</code>
        </NuxtLink>
      </li>
    </ul>

    <div class="prose dark:prose-invert max-w-3xl mt-12">
      <h2>Frequently asked questions</h2>
      <template v-for="item in FAQ" :key="item.q">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
const { data: popular } = await useAsyncData("angular-popular", async () =>
  (await loadIndex()).slice(0, 48).map((e) => ({ slug: e.slug, file: e.regular || e.filled }))
);

const font = `<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>`;
const registry = `import { Component, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";

@Component({ /* … */ })
export class AppComponent {
  constructor() {
    inject(MatIconRegistry).setDefaultFontSetClass("material-symbols-outlined");
  }
}`;
const usage = `<mat-icon>home</mat-icon>
<mat-icon fontSet="material-symbols-rounded">favorite</mat-icon>

<!-- In a button -->
<button mat-icon-button aria-label="Delete">
  <mat-icon>delete</mat-icon>
</button>`;
const css = `/* styles.css */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.mat-icon.filled {
  font-variation-settings: "FILL" 1;
}`;
const svg = `import { Component, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({ /* … */ })
export class AppComponent {
  constructor() {
    const sanitizer = inject(DomSanitizer);
    inject(MatIconRegistry).addSvgIcon("home", sanitizer.bypassSecurityTrustResourceUrl("assets/icons/home.svg"));
  }
}

<!-- template (HttpClient must be provided, e.g. provideHttpClient()) -->
<mat-icon svgIcon="home"></mat-icon>`;

const FAQ = [
  {
    q: "Why does mat-icon show the icon's name instead of the icon?",
    a: "The font isn't loaded or the class doesn't match it. Check the stylesheet link in index.html, and that the default font set class (or fontSet input) is the same family you loaded, such as material-symbols-outlined.",
  },
  {
    q: "How do I use a filled Material Symbol in Angular?",
    a: "Set the fill axis with CSS on that icon: font-variation-settings: \"FILL\" 1. A small class like .filled on the mat-icon keeps it reusable.",
  },
  {
    q: "Does Angular Material include the icons?",
    a: "No. @angular/material provides the mat-icon component; the icons come from the Google Fonts stylesheet or from SVG files you register.",
  },
  {
    q: "Are Angular Material icons free?",
    a: "Yes. Angular Material is MIT licensed, and Google's Material icons are released under the Apache License 2.0.",
  },
];

useSeo({
  title: "Angular Material icons: mat-icon with Material Symbols",
  description:
    "Use Google Material Icons and Symbols in Angular with mat-icon: font setup, default font set, styles, fill and weight, SVG icons and the most used icon names.",
  path: "/angular-material-icons",
});
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
</script>
