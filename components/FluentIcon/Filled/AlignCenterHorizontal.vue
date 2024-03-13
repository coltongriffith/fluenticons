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
<path d="M21.25 12.75a.75.75 0 0 0 0-1.5H20v-2.5a2.25 2.25 0 0 0-2.25-2.25h-2.5A2.25 2.25 0 0 0 13 8.75v2.5h-2v-4.5A2.25 2.25 0 0 0 8.75 4.5h-2.5A2.25 2.25 0 0 0 4 6.75v4.5H2.75a.75.75 0 0 0 0 1.5H4v4.5a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 11 17.25v-4.5h2v2.5a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 20 15.25v-2.5h1.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAlignCenterHorizontal',
    mixins: [icon]
};
</script>