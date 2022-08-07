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
<path d="M12 2a.75.75 0 0 1 .743.648l.007.102v1.788a7.5 7.5 0 0 1 6.713 6.714l.037-.002h1.75a.75.75 0 0 1 .102 1.493l-.102.007-1.788-.001a7.5 7.5 0 0 1-6.714 6.714l.002.037v1.75a.75.75 0 0 1-1.493.102l-.007-.102.001-1.788a7.5 7.5 0 0 1-6.714-6.714l-.037.002H2.75a.75.75 0 0 1-.102-1.493l.102-.007h1.788a7.5 7.5 0 0 1 6.714-6.713L11.25 4.5V2.75A.75.75 0 0 1 12 2Zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMyLocation',
    mixins: [icon]
};
</script>