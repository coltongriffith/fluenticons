<template>
  <section class="text-gray-700 dark:text-white">
    <div class="grid grid-cols-2 divide-x">
      <div class="px-8 py-6 dark:bg-gray-900">
        <div class="mb-4">
          <p class="font-semibold text-xl">Regular</p>
          <p class="text-gray-500 dark:text-gray-200 text-sm">
            2px stroke weight, 24x24 bounding box
          </p>
        </div>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6"
        >
          <li
            class="h-32 rounded border dark:bg-gray-800 flex items-center justify-center flex-col"
            v-for="(icon, n) in filteredIcons"
            :key="n"
          >
            <img
              class="h-8 w-8 mx-auto flex-grow"
              :src="`/filled_icons/${icon.file_name}`"
              :alt="icon.name"
            />
            <p class="text-xs text-center capitalize mb-1 text-gray-500">{{ icon.name }}</p>
          </li>
        </ul>
      </div>
      <div class="px-8 py-6 dark:bg-gray-900">
        <div class="mb-4">
          <p class="font-semibold text-xl">Filled</p>
          <p class="text-gray-500 dark:text-gray-200 text-sm">
            Solid fill, 20x20 bounding box
          </p>
        </div>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6"
        >
          <li
            class="h-32 rounded border dark:bg-gray-800 flex items-center justify-center flex-col"
            v-for="(icon, n) in filteredIcons"
            :key="n"
          >
            <img
              class="h-8 w-8 mx-auto flex-grow"
              :src="`/regular_icons/${icon.file_name}`"
              :alt="icon.name"
            />
            <p class="text-xs text-center capitalize mb-1 text-gray-500">{{ icon.name }}</p>
          </li>
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