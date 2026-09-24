<template>
  <article
    class="pb-[100%] relative border dark:border-gray-700 rounded-lg overflow-hidden"
  >
    <div
      class="absolute w-20 h-10 bg-gray-200 dark:bg-gray-800 top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-45 z-40"
      v-if="isFavorite(icon)"
    ></div>
    <div class="absolute inset-0">
      <a
        :href="slugToPath(icon.slug)"
        @click="select"
        class="block w-full h-full focus:outline-none group relative hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
        :class="{ 'bg-gray-100 dark:bg-gray-700': selected }"
        :aria-label="icon.name"
      >
        <div class="absolute inset-0">
          <div class="flex flex-row justify-center items-center h-full">
            <IconMask :file="icon.svgFileName" class="h-10 w-10" />
          </div>
        </div>
        <div class="p-4 absolute inset-x-0 bottom-0">
          <div class="-mx-2 -my-1 flex flex-row justify-center">
            <p
              class="subpixel-antialiased px-2 py-1 tracking-wide leading-tight text-cool-gray-600 dark:text-cool-gray-400 cursor-text select-text text-xs truncate"
            >
              {{ icon.name }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </article>
</template>

<script setup>
import { track } from "~/utils/analytics";

const props = defineProps({
  icon: { type: Object, required: true },
});

const selectedIcon = useSelectedIcon();
const { isFavorite } = useFavorites();
const selected = computed(() => selectedIcon.value.id === props.icon.id);

// A click opens the icon in the editor. The tile is also a real link to the
// icon's page, for search engines and for opening it in a new tab.
function select(e) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  selectedIcon.value = props.icon;
  track("select_content", { content_type: "icon", item_id: props.icon.slug, style: fileStyle(props.icon.variant) });
}
</script>
