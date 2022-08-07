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
<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v8.5A3.25 3.25 0 0 0 6.25 18h8.5A3.25 3.25 0 0 0 18 14.75v-8.5A3.25 3.25 0 0 0 14.75 3h-8.5Zm6.5 4.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm.75 3.25a1.5 1.5 0 0 1 1.5 1.5v.5c0 .496-.086.86-.254 1.16-.168.303-.43.562-.818.83-.733.503-1.858.76-3.428.76-1.32 0-2.445-.257-3.24-.76-.419-.266-.73-.524-.938-.83-.205-.3-.322-.664-.322-1.16v-.5a1.5 1.5 0 0 1 1.5-1.5h6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6.01 19a3.248 3.248 0 0 0 2.74 1.5h6.5c2.9 0 5.25-2.35 5.25-5.25v-6.5c0-1.15-.598-2.162-1.5-2.74v9.24A3.75 3.75 0 0 1 15.25 19H6.01Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonBoard',
    mixins: [icon]
};
</script>