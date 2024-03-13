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
<path d="M10.75 20a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM8.5 19a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM13.001 6.018c3.169 0 4.966 2.097 5.228 4.63h.08A3.687 3.687 0 0 1 22 14.33a3.687 3.687 0 0 1-3.692 3.683H7.694a3.687 3.687 0 0 1-3.692-3.683 3.687 3.687 0 0 1 3.692-3.682h.08c.263-2.55 2.059-4.63 5.227-4.63ZM6.588 2.01a5.058 5.058 0 0 1 2.263.674 5.056 5.056 0 0 1 2.209 2.595C9.075 5.84 7.655 7.28 7.066 9.225l-.07.246-.057.238-.206.038a4.67 4.67 0 0 0-2.804 1.815l-.155-.085a5.062 5.062 0 0 1-1.642-1.514.75.75 0 0 1 .365-1.132c1.643-.588 2.528-1.25 3.034-2.216.553-1.055.655-2.174.288-3.677a.75.75 0 0 1 .77-.928Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherSnowShowerNight',
    mixins: [icon]
};
</script>