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
<path d="M2.75 4.504a.75.75 0 0 1 .743.648l.007.102v13.499a.75.75 0 0 1-1.493.101L2 18.753v-13.5a.75.75 0 0 1 .75-.75Zm12.46 1.883.083-.094a1 1 0 0 1 1.32-.083l.094.083 4.997 4.998a1 1 0 0 1 .083 1.32l-.083.093-4.996 5.004a1 1 0 0 1-1.499-1.32l.083-.094L18.581 13H6a1 1 0 0 1-.993-.883L5 12a1 1 0 0 1 .883-.993L6 11h12.584l-3.291-3.293a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowExportLtr',
    mixins: [icon]
};
</script>