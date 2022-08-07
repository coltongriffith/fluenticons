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
<path d="M4 3a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Zm0 18a1 1 0 0 0 1 1h1.75a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Zm5.25 0a1 1 0 0 0 1 1h3.5a1 1 0 1 0 0-2h-3.5a1 1 0 0 0-1 1Zm7 0a1 1 0 0 0 1 1H19a1 1 0 1 0 0-2h-1.75a1 1 0 0 0-1 1Zm1.457-7.293-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 15.586V6a1 1 0 1 1 2 0v9.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPaddingDown',
    mixins: [icon]
};
</script>