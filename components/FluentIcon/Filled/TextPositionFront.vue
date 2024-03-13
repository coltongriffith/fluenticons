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
<path d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2H3.75ZM12 8.75c-.78 0-1.467.397-1.871 1H7.937a4.252 4.252 0 0 1 8.126 0h-2.192a2.248 2.248 0 0 0-1.871-1ZM3.75 10.75a1 1 0 1 0 0 2h16.5a1 1 0 1 0 0-2H3.75ZM7.75 13.75h2v2a1 1 0 1 1-2 0v-2ZM16.25 13.75h-2v2a1 1 0 1 0 2 0v-2ZM2.75 18.75a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextPositionFront',
    mixins: [icon]
};
</script>