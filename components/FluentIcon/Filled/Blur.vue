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
<path d="M3 12a9 9 0 0 1 13.977-7.5H12v1h6.225a9.05 9.05 0 0 1 1.26 1.5H12v1h8.064c.238.477.434.979.584 1.5H12v1h8.876c.081.488.124.989.124 1.5h-9v1h8.945a8.963 8.963 0 0 1-.297 1.5H12v1h8.294a8.98 8.98 0 0 1-.81 1.5H12v1h6.708A9 9 0 0 1 3 12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBlur',
    mixins: [icon]
};
</script>