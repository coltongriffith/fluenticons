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
<path d="M7.005 6.505a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5Zm0 11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 1 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5Zm12.99-13.409A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.25v15.5l.005.154A2.25 2.25 0 0 0 6.25 22h11.5l.154-.005A2.25 2.25 0 0 0 20 19.75V4.25l-.005-.154ZM6.25 3.5h11.5l.102.007a.75.75 0 0 1 .648.743v15.5l-.007.102a.75.75 0 0 1-.743.648H6.25l-.102-.007a.75.75 0 0 1-.648-.743V4.25l.007-.102A.75.75 0 0 1 6.25 3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentHeaderFooter',
    mixins: [icon]
};
</script>