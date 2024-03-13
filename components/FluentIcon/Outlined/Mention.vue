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
<path d="M22 12v1.75a3.75 3.75 0 0 1-7.149 1.586C14.033 16.356 12.84 17 11.5 17 8.992 17 7 14.742 7 12s1.992-5 4.5-5c1.159 0 2.208.482 3.001 1.272L14.5 7.75a.75.75 0 0 1 1.493-.102L16 7.75v6a2.25 2.25 0 0 0 4.495.154l.005-.154V12a8.5 8.5 0 1 0-5.515 7.961.75.75 0 0 1 .527 1.405A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c5.43 0 9.848 4.327 9.996 9.72L22 12v1.75V12ZM11.5 8.5c-1.635 0-3 1.548-3 3.5s1.365 3.5 3 3.5c1.634 0 3-1.548 3-3.5s-1.366-3.5-3-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMention',
    mixins: [icon]
};
</script>