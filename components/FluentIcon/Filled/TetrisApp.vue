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
<path d="M8 3a1 1 0 0 1 1-1h4v5H8V3ZM3 8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4V8H3Zm10 0H8v5h4a1 1 0 0 0 1-1V8Zm5-6h-4v5h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM4 17a1 1 0 0 1 1-1h4v5H5a1 1 0 0 1-1-1v-3Zm11-1h-5v5h5v-5Zm1 0h5v4a1 1 0 0 1-1 1h-4v-5Zm1-6a1 1 0 0 0-1 1v4h5v-4a1 1 0 0 0-1-1h-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTetrisApp',
    mixins: [icon]
};
</script>