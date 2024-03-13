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
<path d="M3.75 4c.414 0 .75.308.75.688V6h6.75V4.687c0-.38.336-.687.75-.687s.75.308.75.688V6h6.75V4.687c0-.38.336-.687.75-.687s.75.308.75.688v4.125c0 .38-.336.687-.75.687s-.75-.308-.75-.688V7.5h-6.75v1.313c0 .38-.336.687-.75.687s-.75-.308-.75-.688V7.5H4.5v1.313c0 .38-.336.687-.75.687S3 9.192 3 8.812V4.689c0-.38.336-.688.75-.688ZM5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h5.5V11h-5.5ZM18.25 20.5h-5.5V11h5.5A2.75 2.75 0 0 1 21 13.75v4a2.75 2.75 0 0 1-2.75 2.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFixedWidth',
    mixins: [icon]
};
</script>