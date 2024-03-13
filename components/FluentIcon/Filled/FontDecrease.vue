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
<path d="M16.625 2.22a1 1 0 1 0-1.25 1.56l2.5 2a1 1 0 0 0 1.25 0l2.5-2a1 1 0 0 0-1.25-1.56L18.5 3.72l-1.875-1.5ZM12 4a1 1 0 0 1 .92.606l5.999 14a1 1 0 0 1-1.838.788L15.198 15H8.802L6.92 19.394a1 1 0 0 1-1.838-.788l6-14A1 1 0 0 1 12 4Zm0 3.539-2.34 5.46h4.68L12 7.54Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFontDecrease',
    mixins: [icon]
};
</script>