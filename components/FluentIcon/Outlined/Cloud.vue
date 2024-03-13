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
<path d="M6.087 9.75a5.752 5.752 0 0 1 11.326 0h.087a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8h.087ZM11.75 6.5a4.25 4.25 0 0 0-4.245 4.037.75.75 0 0 1-.749.713H6a2.5 2.5 0 0 0 0 5h11.5a2.5 2.5 0 0 0 0-5h-.756a.75.75 0 0 1-.75-.713A4.25 4.25 0 0 0 11.75 6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCloud',
    mixins: [icon]
};
</script>