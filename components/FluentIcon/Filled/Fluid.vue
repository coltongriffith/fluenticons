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
<path d="M11 5h5.745a2.25 2.25 0 0 1 2.25 2.25V11h-1.5V7.25a.75.75 0 0 0-.75-.75H11V5Zm-4.5 6v5.745c0 .414.336.75.75.75H11v1.5H7.25A2.25 2.25 0 0 1 5 16.745V11h1.5ZM2 4.25A2.25 2.25 0 0 1 4.25 2h3.5A2.25 2.25 0 0 1 10 4.25v3.5A2.25 2.25 0 0 1 7.75 10h-3.5A2.25 2.25 0 0 1 2 7.75v-3.5ZM12 14.25A2.25 2.25 0 0 1 14.25 12h5.5A2.25 2.25 0 0 1 22 14.25v5.5A2.25 2.25 0 0 1 19.75 22h-5.5A2.25 2.25 0 0 1 12 19.75v-5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFluid',
    mixins: [icon]
};
</script>