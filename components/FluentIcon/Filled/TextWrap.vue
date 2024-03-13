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
<path d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM3 11a1 1 0 1 0 0 2h16.25a2 2 0 1 1 0 4h-3.836l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L15.414 19h3.836a4 4 0 0 0 0-8H3Z" :fill="fill" :fill-opacity="opacity" />

<path d="M2 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextWrap',
    mixins: [icon]
};
</script>