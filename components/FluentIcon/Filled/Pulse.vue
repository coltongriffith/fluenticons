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
<path d="m8.471 7.237 3.056 12.992c.233.993 1.63 1.04 1.929.065l2.945-9.58.384 1.527a1 1 0 0 0 .97.756H21a1 1 0 1 0 0-2h-2.466l-1.069-4.241c-.247-.981-1.628-1.017-1.925-.05l-2.912 9.472L9.475 2.771c-.24-1.02-1.688-1.03-1.943-.014l-2.065 8.24H3a1 1 0 0 0 0 2h3.247a1 1 0 0 0 .97-.757l1.254-5.003Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPulse',
    mixins: [icon]
};
</script>