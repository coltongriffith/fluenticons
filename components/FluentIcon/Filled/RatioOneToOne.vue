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
<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4H5.25ZM8.5 8.75v6.5a.75.75 0 0 1-1.5 0v-5.099l-.334.223a.75.75 0 1 1-.832-1.248l1.5-1A.75.75 0 0 1 8.5 8.75Zm9 0v6.5a.75.75 0 1 1-1.5 0v-5.099l-.334.223a.75.75 0 1 1-.832-1.248l1.5-1a.75.75 0 0 1 1.166.624ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRatioOneToOne',
    mixins: [icon]
};
</script>