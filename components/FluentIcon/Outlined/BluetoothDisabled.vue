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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L10 11.06v.498l.004.003v.871l-2.08 1.734a.75.75 0 0 0 .96 1.152l1.12-.934v5.863a.75.75 0 0 0 1.302.508l4.025-4.363 5.388 5.389a.75.75 0 0 0 1.061-1.061L3.28 2.22Zm8.222 10.343 2.768 2.768-2.766 2.997v-5.193l-.002-.572ZM15.946 9.434l-1.816 1.514-1.066-1.065 1.316-1.096-2.876-3.115v2.65l-1.5-1.5V3.754a.75.75 0 0 1 1.302-.508l4.711 5.104a.75.75 0 0 1-.07 1.085Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBluetoothDisabled',
    mixins: [icon]
};
</script>