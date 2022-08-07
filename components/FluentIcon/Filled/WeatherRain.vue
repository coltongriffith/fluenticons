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
<path d="M12 4c3.169 0 4.966 2.098 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.687 3.687 0 0 1-3.693 3.683h-.582l-1.583 2.636a.75.75 0 0 1-1.344-.658l.045-.092 1.15-1.887h-2.136l-1.583 2.637a.75.75 0 0 1-1.344-.658l.045-.092 1.15-1.887H8.988l-1.582 2.637a.75.75 0 0 1-1.344-.658l.045-.092 1.149-1.887h-.563A3.687 3.687 0 0 1 3 12.314a3.687 3.687 0 0 1 3.692-3.682h.08C7.036 6.08 8.832 4 12 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherRain',
    mixins: [icon]
};
</script>