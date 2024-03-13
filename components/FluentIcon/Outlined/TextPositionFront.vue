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
<path d="M3.75 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM12 8.5A2.5 2.5 0 0 0 9.708 10H8.126a4.002 4.002 0 0 1 7.748 0h-1.582A2.5 2.5 0 0 0 12 8.5ZM8 13.5h1.5v2.25a.75.75 0 0 1-1.5 0V13.5ZM16 13.5h-1.5v2.25a.75.75 0 0 0 1.5 0V13.5ZM20.25 11a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h16.5ZM3 18.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextPositionFront',
    mixins: [icon]
};
</script>