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
<path d="M10.25 2a.75.75 0 0 1 .743.648L11 2.75v4.794A6.253 6.253 0 0 1 16.457 13h4.794a.75.75 0 0 1 .102 1.493l-.102.007h-4.794A6.253 6.253 0 0 1 11 19.956v1.295a.75.75 0 0 1-1.494.102L9.5 21.25v-1.295a6.253 6.253 0 0 1-5.455-5.454H2.75a.75.75 0 0 1-.102-1.494L2.75 13h1.294A6.253 6.253 0 0 1 9.5 7.544V2.75a.75.75 0 0 1 .75-.75ZM9.5 14.5H5.559A4.754 4.754 0 0 0 9.5 18.442V14.5Zm5.441 0H11v3.941a4.754 4.754 0 0 0 3.941-3.94Zm-5.44-5.442A4.754 4.754 0 0 0 5.558 13H9.5V9.058Zm1.5 0L11 13h3.942a4.755 4.755 0 0 0-3.726-3.902L11 9.058Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPointScan',
    mixins: [icon]
};
</script>