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
<path d="M15.75 3a.75.75 0 0 0-.75.75v15.5a.75.75 0 0 0 1.5 0v-.237c.685.618 1.554.987 2.5.987 2.21 0 4-2.015 4-4.5S21.21 11 19 11c-.946 0-1.815.37-2.5.987V3.75a.75.75 0 0 0-.75-.75Zm.75 12.5c0-1.828 1.28-3 2.5-3s2.5 1.172 2.5 3-1.28 3-2.5 3-2.5-1.172-2.5-3ZM7.76 3a.75.75 0 0 1 .697.5l5.5 15.5a.75.75 0 1 1-1.414.5l-1.42-4H4.007L2.45 19.52a.75.75 0 1 1-1.4-.54l6-15.5A.75.75 0 0 1 7.76 3Zm-.04 2.907L4.587 14h6.005L7.72 5.907Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextCaseTitle',
    mixins: [icon]
};
</script>