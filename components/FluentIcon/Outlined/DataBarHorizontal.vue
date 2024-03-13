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
<path d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Zm6.5 13a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.499h13.5c.415 0 .75.335.75.749Zm-4-6.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1 0-1.499h9.5c.415 0 .75.335.75.749Zm-4-6.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataBarHorizontal',
    mixins: [icon]
};
</script>