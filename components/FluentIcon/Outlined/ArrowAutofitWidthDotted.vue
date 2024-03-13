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
<path d="M17.758 4a2.25 2.25 0 0 1 2.25 2.25v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 0-.75-.75h-11.5a.75.75 0 0 0-.75.75v4a.75.75 0 0 1-1.5 0v-4A2.25 2.25 0 0 1 6.258 4h11.5Zm.522 15.28 2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.97 1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06ZM3.22 15.72a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-1.97-1.97 1.97-1.97a.75.75 0 1 0-1.06-1.06l-2.5 2.5Zm9.78.53a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 .75-.75Zm-3 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm7 0a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowAutofitWidthDotted',
    mixins: [icon]
};
</script>