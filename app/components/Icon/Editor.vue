<template>
  <aside class="editor-sidebar" :class="{ 'editor-open': mobileOpen }">
    <div class="h-[75px] border-b dark:border-gray-700 flex-between px-4">
      <div class="text-sm font-medium">
        {{ icon.name }}
      </div>
      <div class="flex items-center">
        <button
          class="focus:outline-none p-2 rounded-full focus:bg-gray-100 hover:bg-gray-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700"
          @click="favoriteToggle"
          aria-label="Favorite"
        >
          <FluentSvg
            :ui="isFavorite(icon) ? 'heart_24_filled' : 'heart_24_regular'"
            class="text-gray-500 h-5 w-5"
          />
        </button>
        <button
          class="lg:hidden focus:outline-none p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="mobileOpen = false"
          aria-label="Close preview"
        >
          <FluentSvg ui="dismiss_24_regular" class="text-gray-500 h-5 w-5" />
        </button>
      </div>
    </div>
    <div class="h-64">
      <div class="icon-editor-panel dots-pattern-background relative">
        <svg
          ref="preview"
          :width="svg.size"
          :height="svg.size"
          :viewBox="`0 0 ${svg.size} ${svg.size}`"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-32 w-32"
          :style="{ color }"
          v-html="previewBody"
        />
        <div class="absolute bottom-2 left-2">
          <button class="block" aria-label="Gradient" @click.stop="openPicker = !openPicker">
            <img
              src="/gradient.png"
              width="20"
              height="20"
              alt=""
              class="block cursor-pointer"
            />
          </button>
        </div>
        <div class="absolute bottom-2 right-2">
          <IconColorSwatch v-model="color" @update:model-value="onColorPicked" />
        </div>
        <div
          v-if="openPicker"
          ref="picker"
          class="absolute left-2/4 translate-x-[-50%] top-full z-[99] shadow-lg"
        >
          <IconGradientPicker v-model="gradient" @update:model-value="mode = 'gradient'" />
        </div>
      </div>
    </div>
    <ul
      class="divide-y border-t border-b border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700 text-sm mt-4"
    >
      <li>
        <div class="grid grid-cols-2">
          <select
            class="form-select border-0 focus:outline-none text-xs bg-transparent"
            aria-label="Copy format"
            v-model="selectedCopyType"
          >
            <option v-for="type in copyTypes" :value="type.value" :key="type.value">
              {{ type.name }}
            </option>
          </select>
          <button
            class="flex-between px-4 py-2 bg-gray-100 dark:bg-[#070d19] border-l border-gray-300 dark:border-gray-700"
            @click="copy()"
          >
            <p>Copy</p>
            <FluentSvg ui="copy_24_regular" class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <div class="grid grid-cols-2">
          <select
            class="form-select border-0 focus:outline-none text-xs bg-transparent"
            aria-label="Download format"
            v-model="selectedExportType"
          >
            <option v-for="type in exportTypes" :value="type.value" :key="type.value">
              {{ type.name }}
            </option>
          </select>
          <button
            class="flex-between px-4 py-2 bg-gray-100 dark:bg-[#070d19] border-l border-gray-300 dark:border-gray-700"
            @click="exportIcon"
          >
            <p>Download</p>
            <FluentSvg ui="arrow_download_24_regular" class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <button
          class="flex-between px-4 py-2 w-full"
          @click="showFavoritesDownloadManager = !showFavoritesDownloadManager"
        >
          <div class="flex-space-x-2">
            <FluentSvg ui="folder_24_regular" class="text-gray-500 h-4 w-4" />
            <p>Download favorites as zip</p>
          </div>
          <FluentSvg
            ui="chevron_down_24_regular"
            class="text-gray-500 h-4 w-4 transform transition-transform"
            :class="{ '-rotate-90': showFavoritesDownloadManager }"
          />
        </button>
        <Transition name="expand">
          <BaseFavoritesDownloadManager v-if="showFavoritesDownloadManager" />
        </Transition>
      </li>
      <li v-if="icon.id !== 'placeholder'">
        <NuxtLink :to="slugToPath(icon.slug)" class="flex-between px-4 py-2 w-full">
          <div class="flex-space-x-2">
            <FluentSvg ui="open_24_regular" class="text-gray-500 h-4 w-4" />
            <p>Icon details &amp; code</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <BuyMeCoffee />
  </aside>
</template>

<script setup>
import { saveAs } from "file-saver";
import {
  getSvg,
  svgToImage,
  svgToVue,
  svgToReact,
  svgToHtml,
  svgToCss,
  svgToPowerApps,
} from "~/utils/iconManager";
import { track } from "~/utils/analytics";

const icon = useSelectedIcon();
const colorMode = useColorMode();
const { isFavorite, toggle } = useFavorites();
const toast = useToast();

const preview = ref(null);
const picker = ref(null);
const color = ref("#212121");
const colorHasChanged = ref(false);
const openPicker = ref(false);
const mode = ref("single"); // "single" | "gradient"
const gradient = ref({ type: "linear", angle: 0, start: "#000000", end: "#ff0000" });
const selectedCopyType = ref("svg");
const selectedExportType = ref("svg");
const mobileOpen = ref(false);
const showFavoritesDownloadManager = ref(false);

