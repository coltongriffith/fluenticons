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
<path d="M5.75 4a.75.75 0 0 0-.75.75v14.5a.75.75 0 0 0 1.5 0V4.75A.75.75 0 0 0 5.75 4Zm13 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-.75-.75ZM11.5 2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V2.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextAlignCenterRotate270',
    mixins: [icon]
};
</script>