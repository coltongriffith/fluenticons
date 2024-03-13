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
<path d="M7.745 19.5h8.501a.75.75 0 0 1 .102 1.493l-.102.007H7.745a.75.75 0 0 1-.102-1.493l.102-.007h8.501-8.501ZM4.75 16.52h14.5a.75.75 0 0 1 .102 1.492l-.102.007H4.75a.75.75 0 0 1-.102-1.493l.102-.007ZM12 3.004c3.168 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 11.318 3.687 3.687 0 0 1 17.307 15H6.693A3.687 3.687 0 0 1 3 11.318a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.058-4.63 5.227-4.63Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherFog',
    mixins: [icon]
};
</script>