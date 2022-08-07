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
<path d="m21.002 4.75-.002 14a.75.75 0 0 1-1.21.592l-7.29-5.67v5.078a.75.75 0 0 1-1.21.592l-9-7a.75.75 0 0 1 0-1.184l9.001-7a.75.75 0 0 1 1.21.592L12.5 9.827l7.291-5.67a.75.75 0 0 1 1.21.593Zm-10 1.533-7.03 5.467L11 17.217l.001-10.934Zm8.5 0L12.5 11.726v.046l7 5.445.001-10.934Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedRewind',
    mixins: [icon]
};
</script>