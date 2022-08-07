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
<path d="M3.5 3A1.5 1.5 0 0 0 3 5.915v7.335A3.75 3.75 0 0 0 6.75 17h4.5v2.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5V17h4.5A3.75 3.75 0 0 0 21 13.25V5.915A1.5 1.5 0 0 0 20.5 3h-17Zm1 3h15v7.25a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedProjectionScreen',
    mixins: [icon]
};
</script>