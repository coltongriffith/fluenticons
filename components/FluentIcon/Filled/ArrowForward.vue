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
<path d="M14.296 16.294a1 1 0 1 0 1.415 1.414l4.997-5.004a1 1 0 0 0 0-1.413L15.71 6.293a1 1 0 0 0-1.415 1.414L17.59 11H11a8 8 0 0 0-7.996 7.75L3 19a1 1 0 1 0 2 0 6 6 0 0 1 5.775-5.996L11 13h6.586l-3.29 3.294Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowForward',
    mixins: [icon]
};
</script>