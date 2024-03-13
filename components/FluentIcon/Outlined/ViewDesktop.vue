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
<path d="M19.75 3a2.25 2.25 0 0 1 2.245 2.096L22 5.25v10.502a2.25 2.25 0 0 1-2.096 2.245l-.154.005H15.5V20.5h1.751a.75.75 0 0 1 .102 1.494l-.102.006h-10.5a.75.75 0 0 1-.102-1.493l.102-.007h1.75v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V5.25a2.25 2.25 0 0 1 2.096-2.245L4.251 3h15.5ZM14 18.002h-4V20.5h4v-2.498ZM19.75 4.5H4.251a.75.75 0 0 0-.743.648l-.007.102v10.502c0 .38.282.694.648.743l.102.007h15.5a.75.75 0 0 0 .742-.648l.007-.102V5.25a.75.75 0 0 0-.648-.743L19.75 4.5ZM18.504 6a.5.5 0 0 1 .492.41l.008.09v8.002a.5.5 0 0 1-.41.492l-.09.008H9.5a.5.5 0 0 1-.492-.41L9 14.502V6.5a.5.5 0 0 1 .41-.492L9.5 6h9.004ZM7.5 6a.5.5 0 0 1 .492.41L8 6.5v8.002a.5.5 0 0 1-.41.492l-.09.008h-2a.5.5 0 0 1-.491-.41l-.009-.09V6.5a.5.5 0 0 1 .41-.492L5.5 6h2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedViewDesktop',
    mixins: [icon]
};
</script>