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
<path d="M8.5 3.5a5 5 0 0 0-.229 9.995 7.479 7.479 0 0 0-.253 1.487 6.5 6.5 0 1 1 6.964-6.964 7.479 7.479 0 0 0-1.487.253A5 5 0 0 0 8.5 3.5ZM14.278 13.234a.75.75 0 1 0-1.056 1.066l1.215 1.203-1.217 1.217a.75.75 0 1 0 1.06 1.06l1.22-1.219 1.215 1.219a.75.75 0 0 0 1.062-1.06l-1.215-1.217 1.212-1.204a.75.75 0 0 0-1.057-1.064L15.5 14.444l-1.221-1.21Z" :fill="fill" :fill-opacity="opacity" />

<path d="M15.5 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-5 6.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM11.28 6.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1.5-1.502a.75.75 0 0 1 1.061-1.06l.97.971 2.469-2.47a.75.75 0 0 1 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShiftsAvailability',
    mixins: [icon]
};
</script>