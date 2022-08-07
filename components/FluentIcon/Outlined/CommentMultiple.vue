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
<path d="M5.009 5.009A3.25 3.25 0 0 1 8.25 2h9A4.75 4.75 0 0 1 22 6.75v6a3.25 3.25 0 0 1-3.009 3.241A3.25 3.25 0 0 1 15.75 19h-5.083L7 21.75c-.824.618-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-7.5a3.25 3.25 0 0 1 3.009-3.241ZM6.518 5h9.232A3.25 3.25 0 0 1 19 8.25v6.232a1.75 1.75 0 0 0 1.5-1.732v-6a3.25 3.25 0 0 0-3.25-3.25h-9A1.75 1.75 0 0 0 6.518 5ZM5.25 17.5H6.5v2.75l3.667-2.75h5.583a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 8.25v7.5c0 .966.784 1.75 1.75 1.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCommentMultiple',
    mixins: [icon]
};
</script>