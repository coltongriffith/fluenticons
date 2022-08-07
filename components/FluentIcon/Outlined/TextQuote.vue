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
<path d="M7.5 6a2.5 2.5 0 0 1 2.495 2.336l.005.206c-.01 3.555-1.24 6.614-3.705 9.223a.75.75 0 1 1-1.09-1.03c1.64-1.737 2.66-3.674 3.077-5.859A2.5 2.5 0 1 1 7.5 6Zm9 0a2.5 2.5 0 0 1 2.495 2.336l.005.206c-.01 3.56-1.238 6.614-3.705 9.223a.75.75 0 1 1-1.09-1.03c1.643-1.738 2.662-3.672 3.078-5.859A2.5 2.5 0 1 1 16.5 6Zm-9 1.5a1 1 0 1 0 .993 1.117l.007-.124a1 1 0 0 0-1-.993Zm9 0a1 1 0 1 0 .993 1.117l.007-.124a1 1 0 0 0-1-.993Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextQuote',
    mixins: [icon]
};
</script>