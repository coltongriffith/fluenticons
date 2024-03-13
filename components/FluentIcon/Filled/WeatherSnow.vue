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
<path d="M9.75 18.151a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-6.75-1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 4.001c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.313a3.687 3.687 0 0 1-3.693 3.683H6.693A3.687 3.687 0 0 1 3 12.313a3.687 3.687 0 0 1 3.692-3.682h.08C7.036 6.08 8.832 4 12 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherSnow',
    mixins: [icon]
};
</script>