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
<path d="M11.634 14.085a1.25 1.25 0 1 1-1.768-1.767 1.25 1.25 0 0 1 1.768 1.767Zm6.512-11.369a1.75 1.75 0 0 1 2.475 0l.707.707a1.75 1.75 0 0 1 0 2.475l-5.1 5.1a2.752 2.752 0 0 1-1.052 3.999l-.832.416a.608.608 0 0 0-.325.664l.015.072a4.708 4.708 0 0 1-1.792 4.69 6.027 6.027 0 0 1-7.878-.56l-.599-.599a6.027 6.027 0 0 1-.56-7.878 4.708 4.708 0 0 1 4.69-1.791l.072.014c.27.054.541-.08.664-.324l.416-.833a2.752 2.752 0 0 1 3.998-1.051l5.101-5.1Zm1.414 1.06a.25.25 0 0 0-.353 0l-1.185 1.185 1.06 1.061 1.185-1.185a.25.25 0 0 0 0-.353l-.707-.707Zm-1.538 3.307-1.06-1.06-3.351 3.35a.75.75 0 0 1-1.061 0l-.16-.16a1.25 1.25 0 0 0-2.001.326l-.417.832a2.108 2.108 0 0 1-2.299 1.125l-.072-.015a3.208 3.208 0 0 0-3.196 1.221 4.527 4.527 0 0 0 .421 5.918l.599.598a4.527 4.527 0 0 0 5.917.42 3.208 3.208 0 0 0 1.22-3.195l-.014-.072a2.108 2.108 0 0 1 1.125-2.3l.833-.416a1.25 1.25 0 0 0 .324-2.002l-.159-.159a.75.75 0 0 1 0-1.06l3.351-3.351Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGuitar',
    mixins: [icon]
};
</script>