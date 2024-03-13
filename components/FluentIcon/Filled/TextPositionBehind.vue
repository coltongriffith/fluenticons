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
<path d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2H3.75ZM10.75 11c0-.086.009-.17.025-.25h2.45c.016.08.025.164.025.25v1.75h-2.5V11Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.236 10.75c.01.082.014.165.014.25v4.75a1 1 0 1 0 2 0V11a4.25 4.25 0 0 0-8.5 0v4.75a1 1 0 1 0 2 0V11a2.25 2.25 0 0 1 4.486-.25ZM20.25 12.75h-3V11c0-.084-.002-.167-.006-.25h3.006a1 1 0 1 1 0 2ZM6.75 11c0-.084.002-.167.006-.25H3.75a1 1 0 1 0 0 2h3V11ZM2.75 18.75a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextPositionBehind',
    mixins: [icon]
};
</script>