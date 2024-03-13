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
<path d="M12 3a9 9 0 0 0-9 9 9.005 9.005 0 0 0 4.873 8.001L6 20a1 1 0 0 0-.117 1.993L6 22h4a1 1 0 0 0 .993-.883L11 21v-4a1 1 0 0 0-1.993-.117L9 17l-.001 1.327A7.006 7.006 0 0 1 5 12a7 7 0 0 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-9-9Zm0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowRotateCounterclockwise',
    mixins: [icon]
};
</script>