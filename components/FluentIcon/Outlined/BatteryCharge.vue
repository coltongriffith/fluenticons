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
<path d="M10.75 6H17a3 3 0 0 1 2.995 2.824L20 9v1l1 .018a1 1 0 0 1 .993.879l.008.12v2a1 1 0 0 1-.866.992l-.134.009L20 14v1a3 3 0 0 1-2.824 2.995L17 18H7.998a.75.75 0 0 1-.102-1.493l.102-.007H17a1.5 1.5 0 0 0 1.493-1.355L18.5 15V9a1.5 1.5 0 0 0-1.355-1.493L17 7.5h-6.25a.75.75 0 0 1-.102-1.493L10.75 6H17h-6.25Zm-4.499 4.998v6.252a.75.75 0 0 1-1.492.102l-.007-.102v-6.252H3.75A1.75 1.75 0 0 1 2 9.249V6.75A.75.75 0 0 1 2.75 6h.751V4.75a.75.75 0 0 1 .648-.743L4.251 4a.75.75 0 0 1 .743.648l.007.102V6h.995V4.75a.75.75 0 0 1 .65-.743l.1-.007a.75.75 0 0 1 .744.648l.007.102L7.496 6h.758a.75.75 0 0 1 .75.75v2.499a1.75 1.75 0 0 1-1.75 1.75l-1.003-.001v6.252-6.252ZM7.504 7.5H3.5v1.749c0 .138.112.25.25.25h3.504a.25.25 0 0 0 .25-.25V7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBatteryCharge',
    mixins: [icon]
};
</script>