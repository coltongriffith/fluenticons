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
<path d="M20.504 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-4 .5H3a1 1 0 0 0-.117 1.993L3 19h13.503a1 1 0 0 0 .117-1.993L16.503 17Zm4-6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-4 .5H3a1 1 0 0 0-.117 1.993L3 13h13.503a1 1 0 0 0 .117-1.993L16.503 11Zm4-6.492a1.5 1.5 0 1 0 0 2.999 1.5 1.5 0 0 0 0-3Zm-4 .493H3a1 1 0 0 0-.117 1.993L3 7.001h13.503a1 1 0 0 0 .117-1.994l-.117-.006Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextBulletListRtl',
    mixins: [icon]
};
</script>