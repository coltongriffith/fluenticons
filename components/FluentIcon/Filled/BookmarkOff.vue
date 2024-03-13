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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.788 2.788a3.3 3.3 0 0 0-.005.181v14.996a.75.75 0 0 0 1.188.609L12 17.673l5.812 4.18A.75.75 0 0 0 19 21.246v-1.183l1.718 1.718a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM19.001 6.25v9.57L6.621 3.437C7.1 3.16 7.657 3 8.252 3h7.498a3.25 3.25 0 0 1 3.25 3.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBookmarkOff',
    mixins: [icon]
};
</script>