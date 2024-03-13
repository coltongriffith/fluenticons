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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.94 8H3.75a.75.75 0 0 0 0 1.5h4.69l5 5H3.75a.75.75 0 0 0 0 1.5h11.19l5.78 5.78a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM20.25 14.5h-2.568l1.5 1.5h1.068a.75.75 0 0 0 0-1.5ZM11.182 8l1.5 1.5h7.568a.75.75 0 0 0 0-1.5h-9.068Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEqualOff',
    mixins: [icon]
};
</script>