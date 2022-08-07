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
<path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.022a6.463 6.463 0 0 0-2-.848V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5.174c.17.72.46 1.395.848 2H6a3 3 0 0 1-3-3V6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-5.646-2.146a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L15.707 18H20.5a.5.5 0 0 0 0-1h-4.793l1.647-1.646Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTabArrowLeft',
    mixins: [icon]
};
</script>