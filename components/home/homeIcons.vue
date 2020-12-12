<template>
  <section class="text-gray-700 dark:text-white">
    <div class="grid grid-cols-2 divide-x min-h-screen">
      <div class="px-8 py-6 dark:bg-gray-900">
        <div class="mb-4">
          <p class="font-semibold text-xl">Regular</p>
          <p class="text-gray-500 dark:text-gray-200 text-sm">
            2px Stroke Width
          </p>
        </div>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 text-center"
        >
          <icon
            v-for="(icon, n) in filteredIcons"
            :key="n"
            :icon="icon"
            type="regular_icons"
          />
        </ul>
      </div>
      <div class="px-8 py-6 dark:bg-gray-900">
        <div class="mb-4">
          <p class="font-semibold text-xl">Filled</p>
          <p class="text-gray-500 dark:text-gray-200 text-sm">
            Solid filled color
          </p>
        </div>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 text-center"
        >
          <icon
            v-for="(icon, n) in filteredIcons"
            :key="n"
            :icon="icon"
            type="filled_icons"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import icon_db from "../../constants/icon_db.json";
export default {
  props: ["query"],
  data() {
    return {
      icons: icon_db,
    };
  },
  computed: {
    filteredIcons() {
      return this.icons.filter((icon) => {
        return icon.name.includes(this.query.toLowerCase());
      });
    },
  },
};
</script>