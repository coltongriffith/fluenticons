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
<path d="M21 12.022V8.5H3v9.25A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022Zm0-5.772A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25V7h18v-.75Zm2 11.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-6-3a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Zm1.125 6a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCalendarError',
    mixins: [icon]
};
</script>