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
<path d="M17.75 2.007a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498A2.25 2.25 0 0 1 17.904 22l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.755V4.257a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5ZM7.75 7a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM7 11.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75ZM7.75 15a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentOnePage',
    mixins: [icon]
};
</script>