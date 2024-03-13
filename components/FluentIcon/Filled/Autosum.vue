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
<path d="M4.83 4.61A1 1 0 0 1 5.75 4h12.5a1 1 0 1 1 0 2H8.11l4.95 5.115a1 1 0 0 1 .04 1.346L7.924 18.5H18.25a1 1 0 1 1 0 2H5.75a1 1 0 0 1-.76-1.65l5.999-6.999L5.03 5.695A1 1 0 0 1 4.83 4.61Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAutosum',
    mixins: [icon]
};
</script>