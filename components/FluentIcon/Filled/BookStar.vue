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
<path d="M11.6 9.527a.678.678 0 0 1-.51.371l-1.454.212 1.052 1.025c.16.156.232.38.195.6l-.249 1.448 1.3-.684a.678.678 0 0 1 .632 0l1.3.684-.249-1.448a.678.678 0 0 1 .195-.6l1.052-1.025-1.453-.212a.678.678 0 0 1-.51-.37L12.25 8.21l-.65 1.317Z" :fill="fill" :fill-opacity="opacity" />
<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15Zm6.542 4.108-2.46.357a.678.678 0 0 0-.377 1.157l1.78 1.735-.42 2.45a.678.678 0 0 0 .984.716l2.201-1.157 2.2 1.157a.678.678 0 0 0 .985-.715l-.42-2.45 1.78-1.736a.678.678 0 0 0-.376-1.157l-2.46-.357-1.1-2.23a.678.678 0 0 0-1.217 0l-1.1 2.23Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBookStar',
    mixins: [icon]
};
</script>