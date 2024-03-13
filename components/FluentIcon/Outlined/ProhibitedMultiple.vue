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
<path d="M2 10.75a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Zm8.75-7.25a7.25 7.25 0 0 0-5.63 11.819L15.32 5.12A7.22 7.22 0 0 0 10.75 3.5Zm0 14.5a7.25 7.25 0 0 0 5.63-11.819L6.18 16.38A7.22 7.22 0 0 0 10.75 18Zm2.5 4a8.714 8.714 0 0 1-5.553-1.988 9.837 9.837 0 0 0 4.396.396 7.25 7.25 0 0 0 8.315-8.315 9.838 9.838 0 0 0-.396-4.396A8.75 8.75 0 0 1 13.25 22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedProhibitedMultiple',
    mixins: [icon]
};
</script>