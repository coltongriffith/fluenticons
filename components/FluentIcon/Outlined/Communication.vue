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
<path d="M12 4.5a8.5 8.5 0 0 0-6.016 14.505.75.75 0 0 1-1.061 1.06A9.971 9.971 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.971 9.971 0 0 1-2.923 7.065.75.75 0 0 1-1.061-1.06A8.5 8.5 0 0 0 12 4.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 8a5 5 0 0 0-3.534 8.537.75.75 0 0 1-1.06 1.061 6.5 6.5 0 1 1 9.188 0 .75.75 0 0 1-1.06-1.06A5 5 0 0 0 12 8Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 10.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM11 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCommunication',
    mixins: [icon]
};
</script>