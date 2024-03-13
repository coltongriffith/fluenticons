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
<path d="M8.255 9c.966 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 8.255 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5C2 9.783 2.784 9 3.75 9h4.505Zm-2.002 9.495h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.101-.007a.75.75 0 0 0 0-1.486l-.101-.007ZM19.75 2a2.25 2.25 0 0 1 2.245 2.096L22 4.25v9a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-3.746v2h1.246a.75.75 0 0 1 .102 1.493L17.25 19H11v-1.5h3.504v-2H11v-5a2.5 2.5 0 0 0-2.336-2.495L8.5 8H4V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2h13.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhoneDesktop',
    mixins: [icon]
};
</script>