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
<path d="M2 6a3 3 0 0 1 3-3h1.5a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v1.5a1 1 0 0 1-2 0V6Zm14.5-2a1 1 0 0 1 1-1H19a3 3 0 0 1 3 3v1.5a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-1.5a1 1 0 0 1-1-1ZM3 15.5a1 1 0 0 1 1 1V18a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-1.5a1 1 0 0 1 1-1Zm18 0a1 1 0 0 1 1 1V18a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H19a1 1 0 0 0 1-1v-1.5a1 1 0 0 1 1-1ZM6 6.75a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0v-8.5a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v8.5a1 1 0 1 0 2 0v-8.5Zm3-1a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0v-8.5a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v8.5a1 1 0 1 0 2 0v-8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBarcodeScanner',
    mixins: [icon]
};
</script>