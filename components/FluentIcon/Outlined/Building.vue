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
<path d="M8.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7.5 13.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM8.5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM12 12.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM14.5 13.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v16.5c0 .414.336.75.75.75h14.503a.75.75 0 0 0 .75-.75v-9a2.25 2.25 0 0 0-2.25-2.25H16.5V4.25A2.25 2.25 0 0 0 14.25 2h-8ZM5.5 4.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v6c0 .414.336.75.75.75h2.003a.75.75 0 0 1 .75.75V20H16.5v-2.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75V20h-2V4.25ZM15 18v2h-2.25v-2H15Zm-3.75 0v2H9v-2h2.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBuilding',
    mixins: [icon]
};
</script>