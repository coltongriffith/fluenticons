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
<path d="M12 3.001c3.168 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 11.314a3.687 3.687 0 0 1-3.692 3.682h-.582l-.003.004h-.264a.751.751 0 0 1-.083.167l-1 1.5a.75.75 0 0 1-1.248-.832l.559-.839h-1.83l-.002.004h-.397a.746.746 0 0 1-.083.166l-1 1.5a.75.75 0 1 1-1.248-.831l.56-.839H8.986L8.985 15h-.527a.75.75 0 0 1-.084.167l-1 1.5a.75.75 0 0 1-1.248-.832l.56-.839A3.687 3.687 0 0 1 3 11.314 3.687 3.687 0 0 1 6.693 7.63h.08c.262-2.55 2.058-4.63 5.227-4.63Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.126 18.834a.75.75 0 1 0 1.248.832l1-1.5a.75.75 0 1 0-1.248-.832l-1 1.5ZM11.334 19.874a.75.75 0 0 1-.208-1.04l1-1.5a.75.75 0 1 1 1.248.832l-1 1.5a.75.75 0 0 1-1.04.208Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherDrizzle',
    mixins: [icon]
};
</script>