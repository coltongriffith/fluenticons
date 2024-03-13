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
<path d="M20.75 5c.69 0 1.25.56 1.25 1.25v2.259a.75.75 0 0 1-.697.748 2.75 2.75 0 0 0 0 5.486.75.75 0 0 1 .697.748v2.259c0 .69-.56 1.25-1.25 1.25H3.25C2.56 19 2 18.44 2 17.75v-2.259a.75.75 0 0 1 .697-.748 2.75 2.75 0 0 0 0-5.486A.75.75 0 0 1 2 8.509V6.25C2 5.56 2.56 5 3.25 5h17.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTicketHorizontal',
    mixins: [icon]
};
</script>