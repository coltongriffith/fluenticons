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
<path d="M11.25 21.25a.75.75 0 0 0 1.5 0V20h2.5a2.25 2.25 0 0 0 2.25-2.25v-2.5A2.25 2.25 0 0 0 15.25 13h-2.5v-2h4.5a2.25 2.25 0 0 0 2.25-2.25v-2.5A2.25 2.25 0 0 0 17.25 4h-4.5V2.75a.75.75 0 0 0-1.5 0V4h-4.5A2.25 2.25 0 0 0 4.5 6.25v2.5A2.25 2.25 0 0 0 6.75 11h4.5v2h-2.5a2.25 2.25 0 0 0-2.25 2.25v2.5A2.25 2.25 0 0 0 8.75 20h2.5v1.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAlignCenterVertical',
    mixins: [icon]
};
</script>