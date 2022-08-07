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
<path d="M10.5 3A2.5 2.5 0 0 1 13 5.5V11h5.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h5Zm.5 10H5v5.5a.5.5 0 0 0 .5.5H11v-6Zm7.5 0H13v6h5.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm-8-8h-5a.5.5 0 0 0-.5.5V11h6V5.5a.5.5 0 0 0-.5-.5Zm7.383-2.993L18 2a1 1 0 0 1 .993.883L19 3v2h2a1 1 0 0 1 .993.883L22 6a1 1 0 0 1-.883.993L21 7h-2v2a1 1 0 0 1-.883.993L18 10a1 1 0 0 1-.993-.883L17 9V7h-2a1 1 0 0 1-.993-.883L14 6a1 1 0 0 1 .883-.993L15 5h2V3a1 1 0 0 1 .883-.993L18 2l-.117.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAppsAddIn',
    mixins: [icon]
};
</script>