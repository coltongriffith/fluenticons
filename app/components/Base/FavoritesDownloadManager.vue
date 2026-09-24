<template>
  <div class="border-t border-gray-300 dark:border-gray-700">
    <div
      class="overflow-hidden grid grid-cols-4 divide-x divide-gray-300 dark:divide-gray-700"
    >
      <button class="px-4 py-2" @click="downloadIcons('svg', 'svg')">SVG</button>
      <button class="px-4 py-2" @click="downloadIcons('png', 'png')">PNG</button>
      <button class="px-4 py-2" @click="downloadIcons('vue', 'vue')">Vue</button>
      <button class="px-4 py-2" @click="downloadIcons('react', 'js')">React</button>
    </div>
  </div>
</template>

<script setup>
import { downloadAsZip } from "~/utils/downloadManager";
import { getIconSnippet, getSvg, svgToImage } from "~/utils/iconManager";

const { favorites } = useFavorites();
const toast = useToast();

async function toContent(type, icon) {
  if (type !== "png")
    return getIconSnippet(type, icon.svgFileName, componentName(icon.slug, icon.variant));
  return svgToImage({
    svg: await getSvg(icon.svgFileName, "#000000"),
    width: 512,
    height: 512,
    outputFormat: "blob",
  });
}

async function downloadIcons(type, format) {
  if (!favorites.value.length) {
    toast.show("You have not favorited any icons yet");
    return;
  }
  toast.show("Downloading...");
  try {
    const files = await Promise.all(
      favorites.value.map(async (icon) => ({
        name: `${icon.svgFileName.replace(".svg", "")}.${format}`,
        content: await toContent(type, icon),
      }))
    );
    await downloadAsZip(files);
  } catch (err) {
    toast.error(err.message);
  }
}
</script>
