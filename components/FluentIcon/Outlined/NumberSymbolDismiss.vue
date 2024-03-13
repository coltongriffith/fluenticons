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
<path d="M10.987 2.89a.75.75 0 1 0-1.474-.28L8.494 7.999 3.75 8a.75.75 0 1 0 0 1.5l4.46-.002-.946 5-4.514.002a.75.75 0 0 0 0 1.5l4.23-.002-.967 5.116a.75.75 0 1 0 1.474.278l1.02-5.395h2.668c.125-.529.314-1.032.56-1.501l-2.944.001.946-5 5.474-.002-.394 2.083a6.454 6.454 0 0 1 1.62-.491l.3-1.593 4.513-.002a.75.75 0 1 0 0-1.5l-4.229.002.966-5.104a.75.75 0 0 0-1.474-.28l-1.018 5.385-5.474.002.966-5.107Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.353a.5.5 0 0 0-.708.707l1.647 1.646-1.647 1.647a.5.5 0 0 0 .708.707l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.707L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.707L17.5 16.793l-1.646-1.646Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNumberSymbolDismiss',
    mixins: [icon]
};
</script>