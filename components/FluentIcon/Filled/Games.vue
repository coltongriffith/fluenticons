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
<path d="M14.998 5a7 7 0 0 1 .24 13.996l-.24.004H9.002a7 7 0 0 1-.24-13.996L9.001 5h5.996Zm-.248 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM8 9a.75.75 0 0 0-.743.648l-.007.102v1.498h-1.5a.75.75 0 0 0-.102 1.494l.102.007 1.5-.001v1.502a.75.75 0 0 0 1.493.102l.007-.102v-1.502h1.5a.75.75 0 0 0 .102-1.492l-.102-.007-1.5-.001V9.75A.75.75 0 0 0 8 9Zm8.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGames',
    mixins: [icon]
};
</script>