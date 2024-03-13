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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.566 2.567a8.71 8.71 0 0 0 1.057 11.035c.296.296.663.66 1.102 1.09l3.491 3.396a2.25 2.25 0 0 0 3.128 0 656.494 656.494 0 0 0 3.406-3.312l.013-.012 3.736 3.736a.75.75 0 0 0 1.061-1.06L3.28 2.22Zm9.126 11.247a2.5 2.5 0 0 1-2.874-2.874l2.874 2.874ZM14.5 11c0 .102-.006.202-.018.3l4.555 4.555A8.71 8.71 0 0 0 6.87 3.688l4.83 4.83A2.5 2.5 0 0 1 14.5 11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLocationOff',
    mixins: [icon]
};
</script>