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
<path d="M18.79 8.387a1 1 0 0 1-1.497 1.32L12 4.414 6.707 9.707l-.094.083a1 1 0 0 1-1.32-1.497l6-6 .094-.083a1 1 0 0 1 1.32.083l6 6 .083.094ZM5.21 15.613a1 1 0 0 1 1.497-1.32L12 19.586l5.293-5.293.094-.083a1 1 0 0 1 1.32 1.497l-6 6-.094.083a1 1 0 0 1-1.32-.083l-6-6-.083-.094Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledChevronUpDown',
    mixins: [icon]
};
</script>