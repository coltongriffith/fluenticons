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
<path d="M21 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75ZM5.77 3.525C4.612 2.695 3 3.523 3 4.947V19.17c0 1.384 1.53 2.22 2.695 1.473l10.47-6.716a1.75 1.75 0 0 0 .074-2.895L5.77 3.525ZM4.5 4.947a.25.25 0 0 1 .396-.203l10.47 7.507a.25.25 0 0 1-.011.413l-10.47 6.717a.25.25 0 0 1-.385-.21V4.946Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNext',
    mixins: [icon]
};
</script>