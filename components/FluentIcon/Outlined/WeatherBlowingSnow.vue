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
<path d="M18.998 10a3.001 3.001 0 1 1 0 6h-.03l-.102.007H17.7c.19.373.298.795.298 1.242 0 1.53-1.152 2.757-2.675 2.757-1.505 0-2.415-.882-2.66-2.103a.75.75 0 1 1 1.47-.295c.114.565.457.898 1.19.898.672 0 1.175-.535 1.175-1.256 0-.689-.568-1.25-1.273-1.25l-12.488.007a.75.75 0 0 1-.102-1.494l.102-.006h12.387l.101-.007c.065 0 .128.002.191.006l3.472.002.054-.006.2-.009a1.5 1.5 0 1 0-1.629-1.723l-.027.239A.75.75 0 0 1 16 12.817 3.001 3.001 0 0 1 18.998 10ZM9.75 17.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 4a4 4 0 0 1 .022 8H2.756a.75.75 0 0 1-.102-1.493l.102-.007H12l.165-.005A2.5 2.5 0 1 0 9.5 8 .75.75 0 1 1 8 8a4 4 0 0 1 4-4Zm7.25 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedWeatherBlowingSnow',
    mixins: [icon]
};
</script>