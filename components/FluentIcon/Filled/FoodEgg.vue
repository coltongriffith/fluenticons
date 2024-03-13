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
<path d="M11.5 12.25a.75.75 0 0 1 .75-.75.75.75 0 0 0 0-1.5A2.25 2.25 0 0 0 10 12.25a.75.75 0 0 0 1.5 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.5 2c-3.117 0-5.812 1.825-7.285 4.494-.24.435-.609.813-1.056 1.115C3.25 8.901 2 11.18 2 13.75 2 17.696 4.967 21 8.75 21c.324 0 .643-.024.955-.072.87-.132 1.792 0 2.567.38a6.75 6.75 0 0 0 9.616-7.291 3.143 3.143 0 0 1-.024-1.081c.09-.54.136-1.095.136-1.661C22 6.221 18.26 2 13.5 2Zm3.75 10.5a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFoodEgg',
    mixins: [icon]
};
</script>