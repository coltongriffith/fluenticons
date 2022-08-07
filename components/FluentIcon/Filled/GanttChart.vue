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
<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h3v3H6a2 2 0 1 0 0 4h2.25v9h-3A3.25 3.25 0 0 1 2 16.75v-9.5ZM9.25 20v-9H10v1a2 2 0 0 0 2 2h1v1a2 2 0 0 0 1.75 1.985V20h-5.5ZM12 10h2.75V4h-5.5v3H10a2 2 0 0 1 2 2v1Zm6 7h-2.25v3h3A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4h-3v6H16a2 2 0 0 1 2 2v1a2 2 0 1 1 0 4ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6Zm5 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm4 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGanttChart',
    mixins: [icon]
};
</script>