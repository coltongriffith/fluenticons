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
<path d="m2 10.127 9.653 5.038a.75.75 0 0 0 .694 0L22 10.128v7.622a3.25 3.25 0 0 1-3.066 3.245L18.75 21H5.25a3.25 3.25 0 0 1-3.245-3.066L2 17.75v-7.623Zm1.1-1.958 8.517-5.064a.75.75 0 0 1 .662-.051l.104.051L20.9 8.17c.235.14.439.319.605.526L12 13.655l-9.505-4.96c.125-.155.27-.295.435-.414l.17-.112 8.517-5.064L3.1 8.17Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMailRead',
    mixins: [icon]
};
</script>