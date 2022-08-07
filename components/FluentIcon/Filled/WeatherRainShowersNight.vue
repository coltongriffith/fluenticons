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
<path d="M13.001 6.01c3.169 0 4.966 2.097 5.228 4.63h.08A3.687 3.687 0 0 1 22 14.322a3.687 3.687 0 0 1-3.692 3.683L17.676 18l-1.542 2.63a.75.75 0 0 1-1.345-.658l.045-.091L15.944 18h-2.136l-1.543 2.63a.75.75 0 0 1-1.344-.658l.045-.091L12.076 18H9.939l-1.542 2.63a.75.75 0 0 1-1.344-.658l.045-.091L8.207 18H7.6c-2.039 0-3.598-1.644-3.598-3.678a3.687 3.687 0 0 1 3.692-3.682h.08C8.037 8.09 9.833 6.01 13 6.01ZM6.588 2.002a5.059 5.059 0 0 1 2.263.674A5.056 5.056 0 0 1 11.06 5.27c-1.985.563-3.405 2.002-3.994 3.946l-.07.246-.057.238-.206.038a4.67 4.67 0 0 0-2.804 1.815l-.155-.084a5.062 5.062 0 0 1-1.642-1.515.75.75 0 0 1 .365-1.132c1.643-.588 2.528-1.25 3.034-2.216.553-1.055.655-2.174.288-3.677a.75.75 0 0 1 .77-.928Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherRainShowersNight',
    mixins: [icon]
};
</script>