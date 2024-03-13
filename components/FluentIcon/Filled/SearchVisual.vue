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
<path d="M3 6.5A3.5 3.5 0 0 1 6.5 3H9a1 1 0 0 1 0 2H6.5A1.5 1.5 0 0 0 5 6.5V9a1 1 0 1 1-2 0V6.5ZM21 17.5a3.5 3.5 0 0 1-3.5 3.5H15a1 1 0 1 1 0-2h2.5a1.5 1.5 0 0 0 1.5-1.5V15a1 1 0 1 1 2 0v2.5ZM21 6.5A3.5 3.5 0 0 0 17.5 3H15a1 1 0 1 0 0 2h2.5A1.5 1.5 0 0 1 19 6.5V9a1 1 0 1 0 2 0V6.5ZM6.5 21A3.5 3.5 0 0 1 3 17.5V15a1 1 0 1 1 2 0v2.5A1.5 1.5 0 0 0 6.5 19H9a1 1 0 1 1 0 2H6.5ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.5 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSearchVisual',
    mixins: [icon]
};
</script>