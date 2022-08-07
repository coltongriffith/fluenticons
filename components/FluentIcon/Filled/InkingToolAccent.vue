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
<path d="M4 7h16.25a.25.25 0 0 0 .243-.193l.007-.057V3H3.75v3.75a.25.25 0 0 0 .193.243L4 7Zm7.976 6.946 2.641-5.947.883-.499.758.499-2.911 6.556a.75.75 0 1 1-1.371-.61ZM13 19c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledInkingToolAccent',
    mixins: [icon]
};
</script>