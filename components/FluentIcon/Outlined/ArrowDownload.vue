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
<path d="M18.25 20.5a.75.75 0 1 1 0 1.5l-13 .004a.75.75 0 1 1 0-1.5l13-.004ZM11.648 2.012l.102-.007a.75.75 0 0 1 .743.648l.007.102-.001 13.685 3.722-3.72a.75.75 0 0 1 .976-.073l.085.073a.75.75 0 0 1 .072.976l-.073.084-4.997 4.997a.75.75 0 0 1-.976.073l-.085-.073-5.003-4.996a.75.75 0 0 1 .976-1.134l.084.072 3.719 3.714L11 2.755a.75.75 0 0 1 .648-.743l.102-.007-.102.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowDownload',
    mixins: [icon]
};
</script>