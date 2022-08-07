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
<path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM8 10a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 14a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM20 19H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2ZM3.293 11.207a1 1 0 0 1 1.414-1.414l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414L4.086 12l-.793-.793Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextContinuous',
    mixins: [icon]
};
</script>