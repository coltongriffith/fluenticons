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
<path d="M2.752 4.5a.75.75 0 0 1 .744.648l.006.102L3.5 18.254a.75.75 0 0 1-1.493.102L2 18.254 2.002 5.25a.75.75 0 0 1 .75-.75Zm12.895 1.804.073-.084a.75.75 0 0 1 .976-.073l.084.073 4.997 4.997a.75.75 0 0 1 .073.976l-.073.085-4.996 5.003a.75.75 0 0 1-1.134-.976l.072-.084 3.711-3.717H5.753a.75.75 0 0 1-.743-.647l-.007-.102a.75.75 0 0 1 .648-.743l.102-.007 13.69-.001L15.72 7.28a.75.75 0 0 1-.073-.976l.073-.084-.073.084Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowExportLtr',
    mixins: [icon]
};
</script>