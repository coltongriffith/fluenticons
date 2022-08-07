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
<path d="M2.75 2.5a.75.75 0 0 0-.75.75V9c0 3.06 2.29 5.585 5.25 5.954v.796a6 6 0 0 0 12 0v-.844A3.001 3.001 0 0 0 18.5 9a3 3 0 0 0-.75 5.906v.844a4.5 4.5 0 0 1-9 0v-.796A6.001 6.001 0 0 0 14 9V3.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v5a4.5 4.5 0 1 1-9 0V4h1.75a.75.75 0 0 0 0-1.5h-2.5Zm15.75 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStethoscope',
    mixins: [icon]
};
</script>