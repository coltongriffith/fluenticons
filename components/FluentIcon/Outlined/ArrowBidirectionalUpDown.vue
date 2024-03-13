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
<path d="M11.25 5.628v12.744l-3.456-3.639a.75.75 0 0 0-1.088 1.034l4.75 5a.75.75 0 0 0 1.088 0l4.75-5a.75.75 0 0 0-1.088-1.034l-3.456 3.639V5.628l3.456 3.639a.75.75 0 1 0 1.088-1.034l-4.75-4.998a.748.748 0 0 0-1.089 0L6.706 8.233a.75.75 0 1 0 1.088 1.034l3.456-3.639Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowBidirectionalUpDown',
    mixins: [icon]
};
</script>