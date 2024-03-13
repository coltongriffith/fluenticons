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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l8.193 8.193c-1.177 2.197-3.192 3.741-6.919 5.075a.75.75 0 0 0-.365 1.132 9.965 9.965 0 0 0 3.235 2.982c3.917 2.262 8.728 1.572 11.859-1.378l2.496 2.497a.75.75 0 0 0 1.061-1.061L3.28 2.22ZM16.365 3.339c4.75 2.743 6.4 8.794 3.718 13.562l-8.59-8.59c.251-1.561.151-3.303-.354-5.373a.75.75 0 0 1 .769-.926 9.961 9.961 0 0 1 4.457 1.327Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherMoonOff',
    mixins: [icon]
};
</script>