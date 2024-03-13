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
<path d="M9.5 21h5v-5h-5v5Zm6.5 0h1.75A3.25 3.25 0 0 0 21 17.75V16h-5v5Zm5-6.5v-5h-5v5h5ZM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5h5Zm-6.5-5h-5v5h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5H3Zm11.5-6.5v5h-5v-5h5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPuzzleCube',
    mixins: [icon]
};
</script>