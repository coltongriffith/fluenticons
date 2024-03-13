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
<path d="M18.71 2.292a1 1 0 1 0-1.414 1.415l1.292 1.29h-5.592a3 3 0 0 0-3 3v8.999a1 1 0 0 1-1 1H7.828A3.001 3.001 0 0 0 2 19a3 3 0 0 0 5.83.996h1.166a3 3 0 0 0 3-3v-9a1 1 0 0 1 1-1h5.589L17.29 8.287A1 1 0 1 0 18.7 9.704l3.01-3a1 1 0 0 0 0-1.415L18.71 2.292Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowRouting',
    mixins: [icon]
};
</script>