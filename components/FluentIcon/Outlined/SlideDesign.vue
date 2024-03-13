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
<path d="M16.25 3.75a.75.75 0 0 1 .75.75V10h2.5a.75.75 0 0 1 0 1.5H17v5.55a2.512 2.512 0 0 0-1.5.158V4.5a.75.75 0 0 1 .75-.75ZM16.5 18a1.499 1.499 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM4 5.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75c0 1.744-.362 4.369-1.48 6.588-1.13 2.243-3.096 4.162-6.27 4.162a.75.75 0 0 1 0-1.5c2.426 0 3.96-1.414 4.93-3.338.837-1.66 1.206-3.632 1.297-5.162H4.75A.75.75 0 0 1 4 5.5ZM12.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSlideDesign',
    mixins: [icon]
};
</script>