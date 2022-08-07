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
<path d="M12 2a3.25 3.25 0 0 1 3.245 3.065l.005.185.001 7.952.08.069a4.99 4.99 0 0 1 1.644 3.223l.019.252L17 17a5 5 0 1 1-8.51-3.56l.18-.17.079-.068.001-7.952a3.25 3.25 0 0 1 2.884-3.23l.182-.015L12 2Zm0 1.5a1.75 1.75 0 0 0-1.744 1.607l-.006.143v8.694l-.309.225a3.5 3.5 0 1 0 4.283.128l-.165-.127-.307-.225-.002-8.695A1.75 1.75 0 0 0 12 3.5ZM12 8a.75.75 0 0 1 .75.75v5.865a2.501 2.501 0 1 1-1.5 0V8.75A.75.75 0 0 1 12 8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTemperature',
    mixins: [icon]
};
</script>