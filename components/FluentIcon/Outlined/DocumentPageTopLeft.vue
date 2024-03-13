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
<path d="M17.745 1.996a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-11.5A2.25 2.25 0 0 1 4 19.898l-.005-.154V4.246a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5Zm0 1.5h-11.5a.75.75 0 0 0-.743.648l-.007.102v15.498c0 .38.282.694.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648l.007-.102V4.246a.75.75 0 0 0-.648-.743l-.102-.007Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11.02 12.02a.75.75 0 0 1-.624-.859l.104-.66H9.02l-.142.895a.75.75 0 0 1-1.481-.235l.104-.66h-.75a.75.75 0 0 1 0-1.5h.988l.237-1.5H7.25a.75.75 0 1 1 0-1.5h.963l.2-1.26a.75.75 0 0 1 1.48.235L9.733 6h1.48l.2-1.259a.75.75 0 1 1 1.482.235L12.732 6h.518a.75.75 0 0 1 0 1.5h-.756L12.257 9h.493a.75.75 0 0 1 0 1.5h-.731l-.142.896a.75.75 0 0 1-.858.623ZM9.493 7.5 9.257 9h1.48l.238-1.5H9.494Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentPageTopLeft',
    mixins: [icon]
};
</script>