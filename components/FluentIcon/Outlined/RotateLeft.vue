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
<path d="M15.015 5c.084 0 .167.002.25.005h.017a6.79 6.79 0 0 1 3.131.883C19.976 6.79 21 8.295 21 10c0 1.708-1.027 3.216-2.596 4.118A6.833 6.833 0 0 1 15 15h-.5a.75.75 0 1 1 0-1.5h.5c.963 0 1.856-.235 2.588-.636C18.744 12.23 19.5 11.184 19.5 10s-.756-2.23-1.912-2.864a5.357 5.357 0 0 0-2.363-.632L15 6.5H8.061l1.72 1.72a.75.75 0 0 1-.977 1.133L8.72 9.28h-.001l-3-3a.75.75 0 0 1 0-1.06l3-3 .085-.073a.75.75 0 0 1 .977 1.132L8.062 5H15.015Zm5.374 15.067a.5.5 0 0 1-.25.933H4a1 1 0 0 1-1-1v-9.133a.5.5 0 0 1 .75-.433l16.639 9.633Zm-3.974-.567L4.5 12.602V19.5h11.915Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedRotateLeft',
    mixins: [icon]
};
</script>