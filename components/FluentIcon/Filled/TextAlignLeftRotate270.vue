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
<path d="M6 22a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v15a1 1 0 0 1-1 1Zm12 0a1 1 0 0 1-1-1V10a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1Zm-7-1a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0v18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextAlignLeftRotate270',
    mixins: [icon]
};
</script>