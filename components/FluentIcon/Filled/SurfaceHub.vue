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
<path d="M19.25 2a.75.75 0 0 1 .75.727l-.004.102-1 9.5a.75.75 0 0 1-.643.664L18.25 13h-.729l1.467 8.118.011.102a.75.75 0 0 1-1.462.264l-.025-.1L16.9 18h-2.797l-.607 3.384a.75.75 0 0 1-1.488-.164l.011-.101.56-3.119H8.103l-.607 3.384a.75.75 0 0 1-1.488-.164l.011-.101L7.478 13H4.75a.75.75 0 0 1-.75-.727l.004-.101 1-9.5a.75.75 0 0 1 .643-.665L5.75 2h13.5Zm-5.772 11H9.002l-.629 3.5h4.476l.629-3.5Zm2.518 0h-.994l-.629 3.5h2.255l-.632-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSurfaceHub',
    mixins: [icon]
};
</script>