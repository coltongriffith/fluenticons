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
<path d="M13.409 2.512a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.174v9.652a1.75 1.75 0 0 0 1.093 1.622l7.498 3.04a3.75 3.75 0 0 0 2.818 0l7.498-3.04A1.75 1.75 0 0 0 22 16.826V7.175a1.75 1.75 0 0 0-1.093-1.622l-7.498-3.04Zm-7.36 5.472a.75.75 0 0 1 .967-.435L12 9.439l4.984-1.89a.75.75 0 1 1 .532 1.402L12.75 10.76v5.491a.75.75 0 0 1-1.5 0v-5.49L6.484 8.95a.75.75 0 0 1-.435-.967Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCube',
    mixins: [icon]
};
</script>