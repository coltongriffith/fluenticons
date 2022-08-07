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
<path d="M12 4.5a7.5 7.5 0 1 1-7.419 6.392c.067-.454-.265-.892-.724-.892a.749.749 0 0 0-.752.623A9 9 0 1 0 6 5.292V4.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.9a7.473 7.473 0 0 1 5.1-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCounterclockwise',
    mixins: [icon]
};
</script>