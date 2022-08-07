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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.497 4.497a1.5 1.5 0 1 0 1.76 1.76l3.239 3.24a1.5 1.5 0 1 0 1.757 1.757l7.246 7.246a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM18.496 14.25c0 .303-.09.585-.244.82l-2.076-2.076a1.5 1.5 0 0 1 2.32 1.256ZM13.5 9.25c0 .304-.09.586-.245.823l-2.078-2.078A1.5 1.5 0 0 1 13.5 9.25ZM8.504 4.25c0 .305-.09.588-.247.825L6.179 2.997A1.5 1.5 0 0 1 8.504 4.25ZM12 17.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM7.004 12.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.996 7.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.996 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDialpadOff',
    mixins: [icon]
};
</script>