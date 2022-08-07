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
<path d="M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6Zm5 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm4 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4H5.25ZM8 5.5V7h1.5V5.5h5V10H16V5.5h2.75c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16V17h-1c-.173 0-.34-.022-.5-.063V18.5h-5V11H8v7.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75H8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGanttChart',
    mixins: [icon]
};
</script>