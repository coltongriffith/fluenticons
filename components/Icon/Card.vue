<template>
  <article
    class="pb-[100%] relative border dark:border-gray-700 rounded-lg overflow-hidden"
  >
    <div
      class="absolute w-20 h-10 bg-gray-200 dark:bg-gray-800 top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-45 z-40"
      v-if="isFavorite"
    ></div>
    <div class="absolute inset-0">
      <button
        @click="$emit('setIcon', icon)"
        class="block w-full h-full focus:outline-none group relative hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
        :class="{ 'bg-gray-100 dark:bg-gray-700': selected }"
        :aria-label="icon.name"
      >
        <div class="absolute inset-0">
          <div class="flex flex-row justify-center items-center h-full">
            <img :src="`/icons/${icon.svgFileName}`" class="h-10 w-10 dark:invert" :alt="icon.name" loading="lazy" />
          </div>
        </div>
        <div class="p-4 absolute inset-x-0 bottom-0">
          <div class="-mx-2 -my-1 flex flex-row justify-center">
            <p class="subpixel-antialiased px-2 py-1 tracking-wide leading-tight text-cool-gray-600 dark:text-cool-gray-400 cursor-text select-text text-xs truncate">
              {{ icon.name.replace(/([A-Z])/g, ' $1') }}
            </p>
          </div>
        </div>
      </button>
    </div>
  </article>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites'

const props = defineProps({
  icon: { type: Object, required: true },
  selected: { type: Boolean, default: false },
})
defineEmits(['setIcon'])

const store = useFavoritesStore()
const isFavorite = computed(() => store.isAFavorite(props.icon.componentName))
</script>
