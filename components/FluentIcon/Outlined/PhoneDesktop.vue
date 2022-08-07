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
<path d="M8.255 9c.966 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 8.255 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5C2 9.783 2.784 9 3.75 9h4.505Zm0 1.5H3.75a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h4.505a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25ZM6.25 18a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493L5.75 18h.5Zm13.5-16a2.25 2.25 0 0 1 2.245 2.096L22 4.25v9a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-3.746v2h1.246a.75.75 0 0 1 .102 1.493L17.25 19H11v-1.5h3.504v-2H11V14h8.75a.75.75 0 0 0 .743-.648l.007-.102v-9a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.743.648L5.5 4.25V8H4V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2h13.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneDesktop',
    mixins: [icon]
};
</script>