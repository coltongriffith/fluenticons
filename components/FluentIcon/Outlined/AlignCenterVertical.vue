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
<path d="M11.25 21.25V20h-2.5a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 8.75 13h2.5v-2h-4.5A2.25 2.25 0 0 1 4.5 8.75v-2.5A2.25 2.25 0 0 1 6.75 4h4.5V2.75a.75.75 0 0 1 1.5 0V4h4.5a2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 17.25 11h-4.5v2h2.5a2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 15.25 20h-2.5v1.25a.75.75 0 0 1-1.5 0Zm4-2.75a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h6.5Zm2-9a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h10.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAlignCenterVertical',
    mixins: [icon]
};
</script>