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
<path d="M3 3.75a.75.75 0 0 1 1.5 0v6.258l3.65-1.922a.75.75 0 0 1 .73.018l3.82 2.246 5.6-4.2a.75.75 0 0 1 1.2.6V19.5h.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75v-8.986a.76.76 0 0 1 0-.027V3.75Zm1.5 7.953V19.5H18V8.25l-4.8 3.6a.75.75 0 0 1-.83.046L8.48 9.608 4.5 11.703Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataArea',
    mixins: [icon]
};
</script>