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
<path d="M16.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5ZM9.5 9A1.5 1.5 0 0 0 8 10.5v5c0 .267.07.517.191.734l3.4-3.613a1.25 1.25 0 0 1 1.817-.004l4.162 4.381A1.5 1.5 0 0 0 19 15.5v-5A1.5 1.5 0 0 0 17.5 9h-8Zm6.003 8-3-3.159L9.53 17h5.973Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPictureInPicture',
    mixins: [icon]
};
</script>