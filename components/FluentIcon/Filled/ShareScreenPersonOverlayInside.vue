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
<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 8v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm9 5a1 1 0 0 0-1 1v.25A2.75 2.75 0 0 0 15.75 17h.5A2.75 2.75 0 0 0 19 14.25V14a1 1 0 0 0-1-1h-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShareScreenPersonOverlayInside',
    mixins: [icon]
};
</script>