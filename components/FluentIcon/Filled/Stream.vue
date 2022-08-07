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
<path d="M9 11a7 7 0 0 1 7-7h1.5a1 1 0 1 0 0-2H16a9 9 0 0 0-9 9 1 1 0 0 1-1 1H3a1 1 0 1 0 0 2h3a3 3 0 0 0 3-3Zm8-3a4 4 0 0 0-4 4 6 6 0 0 1-6 6H3a1 1 0 1 1 0-2h4a4 4 0 0 0 4-4 6 6 0 0 1 6-6h4a1 1 0 1 1 0 2h-4Zm1 4a1 1 0 0 0-1 1 9 9 0 0 1-9 9H6a1 1 0 1 1 0-2h2a7 7 0 0 0 7-7 3 3 0 0 1 3-3h3a1 1 0 1 1 0 2h-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStream',
    mixins: [icon]
};
</script>