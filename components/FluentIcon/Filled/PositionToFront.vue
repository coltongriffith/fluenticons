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
<path d="M1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75V5h-.75c-.256 0-.507.023-.75.066V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.316A4.276 4.276 0 0 0 5 9.25V10H3.75A2.75 2.75 0 0 1 1 7.25v-3.5ZM14 19v1.25A2.75 2.75 0 0 0 16.75 23h3.5A2.75 2.75 0 0 0 23 20.25v-3.5A2.75 2.75 0 0 0 20.25 14H19v.75c0 .256-.023.507-.066.75h1.316c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.316a4.271 4.271 0 0 1-.75.066H14Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6 9.25A3.25 3.25 0 0 1 9.25 6h5.5A3.25 3.25 0 0 1 18 9.25v5.5A3.25 3.25 0 0 1 14.75 18h-5.5A3.25 3.25 0 0 1 6 14.75v-5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPositionToFront',
    mixins: [icon]
};
</script>