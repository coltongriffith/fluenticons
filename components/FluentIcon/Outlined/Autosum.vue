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
<path d="M5.06 4.457A.75.75 0 0 1 5.75 4h12.5a.75.75 0 0 1 0 1.5H7.52l5.36 5.539a.75.75 0 0 1 .03 1.01L7.38 18.5h10.87a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.57-1.238l6.147-7.17-6.116-6.32a.75.75 0 0 1-.152-.815Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAutosum',
    mixins: [icon]
};
</script>