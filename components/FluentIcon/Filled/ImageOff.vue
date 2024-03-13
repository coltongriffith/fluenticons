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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.263 1.264A3.235 3.235 0 0 0 3 6.25v11.5c0 .627.178 1.213.485 1.71l6.939-6.813.135-.122c.173-.145.363-.26.562-.344l.948.95-.594.587-6.928 6.8A3.235 3.235 0 0 0 6.25 21h11.5c.625 0 1.208-.176 1.703-.481l-.025-.03 1.291 1.291a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM15.752 7.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" :fill="fill" :fill-opacity="opacity" />

<path d="M21 17.75v.068L6.182 3 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5ZM15.752 6a2.252 2.252 0 1 0 0 4.504 2.252 2.252 0 0 0 0-4.504Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledImageOff',
    mixins: [icon]
};
</script>