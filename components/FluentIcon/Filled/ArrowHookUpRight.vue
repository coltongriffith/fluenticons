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
<path d="M10.5 18H16a1 1 0 1 1 0 2h-5.5a6.5 6.5 0 1 1 0-13h5.14l-1.933-1.933a1 1 0 0 1 1.414-1.414l3.53 3.529a.997.997 0 0 1 .21.308.997.997 0 0 1-.18 1.243.94.94 0 0 1-.028.029l-3.531 3.53a1 1 0 0 1-1.415-1.413L15.586 9H10.5a4.5 4.5 0 1 0 0 9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowHookUpRight',
    mixins: [icon]
};
</script>