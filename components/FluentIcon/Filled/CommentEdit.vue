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
<path d="M2 14.75A3.25 3.25 0 0 0 5.25 18H6v3.002a1 1 0 0 0 1.578.815l2.59-1.836.352-1.404c.162-.648.497-1.24.97-1.712l5.902-5.903A3.286 3.286 0 0 1 22 10.925V6.25A3.25 3.25 0 0 0 18.75 3H5.25A3.25 3.25 0 0 0 2 6.25v8.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="m18.098 11.67-5.902 5.902a2.684 2.684 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.684 2.684 0 0 0 1.248-.707l5.902-5.902a2.285 2.285 0 1 0-3.232-3.232Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCommentEdit',
    mixins: [icon]
};
</script>