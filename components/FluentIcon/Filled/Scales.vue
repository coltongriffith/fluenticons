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
<path d="M3.75 3a.75.75 0 0 0 0 1.5h1.042l-2.737 6.717A.75.75 0 0 0 2 11.5a3.5 3.5 0 1 0 7 0 .75.75 0 0 0-.055-.283L6.208 4.5h5.042v12H7.253a2.25 2.25 0 0 0 0 4.5h9.497a2.25 2.25 0 0 0 0-4.5h-4v-12h5.042l-2.737 6.717A.75.75 0 0 0 15 11.5a3.5 3.5 0 1 0 7 0 .75.75 0 0 0-.055-.283L19.208 4.5h1.042a.75.75 0 0 0 0-1.5H3.75ZM5.5 6.738l1.635 4.012h-3.27L5.5 6.738Zm11.365 4.012L18.5 6.738l1.635 4.012h-3.27Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledScales',
    mixins: [icon]
};
</script>