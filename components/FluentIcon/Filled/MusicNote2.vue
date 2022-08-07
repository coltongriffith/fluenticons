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
<path d="M20 2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.535.718v9.877a3.5 3.5 0 1 0 1.496 2.702.756.756 0 0 0 .004-.079v-7.942l8.5-2.55v5.87a3.5 3.5 0 1 0 1.496 2.702.764.764 0 0 0 .004-.08V2.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMusicNote2',
    mixins: [icon]
};
</script>