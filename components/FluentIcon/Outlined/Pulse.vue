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
<path d="m8.462 6.81 3.284 13.616c.178.737 1.211.775 1.443.054l3.257-10.123.586 2.096a.75.75 0 0 0 .722.548h3.494a.75.75 0 0 0 0-1.5h-2.925l-1.105-3.95c-.2-.717-1.208-.736-1.436-.028l-3.204 9.957L9.226 3.574c-.182-.757-1.255-.769-1.454-.016L5.67 11.501H2.75a.75.75 0 0 0 0 1.5h3.496a.75.75 0 0 0 .725-.558L8.462 6.81Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPulse',
    mixins: [icon]
};
</script>