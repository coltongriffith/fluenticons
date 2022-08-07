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
<path d="M5.857 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.165a6.463 6.463 0 0 1-.848-2H5.857a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5.142a6.459 6.459 0 0 1 2 .791V6a3 3 0 0 0-3-3h-12Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-3.309-3.252a4 4 0 0 1 5.557-5.557l-5.557 5.557Zm1.06 1.06 5.558-5.556a4 4 0 0 1-5.557 5.557Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTabProhibited',
    mixins: [icon]
};
</script>