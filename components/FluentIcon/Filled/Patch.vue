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
<path d="m9.798 3.238 1.495 1.494-6.56 6.561-1.496-1.495a3.25 3.25 0 0 1 0-4.596l1.965-1.964a3.25 3.25 0 0 1 4.596 0Zm4.404 17.525-1.495-1.495 6.56-6.56 1.495 1.494a3.25 3.25 0 0 1 0 4.596l-1.964 1.965a3.25 3.25 0 0 1-4.596 0ZM3.238 14.202a3.25 3.25 0 0 0 0 4.596l1.964 1.965a3.25 3.25 0 0 0 4.596 0L20.763 9.798a3.25 3.25 0 0 0 0-4.596l-1.965-1.964a3.25 3.25 0 0 0-4.596 0L3.238 14.202ZM12.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPatch',
    mixins: [icon]
};
</script>