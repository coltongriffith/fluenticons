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
<path d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2H3.75ZM2.75 8.25a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM17.25 8.25a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM3.75 10.75a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM17.25 11.75a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM3.75 14.25a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM17.25 15.25a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM2.75 18.75a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1ZM9.75 11a2.25 2.25 0 0 1 4.5 0v4.75a1 1 0 1 0 2 0V11a4.25 4.25 0 0 0-8.5 0v4.75a1 1 0 1 0 2 0V11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextPositionSquare',
    mixins: [icon]
};
</script>