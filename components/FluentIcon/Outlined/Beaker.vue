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
<path d="M8 4.5h1v6.238c0 .375-.094.744-.273 1.074l-3.584 6.603A1.75 1.75 0 0 0 6.68 21h10.638a1.75 1.75 0 0 0 1.538-2.585l-3.584-6.603A2.25 2.25 0 0 1 15 10.738V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5Zm2.5 6.238V4.5h3v6.238c0 .625.156 1.24.454 1.79l.8 1.472H9.246l.8-1.473a3.75 3.75 0 0 0 .454-1.789ZM8.432 15.5h7.136l1.971 3.63a.25.25 0 0 1-.22.37H6.681a.25.25 0 0 1-.22-.37l1.97-3.63Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBeaker',
    mixins: [icon]
};
</script>