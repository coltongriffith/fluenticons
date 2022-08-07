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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.702.702A3.24 3.24 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v3.002a1 1 0 0 0 1.578.815L12.965 18h3.974l3.78 3.78a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM22 14.75a3.246 3.246 0 0 1-1.398 2.67L6.182 3H18.75A3.25 3.25 0 0 1 22 6.25v8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCommentOff',
    mixins: [icon]
};
</script>