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
<path d="M3.143 5.75A2.75 2.75 0 0 1 5.893 3h12.5a2.75 2.75 0 0 1 2.75 2.75v6.365a6.477 6.477 0 0 0-1.5-.754V5.75c0-.69-.56-1.25-1.25-1.25h-12.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.421c.173.534.412 1.037.709 1.5h-6.13a2.75 2.75 0 0 1-2.75-2.75V5.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-4.999.5v2.503a.5.5 0 1 1-1 0V18h-2.504a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1H18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTabAdd',
    mixins: [icon]
};
</script>