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
<path d="M13.378 3.026a9.004 9.004 0 0 1 7.308 13.494 9.004 9.004 0 0 1-15.21.611.675.675 0 0 1 .328-1.018c3.391-1.214 5.208-2.621 6.262-4.633 1.11-2.118 1.396-4.439.62-7.62a.675.675 0 0 1 .692-.834Zm-2.384.627.006.099V9a2 2 0 1 1-1.499-1.937L9.5 4.764 6 5.83V10a2 2 0 1 1-1.499-1.937L4.5 5.273a.75.75 0 0 1 .43-.678l.102-.04 5-1.52a.75.75 0 0 1 .962.618Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSleep',
    mixins: [icon]
};
</script>