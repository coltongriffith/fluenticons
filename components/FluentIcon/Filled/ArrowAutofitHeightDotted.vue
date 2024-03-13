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
<path d="M17.207 3.293a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 1.414 1.414L16.5 5.414l1.793 1.793a1 1 0 1 0 1.414-1.414l-2.5-2.5Zm-10.707.7a2.5 2.5 0 0 0-2.5 2.5v11a2.5 2.5 0 0 0 2.5 2.5h4a1 1 0 1 0 0-2h-4a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h4a1 1 0 1 0 0-2h-4Zm10.707 16.714 2.5-2.5a1 1 0 0 0-1.414-1.414L16.5 18.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0ZM17.5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm0-7a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowAutofitHeightDotted',
    mixins: [icon]
};
</script>