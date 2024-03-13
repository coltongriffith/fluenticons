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
<path d="M17.002 15.244 17 21.245a.75.75 0 0 1-1.182.613l-3.818-2.687-3.817 2.687a.75.75 0 0 1-1.181-.613l-.002-6A7.966 7.966 0 0 0 12 17a7.966 7.966 0 0 0 5.002-1.756ZM12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRibbon',
    mixins: [icon]
};
</script>