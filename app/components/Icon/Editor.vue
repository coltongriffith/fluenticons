<template>
  <aside class="editor-sidebar">
    <div class="h-[75px] border-b dark:border-gray-700 flex-between px-4">
      <div class="text-sm font-medium">
        {{ icon.name.replace(/([A-Z])/g, " $1") }}
      </div>
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
    </div>
    <div class="h-64">
      <div class="icon-editor-panel dots-pattern-background relative">
        <svg
          ref="preview"
          :width="icon.size"
          :height="icon.size"
          :viewBox="`0 0 ${icon.size} ${icon.size}`"
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
    </ul>
    <BuyMeCoffee />
  </aside>
</template>

<script setup>
import { saveAs } from "file-saver";
import { getSvg, svgToImage, svgToVue, svgToReact, svgToHtml } from "~/utils/iconManager";

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
const selectedExportType = ref("png");
const showFavoritesDownloadManager = ref(false);

const copyTypes = [
  { name: "SVG", value: "svg" },
  { name: "HTML Image", value: "html" },
  { name: "Vue Component", value: "vue" },
  { name: "React Component", value: "react" },
];
const exportTypes = [
  { name: "PNG", value: "png" },
  { name: "SVG", value: "svg" },
  { name: "WEBP", value: "webp" },
  { name: "Vue Component", value: "vue" },
  { name: "React Component", value: "react" },
];

const baseName = computed(() => icon.value.svgFileName.replace(".svg", ""));

const previewBody = computed(() => {
  if (mode.value !== "gradient") return icon.value.body;
  const { type, angle, start, end } = gradient.value;
  const stops = `<stop offset="0%" stop-color="${start}"/><stop offset="100%" stop-color="${end}"/>`;
  const defs =
    type === "linear"
      ? `<linearGradient id="fi-grad" gradientTransform="rotate(${angle})">${stops}</linearGradient>`
      : `<radialGradient id="fi-grad" cx="50%" cy="50%" r="50%">${stops}</radialGradient>`;
  return defs + icon.value.body.replace(/fill="currentColor"/g, 'fill="url(#fi-grad)"');
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
  toast.show(toggle(icon.value) ? "Added to favorites" : "Removed from favorites");
}

// The SVG markup for the current icon with the chosen color or gradient applied.
async function currentSvg() {
  if (mode.value !== "gradient") return getSvg(icon.value.svgFileName, color.value);
  const size = icon.value.size;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">${previewBody.value}</svg>`;
}

async function snippet(type) {
  const svg = await currentSvg();
  switch (type) {
    case "vue":
      return svgToVue(svg, icon.value.svgFileName);
    case "react":
      return svgToReact(svg, icon.value.svgFileName);
    case "html":
      return svgToHtml(svg, icon.value.svgFileName);
    default:
      return svg;
  }
}

async function copy() {
  try {
    await navigator.clipboard.writeText(await snippet(selectedCopyType.value));
    toast.show(`Copied ${selectedCopyType.value} snippet`);
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
  } catch (err) {
    toast.error(err.message);
  }
}
</script>
