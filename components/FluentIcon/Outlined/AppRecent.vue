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
<path d="M15.75 2a2.25 2.25 0 0 1 2.245 2.096L18 4.25v.749L19.75 5a2.25 2.25 0 0 1 2.245 2.096L22 7.25v9.5a2.25 2.25 0 0 1-2.096 2.245L19.75 19H18v.75a2.25 2.25 0 0 1-2.096 2.245L15.75 22h-7.5a2.25 2.25 0 0 1-2.245-2.096L6 19.75V19H4.25a2.25 2.25 0 0 1-2.245-2.096L2 16.75v-9.5a2.25 2.25 0 0 1 2.096-2.245L4.25 5 6 4.999V4.25a2.25 2.25 0 0 1 2.096-2.245L8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.743.648L7.5 4.25v15.5c0 .38.282.694.648.743l.102.007h7.5a.75.75 0 0 0 .743-.648l.007-.102V4.25a.75.75 0 0 0-.648-.743L15.75 3.5ZM6 6.499 4.25 6.5a.75.75 0 0 0-.743.648L3.5 7.25v9.5c0 .38.282.694.648.743l.102.007H6V6.499Zm13.75.001L18 6.499V17.5h1.75a.75.75 0 0 0 .743-.648l.007-.102v-9.5a.75.75 0 0 0-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAppRecent',
    mixins: [icon]
};
</script>