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
<path d="M2.75 3a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75ZM4 8.25A2.25 2.25 0 0 1 6.25 6h2.5A2.25 2.25 0 0 1 11 8.25v10.5A2.25 2.25 0 0 1 8.75 21h-2.5A2.25 2.25 0 0 1 4 18.75V8.25Zm2.25-.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V8.25a.75.75 0 0 0-.75-.75h-2.5Zm6.75.75A2.25 2.25 0 0 1 15.25 6h2.5A2.25 2.25 0 0 1 20 8.25v7a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 13 15.25v-7Zm2.25-.75a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75h-2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAlignTop',
    mixins: [icon]
};
</script>