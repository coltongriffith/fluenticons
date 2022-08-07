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
<path d="M7 6.252V7H4.25A2.25 2.25 0 0 0 2 9.25v2.25h4.5v-.75a.75.75 0 0 1 1.5 0v.75h8v-.75a.75.75 0 0 1 1.5 0v.75H22V9.25A2.25 2.25 0 0 0 19.75 7H17v-.748a2.25 2.25 0 0 0-2.25-2.25h-5.5A2.25 2.25 0 0 0 7 6.252Zm2.25-.75h5.5a.75.75 0 0 1 .75.75V7h-7v-.748a.75.75 0 0 1 .75-.75ZM22 13h-4.5v1.25a.75.75 0 0 1-1.5 0V13H8v1.25a.75.75 0 0 1-1.5 0V13H2v4.747a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25V13Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledToolbox',
    mixins: [icon]
};
</script>