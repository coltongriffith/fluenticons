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
            class="h-32 rounded border dark:bg-gray-800"
            v-for="n in 320"
            :key="n"
          ></li>
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
            class="h-32 rounded border dark:bg-gray-800"
            v-for="n in 320"
            :key="n"
          ></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>