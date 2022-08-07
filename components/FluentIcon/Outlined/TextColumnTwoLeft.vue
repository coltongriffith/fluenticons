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
<path d="M21 5.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75ZM8 5.75A.75.75 0 0 0 7.25 5h-3.5a.75.75 0 0 0 0 1.5h3.5A.75.75 0 0 0 8 5.75ZM21 9.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75ZM8 9.75A.75.75 0 0 0 7.25 9h-3.5a.75.75 0 0 0 0 1.5h3.5A.75.75 0 0 0 8 9.75ZM21 13.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75ZM8 13.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75ZM21 17.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75ZM8 17.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextColumnTwoLeft',
    mixins: [icon]
};
</script>