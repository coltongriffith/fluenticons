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
<path d="M16.75 2.001a5.25 5.25 0 0 0-5.005 6.84l-9.068 9.38a2.344 2.344 0 1 0 3.37 3.257l8.963-9.272A5.25 5.25 0 0 0 21.797 5.8a.75.75 0 0 0-1.25-.323L17.36 8.66l-2.06-2.06 3.16-3.162a.75.75 0 0 0-.333-1.254 5.255 5.255 0 0 0-1.378-.183Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWrench',
    mixins: [icon]
};
</script>