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
<path d="M10.25 2h3.5a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25V18.5c-.19.142-.358.31-.5.5a2.496 2.496 0 0 0-2-1c-.818 0-1.544.393-2 1a2.5 2.5 0 0 0-4 3H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13.5 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM21.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardMore',
    mixins: [icon]
};
</script>