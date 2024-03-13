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
<path d="M5 4.25a.75.75 0 0 0-1.5 0v14.5c0 .966.784 1.75 1.75 1.75h14.5a.75.75 0 0 0 0-1.5H5.25a.25.25 0 0 1-.25-.25V4.25Zm9 2.5a.75.75 0 0 1 .75-.75h5.002a.75.75 0 0 1 .75.75v5.005a.75.75 0 1 1-1.5 0V8.559L13.78 13.78a.75.75 0 0 1-1.06 0l-1.97-1.97-3.22 3.22a.75.75 0 0 1-1.06-1.06l3.75-3.75a.75.75 0 0 1 1.06 0l1.97 1.97 4.69-4.69h-3.19a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataTrending',
    mixins: [icon]
};
</script>