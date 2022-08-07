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
<path d="M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm0-1.5c1.14 0 2.08.846 2.23 1.945l.013.135-.007-.08h1.764A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764l-.008.08.015-.135A2.25 2.25 0 0 1 10.25 2h3.5ZM14 17H8a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5Zm-2-4H8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5Zm4-4H8a.75.75 0 0 0 0 1.5h8A.75.75 0 0 0 16 9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardTextLtr',
    mixins: [icon]
};
</script>