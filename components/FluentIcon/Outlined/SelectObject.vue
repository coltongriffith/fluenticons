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
<path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 4.75c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75ZM4.75 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 4.75 8ZM19.25 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75ZM8.75 20a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5h-6.5ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSelectObject',
    mixins: [icon]
};
</script>