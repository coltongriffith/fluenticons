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
<path d="M10 7.902a1 1 0 0 0-1.854-.52l-.073.12c-.403.667-.842 1.394-2.087 2.14a1 1 0 0 0 1.029 1.716A8.53 8.53 0 0 0 8 10.672v5.33a1 1 0 1 0 2 0v-8.1Zm3.707 4.392a1 1 0 1 0-1.414 1.414l.793.793-.793.793a1 1 0 0 0 1.414 1.415l.793-.793.793.793a1 1 0 1 0 1.414-1.415l-.793-.793.793-.793a1 1 0 0 0-1.414-1.414l-.793.793-.793-.793Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMultiplier1x',
    mixins: [icon]
};
</script>