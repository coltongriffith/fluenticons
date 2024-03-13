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
<path d="M12.54 2.23a.75.75 0 0 0-1.08 0l-6.25 6.5a.75.75 0 1 0 1.08 1.04L12 3.832l5.71 5.938a.75.75 0 1 0 1.08-1.04l-6.25-6.5Zm0 19.54a.75.75 0 0 1-1.08 0l-6.25-6.5a.75.75 0 1 1 1.08-1.04L12 20.168l5.71-5.938a.75.75 0 1 1 1.08 1.04l-6.25 6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedChevronUpDown',
    mixins: [icon]
};
</script>