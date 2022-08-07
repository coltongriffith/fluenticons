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
<path d="M8.75 2.002a.75.75 0 0 0-.75.75V4h3V2.75a.75.75 0 0 0-.75-.749h-1.5ZM11 5H8v.002H6.75a.75.75 0 0 0-.75.75V7h7V5.75a.75.75 0 0 0-.75-.75H11ZM17 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4 10a2 2 0 0 1 1.965-2h7.07A2 2 0 0 1 15 10v.006a5.75 5.75 0 0 1 5.5 5.744v5a.75.75 0 0 1-.75.75h-8.5v-3a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5v3h-3a.75.75 0 0 1-.75-.75V10Zm15 5.75a4.25 4.25 0 0 0-4-4.242V20h4v-4.25ZM12.25 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 4.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.75 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 4.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBuildingSkyscraper',
    mixins: [icon]
};
</script>