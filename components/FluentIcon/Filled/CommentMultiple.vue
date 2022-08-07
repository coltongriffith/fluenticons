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
<path d="M8.25 2a3.25 3.25 0 0 0-3.241 3.007c.08-.005.16-.007.241-.007h9.5A4.25 4.25 0 0 1 19 9.25v6.5c0 .08-.002.161-.007.241A3.25 3.25 0 0 0 22 12.75v-6A4.75 4.75 0 0 0 17.25 2h-9Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.99 16a3.25 3.25 0 0 1-3.24 3h-4.083L7 21.75c-.824.618-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-6.5A3.25 3.25 0 0 1 5.25 6h9.5A3.25 3.25 0 0 1 18 9.25v6.5c0 .084-.003.168-.01.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCommentMultiple',
    mixins: [icon]
};
</script>