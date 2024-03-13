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
<path d="M16 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M8 10.5A1.5 1.5 0 0 1 9.5 9h8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 8 15.5v-5Zm1.5 0v4.394l2.082-2.255a1.25 1.25 0 0 1 1.836 0l2.633 2.852-.01.009H17.5v-5h-8Zm3 3.356L10.982 15.5h3.036L12.5 13.856Z" :fill="fill" :fill-opacity="opacity" />

<path d="M5.75 4A3.75 3.75 0 0 0 2 7.75v8.5A3.75 3.75 0 0 0 5.75 20h12.5A3.75 3.75 0 0 0 22 16.25v-8.5A3.75 3.75 0 0 0 18.25 4H5.75ZM3.5 7.75A2.25 2.25 0 0 1 5.75 5.5h12.5a2.25 2.25 0 0 1 2.25 2.25v8.5a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25v-8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPictureInPicture',
    mixins: [icon]
};
</script>