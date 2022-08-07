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
<path d="M7 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14 4.25V5h4.75A2.25 2.25 0 0 1 21 7.25v13.5a.75.75 0 0 1-.75.75h-2.5a.5.5 0 0 1-.5-.5v-2.25a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5V21a.5.5 0 0 1-.5.5h-9.5a.75.75 0 0 1-.75-.75V4.25A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25ZM5.25 3.5a.75.75 0 0 0-.75.75V20H10V7.25A2.25 2.25 0 0 1 12.25 5h.25v-.75a.75.75 0 0 0-.75-.75h-6.5ZM18 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBuildingMultiple',
    mixins: [icon]
};
</script>