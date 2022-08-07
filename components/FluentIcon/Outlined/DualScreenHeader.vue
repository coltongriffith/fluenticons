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
<path d="m12.748 4.001-.001.002h7.498c.967 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.002H3.75A1.75 1.75 0 0 1 2 18.246V5.751c0-.967.784-1.75 1.75-1.75h8.998Zm7.747 2.998h-7.748v11.5h7.498a.25.25 0 0 0 .25-.25V6.998Zm-9.248 0H3.5v11.247c0 .138.112.25.25.25h7.498L11.247 7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDualScreenHeader',
    mixins: [icon]
};
</script>