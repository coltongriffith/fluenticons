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
<path d="M3 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 4h10a1 1 0 0 1 .117 1.993L17 6h-4.649l8.01 3.102c.77.298.855 1.33.195 1.764l-.11.064-14 6.965a1 1 0 0 1-.993-1.732l.102-.058 11.97-5.956L6.64 5.933c-.994-.386-.766-1.821.241-1.927L7 4h10H7Zm13 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGesture',
    mixins: [icon]
};
</script>