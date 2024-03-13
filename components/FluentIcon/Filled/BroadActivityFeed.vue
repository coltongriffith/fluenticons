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
<path d="M9.246 14.001c.967 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.251v-3.5c0-.966.784-1.75 1.75-1.75h5.496Zm11.004 0c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-5.496a1.75 1.75 0 0 1-1.75-1.75v-3.5c0-.966.783-1.75 1.75-1.75h5.496Zm0-11.005c.966 0 1.75.784 1.75 1.75v5.503A1.75 1.75 0 0 1 20.25 12H3.75A1.75 1.75 0 0 1 2 10.25V4.746a1.75 1.75 0 0 1 1.606-1.744l.144-.006h16.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBroadActivityFeed',
    mixins: [icon]
};
</script>