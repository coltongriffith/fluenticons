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
<path d="M12 2c5.523 0 10 4.477 10 10 0 .427-.027.847-.078 1.26A3.501 3.501 0 0 0 15 14v.05a2.5 2.5 0 0 0-2 2.45v5c0 .152.014.302.04.447A10.12 10.12 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Zm3.28 2.53A2.5 2.5 0 0 1 21 14v1h.542A1.5 1.5 0 0 1 23 16.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h.5v-1a2.5 2.5 0 0 1 2.5-2.5Zm-.393 8.42a1 1 0 1 0 .787-1.84 1 1 0 0 0-.787 1.84ZM17.5 14v1h2v-1a1 1 0 1 0-2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCheckmarkLock',
    mixins: [icon]
};
</script>