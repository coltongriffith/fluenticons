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
<path d="M7.07 3c-1.416 0-2.647.97-2.978 2.346L2.1 13.619A3.55 3.55 0 0 0 5.552 18h12.892a3.55 3.55 0 0 0 3.45-4.38l-1.99-8.274A3.063 3.063 0 0 0 16.925 3H7.069ZM5.55 5.697A1.563 1.563 0 0 1 7.07 4.5h9.856c.722 0 1.35.495 1.519 1.197l1.992 8.273a2.05 2.05 0 0 1-1.994 2.53H5.553a2.05 2.05 0 0 1-1.993-2.53L5.55 5.697ZM6.748 19a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-10.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDeviceMeetingRoom',
    mixins: [icon]
};
</script>