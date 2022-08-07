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
<path d="m2.5 2.5 18 18a.75.75 0 0 1-1.06 1.06l-5.062-5.06H4.5v4.75a.75.75 0 0 1-.648.742L3.75 22a.75.75 0 0 1-.743-.648L3 21.25V5.121l-1.56-1.56A.75.75 0 1 1 2.5 2.5Zm2.617.497h15.137a.75.75 0 0 1 .6 1.2L16.69 9.75l4.164 5.55a.75.75 0 0 1-.6 1.2h-1.633L5.117 2.998Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlagOff',
    mixins: [icon]
};
</script>