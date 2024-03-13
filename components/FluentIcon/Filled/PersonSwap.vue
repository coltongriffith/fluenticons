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
<path d="M15.75 13.997a2.249 2.249 0 0 1 2.25 2.25v.918c0 .285-.045.567-.13.836h-2.035a1.75 1.75 0 0 0-2.822-1.98l-2.5 2.498a1.75 1.75 0 0 0 0 2.477l.935.933c-.465.046-.948.07-1.452.07-3.42 0-5.943-1.073-7.486-3.237A2.75 2.75 0 0 1 2 17.166v-.92a2.249 2.249 0 0 1 2.249-2.249H15.75ZM9.996 2.002a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.78 17.784a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.061l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.498a.75.75 0 0 0 0-1.06l-2.5-2.502a.75.75 0 1 0-1.06 1.06l1.218 1.22h-6.877l1.22-1.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonSwap',
    mixins: [icon]
};
</script>