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
<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h9a3.25 3.25 0 0 1 3.25 3.25v9c0 .646-.189 1.248-.514 1.755l-5.692-5.376a2.25 2.25 0 0 0-3.09 0l-5.69 5.375A3.235 3.235 0 0 1 3 15.25v-9Zm10.747 2.746a1.248 1.248 0 1 0 0-2.496 1.248 1.248 0 0 0 0 2.496Z" :fill="fill" :fill-opacity="opacity" />

<path d="m11.264 12.72 5.642 5.327a3.235 3.235 0 0 1-1.656.453h-9a3.235 3.235 0 0 1-1.656-.453l5.64-5.327a.75.75 0 0 1 1.03 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M8.749 21a3.247 3.247 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.247 3.247 0 0 1 1.5 2.74v7c0 2.899-2.35 5.25-5.25 5.25h-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledImageMultiple',
    mixins: [icon]
};
</script>