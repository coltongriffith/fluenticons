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
<path d="M11.75 4.25A5.752 5.752 0 0 0 6.087 9H6a4 4 0 0 0 0 8h3.168a1.75 1.75 0 0 1 .345-1.987l2.5-2.5a1.75 1.75 0 0 1 2.819 1.987h2.336a1.75 1.75 0 0 1 2.82-1.987l1.406 1.406A4 4 0 0 0 17.5 9h-.087a5.752 5.752 0 0 0-5.663-4.75Zm2.03 10.03a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L12.56 17h6.88l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.88l1.22-1.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCloudSwap',
    mixins: [icon]
};
</script>