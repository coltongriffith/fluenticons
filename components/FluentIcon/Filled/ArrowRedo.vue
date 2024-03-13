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
<path d="M18 7.586 14.36 3.951a6.66 6.66 0 1 0-9.42 9.42l8.339 8.337a1 1 0 0 0 1.414-1.415l-8.339-8.336A4.66 4.66 0 0 1 12.771 5.2l.174.166 3.64 3.633H12a1 1 0 0 0-.993.884L11 10a1 1 0 0 0 .883.993l.117.006h7a1 1 0 0 0 .993-.883L20 10V3.002a1 1 0 0 0-1.993-.116L18 3.002v4.584L14.36 3.951 18 7.586Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowRedo',
    mixins: [icon]
};
</script>