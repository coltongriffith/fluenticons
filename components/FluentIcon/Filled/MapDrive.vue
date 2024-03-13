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
<path d="M2 5.25A2.25 2.25 0 0 1 4.25 3h15.5A2.25 2.25 0 0 1 22 5.25v5a.75.75 0 0 1-.75.75h-8.5v2.001h1a.75.75 0 0 1 .75.75v2.254h1.75a.75.75 0 0 1 .75.75v.745h4.25a.75.75 0 0 1 0 1.5H17v1.253a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1-.75-.75V19H2.75a.75.75 0 0 1 0-1.5h4.251v-.745a.75.75 0 0 1 .75-.75h1.75V13.75a.75.75 0 0 1 .75-.75h.999V11h-8.5a.75.75 0 0 1-.75-.75v-5Zm15.998 2.752a1.002 1.002 0 1 0 0-2.004 1.002 1.002 0 0 0 0 2.004Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMapDrive',
    mixins: [icon]
};
</script>