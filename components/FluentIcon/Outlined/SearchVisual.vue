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
<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v3a.75.75 0 0 1-1.5 0v-3a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3ZM6.25 3A3.25 3.25 0 0 0 3 6.25v3a.75.75 0 0 0 1.5 0v-3c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3ZM17.75 21A3.25 3.25 0 0 0 21 17.75v-3a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3ZM3 17.75A3.25 3.25 0 0 0 6.25 21h3a.75.75 0 0 0 0-1.5h-3a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSearchVisual',
    mixins: [icon]
};
</script>