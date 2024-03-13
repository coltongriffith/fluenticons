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
<path d="M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.354a.5.5 0 0 0-.708.708L16.793 6.5l-1.647 1.646a.5.5 0 0 0 .708.708L17.5 7.207l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 6.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 5.793l-1.646-1.647ZM17.5 13a6.47 6.47 0 0 0 3.5-1.022v1.272A3.75 3.75 0 0 1 17.25 17h-4.5v2.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V17h-4.5A3.75 3.75 0 0 1 3 13.25V5.915A1.5 1.5 0 0 1 3.5 3h8.522A6.5 6.5 0 0 0 17.5 13Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledProjectionScreenDismiss',
    mixins: [icon]
};
</script>