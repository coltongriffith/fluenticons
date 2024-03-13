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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.566 2.567a8.71 8.71 0 0 0 1.057 11.035c.296.296.663.66 1.102 1.09l3.491 3.396a2.25 2.25 0 0 0 3.128 0 656.494 656.494 0 0 0 3.406-3.312l.013-.012 3.736 3.736a.75.75 0 0 0 1.061-1.06L3.28 2.22Zm12.642 14.763-.006.005-3.395 3.302a.75.75 0 0 1-1.042 0 753.98 753.98 0 0 1-3.088-3l-1.487-1.468a7.21 7.21 0 0 1-1.034-8.89l3.244 3.242a3.003 3.003 0 0 0 3.712 3.713l3.096 3.096ZM11.27 8.088l3.642 3.642A3.006 3.006 0 0 0 12 8c-.252 0-.496.03-.73.09Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.096 5.629a7.21 7.21 0 0 1 .865 9.15l1.076 1.076A8.71 8.71 0 0 0 6.87 3.688l1.076 1.076a7.21 7.21 0 0 1 9.15.865Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLocationOff',
    mixins: [icon]
};
</script>