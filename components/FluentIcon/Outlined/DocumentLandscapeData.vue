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
<path d="M10 9a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0V9Zm2-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5ZM5 14a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-1Zm2.5 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM17 10a2 2 0 0 0-2 2v3a2 2 0 1 0 4 0v-3a2 2 0 0 0-2-2Zm.5 2v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75ZM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentLandscapeData',
    mixins: [icon]
};
</script>