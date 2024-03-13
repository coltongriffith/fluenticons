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
<path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2h6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6ZM6.5 12a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm2.478 3.731-1.77 1.77 1.77 1.769a.5.5 0 1 1-.707.707l-1.77-1.77-1.769 1.768a.5.5 0 1 1-.707-.708L5.794 17.5 4.025 15.73a.5.5 0 1 1 .707-.707l1.77 1.769 1.77-1.769a.5.5 0 0 1 .706.707Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentDismiss',
    mixins: [icon]
};
</script>