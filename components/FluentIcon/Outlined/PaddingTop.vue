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
<path d="M4.5 2.75A.75.75 0 0 1 5.25 2h.867a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Zm3.467 0a.75.75 0 0 1 .75-.75h1.733a.75.75 0 0 1 0 1.5H8.717a.75.75 0 0 1-.75-.75Zm4.333 0a.75.75 0 0 1 .75-.75h1.733a.75.75 0 0 1 0 1.5H13.05a.75.75 0 0 1-.75-.75Zm4.333 0a.75.75 0 0 1 .75-.75h.867a.75.75 0 0 1 0 1.5h-.867a.75.75 0 0 1-.75-.75ZM4.5 21.25a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm7.78-16.03a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06L11 7.56v10.69a.75.75 0 0 0 1.5 0V7.56l3.72 3.72a.75.75 0 1 0 1.06-1.06l-5-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPaddingTop',
    mixins: [icon]
};
</script>