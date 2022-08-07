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
<path d="M10.987 2.89a.75.75 0 1 0-1.474-.28L8.494 7.999 3.75 8a.75.75 0 1 0 0 1.5l4.46-.002-.946 5-4.514.002a.75.75 0 0 0 0 1.5l4.23-.002-.967 5.116a.75.75 0 1 0 1.474.278l1.02-5.395 5.474-.002-.968 5.119a.75.75 0 1 0 1.474.278l1.021-5.398 4.742-.002a.75.75 0 1 0 0-1.5l-4.458.002.946-5 4.512-.002a.75.75 0 1 0 0-1.5l-4.229.002.966-5.104a.75.75 0 0 0-1.474-.28l-1.018 5.385-5.474.002.966-5.107Zm-1.25 6.608 5.474-.003-.946 5-5.474.002.946-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNumberSymbol',
    mixins: [icon]
};
</script>