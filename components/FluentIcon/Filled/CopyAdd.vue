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
<path d="m4.5 6.75.003-2.123A2.25 2.25 0 0 0 3 6.75v10.504a4.75 4.75 0 0 0 4.75 4.75h5.064a6.515 6.515 0 0 1-1.08-1.5H7.75a3.25 3.25 0 0 1-3.25-3.25V6.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19 11.174a6.5 6.5 0 0 0-7.687 8.326H7.75a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 7.75 2h9A2.25 2.25 0 0 1 19 4.25v6.924Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.501 8.503V18h2.496a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCopyAdd',
    mixins: [icon]
};
</script>