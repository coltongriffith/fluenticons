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
<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l3.733 3.733A3.25 3.25 0 0 0 3 10.25v6.5A3.25 3.25 0 0 0 6.25 20h11.5c.358 0 .703-.058 1.024-.165l1.946 1.945a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM21 16.75c0 .324-.047.637-.136.932L10.182 7H14.5V4.5h-5v1.818L8 4.818V3.75a.75.75 0 0 1 .648-.743L8.75 3h6.5a.75.75 0 0 1 .75.75V7h1.75A3.25 3.25 0 0 1 21 10.25v6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBriefcaseOff',
    mixins: [icon]
};
</script>