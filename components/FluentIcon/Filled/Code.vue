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
<path d="m8.086 18.611 5.996-14.004a1 1 0 0 1 1.878.677l-.04.11-5.996 14.004a1 1 0 0 1-1.878-.677l.04-.11 5.996-14.004L8.086 18.61Zm-5.793-7.318 4-4a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l3.293 3.293a1 1 0 0 1-1.32 1.498l-.094-.084-4-4a1 1 0 0 1-.083-1.32l.083-.094 4-4-4 4Zm14-4.001a1 1 0 0 1 1.32-.083l.093.083 4.001 4.001a1 1 0 0 1 .083 1.32l-.083.095-4.001 3.995a1 1 0 0 1-1.497-1.32l.084-.095L19.584 12l-3.293-3.294a1 1 0 0 1 0-1.414Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCode',
    mixins: [icon]
};
</script>