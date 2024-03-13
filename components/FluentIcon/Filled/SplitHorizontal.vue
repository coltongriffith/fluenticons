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
<path d="M21.25 12.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5h18.5ZM17.75 2A2.25 2.25 0 0 1 20 4.25V10H4V4.25A2.25 2.25 0 0 1 6.25 2h11.5ZM4 19.25V13.5h16v5.75a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSplitHorizontal',
    mixins: [icon]
};
</script>