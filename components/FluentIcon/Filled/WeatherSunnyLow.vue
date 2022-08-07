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
<path d="M12.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM19.03 4.97a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM6.59 13a5.5 5.5 0 1 1 10.819 0h3.841a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h3.84ZM6.75 16a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75ZM10.75 19a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM4.97 4.97a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 1 1-1.06 1.061L4.97 6.031a.75.75 0 0 1 0-1.061Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherSunnyLow',
    mixins: [icon]
};
</script>