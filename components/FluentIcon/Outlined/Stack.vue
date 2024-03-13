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
<path d="M4 4h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm11 1.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM4.563 16A2 2 0 0 0 6.5 17.5h9a4 4 0 0 0 4-4v-5A2 2 0 0 0 18 6.563V13.5a2.5 2.5 0 0 1-2.5 2.5H4.563Zm2.5 2.5A2 2 0 0 0 9 20h7.25A5.75 5.75 0 0 0 22 14.25V11a2 2 0 0 0-1.5-1.937v5.187a4.25 4.25 0 0 1-4.25 4.25H7.063Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStack',
    mixins: [icon]
};
</script>