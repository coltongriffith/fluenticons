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
<path d="M13.75 2A2.25 2.25 0 0 1 16 4.25v6.587A3.5 3.5 0 0 0 14 14v.05a2.5 2.5 0 0 0-2 2.45v2.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75v2.75c0 .171.017.338.05.5h-5.8A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h7.5ZM15 14v1h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.497 1.497 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H20v-1a2.5 2.5 0 0 0-5 0Zm1.5 0a1 1 0 1 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhoneLock',
    mixins: [icon]
};
</script>