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
<path d="M20 16.246a2.249 2.249 0 0 0-2.25-2.249H6.25A2.249 2.249 0 0 0 4 16.247v.92c0 .571.178 1.129.51 1.595 1.543 2.164 4.065 3.236 7.486 3.236 3.42 0 5.945-1.071 7.49-3.235A2.75 2.75 0 0 0 20 17.166v-.919ZM16.997 7.002a5 5 0 0 0-9.025-2.967A.75.75 0 0 0 7.748 4H5.25a.75.75 0 0 0-.75.75v5.498A2.75 2.75 0 0 0 7.25 13h.25v-.004h.01a.998.998 0 1 0-.786-1.611A1.25 1.25 0 0 1 6 10.249V10h.748c.38 0 .733-.122 1.02-.328a5 5 0 0 0 9.229-2.67Zm-10-.106a5.114 5.114 0 0 0 0 .212v1.141a.25.25 0 0 1-.25.25H6V5.501h.998v1.395Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonSupport',
    mixins: [icon]
};
</script>