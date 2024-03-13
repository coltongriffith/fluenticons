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
<path d="M21.25 12.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5h18.5ZM20 4.25A2.25 2.25 0 0 0 17.75 2H6.25A2.25 2.25 0 0 0 4 4.25V10h1.5V4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75V10H20V4.25Zm-14.5 15V13.5H4v5.75a2.25 2.25 0 0 0 2.25 2.25h11.5A2.25 2.25 0 0 0 20 19.25V13.5h-1.5v5.75a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSplitHorizontal',
    mixins: [icon]
};
</script>