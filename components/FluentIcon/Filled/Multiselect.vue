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
<path d="M6.707 3.293a1 1 0 0 0-1.414 0L4 4.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414ZM10 16.993h11.003a1 1 0 0 1 .117 1.994l-.117.006H10A1 1 0 0 1 9.883 17l.117-.007ZM10 11h11.003a1 1 0 0 1 .117 1.993l-.117.007H10a1 1 0 0 1-.117-1.993L10 11Zm0-6h11.003a1 1 0 0 1 .117 1.993L21.003 7H10a1 1 0 0 1-.117-1.993L10 5ZM5.293 16.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414l.293.293 1.293-1.293Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMultiselect',
    mixins: [icon]
};
</script>