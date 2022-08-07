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
<path d="M11.313 15.5a6.471 6.471 0 0 1 .709-1.5h-7.77a2.249 2.249 0 0 0-2.249 2.25v.577c0 .892.319 1.756.899 2.435 1.566 1.834 3.952 2.74 7.098 2.74.931 0 1.796-.08 2.592-.24a6.51 6.51 0 0 1-.913-1.366c-.524.07-1.083.105-1.68.105-2.737 0-4.703-.745-5.957-2.213a2.25 2.25 0 0 1-.539-1.461v-.578c0-.413.336-.749.75-.749h7.06ZM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.647-2.853a.5.5 0 0 0-.707.707L19.293 17H15a.5.5 0 1 0 0 1h4.293l-1.647 1.647a.5.5 0 0 0 .707.707l2.5-2.5a.497.497 0 0 0 .147-.345V17.5a.498.498 0 0 0-.15-.357l-2.497-2.496Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPersonArrowRight',
    mixins: [icon]
};
</script>