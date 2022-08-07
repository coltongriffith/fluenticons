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
<path d="m11.256 16.883.238-1.5h1.481l-.237 1.5h-1.482Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5Zm-5.355 17.043a.75.75 0 1 0 1.482.234l.142-.895h.731a.75.75 0 0 0 0-1.5h-.494l.238-1.5h.756a.75.75 0 0 0 0-1.5h-.519l.162-1.025a.75.75 0 1 0-1.481-.235l-.2 1.26h-1.48l.161-1.025a.75.75 0 1 0-1.481-.235l-.2 1.26H9.25a.75.75 0 0 0 0 1.5h.725l-.237 1.5H8.75a.75.75 0 0 0 0 1.5h.75l-.105.66a.75.75 0 0 0 1.482.235l.142-.895H12.5l-.105.66Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentPageBottomCenter',
    mixins: [icon]
};
</script>