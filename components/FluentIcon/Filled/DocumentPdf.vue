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
<path d="M7.503 13.002a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-.5H8.5a1.5 1.5 0 0 0 0-3h-.997Zm.997 2h-.497v-1H8.5a.5.5 0 1 1 0 1ZM14.998 13.501a.5.5 0 0 1 .5-.499h1.505a.5.5 0 1 1 0 1h-1.006l-.001 1.002h1.007a.5.5 0 0 1 0 1h-1.007l.002.497a.5.5 0 0 1-1 .002l-.003-.998v-.002l.003-2.002ZM11.5 13.002h.498a2 2 0 0 1 0 4H11.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm.5 3a1 1 0 0 0 0-2v2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 8V2H6a2 2 0 0 0-2 2v6.668c-.591.281-1 .884-1 1.582v5.5c0 .698.409 1.3 1 1.582V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.668c.591-.281 1-.884 1-1.582v-5.5c0-.698-.409-1.3-1-1.582V10h-6a2 2 0 0 1-2-2Zm-7.25 4h14.5a.25.25 0 0 1 .25.25v5.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 1 .25-.25Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentPdf',
    mixins: [icon]
};
</script>