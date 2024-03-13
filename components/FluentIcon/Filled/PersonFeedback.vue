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
<path d="M10.75 14A2.25 2.25 0 0 1 13 16.25v1.502l-.008.108c-.31 2.127-2.22 3.149-5.425 3.149-3.193 0-5.134-1.01-5.553-3.112L2 17.75v-1.5A2.25 2.25 0 0 1 4.25 14h6.5ZM7.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm12.25-4A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10h-1.553l-2.541 2.207A1 1 0 0 1 14 11.452V9.986a2.25 2.25 0 0 1-2-2.236v-3.5A2.25 2.25 0 0 1 14.25 2h5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonFeedback',
    mixins: [icon]
};
</script>