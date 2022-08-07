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
<path d="M11 15.5c0-.563.186-1.082.5-1.5H5.252a2.249 2.249 0 0 0-2.249 2.25v.577c0 .892.319 1.756.899 2.435 1.566 1.834 3.952 2.74 7.098 2.74h.05A2.514 2.514 0 0 1 11 21.5v-.999c-2.738 0-4.704-.745-5.958-2.213a2.25 2.25 0 0 1-.539-1.461v-.578c0-.413.336-.749.75-.749H11ZM11 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.51 18.927l-5.491-3.203A2 2 0 0 1 14 14h7a2 2 0 0 1 2 1.97l-5.49 2.957Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.737 19.94 23 17.108V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.248 3.062a.5.5 0 0 0 .489.009Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPersonMail',
    mixins: [icon]
};
</script>