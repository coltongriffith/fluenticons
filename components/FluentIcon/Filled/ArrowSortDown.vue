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
<path d="M11.883 4.01 12 4.003a1 1 0 0 1 .993.884l.007.116v11.584l2.293-2.294a1 1 0 0 1 1.32-.084l.094.084a1 1 0 0 1 .084 1.32l-.084.094-3.996 4a1 1 0 0 1-1.32.084l-.094-.084-4.004-4a1 1 0 0 1 1.32-1.498l.094.084L11 16.582V5.003a1 1 0 0 1 .883-.993L12 4.003l-.117.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowSortDown',
    mixins: [icon]
};
</script>