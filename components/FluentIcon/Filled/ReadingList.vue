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
<path d="M20 18a1 1 0 0 1 .117 1.993L20 20H7a1 1 0 0 1-.117-1.993L7 18h13Zm-3-3a1 1 0 0 1 .117 1.993L17 17H4a1 1 0 0 1-.117-1.993L4 15h13Zm3-3a1 1 0 0 1 .117 1.993L20 14H7a1 1 0 0 1-.117-1.993L7 12h13ZM6 5a3 3 0 0 1 2.78 1.873 1 1 0 0 1-1.803.857l-.05-.105A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .117 1.993L17.5 11H6a3 3 0 0 1 0-6Zm14 1a1 1 0 0 1 .117 1.993L20 8h-9a1 1 0 0 1-.117-1.993L11 6h9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledReadingList',
    mixins: [icon]
};
</script>