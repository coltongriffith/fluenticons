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
<path d="M19 12.83V13a2.006 2.006 0 0 1-2 2H7a2.006 2.006 0 0 1-2-2v-.17a2.006 2.006 0 0 1 .59-1.42l1.82-1.82A2.006 2.006 0 0 1 8.83 9h6.34a2.006 2.006 0 0 1 1.42.59l1.82 1.82a2.008 2.008 0 0 1 .59 1.42Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPortMicroUsb',
    mixins: [icon]
};
</script>