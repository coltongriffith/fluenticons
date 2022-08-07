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
<path d="M18.78 2.22a.75.75 0 1 0-1.06 1.06L19.44 5h-6.19a2.75 2.75 0 0 0-2.75 2.75v9.497c0 .69-.56 1.25-1.25 1.25H7.958a3 3 0 1 0-.128 1.5h1.42a2.75 2.75 0 0 0 2.75-2.75V7.75c0-.69.56-1.25 1.25-1.25h6.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3ZM3.5 19a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14 16a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4Zm9 1.5a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 0 2.5-2.5v-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowRoutingRectangleMultiple',
    mixins: [icon]
};
</script>