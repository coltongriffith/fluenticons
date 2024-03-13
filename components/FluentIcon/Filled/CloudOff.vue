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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.566 4.566a5.709 5.709 0 0 0-.7 1.904H6a4 4 0 0 0 0 8h10.689l4.03 4.03a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM21.5 13.75c0 1.25-.573 2.365-1.47 3.099L8.923 5.742a5.752 5.752 0 0 1 8.49 4.008h.087a4 4 0 0 1 4 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCloudOff',
    mixins: [icon]
};
</script>