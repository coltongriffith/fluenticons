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
<path d="M9.704 8.706A1 1 0 1 0 8.29 7.292l-4.997 5.004a1 1 0 0 0 0 1.413l4.997 4.998a1 1 0 1 0 1.415-1.414L6.41 14H13a8 8 0 0 0 7.996-7.75L21 6a1 1 0 1 0-2 0 6 6 0 0 1-5.775 5.996L13 12H6.414l3.29-3.294Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowReplyDown',
    mixins: [icon]
};
</script>