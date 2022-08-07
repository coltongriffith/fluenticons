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
<path d="M8.5 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 0 0 1.5h2.5A2.25 2.25 0 0 0 8.5 6.25v-2.5ZM8.5 20.25a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 1 0-1.5h2.5a2.25 2.25 0 0 1 2.25 2.25v2.5ZM16.25 3a.75.75 0 0 0-.75.75v2.5a2.25 2.25 0 0 0 2.25 2.25h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75ZM15.5 20.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 0 0-1.5h-2.5a2.25 2.25 0 0 0-2.25 2.25v2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFullScreenMinimize',
    mixins: [icon]
};
</script>