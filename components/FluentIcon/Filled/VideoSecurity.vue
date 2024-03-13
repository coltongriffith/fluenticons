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
<path d="M2 6.25A3.25 3.25 0 0 1 5.25 3h8.5A3.25 3.25 0 0 1 17 6.25v6.5A3.25 3.25 0 0 1 13.75 16h-8.5A3.25 3.25 0 0 1 2 12.75v-6.5ZM21.62 3.597a.75.75 0 0 1 .38.653v10.5a.75.75 0 0 1-1.136.643L18 13.675v-8.35l2.864-1.718a.75.75 0 0 1 .755-.01ZM8.136 17a2.501 2.501 0 0 1-2.386 1.75h-2a.75.75 0 0 0-.75.75v1.6a.9.9 0 0 0 .9.9h1.944a6.158 6.158 0 0 0 6.048-5H8.136Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideoSecurity',
    mixins: [icon]
};
</script>