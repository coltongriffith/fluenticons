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
<path d="M11 15.5c0-.563.186-1.082.5-1.5H5.252a2.249 2.249 0 0 0-2.249 2.25v.919c0 .572.179 1.13.51 1.596C5.057 20.929 7.58 22 11 22h.05a2.514 2.514 0 0 1-.05-.5v-6ZM11 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM17.51 18.927l-5.491-3.203A2 2 0 0 1 14 14h7a2 2 0 0 1 2 1.97l-5.49 2.957Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.737 19.94 23 17.108V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.248 3.062a.5.5 0 0 0 .489.009Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonMail',
    mixins: [icon]
};
</script>