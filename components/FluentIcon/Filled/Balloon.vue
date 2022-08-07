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
<path d="M5 9a7 7 0 0 1 14 0c0 2.025-.67 4.236-1.85 5.956-1.042 1.52-2.543 2.731-4.4 2.992v.302c0 .414.336.75.75.75h3.25A2.25 2.25 0 0 1 19 21.25v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 0-.75-.75H13.5a2.25 2.25 0 0 1-2.25-2.25v-.302c-1.857-.261-3.358-1.473-4.4-2.992C5.67 13.236 5 11.025 5 9Zm7.92-3.894a.75.75 0 0 0-.344 1.46 2.505 2.505 0 0 1 1.856 1.853.75.75 0 1 0 1.46-.347 4.005 4.005 0 0 0-2.972-2.966Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBalloon',
    mixins: [icon]
};
</script>