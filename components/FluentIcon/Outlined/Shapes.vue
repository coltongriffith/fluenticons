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
<path d="M8.75 3.5A5.25 5.25 0 0 0 8 13.947v1.512A6.751 6.751 0 1 1 15.459 8h-1.512A5.251 5.251 0 0 0 8.75 3.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.25 9A3.25 3.25 0 0 0 9 12.25v6.5A3.25 3.25 0 0 0 12.25 22h6.5A3.25 3.25 0 0 0 22 18.75v-6.5A3.25 3.25 0 0 0 18.75 9h-6.5Zm-1.75 3.25c0-.966.784-1.75 1.75-1.75h6.5c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShapes',
    mixins: [icon]
};
</script>