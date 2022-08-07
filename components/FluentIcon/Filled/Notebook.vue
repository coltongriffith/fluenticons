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
<path d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h10.499ZM20 15.002h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20v-2.998h.75H20Zm0-4h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20v-2.998h.75H20Zm0-4h.75a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20V7.002h.75H20Zm-5.246-1.505H8.25a.75.75 0 0 0-.743.649l-.007.101v1.504c0 .38.283.693.649.743l.101.007h6.503a.75.75 0 0 0 .743-.648l.007-.102V6.247a.75.75 0 0 0-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledNotebook',
    mixins: [icon]
};
</script>