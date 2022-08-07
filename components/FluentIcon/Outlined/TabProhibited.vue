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
<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272a6.471 6.471 0 0 1-.709-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.563a6.471 6.471 0 0 1 1.5.709V5.75A2.75 2.75 0 0 0 18.25 3H5.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-3.309-3.252a4 4 0 0 1 5.557-5.557l-5.557 5.557Zm1.06 1.06 5.558-5.556a4 4 0 0 1-5.557 5.557Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTabProhibited',
    mixins: [icon]
};
</script>