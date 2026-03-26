<template>
  <aside class="editor-sidebar">
    <div class="h-[75px] border-b dark:border-gray-700 flex-between px-4">
      <div class="text-sm font-medium">
        {{ icon ? icon.name.replace(/([A-Z])/g, ' $1') : 'Preview' }}
      </div>
      <button
        class="focus:outline-none p-2 rounded-full focus:bg-gray-100 hover:bg-gray-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700"
        @click="favoriteToggle"
        aria-label="Favorite"
      >
        <FluentIconFilledHeart class="text-gray-500 h-5 w-5" v-if="isFavorite" />
        <FluentIconOutlinedHeart class="text-gray-500 h-5 w-5" v-else />
      </button>
    </div>
    <div class="h-64">
      <div class="icon-editor-panel dots-pattern-background relative">
        <component
          :is="icon.componentName"
          class="h-32 w-32"
          :style="{ color }"
          :type="gradientType"
          :gradient="gradient"
          ref="iconRef"
        />
        <div class="absolute bottom-2 left-2">
          <img
            src="/gradient.png"
            width="20"
            height="20"
            alt="gradient"
            class="cursor-pointer"
            @click="openPicker = !openPicker"
          />
        </div>
        <div class="absolute bottom-2 right-2">
          <input
            type="color"
            :value="color"
            @input="onColorInput"
            style="width: 20px; height: 20px; cursor: pointer; border: none; padding: 0; background: none;"
            title="Pick color"
          />
        </div>
        <ClientOnly>
          <div
            v-if="openPicker"
            ref="pickerRef"
            class="absolute left-2/4 translate-x-[-50%] top-full z-[99] bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
          >
            <div class="flex gap-3 items-center mb-2">
              <div>
                <label class="text-xs block mb-1">Start</label>
                <input type="color" :value="gradientStartHex" @input="updateGradientStart" style="width: 32px; height: 32px; cursor: pointer;" />
              </div>
              <div>
                <label class="text-xs block mb-1">End</label>
                <input type="color" :value="gradientEndHex" @input="updateGradientEnd" style="width: 32px; height: 32px; cursor: pointer;" />
              </div>
              <div>
                <label class="text-xs block mb-1">Angle</label>
                <input type="range" min="0" max="360" v-model.number="gradient.degree" style="width: 80px;" />
              </div>
              <div>
                <label class="text-xs block mb-1">Type</label>
                <select v-model="gradient.type" class="text-xs border rounded px-1 py-1 bg-transparent">
                  <option value="linear">Linear</option>
                  <option value="radial">Radial</option>
                </select>
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
    <ul class="divide-y border-t border-b border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700 text-sm mt-4">
      <li>
        <div class="grid grid-cols-2">
          <select class="form-select border-0 focus:outline-none text-xs bg-transparent" v-model="selectedCopyType">
            <option v-for="(t, i) in copyTypes" :value="t.value" :key="i">{{ t.name }}</option>
          </select>
          <button
            class="flex-between px-4 py-2 bg-gray-100 dark:bg-[#070d19] border-l border-gray-300 dark:border-gray-700"
            @click="copy()"
          >
            <p>Copy</p>
            <FluentIconOutlinedCopy class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <div class="grid grid-cols-2">
          <select class="form-select border-0 focus:outline-none text-xs bg-transparent" v-model="selectedExportType">
            <option v-for="(t, i) in exportTypes" :value="t.value" :key="i">{{ t.name }}</option>
          </select>
          <button
            class="flex-between px-4 py-2 bg-gray-100 dark:bg-[#070d19] border-l border-gray-300 dark:border-gray-700"
            @click="exportIcon"
          >
            <p>Download</p>
            <FluentIconOutlinedArrowDownload class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <button
          class="flex-between px-4 py-2 w-full"
          @click="showFavoritesDownloadManager = !showFavoritesDownloadManager"
        >
          <div class="flex-space-x-2">
            <FluentIconOutlinedFolder class="text-gray-500 h-4 w-4" />
            <p>Download favorites as zip</p>
          </div>
          <FluentIconOutlinedChevronDown
            class="text-gray-500 h-4 w-4 transform transition-transform"
            :class="{ '-rotate-90': showFavoritesDownloadManager }"
          />
        </button>
        <base-accordian>
          <base-favorites-download-manager v-if="showFavoritesDownloadManager" />
        </base-accordian>
      </li>
    </ul>
    <buy-me-coffee />
  </aside>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import { onClickOutside } from '@vueuse/core'
import { useFavoritesStore } from '~/stores/favorites'
import { getIconSnippet, svgToImage } from '~/utils/iconManager'
import FileSaver from 'file-saver'

