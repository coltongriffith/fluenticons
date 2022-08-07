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
<path d="M9.75 17.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M10.799 7.101A1.5 1.5 0 1 1 12 9.5H8a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8A6 6 0 0 0 7.201 4.398 2.25 2.25 0 1 0 10.8 7.101ZM12 5c-.978 0-1.85.468-2.4 1.2a.75.75 0 0 1-1.2-.9A4.5 4.5 0 0 1 16.5 8v12a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-8.5A.5.5 0 0 1 8 11h4a3 3 0 1 0 0-6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDoorTag',
    mixins: [icon]
};
</script>