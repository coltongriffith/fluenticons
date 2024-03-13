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
<path d="M9.255 14.005c.966 0 1.75.783 1.75 1.75v3.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.253v-3.498c0-.967.784-1.75 1.75-1.75h5.505Zm10.995 0c.966 0 1.75.783 1.75 1.75v3.498a1.75 1.75 0 0 1-1.75 1.75h-5.505a1.75 1.75 0 0 1-1.75-1.75v-3.498c0-.967.784-1.75 1.75-1.75h5.505Zm-10.995 1.5H3.75a.25.25 0 0 0-.25.25v3.498c0 .139.112.25.25.25h5.505a.25.25 0 0 0 .25-.25v-3.498a.25.25 0 0 0-.25-.25Zm10.995 0h-5.505a.25.25 0 0 0-.25.25v3.498c0 .139.112.25.25.25h5.505a.25.25 0 0 0 .25-.25v-3.498a.25.25 0 0 0-.25-.25ZM20.25 3c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 12H3.75A1.75 1.75 0 0 1 2 10.25v-5.5a1.75 1.75 0 0 1 1.606-1.744L3.75 3h16.5Zm0 1.5H3.75l-.057.007a.25.25 0 0 0-.193.243v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBroadActivityFeed',
    mixins: [icon]
};
</script>