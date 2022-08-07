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
<path d="M6.747 4h3.464a.75.75 0 0 1 .102 1.493l-.102.007H6.747a2.25 2.25 0 0 0-2.245 2.096l-.005.154v9.5a2.25 2.25 0 0 0 2.096 2.245l.154.005h9.5a2.25 2.25 0 0 0 2.245-2.096l.005-.154v-.498a.75.75 0 0 1 1.494-.101l.006.101v.498a3.75 3.75 0 0 1-3.55 3.745l-.2.005h-9.5a3.75 3.75 0 0 1-3.745-3.55l-.005-.2v-9.5a3.75 3.75 0 0 1 3.55-3.745l.2-.005h3.464-3.464ZM14.5 6.52V3.75a.75.75 0 0 1 1.187-.61l.082.069 5.994 5.75c.28.268.306.7.077.997l-.077.085-5.994 5.752a.75.75 0 0 1-1.262-.434l-.007-.107v-2.725l-.344.03c-2.4.25-4.7 1.33-6.914 3.26-.52.453-1.323.025-1.237-.658.664-5.32 3.446-8.252 8.195-8.62l.3-.02V3.75v2.77ZM16 5.509V7.25a.75.75 0 0 1-.75.75c-3.874 0-6.274 1.676-7.312 5.157l-.079.279.352-.237C10.45 11.737 12.798 11 15.251 11a.75.75 0 0 1 .743.648l.007.102v1.743L20.16 9.5l-4.16-3.991Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShare',
    mixins: [icon]
};
</script>