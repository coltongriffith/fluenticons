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
<path d="M15.75 14.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4.75 5A2.75 2.75 0 0 0 2 7.75v8.5A2.75 2.75 0 0 0 4.75 19h14.5A2.75 2.75 0 0 0 22 16.25v-8.5A2.75 2.75 0 0 0 19.25 5H4.75ZM3.5 16.25V11h17v5.25c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25Zm0-6.75V7.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25V9.5h-17Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPayment',
    mixins: [icon]
};
</script>