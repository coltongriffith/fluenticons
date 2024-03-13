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
<path d="M16 8.25a.75.75 0 0 1 1.5 0v3.25a.75.75 0 0 1-.75.75H14a.75.75 0 0 1 0-1.5h1.27A3.502 3.502 0 0 0 12 8.5c-1.093 0-2.037.464-2.673 1.23a.75.75 0 1 1-1.154-.96C9.096 7.66 10.463 7 12 7c1.636 0 3.088.785 4 2v-.75ZM8 15v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75H10a.75.75 0 0 1 0 1.5H8.837a3.513 3.513 0 0 0 5.842.765.75.75 0 1 1 1.142.972A5.013 5.013 0 0 1 8 15Zm4-13C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm8.5 10a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowSyncCircle',
    mixins: [icon]
};
</script>