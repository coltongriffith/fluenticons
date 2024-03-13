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
<path d="M10.5 3a2.25 2.25 0 0 1 2.25 2.25v6h6A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25Zm.75 9.75H4.5v6c0 .414.336.75.75.75h5.999l.001-6.75Zm7.5 0h-6.001v6.75h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75ZM10.5 4.5H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm7.398-2.493L18 2a.75.75 0 0 1 .743.648l.007.102v2.5h2.5a.75.75 0 0 1 .743.648L22 6a.75.75 0 0 1-.648.743l-.102.007h-2.5v2.5a.75.75 0 0 1-.648.743L18 10a.75.75 0 0 1-.743-.648l-.007-.102v-2.5h-2.5a.75.75 0 0 1-.743-.648L14 6a.75.75 0 0 1 .648-.743l.102-.007h2.5v-2.5a.75.75 0 0 1 .648-.743Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAppsAddIn',
    mixins: [icon]
};
</script>