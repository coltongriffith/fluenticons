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
<path d="M21.707 3.707a1 1 0 0 0-1.414-1.414L18.496 4.09a4.252 4.252 0 0 0-5.251.604l-1.068 1.069a1.75 1.75 0 0 0 0 2.474l3.585 3.586a1.75 1.75 0 0 0 2.475 0l1.068-1.068a4.252 4.252 0 0 0 .605-5.25l1.797-1.798ZM10.707 11.707a1 1 0 0 0-1.414-1.414l-1.47 1.47-.293-.293a.75.75 0 0 0-1.06 0l-1.775 1.775a4.252 4.252 0 0 0-.605 5.25l-1.797 1.798a1 1 0 1 0 1.414 1.414l1.798-1.797a4.252 4.252 0 0 0 5.25-.605l1.775-1.775a.75.75 0 0 0 0-1.06l-.293-.293 1.47-1.47a1 1 0 0 0-1.414-1.414l-1.47 1.47-1.586-1.586 1.47-1.47Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPlugDisconnected',
    mixins: [icon]
};
</script>