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
<path d="M10.51 9.5h4.74a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-4.639l5.222 5.172a.75.75 0 0 0 1.056-1.066L10.509 9.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10 8.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCircleUpLeft',
    mixins: [icon]
};
</script>