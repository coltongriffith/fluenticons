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
<path d="m3.001 11.996 3 .004a1 1 0 0 1 .114 1.993L6 14 4 13.996v5.003L6 19a1 1 0 0 1 .993.883L7 20a1 1 0 0 1-.883.993L6 21H3a1 1 0 0 1-.993-.883L2 20v-7.004a1 1 0 0 1 .885-.994L3 11.996ZM21 17a1 1 0 0 1 .117 1.993L21 19H9a1 1 0 0 1-.117-1.993L9 17h12Zm0-3a1 1 0 0 1 .117 1.993L21 16H9a1 1 0 0 1-.117-1.993L9 14h12ZM6 2a1 1 0 0 1 .117 1.993L6 4H4v4.995h2a1 1 0 0 1 .993.883L7 9.995a1 1 0 0 1-.883.993L6 10.995H3a1 1 0 0 1-.993-.883L2 9.995V3a1 1 0 0 1 .883-.993L3 2h3Zm15 5a1 1 0 0 1 .117 1.993L21 9H9a1 1 0 0 1-.117-1.993L9 7h12Zm0-3a1 1 0 0 1 .117 1.993L21 6H9a1 1 0 0 1-.117-1.993L9 4h12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGroupList',
    mixins: [icon]
};
</script>