<template>
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
<path d="M12 8V2H5.5A1.5 1.5 0 0 0 4 3.5v17A1.5 1.5 0 0 0 5.5 22h5.967c.07 0 .14-.005.208-.015a3.873 3.873 0 0 1 .587-4.722l5-5A3.86 3.86 0 0 1 20 11.129V10h-6a2 2 0 0 1-2-2Zm1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5Zm8.53 4.97a2.871 2.871 0 0 0-4.06 0l-5 5a2.871 2.871 0 1 0 4.06 4.06l5-5a2.871 2.871 0 0 0 0-4.06Zm-3 1.06a1.371 1.371 0 1 1 1.94 1.94L19 17.94 17.06 16l1.97-1.97Zm-2 4.94a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentPill',
    mixins: [icon]
};
</script>