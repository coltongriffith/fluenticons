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
<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l3.733 3.733A3.25 3.25 0 0 0 3 10.25v6.5A3.25 3.25 0 0 0 6.25 20h11.5c.358 0 .703-.058 1.024-.165l1.946 1.945a.75.75 0 0 0 1.06-1.06L3.28 2.22ZM17.44 18.5H6.25a1.75 1.75 0 0 1-1.75-1.75v-6.5c0-.967.784-1.75 1.75-1.75h1.19l10 10Zm2.06-8.25v6.068l1.364 1.364A3.25 3.25 0 0 0 21 16.75v-6.5A3.25 3.25 0 0 0 17.75 7H16V3.75l-.007-.102A.75.75 0 0 0 15.25 3h-6.5l-.102.007A.75.75 0 0 0 8 3.75v1.068l1.5 1.5V4.5h5V7h-4.318l1.5 1.5h6.068c.967 0 1.75.783 1.75 1.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBriefcaseOff',
    mixins: [icon]
};
</script>