const copyTypes = [
  { name: "SVG", value: "svg" },
  { name: "HTML Image", value: "html" },
  { name: "Vue Component", value: "vue" },
  { name: "React Component", value: "react" },
  { name: "CSS Background", value: "css" },
  { name: "Power Apps (Power Fx)", value: "powerapps" },
];
const exportTypes = [
  { name: "SVG", value: "svg" },
  { name: "PNG", value: "png" },
  { name: "WEBP", value: "webp" },
  { name: "Vue Component", value: "vue" },
  { name: "React Component", value: "react" },
];

const baseName = computed(() => icon.value.svgFileName.replace(".svg", ""));
const component = computed(() =>
  componentName(icon.value.slug, icon.value.variant, fileSize(icon.value.svgFileName))
);

// Inner SVG markup of the selected icon, fetched from /icons when needed.
const svg = ref({ size: defaultIcon.size, body: defaultIcon.body });
watch(
  () => icon.value.svgFileName,
  async (file) => {
    if (icon.value.body) {
      svg.value = { size: icon.value.size || 24, body: icon.value.body };
      return;
    }
    try {
      const loaded = await fetchIconSvg(file);
      if (icon.value.svgFileName === file) svg.value = loaded;
    } catch (err) {
      toast.error(err.message);
    }
  },
  { immediate: true }
);

// On small screens the editor is a bottom sheet that opens when an icon is picked.
watch(
  () => icon.value.id,
  (id) => {
    mobileOpen.value = id !== "placeholder";
  }
);

const previewBody = computed(() => {
  if (mode.value !== "gradient") return svg.value.body;
  const { type, angle, start, end } = gradient.value;
  const stops = `<stop offset="0%" stop-color="${start}"/><stop offset="100%" stop-color="${end}"/>`;
  const defs =
    type === "linear"
      ? `<linearGradient id="fi-grad" gradientTransform="rotate(${angle})">${stops}</linearGradient>`
      : `<radialGradient id="fi-grad" cx="50%" cy="50%" r="50%">${stops}</radialGradient>`;
  return defs + svg.value.body.replace(/fill="currentColor"/g, 'fill="url(#fi-grad)"');
});

// Default preview color follows the theme until the user picks one.
// Applied after mount so the prerendered markup always hydrates cleanly.
const mounted = ref(false);
watch([() => colorMode.value, mounted], ([value, isMounted]) => {
  if (isMounted && !colorHasChanged.value) color.value = value === "dark" ? "#ffffff" : "#212121";
});
onMounted(() => {
  mounted.value = true;
  document.addEventListener("click", onClickOutsidePicker);
});
onBeforeUnmount(() => document.removeEventListener("click", onClickOutsidePicker));

function onClickOutsidePicker(e) {
  if (openPicker.value && !picker.value?.contains(e.target)) openPicker.value = false;
}

function onColorPicked() {
  colorHasChanged.value = true;
  mode.value = "single";
}

function favoriteToggle() {
  const added = toggle(icon.value);
  toast.show(added ? "Added to favorites" : "Removed from favorites");
  if (added) track("favorite_add", { icon: icon.value.slug, style: icon.value.variant });
}

// Analytics details shared by the editor's copy and download events.
const eventParams = (format) => ({
  icon: icon.value.slug,
  style: icon.value.variant,
  format,
  source: "editor",
  color_mode: mode.value,
});

// The SVG markup for the current icon with the chosen color or gradient applied.
async function currentSvg() {
  if (mode.value !== "gradient") return getSvg(icon.value.svgFileName, color.value);
  const size = svg.value.size;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">${previewBody.value}</svg>`;
}

async function snippet(type) {
  const markup = await currentSvg();
  switch (type) {
    case "vue":
      return svgToVue(markup, component.value);
    case "react":
      return svgToReact(markup, component.value);
    case "html":
      return svgToHtml(markup, icon.value.name);
    case "css":
      return svgToCss(markup);
    case "powerapps":
      return svgToPowerApps(markup);
    default:
      return markup;
  }
}

async function copy() {
  try {
    await navigator.clipboard.writeText(await snippet(selectedCopyType.value));
    toast.show(`Copied ${selectedCopyType.value} snippet`);
    track("copy_icon", eventParams(selectedCopyType.value));
  } catch (err) {
    toast.error(err.message);
  }
}

async function exportIcon() {
  try {
    const type = selectedExportType.value;
    if (type === "png" || type === "webp") {
      const image = await svgToImage({
        svg: preview.value,
        mimetype: `image/${type}`,
        width: 512,
        height: 512,
        outputFormat: "blob",
      });
      saveAs(image, `${baseName.value}.${type}`);
    } else {
      const ext = { svg: "svg", vue: "vue", react: "js" }[type];
      const blob = new Blob([await snippet(type)], { type: "text/plain;charset=utf-8" });
      saveAs(blob, `${baseName.value}.${ext}`);
    }
    track("download_icon", eventParams(type));
  } catch (err) {
    toast.error(err.message);
  }
}
</script>
