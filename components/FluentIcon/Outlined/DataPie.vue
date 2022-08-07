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
<path d="M10.25 4.25A.75.75 0 0 1 11 5v8h8a.75.75 0 0 1 .743.648l.007.102c0 4.97-4.03 8.5-9 8.5a9 9 0 0 1-9-9c0-4.97 3.53-9 8.5-9ZM9.5 5.787l-.209.024c-3.69.47-6.041 3.622-6.041 7.439a7.5 7.5 0 0 0 7.5 7.5c3.817 0 6.968-2.352 7.44-6.041l.022-.209H10.25a.75.75 0 0 1-.743-.648L9.5 13.75V5.787Zm3.75-4.037a9 9 0 0 1 9 9 .75.75 0 0 1-.75.75h-8.25a.75.75 0 0 1-.75-.75V2.5a.75.75 0 0 1 .75-.75ZM14 3.287V10h6.712l-.023-.209a7.504 7.504 0 0 0-6.48-6.48L14 3.287Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataPie',
    mixins: [icon]
};
</script>