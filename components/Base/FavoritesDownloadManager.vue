<template>
  <div class="border-t border-gray-300 dark:border-gray-700">
    <div>
      <div
        class="overflow-hidden grid grid-cols-4 divide-x divide-gray-300 dark:divide-gray-700"
      >
        <button class="px-4 py-2" @click="downloadIcons('svg', 'svg')">
          SVG
        </button>
        <button class="px-4 py-2" @click="downloadIcons('png', 'png')">
          PNG
        </button>
        <button class="px-4 py-2" @click="downloadIcons('vue', 'vue')">
          Vue
        </button>
        <button class="px-4 py-2" @click="downloadIcons('react', 'js')">
          React
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { downloadAsZip } from "../../utils/downloadManager";
import { getIconSnippet } from "../../utils/iconManager";
export default {
  computed: {
    icons() {
      return this.$store.getters.favorites;
    },
  },
  methods: {
    async downloadIcons(type, format) {
      if (!this.icons.length)
        this.$toast.show("You have not favorited any icons yet");
      else {
        this.$toast.show("Downloading...");
        switch (type) {
          case "png":
            alert("Still Figuring this PNG thing");
            return;
          default:
            const promises = this.icons.map(
              async (item) => await getIconSnippet(type, item.svgFileName)
            );
            const iconSnippets = await Promise.all(promises);
            const finalIcons = this.icons.map((icon, index) => ({
              name: `${icon.name}.${format}`,
              content: iconSnippets[index],
            }));
            downloadAsZip(finalIcons);
        }
      }
    },
  },
};
</script>
