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
<path d="M5.997 12c0 .38.282.694.647.743l.102.007H19.44l-2.216 2.22a.75.75 0 0 0-.073.976l.073.084c.266.267.682.29.975.073l.084-.073 3.497-3.5a.75.75 0 0 0 .073-.976l-.073-.084-3.497-3.5a.749.749 0 0 0-1.132.976l.073.084 2.216 2.22H6.746a.75.75 0 0 0-.75.75ZM2 12c0 2.761 2.237 5 4.996 5a4.998 4.998 0 0 0 4.68-3.25h-1.651A3.499 3.499 0 0 1 3.499 12a3.499 3.499 0 0 1 6.526-1.75h1.652A4.998 4.998 0 0 0 6.996 7 4.998 4.998 0 0 0 2 12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSwipeRight',
    mixins: [icon]
};
</script>