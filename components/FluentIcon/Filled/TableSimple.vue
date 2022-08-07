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
<path d="M17.75 21h-5v-8.25H21v5A3.25 3.25 0 0 1 17.75 21ZM21 11.25h-8.25V3h5A3.25 3.25 0 0 1 21 6.25v5ZM11.25 11.25V3h-5A3.25 3.25 0 0 0 3 6.25v5h8.25ZM3 12.75v5A3.25 3.25 0 0 0 6.25 21h5v-8.25H3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableSimple',
    mixins: [icon]
};
</script>