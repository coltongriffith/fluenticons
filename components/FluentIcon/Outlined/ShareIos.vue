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
<path d="M19.754 11a.75.75 0 0 1 .743.648l.007.102v7a3.25 3.25 0 0 1-3.065 3.246l-.185.005h-11a3.25 3.25 0 0 1-3.245-3.066l-.005-.184V11.75a.75.75 0 0 1 1.493-.102l.007.102v7a1.75 1.75 0 0 0 1.607 1.745l.143.006h11a1.75 1.75 0 0 0 1.744-1.607l.006-.143V11.75a.75.75 0 0 1 .75-.75ZM6.22 7.216l4.996-4.996a.75.75 0 0 1 .976-.073l.084.072 5.005 4.997a.75.75 0 0 1-.976 1.134l-.084-.073-3.723-3.716.001 11.694a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102V4.558L7.28 8.277a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1-.073-.977l.073-.084 4.996-4.996L6.22 7.216Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShareIos',
    mixins: [icon]
};
</script>