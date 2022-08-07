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
<path d="M9.75 10A2.75 2.75 0 0 0 7 12.75v3.5A2.75 2.75 0 0 0 9.75 19h4.5A2.75 2.75 0 0 0 17 16.25v-3.5A2.75 2.75 0 0 0 14.25 10h-4.5ZM8.5 12.75c0-.69.56-1.25 1.25-1.25H12V14H8.5v-1.25Zm0 2.75H12v2H9.75c-.69 0-1.25-.56-1.25-1.25v-.75Zm5 2v-6h.75c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.25 2A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V9.286a3.25 3.25 0 0 0-.952-2.299l-4.035-4.035A3.25 3.25 0 0 0 12.714 2H7.25ZM5.5 5.25c0-.966.784-1.75 1.75-1.75h5.464c.465 0 .91.184 1.238.513l4.035 4.035c.329.328.513.773.513 1.238v9.464a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75V5.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSim',
    mixins: [icon]
};
</script>