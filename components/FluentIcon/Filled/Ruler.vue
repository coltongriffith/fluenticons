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
<path d="M15.253 1.999c.966 0 1.75.783 1.75 1.75v16.503a1.75 1.75 0 0 1-1.75 1.75H8.75A1.75 1.75 0 0 1 7 20.252V3.749c0-.967.784-1.75 1.75-1.75h6.503ZM12.25 8H8.5v1.5h3.75a.75.75 0 0 0 0-1.5Zm-1.923 3.248H8.5v1.5h1.827a.75.75 0 0 0 0-1.5ZM12.25 14.5H8.5V16h3.75a.75.75 0 0 0 0-1.5Zm-1.923 3H8.5V19h1.827a.75.75 0 0 0 0-1.5Zm0-12.502H8.5v1.5h1.827a.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRuler',
    mixins: [icon]
};
</script>