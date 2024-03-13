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
<path d="M3.25 15.5a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Zm3.5.5h4.424A6.52 6.52 0 0 0 11 17.5H6.75a.75.75 0 0 1-.102-1.493L6.75 16Zm0-5h14.5l.102-.007A.75.75 0 0 0 21.25 9.5H6.75l-.102.007A.75.75 0 0 0 6.75 11Zm-3.5-2a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 3.25 9Zm0-6.5a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Zm3.5.5h14.5a.75.75 0 0 1 .102 1.493l-.102.007H6.75a.75.75 0 0 1-.102-1.493L6.75 3ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1H18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextBulletListAdd',
    mixins: [icon]
};
</script>