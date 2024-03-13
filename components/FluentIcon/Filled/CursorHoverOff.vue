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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.045 1.046A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-7.25c0-.204.035-.402.102-.588l.898.899V21.25a.75.75 0 0 0 1.368.425l2.467-3.588 4.042.85 2.842 2.843a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM7.182 4 20.81 17.63A2.499 2.499 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4H7.182Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCursorHoverOff',
    mixins: [icon]
};
</script>