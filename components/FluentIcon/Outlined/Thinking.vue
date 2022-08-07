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
<path d="M4 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM9.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11.823 2a5.414 5.414 0 0 1 5.33 4.47h.082a3.765 3.765 0 1 1 0 7.53H6.412a3.765 3.765 0 1 1 0-7.53h.081A5.414 5.414 0 0 1 11.823 2Zm.006 1.498a3.927 3.927 0 0 0-3.923 3.728.693.693 0 0 1-.692.659h-.7a2.31 2.31 0 1 0 0 4.617h10.63a2.31 2.31 0 1 0 0-4.617h-.7a.693.693 0 0 1-.692-.659 3.927 3.927 0 0 0-3.923-3.728Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedThinking',
    mixins: [icon]
};
</script>