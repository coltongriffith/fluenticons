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
<path d="M18.25 3A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h12.5Zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Zm-8.498 8c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 9.752 18h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.783-1.75 1.75-1.75h2Zm6.497 0c.967 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 16.25 18h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h2ZM9.751 6c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 6 9.75v-2C6 6.784 6.784 6 7.75 6h2Zm6.497 0c.967 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAppFolder',
    mixins: [icon]
};
</script>