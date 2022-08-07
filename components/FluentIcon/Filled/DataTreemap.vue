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
<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3H9v18H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM10.5 21h7.25A3.25 3.25 0 0 0 21 17.75V15.5H10.5V21ZM21 14V6.25A3.25 3.25 0 0 0 17.75 3H10.5v11H21Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataTreemap',
    mixins: [icon]
};
</script>