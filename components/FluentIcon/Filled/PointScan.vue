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
<path d="M10.25 2a.75.75 0 0 1 .743.648L11 2.75v4.794A6.253 6.253 0 0 1 16.457 13h4.794a.75.75 0 0 1 .102 1.493l-.102.007h-4.794A6.253 6.253 0 0 1 11 19.956v1.295a.75.75 0 0 1-1.494.102L9.5 21.25v-1.295a6.253 6.253 0 0 1-5.455-5.454H2.75a.75.75 0 0 1-.102-1.494L2.75 13h1.294A6.253 6.253 0 0 1 9.5 7.544V2.75a.75.75 0 0 1 .75-.75Zm0 5.5c-.254 0-.504.015-.75.044V13H4.044a6.315 6.315 0 0 0 0 1.5H9.5v5.455a6.297 6.297 0 0 0 1.5 0V14.5h5.456a6.313 6.313 0 0 0 0-1.5H11V7.544a6.315 6.315 0 0 0-.75-.044Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPointScan',
    mixins: [icon]
};
</script>