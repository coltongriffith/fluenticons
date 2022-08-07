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
<path d="M5.161 10.073C4.454 9.265 5.028 8 6.102 8h11.796c1.074 0 1.648 1.265.941 2.073l-5.522 6.31a1.75 1.75 0 0 1-2.634 0l-5.522-6.31ZM6.653 9.5l5.159 5.896a.25.25 0 0 0 .376 0l5.16-5.896H6.652Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCaretDown',
    mixins: [icon]
};
</script>