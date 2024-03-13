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
<path d="M7.75 15.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.75.75ZM16.25 15.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.75.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4 4.5v15A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5Zm13-1h.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H17v-2.75a.75.75 0 0 0-1.5 0v2.75h-7v-2.75a.75.75 0 0 0-1.5 0v2.75h-.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1H7v2.75a.75.75 0 0 0 1.5 0V3.5h7v2.75a.75.75 0 0 0 1.5 0V3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentMargins',
    mixins: [icon]
};
</script>