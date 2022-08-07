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
<path d="M5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v3a.75.75 0 0 1-1.5 0v-3A3.25 3.25 0 0 1 5.25 2h3a.75.75 0 0 1 0 1.5h-3Zm0 17a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5h-3ZM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0v-3ZM18.75 20.5a1.75 1.75 0 0 0 1.75-1.75v-3a.75.75 0 0 1 1.5 0v3A3.25 3.25 0 0 1 18.75 22h-3a.75.75 0 0 1 0-1.5h3ZM7.75 6a.75.75 0 0 0-.75.75V8a.75.75 0 0 0 1.5 0v-.5h2.75v9h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-9h2.75V8A.75.75 0 0 0 17 8V6.75a.75.75 0 0 0-.75-.75h-8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedScanType',
    mixins: [icon]
};
</script>