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
<path d="M5.99 4.929a.75.75 0 0 1 0 1.06 8.5 8.5 0 0 0 0 12.021.75.75 0 0 1-1.061 1.06c-3.905-3.905-3.905-10.236 0-14.141a.75.75 0 0 1 1.06 0Zm13.081 0c3.905 3.905 3.905 10.236 0 14.142a.75.75 0 0 1-1.06-1.06 8.5 8.5 0 0 0 0-12.022.75.75 0 1 1 1.06-1.06ZM8.818 7.757a.75.75 0 0 1 0 1.06 4.5 4.5 0 0 0 0 6.365.75.75 0 0 1-1.06 1.06 6 6 0 0 1 0-8.485.75.75 0 0 1 1.06 0Zm7.425 0a6 6 0 0 1 0 8.485.75.75 0 1 1-1.061-1.06 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 1.06-1.06ZM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLive',
    mixins: [icon]
};
</script>