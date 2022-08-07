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
<path d="M3.75 17.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM6.749 4.005h10.505a.75.75 0 0 1 .101 1.493l-.102.007h-6.502L20.524 9.3a.75.75 0 0 1 .16 1.313l-.095.057L6.1 17.928a.75.75 0 0 1-.76-1.29l.088-.051 12.976-6.5L6.477 5.454c-.74-.288-.575-1.351.167-1.443l.105-.006h10.505H6.748ZM19.75 4a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGesture',
    mixins: [icon]
};
</script>