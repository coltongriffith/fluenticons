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
<path d="m12.71 4.158 9 7a.75.75 0 0 1 0 1.184l-9.001 7a.75.75 0 0 1-1.21-.592v-5.077l-7.29 5.67a.75.75 0 0 1-1.21-.593L3 4.75a.75.75 0 0 1 1.21-.592l7.288 5.669.002-5.077a.75.75 0 0 1 1.21-.592Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFastForward',
    mixins: [icon]
};
</script>