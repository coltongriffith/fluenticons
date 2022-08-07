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
<path d="M11.194 2a1.25 1.25 0 0 0-1.215.955C9.288 5.797 8.444 8.905 7.594 12h5.156a.75.75 0 0 1 0 1.5H7.181l-.55 2h7.119a.75.75 0 0 1 0 1.5H6.222c-.325 1.198-.639 2.37-.932 3.5H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-2.54L14.023 2.928A1.25 1.25 0 0 0 12.816 2h-1.622Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRoadCone',
    mixins: [icon]
};
</script>