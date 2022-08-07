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
<path d="M16 3a1 1 0 0 1 1 1v6h2a1 1 0 1 1 0 2h-2v5.05a2.512 2.512 0 0 0-2 .45V4a1 1 0 0 1 1-1Zm.5 15a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 .001-3ZM4 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1c0 1.77-.366 4.436-1.507 6.7C10.335 13.997 8.299 16 5 16a1 1 0 1 1 0-2c2.301 0 3.764-1.33 4.707-3.2.771-1.53 1.138-3.338 1.252-4.8H5a1 1 0 0 1-1-1Zm8.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSlideDesign',
    mixins: [icon]
};
</script>