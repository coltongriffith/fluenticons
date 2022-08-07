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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.94 8H4a1 1 0 0 0 0 2h4.94l4 4H4a1 1 0 1 0 0 2h10.94l5.78 5.78a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM20 14h-2.818l2 2H20a1 1 0 1 0 0-2Zm-8.818-6 2 2H20a1 1 0 1 0 0-2h-8.818Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledEqualOff',
    mixins: [icon]
};
</script>