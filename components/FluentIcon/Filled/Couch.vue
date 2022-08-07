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
<path d="M19.25 10.75a2.75 2.75 0 0 1 2.745 2.582L22 13.5v2.75a1.75 1.75 0 0 1-1.607 1.744L20.25 18H3.75a1.75 1.75 0 0 1-1.744-1.607L2 16.25V13.5a2.75 2.75 0 0 1 5.419-.665l.036.165h9.09l.036-.165a2.751 2.751 0 0 1 2.669-2.085ZM5.75 6h12.5a1.75 1.75 0 0 1 1.744 1.606L20 7.75v2.075A3.752 3.752 0 0 0 15.813 12H8.188a3.752 3.752 0 0 0-4.19-2.175L4 7.75a1.75 1.75 0 0 1 1.606-1.744L5.75 6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCouch',
    mixins: [icon]
};
</script>