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
<path d="M9 11a7.5 7.5 0 0 1 7.5-7.5h.095a.75.75 0 0 0 0-1.5H16.5a9 9 0 0 0-9 9v1.25c0 .69-.56 1.25-1.25 1.25h-3.5a.75.75 0 0 0 0 1.5h3.5A2.75 2.75 0 0 0 9 12.25V11Zm7.75-4a4.25 4.25 0 0 0-4.25 4.25v1.5a5.75 5.75 0 0 1-5.75 5.75h-4a.75.75 0 0 1 0-1.5h4A4.25 4.25 0 0 0 11 12.75v-1.5a5.75 5.75 0 0 1 5.75-5.75h4.5a.75.75 0 0 1 0 1.5h-4.5Zm.5 3.5c-.69 0-1.25.56-1.25 1.25V13a9 9 0 0 1-9 9h-.25a.75.75 0 0 1 0-1.5H7a7.5 7.5 0 0 0 7.5-7.5v-1.25A2.75 2.75 0 0 1 17.25 9h4a.75.75 0 0 1 0 1.5h-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStream',
    mixins: [icon]
};
</script>