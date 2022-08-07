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
<path d="M4.5 4.688c0-.38-.336-.688-.75-.688S3 4.308 3 4.688v4.125c0 .38.336.687.75.687s.75-.308.75-.688V7.5h6.75v1.313c0 .38.336.687.75.687s.75-.308.75-.688V7.5h6.75v1.313c0 .38.336.687.75.687s.75-.308.75-.688V4.689c0-.38-.336-.688-.75-.688s-.75.308-.75.688V6h-6.75V4.687c0-.38-.336-.687-.75-.687s-.75.308-.75.688V6H4.5V4.687ZM5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 17.75v-4A2.75 2.75 0 0 0 18.25 11H5.75Zm5.5 1.5V19h-5.5c-.69 0-1.25-.56-1.25-1.25v-4c0-.69.56-1.25 1.25-1.25h5.5Zm1.5 6.5v-6.5h5.5c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFixedWidth',
    mixins: [icon]
};
</script>