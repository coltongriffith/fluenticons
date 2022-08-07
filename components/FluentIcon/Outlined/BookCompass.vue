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
<path d="M13 5.75a.75.75 0 0 0-1.5 0v1.604a2.751 2.751 0 0 0-1.152 4.632l-1.294 3.236a.75.75 0 0 0 1.392.556l1.235-3.087a2.76 2.76 0 0 0 1.138 0l1.235 3.087a.75.75 0 0 0 1.392-.556l-1.294-3.236A2.751 2.751 0 0 0 13 7.354V5.75ZM11 10a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5ZM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1V18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBookCompass',
    mixins: [icon]
};
</script>