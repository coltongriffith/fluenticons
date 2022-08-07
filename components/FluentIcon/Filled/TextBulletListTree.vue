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
<path d="M7.5 15.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 .5h9.503a1 1 0 0 1 .117 1.993l-.117.007H11.5a1 1 0 0 1-.116-1.994L11.5 16Zm-8-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993L7.5 11Zm-4-5.493a1.5 1.5 0 1 1 0 2.999 1.5 1.5 0 0 1 0-3ZM7.5 6h13.503a1 1 0 0 1 .117 1.993L21.003 8H7.5a1 1 0 0 1-.116-1.993L7.5 6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextBulletListTree',
    mixins: [icon]
};
</script>