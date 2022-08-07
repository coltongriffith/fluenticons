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
<path d="M7.25 5.5a3.5 3.5 0 1 1 7 0v1h1a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 16.25v-7.5A2.25 2.25 0 0 1 6.25 6.5h1v-1Zm5.5 0a2 2 0 1 0-4 0v1h4v-1Zm-2 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.628 19.5A2.25 2.25 0 0 0 9.75 21h6A4.25 4.25 0 0 0 20 16.75v-4.5a2.25 2.25 0 0 0-1.5-2.122v6.622a2.75 2.75 0 0 1-2.75 2.75H7.628Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLockMultiple',
    mixins: [icon]
};
</script>