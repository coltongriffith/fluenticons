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
<path d="M12 3a9 9 0 1 1-8.963 8.182.75.75 0 1 1 1.494.135 7.46 7.46 0 0 0 2.166 5.986A7.46 7.46 0 0 0 12 19.5 7.5 7.5 0 1 0 5.997 7.502h2.756a.75.75 0 0 1 .102 1.493l-.102.007H4.25a.75.75 0 0 1-.743-.648L3.5 8.252v-4.5a.75.75 0 0 1 1.493-.102L5 3.752l-.001 2.591A8.986 8.986 0 0 1 12 3Zm-.75 4a.75.75 0 0 1 .743.648L12 7.75V12h2.25a.75.75 0 0 1 .102 1.493l-.102.007h-3a.75.75 0 0 1-.743-.648l-.007-.102v-5a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedHistory',
    mixins: [icon]
};
</script>