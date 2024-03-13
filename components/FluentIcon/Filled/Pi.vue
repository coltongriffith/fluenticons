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
<path d="M2 7a3 3 0 0 1 3-3h15.25a1 1 0 1 1 0 2H17v10.703a1.5 1.5 0 0 0 2.005 1.412l.159-.057a1 1 0 1 1 .672 1.884l-.159.057c-2.28.814-4.677-.876-4.677-3.296V6H9.979a67.604 67.604 0 0 1-.36 4.21c-.316 2.683-.89 6.142-1.924 9.118a1 1 0 1 1-1.89-.656c.965-2.774 1.518-6.066 1.827-8.695A65.597 65.597 0 0 0 7.976 6H5a1 1 0 0 0-1 1v.5a1 1 0 0 1-2 0V7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPi',
    mixins: [icon]
};
</script>