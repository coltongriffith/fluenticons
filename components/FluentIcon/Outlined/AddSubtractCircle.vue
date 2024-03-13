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
<path d="M13 15.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm-3.5-8.5a.75.75 0 0 0-1.5 0V8H6.75a.75.75 0 0 0 0 1.5H8v1.25a.75.75 0 0 0 1.5 0V9.5h1.25a.75.75 0 0 0 0-1.5H9.5V6.75ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1.5a8.5 8.5 0 0 0 6.517-13.957L6.543 18.517A8.466 8.466 0 0 0 12 20.5Zm-6.517-3.043L17.457 5.483A8.5 8.5 0 0 0 5.483 17.457Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAddSubtractCircle',
    mixins: [icon]
};
</script>