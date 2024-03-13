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
<path d="M15.267 1.997a.75.75 0 0 1 .743.649l.007.101v4.386a2.252 2.252 0 0 1 1.48 1.947l.007.17v10.5a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-6.5a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V9.25c0-.984.632-1.821 1.513-2.126V2.747a.75.75 0 0 1 .647-.743l.102-.007h6.501ZM15.254 8.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v10.5c0 .38.282.694.648.743l.102.007h6.5a.75.75 0 0 0 .743-.648l.007-.102V9.25a.75.75 0 0 0-.648-.743l-.102-.007Zm-.737-5.003H9.516v3.502h5V3.497Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedUsbStick',
    mixins: [icon]
};
</script>