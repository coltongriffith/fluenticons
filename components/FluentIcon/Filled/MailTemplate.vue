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
<path d="M2 5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5h-9a4 4 0 0 0-4 4v5c0 .345.044.68.126 1H5a3 3 0 0 1-3-3V5Zm3.75-1a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Zm2 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-.202 5.27A2.996 2.996 0 0 1 10 11h9c1.013 0 1.908.502 2.452 1.27L14.5 16.616l-6.952-4.344Zm-.534 1.436C7.004 13.803 7 13.9 7 14v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5c0-.1-.005-.197-.014-.294l-7.088 4.43a.75.75 0 0 1-.796 0l-7.088-4.43Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMailTemplate',
    mixins: [icon]
};
</script>