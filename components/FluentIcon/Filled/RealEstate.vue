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
<path d="M3 4a1 1 0 1 1 2 0h16a1 1 0 1 1 0 2H5v15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6 7.75A.75.75 0 0 1 6.75 7h13.5a.75.75 0 0 1 .75.75v8.5A2.75 2.75 0 0 1 18.25 19h-9.5A2.75 2.75 0 0 1 6 16.25v-8.5Zm4 4.71v3.04a.5.5 0 0 0 .5.5h1.75a.25.25 0 0 0 .25-.25V14.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1.25c0 .138.112.25.25.25h1.75a.5.5 0 0 0 .5-.5v-3.04a1 1 0 0 0-.35-.76L13.826 9.28a.5.5 0 0 0-.65 0L10.349 11.7a1 1 0 0 0-.349.759Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRealEstate',
    mixins: [icon]
};
</script>