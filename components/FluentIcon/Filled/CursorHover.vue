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
<path d="M4.5 4A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-7.25a1.75 1.75 0 0 1 2.785-1.411l7.5 7.5c.375.275.615.679.69 1.116A2.5 2.5 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4h-15Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11.28 10.22a.75.75 0 0 0-1.28.53v10.5a.75.75 0 0 0 1.368.425l2.467-3.588 4.26.897a.75.75 0 0 0 .685-1.264l-7.5-7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCursorHover',
    mixins: [icon]
};
</script>