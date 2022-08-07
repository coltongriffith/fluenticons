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
<path d="M12 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-6.893-2.47-1.232-3.005H5.75L3.9 19.6c-.133.333-.358.5-.675.5-.233 0-.408-.058-.525-.175a.733.733 0 0 1-.2-.475v-.075c0-.1.008-.175.025-.225L9.125 3c.133-.333.383-.5.75-.5a.63.63 0 0 1 .425.15c.133.083.233.2.3.35l6.315 15.439a2.488 2.488 0 0 0-1.808-.408ZM9.775 5l-3.45 8.55h6.95L9.775 5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextMore',
    mixins: [icon]
};
</script>