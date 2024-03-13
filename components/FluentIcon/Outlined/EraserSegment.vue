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
<path d="M15.841 2.661a2.25 2.25 0 0 0-3.19-.023l-9.598 9.508a2.25 2.25 0 0 0 .007 3.204l5.099 5.008a2.244 2.244 0 0 0 1.69.642h6.265a2.501 2.501 0 1 0 0-1.5h-3.953l8.583-8.673a2.25 2.25 0 0 0 .007-3.158l-4.91-5.008ZM9.75 19.5v.002a.748.748 0 0 1-.54-.214l-5.1-5.008a.75.75 0 0 1-.002-1.068l1.53-1.514 6.098 6.099-1.468 1.483a.747.747 0 0 1-.468.22h-.05Zm3.957-15.796a.75.75 0 0 1 1.063.007l4.91 5.009a.75.75 0 0 1-.002 1.052L12.79 16.73l-6.088-6.088 7.004-6.938Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEraserSegment',
    mixins: [icon]
};
</script>