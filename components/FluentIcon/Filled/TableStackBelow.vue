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
<path d="M9.5 9.5v5h5v-5h-5ZM8 9.5v5H3.75a.75.75 0 0 1-.75-.75V9.5h5ZM9.5 8h5V3h-5v5ZM16 9.5v5h4.25a.75.75 0 0 0 .75-.75V9.5h-5ZM21 8h-5V3h1.75A3.25 3.25 0 0 1 21 6.25V8ZM8 8H3V6.25A3.25 3.25 0 0 1 6.25 3H8v5ZM3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableStackBelow',
    mixins: [icon]
};
</script>