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
<path d="M10 3.25A1.75 1.75 0 0 0 8.25 5v3.25H5A1.75 1.75 0 0 0 3.25 10v4c0 .966.784 1.75 1.75 1.75h3.25V19c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 15.75 19v-3.25H19A1.75 1.75 0 0 0 20.75 14v-4A1.75 1.75 0 0 0 19 8.25h-3.25V5A1.75 1.75 0 0 0 14 3.25h-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDoctor',
    mixins: [icon]
};
</script>