const props = defineProps({
  icon: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['login'])

const { loggedIn } = useAuth()
const store = useFavoritesStore()
const colorMode = useColorMode()
const toast = useToast()
const iconRef = ref(null)
const pickerRef = ref(null)

const color = ref('#212121')
const colorHasChanged = ref(false)
const openPicker = ref(false)
const gradientType = ref('single')
const selectedCopyType = ref('svg')
const selectedExportType = ref('png')
const showFavoritesDownloadManager = ref(false)

const gradient = reactive({
  type: 'linear',
  degree: 0,
  points: [
    { left: 0, red: 0, green: 0, blue: 0, alpha: 1 },
    { left: 100, red: 255, green: 0, blue: 0, alpha: 1 },
  ],
})

const copyTypes = [
  { name: 'SVG', value: 'svg' },
  { name: 'HTML Image', value: 'html' },
  { name: 'Vue Component', value: 'vue' },
  { name: 'React Component', value: 'react' },
]
const exportTypes = [
  { name: 'PNG', value: 'png' },
  { name: 'SVG', value: 'svg' },
  { name: 'WEBP', value: 'webp' },
  { name: 'Vue Component', value: 'vue' },
  { name: 'React Component', value: 'react' },
]

const isFavorite = computed(() => store.isAFavorite(props.icon?.componentName))

const gradientStartHex = computed(() => rgbToHex(gradient.points[0]))
const gradientEndHex = computed(() => rgbToHex(gradient.points[1]))

watch(
  () => colorMode.value,
  (val) => {
    if (!colorHasChanged.value) {
      color.value = val === 'dark' ? '#ffffff' : '#212121'
    }
  },
  { immediate: true }
)

onClickOutside(pickerRef, () => {
  if (openPicker.value) openPicker.value = false
})

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    color.value = '#ffffff'
  }
})

function onColorInput(e) {
  color.value = e.target.value
  colorHasChanged.value = true
  gradientType.value = 'single'
}

function updateGradientStart(e) {
  const { r, g, b } = hexToRgb(e.target.value)
  gradient.points[0] = { ...gradient.points[0], red: r, green: g, blue: b }
  gradientType.value = gradient.type
}

function updateGradientEnd(e) {
  const { r, g, b } = hexToRgb(e.target.value)
  gradient.points[1] = { ...gradient.points[1], red: r, green: g, blue: b }
  gradientType.value = gradient.type
}

function rgbToHex({ red, green, blue }) {
  return '#' + [red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 0, g: 0, b: 0 }
}

function favoriteToggle() {
  if (isFavorite.value) {
    store.unFavoriteIcon(props.icon)
    toast.info('Removed from favorites')
  } else {
    store.favoriteIcon(props.icon)
    toast.info('Added to favorites')
  }
}

async function copy() {
  try {
    const snippet = await getIconSnippet(selectedCopyType.value, props.icon.svgFileName, color.value)
    await navigator.clipboard.writeText(snippet)
    toast.success(`Copied ${selectedCopyType.value} snippet`)
  } catch (err) {
    toast.error(err.message)
  }
}

async function convertToImage(type) {
  return svgToImage({
    svg: iconRef.value?.$el,
    mimetype: `image/${type}`,
    width: 512,
    height: 512,
    quality: 1,
    outputFormat: 'base64',
  })
}

async function exportIcon() {
  if (!loggedIn.value && gradientType.value !== 'single') {
    emit('login')
    return
  }
  if (!selectedExportType.value) return
  switch (selectedExportType.value) {
    case 'svg':
      downloadImage(`/icons/${props.icon.svgFileName}`, props.icon.svgFileName)
      break
    case 'png':
      downloadImage(await convertToImage('png'), `${props.icon.svgFileName.replace('.svg', '')}.png`)
      break
    case 'webp':
      downloadImage(await convertToImage('webp'), `${props.icon.svgFileName.replace('.svg', '')}.webp`)
      break
    case 'vue':
    case 'react':
      downloadComponent(selectedExportType.value)
      break
  }
}

function downloadImage(url, filename) {
  const link = document.createElement('a')
  link.style.opacity = '0'
  link.download = filename
  link.href = url
  link.click()
  link.remove()
}

async function downloadComponent(type) {
  const snippet = await getIconSnippet(type, props.icon.svgFileName, color.value)
  const blob = new Blob([snippet], { type: 'text/plain;charset=utf-8' })
  FileSaver.saveAs(blob, `${props.icon.svgFileName.replace('.svg', '')}.${type === 'vue' ? 'vue' : 'js'}`)
}
</script>
