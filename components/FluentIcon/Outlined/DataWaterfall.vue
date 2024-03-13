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
<path d="M2 3.75A.75.75 0 0 1 2.75 3h6.5a2.25 2.25 0 0 1 2.25 2.25V11h6.25A2.25 2.25 0 0 1 20 13.25v6.25h1.25a.75.75 0 0 1 0 1.5h-6.5a2.25 2.25 0 0 1-2.25-2.25V12.5H6.25A2.25 2.25 0 0 1 4 10.25V4.5H2.75A.75.75 0 0 1 2 3.75ZM18.5 19.5v-6.25a.75.75 0 0 0-.75-.75H14v6.25c0 .414.336.75.75.75h3.75ZM10 5.25a.75.75 0 0 0-.75-.75H5.5v5.75c0 .414.336.75.75.75H10V5.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataWaterfall',
    mixins: [icon]
};
</script>