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
<path d="M16.75 1.25a.75.75 0 0 1 .75.75v1A.75.75 0 0 1 16 3V2a.75.75 0 0 1 .75-.75Zm3.72 1.22a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2ZM8.25 6.31v2.88l6.56 6.56h2.88L8.25 6.31ZM19.06 15l1.41-1.409a2.25 2.25 0 0 0 0-3.182L13.59 3.53a2.25 2.25 0 0 0-3.182 0L9 4.94 19.06 15ZM13 16.06 7.94 11l-4.91 4.909a2.25 2.25 0 0 0 0 3.182L4.91 20.97a2.25 2.25 0 0 0 3.182 0L13 16.06Zm-3.47-1.59a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM22 8h-1a.75.75 0 0 1 0-1.5h1A.75.75 0 0 1 22 8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlashlight',
    mixins: [icon]
};
</script>