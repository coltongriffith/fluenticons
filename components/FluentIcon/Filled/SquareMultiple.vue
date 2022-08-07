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
<path d="M7.518 5H6.009a3.25 3.25 0 0 1 3.24-3h8.001A4.75 4.75 0 0 1 22 6.75v8a3.25 3.25 0 0 1-3 3.24v-1.508a1.75 1.75 0 0 0 1.5-1.732v-8a3.25 3.25 0 0 0-3.25-3.25h-8A1.75 1.75 0 0 0 7.518 5ZM5.25 6A3.25 3.25 0 0 0 2 9.25v9.5A3.25 3.25 0 0 0 5.25 22h9.5A3.25 3.25 0 0 0 18 18.75v-9.5A3.25 3.25 0 0 0 14.75 6h-9.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSquareMultiple',
    mixins: [icon]
};
</script>