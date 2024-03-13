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
<path d="M6 11h1.25A3.75 3.75 0 0 0 11 7.25V6h3.75A3.25 3.25 0 0 1 18 9.25V13h-1.25A3.75 3.75 0 0 0 13 16.75V18H9.25A3.25 3.25 0 0 1 6 14.75V11Z" :fill="fill" :fill-opacity="opacity" />

<path d="M1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75v3.5A2.75 2.75 0 0 1 7.25 10h-3.5A2.75 2.75 0 0 1 1 7.25v-3.5ZM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5ZM14 16.75A2.75 2.75 0 0 1 16.75 14h3.5A2.75 2.75 0 0 1 23 16.75v3.5A2.75 2.75 0 0 1 20.25 23h-3.5A2.75 2.75 0 0 1 14 20.25v-3.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPositionToBack',
    mixins: [icon]
};
</script>