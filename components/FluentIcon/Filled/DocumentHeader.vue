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
<path d="M17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.5a2.25 2.25 0 0 1-2.096 2.245L17.75 22H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2h11.5ZM8.505 5.005a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3h-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentHeader',
    mixins: [icon]
};
</script>