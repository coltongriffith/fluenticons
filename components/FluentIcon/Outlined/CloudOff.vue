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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.566 4.566a5.709 5.709 0 0 0-.7 1.904H6a4 4 0 0 0 0 8h10.689l4.03 4.03a.75.75 0 0 0 1.061-1.06L3.28 2.22Zm11.91 14.03H6a2.5 2.5 0 0 1 0-5h.756c.4 0 .73-.314.75-.713a4.225 4.225 0 0 1 .39-1.58l7.293 7.293Zm4.81-2.5c0 .835-.41 1.575-1.04 2.03l1.07 1.069A4 4 0 0 0 17.5 9.75h-.087a5.752 5.752 0 0 0-8.49-4.008l1.117 1.116a4.25 4.25 0 0 1 5.955 3.679c.02.4.349.713.749.713h.756a2.5 2.5 0 0 1 2.5 2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCloudOff',
    mixins: [icon]
};
</script>