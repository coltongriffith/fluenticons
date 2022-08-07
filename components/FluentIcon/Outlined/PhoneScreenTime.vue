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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13.75 2A2.25 2.25 0 0 1 16 4.25v6.924a6.454 6.454 0 0 0-1.5.558V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75l5.483.001c.287.551.651 1.056 1.077 1.5L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h7.5ZM8.749 17.504 11 17.499c0 .517.06 1.02.174 1.5l-2.423.005a.75.75 0 0 1-.002-1.5ZM16.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h3.002a.5.5 0 0 0 0-1H17v-3.5a.5.5 0 0 0-.5-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneScreenTime',
    mixins: [icon]
};
</script>