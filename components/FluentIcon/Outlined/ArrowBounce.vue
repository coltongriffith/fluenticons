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
<path d="M11.002 6.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0V8.56l8.718 8.72a.75.75 0 0 0 1.06 0l8.5-8.5a.75.75 0 1 0-1.06-1.06l-7.97 7.97L4.562 7.5h5.69a.75.75 0 0 0 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowBounce',
    mixins: [icon]
};
</script>