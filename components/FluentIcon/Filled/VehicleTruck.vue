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
<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5a.75.75 0 0 1-.75.75h-1v-8.25c0-.11-.012-.219-.036-.325l-.739-3.326a3 3 0 0 0-2.928-2.349H8.453A3 3 0 0 0 5.525 7.6l-.74 3.325a1.5 1.5 0 0 0-.035.325v8.25h-1a.75.75 0 0 1-.75-.75V5.25Z" :fill="fill" :fill-opacity="opacity" />

<path d="M8.453 6a2.25 2.25 0 0 0-2.196 1.762l-.74 3.325a.75.75 0 0 0-.017.163v9c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75v-.75h3v.75c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75v-9a.748.748 0 0 0-.018-.163l-.739-3.325A2.25 2.25 0 0 0 15.547 6H8.453Zm-.732 2.087a.75.75 0 0 1 .732-.587h7.094a.75.75 0 0 1 .732.587l.536 2.413h-9.63l.536-2.413ZM7 20.25v-.75h2v.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25Zm10-.75v.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.75h2Zm-6.25-3h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5Zm-.745-2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVehicleTruck',
    mixins: [icon]
};
</script>