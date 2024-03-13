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
<path d="M10.75 19.5a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Zm0-2a6.72 6.72 0 0 1-4.014-1.322l9.442-9.442A6.75 6.75 0 0 1 10.75 17.5Zm4.014-12.178-9.442 9.442a6.75 6.75 0 0 1 9.441-9.441ZM20.5 10.75c0 5.385-4.365 9.75-9.75 9.75a9.743 9.743 0 0 1-3.053-.488A8.75 8.75 0 0 0 20.012 7.696a9.74 9.74 0 0 1 .488 3.054Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledProhibitedMultiple',
    mixins: [icon]
};
</script>