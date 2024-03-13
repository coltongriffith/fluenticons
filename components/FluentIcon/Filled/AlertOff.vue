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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.004 3.005c-.429.9-.683 1.9-.72 2.956l-.004.25v4.012l-1.415 3.16a.95.95 0 0 0 .867 1.338h12.989l3.778 3.78a.75.75 0 0 0 1.061-1.061L3.28 2.22ZM21.002 17.052a.946.946 0 0 1-.194.574L7.051 3.87A7.5 7.5 0 0 1 19.5 9.504v3.998l1.417 3.16a.95.95 0 0 1 .084.39Z" :fill="fill" :fill-opacity="opacity" />
<path d="M14.958 19.003a3 3 0 0 1-5.916 0h5.916Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAlertOff',
    mixins: [icon]
};
</script>