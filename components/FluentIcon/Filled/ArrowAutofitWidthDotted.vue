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
<path d="M20.008 6.5a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v4a1 1 0 1 0 2 0v-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v4a1 1 0 1 0 2 0v-4Zm-1.8 13.207 2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 0 0-1.415 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414ZM3.292 15.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L5.414 16.5l1.793-1.793a1 1 0 1 0-1.414-1.414l-2.5 2.5ZM13 16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-4-1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1Zm8 1a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowAutofitWidthDotted',
    mixins: [icon]
};
</script>