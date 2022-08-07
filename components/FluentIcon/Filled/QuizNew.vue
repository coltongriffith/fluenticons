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
<path d="M10.518 8.998 10 7.73 9.48 8.998h1.037Z" :fill="fill" :fill-opacity="opacity" />

<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272A6.47 6.47 0 0 1 11 17.5c0-.886.177-1.73.498-2.5H5.75a.75.75 0 0 1 0-1.5h6.626A6.489 6.489 0 0 1 17.5 11a6.47 6.47 0 0 1 3.5 1.022V5.75A2.75 2.75 0 0 0 18.25 3H5.75Zm3.5 15.5h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5Zm1.444-13.036 2.248 5.502a.75.75 0 0 1-1.389.568l-.423-1.036H8.868l-.424 1.036a.75.75 0 0 1-1.388-.568l2.25-5.502a.75.75 0 0 1 1.388 0Zm5.806.283v1.25h1.25a.75.75 0 0 1 0 1.5H16.5v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5H15v-1.25a.75.75 0 0 1 1.5 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledQuizNew',
    mixins: [icon]
};
</script>