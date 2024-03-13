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
<path d="M15.841 2.661a2.25 2.25 0 0 0-3.19-.023l-9.599 9.508a2.25 2.25 0 0 0 .007 3.204l5.1 5.008a2.25 2.25 0 0 0 3.175-.023l1.785-1.803a4.512 4.512 0 0 1 .022-2.155l-.35.353-6.088-6.088 7.004-6.938a.75.75 0 0 1 1.063.007l4.91 5.009a.75.75 0 0 1-.003 1.052l-3.345 3.38a4.506 4.506 0 0 1 2.154-.044l2.258-2.28a2.25 2.25 0 0 0 .007-3.159l-4.91-5.008ZM5.637 11.697l6.1 6.1-1.469 1.483a.75.75 0 0 1-1.058.008l-5.1-5.008a.75.75 0 0 1-.002-1.068l1.53-1.515Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.603 14.001A3.5 3.5 0 1 1 14 17.511V17.5A3.5 3.5 0 0 1 17.603 14Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEraserSmall',
    mixins: [icon]
};
</script>