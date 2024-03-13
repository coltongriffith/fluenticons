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
<path d="M9.5 2a7.503 7.503 0 0 1 7.179 5.321 7.5 7.5 0 1 1-9.357 9.358A7.5 7.5 0 0 1 9.5 2Zm7.486 7.038.01.22L17 9.5a7.5 7.5 0 0 1-7.962 7.486 6 6 0 1 0 7.947-7.948ZM9.5 3.5a6 6 0 0 0-2.486 11.463l-.01-.22L7 14.5a7.5 7.5 0 0 1 7.962-7.486A5.999 5.999 0 0 0 9.5 3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhotoFilter',
    mixins: [icon]
};
</script>