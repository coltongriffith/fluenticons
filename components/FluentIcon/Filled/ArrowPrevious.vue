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
<path d="M6 3a1 1 0 0 0-.993.883L5 4v16a1 1 0 0 0 1.993.117L7 20V4a1 1 0 0 0-1-1Zm12.707.293a1 1 0 0 0-1.32-.083l-.094.083-8 8a1 1 0 0 0-.083 1.32l.083.094 8 8a1 1 0 0 0 1.497-1.32l-.083-.094L11.414 12l7.293-7.293a1 1 0 0 0 0-1.414Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowPrevious',
    mixins: [icon]
};
</script>