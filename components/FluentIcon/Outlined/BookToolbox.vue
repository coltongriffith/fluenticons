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
<path d="M14 4h-.5A1.5 1.5 0 0 0 12 5.5V7h2.5v-.25a.75.75 0 0 1 1.5 0V7h3v-.25a.75.75 0 0 1 1.5 0V7H23V5.5A1.5 1.5 0 0 0 21.5 4H21V3a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 3v1Zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4V3ZM12 10.5v-2h2.5v.75a.75.75 0 0 0 1.5 0V8.5h3v.75a.75.75 0 0 0 1.5 0V8.5H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Zm1-7.45c-.37.075-.71.232-1 .45H6.5a1 1 0 0 0-1 1V18H19v-5h1.5v5.75a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h6.688c-.122.31-.188.647-.188 1v.05Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBookToolbox',
    mixins: [icon]
};
</script>