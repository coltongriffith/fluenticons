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
<path d="M13.238 3.272a1.75 1.75 0 0 0-2.475 0L7.05 6.984A6.999 6.999 0 0 0 11.25 18.89v2.359a.75.75 0 0 0 1.5 0V18.89a6.999 6.999 0 0 0 4.199-11.907l-3.712-3.712ZM12.75 17.38v-5.63a.75.75 0 0 0-1.5 0v5.63a5.499 5.499 0 0 1-3.138-9.336l3.711-3.711a.25.25 0 0 1 .354 0l3.711 3.711a5.499 5.499 0 0 1-3.138 9.336Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLeafOne',
    mixins: [icon]
};
</script>