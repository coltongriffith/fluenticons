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
<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .501.001 2.504a.5.5 0 1 1-1 0V7.001h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 1 1 1 0V6h2.497a.5.5 0 0 1 0 1.001H18Zm-7-.5c0-1.653.617-3.162 1.633-4.31A7 7 0 0 0 4 9.002a7 7 0 0 0 12.773 3.96A6.502 6.502 0 0 1 11 6.502Zm5.002 8.745L16 21.25a.75.75 0 0 1-1.182.613l-3.818-2.688-3.817 2.688a.75.75 0 0 1-1.181-.613l-.002-6A7.966 7.966 0 0 0 11 17.002a7.965 7.965 0 0 0 5.002-1.757Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRibbonAdd',
    mixins: [icon]
};
</script>