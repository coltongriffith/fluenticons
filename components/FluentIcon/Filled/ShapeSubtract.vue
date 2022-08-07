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
<path d="M3 2.905A3.24 3.24 0 0 0 2 5.25v8a3.23 3.23 0 0 0 .555 1.817A3.247 3.247 0 0 0 5.25 16.5H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2h-8A3.24 3.24 0 0 0 3 2.905Zm6 7.845C9 9.784 9.784 9 10.75 9h8c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 9 18.75v-8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShapeSubtract',
    mixins: [icon]
};
</script>