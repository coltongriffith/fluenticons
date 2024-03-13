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
<path d="M6 4H5a3 3 0 0 0-3 3v4.25h4V4ZM2 12.75V17a3 3 0 0 0 3 3h1v-7.25H2ZM7.5 20H19a3 3 0 0 0 3-3v-4.25H7.5V20Zm3.75-3.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.75 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 11.25H7.5V4H19a3 3 0 0 1 3 3v4.25Zm-11.75-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.75-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLikert',
    mixins: [icon]
};
</script>