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
<path d="M8.205 4.844a1 1 0 0 1 .844 1.813A6.997 6.997 0 0 0 12 20a6.998 6.998 0 0 0 2.965-13.336 1 1 0 0 1 .848-1.812A8.996 8.996 0 0 1 21 13.003C21 17.973 16.97 22 12 22s-9-4.028-9-8.996a8.996 8.996 0 0 1 5.205-8.16ZM12 2a1 1 0 0 1 .993.883L13 3v7a1 1 0 0 1-1.993.118L11 10V3a1 1 0 0 1 1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPower',
    mixins: [icon]
};
</script>