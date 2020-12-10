<template>
  <li class="relative flex flex-col-reverse">
    <h3 :id="icon.key" class="truncate text-sm capitalize">
      {{ icon.name }}
    </h3>
    <div
      class="relative mb-3 h-24"
      @mouseenter="menu = true"
      @mouseleave="menu = false"
    >
      <button
        type="button"
        :id="`${icon.key}-btn`"
        :aria-label="icon.key"
        aria-haspopup="true"
        :aria-controls="icon.key"
        class="absolute inset-0 w-full flex items-center justify-center rounded-lg border border-gray-200 cursor-auto"
      >
        <img
          class="h-7 w-h-7 mx-auto flex-grow"
          :src="`/${type}/${icon.file}`"
          :alt="icon.name"
          :class="{ darken: $colorMode.preference === 'dark' }"
        />
      </button>

      <div
        v-if="menu"
        :id="`${icon.key}`"
        role="menu"
        :aria-labelledby="`${icon.key}-btn`"
        tabindex="-1"
        class="absolute inset-0 z-10 p-1"
        :aria-activedescendant="`${icon.key}-svg`"
      >
        <div
          class="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 bg-white bg-opacity-75"
        ></div>
        <div class="overflow-hidden flex flex-col h-full space-y-1 text-sm">
          <div
            @click="copySvg"
            role="menuitem"
            tabindex="-1"
            class="relative cursor-pointer leading-42px font-medium bg-green-200 bg-opacity-25 hover:bg-opacity-75 rounded-md text-green-700 transition-colors duration-150 outline-none"
          >
            Copy SVG
          </div>
          <a
            :href="`/${this.type}/${this.icon.file}`"
            download
            role="menuitem"
            tabindex="-1"
            class="relative block cursor-pointer mt-1 leading-42px font-medium bg-green-200 bg-opacity-25 hover:bg-opacity-75 rounded-md text-green-700 transition-colors duration-150 outline-none"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["icon", "type"],
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    async copySvg() {
      const { data } = await this.$axios.get(`/${this.type}/${this.icon.file}`);
      await this.$copyText(data);
      this.$toast.show(`Copied ${this.icon.name}`);
    },
  },
};
</script>