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
<path d="M18 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM7.707 6.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414-1.414l-7-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledNew',
    mixins: [icon]
};
</script>