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
<path d="M7.83 2.44a1 1 0 0 0-1.66 1.117l4.793 7.114-2.326 3.678a4 4 0 1 0 1.57 1.26l1.977-3.126 1.884 2.796a4 4 0 1 0 1.683-1.08l-3.62-5.375v.001L7.83 2.44ZM5 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm10 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM14.52 8.79l3.325-5.256a1 1 0 0 0-1.69-1.07L13.3 6.979l1.22 1.812Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCut',
    mixins: [icon]
};
</script>