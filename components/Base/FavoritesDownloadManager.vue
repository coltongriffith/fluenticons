<template>
  <div class="border-t border-gray-300 dark:border-gray-700">
    <div>
      <div class="overflow-hidden grid grid-cols-4 divide-x divide-gray-300 dark:divide-gray-700">
        <button class="px-4 py-2" @click="downloadIcons('svg', 'svg')">SVG</button>
        <button class="px-4 py-2" @click="downloadIcons('png', 'png')">PNG</button>
        <button class="px-4 py-2" @click="downloadIcons('vue', 'vue')">Vue</button>
        <button class="px-4 py-2" @click="downloadIcons('react', 'js')">React</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import { useFavoritesStore } from '~/stores/favorites'
import { downloadAsZip } from '~/utils/downloadManager'
import { getIconSnippet } from '~/utils/iconManager'

const store = useFavoritesStore()
const toast = useToast()

async function downloadIcons(type, format) {
  if (!store.favorites.length) {
    toast.info('You have not favorited any icons yet')
    return
  }
  if (type === 'png') {
    alert('Still Figuring this PNG thing')
    return
  }
  toast.info('Downloading...')
  const promises = store.favorites.map((item) => getIconSnippet(type, item.svgFileName))
  const iconSnippets = await Promise.all(promises)
  const finalIcons = store.favorites.map((icon, index) => ({
    name: `${icon.name}.${format}`,
    content: iconSnippets[index],
  }))
  downloadAsZip(finalIcons)
}
</script>
