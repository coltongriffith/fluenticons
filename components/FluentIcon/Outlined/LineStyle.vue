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
<path d="M2.75 5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Zm.002 6.503h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.101-1.493l.101-.007ZM2 18.25c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25Zm7.75-12.5A.75.75 0 0 1 10.5 5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm8-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLineStyle',
    mixins: [icon]
};
</script>