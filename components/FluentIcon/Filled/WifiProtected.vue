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
<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.998a1.75 1.75 0 0 0-1.744 1.607l-.006.143v.782a1 1 0 0 0-.743.853L4 17.498v2.5a1 1 0 0 0 .883.994l.117.006h3a1 1 0 0 0 .993-.883L9 19.998v-2.5a1 1 0 0 0-.644-.934l-.105-.034-.001-.782a1.75 1.75 0 0 0-1.75-1.75Zm9.256-.297c.46.46.838 1.025 1.101 1.625a1 1 0 0 1-1.832.802 3.222 3.222 0 0 0-2.943-1.96 6.517 6.517 0 0 0-1.556-1.771 5.23 5.23 0 0 1 5.23 1.304ZM6.5 14.998a.75.75 0 0 1 .743.649l.007.101v.75h-1.5v-.75a.75.75 0 0 1 .75-.75Zm11.305-4.288a8.35 8.35 0 0 1 1.503 2.085 1 1 0 0 1-1.78.91 6.357 6.357 0 0 0-1.137-1.581 6.13 6.13 0 0 0-7.742-.76 6.493 6.493 0 0 0-2.631-.346 8.128 8.128 0 0 1 11.787-.308ZM20.44 8.3c.508.508.987 1.088 1.404 1.692a1 1 0 0 1-1.646 1.136c-.35-.507-.752-.993-1.172-1.414-3.873-3.872-10.15-3.872-14.023 0-.4.4-.797.886-1.16 1.41a1 1 0 1 1-1.644-1.14c.428-.617.9-1.195 1.39-1.684 4.653-4.653 12.198-4.653 16.851 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWifiProtected',
    mixins: [icon]
};
</script>