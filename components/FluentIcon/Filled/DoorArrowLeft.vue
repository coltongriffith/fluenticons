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
<path d="M6.25 2.75a1.5 1.5 0 0 0-1.5 1.5v15.5a1.5 1.5 0 0 0 1.5 1.5h5.94a6.5 6.5 0 0 1 7.06-10.012V4.25a1.5 1.5 0 0 0-1.5-1.5H6.25Zm2.25 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9 9.75a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm3.5-5.5a.5.5 0 0 1-.5.5h-4.793l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L15.707 17H20.5a.5.5 0 0 1 .5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDoorArrowLeft',
    mixins: [icon]
};
</script>