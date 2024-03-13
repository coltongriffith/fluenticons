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
<path d="M5.75 2a.75.75 0 0 0 0 1.5h1V5h-.5A2.25 2.25 0 0 0 4 7.25V11h7V7.25A2.25 2.25 0 0 0 8.75 5h-.5V3.5h1a.75.75 0 0 0 0-1.5h-3.5ZM5.75 18a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5A2.25 2.25 0 0 0 11 14.25V12.5H4v1.75a2.25 2.25 0 0 0 2.25 2.25h.5V18h-1ZM14 4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-1V7h.5A2.25 2.25 0 0 1 20 9.25V11h-7V9.25A2.25 2.25 0 0 1 15.25 7h.5V5.5h-1a.75.75 0 0 1-.75-.75ZM13 16.25V12.5h7v3.75a2.25 2.25 0 0 1-2.25 2.25h-.5V20h1a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h1v-1.5h-.5A2.25 2.25 0 0 1 13 16.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataWhisker',
    mixins: [icon]
};
</script>