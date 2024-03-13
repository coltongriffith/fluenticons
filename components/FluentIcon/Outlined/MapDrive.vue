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
<path d="M17.998 8.002a1.002 1.002 0 1 0 0-2.004 1.002 1.002 0 0 0 0 2.004Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4.25 3A2.25 2.25 0 0 0 2 5.25v5c0 .414.336.75.75.75h8.5v2.001h-1a.75.75 0 0 0-.75.75v2.254H7.752a.75.75 0 0 0-.75.75v.745H2.75a.75.75 0 0 0 0 1.5h4.251v1.253c0 .415.336.75.75.75h8.498a.75.75 0 0 0 .75-.75V19h4.251a.75.75 0 0 0 0-1.5H17v-.745a.75.75 0 0 0-.75-.75H14.5V13.75a.75.75 0 0 0-.75-.75h-1V11h8.5a.75.75 0 0 0 .75-.75v-5A2.25 2.25 0 0 0 19.75 3H4.25ZM3.5 5.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75V9.5h-17V5.25Zm7.5 9.251h2v2.254c0 .414.335.75.75.75h1.75v1.998H8.5v-1.998h1.75a.75.75 0 0 0 .75-.75V14.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMapDrive',
    mixins: [icon]
};
</script>