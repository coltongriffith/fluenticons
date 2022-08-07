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
<path d="m7.293 8.293 3.995-4a1 1 0 0 1 1.32-.084l.094.083 4.006 4a1 1 0 0 1-1.32 1.499l-.094-.083-2.293-2.291v11.584a1 1 0 0 1-.883.993L12 20a1 1 0 0 1-.993-.884L11 19.001V7.41L8.707 9.707a1 1 0 0 1-1.32.084l-.094-.084a1 1 0 0 1-.084-1.32l.084-.094 3.995-4-3.995 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowSortUp',
    mixins: [icon]
};
</script>