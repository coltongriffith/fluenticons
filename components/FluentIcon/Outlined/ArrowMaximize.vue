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
<path d="M12.748 3.001h7.554l.1.014.099.028.061.026a.72.72 0 0 1 .218.15l.04.044.061.082.037.065.039.09.02.064.013.064.009.093v7.534a.75.75 0 0 1-1.493.102l-.006-.102-.001-5.696-13.94 13.945h5.69a.75.75 0 0 1 .744.65l.007.1a.75.75 0 0 1-.649.744l-.101.007H3.714L3.684 21a.705.705 0 0 1-.187-.04l-.09-.038-.018-.01a.746.746 0 0 1-.384-.553l-.007-.105V12.75a.75.75 0 0 1 1.493-.102l.007.102v5.692L18.438 4.5l-5.69.001a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .648-.743L12.748 3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowMaximize',
    mixins: [icon]
};
</script>