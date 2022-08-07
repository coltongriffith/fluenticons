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
<path d="M21.25 4.002a.75.75 0 0 1 .743.648l.007.102v14.5a.75.75 0 0 1-.648.743l-.102.007H2.75a.75.75 0 0 1-.743-.648L2 19.252v-14.5a.75.75 0 0 1 .648-.743l.102-.007h18.5ZM6 12.5H3.5v6h17v-6H18v3.749a.75.75 0 0 1-1.493.102l-.007-.102V12.5h-2v3.749a.75.75 0 0 1-1.493.102L13 16.25V12.5h-2v3.749a.75.75 0 0 1-1.493.102L9.5 16.25V12.5h-2v3.749a.75.75 0 0 1-1.493.102L6 16.25V12.5Zm14.5-7h-17v5.5h17V5.5Zm-11.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm8 0a.75.75 0 0 1 .102 1.493l-.102.007h-2.5a.75.75 0 0 1-.102-1.493l.102-.007h2.5Zm-11-.001a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMidi',
    mixins: [icon]
};
</script>