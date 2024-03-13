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
<path d="M22.002 4.752a2.752 2.752 0 0 1-2.752 2.752H4.752a2.752 2.752 0 1 1 0-5.504H19.25a2.752 2.752 0 0 1 2.752 2.752Zm-2 7a2.752 2.752 0 0 1-2.752 2.752H6.752a2.752 2.752 0 1 1 0-5.504H17.25a2.752 2.752 0 0 1 2.752 2.752Zm-3 7a2.752 2.752 0 0 1-2.752 2.752H9.752a2.752 2.752 0 1 1 0-5.504h4.498a2.752 2.752 0 0 1 2.752 2.752Zm3.5-14c0-.692-.56-1.252-1.252-1.252H4.752a1.252 1.252 0 1 0 0 2.504H19.25c.692 0 1.252-.56 1.252-1.252Zm-2 7c0-.692-.56-1.252-1.252-1.252H6.752a1.252 1.252 0 0 0 0 2.504H17.25c.692 0 1.252-.56 1.252-1.252Zm-3 7c0-.691-.56-1.252-1.252-1.252H9.752a1.252 1.252 0 0 0 0 2.504h4.498c.691 0 1.252-.56 1.252-1.252Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataFunnel',
    mixins: [icon]
};
</script>