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
<path d="M14.003 5.5H21a1 1 0 0 1 .993.883L22 6.5v7a1 1 0 0 1-1.994.117L20 13.5l-.001-4.586-7.292 7.293a1 1 0 0 1-1.32.084l-.094-.083-2.296-2.292-5.288 5.29a1 1 0 0 1-1.497-1.32l.083-.095 5.994-5.996a1 1 0 0 1 1.32-.084l.094.083 2.296 2.292L18.584 7.5h-4.581a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 .883-.993l.117-.007H21h-6.997Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowTrending',
    mixins: [icon]
};
</script>