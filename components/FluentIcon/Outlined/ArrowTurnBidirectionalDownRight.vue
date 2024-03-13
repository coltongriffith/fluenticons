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
<path d="M17.28 3.22a.75.75 0 0 0-1.06 1.06l3.22 3.22h-7.69a4.25 4.25 0 0 0-4.25 4.25v7.689l-3.22-3.22a.75.75 0 0 0-1.06 1.061l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06L9 19.44v-7.69A2.75 2.75 0 0 1 11.75 9h7.689l-3.22 3.22a.75.75 0 0 0 1.061 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowTurnBidirectionalDownRight',
    mixins: [icon]
};
</script>