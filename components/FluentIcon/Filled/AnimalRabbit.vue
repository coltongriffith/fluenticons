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
<path d="m15.53 5.437 5.426 5.437a3.576 3.576 0 0 1 0 5.049 3.556 3.556 0 0 1-3.342.95v.124a2.001 2.001 0 0 1-2 2.003h-2.11l.001-.748-.005-.168a2.752 2.752 0 0 0-2.57-2.58l-.174-.006h-1l-.101.007a.751.751 0 0 0 0 1.488l.102.007h1l.127.007c.588.06 1.056.528 1.115 1.117l.007.128-.001.748h-5c-1.103 0-1.998-.897-1.998-2.003v-2.504c0-.19.012-.378.034-.562A2.502 2.502 0 0 1 2 11.488a2.502 2.502 0 0 1 2.499-2.504 2.5 2.5 0 0 1 2.407 1.83 4.462 4.462 0 0 1 2.599-.829h3.611c.603 0 1.179.12 1.705.335a4.19 4.19 0 0 1 .597-.779l-1.992-1.995a1.494 1.494 0 0 1 0-2.11 1.486 1.486 0 0 1 2.105 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAnimalRabbit',
    mixins: [icon]
};
</script>