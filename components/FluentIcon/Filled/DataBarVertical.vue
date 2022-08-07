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
<path d="M5.75 3a2.25 2.25 0 0 1 2.248 2.25v13.5a2.25 2.25 0 1 1-4.498 0V5.25A2.25 2.25 0 0 1 5.75 3Zm6.5 4a2.25 2.25 0 0 1 2.248 2.25v9.5a2.25 2.25 0 1 1-4.498 0v-9.5A2.25 2.25 0 0 1 12.25 7Zm6.5 4a2.25 2.25 0 0 1 2.248 2.25v5.5a2.25 2.25 0 1 1-4.498 0v-5.5A2.249 2.249 0 0 1 18.75 11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataBarVertical',
    mixins: [icon]
};
</script>