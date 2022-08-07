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
<path d="M9.5 2a7.503 7.503 0 0 1 7.179 5.321 7.5 7.5 0 1 1-9.357 9.358A7.5 7.5 0 0 1 9.5 2Zm7.498 7.599L17 9.5A7.5 7.5 0 0 1 9.6 17a5.5 5.5 0 1 0 7.399-7.4ZM9.5 4a5.5 5.5 0 0 0-2.498 10.401L7 14.5A7.5 7.5 0 0 1 14.4 7a5.497 5.497 0 0 0-4.9-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhotoFilter',
    mixins: [icon]
};
</script>